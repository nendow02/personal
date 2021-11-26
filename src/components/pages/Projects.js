import '../../styles/projects.scss';
import ProjectCard from '../shared/ProjectCard';

export default function Projects(props) {
    //project:"" if no project url
    let projects = [
        {   name:"BoolBots",
            repo:"https://github.com/uclaacm/boolbots", 
            project:"https://boolbots.uclaacm.com/",
            description:"BoolBots is a project developed inside ACM Teach LA made with the intent to help middle schoolers learn about booleans. This project used React and Typescript and was deployed with Netlify. I was the project manager, leading a team of six."
        },
        {   name:"Speed Eating",
        repo:"https://github.com/nendow02/Speed-Eater", 
        project:"",
        description:"Speed Eater is an iOS game where your goal is to eat as many hamburgers as you can by moving your mouth in real life. This app was written in Swift and uses ARKit to detect the user's mouth movement. Developed and published by myself as a personal project."
         },
        {   name:"Infone",
        repo:"https://github.com/nendow02/Infone", 
        project:"",
        description:"An iOS app that gives users information about their iPhone such as its screen size or water resistance. It also allows users to browse other iOS devices with the ability to save and name them. Developed in Swift by myself as a personal project."
          },
        {   name:"Dev Pathways",
        repo:"https://github.com/uclaacm/dev-pathways", 
        project:"https://dev-pathways.netlify.app",
        description:"Dev Pathways is an ACM React app that aims to make the onboarding process for new members easier by organizing learning resources in a more navigable and organized way. I worked with a team of five on this project, which was developed with Javascript."
        },
        {   name:"InstaPark",
        repo:"https://github.com/ucladevx/InstaPark-ios", 
        project:"",
        description:"An iOS app that helps UCLA students buy or sell parking spots. This app is developed with Swift and uses Firebase for the backend. Transcactions for purchases were done through Venmo. I was a member of the team which had three other developers and two designers."
        }
    ]
    return(
        <div id="project">
            <h2 className={props.dark ? "dark":"light"}>projects</h2>
            <div className="projectsGrid">
                {projects.map(i => <ProjectCard name={i.name} repo={i.repo} project={i.project} description={i.description} dark={props.dark} key={i.name} />)}
            </div>
        </div>
    )
}