import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="bg-orange-500 p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
          <h1
            className="text-3xl font-semibold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Currency Converter
          </h1>

        </div>
      </div>
    </>
  );
}

export default App;

/*
Name: Code Runner
Id: formulahendry.code-runner
Description: Run C, C++, Java, JS, PHP, Python, Perl, Ruby, Go, Lua, Groovy, PowerShell, CMD, BASH, F#, C#, VBScript, TypeScript, CoffeeScript, Scala, Swift, Julia, Crystal, OCaml, R, AppleScript, Elixir, VB.NET, Clojure, Haxe, Obj-C, Rust, Racket, Scheme, AutoHotkey, AutoIt, Kotlin, Dart, Pascal, Haskell, Nim, 
Version: 0.12.2
Publisher: Jun Han
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner
*/