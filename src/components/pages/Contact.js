import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../../styles/contact.scss';

export default function Contact(props) {
    return(
        <div>
            <h2 className={props.dark ? "dark":"light"}>contact</h2>
            <div className="contact">
                <p className={"text " +(props.dark ? "dark":"light")}>Feel free to reach me through any of the following below!</p>
                <div id="links">
                    <a href="https://www.linkedin.com/in/nathan-endow/" rel="noreferrer noopener" target="_blank" className={"link " + (props.dark ? "dark":"light")}><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a>
                    <a href="https://github.com/nendow02" rel="noreferrer noopener" target="_blank" className={"link " + (props.dark ? "dark":"light")}><FontAwesomeIcon icon={faGithub} /> GitHub</a>
                    <a href = "mailto: nendow02@gmail.com" className={"link " + (props.dark ? "dark":"light")}><FontAwesomeIcon icon={faEnvelope} /> nendow02@gmail.com</a>
                </div>
            </div>
        </div>
    )
}