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

        //Элементы для анимации первой секции start
        const section1BackSvg = document.getElementById('section-1-back'),
            section1BackTrees = section1BackSvg.querySelectorAll('#Тени_деревьев, #Свет_деревьев, #Свет_деревьев_2'),
            section1Foreground = document.querySelectorAll('.section-1-main-text, .bottom-nav'),
            section1SunlightAndTrees = section1BackSvg.querySelectorAll('#Светотень_от_солнца, #Тени_деревьев, #Свет_деревьев, #Свет_деревьев_2'),
            section1OverlayAndForeground = document.querySelectorAll('#section-1-back-overlay, #nav-icon1, .nav, .section-1-main-text, .bottom-nav'),
            section1NavInternal = document.getElementsByClassName('nav-internal'),
            section1MainText = document.getElementsByClassName('section-1-main-text')

        //end

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

        //Анимации прелоадера start
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
        //end

        //Анимации первого экрана start

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
                        value: "200",
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
                    duration: 500
                },
                easing: "easeInOutQuad",
                offset: '-=350'
            })
            .add({
                targets: '#Полосы_на_дереве',
                duration: 500,
                opacity: 1,
                easing: "easeInOutQuad"
            })
            // .add({
            //     targets: '#section-1-back-overlay',
            //     opacity: 1,
            //     delay: 0,
            //     easing: "linear",
            //     begin: (anim) => {
            //         document.getElementById("section-1-back-container").style.filter = "blur(2px)"
            //     }
            // })
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
                    let parallaxInstance = new Parallax(scene)
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

            

        //Анимации первого экрана end

        //Объявляем облако интересов и ставим на паузу start
        if (!$('#section-2-my-interests-cloud-canvas').tagcanvas({
                textColour: '#ffffff',
                textFont: 'Raleway, sans-serif',
                outlineThickness: 0,
                outlineMethod: "none",
                lock: 'xy',
                depth: 1,
                activeCursor: "auto",
                decel: 0,
                radiusX: 1.15,
                radiusY: 1.15,
                radiusZ: 1.15,
                fadeIn: 600,
                freezeActive: false,
                frontSelect: true,
                maxSpeed: 0.05,
                initial: [0.05, -0.05],
                minSpeed: 0.05,
                padding: 10,
                minBrightness: 0.1,
                shuffleTags: false,
                txtOpt: true,
                wheelZoom: false
            })) {
            // TagCanvas failed to load
            $('#myCanvasContainer').hide()
        }
        //Отключаем клики по ссылкам в облаке интересов
        $('#section-2-my-interests-cloud a').click(() => {
            return false
        })
        $('#section-2-my-interests-cloud-canvas').tagcanvas("pause")
        //end

        //Слайдер
        const factsSlide = $('.section-2-facts-slider').slick({
            swipe: false,
            touchMove: false,
            draggable: false,
            autoplay: false,
            autoplaySpeed: 3000,
            speed: 1000,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            adaptiveHeight: true,
            pauseOnFocus: true,
            pauseOnHover: true,
            vertical: true,
            verticalSwiping: true,
            cssEase: 'ease-in-out'
        })

        //Анимации второго экрана start
        const section2StartAnimation = anime.timeline({
            autoplay: false
        })

        section2StartAnimation
            .add({
                targets: '.section-2-photo',
                opacity: 1,
                delay: 100,
                duration: 500,
                easing: "easeInOutQuad",
                complete: () => {
                    $('.section-2-photo').css({'transform': 'translateY(0)'})
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

        //Анимации второго экрана end

        //Анимации третьего экрана start
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

        //end


        let section4AnimationTargets = deviceVersion === 'desktop' 
            ? document.querySelectorAll('#section-4-back #portfolio-cases a')
            : document.querySelectorAll('#section-4-back-mobile #portfolio-cases a') 

        //Анимации четвертого экрана start
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


        //end

        //Анимации пятого экрана start
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

        //Анимации пятого экрана end

        //Управление проигрыванием анимаций
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

        //Скролл секциями
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
                    'transform': 'translateX(150vw) scale(20)',
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
        

        //Анимация блока "Использованные технологии"
        if (deviceVersion === "desktop") {
            $('.section-3-used-tech').click(function (event) {
                $('.section-3-used-tech').css({
                    'transform': 'rotate(0deg) translate(40vw,-86vh)',
                    'cursor': 'auto'
                })
                $('.section-3-used-tech-header').css('transform', 'translate(0, 1vw)')
                $('.section-3-used-tech-text').css('transform', 'translate(0, -5vw)')
            })
        }
        else {
            $('.section-3-used-tech').click(function (event) {
                $('.section-3-used-tech').css({
                    'transform': 'rotate(0deg) translate(40vw,-80vh)',
                    'cursor': 'auto'
                })
                $('.section-3-used-tech-header').css('transform', 'translate(-8vw, 1vw)')
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

        //Переходы при кликах на пункты меню
        $('.nav-internal li, .bottom-nav li').click(function (event) {
            let pageToScrollTo = parseInt($(this).attr('data-page-to'))
            $("#section-scroll").moveTo(pageToScrollTo)
            // Закрываем меню имитируя нажатие на крестик
            $('#nav-icon1').click()
        })

})
