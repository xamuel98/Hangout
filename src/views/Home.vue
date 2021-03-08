<template>
    <div>
        <div class="page--container">
            <Navbar></Navbar>
            <section class="hero-wrapper hero-slide space-lg overflow-hidden">
                <div class="container sd-container--lg">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 mb-5 mb-md-0 order-lg-0 order-sm-2 position-relative">
                            <!-- Intro start -->
                            <h1 class="hero-title">Looking for nice places to <span>hangout</span> in Lagos?</h1>
                            <p class="hero-text">
                                Hangout - suggests the best places(location) for your date nights, outdoor adventure, shopping, concerts &amp; more...
                            </p>
                            <div class="search-bar mt-2 p-3 p-lg-1 pl-lg-4 pr-lg-3">
                                <form action="" role="search" class="form-search">
                                    <div class="row">
                                        <div class="col-lg-5 d-flex align-items-center form-group">
                                            <label for="" class="label-wrapper">
                                                <div class="label-wrapper-inner">
                                                    <div class="label-wrapper-inner-text">Location</div>
                                                    <input class="form-control border-0 shadow-0 label-wrapper-inner-field" type="text" name="search" placeholder="What are you going?">
                                                </div>
                                            </label>
                                        </div>
                                        <div class="col-lg-5 d-flex align-items-center form-group">
                                            <label for="" class="label-wrapper">
                                                <div class="label-wrapper-inner">
                                                    <div class="label-wrapper-inner-text">Activity</div>
                                                    <input class="form-control border-0 shadow-0 label-wrapper-inner-field" type="text" name="search" placeholder="What are you planning to do?">
                                                </div>
                                            </label>
                                        </div>
                                        <div class="col-lg-2">
                                            <button class="d-none d-md-block btn btn-black btn-block rounded-circle h-100" style="width: 75px; height: 75px !important; position: absolute; right: 15px; top: 4px;" type="submit">
                                                <img src="@/assets/arrow.svg" alt="">
                                            </button>
                                            <button class="d-block d-md-none btn btn-black btn-block rounded-xl h-100" type="submit">
                                                <img src="@/assets/arrow.svg" alt="">
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                            <flickity ref="flickity" class="main-carousel overflow-visible" :options="flickityOptions">
                                <div class="carousel-cell col-11">
                                    <div class="card card-sm bg-gradient border-0">
                                        <a href="">
                                            <img class="card-img-top" src="@/assets/images/nike-art-gallery.png" alt="Nike Art Gallery">
                                        </a>
                                        <div class="card-footer d-flex justify-content-between bg-white">
                                            <a href="" class="h6 m-0 text-dark font-weight-600">Nike Art Gallery</a>
                                            <a target="_blank" href="" data-toggle="tooltip" data-placement="top"
                                                title="Open in new tab"><i class="icon-popup"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-cell col-11">
                                    <div class="card card-sm bg-gradient border-0">
                                        <a href="">
                                            <img class="card-img-top" src="@/assets/images/hard-rock-cafe.png" alt="Hard Rock Cafe">
                                        </a>
                                        <div class="card-footer d-flex justify-content-between bg-white">
                                            <a href="" class="h6 m-0 text-dark font-weight-600">Hard Rock Cafe</a>
                                            <a target="_blank" href="" data-toggle="tooltip" data-placement="top"
                                                title="Open in new tab"><i class="icon-popup"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-cell col-11">
                                    <div class="card card-sm bg-gradient border-0">
                                        <a href="">
                                            <img class="card-img-top" src="@/assets/images/oniru-beach.png" alt="Oniru Beach">
                                        </a>
                                        <div class="card-footer d-flex justify-content-between bg-white">
                                            <a href="" class="h6 m-0 text-dark font-weight-600">Oniru Beach</a>
                                            <a target="_blank" href="" data-toggle="tooltip" data-placement="top"
                                                title="Open in new tab"><i class="icon-popup"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-cell col-11">
                                    <div class="card card-sm bg-gradient border-0">
                                        <a href="">
                                            <img class="card-img-top" src="@/assets/images/hard-rock-cafe.png" alt="Hard Rock Cafe">
                                        </a>
                                        <div class="card-footer d-flex justify-content-between bg-white">
                                            <a href="" class="h6 m-0 text-dark font-weight-600">Hard Rock Cafe</a>
                                            <a target="_blank" href="" data-toggle="tooltip" data-placement="top"
                                                title="Open in new tab"><i class="icon-popup"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-cell col-11">
                                    <div class="card card-sm bg-gradient border-0">
                                        <a href="">
                                            <img class="card-img-top" src="@/assets/images/nike-art-gallery.png" alt="Nike Art Gallery">
                                        </a>
                                        <div class="card-footer d-flex justify-content-between bg-white">
                                            <a href="" class="h6 m-0 text-dark font-weight-600">Nike Art Gallery</a>
                                            <a target="_blank" href="" data-toggle="tooltip" data-placement="top"
                                                title="Open in new tab"><i class="icon-popup"></i></a>
                                        </div>
                                    </div>
                                </div>
                            
                            </flickity>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Activities -->
            <section class="page--activities py-8 py-lg-10">
                <div class="container sd-container--lg">
                    <div class="activities-header">
                        <h1 class="activities-title">
                            Activities
                        </h1>
                        <p class="activities-text pt-0 mb-5 mb-lg-7">Browse places by activities you’re interested in</p>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/fun-games.png" alt="Fun &amp; Games" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Fun &amp; Games</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/shopping.png" alt="Shopping" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Shopping</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/nightlife.png" alt="Nightlife" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Nightlife</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/food-drinks.png" alt="Food &amp; Drinks" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Food &amp; Drinks</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/outdoor-activities.png" alt="Outdoor Activities" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Outdoor Activities</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/nature-parks.png" alt="Nature &amp; Parks" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Nature &amp; Parks</h3>
                                </div> 
                            </a>
                        </div>
                        <!-- Second row -->
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/concerts-shows.png" alt="Concerts &amp; Shows" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Concerts &amp; Shows</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/spa-wellness.png" alt="Spa &amp; Wellness" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Spa &amp; Wellness</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/casinos.png" alt="Casinos" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Casinos</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/boat-tours.png" alt="Boat Tours" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Boat Tours</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/sights-landmarks.png" alt="Sights &amp; Landmarks" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Sights &amp; Landmarks</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/transportation.png" alt="Transportation" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Transportation</h3>
                                </div> 
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Explore -->
             <!-- py-8 py-lg-10 -->
            <section class="d-flex page--explore">
                <div class="container sd-container--lg">
                    <div class="row justify-content-center">
                        <div class="col-md-6 pt-10 pt-lg-12 pb-8">
                            <div class="explore-wrapper">
                                <div class="logo-wrapper">
                                    <img src="@/assets/logo-yellow.svg" alt="Hangout Logo Yellow">
                                </div>
                                <div class="explore-header">
                                    <h1 class="explore-title pt-8">
                                        Looking for places in <span>Lagos</span>?
                                        Start here
                                    </h1>
                                    <p class="explore-text pt-5 pb-7 pt-lg-7 pb-lg-9">You deserve to experience the best places in Lagos. Click to explore top notch locations</p>
                                </div>
                                <a href="#" class="explore-link">
                                    Explore 
                                    <span class="ml-3">
                                        <img src="@/assets/arrow-black.svg" alt="">
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 py-8 py-lg-0 px-0">
                            <div class="explore-images d-flex justify-content-between">
                                <div class="img-stripe stripe1">
                                    <img src="@/assets/images/explore/explore-img-1.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-2.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-3.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-4.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-5.png" alt="">
                                </div>
                                <div class="img-stripe stripe2">
                                    <img src="@/assets/images/explore/explore-img-5.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-4.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-3.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-2.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-1.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Flickity from 'vue-flickity';
import {gsap} from 'gsap/all'
import Navbar from '@/components/Navbar'

export default {
    name: "home",
    components: {
        Flickity,
        Navbar,
    },
    data() {
        return {
            flickityOptions: {
                cellAlign: "center", 
                contain: true, 
                prevNextButtons: false, 
                pageDots:true, 
                wrapAround:true, 
                autoPlay:5000, 
                imagesLoaded:true, 
                initialIndex:3, 
                draggable:false,
                // any options from Flickity can be used
            }
        }
    },
    methods: {
        
    },
    mounted() {
        let flickity_viewport = document.querySelector('.flickity-viewport');
        let  flickity_page_dots = document.querySelector('.flickity-page-dots');

            flickity_viewport.style.height = '256.547px';
            flickity_page_dots.style.bottom = '-40px';
    }
}
</script>

<style>
.sd-container--lg {
    /* margin: 0 auto; */
    max-width: 1310px!important;
    /* padding: 0; */
    width: 100%!important;
}

.hero-wrapper {
    background-image: url(../assets/images/Noise.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #FAD202;
    margin: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.hero-slide {
    position: relative;
}

.space-lg {
    padding: 130px 0;
}

.overflow-visible .flickity-viewport {
    overflow: visible;
}

.overflow-visible .carousel-cell[class*='col']:not(.is-selected) > * {
    opacity: .05;
    pointer-events: none;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
}

.bg-gradient .card:not(.bg-dark) {
    color: #495057;
}

.carousel-cell[class*='col']:not(.is-selected) > * {
    opacity: .2;
}

.carousel-cell[class*='col'] > * {
    transition: opacity .35s ease, -webkit-transform .35s ease;
    transition: opacity .35s ease, transform .35s ease;
    transition: opacity .35s ease, transform .35s ease, -webkit-transform .35s ease;
}

.hero-title, .activities-title {
    font-family: 'Neue Machina';
    font-weight: 900;
    font-size: 33px;
    color: #000;
}

.hero-title span {
    -webkit-text-stroke: thin;
    -webkit-text-fill-color: #FAD202;
}

.hero-text, .activities-text {
    font-family: 'Neue Machina';
    font-weight: 500;
    font-size: 17px;
    color: #000;
    padding-top: 30px;
    padding-bottom: 10px;
}

@media only screen and (min-width: 992px) {
    .hero-title, .activities-title {
        width: 40rem;
        font-size: 60px;
    }

    .hero-text, .activities-text {
        font-size: 25px;
    }
}


.card-img-top {
    width: 100%;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
}

.card-footer:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-sm .card-footer {
    padding: 0.75rem 1.5rem;
}

.card-footer {
    padding: 0.75rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid #eaeaf2;
}

.search-bar {
    border-radius: 6.52px;
    background: #fff;
    box-shadow: 0 0 1rem rgb(0 0 0 / 15%);
}

.search-bar .form-group {
    position: relative;
    margin-bottom: 0;
}

.search-bar .form-control {
    height: calc(1.5em + 1rem + 2px);
}

.search-bar .form-group:first-of-type::after{
    display: block;
    width: 1px;
    height: 60%;
    content: '';
    background: #ddd;
    position: absolute;
    top: 20%;
    right: 0;
}

.label-wrapper {
    display: block !important;
    background-clip: padding-box !important;
    border: 1px solid transparent !important;
    border-radius: 32px !important;
    -webkit-flex: 1 0 0% !important;
    -ms-flex: 1 0 0% !important;
    flex: 1 0 0% !important;
    min-width: 0px !important;
    padding: 10px 0px !important;
    margin-bottom: 0;
}

.label-wrapper-inner {
    position: relative !important;
    z-index: 1 !important;
}

.label-wrapper-inner-text {
    font-family: 'Neue Machina';
    font-weight: 500 !important;
    letter-spacing: 0.04em !important;
    font-size: 17px !important;
    line-height: 16px !important;
    padding-bottom: 2px !important;
    color: #000;
}

.label-wrapper-inner-field {
    display: block !important;
    border: 0px !important;
    margin: 0px !important;
    padding: 0px !important;
    width: 100% !important;
    background: none !important;
    line-height: 18px !important;
    text-overflow: ellipsis !important;
}

.label-wrapper-inner-field::placeholder {
    color: #6D6D6D;
    font-family: 'Neue Machina';
    font-size: 17px;
    font-weight: 200px;
}

.label-wrapper-inner-field:focus {
    box-shadow: none;
    outline: none;
}

.btn-black {
    background-color: #000;
    color: #fff;
}



/* --------------------------------------------
    Activities
----------------------------------------- */
.space-showcase-block {
    margin-bottom: 20px;
    display: inline-block;
}

.space-showcase-img {
    position: relative;
}

.space-showcase-img::before {
    content: '';
    top: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    opacity: 1;
    border-radius: 6px;
    /* background: linear-gradient(to bottom, rgba(35, 38, 62, .20) 40%, rgba(35, 38, 62, 0.21) 35%, rgba(35, 38, 62, 0.51) 60%, rgba(35, 38, 62, 0.91) 100%); */
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
    border-radius: 6px;
}

.space-showcase-img img {
    border-radius: 6px;
    width: 100%;
}

.zoom-img {
    position: relative;
    overflow: hidden;
    border-radius: 6px;
}

.zoom-img img {
    max-width: 100%;
    transition: transform .35s ease-out;
    transform: translate3d(0, 0, 0) scale(1);
    image-rendering: -webkit-optimize-contrast;
}

.zoom-img:hover img {
    transform: translate3d(0, 0, 0) scale(1.08);
    border-radius: 6px;
}

.space-showcase-content {
    position: relative;
    z-index: 10;
}

.space-showcase-content-title {
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 16px;
    color: #FFFFFF;
    /* font-size: 18px; */
    /* font-weight: 500; */
    /* color: #eaebf4; */
    /* line-height: 26px; */
    position: absolute;
    margin-bottom: 0px;
    padding: 10px 15px;
    bottom: 10px;
}



/* --------------------------------------------
    Explore
----------------------------------------- */

.page--explore {
    background: #000;
    overflow-y: hidden;
    height: 140vh;
}

.explore-title {
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: 900;
    font-size: 33px;
    color: #FFFFFF;
}

.explore-title span {
    -webkit-text-stroke-color: #FAD202 !important;
    -webkit-text-stroke: thin;
    -webkit-text-fill-color: #000;
}

.explore-text {
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 24px;
    color: #fff;
    /* padding-top: 40px;
    padding-bottom: 10px; */
}

.explore-link {
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;
}

a.explore-link:hover {
    color: #fff;
    text-decoration: none;
}

.explore-link span {
    background: #fff;
    display: inline-block;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

.explore-images {
    padding: 0 30px;
}

.explore-images img {
    width: 100%;
    margin: 15px;
}

.explore-images .img-stripe {
    width: calc(50% - 15px);
}

.explore-images .stripe1 {
    animation: stripe-one 60s ease 0s infinite;
}

@keyframes stripe-one {
    50% {
        transform: translateY(-50%);
    }
 }

.explore-images .stripe2 {
    transform: translateY(-50%);
    animation: stripe-two 60s ease 0s infinite;
}

@keyframes stripe-two {
    50% {
        transform: translateY(0%);
    }
 }

@media only screen and (min-width: 992px) {
    .explore-title {
        width: 33rem;
        font-size: 60px;
    }

    .explore-text {
        width: 33rem;
        font-size: 25px;
    }

    .explore-link {
        font-size: 30px;
    }
}

@media only screen and (max-width: 768px) {
    .logo-wrapper img {
        width: 40%;
    }

    .explore-link span {
        width: 16%;
        height: 50px
    }

    .explore-link span img {
        width: 100%;
    }
}

@media only screen and (max-width: 1024px) {
    .page--explore {
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
        height: auto;
    }

    .explore-images {
        flex-wrap: wrap;
        width: 100%;
        padding: 0;
    }

    .explore-images .img-stripe {
        display: flex;
        width: 100%;
        max-width: 100%;
        /* animation: none !important; */
        overflow-x: auto;
        transform: translateY(0%) !important;
    }

    .explore-images img {
        width: 50%;
    }
}
</style>