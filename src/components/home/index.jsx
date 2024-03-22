import "./index.css";
import NavBar from "../navBar";
import LazyImageLoader from "../lazyLoader";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="home-bg-container">
                <div className="home-profile-bg-container">
                    <LazyImageLoader
                        imageSrc={"profile.png"}
                        altName="avatar"
                        className="home-profile-img"
                    />
                </div>
                <div className="home-content-bg-container">
                    <h1 className="home-greeting-text">
                        I'm <span className="name">Anish</span> 👋
                    </h1>
                    <p className="home-content-para">
                        UI/UX Designer, Front-End Developer & Thinker. Based in
                        India.
                    </p>

                    <div className="home-content-btn-bg-container">
                        <button className="home-btn cv-btn">Download CV</button>
                        <button className="home-btn get-in-touch-btn">
                            Get in Touch!
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;
