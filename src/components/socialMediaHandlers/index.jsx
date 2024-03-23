import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const socialMediaIcons = [
    <FaFacebook />,
    <FaInstagram />,
    <FaTwitter />,
    <FaGithub />,
    <FaLinkedin />,
    <FaTelegram />,
];

const SocialMediaHandlers = ({ sticky = false }) => {
    return (
        <ul
            className={`social-media-handlers-bg-container ${
                sticky ? " social-media-lg-bg-container" : ""
            }`}
        >
            {socialMediaIcons.map((icon) => (
                <li key={uuidv4()} className="social-media-handlers-icon">
                    {icon}
                </li>
            ))}
        </ul>
    );
};

export default SocialMediaHandlers;
