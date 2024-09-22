import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  let [isColor, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: isColor}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-md bg-white rounded-full p-3">
        <button className="outline-none bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300" onClick={() => setColor("green")}>Green</button>
        <button className="ml-4 bg-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300" onClick={()=> setColor("purple")}>Purple</button>
        <button className="ml-4 bg-yellow-500 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-700 transition duration-300" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="ml-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300" onClick={() => setColor("blue")}>Blue</button>
        <button
  className="ml-4 bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700 hover:text-white transition duration-300"
  onClick={() => setColor("black")}
>
  Click Me
</button>

        </div>
      </div>
    </div>
  );
}

export default App;
// tailwind is postcss plugin
// onlcik espects function
// onClick(setColor("red")) returns function not inside
// setColor itself a function
// function inside function