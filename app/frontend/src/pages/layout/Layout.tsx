import { Outlet, NavLink, Link } from "react-router-dom";

import telekom from "../../assets/T-logo.svg";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>
                        <img
                            src={telekom}
                            alt="Telekom Logo"
                            aria-label="B2B SK Telekom"
                            width="92"
                            height="46"
                        /></h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <h3 className={styles.headerTitle}> B2B SK GPT | Sample &nbsp;&nbsp;&nbsp;</h3>
                            </li>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Ask a question
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <a href="https://moja-firma.telekom.sk/" target={"_blank"} title="B2B SK Telekom link">
                                    <img
                                        src={telekom}
                                        alt="Telekom Logo"
                                        aria-label="B2B SK Telekom link"
                                        width="92"
                                        height="46"
                                        className={styles.githubLogo}
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>Azure OpenAI + Cognitive Search</h4>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
