<template>
    <header class="header-navbar">
        <nav class="navbar navbar-expand-lg navbar-light sd-nav -sd-nav-scroll" id="navbar">
            <a class="navbar-brand sd-logo" href="#">
                <img src="@/assets/images/logo.svg" alt="">
            </a>

            <div id="burger" class="d-block d-lg-none" @click="toggle()">
                <button type="button" class="burger-button" title="Menu">
                    <span class="burger-bar burger-bar--1"></span>
                    <span class="burger-bar burger-bar--2"></span>
                    <span class="burger-bar burger-bar--3"></span>
                </button>
            </div>

            <div class="sd-sidebar sd-mobile-nav__menu">
                <div class="sd-sidebar-backdrop"></div>
                <div class="sd-sidebar-panel">
                    <ul class="sd-sidebar-panel-nav">
                        <li style="animation-delay: .5s;">
                            <a href="index.html">Home</a>
                        </li>
                        <li style="animation-delay: .7s;">
                            <a href="#">About Us</a>
                        </li>
                        <!-- <li style="animation-delay: .9s;">
                            <a href="#">Contact</a>
                        </li> -->
                    </ul>
                    <ul class="small-menu" style="animation-delay: 1.05s;">
                        <li class="">
                            <a href="#" class="a"> Sign Up For Free
                                <svg width="18" height="18" viewBox="0 0 26 26" preserveAspectRatio="xMidYMid meet">
                                    <path d="M 13 0 C 20.18 0 26 5.82 26 13 C 26 20.18 20.18 26 13 26 C 5.82 26 0 20.18 0 13 C 0 5.82 5.82 0 13 0 Z M 12 16.586 L 9.739 14.325 C 9.349 13.935 8.716 13.935 8.325 14.325 C 7.935 14.716 7.935 15.349 8.325 15.739 L 12.285 19.699 C 12.485 19.9 12.75 19.997 13.012 19.992 C 13.275 19.997 13.539 19.9 13.739 19.699 L 17.699 15.739 C 18.09 15.349 18.09 14.716 17.699 14.325 C 17.309 13.935 16.675 13.935 16.285 14.325 L 14 16.61 L 14 7 C 14 6.448 13.552 6 13 6 C 12.448 6 12 6.448 12 7 Z" fill="#FFF">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li class=""> 
                            <a href="#" class="a">Log In</a>
                        </li>
                        <li class=""> 
                            <a href="#" class="a">Why hangout?</a>
                        </li>
                        <li class="">
                            <a href="#" class="a">FAQs</a>
                        </li>
                        <li class="">
                            <a href="#" class="a" target="_blank">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        
            <div class="collapse navbar-collapse d-none d-lg-block sd-nav__menu" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto sd-navbar-nav sd-nav__list">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FAQs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sign in</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sign up</a>
                    </li>
                </ul>
                <div class="navbar-nav  sd-nav__btns">
                    <div class="sd-navbar-sign">
                        <button class="sd-btn sd-btn_sign" data-section-target="getapp" data-cursor="-default">
                            <span class="sd-btn_sign-bound">
                                <span data-width="#fff" data-text="Download" style="position: relative; top: -6px;">Download app</span>
                            </span>
                        </button>
                    </div> 
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    methods: {
        toggle: function() {
            var hamburger = document.getElementById('burger');
            var sidebar = document.querySelector('.sd-sidebar');
            // var home_section = document.querySelector('.sd-home-section')
            var sidebar_panel_nav = document.querySelectorAll('.sd-sidebar-panel-nav li')

            /**
             * This toggles the hamburger and sidebar panel to active
             */
            hamburger.classList.toggle('active')
            sidebar.classList.toggle('is--active')

            /** The reason for adding the is--active class to the home section & why section is when the panel is open 
                the home and why section should fall behind the panel
            */
            // home_section.classList.toggle('is--active')
            // why_section.classList.toggle('is--active')

            /** sidebar panel include Home, About, Contact => the is--active class is responsible for adding the transition
            * once the sidebar panel is open
            */
            sidebar_panel_nav.forEach(function(list) {
                list.classList.toggle('is--active')
            })

        },
    },
    mounted() {
        function webNavbar(x) {
            let lastScrollTop = 0;
            let navbar = document.getElementById('navbar');

            // 
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            // console.log("first", scrollTop, lastScrollTop);
            if (x.matches) {
                if(scrollTop > lastScrollTop) {
                    navbar.style.top = '-100px';
                } else {
                    navbar.style.top = '13px';
                }
            }

            lastScrollTop = scrollTop;
            // console.log("last", scrollTop, lastScrollTop);
        }


        window.addEventListener("scroll", function() {
            let navbar = document.querySelector(".sd-nav")
            navbar.classList.toggle("-sd-nav-scroll", window.scrollY > 0)

            // let self = this;
            // let x = window.matchMedia("(min-width: 992px)")
            // webNavbar(x) // Call listener function at run time
            // x.addListener(webNavbar) // Attach listener function on state changes
            
        })
    }
}
</script>

<style>
.sd-nav {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem 2rem;
    -ms-flex-flow: row wrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    /* position: relative; */
    -webkit-transition: top .4s ;
    transition: top .4s ;
}

.sd-nav {
    padding: 20px ​40px;
    position: fixed;
    width: 100%;
    z-index: 3;
    line-height: 60px;
    background: transparent;
    /* margin-top: 10px; */
}

.-sd-nav-scroll {
    background-color: #fff;
    padding-bottom: 11px;
    -webkit-box-shadow: -1px 7px 5px -2px rgb(0 0 0 / 17%);
    box-shadow: -1px 7px 5px -2px rgb(0 0 0 / 17%);
    margin-top: -13px !important;
}

.sd-nav__menu {
    align-items: center;
}

.sd-nav__menu .sd-nav__list li .nav-link {
    margin-left: 25px;
    color: #000 !important;
    font-size: 15px;
    text-transform: capitalize;
    font-family: "Neue Machina",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-weight: 400;
    /* opacity: .6; */
    transition: opacity ease 300ms;
    will-change: opacity;
}

@media (min-width: 768px) {
    .sd-navbar-nav {
        /* display: inline-block; */
        margin: 0 -20px;
        padding: 0 38px 0 0;
        vertical-align: middle;
    }
}


@media (min-width: 1200px) {
    .sd-navbar-nav {
        margin: 0 -30px;
        padding: 0 60px 0 0;
    }
}

.sd-navbar-sign {
    display: none;
}

.sd-btn_sign {
    color: #000 !important;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -.21px;
    white-space: nowrap;
    -webkit-transition: color .3s;
    -o-transition: color .3s;
    -moz-transition: color .3s;
    transition: color .3s;
}

.sd-btn_sign {
    position: relative;
    display: inline-block;
    height: auto;
    margin: 0;
    padding: 0;
    color: inherit;
    background: 0 0;
    border: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    outline: 0!important;
    font-family: inherit;
    /* font-size: inherit; */
    /* font-weight: inherit; */
    letter-spacing: inherit;
    line-height: inherit;
    text-align: inherit;
    text-transform: inherit;
    text-indent: inherit;
}

.sd-btn_sign-bound {
    display: block;
    overflow: hidden;
    width: 100%;
}

.sd-btn_sign-bound span {
    position: relative;
    display: inline-block;
}

.sd-home-section {
    position: relative;
    z-index: 0;
    padding-top: calc(7rem + 23vw);
    padding-bottom: 7rem;
}

@media only screen and (min-width: 961px) {
    .sd-home-section {
        padding-top: calc(11rem + 6vw);
        padding-bottom: 7rem;
    }
}

@media only screen and (min-width: 694px) {
    .sd-home-section {
        padding-top: calc(11rem + 11vw);
    }
}

@media only screen and (min-width: 541px) {
    .sd-home-section, .intro, .news__inner {
        padding-top: calc(2rem + 11vw);
    }
}

@media (min-width: 768px) {
    .sd-navbar-nav {
        /* display: inline-block; */
        margin: 0 -20px;
        padding: 0 38px 0 0;
        vertical-align: middle;
    }
}

@media (min-width: 1200px)  {
    .sd-navbar-nav {
        margin: 0 -30px;
        padding: 0 60px 0 0;
    }
}

@media (min-width: 768px) {
    .sd-btn_sign {
        height: 35px;
        -webkit-border-radius: 26px;
        -moz-border-radius: 26px;
        border-radius: 26px;
        font-size: 15px;
        letter-spacing: -.22px;
    }
}

@media (min-width: 768px) {
    .sd-navbar-sign {
        display: inline-block;
        vertical-align: middle;
    }
}

@media (min-width: 1200px) {
    .sd-btn_sign {
        height: 45px;
    }
}

@media (min-width: 768px) {
    .sd-btn_sign:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-border-radius: inherit;
        -moz-border-radius: inherit;
        border-radius: inherit;
        background: #FFED8F;
        -webkit-transition: background .4s,-webkit-transform 1s cubic-bezier(.19,1,.22,1);
        transition: background .4s,-webkit-transform 1s cubic-bezier(.19,1,.22,1);
        -o-transition: background .4s,-o-transform 1s cubic-bezier(.19,1,.22,1);
        -moz-transition: background .4s,transform 1s cubic-bezier(.19,1,.22,1),-moz-transform 1s cubic-bezier(.19,1,.22,1);
        transition: background .4s,transform 1s cubic-bezier(.19,1,.22,1);
        transition: background .4s,transform 1s cubic-bezier(.19,1,.22,1),-webkit-transform 1s cubic-bezier(.19,1,.22,1),-moz-transform 1s cubic-bezier(.19,1,.22,1),-o-transform 1s cubic-bezier(.19,1,.22,1);
    }
}

@media (min-width: 1200px) {
    .sd-btn_sign-bound span {
        padding: 0 25px;
    }
}

@media (min-width: 768px) {
    .sd-btn_sign-bound span {
        padding: 0 21px;
        -webkit-animation: sd-btn_sign-marquee 2s linear infinite;
        -moz-animation: sd-btn_sign-marquee 2s linear infinite;
        -o-animation: sd-btn_sign-marquee 2s linear infinite;
        animation: sd-btn_sign-marquee 2s linear infinite;
    }
}

@media (min-width: 1200px) {
    .sd-btn_sign-bound span:after {
        padding: 0 25px;
    }
}

@media (min-width: 768px) {
    .sd-btn_sign-bound span:after {
        content: attr(data-text);
        position: absolute;
        left: 100%;
        padding: 0 21px;
    }
}

@keyframes sd-btn_sign-marquee {
    0% {
        -webkit-transform: translate3d(0,0,0);
        -moz-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }

    100% {
        -webkit-transform: translate3d(-100%,0,0);
        -moz-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
    }
}

@-webkit-keyframes sd-btn_sign-marquee {
    0% {
        -webkit-transform: translate3d(0,0,0);
        -moz-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }

    100% {
        -webkit-transform: translate3d(-100%,0,0);
        -moz-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
    }
}

.mobile-nav-is-active {
    overflow: hidden;
}

/* Main Style */

/* -------------------
    Burger button
---------------------------- */
.hidden {
    visibility: hidden;
}

button {
    cursor: pointer;
}

/* remove blue outline */
button:focus {
    outline: 0;
}

.burger-button {
    position: relative;
    height: 30px;
    width: 32px;
    display: block;
    z-index: 999;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform .6s cubic-bezier(.165,.84,.44,1);
}

.burger-bar {
    background-color: #000;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
}

.burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
}

.burger-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(.8);
}

.burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
    transform: scaleX(1);
}

.burger-bar--3 {
    transform: translateY(6px);
}

#burger.active {
    position: absolute;
    right: 20px;
}

#burger.active .burger-button {
    transform: rotate(-180deg);
}

#burger.active .burger-bar {
    background-color: #fff;
}

#burger.active .burger-bar--1 {
    transform: rotate(45deg)
}

#burger.active .burger-bar--2 {
    opacity: 0;
}

#burger.active .burger-bar--3 {
    transform: rotate(-45deg)
}

/* ---------------
    Sidebar 
------------------------------*/
.sd-sidebar {
    display: none;
    position: absolute;
    min-height: 100vh;
    width: 100vw;
    top: -4px;
    pointer-events: none;
    opacity: 0;
    background-color: #3B6B05;
    left: 0;
}

.sd-sidebar.is--active {
    display: block;
}

.sd-sidebar.is--active {
    display: none;
}

@media only screen and (max-width: 600px) {
    .sd-sidebar.is--active {
        animation: slideInMenu 0.6s cubic-bezier(1, 0, 0, 1) forwards;
        opacity: 1;
        pointer-events: all;
        display: block;
    }
}

.sd-sidebar-backdrop {
    background-color: rgba(0,0,0,.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
}

.sd-sidebar-panel {
    overflow-y: auto;
    background-color: #000;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    /* z-index: 999; */
    padding: 3rem 20px 2rem 20px;
    width: 100%;
}

.sd-sidebar-panel ul {
    padding: 6vh 35px 0 35px;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

@keyframes slideInMenu {
    0% {
        transform:translate3d(-100%, 0, 0)
    }
    100% {
        transform:translate3d(0%, 0, 0)
    }
}

/* --------------------
    Navbar
------------------------- */
.header-navbar {
    /* position: relative;
    z-index: 3; */
}

.sd-nav {
    padding: 0;
    position: fixed;
    width: 100%;
    z-index: 3;
    line-height: 60px;
    background: transparent;
}

.sd-nav {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem 2rem;
    -ms-flex-flow: row wrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    /* position: relative; */
    -webkit-transition: background .1s linear;
    transition: background .1s linear;
}

.-sd-nav-scroll {
    background-color: #fff;
    padding-bottom: 11px;
    -webkit-box-shadow: -1px 7px 5px -2px rgba(0,0,0,0.17);
    box-shadow: -1px 7px 5px -2px rgba(0,0,0,0.17);
}

@media (max-width: 991px) {
    .sd-nav {
        padding: .5rem 1rem;
    }
}

.sd-nav .sd-logo svg {
    vertical-align: baseline!important;
}

.sd-nav__menu {
    align-items: center;
}

.sd-nav__menu .sd-nav__list li .nav-link {
    margin-left: 25px;
    color: #000 !important;
    font-size: 1.0rem;
    text-transform: capitalize;
    font-family: "Neue Machina",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-weight: 500;
    /* opacity: .6; */
    transition: opacity ease 300ms;
    will-change: opacity;
}

.sd-nav__menu .sd-nav__list li .nav-link:hover {
    opacity: .6!important;
    color: rgb(17, 17, 17)!important;
}

.sd-nav .sd-nav__menu .sd-nav__btns>:first-child {
    /* margin-right: 20px; */
}

.sd-mobile-nav__menu ul.small-menu {
    padding: 10px 35px 0 35px;
    /* opacity: 0; */
}

.sd-mobile-nav__menu ul.small-menu.is--active {
    animation: slideInMenuItem .6s ease forwards;
}

.sd-mobile-nav__menu ul li.is-active {
    animation: slideInMenuItem .6s ease forwards;
}

.sd-mobile-nav__menu ul.small-menu li {
    margin-bottom: 0px;
    margin-top: 12px;
    padding: 10px 0;
}

.sd-mobile-nav__menu ul li {
    list-style: none;
    /* opacity: 0; */
    margin-bottom: 15px;
}

.sd-mobile-nav__menu ul.small-menu li .a {
    font-size: 1.5rem;
    opacity: .8;
    line-height: 0.7;
    font-weight: 500;
}

.sd-mobile-nav__menu ul li a {
    color: white;
    display: block;
    font-weight: bold;
    font-size: 4rem;
    line-height: 1.2;
    letter-spacing: -0.5px;
    transition: opacity .3s ease;
    -webkit-tap-highlight-color: rgba(255,255,255,0.06);
}

ul.sd-sidebar-panel-nav {
    list-style-type: none;
}

ul.sd-sidebar-panel-nav > li > a {
    color: #fff;
    text-decoration: none;
    font-size: 2.19rem;
    display: block;
    padding-bottom: 0.5em;
}

ul.sd-sidebar-panel-nav > li.is--active {
    animation: slideInMenuItem .6s ease forwards;
}

@-webkit-keyframes slideInMenuItem {
    0% {
        opacity: 0;
        transform:translate3d(0, 20px, 0)
    }
    100% {
        opacity: 1;
        transform:translate3d(0, 0, 0)
    }
}

@keyframes slideInMenuItem {
    0% {
        opacity: 0;
        transform: translate3d(0, 20px, 0)
    }
    100% {
        opacity: 1;
        transform:translate3d(0, 0, 0)
    }
}

.sd-modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    cursor: pointer;
    background-color: #243610;
}

.sd-modal-backdrop.fade {
    opacity: 0;
}

.sd-modal-backdrop.show {
    opacity: .9;
}

.test::before{
    content: '';
}

.sd-home-section {
    background: #00070F;
    /* margin-top: 50px; */
    position: relative;
}

.sd-home-section.is--active,
.sd-why--section.is--active {
    z-index: -1;
}

@media (max-width: 1366px) {
    .sd-home-section {
        overflow: hidden;
    }
}

@media screen and (max-width: 768px) {
    .sd-home-section {
        /* margin-top: 80px; */
        padding-bottom: 80px;
    }
}

@media screen and (max-width: 600px) {
    .sd-home-section {
        /* margin-top: 50px; */
        overflow: hidden;
        /* padding-bottom: 0; */
    }
}

.sd-container--lg {
    /* margin: 0 auto; */
    max-width: 1310px!important;
    /* padding: 0; */
    width: 100%!important;
}

h1.h1-resize {
    font-size: 3.76rem;
    font-family: "Mabry Pro Black";
    color: #fff;
}

.h1-resize {
    margin-top: 0.67em;
    margin-bottom: 0;
}

.h1-resize span {
    color: #00BF69;
}

.mt-176 {
    margin: 1.76em 0 0;
}

@media screen and (max-width: 768px) {
    h1.h1-resize {
        font-size: 2.39rem;
    }

    .h1-resize {
        margin-top: 0.56em;
        margin-bottom: 0.56em;
    }
}

@media screen and (max-width: 600px) {
    .u-text-center-s {
        text-align: center;
    }
}
</style>