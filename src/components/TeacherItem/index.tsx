import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


import './styles.css'



function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/65199345?s=460&u=b46247b3fe54ba2be0ac02be956bcb85cea9126e&v=4" alt="Vitor Risso"/>
            <div>
                <span>Física</span>
            </div>
        </header>
        <p>
            Entusiasta apaixonado pelas materias de física avançada.
            <br /> <br />
            Apaixonado por cinética e arremeçar objetos, principalmente em lugares perigosos, conhecido por mudar a vida das pessoas também. Mais de 200.000 pessoas ja passaram por algum perrengue com ele.
        </p>

        <footer>
            <p>Preço/hora
            <strong>R$ 85,00</strong>
            </p>
            <button type="button">
                 <img src={whatsappIcon} alt="zapzap"/>
                 Entrar em contato
            </button>
           
        </footer>
    </article>
    )
}

export default TeacherItem;