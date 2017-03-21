webpackJsonp([1,2],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Slideshow__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Slideshow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Slideshow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Slide__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Slide___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Slide__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_widgets_Modal__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_widgets_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_widgets_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_widgets_CodeBlock__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_widgets_CodeBlock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_widgets_CodeBlock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_widgets_CodeComment__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_widgets_CodeComment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_widgets_CodeComment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_widgets_Toggle__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_widgets_Toggle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_widgets_Toggle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_AnimatedTransition__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_AnimatedTransition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_AnimatedTransition__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_widgets_RadioButton__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_widgets_RadioButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_widgets_RadioButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ImageSlide__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ImageSlide___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_ImageSlide__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_widgets_TriggeredMessage__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_widgets_TriggeredMessage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_widgets_TriggeredMessage__);











/* harmony default export */ __webpack_exports__["a"] = {
  slideshow: __WEBPACK_IMPORTED_MODULE_0__components_Slideshow___default.a,
  slide: __WEBPACK_IMPORTED_MODULE_1__components_Slide___default.a,
  install (Vue) {
    Vue.component('slideshow', __WEBPACK_IMPORTED_MODULE_0__components_Slideshow___default.a)
    Vue.component('slide', __WEBPACK_IMPORTED_MODULE_1__components_Slide___default.a)
    Vue.component('image-slide', __WEBPACK_IMPORTED_MODULE_8__components_ImageSlide___default.a)

    Vue.component('eg-modal', __WEBPACK_IMPORTED_MODULE_2__components_widgets_Modal___default.a)

    Vue.component('eg-transition', __WEBPACK_IMPORTED_MODULE_6__components_AnimatedTransition___default.a)
    Vue.component('eg-code-block', __WEBPACK_IMPORTED_MODULE_3__components_widgets_CodeBlock___default.a)
    Vue.component('eg-code-comment', __WEBPACK_IMPORTED_MODULE_4__components_widgets_CodeComment___default.a)
    Vue.component('eg-toggle', __WEBPACK_IMPORTED_MODULE_5__components_widgets_Toggle___default.a)
    Vue.component('eg-radio', __WEBPACK_IMPORTED_MODULE_7__components_widgets_RadioButton___default.a)
    Vue.component('eg-triggered-message', __WEBPACK_IMPORTED_MODULE_9__components_widgets_TriggeredMessage___default.a)
  }
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = {
  list: [__webpack_require__(383), __webpack_require__(376), __webpack_require__(114), __webpack_require__(377)]
};

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(187)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(132),
  /* template */
  __webpack_require__(408),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(421),
  /* template */
  __webpack_require__(414),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(183)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(120),
  /* template */
  __webpack_require__(399),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(180)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(121),
  /* template */
  __webpack_require__(395),
  /* scopeId */
  "data-v-0c9bb95d",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'app'
};

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slideshows_slideshows__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["default"] = {
  data: function data() {
    return {
      slideshows: __WEBPACK_IMPORTED_MODULE_0_slideshows_slideshows__["a" /* default */].list
    };
  },
  mounted: function mounted() {
    console.log(this.slideshows);
    document.currentSlide = {};
  },
  methods: {
    click: function click(evt) {
      evt.stopPropagation();
    }
  }
};

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eagle_js__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["default"] = {
  mixins: [__WEBPACK_IMPORTED_MODULE_0_eagle_js__["a" /* default */].slideshow],
  infos: {
    title: 'Demo recipes',
    description: 'Demos for Eagle recipes',
    path: 'demo-recipes'
  }
};

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eagle_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DemoSlideshow__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DemoSlideshow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__DemoSlideshow__);





var TransitionedSlide = {
  mixins: [__WEBPACK_IMPORTED_MODULE_0_eagle_js__["a" /* default */].slide],
  props: {
    enter: { default: 'slideInRight' },
    leave: { default: 'slideOutLeft' }
  }
};

/* harmony default export */ __webpack_exports__["default"] = {
  mixins: [__WEBPACK_IMPORTED_MODULE_0_eagle_js__["a" /* default */].slideshow],
  data: function data() {
    return {
      fullPageWidth: null,
      fullPageHeight: null,
      parentHeight: null,
      parentWidth: null
    };
  },
  infos: {
    title: 'Eagle recipes',
    description: 'For yummy presentations',
    path: 'eagle-recipes'
  },
  components: {
    'demo-slideshow': __WEBPACK_IMPORTED_MODULE_1__DemoSlideshow___default.a,
    'v-slide': TransitionedSlide
  }
};

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eagle_js__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["default"] = {
  mixins: [__WEBPACK_IMPORTED_MODULE_0_eagle_js__["a" /* default */].slideshow],
  infos: {
    title: 'Your First Slideshow',
    description: 'A boilerplate to get you started',
    path: 'your-first-slideshow'
  }
};

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eagle_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ExampleImageSlideshow__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ExampleImageSlideshow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ExampleImageSlideshow__);





/* harmony default export */ __webpack_exports__["default"] = {
  mixins: [__WEBPACK_IMPORTED_MODULE_0_eagle_js__["a" /* default */].slideshow],
  props: {
    preference: { default: 'baby bunnies' },
    username: { default: 'Tracy' }
  },
  data: function data() {
    return {
      preloadedImages: {
        hiThere: 'http://i.imgur.com/ZLT46UN.jpg',
        hopeyoulikeit: 'http://i.imgur.com/N06RFlq.jpg',
        seeAnything: 'http://i.imgur.com/5EuWG4w.jpg',
        OmgEmbedded: 'http://i.imgur.com/wucwFvf.jpg',
        reallyok: 'http://i.imgur.com/qVTNk3Q.jpg',
        thatall: 'http://i.imgur.com/AExXJwF.jpg',
        bunny1: 'http://i.imgur.com/1PL2k1H.jpg',
        bunny2: 'http://i.imgur.com/GfFUcPQ.jpg',
        bunny3: 'http://i.imgur.com/et8w8Rn.gif',
        kitty1: 'https://i.imgur.com/P7iyH.png',
        kitty2: 'http://i.imgur.com/sHOqlJc.jpg',
        kitty3: 'http://i.imgur.com/wiAwNQZ.gif',
        puppy1: 'http://i.imgur.com/Scj7lzM.jpg',
        puppy2: 'http://i.imgur.com/FyFhTEE.jpg',
        puppy3: 'http://i.imgur.com/G62BWuI.gif'
      }
    };
  },
  infos: {
    title: 'Deadpool',
    description: 'Demo embedded slideshow',
    path: 'deadpool'
  },
  components: {
    'example-image-slideshow': __WEBPACK_IMPORTED_MODULE_1__ExampleImageSlideshow___default.a
  }
};

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AwesomeEmbeddedSlideshow__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AwesomeEmbeddedSlideshow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__AwesomeEmbeddedSlideshow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_eagle_js__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    steps: { default: 14 },
    username: { default: 'Tracy' },
    preference: { default: 'baby bunnies' }
  },
  components: {
    'awesome-embedded-slideshow': __WEBPACK_IMPORTED_MODULE_0__AwesomeEmbeddedSlideshow___default.a
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_1_eagle_js__["a" /* default */].slide]
};

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);



/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    id: { default: function _default() {
        return Math.random().toString(36).substr(2, 10);
      } },
    width: { default: 400 },
    height: { default: 400 },
    data: { default: function _default() {
        return {};
      } },
    options: { default: function _default() {
        return {};
      } },
    type: { default: 'bar' }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  mounted: function mounted() {
    var canvas = document.getElementById(this.id);
    var ctx = canvas.getContext('2d');

    this.chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(ctx, {
      type: this.type,
      data: this.data,
      options: this.options
    });
  },
  watch: {
    data: {
      deep: true,
      handler: function handler(val) {
        console.log('data', val);
        console.log('chartdata', this.chart.data);
        for (var i = 0; i < val.datasets.length; i++) {
          this.chart.data.datasets[i].data = val.datasets[i].data;
        }
        this.chart.update();
      }
    }
  }
};

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eagle_js__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["default"] = {
  mixins: [__WEBPACK_IMPORTED_MODULE_0_eagle_js__["a" /* default */].slideshow],
  props: {
    preference: { default: 'funny kitties' }
  },
  data: function data() {
    var images = {
      'baby bunnies': ['http://i.imgur.com/1PL2k1H.jpg', 'http://i.imgur.com/GfFUcPQ.jpg', 'http://i.imgur.com/et8w8Rn.gif'],
      'funny kitties': ['https://i.imgur.com/P7iyH.png', 'http://i.imgur.com/sHOqlJc.jpg', 'http://i.imgur.com/wiAwNQZ.gif'],
      'fluffy puppies': ['http://i.imgur.com/Scj7lzM.jpg', 'http://i.imgur.com/FyFhTEE.jpg', 'http://i.imgur.com/G62BWuI.gif']
    };
    return {
      images: images,
      preloadedImages: images[this.preference]
    };
  }
};

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eagle_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Chart__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Chart__);




/* harmony default export */ __webpack_exports__["default"] = {
  components: { chart: __WEBPACK_IMPORTED_MODULE_1__Chart___default.a },
  props: {
    steps: { default: 5 }
  },
  data: function data() {
    return {
      figureOptions: {
        legend: {
          display: false
        },
        animation: {
          duration: 1000
        },
        scales: {
          yAxes: [{
            ticks: {
              fontFamily: 'Pompiere',
              fontSize: 20,
              callback: function callback(value) {
                console.log('cb', value);
                if (value % 10000) {
                  return null;
                } else if (value) {
                  return value / 1000 + 'k';
                } else {
                  return 0;
                }
              },
              min: 0,
              max: 99000
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              fontFamily: 'Pompiere',
              fontSize: 28
            }
          }]
        }
      }
    };
  },
  computed: {
    title: function title() {
      var line = 'Github stars of top slideshow frameworks - ';
      if (this.step <= 4) {
        return line + 'March 2017';
      } else {
        return line + 'March 2018 projections';
      }
    }
  },
  methods: {
    figureData: function figureData(step) {
      return {
        labels: ['Reveal.JS', 'Impress.JS', 'Shower.JS', 'Eagle.JS'],
        datasets: [{
          label: 'Stars',
          data: step === 4 ? [33000, 31000, 3500, 1] : [55000, 47000, 11500, 95000],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
          borderColor: ['rgba(255,99,132,1)', 'rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
          borderWidth: 1
        }]
      };
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0_eagle_js__["a" /* default */].slide]
};

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eagle_js__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["default"] = {
  mixins: [__WEBPACK_IMPORTED_MODULE_0_eagle_js__["a" /* default */].slideshow],
  infos: {
    title: 'Introducing Eagle.js',
    description: 'Watch this first if you are new to Eagle.js',
    path: 'introducing-eagle'
  },
  components: {
    'awesome-inserted-slide': __webpack_require__(379),
    'figures-slide': __webpack_require__(382),
    'end-credits': __webpack_require__(384),
    'themes-slideshow': __webpack_require__(114)
  },
  data: function data() {
    return {
      username: 'Tracy',
      preference: 'baby bunnies',
      preferences: [{
        label: 'baby bunnies',
        text: 'Baby bunnies'
      }, {
        label: 'fluffy puppies',
        text: 'Fluffy puppies'
      }, {
        label: 'funny kitties',
        text: 'Funny kitties'
      }],
      slideCategories: {
        themes: {
          show: true,
          name: 'Theming'
        },
        slideReuse: {
          show: true,
          name: 'Slide reuse'
        },
        interactivity: {
          show: true,
          name: 'Interactivity'
        }
      },
      preloadedImages: {
        computerKid: 'http://i.imgur.com/AAlntwU.gif',
        youRightNow: 'http://i.imgur.com/DFBTj0a.gif',
        bretagne: 'http://i.imgur.com/rYkJ6I8.jpg',
        forrestRoad: 'http://i.imgur.com/hxTMFZW.jpg',
        starrySky: 'http://i.imgur.com/yO2ivoD.jpg',
        cityBokeh: 'http://i.imgur.com/kmmHith.jpg',
        darkWoods: 'http://i.imgur.com/FL9mwpd.jpg'
      }
    };
  },
  methods: {
    message: function message(name) {
      return {
        'baby bunnies': 'Yeeeeah my favorite too !',
        'fluffy puppies': 'Wow so original.',
        'funny kitties': 'Good for you ' + this.username + '.',
        'Theming': 'Ok ' + this.username + ', whatever.',
        'Slide reuse': 'Seriously ' + this.username + ' you <em>want</em> to see this.',
        'Interactivity': 'Well that\'s this slide, ' + this.username + '. <br /> A bit too late to unsee it, heh ?'
      }[name];
    }
  }
};

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    username: { default: 'Tracy' }
  },
  data: function data() {
    return {
      categories: {
        'Crew': [{
          name: this.username,
          role: 'Internet Person'
        }, {
          name: 'Brent Rambo',
          role: 'as Computer Kid'
        }, {
          name: 'Deadpool',
          role: 'MC'
        }, {
          name: 'Zulko',
          role: 'Author'
        }],
        'Software': [{
          name: 'Vue.js',
          role: 'Front-end engine'
        }, {
          name: 'Eagle.js',
          role: 'Slideshow framework'
        }, {
          name: 'Animate.css',
          role: 'Transitions animations'
        }, {
          name: 'Hammer.js',
          role: 'Swipe events'
        }, {
          name: 'MoviePy',
          role: 'Gifs Editing'
        }, {
          name: 'Highlight.js',
          role: '(Bad) highlighting'
        }],
        'Assets': [{
          name: 'Irfan iLias',
          role: 'Background Pattern'
        }, {
          name: 'Karolina Lach',
          role: 'Pompiere Font'
        }, {
          name: 'Dario @linea.io',
          role: 'Icons'
        }, {
          name: 'Zulko',
          role: 'Computer Kid GIF'
        }, {
          name: 'Cem Sagisman @Unsplash',
          role: 'Beach photo'
        }, {
          name: 'Drew Collins @Unsplash',
          role: 'Forest Road Photo'
        }, {
          name: 'Jamie Street @Unsplash',
          role: 'Dark Woods Photo'
        }, {
          name: 'Gabriel Santiago @Unsplash',
          role: 'Bokeh City Lights Photo'
        }, {
          name: 'Greg Rakozy  @Unsplash',
          role: 'Starry Sky Photo'
        }]
      }
    };
  }
};

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eagle_js__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["default"] = {
  mixins: [__WEBPACK_IMPORTED_MODULE_0_eagle_js__["a" /* default */].slideshow],
  infos: {
    title: 'Themes Slideshows',
    description: 'You can change everything !',
    path: 'themes-slidehow'
  }
};

/***/ }),
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 180 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 181 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 182 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 183 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 184 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 185 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 186 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 187 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 188 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 189 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 190 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 191 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 192 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 193 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 194 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 6,
	"./af.js": 6,
	"./ar": 12,
	"./ar-dz": 7,
	"./ar-dz.js": 7,
	"./ar-ly": 8,
	"./ar-ly.js": 8,
	"./ar-ma": 9,
	"./ar-ma.js": 9,
	"./ar-sa": 10,
	"./ar-sa.js": 10,
	"./ar-tn": 11,
	"./ar-tn.js": 11,
	"./ar.js": 12,
	"./az": 13,
	"./az.js": 13,
	"./be": 14,
	"./be.js": 14,
	"./bg": 15,
	"./bg.js": 15,
	"./bn": 16,
	"./bn.js": 16,
	"./bo": 17,
	"./bo.js": 17,
	"./br": 18,
	"./br.js": 18,
	"./bs": 19,
	"./bs.js": 19,
	"./ca": 20,
	"./ca.js": 20,
	"./cs": 21,
	"./cs.js": 21,
	"./cv": 22,
	"./cv.js": 22,
	"./cy": 23,
	"./cy.js": 23,
	"./da": 24,
	"./da.js": 24,
	"./de": 26,
	"./de-at": 25,
	"./de-at.js": 25,
	"./de.js": 26,
	"./dv": 27,
	"./dv.js": 27,
	"./el": 28,
	"./el.js": 28,
	"./en-au": 29,
	"./en-au.js": 29,
	"./en-ca": 30,
	"./en-ca.js": 30,
	"./en-gb": 31,
	"./en-gb.js": 31,
	"./en-ie": 32,
	"./en-ie.js": 32,
	"./en-nz": 33,
	"./en-nz.js": 33,
	"./eo": 34,
	"./eo.js": 34,
	"./es": 36,
	"./es-do": 35,
	"./es-do.js": 35,
	"./es.js": 36,
	"./et": 37,
	"./et.js": 37,
	"./eu": 38,
	"./eu.js": 38,
	"./fa": 39,
	"./fa.js": 39,
	"./fi": 40,
	"./fi.js": 40,
	"./fo": 41,
	"./fo.js": 41,
	"./fr": 44,
	"./fr-ca": 42,
	"./fr-ca.js": 42,
	"./fr-ch": 43,
	"./fr-ch.js": 43,
	"./fr.js": 44,
	"./fy": 45,
	"./fy.js": 45,
	"./gd": 46,
	"./gd.js": 46,
	"./gl": 47,
	"./gl.js": 47,
	"./he": 48,
	"./he.js": 48,
	"./hi": 49,
	"./hi.js": 49,
	"./hr": 50,
	"./hr.js": 50,
	"./hu": 51,
	"./hu.js": 51,
	"./hy-am": 52,
	"./hy-am.js": 52,
	"./id": 53,
	"./id.js": 53,
	"./is": 54,
	"./is.js": 54,
	"./it": 55,
	"./it.js": 55,
	"./ja": 56,
	"./ja.js": 56,
	"./jv": 57,
	"./jv.js": 57,
	"./ka": 58,
	"./ka.js": 58,
	"./kk": 59,
	"./kk.js": 59,
	"./km": 60,
	"./km.js": 60,
	"./ko": 61,
	"./ko.js": 61,
	"./ky": 62,
	"./ky.js": 62,
	"./lb": 63,
	"./lb.js": 63,
	"./lo": 64,
	"./lo.js": 64,
	"./lt": 65,
	"./lt.js": 65,
	"./lv": 66,
	"./lv.js": 66,
	"./me": 67,
	"./me.js": 67,
	"./mi": 68,
	"./mi.js": 68,
	"./mk": 69,
	"./mk.js": 69,
	"./ml": 70,
	"./ml.js": 70,
	"./mr": 71,
	"./mr.js": 71,
	"./ms": 73,
	"./ms-my": 72,
	"./ms-my.js": 72,
	"./ms.js": 73,
	"./my": 74,
	"./my.js": 74,
	"./nb": 75,
	"./nb.js": 75,
	"./ne": 76,
	"./ne.js": 76,
	"./nl": 78,
	"./nl-be": 77,
	"./nl-be.js": 77,
	"./nl.js": 78,
	"./nn": 79,
	"./nn.js": 79,
	"./pa-in": 80,
	"./pa-in.js": 80,
	"./pl": 81,
	"./pl.js": 81,
	"./pt": 83,
	"./pt-br": 82,
	"./pt-br.js": 82,
	"./pt.js": 83,
	"./ro": 84,
	"./ro.js": 84,
	"./ru": 85,
	"./ru.js": 85,
	"./se": 86,
	"./se.js": 86,
	"./si": 87,
	"./si.js": 87,
	"./sk": 88,
	"./sk.js": 88,
	"./sl": 89,
	"./sl.js": 89,
	"./sq": 90,
	"./sq.js": 90,
	"./sr": 92,
	"./sr-cyrl": 91,
	"./sr-cyrl.js": 91,
	"./sr.js": 92,
	"./ss": 93,
	"./ss.js": 93,
	"./sv": 94,
	"./sv.js": 94,
	"./sw": 95,
	"./sw.js": 95,
	"./ta": 96,
	"./ta.js": 96,
	"./te": 97,
	"./te.js": 97,
	"./tet": 98,
	"./tet.js": 98,
	"./th": 99,
	"./th.js": 99,
	"./tl-ph": 100,
	"./tl-ph.js": 100,
	"./tlh": 101,
	"./tlh.js": 101,
	"./tr": 102,
	"./tr.js": 102,
	"./tzl": 103,
	"./tzl.js": 103,
	"./tzm": 105,
	"./tzm-latn": 104,
	"./tzm-latn.js": 104,
	"./tzm.js": 105,
	"./uk": 106,
	"./uk.js": 106,
	"./uz": 107,
	"./uz.js": 107,
	"./vi": 108,
	"./vi.js": 108,
	"./x-pseudo": 109,
	"./x-pseudo.js": 109,
	"./yo": 110,
	"./yo.js": 110,
	"./zh-cn": 111,
	"./zh-cn.js": 111,
	"./zh-hk": 112,
	"./zh-hk.js": 112,
	"./zh-tw": 113,
	"./zh-tw.js": 113
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 366;


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/eagle-jam.1e7bc27.png";

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/controlsNext.30dfd83.svg";

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/controlsPrev.2870b27.svg";

/***/ }),
/* 370 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxyZWN0IHg9IjEiIHk9IjEwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB3aWR0aD0iNjIiIGhlaWdodD0iNDEiLz4NCgk8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMjIiIHkxPSI2MyIgeDI9IjQyIiB5Mj0iNjMiLz4NCgk8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMzIiIHkxPSI2MyIgeDI9IjMyIiB5Mj0iNTEiLz4NCjwvZz4NCjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSIxIiB5MT0iNDMiIHgyPSI2NCIgeTI9IjQzIi8+DQo8L3N2Zz4NCg=="

/***/ }),
/* 371 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSIxMiIgeTE9IjE5IiB4Mj0iMTIiIHkyPSI2NCIvPg0KPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjUyIiB5MT0iMCIgeDI9IjUyIiB5Mj0iNDUiLz4NCjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSIzMiIgeTE9IjM4IiB4Mj0iMzIiIHkyPSI2NCIvPg0KPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjMyIiB5MT0iMCIgeDI9IjMyIiB5Mj0iMjYiLz4NCjxjaXJjbGUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3g9IjEyIiBjeT0iMTMiIHI9IjYiLz4NCjxjaXJjbGUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3g9IjUyIiBjeT0iNTEiIHI9IjYiLz4NCjxjaXJjbGUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3g9IjMyIiBjeT0iMzIiIHI9IjYiLz4NCjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSIxMiIgeTE9IjAiIHgyPSIxMiIgeTI9IjciLz4NCjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSI1MiIgeTE9IjU3IiB4Mj0iNTIiIHkyPSI2NCIvPg0KPC9zdmc+DQo="

/***/ }),
/* 372 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49ImJldmVsIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50cz0iMSwzMCA2MywxIDIzLDQxIA0KCSIvPg0KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0iYmV2ZWwiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIzNCw2MyA2MywxIDIzLDQxIA0KCSIvPg0KPC9zdmc+DQo="

/***/ }),
/* 373 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3g9IjUxIiBjeT0iMTMiIHI9IjEyIi8+DQo8Y2lyY2xlIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSIxMSIgY3k9IjQyIiByPSIxMCIvPg0KPGNpcmNsZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBjeD0iNDgiIGN5PSI1NSIgcj0iOCIvPg0KPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjQwIiB5MT0iNTQiIHgyPSIyMCIgeTI9IjQ2Ii8+DQo8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMTkiIHkxPSIzNSIgeDI9IjQxIiB5Mj0iMjEiLz4NCjwvc3ZnPg0K"

/***/ }),
/* 374 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjcuNW1tIiB3aWR0aD0iMzVtbSIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHZpZXdCb3g9IjAgMCAxMjMuOTcxNDEgOTcuNTg4NDM4Ij4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjQgLTI4NSkiPgogIDxwYXRoIGQ9Im0zODQgMzMyYy0yNi43LTMyLjEtNjguMS01OS4yLTEwMy0zMi40LTI2LjcgMjQuNC0xMy4xIDY4LjkgMTYuMSA3Ny41IDQwLjcgMTAgNjUuNS0xOC4yIDg2LjUtNDUuMXoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzI3MjIwMCIvPgogIDxlbGxpcHNlIHJ4PSIzOC45IiByeT0iMzcuNCIgY3k9IjMzNiIgY3g9IjMyMCIgZmlsbD0iI2Y2ZmIwNSIvPgogIDxlbGxpcHNlIHJ4PSIxNC45IiByeT0iMTUuNyIgY3k9IjMzNyIgY3g9IjMyMSIvPgogIDxlbGxpcHNlIGZpbGwtb3BhY2l0eT0iLjMwNCIgcng9IjQ1LjQiIHJ5PSIxOC4yIiB0cmFuc2Zvcm09Im1hdHJpeCguOTc2IC4yMTcgLS4zMTMgLjk1MCAwIDApIiBjeT0iMjM5IiBjeD0iNDA5Ii8+CiAgPGVsbGlwc2UgZmlsbC1vcGFjaXR5PSIuOTY4IiByeD0iMy4xNSIgcnk9IjMuNDMiIGN5PSIzMjgiIGN4PSIzMjciIGZpbGw9IiNmZmYiLz4KIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(188)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(411),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(186)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(123),
  /* template */
  __webpack_require__(407),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(189)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(415),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(182)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(397),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(184)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(126),
  /* template */
  __webpack_require__(403),
  /* scopeId */
  "data-v-53f4edce",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(127),
  /* template */
  __webpack_require__(409),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(128),
  /* template */
  __webpack_require__(412),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(179)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(129),
  /* template */
  __webpack_require__(394),
  /* scopeId */
  "data-v-07dad4da",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(185)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(130),
  /* template */
  __webpack_require__(405),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(181)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(131),
  /* template */
  __webpack_require__(396),
  /* scopeId */
  "data-v-0ed71760",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(419),
  /* template */
  __webpack_require__(404),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(420),
  /* template */
  __webpack_require__(400),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(422),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(191)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(423),
  /* template */
  __webpack_require__(401),
  /* scopeId */
  "data-v-2a5f5ede",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(194)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(424),
  /* template */
  __webpack_require__(413),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(193)

var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(410),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(192)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(425),
  /* template */
  __webpack_require__(402),
  /* scopeId */
  "data-v-4aa8896a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(190)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(426),
  /* template */
  __webpack_require__(398),
  /* scopeId */
  "data-v-1e6367f4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(427),
  /* template */
  __webpack_require__(406),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 394 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('eg-transition', {
    attrs: {
      "enter": _vm.enter,
      "leave": _vm.leave
    }
  }, [(_vm.active) ? _c('div', {
    staticClass: "eg-slide"
  }, [_c('div', {
    staticClass: "eg-slide-content"
  }, [_c('h3', [_vm._v("Secret Slide !")]), _c('eg-transition', {
    attrs: {
      "leave": "fadeOutLeft",
      "enter": "fadeIn"
    }
  }, [(_vm.step <= 3) ? _c('div', {
    staticClass: "subslide"
  }, [_c('p', [_vm._v("Congratulations ! By switching off the totality of this slideshow you\nunlocked the "), _c('b', [_vm._v("secret slide")]), _vm._v(".")]), _c('p', [_vm._v("Wanna know Eagle's secret ? It rocks at animating SVG!\nBelow is a single SVG animated by inserting CSS and "), _c('b', [_vm._v("v-if")]), _vm._v(" directives.")]), _c('div', {
    staticClass: "center included-svg"
  }, [_c('svg', {
    attrs: {
      "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      "xmlns": "http://www.w3.org/2000/svg",
      "height": "100%",
      "width": "100%",
      "version": "1.1",
      "xmlns:cc": "http://creativecommons.org/ns#",
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",
      "viewBox": "0 0 495.84612 150.05135"
    }
  }, [_c('defs', [_c('marker', {
    attrs: {
      "id": "Arrow1Mend",
      "refY": "0",
      "refX": "0",
      "overflow": "visible",
      "orient": "auto"
    }
  }, [_c('path', {
    attrs: {
      "d": "m0 0 5-5-17.5 5 17.5 5-5-5z",
      "fill-rule": "evenodd",
      "transform": "matrix(-.4 0 0 -.4 -4 0)",
      "stroke": "#000",
      "stroke-width": "1pt"
    }
  })]), _vm._v(" "), _c('marker', {
    attrs: {
      "id": "Arrow1Mend-5",
      "refY": "0",
      "refX": "0",
      "overflow": "visible",
      "orient": "auto"
    }
  }, [_c('path', {
    attrs: {
      "d": "m0 0 5-5-17.5 5 17.5 5-5-5z",
      "fill-rule": "evenodd",
      "transform": "matrix(-.4 0 0 -.4 -4 0)",
      "stroke": "#000",
      "stroke-width": "1pt"
    }
  })])]), _vm._v(" "), _c('g', {
    attrs: {
      "transform": "translate(20.7 -3.73)"
    }
  }, [(_vm.step >= 1) ? _c('g', {
    attrs: {
      "transform": "matrix(1.76 0 0 1.76 10.3 -8.23)"
    }
  }, [_c('g', {
    attrs: {
      "transform": "matrix(.599 0 0 .599 -220 72.8)"
    }
  }, [_c('circle', {
    attrs: {
      "stroke-width": "2.41",
      "fill-opacity": ".415",
      "stroke-linecap": "round",
      "cy": "-62.2",
      "stroke": "#000",
      "cx": "398",
      "r": "40.1",
      "fill": "#ff8103"
    }
  }), _vm._v(" "), _c('g', {
    class: {
      'svg-bounce': _vm.step === 1
    },
    attrs: {
      "transform": "matrix(.179 0 0 .179 363 -97.2)"
    }
  }, [_c('path', {
    attrs: {
      "d": "m163 27.8-134 137c-45.6 57 30.7 50 63.4 66 11.6 12-45 21-33.2 33 11.7 12 70.9 23.1 82.7 35.1 11.7 12-24 24.7-12.3 36.7s38.9.63 43.9 28.3c3.62 19.8 48.9 8.5 71-7.7 11.7-12-22.4-10.9-10.7-22.9 29.2-29.8 56.3-10.8 66.3-40.7 4.93-14.8-42.9-22.8-31.2-34.8 33.8-19.7 150-32.5 95-87.9l-138-142c-17-16.4-45.4-16.5-61.6 0zm154 265c0 6.82 50.2 11.3 50.2-1.61-7.16-20.7-44.3-19.3-50.2 1.61zm-226 36c11.9 10.3 30.3-2.56 35.8-16.9-11.5-15.3-54.7.55-35.8 16.9zm220-22.2c-15.3 13.8 1.72 27.7 16.8 18.8 3.37-3.42-.09-15.4-16.8-18.8z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": "#fff",
      "d": "m131 239c3.59 2.23 57.9 13.3 71.2 15.5 4.6.97 1.34 5.71-5 8.91-14.3 3.8-83.7-24.4-66.2-24.4z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": "#fff",
      "d": "m217 37.5 53.2 54c5.04 5.15 4.97 15.1 2.15 18l-26.4-21.1-5.19 31.3-22-11.6-35.3 22.3-11.7-47-19 32.8h-29c-11.8 0-13.2-15-2.47-25.7 18.8-20.2 40.3-40.9 52-52.8 11.8-12 32.2-11.7 43.8 0z"
    }
  })])]), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m-7.01 65.3q.418.0868.418.623-.138 1.01-.842 1.01-4.62 0-4.62 1.24l-.0816.699v.388q3.01-.699 4.12-.699h.168q.418.173.418.776 0 .852-1.17.852-3.87.485-3.87 1.16l-.0816.776v.311q0 .699.924.776 1.44-.153 3.61-.699h.250q.337.128.337.546v.230q0 .954-4.2 1.47h-.255q-1.52 0-1.68-1.86 0-1.37.587-5.19l-.168-.464q0-1.58 5.05-1.86l1.09-.0765z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m-3.87 66.6h.311q2.22 0 2.72 1.76l.0612.561q0 3.51-5.19 5.78l-.306.0714h-.0663q-.138 0-.245-.495l.617-6.06q-.372 0-.372-.209v-.143q0-1.12.990-1.12l1.48-.143zm-1.23 1.48q-.556 3.61-.556 4.86v.352q3.89-1.94 3.89-3.66v-.0663q0-.990-.556-.990-.689-.490-2.22-.490h-.556z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m.870 66.6h.480q.240 0 .240.281-.561 4.58-.561 6.36v.776q-.158.776-.796.776h-.158l-.321-.281q.321-4.81.801-7.63l.316-.281z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m7.73 66.6q.663 0 .663.551v.138q0 .760-1.18.760l-1.47.072q-.663 3.54-.663 6.08-.179.552-.367.552h-.225q-.383 0-.444-.209.372-3.91.811-6.36l-2.21.347q-.311 0-.367-.623 0-1.04 1.85-1.04 1.11-.276 3.62-.276z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m15.7 66.6h.245q.505 0 1.28 4.67.612 2.2.612 3-.128.418-.490.418-.469 0-.674-2.23l-.0612-.0663h-.0612q-.796.0102-3.36.975-.245 1.39-.796 1.39-.367-.143-.367-.556 0-.806 3.36-7.39l.306-.209zm-.122 1.95q-.735 1.33-1.35 2.79h.429q.623 0 1.59-.281l-.551-2.51h-.122z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m19.5 66.6q.464 0 1.11 1.75 1.26 2.57 2.79 4.4.515-5.04.765-5.93l.281-.209h.209q.209 0 .209.281-.628 7.19-.765 7.68l-.418.138q-1.12 0-3.77-4.75l-.281-.281-.0714.209-.209 3.21v.418l.0714.418q-.0918.837-.556.837-.429-.153-.490-.418.536-7.54.765-7.54l.352-.209z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m35.1 65.3h.138q.888.0970.888.796v.158q0 1.19-.888 2.22h-.138q-.138-.0357-.270-.398l.342-1.19-.276-.163q-.944.0765-3.49 1.91v.0816l4.52.796q.684.495.684 1.67v.475q0 1.6-2.26 2.79-.888.316-1.71.316h-.138q-2.36 0-2.87-1.91v-.475q0-.878.480-.878.469 1.51 1.71 1.51 0 .158 1.03.158 1.52 0 2.94-1.43 0-.944-4.38-1.19-1.57-.403-1.57-1.19 0-1.94 4.24-3.9l1.03-.158z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m43.6 65.3h.240q.311.133.311.566 0 .592-2.43 5.09-1.19 3.38-1.49 3.64l-.786.163q-.510 0-.704-1.86-1.57-5.61-1.57-6.87.128-.367.469-.566h.316q.424 0 .862 3.39l.939 3.56h.0765q.811-2.18 3.53-6.95l.235-.163z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m50.4 65.3h.0765q.944 0 1.27 1.54l-.148.163h-.0765l-.597-.163q-2.45.301-5.14 2.83-.745 1.1-.745 1.54v.321q0 1.3 3.2 1.62 2.01 0 3.05-1.78l-.893-.321q-.495 0-2.76.970-.224-.414-.224-.807v-.0816q0-1.29 2.98-1.78h.148q1.71 0 1.71 1.86 0 1.92-3.8 3.39l-.898.164q-2.41 0-3.28-1.7l-.148-1.05q0-3.66 4.54-6.23 1.14-.485 1.71-.485z"
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.step >= 2) ? _c('g', {
    attrs: {
      "transform": "matrix(1.76 0 0 1.76 10.3 -8.23)"
    }
  }, [_c('path', {
    attrs: {
      "marker-end": "url(#Arrow1Mend)",
      "d": "m37.8 48.9s7.4 7.83 30.5 8.04c17.4.163 24.9-4.38 34.4-8.36",
      "stroke": "#000",
      "stroke-dasharray": "3.59190632, 0.89797658",
      "stroke-width": ".898",
      "fill": "none"
    }
  }), _vm._v(" "), _c('g', {
    attrs: {
      "transform": "matrix(.599 0 0 .599 -222 72.5)"
    }
  }, [_c('circle', {
    attrs: {
      "r": "40.1",
      "fill-opacity": ".415",
      "stroke-linecap": "round",
      "stroke": "#000",
      "cy": "-61.7",
      "cx": "577",
      "stroke-width": "2.41",
      "fill": "#ff8103"
    }
  }), _vm._v(" "), _c('g', {
    class: {
      'svg-pulse': _vm.step === 2
    },
    attrs: {
      "transform": "matrix(.0995 0 0 .0995 393 -177)"
    }
  }, [_c('g', {
    attrs: {
      "transform": "matrix(1.26 0 0 1.26 -617 1.22e3)"
    }
  }, [_c('path', {
    attrs: {
      "d": "m1.77e3-104v-57.1h187 187v57.1 57.1h-187-187v-57.1z",
      "fill": "#fdfdfc"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m1.91e3 120c-3.13-.715-12.9-2.62-21.8-4.23-20.5-3.73-29.2-5.94-39.8-10.1-12.8-5.05-21-10.2-29-18.2-8.62-8.6-13.1-17-15.9-30.1-2.21-10.2-3.69-13.3-11.1-23.6-8.39-11.6-13.3-19.6-14.5-23.2-1.85-5.92-4.91-19.8-4.91-22.3 0-3.88-1.58-2.77-2.77 1.94-1.52 6.03-4.64 8.94-9.6 8.94-3.53 0-4.45-.548-9.21-5.45-4.62-4.76-6.88-8.7-17.8-31.1l-12.5-25.6-10.3-9.46c-5.68-5.2-14.7-13.7-20-18.9-11.7-11.4-12.1-12.9-5.73-21.3 12.9-17.1 48.9-53.6 67.6-68.7 5.74-4.61 13.6-10.3 17.5-12.6 16.8-9.94 43.8-17.5 67.4-19 7.75-.490 9.54-.321 12 1.13 2.82 1.66 3.18 1.64 14.6-.799 22.5-4.81 39.1-6.71 72.9-8.32 42.2-2.01 90.7.574 120 6.4 4.17.830 13.6 1.63 20.9 1.78 19.2.391 37.7 4.27 57.2 12 17.7 7.06 35 20.3 63.3 48.7 17.9 17.9 32.3 34 38 42.6 3.25 4.9 3.33 5.22 1.96 7.86-.784 1.52-6.9 7.83-13.6 14-28.6 26.5-25.5 22.4-39.1 50.3-10.7 21.8-12.7 25.4-17.7 30.6-5.16 5.41-6 5.93-9.59 5.93-3.37 0-4.34-.493-6.78-3.45l-2.85-3.45-.609 3.69c-1.59 9.64-4.39 16.4-10.4 25.1-3.38 4.91-8.08 11.8-10.4 15.2-2.84 4.14-4.79 8.33-5.75 12.3-3.76 15.7-7.03 23.4-14.4 33.8-10.6 15-31.7 26-61.2 31.9-35 7.04-37.3 7.23-85.9 7.14-34-.0608-45.8-.385-50.1-1.38zm-54.6-212c1.47-.758 3.19-2.65 3.84-4.21 3.79-9.16-7.26-16.7-14.3-9.67-4.42 4.42-3.6 10.9 1.76 13.8 3.3 1.79 5.35 1.82 8.66.101zm221-.0902c5.26-2.72 6.18-9.48 1.88-13.8-7.35-7.35-19 1.32-13.9 10.4 1.4 2.52 4.89 4.76 7.5 4.81.939.0185 2.98-.627 4.55-1.43z",
      "fill": "#edcaa2"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m1.92e3 121c-2.66-.366-9.49-1.77-15.2-3.13-5.69-1.35-16.2-3.56-23.5-4.91-19.6-3.66-36-10.1-48.7-19.1-12-8.52-19.4-20.1-23-36.2-2.43-10.8-4.56-15.1-13.9-27.7-4.02-5.48-8.51-12.5-9.97-15.7-2.45-5.26-6.34-20.8-6.86-27.5-.343-4.34-1.8-3.09-3.73 3.21-3.52 11.5-10 12.6-18.7 3.24-4.24-4.56-7.29-9.9-17.8-31.1l-12.7-25.6-18.1-16.6c-19.3-17.7-21.7-20.4-21.7-23.9.015-8.35 54.4-64.5 81.1-83.8 17.4-12.5 45.2-21.9 71.4-24 10.6-.853 15.3-.339 16.6 1.83.759 1.2-.317 3.09-5.13 9.01-14.3 17.6-36.4 49.8-42.6 62-3.48 6.91-6.64 15.9-6.64 18.9 0 2.03 9.78-7.71 14.2-14.1 1.97-2.87 5.15-8.34 7.07-12.2 1.98-3.93 3.99-6.78 4.63-6.57 1.48.488 1.98 8.25.795 12.5-.559 2.02-.576 3.34-.043 3.34.484 0 5.25-1.03 10.6-2.28 14.9-3.51 23.8-4.64 36.8-4.68 10.8-.0353 12.4.183 16.6 2.28 7.53 3.73 7.89 5.23 4.39 18-5.46 20-6.19 32.7-2.09 36.4 1.44 1.3 2.73 1.51 6.21.987 3.88-.582 4.35-.464 4.06 1.03-.178.926-4.38 4.81-9.33 8.62-4.95 3.82-9.86 7.94-10.9 9.17-1.04 1.22-5.33 5.16-9.53 8.76-15.1 13-22.5 19.9-27.1 25.7-5.26 6.64-6.13 6.9-15.1 4.52-15.4-4.1-29-14.8-35.1-27.8l-3.27-6.89-.636 3.57c-.350 1.96-.938 7.47-1.31 12.2l-.670 8.65 3.77 5.1c10.5 14.2 22.3 19.7 39.8 18.5 10-.704 11.4.282 4.71 3.26-7.2 3.19-17.2 4.24-25.8 2.73-6.37-1.12-8.05-1.84-11.3-4.82-2.1-1.92-5.52-6.73-7.59-10.7-2.07-3.95-4.01-7.18-4.3-7.19-.294-.0057-1.17 5.39-1.95 12-2.62 22.3.412 32.3 13.2 43.8 9.02 8.12 17.2 13.9 24.4 17.2 10.4 4.76 9.37 5.78 10.7-10.2 1.38-16.7 3.89-29.6 7.14-36.7 4.53-9.89 15.9-25.3 26.2-35.6 8.39-8.39 11.2-10.6 17.6-13.6 13.8-6.56 28-15.1 35.9-21.7 15.3-12.8 25.3-18.3 37.5-20.7 15.6-3.06 29.5 2.4 48 18.7 7.52 6.66 14.3 11.2 33.3 22.2 16.4 9.49 29.2 23.2 42.7 45.4 6.28 10.3 8.34 17.3 9.92 33.7.603 6.22 1.31 13.6 1.57 16.3.336 3.51.885 4.98 1.86 4.98 2.48 0 13-5.78 19.8-10.9 20.7-15.5 25.1-23.7 25.2-46.9.037-11.4-3.83-51.3-4.97-51.3-.414 0-.752.583-.752 1.3 0 .712-1.57 4.45-3.48 8.3-4.6 9.26-12.9 17.5-22.3 22.1-7.94 3.9-18.6 6.78-21.8 5.91-1.21-.322-3.7-2.73-5.52-5.36-1.83-2.63-10.3-11.1-18.7-18.7-13.7-12.4-19-17-34.1-29.3-5.56-4.53-5.39-6.28.516-5.5 3.51.466 4.83.264 5.79-.889 3.56-4.29 3.05-16.6-1.38-32.9-3.79-14-3.9-16.1-1.01-19 4.63-4.63 15.5-6.23 31.9-4.67 9.23.876 29.4 4.67 33.8 6.36 1.05.404 1.17-.390.625-4.1-2.05-13.9.160-14.7 6.83-2.62 6.01 10.9 6.9 12.1 11.7 15.5 2.16 1.56 5.54 4.96 7.5 7.54 1.97 2.58 3.86 4.72 4.2 4.75 1.53.134-2.59-13.6-6.47-21.5-8.41-17.2-33-51.8-45.3-63.6-10.2-9.89-9.92-10.8 3.79-10.7 16 .098 37.6 4.72 55.4 11.8 17.9 7.17 32.6 18.2 59.6 44.7 24.8 24.3 44.7 47.5 44.7 52 0 2.22-9.1 11.6-29.6 30.4l-11.1 10.2-12.7 25.8c-15.9 32.1-21 38.4-29.6 36.3-2.04-.512-5.24-4.3-6.48-7.67-.683-1.86-1.47.161-2.98 7.62-2.05 10.1-5.36 16.8-14.7 29.9-8.97 12.5-10.8 16.1-12.7 25.2-4.88 23-18 39.2-39.8 49.2-9.54 4.38-23 8.48-35.7 10.9-6 1.14-16.2 3.17-22.8 4.51-11.7 2.41-12.5 2.45-56.4 2.6-24.5.0859-46.8-.143-49.4-.509zm-57.2-214c4.16-4.16 3.42-11.8-1.36-14.1-4.03-1.92-5.51-2.05-8.65-.735-3.87 1.62-5.24 3.95-5.24 8.94 0 3.05.560 4.24 2.92 6.23 4.08 3.44 8.7 3.32 12.3-.317zm221 0c2.99-2.99 3.73-7.9 1.75-11.6-2.66-4.97-12.3-5.19-15.5-.347-4.03 6.15.336 14.7 7.49 14.7 2.57 0 4.19-.720 6.24-2.77zm17.3 83.9c-6.56-1.43-10.9-3.25-11.4-4.82-.232-.714 3.15-1.01 10.8-.949 10.8.0856 11.4-.0183 17.5-3.02 7.02-3.45 14-10.3 17.9-17.6 4.03-7.59 6.37-4.6 3.27 4.18-2.4 6.81-6.98 13-13 17.6-8.4 6.39-13 7.23-25.1 4.61zm-190-85.6c-1.67-2.71 9.91-12.9 21.3-18.8 11.9-6.12 25.1-9.64 36.1-9.61 11.6.0362 27.3 5.15 41.2 13.4 8.91 5.31 18.6 13.4 17.5 14.6-.387.399-5.94-1.86-12.3-5.03-37-18.3-62.8-17.4-98.1 3.56-3.36 1.99-5.11 2.57-5.57 1.83zm88.2-29.7c-15.8-10.1-41-13.6-58.4-8.17-6.5 2.02-12.7 5.53-15.9 8.96-1.27 1.36-3.34 2.46-4.64 2.46-2.31 0-2.33-.0772-1.56-5.45.431-3 .811-8.73.844-12.7.054-6.46-0.2-7.55-2.26-9.74-3.84-4.09-12.9-6.31-28.5-7.02-8.12-.368-13.8-1.01-13.8-1.57 0-2.73 24.9-4.35 34.8-2.25 12.1 2.57 19.7 10.4 19.7 20.3 0 2.9.263 3.35 1.66 2.8 13-5.13 19.1-6.49 31.1-6.92 14-.508 23.3 1.22 34.4 6.43 3.34 1.56 6.23 2.84 6.44 2.84.202 0 .372-1.39.377-3.08.012-3.82 3.72-11.9 6.74-14.6 4.95-4.55 12.7-7.12 23-7.59 9.91-.461 16.8.416 17.4 2.21.216.649-2.84 1.22-8.47 1.57-19 1.19-26.2 7.44-29.7 25.8-2.24 11.7-3.36 12.2-13.3 5.82zm-60.2-27.6c0-1.8 3.41-6.45 7.11-9.71 6.27-5.52 12.1-8.06 19.7-8.54 5.93-.378 7.04-.131 13.3 2.97 8.09 4.02 18.8 13.9 15.1 13.9-.420 0-2.87-1.35-5.45-2.99-13.7-8.75-27.5-8.4-41.7 1.07-5.2 3.48-8.06 4.65-8.06 3.29z",
      "fill": "#e6c39c"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m1.92e3 121c-3.13-.374-9.96-1.75-15.2-3.06-5.22-1.31-15.6-3.49-23-4.84-14.3-2.6-27-6.72-38.3-12.4-9.27-4.65-13.7-7.86-19.9-14.4-8.34-8.78-11.9-15.9-14.7-29.3-1.8-8.63-5.52-16-13.3-26.5-7.8-10.5-11.3-16.4-12.6-21.1-2.46-9.11-4.82-20.3-4.82-22.9 0-5.28-1.78-4.03-3.77 2.65-3.88 13-10.7 13.9-20.3 2.64-3.03-3.55-8.02-12.6-16.6-30.1l-12.2-25.1-13.2-12c-21.5-19.6-26.9-25.2-26.9-28 0-2.69 4.47-9.12 13.7-19.7 25.3-29 56.9-58.3 74.7-69.3 17.5-10.8 51.6-19.9 71.9-19.2 10.2.356 10.6 1.39 3.56 9.54-13.2 15.2-36.7 49.1-43.6 63-4.16 8.3-8.19 21.6-6.94 22.8 1.36 1.36 16.2-15.6 20.5-23.4 2.34-4.27 4.75-8.49 5.36-9.39 2.01-2.97 2.6-.250 1.43 6.59-.636 3.71-1 6.9-.817 7.09.187.187 4.6-.714 9.81-2 14.7-3.65 26.4-5.24 38.3-5.24 12 .002 17.4 1.06 20.6 4.04 2.8 2.58 2.7 4.67-.836 18.2-2.34 9-2.99 13.5-3.08 21.5-.136 11.9.956 14.1 7.15 14.1 2.01 0 3.65.402 3.65.893s-2.67 2.89-5.93 5.34c-3.26 2.44-8.29 6.84-11.2 9.78-6.55 6.67-25.8 23.7-29.4 26-1.47.939-5.07 4.67-8 8.3s-5.81 6.59-6.41 6.59c-3.28 0-14.4-3.52-20.1-6.36-11.5-5.75-21.1-16.7-24.7-28.2-.921-2.93-2-5.12-2.41-4.87-.655.405-2.23 12.5-3.34 25.6-.220 2.61-1.29 11.3-2.38 19.3-2.33 17.2-1.69 25.6 2.6 34.3 4.63 9.34 21 23.4 35.3 30.3 4.41 2.13 8.75 3.87 9.65 3.87 1.72 0 1.86-.857 3.22-19.4.826-11.3 3.99-25.8 7.1-32.5 3.4-7.33 12.3-20.4 19.6-28.9 8.13-9.39 15.1-14.8 26.1-20.4 16-8.14 25.5-14 33.5-20.7 20.2-16.8 34.9-22.8 50.2-20.4 11 1.76 18.5 5.96 33.6 18.9 5.67 4.85 15 11.2 26 17.8 13.2 7.8 19 11.9 24.7 17.4 13 12.4 28.7 35.5 31.5 46.2 2.05 8.03 4.26 24.5 4.28 31.9.01 3.48.276 7 .593 7.83 1.81 4.71 16.3-2.72 32.7-16.8 12.7-10.9 16.4-20.3 16.3-41.9-.042-10.3-2.51-38-4.63-51.9-.680-4.47-1.72-3.89-3.14 1.76-3.23 12.8-13.7 25.4-25.8 31.2-7.9 3.73-18 6.57-20.5 5.74-.904-.309-3.78-3.37-6.39-6.81s-5.97-7.01-7.47-7.95c-3.52-2.21-23-19.6-25.4-22.7-1.01-1.3-5.94-5.57-11-9.49-5.01-3.91-9.29-7.65-9.51-8.3-.270-.818.803-1.19 3.46-1.19 2.95 0 4.18-.501 5.25-2.13 3.52-5.38 2.74-17-2.47-37-2.74-10.5-2.82-11.3-1.37-13.5 4.48-6.84 32.7-7.11 58.3-.553 4.15 1.06 7.99 1.92 8.55 1.92.685 0 .820-2.32.414-7.11-.339-4.01-.230-7.11.249-7.11.468.002 2.53 3.31 4.58 7.35 2.85 5.62 5.67 9.24 12 15.4 4.53 4.43 9.18 9.45 10.3 11.1 4.16 6.12 4.94 3.07 2.06-8.01-2.5-9.63-7.54-19.3-19.2-36.9-12.2-18.3-22.7-31.6-32.5-41.1-9.81-9.46-9.33-10 7.46-9.3 14.3.636 26.9 3.07 42.3 8.22 20.2 6.73 30.9 13.4 52.7 32.6 25.3 22.3 61 61.7 61 67.3 0 2.32-3.78 6.28-23 24.1l-18 16.7-11.7 24c-11.7 24.2-17.5 33.3-23.1 36.6-5 2.95-9.22 1.53-12.4-4.2-1.16-2.07-2.32-3.56-2.56-3.31-.248.247-1.07 3.16-1.83 6.47s-1.72 7.51-2.14 9.34c-1.19 5.18-5.02 12-12.9 22.8-9.01 12.4-10.7 15.8-13.5 27.8-2.5 10.6-7.47 20.8-13.7 28.3-10.5 12.5-31.1 22.9-55.2 27.8-6.39 1.29-18.4 3.74-26.8 5.45l-15.2 3.1-42.7.0799c-23.5.0439-45.2-.226-48.4-0.6zm-58.3-214c7.26-7.26-.418-18.9-9.88-14.9-6.35 2.65-7.71 10.5-2.61 15 4.09 3.65 8.75 3.6 12.5-.132zm221 .317c2.4-2.02 2.92-3.16 2.92-6.43 0-4.91-1.88-7.72-6.09-9.11-3.86-1.27-9.25.517-10.9 3.63-1.98 3.7-1.24 8.61 1.75 11.6 3.63 3.63 8.25 3.75 12.3.317zm-270 82.7c-8.42-1.67-9-2-12.8-7.14-3.56-4.85-8.31-14.4-7.55-15.1.255-.255 2.36 1.7 4.67 4.35 8.25 9.43 19.6 14.5 32.3 14.5 7.68 0 9.03 1.02 3.47 2.63-6.02 1.75-13.7 2.04-20.2.756zm294 .759c-4.74-.639-10.9-2.45-10.9-3.2 0-.390 3.79-.890 8.42-1.11 7.09-.339 9.41-.888 14.6-3.46 6.13-3.02 12.9-9.39 16.5-15.5 1.68-2.85 3.1-3.55 3.09-1.53 0 .652-1.01 3.32-2.22 5.93-5.86 12.5-18.1 20.4-29.5 18.8zm-191-87.5c0-1.59 9.57-9.59 16.1-13.4 7.89-4.67 21.4-9.2 31.4-10.5 13.1-1.77 27.3 1.53 43.4 10.1 8.12 4.32 17.2 10.6 17.2 12 0 .381-3.73-1.04-8.3-3.16-34.5-16-59.2-15.8-90.1.765-5.35 2.87-9.72 4.8-9.72 4.3zm88.8-26.7c-14.2-9.03-23.5-11.6-42.4-11.7-12.2-.0972-14.5.148-20.2 2.13-3.77 1.3-9.06 4.19-12.6 6.88-8.83 6.69-8.74 6.77-6.45-5.44 1.12-5.98 1.23-8.74.471-11.6-2.5-9.27-8.11-11.6-34.7-14.5-2.94-.318 4.76-1.64 10-1.72 19.8-0.3 31.8 7.54 32.1 20.9.04 1.87.304 3.63.587 3.91.283.283 3.59-.679 7.35-2.14 20.8-8.06 43-7.34 61.5 2 2.94 1.48 5.6 2.43 5.93 2.1.324-.324.588-1.64.588-2.93 0-8.45 7.4-17.9 16-20.5 6.64-1.97 15.8-2.95 16.6-1.76.330.533-1.33 1.43-3.8 2.05-9.13 2.3-15.9 7.56-18.9 14.7-.850 2.04-2.16 6.91-2.91 10.8-1.27 6.64-2.56 9.66-4.11 9.66-.356 0-2.67-1.28-5.14-2.85zm-59.5-32.1c1.61-3 8.68-8.83 13.1-10.8 6.14-2.71 13.3-3.22 18.9-1.34 4.51 1.52 14.2 7.87 13.4 8.73-.234.234-2.51-.494-5.07-1.62-2.84-1.25-7.44-2.22-11.9-2.51-8.44-.544-14.4 1.04-22.8 6.05-6.12 3.67-6.95 3.88-5.65 1.46z",
      "fill": "#d7b694"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m1.92e3 120c-4.07-.369-12.2-1.96-18.1-3.53s-16-3.71-22.5-4.75c-12.8-2.06-14.4-2.53-29.6-8.94-25.1-10.6-37.1-23.9-42.3-46.9-2.43-10.8-3.61-13.1-13.5-26.8-7.82-10.8-13.2-20-13.2-22.7-.01-.777-.862-5.47-1.9-10.4-1.04-4.96-2.13-10.7-2.43-12.6-.428-2.89-.795-3.41-1.81-2.57-.697.579-1.56 2.64-1.92 4.58-1.96 10.6-6.83 15.1-13.2 12-6.25-2.96-11.7-11.3-24-36.7-11-22.8-11.9-24.3-17.6-29.7-3.3-3.13-12.5-11.8-20.4-19.3-10.7-10.1-14.4-14.2-14.4-15.8 0-4.62 19.4-27.4 43.8-51.3 35.2-34.5 50.4-44.3 81.5-52.1 16.6-4.22 37.2-6.47 42-4.62 2.67 1.02 1.63 2.95-6.06 11.3-7.99 8.63-20.7 25.7-31.6 42.2-8.39 12.8-15.3 27.2-17.2 35.5-2.39 10.9-.894 10.8 9.67-.129 4.63-4.81 9.76-11.4 12.3-15.8 4.59-7.9 5.85-8.18 4.02-.916-.603 2.39-.754 4.69-.335 5.1.418.411 4.82-.291 9.77-1.56 15.9-4.07 25.6-5.45 38.9-5.54 14.5-0.1 21.4 1.58 22.3 5.45.284 1.13-.768 7.04-2.34 13.1-6.5 25.2-5.59 37.2 2.98 39.5l2.74.710-6.29 4.62c-3.46 2.54-7.27 6.17-8.47 8.07s-4.22 5.13-6.72 7.18-8.34 7.26-13 11.6c-4.64 4.33-9.47 8.13-10.8 8.45-1.31.329-4.4 3.22-7.09 6.65-5.37 6.83-6.41 7.14-15.2 4.55-17.1-5.01-28.6-15.8-34.2-32-2.9-8.37-4.16-10.3-4.97-7.61-1.5 5.02-6.75 56.1-6.66 64.8.152 15.1 3.52 22.1 16 33.3 9.29 8.3 17.8 14 27 18 9.56 4.16 9.85 3.92 10.6-9.11 1.23-20.8 4.43-35.8 9.63-45.1 9.59-17.1 26.2-36 36.3-41.2 14.6-7.52 36-20.6 41.8-25.5 14.8-12.6 26.6-18.3 39.8-19.1 13.6-.892 23.5 3.46 39.9 17.7 4.25 3.68 13 9.75 19.4 13.5 16.8 9.79 25 15.5 32.5 22.6 8.29 7.92 18.3 20.8 25 32.1 6.18 10.5 8.21 18.7 9.94 40 .612 7.56 1.52 14.3 2.02 14.9 1.36 1.79 3.41 1.46 9.89-1.61 7.75-3.66 15.1-8.75 24.6-17 12.3-10.7 16.4-21.2 16.5-41.6.01-8.59-5.19-60.3-6.24-62-1.08-1.75-2.14.305-3.64 7.04-4.16 18.7-15.8 31.5-34.1 37.4-10.5 3.43-11.7 3.15-17.2-3.96-2.61-3.35-6.18-6.78-7.94-7.62-4.64-2.22-24.3-20.2-27.9-25.5-.948-1.39-4.95-4.96-8.9-7.93l-7.17-5.4 3-.778c1.83-.474 3.76-1.97 4.93-3.82 2.86-4.51 2.03-19.1-1.96-34.3-1.64-6.25-2.85-12.4-2.69-13.8.905-7.75 25.1-8.74 53.9-2.2 14.2 3.23 14.7 3.24 14.7.292-.025-1.3-.334-3.76-.688-5.45-.966-4.63.399-3.72 3.56 2.37 1.84 3.55 6.06 8.64 12.1 14.6 5.1 5.03 9.27 9.6 9.27 10.2 0 1.8 4.7 4.35 5.87 3.18 1.78-1.78-2.59-18-7.39-27.4-9.68-19-34.8-52.6-47.8-63.9-3.13-2.72-5.69-5.52-5.69-6.21 0-4.89 33.8-1.06 56.1 6.37 24.5 8.16 40.7 19.8 73.8 53 22.6 22.6 39.8 43.2 39.8 47.4 0 .809-5.65 6.82-12.6 13.4-6.9 6.54-16.3 15.5-20.9 19.9l-8.33 8.06-11.5 23.7c-8 16.5-12.8 25.3-15.8 28.8-9.33 11-14.3 11-20.5.00759l-1.81-3.21-1.24 5.92c-.683 3.25-1.92 7.23-2.75 8.84-.831 1.61-1.35 3.64-1.15 4.52.577 2.55-4.22 11.2-12.1 22-8.63 11.7-11.4 17.4-13.8 28.6-3.97 18.6-15.5 33.3-33.2 42.5-9.67 5.01-23 10.1-29.9 11.4-9.25 1.77-28.8 5.74-37.9 7.72-7.6 1.64-13 1.87-49.3 2.06-22.4.118-44.1-.0879-48.2-.457zm-60.4-214c4.67-4.67 3.64-11.9-2.11-14.8-7.56-3.91-16.1 3.56-13.1 11.5 2.45 6.56 10.3 8.29 15.3 3.36zm221 .784c4.36-4.07 4.55-9.77.453-14.3-2.28-2.52-7.15-3.14-10.6-1.34-3.67 1.9-4.89 4.13-4.89 8.94 0 3.05.560 4.24 2.92 6.23 3.71 3.12 9.07 3.32 12.1.468zm53.2-13.1c0-2.83-1.02-4.82-2.47-4.82-1.63 0-1.76 3.93-.183 5.5 1.65 1.65 2.66 1.4 2.66-.681zm-338-3.93c0-.491-.427-.893-.948-.893-.522 0-.949.665-.949 1.48 0 .813.427 1.22.949.893.522-.322.948-.988.948-1.48zm11.6 97.3c-2.75-.672-5.61-1.72-6.35-2.34-1.45-1.2-7.14-9.76-7.14-10.7 0-.325 2.74 1.48 6.09 4.02 5.97 4.52 14.7 8.53 18.8 8.66 1.15.0366 2.95.434 4 .882 3.06 1.32-9.7.917-15.4-.482zm296 .575c.783-.439 3.11-1.1 5.16-1.47 5.51-.992 12.5-4.83 17.9-9.85 3.51-3.26 4.44-3.8 3.55-2.05-1.94 3.81-5.81 7.5-11.5 11-4.51 2.74-6.21 3.25-10.9 3.22-3.52-.0182-5.04-.322-4.14-.827zm-183-91c0-1.12 8.69-6.57 16-10.1 16.3-7.73 34.9-9.16 50.8-3.9 7.71 2.55 22.8 9.86 22 10.7-.244.244-3.78-.829-7.86-2.38-13.9-5.3-19.5-6.34-34.4-6.35-16-.0113-23.1 1.58-37.7 8.51-4.83 2.28-8.77 3.86-8.77 3.5zm79-23.9c-12.5-8.05-24.5-10.8-43.8-10.2-15.1.496-20.3 2.06-29.6 8.94l-5.83 4.29.571-3.64c3.06-19.5 1.21-24.1-11.5-28.5-6-2.08-6.13-2.19-2.13-1.7 11.5 1.41 19 8.65 19 18.4 0 6.33 1.15 6.77 9.31 3.6 11.1-4.33 18-5.66 29.1-5.67 12.2-.004 20.2 1.69 30.6 6.47 3.95 1.83 7.71 3.32 8.35 3.32.689 0 1.43-2 1.81-4.88.740-5.58 3.15-10.8 6.38-13.8 2.65-2.47 10-5.94 12.6-5.97 1.67-.0185 1.61.151-.474 1.55-8.32 5.56-11.8 11.2-14.1 23-1.07 5.42-2.05 8.19-2.97 8.34-.755.129-4.02-1.47-7.26-3.55zm-49.1-35.5c6.12-5.3 18.5-7.28 24.8-3.98 1.71.882.602 1.09-6.17 1.14-6.04.0471-9.52.587-13 2.01-8.36 3.43-8.77 3.49-5.69.828z",
      "fill": "#caaa8b"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m1.92e3 120c-7.77-.705-15-2.36-24.1-5.53-3.13-1.09-10.7-2.62-16.9-3.39-6.16-.773-13.4-2.24-16.2-3.26-16.5-6.18-23.3-29.8-22.2-77.4 0.5-21.7 1.14-25 6.9-36.4 5.32-10.5 12.6-19.9 25-32.3 7.75-7.74 15.1-14 20.9-17.9 9.47-6.29 24.5-14.2 30.9-16.2 2.11-.672 6.1-3.38 9.01-6.11 8.31-7.82 19.1-11.9 31.5-11.9 13.4 0 23.6 3.81 32.4 12.1 4.11 3.88 7.59 6.19 11.6 7.67 7.73 2.87 22.5 11.3 31.7 18.1 18.4 13.6 38 37.7 43.9 53.6 1.84 5.03 2.13 8.07 2.49 26.4.652 32.7-1.94 53.4-8.25 65.9-5.87 11.6-12.4 15.4-30.4 17.6-7.03.852-14.4 2.39-18.2 3.78-13.2 4.9-19.8 5.49-62.9 5.63-21.9.071-43.1-.166-47.1-.528zm-160-122c-5.97-2.94-11.5-11.6-23.6-36.6-11-22.8-11.9-24.3-17.6-29.7-3.3-3.13-12.5-11.8-20.4-19.3-10.7-10.1-14.4-14.2-14.4-15.8 0-4.62 19.4-27.4 43.8-51.3 35.2-34.5 50.4-44.3 81.5-52.1 21.2-5.37 43.5-6.95 43.5-3.07 0 .534-5.44 6.59-12.1 13.4-34.6 35.7-49.8 62.4-56.6 99.4-2.76 15.1-3.77 23.6-6.21 52.6-2.34 27.8-5.31 39.8-10.5 42.5-3.33 1.72-3.5 1.72-7.32-.164zm398 .367c-3.23-1.6-7.46-10.4-8.57-17.8-.498-3.35-1.77-16.6-2.83-29.3-4.06-49-9.29-72.4-21.1-93.9-10.4-19.1-31.1-45.5-48.1-61.3-3.92-3.65-5.01-5.23-4.5-6.55 1.49-3.88 34.6.449 54.8 7.17 24.5 8.16 40.7 19.8 73.8 53 22.6 22.6 39.8 43.2 39.8 47.4 0 .809-5.65 6.82-12.6 13.4-6.9 6.54-16.3 15.5-20.9 19.9l-8.33 8.06-11.5 23.7c-11.7 24.1-16.6 31.7-23.1 35.7-3.41 2.08-4.03 2.13-7.17.579zm-330-42.8c-33.7-11.5-36.7-57.7-4.78-73.5 6.97-3.44 7.46-3.54 17.7-3.54 9.82 0 10.9.191 16.9 3.03 15 7.12 25.1 24.8 23 40.5-.862 6.47-3.4 10.7-9.3 15.4-2.69 2.17-8.37 7.18-12.6 11.1-4.25 3.95-8.86 7.61-10.3 8.14-4.32 1.64-13.8 1.08-20.6-1.22zm29.6-49c4.67-4.67 3.64-11.9-2.11-14.8-7.56-3.91-16.1 3.56-13.1 11.5 2.45 6.56 10.3 8.29 15.3 3.36zm215 49.7c-1.7-.738-8.38-6.08-14.9-11.9-8.44-7.55-12.2-11.6-13.3-14.3-7.02-17.6 2.63-39.9 21-48.6 6.02-2.85 7.08-3.04 16.9-3.04 9.78 0 10.8.192 16.9 3.04 16 7.56 25.8 25.7 22.7 42.1-2.95 15.9-13.1 27.7-27.7 32.2-6.97 2.17-17.2 2.37-21.7.429zm5.34-48.9c4.36-4.07 4.55-9.77.453-14.3-2.28-2.52-7.15-3.14-10.6-1.34-3.67 1.9-4.89 4.13-4.89 8.94 0 3.05.560 4.24 2.92 6.23 3.71 3.12 9.07 3.32 12.1.468z",
      "fill": "#b09d92"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m1.91e3 119c-3.65-.650-11.3-2.49-17.1-4.1-5.74-1.6-14.4-3.38-19.3-3.95-11.1-1.3-18.5-3.86-22.7-7.84-10.4-10-15.1-34.1-14.2-72.9.504-21.1 1.17-24.6 6.89-35.9 7.81-15.5 29.4-39.1 45.9-50.1 9.38-6.27 21.9-12.9 29.9-15.8 2.7-.986 6.89-3.72 9.71-6.35 17.5-16.2 48.9-16.1 64.3.359 3.21 3.43 6.05 5.27 11.6 7.48 25.7 10.3 50.3 31 67.9 57.3 9.16 13.7 10.5 21.1 9.83 53.1-.827 37.5-4.59 53.1-15.1 62.8-5.18 4.77-10.4 6.57-24.4 8.34-6 .760-13.3 2.22-16.1 3.24-13.9 4.94-17.4 5.23-65.4 5.42-32.5.124-46.9-.158-51.7-1.01zm-160-126c-4.67-4.78-6.85-8.58-17.9-31.1l-12.6-25.7-13.6-12.4c-15.1-13.8-27.3-26.1-27.3-27.6 0-.520 1.99-3.66 4.42-6.98 16-21.8 60.5-65.4 80.9-79.2 14.8-10.1 42.8-18.9 66.4-21 11.4-1.03 16.1-.577 16.1 1.53 0 .791-5.44 7.05-12.1 13.9-20 20.6-33.9 39.3-43 58-10.3 21.2-14.3 40.2-18.5 88.1-1.26 14.5-2.9 28.2-3.64 30.4-.744 2.16-2.06 6.37-2.92 9.36-1.72 5.95-4.12 8.33-8.42 8.33-2.06 0-4.01-1.32-8.04-5.45zm401 3.31c-3.01-3.35-5.99-10.4-6.94-16.5-.477-3.05-1.54-14.1-2.37-24.5-4.58-57.9-10.4-81.1-27.3-108-9.46-15.1-25.8-35.2-39.6-48.7-4.15-4.05-7.55-7.84-7.55-8.42 0-4.46 32.8-.387 54.8 6.82 19.7 6.43 32.1 14.3 54.7 34.4 19 17 47.2 47.1 56.1 60 2.18 3.14 2.5 4.29 1.78 6.32-.482 1.36-9.77 10.8-20.6 21.1l-19.8 18.6-11.7 24c-11.4 23.3-16.8 32-22.1 35.5-3.45 2.28-7.04 2.1-9.34-.453zm-322-39.7c-6.02-1.42-14.3-6.16-19-11-19.3-19.4-13.7-51.7 11.1-63.9 5.37-2.64 7.85-3.26 14.4-3.6 23.7-1.24 42.5 16.3 42.5 39.7 0 9.71-1.28 12.2-10.1 20-4.27 3.78-10.3 9.35-13.5 12.4-3.23 3.12-7.15 5.93-9 6.46-3.9 1.12-11.4 1.08-16.3-.0875zm27-50.1c5.87-6.57 1.35-16.1-7.66-16.1-5.73-.0294-9.65 3.83-9.65 9.49 0 3.27.585 4.55 3.35 7.31 3.05 3.05 3.7 3.3 7.35 2.81 2.86-.384 4.75-1.37 6.61-3.46zm215 49.9c-5.15-1.93-26.9-21.8-28.6-26.1-6.97-17.7 2.47-39.7 20.9-48.7 6.06-2.98 6.91-3.14 16.8-3.13 9.87.0108 10.8.185 16.8 3.12 30.9 15 30.5 57.8-.715 72.4-7.4 3.46-19.4 4.6-25.2 2.39zm5.43-49.4c2.64-2.64 3.23-3.95 3.23-7.19 0-5.56-3.93-9.51-9.47-9.51-4.91 0-7.18 1.19-9.01 4.72-2 3.87-1.78 7.85.595 10.9 4.17 5.3 10 5.73 14.7 1.09z",
      "fill": "#ac8e75"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m1.92e3 120c-5.57-.582-17.2-3.36-23.4-5.6-3.48-1.25-11.5-2.92-17.9-3.71-6.68-.827-13.5-2.28-16.2-3.42-10.9-4.68-17.1-18.1-19.7-42.7-1.51-13.9-1.25-46.3.423-54.3 5.03-24 33-56 64-73.2 2.87-1.59 9.27-4.5 14.2-6.47 6.75-2.69 9.77-4.46 12-7.08 6.04-7.01 19.8-12.4 31.8-12.4 13.3 0 23.9 3.98 31.9 12 3.84 3.84 6.82 5.73 12.9 8.16 17 6.83 32.9 17.9 47.1 32.7 14.1 14.7 22.6 26.8 26.7 37.8 1.84 5.02 2.11 7.98 2.47 27.9.761 41.8-3.76 63.5-15.3 73.7-5.19 4.57-9.23 5.86-23.3 7.46-7.04 0.8-12.9 2.07-16.6 3.59-12.9 5.32-17.1 5.7-64.5 5.81-24 .0575-44.9-.0291-46.5-.193zm-160-123c-5.27-3.21-11.1-12.6-22.3-36.1l-11.2-23.4-14-13c-7.72-7.17-17.2-16.2-21-20.1l-6.93-7.05 1.5-2.9c5.1-9.86 39-46.3 61.7-66.2 22.6-19.9 37-27.8 62.6-34.3 16.8-4.28 40.2-6.43 41.8-3.84.347.561-5.07 6.84-12.1 14-14.9 15.2-22.1 23.9-31.8 38.4-19.4 29-24.9 49-30.1 109-3.7 42.6-7.48 52.1-18 45.7zm398 .364c-2.58-1.81-5.96-9.77-7-16.5-.457-2.95-1.72-16-2.81-29.1-4.89-58.8-10.9-80.6-30.1-109-8.65-13-18.7-25.2-32.8-39.7-9.71-10-11.9-12.7-10.6-13.2 2.86-1.1 23.4.458 33.2 2.51 13.2 2.77 30.8 8.79 40.1 13.7 13.9 7.42 31 21.6 54.9 45.6 16.4 16.5 34.1 36.8 37 42.2 2.18 4.21 1.2 5.67-11.9 17.7-6.02 5.56-14.7 13.7-19.4 18.2l-8.42 8.08-12 24.7c-10.6 21.8-12.7 25.3-17.7 30.6-5.98 6.28-8.55 7.22-12.4 4.55zm-330-41.7c-10.3-3.21-21.3-13.4-25-23-12.8-33.6 21-65 53.6-49.8 16.9 7.9 26.4 29.3 20.5 46.2-.936 2.68-23.7 23.9-28.8 26.8-2.67 1.53-15.1 1.42-20.3-.176zm29.4-48.9c5.87-6.57 1.35-16.1-7.66-16.1-5.73-.0294-9.65 3.83-9.65 9.49 0 3.27.585 4.55 3.35 7.31 3.05 3.05 3.7 3.3 7.35 2.81 2.86-.384 4.75-1.37 6.61-3.46zm213 48.9c-2.75-1.24-6.59-4.54-21.3-18.3-5.53-5.17-6.92-9.02-6.92-19.3 0-9.9 1.93-16 7.51-23.5 7.36-9.99 18.6-15.6 31.4-15.6s24 5.58 31.4 15.6c5.69 7.73 7.53 13.6 7.52 24-.011 7.61-.340 9.23-3.04 14.9-4.06 8.6-11.3 16.1-19.2 19.9-5.41 2.61-7.43 3.04-15.2 3.31-6.42.215-9.89-.0963-12.1-1.08zm6.95-48.4c2.64-2.64 3.23-3.95 3.23-7.19 0-5.56-3.93-9.51-9.47-9.51-4.91 0-7.18 1.19-9.01 4.72-2.39 4.63-1.84 8.34 1.79 12 2.51 2.51 4.01 3.23 6.73 3.23 2.73 0 4.23-.720 6.73-3.23z",
      "fill": "#907668"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m1.91e3 118c-3.39-.681-10.1-2.55-15-4.15-5.34-1.77-12.6-3.3-18.5-3.9-12.5-1.28-17.7-3.05-22.3-7.59-7.72-7.72-11.7-20.8-13.6-44.7-1.37-17.1-.582-42.9 1.54-50.6 3.45-12.6 12.8-27.1 27-41.7 15.8-16.3 30.8-26.8 49.3-34.4 7.4-3.04 11-5.12 14.2-8.32 5.37-5.25 12.3-8.8 20.7-10.6 8.11-1.72 12.3-1.71 20.6.0459 9.09 1.93 15.7 5.36 21.6 11.3 3.27 3.27 6.65 5.59 9.75 6.7 7.6 2.71 21.9 10.5 30.2 16.4 13.8 9.91 31.8 29.4 40.8 44.1 7.03 11.6 7.79 15.9 7.74 43.9-.062 31.9-1.83 44.8-7.96 58-3.34 7.17-9.12 13-14.9 14.9-2.4.818-9.09 1.96-14.9 2.54-7.41.741-12.5 1.84-17.3 3.75-13.3 5.28-18 5.67-67.6 5.58-33.1-.0653-46.8-.421-51.4-1.33zm-160-126c-4.41-4.64-7.06-9.26-17.8-31.1l-12.6-25.6-18.8-17.3c-10.4-9.51-19.4-18.4-20.1-19.7-1.66-3.11-.824-4.68 8.55-16 22.5-27.2 56.8-59.9 76.1-72.4 16.3-10.7 44.8-19.3 69-20.8 5.15-.337 10.1-.331 11 .0134 1.31.502-.607 2.93-9.65 12.2-29.9 30.7-46.3 56.1-53.9 83.1-4.81 17.2-7.38 35.1-10.5 73.2-1.59 19.3-4.74 34.8-7.71 38.1-.940 1.04-2.88 1.71-4.92 1.71-2.88 0-4.14-.807-8.56-5.45zm401 3.61c-4.47-5.22-5.78-12.4-8.87-48.9-4.66-54.9-11-77-30.4-106-7.91-11.8-21.1-27.7-33.2-39.8-5.75-5.82-10.2-11-9.92-11.4 1.42-2.3 24.5.172 41.4 4.42 16.2 4.08 30.5 10 40.6 16.8 21.3 14.4 75.4 68.4 82.6 82.5l1.83 3.56-4.05 4.4c-2.23 2.42-11.5 11.2-20.5 19.6l-16.5 15.2-11.6 23.9c-11.3 23.1-17.2 32.9-21.9 36-3.14 2.06-7.71 1.89-9.63-.352zm-320-40.2c-6.95-2.03-12.4-5.24-17.5-10.4-25.3-25.3-5.87-67.9 30-65.9 14 .811 26.5 9.34 32.7 22.4 2.07 4.32 2.67 7.13 3 14.1.601 12.8.115 13.7-13.7 26.2-6.53 5.88-12.9 11.5-14.1 12.5-2.85 2.29-14.3 2.95-20.4 1.17zm27.4-48.1c3.89-3.89 4.1-9.76.490-14.1-7-8.31-20.7-.936-17.6 9.47 2.33 7.78 11.4 10.2 17.1 4.58zm219 48.9c-.522-.174-2.11-.573-3.54-.886-3.08-.678-25-19.7-26.9-23.4-.722-1.4-1.76-5.36-2.31-8.81-1.78-11.1 1.86-23.1 9.6-31.5 22.3-24.1 61.9-12.2 67.1 20.2 1.91 12-2.16 24.4-10.8 33.1-5.54 5.54-10.3 8.26-18.2 10.3-4.92 1.28-12.6 1.77-15 .952zm1.31-47.6c1.21-.851 2.8-2.96 3.52-4.68 2.86-6.85-2.07-14.2-9.54-14.2-9.67 0-14.1 12.5-6.52 18.5 3.03 2.38 9.41 2.58 12.5.393z",
      "fill": "#8a6a57"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m1.91e3 118c-4.43-.957-11.1-2.89-14.7-4.29-4.31-1.65-9.96-2.87-16.1-3.46-18.4-1.77-24.3-5.13-29.9-17.2-5.36-11.4-6.73-20.8-7.26-49.6-.390-21.1-.208-26.9 1.03-32.7 3.2-15.1 13.2-30.5 31.2-48.1 16.5-16.1 28.1-24 46.2-31.1 6.85-2.71 9.96-4.55 13-7.67 7.22-7.46 18.6-11.8 31.1-11.8 13.4.0197 23.6 3.91 31.4 11.9 3.76 3.9 6.36 5.55 12.3 7.85 16 6.18 30.6 16 45.1 30.5 16.6 16.5 26.5 31.2 29.8 44.1 1.75 6.84 2.02 44.7.432 59-2.6 23.3-9.41 37.1-20.6 41.8-1.86.777-8.56 1.99-14.9 2.69-8.4.931-13.5 2.06-18.8 4.19-13.3 5.29-19 5.77-67.4 5.69-38.7-.0591-44.7-.267-51.8-1.81zm-160-126c-4.19-4.47-7-9.31-15.6-26.8-5.74-11.7-11.2-23.1-12.1-25.2-1.17-2.69-6.17-7.97-16.7-17.7-8.28-7.63-17.6-16.5-20.7-19.7l-5.67-5.78 1.82-3.38c3.59-6.66 17.3-22.1 38.9-43.6 21.3-21.3 36.6-34.6 47.3-41 16.7-10 44-17.9 68-19.6 12.7-.891 12.7-.543-1.18 13.5-14.9 15-22.4 24.1-32.3 38.7-19.6 29.1-25.2 49.3-30.6 110-2.88 32.5-5.06 43.4-9.12 45.6-3.99 2.14-6.83 1.07-12.1-4.54zm402 3.73c-1.94-2.14-4.9-10.6-5.7-16.3-.330-2.35-1.47-14.7-2.52-27.5-4.92-59.5-10.8-80.8-30.2-110-9.25-13.9-17.6-24-32.2-39.1-12.1-12.5-12.6-13-10.2-13.6 3.33-.837 21.6 1.13 32.8 3.53 30.3 6.52 46.2 15.1 73.7 39.8 25.3 22.8 57.2 58.3 57.2 63.7 0 2.07-4.5 6.71-28 28.9l-13.3 12.5-11.4 23.9c-10.1 21.3-12 24.5-17.1 29.9-4.63 4.91-6.28 6.07-8.65 6.07-1.63 0-3.62-.768-4.49-1.73zm-310-40.3c-11.9-2.77-21.8-10.7-27-21.5-2.69-5.67-2.92-6.97-2.92-16.1 0-9.23.221-10.4 3.03-16.4 14-29.6 55.1-29.7 69.6-.245 3.59 7.29 4.69 17.1 2.8 25-1.06 4.42-1.92 5.5-9.84 12.3-4.77 4.12-10.2 9.07-12 11-1.83 1.92-4.46 4.09-5.85 4.82-3.72 1.95-11.9 2.42-17.9 1.04zm25.5-48c3.95-3.69 4.17-9.87.518-14.2-4.71-5.6-13.8-4.39-16.9 2.25-1.86 3.92-1.87 5.55-.079 9.02 3.29 6.37 11.3 7.8 16.5 2.95zm221 48.8c-.522-.177-2.56-.591-4.53-.921-2.74-.458-5.75-2.54-12.8-8.85-14.1-12.7-15.1-13.8-16.4-19.2-3.05-12.7 1.08-27.7 10.2-36.8 18.9-18.9 50.7-13.3 62.2 11 2.81 5.93 3.03 7.12 3.03 16.4 0 9.31-.204 10.4-3.03 16.1-3.7 7.52-10.4 14.4-17.4 18-6.59 3.35-17.5 5.54-21.3 4.27zm-.197-47.9c2.89-2.27 4.78-7.4 3.96-10.7-.326-1.3-1.87-3.58-3.42-5.08-7.48-7.17-19.6.331-16.9 10.4.517 1.87 2.05 4.28 3.41 5.35 3.29 2.59 9.65 2.6 12.9.0284z",
      "fill": "#71564c"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m1.92e3 119c-6.04-.792-14.7-3.12-23.2-6.26-2.87-1.05-9.7-2.38-15.2-2.94-5.48-.561-11.6-1.53-13.6-2.16-8.83-2.78-16-13.5-19-28.3-3.53-17.4-4.39-56-1.53-69.2 6.14-28.5 46.4-68.1 80.6-79.2 3.69-1.2 6.24-2.87 8.95-5.85 14.9-16.4 49.1-16.2 63.3.486 2.51 2.93 5.22 4.58 12 7.31 17 6.78 32.5 17.6 46.8 32.5 14.5 15.1 22.7 26.9 26.4 38.1 3.83 11.5 3.54 55.2-.488 74.5-2.29 10.9-5.11 17.3-10.1 22.8-5.61 6.14-9.72 7.73-23.5 9.13-5.48.554-11.5 1.56-13.3 2.24-1.83.676-5.81 2.15-8.86 3.27-10.7 3.95-21 4.68-63.7 4.55-21.9-.0707-42.4-.464-45.5-.874zm40-113c4.14-.328 7.71-.00854 10.9.973 2.58.804 4.83 1.33 5 1.16.656-.656-12-6.27-14.1-6.27-2.19 0-16 6.07-16 7.04 0 .258 1.81-.179 4.03-.971s6.81-1.66 10.2-1.93zm.692-86.3c-.315-.315-1.13-.349-1.82-.0748-.757.303-.532.528.573.573 1 .0412 1.56-.183 1.24-.498zm-209 71.4c-5.05-5.35-7-8.76-17-29.6-6.24-13-12-24.5-12.8-25.5-.802-1.07-9.89-9.76-20.2-19.3-10.9-10.1-19-18.3-19.3-19.7-.713-2.84 1.7-6.43 13.9-20.6 18.3-21.3 48.1-49.7 65.9-62.8 12.6-9.22 31.9-17 52.6-21.2 10.8-2.2 31.3-3.66 31.3-2.23 0 .479-4.09 4.92-9.08 9.86-18.2 18-34.3 38.9-44 57-11.9 22.3-16.8 44.3-20.9 94.3-3.09 37.3-5.55 46-13 46-.942 0-4.28-2.72-7.41-6.05zm402 4.86c-1.85-1.39-4.06-6.45-5.37-12.3-.512-2.29-1.82-14.8-2.91-27.8-4.41-52.8-8.4-72.3-19.4-94.8-9.4-19.3-23.2-37.9-43.8-59.1-6.45-6.64-11.7-12.2-11.8-12.3-.088-.993 17.1.134 26.6 1.74 20 3.39 40.3 10.4 52.1 18.1 11.4 7.31 26.1 20.2 47 41.1 20.1 20.2 36.1 38.3 38.6 43.9.962 2.11.487 2.85-6.01 9.34-3.88 3.87-13.2 12.7-20.6 19.6l-13.6 12.6-11.3 23.5c-11.5 23.9-17.6 33.6-22.8 36.3-3.34 1.73-4.84 1.78-6.89.230zm-327-42.4c-10.3-3.74-17.6-10.5-22.5-20.9-2.65-5.6-2.93-7.09-2.91-15.2.03-11.6 2.32-17.8 9.62-25.6 18.1-19.5 49.5-15.7 61.7 7.38 4.82 9.14 5.98 17.7 3.64 26.7-1.06 4.1-2.14 5.79-5.45 8.51-2.27 1.86-8.37 7.23-13.6 11.9l-9.44 8.54-8.11.213c-6.02.158-9.38-.251-13.1-1.59zm26.6-43.8c6.28-3.24 8.48-8.48 6.02-14.4-4.1-9.82-18.8-7.8-20.2 2.77-1.11 8.25 7.35 15.1 14.2 11.6zm218 44.6c-4.12-1.21-25.6-21-27-24.8-1.74-4.93-2.27-14.2-1.13-19.5 3.4-15.9 16.5-28.4 32-30.5 17-2.33 33 6.45 40.3 22.1 9.73 20.8-1.62 45.7-23.7 52.2-5.51 1.61-15.8 1.87-20.5.503zm6.88-47.8c8.23-8.91-2.19-21.8-13.1-16.2-5.89 3.04-7.22 11.4-2.62 16.3 4.77 5.14 10.8 5.06 15.7-.193z",
      "fill": "#67453a"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m1.91e3 117c-3.64-.781-9.9-2.68-13.9-4.23-5.19-2-10.7-3.18-19.1-4.12-7.8-.865-13.1-1.95-15.5-3.2-13.9-7.17-19.4-26.3-19.3-67.7.041-22.6 1.32-30.6 6.62-41.3 9.9-20 32.5-43.1 55.1-56.3 3.58-2.09 10.9-5.54 16.2-7.67 7.24-2.88 10.6-4.78 13.1-7.45 6.35-6.85 15.4-10.9 26.4-12 13.6-1.26 26.5 3.04 34.9 11.7 3.59 3.67 6.55 5.64 10.9 7.29 22.4 8.42 46.9 27.8 63.2 49.9 13.3 18.1 14.7 24 14.1 59.3-.622 33.3-2.76 44.8-10.4 56.1-4.84 7.11-10.4 9.66-24.7 11.2-8.72.967-13.8 2.07-19 4.16-13.8 5.54-16.9 5.8-66.7 5.71-36.4-.0621-46.6-.356-52-1.5zm32.6-102c14.5-7.27 24-7.77 37.3-1.93 4.34 1.91 8.54 3.73 9.32 4.04 2.27.893-3.88-5.34-8.27-8.39-12.3-8.5-18.1-9.33-28.7-4.06-5.77 2.88-19 13.5-17 13.6.362.0190 3.64-1.46 7.27-3.29zm24.8-93.7c2.33-1.14 4.15-2.51 4.03-3.03-.123-.555-4.14-.949-9.7-.949-5.58 0-9.55.390-9.65.949-.188 1.12 7.49 5.24 9.61 5.16.802-.0308 3.37-.991 5.7-2.13zm-214 69c-4.84-5.36-7.24-9.58-16.9-29.6-6.17-12.9-12.5-24.8-14.1-26.6-1.59-1.75-10.5-10.2-19.7-18.8-9.27-8.6-17.3-16.5-17.8-17.5-1.16-2.16 1.37-6.2 11.1-17.7 26.6-31.4 63.7-64.9 82.2-74.2 8.75-4.41 25.2-9.89 37.2-12.4 10.5-2.18 28.5-4.15 30.5-3.35 1.16.446-1.41 3.59-10.7 13.1-29.2 29.8-45.2 55.4-52.5 83.8-4.71 18.2-6.41 30.2-9.46 66.3-2.94 34.9-5.12 43.2-11.4 43.2-2.13 0-3.9-1.33-8.34-6.25zm402 4.11c-3.22-5-4.33-12.1-7.24-46.7-4.66-55.4-11.1-78.1-30.1-107-8.43-12.6-18.6-25-31.9-38.8-6.2-6.43-11-11.9-10.7-12.2 1.02-1.02 22.8 1.59 33.8 4.04 16.9 3.79 32.2 9.68 43.4 16.8 9.87 6.24 25.3 19.8 45.9 40.5 21.5 21.6 38.8 41.4 38.8 44.6 0 1.59-12.8 14.5-30.6 30.7-5.59 5.12-10.4 10.2-10.8 11.3-1.5 4.73-22.4 46.6-24.3 48.8-7.28 8.25-9.11 9.73-12 9.73-2 0-3.37-.677-4.31-2.13zm-320-40.2c-11.1-3.17-21.3-12.4-25.5-23.3-2.86-7.35-2.82-19.3.08-26.8 9.35-24.2 39.4-32.1 59.9-15.8 8.22 6.51 13.4 17.7 13.4 29 .01 10.8-.815 12.2-13.6 23.7-16.6 14.9-15.1 14-22.9 14.2-3.76.119-8.88-.369-11.4-1.08zm25.3-44.6c5.61-2.66 7.74-9.09 4.85-14.7-2.04-3.95-5.06-5.7-9.8-5.7-3.46 0-4.69.540-7.38 3.23-2.49 2.49-3.23 4.01-3.23 6.69 0 9.07 7.65 14.2 15.5 10.5zm218 44.8c-3.89-1.29-24.7-19.4-26.3-22.9-.582-1.28-1.53-5.05-2.11-8.38-3.73-21.4 12.9-41.8 35.1-43.1 22.5-1.3 40.1 15.1 40.1 37.3.026 8.82-1.74 14.7-6.63 22.1-8.1 12.2-27.1 19.4-40.1 15.1zm3.88-44.8c3.43-1.78 5.66-5.89 5.66-10.5 0-2.67-.736-4.2-3.22-6.69-2.73-2.73-3.89-3.23-7.57-3.23-10.9 0-15.1 14-5.93 19.9 3.57 2.29 7.3 2.45 11.1.502z",
      "fill": "#543129"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m1.92e3 118c-7.7-.947-14.7-2.73-22.1-5.59-6.15-2.4-10.8-3.49-18-4.18-13-1.26-17-2.43-21.6-6.37-9.13-7.82-14.2-27.2-14.2-54.6l-.019-12.1 6.35 6.74c8.99 9.53 20.7 18 34 24.5 11.5 5.69 21.8 9.43 22.9 8.34 1.07-1.07 5.95-19.7 7.04-27 .590-3.89 1.91-9.5 2.92-12.5 4.56-13.3 16.5-27.7 28.2-34.3 3.26-1.83 6.77-3.96 7.8-4.74 2.76-2.09 6.2-20.2 6.65-35l.358-11.8-5.14-1.97c-7.09-2.71-7.33-4.3-.650-4.3 4.9 0 5.38-.202 6.74-2.85 1.87-3.62 3.82-3.62 5.69 0 1.68 3.26 3.11 3.46 12.5 1.73 11.7-2.16 8.59 1.92-3.92 5.11-8.43 2.15-8.54 2.22-8.41 5.02 1.06 23.1 2.47 34.8 4.97 41.4.671 1.76 2.85 3.42 7.41 5.64 4.74 2.3 8.76 5.43 15.1 11.7 7.27 7.23 9.31 9.97 13.1 17.6 2.93 5.93 4.93 11.6 5.86 16.6 1.69 9.08 6.07 26.3 7.12 28 1.35 2.18 23-7.42 35.1-15.5 7.55-5.08 17.4-13.8 22.2-19.6 2.89-3.5 5.03-5.34 5.57-4.8 1.32 1.32-.930 34.1-3.04 44.3-3.28 15.8-9.6 25.3-18.7 28.2-2.54.813-9.28 1.96-15 2.54-7.09.729-12.2 1.83-16.1 3.5-14.3 6.04-16.2 6.23-64.6 6.4-24 .0814-44.7.0167-46-.144zm57.5-34.9c4.1-.785 13.9-3.54 21.7-6.13l14.2-4.71-.116-7.39c-.127-8.1-3.44-21-7.46-29.2-3.48-7.05-13.5-19.7-19.5-24.6-6.9-5.63-17.2-11-21.2-11-6.78 0-18.1 6.01-26.4 14.1-4.95 4.77-13.5 16.3-16.5 22.4-5.18 10.4-9.42 32.7-7.03 37.2.767 1.43 3.86 2.67 12.2 4.87 22.4 5.92 36.1 7.13 50.2 4.42zm-80.9-88.2c-.836-2.18.337-4.27 2.39-4.27 2.22 0 3.02 1.75 1.84 4.03-1.05 2.03-3.5 2.17-4.24.237zm126 .0120c-1.58-1.9-.526-4.28 1.89-4.28 1.08 0 2.2.646 2.51 1.43.545 1.42-1.13 4.26-2.51 4.26-.394 0-1.24-.635-1.89-1.41zm-284-34.2c-5.97-12.2-10.7-23.1-10.7-24.7-.207-8.8 23.1-50.8 42.7-76.8 11.5-15.4 31.1-37.4 32.2-36.3.226.226-2.4 4.96-5.83 10.5-26.8 43.4-42.3 88.6-46.4 135l-1.22 14.1-10.7-21.8zm436 17.3c-.258-1.7-.718-7.01-1.02-11.8-2.56-40.5-18.6-86.9-45.3-131-3.69-6.15-6.49-11.4-6.22-11.7 1.3-1.3 25.2 26.7 37.6 44 16.2 22.7 37.1 61.4 37.1 68.9 0 2.01-20.3 45.1-21.3 45.1-.242 0-.652-1.39-.910-3.08zm-283-4.97c-1.58-1.9-.526-4.28 1.89-4.28 1.08 0 2.2.646 2.51 1.43.545 1.42-1.13 4.26-2.51 4.26-.394 0-1.24-.635-1.89-1.41zm26.5-.0190c-1.05-1.26-1.01-1.76.251-3.02 2.03-2.03 4.72-.904 4.33 1.82-.371 2.6-2.87 3.25-4.58 1.19zm85.4.0190c-1.69-2.04-.439-4.47 2.11-4.11 2.43.347 3.45 3.46 1.53 4.68-1.78 1.13-2.3 1.05-3.64-.571zm26.2.778c-1.16-1.16-.650-4.16.802-4.72 2.3-.882 4.4 1.41 3.25 3.56-.964 1.8-2.87 2.35-4.06 1.17zm-195-19.6c-11.4-2.98-21-10.8-25.9-21.3-2.27-4.85-2.54-6.52-2.54-15.9 0-9.7.199-10.8 2.83-16 11.6-22.9 40.8-28.4 59.3-11.3 7.91 7.33 11.6 15 12.1 25.3.651 12.5-.069 14-12.2 24.8-17.5 15.7-15.9 14.7-22.8 15.1-3.46.245-8.17-.103-10.9-.802zm24.2-44.7c8.23-4.25 7.21-16.3-1.69-20.1-6.59-2.75-14.5 2.83-14.5 10.3 0 4.78 1.23 7.07 5.04 9.4 3.63 2.22 7.36 2.35 11.1.411zm218 44.7c-3.31-.890-6.09-2.71-10.4-6.84-3.26-3.1-8.17-7.51-10.9-9.8-6.35-5.29-8.23-10.8-7.62-22.2.858-16.3 10.7-29 26.2-33.8 7.69-2.38 14.5-2.38 22.2 0 10.7 3.3 18.4 10.1 23.3 20.6 2.29 4.89 2.58 6.61 2.58 15.5 0 8.82-.291 10.6-2.54 15.4-4.97 10.6-15.7 19.1-27.1 21.5-6.29 1.32-9.88 1.25-15.6-.290zm3.08-44.7c3.9-2.02 5.7-5.04 5.7-9.57 0-7.3-7.24-13-13.8-10.8-4.44 1.46-8.01 5.95-8.01 10.1 0 8.94 8.39 14.3 16.1 10.3zm-128 28.3c-1.57-1.57-.625-7.89 1.55-10.4 4.34-5.04 7.99.310 4.75 6.95-1.66 3.39-4.7 5.07-6.3 3.47zm20.6-.120c-2.8-1.91-4.2-8.61-2.39-11.5 2.49-3.93 8.83 4.31 7.1 9.22-.896 2.55-2.89 3.5-4.72 2.25z",
      "fill": "#442722"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m1.92e3 41.7c.331-2.22 2.59-8.09 5.02-13 3.7-7.53 5.75-10.3 12.6-17.1 8.05-7.98 17.6-14.1 24.3-15.6l2.78-.610-.046-23.2c-.025-12.7-.239-23.3-.475-23.5-.236-.174-1.63-.832-3.09-1.46-2.86-1.23-2.66-3.03.325-3.03 1 0 2.52-1.07 3.37-2.37 1.95-2.98 2.96-2.98 5.3 0 1.59 2.02 2.64 2.37 7.17 2.37 2.92 0 5.07.233 4.79.518-.285.285-3.24 1.26-6.56 2.16-6.01 1.63-6.04 1.66-5.88 4.94.09 1.81.474 12.3.854 23.3l.691 20 7.85 3.61c9.46 4.35 18.4 11.5 24.6 19.7 5.36 7.09 9.88 16.2 10.6 21.4.463 3.42.254 3.21-3.24-3.21-9.26-17-25.4-32-38.6-35.9-4.26-1.24-5.38-1.24-9.6.0167-14 4.15-30.5 20.2-38.9 37.8-1.9 4-3.68 7.28-3.95 7.28s-.219-1.81.112-4.03zm-85.8-88.5c-5.96-1.84-13.9-7.64-18.2-13.3-10.4-13.6-9.45-34.6 2.14-47.2 8.63-9.44 22-14.2 33.8-12.1 12.8 2.35 22.6 9.84 28.2 21.7 2.72 5.74 3 7.18 2.99 15.3-.018 10.1-.795 12.2-6.04 16.6-1.88 1.57-7.81 6.79-13.2 11.6l-9.76 8.77-7.8-.0660c-4.29-.0363-9.73-.662-12.1-1.39zm30-45.4c2.63-2.63 3.23-3.95 3.23-7.16 0-5.32-2.07-8.95-6.22-10.9-6.42-3.04-13.7.218-15.7 7.08-2.16 7.2 3.37 14.2 11.2 14.2 3.61 0 4.8-.508 7.52-3.23zm213 45.6c-4.74-2.21-23.9-20.2-25.1-23.6-2.05-5.71-2.3-16-.54-22.1 8.99-31.3 50.2-37.4 67.8-10.1 11.8 18.4 4.29 44.2-15.6 53.8-4.77 2.29-7.1 2.77-14.7 3.03-6.3.218-9.87-.0874-11.9-1.02zm6.63-44.4c1.44-1.13 3.21-3.48 3.94-5.23 3.32-7.94-4.4-16.9-12.9-15-3.57.783-8.14 5.27-8.78 8.61-1.91 10 9.96 17.8 17.8 11.6zm-129 26.4c-.742-1.93 2.22-8.41 3.63-7.94 1.73.575 2.02 3.29.694 6.48-1.21 2.91-3.47 3.68-4.33 1.46zm19.6-.465c-1.48-2.76-1.29-7.71.295-7.71 1.54 0 3.74 4.82 3.28 7.2-.469 2.42-2.41 2.69-3.58.511z",
      "fill": "#2c1915"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m1.92e3 27.2c6.67-13.5 19.9-24.9 33.7-29.1l6.52-1.99-.583-4.85c-.321-2.67-.587-13.3-.591-23.5-.01-15.6-.249-18.9-1.49-20.1-1.34-1.34-1.31-1.7.237-3.83 2.13-2.93 2.85-2.97 5.06-.280 1.68 2.04 1.69 2.2.071 3.56-1.56 1.32-1.65 3.19-1.13 25.5l.555 24.1 3.84 1.13c11.3 3.33 27.3 16.2 32.6 26.1 2.53 4.78 2.3 4.61-4.15-3.11-7.89-9.45-21.7-19.2-30.5-21.5-5.12-1.34-11.3.470-19.4 5.72-9.48 6.1-15 11.6-25.3 25-1.8 2.34-1.68 1.85.648-2.86zm-89.5-73.8c-11.1-2.83-20.2-10.3-25-20.6-2.18-4.6-2.48-6.4-2.48-15.2 0-9.35.194-10.4 3.11-16.3 16.5-33.6 67.1-23.6 69.3 13.7.588 10.2-.885 14.9-5.85 18.9-2.16 1.73-8.08 6.9-13.1 11.5l-9.21 8.35-5.96.419c-3.28.231-8.1-.126-10.7-.792zm23.7-42.8c7.79-3.26 9.34-13.4 2.94-19.2-7.85-7.2-19.6-1.84-19.6 8.96 0 4.23 1.88 7.28 6.04 9.82 3.56 2.17 6.19 2.28 10.6.454zm219 43c-3.09-.694-6.35-3.1-15.3-11.3-10.5-9.62-11.5-10.8-12.6-15.2-1.93-8.05-.812-18.6 2.73-25.8 3.79-7.7 11.3-14.8 18.9-17.8 7.69-3.05 20.3-3.05 28 0 7.6 3.01 15.1 10.1 19 18 2.91 5.92 3.11 6.93 3.11 16.3 0 9.12-.240 10.5-2.79 15.7-7.57 15.4-24.7 23.9-41 20.3zm3.53-43.8c10.2-6.9 5.83-21.6-6.44-21.5-12 .112-16.1 15.5-5.69 21.8 4.02 2.45 8.2 2.35 12.1-.304z",
      "fill": "#020101"
    }
  })])])]), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m85.6 65.3h.518q.257 0 .257.322-.604 5.22-.604 7.24v.886q-.171.886-.855.886h-.176l-.342-.322q.342-5.47.861-8.69l.342-.322z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m87.9 66.6q.458 0 1.1 1.72 1.24 2.54 2.75 4.34.508-4.97.755-5.85l.277-.206h.206q.206 0 .206.277-.619 7.1-.755 7.58l-.413.136q-1.1 0-3.71-4.68l-.277-.277-.0705.206-.206 3.17v.413l.0705.413q-.0906.826-.549.826-.423-.151-.483-.413.529-7.44.755-7.44l.347-.206z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m98.5 66.6h.297q.559 0 .669.901v.141q0 1.36-1.03 1.8l-.121-.141v-.0705l.307-1.18-.242-.136q-1.51 0-3.58 2.84-.493.861-.493 1.31v.0705q0 1.11 1.34 1.11h.0554q1.29 0 2.85-.690h.186q.242.111.242.483v.277q-1.29 1.32-3.03 1.32-2.37-.247-2.37-2.36v-.141q0-2.69 3.82-5.27.725-.277 1.1-.277z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m100 66.6h.0705q.327 0 .549.337-.478 3.48-.685 6.23l3.93-.810.136.201v.408q0 .926-4.27 1.69-.760-.136-.760-.473.564-7.45.826-7.45l.206-.136z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m106 66.6q.322.131.357.272-.574 3.59-.574 5.22v.745q1.92 0 3.15-1.76.483-4.27.931-4.27h.0755q.428.0453.428.206-.644 3.89-.644 5.82v1.08q0 .534-.433.745h-.287l-.282-.272v-.136l.0705-1.15q-.257 0-2.79 1.28l-.503.136q-.861-.111-.861-.745v-.0654q.524-7.11 1.22-7.11h.146z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m113 66.6h.307q2.19 0 2.68 1.74l.0604.554q0 3.46-5.12 5.7l-.302.0705h-.0654q-.136 0-.242-.488l.609-5.98q-.367 0-.367-.206v-.141q0-1.11.977-1.11l1.46-.141zm-1.22 1.46q-.549 3.56-.549 4.79v.347q3.84-1.92 3.84-3.61v-.0654q0-.977-.549-.977-.680-.483-2.19-.483h-.549z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m122 66.6q.347.0755.347.529-.111.856-.690.856-3.8 0-3.8 1.06l-.0705.594v.327q2.48-.594 3.38-.594h.136q.347.151.347.659 0 .725-.966.725-3.18.413-3.18.992l-.0654.659v.262q0 .594.755.659 1.19-.131 2.97-.594h.206q.277.106.277.463v.196q0 .810-3.45 1.25h-.206q-1.24 0-1.38-1.58 0-1.16.483-4.42l-.136-.398q0-1.34 4.14-1.58l.9-.063z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m128 66.5h.473q.237 0 .237.277-.554 4.52-.554 6.27v.765q-.156.765-.785.765h-.156l-.317-.277q.317-4.74.790-7.53l.312-.277z"
    }
  }), _vm._v("\npath\n           id=\"path7302\"\n           d=\"m130.4 66.555q0.45807 0 1.0974 1.7216 1.2383 2.537 2.7535 4.3391 0.50842-4.9683 0.75507-5.8543l0.27686-0.20638h0.20639q0.20638 0 0.20638 0.27686-0.61915 7.0976-0.75507 7.5759l-0.41277 0.13591q-1.1024 0-3.7149-4.6814l-0.27686-0.27686-0.0705 0.20638-0.20638 3.1713v0.41277l0.0705 0.41277q-0.0906 0.82554-0.54868 0.82554-0.42284-0.15101-0.48324-0.41277 0.52854-7.4399 0.75506-7.4399l0.34734-0.20638z\" />\n   "), _c('path', {
    attrs: {
      "d": "m141 66.6 1.54 2.34.675.554q1.28-2.28 1.78-2.75h.307l.247.277q-.0503.367-2.89 5.15-.715 1.34-1.05 2.41l-.181.0705q-.433-.201-.433-.619.0252-.539 1.47-3.37-2.09-2.25-2.09-3.64.388-.413.614-.413z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m149 66.6q2.15.297 2.15 2.57 0 2.98-2.36 4.93-.972.554-1.74.554-1.87 0-2.41-2.01l-.0503-.624v-.211q0-3.25 2.97-4.93.745-.277 1.43-.277zm-3.74 5.42q.775 1.18 2.05 1.18 2.05 0 2.86-2.43l.101-.765q0-1.71-1.69-2.01h-.156q-1.39 0-2.91 2.78-.257.836-.257 1.25z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m153 66.6q.322.131.357.272-.574 3.59-.574 5.22v.745q1.92 0 3.15-1.76.483-4.27.931-4.27h.0755q.428.0453.428.206-.644 3.89-.644 5.82v1.08q0 .534-.433.745h-.287l-.282-.272v-.136l.0705-1.15q-.257 0-2.79 1.28l-.503.136q-.861-.111-.861-.745v-.0654q.524-7.11 1.22-7.11h.146z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m162 66.6h.695q1.6 0 1.6 1.11v.0705q0 1.95-3.33 3.54v.0654q1.67 1.53 2.78 2.3v.206q0 .539-.347.695h-.277l-3.82-2.71-.0705 1.39v1.04q-.176.347-.554.347-.277 0-.418-.277v-.418l.624-5.42q-.277 0-.277-.413 0-1.25 2.08-1.46l1.32-.0705zm-2.43 3.75h.0705q3.6-.926 3.6-2.01v-.0705q0-.191-.695-.277-1.15 0-2.77.488l-.206 1.87z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m88.4 79.4q2 0 2 1.17 0 2.32-4.38 4.2-.322 0-.322.413-.0453 2.28-.453 2.28h-.322q-.131-.0302-.257-.342l.579-5.65h-.0654q-.257 0-.257-.624 0-1.01 1.16-1.17l2.32-.277zm-2.58 4q2.21-.579 3.35-1.93l.126-.418v-.136l-.322-.0705h-.322q-2.57.141-2.57.483l-.262 2.07z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m91.9 79.4q.322.131.357.272-.574 3.59-.574 5.22v.745q1.92 0 3.15-1.76.483-4.27.931-4.27h.0755q.428.0453.428.206-.644 3.89-.644 5.82v1.08q0 .534-.433.745h-.287l-.282-.272v-.136l.0705-1.15q-.257 0-2.79 1.28l-.503.136q-.861-.111-.861-.745v-.0654q.524-7.11 1.22-7.11h.146z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m101 79.4h.0503q.670 0 .896 1.31l-.106.136h-.0503l-.423-.136q-1.73.257-3.63 2.41-.529.936-.529 1.31v.277q0 1.1 2.27 1.37 1.42 0 2.15-1.52l-.63-.272q-.352 0-1.95.826-.156-.352-.156-.690v-.0705q0-1.1 2.1-1.52h.106q1.21 0 1.21 1.59 0 1.64-2.68 2.89l-.629.136q-1.71 0-2.32-1.44l-.106-.896q0-3.12 3.21-5.31.810-.413 1.21-.413z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m107 78.2q.453 0 .664.433v.171q0 .262-3.9 7.89-.378 1.3-.997 1.3-.498-.181-.498-.695l4.57-9.01.0856-.0856h.0805z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m114 79.4q.357.0956.357.488v.0654q-.503 7.43-.715 7.43l-.0755.0705h-.211q-.372 0-.503-.347.141-.992.141-2.78h-.0705l-3.01.695-.211.277v1.32q0 .589-.433.836h-.141q-.403 0-.503-.347.498-7.51 1.43-7.51h.141l.216.282q-.503 2.49-.503 3.68 3.3-.433 3.3-1.04l.287-2.92.503-.206z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m120 79.4q.654 0 .654.544v.136q0 .750-1.17.750l-1.45.0705q-.654 3.49-.654 6-.176.544-.362.544h-.221q-.378 0-.438-.206.367-3.86.8-6.27l-2.18.342q-.307 0-.362-.614 0-1.02 1.82-1.02 1.09-.272 3.57-.272z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m124 79.4h.131q.322.176.322.549v.141q0 2.24.393 5.24h.0654q2.15-5.65 2.54-5.65h.196q.287 0 .911 3.93.584 2.01.584 3.37-.191.483-.584.483-.262 0-.715-3.38l-.524-2.2q-.559.896-2.02 4.68-.418.428-.715.483-.846 0-.846-2.28l-.322-2.89h-.0654l-1.95 4.4q-.176 1.1-.327 1.1h-.257l-.262-.272v-.347q0-.926 1.63-3.99 1.16-3.22 1.5-3.31l.327-.0705z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m130 79.4h.0705q.327 0 .549.337-.478 3.48-.685 6.23l3.93-.810.136.201v.408q0 .926-4.27 1.69-.760-.136-.760-.473.564-7.45.826-7.45l.206-.136z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m144 79.5h.297q.559 0 .670.901v.141q0 1.36-1.03 1.8l-.121-.141v-.0705l.307-1.18-.242-.136q-1.51 0-3.58 2.84-.493.861-.493 1.31v.0705q0 1.11 1.34 1.11h.0554q1.29 0 2.85-.690h.186q.242.111.242.483v.277q-1.29 1.32-3.03 1.32-2.37-.247-2.37-2.36v-.141q0-2.69 3.82-5.27.725-.277 1.1-.277z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m149 79.4q2.15.297 2.15 2.57 0 2.98-2.36 4.93-.972.554-1.74.554-1.87 0-2.41-2.01l-.0503-.624v-.211q0-3.25 2.97-4.93.745-.277 1.43-.277zm-3.74 5.42q.775 1.18 2.05 1.18 2.05 0 2.86-2.43l.101-.765q0-1.71-1.69-2.01h-.156q-1.39 0-2.91 2.78-.257.836-.257 1.25z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m154 79.4h.307q2.19 0 2.68 1.74l.0604.554q0 3.46-5.12 5.7l-.302.0705h-.0654q-.136 0-.242-.488l.609-5.98q-.367 0-.367-.206v-.141q0-1.11.977-1.11l1.46-.141zm-1.22 1.46q-.549 3.56-.549 4.79v.347q3.84-1.92 3.84-3.61v-.0654q0-.977-.549-.977-.680-.483-2.19-.483h-.549z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m163 79.5q.347.0755.347.529-.111.856-.690.856-3.8 0-3.8 1.06l-.0705.594v.327q2.48-.594 3.38-.594h.136q.347.151.347.659 0 .725-.966.725-3.18.413-3.18.992l-.0654.659v.262q0 .594.755.659 1.19-.131 2.97-.594h.206q.277.106.277.463v.196q0 .810-3.45 1.25h-.206q-1.24 0-1.38-1.58 0-1.16.483-4.42l-.136-.398q0-1.34 4.14-1.58l.896-.0654z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m131 66.8q.458 0 1.1 1.72 1.24 2.54 2.75 4.34.508-4.97.755-5.85l.277-.206h.206q.206 0 .206.277-.619 7.1-.755 7.58l-.413.136q-1.1 0-3.71-4.68l-.277-.277-.0705.206-.206 3.17v.413l.0705.413q-.0906.826-.549.826-.423-.151-.483-.413.529-7.44.755-7.44l.347-.206z"
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.step >= 3) ? _c('g', {
    attrs: {
      "transform": "matrix(1.76 0 0 1.76 10.3 -8.23)"
    }
  }, [_c('g', {
    attrs: {
      "stroke": "#000",
      "transform": "matrix(.599 0 0 .599 -220 71.4)"
    }
  }, [_c('circle', {
    attrs: {
      "r": "40.1",
      "fill-opacity": ".415",
      "stroke-linecap": "round",
      "cy": "-59.9",
      "cx": "750",
      "stroke-width": "2.41",
      "fill": "#ff8103"
    }
  }), _vm._v(" "), _c('g', {
    class: {
      'svg-swing': _vm.step === 3
    },
    attrs: {
      "transform": "matrix(.188 0 0 .188 603 15.7)"
    }
  }, [_c('g', {
    attrs: {
      "stroke-width": ".949",
      "transform": "translate(846 -330)"
    }
  }, [_c('path', {
    attrs: {
      "d": "m-145-52.2c-44.7-77.3-81-141-80.8-142 .375-.978 13.3-1.22 64.9-1.22h64.4l16.6 28.7c9.12 15.8 16.9 28.7 17.3 28.7.380 0 8.15-12.9 17.3-28.7l16.6-28.7h64.4c51.6 0 64.5.243 64.9 1.22.617 1.61-161 282-163 282-.918.192-27.8-45.4-82.6-140z",
      "fill": "#4bb885"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m-144-52.1c-44.3-76.7-80.8-140-80.9-141-.261-1.13 9.3-1.33 64.1-1.33h64.4l16.6 28.7c9.12 15.8 17 28.7 17.5 28.6.518-.0434 8.41-13 17.5-28.7l16.6-28.6h64.3c55 0 64.3.195 64 1.34-.617 2.7-162 280-163 280-.538 0-37.3-62.8-81.6-140zm157-4.8c40.2-70.1 73.4-127 73.8-128 .554-1.44-1.55-1.55-25.8-1.32l-26.4.252-47.7 82.5c-33.1 57.2-48.1 82.5-49.2 82.5-1.09 0-16.2-25.3-49.2-82.5l-47.7-82.5-26.4-.252c-24.1-.231-26.3-.121-25.8 1.31.711 1.85 146 254 148 256 .786 1.01 1.16 1.01 2.1 0 .626-.678 34.1-58.3 74.3-128z",
      "fill": "#435364"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m-63 85.8c-2.3-3.9-159-276-160-277l-1.14-2.14 63.7.244 63.7.244 16.5 28.5c10.8 18.7 17 28.5 18 28.5 1.01 0 7.15-9.71 18-28.5l16.5-28.5 63.7-.244 63.7-.244-1.13 2.14c-2.83 5.34-160 276-160 277-.413.437-.964.437-1.22 0zm77.6-143c40.9-70.8 74.1-130 73.7-130-.427-.427-12.9-.662-27.6-.523l-26.9.252-47.5 82.3c-26.1 45.3-48 82.3-48.5 82.3-.538 0-22.4-37-48.5-82.3l-47.5-82.3-26.9-.252c-14.8-.139-27.2.0953-27.6.520-.659.659 146 256 149 260 .996 1.2 1.42 1.23 2.46.193.690-.690 34.8-59.3 75.7-130zm-32.3-54.5c23.3-40.4 42.1-74 41.9-74.7-.385-1-5.15-1.26-23.2-1.26-20.3 0-22.9.178-24.6 1.66-1.03.913-9.9 15.6-19.7 32.7-9.81 17.1-18.3 31.1-18.9 31.1-.616 0-9.14-14-18.9-31.1-9.81-17.1-18.7-31.8-19.7-32.7-1.67-1.48-4.3-1.66-24.6-1.66-17.9 0-22.8.264-23.2 1.25-.362.944 76.9 136 84.6 148 1.21 1.88 1.64 2.03 2.66.949.669-.712 20.3-34.3 43.6-74.7z",
      "fill": "#0a0e0e"
    }
  })])])]), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m200 65.3h.307q2.19 0 2.68 1.74l.0604.554q0 3.46-5.12 5.7l-.302.0705h-.0654q-.136 0-.242-.488l.609-5.98q-.367 0-.367-.206v-.141q0-1.11.977-1.11l1.46-.141zm-1.22 1.46q-.549 3.56-.549 4.79v.347q3.84-1.92 3.84-3.61v-.0654q0-.977-.549-.977-.680-.483-2.19-.483h-.549z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m205 65.3h.473q.237 0 .237.277-.554 4.52-.554 6.27v.765q-.156.765-.785.765h-.156l-.317-.277q.317-4.74.790-7.53l.312-.277z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m211 65.3h.106q.695.0856.695.675v.136q0 1.02-.695 1.89h-.106q-.111-.0302-.216-.337l.272-1.01-.211-.136q-.740.0654-2.72 1.62v.0654l3.51.680q.534.423.534 1.42v.403q0 1.36-1.76 2.37-.690.272-1.33.272h-.111q-1.83 0-2.24-1.62v-.408q0-.745.372-.745.367 1.29 1.33 1.29 0 .131.8.131 1.18 0 2.29-1.21 0-.805-3.41-1.02-1.23-.342-1.23-1.01 0-1.65 3.3-3.31l.8-.136z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m216 65.3q2 0 2 1.17 0 2.32-4.38 4.2-.322 0-.322.413-.0453 2.28-.453 2.28h-.322q-.131-.0302-.257-.342l.579-5.65h-.0654q-.257 0-.257-.624 0-1.01 1.16-1.17l2.32-.277zm-2.58 4q2.21-.579 3.35-1.93l.126-.418v-.136l-.322-.0705h-.322q-2.57.141-2.57.483l-.262 2.07z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m219 65.3h.0705q.327 0 .549.337-.478 3.48-.685 6.23l3.93-.810.136.201v.408q0 .926-4.27 1.69-.760-.136-.760-.473.564-7.45.826-7.45l.206-.136z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m226 65.3h.242q.498 0 1.26 4.61.604 2.17.604 2.95-.126.413-.483.413-.463 0-.664-2.2l-.0604-.0654h-.0604q-.785.0101-3.31.961-.242 1.37-.785 1.37-.362-.141-.362-.549 0-.795 3.32-7.29l.302-.206zm-.121 1.92q-.725 1.31-1.33 2.75h.423q.614 0 1.57-.277l-.544-2.48h-.121z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m230 65.3 1.54 2.34.675.554q1.28-2.28 1.78-2.75h.307l.247.277q-.0503.367-2.89 5.15-.715 1.34-1.05 2.41l-.181.0705q-.433-.201-.433-.619.0252-.539 1.47-3.37-2.09-2.25-2.09-3.64.388-.413.614-.413z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m238 65.3q.337 0 .337 2.34l.453 2.96h.111q0-.257 1.35-2.75.211-1.65.790-1.65h.111q.342 0 .564 2.54.378 1.74.564 2.06.181-.876 1.81-5.16.237-.272.453-.272.302 0 .393.272 0 .352-1.69 4.61-.282 1.01-.508 2.75-.181.342-.453.342-.513 0-.785-2.34-.554-2.28-.680-2.48l-1.13 2.2q-.282.644-.508 2.2-.151.252-.448.342-.473 0-.790-3.57-.453-2.53-.453-4.06 0-.206.508-.342z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m247 65.3h.473q.237 0 .237.277-.554 4.52-.554 6.27v.765q-.156.765-.785.765h-.156l-.317-.277q.317-4.74.790-7.53l.32-.277z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m254 65.3q.654 0 .654.544v.136q0 .750-1.17.750l-1.45.0705q-.654 3.49-.654 6-.176.544-.362.544h-.221q-.378 0-.438-.206.367-3.86.8-6.27l-2.18.342q-.307 0-.362-.614 0-1.02 1.82-1.02 1.09-.272 3.57-.272z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m260 65.3q.357.0956.357.488v.0654q-.503 7.43-.715 7.43l-.0755.0705h-.211q-.372 0-.503-.347.141-.992.141-2.78h-.0705l-3.01.695-.211.277v1.32q0 .589-.433.836h-.141q-.403 0-.503-.347.498-7.51 1.43-7.51h.141l.216.282q-.503 2.49-.503 3.68 3.3-.433 3.3-1.04l.287-2.92.503-.206z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m205 78.2h.201q.272.111.272.483 0 .503-2.1 4.34-1.03 2.87-1.29 3.1l-.675.136q-.443 0-.614-1.59-1.35-4.78-1.35-5.85.111-.312.408-.483h.272q.367 0 .745 2.89l.815 3.03h.0654q.705-1.86 3.05-5.92l.206-.136z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m207 78.2q.322.131.357.272-.574 3.59-.574 5.22v.745q1.92 0 3.15-1.76.483-4.27.931-4.27h.0755q.428.0453.428.206-.644 3.89-.644 5.82v1.08q0 .534-.433.745h-.287l-.282-.272v-.136l.0705-1.15q-.257 0-2.79 1.28l-.503.136q-.861-.111-.861-.745v-.0654q.524-7.11 1.22-7.11h.146z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m217 78.2q.347.0755.347.529-.111.856-.690.856-3.8 0-3.8 1.06l-.0705.594v.327q2.48-.594 3.38-.594h.136q.347.151.347.659 0 .725-.966.725-3.18.413-3.18.992l-.0654.659v.262q0 .594.755.659 1.19-.131 2.97-.594h.206q.277.106.277.463v.196q0 .810-3.45 1.25h-.206q-1.24 0-1.38-1.58 0-1.16.483-4.42l-.136-.398q0-1.34 4.14-1.58l.896-.0654z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m224 79.3q.388.166.428.342l-.171 1.53 1.44-.342.171.257v.508q0 .856-1.62 1.11h-.171l.0856.851v.0856q0 .463-.428.680h-.337q-.458 0-.599-.342v-.166l.0856-1.02h-.936q-.458 0-.594-.342v-.171q0-.720.508-1.02h1.19v-.685l-.0856-.337q0-.851 1.02-.936z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m236 78.2q.347.0755.347.529-.111.856-.690.856-3.8 0-3.8 1.06l-.0705.594v.327q2.48-.594 3.38-.594h.136q.347.151.347.659 0 .725-.966.725-3.18.413-3.18.992l-.0654.659v.262q0 .594.755.659 1.19-.131 2.97-.594h.206q.277.106.277.463v.196q0 .810-3.45 1.25h-.206q-1.24 0-1.38-1.58 0-1.16.483-4.42l-.136-.398q0-1.34 4.14-1.58l.896-.0654z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m239 78.2h.242q.498 0 1.26 4.61.604 2.17.604 2.95-.126.413-.483.413-.463 0-.664-2.2l-.0604-.0654h-.0604q-.785.0101-3.31.961-.242 1.37-.785 1.37-.362-.141-.362-.549 0-.795 3.32-7.29l.302-.206zm-.121 1.92q-.725 1.31-1.33 2.75h.423q.614 0 1.57-.277l-.544-2.48h-.121z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m246 78.2h.0503q.669 0 .896 1.31l-.106.136h-.0503l-.423-.136q-1.73.257-3.63 2.41-.529.936-.529 1.31v.277q0 1.1 2.27 1.37 1.42 0 2.15-1.52l-.629-.272q-.352 0-1.95.826-.156-.352-.156-.690v-.0705q0-1.1 2.1-1.52h.106q1.21 0 1.21 1.59 0 1.64-2.68 2.89l-.629.136q-1.71 0-2.32-1.44l-.106-.896q0-3.12 3.21-5.31.810-.413 1.21-.413z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m249 78.2h.0705q.327 0 .549.337-.478 3.48-.685 6.23l3.93-.810.136.201v.408q0 .926-4.27 1.69-.760-.136-.760-.473.564-7.45.826-7.45l.206-.136z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m258 78.2q.347.0755.347.529-.111.856-.690.856-3.8 0-3.8 1.06l-.0705.594v.327q2.48-.594 3.38-.594h.136q.347.151.347.659 0 .725-.966.725-3.18.413-3.18.992l-.0654.659v.262q0 .594.755.659 1.19-.131 2.97-.594h.206q.277.106.277.463v.196q0 .810-3.45 1.25h-.206q-1.24 0-1.38-1.58 0-1.16.483-4.42l-.136-.398q0-1.34 4.14-1.58l.896-.0654z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "marker-end": "url(#Arrow1Mend-5)",
      "d": "m142 18.6s7.74-6.01 31.9-6.17c18.2-.125 26.1 3.36 36 6.42",
      "stroke": "#000",
      "stroke-dasharray": "3.21949451, 0.80487363",
      "stroke-width": ".805",
      "fill": "none"
    }
  })]) : _vm._e()])])])]) : _vm._e()]), _c('eg-transition', {
    attrs: {
      "enter": "slideInRight",
      "leave": "fadeOutRight"
    }
  }, [(_vm.step > 3) ? _c('div', {
    staticClass: "subslide"
  }, [_c('p', {
    staticClass: "center"
  }, [_vm._v("And if you like plots, you can use awesome libraries like Chart.js")]), _c('div', {
    staticClass: "figure"
  }, [_c('p', {
    staticClass: "caption",
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }), _c('chart', {
    attrs: {
      "data": _vm.figureData(_vm.step),
      "options": _vm.figureOptions,
      "type": "bar",
      "height": 250
    }
  })], 1)]) : _vm._e()])], 1)]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 395 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "frontpage"
  }, [_c('div', {
    staticClass: "content"
  }, [_vm._m(0), _c('h2', [_vm._v("A slideshow framework for hackers")]), _c('iframe', {
    staticClass: "github-star",
    attrs: {
      "src": "https://ghbtns.com/github-btn.html?user=zulko&repo=eagle.js&type=star&count=true&size=large",
      "frameborder": "0",
      "scrolling": "0",
      "width": "160px",
      "height": "30px"
    }
  }), _c('p', [_vm._v("Eagle.js is a web-based slideshow framework for Vue.js.\nIt supports animations, themes, interactive widgets (for web demos),\nand makes it easy to reuse components, slides and styles across presentations.\n")]), _c('p', [_vm._v("Most of all, Eagle aims at offering a simple and very hackable API so you\ncan get off the beaten tracks and craft the slideshows you really want.\n\n\n")]), _c('div', {
    staticClass: "thumbnails"
  }, _vm._l((_vm.slideshows), function(slideshow) {
    return _c('div', {
      staticClass: "box-card"
    }, [_c('router-link', {
      attrs: {
        "to": slideshow.infos.path
      },
      nativeOn: {
        "click": function($event) {
          _vm.click($event)
        }
      }
    }, [_c('div', {
      staticClass: "embedded-slideshow-container"
    }, [_c(slideshow, {
      tag: "component",
      attrs: {
        "embedded": true,
        "keyboardNavigation": false,
        "mouseNavigation": false
      }
    })], 1)]), _c('div', {
      staticClass: "caption"
    }, [_c('h3', [_vm._v(_vm._s(slideshow.infos.title))]), _c('p', {
      staticClass: "thumbnail-description"
    }, [_vm._v(_vm._s(slideshow.infos.description))])])], 1)
  }))], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', [_c('span', {
    staticClass: "logo"
  }), _c('span', [_vm._v("Eagle")]), _c('span', {
    staticClass: "grey"
  }, [_vm._v(".js")])])
}]}

/***/ }),
/* 396 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "end-credits-container"
  }, [_c('div', {
    staticClass: "end-credits"
  }, _vm._l((_vm.categories), function(category, name) {
    return _c('div', {
      staticClass: "end-credit-category"
    }, [_c('h4', {
      staticClass: "center"
    }, [_vm._v(_vm._s(name.toUpperCase()))]), _vm._l((category), function(person) {
      return _c('div', {
        staticClass: "end-credit-line"
      }, [_c('p', {
        staticClass: "left"
      }, [_vm._v(_vm._s(person.name))]), _c('p', {
        staticClass: "right"
      }, [_vm._v(_vm._s(person.role))])])
    })], 2)
  }))])
},staticRenderFns: []}

/***/ }),
/* 397 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "AwesomeEmbeddedSlideshow"
    }
  }, [_c('div', {
    staticClass: "eg-slideshow"
  }, [_c('slide', {
    staticClass: "slide-intro",
    attrs: {
      "enter": "fadeIn",
      "leave": "fadeOut"
    }
  }, [_c('eg-transition', {
    attrs: {
      "enter": "bounceInRight",
      "leave": "bounceOutLeft"
    }
  }, [_c('h3', [_vm._v("Oh hi there, "), _c('br'), _vm._v(_vm._s(_vm.username) + " who likes " + _vm._s(_vm.preference))])])], 1), _c('slide', {
    staticClass: "slide-two",
    attrs: {
      "steps": 2,
      "enter": "fadeIn",
      "leave": "fadeOut"
    }
  }, [_c('eg-transition', {
    attrs: {
      "enter": "bounceInLeft",
      "leave": "bounceOutRight"
    }
  }, [_c('div', {
    staticClass: "div"
  }, [_c('h3', [_vm._v("Hope you like it so far.")]), _c('h4', [_vm._v("By the way, dope theme, Zulko.")])])]), _c('eg-transition', {
    attrs: {
      "enter": "slideInRight",
      "leave": "slideOutRight"
    }
  }, [(_vm.step === 2) ? _c('p', {
    staticClass: "thanks"
  }, [_vm._v("Thanks mate. Big fan.")]) : _vm._e()])], 1), _c('slide', {
    staticClass: "slide-three",
    attrs: {
      "enter": "fadeIn",
      "leave": "fadeOut"
    }
  }, [_c('eg-transition', {
    attrs: {
      "enter": "bounceInLeft",
      "leave": "bounceOutRight"
    }
  }, [_c('h3', [_vm._v("Now " + _vm._s(_vm.username) + ", "), _c('br'), _vm._v("see anything you like ?")])])], 1), _c('slide', {
    staticClass: "slide-four",
    attrs: {
      "enter": "fadeIn",
      "leave": "fadeOut"
    }
  }, [_c('eg-transition', {
    attrs: {
      "enter": "bounceInLeft",
      "leave": "bounceOutRight"
    }
  }, [_c('h4', [_vm._v("\"OMG AN "), _c('b', [_vm._v("EMBEDDED")]), _vm._v(" SLIDESHOW I'M DYING "), _c('br'), _vm._v(" I'VE NEVER SEEN ONE BEFORE "), _c('br'), _vm._v(" BECAUSE I LIVE UNDER A ROCK\"")])])], 1), _c('slide', {
    staticClass: "slide-five",
    attrs: {
      "steps": 4
    }
  }, [_c('eg-transition', {
    attrs: {
      "leave": "fadeOut"
    }
  }, [(_vm.step === 1) ? _c('div', {
    staticClass: "subslide"
  }, [_c('h3', [_vm._v("Oh really " + _vm._s(_vm.username) + " ? "), _c('br'), _vm._v(" Want some more ?")])]) : _vm._e()]), _c('eg-transition', {
    attrs: {
      "enter": "bounceInDown",
      "leave": "bounceOutDown"
    }
  }, [(_vm.step >= 2) ? _c('div', {
    staticClass: "subslide"
  }, [(_vm.step === 2) ? _c('h3', [_vm._v("*Boom*")]) : _vm._e(), (_vm.step === 3) ? _c('h3', [_vm._v("Roooo...")]) : _vm._e(), (_vm.step === 4) ? _c('h3', [_vm._v("Hnnnnng...")]) : _vm._e(), _c('div', {
    staticClass: "embedded-slideshow-container",
    attrs: {
      "id": "ImageSlideshow"
    }
  }, [_c('example-image-slideshow', {
    attrs: {
      "embedded": true,
      "preference": _vm.preference
    }
  })], 1)]) : _vm._e()])], 1), _c('slide', {
    staticClass: "slide-six"
  }, [_c('h3', [_vm._v("That's all for today " + _vm._s(_vm.username) + " "), _c('br'), _vm._v(" Hope you liked it")])])], 1)])
},staticRenderFns: []}

/***/ }),
/* 398 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "eg-switch"
  }, [_c('div', {
    staticClass: "switch",
    style: ({
      'font-size': _vm.fontsize
    }),
    on: {
      "click": _vm.toggle
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": _vm.checked
    }
  }), _c('div', {
    staticClass: "slider",
    class: {
      checked: _vm.checked
    }
  }), _c('div', {
    staticClass: "sliderdot",
    class: {
      checked: _vm.checked
    }
  })]), _c('span', {
    class: {
      unchecked: !_vm.checked
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 399 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 400 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('eg-transition', {
    attrs: {
      "enter": _vm.enter,
      "leave": _vm.leave
    }
  }, [(_vm.active) ? _c('div', {
    staticClass: "eg-slide image-slide",
    style: (_vm.style)
  }) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 401 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "eg-code-block container"
  }, [_c('div', {
    staticClass: "box hljs code-box",
    attrs: {
      "id": _vm.id
    }
  }, [_c('pre', [_c('code', {
    class: _vm.lang ? _vm.lang : '',
    attrs: {
      "id": _vm.id3
    }
  })])]), _c('div', {
    staticClass: "box comments-box"
  }, [_c('pre', [_c('code', {
    attrs: {
      "id": _vm.id2
    }
  }, [_vm._t("default")], 2)])])])
},staticRenderFns: []}

/***/ }),
/* 402 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "eg-radio"
  }, [_c('div', {
    staticClass: "radiobutton",
    style: ({
      'font-size': _vm.fontsize
    }),
    on: {
      "click": _vm.select
    }
  }, [_c('div', {
    staticClass: "radio"
  }), _c('div', {
    staticClass: "radiodot",
    class: {
      checked: _vm.value === _vm.label
    }
  })]), _vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 403 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('eg-transition', {
    attrs: {
      "enter": _vm.enter,
      "leave": _vm.leave
    }
  }, [(_vm.active) ? _c('div', {
    staticClass: "eg-slide"
  }, [_c('div', {
    staticClass: "eg-slide-content"
  }, [(_vm.step < 12) ? _c('h3', [_vm._v("Slide reuse")]) : _c('h3', [_vm._v("Slideception !!")]), _c('eg-transition', {
    attrs: {
      "leave": "bounceOutLeft"
    }
  }, [(_vm.step <= 2) ? _c('div', {
    staticClass: "subslide"
  }, [_c('p', [_vm._v("Place a slide in a separate file to reuse it in different slideshows.\nYou can also import the slides of a whole slideshow inside another.\n")]), _c('eg-code-block', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v(".eg-slideshow\n\n  slide\n    h1 My research projects\n\n  introducing-myself "), _c('eg-code-comment', [_vm._v(" One Inserted/Reused slide ")]), _vm._v("\n\n  slides-first-project "), _c('eg-code-comment', [_vm._v(" Inserted slideshow ! ")]), _vm._v("\n  slides-other-project(:firstSlide=3) "), _c('eg-code-comment', [_vm._v(" Cut slides out ")]), _vm._v("\n\n  slide\n    h3 Thank you for listening\n    p Please hire me\n")], 1), _c('eg-transition', {
    attrs: {
      "enter": "fadeIn"
    }
  }, [(_vm.step === 2) ? _c('p', [_vm._v("For instance, this very complex slide you are watching is written in its own file.")]) : _vm._e()])], 1) : _vm._e()]), _c('eg-transition', {
    attrs: {
      "enter": "bounceInRight"
    }
  }, [((_vm.step >= 3) && (_vm.step < 15)) ? _c('div', {
    staticClass: "subslide"
  }, [((3 <= _vm.step) && (_vm.step < 6)) ? _c('p', [_vm._v("You: Wait did you say "), _c('i', [_vm._v("complex")]), _vm._v(" ?"), ((4 <= _vm.step) && (_vm.step < 6)) ? _c('span', [_vm._v("  How is this slide "), _c('i', [_vm._v("complex")]), _vm._v("?")]) : _vm._e()]) : _vm._e(), ((6 <= _vm.step) && (_vm.step <= _vm.steps)) ? _c('p', [_vm._v("You: ...")]) : _vm._e(), _c('eg-transition', {
    attrs: {
      "enter": "lightSpeedIn"
    }
  }, [(_vm.step >= 5) ? _c('div', {
    staticClass: "embedded-slideshow-container",
    attrs: {
      "id": "awesome-slideshow"
    }
  }, [_c('awesome-embedded-slideshow', {
    attrs: {
      "embedded": true,
      "username": _vm.username,
      "preference": _vm.preference
    }
  })], 1) : _vm._e()]), _c('eg-transition', {
    attrs: {
      "enter": "slideInUp"
    }
  }, [((11 < _vm.step) && (_vm.step <= 13)) ? _c('p', [_vm._v("If you lost track: you are watching a slideshow embedded\nin a slideshow embedded in a slide inserted in a slideshow.")]) : _vm._e()])], 1) : _vm._e()])], 1)]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 404 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "enter-active-class": _vm.enter ? 'animated ' + _vm.enter : '',
      "leave-active-class": _vm.leave ? 'animated ' + _vm.leave : ''
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "eg-theme-agrume",
    attrs: {
      "id": "IntroducingEagle"
    }
  }, [_c('div', {
    staticClass: "eg-slideshow"
  }, [_c('slide', {
    attrs: {
      "enter": "fadeIn",
      "leave": "bounceOutLeft"
    }
  }, [_c('div', {
    staticClass: "center frontpage"
  }, [_c('h1', [_vm._v("Eagle.js")]), _c('img', {
    attrs: {
      "src": __webpack_require__(374)
    }
  }), _c('h4', [_vm._v("A Slideshow Framework for Vue.js")]), _c('eg-triggered-message', {
    attrs: {
      "trigger": _vm.slideTimer >= 2,
      "duration": 6,
      "position": "top right",
      "enter": "bounceInRight",
      "leave": "bounceOutRight"
    }
  }, [_c('p', [_vm._v("Next:")]), _c('img', {
    staticClass: "control-schema",
    attrs: {
      "src": __webpack_require__(368)
    }
  }), _c('p', [_vm._v("Previous:")]), _c('img', {
    staticClass: "control-schema",
    attrs: {
      "src": __webpack_require__(369)
    }
  })])], 1)]), _c('slide', {
    attrs: {
      "steps": 4,
      "enter": "bounceInRight",
      "leave": "bounceOutDown"
    }
  }, [_c('h3', [_vm._v("Vue"), _c('div', {
    staticClass: "inline animated infinite pulse heart"
  }), _vm._v("slideshows")]), _c('div', {
    staticClass: "center"
  }, [_c('eg-transition', {
    attrs: {
      "enter": "bounceInLeft",
      "leave": "bounceOutLeft"
    }
  }, [(_vm.step >= 2) ? _c('p', [_c('b', [_vm._v("Vue.js")]), _vm._v(" is one of the coolest frontend frameworks out there")]) : _vm._e()]), _c('eg-transition', {
    attrs: {
      "enter": "bounceInRight",
      "leave": "bounceOutRight"
    }
  }, [(_vm.step >= 3) ? _c('p', [_c('b', [_vm._v("Vue.js")]), _vm._v(" supports components and transitions out of the box")]) : _vm._e()]), _c('eg-transition', {
    attrs: {
      "enter": "bounceInLeft",
      "leave": "bounceOutLeft"
    }
  }, [(_vm.step >= 4) ? _c('p', [_c('b', [_vm._v("Eagle.js")]), _vm._v(" adds navigation logics, scalable components, etc.")]) : _vm._e()])], 1)]), _c('slide', {
    attrs: {
      "steps": 6,
      "enter": "bounceInDown"
    }
  }, [_c('h3', [_vm._v("What's in it for you")]), _c('eg-transition', {
    attrs: {
      "enter": "fadeIn",
      "leave": "fadeOut"
    }
  }, [(_vm.step >= 2) ? _c('div', {
    staticClass: "quarter"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(372)
    }
  }), _c('h4', [_vm._v("EASE OF USE")]), _c('p', [_vm._v("Clear syntax, live preview")])]) : _vm._e()]), _c('eg-transition', {
    attrs: {
      "enter": "fadeIn",
      "leave": "fadeOut"
    }
  }, [(_vm.step >= 3) ? _c('div', {
    staticClass: "quarter"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(373)
    }
  }), _c('h4', [_vm._v("MODULARITY")]), _c('p', [_vm._v("Reuse slides and styles")])]) : _vm._e()]), _c('eg-transition', {
    attrs: {
      "enter": "fadeIn",
      "leave": "fadeOut"
    }
  }, [(_vm.step >= 4) ? _c('div', {
    staticClass: "quarter"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(371)
    }
  }), _c('h4', [_vm._v("INTERACTIVITY")]), _c('p', [_vm._v("Embed forms and live demos")])]) : _vm._e()]), _c('eg-transition', {
    attrs: {
      "enter": "fadeIn",
      "leave": "fadeOut"
    }
  }, [(_vm.step >= 5) ? _c('div', {
    staticClass: "quarter"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(370)
    }
  }), _c('h4', [_vm._v("PORTABILITY")]), _c('p', [_vm._v("Play in any browser")])]) : _vm._e()]), _c('eg-transition', {
    attrs: {
      "enter": "fadeIn",
      "leave": "fadeOut"
    }
  }, [(_vm.step >= 6) ? _c('eg-modal', [_c('h3', [_vm._v("You right now:")]), _c('div', {
    staticClass: "center"
  }, [_c('img', {
    style: ({
      height: '10em'
    }),
    attrs: {
      "src": _vm.preloadedImages['youRightNow']
    }
  })])]) : _vm._e()], 1)], 1), _c('slide', {
    attrs: {
      "steps": 4,
      "leave": "fadeOut"
    }
  }, [_c('eg-transition', {
    attrs: {
      "enter": "flipInX"
    }
  }, [_c('h3', [_vm._v("Show me the codey !!!")])]), _c('eg-transition', {
    attrs: {
      "enter": "flipInX"
    }
  }, [_c('p', [_vm._v("Here is how you slideshow with Eagle.js:")])]), _c('eg-transition', {
    attrs: {
      "enter": "flipInX"
    }
  }, [_c('eg-code-block', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v(".eg-slideshow\n\n  slide "), _c('eg-code-comment', {
    attrs: {
      "active": _vm.step === 2,
      "enter": "flipInY"
    }
  }, [_vm._v(" EAGLE SLIDE TAG")]), _vm._v("\n    h1 EagleJS "), _c('eg-code-comment', {
    attrs: {
      "active": _vm.step === 3,
      "enter": "flipInY"
    }
  }, [_vm._v(" SIMPLIFIED HTML (PUG)")]), _vm._v("\n    img(src='logo.png')\n\n  slide(enter='slideInLeft', :steps=4)\n    h3 EagleJS is the greatest slideshow framework\n    p(v-if=\"step >= 2\") The best !  "), _c('eg-code-comment', {
    attrs: {
      "active": _vm.step === 4,
      "enter": "flipInY"
    }
  }, [_vm._v(" BULLET POINT WITH V-IF")]), _vm._v("\n    p(v-if=\"step >= 3\") All others are failed frameworks.\n    p(v-if=\"step >= 4\") Not even real frameworks. Fake !\n")], 1)], 1)], 1), _c('slide', {
    staticClass: "boredYet",
    attrs: {
      "enter": "fadeIn",
      "mouseNavigation": false,
      "keyboardNavigation": false
    }
  }, [_c('h3', [_vm._v("Bored yet ?")]), _c('div', {
    staticClass: "center"
  }, [_c('p', [_vm._v("What shall I call you ?")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    staticClass: "center",
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  }), _c('p', [_vm._v(_vm._s(_vm.username)), (_vm.username.length) ? _c('span', [_vm._v(",")]) : _vm._e(), _vm._v(" I got you.\nTell me what you like, I'll skip the rest:\n")]), _vm._l((_vm.slideCategories), function(category, name) {
    return _c('div', {
      staticClass: "inline"
    }, [_c('eg-toggle', {
      key: name,
      attrs: {
        "width": 30,
        "on-text": "",
        "off-text": "",
        "on-color": "#ffeeaa"
      },
      on: {
        "change": function($event) {
          _vm.changeMessage(category.changeMessage)
        }
      },
      model: {
        value: (category.show),
        callback: function($$v) {
          category.show = $$v
        }
      }
    }, [_c('p', {
      staticClass: "label"
    }, [_vm._v(_vm._s(category.name))]), _c('eg-triggered-message', {
      attrs: {
        "trigger": !category.show,
        "duration": 3,
        "position": "top right",
        "enter": "bounceInRight",
        "leave": "bounceOutRight"
      }
    }, [_c('p', {
      domProps: {
        "innerHTML": _vm._s(_vm.message(category.name))
      }
    })])], 1)], 1)
  })], 2), _c('div', {
    staticClass: "center"
  }, [_c('p', [_vm._v("What's your favourite ?")]), _vm._l((_vm.preferences), function(pref) {
    return _c('eg-radio', {
      staticClass: "inline",
      attrs: {
        "label": pref.label
      },
      model: {
        value: (_vm.preference),
        callback: function($$v) {
          _vm.preference = $$v
        }
      }
    }, [_c('p', [_vm._v(_vm._s(pref.text))]), _c('eg-triggered-message', {
      attrs: {
        "trigger": _vm.preference === pref.label,
        "duration": 3,
        "position": "top right",
        "enter": "bounceInRight",
        "leave": "bounceOutRight"
      }
    }, [_c('p', [_vm._v(_vm._s(_vm.message(pref.label)))])])], 1)
  })], 2), _c('div', {
    staticClass: "button prev",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.previousSlide($event)
      }
    }
  }, [_c('span', [_vm._v("< Prev. slide")]), _c('br'), _c('span', {
    staticClass: "small"
  }, [_vm._v(" Ctrl + left")])]), _c('div', {
    staticClass: "button next",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.nextSlide($event)
      }
    }
  }, [_c('span', [_vm._v("Next slide >")]), _c('br'), _c('span', {
    staticClass: "small"
  }, [_vm._v("Ctrl + right")])])]), _c('themes-slideshow', {
    attrs: {
      "skip": !_vm.slideCategories.themes.show,
      "inserted": true,
      "firstSlide": "3"
    }
  }), _c('awesome-inserted-slide', {
    attrs: {
      "username": _vm.username,
      "preference": _vm.preference,
      "enter": "fadeIn",
      "leave": "hinge",
      "skip": !_vm.slideCategories['slideReuse'].show
    }
  }), _c('figures-slide', {
    attrs: {
      "enter": "flipInY",
      "leave": "rollOut",
      "skip": ['slideReuse', 'themes', 'interactivity'].some(function(e) {
        return _vm.slideCategories[e].show
      })
    }
  }), _c('slide', {
    attrs: {
      "enter": "zoomIn",
      "leave": "fadeOut"
    }
  }, [_c('h3', [_vm._v("That's all folks !")]), _c('p', {
    staticClass: "center"
  }, [_vm._v("Think you can help ?")]), _c('div', {
    staticClass: "center"
  }, [_c('img', {
    staticClass: "computerkid shadowbox",
    attrs: {
      "src": "http://i.imgur.com/AAlntwU.gif"
    }
  })]), _c('p', {
    staticClass: "center"
  }, [_vm._v("I'm not a frontend person, so everyone"), _c('br'), _vm._v("\nis welcome to contribute to "), _c('a', {
    attrs: {
      "href": "https://github.com/Zulko/eagle.js",
      "target": "_blank"
    }
  }, [_vm._v(" the repo")]), _vm._v(".\n\n")])]), _c('slide', {
    attrs: {
      "enter": "fadeIn"
    }
  }, [_c('h3', [_vm._v("Thank you !")]), _c('p', [_vm._v("This slideshow's so fresh, it has end credits.")]), _c('end-credits', {
    attrs: {
      "username": _vm.username
    }
  })], 1)], 1)])
},staticRenderFns: []}

/***/ }),
/* 406 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('eg-transition', {
    attrs: {
      "enter": _vm.enter,
      "leave": _vm.leave
    }
  }, [(_vm.active) ? _c('div', {
    staticClass: "eg-triggered-message",
    style: (_vm.style)
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "eg-theme-gourmet",
    attrs: {
      "id": "EagleRecipes"
    }
  }, [_c('div', {
    staticClass: "eg-slideshow"
  }, [_c('v-slide', [_c('h1', [_vm._v("Eagle Recipes")]), _c('img', {
    staticClass: "logo",
    attrs: {
      "src": __webpack_require__(367)
    }
  }), _c('p', {
    staticClass: "center"
  }, [_vm._v("100% Pure Code, no Artificial Swag")])]), _c('v-slide', [_c('h3', [_vm._v("Getting started")]), _c('p', [_vm._v("You should first learn about "), _c('a', {
    attrs: {
      "href": "https://vuejs.org/",
      "target": "_blank"
    }
  }, [_vm._v("Vue.js")]), _vm._v("\nand "), _c('a', {
    attrs: {
      "href": "https://vuejs.org/",
      "target": "_blank"
    }
  }, [_vm._v("Pug")]), _vm._v(", which we will\nuse to make slideshows.\n")]), _c('p', [_vm._v("Once you have installed Node/NPM, download the demo and start from there:")]), _c('eg-code-block', {
    attrs: {
      "lang": "bash"
    }
  }, [_vm._v("git clone https://github.com/Zulko/eaglejs-demo.git\ncd eaglejs-demo\nnpm install\nnpm run dev\n")])], 1), _c('v-slide', {
    attrs: {
      "steps": 3
    }
  }, [_c('h3', [_vm._v("Writing a slideshow")]), _c('p', [_vm._v("A slideshow is contained in a Vue file.")]), (_vm.step === 1) ? _c('div', {
    staticClass: "subslide"
  }, [_c('p', [_vm._v("The <template> tag provides the slideshow's structure:")]), _c('eg-code-block', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("<template lang='pug'>\n#MyFirstSlideshow\n  .eg-slideshow\n    slide\n      h1 Hi there !\n      p I am the first slide !\n    slide\n      h1 Hi there !\n      p I am the second slide !\n</template>")])], 1) : _vm._e(), (_vm.step === 2) ? _c('div', {
    staticClass: "subslide"
  }, [_c('p', [_vm._v("The <script> tag loads Eagle and specifies options:")]), _c('eg-code-block', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("<script>\nimport eagle from 'eagle.js'\nexport default {\n  mixins: [ eagle.slideshow ],\n  infos: {\n    title: 'Your First Slideshow',\n    description: 'A boilerplate to get you started',\n    path: 'your-first-slideshow'\n  }\n}\n</script>")])], 1) : _vm._e(), (_vm.step === 3) ? _c('div', {
    staticClass: "subslide"
  }, [_c('p', [_vm._v("The <style> tag specifies custom styles for your components\n(more on themes later)")]), _c('eg-code-block', {
    attrs: {
      "lang": "scss"
    }
  }, [_vm._v("<style lang='scss'>\n@import url(https://fonts.googleapis.com/css?family=Raleway);\n#MyFirstSlideshow{\n  .eg-slideshow{\n    font-family: 'Raleway';\n    background-color: #eef;\n    ...\n}\n</style>\n")])], 1) : _vm._e()]), _c('v-slide', {
    attrs: {
      "steps": 3
    }
  }, [_c('h3', [_vm._v("Minimal slideshow")]), _c('eg-code-block', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v(".eg-slideshow\n  slide\n    h1 Hi there !\n    p I am slide 1\n  slide\n    h1 Hello\n    p I am slide 2\n  slide\n    h1 Hello\n    p I am slide 3\n")]), _c('div', {
    staticClass: "demo-slideshow"
  }, [_c('p', [_vm._v("Result:")]), _c('demo-slideshow', {
    attrs: {
      "embedded": true,
      "firstSlide": 1,
      "lastSlide": 3
    }
  })], 1)], 1), _c('v-slide', {
    attrs: {
      "steps": 2
    }
  }, [_c('h3', [_vm._v("Slides with transitions")]), _c('eg-code-block', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("slide(enter='fadeIn' leave='fadeOut')\n  h3 I am a fading slide !\n  p I fade in and fade away\n\nslide(enter='bounceInRight' leave='bounceOutLeft')\n  h3 I'm a bouncing slide\n  p I bounce in and out")]), _c('div', {
    staticClass: "demo-slideshow"
  }, [_c('p', [_vm._v("Result:")]), _c('demo-slideshow', {
    attrs: {
      "embedded": true,
      "firstSlide": 4,
      "lastSlide": 5
    }
  })], 1)], 1), _c('v-slide', {
    attrs: {
      "steps": 4
    }
  }, [_c('h3', [_vm._v("Bullet points")]), _c('eg-code-block', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("slide(:steps=4)\n  h3 How to impress people\n\n  p(v-if='step >= 2') Wear bright colors\n  p(v-if='step >= 3') Learn to juggle\n  p(v-if='step >= 4') Use Eagle.JS")]), _c('div', {
    staticClass: "demo-slideshow"
  }, [_c('p', [_vm._v("Result:")]), _c('demo-slideshow', {
    attrs: {
      "embedded": true,
      "firstSlide": 6,
      "lastSlide": 6
    }
  })], 1)], 1), _c('v-slide', {
    attrs: {
      "steps": 4
    }
  }, [_c('h3', [_vm._v("Animations")]), _c('p', [_vm._v("Eagle supports\n"), _c('a', {
    attrs: {
      "href": "https://daneden.github.io/animate.css/",
      "target": "_blank"
    }
  }, [_vm._v("Animate.CSS")]), _vm._v("\nanimations, and more")]), _c('eg-code-block', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("slide(:steps=4)\n  h3 How to impress people\n  eg-transition(enter='fadeInRight')\n    p(v-if='step >= 2') Wear bright colors\n  eg-transition(enter='fadeInLeft')\n    p(v-if='step >= 3') Learn to juggle\n  eg-transition(enter='fadeInDown')\n    p(v-if='step >= 4') Use Eagle.JS")]), _c('div', {
    staticClass: "demo-slideshow"
  }, [_c('p', [_vm._v("Result:")]), _c('demo-slideshow', {
    attrs: {
      "embedded": true,
      "firstSlide": 7,
      "lastSlide": 7
    }
  })], 1)], 1), _c('v-slide', {
    attrs: {
      "steps": 4
    }
  }, [_c('h3', [_vm._v("Dynamic components")]), _c('p', [_vm._v("There are many other ways to animate your slides with Vue.js.\nHere is just another example:")]), _c('eg-code-block', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("slide(:steps=4)\n  h2 Eagle.JS is\n  h3(v-if='step === 2') Simple\n  h3(v-if='step === 3') Powerful\n  h3(v-if='step === 4') Hackable\n")]), _c('div', {
    staticClass: "demo-slideshow"
  }, [_c('p', [_vm._v("Result:")]), _c('demo-slideshow', {
    attrs: {
      "embedded": true,
      "firstSlide": 8,
      "lastSlide": 8
    }
  })], 1)], 1), _c('v-slide', {
    attrs: {
      "steps": 4
    }
  }, [_c('h3', [_vm._v("Animated SVGs")]), (_vm.step === 1) ? _c('div', {
    staticClass: "subslide"
  }, [_c('p', [_vm._v("You can use "), _c('b', [_vm._v("v-if")]), _vm._v(" and animation classes inside a SVG:")]), _c('eg-code-block', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("<svg height=\"34mm\" width=\"77mm\" viewBox=\"0 0 272 119\">\n  <circle v-if='step >= 1' cx=\"60\" cy=\"65\" r=\"50\"/>\n  <circle v-if='step >= 2' class='animated bounce'\n      cx=\"137\" cy=\"65\" r=\"50\"/>\n  <circle v-if='step >= 3' cx=\"214\" cy=\"65\" r=\"50\"/>\n</svg>")])], 1) : _vm._e(), (_vm.step >= 2) ? _c('div', {
    staticClass: "subslide"
  }, [_c('p', [_vm._v("Then include the SVG in your slide")]), _c('eg-code-block', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("slide(:steps=4)\n  h2 Animated SVG\n  include assets/animated.svg\n")]), _c('div', {
    staticClass: "demo-slideshow"
  }, [_c('p', [_vm._v("Result:")]), _c('demo-slideshow', {
    attrs: {
      "embedded": true,
      "firstSlide": 9,
      "lastSlide": 9
    }
  })], 1)], 1) : _vm._e()]), _c('v-slide', {
    attrs: {
      "steps": 3
    }
  }, [_c('h3', [_vm._v("Subslides")]), _c('eg-code-block', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("slide(:steps=3)\n  h2 Some verses\n  eg-transition(enter='fadeInRight' leave='fadeOutLeft')\n    .subslide(v-if='step === 1')\n      p Once it smiled a silent dell\n      p Where the people did not dwell;\n  eg-transition(enter='fadeInRight' leave='fadeOutLeft')\n    .subslide(v-if='step === 2')\n      p They had gone unto the wars,\n      p Trusting to the mild-eyed stars,\n  etc.\n")]), _c('div', {
    staticClass: "demo-slideshow"
  }, [_c('p', [_vm._v("Result:")]), _c('demo-slideshow', {
    attrs: {
      "embedded": true,
      "firstSlide": 10,
      "lastSlide": 10
    }
  })], 1)], 1), _c('v-slide', [_c('p', [_vm._v("Hmmm... Looks like this slideshow is under construction.\nThat would explain the general ugliness...\nCome back later for more !")])])], 1)])
},staticRenderFns: []}

/***/ }),
/* 408 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "ThemesSlideshow"
    }
  }, [_c('div', {
    staticClass: "eg-slideshow"
  }, [_c('slide', {
    staticClass: "local-eg-theme-artic",
    attrs: {
      "enter": "fadeIn",
      "leave": "fadeOut"
    }
  }, [_c('h1', [_vm._v("Themes"), _c('br'), _vm._v("Slideshow")])]), _c('slide', {
    staticClass: "local-eg-theme-foreword",
    attrs: {
      "enter": "fadeIn",
      "leave": "fadeOut"
    }
  }, [_c('eg-transition', {
    attrs: {
      "enter": "fadeInDown"
    }
  }, [_c('p', [_vm._v("FOREWORD "), _c('br'), _vm._v("\nThe next slides can also be seen in \"Introducing Eagle\",\nwhere they are programmatically inserted.\n")])])], 1), _c('slide', {
    staticClass: "local-eg-theme-bretagne",
    attrs: {
      "enter": "fadeIn",
      "leave": "none"
    }
  }, [_c('eg-transition', {
    attrs: {
      "enter": "fadeInDown"
    }
  }, [_c('h3', [_vm._v("About Themes")])])], 1), _c('slide', {
    staticClass: "local-eg-theme-forest-road",
    attrs: {
      "enter": "fadeIn",
      "leave": "none"
    }
  }, [_c('eg-transition', {
    attrs: {
      "enter": "fadeInLeft"
    }
  }, [_c('h3', [_vm._v("You can change everything")])])], 1), _c('slide', {
    staticClass: "local-eg-theme-spark",
    attrs: {
      "enter": "fadeIn",
      "leave": "none"
    }
  }, [_c('eg-transition', {
    attrs: {
      "enter": "fadeInUp"
    }
  }, [_c('h3', [_vm._v("Enjoy the versatility"), _c('br'), _vm._v("of the CSS Technology"), _c('sup', [_vm._v("TM")])])])], 1), _c('slide', {
    staticClass: "local-eg-theme-city",
    attrs: {
      "enter": "fadeIn",
      "leave": "none"
    }
  }, [_c('eg-transition', {
    attrs: {
      "enter": "flipInX"
    }
  }, [_c('eg-code-block', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("//- Use CSS classes to theme the slideshow or just one slide\n\n#MySlideshow.eg-theme-dark //- General theme for the slideshow\n  .eg-slideshow\n    slide\n      h1 I am the darkness !\n    slide.eg-theme-light //- slide-specific theme\n      h1 Sometimes I am the light too\n      slide.local-eg-theme-bretagne\n")])], 1)], 1), _c('slide', {
    staticClass: "local-eg-theme-space",
    attrs: {
      "enter": "fadeIn",
      "leave": "fadeOut"
    }
  }, [_c('eg-transition', {
    attrs: {
      "enter": "zoomIn"
    }
  }, [_c('h3', [_vm._v("Your bad taste is the limit")])])], 1)], 1)])
},staticRenderFns: []}

/***/ }),
/* 409 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('canvas', {
    attrs: {
      "id": _vm.id,
      "width": _vm.width,
      "height": _vm.height
    }
  })
},staticRenderFns: []}

/***/ }),
/* 410 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "eg-modal"
  }, [_c('div', {
    staticClass: "content"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 411 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "DemoSlideshow"
    }
  }, [_c('div', {
    staticClass: "eg-slideshow"
  }, [_c('slide', [_c('h2', [_vm._v("Hi there !")]), _c('p', [_vm._v("I am slide 1")])]), _c('slide', [_c('h2', [_vm._v("Hi again !")]), _c('p', [_vm._v("I am slide 2")])]), _c('slide', [_c('h2', [_vm._v("Hi third !")]), _c('p', [_vm._v("I am slide 3")])]), _c('slide', {
    attrs: {
      "enter": "fadeIn",
      "leave": "fadeOut"
    }
  }, [_c('h2', [_vm._v("I'm a fading slide!")]), _c('p', [_vm._v("I fade in and fade away")])]), _c('slide', {
    attrs: {
      "enter": "bounceInRight",
      "leave": "bounceOutLeft"
    }
  }, [_c('h2', [_vm._v("I'm a bouncing slide")]), _c('p', [_vm._v("I bounce in and out")])]), _c('slide', {
    attrs: {
      "steps": 4
    }
  }, [_c('h3', [_vm._v("How to impress people")]), (_vm.step >= 2) ? _c('p', [_vm._v("Wear bright colors")]) : _vm._e(), (_vm.step >= 3) ? _c('p', [_vm._v("Learn to juggle")]) : _vm._e(), (_vm.step >= 4) ? _c('p', [_vm._v("Use Eagle.JS")]) : _vm._e()]), _c('slide', {
    attrs: {
      "steps": 4
    }
  }, [_c('h3', [_vm._v("How to impress people")]), _c('eg-transition', {
    attrs: {
      "enter": "fadeInRight"
    }
  }, [(_vm.step >= 2) ? _c('p', [_vm._v("Wear bright colors")]) : _vm._e()]), _c('eg-transition', {
    attrs: {
      "enter": "fadeInLeft"
    }
  }, [(_vm.step >= 3) ? _c('p', [_vm._v("Learn to juggle")]) : _vm._e()]), _c('eg-transition', {
    attrs: {
      "enter": "fadeInDown"
    }
  }, [(_vm.step >= 4) ? _c('p', [_vm._v("Use Eagle.JS")]) : _vm._e()])], 1), _c('slide', {
    attrs: {
      "steps": 4
    }
  }, [_c('h2', [_vm._v("Eagle.JS is")]), (_vm.step === 2) ? _c('h3', [_vm._v("Simple")]) : _vm._e(), (_vm.step === 3) ? _c('h3', [_vm._v("Powerful")]) : _vm._e(), (_vm.step === 4) ? _c('h3', [_vm._v("Hackable")]) : _vm._e()]), _c('slide', {
    attrs: {
      "steps": 3
    }
  }, [_c('h2', [_vm._v("Animated SVG")]), _c('svg', {
    attrs: {
      "height": "33.7mm",
      "width": "76.9mm",
      "version": "1.1",
      "viewBox": "0 0 272 119"
    }
  }, [(_vm.step >= 1) ? _c('circle', {
    attrs: {
      "cx": "60",
      "cy": "65",
      "r": "30"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.step >= 2) ? _c('circle', {
    staticClass: "animated bounce",
    attrs: {
      "cx": "137",
      "cy": "65",
      "r": "30"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.step >= 3) ? _c('circle', {
    attrs: {
      "cx": "214",
      "cy": "65",
      "r": "30"
    }
  }) : _vm._e()])]), _c('slide', {
    attrs: {
      "steps": 3
    }
  }, [_c('h2', [_vm._v("Some verses")]), _c('eg-transition', {
    attrs: {
      "enter": "fadeInRight",
      "leave": "fadeOutLeft"
    }
  }, [(_vm.step === 1) ? _c('div', {
    staticClass: "subslide"
  }, [_c('p', [_vm._v("Once it smiled a silent dell")]), _c('p', [_vm._v("Where the people did not dwell;")])]) : _vm._e()]), _c('eg-transition', {
    attrs: {
      "enter": "fadeInRight",
      "leave": "fadeOutLeft"
    }
  }, [(_vm.step === 2) ? _c('div', {
    staticClass: "subslide"
  }, [_c('p', [_vm._v("They had gone unto the wars,")]), _c('p', [_vm._v("Trusting to the mild-eyed stars,")])]) : _vm._e()]), _c('eg-transition', {
    attrs: {
      "enter": "fadeInRight",
      "leave": "fadeOutLeft"
    }
  }, [(_vm.step === 3) ? _c('div', {
    staticClass: "subslide"
  }, [_c('p', [_vm._v("Nightly, from their azure towers,")]), _c('p', [_vm._v("To keep watch above the flowers,")])]) : _vm._e()])], 1), _c('slide', {
    attrs: {
      "steps": 2
    }
  }, [_c('h2', [_vm._v("I am a slide")]), _c('p', [_vm._v("And a modal will appear")]), (_vm.step === 2) ? _c('eg-modal', [_c('h3', [_vm._v("I am a modal")])]) : _vm._e()], 1)], 1)])
},staticRenderFns: []}

/***/ }),
/* 412 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "eg-slideshow"
  }, _vm._l((_vm.images[_vm.preference]), function(imageUrl, i) {
    return _c('image-slide', {
      attrs: {
        "enter": (i === 0) ? null : 'slideInRight',
        "leave": "slideOutLeft",
        "url": imageUrl
      }
    })
  }))
},staticRenderFns: []}

/***/ }),
/* 413 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('eg-transition', {
    attrs: {
      "enter": _vm.enter,
      "leave": _vm.leave
    }
  }, [(_vm.active) ? _c('div', {
    staticClass: "eg-code-comment"
  }, [(_vm.arrow) ? _c('span', [_vm._v("←")]) : _vm._e(), _vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 414 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('eg-transition', {
    attrs: {
      "enter": _vm.enter,
      "leave": _vm.leave
    }
  }, [(_vm.active) ? _c('div', {
    staticClass: "eg-slide"
  }, [_c('div', {
    staticClass: "eg-slide-content"
  }, [_vm._t("default")], 2)]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 415 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "MyFirstSlideshow"
    }
  }, [_c('div', {
    staticClass: "eg-slideshow"
  }, [_c('slide', [_c('h1', [_vm._v("Hi there !")]), _c('h4', [_vm._v("This is your first slideshow !")])]), _c('slide', {
    attrs: {
      "enter": "bounceInRight",
      "leave": "fadeOut"
    }
  }, [_c('h3', [_vm._v("Hey modify me !")]), _c('p', [_vm._v("Come on modify me ! If you are running the development server,\nyou will see the changes take effect immediately\n")])]), _c('slide', {
    attrs: {
      "enter": "fadeIn"
    }
  }, [_c('h3', [_vm._v("Want cool effects?")]), _c('p', [_vm._v("Code your own, or try stealing for the other slideshows !")])])], 1)])
},staticRenderFns: []}

/***/ }),
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    enter: { default: null },
    leave: { default: null }
  }
};

/***/ }),
/* 420 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slide__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slide___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Slide__);



/* harmony default export */ __webpack_exports__["default"] = {
  mixins: [__WEBPACK_IMPORTED_MODULE_0__Slide___default.a],
  props: {
    url: { default: 'https://i.imgur.com/P7iyH.png' },
    enter: { default: null },
    leave: { default: null }
  },
  computed: {
    style: function style() {
      return {
        'background-image': 'url(' + this.url + ')',
        'background-position': 'center center',
        'background-size': 'cover'
      };
    }
  }
};

/***/ }),
/* 421 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    skip: { default: false },
    enter: { default: null },
    leave: { default: null },
    steps: { default: 1 },
    mouseNavigation: { default: true },
    keyboardNavigation: { default: true }
  },
  data: function data() {
    return {
      step: 1,
      active: false,
      isSlide: true,
      slideTimer: 0
    };
  },
  mounted: function mounted() {
    var self = this;
  },
  methods: {
    nextStep: function nextStep() {
      if (this.step === this.steps) {
        this.$parent.nextSlide();
      } else {
        this.step++;
      }
    },
    previousStep: function previousStep() {
      if (this.step === 1) {
        this.$parent.previousSlide();
      } else {
        this.step--;
      }
    }
  },
  watch: {
    step: function step(val) {
      this.$parent.step = val;
    },
    active: function active(val) {
      var self = this;
      if (val) {
        this.slideTimer = 0;
        this.timerUpdater = setInterval(function () {
          self.slideTimer++;
        }, 1000);
      } else {
        clearInterval(this.timerUpdater);
      }
    }
  }
};

/***/ }),
/* 422 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    firstSlide: { default: 1 },
    startStep: { default: 1 },
    lastSlide: { default: null },
    embedded: { default: false },
    inserted: { default: false },
    keyboardNavigation: { default: true },
    mouseNavigation: { default: true },
    onStartExit: { default: function _default() {
        return function () {
          this.$router.push('/');
        };
      } },
    onEndExit: { default: function _default() {
        return function () {
          this.$router.push('/');
        };
      } },
    skip: { default: false }
  },
  data: function data() {
    return {
      currentSlideIndex: 1,
      currentSlide: null,
      step: this.startStep,
      slideshowTimer: 0,
      slideTimer: 0,
      slides: [],
      active: true
    };
  },
  computed: {
    fullPageStyle: function fullPageStyle() {
      var size = 0.04 * Math.min(this.fullPageWidth, this.fullPageHeight);
      return { fontSize: size + 'px' };
    },
    embeddedStyle: function embeddedStyle() {
      var size = 0.04 * Math.min(this.parentWidth, this.parentHeight);
      return { fontSize: size + 'px' };
    },
    active: function active() {
      return this.slides.some(function (slide) {
        return slide.active;
      });
    }
  },
  mounted: function mounted() {
    this.isSlideshow = true;
    var self = this;
    this.findSlides();

    if (!this.inserted) {
      this.currentSlide = this.slides[this.currentSlideIndex - 1];
      this.currentSlide.step = this.startStep;


      if (this.keyboardNavigation) {
        window.addEventListener('keydown', this.keydown);
      }
      if (this.mouseNavigation) {
        window.addEventListener('click', this.click);
        window.addEventListener('wheel', this.wheel);
      }
      if (this.embedded) {
        this.$el.className += ' embedded-slideshow';
      }
    }
    window.addEventListener('resize', this.handleResize);

    if (this.preloadedImages) {
      setTimeout(function () {
        for (var image in self.preloadedImages) {
          new Image().src = self.preloadedImages[image];
        }
      }, 1000);
    }

    this.handleResize();
    this.timerUpdater = setInterval(function () {
      self.slideshowTimer++;
      self.slideTimer++;
    }, 1000);
    this.afterMounted();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('keydown', this.keydown);
    window.removeEventListener('click', this.click);
    window.removeEventListener('wheel', this.wheel);
    clearInterval(this.slideshowTimerUpdater);
  },
  methods: {
    nextStep: function nextStep() {
      if (this.step === this.currentSlide.steps) {
        this.nextSlide();
      } else {
        this.step++;
      }
    },
    previousStep: function previousStep() {
      if (this.step === 1) {
        this.previousSlide();
      } else {
        this.step--;
      }
    },
    nextSlide: function nextSlide() {
      var nextSlideIndex = this.currentSlideIndex + 1;
      while (nextSlideIndex < this.slides.length + 1 && (this.slides[nextSlideIndex - 1].skip || this.slides[nextSlideIndex - 1].$parent.skip)) {
        nextSlideIndex++;
      }
      if (nextSlideIndex < this.slides.length + 1) {
        this.currentSlideIndex = nextSlideIndex;
      } else if (!this.embedded) {
        this.onEndExit();
      }
    },
    previousSlide: function previousSlide() {
      var previousSlideIndex = this.currentSlideIndex - 1;
      while (previousSlideIndex >= 1 && (this.slides[previousSlideIndex - 1].skip || this.slides[previousSlideIndex - 1].$parent.skip)) {
        previousSlideIndex--;
      }
      if (previousSlideIndex >= 1) {
        this.currentSlideIndex = previousSlideIndex;
      } else if (!this.embedded) {
        this.onStartExit();
      }
    },
    handleResize: function handleResize(event) {
      var width = 0;
      var height = 0;
      if (this.embedded) {
        width = this.$el.parentElement.clientWidth;
        height = this.$el.parentElement.clientHeight;
      } else {
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
      }
      this.$el.style.fontSize = 0.04 * Math.min(height, width) + 'px';
    },
    click: function click(evt) {
      if (this.mouseNavigation && this.currentSlide.mouseNavigation) {

        if (evt.clientX < 0.25 * document.documentElement.clientWidth) {
          evt.preventDefault();
          this.previousStep();
        } else if (evt.clientX > 0.75 * document.documentElement.clientWidth) {
          evt.preventDefault();
          this.nextStep();
        }
      }
    },
    wheel: function wheel(evt) {
      if (this.mouseNavigation && this.currentSlide.mouseNavigation) {
        evt.preventDefault();
        if (evt.wheelDeltaY > 0 || evt.deltaY > 0) {
          this.nextStep();
        } else if (evt.wheelDeltaY < 0 || evt.deltaY < 0) {
          this.previousStep();
        }
      }
    },
    keydown: function keydown(evt) {
      if (this.keyboardNavigation && (this.currentSlide.keyboardNavigation || evt.ctrlKey)) {
        evt.preventDefault();
        if (evt.key === 'ArrowLeft') {
          this.previousStep();
        } else if (evt.key === 'ArrowRight') {
          this.nextStep();
        }
      }
    },
    afterMounted: function afterMounted(evt) {
      return;
    },
    findSlides: function findSlides() {
      var self = this;
      var i = 0;
      this.$children.forEach(function (el) {
        if (el.isSlide) {
          i++;
          if (i >= self.firstSlide && (!self.lastSlide || i <= self.lastSlide)) {
            self.slides.push(el);
          }
        } else if (el.isSlideshow) {
          el.active = false;
          el.slides.forEach(function (slide) {
            i++;
            slide.active = false;
            if (i >= self.firstSlide && (!self.lastSlide || i <= self.lastSlide)) {
              self.slides.push(slide);
            }
          });
        }
      });
    }
  },
  watch: {
    currentSlide: function currentSlide(newSlide, oldSlide) {

      if (oldSlide) {
        oldSlide.active = false;
        if (oldSlide.$parent !== newSlide.$parent && oldSlide.$parent !== this) {
          oldSlide.$parent.active = false;
        }
      }
      this.slideTimer = 0;
      this.step = 1;
      newSlide.step = 1;
      newSlide.$parent.step = 1;
      newSlide.active = true;
      newSlide.$parent.active = true;
    },
    currentSlideIndex: function currentSlideIndex(index) {
      this.currentSlide = this.slides[index - 1];
    },
    step: function step(val) {
      if (this.currentSlide) {
        this.currentSlide.step = val;
        this.currentSlide.$parent.step = val;
      }
    },
    active: function active(val) {
      if (val) {
        this.$el.style.visibility = 'visible';
      } else {
        this.$el.style.visibility = 'hidden';
      }
    }
  }

};

/***/ }),
/* 423 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highlight_js__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highlight_js__);



function randId() {
  return Math.random().toString(36).substr(2, 10);
}
/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    id: { default: function _default() {
        return randId();
      } },
    id2: { default: function _default() {
        return randId();
      } },
    id3: { default: function _default() {
        return randId();
      } },
    lang: { default: null }
  },
  mounted: function mounted() {
    this.update();
  },
  methods: {
    update: function update() {
      var codeBlock = document.getElementById(this.id);
      var commentsContent = document.getElementById(this.id2);
      var codeContent = document.getElementById(this.id3);
      codeContent.innerHTML = commentsContent.innerHTML;
      console.log(this.id);
      if (this.lang) {
        __WEBPACK_IMPORTED_MODULE_0_highlight_js___default.a.highlightBlock(codeBlock);
      }
    }
  }
};

/***/ }),
/* 424 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    enter: { default: null },
    leave: { default: null },
    active: { default: true },
    arrow: { default: true }
  }
};

/***/ }),
/* 425 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    value: { default: null },
    label: { default: null },
    fontsize: { default: '0.7em' }
  },
  methods: {
    select: function select() {
      this.$emit('input', this.label);
      console.log(this.label, this.value, this.value === this.label);
    }
  }
};

/***/ }),
/* 426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    value: { default: true },
    fontsize: { default: '0.8em' }
  },
  data: function data() {
    return {
      checked: this.value
    };
  },
  methods: {
    toggle: function toggle() {
      console.log(this.checked);
      this.checked = !this.checked;
    }
  },
  watch: {
    checked: function checked(val) {
      this.$emit('input', val);
    }
  }
};

/***/ }),
/* 427 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    enter: { default: 'slideInLeft' },
    leave: { default: 'slideOutLeft' },
    trigger: { default: false },
    position: { default: 'left top' },
    duration: { default: 3 }
  },
  data: function data() {
    return {
      active: false,
      timeout: null,
      style: {
        top: this.position.indexOf('top') >= 0 ? '0%' : 'none',
        bottom: this.position.indexOf('bottom') >= 0 ? '0%' : 'none',
        left: this.position.indexOf('left') >= 0 ? '0%' : 'none',
        right: this.position.indexOf('right') >= 0 ? '0%' : 'none'
      }
    };
  },
  watch: {
    trigger: function trigger(val, oldVal) {
      if (!oldVal && val) {
        this.active = true;
        var self = this;
        this.timeout = setTimeout(function () {
          self.active = false;
        }, 1000 * this.duration);
      } else if (oldVal && !val) {
        this.active = false;
        clearTimeout(this.timeout);
      }
    }
  }
};

/***/ }),
/* 428 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_eagle_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slideshows_slideshows_js__ = __webpack_require__(3);











__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_eagle_js__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var routes = [];
__WEBPACK_IMPORTED_MODULE_5__slideshows_slideshows_js__["a" /* default */].list.forEach(function (slideshow) {
  routes.push({
    path: '/' + slideshow.infos.path,
    component: slideshow
  });
});
routes.push({ path: '*', component: __WEBPACK_IMPORTED_MODULE_3__Home___default.a });

routes.push({
  path: '/',
  name: 'Home',
  component: __WEBPACK_IMPORTED_MODULE_3__Home___default.a
});
console.log(routes);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: routes
});

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_2__App___default.a }
});

/***/ })
],[428]);