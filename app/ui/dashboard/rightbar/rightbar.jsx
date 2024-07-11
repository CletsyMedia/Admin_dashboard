import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
const rightbar = () => {
  return (
    <div className="fixed flex flex-col gap-4">
      <div className="bg-bgSoft  relative p-4 rounded-md">
        
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-45">
          <img src="/astronaut.png" alt="astro" className="w-full h-full object-cover z-10" />
        </div>
        <h1 className="mb-2 font-bold">🔥 Available Now</h1>

        <div className="flex flex-col gap-2 z-20">
          <h3 className="text-md font-bold">
            How to use the new version of our admin dashboard
          </h3>
          <small className="text-textSoft">Takes 4 minutes to learn at max</small>
          <p className="text-textSoft mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            quia.
          </p>
        </div>
        <button className="btn bg-[#5d57c9] text-white hover:bg-opacity-25">
          <MdPlayCircleFilled/>
          Watch
          </button>
      </div>
      <div className="bg-bgSoft p-4 rounded-md">
        
        <h1 className="mb-2 font-bold">🚀 Coming Soon</h1>

        <div className="flex flex-col gap-2 z-20">
          <h3 className="text-md font-bold">
            New server actions are available, partial pre-rendering is coming up!
          </h3>
          <small className="text-textSoft">Boost your productivity</small>
          <p className="text-textSoft mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            quia.
          </p>
        </div>
        <button className="btn bg-[#5d57c9] text-white hover-bg:opacity-25">
          <MdReadMore/>
          Learn
          </button>
      </div>
    </div>
  );
};

export default rightbar;
