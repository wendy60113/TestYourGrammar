"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function () {
  'use strict';

  var ch_num = 1;
  var ans_num = ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'];
  var Raw_Ans = ['A', 'B', 'C', 'C', 'A', 'c', 'A', 'B', 'C', 'C'];
  var Check_Ans = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'];
  var ana_numtdata;
  var colorlist = [{
    color: 'black'
  }, {
    color: 'black'
  }, {
    color: 'black'
  }, {
    color: 'black'
  }, {
    color: 'black'
  }, {
    color: 'black'
  }, {
    color: 'black'
  }, {
    color: 'black'
  }, {
    color: 'black'
  }, {
    color: 'red'
  }];
  var f_num = 0;
  var ch_data = [{
    "ch_num": '01',
    "ch_name": '第一回'
  }, {
    "ch_num": '02',
    "ch_name": '第二回'
  }, {
    "ch_num": '03',
    "ch_name": '第三回'
  }];
  /*下線使用*/

  var data = [[{
    "id": 1,
    "num": '01',
    "topic": "Could you tell me your surname?",
    "ans1": "Would you like me to spell it?",
    "ans2": "Do you like my family name?",
    "ans3": "How do I say that?",
    "ans4": "No, I don't want to eat.",
    "r_ans": "A",
    "r_ans_word": "Would you like me to spell it?",
    "topic_ch": "尚未有解析",
    "ana": "尚未有解析"
  }, {
    "id": 2,
    "num": '02',
    "topic": "This plant looks dead.",
    "ans1": "It's in the garden.",
    "ans2": "It only needs some water.",
    "ans3": "It's sleeping.",
    "ans4": "It's the most beautiful flower.",
    "r_ans": "B",
    "r_ans_word": "It only needs some water.",
    "topic_ch": "尚未有解析",
    "ana": "尚未有解析"
  }, {
    "id": 3,
    "num": '03',
    "topic": "I hope it doesn't rain.",
    "ans1": "Of course not.",
    "ans2": "Will it be wet?",
    "ans3": "So do I.",
    "ans4": "Well, thank you.",
    "r_ans": "C",
    "r_ans_word": "So do I.",
    "topic_ch": "尚未有解析",
    "ana": "尚未有解析"
  }, {
    "id": 4,
    "num": '04',
    "topic": "Are you going to come inside soon?",
    "ans1": "For ever.",
    "ans2": "Not long.",
    "ans3": "In a minute.",
    "ans4": "I don't like it.",
    "r_ans": "C",
    "r_ans_word": "In a minute.",
    "topic_ch": "尚未有解析",
    "ana": "尚未有解析"
  }, {
    "id": 5,
    "num": '05',
    "topic": "Who gave you this book, Lucy?",
    "ans1": "I bought it.",
    "ans2": "For my birthday.",
    "ans3": "My uncle was.",
    "ans4": "Who are you?",
    "r_ans": "A",
    "r_ans_word": "I bought it.",
    "topic_ch": "尚未有解析",
    "ana": "尚未有解析"
  }, {
    "id": 6,
    "num": '06',
    "topic": "Shall we go out for pizza tonight?",
    "ans1": "I know that.",
    "ans2": "It's very good.",
    "ans3": "I'm too tired.",
    "ans4": "I can do that.",
    "r_ans": "C",
    "r_ans_word": "I'm too tired.",
    "topic_ch": "尚未有解析",
    "ana": "尚未有解析"
  }, {
    "id": 7,
    "num": '07',
    "topic": "Do you mind if I come too?",
    "ans1": "That's fine!",
    "ans2": "I'd like to.",
    "ans3": "I don't know if I can.",
    "ans4": "I'm too tired.",
    "r_ans": "A",
    "r_ans_word": "That's fine!",
    "topic_ch": "我尚未有解析",
    "ana": "尚未有解析"
  }, {
    "id": 8,
    "num": '08',
    "topic": "There's someone at the door.",
    "ans1": "Can I help you?",
    "ans2": "Well, go and answer it then.",
    "ans3": "He's busy at the moment.",
    "ans4": "Hey, why you are so wet?",
    "r_ans": "B",
    "r_ans_word": "Well, go and answer it then.",
    "topic_ch": "尚未有解析",
    "ana": "尚未有解析"
  }, {
    "id": 9,
    "num": '09',
    "topic": "How much butter do I need for this cake?",
    "ans1": "I'd like one.",
    "ans2": "I'll use some.",
    "ans3": "I'm not sure.",
    "ans4": "Just go away.",
    "r_ans": "C",
    "r_ans_word": "I'm not sure.",
    "topic_ch": "尚未有解析",
    "ana": "尚未有解析"
  }, {
    "id": 10,
    "num": '10',
    "topic": "How long are you here for?",
    "ans1": "Since last week.",
    "ans2": "Ten days ago.",
    "ans3": "Till tomorrow.",
    "ans4": "It's ten o'clock.",
    "r_ans": "C",
    "r_ans_word": "Till tomorrow.",
    "topic_ch": "尚未有解析",
    "ana": "尚未有解析"
  }]];
  /*上線使用
  fetch('./js/TestYourGrammar_data.json')
  	.then(response => response.json())
  	.then(data => {
  		console.log(data)
  	})
  */

  var ExamContent_id = /*#__PURE__*/function (_React$Component) {
    _inherits(ExamContent_id, _React$Component);

    var _super = _createSuper(ExamContent_id);

    function ExamContent_id() {
      _classCallCheck(this, ExamContent_id);

      return _super.apply(this, arguments);
    }

    _createClass(ExamContent_id, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "exam_box"
        }, /*#__PURE__*/React.createElement(ExamContent, {
          chapter_num: 0
        })), /*#__PURE__*/React.createElement("div", {
          className: "menubox"
        }, /*#__PURE__*/React.createElement(MenuBtn, {
          name: '立即交卷',
          style: 'hl_menu_btn',
          playfunction: function playfunction() {
            return checkFinish();
          }
        })));
      }
    }]);

    return ExamContent_id;
  }(React.Component);
  /* /////EXAMPAGE///// */


  function handleChange(idnum, ans) {
    ans_num[idnum - 1] = ans;
    console.log(ans_num);
  }

  ;
  /* /////MENUBTN///// */

  function checkFinish() {
    f_num = 0;

    for (var f = 0; f < 10; f++) {
      console.log(f);

      if (ans_num[f] != 'E') {
        f_num += 1;
      }
    }

    if (f_num == 10) {
      checkAns();
    } else {
      alert('你必須完成所有的練習題。\r\n' + '還有' + (10 - f_num) + '題！');
    }
  }

  function checkAns() {
    for (var a = 0; a < 10; a++) {
      if (ans_num[a] == Raw_Ans[a]) {
        Check_Ans[a] = data[ch_num - 1][a].r_ans_word; //colorlist[a] = {color:'black'};
      } else {
        //colorlist[a] = {color:'red'};
        switch (ans_num[a]) {
          case 'A':
            Check_Ans[a] = data[ch_num - 1][a].ans1;
            break;

          case 'B':
            Check_Ans[a] = data[ch_num - 1][a].ans2;
            break;

          case 'C':
            Check_Ans[a] = data[ch_num - 1][a].ans3;
            break;

          case 'D':
            Check_Ans[a] = data[ch_num - 1][a].ans4;
            break;

          case 'E':
            Check_Ans[a] = data[ch_num - 1][a].ans1;
            break;
        }
      }
    }

    console.log('checkans:' + Check_Ans);
    document.getElementById('ana_chword').innerHTML = ch_data[ch_num - 1].ch_num;
    document.getElementById('ana_chword_ch').innerHTML = ch_data[ch_num - 1].ch_name; //document.getElementById('ana_ans').innerHTML = Raw_Ans;

    $('.examPage_content').hide();
    $('#ExamContent_id').hide();
    $('.anaPage_content').show();
    $('#AnaContent_id').show();
    $('html,body').scrollTop(0);
    ana_numtdata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var anacontent = ana_numtdata.map(function (thisanadata) {
      return /*#__PURE__*/React.createElement("div", {
        key: thisanadata
      }, /*#__PURE__*/React.createElement(AnaItem, {
        num: data[ch_num - 1][thisanadata - 1].num,
        topic: data[ch_num - 1][thisanadata - 1].topic,
        r_ans_word: data[ch_num - 1][thisanadata - 1].r_ans_word,
        wrong_ans: Check_Ans[thisanadata - 1],
        ana: data[ch_num - 1][thisanadata - 1].ana,
        topic_ch: data[ch_num - 1][thisanadata - 1].topic_ch,
        ans_num: data[ch_num - 1][thisanadata - 1].r_ans,
        wrong_ans_num: ans_num[thisanadata - 1]
      }), /*#__PURE__*/React.createElement("br", null));
    });
    var ana_title_item = {};
    var anatitlecontent = ana_numtdata.map(function (thisanatdata) {
      return /*#__PURE__*/React.createElement("div", {
        key: thisanatdata
      }, /*#__PURE__*/React.createElement(AnaTitleItem, {
        anaword: Raw_Ans[thisanatdata - 1],
        answordcolor: ana_title_item
      }));
    });
    ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "ana_box"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ana_title_item_box"
    }), anacontent), /*#__PURE__*/React.createElement("div", {
      className: "menubox"
    }, /*#__PURE__*/React.createElement(MenuBtn, {
      name: '再測一次',
      style: 'menu_btn',
      playfunction: function playfunction() {
        return againtest();
      }
    }))), document.getElementById('AnaContent_id'));
  }

  function againtest() {
    $('.anaPage_content').hide();
    $('.examPage_content').show();
    $('#ExamContent_id').show();
    $('.anaPage_content').hide();
    $('#AnaContent_id').hide();
    $('input[name=examname]').prop('checked', false);
    $('html,body').scrollTop(0);
  }

  var ChapterBtns = /*#__PURE__*/function (_React$Component2) {
    _inherits(ChapterBtns, _React$Component2);

    var _super2 = _createSuper(ChapterBtns);

    function ChapterBtns() {
      _classCallCheck(this, ChapterBtns);

      return _super2.apply(this, arguments);
    }

    _createClass(ChapterBtns, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "chapterbtn",
          onClick: this.props.cfunction
        }, /*#__PURE__*/React.createElement("svg", {
          className: "bi checkicon"
        }), /*#__PURE__*/React.createElement("a", null, this.props.name));
      }
    }]);

    return ChapterBtns;
  }(React.Component);
  /* /////EXAMPAGE ///// */


  var ExamInfo = /*#__PURE__*/function (_React$Component3) {
    _inherits(ExamInfo, _React$Component3);

    var _super3 = _createSuper(ExamInfo);

    function ExamInfo() {
      _classCallCheck(this, ExamInfo);

      return _super3.apply(this, arguments);
    }

    _createClass(ExamInfo, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "exam_title"
        }, /*#__PURE__*/React.createElement("div", {
          className: "titlebg"
        }, /*#__PURE__*/React.createElement("span", {
          className: "titlebg_decword"
        }, /*#__PURE__*/React.createElement("a", null, "Test")), /*#__PURE__*/React.createElement("span", {
          className: "titlebg_chword"
        }, /*#__PURE__*/React.createElement("a", {
          id: "chword"
        }, "01"))), /*#__PURE__*/React.createElement("div", {
          className: "exam_chapter"
        }, /*#__PURE__*/React.createElement("a", {
          id: "chword_ch"
        }, "\u7B2C\u4E00\u56DE")));
      }
    }]);

    return ExamInfo;
  }(React.Component);

  var ExamContent = /*#__PURE__*/function (_React$Component4) {
    _inherits(ExamContent, _React$Component4);

    var _super4 = _createSuper(ExamContent);

    function ExamContent() {
      _classCallCheck(this, ExamContent);

      return _super4.apply(this, arguments);
    }

    _createClass(ExamContent, [{
      key: "render",
      value: function render() {
        var content = data[this.props.chapter_num].map(function (thisdata) {
          return /*#__PURE__*/React.createElement("div", {
            key: thisdata.id,
            className: "exam_item"
          }, /*#__PURE__*/React.createElement("div", {
            className: "exam_item_header"
          }, /*#__PURE__*/React.createElement("span", {
            className: "num"
          }, thisdata.num), /*#__PURE__*/React.createElement("span", {
            className: "topic"
          }, thisdata.topic)), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
            className: "exam_btn"
          }, /*#__PURE__*/React.createElement("span", {
            className: "exam_btn_num"
          }, "A"), /*#__PURE__*/React.createElement("label", {
            className: "container"
          }, /*#__PURE__*/React.createElement("input", {
            type: "radio",
            name: "examname",
            value: "A",
            onChange: function onChange() {
              return handleChange(thisdata.num, 'A');
            }
          }), /*#__PURE__*/React.createElement("span", {
            className: "exam_answord"
          }, thisdata.ans1), /*#__PURE__*/React.createElement("span", {
            className: "checkmark"
          }))), /*#__PURE__*/React.createElement("div", {
            className: "exam_btn"
          }, /*#__PURE__*/React.createElement("span", {
            className: "exam_btn_num"
          }, "B"), /*#__PURE__*/React.createElement("label", {
            className: "container"
          }, /*#__PURE__*/React.createElement("input", {
            type: "radio",
            name: "examname",
            value: "B",
            onChange: function onChange() {
              return handleChange(thisdata.num, 'B');
            }
          }), /*#__PURE__*/React.createElement("span", {
            className: "exam_answord"
          }, thisdata.ans2), /*#__PURE__*/React.createElement("span", {
            className: "checkmark"
          }))), /*#__PURE__*/React.createElement("div", {
            className: "exam_btn"
          }, /*#__PURE__*/React.createElement("span", {
            className: "exam_btn_num"
          }, "C"), /*#__PURE__*/React.createElement("label", {
            className: "container"
          }, /*#__PURE__*/React.createElement("input", {
            type: "radio",
            name: "examname",
            value: "C",
            onChange: function onChange() {
              return handleChange(thisdata.num, 'C');
            }
          }), /*#__PURE__*/React.createElement("span", {
            className: "exam_answord"
          }, thisdata.ans3), /*#__PURE__*/React.createElement("span", {
            className: "checkmark"
          }))), /*#__PURE__*/React.createElement("div", {
            className: "exam_btn"
          }, /*#__PURE__*/React.createElement("span", {
            className: "exam_btn_num"
          }, "D"), /*#__PURE__*/React.createElement("label", {
            className: "container"
          }, /*#__PURE__*/React.createElement("input", {
            type: "radio",
            name: "examname",
            value: "D",
            onChange: function onChange() {
              return handleChange(thisdata.num, 'D');
            }
          }), /*#__PURE__*/React.createElement("span", {
            className: "exam_answord"
          }, thisdata.ans4), /*#__PURE__*/React.createElement("span", {
            className: "checkmark"
          })))));
        });
        return /*#__PURE__*/React.createElement(React.Fragment, null, content);
      }
    }]);

    return ExamContent;
  }(React.Component);
  /* /////Ana ///// */


  var AnaInfo = /*#__PURE__*/function (_React$Component5) {
    _inherits(AnaInfo, _React$Component5);

    var _super5 = _createSuper(AnaInfo);

    function AnaInfo() {
      _classCallCheck(this, AnaInfo);

      return _super5.apply(this, arguments);
    }

    _createClass(AnaInfo, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "exam_title"
        }, /*#__PURE__*/React.createElement("div", {
          className: "titlebg"
        }, /*#__PURE__*/React.createElement("span", {
          className: "titlebg_decword"
        }, /*#__PURE__*/React.createElement("a", null, "Test")), /*#__PURE__*/React.createElement("span", {
          className: "titlebg_chword"
        }, /*#__PURE__*/React.createElement("a", {
          id: "ana_chword"
        }, "01"))), /*#__PURE__*/React.createElement("div", {
          className: "ana_chapter"
        }, /*#__PURE__*/React.createElement("a", {
          id: "ana_chword_ch"
        }, "\u7B2C\u4E00\u56DE"), /*#__PURE__*/React.createElement("a", null, "\u89E3\u7B54")));
      }
    }]);

    return AnaInfo;
  }(React.Component);

  var AnaItem = /*#__PURE__*/function (_React$Component6) {
    _inherits(AnaItem, _React$Component6);

    var _super6 = _createSuper(AnaItem);

    function AnaItem() {
      _classCallCheck(this, AnaItem);

      return _super6.apply(this, arguments);
    }

    _createClass(AnaItem, [{
      key: "render",
      value: function render() {
        console.log(data[ch_num - 1][this.props.num - 1].r_ans + ans_num[this.props.num - 1]);

        if (data[ch_num - 1][this.props.num - 1].r_ans == ans_num[this.props.num - 1]) {
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
            className: "ana_item"
          }, /*#__PURE__*/React.createElement("div", {
            className: "ana_item_header"
          }, /*#__PURE__*/React.createElement("span", {
            className: "num"
          }, this.props.num), /*#__PURE__*/React.createElement("span", {
            className: "topic"
          }, this.props.topic)), /*#__PURE__*/React.createElement("div", {
            className: "exam_btn"
          }, /*#__PURE__*/React.createElement("span", {
            className: "exam_btn_num"
          }, this.props.ans_num), /*#__PURE__*/React.createElement("label", {
            className: "ana_container correct"
          }, /*#__PURE__*/React.createElement("span", {
            className: "ana_ans_word correct"
          }, this.props.r_ans_word), /*#__PURE__*/React.createElement("span", {
            className: "ana_checkmark ana_correct_checkmark"
          }))), /*#__PURE__*/React.createElement("div", {
            className: "ana_word_box"
          }, /*#__PURE__*/React.createElement("span", {
            className: "ana_topic_ch"
          }, "\u89E3\u6790\uFF1A"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
            className: "ana_word"
          }, this.props.ana))));
        } else {
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
            className: "ana_item"
          }, /*#__PURE__*/React.createElement("div", {
            className: "ana_item_header"
          }, /*#__PURE__*/React.createElement("span", {
            className: "num"
          }, this.props.num), /*#__PURE__*/React.createElement("span", {
            className: "topic"
          }, this.props.topic)), /*#__PURE__*/React.createElement("div", {
            className: "exam_btn"
          }, /*#__PURE__*/React.createElement("span", {
            className: "exam_btn_num"
          }, this.props.wrong_ans_num), /*#__PURE__*/React.createElement("label", {
            className: "ana_container wrong"
          }, /*#__PURE__*/React.createElement("span", {
            className: "ana_ans_word wrong"
          }, this.props.wrong_ans), /*#__PURE__*/React.createElement("span", {
            className: "ana_checkmark ana_wrong_checkmark"
          }))), /*#__PURE__*/React.createElement("div", {
            className: "exam_btn"
          }, /*#__PURE__*/React.createElement("span", {
            className: "exam_btn_num"
          }, this.props.ans_num), /*#__PURE__*/React.createElement("label", {
            className: "ana_container correct"
          }, /*#__PURE__*/React.createElement("span", {
            className: "ana_ans_word correct"
          }, this.props.r_ans_word), /*#__PURE__*/React.createElement("span", {
            className: "ana_checkmark ana_correct_checkmark"
          }))), /*#__PURE__*/React.createElement("div", {
            className: "ana_word_box"
          }, /*#__PURE__*/React.createElement("span", {
            className: "ana_topic_ch"
          }, "\u89E3\u6790\uFF1A"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
            className: "ana_word"
          }, this.props.ana))));
        }
      }
    }]);

    return AnaItem;
  }(React.Component);

  var AnaTitleItem = /*#__PURE__*/function (_React$Component7) {
    _inherits(AnaTitleItem, _React$Component7);

    var _super7 = _createSuper(AnaTitleItem);

    function AnaTitleItem() {
      _classCallCheck(this, AnaTitleItem);

      return _super7.apply(this, arguments);
    }

    _createClass(AnaTitleItem, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
          style: this.props.answordcolor
        }, this.props.anaword));
      }
    }]);

    return AnaTitleItem;
  }(React.Component);
  /* /////MENUBTN ///// */


  var MenuBtn = /*#__PURE__*/function (_React$Component8) {
    _inherits(MenuBtn, _React$Component8);

    var _super8 = _createSuper(MenuBtn);

    function MenuBtn() {
      _classCallCheck(this, MenuBtn);

      return _super8.apply(this, arguments);
    }

    _createClass(MenuBtn, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: this.props.style,
          onClick: this.props.playfunction
        }, /*#__PURE__*/React.createElement("a", null, this.props.name));
      }
    }]);

    return MenuBtn;
  }(React.Component);

  ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "examPage_content"
  }, /*#__PURE__*/React.createElement(ExamInfo, null)), /*#__PURE__*/React.createElement("div", {
    id: "ExamContent_id"
  }, /*#__PURE__*/React.createElement(ExamContent_id, null)), /*#__PURE__*/React.createElement("div", {
    className: "anaPage_content"
  }, /*#__PURE__*/React.createElement(AnaInfo, null))), document.getElementById('App_id'));
})();