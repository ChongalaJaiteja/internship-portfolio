import "./index.css";
import NavBar from "../navBar";
import Home from "../home";
import About from "../about";
import SocialMediaHandlers from "../socialMediaHandlers";

const MainPage = () => {
    return (
        <>
            <NavBar />
            <Home />
            <About />
            <SocialMediaHandlers sticky={true} />
            <p className="mail-bg-container">sinhaanishkumar@outlook.com</p>
        </>
    );
};

export default MainPage;
