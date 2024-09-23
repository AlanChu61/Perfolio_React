import Nav from './Nav';
import TextSlider from '../Main/TextSlider';
function Header() {
    const textList = [
        "Web Developer",
        "Software Engineer",
        "Front End Developer",
        "Back End Developer",
        "Full Stack Developer",
        "Lifelong Learner",
        "Problem Solver",
        "Pokemon Enthusiast",
        "Explorer of Life's Possibilities"

    ];
    const interval = 1000;
    return (
        <header className='Header'>
            <Nav />
            <TextSlider textList={textList} interval={interval} />
        </header>
    );
}

export default Header;
