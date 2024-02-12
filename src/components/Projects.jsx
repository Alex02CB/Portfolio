import '../index.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const Projects = () => {

    return(        
        <>

        <main>

        <div className='container mt-5 mb-5'>
            <div className="row">

                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="titulo">Proyectos</h1>
                    <p>Aquí tenéis algunos de los proyectos que he creado y en los que he trabajado.</p>
                </div>
            </div>
        </div>

        <section className='container'>
            <div className='row'>

                <div className="div-img-projects div-img-project-1 d-flex align-items-center col-md-6 rounded-4 order-1 order-sm-0 p-2">
                    <img src="/stage.jpg" alt="Stage-Tour" className='img-fluid mx-auto d-block p-0 rounded-4'/>
                </div>

                <div className="div-text-projects col-md-5 offset-md-1 d-flex flex-column text-align-center justify-content-center order-0 order-sm-1 ">
                    <h2>Stage Tour</h2>
                    <p>Stage-Tour es uno de mis proyectos personales. El objetivo de esta página es la gestión y planificación de las empresas del sector audiovisual.
                    En ella se puede organizar el stock del material, así como el personal, proporcionando a los empleados un listado actualizado de lo que necesitan y de los días que trabajarán. 
                    </p>
                </div>
            </div>
        </section>

        <section className='container mt-5'>
            <div className='row'>

                <div className="div-text-projects col-md-6 d-flex flex-column text-align-center justify-content-center order-1 order-sm-0 ">
                    <h2>Maya Vergel</h2>
                    <p className='col-md-10'>Maya Vergel Ceramic Studio es un taller de cerámica donde desarrollan paralelamente el diseño y producción de objetos cerámicos con el servicio de talleres regulares formativos de cerámica para todos los públicos.</p>
                </div>

                <div className="div-img-projects col-md-6 div-img-project-2  p-0 order-1 order-sm-0 d-flex align-items-center justify-content-center p-2">
                    <Link to="https://mayavergel.com/" target='_blank'>
                        <img src="/maya.jpg" alt="Maya Vergel" className='img-fluid mx-auto d-block rounded-4'/>
                    </Link>
                </div>

            </div>
        </section>

        <section className='container mt-5'>
            <div className='row'>

                <div className="div-img-projects col-md-6 div-img-project-3  order-1 order-sm-0 d-flex align-items-center justify-content-center p-2">
                    <Link to="https://roomarquitectos.com/" target='_blank'>
                        <img src="/room.jpg" alt="RoomArquitectos" className='img-fluid mx-auto d-block p-0 rounded-4'/>
                    </Link>
                </div>

                <div className="div-text-projects col-md-5 offset-md-1 d-flex flex-column text-align-center justify-content-center order-0 order-sm-1 ">
                    <h2>Room Arquitectos</h2>
                    <p>Room arquitectos es una empresa de arquitectura que ofrece servicios de diseño, planificación y construcción de edificios y otras estructuras.</p>
                </div>

            </div>
        </section>

        <section className='container mt-5'>
            <div className='row'>

                <div className="div-text-projects col-md-6 d-flex flex-column text-align-center justify-content-center order-1 order-sm-0 ">
                    <h2>Fourminds</h2>
                    <p className='col-md-10'>Fourminds es una productora audiovisual en Granada que produce contenido propio de ficción.</p>
                </div>

                <div className="div-img-projects col-md-6 div-img-project-4 order-1 order-sm-0 d-flex align-items-center justify-content-center p-2">
                    <Link to="https://www.wearefourminds.com/" target='_blank'>
                        <img src="/fourminds.jpg" alt="fourminds" className='img-fluid mx-auto d-block p-0 rounded-4'/>
                    </Link>
                </div>

            </div>
        </section>

        <section className='container mt-5'>
            <div className='row'>

                <div className="div-text-projects col-md-5 offset-md-1 d-flex flex-column text-align-center justify-content-center order-0 order-sm-1 ">
                    <h2>Unión Harinera</h2>
                    <p>Unión Harinera es una empresa granadina dedicada desde 1963 a la fabricación de harinas de trigo y centeno, convencionales y ecológicas.</p>
                </div>

                <div className="div-img-projects col-md-6 div-img-project-5 order-1 order-sm-0 d-flex align-items-center justify-content-center p-2">
                    <Link to="http://unionharinera.com/" target='_blank'>
                        <img src="/union.jpg" alt="Union-Harinera" className='img-fluid mx-auto d-block p-0 rounded-4'/>
                    </Link>
                </div>

            </div>
        </section>

        <section className='container mt-5'>
            <div className='row'>

                <div className="div-text-projects col-md-6 d-flex flex-column text-align-center justify-content-center order-1 order-sm-0 ">
                    <h2>Modo 3D</h2>
                    <p className='col-md-10'>Especialistas en visualización arquitectónica. Destacan en la representación de espacios en 3D, donde transforman cualquier proyecto de arquitectura en una experiencia realista en la que la luz le da sentido al volumen y al espacio.</p>
                </div>

                <div className="div-img-projects col-md-6 div-img-project-6 order-1 order-sm-0 d-flex align-items-center justify-content-center p-2">
                    <Link to="https://modo3d.es/" target="_blank">
                        <img src="/modo.jpg" alt="Modo3D" className='img-fluid mx-auto d-block p-0 rounded-4'/>
                    </Link>
                </div>

            </div>
        </section>


        <section className='container mt-5'>
            <div className='row'>

                <div className="div-text-projects col-md-5 offset-md-1 d-flex flex-column text-align-center justify-content-center order-0 order-sm-1 ">
                    <h2>Scenos®</h2>
                    <p>SCENOS® es una marca centrada en la videografía, fotografía, edición y publicidad para artistas y empresas que buscan la excelencia en el sector audiovisual.</p>
                </div>

                <div className="div-img-projects col-md-6 div-img-project-7 order-1 order-sm-0 d-flex align-items-center justify-content-center p-2">
                    <Link to="https://scenos.es/" target='_blank'>
                        <img src="/scenos.jpg" alt="Scenos" className='img-fluid mx-auto d-block p-0 rounded-4'/>
                    </Link>
                </div>

            </div>
        </section>

        </main>

        <Footer></Footer>
        
        </>
    )
}

export default Projects