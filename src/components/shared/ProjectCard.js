import '../../styles/projectCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectCard(props) {
    return (
        <div className={"projectCard " + (props.dark ? "darkCard":"lightCard")}>
            <h3  id="projectTitle">{props.name}</h3>
            <div id="projectInfoRow">
                {props.project !== "" ?<a href={props.project} rel="noreferrer noopener" target="_blank" className={"link " + (props.dark ? "dark":"light")}><FontAwesomeIcon icon={faLink} /> project</a>:null}
                <a href={props.repo} rel="noreferrer noopener" target="_blank" className={"link " + (props.dark ? "dark":"light")}><FontAwesomeIcon icon={faGithub} /> repo</a>
            </div>
            <p> {props.description} </p>
        </div>
    )
}