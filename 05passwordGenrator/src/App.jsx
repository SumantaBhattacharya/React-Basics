import "./App.css";
import { useCallback, useState, useEffect, useRef } from "react";

export default function App() {
  const [isLength, setLength] = useState(8);
  const [isCheckedNumbers, setCheckedNumbers] = useState(false);
  const [isCheckedSpecialChars, setCheckedSpecialChars] = useState(false);
  const [ispassword, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(ispassword)
      .then(() => {
        setAlertMessage("Password copied to clipboard!");
        setTimeout(() => setAlertMessage(""), 3000);
      });
  }, [ispassword]);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isCheckedNumbers) {//true 
      string += "0123456789";
    }

    if (isCheckedSpecialChars) {
      string += "!@#$%^&*()";
    }

    for (let index = 1; index <= isLength; index++) {
      const char = Math.floor(Math.random() * string.length + 1);
      password += string.charAt(char);// random one string
    }//ye utne bar he chalega jitna ki length hoga

    setPassword(password);
  }, [isLength, isCheckedNumbers, isCheckedSpecialChars]);

  useEffect(() => {
    passwordGenerator();
  }, [isLength, isCheckedNumbers, isCheckedSpecialChars, passwordGenerator]);

  return (
    <div className="main w-full h-80 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800">
      <div style={{ borderBottom: "2px solid black", marginBottom: "1vw" }}>
        <h1 className="text-center text-3xl font-bold text-blue-500" style={{ fontWeight: 600 }}>
          Password Generator
        </h1>
      </div>

      <form action="">
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            style={{ border: "none", borderRadius: "10px", flex: 1 }}
            type="text"
            value={ispassword}
            className="outline-none py-2 px-3 mr-2"
            placeholder="Your generated password"
            readOnly
            ref={passwordRef}
          />
          <button
            type="button"
            style={{ fontWeight: "600", borderRadius: "10px" }}
            className="outline-none bg-blue-700 text-white py-2 px-3 mr-2 shrink-0"
            onClick={copyToClipboard}
          >
            Copy
          </button>
          {alertMessage && (
            <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded shadow-md">
              {alertMessage}
            </div>
          )}
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={isLength}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {isLength}</label>
          </div>
          <br />
          <div className="flex items-center gap-x-1 block">
            <input
              type="checkbox"
              defaultChecked={isCheckedNumbers}
              id="checkedInput"
              onChange={() => setCheckedNumbers(!isCheckedNumbers)}
            />
            <label htmlFor="checkedInput">Include numbers</label>
          </div>
        </div>
        <div className="flex items-center gap-x-1 block">
          <input
            type="checkbox"
            defaultChecked={isCheckedSpecialChars}
            id="checkedCharacters"
            onChange={() => setCheckedSpecialChars(!isCheckedSpecialChars)}
          />
          <label htmlFor="checkedCharacters">Include special characters</label>
        </div>
      </form>
    </div>
  );
}
