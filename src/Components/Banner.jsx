import ParticlesBg from "particles-bg";
import bgimg from '../assets/Logo.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Banner = () => {

    return (
        <div className="">
            <div className=" flex md:flex-row flex-col-reverse gap-5 justify-around items-center w-11/12 mx-auto md:my-20 mt-10">
                <div className=" text-left">
                    <h2 className=" text-6xl text-white font-Lobester">Hi There👋 <br />I am <span className=" text-pink-900">Roknuzzaman</span></h2>
                    <p className=" text-white text-xl font-Slabo">I am Into <span className=" text-yellow-500">Frontend-Devlopment</span></p>
                    <button className=" font-bold font-Slabo btn btn-accent my-2"><a target="blank" href="https://drive.google.com/file/d/1DA9eSLSUOabyiUOQTgU6MRZfBzVVvgkN/view?usp=sharing" download>Download Resume</a></button>
                    <div className=" flex gap-3">
                        <h2 className=" bg-accent p-2 rounded-full text-black"><a target="blank" href="https://www.facebook.com/roknujjamansajib"><FaFacebook className=" font-bold text-xl"></FaFacebook></a></h2>
                        <h3 className=" bg-accent p-2 rounded-full text-black"><a target="blank" href="https://www.instagram.com/roknujjamansajib/">
                            <FaInstagram className=" font-bold text-xl"></FaInstagram></a></h3>
                        <h3 className=" bg-accent p-2 rounded-full text-black"><a target="blank" href="https://twitter.com/Roknuzzaman5546"><FaTwitter className=" font-bold text-xl"></FaTwitter></a></h3>
                        <h3 className=" bg-accent p-2 rounded-full text-black"><a target="blank" href="https://www.linkedin.com/in/roknuzzaman-sojib-b794552a3/">
                            <FaLinkedin className=" font-bold text-xl"></FaLinkedin></a></h3>
                    </div>
                </div>
                <div className="">
                    <img className=" w-72 h-72 rounded-full" src={bgimg} alt="" />
                </div>
            </div>
            <ParticlesBg type="random" bg={true}></ParticlesBg>
        </div>
    );
};

export default Banner;