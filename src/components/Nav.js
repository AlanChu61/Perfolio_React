import React, { useRef, useState, useEffect } from 'react';

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
        <nav className={`nav ${isNavSticky ? 'sticky' : ''}`}>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">Alan Hwader Chu</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <a href="#selfIntro" onClick={handleNavClick}>Self Introduction</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={handleNavClick}>Projects</a>
                    </li>
                    <li>
                        <a href="#skills" onClick={handleNavClick}>Skills</a>
                    </li>
                    <li>
                        <a href="#education" onClick={handleNavClick}>Education</a>
                    </li>
                </ul>
            </div>
            <div ref={projectRef}></div>
        </nav>
    );
}

export default Nav;
