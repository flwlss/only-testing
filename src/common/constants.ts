export const keyEvents = {
  keyEvent1: [
    { year: "1990", text: 'Открытие Музея современного искусства в Лос-Анджелесе (МОСИ).' },
    { year: "1991", text: 'Окончание реконструкции Лувра в Париже, Франция. Лувр является одним из самых посещаемых музеев.' },
    { year: "1992", text: 'Коллекция Пабло Пикассо возвращается в Испанию. Его работы были экспонированы во Франции.' },
    { year: "1993", text: 'Открытие Королевского музея изобразительных искусств в Амстердаме.' },
    { year: "1995", text: 'Открытие Музея Гуггенхайма в Бильбао, Испания. Музей привлекает внимание архитектурой.' },
  ],
  keyEvent2: [
    { year: "2015", text: 'В обсерватории Мауна-Лоа была зафиксирована высокая концентрация углекислого газа в атмосфере.' },
    { year: "2016", text: 'В Париже были разработаны международные меры для снижения выбросов парниковых газов.' },
    { year: "2017", text: 'Разрушительные ураганы в Атлантическом океане.' },
    { year: "2019", text: 'Начало австралийских лесных пожаров. Серия пожаров в Австралии протягивалась более года.' },
    { year: "2020", text: 'В результате пандемии COVID-19 выбросы парниковых газов значительно снизились.' },
  ],
  keyEvent3: [
    { year: "1975", text: 'Создание компанией Microsoft 4 апреля 1975 года Билл Гейтс и Пол Аллен основали компанию Microsoft.' },
    { year: "1976", text: 'Создание компании Apple 1 апреля 1976 года Стив Джобс, Стив Возняк и Рон Уайн создали компанию Apple.' },
    { year: "1979", text: 'Компания Sony выпустила первый переносной музыкальный плеер Walkman.' },
    { year: "1982", text: 'Состоялась премьера фильма "ЭТ". Этот фильм режиссера Стивена Спилберга.' },
    { year: "1984", text: 'Выпуск первой графической игры для персональных компьютеров.' },
  ],
  keyEvent4: [
    { year: "2000", text: 'Запуск первого постоянного обитаемого модуля Международной космической станции (МКС).' },
    { year: "2003", text: 'Запуск миссии "Марс-Стритель" - первого полноценного ровера (колесного робота) на планету Марс.' },
    { year: "2003", text: 'Миссия "Галлилео" была запущена NASA с целью исследования планеты Юпитер и ее лун.' },
    { year: "2004", text: 'Телескоп "Спицер" был запущен с целью наблюдения за космическими объектами.' },
    { year: "2008", text: 'Миссия "Кагуя" была первой японской миссией к Луне с целью исследования ее поверхности и окружающей среды.' },
  ],
  keyEvent5: [
    { year: "1933", text: 'Выпущен первый выпуск комикса "Action Comics #1", в котором впервые появился супергерой Супермен.' },
    { year: "1934", text: 'Установлены огромные буквы, символизирующие американскую киноиндустрию.' },
    { year: "1940", text: 'Премьера классического мультфильма "Цветы зла" от Уолта Диснея.' },
    { year: "1946", text: 'Состоялось открытие первого Международного кинофестиваля.' },
    { year: "1950", text: 'Состоялась премьера этого шведского фильма.' },
  ],
  keyEvent6: [
    { year: "1830", text: 'Публикация романа Виктора Гюго "Собор Парижской Богоматери".' },
    { year: "1843", text: 'Выход первой книжки произведения Ханса Христиана Андерсена "Сказки народные и сказки морей".' },
    { year: "1853", text: 'Публикация "Оливера Твиста" Чарльза Диккенса, который открыл новую эру в английском романе.' },
    { year: "1862", text: 'Выход первой части "Приключений Алисы в Стране чудес" Льюиса Кэрролла, сказки.' },
    { year: "1886", text: 'Публикация романа Роберта Луиса Стивенсона "Странная история доктора Джекила и мистера Хайда".' },
  ]
};

export const themes = (slideIndex: number) => {
  switch (slideIndex) {
    case 1:
      return 'Музей'
    case 2:
      return 'Природа'
    case 3:
      return 'Технологии'
    case 4:
      return 'Астрономия'
    case 5:
      return 'Кино'
    case 6:
      return 'Литература'
  }
}

export const keyEventsLength = Object.keys(keyEvents).length

export const screenWidth = window.screen.width