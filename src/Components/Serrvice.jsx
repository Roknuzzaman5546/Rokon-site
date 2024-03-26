import webDevelopmentImg from '../assets/webdevlopment.jpg'
import marstarkimg from '../assets/marnstark.jpg'
import fronendimg from '../assets/frontend.jpg'
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';


const Serrvice = () => {

    useEffect(() => {
        AOS.init({
            duration: 700,
            offset: 200
        });
    }, []);

    return (
        <section id='Service'>
            <div className=' bg-black'>
                <div data-aos="zoom-in" className=' w-11/12 mx-auto py-20'>
                    <h2 className='text-center text-3xl font-bold mb-10'>My Services</h2>
                    <div className=' flex md:flex-row flex-col gap-4 justify-around'>
                        <div className=' flex flex-col text-center items-center space-y-2'>
                            <img className='w-60 h-40 rounded-sm mt-2' src={fronendimg} alt="" />
                            <h1 className=' text-2xl font-bold'>Front-End developer</h1>
                            <p className='w-[300px]'>I develop the websites. create high performance website with blazing fast speed.</p>
                        </div>
                        <div className=' flex flex-col text-center items-center space-y-2'>
                            <img className='w-60 h-40 rounded-sm mt-2' src={marstarkimg} alt="" />
                            <h1 className=' text-2xl font-bold'>MERN stack developer</h1>
                            <p className='w-[300px]'>I develop the websites. create high performance website with blazing fast speed.</p>
                        </div>
                        <div className=' flex flex-col text-center items-center space-y-2'>
                            <img className='w-60 h-40 rounded-sm mt-2' src={webDevelopmentImg} alt="" />
                            <h1 className=' text-2xl font-bold'>Web Development</h1>
                            <p className='w-[300px]'>I develop the websites. create high performance website with blazing fast speed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Serrvice;