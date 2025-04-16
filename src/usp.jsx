import uspBackground from "./assets/uspBackground.png";
import drip from "./assets/drip.png";
import find from "./assets/find.png";
import analytics from "./assets/analytics.png";
import inbox from "./assets/inbox.png";
function USP() {
  return (
    <div className="flex flex-col gap-3 items-center mt-20 mb-20">
      <div className="w-[65%] mb-6 max-sm:w-full max-xl:w-[80%] max-lg:w-[90%]">
        <h2 className="text-5xl max-sm:text-2xl max-lg:text-4xl text-center text-gray-900 leading-[1.5]">
          Run cold outreach campaigns on LinkedIn and through Email. Hassle-free
        </h2>
      </div>

      <div className="w-[80%] flex flex-col gap-6 text-xl text-gray-500 max-sm:hidden max-lg:hidden">
        <div className="flex gap-4 justify-between items-center w-[85%] max-xl:w-[90%]">
          <span className="flex gap-2 items-center text-gray-700">
            <img src={drip} alt="drip" /> Drip campaigns
          </span>
          <span className="flex gap-2 items-center">
            <img src={find} alt="find" className="pt-1" /> Find emails
          </span>
          <span className="flex gap-2 items-center">
            <img src={analytics} alt="analytics" /> Analytics
          </span>
          <span className="flex gap-2 items-center">
            <img src={inbox} alt="inbox" /> Inbox
          </span>
        </div>
        <div className="w-full h-[1px] bg-gray-300">
          <div className="w-[28%] h-full bg-blue-800"></div>
        </div>
      </div>

      <div className="w-[80%] h-[80vh] max-lg:h-[60vh] max-xl:w-[90%] max-sm:h-full max-sm:w-full bg-[#f2f0ff] rounded-2xl mt-6">
        <div className="flex items-center justify-between max-lg:justify-center  max-sm:flex-col w-full h-full">
          <div className="w-[40%] max-sm:w-full max-xl:w-[70%] max-lg:w-[90%] flex flex-col gap-10 p-20 max-sm:p-5">
            <h2 className="text-3xl font-bold w-full">
              Automate sales on LinkedIn & email
            </h2>
            <p className="text-md text-gray-600 w-full">
              Contact thousands of prospects per month on LinkedIn and via Email
              through fully automated & hyper-personalized sequence campaigns
            </p>
            <div className="flex items-center w-full">
              <a
                href="#"
                className="pl-7 pr-7 pt-3 pb-3 font-bold rounded-lg border-1 border-gray-400 text-md bg-white"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="h-full max-xl:w-full max-sm:hidden max-lg:hidden">
            <img src={uspBackground} alt="uspBackground" className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default USP;
