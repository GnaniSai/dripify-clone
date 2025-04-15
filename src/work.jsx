import owners from "./assets/owners.png";

function Work() {
  return (
    <div className="flex justify-center flex-col gap-15 items-center mt-20">
      <h1 className="text-5xl text-center leading-[-1.3] text-gray-900">
        Works best for
      </h1>
      <div className="w-[80%] flex gap-3 flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center gap-5 mb-3">
          <div className="w-[60%] h-[50vh] flex justify-between bg-[#eefcf0] rounded-2xl">
            <div className="w-[50%] flex flex-col gap-5 p-6">
              <img src="" alt="" />
              <h2 className="text-2xl font-bold">Business owners</h2>
              <p className="text-gray-500">
                Running a business is not that easy these days! Put your sales
                prospecting on complete autopilot, so you could focus on other
                important things
              </p>
              <span>Learn more</span>
            </div>

            <div className="h-full">
              <img src={owners} alt="" className="h-full" />
            </div>
          </div>

          <div className="w-[40%] h-[50vh] flex justify-between bg-[#ffebf2] rounded-2xl">
            <div className="w-full flex flex-col gap-5 p-6">
              <img src="" alt="" />
              <h2 className="text-2xl font-bold">Business owners</h2>
              <p className="text-gray-500">
                Running a business is not that easy these days! Put your sales
                prospecting on complete autopilot, so you could focus on other
                important things
              </p>
              <span>Learn more</span>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center gap-5 mb-5">
          <div className="w-[40%] h-[50vh] flex justify-between bg-[#ffebf2] rounded-2xl">
            <div className="w-full flex flex-col gap-5 p-6">
              <img src="" alt="" />
              <h2 className="text-2xl font-bold">Business owners</h2>
              <p className="text-gray-500">
                Running a business is not that easy these days! Put your sales
                prospecting on complete autopilot, so you could focus on other
                important things
              </p>
              <span>Learn more</span>
            </div>
          </div>

          <div className="w-[60%] h-[50vh] flex justify-between bg-[#eefcf0] rounded-2xl">
            <div className="w-[50%] flex flex-col gap-5 p-6">
              <img src="" alt="" />
              <h2 className="text-2xl font-bold">Business owners</h2>
              <p className="text-gray-500">
                Running a business is not that easy these days! Put your sales
                prospecting on complete autopilot, so you could focus on other
                important things
              </p>
              <span>Learn more</span>
            </div>

            <div className="h-full">
              <img src={owners} alt="" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
