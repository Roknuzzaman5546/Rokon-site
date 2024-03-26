import conatactimg from '../assets/contact1.png'
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

const Mycontact = () => {

    useEffect(() => {
        Aos.init({
            duration: 700,
            offset: 200
        });
    }, []);

    return (
        <div className=' bg-black'>
            <div className=' md:max-w-screen-2xl w-11/12 mx-auto py-20'>
                <h2 className=" text-4xl font-bold text-center mb-10">Contact</h2>
                <div className=' mx-auto flex flex-col lg:flex-row lg:justify-center justify-between md:gap-[100px] gap-3 md:items-center'>
                    <div data-aos="fade-right" className='lg:w-2/5 w-full'>
                        <img className='' src={conatactimg} alt="" />
                    </div>
                    <div data-aos="fade-left" className=' lg:w-2/5 w-full text-black font-bold'>
                        <form>
                            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-md bg-white" /><br />
                            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-md my-2 bg-white" /><br />
                            <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-md mb-2 bg-white" /><br />
                            <textarea placeholder="Your massege" className="textarea textarea-bordered textarea-md w-full max-w-md bg-white" ></textarea><br />
                            <input className=' btn btn-accent mt-2' type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mycontact;