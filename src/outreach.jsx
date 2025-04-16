import outreach from "./assets/outreach.png";
import message from "./assets/message.svg";
import secure from "./assets/secure.svg";
import text from "./assets/text.svg";
import ai from "./assets/ai.svg";
function Outreach() {
  return (
    <div className="mt-30 flex justify-center items-center">
      <div className="w-[78%] flex flex-col gap-3 justify-center items-center max-sm:w-full">
        <div className="flex items-center justify-center flex-col gap-3 w-[65%] max-sm:w-full">
          <h2 className="text-5xl max-sm:text-2xl text-center leading-[-1.3] text-gray-900">
            Hyper-personalize your outreach
          </h2>
          <p className="text-md text-gray-600 text-center">
            Sending hundreds of generic LinkedIn messages and emails to your
            leads won’t make a difference today. Due to the advanced
            personalization capabilities of Dripify, you can significantly
            improve quality and convert more
          </p>
        </div>

        <div className="w-full mt-20 max-sm:mt-10">
          <img src={outreach} alt="outreach" />
        </div>

        <div className="w-full flex max-sm:flex-col max-sm:gap-5 justify-around mt-10 flex-wrap">
          <div className="flex items-start  gap-4 w-[20%] max-sm:w-full">
            <div>
              <img src={message} alt="message" className="w-[30px]" />
            </div>
            <div className="w-full">
              <p className="w-full">
                Use 20+ personalization variables in your message{" "}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 w-[20%] max-sm:w-full">
            <div>
              <img src={ai} alt="ai" className="w-[30px]" />
            </div>
            <div className="w-full">
              <p className="w-full">
                Maximize your response rate with AI-powered unique
                personalization
                <span className="text-xs pr-2 pl-3 pt-2 pb-2 bg-[#7760f91a] text-[#7760f9] rounded-2xl font-bold">
                  COMING SOON
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 w-[20%] max-sm:w-full">
            <div>
              <img src={secure} alt="secure" className="w-[30px]" />
            </div>
            <div className="w-full">
              <p className="w-full">
                Get creative using rare variables with Alternative Message
                backup
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 w-[20%] max-sm:w-full">
            <div>
              <img src={text} alt="text" className="w-[30px]" />
            </div>
            <div className="w-full">
              <p className="w-full">
                Remove unnecessary text and symbols from enrichment data
                automatically
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full mt-5">
          <a
            href="#"
            className="pl-7 pr-7 pt-3 pb-3 font-bold rounded-lg border-1 border-gray-400 text-md bg-white"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Outreach;
