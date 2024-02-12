import '../index.css'
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import ButtonMailto from './Links';

AOS.init();

const About = () => {
    return(
        <>

        <main>

        <div className='container mt-5 mb-5'>
            <div className="row">

                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="titulo">¡Hola! Soy Alejandro</h1>
                    {/* <h2 className="titulo2">Software developer</h2> */}
                    <p><span className='text-info'>Desarrollador web</span>, apasionado del mundo de la tecnología, con gran interés por el código.</p>
                    <ul>
                        <li>
                            <img src="/linkedin.svg" alt="Telephone" />
                            <Link className="styleLinksAbout" to="https://www.linkedin.com/in/juanalejandro-cb/" target="_blank">Juan Alejandro Campillo Bustamante </Link>
                        </li>
                        <li>
                            <img src="/envelope.svg" alt="Mail" className='imgAbout' />
                            <ButtonMailto label="juanalejandrocb02@gmail.com" mailto="mailto:juanalejandrocb02@gmail.com" />
                        </li>
                        <li>
                            <img src="/github.svg" alt="Mail"/>
                            <Link className="styleLinksAbout" to="https://github.com/Alex02CB" target="_blank">Alex02CB</Link>
                        </li>
                        <li>
                            <img src="/telephone.svg" alt="Telephone" className='imgAbout' />
                            <Link className="contactStyleLinks" to="tel:+34620668132">620 668 132</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                    <img src="/alex.png" alt="Alex" className='img-fluid rounded-circle alexImg col-9 ' />  
                </div>
            </div>
        </div>

        <div className='container '>
            <div className='row boxRowAbout'>
                <div className='rounded-4 backAbout'>
                    <div className='cajaTexto '>
                        <h3>Un poco sobre mí.</h3>
                        <p>Ya desde pequeño apuntaba maneras y me llamaba mucho la atención la tecnología, lanzándome a los 13 años a montar mi primer ordenador y a crear una página web con un amigo.<br/>
                        Dada la constante evolución tecnológica, considero que el código es una herramienta muy potente actualmente para crear apps o webs que nos hagan la vida un poco más fácil. Desde que empecé a programar, no hay día en el que no haya aprendido algo nuevo, una motivación constante para seguir creciendo en este gran sector.</p>
                    </div>
                </div>
            </div>
        </div>


        <section className='container mt-5 mb-5'>
            <div className='row'>

                <div className='col-md-6'>
                    <p className='mt-5 mb-5 col-md-11 textDescription'>Soy de los que piensan que no hay que conformarse y que hay que seguir ampliando conocimientos. Por eso, dedico parte de mi tiempo libre a seguir formándome a y crear proyectos personales.<br/> Creo que es importante estar actualizado en cuanto a nuevos lenguajes o frameworks, ya que además es muy fácil estar informado de cualquier novedad gracias a la comunidad que nos rodea.</p>
                    <img src="/codigo-1.png" alt="Code1" className='imgCode1 col-md-11 img-fluid'/>
                </div>                
                    
                <div className='col-md-6 d-flex flex-row justify-content-center'>
                    <img src="/codigo-2.png" className='img-fluid imgCode1'/>
                </div>
            </div>
        </section>

        <section className='personal container mt-5 mb-5'>
            <div className='row'>
                <div className="textoImagen col-md-6 ">
                    <p className=' mb-5 col-12 col-md-10 textDescription'>Dicen que a buen entendedor, pocas palabras bastan. Me encanta disfrutar mi tiempo libre con mis hobbies.</p>
                    <img src="/bike.jpeg" className='img-fluid rounded-4 col-12 col-md-11 imgPersonal' />
                </div>
                <div className='imgPersonal col-md-6 d-flex flex-column justify-content-between'>
                    <img src="/drums.jpg" className='img-fluid rounded-4 col-12 col-md-12 imgPersonal' />
                    <img src="/pc.jpeg" className='img-fluid rounded rounded-4 col-12 col-md-12 imgPersonal' />
                </div>
            </div>
        </section>

        </main>


        <Footer></Footer>
        </>
    )
}

export default About