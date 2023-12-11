import webdevlopmentimg from '../assets/webdevlopment.jpg'
import marstarkimg from '../assets/marnstark.jpg'
import fronendimg from '../assets/frontend.jpg'


const Serrvice = () => {
    return (
        <div className=' w-11/12 mx-auto mt-20'>
            <h2 className='text-center text-3xl font-bold mb-10'>My Services</h2>
            <div className=' flex md:flex-row flex-col gap-4 justify-around'>
                <div className=' flex flex-col items-center space-y-2'>
                    <img className='w-60 h-40 rounded-sm mt-2' src={fronendimg} alt="" />
                    <h1 className=' text-2xl font-bold'>Front-End developer</h1>
                    <p>I develop the websites. create high performance website with blazing fast speed.</p>
                </div>
                <div className=' flex flex-col items-center space-y-2'>
                    <img className='w-60 h-40 rounded-sm mt-2' src={marstarkimg} alt="" />
                    <h1 className=' text-2xl font-bold'>MERN stack developer</h1>
                    <p>I develop the websites. create high performance website with blazing fast speed.</p>
                </div>
                <div className=' flex flex-col items-center space-y-2'>
                    <img className='w-60 h-40 rounded-sm mt-2' src={webdevlopmentimg} alt="" />
                    <h1 className=' text-2xl font-bold'>Web Development</h1>
                    <p>I develop the websites. create high performance website with blazing fast speed.</p>
                </div>
            </div>
        </div>
    );
};

export default Serrvice;