export const keyEvents = {
  keyEvent1: [
    { year: "2015", text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
    { year: "2015", text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
    { year: "2015", text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
    { year: "2015", text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
    { year: "2015", text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
  ],
  keyEvent2: [
    { year: "2016", text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11' },
    { year: "2016", text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11' },
    { year: "2016", text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11' },
    { year: "2016", text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11' },
    { year: "2016", text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11' },
  ]
  ,
  keyEvent3: [
    { year: "2017", text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi' },
    { year: "2017", text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi' },
    { year: "2017", text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi' },
    { year: "2017", text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi' },
    { year: "2017", text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi' },
  ]
};

export const themes = (slideIndex: number) => {
  switch (slideIndex) {
    case 1:
      return 'Затмение'
    case 2:
      return 'Телескоп'
    case 3:
      return 'Тесла'
  }
}