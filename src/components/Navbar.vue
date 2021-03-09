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

</style>