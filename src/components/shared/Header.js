import '../../styles/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import Resume from '../../assets/resume.pdf';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
      <div className={"header " + (props.dark ? "darkHead":"lightHead")}>
        <Link to="/" className={"name " + (props.dark ? "dark":"light")}>nathan endow</Link>
         <nav id="nav">
            <Link to="/projects" className={"navitem " +(props.dark ? "dark":"light")}>projects</Link>
            <a href={Resume} rel="noopener noreferrer" target="_blank" className={"navitem "+ (props.dark ? "dark":"light")}>resume</a>
            <Link to="/contact" className={"navitem " + (props.dark ? "dark":"light")}>contact</Link>
            <button className={"navitem " + (props.dark ? "darkBut":"lightBut")} onClick={props.handleClick}>
              <FontAwesomeIcon icon={props.dark ? faSun:faMoon} /> 
              </button>
        </nav>
      </div>
    );
}
  