const caseModalData = {
    'ru' : {
        'amtel.club' : {
            text: `
                <h3>Описание проекта</h3><br>
                <p>Интернет-магазин для оптовых клиентов компании</p><br><br>
                <h3>Моя роль в проекте</h3><br>
                <p>Front End Engineer</p><br><br>
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
                </ul>
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
                <p>Мессенджер подобный Telegram Web (~90% функционала Tg Web + кастомный функционал для нужд компании) для общения между операторами и клиентами</p><br><br>
                <h3>Моя роль в проекте</h3><br>
                <p>Front End Engineer</p><br><br>
                <h3>Что было сделано</h3><br>
                <ul>
                    <li>Разработана структура и описание логики работы всего функционала клиентской части приложения по прямому согласованию с бизнесом</li>
                    <li>Спроектирована и реализована архитектура всей клиентской части</li>
                    <li>
                    За 2 дня пришлось написать необходимый функционал мессенджера для первоначального запуска (архитектуру, переключение чатов, обмен сообщениями, загрузка истории, лоадеры, заглушки, обновление информации о пользователе и т.д.). 
                    Весь написанный тогда код до сих пор работает в реальном приложении.
                    Успел сдать базовую версию проекта в необходимый срок, параллельно работая на двух других крупных проектах компании
                    </li>
                    <li>Мной написано около 90% front end части проекта.
                    В качестве технологического стэка были выбраны чистый ES6 + React + Redux.
                    Приложение написано в функциональном стиле с архитектурой "командного центра", управляющего взаимодействиями между множеством "dumb components"
                    </li>
                </ul><br><br>
                <h3>Результаты</h3><br>
                <ul>
                    <li>За 4 месяца с нуля до момента запуска с полным функционалом создал front end приложения, являющегося улучшенным аналогом Телеграм Веб</li>
                    <li>Операторы и бизнес-заказчики довольны работой нового приложения</li>
                    <li>Благодаря приложению операторы стали быстрее и качественнее обслуживать клиентов, благодаря чему повысился доход компании</li>
                </ul>
            `,
            link: `
                <a href="http://euroauto.ru/messenger/call/" target="_blank" class="underline-hover-link">Посмотреть проект как пользователь</a>
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
            <p>Front End Engineer</p><br><br>
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
            </ul>
            `,
            link: `<a href="http://euroauto.ru/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
        },
        'vtb': {
            text: `
                <h3>Описание проекта</h3><br>
                <p>Веб-приложение ВТБ для онбординга корпоративных клиентов</p><br><br>
                <h3>Моя роль в проекте</h3><br>
                <p>Senior Front End Engineer</p><br><br>
                <h3>Что было сделано</h3><br>
                <ul>
                    <li>Представлял компанию на международной IT-конференции HolyJS 2020 Piter international с докладом о лямбда-исчислении. Создавал и оценивал задачи по JavaScript для соревнования по программированию от компании</li>
                    <li>Проводил собеседования и оценку всех front end кандидатов. Помогал успешному кандидату погрузиться в наши проекты</li>
                    <li>Эффективно интвестигировал и решал критичные проблемы в сложной системе с множеством взаимозависимых составляющих с упором на стабильность и безопасность. Улучшал проекты созданием нового функционала на JavaScript и TypeScript</li>
                    <li>Значительно стабилизировал проекты и улучшил кодовую нашу базу для улучшения производительности и простоты поддержки кода</li>
                    <li>Оценивал и распределял задачи в моей команде, проводил код-ревью PR-ов членов команды</li>
                </ul><br><br>
                <h3>Результат</h3><br>
                <ul>
                    <li>Значительно возросла удовлетворенность клиентов сервисом</li>
                </ul>
            `,
            link: `<a href="https://www.vtb.ru/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
        },
        'mercaux': {
            text: `
                <h3>Описание проектов</h3><br>
                <p>Разработка новой версии Mercaux Portal (система управления бизнесом для клиентов компании) на React и улучшение сайта компании - Mercaux.com</p><br><br>
                <h3>Моя роль в проектах</h3><br>
                <p>Senior Front End Engineer</p><br><br>
                <h3>Что было сделано</h3><br>
                <ul>
                    <li>Создана архитектура новых Портала и Ядра</li>
                    <li>Новый Портал разработан с использованием таких технологий как JavaScript (ES8), React,
                    Redux, Saga, Ramda. Правильное применение этих технологий и продуманная структура компонентов сделали новую версию Портала быстрее, надежнее и проще в поддержке, сократили время на внесение изменений разработчиками, а также улучшили опыт клиентов на сайте.</li>
                    <li>В Mercaux.com внесено множество улучшений и нового функционала для желающих узнать больше о компании, её стратегии и целях</li>
                    <li>Создано и переработано множество email темплейтов клиентов компании, таких как Nike, Under Armour, United Colors of Benetton</li>
                </ul><br><br>
                <h3>Результаты</h3><br>
                <ul>
                    <li>Бизнес-команда и клиенты довольны новому Порталу, улучшенным сайтом и новыми email-темплейтами</li>
                    <li>Разработчики компании получили понятную и оптимальную архитектуру проекта, а также  реализацию с производительным кодом, написанным с применением лучших практик и читаемым как английский текст</li>
                </ul>
            `,
            link: `<a href="https://mercaux.com" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
        },
        '15_puzzle': {
            text: `
                <h3>Описание проекта</h3><br>
                <p>Проект для себя. Реализация игры "Пятнашки" на React</p><br><br>
                <h3>Моя роль в проекте</h3><br>
                <p>Front End Engineer, дизайнер</p><br><br>
                <h3>Что было сделано</h3><br>
                <ul>
                    <li>За 2 дня с нуля создана игра "Пятнашки" на React с подсчетом ходов и времени, и подсветкой верно выставленных ячеек</li>
                </ul><br><br>
                <h3>Результаты</h3><br>
                <ul>
                    <li>Игра работает</li>
                    <li>Одним проектом с открытым исходным кодом больше</li>
                </ul>
            `,
            link: `<a href="https://ivankorolenko.com/projects/react-puzzle-15/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
        },
        'passgen': {
            text: `
                <h3>Описание проекта</h3><br>
                <p>Проект для себя. Генератор надежных паролей на React</p><br><br>
                <h3>Моя роль в проекте</h3><br>
                <p>Front End Engineer, дизайнер</p><br><br>
                <h3>Что было сделано</h3><br>
                <ul>
                    <li>За пару часов с нуля создан генератор паролей на React, генерирующий по умолчанию пароли, на взлом которых уйдет 43 квинтиллиона (10 в 18 степени) лет. Для удобства надежный пароль генерируется сразу при входе на сайт и копируется в буфер обмена при клике на него. Длину пароля можно ставить любую, но не ниже 15 символов, что немного выше рекомендуемой экспертами по информационной безопасности длины пароля на момент создания приложения (2017 год)</li>
                </ul><br><br>
                <h3>Результаты</h3><br>
                <ul>
                    <li>Создан удобный генератор паролей, которым мы с друзьями часто пользуемся</li>
                    <li>Одним проектом с открытым исходным кодом больше</li>
                </ul>
            `,
            link: `<a href="https://ivankorolenko.com/projects/react-passgen/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
        },
        'portfolio': {
            text: `
                <h3>Описание проекта</h3><br>
                <p>Мой сайт-портфолио</p><br><br>
                <h3>Моя роль в проекте</h3><br>
                <p>Front End Engineer, дизайнер, иллюстратор</p><br><br>
                <h3>Что было сделано</h3><br>
                <ul>
                    <li>Сбор идей. Изучены сайты-победители <a href="https://www.awwwards.com/" target="_blank" class="white underline-hover-link" style="display: inline-block;">AWWWARDS</a>. Идеи по дизайну и функционалу с сайтов-победителей добавлены к моим собственным, составлен список примерно из 50 идей. Отфильтированы идеи, которые могут работать вместе и придуман общий концепт сайта.</li>
                    <li>Создание иллюстрации. Согласно концепту для первой секции сайта нужна была иллюстрация. Не нашел подходящей среди уже созданных иллюстраторами, решил сделать сам. За 2 недели изучены основы иллюстрирования и нарисована своя иллюстрация, которую Вы сейчас можете видеть в первой секции этого сайта</li>
                    <li>Реализация идей. Множество экспериментов, тестов и перфекционистских мук привели к созданию желаемого сайта. Суммарно на реализацию всех идей ушло около 2 месяцев</li>
                </ul><br><br>
                <h3>Результаты</h3><br>
                <ul>
                    <li>Вы сейчас читаете этот текст</li>
                    <li>Реализованы все идеи, заложенные в концепте + большая часть идей, появившихся в процессе работы.</li>
                    <li>Создан самый сложный в плане визуального front end-а сайт в моей практике</li>
                </ul>
            `,
            link: ``
        },
    },
    'en': {
        'amtel.club' : {
            text: `
                <h3>Project description</h3><br>
                <p>Online store for wholesale customers of the company</p><br><br>
                <h3>My role in the project</h3><br>
                <p>Front End Engineer</p><br><br>
                <h3>What was done</h3><br>
                <ul>
                    <li>A new block of search for spare parts by category, used on all pages with products on the site</li>
                    <li>Front end of the bill payment page</li>
                    <li>New product list (layout + client logic)</li>
                    <li>Refactoring and reengineering the entire client side of the project (refactoring CSS and JS, porting to Webpack, etc.)</li>
                    <li>Refinement of filters on all pages with a list of products</li>
                    <li>Refinement of block “Search by brand” on the main page (implementation of memorization and changing content without rebooting)</li>
                    <li>Reworked design on all pages</li>
                    <li>Many other improvements (more than 40 tasks)</li>
                </ul><br><br>
                <h3>Results</h3><br>
                <ul>
                    <li>The project began to look like a modern website</li>
                    <li>Added many features</li>
                    <li>Website became much more convenient to use, sales increased</li>
                </ul>
            `,
            link: `
                <a href="https://amtel.club/" target="_blank" class="underline-hover-link">See the project</a>
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
                <h3>Project description</h3><br>
                <p>Messenger like Telegram Web (~ 90% of Tg Web functionality + custom functionality for company needs) for communication between operators and customers</p><br><br>
                <h3>My role in the project</h3><br>
                <p>Front End Engineer</p><br><br>
                <h3>What was done</h3><br>
                <ul>
                    <li>Developed the description of the logic of the entire front end in direct coordination with business customers</li>
                    <li>Designed and implemented the architecture of the entire front end</li>
                    <li>
                    In 2 days I had to write all the necessary messenger functionality for the initial launch (architecture, chat switching, messaging, history, loaders, updating user information, etc). All the code that was written back then still works in a real application. I managed to finish the basic version of the project within the required time, while  working on two other major projects of the company
                    </li>
                    <li>I wrote about 90% of the front end part of the project.
                    Pure ES6 + React + Redux was chosen as a technology stack.
                    The application is written in a functional style with a "command center" architecture that manages the interactions between multiple "dumb components"
                    </li>
                </ul><br><br>
                <h3>Results</h3><br>
                <ul>
                    <li>In 4 months from scratch to launch with full functionality was created the front end of the application, which is an improved analogue of Telegram Web</li>
                    <li>Operators and business customers are happy with the work of the new application</li>
                    <li>Thanks to the app operators have become faster and better in customer service, thereby increasing company revenue</li>
                </ul>
            `,
            link: `
                <a href="http://euroauto.ru/messenger/call/" target="_blank" class="underline-hover-link">Chat with operators which are using this messenger</a>
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
            <h3>Project description</h3><br>
            <p>The main site of the company. Retail online auto parts store.</p><br><br>
            <h3>My role in the project</h3><br>
            <p>Front End Engineer</p><br><br>
            <h3>What was done</h3><br>
            <ul>
                <li>New cart<br>
                    The idea of the project was to combine the functionality of several pages in one.
                    I designed the project architecture. Everything is implemented on the latest version of React using the best practices. Many universal clean functions for various purposes that can be used in any project were created in the process of development.
                </li>
                <li>City choice block<br>
                It can be seen on any page of the site if you click on the city in the header.</li>
                <li>New vacancies page</li>
            </ul><br><br>
            <h3>Results</h3><br>
            <ul>
                <li>Reduced the number of necessary steps to purchase goods (everything is on one page),  the conversion "go to cart -> purchase of goods" is increased because of this
                </li>
                <li>The HR department is pleased with the new vacancies page, now they can quickly update vacancies without having to contact the IT department, which simplified and accelerated the process.</li>
            </ul>
            `,
            link: `<a href="http://euroauto.ru/" target="_blank" class="underline-hover-link">See the project</a>`
        },
        'vtb': {
            text: `
                <h3>Project description</h3><br>
                <p>VTB web application for onboarding of corporate clients</p><br><br>
                <h3>My role in the project</h3><br>
                <p>Senior Front End Engineer</p><br><br>
                <h3>What was done</h3><br>
                <ul>
                    <li>Represented the company in HolyJS 2020 Piter international IT-conference as a speaker with talk about lambda calculus. Created and reviewed JavaScript questions for company's programming contests</li>
                    <li>Interviewed and evaluated all front end candidates. Helped successful candidate to dive into our projects</li>
                    <li>Effectively investigated and solved critical problems in complex interconnected systems with emphasis on stability
                    and security. Improved projects with new features written in JavaScript and TypeScript</li>
                    <li>Significantly stabilized projects and improved our code base for greater performance and easier maintainability</li>
                    <li>Assessed and distributed tasks for my team, conducted code review of team members’ code</li>
                </ul><br><br>
                <h3>Result</h3><br>
                <ul>
                    <li>Clients’ satisfaction with our service gone up remarkably</li>
                </ul>
            `,
            link: `<a href="https://www.vtb.com/o-banke/" target="_blank" class="underline-hover-link">See the project</a>`
        },
        'mercaux': {
            text: `
                <h3>Projects description</h3><br>
                <p>New Mercaux Portal development (business management system for company's clients) on React and improvement of the main company's site (Mercaux.com)</p><br><br>
                <h3>My role in the projects</h3><br>
                <p>Senior Front End Engineer</p><br><br>
                <h3>What was done</h3><br>
                <ul>
                    <li>New Portal's and Core's architectures are created</li>
                    <li>New Portal developed with such technologies as JavaScript (ES8), React,
                    Redux, Saga, Ramda. Right application of these technologies makes this new platform faster,
                    more reliable and robust, improves flexibility of components. New technologies and thoughtful
                    design of components reduces the time to refine, test and improve the application, while improving the User Experience</li>
                    <li>Many improvements and new functionality have been made on Mercaux.com for people who want to know more about the company, it’s projects, strategies and goals.</li>
                    <li>Many email templates for company's clients such as Nike, Under Armour, United Colors of Benetton are created and improved</li>
                </ul><br><br>
                <h3>Results</h3><br>
                <ul>
                    <li>The business team and customers are satisfied with the new Portal, improved site and new email templates</li>
                    <li>Development team of the company got a clear and optimal architecture of the project, as well as an implementation with a perfomant code written using best practices, that reads like English text</li>
                </ul>
            `,
            link: `<a href="https://mercaux.com" target="_blank" class="underline-hover-link">See the project</a>`
        },
        '15_puzzle': {
            text: `
                <h3>Project description</h3><br>
                <p>Project for myself. Implemenatation of the "15 puzzle" game on React</p><br><br>
                <h3>My role in the project</h3><br>
                <p>Front End Engineer, designer</p><br><br>
                <h3>What was done</h3><br>
                <ul>
                    <li>In 2 days created from scratch the "15 puzzle" game on React with counting of moves and time, and highlighting of correctly placed cells.</li>
                </ul><br><br>
                <h3>Results</h3><br>
                <ul>
                    <li>The game works</li>
                    <li>One more open source project</li>
                </ul>
            `,
            link: `<a href="https://ivankorolenko.com/projects/react-puzzle-15/" target="_blank" class="underline-hover-link">See the project</a>`
        },
        'passgen': {
            text: `
                <h3>Project description</h3><br>
                <p>Project for myself. Secure passwords generator on React</p><br><br>
                <h3>My role in the project</h3><br>
                <p>Front End Engineer, designer</p><br><br>
                <h3>What was done</h3><br>
                <ul>
                    <li>In a few hours created a password generator on React from scratch. By default it generates passwords which will take 43 quintillion (10 to the power of 18) years to crack. For convenience, a strong password is generated immediately upon entering the site and is copied to the clipboard when you just click on it. Password length can be set to any, but not less than 15 characters, which is slightly higher than the length of the password recommended by information security experts at the time of creating the application (2017)</li>
                </ul><br><br>
                <h3>Results</h3><br>
                <ul>
                    <li>Created a convenient password generator, which we often use with friends</li>
                    <li>One more open source project</li>
                </ul>
            `,
            link: `<a href="https://ivankorolenko.com/projects/react-passgen/" target="_blank" class="underline-hover-link">See the project</a>`
        },
        'portfolio': {
            text: `
                <h3>Project description</h3><br>
                <p>My site-portfolio</p><br><br>
                <h3>My role in the project</h3><br>
                <p>Front End Engineer, designer, illustrator</p><br><br>
                <h3>What was done</h3><br>
                <ul>
                    <li>Ideas gathering. I analyzed winners on <a href="https://www.awwwards.com/" target="_blank" class="white underline-hover-link" style="display: inline-block;">AWWWARDS</a>. Ideas about design and functionality from the winning sites have been added to my own, a list of about 50 ideas has been compiled. Ideas that can work together are filtered out and a general concept of the site is invented.</li>
                    <li>Creating an illustration. According to the concept for the first section of the site I needed an illustration. I did not find the suitable one among those already created by illustrators and decided to do it myself. In 2 weeks I've studied the basics of Illustration and drawn a work that you can now see in the first section of this site.</li>
                    <li>The implementation of ideas. Many experiments, tests and perfectionist torments have led to the creation of the desired site. It took about 2 months to implement all of the ideas.</li>
                </ul><br><br>
                <h3>Results</h3><br>
                <ul>
                    <li>You are reading this text right now</li>
                    <li>Implemented all the of ideas embodied in the concept + most of the ideas that emerged in the process.</li>
                    <li>Created the most complex in terms of the visual front end website in my practice</li>
                </ul>
            `,
            link: ``
        },
    }   
}

const usedTechParams = {
    'open': {
        'desktop': {
            main: { 'transform': 'rotate(0deg) translate(40vw,-86vh)', 'cursor': 'auto' },
            header: { 'transform': 'translate(0, 1rem)' },
            text: { 'transform': 'translate(0, -17vh)' }
        },
        'tablet': {
            main: { 
                'transform': 'rotate(0deg) translate(40vw, 0)',
                'top': '0',
                'cursor': 'auto' 
            },
            header: { 'transform': 'translate(0, 1rem)' },
            text: { 'transform': 'translate(0, -12vh)' }
        },
        'mobile': {
            main: { 
                'transform': 'rotate(0deg) translate(48vw, 0)',
                'top': '0',
                'cursor': 'auto' 
            },
            header: { 'transform': 'translate(-5rem, 1rem)' },
            text: { 'transform': 'translate(0, -12vh)' }
        }
    },
    'close': {
        'desktop': {
            main: { 'transform': 'rotate(10deg) translate(0)', 'cursor': 'pointer' },
            header: { 'transform': 'translate(3rem, 0)' },
            text: { 'transform': 'translate(0, 0)' }
        },
        'tablet': {
            main: { 
                'transform': 'rotate(10deg) translate(0)',
                'top': '85vh',
                'cursor': 'pointer'
            },
            header: { 'transform': 'translate(3rem, 0)' },
            text: { 'transform': 'translate(0, 0)' }
        },
        'mobile': {
            main: { 
                'transform': 'rotate(10deg) translate(0)',
                'top': '80vh',
                'cursor': 'pointer'
            },
            header: { 'transform': 'translate(3rem, 0)' },
            text: { 'transform': 'translate(0, 0)' }
        }
    }
}

const wordsForRotator = {
    'ru': ['приложения', 'сайты', 'идеи', 'дизайн', 'иллюстрации', 'алгоритмы', 'анимации'],
    'en': ['applications', 'websites', 'ideas', 'design', 'illustrations', 'algorithms', 'animations']
}

export { caseModalData, usedTechParams, wordsForRotator }