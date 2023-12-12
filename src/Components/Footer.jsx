import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' pt-10'>
            <div className='p-10 bg-[#08203a]'>
                <footer className="footer footer-center text-base-content rounded w-11/12 mx-auto">
                    <nav className="grid grid-flow-col gap-4">
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <div className=" flex gap-3">
                            <h2 className=" bg-accent p-2 rounded-full text-black"><a target="blank" href="https://www.facebook.com/roknujjamansajib"><FaFacebook className=" font-bold text-xl"></FaFacebook></a></h2>
                            <h3 className=" bg-accent p-2 rounded-full text-black"><a target="blank" href="https://www.instagram.com/roknujjamansajib/">
                                <FaInstagram className=" font-bold text-xl"></FaInstagram></a></h3>
                            <h3 className=" bg-accent p-2 rounded-full text-black"><a target="blank" href="https://twitter.com/Roknuzzaman5546"><FaTwitter className=" font-bold text-xl"></FaTwitter></a></h3>
                            <h3 className=" bg-accent p-2 rounded-full text-black"><a target="blank" href="https://www.linkedin.com/in/roknuzzaman-sojib-b794552a3/">
                                <FaLinkedin className=" font-bold text-xl"></FaLinkedin></a></h3>
                        </div>
                    </nav>
                    <aside>
                        <p>All rights reserved copyright@2023 design by Roknuzzaman</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;