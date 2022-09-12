import './app.css';
import { AiFillLinkedin , AiFillGithub , AiFillMail} from 'react-icons/ai'
 
function App() {
    return (
    <div class="cv">
        <div class="info">
            <div class="imageme">
                <img class="imageme__img" src='./img/yop.jpg'/>
            </div>
            <section class="aboutme" id="aboutme">  
                <h3>Sobre mí:</h3> 
                <p>
                    Soy una persona positiva, vital y me gusta aprender cosas nuevas. En mi tiempo libre
                    juego al futbol y hago deporte. 
                </p>
                <p>
                    Cursé y finalicé un Bootcamp en Skylab Coders Academy (Barcelona). En él, he
                    obtenido conocimientos de tecnologías que utilizo para realizar proyectos personales.
                    En estos momentos me encuentro buscando una oportunidad laboral que me permita
                    profundizar en mis habilidades.
                </p>
                <p>
                    Actualmente resido en Barcelona pero tengo disponibilidad para desplazarme a vivir a
                    cualquier punto geográfico.
                </p>
            </section>
        </div>
        <section class="proyectos" id="proyectos">
            <h3>Proyectos:</h3>
            <div class="info">
                <div class="proyectos__ejemplo">
                    <h4 class="proyectos__title-tt">TimeTo</h4>
                    <a title="timeto" href="https://timeto.surge.sh">
                        <img src="./img/timeto.png"/>
                    </a>
                    <p>Sitio Web en el que se gestionan eventos con la finalidad de conocer gente nueva.</p>
                </div>
                <div class="proyectos__ejemplo">
                    <h4 class="proyectos__title">Calendario</h4>
                    <a title="Calendario" href="./MiCalendario/index.html">
                        <img src="./img/calendario.png"/>
                    </a>
                    <p>Calendario dinámico con la posibilidad de ser implementado en una página</p>
                </div>
            </div>
            <div class="info">
                <div class="proyectos__ejemplo">
                    <h4 class="proyectos__title">Modelo de página</h4>
                    <a title="Calendario" href="./LaderPage/home.html">
                        <img src="./img/landing.png"/>
                    </a>
                    <p>Página de prueba que puede ser rellenada con información para ser útil</p>
                </div>
                <div class="proyectos__ejemplo">
                    <h4 class="proyectos__title">Pasapalabra</h4>
                    <a title="Calendario" href="./Pasapalabra/index.html">
                        <img src="./img/pasapalabra.png"/>
                    </a>
                    <p>Juego en el cual tenemos 27 preguntas y deberemos acertar el maximo numero de ellas
                        con la posibilidad de contestar una pregunta mas adelante</p>
                </div>
            </div>
            
            <div class="proyectos__ejemplo">
                <h4 class="proyectos__title">Bingo</h4>
                <a title="Calendario" href="./Bingo/index.html">
                    <img src="./img/bingo.png"/>
                </a>
                <p>Juego en el cual deberemos ir sacando numeros hasta que se complete nuestro cartón</p>
            </div>
        </section>
        <section class="contacto" id="contacto">
            <h3>Contacto:</h3>
            <div class="contacto__div">
                <AiFillMail className='contacto__icon'/>
                <p>jrfluna@gmail.com</p>
            </div>
            <div class="contacto__div">
                <a href="https://www.linkedin.com/in/jose-ramon-fernandez-luna/">
                <AiFillLinkedin className='contacto__icon' />
                </a>
                <a class="contacto__div-info" href="https://www.linkedin.com/in/jose-ramon-fernandez-luna/">Jose Ramon Fernandez Luna</a>
            </div>
            <div class="contacto__div">
                <a href="https://github.com/TachiiRocks">
                <AiFillGithub className='contacto__icon'/>
                </a>
                <a class="contacto__div-info" href="https://github.com/TachiiRocks">github.com/TachiiRocks</a>
            </div>
            <p class="contacto__copy">©Copyright 2022 Jose Ramon Fernandez Luna</p>
        </section>
    </div>
    );
}

export default App;
