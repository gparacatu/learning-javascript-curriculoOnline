/**************************************************************************/
/*                        CREATED BY GUILHERME PARACATU                   */
/*                                      AT                                */
/*                                 26/02/2021                             */
/*                           SLIDE SHOW WITH ZINDEX                       */
/**************************************************************************/

let nextSlide = 0;
let sliders = 0;

/*Adiciona os ids automaticamente nas fotos, precisa incluir a classe <.slider--item> para que seja inserido.*/
atribuirId()

function atribuirId() {
    sliders = document.querySelectorAll(".slider--item");/*Recebe todas as imagens adicionadas no html*/
    if (sliders.length > 0) { /*Verifica se existem fotos na página, apenas como medida de segurança.*/
        for (let i = 0; i < sliders.length; i++) {
            sliders[i].setAttribute("id", `${i}`); /*Adiciona os ids nas fotos*/
        }
    }
}

function nextSlider() {
    if (sliders.length > 0) { /*Verifica se existem fotos na página, apenas como medida de segurança.*/
        if (nextSlide < document.querySelectorAll(".slider--item").length) {
            let currentSlide = document.querySelector(".zIndex"); /*Acha a imagem atual pela classe zIndex. Essa classe deve ser criada no css com um atributo zindex: 99; e deve ser adicionada na foto que você quer iniciar como a primeira do slide no html.*/
            currentSlide.classList.remove("zIndex"); /*Remove a classe zIndex da imagem atual*/
            nextSlide = parseInt(currentSlide.getAttribute("id").valueOf()) + 1; /*Recebe o id da imagem atual e adiciona mais 1 para procurar o próximo id*/
            try {
                document.getElementById(`${nextSlide}`).classList.add("zIndex"); /*Medida de proteção pode ser melhorado, qualquer coisa volta para o primeiro slide que é o zero*/
            } catch {
                nextSlide = 0;
                document.getElementById(`${nextSlide}`).classList.add("zIndex");
            }

        } else {
            nextSlide = 0;
            document.getElementById(`${nextSlide}`).classList.add("zIndex"); /*Senão quer dizer que chegou ao ultimo e volta para o primeiro slide que é o zero*/
        }
    }
}

function beforeSlider() {
    if (sliders.length > 0) { /*Verifica se existem fotos na página, apenas como medida de segurança.*/
        if (nextSlide != 0) {
            let currentSlide = document.querySelector(".zIndex"); /*Acha a imagem atual pela classe zIndex. Essa classe deve ser criada no css com um atributo zindex: 99; e deve ser adicionada na primeira foto do html.*/
            currentSlide.classList.remove("zIndex");
            nextSlide = parseInt(currentSlide.getAttribute("id").valueOf()) - 1; /*Recebe o id da imagem atual e subtrai 1 para procurar o id anterior*/
            try {
                document.getElementById(`${nextSlide}`).classList.add("zIndex"); /*Medida de proteção pode ser melhorado, qualquer coisa volta para o ultimo slide*/
            } catch {
                nextSlide = document.querySelectorAll(".slider--item").length - 1;
                document.getElementById(`${nextSlide}`).classList.add("zIndex");
            }

        } else {
            nextSlide = document.querySelectorAll(".slider--item").length - 1; /*Senão quer dizer que chegou ao primeiro e volta para o ultimo*/
            document.getElementById(`${nextSlide}`).classList.add("zIndex");
        }
    }
}

/*CSS EXEMPLO*/
/*
.slider {
    margin-top: 3rem;
    height: 100vh;
}
.slider--width {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100%;
}
.slider--item {
    position: absolute;
    width: 128rem;
    height: inherit;
    background-position: center;
    background-size: cover;
    transition: all ease 0.3s;
}
.zIndex {
    z-index: 99;
}
*/

/*HTML EXEMPLO*/
/*

<div class="slider">

                            <div class="slider--width">
                                <div class="slider--item zIndex" style="background-image: url(assets/images/1.jpg);"></div>
                                <div class="slider--item" style="background-image: url(assets/images/2.jpg);"></div>
                                <div class="slider--item" style="background-image: url(assets/images/3.jpg);"></div>
                                <div class="slider--item" style="background-image: url(assets/images/4.jpg);"></div>
                                <div class="slider--item" style="background-image: url(assets/images/5.jpg);"></div>
                                <div class="slider--item" style="background-image: url(assets/images/6.jpg);"></div>
                            </div>
                        </div>

*/