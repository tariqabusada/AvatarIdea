import ActionButton from '../../shared/ActionBtn';
import { SelectedPage } from '../../shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from "framer-motion";
import HeaderText from '../../shared/HeaderText';
import homePage from '../../assets/homePageGraphic.png';
import arrow from '../../assets/arrow.png';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    return (<section
    id="home"
    className="flex md:h-full md:pb-0 my-6"
    >
    <motion.div 
        className='mx-auto w-11/12 items-center md:flex md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
        <div className="flex-row z-10 md:basis-3/5">
      {/* HEADINGS */}
      <motion.div
        className="md:-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
          <div className="before:-top-20 before:-left-20 before:z-[-1] mt-28">
            <HeaderText>
            We Help To Build
            </HeaderText>
            <div className='h-6'>
            </div>
            <HeaderText>
            Your Dreams.
            </HeaderText>
          </div>
        

        <p className="text-balance mt-8 text-sm text-gray-20">
        Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge modern innovation, allowing you to transform your living spaces into the epitome of luxury and sophistication.
        </p>
      </motion.div>

      {/* ACTIONS */}
      <motion.div
        className="mt-10 flex items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <ActionButton setSelectedPage={setSelectedPage}>
          Start Project
        </ActionButton>
        <AnchorLink
          className="text-sm font-bold text-primary-300"
          onClick={() => setSelectedPage(SelectedPage.Contact)}
          href={``}
        >
          <p className='flex flex-row items-center gap-1 font-semibold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="size-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
</svg>Watch a promo</p>
        </AnchorLink>
      </motion.div>
      <motion.div
        className="mt-10 flex items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className='flex mr-8'>
        <button className='border-s-2 size-12 w-0 mr-2 pointer-events-none'></button>
        <div className='flex flex-col'>
          <div className='font-bold'>200 <span className='text-primary-500 text-lg'>+</span></div>
          <p className='text-xs text-gray-400'>Happy Customers</p>
        </div>
        </div>
        <div className='flex mr-8'>
        <button className='border-s-2 size-12 w-0 mr-2 pointer-events-none'></button>
        <div className='flex flex-col'>
          <div className='font-extrabold'>5 <span className='text-primary-500 text-lg'>+</span></div>
          <p className='text-xs text-gray-400'>Years of experience</p>
        </div>
        </div>
        <div className='flex mr-8'>
        <button className='border-s-2 size-12 w-0 mr-2 pointer-events-none'></button>
        <div className='flex flex-col'>
          <div className='font-extrabold'>150 <span className='text-primary-500 text-lg'>+</span></div>
          <p className='text-xs text-gray-400'>Completed project</p>
        </div>
        </div>
  
      </motion.div>
    </div>


    {/* IMAGE */}
    <div
      className="flex flex-col basis-3/5 md:z-10
           md:mt-20 md:justify-items-end mb-2"
    >
      <img alt="home-pageGraphic" src={homePage} className=' transform scale-x-[-1] -rotate-12 max-w-xl '/>
      <img src={arrow} className='flex w-32 h-10 m-auto ml-20 mt-0'/>
    </div>
    </motion.div>
        </section>

    )
}

export default Home;