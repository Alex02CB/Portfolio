import '../index.css'
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import ButtonMailto from './Links';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

AOS.init();

// Animaciones div

const AnimatedDiv = ({ children, delay = 0 }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5, rootMargin: '0px' });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
        transition={{ duration: 0.5, delay }}
        style={{color: '#fff', borderRadius: '10px' }}
      >
        {children}
      </motion.div>
    );
  };


const About = () => {

    return(

    <>

    <main>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        
        <div className='container mt-5 mb-5'>
            <div className="row">

                <div className="col-md-6 d-flex flex-column justify-content-center">

                    <div className='d-flex flex-row mb-2'>
                        <div className='col-8 col-md-12 col-lg-12'>
                            <h1 className="titulo">¡Hola! Soy Alejandro</h1>
                        </div>
                        <div className='col-4 d-flex justify-content-center align-items-center'>
                            <img src="/alex.png" alt="Alex" className='img-fluid rounded-circle alexImgMobile '/> 
                        </div>
                    </div>
 
                    <p><span className='text-info'>Desarrollador web</span> y apasionado del mundo de la tecnología.</p>
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

                <div className="col-md-6 col-lg-6 col-12 d-flex justify-content-center">
                    <img src="/alex.png" alt="Alex" className='img-fluid rounded-circle alexImg col-8 col-md-12 col-lg-8'/>  
                </div>
            </div>
        </div>





    <section className='Card'>

        <h2 className='container'>Habilidades técnicas</h2>
    
            {/* CARD1 */}

            <AnimatedDiv>

            <div className="container">
                <div className="row card1">
                    <div className='col-lg-6 textCard1'>
                        <div className='col-lg-8 habilidades'>
                            <h3>Lenguajes de Programación y Frameworks:</h3>
                                <ul>
                                    <li><strong>JavaScript</strong></li>
                                    <li><strong>React.js</strong></li>
                                    <li><strong>Node.js</strong></li>
                                    <li><strong>PHP</strong></li>
                                    <li><strong>Laravel</strong></li>
                                </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 p-0'>
                        <img src="/imgHome1.png" className='img-fluid rounded-2'/>
                    </div>
                </div>
            </div>

            </AnimatedDiv>

            {/* END CARD 1 */}

            {/* CARD 2 */}

            <AnimatedDiv>

            <div className="container">
                <div className="row card1">
                    <div className='col-lg-6 textCard1'>
                        <div className='col-lg-8 habilidades'>
                            <h3>Tecnologías Web:</h3>
                                <ul>
                                    <li><strong>HTML5</strong></li>    
                                    <li><strong>CSS3/SASS</strong></li>
                                    <li><strong>Tailwind CSS</strong></li>
                                    <li><strong>Bootstrap</strong></li>
                                </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 p-0'>
                        <img src="/sass.png" className='img-fluid rounded-2'/>
                    </div>
                </div>
            </div>

            </AnimatedDiv>

            {/* END CARD 2 */}

            {/* CARD 3 */}

            <AnimatedDiv>

            <div className="container">
                <div className="row card1">
                    <div className='col-lg-6 textCard1'>
                        <div className='col-lg-8 habilidades'>
                            <h3>SEO y Analítica:</h3>
                                <ul>
                                    <li><strong>SEO</strong></li>
                                    <li><strong>Google Analytics</strong> </li>
                                    <li><strong>Google Search Console</strong> </li>
                                </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 p-0'>
                        <img src="/seo.png" className='img-fluid rounded-2'/>
                    </div>
                </div>
            </div>

            </AnimatedDiv>

            {/* END CARD 3 */}

            {/* CARD 4 */}

            <AnimatedDiv>

            <div className="container">
                <div className="row card1">
                    <div className='col-lg-6 textCard1'>
                        <div className='col-lg-8 habilidades'>
                            <h3>Herramientas de desarrollo:</h3>
                                <ul>
                                    <li><strong>Gulp.js</strong></li>
                                    <li><strong>Git y GitHub</strong></li>
                                    <li><strong>Figma</strong></li>
                                </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 p-0'>
                        <img src="/figma.png" className='img-fluid rounded-2'/>
                    </div>
                </div>
            </div>

            </AnimatedDiv>

            {/* END CARD 4 */}

            {/* CARD 5 */}

            <AnimatedDiv>

            <div className="container">
                <div className="row card1">
                    <div className='col-lg-6 textCard1'>
                        <div className='col-lg-8 habilidades'>
                            <h3>Sistemas de Gestión de Contenidos (CMS):</h3>
                                <ul>
                                    <li><strong>WordPress</strong></li>
                                    <li><strong>PrestaShop</strong></li>
                                </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 p-0'>
                        <img src="/wordpress.png" className='img-fluid rounded-2'/>
                    </div>
                </div>
            </div>

            </AnimatedDiv>

            {/* END CARD 5 */}

            {/* CARD 6 */}

            <AnimatedDiv>

            <div className="container">
                <div className="row card1">
                    <div className='col-lg-6 textCard1'>
                        <div className='col-lg-8 habilidades'>
                        <h3>Base de datos:</h3>
                                <ul>
                                    <li><strong>MySQL</strong></li>
                                </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 p-0'>
                        <img src="/mysql.png" className='img-fluid rounded-2'/>
                    </div>
                </div>
            </div>

            </AnimatedDiv>

            {/* END CARD 6 */}   

    </section>     

    <hr className='container' />

        <div className='container '>
            <div className='row boxRowAbout'>
                
                    <div className='cajaTexto '>
                        <h3>Un poco sobre mí.</h3>
                        <p>Ya desde pequeño apuntaba maneras y me llamaba mucho la atención la tecnología. A los 13 años me lancé a montar mi primer ordenador y a crear una página web con un amigo.<br/>
                        Dada la constante evolución tecnológica, el código es una herramienta muy potente a día de hoy para crear apps o webs que nos hagan la vida un poco más fácil. Desde que empecé a programar, no hay día en el que no haya aprendido algo nuevo, una motivación constante para seguir creciendo en este gran sector.</p>
                    </div>
                
            </div>
        </div>

        <div className='container '>
            <div className='row boxRowAbout'>
                <div className='rounded-4'>
                    <div className='cajaTextoInicio '>
                        <p>Soy de los que piensan que no hay que conformarse y que hay que seguir ampliando conocimientos y buscando metas nuevas. Por eso, dedico parte de mi tiempo libre a seguir formándome y a crear proyectos personales.<br/> Es esencial estar actualizado en cuanto a nuevos lenguajes o frameworks, ya que además es muy fácil estar informado de cualquier novedad gracias a la comunidad que nos rodea.</p>
                    </div>
                </div>
            </div>
        </div>
   
        <section className='personal container mt-5 mb-5'>
            <div className='row'>
                <div className="textoImagen col-md-6 ">
                    <p className=' mb-5 col-12 col-md-10 textDescription'>Dicen que a buen entendedor, pocas palabras bastan. Me encanta dedicar mi tiempo libre a mis hobbies.</p>
                    <img src="/bike.jpeg" className='img-fluid rounded-2 col-12 col-md-11 imgPersonal' />
                </div>
                <div className='imgPersonal col-md-6 d-flex flex-column justify-content-between'>
                    <img src="/drums.jpg" className='img-fluid rounded-2 col-12 col-md-12 imgPersonal' />
                    <img src="/pc.jpeg" className='img-fluid rounded rounded-2 col-12 col-md-12 imgPersonal' />
                </div>
            </div>
        </section>
       
        </div>

    </main>


        <Footer></Footer>
        </>
    )
}

export default About