import { useEffect } from 'react';
import aboutimg from '../assets/aboutimg.jpg'
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
        <div className=' bg-black'>
            <div data-aos="zoom-out" className=' w-11/12 mx-auto py-10'>
                <h2 className=" text-center text-3xl font-bold mb-10">About me</h2>
                <div className=' flex md:flex-row-reverse flex-col-reverse gap-10 justify-around items-center'>
                    <div className='w-full '>
                        <img className='h-72 w-80 rounded-md' src={aboutimg} alt="" />
                    </div>
                    <div className=' md:text-left text-center md:ml-20 ml-0'>
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
    );
};

export default About;