import imgone from "../../../../assets/How/1st.png";
import imgTwo from "../../../../assets/How/2nd.png";
import imgThree from "../../../../assets/How/3rd.png";
import "./style.css";
const HowItWork = () => {
  return (
    <div className="timeline max-w-screen-xl mx-auto font-alice h-[100%]">
      <h1 className="text-[38px] font-normal text-center mb-[32px] ">
        How It Work
      </h1>
      <p className="text-[18px] mb-[60px] font-normal text-center  max-w-[685px] mx-auto leading-[27px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
        repellendus repellat doloremque iusto tenetur veniam aspernatur vel
        quasi architecto quam!
      </p>
      {/* cards */}
      <div className="cards max-w-md mx-auto">
        <div className="cards_body">
          <img src={imgone} alt="" className="mb-32" />
        </div>
      </div>
      {/* cards-2 */}
      <div className="cards max-w-md mx-auto">
        <div className="cards_body text-left">
          <h1 className="text-[28px] font-normal leading-[36px]  text-[#272932]">
            Select based on Interests, Location, and other pertinent filters.
          </h1>
          <p className="text-[18px] font-normal leading-[27px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            reprehenderit.
          </p>
        </div>
      </div>
      {/* cards-3 */}
      <div className="cards max-w-md mx-auto">
        <div className="cards_body text-right">
          <h1 className="text-[28px] font-normal leading-[36px]  text-[#272932]">
            Engage with your matches in the manner that suits you best
          </h1>
          <p className="text-[18px] font-normal leading-[27px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            reprehenderit.
          </p>
        </div>
      </div>
      {/* cards-4 */}
      <div className="cards max-w-md mx-auto">
        <div className="cards_body">
          <img src={imgTwo} alt="" />
        </div>
      </div>
      {/* cards-5 */}
      <div className="cards max-w-md mx-auto ">
        <div className="cards_body">
          <img src={imgThree} alt="" className="mb-10" />
        </div>
      </div>
      {/* cards-6 */}
      <div className="cards max-w-md mx-auto">
        <div className="cards_body text-left">
          <h1 className="text-[28px] font-normal leading-[36px]  text-[#272932]">
          Personalized match suggestions generated by AI to align with your preferences
          </h1>
          <p className="text-[18px] font-normal leading-[27px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            reprehenderit.
          </p>
        </div>
      </div>

      {/* cards-end */}

      {/* small device screen */}
      {/* cards */}
      {/* section */}
      <div className="md:flex items-center justify-between gap-6 mb-5 border border-black p-4 rounded md:border-none">
        <div className=" xl:hidden max-w-md mx-auto">
          <div className="cards_body">
            <img src={imgone} alt="" className="mb-10 hidden md:block" />
          </div>
        </div>
        {/* cards-2 */}
        <div className="xl:hidden max-w-md mx-auto ">
          <div className="cards_body text-left">
            <h1 className="text-[28px] font-normal leading-[36px]  text-[#272932]">
              Select based on Interests, Location, and other pertinent filters.
            </h1>
            <p className="text-[18px] font-normal leading-[27px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              reprehenderit.
            </p>
          </div>
        </div>
      </div>
  
      {/* section-2 */}
      <div className="md:flex items-center justify-between gap-6 flex-row-reverse mb-5 border border-black p-4 rounded md:border-none ">
      {/* cards-3 */}
      <div className="xl:hidden max-w-md mx-auto">
        <div className="cards_body">
          <img src={imgTwo} alt="" className="hidden md:block" />
        </div>
      </div>
      {/* cards-4 */}
      <div className="xl:hidden max-w-md mx-auto">
        <div className="cards_body text-left md:text-right ">
          <h1 className="text-[28px] font-normal leading-[36px]  text-[#272932]">
            Engage with your matches in the manner that suits you best
          </h1>
          <p className="text-[18px] font-normal leading-[27px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            reprehenderit.
          </p>
        </div>
      </div>
      </div>
      {/* section-3 */}
     <div className="md:flex items-center justify-between gap-6 mb-10 border border-black p-4 rounded md:border-none">
       {/* cards-5 */}
       <div className="xl:hidden max-w-md mx-auto ">
        <div className="cards_body">
          <img src={imgThree} alt="" className="mb-10 hidden md:block" />
        </div>
      </div>
      {/* cards-6 */}
      <div className="xl:hidden max-w-md mx-auto">
        <div className="cards_body text-left">
          <h1 className="text-[28px] font-normal leading-[36px]  text-[#272932]">
          Personalized match suggestions generated by AI to align with your preferences
          </h1>
          <p className="text-[18px] font-normal leading-[27px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            reprehenderit.
          </p>
        </div>
      </div>

      {/* cards-end */}
     </div>
    </div>
  );
};

export default HowItWork;
