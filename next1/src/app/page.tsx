import Header from './_components/header';
import Skill from './_components/skill';
import Intro from './_components/intro';
import About from './_components/about';
import Projects from './_components/projects';
import Archive from './_components/archive';

export default function Home() {
    return (
        <>
            <Header />
            <Intro />
            <About />
            <Skill />
            <Archive />
            <Projects />
        </>
    );
}
