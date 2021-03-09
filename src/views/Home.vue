<template>
    <div>
        <div class="page--container">
            <Navbar></Navbar>
            <section class="hero-wrapper hero-slide space-lg overflow-hidden">
                <div class="container sd-container--lg">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 order-sm-2 mb-6 mb-lg-5">
                            <flickity ref="flickity" class="main-carousel overflow-visible" :options="flickityOptions">
                                <div class="carousel-cell col-12 px-0">
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
                                <div class="carousel-cell col-12 px-0">
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
                                <div class="carousel-cell col-12 px-0">
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
                                <div class="carousel-cell col-12 px-0">
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
                                <div class="carousel-cell col-12 px-0">
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
                        <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 mb-5 mb-md-0 order-sm-1 position-relative">
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
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/fun-games.png" alt="Fun &amp; Games" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Fun &amp; Games</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/shopping.png" alt="Shopping" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Shopping</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/nightlife.png" alt="Nightlife" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Nightlife</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/food-drinks.png" alt="Food &amp; Drinks" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Food &amp; Drinks</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/outdoor-activities.png" alt="Outdoor Activities" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Outdoor Activities</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
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
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/concerts-shows.png" alt="Concerts &amp; Shows" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Concerts &amp; Shows</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/spa-wellness.png" alt="Spa &amp; Wellness" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Spa &amp; Wellness</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/casinos.png" alt="Casinos" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Casinos</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/boat-tours.png" alt="Boat Tours" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Boat Tours</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <a href="#" class="space-showcase-block">
                                <div class="space-showcase-img zoom-img">
                                    <img src="@/assets/images/activities/sights-landmarks.png" alt="Sights &amp; Landmarks" class="img-fluid">
                                </div> 
                                <div class="space-showcase-content">
                                    <h3 class="space-showcase-content-title">Sights &amp; Landmarks</h3>
                                </div> 
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
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
                                    <img src="@/assets/images/explore/explore-img-13.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-12.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-11.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-10.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-9.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-8.png" alt="">
                                </div>
                                <div class="img-stripe stripe2">
                                    <img src="@/assets/images/explore/explore-img-5.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-4.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-3.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-2.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-1.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-8.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-9.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-10.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-11.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-12.png" alt="">
                                    <img src="@/assets/images/explore/explore-img-13.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Suggested locations -->
            <section class="suggested-places py-8 py-lg-10">
                <div class="container sd-container--lg">
                    <div class="row">
                        <div class="col-md-11">
                            <div class="suggested-header">
                                <h1 class="suggested-title">
                                    Suggested places for future <span>hangout</span>
                                </h1>
                            </div>
                            <div class="tabs">
                                <div class="hsroll-content pt-4 pt-lg-7 mb-8">
                                    <ul class="nav nav-tabs nav-overflow header-tabs">
                                        <li class="nav-item">
                                            <a v-on:click="activetab=1" class="nav-link">
                                                <span v-bind:class="[ activetab === 1 ? 'active' : '' ]" class="">
                                                    Popular locations
                                                </span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a v-on:click="activetab=2" class="nav-link">
                                                <span v-bind:class="[ activetab === 2 ? 'active' : '' ]">
                                                    Locations for arts & culture
                                                </span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a v-on:click="activetab=3" class="nav-link">
                                                <span v-bind:class="[ activetab === 3 ? 'active' : '' ]">
                                                    Locations for nightlife
                                                </span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a v-on:click="activetab=4" class="nav-link">
                                                <span v-bind:class="[ activetab === 4 ? 'active' : '' ]">
                                                    Locations for food & drinks
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="content">
                                    <div v-if="activetab === 1" class="row align-items-center">
                                        <div class="col-12 col-md-4">
                                            <div class="tab-content-wrapper">
                                                <a href="#" class="tab-content-link">
                                                    <div class="tab-content-item">
                                                        <div class="tab-content-item-inner">
                                                            <picture>
                                                                <source srcset="@/assets/images/locations/location-1.png">
                                                                <img src="@/assets/images/locations/location-1.png" alt="" srcset="@/assets/images/locations/location-1.png">
                                                            </picture>
                                                        </div>
                                                        <div class="tab-content-item-title">
                                                            Bogobiri House
                                                            <address class="tab-content-item-text pt-3 mb-0">
                                                                9, Maitama Street, Ikoyi, Lagos.
                                                            </address>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <div class="tab-content-wrapper">
                                                <a href="#" class="tab-content-link">
                                                    <div class="tab-content-item">
                                                        <div class="tab-content-item-inner">
                                                            <picture>
                                                                <source srcset="@/assets/images/locations/location-2.png">
                                                                <img src="@/assets/images/locations/location-2.png" alt="" srcset="@/assets/images/locations/location-1.png">
                                                            </picture>
                                                        </div>
                                                        <div class="tab-content-item-title">
                                                            Jazz Hole
                                                            <address class="tab-content-item-text pt-3 mb-0">
                                                                168, Awolowo Road, Ikoyi, Lagos.
                                                            </address>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <div class="tab-content-wrapper">
                                                <a href="#" class="tab-content-link">
                                                    <div class="tab-content-item">
                                                        <div class="tab-content-item-inner">
                                                            <picture>
                                                                <source srcset="@/assets/images/locations/location-3.png">
                                                                <img src="@/assets/images/locations/location-3.png" alt="" srcset="@/assets/images/locations/location-1.png">
                                                            </picture>
                                                        </div>
                                                        <div class="tab-content-item-title">
                                                            Motherlan'
                                                            <address class="tab-content-item-text pt-3 mb-0">
                                                                64B, Opebi Road, Ikeja, Lagos.
                                                            </address>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <div class="tab-content-wrapper">
                                                <a href="#" class="tab-content-link">
                                                    <div class="tab-content-item">
                                                        <div class="tab-content-item-inner">
                                                            <picture>
                                                                <source srcset="@/assets/images/locations/location-4.png">
                                                                <img src="@/assets/images/locations/location-4.png" alt="" srcset="@/assets/images/locations/location-1.png">
                                                            </picture>
                                                        </div>
                                                        <div class="tab-content-item-title">
                                                            Ethnic Heritage Centre
                                                            <address class="tab-content-item-text pt-3 mb-0">
                                                                35A, Raymond Njoku Street, Ikoyi, Lagos.
                                                            </address>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <div class="tab-content-wrapper">
                                                <a href="#" class="tab-content-link">
                                                    <div class="tab-content-item">
                                                        <div class="tab-content-item-inner">
                                                            <picture>
                                                                <source srcset="@/assets/images/locations/location-5.png">
                                                                <img src="@/assets/images/locations/location-5.png" alt="" srcset="@/assets/images/locations/location-1.png">
                                                            </picture>
                                                        </div>
                                                        <div class="tab-content-item-title">
                                                            Centre for Black &amp; African Arts &amp; Civilization
                                                            <address class="tab-content-item-text pt-3 mb-0">
                                                                36/38, Broad Street, Lagos Island, Lagos.
                                                            </address>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <div class="tab-content-wrapper">
                                                <a href="#" class="tab-content-link">
                                                    <div class="tab-content-item">
                                                        <div class="tab-content-item-inner">
                                                            <picture>
                                                                <source srcset="@/assets/images/locations/location-6.png">
                                                                <img src="@/assets/images/locations/location-6.png" alt="" srcset="@/assets/images/locations/location-1.png">
                                                            </picture>
                                                        </div>
                                                        <div class="tab-content-item-title">
                                                            Nigerian Tourism Corporation, (NTDC)
                                                            <address class="tab-content-item-text pt-3 mb-0">
                                                                168, Obafemi Awolowo Way, Ikeja, Lagos.
                                                            </address>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <div class="tab-content-wrapper">
                                                <a href="#" class="tab-content-link">
                                                    <div class="tab-content-item">
                                                        <div class="tab-content-item-inner">
                                                            <picture>
                                                                <source srcset="@/assets/images/locations/location-7.png">
                                                                <img src="@/assets/images/locations/location-7.png" alt="" srcset="@/assets/images/locations/location-1.png">
                                                            </picture>
                                                        </div>
                                                        <div class="tab-content-item-title">
                                                            Society for the Performing Arts of Nigeria (SPAN)
                                                            <address class="tab-content-item-text pt-3 mb-0">
                                                                13, Davis Street, off Marina, Lagos.
                                                            </address>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="activetab === 2" class="tabcontent">
                                        Content for tab two
                                    </div>
                                    <div v-if="activetab === 3" class="tabcontent">
                                        Content for tab three
                                    </div>
                                    <div v-if="activetab === 4" class="tabcontent">
                                        Content for tab three
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Flickity from 'vue-flickity';
import {gsap} from 'gsap/all'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
    name: "home",
    components: {
        Flickity,
        Navbar,
        Footer,
    },
    data() {
        return {
            flickityOptions: {
                cellAlign: "center", 
                contain: true, 
                prevNextButtons: true, 
                pageDots:true, 
                wrapAround:true, 
                autoPlay:1500, 
                pauseAutoPlayOnHover: true,
                imagesLoaded:true, 
                initialIndex:3, 
                draggable:true,
                // any options from Flickity can be used
            },
            activetab: 1
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
.card-footer.bg-white a {
    font-family: 'Neue Machina';
    font-weight: 500;
}
</style>