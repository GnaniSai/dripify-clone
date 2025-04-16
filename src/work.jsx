import owners from "./assets/owners.png";
import recruiters from "./assets/recruiters.png";
import sales from "./assets/sales.png";
import marketing from "./assets/marketing.png";
import recruit from "./assets/recruit.png";
import business from "./assets/business.png";
import rightArrow from "./assets/rightArrow.svg";

function Work() {
  return (
    <div className="flex justify-center flex-col gap-15 items-center mt-20">
      <h1 className="text-5xl max-md:text-2xl max-lg:text-4xl text-center leading-[-1.3] text-gray-900">
        Works best for
      </h1>
      <div className="w-[80%] max-md:w-full flex gap-3 flex-col justify-center items-center max-xl:w-[90%] max-lg:w-[98%]">
        <div className="w-full flex max-md:flex-col justify-center items-center gap-5 mb-3">
          <div className="w-[60%] h-[55vh] max-md:flex-col max-md:w-full flex justify-evenly max-md:overflow-hidden max-md:h-[70vh] max-md:justify-between max-md:items-center bg-[#eefcf0] rounded-2xl pt-10 pb-10">
            <div className="w-[50%] h-full flex flex-col justify-between gap-5 max-md:w-full">
              <div className="flex flex-col gap-5 max-md:p-5">
                <img src={business} alt="" className="w-10" />
                <h2 className="text-2xl max-lg:text-xl font-bold">
                  Business owners
                </h2>
                <p className="text-gray-500 max-lg:text-sm">
                  Running a business is not that easy these days! Put your sales
                  prospecting on complete autopilot, so you could focus on other
                  important things
                </p>
              </div>
              <div className="flex items-center gap-2 max-md:pl-5">
                <span className="align-bottom">Learn more</span>
                <img src={rightArrow} alt="" />
              </div>
            </div>

            <div className="h-full  max-md:self-end">
              <img src={owners} alt="" className="h-full" />
            </div>
          </div>

          <div className="w-[40%] h-[55vh] max-md:w-full flex bg-[#ffebf2] rounded-2xl p-10  max-md:flex-col max-md:overflow-hidden max-md:justify-between max-md:items-center ">
            <div className="w-full h-full flex justify-between flex-col gap-5">
              <div className="flex flex-col gap-5">
                <img src={sales} alt="" className="w-10" />
                <h2 className="text-2xl max-lg:text-xl font-bold">
                  Sales teams
                </h2>
                <p className="text-gray-500 max-lg:text-sm">
                  Run effective lead generation campaigns, onboard your entire
                  sales team to Dripify to manage their campaigns and view
                  analytics – all from the control panel of your favorite sales
                  automation software
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="align-bottom">Learn more</span>
                <img src={rightArrow} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-md:flex-col flex justify-center items-center gap-5 mb-5">
          <div className="w-[40%] h-[50vh] flex bg-[#eefcf0] rounded-2xl p-10 max-md:w-full">
            <div className="w-full h-full flex flex-col gap-5">
              <img src={marketing} alt="" className="w-10" />
              <h2 className="text-2xl max-lg:text-xl font-bold">
                Marketing agencies
              </h2>
              <p className="text-gray-500 max-lg:text-sm">
                can set prospecting campaigns in minutes, use
                hyper-personalization with 20+ variables, so your messages do
                not look automated, switch between LinkedIn accounts with just a
                few clicks, and more!
              </p>
            </div>
          </div>

          <div className="w-[60%] h-[50vh]  max-md:h-[70vh] max-md:w-full  flex justify-evenly bg-[#ffebf2] rounded-2xl pt-10 pb-10 max-md:flex-col max-md:overflow-hidden max-md:justify-between max-md:items-center">
            <div className="w-[60%] max-md:w-full h-full flex flex-col justify-between gap-5 max-md:p-5">
              <div className="flex flex-col gap-5">
                <img src={recruit} alt="" className="w-10" />
                <h2 className="text-2xl max-lg:text-xl font-bold">
                  Recruiters
                </h2>
                <p className="text-gray-500 max-lg:text-sm">
                  LinkedIn has already become the hottest career development
                  site on the globe. With Dripify, you can reach out to 2000+
                  potential candidates per month and fill your open vacancies
                  easily
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="align-bottom">Learn more</span>
                <img src={rightArrow} alt="" />
              </div>
            </div>

            <div className="h-full max-md:self-end">
              <img src={recruiters} alt="" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
