import Nav from './Nav';
import TextSlider from './textSlider/TextSlider';
function Header() {
    const textList = [
        "Software Engineer",
        "Front End Developer",
        "Lifelong Learner",
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
