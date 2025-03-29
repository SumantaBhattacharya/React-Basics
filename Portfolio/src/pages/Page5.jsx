const Page5 = () => {
    return (
      <div className="h-screen p-10 relative">
        <div className="h-full w-full overflow-hidden bg-black rounded-[100px]">
          <video src="/Video/moon.mp4" autoPlay loop muted className="h-full w-full object-cover object-center "></video>
          <h1 className="font-[FontOne] text-[20vw] uppercase -bottom-2 left-40 text-white absolute ">About</h1>
        </div>
      </div>
    );
  };
  
  export default Page5;
  
/*
using Vite, it doesn't support importing media files like mp4 from the src folder by default. Instead, you need to place the video in the public folder.
Vite uses ES modules (ESM) for handling imports, and it does not process static assets (like .mp4, .mp3, .webm) inside the src directory like it does with JavaScript or images (JPG/PNG/SVG).
*/