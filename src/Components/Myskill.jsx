import htmlimg from '../assets/hmtl.png'
import cssimg from '../assets/cssimg.png'
import boostsrapimg from '../assets/bootstrap.png'
import tailwindimg from '../assets/tailwind.png'
import jsimg from '../assets/jsimg.jpeg'
import reactimg from '../assets/react.svg'
import vscodeimg from '../assets/vscod.jpg'
import githubimg from '../assets/github.png'
import noodjsimg from '../assets/noodjs.png'
import figmaimg from '../assets/figma.png'
import netlifyimg from '../assets/netlify.jpg'
import npmimg from '../assets/npm.png'
import { useEffect } from 'react'
import Aos from 'aos'

const Myskill = () => {

    useEffect(() => {
        Aos.init({
            duration: 700,
            offset: 200
        });
    }, []);
    return (
        <div className=' w-11/12 mx-auto mt-20'>
            <h2 className=" text-4xl font-bold mb-10">My Skills</h2>
            <h2 className=' mx-auto pb-2 text-3xl font-bold mb-10 border-b-4 border-yellow-500 w-40 text-center'>Languages</h2>
            <div data-aos="flip-left" className=' grid md:grid-cols-3 grid-cols-2 gap-5'>
                <div className=' flex flex-col gap-2 items-center'>
                    <img className=' w-40 h-32 rounded-lg' src={htmlimg} alt="" />
                    <h1 className=' text-2xl font-bold'>Html 5</h1>
                </div>
                <div className=' flex flex-col gap-2 items-center'>
                    <img className=' w-40 h-32 rounded-lg' src={cssimg} alt="" />
                    <h1 className=' text-3xl font-bold my-2'>Css 3</h1>
                </div>
                <div className=' flex flex-col gap-2 items-center'>
                    <img className=' w-40 h-32 rounded-lg' src={boostsrapimg} alt="" />
                    <h1 className=' text-3xl font-bold my-2'>Bootsrtap </h1>
                </div>
                <div className=' flex flex-col gap-2 items-center'>
                    <img className=' w-40 h-32 rounded-lg' src={tailwindimg} alt="" />
                    <h1 className=' text-3xl font-bold my-2'>Tailwind css</h1>
                </div>
                <div className=' flex flex-col gap-2 items-center'>
                    <img className=' w-40 h-32 rounded-lg' src={jsimg} alt="" />
                    <h1 className=' text-3xl font-bold my-2'>Javascipt</h1>
                </div>
                <div className=' flex flex-col gap-2 items-center'>
                    <img className=' w-40 h-32 rounded-lg' src={reactimg} alt="" />
                    <h1 className=' text-3xl font-bold my-2'>React</h1>
                </div>
            </div>
            <h2 className=' mx-auto pb-2 text-3xl font-bold mt-16 mb-10 border-b-4 border-yellow-500 w-40 text-center'>Tools</h2>
            <div  data-aos="flip-right" className=' grid md:grid-cols-3 grid-cols-2 gap-5'>
                <div className=' flex flex-col gap-2 items-center'>
                    <img className=' w-40 h-32 rounded-lg' src={vscodeimg} alt="" />
                    <h1 className=' text-2xl font-bold'>Vs code</h1>
                </div>
                <div className=' flex flex-col gap-2 items-center'>
                    <img className=' w-40 h-32 rounded-lg' src={githubimg} alt="" />
                    <h1 className=' text-3xl font-bold my-2'>Github</h1>
                </div>
                <div className=' flex flex-col gap-2 items-center'>
                    <img className=' w-40 h-32 rounded-lg' src={noodjsimg} alt="" />
                    <h1 className=' text-3xl font-bold my-2'>Nood js</h1>
                </div>
                <div className=' flex flex-col gap-2 items-center'>
                    <img className=' w-40 h-32 rounded-lg' src={figmaimg} alt="" />
                    <h1 className=' text-3xl font-bold my-2'>Figma</h1>
                </div>
                <div className=' flex flex-col gap-2 items-center'>
                    <img className=' w-40 h-32 rounded-lg' src={netlifyimg} alt="" />
                    <h1 className=' text-3xl font-bold my-2'>Netlify</h1>
                </div>
                <div className=' flex flex-col gap-2 items-center'>
                    <img className=' w-40 h-32 rounded-lg' src={npmimg} alt="" />
                    <h1 className=' text-3xl font-bold my-2'>Npm</h1>
                </div>
            </div>
        </div>
    );
};

export default Myskill;