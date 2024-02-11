import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, j as renderSlot, h as addAttribute, k as renderTransition, l as renderHead } from '../astro_p0RFpSrb.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
/* empty css                          */
/* empty css                          */

const $$Astro$o = createAstro();
const $$GradientBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$GradientBtn;
  return renderTemplate`${maybeRenderHead()}<a href="#s5" data-astro-cid-toovmlpp><button class="button" data-astro-cid-toovmlpp>
Empieza a minar
</button> </a>  `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/gradientBtn.astro", void 0);

var __freeze$8 = Object.freeze;
var __defProp$8 = Object.defineProperty;
var __template$8 = (cooked, raw) => __freeze$8(__defProp$8(cooked, "raw", { value: __freeze$8(raw || cooked.slice()) }));
var _a$8;
const $$Astro$n = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate(_a$8 || (_a$8 = __template$8(["", '<nav class="header__nav" data-astro-cid-ij45lgix> <a href="#header" data-astro-cid-ij45lgix><button class="header__nav__btn" data-astro-cid-ij45lgix>MineBest</button></a> <div class="header__nav__interact-container" data-astro-cid-ij45lgix> <!-- <button class="header__nav__interact-container__btn">\n            <img src="https://cdn.discordapp.com/attachments/973568724722389052/1181665023966331010/image.png?ex=6581e24f&is=656f6d4f&hm=180e9e066c0358d92f28cc0da27af54f74f9ff471f4a93ff9163612293d3190a&" alt="falg" class="header__nav__interact-container__btn__flag">\n            <p class="header__nav__interact-container__btn__txt">ES</p>\n        </button> --> <div class="header__nav__interact-container__gradient-btn-container" data-astro-cid-ij45lgix> ', ' </div> </div> </nav>  <script>\n document.addEventListener("DOMContentLoaded", function () {\n  var prevScrollpos = window.pageYOffset;\n  var navbar = document.querySelector(".header__nav");\n\n  window.onscroll = function () {\n    var currentScrollPos = window.pageYOffset;\n\n    if (prevScrollpos > currentScrollPos) {\n      navbar.style.top = "0";\n    } else {\n      navbar.style.top = "-60px";\n    }\n\n    prevScrollpos = currentScrollPos;\n  };\n});\n\n\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "GradientBtn", $$GradientBtn, { "data-astro-cid-ij45lgix": true }));
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Header/Nav.astro", void 0);

const $$Astro$m = createAstro();
const $$GradientBtnWB = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$GradientBtnWB;
  return renderTemplate`${maybeRenderHead()}<a href="#s5" data-astro-cid-lzesfojt><button class="button" data-astro-cid-lzesfojt>
Empezar a minar
</button></a>  `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/gradientBtnWB.astro", void 0);

const $$Astro$l = createAstro();
const $$InfoBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$InfoBtn;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="#s2" data-astro-cid-r4nbzs6k><button class="btn" data-astro-cid-r4nbzs6k>${text}</button></a> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/infoBtn.astro", void 0);

var __freeze$7 = Object.freeze;
var __defProp$7 = Object.defineProperty;
var __template$7 = (cooked, raw) => __freeze$7(__defProp$7(cooked, "raw", { value: __freeze$7(raw || cooked.slice()) }));
var _a$7;
const $$Astro$k = createAstro();
const $$StaticsContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$StaticsContainer;
  const { num, txt, id, size = "sm" } = Astro2.props;
  return renderTemplate(_a$7 || (_a$7 = __template$7(["", "<div", ' class="cards" data-astro-cid-np6r4ivn> <p class="container__txt" data-astro-cid-np6r4ivn>', '</p> <div class="card"', ' data-astro-cid-np6r4ivn> <div class="card-content" data-astro-cid-np6r4ivn> <div class="card-info-wrapper" data-astro-cid-np6r4ivn> ', ' <div class="container__num-container" data-astro-cid-np6r4ivn> <div class="odometer" data-astro-cid-np6r4ivn>', "</div> </div> ", ' </div> </div> </div> </div>   <script>\n    document.querySelectorAll(\'.cards\').forEach(card =>{\n        document.getElementById(card.id).onmousemove = e => {\n      for(const card of document.getElementsByClassName("card")) {\n        const rect = card.getBoundingClientRect(),\n              x = e.clientX - rect.left,\n              y = e.clientY - rect.top;\n    \n        card.style.setProperty("--mouse-x", `${x}px`);\n        card.style.setProperty("--mouse-y", `${y}px`);\n      };\n    }\n    })\n<\/script>'], ["", "<div", ' class="cards" data-astro-cid-np6r4ivn> <p class="container__txt" data-astro-cid-np6r4ivn>', '</p> <div class="card"', ' data-astro-cid-np6r4ivn> <div class="card-content" data-astro-cid-np6r4ivn> <div class="card-info-wrapper" data-astro-cid-np6r4ivn> ', ' <div class="container__num-container" data-astro-cid-np6r4ivn> <div class="odometer" data-astro-cid-np6r4ivn>', "</div> </div> ", ' </div> </div> </div> </div>   <script>\n    document.querySelectorAll(\'.cards\').forEach(card =>{\n        document.getElementById(card.id).onmousemove = e => {\n      for(const card of document.getElementsByClassName("card")) {\n        const rect = card.getBoundingClientRect(),\n              x = e.clientX - rect.left,\n              y = e.clientY - rect.top;\n    \n        card.style.setProperty("--mouse-x", \\`\\${x}px\\`);\n        card.style.setProperty("--mouse-y", \\`\\${y}px\\`);\n      };\n    }\n    })\n<\/script>'])), maybeRenderHead(), addAttribute(id, "id"), txt, addAttribute(size, "data-size"), renderSlot($$result, $$slots["before"]), num, renderSlot($$result, $$slots["after"]));
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Header/staticsContainer.astro", void 0);

var __freeze$6 = Object.freeze;
var __defProp$6 = Object.defineProperty;
var __template$6 = (cooked, raw) => __freeze$6(__defProp$6(cooked, "raw", { value: __freeze$6(raw || cooked.slice()) }));
var _a$6;
const $$Astro$j = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate(_a$6 || (_a$6 = __template$6(["", '<header class="header" id="header" data-astro-cid-l2ff6azv> <img src="/desktop.png" alt="Sonwy Mountains" class="header__img" data-astro-cid-l2ff6azv> <div class="f" data-astro-cid-l2ff6azv> ', ' </div> <div class="h-2" data-astro-cid-l2ff6azv> <div class="header__info-container" data-astro-cid-l2ff6azv> <h1 class="header__info-container__title" data-astro-cid-l2ff6azv>Minar Bitcoin: <br data-astro-cid-l2ff6azv> la mejor opci\xF3n</h1> <div class="header__info-container__btn-container" data-astro-cid-l2ff6azv> ', " ", ' </div> </div> <div class="header__statics-container" data-astro-cid-l2ff6azv> ', " ", " ", ` </div> </div> </header> <!-- <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@&display=swap');
</style> -->  <!-- <script is:inline>
    const strNum0 = document.querySelectorAll(".container__num-container")[0];
    let num0 = 250
    let cont0 = 0;
    strNum0.innerHTML = 0;
    strNum0.innerHTML = parseInt(strNum0.innerHTML);
    const counter0 = () =>{
        cont0++;
        strNum0.innerHTML = cont0;

        if (num0 == strNum0.innerHTML){
            clearInterval(interval0)
        }
    }
    const interval0 = setInterval(counter0, 1)

    const strNum1 = document.querySelectorAll(".container__num-container")[1];
    let num1 = 17000
    let cont1 = 0;
    strNum1.innerHTML = 0;
    strNum1.innerHTML = parseInt(strNum1.innerHTML);
    const counter1 = () =>{
        cont1++;
        strNum1.innerHTML = cont1;

        if (num1 == strNum1.innerHTML){
            clearInterval(interval1)
        }
    }
    const interval1 = setInterval(counter1, 1)

    const strNum2 = document.querySelectorAll(".container__num-container")[2];
    let num2 = 24
    let cont2 = 0;
    strNum2.innerHTML = '0';
    strNum2.innerHTML = parseInt(strNum2.innerHTML);
    const counter2 = () =>{
        cont2++;
        strNum2.innerHTML = cont2;

        if (num2 == strNum2.innerHTML){
            clearInterval(interval2)
        }
    }
    const interval2 = setInterval(counter2, 100)
<\/script>  --> <script>
    const routes = ["/desktop.png", "/mobile.png"];
    const img = document.querySelector('.header__img');
    if (window.screen.availWidth <= 480){
        img.src = routes[1];
    } else {
        img.src = routes[0];
    }
    console.log(img);
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-l2ff6azv": true }), renderComponent($$result, "GradientBtnWB", $$GradientBtnWB, { "data-astro-cid-l2ff6azv": true }), renderComponent($$result, "InfoBtn", $$InfoBtn, { "text": "Saber m\xE1s", "data-astro-cid-l2ff6azv": true }), renderComponent($$result, "StaticsContainer", $$StaticsContainer, { "num": "", "other": "\u20AC", "txt": "Deposito M\xEDnimo", "id": "card-1", "size": "sm", "data-astro-cid-l2ff6azv": true }, { "after": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"], renderTemplate`€`)}` }), renderComponent($$result, "StaticsContainer", $$StaticsContainer, { "num": "", "other": "k", "txt": "Inversores Crypto", "id": "card-2", ",": true, "size": "lg", "data-astro-cid-l2ff6azv": true }, { "before": ($$result2) => renderTemplate`<span data-astro-cid-l2ff6azv>+</span>` }), renderComponent($$result, "StaticsContainer", $$StaticsContainer, { "num": "", "txt": "Pagos instantaneos", "id": "card-3", "size": "sm", "data-astro-cid-l2ff6azv": true }, { "after": ($$result2) => renderTemplate`<span data-astro-cid-l2ff6azv>/7</span>` }));
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Header/header.astro", void 0);

const $$Astro$i = createAstro();
const $$VideoBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$VideoBtn;
  return renderTemplate`${maybeRenderHead()}<a href="#s5" data-astro-cid-m2afamsu><button class="button" data-astro-cid-m2afamsu>
¿Quieres empezar <br class="no-visible-br" data-astro-cid-m2afamsu>a ganar minando?
</button> </a>  `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Main/videoBtn.astro", void 0);

var __freeze$5 = Object.freeze;
var __defProp$5 = Object.defineProperty;
var __template$5 = (cooked, raw) => __freeze$5(__defProp$5(cooked, "raw", { value: __freeze$5(raw || cooked.slice()) }));
var _a$5;
const $$Astro$h = createAstro();
const $$Video = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Video;
  return renderTemplate(_a$5 || (_a$5 = __template$5(["", '<div class="video-container" data-astro-cid-s2zlyuxl> <video controls class="video-container__video" data-astro-cid-s2zlyuxl> <source src="/video.mp4" type="video/mp4" data-astro-cid-s2zlyuxl>\nYour browser does not support HTML video.\n</video> <div class="video-container__cover-container" data-astro-cid-s2zlyuxl> <img class="video-container__cover-container__play" src="https://cdn.discordapp.com/attachments/973568724722389052/1182613067159326730/image.png?ex=6585553f&is=6572e03f&hm=8cf319ffdc6ceac3f9b6ad16c77fc41d9628eaf5c0c00ba0604a4ac291a092ab&" alt="Play" data-astro-cid-s2zlyuxl> </div> <div class="btn-container" data-astro-cid-s2zlyuxl> ', " </div> </div>  <script>\n    const coverContainer = document.querySelector('.video-container__cover-container')\n    const play = document.querySelector('.video-container__cover-container__play');\n    const video = document.querySelector('.video-container__video');\n    play.addEventListener('click', () =>{\n        coverContainer.style.display = 'none';\n        video.style.display = 'block';\n        video.play();\n    })\n<\/script>"])), maybeRenderHead(), renderComponent($$result, "VideoBtn", $$VideoBtn, { "data-astro-cid-s2zlyuxl": true }));
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Main/video.astro", void 0);

const $$Astro$g = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Card;
  const { source, txt, other, size = "sm", id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card-container-s" data-astro-cid-bzdetjr3> <div${addAttribute(["card", other], "class:list")}${addAttribute(size, "data-size")} data-astro-cid-bzdetjr3> <div class="card__info-container"${addAttribute(size, "data-size")} tabindex="0" data-astro-cid-bzdetjr3> <div class="front c" data-astro-cid-bzdetjr3> <img${addAttribute(source, "src")} alt="MineBest" class="card__img" data-astro-cid-bzdetjr3> </div> <div class="back c" data-astro-cid-bzdetjr3> <h2 class="card__title" data-astro-cid-bzdetjr3>Opción 1</h2> <p class="card__txt" data-astro-cid-bzdetjr3>${txt}</p> </div> </div> </div> <h2 class="card-container-s__title" data-astro-cid-bzdetjr3>Opción 1</h2> </div> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Main/card.astro", void 0);

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Astro$f = createAstro();
const $$FirstSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$FirstSection;
  return renderTemplate(_a$4 || (_a$4 = __template$4(["", '<article class="article" data-astro-cid-rufmb3vu> <h1 class="article__title" data-astro-cid-rufmb3vu>Descubre por qu\xE9 <br class="br-m" data-astro-cid-rufmb3vu>minar <br class="br-d" data-astro-cid-rufmb3vu><span class="article__title__btc" data-astro-cid-rufmb3vu>Bitcoin</span></h1> <div class="article__card-container" data-astro-cid-rufmb3vu> ', " ", " ", ' </div> </article>  <script>\n    const handleMove = e =>{\n        const { currentTarget: target } = e;\n\n    const rect = target.getBoundingClientRect(),\n    x = e.clientX - rect.left,\n    y = e.clientY - rect.top;\n\n    target.style.setProperty("--mouse-x", `${x}px`);\n    target.style.setProperty("--mouse-y", `${y}px`);\n}\n    for (const card of document.querySelectorAll(\'.c\')) {\n        card.onmousemove = e => handleMove(e);\n    }\n<\/script>'], ["", '<article class="article" data-astro-cid-rufmb3vu> <h1 class="article__title" data-astro-cid-rufmb3vu>Descubre por qu\xE9 <br class="br-m" data-astro-cid-rufmb3vu>minar <br class="br-d" data-astro-cid-rufmb3vu><span class="article__title__btc" data-astro-cid-rufmb3vu>Bitcoin</span></h1> <div class="article__card-container" data-astro-cid-rufmb3vu> ', " ", " ", ' </div> </article>  <script>\n    const handleMove = e =>{\n        const { currentTarget: target } = e;\n\n    const rect = target.getBoundingClientRect(),\n    x = e.clientX - rect.left,\n    y = e.clientY - rect.top;\n\n    target.style.setProperty("--mouse-x", \\`\\${x}px\\`);\n    target.style.setProperty("--mouse-y", \\`\\${y}px\\`);\n}\n    for (const card of document.querySelectorAll(\'.c\')) {\n        card.onmousemove = e => handleMove(e);\n    }\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Card", $$Card, { "source": "https://cdn.discordapp.com/attachments/973568724722389052/1185925569989312612/image.png?ex=65916241&is=657eed41&hm=539b2d296befcd272958940bda624b1dcb741a95f87a6fb595c30577f7137d0b&", "txt": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit assumenda officiis quasi sint perspiciatis laboriosam impedit tempore possimus amet corporis?", "other": "card-1", "size": "sm", "id": "card-1", "data-astro-cid-rufmb3vu": true }), renderComponent($$result, "Card", $$Card, { "source": "https://cdn.discordapp.com/attachments/973568724722389052/1185925572828856440/image.png?ex=65916241&is=657eed41&hm=11c7864b78f7deb9ad84f9560086803f8eda7c6d6f1d6cdde3cafab5835b26a9&", "txt": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque veritatis rerum repellat autem illo natus accusantium molestiae, vero corrupti, omnis blanditiis error.", "size": "md", "id": "card-2", "data-astro-cid-rufmb3vu": true }), renderComponent($$result, "Card", $$Card, { "source": "https://cdn.discordapp.com/attachments/973568724722389052/1185925573973917726/image.png?ex=65916242&is=657eed42&hm=691637f26b89a20fd494bec3368757261d2f3cbb97056edc716ad335a9fd59cf&", "txt": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit assumenda officiis quasi sint perspiciatis laboriosam impedit tempore possimus amet corporis?", "size": "lg", "id": "card-3", "data-astro-cid-rufmb3vu": true }));
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Main/firstSection.astro", void 0);

const $$Astro$e = createAstro();
const $$InfoCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$InfoCard;
  const { icon, bTxt, txt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="info-card" data-astro-cid-nnrxbogl> <i${addAttribute(["fa-solid", "info-card__icon", icon], "class:list")} data-astro-cid-nnrxbogl></i> <div class="info-card__txt-c" data-astro-cid-nnrxbogl> <b class="info-card__txt-c__b" data-astro-cid-nnrxbogl>${bTxt}</b> ${txt} </div> </div> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Main/infoCard.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$d = createAstro();
const $$SecondSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SecondSection;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<article class="article" data-astro-cid-4jfyvj5x> <div class="article__title-container" data-astro-cid-4jfyvj5x> <h1 class="article__title-container__title" data-astro-cid-4jfyvj5x>Somos los <span class="article__title-container__title__gradient-txt" data-astro-cid-4jfyvj5x>mejores</span></h1> <p class="article__title-container__subtitle" data-astro-cid-4jfyvj5x>\xBFPor qu\xE9? Nos diferenciamos de los dem\xE1s</p> </div> <div class="article__content-c" data-astro-cid-4jfyvj5x> <div class="article__card-container" data-astro-cid-4jfyvj5x> ', " ", " ", ` </div> <div class="article__img-container" data-astro-cid-4jfyvj5x> <img src="https://cdn.discordapp.com/attachments/973568724722389052/1189344474262933554/pexels-craig-dennis-57007.jpg?ex=659dd25b&is=658b5d5b&hm=6191add7a481a57d81be3b4f0e04ed3564f3af01d82eeeadfc2430ae2fcb1d36&" alt="MineBest" class="article__img" data-astro-cid-4jfyvj5x> </div> </div> </article>  <script>
    const infoCardArr = document.querySelectorAll('.info-card');
    const imgSources = ["https://cdn.discordapp.com/attachments/973568724722389052/1189344474262933554/pexels-craig-dennis-57007.jpg?ex=659dd25b&is=658b5d5b&hm=6191add7a481a57d81be3b4f0e04ed3564f3af01d82eeeadfc2430ae2fcb1d36&", 
    "https://cdn.discordapp.com/attachments/973568724722389052/1189352548189098044/pexels-muhammed-ensar-10725897.jpg?ex=659dd9e0&is=658b64e0&hm=9ade87060ca80275905ecc41ea70262307e8cede44d0b61348364a7dd0c22077&", 
    "https://cdn.discordapp.com/attachments/973568724722389052/1189354066837520524/pexels-panumas-nikhomkhai-1148820.jpg?ex=659ddb4a&is=658b664a&hm=2d0358a95e8f781036c47459744586e1b2ccd8756d9702807d6d588148c6373e&"];
    const changeImage = document.querySelector('.article__img');
    for (let i = 0; i < infoCardArr.length; i++){
        infoCardArr[i].addEventListener('mouseover', () =>{
            changeImage.src = imgSources[i];
            infoCardArr[i].style.backgroundColor = "rgba(255, 255, 255, 0.11)";
        })
        infoCardArr[i].addEventListener('mouseleave', () =>{
            changeImage.src = imgSources[i];
            infoCardArr[i].style.backgroundColor = "transparent";
        })
    }
    console.log(infoCardArr);
<\/script>`])), maybeRenderHead(), renderComponent($$result, "InfoCard", $$InfoCard, { "icon": "fa-gear", "bTxt": "Maquinaria y mineria de \xFAltima generaci\xF3n.", "txt": "Lideramos la industria al utilizar tecnolog\xEDas energ\xE9ticamentes eficientes garantizando una mineria de Bitcoin respetuosa con el medio ambiente", "data-astro-cid-4jfyvj5x": true }), renderComponent($$result, "InfoCard", $$InfoCard, { "icon": "fa-shield", "bTxt": "Seguridad de Vanguardia.", "txt": "Implementamos medidas de seguridad de \xFAltima generaci\xF3n para proteger activos y la red blockchain", "data-astro-cid-4jfyvj5x": true }), renderComponent($$result, "InfoCard", $$InfoCard, { "icon": "fa-eye", "bTxt": "Tecnolog\xEDa de eficiencia energ\xE9tica", "txt": "Lideramos la industria al utilizar tecnolog\xEDas de ultima generaci\xF3n y energ\xE9ticamentes eficientes", "data-astro-cid-4jfyvj5x": true }));
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Main/secondSection.astro", void 0);

const $$Astro$c = createAstro();
const $$CleanBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$CleanBtn;
  return renderTemplate`${maybeRenderHead()}<button data-astro-cid-2zgpfqzn> <span class="button_top" data-astro-cid-2zgpfqzn> Abrir Presentación
</span> </button> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Main/cleanBtn.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$b = createAstro();
const $$ThirdSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ThirdSection;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<article class="article" data-astro-cid-skvbku3a> <picture class="article__img-container" data-astro-cid-skvbku3a> <img src="https://cdn.discordapp.com/attachments/973568724722389052/1189669818903830618/pexels-energepiccom-159888.jpg?ex=659f015b&is=658c8c5b&hm=1ef67754a9b8e15513d47f5e78b29bd0b6c65aeae20eae91a6ec919beef4ef31&" alt="MineBest" class="article__img-container__img" data-astro-cid-skvbku3a> </picture> <div class="article__card" data-astro-cid-skvbku3a> <div class="article__card__content-container" data-astro-cid-skvbku3a> <div data-astro-cid-skvbku3a> <h1 class="article__card__title" data-astro-cid-skvbku3a>Sobre Nosotros</h1> <p class="article__card__txt" data-astro-cid-skvbku3a>\nDesde nuestros modestos inicios hasta nuestro estatus actual, hemos cultivado una reputaci\xF3n de innovaci\xF3n, <span class="article__card__content-container__purple" data-astro-cid-skvbku3a>confianza y compromiso con nuestros clientes.</span> <br data-astro-cid-skvbku3a><br data-astro-cid-skvbku3a>\nLorem ipsum dolor sit amet consectetur adipisicing elit. <span class="article__card__content-container__purple" data-astro-cid-skvbku3a>Neque recusandae</span> in quos culpa modi eaque optio laborum minus nesciunt tempora dignissimos expedita eius, <span class="article__card__content-container__purple" data-astro-cid-skvbku3a>placeat eligendi</span> ad veritatis at dolorem sapiente.\n<br data-astro-cid-skvbku3a><br data-astro-cid-skvbku3a>\nLorem ipsum dolor sit amet consectetur adipisicing elit. <span class="article__card__content-container__purple" data-astro-cid-skvbku3a>Voluptatibus, rerum.</span> <br data-astro-cid-skvbku3a><br data-astro-cid-skvbku3a> </p> </div> <div class="article__card__btn-container" data-astro-cid-skvbku3a> ', ' </div> </div> </div> </article>  <!-- <script is:inline>\n    const handleOnMouseMove = e =>{\n        const { currentTarget: target } = e;\n\n        const rect = target.getBoundingClientRect(),\n        x = e.clientX - rect.left,\n        y = e.clientY - rect.top;\n\n        target.style.setProperty("--mouse-x", `${x}px`);\n        target.style.setProperty("--mouse-y", `${y}px`);\n    }\n\n    document.querySelector(\'.article__card\').onmousemove = e => handleOnMouseMove(e);\n<\/script> -->'], ["", '<article class="article" data-astro-cid-skvbku3a> <picture class="article__img-container" data-astro-cid-skvbku3a> <img src="https://cdn.discordapp.com/attachments/973568724722389052/1189669818903830618/pexels-energepiccom-159888.jpg?ex=659f015b&is=658c8c5b&hm=1ef67754a9b8e15513d47f5e78b29bd0b6c65aeae20eae91a6ec919beef4ef31&" alt="MineBest" class="article__img-container__img" data-astro-cid-skvbku3a> </picture> <div class="article__card" data-astro-cid-skvbku3a> <div class="article__card__content-container" data-astro-cid-skvbku3a> <div data-astro-cid-skvbku3a> <h1 class="article__card__title" data-astro-cid-skvbku3a>Sobre Nosotros</h1> <p class="article__card__txt" data-astro-cid-skvbku3a>\nDesde nuestros modestos inicios hasta nuestro estatus actual, hemos cultivado una reputaci\xF3n de innovaci\xF3n, <span class="article__card__content-container__purple" data-astro-cid-skvbku3a>confianza y compromiso con nuestros clientes.</span> <br data-astro-cid-skvbku3a><br data-astro-cid-skvbku3a>\nLorem ipsum dolor sit amet consectetur adipisicing elit. <span class="article__card__content-container__purple" data-astro-cid-skvbku3a>Neque recusandae</span> in quos culpa modi eaque optio laborum minus nesciunt tempora dignissimos expedita eius, <span class="article__card__content-container__purple" data-astro-cid-skvbku3a>placeat eligendi</span> ad veritatis at dolorem sapiente.\n<br data-astro-cid-skvbku3a><br data-astro-cid-skvbku3a>\nLorem ipsum dolor sit amet consectetur adipisicing elit. <span class="article__card__content-container__purple" data-astro-cid-skvbku3a>Voluptatibus, rerum.</span> <br data-astro-cid-skvbku3a><br data-astro-cid-skvbku3a> </p> </div> <div class="article__card__btn-container" data-astro-cid-skvbku3a> ', ' </div> </div> </div> </article>  <!-- <script is:inline>\n    const handleOnMouseMove = e =>{\n        const { currentTarget: target } = e;\n\n        const rect = target.getBoundingClientRect(),\n        x = e.clientX - rect.left,\n        y = e.clientY - rect.top;\n\n        target.style.setProperty("--mouse-x", \\`\\${x}px\\`);\n        target.style.setProperty("--mouse-y", \\`\\${y}px\\`);\n    }\n\n    document.querySelector(\'.article__card\').onmousemove = e => handleOnMouseMove(e);\n<\/script> -->'])), maybeRenderHead(), renderComponent($$result, "CleanBtn", $$CleanBtn, { "data-astro-cid-skvbku3a": true }));
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Main/thirdSection.astro", void 0);

const $$Astro$a = createAstro();
const $$Input = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Input;
  const { label, placeholder, type, size = "sm", required = "true", asterisk = "*", tag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="inpt-container" data-astro-cid-sydaiwsd> <label for="inpt-container__inpt" class="inpt-container__label" data-astro-cid-sydaiwsd>${label} <span class="inpt-container__label__a" data-astro-cid-sydaiwsd>${asterisk}</span></label> <input${addAttribute(type, "type")}${addAttribute(placeholder, "placeholder")} class="inpt-container__inpt"${addAttribute(size, "data-size")}${addAttribute(required, "required")} tabindex="0" data-astro-cid-sydaiwsd> </div> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Main/Inputs/Input.astro", void 0);

const $$Astro$9 = createAstro();
const $$Textare = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Textare;
  const { label, placeholder, type, size = "sm", required = "true", asterisk = "*", tag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="inpt-container" data-astro-cid-6cqsjnbp> <label for="inpt-container__inpt" class="inpt-container__label" data-astro-cid-6cqsjnbp>${label} <span class="inpt-container__label__a" data-astro-cid-6cqsjnbp>${asterisk}</span></label> <textarea${addAttribute(placeholder, "placeholder")} class="inpt-container__inpt"${addAttribute(size, "data-size")} data-astro-cid-6cqsjnbp></textarea> </div> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Main/Inputs/Textare.astro", void 0);

const $$Astro$8 = createAstro();
const $$Checkbox = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Checkbox;
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-7wmqtfm7> <input type="checkbox" id="cbx" style="display: none;" data-astro-cid-7wmqtfm7> <label for="cbx" class="check" data-astro-cid-7wmqtfm7> <svg width="18px" height="18px" viewBox="0 0 18 18" data-astro-cid-7wmqtfm7> <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z" data-astro-cid-7wmqtfm7></path> <polyline points="1 9 7 14 15 4" data-astro-cid-7wmqtfm7></polyline> </svg> </label> </div> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Main/Inputs/Checkbox.astro", void 0);

const $$Astro$7 = createAstro();
const $$SendBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SendBtn;
  return renderTemplate`${maybeRenderHead()}<button class="btn" data-astro-cid-l3htfki4> <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" data-astro-cid-l3htfki4><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com/ License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" data-astro-cid-l3htfki4></path></svg> <span class="text" data-astro-cid-l3htfki4>Enviar</span> </button> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Main/Inputs/SendBtn.astro", void 0);

const $$Astro$6 = createAstro();
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Form;
  return renderTemplate`${maybeRenderHead()}<form class="form" onsubmit="return false" data-astro-cid-vhvs6tna> ${renderComponent($$result, "Input", $$Input, { "label": "Nombre y apellidos", "placeholder": "John Doe", "type": "text", "data-astro-cid-vhvs6tna": true })} ${renderComponent($$result, "Input", $$Input, { "label": "Email", "placeholder": "johndoe@example.com", "type": "email", "data-astro-cid-vhvs6tna": true })} ${renderComponent($$result, "Input", $$Input, { "label": "N\xFAmero de tel\xE9fono", "placeholder": "+34 xxx xxx xxx", "type": "tel", "data-astro-cid-vhvs6tna": true })} ${renderComponent($$result, "Textare", $$Textare, { "label": "Mensaje", "placeholder": "Escriba un mensaje", "type": "text", "required": "false", "asterisk": "", "size": "lg", "data-astro-cid-vhvs6tna": true })} <label class="form__cc" data-astro-cid-vhvs6tna> ${renderComponent($$result, "Checkbox", $$Checkbox, { "data-astro-cid-vhvs6tna": true })}
He leído y acepto la política y privacidad
</label> <div class="form__bc" data-astro-cid-vhvs6tna> ${renderComponent($$result, "SendBtn", $$SendBtn, { "data-astro-cid-vhvs6tna": true })} </div> </form>`;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Main/Form.astro", void 0);

const $$Astro$5 = createAstro();
const $$FourthSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FourthSection;
  return renderTemplate`${maybeRenderHead()}<article class="article" data-astro-cid-ckmyz3lm> <h1 class="article__title" data-astro-cid-ckmyz3lm>¿Quieres empezar a<br data-astro-cid-ckmyz3lm> <span class="article__title__gradient-txt" data-astro-cid-ckmyz3lm>ganar minando</span>?</h1> ${renderComponent($$result, "Form", $$Form, { "data-astro-cid-ckmyz3lm": true })} </article> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Main/fourthSection.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<main class="main" data-astro-cid-2s42sr6y> <section class="main__section main__section--1" id="s1" data-astro-cid-2s42sr6y> ', ' </section> <section class="main__section main__section--2" id="s2" data-astro-cid-2s42sr6y> ', ' </section> <section class="main__section main__section--3" id="s3" data-astro-cid-2s42sr6y> ', ' </section> <section class="main__section main__section--4" id="s4" data-astro-cid-2s42sr6y> ', ' </section> <section class="main__section main__section--5" id="s5" data-astro-cid-2s42sr6y> ', ` </section> </main>  <!-- <script is:inline>
    const viewBtn = document.querySelector('.view-btn');
    const noVisible = document.querySelector('.article__txt__no-visible');
    const arrow = document.querySelector('.arrow');
    const btnTxt = document.querySelector('.readmore-txt');
    const wrapperImg = document.querySelector('.wrapper-img');
    const form = document.querySelector("#s5")
    let clicked = false;
    viewBtn.addEventListener('click', () =>{
        if (clicked == false){
            clicked = true;
            arrow.style.animation  = "read-less 1s forwards";
            btnTxt.innerHTML = "Leer menos";
            viewBtn.style.animation = 'go-b 1s forwards';
            noVisible.style.animation = 'text-a 1s forwards';
            if (window.screen.availWidth <=480){
                wrapperImg.style.display = 'none';
                // wrapperImg.style.animation = 'go-m-b 1s forwards';
                form.style.animation = 'go-m-b 1s forwards';
                document.querySelector('.remove-hr').style.display = 'none';
            } 
        } else {
            clicked = false;
            arrow.style.animation  = "read-more 1s forwards";
            btnTxt.innerHTML = "Leer m\xE1s";
            viewBtn.style.animation = 'go-t 1s forwards';
            noVisible.style.animation = 'text-d 1s forwards';
            if (window.screen.availWidth > 320 && window.screen.availWidth <=480){
                wrapperImg.style.display = 'block';
                form.style.animation = 'go-m-t 1s forwards';
                wrapperImg.style.animation = 'go-m-t 1s forwards';
                document.querySelector('.remove-hr').style.display = 'block';
            }   else if (window.screen.availWidth <= 320){;
                form.style.animation = 'go-m-t 1s forwards';
                document.querySelector('.remove-hr').style.display = 'block';
            }
        }
    });

<\/script> -->`])), maybeRenderHead(), renderComponent($$result, "Video", $$Video, { "data-astro-cid-2s42sr6y": true }), renderComponent($$result, "FirstSection", $$FirstSection, { "data-astro-cid-2s42sr6y": true }), renderComponent($$result, "SecondSection", $$SecondSection, { "data-astro-cid-2s42sr6y": true }), renderComponent($$result, "ThirdSection", $$ThirdSection, { "data-astro-cid-2s42sr6y": true }), renderComponent($$result, "FourthSection", $$FourthSection, { "data-astro-cid-2s42sr6y": true }));
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Main/main.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-ak3upacl> <ul class="footer__list-container" data-astro-cid-ak3upacl> <li class="footer__list-container__items" data-astro-cid-ak3upacl><a href="#header" class="footer__list-container__items__links" data-astro-cid-ak3upacl>Inicio</a></li> <li class="footer__list-container__items" data-astro-cid-ak3upacl><a href="#s1" class="footer__list-container__items__links" data-astro-cid-ak3upacl>Video presentación</a></li> <li class="footer__list-container__items" data-astro-cid-ak3upacl><a href="#s2" class="footer__list-container__items__links" data-astro-cid-ak3upacl>Descubre por qué minar Bitcoin</a></li> <li class="footer__list-container__items" data-astro-cid-ak3upacl><a href="#s3" class="footer__list-container__items__links" data-astro-cid-ak3upacl>Nosotros somos los mejores</a></li> <li class="footer__list-container__items" data-astro-cid-ak3upacl><a href="#s4" class="footer__list-container__items__links" data-astro-cid-ak3upacl>Sobre nosotros</a></li> </ul> <button type="button" class="footer__btn" data-astro-cid-ak3upacl>MineBest</button> <a href="/privacy" class="footer__pp" data-astro-cid-ak3upacl${addAttribute(renderTransition($$result, "omibksix", "", "pp"), "data-astro-transition-scope")}>Política y Privacidad</a> </footer> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Footer/Footer.astro", "self");

const $$Astro$2 = createAstro();
const $$Bitcoin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Bitcoin;
  return renderTemplate`${maybeRenderHead()}<div id="bitcoin" data-astro-cid-yowlx7wd> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="200px" viewBox="100 100 400 400" xml:space="preserve" data-astro-cid-yowlx7wd> <filter id="dropshadow" height="130%" data-astro-cid-yowlx7wd> <feGaussianBlur in="SourceAlpha" stdDeviation="5" data-astro-cid-yowlx7wd></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur" data-astro-cid-yowlx7wd></feOffset> <feFlood flood-color="red" data-astro-cid-yowlx7wd></feFlood> <feComposite in2="offsetblur" operator="in" data-astro-cid-yowlx7wd></feComposite> <feMerge data-astro-cid-yowlx7wd> <feMergeNode data-astro-cid-yowlx7wd></feMergeNode> <feMergeNode in="SourceGraphic" data-astro-cid-yowlx7wd></feMergeNode> </feMerge> </filter> <path class="path" style="filter:url(#dropshadow)" fill="#000000" d="M446.089,261.45c6.135-41.001-25.084-63.033-67.769-77.735l13.844-55.532l-33.801-8.424l-13.48,54.068
      c-8.896-2.217-18.015-4.304-27.091-6.371l13.568-54.429l-33.776-8.424l-13.861,55.521c-7.354-1.676-14.575-3.328-21.587-5.073
      l0.034-0.171l-46.617-11.64l-8.993,36.102c0,0,25.08,5.746,24.549,6.105c13.689,3.42,16.159,12.478,15.75,19.658L208.93,357.23
      c-1.675,4.158-5.925,10.401-15.494,8.031c0.338,0.485-24.579-6.134-24.579-6.134l-9.631,40.468l36.843,9.188
      c8.178,2.051,16.209,4.19,24.098,6.217l-13.978,56.17l33.764,8.424l13.852-55.571c9.235,2.499,18.186,4.813,26.948,6.995
      l-13.802,55.309l33.801,8.424l13.994-56.061c57.648,10.902,100.998,6.502,119.237-45.627c14.705-41.979-0.731-66.193-31.06-81.984
      C425.008,305.984,441.655,291.455,446.089,261.45z M368.859,369.754c-10.455,41.983-81.128,19.285-104.052,13.589l18.562-74.404
      C306.28,314.65,379.774,325.975,368.859,369.754z M379.302,260.846c-9.527,38.187-68.358,18.781-87.442,14.023l16.828-67.489
      C327.767,212.14,389.234,221.02,379.302,260.846z" data-astro-cid-yowlx7wd></path> </svg> </div> `;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Bitcoin.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"><script src="https://kit.fontawesome.com/a1618bce8f.js" crossorigin="anonymous"><\/script><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"><meta name="generator"', "><title>", '</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"><link rel="stylesheet" href="/odometer.css"><!-- <ViewTransitions /> -->', '</head> <body> <div class="btc"> ', ' </div> <div class="body-c"> ', " ", " ", ` </div>  <!--Scroll Reveal --> <script>
	/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.ScrollReveal = factory());
}(this, function () { 'use strict';

	var defaults = {
		delay: 0,
		distance: '0',
		duration: 600,
		easing: 'cubic-bezier(0.5, 0, 0, 1)',
		interval: 0,
		opacity: 0,
		origin: 'bottom',
		rotate: {
			x: 0,
			y: 0,
			z: 0
		},
		scale: 1,
		cleanup: false,
		container: document.documentElement,
		desktop: true,
		mobile: true,
		reset: false,
		useDelay: 'always',
		viewFactor: 0.0,
		viewOffset: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		},
		afterReset: function afterReset() {},
		afterReveal: function afterReveal() {},
		beforeReset: function beforeReset() {},
		beforeReveal: function beforeReveal() {}
	};

	function failure() {
		document.documentElement.classList.remove('sr');

		return {
			clean: function clean() {},
			destroy: function destroy() {},
			reveal: function reveal() {},
			sync: function sync() {},
			get noop() {
				return true
			}
		}
	}

	function success() {
		document.documentElement.classList.add('sr');

		if (document.body) {
			document.body.style.height = '100%';
		} else {
			document.addEventListener('DOMContentLoaded', function () {
				document.body.style.height = '100%';
			});
		}
	}

	var mount = { success: success, failure: failure };

	/*! @license is-dom-node v1.0.4

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/
	function isDomNode(x) {
		return typeof window.Node === 'object'
			? x instanceof window.Node
			: x !== null &&
					typeof x === 'object' &&
					typeof x.nodeType === 'number' &&
					typeof x.nodeName === 'string'
	}

	/*! @license is-dom-node-list v1.2.1

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/

	function isDomNodeList(x) {
		var prototypeToString = Object.prototype.toString.call(x);
		var regex = /^\\[object (HTMLCollection|NodeList|Object)\\]$/;

		return typeof window.NodeList === 'object'
			? x instanceof window.NodeList
			: x !== null &&
					typeof x === 'object' &&
					typeof x.length === 'number' &&
					regex.test(prototypeToString) &&
					(x.length === 0 || isDomNode(x[0]))
	}

	/*! @license Tealight v0.3.6

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/

	function tealight(target, context) {
	  if ( context === void 0 ) { context = document; }

	  if (target instanceof Array) { return target.filter(isDomNode); }
	  if (isDomNode(target)) { return [target]; }
	  if (isDomNodeList(target)) { return Array.prototype.slice.call(target); }
	  if (typeof target === "string") {
	    try {
	      var query = context.querySelectorAll(target);
	      return Array.prototype.slice.call(query);
	    } catch (err) {
	      return [];
	    }
	  }
	  return [];
	}

	function isObject(x) {
		return (
			x !== null &&
			x instanceof Object &&
			(x.constructor === Object ||
				Object.prototype.toString.call(x) === '[object Object]')
		)
	}

	function each(collection, callback) {
		if (isObject(collection)) {
			var keys = Object.keys(collection);
			return keys.forEach(function (key) { return callback(collection[key], key, collection); })
		}
		if (collection instanceof Array) {
			return collection.forEach(function (item, i) { return callback(item, i, collection); })
		}
		throw new TypeError('Expected either an array or object literal.')
	}

	function logger(message) {
		var details = [], len = arguments.length - 1;
		while ( len-- > 0 ) details[ len ] = arguments[ len + 1 ];

		if (this.constructor.debug && console) {
			var report = "%cScrollReveal: " + message;
			details.forEach(function (detail) { return (report += "\\n \u2014 " + detail); });
			console.log(report, 'color: #ea654b;'); // eslint-disable-line no-console
		}
	}

	function rinse() {
		var this$1 = this;

		var struct = function () { return ({
			active: [],
			stale: []
		}); };

		var elementIds = struct();
		var sequenceIds = struct();
		var containerIds = struct();

		/**
		 * Take stock of active element IDs.
		 */
		try {
			each(tealight('[data-sr-id]'), function (node) {
				var id = parseInt(node.getAttribute('data-sr-id'));
				elementIds.active.push(id);
			});
		} catch (e) {
			throw e
		}
		/**
		 * Destroy stale elements.
		 */
		each(this.store.elements, function (element) {
			if (elementIds.active.indexOf(element.id) === -1) {
				elementIds.stale.push(element.id);
			}
		});

		each(elementIds.stale, function (staleId) { return delete this$1.store.elements[staleId]; });

		/**
		 * Take stock of active container and sequence IDs.
		 */
		each(this.store.elements, function (element) {
			if (containerIds.active.indexOf(element.containerId) === -1) {
				containerIds.active.push(element.containerId);
			}
			if (element.hasOwnProperty('sequence')) {
				if (sequenceIds.active.indexOf(element.sequence.id) === -1) {
					sequenceIds.active.push(element.sequence.id);
				}
			}
		});

		/**
		 * Destroy stale containers.
		 */
		each(this.store.containers, function (container) {
			if (containerIds.active.indexOf(container.id) === -1) {
				containerIds.stale.push(container.id);
			}
		});

		each(containerIds.stale, function (staleId) {
			var stale = this$1.store.containers[staleId].node;
			stale.removeEventListener('scroll', this$1.delegate);
			stale.removeEventListener('resize', this$1.delegate);
			delete this$1.store.containers[staleId];
		});

		/**
		 * Destroy stale sequences.
		 */
		each(this.store.sequences, function (sequence) {
			if (sequenceIds.active.indexOf(sequence.id) === -1) {
				sequenceIds.stale.push(sequence.id);
			}
		});

		each(sequenceIds.stale, function (staleId) { return delete this$1.store.sequences[staleId]; });
	}

	/*! @license Rematrix v0.3.0

		Copyright 2018 Julian Lloyd.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE.
	*/
	/**
	 * @module Rematrix
	 */

	/**
	 * Transformation matrices in the browser come in two flavors:
	 *
	 *  - \`matrix\` using 6 values (short)
	 *  - \`matrix3d\` using 16 values (long)
	 *
	 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
	 * to expand short form matrices to their equivalent long form.
	 *
	 * @param  {array} source - Accepts both short and long form matrices.
	 * @return {array}
	 */
	function format(source) {
		if (source.constructor !== Array) {
			throw new TypeError('Expected array.')
		}
		if (source.length === 16) {
			return source
		}
		if (source.length === 6) {
			var matrix = identity();
			matrix[0] = source[0];
			matrix[1] = source[1];
			matrix[4] = source[2];
			matrix[5] = source[3];
			matrix[12] = source[4];
			matrix[13] = source[5];
			return matrix
		}
		throw new RangeError('Expected array with either 6 or 16 values.')
	}

	/**
	 * Returns a matrix representing no transformation. The product of any matrix
	 * multiplied by the identity matrix will be the original matrix.
	 *
	 * > **Tip:** Similar to how \`5 * 1 === 5\`, where \`1\` is the identity.
	 *
	 * @return {array}
	 */
	function identity() {
		var matrix = [];
		for (var i = 0; i < 16; i++) {
			i % 5 == 0 ? matrix.push(1) : matrix.push(0);
		}
		return matrix
	}

	/**
	 * Returns a 4x4 matrix describing the combined transformations
	 * of both arguments.
	 *
	 * > **Note:** Order is very important. For example, rotating 45\xB0
	 * along the Z-axis, followed by translating 500 pixels along the
	 * Y-axis... is not the same as translating 500 pixels along the
	 * Y-axis, followed by rotating 45\xB0 along on the Z-axis.
	 *
	 * @param  {array} m - Accepts both short and long form matrices.
	 * @param  {array} x - Accepts both short and long form matrices.
	 * @return {array}
	 */
	function multiply(m, x) {
		var fm = format(m);
		var fx = format(x);
		var product = [];

		for (var i = 0; i < 4; i++) {
			var row = [fm[i], fm[i + 4], fm[i + 8], fm[i + 12]];
			for (var j = 0; j < 4; j++) {
				var k = j * 4;
				var col = [fx[k], fx[k + 1], fx[k + 2], fx[k + 3]];
				var result =
					row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];

				product[i + k] = result;
			}
		}

		return product
	}

	/**
	 * Attempts to return a 4x4 matrix describing the CSS transform
	 * matrix passed in, but will return the identity matrix as a
	 * fallback.
	 *
	 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
	 * \`string\` from computed styles) to its equivalent array format.
	 *
	 * @param  {string} source - \`matrix\` or \`matrix3d\` CSS Transform value.
	 * @return {array}
	 */
	function parse(source) {
		if (typeof source === 'string') {
			var match = source.match(/matrix(3d)?\\(([^)]+)\\)/);
			if (match) {
				var raw = match[2].split(', ').map(parseFloat);
				return format(raw)
			}
		}
		return identity()
	}

	/**
	 * Returns a 4x4 matrix describing X-axis rotation.
	 *
	 * @param  {number} angle - Measured in degrees.
	 * @return {array}
	 */
	function rotateX(angle) {
		var theta = Math.PI / 180 * angle;
		var matrix = identity();

		matrix[5] = matrix[10] = Math.cos(theta);
		matrix[6] = matrix[9] = Math.sin(theta);
		matrix[9] *= -1;

		return matrix
	}

	/**
	 * Returns a 4x4 matrix describing Y-axis rotation.
	 *
	 * @param  {number} angle - Measured in degrees.
	 * @return {array}
	 */
	function rotateY(angle) {
		var theta = Math.PI / 180 * angle;
		var matrix = identity();

		matrix[0] = matrix[10] = Math.cos(theta);
		matrix[2] = matrix[8] = Math.sin(theta);
		matrix[2] *= -1;

		return matrix
	}

	/**
	 * Returns a 4x4 matrix describing Z-axis rotation.
	 *
	 * @param  {number} angle - Measured in degrees.
	 * @return {array}
	 */
	function rotateZ(angle) {
		var theta = Math.PI / 180 * angle;
		var matrix = identity();

		matrix[0] = matrix[5] = Math.cos(theta);
		matrix[1] = matrix[4] = Math.sin(theta);
		matrix[4] *= -1;

		return matrix
	}

	/**
	 * Returns a 4x4 matrix describing 2D scaling. The first argument
	 * is used for both X and Y-axis scaling, unless an optional
	 * second argument is provided to explicitly define Y-axis scaling.
	 *
	 * @param  {number} scalar    - Decimal multiplier.
	 * @param  {number} [scalarY] - Decimal multiplier.
	 * @return {array}
	 */
	function scale(scalar, scalarY) {
		var matrix = identity();

		matrix[0] = scalar;
		matrix[5] = typeof scalarY === 'number' ? scalarY : scalar;

		return matrix
	}

	/**
	 * Returns a 4x4 matrix describing X-axis translation.
	 *
	 * @param  {number} distance - Measured in pixels.
	 * @return {array}
	 */
	function translateX(distance) {
		var matrix = identity();
		matrix[12] = distance;
		return matrix
	}

	/**
	 * Returns a 4x4 matrix describing Y-axis translation.
	 *
	 * @param  {number} distance - Measured in pixels.
	 * @return {array}
	 */
	function translateY(distance) {
		var matrix = identity();
		matrix[13] = distance;
		return matrix
	}

	var getPrefixedCssProp = (function () {
		var properties = {};
		var style = document.documentElement.style;

		function getPrefixedCssProperty(name, source) {
			if ( source === void 0 ) source = style;

			if (name && typeof name === 'string') {
				if (properties[name]) {
					return properties[name]
				}
				if (typeof source[name] === 'string') {
					return (properties[name] = name)
				}
				if (typeof source[("-webkit-" + name)] === 'string') {
					return (properties[name] = "-webkit-" + name)
				}
				throw new RangeError(("Unable to find \\"" + name + "\\" style property."))
			}
			throw new TypeError('Expected a string.')
		}

		getPrefixedCssProperty.clearCache = function () { return (properties = {}); };

		return getPrefixedCssProperty
	})();

	function style(element) {
		var computed = window.getComputedStyle(element.node);
		var position = computed.position;
		var config = element.config;

		/**
		 * Generate inline styles
		 */
		var inline = {};
		var inlineStyle = element.node.getAttribute('style') || '';
		var inlineMatch = inlineStyle.match(/[\\w-]+\\s*:\\s*[^;]+\\s*/gi) || [];

		inline.computed = inlineMatch ? inlineMatch.map(function (m) { return m.trim(); }).join('; ') + ';' : '';

		inline.generated = inlineMatch.some(function (m) { return m.match(/visibility\\s?:\\s?visible/i); })
			? inline.computed
			: inlineMatch.concat( ['visibility: visible']).map(function (m) { return m.trim(); }).join('; ') + ';';

		/**
		 * Generate opacity styles
		 */
		var computedOpacity = parseFloat(computed.opacity);
		var configOpacity = !isNaN(parseFloat(config.opacity))
			? parseFloat(config.opacity)
			: parseFloat(computed.opacity);

		var opacity = {
			computed: computedOpacity !== configOpacity ? ("opacity: " + computedOpacity + ";") : '',
			generated: computedOpacity !== configOpacity ? ("opacity: " + configOpacity + ";") : ''
		};

		/**
		 * Generate transformation styles
		 */
		var transformations = [];

		if (parseFloat(config.distance)) {
			var axis = config.origin === 'top' || config.origin === 'bottom' ? 'Y' : 'X';

			/**
			 * Let\u2019s make sure our our pixel distances are negative for top and left.
			 * e.g. { origin: 'top', distance: '25px' } starts at \`top: -25px\` in CSS.
			 */
			var distance = config.distance;
			if (config.origin === 'top' || config.origin === 'left') {
				distance = /^-/.test(distance) ? distance.substr(1) : ("-" + distance);
			}

			var ref = distance.match(/(^-?\\d+\\.?\\d?)|(em$|px$|%$)/g);
			var value = ref[0];
			var unit = ref[1];

			switch (unit) {
				case 'em':
					distance = parseInt(computed.fontSize) * value;
					break
				case 'px':
					distance = value;
					break
				case '%':
					/**
					 * Here we use \`getBoundingClientRect\` instead of
					 * the existing data attached to \`element.geometry\`
					 * because only the former includes any transformations
					 * current applied to the element.
					 *
					 * If that behavior ends up being unintuitive, this
					 * logic could instead utilize \`element.geometry.height\`
					 * and \`element.geoemetry.width\` for the distance calculation
					 */
					distance =
						axis === 'Y'
							? (element.node.getBoundingClientRect().height * value) / 100
							: (element.node.getBoundingClientRect().width * value) / 100;
					break
				default:
					throw new RangeError('Unrecognized or missing distance unit.')
			}

			if (axis === 'Y') {
				transformations.push(translateY(distance));
			} else {
				transformations.push(translateX(distance));
			}
		}

		if (config.rotate.x) { transformations.push(rotateX(config.rotate.x)); }
		if (config.rotate.y) { transformations.push(rotateY(config.rotate.y)); }
		if (config.rotate.z) { transformations.push(rotateZ(config.rotate.z)); }
		if (config.scale !== 1) {
			if (config.scale === 0) {
				/**
				 * The CSS Transforms matrix interpolation specification
				 * basically disallows transitions of non-invertible
				 * matrixes, which means browsers won't transition
				 * elements with zero scale.
				 *
				 * That\u2019s inconvenient for the API and developer
				 * experience, so we simply nudge their value
				 * slightly above zero; this allows browsers
				 * to transition our element as expected.
				 *
				 * \`0.0002\` was the smallest number
				 * that performed across browsers.
				 */
				transformations.push(scale(0.0002));
			} else {
				transformations.push(scale(config.scale));
			}
		}

		var transform = {};
		if (transformations.length) {
			transform.property = getPrefixedCssProp('transform');
			/**
			 * The default computed transform value should be one of:
			 * undefined || 'none' || 'matrix()' || 'matrix3d()'
			 */
			transform.computed = {
				raw: computed[transform.property],
				matrix: parse(computed[transform.property])
			};

			transformations.unshift(transform.computed.matrix);
			var product = transformations.reduce(multiply);

			transform.generated = {
				initial: ((transform.property) + ": matrix3d(" + (product.join(', ')) + ");"),
				final: ((transform.property) + ": matrix3d(" + (transform.computed.matrix.join(', ')) + ");")
			};
		} else {
			transform.generated = {
				initial: '',
				final: ''
			};
		}

		/**
		 * Generate transition styles
		 */
		var transition = {};
		if (opacity.generated || transform.generated.initial) {
			transition.property = getPrefixedCssProp('transition');
			transition.computed = computed[transition.property];
			transition.fragments = [];

			var delay = config.delay;
			var duration = config.duration;
			var easing = config.easing;

			if (opacity.generated) {
				transition.fragments.push({
					delayed: ("opacity " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
					instant: ("opacity " + (duration / 1000) + "s " + easing + " 0s")
				});
			}

			if (transform.generated.initial) {
				transition.fragments.push({
					delayed: ((transform.property) + " " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
					instant: ((transform.property) + " " + (duration / 1000) + "s " + easing + " 0s")
				});
			}

			/**
			 * The default computed transition property should be undefined, or one of:
			 * '' || 'none 0s ease 0s' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
			 */
			var hasCustomTransition =
				transition.computed && !transition.computed.match(/all 0s|none 0s/);

			if (hasCustomTransition) {
				transition.fragments.unshift({
					delayed: transition.computed,
					instant: transition.computed
				});
			}

			var composed = transition.fragments.reduce(
				function (composition, fragment, i) {
					composition.delayed += i === 0 ? fragment.delayed : (", " + (fragment.delayed));
					composition.instant += i === 0 ? fragment.instant : (", " + (fragment.instant));
					return composition
				},
				{
					delayed: '',
					instant: ''
				}
			);

			transition.generated = {
				delayed: ((transition.property) + ": " + (composed.delayed) + ";"),
				instant: ((transition.property) + ": " + (composed.instant) + ";")
			};
		} else {
			transition.generated = {
				delayed: '',
				instant: ''
			};
		}

		return {
			inline: inline,
			opacity: opacity,
			position: position,
			transform: transform,
			transition: transition
		}
	}

	/**
	 * apply a CSS string to an element using the CSSOM (element.style) rather
	 * than setAttribute, which may violate the content security policy.
	 *
	 * @param {Node}   [el]  Element to receive styles.
	 * @param {string} [declaration] Styles to apply.
	 */
	function applyStyle (el, declaration) {
		declaration.split(';').forEach(function (pair) {
			var ref = pair.split(':');
			var property = ref[0];
			var value = ref.slice(1);
			if (property && value) {
				el.style[property.trim()] = value.join(':');
			}
		});
	}

	function clean(target) {
		var this$1 = this;

		var dirty;
		try {
			each(tealight(target), function (node) {
				var id = node.getAttribute('data-sr-id');
				if (id !== null) {
					dirty = true;
					var element = this$1.store.elements[id];
					if (element.callbackTimer) {
						window.clearTimeout(element.callbackTimer.clock);
					}
					applyStyle(element.node, element.styles.inline.generated);
					node.removeAttribute('data-sr-id');
					delete this$1.store.elements[id];
				}
			});
		} catch (e) {
			return logger.call(this, 'Clean failed.', e.message)
		}

		if (dirty) {
			try {
				rinse.call(this);
			} catch (e) {
				return logger.call(this, 'Clean failed.', e.message)
			}
		}
	}

	function destroy() {
		var this$1 = this;

		/**
		 * Remove all generated styles and element ids
		 */
		each(this.store.elements, function (element) {
			applyStyle(element.node, element.styles.inline.generated);
			element.node.removeAttribute('data-sr-id');
		});

		/**
		 * Remove all event listeners.
		 */
		each(this.store.containers, function (container) {
			var target =
				container.node === document.documentElement ? window : container.node;
			target.removeEventListener('scroll', this$1.delegate);
			target.removeEventListener('resize', this$1.delegate);
		});

		/**
		 * Clear all data from the store
		 */
		this.store = {
			containers: {},
			elements: {},
			history: [],
			sequences: {}
		};
	}

	function deepAssign(target) {
		var sources = [], len = arguments.length - 1;
		while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

		if (isObject(target)) {
			each(sources, function (source) {
				each(source, function (data, key) {
					if (isObject(data)) {
						if (!target[key] || !isObject(target[key])) {
							target[key] = {};
						}
						deepAssign(target[key], data);
					} else {
						target[key] = data;
					}
				});
			});
			return target
		} else {
			throw new TypeError('Target must be an object literal.')
		}
	}

	function isMobile(agent) {
		if ( agent === void 0 ) agent = navigator.userAgent;

		return /Android|iPhone|iPad|iPod/i.test(agent)
	}

	var nextUniqueId = (function () {
		var uid = 0;
		return function () { return uid++; }
	})();

	function initialize() {
		var this$1 = this;

		rinse.call(this);

		each(this.store.elements, function (element) {
			var styles = [element.styles.inline.generated];

			if (element.visible) {
				styles.push(element.styles.opacity.computed);
				styles.push(element.styles.transform.generated.final);
				element.revealed = true;
			} else {
				styles.push(element.styles.opacity.generated);
				styles.push(element.styles.transform.generated.initial);
				element.revealed = false;
			}

			applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
		});

		each(this.store.containers, function (container) {
			var target =
				container.node === document.documentElement ? window : container.node;
			target.addEventListener('scroll', this$1.delegate);
			target.addEventListener('resize', this$1.delegate);
		});

		/**
		 * Manually invoke delegate once to capture
		 * element and container dimensions, container
		 * scroll position, and trigger any valid reveals
		 */
		this.delegate();

		/**
		 * Wipe any existing \`setTimeout\` now
		 * that initialization has completed.
		 */
		this.initTimeout = null;
	}

	function animate(element, force) {
		if ( force === void 0 ) force = {};

		var pristine = force.pristine || this.pristine;
		var delayed =
			element.config.useDelay === 'always' ||
			(element.config.useDelay === 'onload' && pristine) ||
			(element.config.useDelay === 'once' && !element.seen);

		var shouldReveal = element.visible && !element.revealed;
		var shouldReset = !element.visible && element.revealed && element.config.reset;

		if (force.reveal || shouldReveal) {
			return triggerReveal.call(this, element, delayed)
		}

		if (force.reset || shouldReset) {
			return triggerReset.call(this, element)
		}
	}

	function triggerReveal(element, delayed) {
		var styles = [
			element.styles.inline.generated,
			element.styles.opacity.computed,
			element.styles.transform.generated.final
		];
		if (delayed) {
			styles.push(element.styles.transition.generated.delayed);
		} else {
			styles.push(element.styles.transition.generated.instant);
		}
		element.revealed = element.seen = true;
		applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
		registerCallbacks.call(this, element, delayed);
	}

	function triggerReset(element) {
		var styles = [
			element.styles.inline.generated,
			element.styles.opacity.generated,
			element.styles.transform.generated.initial,
			element.styles.transition.generated.instant
		];
		element.revealed = false;
		applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
		registerCallbacks.call(this, element);
	}

	function registerCallbacks(element, isDelayed) {
		var this$1 = this;

		var duration = isDelayed
			? element.config.duration + element.config.delay
			: element.config.duration;

		var beforeCallback = element.revealed
			? element.config.beforeReveal
			: element.config.beforeReset;

		var afterCallback = element.revealed
			? element.config.afterReveal
			: element.config.afterReset;

		var elapsed = 0;
		if (element.callbackTimer) {
			elapsed = Date.now() - element.callbackTimer.start;
			window.clearTimeout(element.callbackTimer.clock);
		}

		beforeCallback(element.node);

		element.callbackTimer = {
			start: Date.now(),
			clock: window.setTimeout(function () {
				afterCallback(element.node);
				element.callbackTimer = null;
				if (element.revealed && !element.config.reset && element.config.cleanup) {
					clean.call(this$1, element.node);
				}
			}, duration - elapsed)
		};
	}

	function sequence(element, pristine) {
		if ( pristine === void 0 ) pristine = this.pristine;

		/**
		 * We first check if the element should reset.
		 */
		if (!element.visible && element.revealed && element.config.reset) {
			return animate.call(this, element, { reset: true })
		}

		var seq = this.store.sequences[element.sequence.id];
		var i = element.sequence.index;

		if (seq) {
			var visible = new SequenceModel(seq, 'visible', this.store);
			var revealed = new SequenceModel(seq, 'revealed', this.store);

			seq.models = { visible: visible, revealed: revealed };

			/**
			 * If the sequence has no revealed members,
			 * then we reveal the first visible element
			 * within that sequence.
			 *
			 * The sequence then cues a recursive call
			 * in both directions.
			 */
			if (!revealed.body.length) {
				var nextId = seq.members[visible.body[0]];
				var nextElement = this.store.elements[nextId];

				if (nextElement) {
					cue.call(this, seq, visible.body[0], -1, pristine);
					cue.call(this, seq, visible.body[0], +1, pristine);
					return animate.call(this, nextElement, { reveal: true, pristine: pristine })
				}
			}

			/**
			 * If our element isn\u2019t resetting, we check the
			 * element sequence index against the head, and
			 * then the foot of the sequence.
			 */
			if (
				!seq.blocked.head &&
				i === [].concat( revealed.head ).pop() &&
				i >= [].concat( visible.body ).shift()
			) {
				cue.call(this, seq, i, -1, pristine);
				return animate.call(this, element, { reveal: true, pristine: pristine })
			}

			if (
				!seq.blocked.foot &&
				i === [].concat( revealed.foot ).shift() &&
				i <= [].concat( visible.body ).pop()
			) {
				cue.call(this, seq, i, +1, pristine);
				return animate.call(this, element, { reveal: true, pristine: pristine })
			}
		}
	}

	function Sequence(interval) {
		var i = Math.abs(interval);
		if (!isNaN(i)) {
			this.id = nextUniqueId();
			this.interval = Math.max(i, 16);
			this.members = [];
			this.models = {};
			this.blocked = {
				head: false,
				foot: false
			};
		} else {
			throw new RangeError('Invalid sequence interval.')
		}
	}

	function SequenceModel(seq, prop, store) {
		var this$1 = this;

		this.head = [];
		this.body = [];
		this.foot = [];

		each(seq.members, function (id, index) {
			var element = store.elements[id];
			if (element && element[prop]) {
				this$1.body.push(index);
			}
		});

		if (this.body.length) {
			each(seq.members, function (id, index) {
				var element = store.elements[id];
				if (element && !element[prop]) {
					if (index < this$1.body[0]) {
						this$1.head.push(index);
					} else {
						this$1.foot.push(index);
					}
				}
			});
		}
	}

	function cue(seq, i, direction, pristine) {
		var this$1 = this;

		var blocked = ['head', null, 'foot'][1 + direction];
		var nextId = seq.members[i + direction];
		var nextElement = this.store.elements[nextId];

		seq.blocked[blocked] = true;

		setTimeout(function () {
			seq.blocked[blocked] = false;
			if (nextElement) {
				sequence.call(this$1, nextElement, pristine);
			}
		}, seq.interval);
	}

	function reveal(target, options, syncing) {
		var this$1 = this;
		if ( options === void 0 ) options = {};
		if ( syncing === void 0 ) syncing = false;

		var containerBuffer = [];
		var sequence$$1;
		var interval = options.interval || defaults.interval;

		try {
			if (interval) {
				sequence$$1 = new Sequence(interval);
			}

			var nodes = tealight(target);
			if (!nodes.length) {
				throw new Error('Invalid reveal target.')
			}

			var elements = nodes.reduce(function (elementBuffer, elementNode) {
				var element = {};
				var existingId = elementNode.getAttribute('data-sr-id');

				if (existingId) {
					deepAssign(element, this$1.store.elements[existingId]);

					/**
					 * In order to prevent previously generated styles
					 * from throwing off the new styles, the style tag
					 * has to be reverted to its pre-reveal state.
					 */
					applyStyle(element.node, element.styles.inline.computed);
				} else {
					element.id = nextUniqueId();
					element.node = elementNode;
					element.seen = false;
					element.revealed = false;
					element.visible = false;
				}

				var config = deepAssign({}, element.config || this$1.defaults, options);

				if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
					if (existingId) {
						clean.call(this$1, element);
					}
					return elementBuffer // skip elements that are disabled
				}

				var containerNode = tealight(config.container)[0];
				if (!containerNode) {
					throw new Error('Invalid container.')
				}
				if (!containerNode.contains(elementNode)) {
					return elementBuffer // skip elements found outside the container
				}

				var containerId;
				{
					containerId = getContainerId(
						containerNode,
						containerBuffer,
						this$1.store.containers
					);
					if (containerId === null) {
						containerId = nextUniqueId();
						containerBuffer.push({ id: containerId, node: containerNode });
					}
				}

				element.config = config;
				element.containerId = containerId;
				element.styles = style(element);

				if (sequence$$1) {
					element.sequence = {
						id: sequence$$1.id,
						index: sequence$$1.members.length
					};
					sequence$$1.members.push(element.id);
				}

				elementBuffer.push(element);
				return elementBuffer
			}, []);

			/**
			 * Modifying the DOM via setAttribute needs to be handled
			 * separately from reading computed styles in the map above
			 * for the browser to batch DOM changes (limiting reflows)
			 */
			each(elements, function (element) {
				this$1.store.elements[element.id] = element;
				element.node.setAttribute('data-sr-id', element.id);
			});
		} catch (e) {
			return logger.call(this, 'Reveal failed.', e.message)
		}

		/**
		 * Now that element set-up is complete...
		 * Let\u2019s commit any container and sequence data we have to the store.
		 */
		each(containerBuffer, function (container) {
			this$1.store.containers[container.id] = {
				id: container.id,
				node: container.node
			};
		});
		if (sequence$$1) {
			this.store.sequences[sequence$$1.id] = sequence$$1;
		}

		/**
		 * If reveal wasn't invoked by sync, we want to
		 * make sure to add this call to the history.
		 */
		if (syncing !== true) {
			this.store.history.push({ target: target, options: options });

			/**
			 * Push initialization to the event queue, giving
			 * multiple reveal calls time to be interpreted.
			 */
			if (this.initTimeout) {
				window.clearTimeout(this.initTimeout);
			}
			this.initTimeout = window.setTimeout(initialize.bind(this), 0);
		}
	}

	function getContainerId(node) {
		var collections = [], len = arguments.length - 1;
		while ( len-- > 0 ) collections[ len ] = arguments[ len + 1 ];

		var id = null;
		each(collections, function (collection) {
			each(collection, function (container) {
				if (id === null && container.node === node) {
					id = container.id;
				}
			});
		});
		return id
	}

	/**
	 * Re-runs the reveal method for each record stored in history,
	 * for capturing new content asynchronously loaded into the DOM.
	 */
	function sync() {
		var this$1 = this;

		each(this.store.history, function (record) {
			reveal.call(this$1, record.target, record.options, true);
		});

		initialize.call(this);
	}

	var polyfill = function (x) { return (x > 0) - (x < 0) || +x; };
	var mathSign = Math.sign || polyfill;

	/*! @license miniraf v1.0.1

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/
	var polyfill$1 = (function () {
		var clock = Date.now();

		return function (callback) {
			var currentTime = Date.now();
			if (currentTime - clock > 16) {
				clock = currentTime;
				callback(currentTime);
			} else {
				setTimeout(function () { return polyfill$1(callback); }, 0);
			}
		}
	})();

	var miniraf = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		polyfill$1;

	function getGeometry(target, isContainer) {
		/**
		 * We want to ignore padding and scrollbars for container elements.
		 * More information here: https://goo.gl/vOZpbz
		 */
		var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
		var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;

		var offsetTop = 0;
		var offsetLeft = 0;
		var node = target.node;

		do {
			if (!isNaN(node.offsetTop)) {
				offsetTop += node.offsetTop;
			}
			if (!isNaN(node.offsetLeft)) {
				offsetLeft += node.offsetLeft;
			}
			node = node.offsetParent;
		} while (node)

		return {
			bounds: {
				top: offsetTop,
				right: offsetLeft + width,
				bottom: offsetTop + height,
				left: offsetLeft
			},
			height: height,
			width: width
		}
	}

	function getScrolled(container) {
		var top, left;
		if (container.node === document.documentElement) {
			top = window.pageYOffset;
			left = window.pageXOffset;
		} else {
			top = container.node.scrollTop;
			left = container.node.scrollLeft;
		}
		return { top: top, left: left }
	}

	function isElementVisible(element) {
		if ( element === void 0 ) element = {};

		var container = this.store.containers[element.containerId];
		if (!container) { return }

		var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
		var viewOffset = element.config.viewOffset;

		var elementBounds = {
			top: element.geometry.bounds.top + element.geometry.height * viewFactor,
			right: element.geometry.bounds.right - element.geometry.width * viewFactor,
			bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
			left: element.geometry.bounds.left + element.geometry.width * viewFactor
		};

		var containerBounds = {
			top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
			right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
			bottom:
				container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
			left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
		};

		return (
			(elementBounds.top < containerBounds.bottom &&
				elementBounds.right > containerBounds.left &&
				elementBounds.bottom > containerBounds.top &&
				elementBounds.left < containerBounds.right) ||
			element.styles.position === 'fixed'
		)
	}

	function delegate(
		event,
		elements
	) {
		var this$1 = this;
		if ( event === void 0 ) event = { type: 'init' };
		if ( elements === void 0 ) elements = this.store.elements;

		miniraf(function () {
			var stale = event.type === 'init' || event.type === 'resize';

			each(this$1.store.containers, function (container) {
				if (stale) {
					container.geometry = getGeometry.call(this$1, container, true);
				}
				var scroll = getScrolled.call(this$1, container);
				if (container.scroll) {
					container.direction = {
						x: mathSign(scroll.left - container.scroll.left),
						y: mathSign(scroll.top - container.scroll.top)
					};
				}
				container.scroll = scroll;
			});

			/**
			 * Due to how the sequencer is implemented, it\u2019s
			 * important that we update the state of all
			 * elements, before any animation logic is
			 * evaluated (in the second loop below).
			 */
			each(elements, function (element) {
				if (stale || element.geometry === undefined) {
					element.geometry = getGeometry.call(this$1, element);
				}
				element.visible = isElementVisible.call(this$1, element);
			});

			each(elements, function (element) {
				if (element.sequence) {
					sequence.call(this$1, element);
				} else {
					animate.call(this$1, element);
				}
			});

			this$1.pristine = false;
		});
	}

	function isTransformSupported() {
		var style = document.documentElement.style;
		return 'transform' in style || 'WebkitTransform' in style
	}

	function isTransitionSupported() {
		var style = document.documentElement.style;
		return 'transition' in style || 'WebkitTransition' in style
	}

	var version = "4.0.9";

	var boundDelegate;
	var boundDestroy;
	var boundReveal;
	var boundClean;
	var boundSync;
	var config;
	var debug;
	var instance;

	function ScrollReveal(options) {
		if ( options === void 0 ) options = {};

		var invokedWithoutNew =
			typeof this === 'undefined' ||
			Object.getPrototypeOf(this) !== ScrollReveal.prototype;

		if (invokedWithoutNew) {
			return new ScrollReveal(options)
		}

		if (!ScrollReveal.isSupported()) {
			logger.call(this, 'Instantiation failed.', 'This browser is not supported.');
			return mount.failure()
		}

		var buffer;
		try {
			buffer = config
				? deepAssign({}, config, options)
				: deepAssign({}, defaults, options);
		} catch (e) {
			logger.call(this, 'Invalid configuration.', e.message);
			return mount.failure()
		}

		try {
			var container = tealight(buffer.container)[0];
			if (!container) {
				throw new Error('Invalid container.')
			}
		} catch (e) {
			logger.call(this, e.message);
			return mount.failure()
		}

		config = buffer;

		if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
			logger.call(
				this,
				'This device is disabled.',
				("desktop: " + (config.desktop)),
				("mobile: " + (config.mobile))
			);
			return mount.failure()
		}

		mount.success();

		this.store = {
			containers: {},
			elements: {},
			history: [],
			sequences: {}
		};

		this.pristine = true;

		boundDelegate = boundDelegate || delegate.bind(this);
		boundDestroy = boundDestroy || destroy.bind(this);
		boundReveal = boundReveal || reveal.bind(this);
		boundClean = boundClean || clean.bind(this);
		boundSync = boundSync || sync.bind(this);

		Object.defineProperty(this, 'delegate', { get: function () { return boundDelegate; } });
		Object.defineProperty(this, 'destroy', { get: function () { return boundDestroy; } });
		Object.defineProperty(this, 'reveal', { get: function () { return boundReveal; } });
		Object.defineProperty(this, 'clean', { get: function () { return boundClean; } });
		Object.defineProperty(this, 'sync', { get: function () { return boundSync; } });

		Object.defineProperty(this, 'defaults', { get: function () { return config; } });
		Object.defineProperty(this, 'version', { get: function () { return version; } });
		Object.defineProperty(this, 'noop', { get: function () { return false; } });

		return instance ? instance : (instance = this)
	}

	ScrollReveal.isSupported = function () { return isTransformSupported() && isTransitionSupported(); };

	Object.defineProperty(ScrollReveal, 'debug', {
		get: function () { return debug || false; },
		set: function (value) { return (debug = typeof value === 'boolean' ? value : debug); }
	});

	ScrollReveal();

	return ScrollReveal;

}));
<\/script> <script>
	const cardArr = [document.querySelectorAll('.card-container-s')[0], document.querySelectorAll('.card-container-s')[1], document.querySelectorAll('.card-container-s')[2]]

    window.sr = ScrollReveal();

	sr.reveal('.header__img', {
		duration: 1000,
        origin: 'bottom',
		distance: '100px',
    })

	if (window.screen.availWidth >= 900){
	    // Funci\xF3n que se ejecutar\xE1 cuando el elemento sea observado
		function handleIntersection(entries, observer) {
      		entries.forEach(entry => {
        		if (entry.isIntersecting) {
      				console.log('Se est\xE1 observando el elemento .main__section--two');
					  sr.reveal(cardArr[2], {
						duration: 600,
        				origin: 'top',
						distance: '100px',
    				})

		  			sr.reveal(cardArr[1], {
						duration: 1000,
        				origin: 'top',
						distance: '100px',
    				})

					sr.reveal(cardArr[0], {
						duration: 1400,
        				origin: 'top',
						distance: '100px',
    				})
    			}
      		});
    	}

    	// Crear un nuevo observador
    	const observer = new IntersectionObserver(handleIntersection, {
      		root: null, // null significa que se utilizar\xE1 el viewport como root
      		rootMargin: '0px', // m\xE1rgenes en px alrededor del root
      		threshold: 0.5 // el porcentaje de visibilidad del target necesario para disparar la funci\xF3n de callback
    	});

    	// Seleccionar el elemento que se va a observar
    	const targetElement = document.querySelector('.article__title');

    	// Iniciar la observaci\xF3n del elemento
    	observer.observe(targetElement);
	} else{
		sr.reveal(cardArr[2], {
				duration: 600,
        		origin: 'top',
				distance: '100px',
    		})

		  	sr.reveal(cardArr[1], {
				duration: 1000,
        		origin: 'top',
				distance: '100px',
    		})

			sr.reveal(cardArr[0], {
				duration: 1400,
        		origin: 'top',
				distance: '100px',
    		})
	}
<\/script> <!--Preloader --> <script>
	const btc = document.querySelector('.btc');
	document.body.style.overflowY = 'hidden';
	window.addEventListener('load', () =>{
		btc.classList.add('no-btc');
		document.body.style.overflowY = 'scroll';
	})
<\/script> <!--Odometer --> <script src="/odometer.js"><\/script> <script>
	const odometerArr = document.querySelectorAll('.odometer');
	setTimeout(() =>{
		odometerArr[0].innerHTML = 250
	}, 1000)
	setTimeout(() =>{
		odometerArr[1].innerHTML = 17000
	}, 1000)
	setTimeout(() =>{
		odometerArr[2].innerHTML = 24
	}, 1000)
<\/script> <!--Resend --> <script>
	const name = document.querySelector("#s5 > article > form > div:nth-child(1) > input");
	const email = document.querySelector("#s5 > article > form > div:nth-child(2) > input");
	const tel = document.querySelector("#s5 > article > form > div:nth-child(3) > input");
	const message = document.querySelector("#s5 > article > form > div:nth-child(4) > textarea");
	const sendBtn = document.querySelector("#s5 > article > form > div.form__bc > button");

	sendBtn.addEventListener('click', async () =>{
		try {
			const res = await fetch("/api/sendEmail.json", {
				method: "POST",
				headers: {
					"Content-Type": "aplication/json"
				},
				body: JSON.stringify({
					from: "noreply@resend.dev",
					to: "isma.tux3er@gmail.com",
					subject: "Mensaje desde MineBest",
					html: \`<p>Hola tienes un mensaje de: <strong>\${name.value}<strong></p>
						<p>Su email es: <strong>\${email.value}<strong></p>
						<p>Su numero de telefono es: <strong>\${tel.value}<strong></p>
							<p>Su mensaje es: <strong>\${message.value}<strong></p>	\`,
					text: "Hola"
				})
			})	
				const data = await res.json();
				console.log(data);
				alert("Su mensaje se ha enviado correctamente");

		} catch (err) {
				console.error(err);
				alert("Ha habido un error");
			}
	})
<\/script></body></html>`], ['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"><script src="https://kit.fontawesome.com/a1618bce8f.js" crossorigin="anonymous"><\/script><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"><meta name="generator"', "><title>", '</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"><link rel="stylesheet" href="/odometer.css"><!-- <ViewTransitions /> -->', '</head> <body> <div class="btc"> ', ' </div> <div class="body-c"> ', " ", " ", ` </div>  <!--Scroll Reveal --> <script>
	/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.ScrollReveal = factory());
}(this, function () { 'use strict';

	var defaults = {
		delay: 0,
		distance: '0',
		duration: 600,
		easing: 'cubic-bezier(0.5, 0, 0, 1)',
		interval: 0,
		opacity: 0,
		origin: 'bottom',
		rotate: {
			x: 0,
			y: 0,
			z: 0
		},
		scale: 1,
		cleanup: false,
		container: document.documentElement,
		desktop: true,
		mobile: true,
		reset: false,
		useDelay: 'always',
		viewFactor: 0.0,
		viewOffset: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		},
		afterReset: function afterReset() {},
		afterReveal: function afterReveal() {},
		beforeReset: function beforeReset() {},
		beforeReveal: function beforeReveal() {}
	};

	function failure() {
		document.documentElement.classList.remove('sr');

		return {
			clean: function clean() {},
			destroy: function destroy() {},
			reveal: function reveal() {},
			sync: function sync() {},
			get noop() {
				return true
			}
		}
	}

	function success() {
		document.documentElement.classList.add('sr');

		if (document.body) {
			document.body.style.height = '100%';
		} else {
			document.addEventListener('DOMContentLoaded', function () {
				document.body.style.height = '100%';
			});
		}
	}

	var mount = { success: success, failure: failure };

	/*! @license is-dom-node v1.0.4

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/
	function isDomNode(x) {
		return typeof window.Node === 'object'
			? x instanceof window.Node
			: x !== null &&
					typeof x === 'object' &&
					typeof x.nodeType === 'number' &&
					typeof x.nodeName === 'string'
	}

	/*! @license is-dom-node-list v1.2.1

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/

	function isDomNodeList(x) {
		var prototypeToString = Object.prototype.toString.call(x);
		var regex = /^\\\\[object (HTMLCollection|NodeList|Object)\\\\]$/;

		return typeof window.NodeList === 'object'
			? x instanceof window.NodeList
			: x !== null &&
					typeof x === 'object' &&
					typeof x.length === 'number' &&
					regex.test(prototypeToString) &&
					(x.length === 0 || isDomNode(x[0]))
	}

	/*! @license Tealight v0.3.6

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/

	function tealight(target, context) {
	  if ( context === void 0 ) { context = document; }

	  if (target instanceof Array) { return target.filter(isDomNode); }
	  if (isDomNode(target)) { return [target]; }
	  if (isDomNodeList(target)) { return Array.prototype.slice.call(target); }
	  if (typeof target === "string") {
	    try {
	      var query = context.querySelectorAll(target);
	      return Array.prototype.slice.call(query);
	    } catch (err) {
	      return [];
	    }
	  }
	  return [];
	}

	function isObject(x) {
		return (
			x !== null &&
			x instanceof Object &&
			(x.constructor === Object ||
				Object.prototype.toString.call(x) === '[object Object]')
		)
	}

	function each(collection, callback) {
		if (isObject(collection)) {
			var keys = Object.keys(collection);
			return keys.forEach(function (key) { return callback(collection[key], key, collection); })
		}
		if (collection instanceof Array) {
			return collection.forEach(function (item, i) { return callback(item, i, collection); })
		}
		throw new TypeError('Expected either an array or object literal.')
	}

	function logger(message) {
		var details = [], len = arguments.length - 1;
		while ( len-- > 0 ) details[ len ] = arguments[ len + 1 ];

		if (this.constructor.debug && console) {
			var report = "%cScrollReveal: " + message;
			details.forEach(function (detail) { return (report += "\\\\n \u2014 " + detail); });
			console.log(report, 'color: #ea654b;'); // eslint-disable-line no-console
		}
	}

	function rinse() {
		var this$1 = this;

		var struct = function () { return ({
			active: [],
			stale: []
		}); };

		var elementIds = struct();
		var sequenceIds = struct();
		var containerIds = struct();

		/**
		 * Take stock of active element IDs.
		 */
		try {
			each(tealight('[data-sr-id]'), function (node) {
				var id = parseInt(node.getAttribute('data-sr-id'));
				elementIds.active.push(id);
			});
		} catch (e) {
			throw e
		}
		/**
		 * Destroy stale elements.
		 */
		each(this.store.elements, function (element) {
			if (elementIds.active.indexOf(element.id) === -1) {
				elementIds.stale.push(element.id);
			}
		});

		each(elementIds.stale, function (staleId) { return delete this$1.store.elements[staleId]; });

		/**
		 * Take stock of active container and sequence IDs.
		 */
		each(this.store.elements, function (element) {
			if (containerIds.active.indexOf(element.containerId) === -1) {
				containerIds.active.push(element.containerId);
			}
			if (element.hasOwnProperty('sequence')) {
				if (sequenceIds.active.indexOf(element.sequence.id) === -1) {
					sequenceIds.active.push(element.sequence.id);
				}
			}
		});

		/**
		 * Destroy stale containers.
		 */
		each(this.store.containers, function (container) {
			if (containerIds.active.indexOf(container.id) === -1) {
				containerIds.stale.push(container.id);
			}
		});

		each(containerIds.stale, function (staleId) {
			var stale = this$1.store.containers[staleId].node;
			stale.removeEventListener('scroll', this$1.delegate);
			stale.removeEventListener('resize', this$1.delegate);
			delete this$1.store.containers[staleId];
		});

		/**
		 * Destroy stale sequences.
		 */
		each(this.store.sequences, function (sequence) {
			if (sequenceIds.active.indexOf(sequence.id) === -1) {
				sequenceIds.stale.push(sequence.id);
			}
		});

		each(sequenceIds.stale, function (staleId) { return delete this$1.store.sequences[staleId]; });
	}

	/*! @license Rematrix v0.3.0

		Copyright 2018 Julian Lloyd.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE.
	*/
	/**
	 * @module Rematrix
	 */

	/**
	 * Transformation matrices in the browser come in two flavors:
	 *
	 *  - \\\`matrix\\\` using 6 values (short)
	 *  - \\\`matrix3d\\\` using 16 values (long)
	 *
	 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
	 * to expand short form matrices to their equivalent long form.
	 *
	 * @param  {array} source - Accepts both short and long form matrices.
	 * @return {array}
	 */
	function format(source) {
		if (source.constructor !== Array) {
			throw new TypeError('Expected array.')
		}
		if (source.length === 16) {
			return source
		}
		if (source.length === 6) {
			var matrix = identity();
			matrix[0] = source[0];
			matrix[1] = source[1];
			matrix[4] = source[2];
			matrix[5] = source[3];
			matrix[12] = source[4];
			matrix[13] = source[5];
			return matrix
		}
		throw new RangeError('Expected array with either 6 or 16 values.')
	}

	/**
	 * Returns a matrix representing no transformation. The product of any matrix
	 * multiplied by the identity matrix will be the original matrix.
	 *
	 * > **Tip:** Similar to how \\\`5 * 1 === 5\\\`, where \\\`1\\\` is the identity.
	 *
	 * @return {array}
	 */
	function identity() {
		var matrix = [];
		for (var i = 0; i < 16; i++) {
			i % 5 == 0 ? matrix.push(1) : matrix.push(0);
		}
		return matrix
	}

	/**
	 * Returns a 4x4 matrix describing the combined transformations
	 * of both arguments.
	 *
	 * > **Note:** Order is very important. For example, rotating 45\xB0
	 * along the Z-axis, followed by translating 500 pixels along the
	 * Y-axis... is not the same as translating 500 pixels along the
	 * Y-axis, followed by rotating 45\xB0 along on the Z-axis.
	 *
	 * @param  {array} m - Accepts both short and long form matrices.
	 * @param  {array} x - Accepts both short and long form matrices.
	 * @return {array}
	 */
	function multiply(m, x) {
		var fm = format(m);
		var fx = format(x);
		var product = [];

		for (var i = 0; i < 4; i++) {
			var row = [fm[i], fm[i + 4], fm[i + 8], fm[i + 12]];
			for (var j = 0; j < 4; j++) {
				var k = j * 4;
				var col = [fx[k], fx[k + 1], fx[k + 2], fx[k + 3]];
				var result =
					row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];

				product[i + k] = result;
			}
		}

		return product
	}

	/**
	 * Attempts to return a 4x4 matrix describing the CSS transform
	 * matrix passed in, but will return the identity matrix as a
	 * fallback.
	 *
	 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
	 * \\\`string\\\` from computed styles) to its equivalent array format.
	 *
	 * @param  {string} source - \\\`matrix\\\` or \\\`matrix3d\\\` CSS Transform value.
	 * @return {array}
	 */
	function parse(source) {
		if (typeof source === 'string') {
			var match = source.match(/matrix(3d)?\\\\(([^)]+)\\\\)/);
			if (match) {
				var raw = match[2].split(', ').map(parseFloat);
				return format(raw)
			}
		}
		return identity()
	}

	/**
	 * Returns a 4x4 matrix describing X-axis rotation.
	 *
	 * @param  {number} angle - Measured in degrees.
	 * @return {array}
	 */
	function rotateX(angle) {
		var theta = Math.PI / 180 * angle;
		var matrix = identity();

		matrix[5] = matrix[10] = Math.cos(theta);
		matrix[6] = matrix[9] = Math.sin(theta);
		matrix[9] *= -1;

		return matrix
	}

	/**
	 * Returns a 4x4 matrix describing Y-axis rotation.
	 *
	 * @param  {number} angle - Measured in degrees.
	 * @return {array}
	 */
	function rotateY(angle) {
		var theta = Math.PI / 180 * angle;
		var matrix = identity();

		matrix[0] = matrix[10] = Math.cos(theta);
		matrix[2] = matrix[8] = Math.sin(theta);
		matrix[2] *= -1;

		return matrix
	}

	/**
	 * Returns a 4x4 matrix describing Z-axis rotation.
	 *
	 * @param  {number} angle - Measured in degrees.
	 * @return {array}
	 */
	function rotateZ(angle) {
		var theta = Math.PI / 180 * angle;
		var matrix = identity();

		matrix[0] = matrix[5] = Math.cos(theta);
		matrix[1] = matrix[4] = Math.sin(theta);
		matrix[4] *= -1;

		return matrix
	}

	/**
	 * Returns a 4x4 matrix describing 2D scaling. The first argument
	 * is used for both X and Y-axis scaling, unless an optional
	 * second argument is provided to explicitly define Y-axis scaling.
	 *
	 * @param  {number} scalar    - Decimal multiplier.
	 * @param  {number} [scalarY] - Decimal multiplier.
	 * @return {array}
	 */
	function scale(scalar, scalarY) {
		var matrix = identity();

		matrix[0] = scalar;
		matrix[5] = typeof scalarY === 'number' ? scalarY : scalar;

		return matrix
	}

	/**
	 * Returns a 4x4 matrix describing X-axis translation.
	 *
	 * @param  {number} distance - Measured in pixels.
	 * @return {array}
	 */
	function translateX(distance) {
		var matrix = identity();
		matrix[12] = distance;
		return matrix
	}

	/**
	 * Returns a 4x4 matrix describing Y-axis translation.
	 *
	 * @param  {number} distance - Measured in pixels.
	 * @return {array}
	 */
	function translateY(distance) {
		var matrix = identity();
		matrix[13] = distance;
		return matrix
	}

	var getPrefixedCssProp = (function () {
		var properties = {};
		var style = document.documentElement.style;

		function getPrefixedCssProperty(name, source) {
			if ( source === void 0 ) source = style;

			if (name && typeof name === 'string') {
				if (properties[name]) {
					return properties[name]
				}
				if (typeof source[name] === 'string') {
					return (properties[name] = name)
				}
				if (typeof source[("-webkit-" + name)] === 'string') {
					return (properties[name] = "-webkit-" + name)
				}
				throw new RangeError(("Unable to find \\\\"" + name + "\\\\" style property."))
			}
			throw new TypeError('Expected a string.')
		}

		getPrefixedCssProperty.clearCache = function () { return (properties = {}); };

		return getPrefixedCssProperty
	})();

	function style(element) {
		var computed = window.getComputedStyle(element.node);
		var position = computed.position;
		var config = element.config;

		/**
		 * Generate inline styles
		 */
		var inline = {};
		var inlineStyle = element.node.getAttribute('style') || '';
		var inlineMatch = inlineStyle.match(/[\\\\w-]+\\\\s*:\\\\s*[^;]+\\\\s*/gi) || [];

		inline.computed = inlineMatch ? inlineMatch.map(function (m) { return m.trim(); }).join('; ') + ';' : '';

		inline.generated = inlineMatch.some(function (m) { return m.match(/visibility\\\\s?:\\\\s?visible/i); })
			? inline.computed
			: inlineMatch.concat( ['visibility: visible']).map(function (m) { return m.trim(); }).join('; ') + ';';

		/**
		 * Generate opacity styles
		 */
		var computedOpacity = parseFloat(computed.opacity);
		var configOpacity = !isNaN(parseFloat(config.opacity))
			? parseFloat(config.opacity)
			: parseFloat(computed.opacity);

		var opacity = {
			computed: computedOpacity !== configOpacity ? ("opacity: " + computedOpacity + ";") : '',
			generated: computedOpacity !== configOpacity ? ("opacity: " + configOpacity + ";") : ''
		};

		/**
		 * Generate transformation styles
		 */
		var transformations = [];

		if (parseFloat(config.distance)) {
			var axis = config.origin === 'top' || config.origin === 'bottom' ? 'Y' : 'X';

			/**
			 * Let\u2019s make sure our our pixel distances are negative for top and left.
			 * e.g. { origin: 'top', distance: '25px' } starts at \\\`top: -25px\\\` in CSS.
			 */
			var distance = config.distance;
			if (config.origin === 'top' || config.origin === 'left') {
				distance = /^-/.test(distance) ? distance.substr(1) : ("-" + distance);
			}

			var ref = distance.match(/(^-?\\\\d+\\\\.?\\\\d?)|(em$|px$|%$)/g);
			var value = ref[0];
			var unit = ref[1];

			switch (unit) {
				case 'em':
					distance = parseInt(computed.fontSize) * value;
					break
				case 'px':
					distance = value;
					break
				case '%':
					/**
					 * Here we use \\\`getBoundingClientRect\\\` instead of
					 * the existing data attached to \\\`element.geometry\\\`
					 * because only the former includes any transformations
					 * current applied to the element.
					 *
					 * If that behavior ends up being unintuitive, this
					 * logic could instead utilize \\\`element.geometry.height\\\`
					 * and \\\`element.geoemetry.width\\\` for the distance calculation
					 */
					distance =
						axis === 'Y'
							? (element.node.getBoundingClientRect().height * value) / 100
							: (element.node.getBoundingClientRect().width * value) / 100;
					break
				default:
					throw new RangeError('Unrecognized or missing distance unit.')
			}

			if (axis === 'Y') {
				transformations.push(translateY(distance));
			} else {
				transformations.push(translateX(distance));
			}
		}

		if (config.rotate.x) { transformations.push(rotateX(config.rotate.x)); }
		if (config.rotate.y) { transformations.push(rotateY(config.rotate.y)); }
		if (config.rotate.z) { transformations.push(rotateZ(config.rotate.z)); }
		if (config.scale !== 1) {
			if (config.scale === 0) {
				/**
				 * The CSS Transforms matrix interpolation specification
				 * basically disallows transitions of non-invertible
				 * matrixes, which means browsers won't transition
				 * elements with zero scale.
				 *
				 * That\u2019s inconvenient for the API and developer
				 * experience, so we simply nudge their value
				 * slightly above zero; this allows browsers
				 * to transition our element as expected.
				 *
				 * \\\`0.0002\\\` was the smallest number
				 * that performed across browsers.
				 */
				transformations.push(scale(0.0002));
			} else {
				transformations.push(scale(config.scale));
			}
		}

		var transform = {};
		if (transformations.length) {
			transform.property = getPrefixedCssProp('transform');
			/**
			 * The default computed transform value should be one of:
			 * undefined || 'none' || 'matrix()' || 'matrix3d()'
			 */
			transform.computed = {
				raw: computed[transform.property],
				matrix: parse(computed[transform.property])
			};

			transformations.unshift(transform.computed.matrix);
			var product = transformations.reduce(multiply);

			transform.generated = {
				initial: ((transform.property) + ": matrix3d(" + (product.join(', ')) + ");"),
				final: ((transform.property) + ": matrix3d(" + (transform.computed.matrix.join(', ')) + ");")
			};
		} else {
			transform.generated = {
				initial: '',
				final: ''
			};
		}

		/**
		 * Generate transition styles
		 */
		var transition = {};
		if (opacity.generated || transform.generated.initial) {
			transition.property = getPrefixedCssProp('transition');
			transition.computed = computed[transition.property];
			transition.fragments = [];

			var delay = config.delay;
			var duration = config.duration;
			var easing = config.easing;

			if (opacity.generated) {
				transition.fragments.push({
					delayed: ("opacity " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
					instant: ("opacity " + (duration / 1000) + "s " + easing + " 0s")
				});
			}

			if (transform.generated.initial) {
				transition.fragments.push({
					delayed: ((transform.property) + " " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
					instant: ((transform.property) + " " + (duration / 1000) + "s " + easing + " 0s")
				});
			}

			/**
			 * The default computed transition property should be undefined, or one of:
			 * '' || 'none 0s ease 0s' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
			 */
			var hasCustomTransition =
				transition.computed && !transition.computed.match(/all 0s|none 0s/);

			if (hasCustomTransition) {
				transition.fragments.unshift({
					delayed: transition.computed,
					instant: transition.computed
				});
			}

			var composed = transition.fragments.reduce(
				function (composition, fragment, i) {
					composition.delayed += i === 0 ? fragment.delayed : (", " + (fragment.delayed));
					composition.instant += i === 0 ? fragment.instant : (", " + (fragment.instant));
					return composition
				},
				{
					delayed: '',
					instant: ''
				}
			);

			transition.generated = {
				delayed: ((transition.property) + ": " + (composed.delayed) + ";"),
				instant: ((transition.property) + ": " + (composed.instant) + ";")
			};
		} else {
			transition.generated = {
				delayed: '',
				instant: ''
			};
		}

		return {
			inline: inline,
			opacity: opacity,
			position: position,
			transform: transform,
			transition: transition
		}
	}

	/**
	 * apply a CSS string to an element using the CSSOM (element.style) rather
	 * than setAttribute, which may violate the content security policy.
	 *
	 * @param {Node}   [el]  Element to receive styles.
	 * @param {string} [declaration] Styles to apply.
	 */
	function applyStyle (el, declaration) {
		declaration.split(';').forEach(function (pair) {
			var ref = pair.split(':');
			var property = ref[0];
			var value = ref.slice(1);
			if (property && value) {
				el.style[property.trim()] = value.join(':');
			}
		});
	}

	function clean(target) {
		var this$1 = this;

		var dirty;
		try {
			each(tealight(target), function (node) {
				var id = node.getAttribute('data-sr-id');
				if (id !== null) {
					dirty = true;
					var element = this$1.store.elements[id];
					if (element.callbackTimer) {
						window.clearTimeout(element.callbackTimer.clock);
					}
					applyStyle(element.node, element.styles.inline.generated);
					node.removeAttribute('data-sr-id');
					delete this$1.store.elements[id];
				}
			});
		} catch (e) {
			return logger.call(this, 'Clean failed.', e.message)
		}

		if (dirty) {
			try {
				rinse.call(this);
			} catch (e) {
				return logger.call(this, 'Clean failed.', e.message)
			}
		}
	}

	function destroy() {
		var this$1 = this;

		/**
		 * Remove all generated styles and element ids
		 */
		each(this.store.elements, function (element) {
			applyStyle(element.node, element.styles.inline.generated);
			element.node.removeAttribute('data-sr-id');
		});

		/**
		 * Remove all event listeners.
		 */
		each(this.store.containers, function (container) {
			var target =
				container.node === document.documentElement ? window : container.node;
			target.removeEventListener('scroll', this$1.delegate);
			target.removeEventListener('resize', this$1.delegate);
		});

		/**
		 * Clear all data from the store
		 */
		this.store = {
			containers: {},
			elements: {},
			history: [],
			sequences: {}
		};
	}

	function deepAssign(target) {
		var sources = [], len = arguments.length - 1;
		while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

		if (isObject(target)) {
			each(sources, function (source) {
				each(source, function (data, key) {
					if (isObject(data)) {
						if (!target[key] || !isObject(target[key])) {
							target[key] = {};
						}
						deepAssign(target[key], data);
					} else {
						target[key] = data;
					}
				});
			});
			return target
		} else {
			throw new TypeError('Target must be an object literal.')
		}
	}

	function isMobile(agent) {
		if ( agent === void 0 ) agent = navigator.userAgent;

		return /Android|iPhone|iPad|iPod/i.test(agent)
	}

	var nextUniqueId = (function () {
		var uid = 0;
		return function () { return uid++; }
	})();

	function initialize() {
		var this$1 = this;

		rinse.call(this);

		each(this.store.elements, function (element) {
			var styles = [element.styles.inline.generated];

			if (element.visible) {
				styles.push(element.styles.opacity.computed);
				styles.push(element.styles.transform.generated.final);
				element.revealed = true;
			} else {
				styles.push(element.styles.opacity.generated);
				styles.push(element.styles.transform.generated.initial);
				element.revealed = false;
			}

			applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
		});

		each(this.store.containers, function (container) {
			var target =
				container.node === document.documentElement ? window : container.node;
			target.addEventListener('scroll', this$1.delegate);
			target.addEventListener('resize', this$1.delegate);
		});

		/**
		 * Manually invoke delegate once to capture
		 * element and container dimensions, container
		 * scroll position, and trigger any valid reveals
		 */
		this.delegate();

		/**
		 * Wipe any existing \\\`setTimeout\\\` now
		 * that initialization has completed.
		 */
		this.initTimeout = null;
	}

	function animate(element, force) {
		if ( force === void 0 ) force = {};

		var pristine = force.pristine || this.pristine;
		var delayed =
			element.config.useDelay === 'always' ||
			(element.config.useDelay === 'onload' && pristine) ||
			(element.config.useDelay === 'once' && !element.seen);

		var shouldReveal = element.visible && !element.revealed;
		var shouldReset = !element.visible && element.revealed && element.config.reset;

		if (force.reveal || shouldReveal) {
			return triggerReveal.call(this, element, delayed)
		}

		if (force.reset || shouldReset) {
			return triggerReset.call(this, element)
		}
	}

	function triggerReveal(element, delayed) {
		var styles = [
			element.styles.inline.generated,
			element.styles.opacity.computed,
			element.styles.transform.generated.final
		];
		if (delayed) {
			styles.push(element.styles.transition.generated.delayed);
		} else {
			styles.push(element.styles.transition.generated.instant);
		}
		element.revealed = element.seen = true;
		applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
		registerCallbacks.call(this, element, delayed);
	}

	function triggerReset(element) {
		var styles = [
			element.styles.inline.generated,
			element.styles.opacity.generated,
			element.styles.transform.generated.initial,
			element.styles.transition.generated.instant
		];
		element.revealed = false;
		applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
		registerCallbacks.call(this, element);
	}

	function registerCallbacks(element, isDelayed) {
		var this$1 = this;

		var duration = isDelayed
			? element.config.duration + element.config.delay
			: element.config.duration;

		var beforeCallback = element.revealed
			? element.config.beforeReveal
			: element.config.beforeReset;

		var afterCallback = element.revealed
			? element.config.afterReveal
			: element.config.afterReset;

		var elapsed = 0;
		if (element.callbackTimer) {
			elapsed = Date.now() - element.callbackTimer.start;
			window.clearTimeout(element.callbackTimer.clock);
		}

		beforeCallback(element.node);

		element.callbackTimer = {
			start: Date.now(),
			clock: window.setTimeout(function () {
				afterCallback(element.node);
				element.callbackTimer = null;
				if (element.revealed && !element.config.reset && element.config.cleanup) {
					clean.call(this$1, element.node);
				}
			}, duration - elapsed)
		};
	}

	function sequence(element, pristine) {
		if ( pristine === void 0 ) pristine = this.pristine;

		/**
		 * We first check if the element should reset.
		 */
		if (!element.visible && element.revealed && element.config.reset) {
			return animate.call(this, element, { reset: true })
		}

		var seq = this.store.sequences[element.sequence.id];
		var i = element.sequence.index;

		if (seq) {
			var visible = new SequenceModel(seq, 'visible', this.store);
			var revealed = new SequenceModel(seq, 'revealed', this.store);

			seq.models = { visible: visible, revealed: revealed };

			/**
			 * If the sequence has no revealed members,
			 * then we reveal the first visible element
			 * within that sequence.
			 *
			 * The sequence then cues a recursive call
			 * in both directions.
			 */
			if (!revealed.body.length) {
				var nextId = seq.members[visible.body[0]];
				var nextElement = this.store.elements[nextId];

				if (nextElement) {
					cue.call(this, seq, visible.body[0], -1, pristine);
					cue.call(this, seq, visible.body[0], +1, pristine);
					return animate.call(this, nextElement, { reveal: true, pristine: pristine })
				}
			}

			/**
			 * If our element isn\u2019t resetting, we check the
			 * element sequence index against the head, and
			 * then the foot of the sequence.
			 */
			if (
				!seq.blocked.head &&
				i === [].concat( revealed.head ).pop() &&
				i >= [].concat( visible.body ).shift()
			) {
				cue.call(this, seq, i, -1, pristine);
				return animate.call(this, element, { reveal: true, pristine: pristine })
			}

			if (
				!seq.blocked.foot &&
				i === [].concat( revealed.foot ).shift() &&
				i <= [].concat( visible.body ).pop()
			) {
				cue.call(this, seq, i, +1, pristine);
				return animate.call(this, element, { reveal: true, pristine: pristine })
			}
		}
	}

	function Sequence(interval) {
		var i = Math.abs(interval);
		if (!isNaN(i)) {
			this.id = nextUniqueId();
			this.interval = Math.max(i, 16);
			this.members = [];
			this.models = {};
			this.blocked = {
				head: false,
				foot: false
			};
		} else {
			throw new RangeError('Invalid sequence interval.')
		}
	}

	function SequenceModel(seq, prop, store) {
		var this$1 = this;

		this.head = [];
		this.body = [];
		this.foot = [];

		each(seq.members, function (id, index) {
			var element = store.elements[id];
			if (element && element[prop]) {
				this$1.body.push(index);
			}
		});

		if (this.body.length) {
			each(seq.members, function (id, index) {
				var element = store.elements[id];
				if (element && !element[prop]) {
					if (index < this$1.body[0]) {
						this$1.head.push(index);
					} else {
						this$1.foot.push(index);
					}
				}
			});
		}
	}

	function cue(seq, i, direction, pristine) {
		var this$1 = this;

		var blocked = ['head', null, 'foot'][1 + direction];
		var nextId = seq.members[i + direction];
		var nextElement = this.store.elements[nextId];

		seq.blocked[blocked] = true;

		setTimeout(function () {
			seq.blocked[blocked] = false;
			if (nextElement) {
				sequence.call(this$1, nextElement, pristine);
			}
		}, seq.interval);
	}

	function reveal(target, options, syncing) {
		var this$1 = this;
		if ( options === void 0 ) options = {};
		if ( syncing === void 0 ) syncing = false;

		var containerBuffer = [];
		var sequence$$1;
		var interval = options.interval || defaults.interval;

		try {
			if (interval) {
				sequence$$1 = new Sequence(interval);
			}

			var nodes = tealight(target);
			if (!nodes.length) {
				throw new Error('Invalid reveal target.')
			}

			var elements = nodes.reduce(function (elementBuffer, elementNode) {
				var element = {};
				var existingId = elementNode.getAttribute('data-sr-id');

				if (existingId) {
					deepAssign(element, this$1.store.elements[existingId]);

					/**
					 * In order to prevent previously generated styles
					 * from throwing off the new styles, the style tag
					 * has to be reverted to its pre-reveal state.
					 */
					applyStyle(element.node, element.styles.inline.computed);
				} else {
					element.id = nextUniqueId();
					element.node = elementNode;
					element.seen = false;
					element.revealed = false;
					element.visible = false;
				}

				var config = deepAssign({}, element.config || this$1.defaults, options);

				if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
					if (existingId) {
						clean.call(this$1, element);
					}
					return elementBuffer // skip elements that are disabled
				}

				var containerNode = tealight(config.container)[0];
				if (!containerNode) {
					throw new Error('Invalid container.')
				}
				if (!containerNode.contains(elementNode)) {
					return elementBuffer // skip elements found outside the container
				}

				var containerId;
				{
					containerId = getContainerId(
						containerNode,
						containerBuffer,
						this$1.store.containers
					);
					if (containerId === null) {
						containerId = nextUniqueId();
						containerBuffer.push({ id: containerId, node: containerNode });
					}
				}

				element.config = config;
				element.containerId = containerId;
				element.styles = style(element);

				if (sequence$$1) {
					element.sequence = {
						id: sequence$$1.id,
						index: sequence$$1.members.length
					};
					sequence$$1.members.push(element.id);
				}

				elementBuffer.push(element);
				return elementBuffer
			}, []);

			/**
			 * Modifying the DOM via setAttribute needs to be handled
			 * separately from reading computed styles in the map above
			 * for the browser to batch DOM changes (limiting reflows)
			 */
			each(elements, function (element) {
				this$1.store.elements[element.id] = element;
				element.node.setAttribute('data-sr-id', element.id);
			});
		} catch (e) {
			return logger.call(this, 'Reveal failed.', e.message)
		}

		/**
		 * Now that element set-up is complete...
		 * Let\u2019s commit any container and sequence data we have to the store.
		 */
		each(containerBuffer, function (container) {
			this$1.store.containers[container.id] = {
				id: container.id,
				node: container.node
			};
		});
		if (sequence$$1) {
			this.store.sequences[sequence$$1.id] = sequence$$1;
		}

		/**
		 * If reveal wasn't invoked by sync, we want to
		 * make sure to add this call to the history.
		 */
		if (syncing !== true) {
			this.store.history.push({ target: target, options: options });

			/**
			 * Push initialization to the event queue, giving
			 * multiple reveal calls time to be interpreted.
			 */
			if (this.initTimeout) {
				window.clearTimeout(this.initTimeout);
			}
			this.initTimeout = window.setTimeout(initialize.bind(this), 0);
		}
	}

	function getContainerId(node) {
		var collections = [], len = arguments.length - 1;
		while ( len-- > 0 ) collections[ len ] = arguments[ len + 1 ];

		var id = null;
		each(collections, function (collection) {
			each(collection, function (container) {
				if (id === null && container.node === node) {
					id = container.id;
				}
			});
		});
		return id
	}

	/**
	 * Re-runs the reveal method for each record stored in history,
	 * for capturing new content asynchronously loaded into the DOM.
	 */
	function sync() {
		var this$1 = this;

		each(this.store.history, function (record) {
			reveal.call(this$1, record.target, record.options, true);
		});

		initialize.call(this);
	}

	var polyfill = function (x) { return (x > 0) - (x < 0) || +x; };
	var mathSign = Math.sign || polyfill;

	/*! @license miniraf v1.0.1

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/
	var polyfill$1 = (function () {
		var clock = Date.now();

		return function (callback) {
			var currentTime = Date.now();
			if (currentTime - clock > 16) {
				clock = currentTime;
				callback(currentTime);
			} else {
				setTimeout(function () { return polyfill$1(callback); }, 0);
			}
		}
	})();

	var miniraf = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		polyfill$1;

	function getGeometry(target, isContainer) {
		/**
		 * We want to ignore padding and scrollbars for container elements.
		 * More information here: https://goo.gl/vOZpbz
		 */
		var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
		var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;

		var offsetTop = 0;
		var offsetLeft = 0;
		var node = target.node;

		do {
			if (!isNaN(node.offsetTop)) {
				offsetTop += node.offsetTop;
			}
			if (!isNaN(node.offsetLeft)) {
				offsetLeft += node.offsetLeft;
			}
			node = node.offsetParent;
		} while (node)

		return {
			bounds: {
				top: offsetTop,
				right: offsetLeft + width,
				bottom: offsetTop + height,
				left: offsetLeft
			},
			height: height,
			width: width
		}
	}

	function getScrolled(container) {
		var top, left;
		if (container.node === document.documentElement) {
			top = window.pageYOffset;
			left = window.pageXOffset;
		} else {
			top = container.node.scrollTop;
			left = container.node.scrollLeft;
		}
		return { top: top, left: left }
	}

	function isElementVisible(element) {
		if ( element === void 0 ) element = {};

		var container = this.store.containers[element.containerId];
		if (!container) { return }

		var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
		var viewOffset = element.config.viewOffset;

		var elementBounds = {
			top: element.geometry.bounds.top + element.geometry.height * viewFactor,
			right: element.geometry.bounds.right - element.geometry.width * viewFactor,
			bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
			left: element.geometry.bounds.left + element.geometry.width * viewFactor
		};

		var containerBounds = {
			top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
			right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
			bottom:
				container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
			left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
		};

		return (
			(elementBounds.top < containerBounds.bottom &&
				elementBounds.right > containerBounds.left &&
				elementBounds.bottom > containerBounds.top &&
				elementBounds.left < containerBounds.right) ||
			element.styles.position === 'fixed'
		)
	}

	function delegate(
		event,
		elements
	) {
		var this$1 = this;
		if ( event === void 0 ) event = { type: 'init' };
		if ( elements === void 0 ) elements = this.store.elements;

		miniraf(function () {
			var stale = event.type === 'init' || event.type === 'resize';

			each(this$1.store.containers, function (container) {
				if (stale) {
					container.geometry = getGeometry.call(this$1, container, true);
				}
				var scroll = getScrolled.call(this$1, container);
				if (container.scroll) {
					container.direction = {
						x: mathSign(scroll.left - container.scroll.left),
						y: mathSign(scroll.top - container.scroll.top)
					};
				}
				container.scroll = scroll;
			});

			/**
			 * Due to how the sequencer is implemented, it\u2019s
			 * important that we update the state of all
			 * elements, before any animation logic is
			 * evaluated (in the second loop below).
			 */
			each(elements, function (element) {
				if (stale || element.geometry === undefined) {
					element.geometry = getGeometry.call(this$1, element);
				}
				element.visible = isElementVisible.call(this$1, element);
			});

			each(elements, function (element) {
				if (element.sequence) {
					sequence.call(this$1, element);
				} else {
					animate.call(this$1, element);
				}
			});

			this$1.pristine = false;
		});
	}

	function isTransformSupported() {
		var style = document.documentElement.style;
		return 'transform' in style || 'WebkitTransform' in style
	}

	function isTransitionSupported() {
		var style = document.documentElement.style;
		return 'transition' in style || 'WebkitTransition' in style
	}

	var version = "4.0.9";

	var boundDelegate;
	var boundDestroy;
	var boundReveal;
	var boundClean;
	var boundSync;
	var config;
	var debug;
	var instance;

	function ScrollReveal(options) {
		if ( options === void 0 ) options = {};

		var invokedWithoutNew =
			typeof this === 'undefined' ||
			Object.getPrototypeOf(this) !== ScrollReveal.prototype;

		if (invokedWithoutNew) {
			return new ScrollReveal(options)
		}

		if (!ScrollReveal.isSupported()) {
			logger.call(this, 'Instantiation failed.', 'This browser is not supported.');
			return mount.failure()
		}

		var buffer;
		try {
			buffer = config
				? deepAssign({}, config, options)
				: deepAssign({}, defaults, options);
		} catch (e) {
			logger.call(this, 'Invalid configuration.', e.message);
			return mount.failure()
		}

		try {
			var container = tealight(buffer.container)[0];
			if (!container) {
				throw new Error('Invalid container.')
			}
		} catch (e) {
			logger.call(this, e.message);
			return mount.failure()
		}

		config = buffer;

		if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
			logger.call(
				this,
				'This device is disabled.',
				("desktop: " + (config.desktop)),
				("mobile: " + (config.mobile))
			);
			return mount.failure()
		}

		mount.success();

		this.store = {
			containers: {},
			elements: {},
			history: [],
			sequences: {}
		};

		this.pristine = true;

		boundDelegate = boundDelegate || delegate.bind(this);
		boundDestroy = boundDestroy || destroy.bind(this);
		boundReveal = boundReveal || reveal.bind(this);
		boundClean = boundClean || clean.bind(this);
		boundSync = boundSync || sync.bind(this);

		Object.defineProperty(this, 'delegate', { get: function () { return boundDelegate; } });
		Object.defineProperty(this, 'destroy', { get: function () { return boundDestroy; } });
		Object.defineProperty(this, 'reveal', { get: function () { return boundReveal; } });
		Object.defineProperty(this, 'clean', { get: function () { return boundClean; } });
		Object.defineProperty(this, 'sync', { get: function () { return boundSync; } });

		Object.defineProperty(this, 'defaults', { get: function () { return config; } });
		Object.defineProperty(this, 'version', { get: function () { return version; } });
		Object.defineProperty(this, 'noop', { get: function () { return false; } });

		return instance ? instance : (instance = this)
	}

	ScrollReveal.isSupported = function () { return isTransformSupported() && isTransitionSupported(); };

	Object.defineProperty(ScrollReveal, 'debug', {
		get: function () { return debug || false; },
		set: function (value) { return (debug = typeof value === 'boolean' ? value : debug); }
	});

	ScrollReveal();

	return ScrollReveal;

}));
<\/script> <script>
	const cardArr = [document.querySelectorAll('.card-container-s')[0], document.querySelectorAll('.card-container-s')[1], document.querySelectorAll('.card-container-s')[2]]

    window.sr = ScrollReveal();

	sr.reveal('.header__img', {
		duration: 1000,
        origin: 'bottom',
		distance: '100px',
    })

	if (window.screen.availWidth >= 900){
	    // Funci\xF3n que se ejecutar\xE1 cuando el elemento sea observado
		function handleIntersection(entries, observer) {
      		entries.forEach(entry => {
        		if (entry.isIntersecting) {
      				console.log('Se est\xE1 observando el elemento .main__section--two');
					  sr.reveal(cardArr[2], {
						duration: 600,
        				origin: 'top',
						distance: '100px',
    				})

		  			sr.reveal(cardArr[1], {
						duration: 1000,
        				origin: 'top',
						distance: '100px',
    				})

					sr.reveal(cardArr[0], {
						duration: 1400,
        				origin: 'top',
						distance: '100px',
    				})
    			}
      		});
    	}

    	// Crear un nuevo observador
    	const observer = new IntersectionObserver(handleIntersection, {
      		root: null, // null significa que se utilizar\xE1 el viewport como root
      		rootMargin: '0px', // m\xE1rgenes en px alrededor del root
      		threshold: 0.5 // el porcentaje de visibilidad del target necesario para disparar la funci\xF3n de callback
    	});

    	// Seleccionar el elemento que se va a observar
    	const targetElement = document.querySelector('.article__title');

    	// Iniciar la observaci\xF3n del elemento
    	observer.observe(targetElement);
	} else{
		sr.reveal(cardArr[2], {
				duration: 600,
        		origin: 'top',
				distance: '100px',
    		})

		  	sr.reveal(cardArr[1], {
				duration: 1000,
        		origin: 'top',
				distance: '100px',
    		})

			sr.reveal(cardArr[0], {
				duration: 1400,
        		origin: 'top',
				distance: '100px',
    		})
	}
<\/script> <!--Preloader --> <script>
	const btc = document.querySelector('.btc');
	document.body.style.overflowY = 'hidden';
	window.addEventListener('load', () =>{
		btc.classList.add('no-btc');
		document.body.style.overflowY = 'scroll';
	})
<\/script> <!--Odometer --> <script src="/odometer.js"><\/script> <script>
	const odometerArr = document.querySelectorAll('.odometer');
	setTimeout(() =>{
		odometerArr[0].innerHTML = 250
	}, 1000)
	setTimeout(() =>{
		odometerArr[1].innerHTML = 17000
	}, 1000)
	setTimeout(() =>{
		odometerArr[2].innerHTML = 24
	}, 1000)
<\/script> <!--Resend --> <script>
	const name = document.querySelector("#s5 > article > form > div:nth-child(1) > input");
	const email = document.querySelector("#s5 > article > form > div:nth-child(2) > input");
	const tel = document.querySelector("#s5 > article > form > div:nth-child(3) > input");
	const message = document.querySelector("#s5 > article > form > div:nth-child(4) > textarea");
	const sendBtn = document.querySelector("#s5 > article > form > div.form__bc > button");

	sendBtn.addEventListener('click', async () =>{
		try {
			const res = await fetch("/api/sendEmail.json", {
				method: "POST",
				headers: {
					"Content-Type": "aplication/json"
				},
				body: JSON.stringify({
					from: "noreply@resend.dev",
					to: "isma.tux3er@gmail.com",
					subject: "Mensaje desde MineBest",
					html: \\\`<p>Hola tienes un mensaje de: <strong>\\\${name.value}<strong></p>
						<p>Su email es: <strong>\\\${email.value}<strong></p>
						<p>Su numero de telefono es: <strong>\\\${tel.value}<strong></p>
							<p>Su mensaje es: <strong>\\\${message.value}<strong></p>	\\\`,
					text: "Hola"
				})
			})	
				const data = await res.json();
				console.log(data);
				alert("Su mensaje se ha enviado correctamente");

		} catch (err) {
				console.error(err);
				alert("Ha habido un error");
			}
	})
<\/script></body></html>`])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Bitcoin", $$Bitcoin, {}), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Main", $$Main, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Minebest" })}`;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/pages/index.astro", void 0);

const $$file = "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
