import ToggleBtn from "../components/ToggleBtn.jsx";

const Home = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-24 py-16 md:py-24">

      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
        
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
         Wellcome to Chai aur Code
        </span>
      </h2>

      {/* Input box */}
      <ToggleBtn />

      {/* Trusted by */}
      <div className="mt-10 md:mt-12 text-neutral-500 text-sm md:text-base">
        Trusted by creators · Teams and startups · Agencies · Enterprises
      </div>
    </main>
  );
};

export default Home;
