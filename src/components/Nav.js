import React, { useRef, useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
function Nav() {
    const projectRef = useRef(null);
    const [isNavSticky, setIsNavSticky] = useState(false);

    const handleNavClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(target);
        if (targetElement) {
            const targetOffsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: targetOffsetTop,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            if (currentScrollPosition > 60) {
                setIsNavSticky(true);
            } else {
                setIsNavSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`nav light-green ${isNavSticky ? 'sticky' : ''}`}>
            <div className="nav-wrapper">
                <a href="/">Alan Hwader Chu</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <a href="#selfIntro" onClick={handleNavClick}>Self Introduction</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={handleNavClick}>Projects</a>
                    </li>
                    <li>
                        <a href="#education" onClick={handleNavClick}>Education</a>
                    </li>
                    <SocialIcon url="https://www.linkedin.com/in/alan-hwader-chu/" />
                    <SocialIcon url="https://github.com/AlanChu61" />

                </ul>
            </div>
            <div ref={projectRef}></div>
        </nav>
    );
}

export default Nav;
