import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [isProducts, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortOption, setSortOption] = useState('default');
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    
    // Responsive width tracking
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    useEffect(() => {
        const incomingProducts = async () => {
            try {
                setLoading(true);
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        incomingProducts();
    }, []);
    
    // Get unique categories from the API data
    const categories = React.useMemo(() => {
        const uniqueCategories = ['all'];
        isProducts.forEach(product => {
            if (!uniqueCategories.includes(product.category)) {
                uniqueCategories.push(product.category);
            }
        });
        return uniqueCategories;
    }, [isProducts]);
    
    // Apply filters and sorting whenever category or sort option changes
    useEffect(() => {
        let result = [...isProducts];
        
        // Filter by category
        if (selectedCategory !== 'all') {
            result = result.filter(product => 
                product.category === selectedCategory
            );
        }
        
        // Apply sorting (removed name-asc and name-desc)
        switch(sortOption) {
            case 'price-low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                result.sort((a, b) => b.rating.rate - a.rating.rate);
                break;
            default:
                // Keep original order
                break;
        }
        
        setFilteredProducts(result);
    }, [selectedCategory, sortOption, isProducts]);
    
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    // Calculate grid columns based on screen size
    const getGridColumns = () => {
        if (isMobile) return 1;
        if (isTablet) return 2;
        return 3;
    };

    // Format category name for display
    const formatCategoryName = (category) => {
        if (category === 'all') return 'All Products';
        if (category === "men's clothing") return "Men's Clothing";
        if (category === "women's clothing") return "Women's Clothing";
        if (category === 'jewelery') return 'Jewelry';
        return category.charAt(0).toUpperCase() + category.slice(1);
    };

    return (
        <div style={{
            marginTop: "1rem", 
            backgroundColor: "#282C34", 
            minHeight: "100vh", 
            boxSizing: "border-box",
            padding: isMobile ? "1rem" : "2rem",
            overflowX: "hidden", // Prevent horizontal scrolling
            width: "100%",
            maxWidth: "100vw" // Ensure it doesn't exceed viewport
        }} className="productsWrapper">
            
            {/* Page Header */}
            <div style={{
                textAlign: "center",
                marginBottom: isMobile ? "2rem" : "3rem",
                width: "100%",
                maxWidth: "100%",
                boxSizing: "border-box"
            }}>
                <h1 style={{
                    fontWeight: "bold",
                    color: "#fff",
                    margin: 0,
                    fontSize: isMobile ? "1.8rem" : "2.5rem",
                    padding: isMobile ? "0 0.5rem" : "0"
                }}>
                    Our Products
                </h1>
                <div style={{
                    height: "4px", 
                    width: isMobile ? "48px" : "64px", 
                    borderRadius: "9999px", 
                    backgroundColor: "#6b7280", 
                    margin: "16px auto"
                }}></div>
                <p style={{
                    fontSize: isMobile ? "0.9rem" : "1rem", 
                    color: "#6b7280", 
                    maxWidth: "600px", 
                    margin: "0 auto", 
                    lineHeight: "1.5",
                    padding: isMobile ? "0 0.5rem" : "0"
                }}>
                    Discover amazing products with great quality and prices
                </p>
            </div>

            {/* Filter and Sort Controls */}
            <div style={{
                width: "100%",
                maxWidth: "100%",
                margin: "0 auto 2rem auto",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "1rem",
                alignItems: isMobile ? "stretch" : "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
                padding: isMobile ? "0 0.5rem" : "0"
            }}>
                {/* Category Filter */}
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    justifyContent: isMobile ? "center" : "flex-start",
                    width: "100%",
                    maxWidth: "100%",
                    overflowX: "auto", // Allow horizontal scrolling for categories if needed
                    paddingBottom: "0.5rem",
                    scrollbarWidth: "none", // Hide scrollbar for Firefox
                    msOverflowStyle: "none", // Hide scrollbar for IE/Edge
                    "::-webkit-scrollbar": {
                        display: "none" // Hide scrollbar for Chrome/Safari
                    }
                }}>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            style={{
                                padding: "0.5rem 1rem",
                                backgroundColor: selectedCategory === category ? "#60a5fa" : "#374151",
                                border: "none",
                                borderRadius: "20px",
                                color: selectedCategory === category ? "#1f2937" : "#d1d5db",
                                fontSize: isMobile ? "0.8rem" : "0.875rem",
                                fontWeight: "600",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                whiteSpace: "nowrap",
                                flexShrink: 0 // Prevent buttons from shrinking
                            }}
                        >
                            {formatCategoryName(category)}
                        </button>
                    ))}
                </div>

                {/* Sort Dropdown */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    width: isMobile ? "100%" : "auto",
                    justifyContent: isMobile ? "center" : "flex-start"
                }}>
                    <span style={{
                        color: "#9ca3af",
                        fontSize: "0.875rem",
                        whiteSpace: "nowrap"
                    }}>
                        Sort by:
                    </span>
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        style={{
                            padding: "0.5rem 1rem",
                            backgroundColor: "#374151",
                            border: "1px solid #4b5563",
                            borderRadius: "6px",
                            color: "#fff",
                            fontSize: "0.875rem",
                            outline: "none",
                            cursor: "pointer",
                            width: isMobile ? "100%" : "180px",
                            maxWidth: isMobile ? "100%" : "180px"
                        }}
                    >
                        <option value="default">Default</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                    </select>
                </div>
            </div>

            {/* Results Count */}
            <div style={{
                width: "100%",
                maxWidth: "100%",
                margin: "0 auto 1.5rem auto",
                color: "#9ca3af",
                fontSize: "0.875rem",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "0.5rem" : "0",
                justifyContent: "space-between",
                alignItems: isMobile ? "flex-start" : "center",
                boxSizing: "border-box",
                padding: isMobile ? "0 0.5rem" : "0"
            }}>
                <span style={{ textAlign: isMobile ? "center" : "left", width: "100%" }}>
                    Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                    {selectedCategory !== 'all' && ` in ${formatCategoryName(selectedCategory)}`}
                </span>
                {sortOption !== 'default' && (
                    <span style={{ 
                        textAlign: isMobile ? "center" : "right",
                        width: "100%"
                    }}>
                        Sorted by: {
                            sortOption === 'price-low' ? 'Price: Low to High' :
                            sortOption === 'price-high' ? 'Price: High to Low' :
                            sortOption === 'rating' ? 'Highest Rated' :
                            'Default'
                        }
                    </span>
                )}
            </div>

            {/* Loading State */}
            {loading ? (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "50vh",
                    color: "#60a5fa",
                    fontSize: "1.2rem",
                    width: "100%"
                }}>
                    Loading products...
                </div>
            ) : (
                /* Products Grid - FIXED FOR RESPONSIVENESS */
                <section style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? "280px" : isTablet ? "300px" : "320px"}, 1fr))`,
                    gap: isMobile ? "1rem" : "1.5rem",
                    width: "100%",
                    maxWidth: "100%",
                    margin: "0 auto",
                    boxSizing: "border-box",
                    padding: isMobile ? "0 0.5rem" : "0"
                }}>
                    {filteredProducts.map((product) => (
                        <article 
                            className="card" 
                            key={product.id}
                            tabIndex={0}
                            role='button'
                            aria-label={`View details for ${product.title}`}
                            style={{
                                backgroundColor: "#1f2937",
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                border: "1px solid #374151",
                                width: "100%", // Ensure it takes full width of grid cell
                                maxWidth: "100%", // Prevent overflow
                                ":hover": {
                                    transform: "translateY(-5px)",
                                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
                                    borderColor: "#4b5563"
                                }
                            }}
                            onClick={() => {
                                navigate(`/product/${product.id}`)
                            }}
                            onKeyDown={(e) => {
                                if(e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    navigate(`/product/${product.id}`)
                                }
                            }}
                        >
                            {/* Product Image */}
                            <figure style={{
                                width: "100%", 
                                backgroundColor: "#111827", 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center", 
                                padding: "1rem", 
                                position: "relative",
                                height: isMobile ? "200px" : "250px",
                                margin: 0,
                                boxSizing: "border-box"
                            }}>
                                <img 
                                    src={product.image} 
                                    alt={product.title} 
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        objectFit: "contain",
                                        width: "auto",
                                        height: "auto"
                                    }}
                                />
                                {/* Rating Badge */}
                                <div style={{
                                    position: "absolute",
                                    bottom: "12px",
                                    left: "12px",
                                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                                    color: "#fbbf24",
                                    padding: "4px 8px",
                                    borderRadius: "4px",
                                    fontSize: "0.75rem",
                                    fontWeight: "600",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px"
                                }}>
                                    <span>★</span>
                                    <span>{product.rating.rate}</span>
                                </div>
                            </figure>

                            {/* Product Info */}
                            <div 
                                style={{
                                    padding: isMobile ? "1rem" : "1.5rem",
                                    flexGrow: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "100%",
                                    boxSizing: "border-box"
                                }}
                            >
                                {/* Title */}
                                <h2 
                                    style={{
                                        fontSize: isMobile ? "1rem" : "1.1rem",
                                        fontWeight: "600",
                                        color: "#fff",
                                        margin: "0 0 0.75rem 0",
                                        lineHeight: "1.4",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                        minHeight: "2.8rem",
                                        wordBreak: "break-word"
                                    }}
                                >
                                    {product.title}
                                </h2>

                                {/* Price */}
                                <div 
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: "1rem",
                                        flexWrap: "wrap",
                                        gap: "0.5rem"
                                    }}
                                >
                                    <span 
                                        style={{
                                            fontSize: "1.5rem", 
                                            fontWeight: "bold", 
                                            color: "#60a5fa", 
                                            margin: 0
                                        }}
                                        aria-label={`Price: $${product.price}`}
                                    >
                                        ${product.price.toFixed(2)}
                                    </span>
                                    
                                    {/* Review Count */}
                                    <div 
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "4px",
                                            color: "#9ca3af",
                                            fontSize: "0.9rem"
                                        }}
                                    >
                                        <span>({product.rating.count} reviews)</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p 
                                    style={{
                                        fontSize: "0.875rem",
                                        color: "#9ca3af",
                                        margin: "0 0 1.5rem 0",
                                        lineHeight: "1.5",
                                        flexGrow: 1,
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                        wordBreak: "break-word"
                                    }}
                                >
                                    {product.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </section>
            )}

            {/* No Results Message */}
            {!loading && filteredProducts.length === 0 && (
                <div style={{
                    textAlign: "center",
                    color: "#9ca3af",
                    padding: "3rem",
                    width: "100%",
                    maxWidth: "100%",
                    margin: "0 auto",
                    boxSizing: "border-box"
                }}>
                    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📭</div>
                    <h3 style={{ color: "#fff", marginBottom: "0.5rem" }}>No products found</h3>
                    <p>Try selecting a different category or adjusting your filters.</p>
                    <button
                        onClick={() => {
                            setSelectedCategory('all');
                            setSortOption('default');
                        }}
                        style={{
                            marginTop: "1rem",
                            padding: "0.75rem 1.5rem",
                            backgroundColor: "#60a5fa",
                            border: "none",
                            borderRadius: "6px",
                            color: "#fff",
                            fontSize: "0.875rem",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }}
                    >
                        Reset Filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default Products;