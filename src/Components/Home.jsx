import About from "./About";
import Banner from "./Banner";
import Myskill from "./Myskill";
import Serrvice from "./Serrvice";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Serrvice></Serrvice>       
            <Myskill></Myskill>     
        </div>
    );
};

export default Home;