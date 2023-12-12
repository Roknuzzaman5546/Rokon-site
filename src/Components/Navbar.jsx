import { Link } from "react-router-dom";
import bgimg from '../assets/Logo.jpg'

const Navbar = () => {
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/service'>Service</Link></li>
        <li><Link to='/skill'>Skill</Link></li>
        <li><Link to='/project'>Project</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>

    return (
        <div className="bg-gray-900">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-Slabo font-bold">
                            {links}
                        </ul>
                    </div>
                    <img className=" w-10 h-10 rounded-full" src={bgimg} alt="" />
                    <a className="btn btn-ghost text-purple-700 text-2xl font-Lobester font-bold">Roknuzzaman</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-Slabo font-bold text-xl">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;