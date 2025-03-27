import { SelectedPage } from "../../shared/types";
import {motion} from "framer-motion";

type Props ={
    setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
    return(<section id="contact">
        <motion.div
        className=" mx-auto w-5/12"
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        >
        {/**header */}
        <h1 className="font-extrabold text-3xl w-fit text-center">
            Subscribe to Our Newsletter for Design Insights
        </h1>
        {/**pargraph */}
        <p className="text-sm text-gray-600 text-center w-fit my-6">
            Be the first to discover trends, inspirations, 
            and special offers as we bring the world of design dirctly to your inbox
        </p>
        {/**input box */}
        <div id="input" className="flex w-5/12 bg-white shadow-stone-800 shadow-sm mt-6 rounded-sm justify-between absolute"  >

        <input id="input" name="in" placeholder='Enter your email adderss' className="w-80 h-12 ml-4 my-auto"></input>
        <button type="reset" className="w-24 h-10 bg-primary-300 text-white rounded-md m-2">subsicribe</button>
        </div>
        
    </motion.div>
    </section>
    )
}

export default Contact;