
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return <footer className="page-footer">
        <div className="footer-copyright">
            <div className="container">
                Copyright &copy;{new Date().getFullYear()} Alan Hwader Chu. All rights reserved.
                <a className="grey-text text-lighten-4 right" href="#!"><SocialIcon url="https://www.linkedin.com/in/alan-hwader-chu/" />   <SocialIcon url="https://github.com/AlanChu61" /></a>
            </div>
        </div>
    </footer>




}
export default Footer;