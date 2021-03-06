import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button/'

function Menu () {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="DevFlix logo"></img>
            </a>

            {/* <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo 
            </ButtonLink> */}
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo 
            </Button>
        </nav>
    );
}

export default Menu;