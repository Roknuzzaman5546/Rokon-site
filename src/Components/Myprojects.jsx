import gamerzone from '../assets/projects/Gamerzone.png'
import ittchimg from '../assets/projects/Ittechbd.png'
import blackbrain from '../assets/projects/Blackbrain.png'
import foodimg from '../assets/projects/Fruitbrust.png'
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

const Myprojects = () => {

    useEffect(() => {
        Aos.init({
            duration: 700,
            offset: 200
        });
    }, []);

    return (
        <div className=' bg-black' id='Project'>
            <div className=' w-11/12 mx-auto pt-20'>
                <h2 className=" text-4xl font-bold text-center mb-10">My projects</h2>
                <div>
                    <div data-aos="fade-up" className=' flex md:flex-row flex-col gap-2 justify-around'>
                        <div className=' flex flex-col items-start gap-2'>
                            <img className='w-90 h-56 rounded-md shadow-md' src={gamerzone} alt="" />
                            <h3 className=' text-left text-3xl font-bold'>Gamer zone</h3>
                            <p className=' font-bold'>HTML,CSS,Tailwind</p>
                            <button className=' btn btn-accent'><a target='blank' href="https://roknuzzaman5546.github.io/web-assginment-2/">Live Demo</a></button>
                        </div>
                        <div className=' flex flex-col items-start gap-2'>
                            <img className='w-90 h-56 rounded-md shadow-md' src={ittchimg} alt="" />
                            <h3 className=' text-left text-3xl font-bold'>It tech bd</h3>
                            <p className=' font-bold'>HTML,CSS,Tailwind, daisyui, React, mongodb</p>
                            <button className=' btn btn-accent'><a target='blank' href="https://assingment-10-projects.web.app/">Live Demo</a></button>
                        </div>
                    </div>
                    <div data-aos="fade-up" className=' flex md:flex-row flex-col gap-2 justify-around mt-10'>
                        <div className=' flex flex-col items-start gap-2'>
                            <img className='w-90 h-56 rounded-md shadow-md' src={blackbrain} alt="" />
                            <h3 className=' text-left text-3xl font-bold'>Black brain</h3>
                            <p className=' font-bold'>HTML,CSS,Tailwind,js, React</p>
                            <button className=' btn btn-accent'><a target='blank' href="https://fir-assignment-projects.web.app/">Live Demo</a></button>
                        </div>
                        <div className=' flex flex-col items-start gap-2'>
                            <img className='w-90 h-56 rounded-md shadow-md' src={foodimg} alt="" />
                            <h3 className=' text-left text-3xl font-bold'>Fruit brust</h3>
                            <p className=' font-bold'>HTML,CSS,Tailwind, daisyui</p>
                            <button className=' btn btn-accent'><a target='blank' href="https://roknuzzaman5546.github.io/3rd-assignment-/">Live Demo</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myprojects;