
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return <footer>
        <SocialIcon url="https://www.linkedin.com/in/alan-hwader-chu/" />
        <SocialIcon url="https://github.com/AlanChu61" />
        <span>
            Copyright &copy;{new Date().getFullYear()} Alan Hwader Chu. All rights reserved.
        </span>
    </footer>

}
export default Footer;