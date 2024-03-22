import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { v4 as uuidv4 } from "uuid";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { getImageUrl } from "../../utils/imageUtils";

import { useThemeContext } from "../../context/themeContext";
import "./index.css";

const navLinkOptions = [
    "home",
    "about",
    "resume",
    "skills",
    "projects",
    "contact",
];

const NavBar = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const { theme, toggleTheme } = useThemeContext();
    const isLightTheme = theme === "light-theme";

    return (
        <>
            <motion.nav className="navbar-bg-container">
                <div className="nav-logo-container">
                    <img
                        src={`${
                            isLightTheme
                                ? getImageUrl("nav-logo-dark.svg")
                                : getImageUrl("nav-logo.png")
                        }`}
                        alt="nav-logo"
                        className="nav-logo"
                    />
                    <h1 className="navbar-heading ">ANISH KUMAR SINHA</h1>
                </div>
                <ul className="nav-list-item-bg-container-lg">
                    {navLinkOptions.map((option) => (
                        <li className="nav-list-item-lg" key={uuidv4()}>
                            {option}
                        </li>
                    ))}
                </ul>

                <div className="hamburg-icon-and-theme-change-bg-container">
                    <div className="hamburger-bg-container">
                        <Hamburger
                            size={22}
                            duration={0.5}
                            distance={"lg"}
                            toggled={isHamburgerOpen}
                            toggle={setIsHamburgerOpen}
                        />
                    </div>

                    <div
                        className="change-theme-bg-container"
                        onClick={toggleTheme}
                    >
                        {isLightTheme ? (
                            <BsMoonFill className="dark-mode-icon" />
                        ) : (
                            <BsFillSunFill className="light-mode-icon" />
                        )}
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isHamburgerOpen && (
                    <motion.div
                        className="styled-menu-container"
                        initial={{ x: 100 }}
                        animate={{ x: 0, transition: { type: "spring" } }}
                        exit={{ x: 200, transition: { type: "spring" } }}
                    >
                        <ul className="nav-list-item-bg-container">
                            {navLinkOptions.map((option) => (
                                <li className="nav-list-item" key={uuidv4()}>
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;
