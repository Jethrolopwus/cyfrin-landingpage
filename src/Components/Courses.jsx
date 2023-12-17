import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import avatar from "../Components/images/avatar-10.png"
import avatar2 from "../Components/images/avatar-2.png"
import avatar3 from "../Components/images/avatar-3.png"
import avatar4 from "../Components/images/avatar-4.png"
import avatar5 from "../Components/images/avatar-5.png"
import chainlink from "../Components/images/chainlink.jpeg";
import codeHawks from "../Components/images/codehawks-leaderboard.png"
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Link } from 'react-router-dom';
import codehawksLogo from "../Components//images/codehawks-logo.png"
import { FiPlusCircle } from "react-icons/fi";


const Courses = () => {
  return (

  <div className='relative mt-16 '>
    {/* <img src={Background} alt=' courses background' className='rounded-3xl h-full w-full' /> */}
      <div className=' mt-16 mx-4 rounded-3xl bg-gradient-to-br from-gray-300 via-gray-300 to-red-400  top-0 left-0'>
    <div className='flex flex-col md:flex-col-1 items-center'>
      <p className='text-blue-600 text-lg font-bold mt-8'>Everything you need</p>
      <h2 className='font-extrabold text-4xl font-mono mt-6 leading-snug'>Our Courses</h2>
      <p className='mt-12 text-2xl text-gray-600 text-center mx-10'>Whether you're new to web3, a seasoned engineer, or an aspirant smart contract auditor, we have the right courses for you.</p>
    </div>
    <p className='text-center font-bold mt-12 text-2xl'>Check out our <span className='text-red-500'>Open Courses</span>!  No sign-up needed.</p>
    <div className='flex justify-between sm:flex-col-1 mt-16'>
      <h2 className='text-2xl  mx-12 font-semibold'>Foundations</h2>
      <h2 className='text-gray-700 mx-16 text-xl'>Start Here</h2>
    </div>
    <div className='border-2 bg-white border-red-500  rounded-3xl mx-10 mt-16'>
      <h1 className='mx-4 text-4xl font-bold my-4 leading-snug'>Blockchain Basics</h1>
    <div className='flex gap-8 items-center'>
      <div className='mt-16  mx-8 max-w-md'>
      <p className=' text-2xl py-2 '>Start where you’re comfortable! .</p>
      <p className='text-2xl text-gray-600 py-2  leading-snug '>Whether you’re new to smart contract development or are a seasoned veteran, there’s something here for you.</p>
        <div>
          <span className='flex items-center'>
          <img src={avatar} alt='avatar' width={40} height={20} />
              <img src={avatar2} alt='avatar' width={40} height={20} />
              <img src={avatar3} alt='avatar' width={40} height={20} />
              <img src={avatar4} alt='avatar' width={40} height={20} />
              <img src={avatar5} alt='avatar' width={40} height={20} />
            <p className='text-sm px-2'>500+ users have taken this course.</p>
          </span>
        </div>
        <span className='flex items-center gap-2 max-w-[120px] m-8 border-2 py-2 border-blue-100 px-2 rounded-lg'>
          Get Started
          <FaArrowRight  className='text-black-600 text-sm '/>
        </span>
      </div>
      <div className='bg-gray-200 rounded-xl border-4 w-full mt-2 py-8 px-12 mx-8'>
        <p className='text-3xl font-semibold py-8 '>Course Outline</p>
        <div className='border-2 border-blue-100 px-4 rounded-full p-3 text-xl text-gray-300 font-medium  bg-blue-50'>What is web3?</div> <br />
        <div className='border-2 border-blue-100 px-4 rounded-full p-3 text-xl text-gray-300 font-medium  bg-blue-50'>The Blockchain</div> <br />
        <div className='border-2 border-blue-100 px-4 rounded-full p-3   text-xl text-gray-300 font-medium  bg-blue-50'>Smart Contracts</div> <br />
        <div className='border-2 border-blue-100 px-4 rounded-full p-3   text-xl text-gray-300 font-medium  bg-blue-50'>Dfi</div>
      </div>
    </div>
    </div>
    <p className='text-3xl mt-10 font-semibold mx-8'>The Solidity Path</p>
    <div className='flex justify-between mt-10 '> 
    <div className='mt-8 bg-white border-2  rounded-3xl  mx-12 '>
      <div className=' '>
        <div className=''>
        <h2 className='text-3xl mt-4 font-bold mx-4 border-b border-gray-300 border-solid'>Solidity 101</h2>
        <p className='text-2xl mt-4 mx-2 '>If you’re new to writing smart contracts, start here!</p>
        <p className='text-2xl text-gray-600 mx-2'>Solidity is an object-oriented programming language for implementing smart contracts on various blockchain platforms, most notably, Ethereum.</p>
        </div>
      <div>
        <h2 className='text-2xl mt-20 font-semibold mx-4'>Get Started</h2>
        <p className='text-xl text-gray-400 mx-4'>What is Solidity?</p>
        <p className='text-xl text-gray-400 mx-4'>Best Practices</p>
        <h3 className='text-2xl mt-4 mx-2 text-gray-600'>Solidity Fundamentals</h3>
        <p className='text-xl mx-2 text-gray-500'>Simple storage</p>
        <p className='text-xl mx-2 text-gray-400'>Storage factory</p>
        <p className='text-xl mx-2 text-gray-300'>fund Me</p>
        <div className='flex items-center mt-8'>
          <span className='flex items-center '>
              <img src={avatar} alt='avatar' width={40} height={20} />
              <img src={avatar2} alt='avatar' width={40} height={20} />
              <img src={avatar3} alt='avatar' width={40} height={20} />
              <img src={avatar4} alt='avatar' width={40} height={20} />
              <img src={avatar5} alt='avatar' width={40} height={20} />
          </span>
          <p className='text-xs  mt-20 w-full'>500+ users have taken this course.</p>
          <span className='flex items-center text-sm m-8 w-[250px] py-2  border-2 border-blue-100 rounded-lg '>
            Get Started
          <FaArrowRight  className='text-black-600 text-sm '/>
        </span>
        </div>
      </div>
      </div>
    </div>
    <div className=' mt-8 '>
      <div className=' bg-white mx-8 g-white border-2 rounded-3xl  '>
      <h2 className='text-3xl mt-4 mx-4 font-semibold  border-b border-gray-300 border-solid'>Foundry 101</h2>
      <p className='text-2xl mx-4 mt-8 '>Already know Solidity? Your next step is Foundry! </p>
      <p className='text-gray-500 text-2xl mx-4'> Learn how to manage your dependencies, compile your project, run tests, deploy, and interact with your from the command-line and via Solidity scripts.</p>
      <span className='flex items-center gap-2 max-w-[120px] m-8 border-2 py-2 border-blue-100 px-2 rounded-lg'>
          Get Started
          <FaArrowRight  className='text-black-600 text-sm '/>

        </span>
      </div>
      <div className=' bg-white mx-8 g-white border-2 rounded-3xl mt-8  '>
      <h2 className='text-3xl mt-4 mx-4 font-semibold  border-b border-gray-300 border-solid'>Advanced Foundry</h2>
      <p className='text-2xl mx-4 mt-8 '>Become a Foundry expert! </p>
      <p className='text-gray-500 text-2xl mx-4'> Learn advanced techniques to develop, deploy, test, optimise and interact with your smart contract using industry standard tools used by the top smart contracts engineers in web3</p>
      <span className='flex items-center gap-2 max-w-[120px] m-8 border-2 py-2 border-blue-100 px-2 rounded-lg'>
          Get Started
          <FaArrowRight  className='text-black-600 text-sm '/>
        </span>
      </div>
    </div>
    </div>
    <h2 className='text-3xl font-bold mx-4 mt-8'>Security and Auditing</h2>
    <div className='border-4 border-blue-800 border-solid rounded-3xl mx-8 mt-8'>
      <div>
         <span className='flex items-center text-red-300 bg-blue w-36 gap-2 m-8 border-2 border-red-300 border-solid p-2 rounded-lg'>
          <FaArrowRight  className='text-red-400 text-sm '/>
          Open Courses
        </span>
        <h2 className='text-3xl font-bold mx-4'>Security & Auditing</h2>
      
      </div>
      <div>

      </div>
      <div className='flex mt-36'>
        <div className='mt-8 mx-4 max-w-md'>
          <p className='text-2xl mt-4 '>Start your career as a smart contract auditor!</p>
          <p className='text-2xl text-gray-600'> Learn the best practices for writing secure and optimized smart contracts. Explore techniques like fuzzing, invariant testing, formal verification, and more to identify bugs and protect web3 protocols.</p>
          <span className='flex items-center gap-2 m-8 w-36 border-2 py-2 border-blue-100 rounded-lg'>
          Watch Courses
          <FaArrowRight  className='text-black-600 text-sm '/>
        </span>
        </div>
        <div className='bg-gray-200 rounded-xl border-4 w-full mt-2 py-8 px-12 mx-8'>
        <p className='text-3xl font-semibold py-8 '>Course Outline</p>
        <div className='border-2 border-blue-100 px-4 rounded-full p-3 text-xl text-gray-300 font-medium  bg-blue-50'>What is smart contract audit?</div> <br/>
        <div className='border-2 border-blue-100 px-4 rounded-full p-3 text-xl text-gray-300 font-medium  bg-blue-50'>Your First Audit</div> <br />
        <div className='border-2 border-blue-100 px-4 rounded-full p-3   text-xl text-gray-300 font-medium  bg-blue-50'>Manual and static analysis</div> <br/>
        <div className='border-2 border-blue-100 px-4 rounded-full p-3   text-xl text-gray-300 font-medium  bg-blue-50'> Invariant and intro to Dfi</div>
      </div>
      </div>
    </div>
    

  </div>
    <div>
      <div className='flex flex-col items-center mt-8 '>
      <h2 className='text-blue-600 text-md text-center my-4 font-bold'>Students Love Us</h2>
      <h2 className='text-3xl text-center font-semibold my-4'>Student Testimonials</h2>
      <p className='text-xl text-gray-500 max-w-2xl my-4'>We’ve helped thousands of people landing a job in web3 and level up their careers, but don’t just take our word for it:</p>
      </div>
      <div className='flex justify-center items-center gap-4 mt-8 mx-8 '>
        <div className='border-2 rounded-3xl bg-gray-200'>
          <p className='text-xl text-gray-500 m-8 py-12'>If there’s one resource that Web3 developers point to, it’s Cyfrin’s ultimate tutorials. They’re standout resources that have empowered countless developers to learn blockchains, learn Solidity, and dive deep into Web3 development.</p>
          <span className='flex py-8 mx-8 w-20 gap-2'>
              <img src={chainlink} alt='avatar'  />
            Chainlink
            Chainlink
          </span>
        </div>
        <div className='border-2 rounded-3xl bg-gray-200'>
          <p className='text-xl text-gray-500 m-8 py-10'>We can build systems for Ethereum scaling but without education, it’s all for nothing. Updraft is the first step towards adoption for Web3 education. We can now mint security focused developers at scale!</p>
          <span className='flex py-8 mx-8 w-32 '>
              <img src={avatar5} alt='avatar' width={60} height={20} />
            Tony Olendo
            Lead Devrel Engineer, Polygon
          </span>
        </div>
        <div className='border-2  rounded-3xl bg-gray-200'>
          <p className='text-xl text-gray-500 m-8 py-12'>Cyfrin's course was a cornerstone of my journey into Web3, providing me with the fundamentals and hands-on experience that have been pivotal to my journey in the blockchain space.</p>
          <span className='flex py-2 mx-8 w-20 gap-2'>
              <img src={avatar3} alt='avatar' />
           Raza
          Lead Developer Relations, Scroll
          </span>
        </div>
      </div>
      <div className='flex justify-center items-center gap-4 mt-8 mx-8 '>
        <div className='border-2 rounded-3xl bg-gray-200'>
          <p className='text-xl text-gray-500 m-8 py-12'>Cyfrin Updraft videos on smart contract development have been instrumental in my blockchain journey, standing out with their clarity and accessibility. Their readiness to support and engage with learners makes me excited for more of their interactive and insightful content in the Web3 space.</p>
          <span className='flex py-8 mx-8 w-20 gap-2'>
              <img src={avatar} alt='avatar'  />
              Francesco Andreoli
              MetaMask
          </span>
        </div>
        <div className='border-2 rounded-3xl bg-gray-200'>
          <p className='text-xl text-gray-500 m-8 py-12'>I took Cyfrin course and I’ve been working as a solutions developer at OpenZeppelin for the last few months. It was by far the most comprehensive resource and the one that really teached me the fundamentals and made me want to switch from web2 to web3.</p>
          <span className='flex py-4 mx-8 w-32 '>
              <img src={avatar5} alt='avatar' />
              Gustavo Gonzalez
              Solutions Engineer, OpenZeppelin
          </span>
        </div>
        <div className='border-2  rounded-3xl bg-gray-200'>
          <p className='text-xl text-gray-500 m-8 py-12'>The Cyfrin courses were a game-changer for me. They provided a well-structured and comprehensive introduction to web3 and blockchain development. The knowledge I gained allowed me to transition into a full-time role as a blockchain developer. I can't recommend these courses enough!</p>
          <span className='flex py-2 mx-8 w-20 gap-2'>
              <img src={avatar4} alt='avatar' />
              Albert Hu
          DeForm Founding Engineer
          </span>
        </div>
      </div>
      <div className='flex justify-center items-center gap-4 mt-8 mx-8  '>
        <div className='border-2 rounded-3xl bg-gray-200'>
          <p className='text-xl text-gray-500 m-8 py-12'>I took Cyfrin’s courses, and I took them seriously. At least one hour every day, documented the progress, didn’t skip any second. Haven’t found a better web3 course since. Now I’m full-time in web3, working as Senior Developer Advocate at Ceramic Network.</p>
          <span className='flex py-4 mx-8 w-20 gap-2'>
              <img src={avatar5} alt='avatar'  />
              Radek
              Senior Developer Advocate, Ceramic
          </span>
        </div>
        <div className='border-2 rounded-3xl bg-gray-200'>
          <p className='text-lg text-gray-500 m-8 py-12'>Cyfrin have been an absolute game-changers in my journey into blockchain. Saying their courses were remarkable, would be an understatement. Thanks to their expert guidance, I gained a deep understanding of blockchain to its roots. I'm forever grateful for their role in helping me get started in web3.</p>
          <span className='flex py-8 mx-8 items-center '>
              <img src={avatar5} alt='avatar' />
              Boidushya 
              WalletConnect
          </span>
        </div>
        <div className='border-2  rounded-3xl bg-gray-200'>
          <p className='text-xl text-gray-500 m-8 py-12'>Cyfrin blockchain and Foundry/AI courses were incredible. I've gained valuable knowledge, grown, empowering myself and others. Thank you, Cyfrin!</p>
          <span className='flex py-2 mx-8 w-20 '>
              <img src={avatar2} alt='avatar' />
              Idris
              Developer Relations Engineer, Axelar
          </span>
        </div>
      </div>
    </div>
    <div className='bg-black sm:mt-2 md:mx-2  mt-4 border-b-2 rounded-lg'>
      <div className=' py-32'>
        <div className='flex items-center gap-2 mx-4  border-2 border-gray-200 rounded-3xl'>
             <div className='m-8'>
             <img src={codehawksLogo} alt=" Code Hawk logo"/>
              <h2 className='text-white text-2xl sm:text-xl md:2xl py-8'>Not sure where to go after completing our courses?</h2>
              <p className='text-white'>Apply your skills at the CodeHawks competitive audits platform. Hack, win prizes and shape the future of Web3!</p>
              <span className='flex items-center gap-2 m-8 justify-center border-2 py-2 border-blue-100 text-white rounded-lg'>
              Visit CodeHawks
              <FaArrowRight  className='text-white text-sm '/>
            </span>
             </div>
            <div className='py-8 h-30 px-2 '>
            <img src={codeHawks} alt="codeHawks leading bg" />
          </div>
        </div>
        </div>
      

    </div>
    <div className='flex items-center'>
      <div className='m-8'>
        <p className='text-blue-600 py-4'>Support</p>
        <h1 className='text-3xl font-bold py-8'>FAQs</h1>
        <p className='text-2xl text-gray-600'>Can’t find an answer? Join our Discord or follow us on Twitter.</p>
       <div className='flex items-center justify-around m-8'>
         <span className='flex items-center  border-2 py-2 w-36 justify-center  border-blue-100 rounded-lg'>
              <FaDiscord className='' />
               <p className='text-lg px-4'>Discord</p> 
            </span>
            <span className='flex items-center  w-36 justify-center  border-2 py-2 border-blue-100  rounded-lg'>
            <FiTwitter />
            <p className='text-lg px-4'>Twitter</p>
            </span>
       </div>
      </div>
      <div className='m-8 p-8'>
        <span className='flex items-center justify-between p-4'>How do I get access to Cyfrin Updraft?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>When will I receive my early access code?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>Why early access?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>Are your courses completely free?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4' >When do your courses start?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>How long do courses take to complete?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>Do I get any certifications for completing the Cyfrin Updraft courses?
        <FiPlusCircle />
        </span>
        <span nonce='flex  justify-between py-4'>I have never coded in my life, are these courses suitable for me?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>What is Cyfrin Updraft?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>What’s happened to Patrick’s courses?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>I have never coded in my life, are these courses suitable for me?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>What is Cyfrin Updraft?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>What’s happened to Patrick’s courses?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>How is Cyfrin Updraft connected to CodeHawks?
        <FiPlusCircle />
        </span>
      </div>
    </div>
    <div>
      <div>
        <h2>Join 100,000+ students</h2>
        <p>Stay in the loop with everything you need to know.</p>
        <div>
        <span className='flex items-center gap-2 m-8 w-36 border-2 py-2 border-blue-100 text-white rounded-lg'>
              Visit CodeHawks
              <FaArrowRight  className='text-white text-sm '/>
            </span>
            <button>Subscribe</button>
            <p>We will not share your info with 3rd parties without consent.</p>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Courses</Link>
          </li>
          <li>
          <FaDiscord />
          </li>
          <li>
          <FaGithub />
          </li>
          <li>
          <FiTwitter />
          </li>
          
        </ul>
      </div>
    </div>
  </div>
   
  )
}

export default Courses