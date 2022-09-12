import './header.css'

function Header() {
    
    return(
        <nav class="menu">
            <label class="menu__logo">Tachi</label>
            <ul class="menu__items">
                <li class="active"><a href="#">Inicio</a></li>
                <li class="btn"><a href="#aboutme">Sobre mi</a></li>
                <li class="btn1"><a href="#proyectos">Proyectos</a></li>
                <li class="btn2"><a href="#contacto">Contacto</a></li>
            </ul>
            <span class="btn_menu">
            <i class="fa-solid fa-bars"></i>
            </span>
        </nav>
    )
}

export default Header