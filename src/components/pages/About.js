import '../../styles/about.scss';
import Portrait from '../../assets/portrait.jpg';

export default function About(props) {
    return(
        <div>
            <h2 className={props.dark ? "dark":"light"}>about me</h2>
            <div className={"about " + (props.dark ? "dark":"light")}>
                <img src={Portrait} className={"image " + (props.dark ? "dark":"light")} alt="Portrait"/>
                <p className={"text " + (props.dark ? "dark":"light")}>
                    <b>Hello! I'm Nathan,</b> a sophomore at UCLA studying computer science and engineering.I have experience with both mobile and web development, however I'm a quick learner if required to learn something new. <br /> <br />
                    
                    During my freshman year I joined the UCLA club DevX where I helped create an iOS app designed to assist students in selling or buying parking 
                    spots near UCLA.I also joined the computer science club ACM during my freshman year. Here I was a part of several web projects, two of which I was the project manager for, where I performed code reviews and delegated tickets. The majority of these 
                    sites used React and Typescript. <br /> <br />
                    
                    Outside of computer science, I enjoy going to the beach, playing Spikeball and swimming. I actually joined the UCLA club swim team during fall quarter my sophomore year. I also am a big fan of movies and
                    TV. I'm a big Marvel and Star Wars fan and have seen every movie and TV show for both. <br /> <br />

                    One more fun fact about me, the majority of my life I've actually lived on a flower farm! My family owns a flower nursery
                    where our house is also located. This nursery has been run for over three generations.

                </p>
            </div>
        </div>
    )
}