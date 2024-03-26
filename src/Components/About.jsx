import { useEffect } from 'react';
import aboutImg from '../assets/aboutImg.jpg'
import 'aos/dist/aos.css';
import Aos from 'aos';

const About = () => {

    useEffect(() => {
        Aos.init({
            duration: 700,
            offset: 200
        });
    }, []);

    return (
        <section id='About'>
            <div className=' bg-black'>
                <div data-aos="zoom-out" className=' py-10 md:max-w-screen-2xl w-11/12 mx-auto'>
                    <h2 className=" text-center text-3xl font-bold mb-10">About me</h2>
                    <div className=' mx-auto flex flex-col lg:flex-row-reverse lg:justify-center xl:justify-between md:gap-[100px] gap-3 md:items-center'>
                        <div className='lg:w-2/5 w-full'>
                            <img className='h-72 rounded-md' src={aboutImg} alt="" />
                        </div>
                        <div className='lg:w-2/5 w-full md:text-left text-center md:ml-20 ml-0'>
                            <h2 className=' text-2xl font-bold mb-2'>I am Roknuzzaman</h2>
                            <p className=' text-xl my-2'>Frontend web devloper</p>
                            <p>Hey, I am Roknuzzaman. I am an Fontend Web-Devloper.I am a website developer from Bangladesh. I create professional websites. As a web   developer, I have a passion for creating dynamic and engaging online  experiences.</p>
                            <div className=' flex items-center md:flex-row flex-col gap-2'>
                                <h2><span className=' text-blue-700'>Email:</span> roknuzzamansojib78@gmail.com</h2>
                                <h2><span className=' text-blue-700'>Place:</span>Rangpur, Bangladesh</h2>
                            </div>
                            <button className=' btn btn-accent mt-2'>Hire me</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;