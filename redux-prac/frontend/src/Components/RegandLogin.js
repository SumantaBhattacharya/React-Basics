import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

const RegandLogin = () => {
  const [hoverReg, setHoverReg] = useState(false);
  const [hoverLogin, setHoverLogin] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [activeTab, setActiveTab] = useState('register');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Form states
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (!registerData.username || !registerData.email || !registerData.password) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    if (registerData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      console.log('Registering user:', registerData);
      const response = await axiosInstance.post('/auth/signup', {
        username: registerData.username,
        email: registerData.email,
        password: registerData.password
      });

      console.log('Registration successful:', response.data);
      
      // Save token to localStorage
      if (response.data.data?.accessToken) {
        localStorage.setItem('accessToken', response.data.data.accessToken);
        console.log('Token saved to localStorage');
      }
      
      // Show success message and redirect
      alert('Registration successful! Please login.');
      setActiveTab('login'); // Switch to login tab
      setRegisterData({ username: '', email: '', password: '' }); // Clear form
      
    } catch (err) {
      console.error('Registration error:', err);
      // Show more specific error messages
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (!loginData.email || !loginData.password) {
      setError('Email and password are required');
      setLoading(false);
      return;
    }

    try {
      console.log('Logging in with:', loginData);
      
      // Send only email (backend expects only email, not username)
      const response = await axiosInstance.post('/auth/login', {
        email: loginData.email,
        password: loginData.password
      });

      console.log('Login successful:', response.data);
      
      // Save token to localStorage
      if (response.data.data?.accessToken) {
        localStorage.setItem('accessToken', response.data.data.accessToken);
        console.log('Token saved to localStorage');
        
        // Also save user info if needed
        if (response.data.data?.user) {
          localStorage.setItem('user', JSON.stringify(response.data.data.user));
        }
        
        // Redirect to home page
        navigate('/');
      } else {
        setError('No access token received from server');
      }
      
    } catch (err) {
      console.error('Login error:', err);
      console.error('Error response:', err.response?.data);
      
      // Show specific error messages
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.message.includes('Network Error')) {
        setError('Cannot connect to server. Make sure backend is running on port 8000.');
      } else if (err.message) {
        setError(err.message);
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Test backend connection on component mount
  useEffect(() => {
    const testBackend = async () => {
      try {
        const response = await axiosInstance.get('/auth/current-user', {
          // Don't send token for this test
          headers: { Authorization: undefined }
        });
        console.log('Backend connection test:', response.data);
      } catch (error) {
        // This is expected - just checking if backend responds
        console.log('Backend is reachable');
      }
    };
    
    testBackend();
  }, []);

  return (
    <main 
      aria-label="Registration and Login page"
      style={{
        width: '100%',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: isDesktop ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#282c34',
        color: 'white',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* Error Message */}
      {error && (
        <div 
          id="error-message"
          style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#ef4444',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            zIndex: 1000,
            maxWidth: '90%',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ marginRight: '10px' }}>⚠️</span>
          <span>{error}</span>
          <button 
            onClick={() => setError('')}
            style={{
              marginLeft: '15px',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '0',
              lineHeight: '1'
            }}
            aria-label="Close error message"
          >
            ✕
          </button>
        </div>
      )}

      {/* Mobile Toggle for Register/Login */}
      {!isDesktop && (
        <div 
          role="tablist" 
          aria-label="Authentication type"
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: '400px',
            marginBottom: '30px',
            borderBottom: '1px solid #4b5563'
          }}
        >
          <button
            role="tab"
            aria-selected={activeTab === 'register'}
            aria-controls="register-panel"
            id="register-tab"
            onClick={() => {
              setActiveTab('register');
              setError('');
            }}
            style={{
              flex: 1,
              padding: '16px',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'register' ? '2px solid #60a5fa' : 'none',
              color: activeTab === 'register' ? '#60a5fa' : '#9ca3af',
              fontSize: '1rem',
              fontWeight: activeTab === 'register' ? '600' : '400',
              cursor: 'pointer',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            Register
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'login'}
            aria-controls="login-panel"
            id="login-tab"
            onClick={() => {
              setActiveTab('login');
              setError('');
            }}
            style={{
              flex: 1,
              padding: '16px',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'login' ? '2px solid #60a5fa' : 'none',
              color: activeTab === 'login' ? '#60a5fa' : '#9ca3af',
              fontSize: '1rem',
              fontWeight: activeTab === 'login' ? '600' : '400',
              cursor: 'pointer',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            Login
          </button>
        </div>
      )}

      {/* Register Section */}
      {(isDesktop || activeTab === 'register') && (
        <section 
          role="tabpanel"
          id="register-panel"
          aria-labelledby="register-tab"
          tabIndex={0}
          style={{
            width: isDesktop ? '50%' : '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 0',
            boxSizing: 'border-box',
            opacity: loading && activeTab === 'register' ? 0.7 : 1,
            transition: 'opacity 0.3s ease'
          }}
        >
          <div style={{ width: '100%', maxWidth: '400px', padding: '0 30px' }}>
            <header>
              <h1 style={{ fontSize: '2rem', marginBottom: '8px', color: '#fff' }}>
                Welcome to{' '}
                <span style={{ color: '#6B7280', fontWeight: 600 }}>Scatch</span>
              </h1>
              <h2
                style={{
                  fontSize: '1.1rem',
                  marginBottom: '25px',
                  color: '#6B7280',
                }}
              >
                Create your account
              </h2>
            </header>

            <form 
              aria-label="Registration form"
              autoComplete="off"
              onSubmit={handleRegister}
              style={{ position: 'relative' }}
            >
              {loading && activeTab === 'register' && (
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px',
                    zIndex: 10
                  }}
                >
                  <div style={{ color: 'white' }}>Processing...</div>
                </div>
              )}
              
              <div style={{ marginBottom: '15px' }}>
                <label 
                  htmlFor="username"
                  style={{
                    display: 'block',
                    marginBottom: '6px',
                    fontSize: '0.9rem',
                    color: '#d1d5db'
                  }}
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={registerData.username}
                  onChange={handleRegisterChange}
                  aria-required="true"
                  required
                  disabled={loading}
                  style={{
                    backgroundColor: '#f4f4f5',
                    display: 'block',
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e4e4e7',
                    borderRadius: '6px',
                    boxSizing: 'border-box',
                    fontSize: '14px',
                    color: '#18181b',
                    outline: 'none',
                    opacity: loading ? 0.7 : 1,
                  }}
                  placeholder="Enter your username"
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label 
                  htmlFor="email"
                  style={{
                    display: 'block',
                    marginBottom: '6px',
                    fontSize: '0.9rem',
                    color: '#d1d5db'
                  }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  aria-required="true"
                  autoComplete="email"
                  required
                  disabled={loading}
                  style={{
                    backgroundColor: '#f4f4f5',
                    display: 'block',
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e4e4e7',
                    borderRadius: '6px',
                    boxSizing: 'border-box',
                    fontSize: '14px',
                    color: '#18181b',
                    outline: 'none',
                    opacity: loading ? 0.7 : 1,
                  }}
                  placeholder="Enter your email"
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label 
                  htmlFor="password"
                  style={{
                    display: 'block',
                    marginBottom: '6px',
                    fontSize: '0.9rem',
                    color: '#d1d5db'
                  }}
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  aria-required="true"
                  autoComplete="new-password"
                  required
                  minLength="6"
                  disabled={loading}
                  style={{
                    backgroundColor: '#f4f4f5',
                    display: 'block',
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e4e4e7',
                    borderRadius: '6px',
                    boxSizing: 'border-box',
                    fontSize: '14px',
                    color: '#18181b',
                    outline: 'none',
                    opacity: loading ? 0.7 : 1,
                  }}
                  placeholder="Enter your password (min. 6 characters)"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                aria-label={loading ? "Creating account..." : "Create my account"}
                onMouseEnter={() => !loading && setHoverReg(true)}
                onMouseLeave={() => !loading && setHoverReg(false)}
                onFocus={() => !loading && setHoverReg(true)}
                onBlur={() => !loading && setHoverReg(false)}
                style={{
                  padding: '12px 30px',
                  borderRadius: '50px',
                  fontSize: '15px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'inline-block',
                  background: 'transparent',
                  border: `2px solid ${loading ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.4)'}`,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  width: isDesktop ? 'auto' : '100%',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  opacity: loading ? 0.7 : 1,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    left: 0,
                    bottom: hoverReg && !loading ? '0' : '-100%',
                    borderRadius: hoverReg && !loading ? '0%' : '50%',
                    transition: 'all ease 0.4s',
                    zIndex: 9,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'relative',
                    zIndex: 11,
                    color: (hoverReg && !loading) ? 'black' : 'white',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {loading && activeTab === 'register' ? 'Creating Account...' : 'Create My Account'}
                </span>
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Login Section */}
      {(isDesktop || activeTab === 'login') && (
        <section 
          role="tabpanel"
          id="login-panel"
          aria-labelledby="login-tab"
          tabIndex={0}
          style={{
            width: isDesktop ? '50%' : '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 0',
            boxSizing: 'border-box',
            borderLeft: isDesktop ? '1px solid #4b5563' : 'none',
            opacity: loading && activeTab === 'login' ? 0.7 : 1,
            transition: 'opacity 0.3s ease'
          }}
        >
          <div style={{ width: '100%', maxWidth: '400px', padding: '0 30px' }}>
            <header>
              <h2
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '25px',
                  color: '#6B7280',
                }}
              >
                Login to your account
              </h2>
            </header>

            <form 
              aria-label="Login form"
              autoComplete="off"
              onSubmit={handleLogin}
              style={{ position: 'relative' }}
            >
              {loading && activeTab === 'login' && (
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px',
                    zIndex: 10
                  }}
                >
                  <div style={{ color: 'white' }}>Processing...</div>
                </div>
              )}
              
              <div style={{ marginBottom: '15px' }}>
                <label 
                  htmlFor="loginEmail"
                  style={{
                    display: 'block',
                    marginBottom: '6px',
                    fontSize: '0.9rem',
                    color: '#d1d5db'
                  }}
                >
                  Email Address
                </label>
                <input
                  id="loginEmail"
                  name="email"
                  type="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  aria-required="true"
                  autoComplete="email"
                  required
                  disabled={loading}
                  style={{
                    backgroundColor: '#f4f4f5',
                    display: 'block',
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e4e4e7',
                    borderRadius: '6px',
                    boxSizing: 'border-box',
                    fontSize: '14px',
                    color: '#18181b',
                    outline: 'none',
                    opacity: loading ? 0.7 : 1,
                  }}
                  placeholder="Enter your email"
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label 
                  htmlFor="loginPassword"
                  style={{
                    display: 'block',
                    marginBottom: '6px',
                    fontSize: '0.9rem',
                    color: '#d1d5db'
                  }}
                >
                  Password
                </label>
                <input
                  id="loginPassword"
                  name="password"
                  type="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  aria-required="true"
                  autoComplete="current-password"
                  required
                  disabled={loading}
                  style={{
                    backgroundColor: '#f4f4f5',
                    display: 'block',
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e4e4e7',
                    borderRadius: '6px',
                    boxSizing: 'border-box',
                    fontSize: '14px',
                    color: '#18181b',
                    outline: 'none',
                    opacity: loading ? 0.7 : 1,
                  }}
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                aria-label={loading ? "Logging in..." : "Login to your account"}
                onMouseEnter={() => !loading && setHoverLogin(true)}
                onMouseLeave={() => !loading && setHoverLogin(false)}
                onFocus={() => !loading && setHoverLogin(true)}
                onBlur={() => !loading && setHoverLogin(false)}
                style={{
                  width: isDesktop ? 'auto' : '100%',
                  padding: '12px 30px',
                  borderRadius: '50px',
                  fontSize: '15px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'inline-block',
                  background: 'transparent',
                  border: `2px solid ${loading ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.4)'}`,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  opacity: loading ? 0.7 : 1,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    left: 0,
                    bottom: hoverLogin && !loading ? '0' : '-100%',
                    borderRadius: hoverLogin && !loading ? '0%' : '50%',
                    transition: 'all ease 0.4s',
                    zIndex: 9,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'relative',
                    zIndex: 11,
                    color: (hoverLogin && !loading) ? 'black' : 'white',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {loading && activeTab === 'login' ? 'Logging in...' : 'Login'}
                </span>
              </button>

              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <a
                  href="/forgot-password"
                  style={{
                    color: '#60a5fa',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    opacity: loading ? 0.5 : 1,
                    pointerEvents: loading ? 'none' : 'auto',
                  }}
                  aria-label="Forgot password? Reset it here"
                >
                  Forgot password?
                </a>
              </div>
              
              {/* Registration link for mobile */}
              {!isDesktop && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                  <button
                    onClick={() => setActiveTab('register')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#60a5fa',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                    aria-label="Switch to registration"
                  >
                    Don't have an account? Register
                  </button>
                </div>
              )}
            </form>
          </div>
        </section>
      )}
    </main>
  );
};

export default RegandLogin;