export const caseModalData = {
    'rus' : {
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
                <p>Мессенджер подобный Telegram Web (~% функционала Tg Web + кастомный функционал для нужд компании) для общения между операторами и клиентами</p><br><br>
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
                    <li>Проект реализован в самом начале карьеры. За 3 дня необходимо было реализовать 13 лендингов с различными логикой и наполнением</li>
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
                    <li>Клиент доволен результатом</li>
                </ul><br><br>
            `,
            link: `<a href="https://ivankorolenko.com/projects/me_v2.0/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
        },
        'atlant': {
            text: `
                <h3>Описание проекта</h3><br>
                <p>Сайт строительной компании Atlant Group</p><br><br>
                <h3>Моя роль в проекте</h3><br>
                <p>Frontend-разработчик</p><br><br>
                <h3>Что было сделано</h3><br>
                <ul>
                    <li>Переработана большая часть страниц сайта</li>
                    <li>Добавлен функционал и контент</li>
                    <li>Создан тест (на главной странице)</li>
                </ul><br><br>
                <h3>Результаты</h3><br>
                <ul>
                    <li>Клиент доволен результатом</li>
                    <li>Конверсия сайта увеличилась</li>
                </ul><br><br>
            `,
            link: `<a href="http://stroim-kottedzh.ru/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
        },
        '15_puzzle': {
            text: `
                <h3>Описание проекта</h3><br>
                <p>Проект для себя. Реализация игры "Пятнашки" на React</p><br><br>
                <h3>Моя роль в проекте</h3><br>
                <p>Frontend-разработчик, дизайнер</p><br><br>
                <h3>Что было сделано</h3><br>
                <ul>
                    <li>За 2 дня с нуля создана игра "Пятнашки" на React с подсчетом ходов и времени, и подсветкой верно выставленных ячеек</li>
                </ul><br><br>
                <h3>Результаты</h3><br>
                <ul>
                    <li>Игра работает</li>
                    <li>Одним проектом с открытым исходным кодом больше</li>
                </ul><br><br>
            `,
            link: `<a href="https://ivankorolenko.com/projects/react-puzzle-15/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
        },
        'passgen': {
            text: `
                <h3>Описание проекта</h3><br>
                <p>Проект для себя. Генератор надежных паролей на React</p><br><br>
                <h3>Моя роль в проекте</h3><br>
                <p>Frontend-разработчик, дизайнер</p><br><br>
                <h3>Что было сделано</h3><br>
                <ul>
                    <li>За вечер с нуля создан генератор паролей на React, генерирующий по умолчанию пароли, на взлом которых уйдет 43 квинтиллиона (10 в 18 степени) лет. Для удобства надежный пароль генерируется сразу при входе на сайт и копируется в буфер обмена при клике на него. Длину пароля можно ставить любую, но не ниже 15 символов, что немного выше рекомендуемой экспертами по информационной безопасности длины пароля на момент создания приложения (2017 год)</li>
                </ul><br><br>
                <h3>Результаты</h3><br>
                <ul>
                    <li>Создан удобный генератор паролей, которым мы с друзьями часто пользуемся</li>
                    <li>Одним проектом с открытым исходным кодом больше</li>
                </ul><br><br>
            `,
            link: `<a href="https://ivankorolenko.com/projects/react-passgen/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
        },
        'portfolio': {
            text: `
                <h3>Описание проекта</h3><br>
                <p>Мой сайт-портфолио</p><br><br>
                <h3>Моя роль в проекте</h3><br>
                <p>Frontend-разработчик, дизайнер, иллюстратор</p><br><br>
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
                    <li>Создан самый сложный в плане визуального frontend-а сайт в моей практике</li>
                </ul><br><br>
            `,
            link: ``
        },
    },
    'eng': {
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
                <p>Мессенджер подобный Telegram Web (~% функционала Tg Web + кастомный функционал для нужд компании) для общения между операторами и клиентами</p><br><br>
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
                <a href="http://euroauto.ru/messenger/call/" target="_blank" class="underline-hover-link">Пообщаться с операторами, использующими этот мессенджер</a>
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
                    <li>Проект реализован в самом начале карьеры. За 3 дня необходимо было реализовать 13 лендингов с различными логикой и наполнением</li>
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
                    <li>Клиент доволен результатом</li>
                </ul><br><br>
            `,
            link: `<a href="https://ivankorolenko.com/projects/me_v2.0/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
        },
        'atlant': {
            text: `
                <h3>Описание проекта</h3><br>
                <p>Сайт строительной компании Atlant Group</p><br><br>
                <h3>Моя роль в проекте</h3><br>
                <p>Frontend-разработчик</p><br><br>
                <h3>Что было сделано</h3><br>
                <ul>
                    <li>Переработана большая часть страниц сайта</li>
                    <li>Добавлен функционал и контент</li>
                    <li>Создан тест (на главной странице)</li>
                </ul><br><br>
                <h3>Результаты</h3><br>
                <ul>
                    <li>Клиент доволен результатом</li>
                    <li>Конверсия сайта увеличилась</li>
                </ul><br><br>
            `,
            link: `<a href="http://stroim-kottedzh.ru/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
        },
        '15_puzzle': {
            text: `
                <h3>Описание проекта</h3><br>
                <p>Проект для себя. Реализация игры "Пятнашки" на React</p><br><br>
                <h3>Моя роль в проекте</h3><br>
                <p>Frontend-разработчик, дизайнер</p><br><br>
                <h3>Что было сделано</h3><br>
                <ul>
                    <li>За 2 дня с нуля создана игра "Пятнашки" на React с подсчетом ходов и времени, и подсветкой верно выставленных ячеек</li>
                </ul><br><br>
                <h3>Результаты</h3><br>
                <ul>
                    <li>Игра работает</li>
                    <li>Одним проектом с открытым исходным кодом больше</li>
                </ul><br><br>
            `,
            link: `<a href="https://ivankorolenko.com/projects/react-puzzle-15/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
        },
        'passgen': {
            text: `
                <h3>Описание проекта</h3><br>
                <p>Проект для себя. Генератор надежных паролей на React</p><br><br>
                <h3>Моя роль в проекте</h3><br>
                <p>Frontend-разработчик, дизайнер</p><br><br>
                <h3>Что было сделано</h3><br>
                <ul>
                    <li>За вечер с нуля создан генератор паролей на React, генерирующий по умолчанию пароли, на взлом которых уйдет 43 квинтиллиона (10 в 18 степени) лет. Для удобства надежный пароль генерируется сразу при входе на сайт и копируется в буфер обмена при клике на него. Длину пароля можно ставить любую, но не ниже 15 символов, что немного выше рекомендуемой экспертами по информационной безопасности длины пароля на момент создания приложения (2017 год)</li>
                </ul><br><br>
                <h3>Результаты</h3><br>
                <ul>
                    <li>Создан удобный генератор паролей, которым мы с друзьями часто пользуемся</li>
                    <li>Одним проектом с открытым исходным кодом больше</li>
                </ul><br><br>
            `,
            link: `<a href="https://ivankorolenko.com/projects/react-passgen/" target="_blank" class="underline-hover-link">Посмотреть проект</a>`
        },
        'portfolio': {
            text: `
                <h3>Описание проекта</h3><br>
                <p>Мой сайт-портфолио</p><br><br>
                <h3>Моя роль в проекте</h3><br>
                <p>Frontend-разработчик, дизайнер, иллюстратор</p><br><br>
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
                    <li>Создан самый сложный в плане визуального frontend-а сайт в моей практике</li>
                </ul><br><br>
            `,
            link: ``
        },
    }   
}