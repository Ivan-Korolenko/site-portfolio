import $ from 'jquery';
window.$ = window.jQuery = $;

import 'animate.css'
import './lib/modified-word-rotator/jquery.wordrotator.css'
import './lib/modified-jquery.onepage-scroll/modified-jquery.onepage-scroll.css'
import 'slick-carousel/slick/slick.css'
import './styles.css'

import enquire from 'enquire.js'
import Vivus from 'vivus'
import anime from 'animejs'
import './lib/modified-jquery.onepage-scroll/modified-jquery.onepage-scroll.js'
import 'particles.js'
import './lib/modified-word-rotator/jquery.wordrotator.min.js'
import 'jquery-tagcanvas'
import 'slick-carousel'
import Parallax from 'parallax-js'

import {caseModalData, wordsForRotator} from './config'


$(document).ready(function () {
    const lang = window.location.pathname.split("/")[1]
    
    let deviceVersion = null
    let ultraWide = false

    enquire
        .register("screen and (min-width:1280px)", { match: () => { deviceVersion = "desktop" }})
        .register("screen and (min-aspect-ratio: 17/9)", { match: () => { 
            deviceVersion = "desktop"
            ultraWide = true
        }})
        .register("screen and (max-width:1280px) and (orientation:portrait)", { match: () => { deviceVersion = "mobile" }})
        .register("screen and (max-width:1280px) and (orientation:landscape)", { match: () => { deviceVersion = "tablet" }})

    this.indexOfActiveSection = 1

    const section1BackSvg = document.getElementById('section-1-back'),
        section1Foreground = document.querySelectorAll('.section-1-main-text, .bottom-nav'),
        section1SunlightAndTrees = section1BackSvg.querySelectorAll('#Светотень_от_солнца, #Тени_деревьев, #Свет_деревьев, #Свет_деревьев_2')

    const caseModal = $('#section-4-case-modal')
    const caseModalContent = $('#section-4-case-modal .case-modal-content')
    const caseModalCloser = $('#section-4-case-modal .close-case-modal')

    function wordRotate() {
        $('.section-1-word-rotate').empty()
        $('.section-1-word-rotate').wordsrotator({
            words: wordsForRotator[lang],
            randomize: false,
            stopOnHover: true,
            changeOnClick: false,
            animationIn: "fadeIn",
            animationOut: "fadeOut",
            speed: 2000
        })
    }

    const preloaderAnimation = anime.timeline({
        autoplay: false
    })

    preloaderAnimation
        .add({
            targets: '.preloader-container',
            duration: 500,
            easing: 'easeInOutQuad',
            complete: () => {
                $('.preloader-container').css('opacity', '0')
            }
        })
        .add({
            targets: '.preloader-container',
            duration: 1500,
            begin: () => {
                onepagescrollEnable()
                window.requestAnimationFrame(() => {
                    section1StartAnimation.play()
                })
            },
            complete: () => {
                $('.preloader-container').css('display', 'none')
            }
        })


    const section1StartAnimation = anime.timeline({
        autoplay: false
    })

    section1StartAnimation
        .add({
            targets: '#Солнце',
            opacity: 1,
            translateY: [
                {
                    value: "100",
                    duration: 0
                },
                {
                    value: "0",
                    duration: 1500
                }
            ],
            easing: "easeInOutQuad"
        })
        .add({
            targets: section1SunlightAndTrees,
            opacity: 0,
            duration: 100,
            easing: "easeInOutQuad",
            complete: () => {
                $(section1SunlightAndTrees).css('opacity', '1')
            }
        })
        .add({
            targets: '#Тень_человека',
            opacity: {
                value: 0,
                duration: 1000
            },
            delay: 500,
            easing: "easeInOutQuad"
        })
        .add({
            targets: '#Краски',
            opacity: {
                value: 1,
                duration: 1000
            },
            easing: "easeInOutQuad",
            offset: '-=500'
        })
        .add({
            targets: '#Полосы_на_дереве',
            duration: 500,
            opacity: 1,
            easing: "easeInOutQuad"
        })
        .add({
            targets: section1Foreground,
            opacity: 0,
            easing: "easeInOutQuad",
            duration: 10,
            complete: (anim, i) => {
                $(section1Foreground).css('opacity', '1')
                for (i = 0; i < section1Foreground.length; ++i) {
                    section1Foreground[i].style.pointerEvents = "auto"
                }
                //Запускаем анимацию вращения слов
                window.requestAnimationFrame(wordRotate)

                // Отключаем скорость анимации у элементов иллюстрации
                $('#Светотень_от_солнца, #Тени_деревьев, #Свет_деревьев, #Свет_деревьев_2')
                    .addClass('no-transition')

                // Parallax
                // if(deviceVersion === "desktop") {

                const scene = document.querySelector('#section-1-parallax-scene')

                const firstPlan = new Parallax(scene, {
                    selector: '#Лозы, #Земля_первый_план, #Земля_первый_план_ближний_слой, #Земля_первый_план_ближний_слой-2, #Ствол_дерева, #Крона_дерева, #Полосы_на_дереве, #Человек, #Краски, #Копирайт',
                    invertY: true,
                    scalarY: 10.0,
                    scalarX: ultraWide ? 5.0 : 7.0,
                })

                const farAwayLand = new Parallax(scene, {
                    selector: '#Солнце, #Горы, #Далекие_земли, #Долина, #Река_в_далеких_землях, #Дальний_план_равнины, #Тени_деревьев, #Перекрытия_в_долине, #Отвлетвления_реки, #Река_в_долине, #Деревья_в_долине, #Светотень_от_солнца',
                    invertY: true,
                    scalarY: 10.0,
                    scalarX: 7.0
                })

                const hills = new Parallax(scene, {
                    selector: '#Холмы',
                    invertY: true,
                    scalarY: 15.0,
                    scalarX: 5.0
                })

                // }
            }
        })

    if (!$('#section-2-my-interests-cloud-canvas').tagcanvas({
            textColour: '#ffffff',
            textFont: "'Raleway-Light', 'Century Gothic', CenturyGothic, AppleGothic, Arial, sans-serif",
            outlineThickness: 0,
            outlineMethod: "none",
            lock: 'xy',
            depth: 1,
            activeCursor: "pointer",
            decel: 0,
            radiusX: 1.15,
            radiusY: 1.15,
            radiusZ: 1.15,
            fadeIn: 600,
            freezeActive: true,
            frontSelect: false,
            maxSpeed: 0.05,
            initial: [0.05, -0.05],
            minSpeed: 0.05,
            padding: 10,
            minBrightness: 0.1,
            shuffleTags: false,
            txtOpt: true,
            wheelZoom: true,
            clickToFront: 300,
            dragControl: true,
            dragThreshold: 50,
            pinchZoom: true,
            noTagsMessage: false,
            zoomStep: 0.1,
        })) {
        // TagCanvas failed to load
        $('#myCanvasContainer').hide()
    }

    $('#section-2-my-interests-cloud a').click(() => {
        return false
    })
    $('#section-2-my-interests-cloud-canvas').tagcanvas("pause")

    const factsSlide = $('.section-2-facts-slider').slick({
        swipe: true,
        touchMove: true,
        draggable: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 600,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true,
        pauseOnFocus: true,
        pauseOnHover: false,
        vertical: true,
        verticalSwiping: true,
        cssEase: 'ease-in-out'
    })

    const section2StartAnimation = anime.timeline({
        autoplay: false
    })

    section2StartAnimation
        .add({
            targets: '.section-2-photo',
            duration: 100,
            easing: "easeInOutQuad",
            complete: () => {
                $('.section-2-photo').css({
                    'max-height': '1000px'
                })
            }
        })
        .add({
            targets: '.section-2-photo',
            opacity: 1,
            duration: 500,
            easing: "easeInOutQuad",
            complete: () => {
                $('.section-2-photo').css({
                    'transform': 'translateY(0)', 
                })
            }
        })
        .add({
            targets: '.section-2-about-me',
            opacity: 1,
            delay: 200,
            duration: 200,
            easing: "easeInOutQuad"
        })
        .add({
            targets: '.section-2-my-interests',
            opacity: 1,
            duration: 500,
            easing: "easeInOutQuad"
        })
        .add({
            targets: '.section-2-facts',
            opacity: 1,
            duration: 500,
            delay: 200,
            easing: "easeInOutQuad",
            complete: () => {
                factsSlide.slick('slickPlay')
            }
        })

    const section3StartAnimation = anime.timeline({
        autoplay: false
    })

    section3StartAnimation
        .add({
            targets: '.section-3-header',
            duration: 100,
            easing: "easeInOutQuad",
            complete: () => {
                $('.section-3-header').css('transform', 'rotate(10deg) translate(0rem)')
                $('.section-3-skills').css('visibility', 'visible')
            }
        })
        .add({
            targets: '.skill-1',
            duration: 300,
            easing: "easeInOutQuad",
            complete: () => {
                $('.skill-1').css('transform', 'translate(0rem)')
            }
        })
        .add({
            targets: '.skill-2',
            duration: 350,
            easing: "easeInOutQuad",
            complete: () => {
                $('.skill-2').css('transform', 'translate(0rem)')
            }
        })
        .add({
            targets: '.skill-3',
            duration: 400,
            easing: "easeInOutQuad",
            complete: () => {
                $('.skill-3').css('transform', 'translate(0rem)')
            }
        })
        .add({
            targets: '.skill-4',
            duration: 450,
            easing: "easeInOutQuad",
            complete: () => {
                $('.skill-4').css('transform', 'translate(0rem)')
            }
        })
        .add({
            targets: '.skill-5',
            duration: 500,
            easing: "easeInOutQuad",
            complete: () => {
                $('.skill-5').css('transform', 'translate(0rem)')
            }
        })
        .add({
            targets: '.skill-6',
            duration: 550,
            easing: "easeInOutQuad",
            complete: () => {
                $('.skill-6').css('transform', 'translate(0rem)')
            }
        })
        .add({
            targets: '.skill-7',
            duration: 600,
            easing: "easeInOutQuad",
            complete: () => {
                $('.skill-7').css('transform', 'translate(0rem)')
            }
        })
        .add({
            targets: '.section-3-used-tech',
            duration: 1000,
            easing: "easeInOutQuad",
            complete: () => {
                $('.section-3-used-tech').css('transform', 'rotate(10deg) translate(0rem)')
                $('.section-3-used-tech').css('visibility', 'visible')
            }
        })

    const section4AnimationTargets = 
        deviceVersion === 'mobile'
            ? document.querySelectorAll('#section-4-back-mobile #portfolio-cases [data-open-case-modal]') 
            : document.querySelectorAll('#section-4-back #portfolio-cases [data-open-case-modal]')

    const section4StartAnimation = anime.timeline({
        autoplay: false
    })

    section4StartAnimation
        .add({
            targets: section4AnimationTargets[0],
            opacity: 1,
            delay: 300,
            duration: 400,
            easing: "easeInOutQuad"
        })
        .add({
            targets: section4AnimationTargets[1],
            opacity: 1,
            duration: 400,
            offset: '-=150',
            easing: "easeInOutQuad"
        })
        .add({
            targets: section4AnimationTargets[2],
            opacity: 1,
            duration: 400,
            offset: '-=150',
            easing: "easeInOutQuad"
        })
        .add({
            targets: section4AnimationTargets[3],
            opacity: 1,
            duration: 400,
            offset: '-=150',
            easing: "easeInOutQuad"
        })
        .add({
            targets: section4AnimationTargets[4],
            opacity: 1,
            duration: 400,
            offset: '-=150',
            easing: "easeInOutQuad"
        })
        .add({
            targets: section4AnimationTargets[5],
            opacity: 1,
            duration: 400,
            offset: '-=250',
            easing: "easeInOutQuad"
        })
        .add({
            targets: section4AnimationTargets[6],
            opacity: 1,
            duration: 400,
            offset: '-=250',
            easing: "easeInOutQuad"
        })
        .add({
            targets: section4AnimationTargets[7],
            opacity: 1,
            duration: 400,
            offset: '-=250',
            easing: "easeInOutQuad"
        })
        .add({
            targets: section4AnimationTargets[8],
            opacity: 1,
            duration: 400,
            offset: '-=300',
            easing: "easeInOutQuad"
        })
        .add({
            targets: section4AnimationTargets[9],
            opacity: 1,
            duration: 400,
            offset: '-=300',
            easing: "easeInOutQuad"
        })
        .add({
            targets: section4AnimationTargets[10],
            opacity: 1,
            duration: 400,
            offset: '-=300',
            easing: "easeInOutQuad"
        })

    const section5StartAnimation = anime.timeline({
        autoplay: false
    })

    section5StartAnimation
        .add({
            targets: '.section-5-header',
            opacity: 1,
            duration: 300,
            easing: "easeInOutQuad"
        })
        .add({
            targets: '.section-5-content',
            opacity: 1,
            duration: 300,
            delay: 300,
            easing: "easeInOutQuad",
            complete: () => {
                window.requestAnimationFrame(() => {
                    particlesJS.load('particles-background-section-5', 
                        deviceVersion === "desktop" 
                            ? '../particles-configs/particlesjs-config-section-5.json'
                            : '../particles-configs/particlesjs-config-section-5-mobile.json')
                })
            }
        })
        .add({
            targets: '#particles-background-section-5',
            opacity: 1,
            duration: 500,
            delay: 500,
            easing: "easeInOutQuad"
        })

    function AnimationControlPlay(play, sectionNumber) {
        if (play) {
            if (sectionNumber.includes(1)) {
                section1StartAnimation.play()

                //WordsRotator in section 1
                if (typeof window.wordsRotatorT !== 'undefined') {
                    window.clearInterval(wordsRotatorT)
                    window.wordsRotatorT = setInterval(window.wordsRotatorRotate, window.wordsRotatorSettings.speed)
                }
            }
            if (sectionNumber.includes(2)) {
                window.requestAnimationFrame(() => {
                    section2StartAnimation.play()
                })

                $('#section-2-my-interests-cloud-canvas').tagcanvas("resume")
            }
            if (sectionNumber.includes(3)) {
                window.requestAnimationFrame(() => {
                    section3StartAnimation.play()
                })
            }
            if (sectionNumber.includes(4)) {
                window.requestAnimationFrame(() => {
                    section4StartAnimation.play()
                })

            }
            if (sectionNumber.includes(5)) {
                window.requestAnimationFrame(() => {
                    section5StartAnimation.play()
                })
            }
        } 
    }

    function onepagescrollEnable() {
        $("#section-scroll").onepage_scroll({
            sectionContainer: "section",
            easing: "ease-in-out",
            animationTime: 300,
            pagination: false,
            updateURL: false,
            beforeMove: function (index) {
                document.indexOfActiveSection = parseInt($('.active').attr('data-index'))

                switch (index) {
                    case 1:
                        AnimationControlPlay(true, [1])
                        break
                    case 2:
                        AnimationControlPlay(true, [2])
                        break
                    case 3:
                        AnimationControlPlay(true, [3])
                        break
                    case 4:
                        AnimationControlPlay(true, [4])
                        break
                    case 5:
                        AnimationControlPlay(true, [5])
                        break
                }
            },
            afterMove: function (index) {},
            loop: false,
            keyboard: true,
            responsiveFallback: false,
            direction: "vertical"
        })
    }

    // --- Website start ---

    new Vivus('preloader', {
        start: 'autostart',
        type: 'sync',
        duration: 100,
        animTimingFunction: Vivus.EASE,
        onReady: function () {
            $('#preloader').css('stroke-opacity', '1')
        },
    }, function () {
        window.requestAnimationFrame(() => {
            // Animation of letters coming closer and disappearing
            $('#preloader path').css({
                'opacity': '0',
                'transform-origin': 'center',
                'transform': 'translateX(100%) scale(20)',
            })
            preloaderAnimation.play()
        })
    })

    // --- Event Handlers ---
    
    let scrollState = ''
    let transformStyle = ''

    // Menu animations
    $('#nav-icon1').click(function (event) {
        event.stopImmediatePropagation()
        $('#nav-icon1').toggleClass('open')
        if ($('#nav-icon1').hasClass('open')) {
            $('.nav').css({
                'display': 'block',
                'pointer-events': 'auto',
                'opacity': '1'
            })
            $('.nav').removeClass('slideOutRight')
            $('.nav').addClass('slideInRight')
            $('#nav-icon1').css({
                'margin-right': '0',
                'right': '50%'
            })
            
            if(deviceVersion === 'desktop') {
                scrollState = $("#section-scroll").css("transform")
                transformStyle = ($("#section-scroll").attr("style") ? $("#section-scroll").attr("style") : '') + ' transform:' + scrollState + ' !important;'

                $("body").addClass("disabled-onepage-scroll disable-scroll")
                $("#section-scroll").attr("style", transformStyle)
            } 
        } 
        else {
            $('.nav').removeClass('slideInRight')
            $('.nav').addClass('slideOutRight')
            $('#nav-icon1').css({
                'margin-right': '2rem',
                'right': '0'
            })

            if(deviceVersion === 'desktop') {
                $("body").removeClass("disabled-onepage-scroll disable-scroll")
            }
        }
    })
    .parents('body').click(function (event) {
        if ($('#nav-icon1').hasClass('open')) {
            $('#nav-icon1').removeClass('open')
            $('.nav').removeClass('slideInRight')
            $('.nav').addClass('slideOutRight')
            $('#nav-icon1').css({
                'margin-right': '2rem',
                'right': '0'
            })

            $("body").removeClass("disabled-onepage-scroll disable-scroll")
        }
    })

    $('.nav').click(function (event) {
        event.stopImmediatePropagation()
    })

    $('.nav-language-changer').click(function (event) { 
        window.location.pathname = lang === "en" ? "ru" : "en"
    })

    // Scroll to section after menu item click
    $('.nav-internal li, .bottom-nav li').click(function (event) {
        let pageToScrollTo = parseInt($(this).attr('data-page-to'))
        $("#section-scroll").moveTo(pageToScrollTo)
        // If clicked item is in side menu, close menu like if user clicked on a cross
        if($(this).parent().hasClass('nav-internal')) $('#nav-icon1').click()
    })
    

    // "Used technologies" block animations
    if (deviceVersion === "desktop") {
        $('.section-3-used-tech').click(function (event) {
            $('.section-3-used-tech').css({
                'transform': 'rotate(0deg) translate(40vw,-86vh)',
                'cursor': 'auto'
            })
            $('.section-3-used-tech-header').css('transform', 'translate(0, 1rem)')
            $('.section-3-used-tech-text').css('transform', 'translate(0, -17vh)')
        })
    }
    else {
        $('.section-3-used-tech').click(function (event) {
            if(deviceVersion === "tablet") {
                $('.section-3-used-tech').css({
                    'transform': 'rotate(0deg) translate(40vw, 0)',
                    'top': '0',
                    'cursor': 'auto'
                })
                $('.section-3-used-tech-header').css('transform', 'translate(0, 1rem)')
            }
            else if (deviceVersion === "mobile") {
                $('.section-3-used-tech').css({
                    'transform': 'rotate(0deg) translate(48vw, 0)',
                    'top': '0',
                    'cursor': 'auto'
                })
                $('.section-3-used-tech-header').css('transform', 'translate(-5rem, 1rem)')
            }
            $('.section-3-used-tech-text').css('transform', 'translate(0, -12vh)')
        })
    }
    
    $('.section-3-used-tech-exit').click(function (event) {
        if (deviceVersion === "desktop") {
            $('.section-3-used-tech').css({
                'transform': 'rotate(10deg) translate(0)',
                'cursor': 'pointer'
            })
        }
        else if(deviceVersion === "tablet") {
            $('.section-3-used-tech').css({
                'transform': 'rotate(10deg) translate(0)',
                'top': '85vh',
                'cursor': 'pointer'
            })
        }
        else if (deviceVersion === "mobile") {
            $('.section-3-used-tech').css({
                'transform': 'rotate(10deg) translate(0)',
                'top': '80vh',
                'cursor': 'pointer'
            })
        }
        $('.section-3-used-tech-header').css('transform', 'translate(3rem, 0)')
        $('.section-3-used-tech-text').css('transform', 'translate(0, 0)')

        // Do not call click on parent when cross is clicked
        event.stopImmediatePropagation()
    })

    $('[data-open-case-modal]').click(e => {
        const name = $(e.currentTarget).data('openCaseModal')

        caseModal.css({ 'right': '0' })
        caseModalContent.children('.case-modal-text-part').html(caseModalData[lang][name]['text'])
        caseModalData[lang][name]['link'] 
            ? caseModalContent.children('.case-modal-link-part').show().html(caseModalData[lang][name]['link'])
            : caseModalContent.children('.case-modal-link-part').hide()
    })

    caseModalCloser.click(e => {
        caseModal.css({ 'right': '120vw' })
    })      
})
