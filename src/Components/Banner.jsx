import ParticlesBg from "particles-bg";
import bgimg from '../assets/Logo.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Banner = () => {

    return (
        <div className=" h-screen">
            <div className=" flex md:flex-row flex-col-reverse gap-5 justify-around items-center w-11/12 mx-auto mt-36">
                <div className=" text-left">
                    <h2 className=" text-5xl text-white">Hi There👋 <br />I am <span className=" text-pink-900">Roknuzzaman</span></h2>
                    <p className=" text-white">I am Into <span className=" text-yellow-500">Frontend-Devlopment</span></p>
                    <button className=" btn btn-accent btn-sm my-1">Resume</button>
                    <div className=" flex gap-2">
                        <h2 className=" bg-accent p-2 rounded-full text-black"><FaFacebook className=" font-bold text-xl"></FaFacebook></h2>
                        <h3 className=" bg-accent p-2 rounded-full text-black"><FaInstagram className=" font-bold text-xl"></FaInstagram></h3>
                        <h3 className=" bg-accent p-2 rounded-full text-black"><FaTwitter className=" font-bold text-xl"></FaTwitter></h3>
                        <h3 className=" bg-accent p-2 rounded-full text-black"><FaLinkedin className=" font-bold text-xl"></FaLinkedin></h3>
                    </div>
                </div>
                <div className="">
                    <img className="w-64 h-60 rounded-full" src={bgimg} alt="" />
                </div>
            </div>
            <ParticlesBg type="random" bg={true}></ParticlesBg>
        </div>
    );
};

export default Banner;