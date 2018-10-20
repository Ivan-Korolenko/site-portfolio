/* © 2017-2018 Ivan Korolenko */

import './lib/animate.min.css'
import './lib/modified-word-rotator/jquery.wordrotator.css'
import './lib/jquery.onepage-scroll.css'
import './lib/slick/slick.css'
import './front.css'

let enquire = require('./lib/enquire.min.js') 
let Vivus = require('./lib/vivus.min.js') 
let anime = require('./lib/anime.min.js') 
let ifvisible = require('./lib/ifvisible.min.js') 
$.onepage_scroll = require('./lib/modified-jquery.onepage-scroll.js') 
// import './lib/particles.min.js'
import './lib/modified-particlesjs'
$.wordsrotator = require('./lib/modified-word-rotator/jquery.wordrotator.min.js') 
$.tagcanvas = require('./lib/jquery.tagcanvas.min.js') 
import './lib/slick/slick.min.js'
import Parallax from 'parallax-js'


$(document).ready(function () {

    // Задаем различия в языковых версиях
    let wordsForRotator = ['приложения', 'сайты', 'идеи', 'дизайн', 'иллюстрации', 'алгоритмы', 'анимации']
    if (lang && lang === "eng") {
        wordsForRotator = ['websites', 'ideas', 'concepts', 'design', 'illustrations', 'algorithms', 'animations']
    }

    // Задаем различия в версиях для разных форматов устройств
    let section2WhyMarginBottom = null
    let deviceVersion = null

    enquire
        .register("screen and (min-width:1280px)", { match: () => { deviceVersion = "desktop" }})
        .register("screen and (max-width:1280px) and (orientation:portrait)", { match: () => { deviceVersion = "mobile" }})
        .register("screen and (max-width:1280px) and (orientation:landscape)", { match: () => { deviceVersion = "tablet" }})


        //--------------------------------------------------------------------------------------
        //------------- Объявление переменных и функций ----------------------------------------
        //--------------------------------------------------------------------------------------

        //Переменная с номером активной сейчас секции
        this.numberOfActiveSection = 1

        //Для корректного обращения к частицам при остановке/перезапуске
        this.isFirstParticlesLoaded = false
        this.isFifthParticlesLoaded = false
        this.fifthParticlesLoadedBeforeFirst = false

        //Элементы для анимации первой секции
        const section1BackSvg = document.getElementById('section-1-back'),
            section1Foreground = document.querySelectorAll('.section-1-main-text, .bottom-nav'),
            section1SunlightAndTrees = section1BackSvg.querySelectorAll('#Светотень_от_солнца, #Тени_деревьев, #Свет_деревьев, #Свет_деревьев_2')

        const caseModal = $('#section-4-case-modal')
        const caseModalContent = $('#section-4-case-modal .case-modal-content')
        const caseModalCloser = $('#section-4-case-modal .close-case-modal')

        //Вращение слов в первой секции
        function wordRotate() {
            $('.section-1-word-rotate').empty()
            $('.section-1-word-rotate').wordsrotator({
                words: wordsForRotator,
                randomize: false,
                stopOnHover: true,
                changeOnClick: false,
                animationIn: "fadeIn",
                animationOut: "fadeOut",
                speed: 2000
            })
        }

        // Анимации прелоадера
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
                    //Включаем скроллинг
                    onepagescrollEnable()
                    //Запускаем анимации первого экрана
                    window.requestAnimationFrame(() => {
                        section1StartAnimation.play()
                    })
                },
                complete: () => {
                    $('.preloader-container').css('display', 'none')

                }
            })


        // --- Анимации первого экрана ---

        const section1StartAnimation = anime.timeline({
            autoplay: false
        })

        if(deviceVersion === "desktop") {
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
                    //Частицы на фоне первой секции
                    window.requestAnimationFrame(() => {
                        particlesJS.load('particles-background-section-1',
                        //  './particles-configs/particlesjs-config-section-1_specks-of-dust.json'
                        './particles-configs/particlesjs-config-section-1_rain.json'
                        )
                    })
                    document.isFirstParticlesLoaded = true

                    // Отключаем скорость анимации у элементов иллюстрации
                    $('#Светотень_от_солнца, #Тени_деревьев, #Свет_деревьев, #Свет_деревьев_2')
                        .addClass('no-transition')

                    // Запускаем параллакс
                    let scene = document.querySelector('#section-1-parallax-scene')

                    let firstPlan = new Parallax(scene, {
                        selector: '#Лозы, #Земля_первый_план, #Земля_первый_план_ближний_слой, #Земля_первый_план_ближний_слой-2, #Ствол_дерева, #Крона_дерева, #Полосы_на_дереве, #Человек, #Краски, #Копирайт',
                        invertY: true,
                        scalarY: 10.0,
                        scalarX: 7.0
                    })

                    let farAwayLand = new Parallax(scene, {
                        selector: '#Солнце, #Горы, #Далекие_земли, #Долина, #Река_в_далеких_землях, #Дальний_план_равнины, #Тени_деревьев, #Перекрытия_в_долине, #Отвлетвления_реки, #Река_в_долине, #Деревья_в_долине, #Светотень_от_солнца',
                        invertY: true,
                        scalarY: 10.0,
                        scalarX: 7.0
                    })

                    let hills = new Parallax(scene, {
                        selector: '#Холмы',
                        invertY: true,
                        scalarY: 15.0,
                        scalarX: 5.0
                    })


                }
            })
            .add({
                targets: '#particles-background-section-1',
                opacity: 1,
                easing: "easeInOutQuad",
                duration: 1000,
                delay: 100
            })
        }
        else {
            section1StartAnimation
                .add({
                    targets: '#Солнце',
                    duration: 500,
                    complete: () => {
                        //Запускаем анимацию вращения слов
                        window.requestAnimationFrame(wordRotate)
                    }
                })
        }

        // --- END Анимации первого экрана ---

        // Объявляем облако интересов и ставим на паузу
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

        //Отключаем клики по ссылкам в облаке интересов
        $('#section-2-my-interests-cloud a').click(() => {
            return false
        })
        $('#section-2-my-interests-cloud-canvas').tagcanvas("pause")

        //Слайдер
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

        // Анимации второго экрана
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

        // Анимации третьего экрана
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

        // --- Анимации четвертого экрана ---

        let section4AnimationTargets = deviceVersion === 'desktop' 
            ? document.querySelectorAll('#section-4-back #portfolio-cases a')
            : document.querySelectorAll('#section-4-back-mobile #portfolio-cases a') 

        const section4StartAnimation = anime.timeline({
            autoplay: false
        })

        section4StartAnimation
            .add({
                targets: section4AnimationTargets[0],
                opacity: 1,
                delay: 500,
                duration: 200,
                easing: "easeInOutQuad"
            })
            .add({
                targets: section4AnimationTargets[1],
                opacity: 1,
                duration: 200,
                easing: "easeInOutQuad"
            })
            .add({
                targets: section4AnimationTargets[2],
                opacity: 1,
                duration: 200,
                offset: '-=20',
                easing: "easeInOutQuad"
            })
            .add({
                targets: section4AnimationTargets[3],
                opacity: 1,
                duration: 200,
                offset: '-=40',
                easing: "easeInOutQuad"
            })
            .add({
                targets: section4AnimationTargets[4],
                opacity: 1,
                duration: 200,
                offset: '-=60',
                easing: "easeInOutQuad"
            })
            .add({
                targets: section4AnimationTargets[5],
                opacity: 1,
                duration: 200,
                offset: '-=80',
                easing: "easeInOutQuad"
            })
            .add({
                targets: section4AnimationTargets[6],
                opacity: 1,
                duration: 200,
                offset: '-=100',
                easing: "easeInOutQuad"
            })
            .add({
                targets: section4AnimationTargets[7],
                opacity: 1,
                duration: 200,
                offset: '-=120',
                easing: "easeInOutQuad"
            })
            .add({
                targets: section4AnimationTargets[8],
                opacity: 1,
                duration: 200,
                offset: '-=140',
                easing: "easeInOutQuad"
            })
            .add({
                targets: section4AnimationTargets[9],
                opacity: 1,
                duration: 200,
                offset: '-=160',
                easing: "easeInOutQuad"
            })
            .add({
                targets: section4AnimationTargets[10],
                opacity: 1,
                duration: 200,
                offset: '-=180',
                easing: "easeInOutQuad"
            })

        // --- END Анимации четвертого экрана ---


        // Анимации пятого экрана
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
                    //Частицы на фоне пятой секции
                    window.requestAnimationFrame(() => {
                        deviceVersion === "desktop"
                            ? particlesJS.load('particles-background-section-5', './particles-configs/particlesjs-config-section-5.json')
                            : particlesJS.load('particles-background-section-5', './particles-configs/particlesjs-config-section-5-mobile.json')
                    })
                    document.isFifthParticlesLoaded = true
                    //Если частицы в пятой секции загрузились до частиц в первой
                    if (document.isFirstParticlesLoaded !== true) {
                        document.fifthParticlesLoadedBeforeFirst = true
                    }
                }
            })
            .add({
                targets: '#particles-background-section-5',
                opacity: 1,
                duration: 500,
                delay: 500,
                easing: "easeInOutQuad"
            })

        // Управление проигрыванием анимаций
        function AnimationControlPlay(play, sectionNumber) {
            if (play) {
                if (sectionNumber.includes(1)) {
                    section1StartAnimation.play()

                    //WordsRotator в первой секции
                    if (typeof window.wordsRotatorT !== 'undefined') {
                        window.clearInterval(wordsRotatorT)
                        window.wordsRotatorT = setInterval(window.wordsRotatorRotate, window.wordsRotatorSettings.speed)
                    }
                }
                if (sectionNumber.includes(2)) {
                    //Запускаем анимации второго экрана
                    window.requestAnimationFrame(() => {
                        section2StartAnimation.play()
                    })

                    //Запускаем облако интересов
                    $('#section-2-my-interests-cloud-canvas').tagcanvas("resume")
                }
                if (sectionNumber.includes(3)) {
                    //Запускаем анимации третьего экрана
                    window.requestAnimationFrame(() => {
                        section3StartAnimation.play()
                    })
                }
                if (sectionNumber.includes(4)) {
                    //Запускаем анимации четвертого экрана
                    window.requestAnimationFrame(() => {
                        section4StartAnimation.play()
                    })

                }
                if (sectionNumber.includes(5)) {
                    //Запускаем анимации пятого экрана
                    window.requestAnimationFrame(() => {
                        section5StartAnimation.play()
                    })
                }
            } 
            // else {
            //     if (sectionNumber.includes(1)) {
            //         //Останавливаем стартовый таймлайн анимаций первой секции
            //         window.requestAnimationFrame(() => {
            //             section1StartAnimation.pause()
            //         })

            //         //WordsRotator в первой секции
            //         if (typeof window.wordsRotatorT !== 'undefined') {
            //             window.clearInterval(wordsRotatorT)
            //         }
            //     }
            //     if (sectionNumber.includes(2)) {
            //         //Ставим на паузу анимации второго экрана
            //         window.requestAnimationFrame(() => {
            //             section2StartAnimation.pause()
            //         })

            //         //Ставим на паузу облако интересов
            //         $('#section-2-my-interests-cloud-canvas').tagcanvas("pause")

            //     }
            //     if (sectionNumber.includes(3)) {}
            //     if (sectionNumber.includes(4)) {}
            //     if (sectionNumber.includes(5)) {
            //         //Останавливаем стартовый таймлайн анимаций пятой секции
            //         window.requestAnimationFrame(() => {
            //             section5StartAnimation.pause()
            //         })
            //     }
            // }
        }

        // Скролл секциями
        function onepagescrollEnable() {
            $("#section-scroll").onepage_scroll({
                sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
                easing: "ease-in-out",
                animationTime: 300,
                pagination: false,
                updateURL: false,
                beforeMove: function (index) {
                    //Обновляем переменную с номером секции
                    document.numberOfActiveSection = parseInt($('.active').attr('data-index'))

                    //Останавливаем анимации на всех секциях, кроме той, на которой находится пользователь
                    switch (index) {
                        case 1:
                            AnimationControlPlay(true, [1])
                            // AnimationControlPlay(false, [2, 3, 4, 5])
                            break
                        case 2:
                            AnimationControlPlay(true, [2])
                            // AnimationControlPlay(false, [1, 3, 4, 5])
                            break
                        case 3:
                            AnimationControlPlay(true, [3])
                            // AnimationControlPlay(false, [1, 2, 4, 5])
                            break
                        case 4:
                            AnimationControlPlay(true, [4])
                            // AnimationControlPlay(false, [1, 2, 3, 5])
                            break
                        case 5:
                            AnimationControlPlay(true, [5])
                            // AnimationControlPlay(false, [1, 2, 3, 4])
                            break
                    }
                },
                afterMove: function (index) {},
                loop: false,
                keyboard: true,
                responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
                // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                // the browser's width is less than 600, the fallback will kick in.
                direction: "vertical"
            })
        }

        //------------------------------------------------------------------
        //------------- Старт сайта ----------------------------------------
        //------------------------------------------------------------------

        //Анимация прелоадера
        new Vivus('preloader', {
            start: 'autostart',
            type: 'sync',
            duration: 100,
            animTimingFunction: Vivus.EASE,
            onReady: function () {
                $('#preloader').css('stroke-opacity', '1')
            },
        }, function () {
            //Запускаем анимацию прелоадера
            window.requestAnimationFrame(() => {
                // Анимация "Приближения и затухания букв" перед исчезновением прелоадера
                $('#preloader path').css({
                    'opacity': '0',
                    'transform-origin': 'center',
                    'transform': 'translateX(100%) scale(20)',
                })
                preloaderAnimation.play()
            })
        })

        //------------------------------------------------------------------
        //------------- Обработка событий ----------------------------------
        //------------------------------------------------------------------

        // //Остановить все анимации, если пользователь перешел на другую вкладку, и продолжить проигрывание, если вернулся
        // ifvisible.on("blur", () => {
        //     AnimationControlPlay(false, [1, 2, 3, 4, 5])
        // })
        // ifvisible.on("focus", () => {
        //     AnimationControlPlay(true, [document.numberOfActiveSection])
        // })

        let scrollState = ''
        let transformStyle = ''

        // Анимации меню
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

                // Сохраняем позицию скролла
                scrollState = $("#section-scroll").css("transform")
                transformStyle = ($("#section-scroll").attr("style") ? $("#section-scroll").attr("style") : '') + ' transform:' + scrollState + ' !important;'

                // Отключаем скролл и ставим позцию скролла в запомненную
                $("body").addClass("disabled-onepage-scroll disable-scroll")
                $("#section-scroll").attr("style", transformStyle)
            } 
            else {
                $('.nav').removeClass('slideInRight')
                $('.nav').addClass('slideOutRight')
                $('#nav-icon1').css({
                    'margin-right': '2rem',
                    'right': '0'
                })

                // Включаем скролл
                $("body").removeClass("disabled-onepage-scroll disable-scroll")
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

                // Включаем скролл
                $("body").removeClass("disabled-onepage-scroll disable-scroll")
            }
        })

        $('.nav').click(function (event) {
            event.stopImmediatePropagation()
        })

        //Переходы при кликах на пункты меню
        $('.nav-internal li, .bottom-nav li').click(function (event) {
            let pageToScrollTo = parseInt($(this).attr('data-page-to'))
            $("#section-scroll").moveTo(pageToScrollTo)
            // Если пункт в боковом меню, закрываем меню имитируя нажатие на крестик
            if($(this).parent().hasClass('nav-internal')) $('#nav-icon1').click()
        })
        

        // Анимация блока "Использованные технологии"
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
                $('.section-3-used-tech').css({
                    'transform': 'rotate(0deg) translate(40vw,-80vh)',
                    'cursor': 'auto'
                })
                $('.section-3-used-tech-header').css('transform', 'translate(-8rem, 1rem)')
                $('.section-3-used-tech-text').css('transform', 'translate(0, 0)')
            })
        }
        
        //Закрытие блока "Использованные технологии" при клике на крестик
        $('.section-3-used-tech-exit').click(function (event) {
            $('.section-3-used-tech').css({
                'transform': 'rotate(10deg) translate(0)',
                'cursor': 'pointer'
            })
            $('.section-3-used-tech-header').css('transform', 'translate(0, 0)')
            $('.section-3-used-tech-text').css('transform', 'translate(0, 0)')
            //Не вызывать клик по родительскому элементу при клике по крестику
            event.stopImmediatePropagation()
        })

        const caseModalData = {
            'amtel' : {
                text: `
                    <h3>Описание проекта</h3><br>
                    <p>Интернет-магазин для оптовых клиентов компании</p><br><br>
                    <h3>Моя роль в проекте</h3><br>
                    <p>Frontend-разработчик, дизайнер</p><br><br>
                    <h3>Что было сделано</h3><br>
                    <ul>
                        <li>Новый блок поиска запчастей по категориям, использующийся на всех страницах с продуктами на сайте</li>
                        <li>Клиентская часть функционала страницы оплаты счетов</li>
                        <li>Новый список товаров (вёрстка + клиентская логика)</li>
                        <li>Рефакторинг и переработка всей клиентской части на проекте (рефакторинг CSS и JS, перенос на Webpack, и т.д.)</li>
                        <li>Доработка функционала фильтров на всех страницах со списком товаров</li>
                        <li>Доработка функционала блока "Поиск по марке" на главной (реализация запоминания и смена контента без перезагрузки)</li>
                        <li>Переработан дизайн на всех страницах</li>
                        <li>Множество других доработок (более 40 задач) в процессе работы</li>
                    </ul><br><br>
                    <h3>Результаты</h3><br>
                    <ul>
                        <li>Проект стал выглядеть как современный сайт</li>
                        <li>Добавилось множество функций</li>
                        <li>Пользоваться им стало гораздо удобнее, продажи увеличились</li>
                    </ul><br><br>
                `,
                link: `
                    <a href="https://amtel.club/" target="_blank" class="underline-hover-link">Посмотреть проект</a>
                    <a href="images/section-4-back-pics/case-pics/amtel-1.jpg" target="_blank">
                        <img src="images/section-4-back-pics/case-pics/amtel-1.jpg" />
                    </a>
                    <a href="images/section-4-back-pics/case-pics/amtel-2.jpg" target="_blank">
                        <img src="images/section-4-back-pics/case-pics/amtel-2.jpg" />
                    </a>
                `
            },
            'ea_messenger': {
                text: `
                    <h3>Описание проекта</h3><br>
                    <p>Мессенджер подобный Telegram Web (90% функционала Tg Web + кастомный функционал для нужд компании) для общения между операторами и клиентами</p><br><br>
                    <h3>Моя роль в проекте</h3><br>
                    <p>Frontend-разработчик</p><br><br>
                    <h3>Что было сделано</h3><br>
                    <ul>
                        <li>Разработана структура и описание логики работы всего функционала клиентской части приложения по прямому согласованию с бизнесом</li>
                        <li>Спроектирована и реализована архитектура всей клиентской части</li>
                        <li>
                        За 2 дня пришлось написать необходимый функционал мессенджера для первоначального запуска (архитектуру, переключение чатов, обмен сообщениями, загрузка истории, лоадеры, заглушки, обновление информации о пользователе и т.д.). 
                        Весь написанный тогда код до сих пор работает в реальном приложении.
                        Успел сдать базовую версию проекта в необходимый срок, параллельно работая на двух других крупных проектах
                        </li>
                        <li>Мной написано около 90% frontend-части проекта.
                        В качестве технологического стэка были выбраны чистый ES6 + React + Redux.
                        Приложение написано в функциональном стиле с архитектурой "командного центра", управляющего взаимодействиями между множеством dumb components
                        </li>
                    </ul><br><br>
                    <h3>Результаты</h3><br>
                    <ul>
                        <li>За 4 месяца с нуля до момента запуска с полным функционалом создал фронтэнд приложения, являющегося улучшенным аналогом Телеграм Веб</li>
                        <li>Операторы и бизнес-заказчики довольны работой нового приложения</li>
                        <li>Операторы стали быстрее и качественнее обслуживать клиентов, благодаря чему повысился доход компании</li>
                    </ul><br><br>
                `,
                link: `
                    <a href="https://olo.euroauto.ru/" target="_blank" class="underline-hover-link">Посмотреть проект</a>
                    <a href="images/section-4-back-pics/case-pics/olo-1.jpg" target="_blank">
                        <img src="images/section-4-back-pics/case-pics/olo-1.jpg" />
                    </a>
                    <a href="images/section-4-back-pics/case-pics/olo-2.jpg" target="_blank">
                        <img src="images/section-4-back-pics/case-pics/olo-2.jpg" />
                    </a>
                `
            },
            'ea': {
                text: `
                <h3>Описание проекта</h3><br>
                <p>Основной сайт компании. Интернет-магазин розничной продажи запчастей.</p><br><br>
                <h3>Моя роль в проекте</h3><br>
                <p>Frontend-разработчик</p><br><br>
                <h3>Что было сделано</h3><br>
                <ul>
                    <li>Новая корзина.<br>
                        Идея проекта заключалась в совмещении функционала нескольких страниц в одной.
                        Спроектирована архитектура проекта. Всё реализовано на последней версии React с применением лучших практик. В процессе создано множество универсальных чистых функций для различных целей, которые можно применять в любом проекте.
                    </li>
                    <li>Блок выбора города.<br>
                    Его можно видеть на любой странице сайта если кликнуть на город в шапке</li>
                    <li>Новая страница вакансий</li>
                </ul><br><br>
                <h3>Результаты</h3><br>
                <ul>
                    <li>Снижено количество необходимых шагов для покупки товара (всё находится на одной странице), из-за этого конверсия "переход в корзину -> покупка товара" увеличена</li>
                    <li>Отдел HR рад новой странице вакансий, теперь можно быстро обновлять вакансии без необходимости обращения к отделу IT, что упростило и ускорило процесс.</li>
                </ul><br><br>
                `,
                link: `<a href="http://euroauto.ru/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
            },
            'wolf': {
                text: `
                    <h3>Описание проекта</h3><br>
                    <p>Сайт компании Wolf в России</p><br><br>
                    <h3>Моя роль в проекте</h3><br>
                    <p>Frontend-разработчик</p><br><br>
                    <h3>Что было сделано</h3><br>
                    <ul>
                        <li>Спроектирована и реализована архитектура клиентской части веб-приложения</li>
                        <li>Реализована логика главной страницы и страницы подбора товаров</li>
                        <li>Написаны универсальные легко переиспользуемые модули карты и групп взаимозависимых селектов. Они представляют из себя функции высшего порядка, способные работать с любым backend-ом без необходимости внутренних изменений в коде модуля (всё можно менять через  переменную схемы, которую можно генерировать автоматически) и выполнять/отключать любую логику через переданные функции</li>
                        <li>Написана чистая универсальная функция высшего порядка (наподобие reduce) для нахождения дублей в массивах по любому условию. Она помогла найти и устранить дубли в передаваемых backend-ом данных</li>
                    </ul><br><br>
                    <h3>Результат</h3><br>
                    <ul>
                        <li>Первая версия проекта запущена в продакшен и уже функционирует</li>
                    </ul><br><br>
                `,
                link: `<a href="https://maslo.center/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
            },
            'mksoloview': {
                text: `
                    <h3>Описание проекта</h3><br>
                    <p>Сайт мастер-класса Владимира Соловьева</p><br><br>
                    <h3>Моя роль в проекте</h3><br>
                    <p>Frontend-разработчик</p><br><br>
                    <h3>Что было сделано</h3><br>
                    <ul>
                        <li>Проект реализован в самом начале карьеры. За 3 дня реализованы 13 лендингов с различными логикой и наполнением</li>
                    </ul><br><br>
                    <h3>Результат</h3><br>
                    <ul>
                        <li>Всё сделано в срок. Клиент доволен результатом</li>
                    </ul><br><br>
                `,
                link: `<a href="https://ivankorolenko.com/projects/mksoloviev/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
            },
            'me': {
                text: `
                    <h3>Описание проекта</h3><br>
                    <p>Сайт компании Marketing Engineers</p><br><br>
                    <h3>Моя роль в проекте</h3><br>
                    <p>Frontend-разработчик</p><br><br>
                    <h3>Что было сделано</h3><br>
                    <ul>
                        <li>Проект реализован в самом начале карьеры. За день создан лендинг с необычной версткой и различными анимациями</li>
                    </ul><br><br>
                    <h3>Результат</h3><br>
                    <ul>
                        <li>Всё сделано в срок. Клиент доволен результатом</li>
                    </ul><br><br>
                `,
                link: `<a href="https://ivankorolenko.com/projects/me_v2.0/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
            },
            'atlant': {
                text: ``,
                link: ``
            },
            '15_puzzle': {
                text: ``,
                link: ``
            },
            'passgen': {
                text: ``,
                link: ``
            },
            'portfolio': {
                text: ``,
                link: ``
            },
        }

        // Клик по кейсу в 4 секции вызывает открытие модалки с соответсвтующим контентом из переменной
        $('[data-open-case-modal]').click(e => {
            const name = $(e.currentTarget).data('openCaseModal')

            caseModal.css({ 'right': '0' })
            caseModalContent.children('.case-modal-text-part').html(caseModalData[name]['text'])
            caseModalData[name]['link'] 
                ? caseModalContent.children('.case-modal-link-part').show().html(caseModalData[name]['link'])
                : caseModalContent.children('.case-modal-link-part').hide()
        })

        // Закрываем модалку с кейсом по клику на крестик
        caseModalCloser.click(e => {
            caseModal.css({ 'right': '120vw' })
        })      

})
