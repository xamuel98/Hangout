<template>
    <header class="header-navbar">
        <nav class="navbar navbar-expand-lg navbar-light sd-nav -sd-nav-scroll" id="navbar">
            <a class="navbar-brand sd-logo" href="#">
                <img src="@/assets/images/logo.svg" alt="" class="brand-img">
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


        let initialSrc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzciIGhlaWdodD0iNTkiIHZpZXdCb3g9IjAgMCA3NyA1OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzguNSIgY3k9IjI1LjU1MzEiIHI9IjI1LjU1MzEiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zOC45MjU5IDUxLjAyMVY1OC41MTY2TDUzLjQwNiA0Ni4xNjU5TDM4LjkyNTkgNTEuMDIxWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTkuODIzOSAxNi4xMjk0SDEyLjU0OTZWMjguMTM5NEg5LjgyMzlWMjMuNDg4N0gzLjc5MzM3VjI4LjEzOTRIMS4wNjc3MVYxNi4xMjk0SDMuNzkzMzdWMjEuMTAzOEg5LjgyMzlWMTYuMTI5NFpNMTMuNzM2NSAyNS43ODg1QzEzLjczNjUgMjUuMDI3NiAxMy45OTc3IDI0LjQzMTMgMTQuNTIwMSAyMy45OTk4QzE1LjA0MjUgMjMuNTU2OSAxNS45MjgzIDIzLjI1MDIgMTcuMTc3NiAyMy4wNzk5TDE5Ljg4NjIgMjIuNzA1MUMxOS44ODYyIDIxLjk1NTUgMTkuMzEyNyAyMS41ODA3IDE4LjE2NTcgMjEuNTgwN0MxNy42MjA1IDIxLjU4MDcgMTcuMjAwMyAyMS42ODg2IDE2LjkwNSAyMS45MDQ0QzE2LjYwOTggMjIuMTIwMiAxNi40NjIxIDIyLjQyNjggMTYuNDYyMSAyMi44MjQzSDEzLjkwNjhDMTMuOTA2OCAyMS43NTY4IDE0LjMwNDMgMjAuOTE2NCAxNS4wOTkzIDIwLjMwMzFDMTUuOTA1NiAxOS42Nzg1IDE2LjkyNzggMTkuMzY2MSAxOC4xNjU3IDE5LjM2NjFDMTkuNDQ5IDE5LjM2NjEgMjAuNTEwOSAxOS42OTU1IDIxLjM1MTMgMjAuMzU0MkMyMi4xOTE3IDIxLjAxMjkgMjIuNjExOSAyMi4wMDY2IDIyLjYxMTkgMjMuMzM1NFYyNS43NTQ0SDIzLjg1NTVWMjguMTM5NEgyMS45NjQ1QzIxLjU1NTcgMjguMTM5NCAyMS4yMzc3IDI4LjAzMTUgMjEuMDEwNiAyNy44MTU3QzIwLjc5NDggMjcuNTg4NiAyMC42ODY5IDI3LjI3MDYgMjAuNjg2OSAyNi44NjE3VjI2LjY5MTRMMjEuMTEyOCAyNS42NjkySDIwLjQzMTRDMjAuMjQ5NyAyNi40ODY5IDE5Ljg4NjIgMjcuMTM0MyAxOS4zNDExIDI3LjYxMTNDMTguODA3MyAyOC4wNzY5IDE3Ljk4MzkgMjguMzA5NyAxNi44NzEgMjguMzA5N0MxNi4yNDYzIDI4LjMwOTcgMTUuNzEyNiAyOC4yMjQ2IDE1LjI2OTYgMjguMDU0MkMxNC44MjY3IDI3Ljg4MzggMTQuNTAzIDI3LjY1NjcgMTQuMjk4NiAyNy4zNzI4QzE0LjA5NDIgMjcuMDg4OSAxMy45NDY2IDI2LjgyMiAxMy44NTU3IDI2LjU3MjFDMTMuNzc2MiAyNi4zMTA5IDEzLjczNjUgMjYuMDQ5NyAxMy43MzY1IDI1Ljc4ODVaTTE2LjQ2MjEgMjUuMjc3NEMxNi40NjIxIDI1LjcwOSAxNi43NzQ0IDI1LjkyNDggMTcuMzk5MSAyNS45MjQ4QzE4LjE2IDI1LjkyNDggMTguNzYxOSAyNS43NzcxIDE5LjIwNDggMjUuNDgxOUMxOS42NTkxIDI1LjE3NTIgMTkuODg2MiAyNC43NjA3IDE5Ljg4NjIgMjQuMjM4M0wxNy42ODg3IDI0LjU0NDlDMTcuMjM0NCAyNC42MTMgMTYuOTE2NCAyNC42OTgyIDE2LjczNDcgMjQuODAwNEMxNi41NTMgMjQuODkxMyAxNi40NjIxIDI1LjA1MDMgMTYuNDYyMSAyNS4yNzc0Wk0zMC4wNTI4IDIxLjc1MTFDMjkuMjU3OCAyMS43NTExIDI4LjY1MDIgMjIuMDAxIDI4LjIzIDIyLjUwMDdDMjcuODA5OCAyMi45ODkgMjcuNTk5NyAyMy44MDY3IDI3LjU5OTcgMjQuOTUzOFYyOC4xMzk0SDI0Ljg3NFYxOS41MzY1SDI3LjU5OTdWMjAuNTc1N0wyNy4wODg2IDIyLjEwODhIMjcuNzdDMjcuOTUxNyAyMS4yOTExIDI4LjMyMDggMjAuNjMyNCAyOC44NzczIDIwLjEzMjdDMjkuNDMzOCAxOS42MjE3IDMwLjE0OTMgMTkuMzY2MSAzMS4wMjM4IDE5LjM2NjFDMzIuMTM2OCAxOS4zNjYxIDMyLjk5OTkgMTkuNzIzOSAzMy42MTMyIDIwLjQzOTRDMzQuMjM3OCAyMS4xNTQ5IDM0LjU1MDEgMjIuMTcxMyAzNC41NTAxIDIzLjQ4ODdWMjguMTM5NEgzMS44MjQ1VjIzLjkxNDZDMzEuODI0NSAyMy4xMzEgMzEuNjg4MiAyMi41NzQ1IDMxLjQxNTYgMjIuMjQ1MUMzMS4xNTQ0IDIxLjkxNTggMzAuNzAwMSAyMS43NTExIDMwLjA1MjggMjEuNzUxMVpNNDUuODIyNCAxOS41MzY1SDQ2LjU3MTlWMjEuOTIxNUg0NS45OTI3QzQ1LjYxNzkgMjEuOTIxNSA0NS4zNTEgMjEuOTcyNiA0NS4xOTIgMjIuMDc0OEM0NS4zNTEgMjIuMjkwNiA0NS40MzA1IDIyLjYxOTkgNDUuNDMwNSAyMy4wNjI4QzQ1LjQzMDUgMjMuODM1MSA0NS4wOTU1IDI0LjQ5MzggNDQuNDI1NSAyNS4wMzg5QzQzLjc2NjggMjUuNTg0MSA0Mi44MDcxIDI2LjA3MjQgNDEuNTQ2NSAyNi41MDRDNDIuMjUwNiAyNi40NTg1IDQyLjg2OTYgMjYuNDkyNiA0My40MDMzIDI2LjYwNjJDNDMuOTQ4NSAyNi43MTk4IDQ0LjQwMjcgMjYuOTU4MyA0NC43NjYyIDI3LjMyMTdDNDUuMTQwOSAyNy42NzM3IDQ1LjMyODMgMjguMTM5NCA0NS4zMjgzIDI4LjcxODZDNDUuMzI4MyAyOS4xMzg4IDQ1LjI0ODggMjkuNTAyMiA0NS4wODk4IDI5LjgwODhDNDQuOTMwOCAzMC4xMTU1IDQ0LjY2NCAzMC4zNzEgNDQuMjg5MiAzMC41NzU0QzQzLjkyNTggMzAuNzkxMiA0My41MTEyIDMwLjk2MTYgNDMuMDQ1NiAzMS4wODY1QzQyLjU5MTMgMzEuMjExNCA0MS45NzggMzEuMzA4IDQxLjIwNTggMzEuMzc2MUM0MC40NDQ5IDMxLjQ0NDIgMzkuNjcyNiAzMS40ODk3IDM4Ljg4OSAzMS41MTI0QzM4LjEwNTMgMzEuNTM1MSAzNy4xMjg2IDMxLjU0NjUgMzUuOTU4OSAzMS41NDY1VjI5LjE2MTVDMzguODIwOCAyOS4xNjE1IDQwLjYzNzkgMjkuMTA0NyA0MS40MTAyIDI4Ljk5MTFDNDIuMTkzOCAyOC44Nzc2IDQyLjU4NTYgMjguNTkzNyA0Mi41ODU2IDI4LjEzOTRDNDIuNTg1NiAyNy44NTU1IDQyLjQyNjYgMjcuNjUxIDQyLjEwODYgMjcuNTI2MUM0MS43OTA2IDI3LjM4OTggNDEuMzU5MSAyNy4zMzg3IDQwLjgxNCAyNy4zNzI4QzQwLjI2ODggMjcuMzk1NSAzOS42ODk2IDI3LjQ1MjMgMzkuMDc2MyAyNy41NDMxQzM4LjQ2MzEgMjcuNjIyNiAzNy44MSAyNy43MTkyIDM3LjExNzMgMjcuODMyN0MzNy4wMDM3IDI3Ljg1NTUgMzYuOTE4NSAyNy44NzI1IDM2Ljg2MTcgMjcuODgzOEwzNi41NzIxIDI2LjM1MDdDMzguOTU3MSAyNi4xMDA4IDQwLjcyMzEgMjUuODM5NiA0MS44NzAxIDI1LjU2N1YyNC44ODU2QzQxLjA3NTIgMjUuMTY5NSA0MC4yOTE1IDI1LjM0NTYgMzkuNTE5MyAyNS40MTM3QzM4Ljc1ODMgMjUuNDgxOSAzOC4wNjU2IDI1LjQ0MjEgMzcuNDQwOSAyNS4yOTQ1QzM2LjgyNzcgMjUuMTQ2OCAzNi4zMzM2IDI0Ljg1MTUgMzUuOTU4OSAyNC40MDg2QzM1LjU4NDEgMjMuOTY1NyAzNS4zOTY3IDIzLjQwMzUgMzUuMzk2NyAyMi43MjIxQzM1LjM5NjcgMjEuNjMxOSAzNS44NDUzIDIwLjgwMjggMzYuNzQyNSAyMC4yMzQ5QzM3LjY1MSAxOS42NTU3IDM4LjgyMDggMTkuMzY2MSA0MC4yNTE4IDE5LjM2NjFDNDEuNjk0MSAxOS4zNjYxIDQyLjgyOTggMTkuNjcyOCA0My42NTg5IDIwLjI4NjFDNDQuMDQ1IDE5Ljc4NjMgNDQuNzY2MiAxOS41MzY1IDQ1LjgyMjQgMTkuNTM2NVpNNDAuNDIyMSAyNC4wMzM4QzQxLjk0NCAyNC4wMzM4IDQyLjcwNDkgMjMuNjUzNCA0Mi43MDQ5IDIyLjg5MjVDNDIuNzA0OSAyMi4xMzE2IDQxLjk0NCAyMS43NTExIDQwLjQyMjEgMjEuNzUxMUMzOC44ODkgMjEuNzUxMSAzOC4xMjI0IDIyLjEzMTYgMzguMTIyNCAyMi44OTI1QzM4LjEyMjQgMjMuNjUzNCAzOC44ODkgMjQuMDMzOCA0MC40MjIxIDI0LjAzMzhaTTQ3LjA5MTkgMjMuODI5NEM0Ny4wOTE5IDIyLjM4NzEgNDcuNTQ2MiAyMS4yODU1IDQ4LjQ1NDcgMjAuNTI0NkM0OS4zNjMzIDE5Ljc1MjMgNTAuNTI3NCAxOS4zNjYxIDUxLjk0NyAxOS4zNjYxQzUzLjM2NjYgMTkuMzY2MSA1NC41MjUgMTkuNzUyMyA1NS40MjIyIDIwLjUyNDZDNTYuMzMwOCAyMS4yODU1IDU2Ljc4NSAyMi4zODcxIDU2Ljc4NSAyMy44Mjk0QzU2Ljc4NSAyNS4yNzE3IDU2LjMzMDggMjYuMzc5IDU1LjQyMjIgMjcuMTUxM0M1NC41MjUgMjcuOTIzNiA1My4zNjY2IDI4LjMwOTcgNTEuOTQ3IDI4LjMwOTdDNTAuNTI3NCAyOC4zMDk3IDQ5LjM2MzMgMjcuOTI5MyA0OC40NTQ3IDI3LjE2ODRDNDcuNTQ2MiAyNi4zOTYxIDQ3LjA5MTkgMjUuMjgzMSA0Ny4wOTE5IDIzLjgyOTRaTTQ5LjgxNzYgMjMuODI5NEM0OS44MTc2IDI0LjUzMzUgNTAuMDA0OSAyNS4wNjE2IDUwLjM3OTcgMjUuNDEzN0M1MC43NTQ1IDI1Ljc1NDQgNTEuMjc2OSAyNS45MjQ4IDUxLjk0NyAyNS45MjQ4QzUyLjYwNTcgMjUuOTI0OCA1My4xMjI0IDI1Ljc1NDQgNTMuNDk3MiAyNS40MTM3QzUzLjg3MiAyNS4wNjE2IDU0LjA1OTQgMjQuNTMzNSA1NC4wNTk0IDIzLjgyOTRDNTQuMDU5NCAyMy4xMzY2IDUzLjg3MiAyMi42MTk5IDUzLjQ5NzIgMjIuMjc5MkM1My4xMjI0IDIxLjkyNzEgNTIuNjA1NyAyMS43NTExIDUxLjk0NyAyMS43NTExQzUxLjI3NjkgMjEuNzUxMSA1MC43NTQ1IDIxLjkyNzEgNTAuMzc5NyAyMi4yNzkyQzUwLjAwNDkgMjIuNjE5OSA0OS44MTc2IDIzLjEzNjYgNDkuODE3NiAyMy44Mjk0Wk02Mi4zMDY5IDI1LjkyNDhDNjMuMTAxOSAyNS45MjQ4IDYzLjcwOTUgMjUuNjgwNiA2NC4xMjk3IDI1LjE5MjJDNjQuNTQ5OSAyNC42OTI1IDY0Ljc2IDIzLjg2OTIgNjQuNzYgMjIuNzIyMVYxOS41MzY1SDY3LjQ4NTdWMjguMTM5NEg2NC43NlYyNy4xMDAyTDY1LjI3MTEgMjUuNTY3SDY0LjU4OTZDNjQuNDA3OSAyNi4zODQ3IDY0LjAzODggMjcuMDQ5MSA2My40ODIzIDI3LjU2MDJDNjIuOTI1OSAyOC4wNTk5IDYyLjIxMDQgMjguMzA5NyA2MS4zMzU5IDI4LjMwOTdDNjAuMjIyOSAyOC4zMDk3IDU5LjM1NDEgMjcuOTUyIDU4LjcyOTUgMjcuMjM2NUM1OC4xMTYyIDI2LjUyMSA1Ny44MDk2IDI1LjUwNDYgNTcuODA5NiAyNC4xODcyVjE5LjUzNjVINjAuNTM1MlYyMy43NjEzQzYwLjUzNTIgMjQuNTQ0OSA2MC42NjU4IDI1LjEwMTQgNjAuOTI3IDI1LjQzMDdDNjEuMTk5NiAyNS43NjAxIDYxLjY1OTYgMjUuOTI0OCA2Mi4zMDY5IDI1LjkyNDhaTTczLjI3NzIgMjUuOTI0OEw3Ni40NDU3IDI1Ljc1NDRWMjguMTM5NEw3MS45OTk1IDI4LjMwOTdDNzEuNTMzOSAyOC4zMjExIDcxLjE3NjEgMjguMjAxOCA3MC45MjYzIDI3Ljk1MkM3MC42NzY0IDI3LjcwMjEgNzAuNTUxNSAyNy4zMzg3IDcwLjU1MTUgMjYuODYxN1YyMS45MjE1SDY4LjUwNzNWMTkuNTM2NUg3MC41NTE1VjE3LjkxODFMNzMuMjc3MiAxNy4wNjY0VjE5LjUzNjVINzYuMTA1VjIxLjkyMTVINzMuMjc3MlYyNS45MjQ4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny45NTE3IDM3LjMwNzVDNDUuMDU2OSAzOC41MTc5IDQxLjcwOTggMzkuMjA5IDM4LjE0MzYgMzkuMjA5QzM0Ljg5OTUgMzkuMjA5IDMxLjgzNjYgMzguNjM3MSAyOS4xMzA2IDM3LjYyMjVDMzEuNjQ5OSAzOS42NjI4IDM0Ljg1ODggNDAuODg1IDM4LjM1MzEgNDAuODg1QzQyLjAyMzggNDAuODg1IDQ1LjM3OTUgMzkuNTM2MyA0Ny45NTE3IDM3LjMwNzVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";
        let scrollSrc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzciIGhlaWdodD0iNTkiIHZpZXdCb3g9IjAgMCA3NyA1OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzguNSIgY3k9IjI1LjU1MzEiIHI9IjI1LjU1MzEiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zOC45MjU5IDUxLjAyMVY1OC41MTY2TDUzLjQwNiA0Ni4xNjU5TDM4LjkyNTkgNTEuMDIxWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTkuODIzOSAxNi4xMjk0SDEyLjU0OTZWMjguMTM5NEg5LjgyMzlWMjMuNDg4N0gzLjc5MzM3VjI4LjEzOTRIMS4wNjc3MVYxNi4xMjk0SDMuNzkzMzdWMjEuMTAzOEg5LjgyMzlWMTYuMTI5NFpNMTMuNzM2NSAyNS43ODg1QzEzLjczNjUgMjUuMDI3NiAxMy45OTc3IDI0LjQzMTQgMTQuNTIwMSAyMy45OTk4QzE1LjA0MjUgMjMuNTU2OSAxNS45MjgzIDIzLjI1MDIgMTcuMTc3NiAyMy4wNzk5TDE5Ljg4NjIgMjIuNzA1MUMxOS44ODYyIDIxLjk1NTUgMTkuMzEyNyAyMS41ODA4IDE4LjE2NTcgMjEuNTgwOEMxNy42MjA1IDIxLjU4MDggMTcuMjAwMyAyMS42ODg3IDE2LjkwNSAyMS45MDQ0QzE2LjYwOTggMjIuMTIwMiAxNi40NjIxIDIyLjQyNjkgMTYuNDYyMSAyMi44MjQzSDEzLjkwNjhDMTMuOTA2OCAyMS43NTY4IDE0LjMwNDMgMjAuOTE2NCAxNS4wOTkzIDIwLjMwMzFDMTUuOTA1NiAxOS42Nzg1IDE2LjkyNzggMTkuMzY2MiAxOC4xNjU3IDE5LjM2NjJDMTkuNDQ5IDE5LjM2NjIgMjAuNTEwOSAxOS42OTU1IDIxLjM1MTMgMjAuMzU0MkMyMi4xOTE3IDIxLjAxMjkgMjIuNjExOSAyMi4wMDY2IDIyLjYxMTkgMjMuMzM1NFYyNS43NTQ0SDIzLjg1NTVWMjguMTM5NEgyMS45NjQ1QzIxLjU1NTcgMjguMTM5NCAyMS4yMzc3IDI4LjAzMTUgMjEuMDEwNiAyNy44MTU3QzIwLjc5NDggMjcuNTg4NiAyMC42ODY5IDI3LjI3MDYgMjAuNjg2OSAyNi44NjE3VjI2LjY5MTRMMjEuMTEyOCAyNS42NjkzSDIwLjQzMTRDMjAuMjQ5NyAyNi40ODcgMTkuODg2MiAyNy4xMzQzIDE5LjM0MTEgMjcuNjExM0MxOC44MDczIDI4LjA3NjkgMTcuOTgzOSAyOC4zMDk3IDE2Ljg3MSAyOC4zMDk3QzE2LjI0NjMgMjguMzA5NyAxNS43MTI2IDI4LjIyNDYgMTUuMjY5NiAyOC4wNTQyQzE0LjgyNjcgMjcuODgzOSAxNC41MDMgMjcuNjU2NyAxNC4yOTg2IDI3LjM3MjhDMTQuMDk0MiAyNy4wODg5IDEzLjk0NjYgMjYuODIyIDEzLjg1NTcgMjYuNTcyMUMxMy43NzYyIDI2LjMxMDkgMTMuNzM2NSAyNi4wNDk3IDEzLjczNjUgMjUuNzg4NVpNMTYuNDYyMSAyNS4yNzc0QzE2LjQ2MjEgMjUuNzA5IDE2Ljc3NDQgMjUuOTI0OCAxNy4zOTkxIDI1LjkyNDhDMTguMTYgMjUuOTI0OCAxOC43NjE5IDI1Ljc3NzEgMTkuMjA0OCAyNS40ODE5QzE5LjY1OTEgMjUuMTc1MiAxOS44ODYyIDI0Ljc2MDcgMTkuODg2MiAyNC4yMzgzTDE3LjY4ODcgMjQuNTQ0OUMxNy4yMzQ0IDI0LjYxMzEgMTYuOTE2NCAyNC42OTgyIDE2LjczNDcgMjQuODAwNUMxNi41NTMgMjQuODkxMyAxNi40NjIxIDI1LjA1MDMgMTYuNDYyMSAyNS4yNzc0Wk0zMC4wNTI4IDIxLjc1MTFDMjkuMjU3OCAyMS43NTExIDI4LjY1MDIgMjIuMDAxIDI4LjIzIDIyLjUwMDdDMjcuODA5OCAyMi45ODkgMjcuNTk5NyAyMy44MDY3IDI3LjU5OTcgMjQuOTUzOFYyOC4xMzk0SDI0Ljg3NFYxOS41MzY1SDI3LjU5OTdWMjAuNTc1N0wyNy4wODg2IDIyLjEwODlIMjcuNzdDMjcuOTUxNyAyMS4yOTEyIDI4LjMyMDggMjAuNjMyNSAyOC44NzczIDIwLjEzMjhDMjkuNDMzOCAxOS42MjE3IDMwLjE0OTMgMTkuMzY2MiAzMS4wMjM4IDE5LjM2NjJDMzIuMTM2OCAxOS4zNjYyIDMyLjk5OTkgMTkuNzIzOSAzMy42MTMyIDIwLjQzOTRDMzQuMjM3OCAyMS4xNTQ5IDM0LjU1MDEgMjIuMTcxMyAzNC41NTAxIDIzLjQ4ODdWMjguMTM5NEgzMS44MjQ1VjIzLjkxNDZDMzEuODI0NSAyMy4xMzEgMzEuNjg4MiAyMi41NzQ1IDMxLjQxNTYgMjIuMjQ1MUMzMS4xNTQ0IDIxLjkxNTggMzAuNzAwMSAyMS43NTExIDMwLjA1MjggMjEuNzUxMVpNNDUuODIyNCAxOS41MzY1SDQ2LjU3MTlWMjEuOTIxNUg0NS45OTI3QzQ1LjYxNzkgMjEuOTIxNSA0NS4zNTEgMjEuOTcyNiA0NS4xOTIgMjIuMDc0OEM0NS4zNTEgMjIuMjkwNiA0NS40MzA1IDIyLjYxOTkgNDUuNDMwNSAyMy4wNjI4QzQ1LjQzMDUgMjMuODM1MSA0NS4wOTU1IDI0LjQ5MzggNDQuNDI1NSAyNS4wMzg5QzQzLjc2NjggMjUuNTg0MSA0Mi44MDcxIDI2LjA3MjQgNDEuNTQ2NSAyNi41MDRDNDIuMjUwNiAyNi40NTg2IDQyLjg2OTYgMjYuNDkyNiA0My40MDMzIDI2LjYwNjJDNDMuOTQ4NSAyNi43MTk4IDQ0LjQwMjcgMjYuOTU4MyA0NC43NjYyIDI3LjMyMTdDNDUuMTQwOSAyNy42NzM4IDQ1LjMyODMgMjguMTM5NCA0NS4zMjgzIDI4LjcxODZDNDUuMzI4MyAyOS4xMzg4IDQ1LjI0ODggMjkuNTAyMiA0NS4wODk4IDI5LjgwODlDNDQuOTMwOCAzMC4xMTU1IDQ0LjY2NCAzMC4zNzEgNDQuMjg5MiAzMC41NzU1QzQzLjkyNTggMzAuNzkxMiA0My41MTEyIDMwLjk2MTYgNDMuMDQ1NiAzMS4wODY1QzQyLjU5MTMgMzEuMjExNCA0MS45NzggMzEuMzA4IDQxLjIwNTggMzEuMzc2MUM0MC40NDQ5IDMxLjQ0NDMgMzkuNjcyNiAzMS40ODk3IDM4Ljg4OSAzMS41MTI0QzM4LjEwNTMgMzEuNTM1MSAzNy4xMjg2IDMxLjU0NjUgMzUuOTU4OSAzMS41NDY1VjI5LjE2MTVDMzguODIwOCAyOS4xNjE1IDQwLjYzNzkgMjkuMTA0NyA0MS40MTAyIDI4Ljk5MTJDNDIuMTkzOCAyOC44Nzc2IDQyLjU4NTYgMjguNTkzNyA0Mi41ODU2IDI4LjEzOTRDNDIuNTg1NiAyNy44NTU1IDQyLjQyNjYgMjcuNjUxIDQyLjEwODYgMjcuNTI2MUM0MS43OTA2IDI3LjM4OTggNDEuMzU5MSAyNy4zMzg3IDQwLjgxNCAyNy4zNzI4QzQwLjI2ODggMjcuMzk1NSAzOS42ODk2IDI3LjQ1MjMgMzkuMDc2MyAyNy41NDMyQzM4LjQ2MzEgMjcuNjIyNiAzNy44MSAyNy43MTkyIDM3LjExNzMgMjcuODMyOEMzNy4wMDM3IDI3Ljg1NTUgMzYuOTE4NSAyNy44NzI1IDM2Ljg2MTcgMjcuODgzOUwzNi41NzIxIDI2LjM1MDdDMzguOTU3MSAyNi4xMDA4IDQwLjcyMzEgMjUuODM5NiA0MS44NzAxIDI1LjU2N1YyNC44ODU2QzQxLjA3NTIgMjUuMTY5NiA0MC4yOTE1IDI1LjM0NTYgMzkuNTE5MyAyNS40MTM3QzM4Ljc1ODMgMjUuNDgxOSAzOC4wNjU2IDI1LjQ0MjEgMzcuNDQwOSAyNS4yOTQ1QzM2LjgyNzcgMjUuMTQ2OCAzNi4zMzM2IDI0Ljg1MTYgMzUuOTU4OSAyNC40MDg2QzM1LjU4NDEgMjMuOTY1NyAzNS4zOTY3IDIzLjQwMzUgMzUuMzk2NyAyMi43MjIxQzM1LjM5NjcgMjEuNjMxOSAzNS44NDUzIDIwLjgwMjggMzYuNzQyNSAyMC4yMzVDMzcuNjUxIDE5LjY1NTggMzguODIwOCAxOS4zNjYyIDQwLjI1MTggMTkuMzY2MkM0MS42OTQxIDE5LjM2NjIgNDIuODI5OCAxOS42NzI4IDQzLjY1ODkgMjAuMjg2MUM0NC4wNDUgMTkuNzg2NCA0NC43NjYyIDE5LjUzNjUgNDUuODIyNCAxOS41MzY1Wk00MC40MjIxIDI0LjAzMzlDNDEuOTQ0IDI0LjAzMzkgNDIuNzA0OSAyMy42NTM0IDQyLjcwNDkgMjIuODkyNUM0Mi43MDQ5IDIyLjEzMTYgNDEuOTQ0IDIxLjc1MTEgNDAuNDIyMSAyMS43NTExQzM4Ljg4OSAyMS43NTExIDM4LjEyMjQgMjIuMTMxNiAzOC4xMjI0IDIyLjg5MjVDMzguMTIyNCAyMy42NTM0IDM4Ljg4OSAyNC4wMzM5IDQwLjQyMjEgMjQuMDMzOVpNNDcuMDkxOSAyMy44Mjk0QzQ3LjA5MTkgMjIuMzg3MSA0Ny41NDYyIDIxLjI4NTUgNDguNDU0NyAyMC41MjQ2QzQ5LjM2MzMgMTkuNzUyMyA1MC41Mjc0IDE5LjM2NjIgNTEuOTQ3IDE5LjM2NjJDNTMuMzY2NiAxOS4zNjYyIDU0LjUyNSAxOS43NTIzIDU1LjQyMjIgMjAuNTI0NkM1Ni4zMzA4IDIxLjI4NTUgNTYuNzg1IDIyLjM4NzEgNTYuNzg1IDIzLjgyOTRDNTYuNzg1IDI1LjI3MTggNTYuMzMwOCAyNi4zNzkxIDU1LjQyMjIgMjcuMTUxM0M1NC41MjUgMjcuOTIzNiA1My4zNjY2IDI4LjMwOTcgNTEuOTQ3IDI4LjMwOTdDNTAuNTI3NCAyOC4zMDk3IDQ5LjM2MzMgMjcuOTI5MyA0OC40NTQ3IDI3LjE2ODRDNDcuNTQ2MiAyNi4zOTYxIDQ3LjA5MTkgMjUuMjgzMSA0Ny4wOTE5IDIzLjgyOTRaTTQ5LjgxNzYgMjMuODI5NEM0OS44MTc2IDI0LjUzMzYgNTAuMDA0OSAyNS4wNjE3IDUwLjM3OTcgMjUuNDEzN0M1MC43NTQ1IDI1Ljc1NDQgNTEuMjc2OSAyNS45MjQ4IDUxLjk0NyAyNS45MjQ4QzUyLjYwNTcgMjUuOTI0OCA1My4xMjI0IDI1Ljc1NDQgNTMuNDk3MiAyNS40MTM3QzUzLjg3MiAyNS4wNjE3IDU0LjA1OTQgMjQuNTMzNiA1NC4wNTk0IDIzLjgyOTRDNTQuMDU5NCAyMy4xMzY3IDUzLjg3MiAyMi42MTk5IDUzLjQ5NzIgMjIuMjc5MkM1My4xMjI0IDIxLjkyNzEgNTIuNjA1NyAyMS43NTExIDUxLjk0NyAyMS43NTExQzUxLjI3NjkgMjEuNzUxMSA1MC43NTQ1IDIxLjkyNzEgNTAuMzc5NyAyMi4yNzkyQzUwLjAwNDkgMjIuNjE5OSA0OS44MTc2IDIzLjEzNjcgNDkuODE3NiAyMy44Mjk0Wk02Mi4zMDY5IDI1LjkyNDhDNjMuMTAxOSAyNS45MjQ4IDYzLjcwOTUgMjUuNjgwNiA2NC4xMjk3IDI1LjE5MjNDNjQuNTQ5OSAyNC42OTI2IDY0Ljc2IDIzLjg2OTIgNjQuNzYgMjIuNzIyMVYxOS41MzY1SDY3LjQ4NTdWMjguMTM5NEg2NC43NlYyNy4xMDAyTDY1LjI3MTEgMjUuNTY3SDY0LjU4OTZDNjQuNDA3OSAyNi4zODQ3IDY0LjAzODggMjcuMDQ5MSA2My40ODIzIDI3LjU2MDJDNjIuOTI1OSAyOC4wNTk5IDYyLjIxMDQgMjguMzA5NyA2MS4zMzU5IDI4LjMwOTdDNjAuMjIyOSAyOC4zMDk3IDU5LjM1NDEgMjcuOTUyIDU4LjcyOTUgMjcuMjM2NUM1OC4xMTYyIDI2LjUyMSA1Ny44MDk2IDI1LjUwNDYgNTcuODA5NiAyNC4xODcyVjE5LjUzNjVINjAuNTM1MlYyMy43NjEzQzYwLjUzNTIgMjQuNTQ0OSA2MC42NjU4IDI1LjEwMTQgNjAuOTI3IDI1LjQzMDhDNjEuMTk5NiAyNS43NjAxIDYxLjY1OTYgMjUuOTI0OCA2Mi4zMDY5IDI1LjkyNDhaTTczLjI3NzIgMjUuOTI0OEw3Ni40NDU3IDI1Ljc1NDRWMjguMTM5NEw3MS45OTk1IDI4LjMwOTdDNzEuNTMzOSAyOC4zMjExIDcxLjE3NjEgMjguMjAxOSA3MC45MjYzIDI3Ljk1MkM3MC42NzY0IDI3LjcwMjEgNzAuNTUxNSAyNy4zMzg3IDcwLjU1MTUgMjYuODYxN1YyMS45MjE1SDY4LjUwNzNWMTkuNTM2NUg3MC41NTE1VjE3LjkxODFMNzMuMjc3MiAxNy4wNjY0VjE5LjUzNjVINzYuMTA1VjIxLjkyMTVINzMuMjc3MlYyNS45MjQ4WiIgZmlsbD0iI0ZBRDIwMiIgZmlsbC1vcGFjaXR5PSIwLjk1Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuOTUxNyAzNy4zMDc1QzQ1LjA1NjkgMzguNTE3OSA0MS43MDk4IDM5LjIwOSAzOC4xNDM2IDM5LjIwOUMzNC44OTk1IDM5LjIwOSAzMS44MzY2IDM4LjYzNzEgMjkuMTMwNiAzNy42MjI1QzMxLjY0OTkgMzkuNjYyOCAzNC44NTg4IDQwLjg4NSAzOC4zNTMxIDQwLjg4NUM0Mi4wMjM4IDQwLjg4NSA0NS4zNzk1IDM5LjUzNjMgNDcuOTUxNyAzNy4zMDc1WiIgZmlsbD0iI0ZBRDIwMiIgZmlsbC1vcGFjaXR5PSIwLjk1Ii8+Cjwvc3ZnPgo=";
        let brand_img = document.querySelector('.brand-img')

        window.addEventListener("scroll", function() {
            let navbar = document.querySelector(".sd-nav")
            navbar.classList.toggle("-sd-nav-scroll", window.scrollY > 0)

            if (window.scrollY > 0) {
                brand_img.src = scrollSrc
            } else {
                brand_img.src = initialSrc
            }
            
            

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