import '../index.css'
import Footer from './Footer';
import ButtonMailto from './Links';
import { Link } from 'react-router-dom';

const Contact = () => {
    return(

        <>
        
        <main>
            <section className='container mt-5 mb-5'>
                <div className="row">

                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="titulo">Contacto</h1>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row boxGeneralContact">

                    <div className="col-md-6 boxContact">
                        <img src="/envelope.svg" alt="Mail" />
                        <ButtonMailto  label="juanalejandrocb02@gmail.com" mailto="mailto:juanalejandrocb02@gmail.com" />
                    </div>

                    <div className="col-md-6 boxContact">
                        <img src="/telephone.svg" alt="Telephone" />
                        <Link className="contactStyleLinks" to="tel:+34620668132">620 668 132</Link>
                    </div>
                
                    <div className="col-md-6 boxContact">
                        <img src="/github.svg" alt="Mail"/>
                        <Link className="contactStyleLinks" to="https://github.com/Alex02CB" target="_blank">Alex02CB</Link>
                    </div>

                    <div className="col-md-6 boxContact">
                        <img src="/linkedin.svg" alt="Telephone" />
                        <Link className="contactStyleLinks" to="https://www.linkedin.com/in/juanalejandro-cb/" target="_blank">Juan Alejandro Campillo Bustamante </Link>
                    </div>

                </div>

            </section>
        </main>

        <Footer></Footer>
        </>
    )
}

export default Contact