import '../index.css'
import { Link } from "react-router-dom";
import DownloadCVLink from '../components/DownloadCVLink';


const Footer = () => {
    return (
        <footer className='container col-md-12 d-flex'>
        <div className='row'>
            <ul className='d-flex flex-wrap align-items-center'>
                <li><Link className="enlaceNav1" to="/about">Sobre mi</Link></li>
                <li><Link className="enlaceNav" to="/projects">Proyectos</Link></li>
                <li><Link className="enlaceNav" to="/contact">Contacto</Link></li>
                <li><DownloadCVLink/></li>
                
                <li>
                    <Link className="enlaceNav" to="https://github.com/Alex02CB" target="_blank">
                        <img src="/github.svg" alt="GitHub" />
                    </Link>
                </li>

                <li>
                    <Link className="enlaceNav" to="https://www.linkedin.com/in/juanalejandro-cb/" target="_blank">
                        <img src="/linkedin.svg" alt="Linkedin" />
                    </Link>
                </li>

            </ul>
        </div>
        </footer>
    );
  };
  
  export default Footer;