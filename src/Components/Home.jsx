import About from "./About";
import Banner from "./Banner";
import Mycontact from "./Mycontact";
import Myprojects from "./Myprojects";
import Myskill from "./Myskill";
import Serrvice from "./Serrvice";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Serrvice></Serrvice>
            <Myskill></Myskill>
            <Myprojects></Myprojects>
            <Mycontact></Mycontact>
        </div>
    );
};

export default Home;