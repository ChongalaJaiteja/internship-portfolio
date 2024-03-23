import { motion } from "framer-motion";
import LazyImageLoader from "../lazyLoader";
import SocialMediaHandlers from "../socialMediaHandlers";
import "./index.css";

const Home = () => {
    return (
        <div className="home-bg-container">
            <motion.div
                className="home-profile-bg-container"
                initial={{ opacity: 0, x: 13 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1.5, type: "spring" },
                }}
                viewport={{ amount: 0.5 }}
            >
                <LazyImageLoader
                    imageSrc={"profile.png"}
                    altName="avatar"
                    className="home-profile-img"
                />
            </motion.div>
            <motion.div
                className="home-content-bg-container"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1.5, type: "spring" },
                }}
                viewport={{ amount: 0.5 }}
            >
                <h1 className="home-greeting-text" data-text="Hello!">
                    I'm <span className="name">Anish</span> 👋
                </h1>
                <p className="home-content-para">
                    UI/UX Designer, Front-End Developer & Thinker. Based in
                    India.
                </p>
                <SocialMediaHandlers />
                <div className="home-content-btn-bg-container">
                    <button className="home-btn cv-btn">Download CV</button>
                    <button className="home-btn get-in-touch-btn">
                        Get in Touch!
                    </button>
                </div>
            </motion.div>
        </div>
    );
};
export default Home;
