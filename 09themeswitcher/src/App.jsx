import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  // Theme functions
  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // themeMode can be used anywhere in your app
  useEffect(() =>{// ruuning on clint side

    document.querySelector('html').classList.remove("light", "dark")// we removing if any classname is light or dark not toggling

    document.querySelector('html').classList.add(themeMode)

    // document.body.classList.remove(themeMode === "light"? "dark" : "light");
    // document.body.classList.add(themeMode);
  }, [themeMode])// dependency

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn */}
 
             <ThemeBtn/>

          </div>
          <div className="w-full max-w-sm mx-auto">
            {/* CartBtn */}

            <Card/>

            </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;