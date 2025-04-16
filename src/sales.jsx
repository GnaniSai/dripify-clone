import brand1 from "./assets/brand1.svg";
import brand2 from "./assets/brand2.svg";
import brand3 from "./assets/brand3.svg";
import brand4 from "./assets/brand4.svg";
import brand5 from "./assets/brand5.svg";
import brand6 from "./assets/brand6.svg";
import brand7 from "./assets/brand7.svg";
import brand8 from "./assets/brand8.svg";

function Sales() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center mb-6">
      <div>
        <p className="text-md text-center text-gray-500">
          Driving sales for 40,000+ most innovative companies worldwide
        </p>
      </div>

      <div className="flex gap-4 items-center w-[80%] flex-wrap max-sm:hidden">
        <img src={brand1} alt="brand1" />
        <img src={brand2} alt="brand1" />
        <img src={brand2} alt="brand1" />
        <img src={brand3} alt="brand1" />
        <img src={brand4} alt="brand1" />
        <img src={brand4} alt="brand1" />
        <img src={brand5} alt="brand1" />
        <img src={brand6} alt="brand1" />
        <img src={brand7} alt="brand1" />
        <img src={brand8} alt="brand1" />
        <img src={brand8} alt="brand1" />
        <img src={brand6} alt="brand1" />
        <img src={brand5} alt="brand1" />
        <img src={brand4} alt="brand1" />
        <img src={brand3} alt="brand1" />
        <img src={brand2} alt="brand1" />
        <img src={brand1} alt="brand1" />
        <img src={brand8} alt="brand1" />
        <img src={brand6} alt="brand1" />
        <img src={brand2} alt="brand1" />
      </div>

      <div className="gap-4 items-center w-sull flex-wrap hidden max-sm:flex">
        <marquee behavior="" direction="left" className="hidden max-sm:block">
          <div className="flex">
            <img src={brand1} alt="brand1" />
            <img src={brand2} alt="brand1" />
            <img src={brand2} alt="brand1" />
            <img src={brand3} alt="brand1" />
            <img src={brand4} alt="brand1" />
            <img src={brand4} alt="brand1" />
            <img src={brand5} alt="brand1" />
            <img src={brand6} alt="brand1" />
            <img src={brand7} alt="brand1" />
            <img src={brand8} alt="brand1" />
          </div>
        </marquee>

        <marquee behavior="" direction="right" className="hidden max-sm:block">
          <div className="flex">
            <img src={brand8} alt="brand1" />
            <img src={brand6} alt="brand1" />
            <img src={brand5} alt="brand1" />
            <img src={brand4} alt="brand1" />
            <img src={brand3} alt="brand1" />
            <img src={brand2} alt="brand1" />
            <img src={brand1} alt="brand1" />
            <img src={brand8} alt="brand1" />
            <img src={brand6} alt="brand1" />
            <img src={brand2} alt="brand1" />
          </div>
        </marquee>
      </div>
    </div>
  );
}

export default Sales;
