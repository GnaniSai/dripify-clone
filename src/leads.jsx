function Leads() {
  return (
    <div className="mt-10 flex justify-center items-center">
      <div className="w-[75%] flex flex-col gap-3 justify-center items-center max-sm:w-full max-xl:w-[85%] max-lg:w-[90%]">
        <div className="flex items-center justify-center flex-col gap-3 w-[85%] max-lg:w-[90%] max-sm:w-full">
          <h2 className="text-5xl max-sm:text-2xl max-lg:text-4xl text-center leading-[-1.3] text-gray-900">
            Powerful lead generation software that brings incredible results
          </h2>
          <p className="text-md text-gray-600 text-center">
            On average each Dripify user achieves the following numbers
          </p>
        </div>

        <div className="flex max-sm:flex-col items-center justify-between w-full mt-10 gap-10 flex-wrap">
          <div className="w-[30%] max-sm:w-[50%] max-lg:w-[20%] h-[20vh] rounded-2xl flex flex-col items-center justify-center gap-3">
            <p className="font-bold text-6xl max-lg:text-5xl">9000</p>
            <span className="text-gray-500 text-sm text-center">
              Leads reached per mo.
            </span>
          </div>
          <div className="w-[30%]  max-sm:w-[50%]  max-lg:w-[20%] h-[20vh] rounded-2xl flex flex-col items-center justify-center gap-3">
            <p className="font-bold text-6xl max-lg:text-5xl">+182%</p>
            <span className="text-gray-500 text-sm text-center">
              Close rate increase{" "}
            </span>
          </div>
          <div className="w-[30%]  max-sm:w-[50%]  max-lg:w-[20%] h-[20vh] rounded-2xl flex flex-col items-center justify-center gap-3">
            <p className="font-bold text-6xl max-lg:text-5xl">550</p>
            <span className="text-gray-500 text-sm text-center">
              Replies received per mo.
            </span>
          </div>
          <div className="w-full flex max-sm:flex-col items-center justify-between mt-5 gap-16">
            <div className="w-full h-[20vh] rounded-2xl flex flex-col items-center justify-center gap-3">
              <p className="font-bold text-6xl max-lg:text-5xl">X10</p>
              <span className="text-gray-500 text-sm text-center">
                Overall productivity
              </span>
            </div>
            <div className="w-full h-[20vh] rounded-2xl flex flex-col items-center justify-center gap-3">
              <p className="font-bold text-6xl max-lg:text-5xl">1000%</p>
              <span className="text-gray-500 text-sm text-center">
                More ROI
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10">
          <button className="bg-[#7760f9] pl-7 pr-7 pt-3 pb-3 rounded-lg text-white font-bold">
            Start free trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Leads;
