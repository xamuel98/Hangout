<template>
    <footer>
        <div class="container">
            <div class="pt-10 row justify-content-center align-items-center">
                <div class="col-12">
                    <div class="footer-logo text-center">
                        <img src="@/assets/logo-yellow.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="pt-10 row justify-content-around">
                <div class="col-12 pb-5 col-md-4 position-center d-flex justify-content-center align-item-center">
                    <ul class="footer-menu">
                        <h4 class="mb-7">Quick Links</h4>
                        <li class="pb-5">
                            <a href="#" class="sd-outro-quick-links-item ml-0 ml-md-0">
                                <span class="sd-outro-quick-links-item-title">
                                    <span data-text="Home">Home</span>
                                </span>
                            </a>
                        </li>
                        <li class="pb-5">
                            <a href="#" class="sd-outro-quick-links-item ml-0 ml-md-0">
                                <span class="sd-outro-quick-links-item-title">
                                    <span data-text="About us">About us</span>
                                </span>
                            </a>
                        </li>
                        <li class="pb-5">
                            <a href="#" class="sd-outro-quick-links-item ml-0 ml-md-0">
                                <span class="sd-outro-quick-links-item-title">
                                    <span data-text="FAQs">FAQs</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-12 pb-5 col-md-4 position-center d-flex justify-content-center align-item-center">
                    <ul class="footer-menu">
                        <h4 class="mb-7">Legal</h4>
                        <li class="pb-5">
                            <a href="#" class="sd-outro-quick-links-item ml-0 ml-md-0">
                                <span class="sd-outro-quick-links-item-title">
                                    <span data-text="Privacy Policy">Privacy Policy</span>
                                </span>
                            </a>
                        </li>
                        <li class="pb-5">
                            <a href="#" class="sd-outro-quick-links-item ml-0 ml-md-0">
                                <span class="sd-outro-quick-links-item-title">
                                    <span data-text="Terms of Service">Terms of Service</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-12 pb-5 col-md-4 position-center d-flex justify-content-center align-item-center">
                    <ul class="footer-menu">
                        <h4 class="mb-7">Socials</h4>
                        <li class="pb-5">
                            <a href="#" class="sd-outro-quick-links-item ml-0 ml-md-0">
                                <span class="sd-outro-quick-links-item-title">
                                    <span data-text="Facebook">Facebook</span>
                                </span>
                            </a>
                        </li>
                        <li class="pb-5">
                            <a href="#" class="sd-outro-quick-links-item ml-0 ml-md-0">
                                <span class="sd-outro-quick-links-item-title">
                                    <span data-text="Twitter">Twitter</span>
                                </span>
                            </a>
                        </li>
                        <li class="pb-5">
                            <a href="#" class="sd-outro-quick-links-item ml-0 ml-md-0">
                                <span class="sd-outro-quick-links-item-title">
                                    <span data-text="Instagram">Instagram</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="pt-7 row justify-content-center align-items-center">
                <div class="col-12">
                    <div class="text-center">
                        <p class="footer-copyright text-white">
                            Made with 
                            <span style="color: #dc143c;">❤</span>
                             by 
                            <a href="#" target="_blank" style="color: #edc702;" rel="noopener noreferrer">Samuel Sanni</a>
                            <span class="all_rights">Copyrights {{new Date().getFullYear()}} </span>
                            <span class="all_rights">
                                All Rights Reserved
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
footer {
    background-image: url(../assets/logo-variant-2.svg);
    background-color: #000;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto;
    background-attachment: fixed;
}

ul.footer-menu {
    padding: 0;
    margin: 0;
}

ul.footer-menu h4 {
    font-family: Neue Machina;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 33px;
    color: #FFFFFF;
}

ul.footer-menu li {
    list-style: none;
    display: block;
}

ul.footer-menu li a {
    color: #fff;
    font-family: Neue Machina;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
}

.sd-outro-quick-links-item:hover {
    opacity: 1;
}

.sd-outro-quick-links-item-title {
    position: relative;
    display: inline-block;
    overflow: hidden;
}
.sd-outro-quick-links-item:hover .sd-outro-quick-links-item-title span {
    -webkit-transform: translateY(-105%);
    -moz-transform: translateY(-105%);
    -ms-transform: translateY(-105%);
    -o-transform: translateY(-105%);
    transform: translateY(-105%);
}
.sd-outro-quick-links-item-title span {
    display: none;
}
.sd-outro-quick-links-item:hover .sd-outro-quick-links-item-title span:before {
    -webkit-transform: skewY(7deg);
    -moz-transform: skewY(7deg);
    -ms-transform: skewY(7deg);
    -o-transform: skewY(7deg);
    transform: skewY(7deg);
}
.sd-outro-quick-links-item:hover .sd-outro-quick-links-item-title span:after {
    -webkit-transform: skewY(0);
    -moz-transform: skewY(0);
    -ms-transform: skewY(0);
    -o-transform: skewY(0);
    transform: skewY(0);
}

.sd-outro-quick-links-item-title span:after, .sd-outro-quick-links-item-title span:before {
    content: attr(data-text);
    display: block;
    position: absolute;
    color: #fff;
}

.sd-outro-quick-links-item-title span:before {
    top: 0;
    -webkit-transform: skewY(0);
    -moz-transform: skewY(0);
    -ms-transform: skewY(0);
    -o-transform: skewY(0);
    transform: skewY(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transition: -webkit-transform 2s cubic-bezier(.19,1,.22,1);
    transition: -webkit-transform 2s cubic-bezier(.19,1,.22,1);
    -o-transition: -o-transform 2s cubic-bezier(.19,1,.22,1);
    -moz-transition: transform 2s cubic-bezier(.19,1,.22,1),-moz-transform 2s cubic-bezier(.19,1,.22,1);
    transition: transform 2s cubic-bezier(.19,1,.22,1);
    transition: transform 2s cubic-bezier(.19,1,.22,1),-webkit-transform 2s cubic-bezier(.19,1,.22,1),-moz-transform 2s cubic-bezier(.19,1,.22,1),-o-transform 2s cubic-bezier(.19,1,.22,1);
}

.sd-outro-quick-links-item-title span:after {
    top: 105%;
    -webkit-transform: skewY(7deg);
    -moz-transform: skewY(7deg);
    -ms-transform: skewY(7deg);
    -o-transform: skewY(7deg);
    transform: skewY(7deg);
    -webkit-transform-origin: left top;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    transform-origin: left top;
    -webkit-transition: -webkit-transform 2s cubic-bezier(.19,1,.22,1);
    transition: -webkit-transform 2s cubic-bezier(.19,1,.22,1);
    -o-transition: -o-transform 2s cubic-bezier(.19,1,.22,1);
    -moz-transition: transform 2s cubic-bezier(.19,1,.22,1),-moz-transform 2s cubic-bezier(.19,1,.22,1);
    transition: transform 2s cubic-bezier(.19,1,.22,1);
    transition: transform 2s cubic-bezier(.19,1,.22,1),-webkit-transform 2s cubic-bezier(.19,1,.22,1),-moz-transform 2s cubic-bezier(.19,1,.22,1),-o-transform 2s cubic-bezier(.19,1,.22,1);
}

.sd-outro-quick-links-item-title span {
    display: inline-block;
    position: relative;
    z-index: 1;
    color: transparent;
    -webkit-transition: -webkit-transform 1.2s cubic-bezier(.19,1,.22,1);
    transition: -webkit-transform 1.2s cubic-bezier(.19,1,.22,1);
    -o-transition: -o-transform 1.2s cubic-bezier(.19,1,.22,1);
    -moz-transition: transform 1.2s cubic-bezier(.19,1,.22,1),-moz-transform 1.2s cubic-bezier(.19,1,.22,1);
    transition: transform 1.2s cubic-bezier(.19,1,.22,1);
    transition: transform 1.2s cubic-bezier(.19,1,.22,1),-webkit-transform 1.2s cubic-bezier(.19,1,.22,1),-moz-transform 1.2s cubic-bezier(.19,1,.22,1),-o-transform 1.2s cubic-bezier(.19,1,.22,1);
}

@media only screen and (max-width: 768px) {
    .position-center {
        text-align: center;
    }
}

.all_rights {
    margin-left: 2rem;
    position: relative;
}

.all_rights::before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 3px;
    border-radius: 100%;
    background-color: #fff;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: -1.2rem;
}
</style>