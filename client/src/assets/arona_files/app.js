webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_jpetra_Documents_phase2_2_Week3_balapdadu_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// @ is an alias to /src\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Home',\n  components: {},\n  data: function data() {\n    return {\n      form: {\n        name: '',\n        score: 0\n      },\n      players: [],\n      turn: 0,\n      value: 0\n    };\n  },\n  computed: {\n    positionOne: function positionOne() {\n      if (this.players.length === 0) {\n        return 0;\n      } else {\n        return this.players[0].score;\n      }\n    },\n    positionTwo: function positionTwo() {\n      if (this.players.length === 0) {\n        return 0;\n      } else {\n        return this.players[1].score;\n      }\n    }\n  },\n  watch: {\n    positionOne: function positionOne(newVal, oldVal) {\n      var _this = this;\n\n      console.log(newVal === 49);\n\n      if (newVal === 49) {\n        setTimeout(function () {\n          _this.players[0].score -= 15;\n        }, 1500);\n      }\n    }\n  },\n  mounted: function mounted() {\n    var _this2 = this;\n\n    this.$socket.on('player', function (object) {\n      _this2.players.push(object);\n    });\n    this.$socket.on('dadu', function (object) {\n      _this2.turn = object.turn === 0 ? 1 : 0;\n      console.log(_this2.players[object.turn].score);\n      _this2.players[object.turn].score += object.value;\n      _this2.value = object.value;\n    });\n  },\n  methods: {\n    run: function run() {\n      var _this3 = this;\n\n      console.log('masuk run');\n      var diceroll = 49;\n\n      for (var i = 0; i < diceroll; i++) {\n        this.position++;\n      }\n\n      console.log(this.position);\n\n      if (this.position > 85) {\n        alert('win!');\n      }\n\n      if (this.position === 49) {\n        setTimeout(function () {\n          _this3.position -= 15;\n        }, 2500);\n      }\n    },\n    kocokDadu: function kocokDadu() {\n      var value = 49;\n      this.value = value;\n      this.$socket.emit('dadu', {\n        turn: this.turn,\n        value: this.value\n      });\n    },\n    addPlayer: function addPlayer() {\n      this.$socket.emit('player', Object(_home_jpetra_Documents_phase2_2_Week3_balapdadu_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, this.form));\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Ib21lLnZ1ZT83NmYyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImhvbWVcIj5cbiAgICA8IS0tIGFkZCBwbGF5ZXJzIC0tPlxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJhZGRQbGF5ZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImZvcm0ubmFtZVwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5UYW1iYWggUGxheWVyPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8YnI+XG4gICAgICA8aDIgdi1pZj1cInZhbHVlID4gMFwiPkRhcGF0IEFuZ2thIDoge3sgdmFsdWUgfX08L2gyPlxuICAgICAgPGRpdiB2LWlmPVwicGxheWVycyAhPSBudWxsXCI+XG4gICAgICAgIDxkaXYgOmtleT1cImlcIiB2LWZvcj1cIihwbGF5ZXIsIGkpIGluIHBsYXllcnNcIj5cbiAgICAgICAgICA8aDI+UGxheWVyIHt7IHBsYXllci5uYW1lIH19IDoge3sgcGxheWVyLnNjb3JlIH19PC9oMj5cbiAgICAgICAgICA8YnV0dG9uIHYtaWY9XCJ0dXJuID09PSBpXCIgQGNsaWNrLnByZXZlbnQ9XCJrb2Nva0RhZHVcIj5Lb2NvayBEYWR1PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gICAgPGltZyA6c3R5bGU9XCJ7bGVmdDpgJHtwb3NpdGlvbk9uZX0lYH1cIiBzcmM9XCIuLi9hc3NldHMvaXRhY2hpLmdpZlwiIGlkPVwibWFyaW9cIj5cbiAgICA8aW1nIDpzdHlsZT1cIntsZWZ0OmAke3Bvc2l0aW9uVHdvfSVgfVwiIHNyYz1cIi4uL2Fzc2V0cy9zYXN1a2UuZ2lmXCIgaWQ9XCJ5b3NoaVwiPlxuICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL3NoYXJpbmdhbi5naWZcIiBpZD1cInNoYXJpbmdhblwiPlxuICAgIDxpbWcgdi1pZj1cInBvc2l0aW9uT25lID09PSA0OSB8fCBwb3NpdGlvblR3byA9PT0gNDkgXCIgc3JjPVwiLi4vYXNzZXRzL2tha2FzaGkuZ2lmXCIgaWQ9XCJrYWthc2hpXCI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vIEAgaXMgYW4gYWxpYXMgdG8gL3NyY1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdIb21lJyxcbiAgY29tcG9uZW50czoge1xuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9ybToge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgc2NvcmU6IDBcbiAgICAgIH0sXG4gICAgICBwbGF5ZXJzOiBbXSxcbiAgICAgIHR1cm46IDAsXG4gICAgICB2YWx1ZTogMFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBwb3NpdGlvbk9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMucGxheWVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNbMF0uc2NvcmVcbiAgICAgIH1cbiAgICB9LFxuICAgIHBvc2l0aW9uVHdvOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5wbGF5ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc1sxXS5zY29yZVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBwb3NpdGlvbk9uZSAobmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgIGNvbnNvbGUubG9nKG5ld1ZhbCA9PT0gNDkpXG4gICAgICBpZiAobmV3VmFsID09PSA0OSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc2NvcmUgLT0gMTVcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLiRzb2NrZXQub24oJ3BsYXllcicsIChvYmplY3QpID0+IHtcbiAgICAgIHRoaXMucGxheWVycy5wdXNoKG9iamVjdClcbiAgICB9KVxuICAgIHRoaXMuJHNvY2tldC5vbignZGFkdScsIChvYmplY3QpID0+IHtcbiAgICAgIHRoaXMudHVybiA9IG9iamVjdC50dXJuID09PSAwID8gMSA6IDBcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVyc1tvYmplY3QudHVybl0uc2NvcmUpXG4gICAgICB0aGlzLnBsYXllcnNbb2JqZWN0LnR1cm5dLnNjb3JlICs9IG9iamVjdC52YWx1ZVxuICAgICAgdGhpcy52YWx1ZSA9IG9iamVjdC52YWx1ZVxuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBydW4gKCkge1xuICAgICAgY29uc29sZS5sb2coJ21hc3VrIHJ1bicpXG4gICAgICBjb25zdCBkaWNlcm9sbCA9IDQ5XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY2Vyb2xsOyBpKyspIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbisrXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnBvc2l0aW9uKVxuICAgICAgaWYgKHRoaXMucG9zaXRpb24gPiA4NSkge1xuICAgICAgICBhbGVydCgnd2luIScpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gNDkpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiAtPSAxNVxuICAgICAgICB9LCAyNTAwKVxuICAgICAgfVxuICAgIH0sXG4gICAga29jb2tEYWR1ICgpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gNDlcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ2RhZHUnLCB7IHR1cm46IHRoaXMudHVybiwgdmFsdWU6IHRoaXMudmFsdWUgfSlcbiAgICB9LFxuICAgIGFkZFBsYXllciAoKSB7XG4gICAgICB0aGlzLiRzb2NrZXQuZW1pdCgncGxheWVyJywgeyAuLi50aGlzLmZvcm0gfSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuI21hcmlve1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbSA6IDVyZW07XG4gIGxlZnQgOiAwJTtcbiAgei1pbmRleCA6IDE7XG59XG4jeW9zaGl7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tIDogNnJlbTtcbiAgbGVmdCA6IDAlO1xuICB6LWluZGV4IDogMTtcbn1cbiNzaGFyaW5nYW57XG4gIGhlaWdodDogMTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tIDogOHJlbTtcbiAgbGVmdCA6IDg1JTtcbiAgei1pbmRleCA6IDA7XG59XG4ja2FrYXNoaXtcbiAgaGVpZ2h0OiAxODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b20gOiA3cmVtO1xuICBsZWZ0IDogNTUlO1xuICB6LWluZGV4IDogMjtcbn1cbiNzbW9rZXtcbiAgaGVpZ2h0OiAxODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b20gOiA3cmVtO1xuICBsZWZ0IDogNTUlO1xuICB6LWluZGV4IDogMztcbn1cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBcERBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=script&lang=js&\n");

/***/ })

})