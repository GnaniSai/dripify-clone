import abtest from "./assets/abtest.png";
import message from "./assets/message.svg";
import secure from "./assets/secure.svg";
import text from "./assets/text.svg";
import ai from "./assets/ai.svg";
function ABTest() {
  return (
    <div className="flex gap-6 justify-center items-center mt-30 mb-30">
      <div className="w-[80%] flex max-sm:flex-col max-sm:w-full max-sm:items-center  justify-between gap-15">
        <div className="w-full">
          <img src={abtest} alt="abtest" className="w-[85%] max-sm:w-full" />
        </div>

        <div className="flex flex-col gap-5 w-[90%] mt-4">
          <div>
            <span className="text-xs pr-3 pl-3 pt-2 pb-2 bg-[#7760f91a] text-[#7760f9] text-nowrap rounded-2xl font-bold">
              COMING SOON
            </span>
          </div>
          <h2 className="text-5xl max-sm:text-3xl">A/B test your message</h2>
          <p className="text-gray-500">
            Test different versions of your emails, LinkedIn messages and
            connection requests to identify the winner variant that produces the
            best values for the performance metrics
          </p>

          <div className="w-full flex max-sm:flex-col  justify-around mt-10 flex-wrap">
            <div className="flex items-start  gap-4 w-[50%] mb-10 max-sm:w-full">
              <div>
                <img src={message} alt="message" className="w-[30px]" />
              </div>
              <div className="w-full">
                <p className="w-full text-sm">
                  Use 20+ personalization variables in your message{" "}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 w-[50%] mb-10 max-sm:w-full">
              <div>
                <img src={ai} alt="ai" className="w-[30px]" />
              </div>
              <div className="w-full">
                <p className="w-full text-sm">
                  Maximize your response rate with AI-powered unique
                  personalization
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 w-[50%] max-sm:w-full">
              <div>
                <img src={secure} alt="secure" className="w-[30px]" />
              </div>
              <div className="w-full text-sm">
                <p className="w-full">
                  Get creative using rare variables with Alternative Message
                  backup
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 w-[50%] max-sm:w-full">
              <div>
                <img src={text} alt="text" className="w-[30px]" />
              </div>
              <div className="w-full">
                <p className="w-full text-sm">
                  Remove unnecessary text and symbols from enrichment data
                  automatically
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full mt-5">
            <a
              href="#"
              className="pl-7 pr-7 pt-3 pb-3 font-bold rounded-lg border-1 border-gray-400 text-md bg-white"
            >
              Notify me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ABTest;
