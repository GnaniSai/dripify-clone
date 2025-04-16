import Navbar from "./navbar";
import reviews from "./assets/reviews.svg";
import tick from "./assets/tick.svg";
import background1 from "./assets/background1.svg";
import background2 from "./assets/background2.svg";
import video from "./assets/video.mp4";
function Hero() {
  return (
    <div className="bg-[#6349f8] rounded-3xl font- flex flex-col gap-6 pt-4 items-center mb-50">
      <Navbar />

      <div className="flex flex-col gap-6 items-center max-sm:items-start relative">
        <div className="max-sm:w-full max-sm:pl-12">
          <img src={reviews} alt="reviews"className="max-sm:w-[80%]"/>
        </div>

        <div className="w-[60%] max-sm:w-full">
          <h1 className="text-7xl max-sm:text-5xl max-sm:text-start max-md:text-6xl text-center text-white font-extrabold tracking-wide leading-[1.2] p-2">
            You Only Need a Single Tool to Crush Sales
          </h1>
        </div>

        <div className="w-[35%] p-2 max-sm:w-full">
          <h2 className="text-lg text-center max-sm:text-start text-white leading-[1.5]">
            Reach hundreds of prospects per day on LinkedIn & through Email and
            close more deals on complete autopilot
          </h2>
        </div>

        <div className="flex flex-col gap-3 items-center max-sm:w-full justify-center p-2 w-[35%]">
          <div className="flex gap-4 items-center border-2 border-white rounded-xl p-1.5 bg-white w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your work email"
              className="w-full h-full outline-0 pl-2"
            />
            <button className="bg-[#111827] text-white pt-3 pb-3 pl-7 pr-7 font-bold rounded-lg text-nowrap h-full">
              Start now
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 text-white text-sm max-sm:text-xs max-sm:gap-2 flex-wrap">
            <p className="flex gap-2 items-center">
              <img src={tick} alt="tick" className="w-4 max-sm:hidden" />
              One Minute Setup
            </p>
            <p className="flex gap-2 items-center">
              <img src={tick} alt="tick" className="w-4 max-sm:hidden" />
              7-Day Free Trial
            </p>
            <p className="flex gap-2 items-center">
              <img src={tick} alt="tick" className="w-4 max-sm:hidden" />
              No Credit Card Required
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center w-full relative top-0">
          <div className="flex gap-4 items-center justify-between w-full">
            <div className="w-full">
              <img src={background1} alt="background1" className="w-full" />
            </div>
            <div className="w-full">
              <img src={background2} alt="background2" className="w-full" />
            </div>
          </div>
          <div className="w-full absolute top-6 flex justify-center">
            <video
              src={video}
              autoPlay={true}
              loop={true}
              muted
              className="rounded-2xl w-[70%] max-sm:w-[93%]"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
