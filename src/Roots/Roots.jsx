import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className=' bg-black'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Roots;