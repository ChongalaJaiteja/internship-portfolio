import { motion } from "framer-motion";
import LazyImageLoader from "../lazyLoader";
import "./index.css";

const About = () => {
    return (
        <div className="about-section-bg-container">
            <motion.div
                className="about-section-img-bg-container"
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: { duration: 1.5, type: "spring" },
                }}
            >
                <LazyImageLoader
                    imageSrc={"hand.png"}
                    altName="hand"
                    className="about-section-img"
                />
                <div className="circle-img-bg-container">
                    <LazyImageLoader
                        imageSrc={"yellow-circle.png"}
                        altName="hand"
                        className="circle-img"
                    />
                </div>
            </motion.div>
            <motion.div
                className="about-section-content-bg-container"
                initial={{ opacity: 0, x: 15 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1.5, type: "spring" },
                }}
            >
                <div className="about-section-title-container">
                    <h1 className="about-secion-main-heading">
                        This is it. ;)
                    </h1>
                    <hr className="hr-line" />
                </div>
                <p className="about-section-content">
                    Anish Kr. Sinha is an Indian{" "}
                    <span className="highlighted-text">
                        UI/UX Designer & Front End Developer
                    </span>{" "}
                    with a passion for designing beautiful and fuctional user
                    experiences. Typically, he’s Driven & permanently Curious.
                    He’s obsessed with designing things and even more obsessed
                    with designing cool & clean stuff for the web and mobile. He
                    has been in the business of creating since he hung his first
                    painting on the wall when he was 11.
                    <br />
                    He holds a{" "}
                    <span className="highlighted-text">
                        bachelor degree in Computer Applications.
                    </span>{" "}
                    During his graduation, he has been actively involved in the
                    web design community for the last 3 years. he has designed
                    websites for small businesses, events, nonprofits and more.
                    Currently he’s based in Bihar, India. Where he’s working as
                    an independent creative.
                    <br />
                    <br />
                    His interests, however, extend beyond the web and he loves
                    helping people with branding and print design. He even loves
                    designing{"  "}
                    <span className="highlighted-text">3D floor plan</span>
                    <br />
                    <br />
                    When he’s not designing, he’s probably hanging out with his
                    girlfriend, watching series, sketching or messing around on
                    something inspired by YouTube tutorials.
                </p>
                <hr className="about-bottom-hr-line" />
            </motion.div>
        </div>
    );
};

export default About;
