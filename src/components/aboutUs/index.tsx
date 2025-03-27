import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import HeaderText from "../../shared/HeaderText";
import aboutGraphic from "../../assets/aboutGraphic.jpg"
import { ArrowDownIcon } from "lucide-react"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const AboutUs = ({setSelectedPage}: Props) => {

    return(<section
    id="about"
    className="flex md:h-full md:pb-0 my-14 md:w-full"
    >
        <motion.div
        className="flex mx-auto items-start w-11/12 md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
        >
            <div className="z-10 md:basis-11/12">

            <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5}}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0},
            }}>
                <div className="before:-top-20 before:-left-20 before:z-[-1] mt-28">
            <HeaderText>Avatar Idea</HeaderText>
                </div>
            <p className="mt-8 text-gray-600 text-balance w-9/12">
            At Avatar Idea, we don’t just design spaces—we craft unique experiences that reflect our clients’ identities. 
            With over 5 years of expertise, we blend art, functionality, and cutting-edge technology to create inspired environments. 
            Our vision goes beyond aesthetics to deliver intelligent and dynamic designs that give space a soul. Because design isn’t 
            just about shapes and colors—it’s a way of living in harmony and balance.
            </p>
            </motion.div>
        </div>
        <div
        className="flex basis-3/5 md:z-10 md:mt-12 md:justify-items-end"
        >
            <button className="border-primary-300 border-2 rounded-sm pointer-events-none w-28 h-24"/>
            <div className="flex h-56 w-80 absolute ml-5 mt-6 group">  
                <img src={aboutGraphic} className="pointer-events-none w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"/>
            
                    <img src={aboutGraphic} className="pointer-events-none w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-100 group-hover:opacity-100 scale-x-[-1]"/>
            </div>
            <div className="absolute mt-52 ml-72">
            <button className="border-white bg-gradient-to-b from-primary-300 to-primary-500 border-8 rounded-sm pointer-events-none w-20 h-20"><ArrowDownIcon className="w-full size-10 text-white"/></button>
            </div>
        </div>
        </motion.div>
    </section>
    )
}

export default AboutUs;