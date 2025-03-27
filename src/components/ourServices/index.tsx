import { useState } from "react";
import { Minus, Plus, ArrowLeft, ArrowRight } from "lucide-react";
import { SelectedPage } from "../../shared/types";
import HeaderText from "../../shared/HeaderText";
import SubHeaderText from "../../shared/SubHeaderText";
import CostumersMessage from "../../shared/CostumersMessage";
import { motion } from "framer-motion";
import lights from "../../assets/lights.png";
import sofa from "../../assets/sofaIcon.png";
import tree from "../../assets/tree.png";
import room1 from "../../assets/room2.jpg";
import room2 from "../../assets/room3.jpg";
import room3 from "../../assets/room4.jpg";
import livingRoom from "../../assets/living-room.jpg";
import whiteroom1 from "../../assets/white-graphic1.jpg";
import whiteroom2 from "../../assets/white-graphic2.jpg";
import whiteroom3 from "../../assets/white-graphic3.jpg";
import checkIc from "../../assets/check-icon.png";
import lightIc from "../../assets/lightIcon.png";
import startIc from "../../assets/icon5.png";
import living from "../../assets/living-room2.jpg";
import ahmed from "../../assets/ahmed.png";
import khaled from "../../assets/khaled.png";


const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide interior design, architectural planning, project execution, and management.",
  },
  {
    question: "What makes you unique?",
    answer: "We blend creativity, functionality, and quality to craft spaces that reflect each client's identity.",
  },
  {
    question: "Do you offer design consultations?",
    answer: "Yes, we help clients shap their vision with expert consultations.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="flex md:h-full md:pb-2 ">
      <motion.div
        className="flex flex-col mx-auto w-11/12 md:flex md:h-5/6 my-12"
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
      >
        <HeaderText>Our Services</HeaderText>
        <div className="flex flex-row mt-12  gap-2 w-full h-fit">
          <motion.div
            className="flex w-2/6 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              <img src={lights} />
            </div>
            <div className="flex flex-col w-4/6">
              <SubHeaderText>
                Execution of Residential and Commercial Projects
              </SubHeaderText>
              <p className="text-gray-20 text-sm mt-4">
                We provide comprehensive execution solutions that bring designs
                to life with high-quality materials and techniques.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex w-2/6 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              <img src={sofa} />
            </div>
            <div className="flex flex-col w-4/6">
              <SubHeaderText>
                Interior Design and Architectural Planning
              </SubHeaderText>
              <p className="text-gray-20 text-sm mt-4">
                We create integrated designs that blend aesthetics and
                functionality, ensuring optimal space utilization.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex w-2/6 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 1.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              <img src={tree} />
            </div>
            <div className="flex flex-col w-4/6">
              <SubHeaderText>Project Management and Supervision</SubHeaderText>
              <p className="text-gray-20 text-sm mt-4">
                We oversee every phase of the project to ensure quality, timely
                delivery, and alignment with the client’s vision.
              </p>
            </div>
          </motion.div>
        </div>
        {/*secend part*/}
        <div className="flex mt-20 basis-3/5 md:z-10 md:mt-12 md:justify-items-end">
          {/** images */}
          <div className="relative w-3/6 group">
            {/**group 1 */}
            <div className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0">
              <div className="flex absolute">
                <img
                  src={room1}
                  className="w-40 h-36 border-8 border-white rounded-sm "
                />
                <img
                  src={room3}
                  className="w-40 h-36 border-8 border-white rounded-sm ml-52 mt-60"
                />
              </div>
              <img src={room2} className="py-8 px-8 h-96" />
            </div>
            {/**group 2 */}
            <div className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex absolute">
                <img
                  src={whiteroom1}
                  className="w-40 h-36 border-8 border-white rounded-sm mt-60"
                />
                <img
                  src={whiteroom3}
                  className="w-40 h-36 border-8 border-white rounded-sm ml-52"
                />
              </div>
              <img src={whiteroom2} className="py-8 px-8 h-96" />
            </div>
          </div>
          {/**content */}
          <div className="ml-20 w-3/6">
            <h1 className="basis-3/5 font-monotserrat text-4xl font-bold bg-gradient-to-r from-primary-300  to-primary-500 text-transparent bg-clip-text">
              Designing Your Dream With Avatar Idea
            </h1>
            <p className="text-gray-20 mt-4 w-5/6">
              Elevate your spaces with bespoke interior designs that reflect
              your unique style and aspirations, crafted with precion and
              brilliance for an unforqettable living experience
            </p>
            {/**questions */}
            <div className="max-w-xl mx-auto mt-4 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex justify-between items-center py-2 font-semibold">
                    {faq.question}
                    {openIndex === index ? <Minus /> : <Plus />}
                  </div>
                  {openIndex === index && (
                    <p className="text-gray-20 pb-2 text-sm">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/**third part */}
        <div className="flex mt-28 basis-3/5 md:z-10 md:mt-12">
          {/**left side */}
          <div className="flex flex-row justify-center w-3/6 gap-5 my-16">
            <div className="flex flex-col justify-items-center justify-center gap-4 w-fit">
              <button className="bg-gradient-to-b from-primary-500 to-primary-300 rounded-full pointer-events-none w-16 h-16">
                <img src={startIc} className="mx-auto size-7" />
              </button>
              <div className="flex justify-center">
                <button className="border-s-4 h-20" />
              </div>
              <button className="bg-gradient-to-b from-primary-500 to-primary-300 rounded-full pointer-events-none w-16 h-16">
                <img src={lightIc} className="mx-auto size-7" />
              </button>
              <div className="flex justify-center">
                <button className="border-s-4 h-20" />
              </div>
              <button className="bg-gradient-to-b from-primary-500 to-primary-300 rounded-full pointer-events-none w-16 h-16">
                <img src={checkIc} className="mx-auto size-7" />
              </button>
            </div>
            <div className="flex flex-col w-8/12 justify-around">
              <div className="">
                <h1 className="text-primary-300 text-lg font-extrabold">
                  Start Project
                </h1>
                <p className="text-gray-20 text-sm mt-2">
                  Embark on your design adventure by initiating your project.
                  Share your vision and set the stage for a bespoke design
                  experience.
                </p>
              </div>
              <div className="">
                <h1 className="text-primary-300 text-lg font-extrabold">
                  Craft
                </h1>
                <p className="text-gray-20 text-sm mt-2">
                  Collaborate closely to achieve design excellence refining your
                  vision and crafting brilliance into every aspect of your
                  space.
                </p>
              </div>
              <div className="">
                <h1 className="text-primary-300 text-lg font-extrabold">
                  Execute
                </h1>
                <p className="text-gray-20 text-sm mt-2">
                  Witness your vision becoming a reality as we execute the
                  design plan with precision. Celebrate the joy of your newly
                  transformed space.
                </p>
              </div>
            </div>
          </div>
          {/**right side */}
          <div className="flex w-3/6">
            <img src={livingRoom} className="p-5 w-full h-full" />
          </div>
        </div>
        {/**Fourth Part */}
        <div className="mt-12">
          <img src={living} className="flex w-96 h-80 absolute rounded-sm" />
          <div className="flex flex-col relative">
            {/**header */}
            <div className=" pl-80 flex justify-end">
              <h1 className=" basis-3/5 font-monotserrat text-4xl font-bold bg-gradient-to-r from-primary-300  to-primary-500 text-transparent bg-clip-text">
                What Our Customers Say About Us
              </h1>
            </div>
            <div className="flex justify-between">
              {/**buttons */}
              <div className="flex gap-2 mt-72">
                <button className="bg-gray-300 w-12 h-12 text-gray-700 hover:text-black rounded-sm"><ArrowLeft className="mx-auto " size={32}/></button>
                <button className="bg-gray-300 w-12 h-12 text-gray-700 hover:text-black rounded-sm"><ArrowRight className="mx-auto" size={32}/></button>
              </div>
              {/**messages */}
              <div className="flex w-full justify-end border-white border-8 gap-6 m-4">
                <CostumersMessage 
                content={'Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!'}
                name={'Ahmed Al-Tayeb'}
                address={'Dubai, UAE'}
                img={ahmed}
                />
                <CostumersMessage 
                content={'The team at Avatar Idea transformed my space into a dream home. Their dedication and professionalism are unmatched!'}
                name={'Khaled Al-Zahrani'}
                address={'Riyadh, Saudi Arabia'}
                img={khaled}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
