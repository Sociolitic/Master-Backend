(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-base-base-module"], {
    /***/
    "/BEz": function BEz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressComponent", function () {
        return ProgressComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_progress_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./progress.component.html */
      "2B+p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ProgressComponent = /*#__PURE__*/function () {
        function ProgressComponent() {
          _classCallCheck(this, ProgressComponent);

          this.max = 200;
          this.stacked = [];
          this.timer = null;
          this.buttonCaption = 'Start';
          this.random();
          this.randomStacked();
        }

        _createClass(ProgressComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.timer) {
              clearInterval(this.timer);
            } // console.log(`onDestroy`, this.timer);

          }
        }, {
          key: "random",
          value: function random() {
            var value = Math.floor(Math.random() * 100 + 1);
            var type;

            if (value < 25) {
              type = 'success';
            } else if (value < 50) {
              type = 'info';
            } else if (value < 75) {
              type = 'warning';
            } else {
              type = 'danger';
            }

            this.showWarning = type === 'danger' || type === 'warning';
            this.dynamic = value;
            this.type = type;
          }
        }, {
          key: "randomStacked",
          value: function randomStacked() {
            var types = ['success', 'info', 'warning', 'danger'];
            this.stacked = [];
            var n = Math.floor(Math.random() * 4 + 1);

            for (var i = 0; i < n; i++) {
              var index = Math.floor(Math.random() * 4);
              var value = Math.floor(Math.random() * 27 + 3);
              this.stacked.push({
                value: value,
                type: types[index],
                label: value + ' %'
              });
            }
          }
        }, {
          key: "randomize",
          value: function randomize() {
            var _this = this;

            if (this.timer) {
              clearInterval(this.timer);
              this.timer = null;
            } else {
              this.timer = setInterval(function () {
                return _this.randomStacked();
              }, 2000);
            }

            this.buttonCaption = this.timer ? 'Stop' : 'Start';
          }
        }]);

        return ProgressComponent;
      }();

      ProgressComponent.ctorParameters = function () {
        return [];
      };

      ProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_progress_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProgressComponent);
      /***/
    },

    /***/
    "/cIL": function cIL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function () {
        return TooltipsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tooltips_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tooltips.component.html */
      "7Rak");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      var TooltipsComponent = function TooltipsComponent(sanitizer) {
        _classCallCheck(this, TooltipsComponent);

        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
        this.html = "<span class=\"btn btn-danger\">Never trust not sanitized HTML!!!</span>";
        this.html = sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, this.html);
      };

      TooltipsComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }];
      };

      TooltipsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_tooltips_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])], TooltipsComponent);
      /***/
    },

    /***/
    "/zdl": function zdl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n        <div class=\"card-footer\">Card footer</div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-check\"></i>Card with icon\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Card with switch\n          <div class=\"card-header-actions\" style=\"height: 21px;\" >\n            <label class=\"switch switch-sm switch-label switch-info\" >\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n            </label>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Card with label\n          <div class=\"card-header-actions\">\n            <span class=\"badge badge-success\">Success</span>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Card with label\n          <div class=\"card-header-actions\">\n            <span class=\"badge badge-pill badge-danger\">42</span>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-primary\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-secondary\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-success\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-info\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-warning\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-danger\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-primary\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-secondary\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-success\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-info\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-warning\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-danger\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-primary text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-success text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-info text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-warning text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-danger text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-primary text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-primary\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-success\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-info\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-warning\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-danger\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n";
      /***/
    },

    /***/
    "0U47": function U47(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoversComponent", function () {
        return PopoversComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_popovers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./popovers.component.html */
      "t55K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      var PopoversComponent = function PopoversComponent(sanitizer) {
        _classCallCheck(this, PopoversComponent);

        this.title = 'Welcome word';
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
        this.html = "<span class=\"btn btn-warning\">Never trust not sanitized <code>HTML</code>!!!</span>";
        this.html = sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, this.html);
      };

      PopoversComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }];
      };

      PopoversComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_popovers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])], PopoversComponent);
      /***/
    },

    /***/
    "2B+p": function BP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Bootstrap Progress\n      <div class=\"card-header-actions\">\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/progressbar\" target=\"_blank\">\n          <small className=\"text-muted\">docs</small>\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <progressbar class=\"progress\" [value]=\"55\" [max]=\"100\"></progressbar>\n        </div>\n        <div class=\"col-sm-4\">\n          <progressbar class=\"progress progress-striped\" [value]=\"22\" [max]=\"100\" type=\"warning\">22%</progressbar>\n        </div>\n        <div class=\"col-sm-4\">\n          <progressbar class=\"progress progress-striped active\" [max]=\"200\" [value]=\"166\" type=\"danger\"><i>166 / 200</i></progressbar>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Progress <small>dynamic</small>\n    </div>\n    <div class=\"card-body\">\n      <progressbar class=\"progress progress-striped progress-animated\" [max]=\"max\" [value]=\"dynamic\">\n        <span style=\"color:white; white-space:nowrap;\">{{dynamic}} / {{max}}</span>\n      </progressbar>\n\n      <small><em>No animation</em></small>\n      <progressbar class=\"progress progress-success\" [value]=\"dynamic\" [max]=\"100\" type=\"success\"><b>{{dynamic}}%</b></progressbar>\n\n      <small><em>Object (changes type based on value)</em></small>\n      <progressbar class=\"progress-bar progress-bar-striped progress-bar-animated\" [value]=\"dynamic\" [max]=\"max\" [type]=\"type\">\n        {{type}} <i *ngIf=\"showWarning\">!!! Watch out !!!</i>\n      </progressbar>\n      <br>\n      <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"random()\">Randomize</button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Progress <small>stacked</small>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row col-lg-12\">\n        <progressbar class=\"progress\" [value]=\"stacked\" [max]=\"100\"></progressbar>\n      </div>\n      <br>\n      <div class=\"row col-md-12\">\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"randomize()\">{{buttonCaption}} randomize</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "38Bd": function Bd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarComponent", function () {
        return BarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function () {
        return ProgressbarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function () {
        return ProgressbarConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function () {
        return ProgressbarModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/utils */
      "hpHm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      function ProgressbarComponent_bar_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.type)("value", ctx_r0._value)("max", ctx_r0._max);
        }
      }

      function ProgressbarComponent_ng_template_1_bar_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", item_r3.type)("value", item_r3.value)("max", item_r3.max);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.label);
        }
      }

      function ProgressbarComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressbarComponent_ng_template_1_bar_0_Template, 2, 4, "bar", 3);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1._value);
        }
      }

      var _c0 = ["*"];

      var ProgressbarConfig = function ProgressbarConfig() {
        _classCallCheck(this, ProgressbarConfig);

        /**
         * if `true` changing value of progress bar will be animated
         */
        this.animate = false;
        /**
         * maximum total value of progress element
         */

        this.max = 100;
      };

      ProgressbarConfig.ɵfac = function ProgressbarConfig_Factory(t) {
        return new (t || ProgressbarConfig)();
      };
      /** @nocollapse */


      ProgressbarConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ProgressbarConfig_Factory() {
          return new ProgressbarConfig();
        },
        token: ProgressbarConfig,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ProgressbarComponent = /*#__PURE__*/function () {
        /**
         * @param {?} config
         */
        function ProgressbarComponent(config) {
          _classCallCheck(this, ProgressbarComponent);

          this.isStacked = false;
          this._max = 100;
          this.addClass = true;
          /* tslint:disable-next-line:no-any */

          this.bars = [];
          Object.assign(this, config);
        }
        /**
         * if `true` changing value of progress bar will be animated
         * @param {?} value
         * @return {?}
         */


        _createClass(ProgressbarComponent, [{
          key: "animate",
          set: function set(value) {
            this._animate = value;
            this.bars.forEach(
            /**
            * @param {?} b
            * @return {?}
            */
            function (b) {
              b.animate = value;
            });
          }
          /**
           * If `true`, striped classes are applied
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "striped",
          set: function set(value) {
            this._striped = value;
            this.bars.forEach(
            /**
            * @param {?} b
            * @return {?}
            */
            function (b) {
              b.striped = value;
            });
          }
          /**
           * current value of progress bar. Could be a number or array of objects
           * like {"value":15,"type":"info","label":"15 %"}
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "value",
          set: function set(value) {
            this.isStacked = Array.isArray(value);
            this._value = value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "isBs3",
          get: function get() {
            return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
          }
          /**
           * maximum total value of progress element
           * @return {?}
           */

        }, {
          key: "max",
          get: function get() {
            return this._max;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._max = v;
            this.bars.forEach(
            /**
            * @param {?} bar
            * @return {?}
            */
            function (bar) {
              bar.recalculatePercentage();
            });
          }
          /**
           * @param {?} bar
           * @return {?}
           */

        }, {
          key: "addBar",
          value: function addBar(bar) {
            bar.animate = this._animate;
            bar.striped = this._striped;
            this.bars.push(bar);
          }
          /**
           * @param {?} bar
           * @return {?}
           */

        }, {
          key: "removeBar",
          value: function removeBar(bar) {
            this.bars.splice(this.bars.indexOf(bar), 1);
          }
        }]);

        return ProgressbarComponent;
      }();

      ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) {
        return new (t || ProgressbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ProgressbarConfig));
      };

      ProgressbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgressbarComponent,
        selectors: [["progressbar"]],
        hostVars: 3,
        hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("max", ctx.max);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("progress", ctx.addClass);
          }
        },
        inputs: {
          animate: "animate",
          striped: "striped",
          value: "value",
          max: "max",
          type: "type"
        },
        ngContentSelectors: _c0,
        decls: 2,
        vars: 2,
        consts: [[3, "type", "value", "max", 4, "ngIf"], [3, "ngIf"], [3, "type", "value", "max"], [3, "type", "value", "max", 4, "ngFor", "ngForOf"]],
        template: function ProgressbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressbarComponent_bar_0_Template, 2, 3, "bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressbarComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isStacked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isStacked);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], BarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]];
        },
        styles: ["[_nghost-%COMP%] {\n      width: 100%;\n      display: flex;\n    }"]
      });
      /** @nocollapse */

      ProgressbarComponent.ctorParameters = function () {
        return [{
          type: ProgressbarConfig
        }];
      };

      ProgressbarComponent.propDecorators = {
        animate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        striped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.max']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        addClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.progress']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'progressbar',
            template: "<bar [type]=\"type\" [value]=\"_value\" [max]=\"_max\" *ngIf=\"!isStacked\">\n  <ng-content></ng-content>\n</bar>\n<ng-template [ngIf]=\"isStacked\">\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\" [max]=\"item.max\">{{ item.label }}</bar>\n</ng-template>\n",
            styles: ["\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "]
          }]
        }], function () {
          return [{
            type: ProgressbarConfig
          }];
        }, {
          addClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.progress']
          }],
          animate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          striped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.max']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // todo: number pipe
      // todo: use query from progress?


      var BarComponent = /*#__PURE__*/function () {
        /**
         * @param {?} el
         * @param {?} progress
         * @param {?} renderer
         */
        function BarComponent(el, progress, renderer) {
          _classCallCheck(this, BarComponent);

          this.el = el;
          this.renderer = renderer;
          this.addClass = true;
          this.percent = 0;
          this.progress = progress;
        }
        /**
         * @return {?}
         */


        _createClass(BarComponent, [{
          key: "setBarWidth",
          get: function get() {
            this.recalculatePercentage();
            return this.percent;
          }
          /**
           * @return {?}
           */

        }, {
          key: "isBs3",
          get: function get() {
            return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.progress.addBar(this);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.progress.removeBar(this);
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.value) {
              if (!changes.value.currentValue && changes.value.currentValue !== 0) {
                return;
              }

              this.value = changes.value.currentValue;
              this.recalculatePercentage();
            }

            if (changes.type) {
              this.type = changes.type.currentValue;
              this.applyTypeClasses();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "recalculatePercentage",
          value: function recalculatePercentage() {
            this.percent = +(this.value / this.progress.max * 100).toFixed(2);
            /** @type {?} */

            var totalPercentage = this.progress.bars.reduce(
            /**
            * @param {?} total
            * @param {?} bar
            * @return {?}
            */
            function (total, bar) {
              return total + bar.percent;
            }, 0);

            if (totalPercentage > 100) {
              this.percent -= totalPercentage - 100;
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "applyTypeClasses",
          value: function applyTypeClasses() {
            if (this._prevType) {
              /** @type {?} */
              var barTypeClass = "progress-bar-".concat(this._prevType);
              /** @type {?} */

              var bgClass = "bg-".concat(this._prevType);
              this.renderer.removeClass(this.el.nativeElement, barTypeClass);
              this.renderer.removeClass(this.el.nativeElement, bgClass);
              this._prevType = null;
            }

            if (this.type) {
              /** @type {?} */
              var _barTypeClass = "progress-bar-".concat(this.type);
              /** @type {?} */


              var _bgClass = "bg-".concat(this.type);

              this.renderer.addClass(this.el.nativeElement, _barTypeClass);
              this.renderer.addClass(this.el.nativeElement, _bgClass);
              this._prevType = this.type;
            }
          }
        }]);

        return BarComponent;
      }();

      BarComponent.ɵfac = function BarComponent_Factory(t) {
        return new (t || BarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ProgressbarComponent, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      BarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BarComponent,
        selectors: [["bar"]],
        hostAttrs: ["role", "progressbar", "aria-valuemin", "0"],
        hostVars: 15,
        hostBindings: function BarComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.value)("aria-valuetext", ctx.percent ? ctx.percent.toFixed(0) + "%" : "")("aria-valuemax", ctx.max);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "100", "%")("width", ctx.setBarWidth, "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("progress-bar-animated", !ctx.isBs3 && ctx.animate)("progress-bar-striped", ctx.striped)("active", ctx.isBs3 && ctx.animate)("progress-bar", ctx.addClass);
          }
        },
        inputs: {
          value: "value",
          type: "type",
          max: "max"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function BarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });
      /** @nocollapse */

      BarComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ProgressbarComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      };

      BarComponent.propDecorators = {
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        setBarWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.width.%']
        }],
        addClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.progress-bar']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bar',
            template: "<ng-content></ng-content>\n",
            host: {
              role: 'progressbar',
              'aria-valuemin': '0',
              '[class.progress-bar-animated]': '!isBs3 && animate',
              '[class.progress-bar-striped]': 'striped',
              '[class.active]': 'isBs3 && animate',
              '[attr.aria-valuenow]': 'value',
              '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
              '[attr.aria-valuemax]': 'max',
              '[style.height.%]': '"100"'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: ProgressbarComponent,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          addClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.progress-bar']
          }],
          setBarWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width.%']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ProgressbarModule = /*#__PURE__*/function () {
        function ProgressbarModule() {
          _classCallCheck(this, ProgressbarModule);
        }

        _createClass(ProgressbarModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: ProgressbarModule,
              providers: []
            };
          }
        }]);

        return ProgressbarModule;
      }();

      ProgressbarModule.ɵfac = function ProgressbarModule_Factory(t) {
        return new (t || ProgressbarModule)();
      };

      ProgressbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProgressbarModule
      });
      ProgressbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProgressbarModule, {
          declarations: function declarations() {
            return [BarComponent, ProgressbarComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [BarComponent, ProgressbarComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [BarComponent, ProgressbarComponent],
            exports: [BarComponent, ProgressbarComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-progressbar.js.map

      /***/

    },

    /***/
    "6No5": function No5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagerComponent", function () {
        return PagerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
        return PaginationComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationConfig", function () {
        return PaginationConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationModule", function () {
        return PaginationModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return PAGER_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return PAGINATION_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Provides default values for Pagination and pager components
       */


      var _c0 = function _c0(a0, a1) {
        return {
          "pull-left": a0,
          "float-left": a1
        };
      };

      var _c1 = function _c1(a0, a1) {
        return {
          "pull-right": a0,
          "float-right": a1
        };
      };

      var _c2 = function _c2(a0, a1) {
        return {
          disabled: a0,
          currentPage: a1
        };
      };

      function PaginationComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.selectPage(1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.noPrevious() || ctx_r0.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.customFirstTemplate || _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r0.noPrevious() || ctx_r0.disabled, ctx_r0.page));
        }
      }

      function PaginationComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.selectPage(ctx_r17.page - 1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.customPreviousTemplate || _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r1.noPrevious() || ctx_r1.disabled, ctx_r1.page));
        }
      }

      var _c3 = function _c3(a0, a1, a2) {
        return {
          disabled: a0,
          $implicit: a1,
          currentPage: a2
        };
      };

      function PaginationComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var pg_r19 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.selectPage(pg_r19.number, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pg_r19 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r19.active)("disabled", ctx_r2.disabled && !pg_r19.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.customPageTemplate || _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c3, ctx_r2.disabled, pg_r19, ctx_r2.page));
        }
      }

      function PaginationComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.selectPage(ctx_r22.page + 1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.noNext() || ctx_r3.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.customNextTemplate || _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r3.noNext() || ctx_r3.disabled, ctx_r3.page));
        }
      }

      function PaginationComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.selectPage(ctx_r24.totalPages, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r4.noNext() || ctx_r4.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.customLastTemplate || _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r4.noNext() || ctx_r4.disabled, ctx_r4.page));
        }
      }

      function PaginationComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var page_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r26.text);
        }
      }

      function PaginationComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getText("next"));
        }
      }

      function PaginationComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.getText("previous"));
        }
      }

      function PaginationComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getText("first"));
        }
      }

      function PaginationComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.getText("last"));
        }
      }

      var PaginationConfig = function PaginationConfig() {
        _classCallCheck(this, PaginationConfig);

        this.main = {
          maxSize: void 0,
          itemsPerPage: 10,
          boundaryLinks: false,
          directionLinks: true,
          firstText: 'First',
          previousText: 'Previous',
          nextText: 'Next',
          lastText: 'Last',
          pageBtnClass: '',
          rotate: true
        };
        this.pager = {
          itemsPerPage: 15,
          previousText: '« Previous',
          nextText: 'Next »',
          pageBtnClass: '',
          align: true
        };
      };

      PaginationConfig.ɵfac = function PaginationConfig_Factory(t) {
        return new (t || PaginationConfig)();
      };
      /** @nocollapse */


      PaginationConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function PaginationConfig_Factory() {
          return new PaginationConfig();
        },
        token: PaginationConfig,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var PAGER_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],

        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return PagerComponent;
        }),
        multi: true
      };

      var PagerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} elementRef
         * @param {?} paginationConfig
         * @param {?} changeDetection
         */
        function PagerComponent(elementRef, paginationConfig, changeDetection) {
          _classCallCheck(this, PagerComponent);

          this.elementRef = elementRef;
          this.changeDetection = changeDetection;
          /**
           * fired when total pages count changes, $event:number equals to total pages count
           */

          this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * fired when page was changed, $event:{page, itemsPerPage} equals to
           * object with current page index and number of items per page
           */

          this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onChange = Function.prototype;
          this.onTouched = Function.prototype;
          this.inited = false;
          this._page = 1;
          this.elementRef = elementRef;

          if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
          }
        }
        /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */


        _createClass(PagerComponent, [{
          key: "itemsPerPage",
          get: function get() {
            return this._itemsPerPage;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
          }
          /**
           * total number of items in all pages
           * @return {?}
           */

        }, {
          key: "totalItems",
          get: function get() {
            return this._totalItems;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
          }
          /**
           * @return {?}
           */

        }, {
          key: "totalPages",
          get: function get() {
            return this._totalPages;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._totalPages = v;
            this.numPages.emit(v);

            if (this.inited) {
              this.selectPage(this.page);
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "page",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._page;
          }
          /**
           * @param {?} config
           * @return {?}
           */
          ,
          set: function set(value) {
            /** @type {?} */
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();

            if (_previous === this._page || typeof _previous === 'undefined') {
              return;
            }

            this.pageChanged.emit({
              page: this._page,
              itemsPerPage: this.itemsPerPage
            });
          }
        }, {
          key: "configureOptions",
          value: function configureOptions(config) {
            this.config = Object.assign({}, config);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (typeof window !== 'undefined') {
              this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
            } // watch for maxSize


            this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
            this.rotate = typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
            this.boundaryLinks = typeof this.boundaryLinks !== 'undefined' ? this.boundaryLinks : this.config.boundaryLinks;
            this.directionLinks = typeof this.directionLinks !== 'undefined' ? this.directionLinks : this.config.directionLinks;
            this.pageBtnClass = typeof this.pageBtnClass !== 'undefined' ? this.pageBtnClass : this.config.pageBtnClass; // base class

            this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : this.config.itemsPerPage;
            this.totalPages = this.calculateTotalPages(); // this class

            this.pages = this.getPages(this.page, this.totalPages);
            this.inited = true;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.page = value;
            this.pages = this.getPages(this.page, this.totalPages);
          }
          /**
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "getText",
          value: function getText(key) {
            // tslint:disable-next-line:no-any
            return this["".concat(key, "Text")] || this.config["".concat(key, "Text")];
          }
          /**
           * @return {?}
           */

        }, {
          key: "noPrevious",
          value: function noPrevious() {
            return this.page === 1;
          }
          /**
           * @return {?}
           */

        }, {
          key: "noNext",
          value: function noNext() {
            return this.page === this.totalPages;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * @param {?} page
           * @param {?=} event
           * @return {?}
           */

        }, {
          key: "selectPage",
          value: function selectPage(page, event) {
            if (event) {
              event.preventDefault();
            }

            if (!this.disabled) {
              if (event && event.target) {
                // tslint:disable-next-line:no-any

                /** @type {?} */
                var target = event.target;
                target.blur();
              }

              this.writeValue(page);
              this.onChange(this.page);
            }
          } // Create page object used in template

          /**
           * @protected
           * @param {?} num
           * @param {?} text
           * @param {?} active
           * @return {?}
           */

        }, {
          key: "makePage",
          value: function makePage(num, text, active) {
            return {
              text: text,
              number: num,
              active: active
            };
          }
          /**
           * @protected
           * @param {?} currentPage
           * @param {?} totalPages
           * @return {?}
           */

        }, {
          key: "getPages",
          value: function getPages(currentPage, totalPages) {
            /** @type {?} */
            var pages = []; // Default page limits

            /** @type {?} */

            var startPage = 1;
            /** @type {?} */

            var endPage = totalPages;
            /** @type {?} */

            var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages; // recompute if maxSize

            if (isMaxSized) {
              if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1; // Adjust if limit is exceeded

                if (endPage > totalPages) {
                  endPage = totalPages;
                  startPage = endPage - this.maxSize + 1;
                }
              } else {
                // Visible pages are paginated with maxSize
                startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1; // Adjust last page if limit is exceeded

                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
              }
            } // Add page number links


            for (var num = startPage; num <= endPage; num++) {
              /** @type {?} */
              var page = this.makePage(num, num.toString(), num === currentPage);
              pages.push(page);
            } // Add links to move between page sets


            if (isMaxSized && !this.rotate) {
              if (startPage > 1) {
                /** @type {?} */
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
              }

              if (endPage < totalPages) {
                /** @type {?} */
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
              }
            }

            return pages;
          } // base class

          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "calculateTotalPages",
          value: function calculateTotalPages() {
            /** @type {?} */
            var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
            return Math.max(totalPages || 0, 1);
          }
        }]);

        return PagerComponent;
      }();

      PagerComponent.ɵfac = function PagerComponent_Factory(t) {
        return new (t || PagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      PagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PagerComponent,
        selectors: [["pager"]],
        inputs: {
          itemsPerPage: "itemsPerPage",
          totalItems: "totalItems",
          maxSize: "maxSize",
          rotate: "rotate",
          boundaryLinks: "boundaryLinks",
          directionLinks: "directionLinks",
          pageBtnClass: "pageBtnClass",
          align: "align",
          firstText: "firstText",
          previousText: "previousText",
          nextText: "nextText",
          lastText: "lastText",
          disabled: "disabled"
        },
        outputs: {
          numPages: "numPages",
          pageChanged: "pageChanged"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGER_CONTROL_VALUE_ACCESSOR])],
        decls: 7,
        vars: 24,
        consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]],
        template: function PagerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_2_listener($event) {
              return ctx.selectPage(ctx.page - 1, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_5_listener($event) {
              return ctx.selectPage(ctx.page + 1, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noPrevious())("previous", ctx.align);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.align, ctx.align));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("previous"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noNext())("next", ctx.align);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c1, ctx.align, ctx.align));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("next"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        encapsulation: 2
      });
      /** @nocollapse */

      PagerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: PaginationConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      PagerComponent.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        boundaryLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        directionLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        firstText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        previousText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nextText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lastText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageBtnClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        numPages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        pageChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        itemsPerPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        totalItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pager',
            template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-left': align, 'float-left': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
            providers: [PAGER_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: PaginationConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function PageChangedEvent() {}

      if (false) {}
      /** @type {?} */


      var PAGINATION_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],

        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return PaginationComponent;
        }),
        multi: true
      };

      var PaginationComponent = /*#__PURE__*/function () {
        /**
         * @param {?} elementRef
         * @param {?} paginationConfig
         * @param {?} changeDetection
         */
        function PaginationComponent(elementRef, paginationConfig, changeDetection) {
          _classCallCheck(this, PaginationComponent);

          this.elementRef = elementRef;
          this.changeDetection = changeDetection;
          /**
           * fired when total pages count changes, $event:number equals to total pages count
           */

          this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * fired when page was changed, $event:{page, itemsPerPage} equals to object
           * with current page index and number of items per page
           */

          this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onChange = Function.prototype;
          this.onTouched = Function.prototype;
          this.inited = false;
          this._page = 1;
          this.elementRef = elementRef;

          if (!this.config) {
            this.configureOptions(paginationConfig.main);
          }
        }
        /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */


        _createClass(PaginationComponent, [{
          key: "itemsPerPage",
          get: function get() {
            return this._itemsPerPage;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
          }
          /**
           * total number of items in all pages
           * @return {?}
           */

        }, {
          key: "totalItems",
          get: function get() {
            return this._totalItems;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
          }
          /**
           * @return {?}
           */

        }, {
          key: "totalPages",
          get: function get() {
            return this._totalPages;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._totalPages = v;
            this.numPages.emit(v);

            if (this.inited) {
              this.selectPage(this.page);
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "page",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._page;
          }
          /**
           * @param {?} config
           * @return {?}
           */
          ,
          set: function set(value) {
            /** @type {?} */
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();

            if (_previous === this._page || typeof _previous === 'undefined') {
              return;
            }

            this.pageChanged.emit({
              page: this._page,
              itemsPerPage: this.itemsPerPage
            });
          }
        }, {
          key: "configureOptions",
          value: function configureOptions(config) {
            this.config = Object.assign({}, config);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (typeof window !== 'undefined') {
              this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
            } // watch for maxSize


            this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
            this.rotate = typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
            this.boundaryLinks = typeof this.boundaryLinks !== 'undefined' ? this.boundaryLinks : this.config.boundaryLinks;
            this.directionLinks = typeof this.directionLinks !== 'undefined' ? this.directionLinks : this.config.directionLinks;
            this.pageBtnClass = typeof this.pageBtnClass !== 'undefined' ? this.pageBtnClass : this.config.pageBtnClass; // base class

            this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : this.config.itemsPerPage;
            this.totalPages = this.calculateTotalPages(); // this class

            this.pages = this.getPages(this.page, this.totalPages);
            this.inited = true;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.page = value;
            this.pages = this.getPages(this.page, this.totalPages);
          }
          /**
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "getText",
          value: function getText(key) {
            // tslint:disable-next-line:no-any
            return this["".concat(key, "Text")] || this.config["".concat(key, "Text")];
          }
          /**
           * @return {?}
           */

        }, {
          key: "noPrevious",
          value: function noPrevious() {
            return this.page === 1;
          }
          /**
           * @return {?}
           */

        }, {
          key: "noNext",
          value: function noNext() {
            return this.page === this.totalPages;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * @param {?} page
           * @param {?=} event
           * @return {?}
           */

        }, {
          key: "selectPage",
          value: function selectPage(page, event) {
            if (event) {
              event.preventDefault();
            }

            if (!this.disabled) {
              if (event && event.target) {
                // tslint:disable-next-line:no-any

                /** @type {?} */
                var target = event.target;
                target.blur();
              }

              this.writeValue(page);
              this.onChange(this.page);
            }
          } // Create page object used in template

          /**
           * @protected
           * @param {?} num
           * @param {?} text
           * @param {?} active
           * @return {?}
           */

        }, {
          key: "makePage",
          value: function makePage(num, text, active) {
            return {
              text: text,
              number: num,
              active: active
            };
          }
          /**
           * @protected
           * @param {?} currentPage
           * @param {?} totalPages
           * @return {?}
           */

        }, {
          key: "getPages",
          value: function getPages(currentPage, totalPages) {
            /** @type {?} */
            var pages = []; // Default page limits

            /** @type {?} */

            var startPage = 1;
            /** @type {?} */

            var endPage = totalPages;
            /** @type {?} */

            var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages; // recompute if maxSize

            if (isMaxSized) {
              if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1; // Adjust if limit is exceeded

                if (endPage > totalPages) {
                  endPage = totalPages;
                  startPage = endPage - this.maxSize + 1;
                }
              } else {
                // Visible pages are paginated with maxSize
                startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1; // Adjust last page if limit is exceeded

                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
              }
            } // Add page number links


            for (var num = startPage; num <= endPage; num++) {
              /** @type {?} */
              var page = this.makePage(num, num.toString(), num === currentPage);
              pages.push(page);
            } // Add links to move between page sets


            if (isMaxSized && !this.rotate) {
              if (startPage > 1) {
                /** @type {?} */
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
              }

              if (endPage < totalPages) {
                /** @type {?} */
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
              }
            }

            return pages;
          } // base class

          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "calculateTotalPages",
          value: function calculateTotalPages() {
            /** @type {?} */
            var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
            return Math.max(totalPages || 0, 1);
          }
        }]);

        return PaginationComponent;
      }();

      PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
        return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaginationComponent,
        selectors: [["pagination"]],
        inputs: {
          itemsPerPage: "itemsPerPage",
          totalItems: "totalItems",
          maxSize: "maxSize",
          rotate: "rotate",
          boundaryLinks: "boundaryLinks",
          directionLinks: "directionLinks",
          pageBtnClass: "pageBtnClass",
          align: "align",
          firstText: "firstText",
          previousText: "previousText",
          nextText: "nextText",
          lastText: "lastText",
          disabled: "disabled",
          customPageTemplate: "customPageTemplate",
          customNextTemplate: "customNextTemplate",
          customPreviousTemplate: "customPreviousTemplate",
          customFirstTemplate: "customFirstTemplate",
          customLastTemplate: "customLastTemplate"
        },
        outputs: {
          numPages: "numPages",
          pageChanged: "pageChanged"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGINATION_CONTROL_VALUE_ACCESSOR])],
        decls: 16,
        vars: 6,
        consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], ["defaultPageTemplate", ""], ["defaultNextTemplate", ""], ["defaultPreviousTemplate", ""], ["defaultFirstTemplate", ""], ["defaultLastTemplate", ""], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]],
        template: function PaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_li_1_Template, 3, 7, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationComponent_li_2_Template, 3, 7, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_li_3_Template, 3, 10, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 3, 7, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_li_5_Template, 3, 7, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginationComponent_ng_template_6_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PaginationComponent_ng_template_8_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaginationComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PaginationComponent_ng_template_12_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PaginationComponent_ng_template_14_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        encapsulation: 2
      });
      /** @nocollapse */

      PaginationComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: PaginationConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      PaginationComponent.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        boundaryLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        directionLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        firstText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        previousText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nextText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lastText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageBtnClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customPageTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customNextTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customPreviousTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customFirstTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customLastTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        numPages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        pageChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        itemsPerPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        totalItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pagination',
            template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customFirstTemplate || defaultFirstTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPreviousTemplate || defaultPreviousTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled && !pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPageTemplate || defaultPageTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pg, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customNextTemplate || defaultNextTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customLastTemplate || defaultLastTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n</ul>\n\n<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>\n\n<ng-template #defaultNextTemplate>{{ getText('next') }}</ng-template>\n\n<ng-template #defaultPreviousTemplate>{{ getText('previous') }}</ng-template>\n\n<ng-template #defaultFirstTemplate>{{ getText('first') }}</ng-template>\n\n<ng-template #defaultLastTemplate>{{ getText('last') }}</ng-template>\n",
            providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: PaginationConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customPageTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customNextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customPreviousTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customFirstTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customLastTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var PaginationModule = /*#__PURE__*/function () {
        function PaginationModule() {
          _classCallCheck(this, PaginationModule);
        }

        _createClass(PaginationModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: PaginationModule,
              providers: []
            };
          }
        }]);

        return PaginationModule;
      }();

      PaginationModule.ɵfac = function PaginationModule_Factory(t) {
        return new (t || PaginationModule)();
      };

      PaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PaginationModule
      });
      PaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaginationModule, {
          declarations: function declarations() {
            return [PagerComponent, PaginationComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [PagerComponent, PaginationComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [PagerComponent, PaginationComponent],
            exports: [PagerComponent, PaginationComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-pagination.js.map

      /***/

    },

    /***/
    "7Rak": function Rak(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Bootstrap Tooltips\n      <div class=\"card-header-actions\">\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/tooltip\" target=\"_blank\">\n          <small className=\"text-muted\">docs</small>\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-primary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n        Simple demo\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>positioning</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"top\">\n        Tooltip on top\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"right\">\n        Tooltip on right\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"auto\">\n        Tooltip auto\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"left\">\n        Tooltip on left\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"bottom\">\n        Tooltip on bottom\n      </button>\n    </div>\n</div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>dismissible</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-success\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              triggers=\"focus\">\n        Dismissible tooltip\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>dynamic content</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-info\" [tooltip]=\"content\">\n        Simple binding\n      </button>\n\n      <ng-template #tolTemplate>Just another: {{content}}</ng-template>\n      <button type=\"button\" class=\"btn btn-warning\" [tooltip]=\"tolTemplate\">\n        TemplateRef binding\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>dynamic html</small>\n    </div>\n    <div class=\"card-body\">\n      <ng-template #popTemplate>Here we go: <div [innerHtml]=\"html\"></div></ng-template>\n      <button type=\"button\" class=\"btn btn-success\"\n              [tooltip]=\"popTemplate\">\n        Show me tooltip with html\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>append to <code>body</code></small>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\" style=\"position: relative; overflow: hidden; padding-top: 10px;\">\n        <div class=\"col-xs-12 col-12\">\n          <button type=\"button\" class=\"btn btn-danger\"\n                  tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n            Default tooltip\n          </button>\n          <button type=\"button\" class=\"btn btn-success\"\n                  tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n                  container=\"body\">\n            Tooltip appended to body\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>custom triggers</small>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-6\">\n          <p>Desktop</p>\n          <button type=\"button\" class=\"btn btn-info\"\n                  tooltip=\"I will hide on click\"\n                  triggers=\"mouseenter:click\">\n            Hover over me!\n          </button>\n        </div>\n\n        <div class=\"col-xs-6 col-6\">\n          <p>Mobile</p>\n          <button type=\"button\" class=\"btn btn-info\"\n                  tooltip=\"I will hide on click\"\n                  triggers=\"click\">\n            Click on me!\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>manual triggers</small>\n    </div>\n    <div class=\"card-body\">\n      <p>\n  <span tooltip=\"Hello there! I was triggered manually\"\n        triggers=\"\" #pop=\"bs-tooltip\">\n  This text has attached tooltip\n  </span>\n      </p>\n\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"pop.show()\">\n        Show\n      </button>\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"pop.hide()\">\n        Hide\n      </button>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "978R": function R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipConfig", function () {
        return TooltipConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function () {
        return TooltipContainerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipDirective", function () {
        return TooltipDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipModule", function () {
        return TooltipModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/utils */
      "hpHm");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/component-loader */
      "z/SZ");
      /* harmony import */


      var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/positioning */
      "2uy1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Default values provider for tooltip
       */


      var _c0 = ["*"];

      var TooltipConfig = function TooltipConfig() {
        _classCallCheck(this, TooltipConfig);

        /**
         * sets disable adaptive position
         */
        this.adaptivePosition = true;
        /**
         * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
         */

        this.placement = 'top';
        /**
         * array of event names which triggers tooltip opening
         */

        this.triggers = 'hover focus';
        /**
         * delay before showing the tooltip
         */

        this.delay = 0;
      };

      TooltipConfig.ɵfac = function TooltipConfig_Factory(t) {
        return new (t || TooltipConfig)();
      };
      /** @nocollapse */


      TooltipConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function TooltipConfig_Factory() {
          return new TooltipConfig();
        },
        token: TooltipConfig,
        providedIn: "root"
      });

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TooltipContainerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} config
         */
        function TooltipContainerComponent(config) {
          _classCallCheck(this, TooltipContainerComponent);

          Object.assign(this, config);
        }
        /**
         * @return {?}
         */


        _createClass(TooltipContainerComponent, [{
          key: "isBs3",
          get: function get() {
            return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.classMap = {
              "in": false,
              fade: false
            };
            this.classMap[this.placement] = true;
            this.classMap["tooltip-".concat(this.placement)] = true;
            this.classMap["in"] = true;

            if (this.animation) {
              this.classMap.fade = true;
            }

            if (this.containerClass) {
              this.classMap[this.containerClass] = true;
            }
          }
        }]);

        return TooltipContainerComponent;
      }();

      TooltipContainerComponent.ɵfac = function TooltipContainerComponent_Factory(t) {
        return new (t || TooltipContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TooltipConfig));
      };

      TooltipContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TooltipContainerComponent,
        selectors: [["bs-tooltip-container"]],
        hostAttrs: ["role", "tooltip"],
        hostVars: 7,
        hostBindings: function TooltipContainerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("tooltip in tooltip-" + ctx.placement + " " + "bs-tooltip-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", !ctx.isBs3)("bs3", ctx.isBs3);
          }
        },
        ngContentSelectors: _c0,
        decls: 3,
        vars: 0,
        consts: [[1, "tooltip-arrow", "arrow"], [1, "tooltip-inner"]],
        template: function TooltipContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".tooltip[_nghost-%COMP%] {\n      display: block;\n      pointer-events: none;\n    }\n    .bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.tooltip.bottom[_nghost-%COMP%] {\n      margin-top: 0px;\n    }\n    .bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{\n      margin: 0px;\n    }\n    .bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      margin: .3rem 0;\n    }"],
        changeDetection: 0
      });
      /** @nocollapse */

      TooltipContainerComponent.ctorParameters = function () {
        return [{
          type: TooltipConfig
        }];
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var id = 0;

      var TooltipDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _viewContainerRef
         * @param {?} cis
         * @param {?} config
         * @param {?} _elementRef
         * @param {?} _renderer
         * @param {?} _positionService
         */
        function TooltipDirective(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
          _classCallCheck(this, TooltipDirective);

          this._elementRef = _elementRef;
          this._renderer = _renderer;
          this._positionService = _positionService;
          this.tooltipId = id++;
          /**
           * Fired when tooltip content changes
           */

          /* tslint:disable-next-line:no-any */

          this.tooltipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Css class for tooltip container
           */

          this.containerClass = '';
          /**
           * @deprecated - removed, will be added to configuration
           */

          this.tooltipAnimation = true;
          /**
           * @deprecated
           */

          this.tooltipFadeDuration = 150;
          /**
           * @deprecated
           */

          this.tooltipStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._tooltip = cis.createLoader(this._elementRef, _viewContainerRef, this._renderer).provide({
            provide: TooltipConfig,
            useValue: config
          });
          Object.assign(this, config);
          this.onShown = this._tooltip.onShown;
          this.onHidden = this._tooltip.onHidden;
        }
        /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */


        _createClass(TooltipDirective, [{
          key: "isOpen",
          get: function get() {
            return this._tooltip.isShown;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (value) {
              this.show();
            } else {
              this.hide();
            }
          }
          /**
           * @deprecated - please use `tooltip` instead
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "htmlContent",
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
          }
          /**
           * @deprecated - please use `placement` instead
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_placement",
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
          }
          /**
           * @deprecated - please use `isOpen` instead
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_isOpen",
          get:
          /**
           * @return {?}
           */
          function get() {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
          }
          /**
           * @deprecated - please use `isDisabled` instead
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
          }
        }, {
          key: "_enable",
          get:
          /**
           * @return {?}
           */
          function get() {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled;
          }
          /**
           * @deprecated - please use `container="body"` instead
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = !value;
          }
        }, {
          key: "_appendToBody",
          get:
          /**
           * @return {?}
           */
          function get() {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
          }
          /**
           * @deprecated - will replaced with customClass
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
          }
        }, {
          key: "_popupClass",
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipClass deprecated');
          }
          /**
           * @deprecated - removed
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_tooltipContext",
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipContext deprecated');
          }
          /**
           * @deprecated
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_tooltipPopupDelay",
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipPopupDelay is deprecated, use `delay` instead');
            this.delay = value;
          }
          /**
           * @deprecated -  please use `triggers` instead
           * @return {?}
           */

        }, {
          key: "_tooltipTrigger",
          get: function get() {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this._tooltip.listen({
              triggers: this.triggers,
              show:
              /**
              * @return {?}
              */
              function show() {
                return _this2.show();
              }
            });
            /* tslint:disable-next-line:no-any */


            this.tooltipChange.subscribe(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              if (!value) {
                _this2._tooltip.hide();
              }
            });
            this.onShown.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this2.setAriaDescribedBy();
            });
            this.onHidden.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this2.setAriaDescribedBy();
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "setAriaDescribedBy",
          value: function setAriaDescribedBy() {
            this._ariaDescribedby = this.isOpen ? "tooltip-".concat(this.tooltipId) : null;

            if (this._ariaDescribedby) {
              this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
            } else {
              this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            }
          }
          /**
           * Toggles an element’s tooltip. This is considered a “manual” triggering of
           * the tooltip.
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle() {
            if (this.isOpen) {
              return this.hide();
            }

            this.show();
          }
          /**
           * Opens an element’s tooltip. This is considered a “manual” triggering of
           * the tooltip.
           * @return {?}
           */

        }, {
          key: "show",
          value: function show() {
            var _this3 = this;

            this._positionService.setOptions({
              modifiers: {
                flip: {
                  enabled: this.adaptivePosition
                },
                preventOverflow: {
                  enabled: this.adaptivePosition
                }
              }
            });

            if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.tooltip) {
              return;
            }
            /** @type {?} */


            var showTooltip =
            /**
            * @return {?}
            */
            function showTooltip() {
              if (_this3._delayTimeoutId) {
                _this3._delayTimeoutId = undefined;
              }

              _this3._tooltip.attach(TooltipContainerComponent).to(_this3.container).position({
                attachment: _this3.placement
              }).show({
                content: _this3.tooltip,
                placement: _this3.placement,
                containerClass: _this3.containerClass,
                id: "tooltip-".concat(_this3.tooltipId)
              });
            };
            /** @type {?} */


            var cancelDelayedTooltipShowing =
            /**
            * @return {?}
            */
            function cancelDelayedTooltipShowing() {
              if (_this3._tooltipCancelShowFn) {
                _this3._tooltipCancelShowFn();
              }
            };

            if (this.delay) {
              if (this._delaySubscription) {
                this._delaySubscription.unsubscribe();
              }

              this._delaySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(this.delay).subscribe(
              /**
              * @return {?}
              */
              function () {
                showTooltip();
                cancelDelayedTooltipShowing();
              });

              if (this.triggers) {
                Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["parseTriggers"])(this.triggers).forEach(
                /**
                * @param {?} trigger
                * @return {?}
                */
                function (trigger) {
                  _this3._tooltipCancelShowFn = _this3._renderer.listen(_this3._elementRef.nativeElement, trigger.close,
                  /**
                  * @return {?}
                  */
                  function () {
                    _this3._delaySubscription.unsubscribe();

                    cancelDelayedTooltipShowing();
                  });
                });
              }
            } else {
              showTooltip();
            }
          }
          /**
           * Closes an element’s tooltip. This is considered a “manual” triggering of
           * the tooltip.
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide() {
            var _this4 = this;

            if (this._delayTimeoutId) {
              clearTimeout(this._delayTimeoutId);
              this._delayTimeoutId = undefined;
            }

            if (!this._tooltip.isShown) {
              return;
            }

            this._tooltip.instance.classMap["in"] = false;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this4._tooltip.hide();
            }, this.tooltipFadeDuration);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._tooltip.dispose();

            this.tooltipChange.unsubscribe();

            if (this._delaySubscription) {
              this._delaySubscription.unsubscribe();
            }

            this.onShown.unsubscribe();
            this.onHidden.unsubscribe();
          }
        }]);

        return TooltipDirective;
      }();

      TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
        return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TooltipConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]));
      };

      TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TooltipDirective,
        selectors: [["", "tooltip", ""], ["", "tooltipHtml", ""]],
        inputs: {
          containerClass: "containerClass",
          tooltipAnimation: "tooltipAnimation",
          tooltipFadeDuration: "tooltipFadeDuration",
          isOpen: "isOpen",
          htmlContent: ["tooltipHtml", "htmlContent"],
          tooltip: "tooltip",
          _placement: ["tooltipPlacement", "_placement"],
          placement: "placement",
          _isOpen: ["tooltipIsOpen", "_isOpen"],
          _enable: ["tooltipEnable", "_enable"],
          isDisabled: "isDisabled",
          _appendToBody: ["tooltipAppendToBody", "_appendToBody"],
          container: "container",
          _popupClass: ["tooltipClass", "_popupClass"],
          _tooltipContext: ["tooltipContext", "_tooltipContext"],
          _tooltipPopupDelay: ["tooltipPopupDelay", "_tooltipPopupDelay"],
          delay: "delay",
          _tooltipTrigger: ["tooltipTrigger", "_tooltipTrigger"],
          triggers: "triggers",
          adaptivePosition: "adaptivePosition"
        },
        outputs: {
          tooltipChange: "tooltipChange",
          tooltipStateChanged: "tooltipStateChanged",
          onShown: "onShown",
          onHidden: "onHidden"
        },
        exportAs: ["bs-tooltip"]
      });
      /** @nocollapse */

      TooltipDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]
        }, {
          type: TooltipConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]
        }];
      };

      TooltipDirective.propDecorators = {
        adaptivePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        triggers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        containerClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onShown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        htmlContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipHtml']
        }],
        _placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipPlacement']
        }],
        _isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipIsOpen']
        }],
        _enable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipEnable']
        }],
        _appendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipAppendToBody']
        }],
        tooltipAnimation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _popupClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipClass']
        }],
        _tooltipContext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipContext']
        }],
        _tooltipPopupDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipPopupDelay']
        }],
        tooltipFadeDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _tooltipTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipTrigger']
        }],
        tooltipStateChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["OnChange"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)], TooltipDirective.prototype, "tooltip", void 0);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bs-tooltip-container',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            // tslint:disable-next-line
            host: {
              '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
              '[class.show]': '!isBs3',
              '[class.bs3]': 'isBs3',
              '[attr.id]': 'this.id',
              role: 'tooltip'
            },
            template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    ",
            styles: ["\n    :host.tooltip {\n      display: block;\n      pointer-events: none;\n    }\n    :host.bs3.tooltip.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.tooltip.bottom {\n      margin-top: 0px;\n    }\n    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{\n      margin: 0px;\n    }\n    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {\n      margin: .3rem 0;\n    }\n  "]
          }]
        }], function () {
          return [{
            type: TooltipConfig
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[tooltip], [tooltipHtml]',
            exportAs: 'bs-tooltip'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]
          }, {
            type: TooltipConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]
          }];
        }, {
          tooltipChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tooltipAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tooltipFadeDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tooltipStateChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          htmlContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipHtml']
          }],
          tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipPlacement']
          }],
          placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipIsOpen']
          }],
          _enable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipEnable']
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _appendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipAppendToBody']
          }],
          container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _popupClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipClass']
          }],
          _tooltipContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipContext']
          }],
          _tooltipPopupDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipPopupDelay']
          }],
          delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _tooltipTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipTrigger']
          }],
          triggers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          adaptivePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TooltipModule = /*#__PURE__*/function () {
        function TooltipModule() {
          _classCallCheck(this, TooltipModule);
        }

        _createClass(TooltipModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: TooltipModule,
              providers: [ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]]
            };
          }
        }]);

        return TooltipModule;
      }();

      TooltipModule.ɵfac = function TooltipModule_Factory(t) {
        return new (t || TooltipModule)();
      };

      TooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TooltipModule
      });
      TooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TooltipModule, {
          declarations: function declarations() {
            return [TooltipDirective, TooltipContainerComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]];
          },
          exports: function exports() {
            return [TooltipDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
            declarations: [TooltipDirective, TooltipContainerComponent],
            exports: [TooltipDirective],
            entryComponents: [TooltipContainerComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-tooltip.js.map

      /***/

    },

    /***/
    "9HOZ": function HOZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          3d Switch\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-3d switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-3d switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-3d switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-3d switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-3d switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-3d switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch default\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch default - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-pill switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch outline\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch outline - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-pill switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch outline alternative\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch outline alternative - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-pill switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text outline\n        </div>\n        <div class=\"card-body\">\n\n          <label class=\"switch switch-label switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text outline - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text outline alternative\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text outline alternative - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon outline\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon outline - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon outline alternative\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon outline alternative - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Sizes\n        </div>\n        <div class=\"card-body p-0\">\n          <table class=\"table table-hover table-striped table-align-middle mb-0\">\n            <thead>\n              <th>Size</th>\n              <th>Example</th>\n              <th>CSS Class</th>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  Large\n                </td>\n                <td>\n                  <label class=\"switch switch-lg switch-3d switch-primary\">\n                    <input type=\"checkbox\" class=\"switch-input\" checked>\n                    <span class=\"switch-slider\"></span>\n                  </label>\n                </td>\n                <td>\n                  Add following class <code>.switch-lg</code>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Normal\n                </td>\n                <td>\n                  <label class=\"switch switch-3d switch-primary\">\n                    <input type=\"checkbox\" class=\"switch-input\" checked>\n                    <span class=\"switch-slider\"></span>\n                  </label>\n                </td>\n                <td>\n                  -\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Small\n                </td>\n                <td>\n                  <label class=\"switch switch-sm switch-3d switch-primary\">\n                    <input type=\"checkbox\" class=\"switch-input\" checked>\n                    <span class=\"switch-slider\"></span>\n                  </label>\n                </td>\n                <td>\n                  Add following class <code>.switch-sm</code>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n";
      /***/
    },

    /***/
    "BIqA": function BIqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollapsesComponent", function () {
        return CollapsesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_collapses_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./collapses.component.html */
      "n8aU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CollapsesComponent = /*#__PURE__*/function () {
        function CollapsesComponent() {
          _classCallCheck(this, CollapsesComponent);

          this.isCollapsed = false;
        }

        _createClass(CollapsesComponent, [{
          key: "collapsed",
          value: function collapsed(event) {// console.log(event);
          }
        }, {
          key: "expanded",
          value: function expanded(event) {// console.log(event);
          }
        }]);

        return CollapsesComponent;
      }();

      CollapsesComponent.ctorParameters = function () {
        return [];
      };

      CollapsesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_collapses_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CollapsesComponent);
      /***/
    },

    /***/
    "Cvcy": function Cvcy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseModule", function () {
        return BaseModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cards.component */
      "yiC3");
      /* harmony import */


      var _forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forms.component */
      "cuZX");
      /* harmony import */


      var _switches_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./switches.component */
      "DOlD");
      /* harmony import */


      var _tables_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tables.component */
      "ORZi");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var _tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./tabs.component */
      "mxBt");
      /* harmony import */


      var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/carousel */
      "Osdn");
      /* harmony import */


      var _carousels_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./carousels.component */
      "Ro3z");
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      "St1U");
      /* harmony import */


      var _collapses_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./collapses.component */
      "BIqA");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var _popovers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./popovers.component */
      "0U47");
      /* harmony import */


      var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-bootstrap/popover */
      "KOzp");
      /* harmony import */


      var _paginations_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./paginations.component */
      "U5AO");
      /* harmony import */


      var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-bootstrap/progressbar */
      "38Bd");
      /* harmony import */


      var _progress_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./progress.component */
      "/BEz");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var _tooltips_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./tooltips.component */
      "/cIL");
      /* harmony import */


      var _base_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./base-routing.module */
      "cgWR"); // Angular
      // Forms Component
      // Tabs Component
      // Carousel Component
      // Collapse Component
      // Dropdowns Component
      // Pagination Component
      // Popover Component
      // Progress Component
      // Tooltip Component
      // navbars
      // Components Routing


      var BaseModule = function BaseModule() {
        _classCallCheck(this, BaseModule);
      };

      BaseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _base_routing_module__WEBPACK_IMPORTED_MODULE_23__["BaseRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__["BsDropdownModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__["CollapseModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__["PopoverModule"].forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_19__["ProgressbarModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_21__["TooltipModule"].forRoot()],
        declarations: [_cards_component__WEBPACK_IMPORTED_MODULE_4__["CardsComponent"], _forms_component__WEBPACK_IMPORTED_MODULE_5__["FormsComponent"], _switches_component__WEBPACK_IMPORTED_MODULE_6__["SwitchesComponent"], _tables_component__WEBPACK_IMPORTED_MODULE_7__["TablesComponent"], _tabs_component__WEBPACK_IMPORTED_MODULE_9__["TabsComponent"], _carousels_component__WEBPACK_IMPORTED_MODULE_11__["CarouselsComponent"], _collapses_component__WEBPACK_IMPORTED_MODULE_13__["CollapsesComponent"], _paginations_component__WEBPACK_IMPORTED_MODULE_18__["PaginationsComponent"], _popovers_component__WEBPACK_IMPORTED_MODULE_16__["PopoversComponent"], _progress_component__WEBPACK_IMPORTED_MODULE_20__["ProgressComponent"], _tooltips_component__WEBPACK_IMPORTED_MODULE_22__["TooltipsComponent"]]
      })], BaseModule);
      /***/
    },

    /***/
    "DOlD": function DOlD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SwitchesComponent", function () {
        return SwitchesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_switches_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./switches.component.html */
      "9HOZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SwitchesComponent = function SwitchesComponent() {
        _classCallCheck(this, SwitchesComponent);
      };

      SwitchesComponent.ctorParameters = function () {
        return [];
      };

      SwitchesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_switches_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SwitchesComponent);
      /***/
    },

    /***/
    "KOzp": function KOzp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverConfig", function () {
        return PopoverConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function () {
        return PopoverContainerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverDirective", function () {
        return PopoverDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverModule", function () {
        return PopoverModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/component-loader */
      "z/SZ");
      /* harmony import */


      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/utils */
      "hpHm");
      /* harmony import */


      var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/positioning */
      "2uy1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Configuration service for the Popover directive.
       * You can inject this service, typically in your root component, and customize
       * the values of its properties in order to provide default values for all the
       * popovers used in the application.
       */


      function PopoverContainerComponent_h3_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
        }
      }

      var _c0 = ["*"];

      var PopoverConfig = function PopoverConfig() {
        _classCallCheck(this, PopoverConfig);

        /**
         * sets disable adaptive position
         */
        this.adaptivePosition = true;
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */

        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */

        this.triggers = 'click';
        this.outsideClick = false;
        /**
         * delay before showing the tooltip
         */

        this.delay = 0;
      };

      PopoverConfig.ɵfac = function PopoverConfig_Factory(t) {
        return new (t || PopoverConfig)();
      };
      /** @nocollapse */


      PopoverConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function PopoverConfig_Factory() {
          return new PopoverConfig();
        },
        token: PopoverConfig,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var PopoverContainerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} config
         */
        function PopoverContainerComponent(config) {
          _classCallCheck(this, PopoverContainerComponent);

          Object.assign(this, config);
        }
        /**
         * @return {?}
         */


        _createClass(PopoverContainerComponent, [{
          key: "isBs3",
          get: function get() {
            return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
          }
        }]);

        return PopoverContainerComponent;
      }();

      PopoverContainerComponent.ɵfac = function PopoverContainerComponent_Factory(t) {
        return new (t || PopoverContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PopoverConfig));
      };

      PopoverContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopoverContainerComponent,
        selectors: [["popover-container"]],
        hostAttrs: ["role", "tooltip", 2, "display", "block"],
        hostVars: 7,
        hostBindings: function PopoverContainerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.popoverId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("popover in popover-" + ctx.placement + " " + "bs-popover-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", !ctx.isBs3)("bs3", ctx.isBs3);
          }
        },
        inputs: {
          placement: "placement",
          title: "title"
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 1,
        consts: [[1, "popover-arrow", "arrow"], ["class", "popover-title popover-header", 4, "ngIf"], [1, "popover-content", "popover-body"], [1, "popover-title", "popover-header"]],
        template: function PopoverContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopoverContainerComponent_h3_1_Template, 2, 1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: [".bs3.popover-top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -4px;\n    }\n    .bs3.bs-popover-left[_nghost-%COMP%] {\n      margin-right: .5rem;\n    }\n    .bs3.bs-popover-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-popover-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{\n      margin: .3rem 0;\n    }"],
        changeDetection: 0
      });
      /** @nocollapse */

      PopoverContainerComponent.ctorParameters = function () {
        return [{
          type: PopoverConfig
        }];
      };

      PopoverContainerComponent.propDecorators = {
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'popover-container',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            // tslint:disable-next-line
            host: {
              '[attr.id]': 'popoverId',
              '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
              '[class.show]': '!isBs3',
              '[class.bs3]': 'isBs3',
              role: 'tooltip',
              style: 'display:block;'
            },
            template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
            styles: ["\n    :host.bs3.popover-top {\n      margin-bottom: 10px;\n    }\n    :host.bs3.popover.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.popover.top {\n      margin-bottom: 10px;\n    }\n    :host.popover.bottom>.arrow {\n      margin-left: -4px;\n    }\n    :host.bs3.bs-popover-left {\n      margin-right: .5rem;\n    }\n    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{\n      margin: .3rem 0;\n    }\n    "]
          }]
        }], function () {
          return [{
            type: PopoverConfig
          }];
        }, {
          placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var id = 0;
      /**
       * A lightweight, extensible directive for fancy popover creation.
       */

      var PopoverDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _config
         * @param {?} _elementRef
         * @param {?} _renderer
         * @param {?} _viewContainerRef
         * @param {?} cis
         * @param {?} _positionService
         */
        function PopoverDirective(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
          _classCallCheck(this, PopoverDirective);

          this._elementRef = _elementRef;
          this._renderer = _renderer;
          this._positionService = _positionService;
          /**
           * unique id popover - use for aria-describedby
           */

          this.popoverId = id++;
          /**
           * Close popover on outside click
           */

          this.outsideClick = false;
          /**
           * Css class for popover container
           */

          this.containerClass = '';
          this._isInited = false;
          this._popover = cis.createLoader(_elementRef, _viewContainerRef, _renderer).provide({
            provide: PopoverConfig,
            useValue: _config
          });
          Object.assign(this, _config);
          this.onShown = this._popover.onShown;
          this.onHidden = this._popover.onHidden; // fix: no focus on button on Mac OS #1795

          if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click',
            /**
            * @return {?}
            */
            function () {
              try {
                _elementRef.nativeElement.focus();
              } catch (err) {
                return;
              }
            });
          }
        }
        /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */


        _createClass(PopoverDirective, [{
          key: "isOpen",
          get: function get() {
            return this._popover.isShown;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (value) {
              this.show();
            } else {
              this.hide();
            }
          }
          /**
           * Set attribute aria-describedBy for element directive and
           * set id for the popover
           * @return {?}
           */

        }, {
          key: "setAriaDescribedBy",
          value: function setAriaDescribedBy() {
            this._ariaDescribedby = this.isOpen ? "ngx-popover-".concat(this.popoverId) : null;

            if (this._ariaDescribedby) {
              this._popover.instance.popoverId = this._ariaDescribedby;

              this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
            } else {
              this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            }
          }
          /**
           * Opens an element’s popover. This is considered a “manual” triggering of
           * the popover.
           * @return {?}
           */

        }, {
          key: "show",
          value: function show() {
            var _this5 = this;

            if (this._popover.isShown || !this.popover || this._delayTimeoutId) {
              return;
            }

            this._positionService.setOptions({
              modifiers: {
                flip: {
                  enabled: this.adaptivePosition
                },
                preventOverflow: {
                  enabled: this.adaptivePosition
                }
              }
            });
            /** @type {?} */


            var showPopover =
            /**
            * @return {?}
            */
            function showPopover() {
              if (_this5._delayTimeoutId) {
                _this5._delayTimeoutId = undefined;
              }

              _this5._popover.attach(PopoverContainerComponent).to(_this5.container).position({
                attachment: _this5.placement
              }).show({
                content: _this5.popover,
                context: _this5.popoverContext,
                placement: _this5.placement,
                title: _this5.popoverTitle,
                containerClass: _this5.containerClass
              });

              if (!_this5.adaptivePosition) {
                _this5._positionService.calcPosition();

                _this5._positionService.deletePositionElement(_this5._popover._componentRef.location);
              }

              _this5.isOpen = true;

              _this5.setAriaDescribedBy();
            };
            /** @type {?} */


            var cancelDelayedTooltipShowing =
            /**
            * @return {?}
            */
            function cancelDelayedTooltipShowing() {
              if (_this5._popoverCancelShowFn) {
                _this5._popoverCancelShowFn();
              }
            };

            if (this.delay) {
              /** @type {?} */
              var _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.delay).subscribe(
              /**
              * @return {?}
              */
              function () {
                showPopover();
                cancelDelayedTooltipShowing();
              });

              if (this.triggers) {
                Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["parseTriggers"])(this.triggers).forEach(
                /**
                * @param {?} trigger
                * @return {?}
                */
                function (trigger) {
                  _this5._popoverCancelShowFn = _this5._renderer.listen(_this5._elementRef.nativeElement, trigger.close,
                  /**
                  * @return {?}
                  */
                  function () {
                    _timer.unsubscribe();

                    cancelDelayedTooltipShowing();
                  });
                });
              }
            } else {
              showPopover();
            }
          }
          /**
           * Closes an element’s popover. This is considered a “manual” triggering of
           * the popover.
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide() {
            if (this._delayTimeoutId) {
              clearTimeout(this._delayTimeoutId);
              this._delayTimeoutId = undefined;
            }

            if (this.isOpen) {
              this._popover.hide();

              this.setAriaDescribedBy();
              this.isOpen = false;
            }
          }
          /**
           * Toggles an element’s popover. This is considered a “manual” triggering of
           * the popover.
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle() {
            if (this.isOpen) {
              return this.hide();
            }

            this.show();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            // fix: seems there are an issue with `routerLinkActive`
            // which result in duplicated call ngOnInit without call to ngOnDestroy
            // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
            if (this._isInited) {
              return;
            }

            this._isInited = true;

            this._popover.listen({
              triggers: this.triggers,
              outsideClick: this.outsideClick,
              show:
              /**
              * @return {?}
              */
              function show() {
                return _this6.show();
              },
              hide:
              /**
              * @return {?}
              */
              function hide() {
                return _this6.hide();
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._popover.dispose();
          }
        }]);

        return PopoverDirective;
      }();

      PopoverDirective.ɵfac = function PopoverDirective_Factory(t) {
        return new (t || PopoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PopoverConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]));
      };

      PopoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PopoverDirective,
        selectors: [["", "popover", ""]],
        inputs: {
          outsideClick: "outsideClick",
          containerClass: "containerClass",
          isOpen: "isOpen",
          adaptivePosition: "adaptivePosition",
          popover: "popover",
          popoverContext: "popoverContext",
          popoverTitle: "popoverTitle",
          placement: "placement",
          triggers: "triggers",
          container: "container",
          delay: "delay"
        },
        outputs: {
          onShown: "onShown",
          onHidden: "onHidden"
        },
        exportAs: ["bs-popover"]
      });
      /** @nocollapse */

      PopoverDirective.ctorParameters = function () {
        return [{
          type: PopoverConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"]
        }, {
          type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]
        }];
      };

      PopoverDirective.propDecorators = {
        adaptivePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        popover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        popoverContext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        popoverTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outsideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        triggers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        containerClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onShown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[popover]',
            exportAs: 'bs-popover'
          }]
        }], function () {
          return [{
            type: PopoverConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"]
          }, {
            type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]
          }];
        }, {
          outsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          adaptivePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          popoverContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          popoverTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          triggers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var PopoverModule = /*#__PURE__*/function () {
        function PopoverModule() {
          _classCallCheck(this, PopoverModule);
        }

        _createClass(PopoverModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: PopoverModule,
              providers: [ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
            };
          }
        }]);

        return PopoverModule;
      }();

      PopoverModule.ɵfac = function PopoverModule_Factory(t) {
        return new (t || PopoverModule)();
      };

      PopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopoverModule
      });
      PopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopoverModule, {
          declarations: function declarations() {
            return [PopoverDirective, PopoverContainerComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]];
          },
          exports: function exports() {
            return [PopoverDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
            declarations: [PopoverDirective, PopoverContainerComponent],
            exports: [PopoverDirective],
            entryComponents: [PopoverContainerComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-popover.js.map

      /***/

    },

    /***/
    "MLa8": function MLa8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab heading=\"Home\">\n          1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab heading=\"Profile\">\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab heading=\"Messages\">\n          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-calculator\"></i></ng-template>\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-basket-loaded\"></i></ng-template>\n          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i></ng-template>\n          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-calculator\"></i> Calculator</ng-template>\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-basket-loaded\"></i> Shoping cart</ng-template>\n          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i> Charts</ng-template>\n          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-list\"></i> Menu &nbsp;<span class=\"badge badge-success\">New</span></ng-template>\n          1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-calculator\"></i> Calculator &nbsp;<span class=\"badge badge-pill badge-danger\">29</span></ng-template>\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i> Charts</ng-template>\n          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n";
      /***/
    },

    /***/
    "ORZi": function ORZi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
        return TablesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tables_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tables.component.html */
      "ZX8u");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TablesComponent = function TablesComponent() {
        _classCallCheck(this, TablesComponent);
      };

      TablesComponent.ctorParameters = function () {
        return [];
      };

      TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_tables_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TablesComponent);
      /***/
    },

    /***/
    "Ro3z": function Ro3z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselsComponent", function () {
        return CarouselsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_carousels_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./carousels.component.html */
      "t4w8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/carousel */
      "Osdn");

      var CarouselsComponent = /*#__PURE__*/function () {
        function CarouselsComponent() {
          _classCallCheck(this, CarouselsComponent);

          this.myInterval = 6000;
          this.slides = [];
          this.activeSlideIndex = 0;
          this.noWrapSlides = false;

          for (var i = 0; i < 4; i++) {
            this.addSlide();
          }
        }

        _createClass(CarouselsComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.myInterval = 0;
            this.noWrapSlides = true;
            this.myInterval = false;
          }
        }, {
          key: "addSlide",
          value: function addSlide() {
            var _this7 = this;

            setTimeout(function () {
              var seed = Math.random().toString(36).slice(-6);

              _this7.slides.push({
                image: "https://picsum.photos/seed/".concat(seed, "/900/500")
              });
            }, 500);
          }
        }, {
          key: "removeSlide",
          value: function removeSlide(index) {
            var toRemove = index ? index : this.activeSlideIndex;
            this.slides.splice(toRemove, 1);
          }
        }]);

        return CarouselsComponent;
      }();

      CarouselsComponent.ctorParameters = function () {
        return [];
      };

      CarouselsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_carousels_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [{
          provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselConfig"],
          useValue: {
            interval: 1500,
            noPause: false
          }
        }]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CarouselsComponent);
      /***/
    },

    /***/
    "U5AO": function U5AO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationsComponent", function () {
        return PaginationsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_paginations_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./paginations.component.html */
      "Ymbk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var PaginationsComponent = /*#__PURE__*/function () {
        function PaginationsComponent() {
          _classCallCheck(this, PaginationsComponent);

          this.totalItems = 64;
          this.currentPage = 4;
          this.smallnumPages = 0;
          this.maxSize = 5;
          this.bigTotalItems = 675;
          this.bigCurrentPage = 1;
          this.numPages = 0;
          this.currentPager = 4;
        }

        _createClass(PaginationsComponent, [{
          key: "setPage",
          value: function setPage(pageNo) {
            this.currentPage = pageNo;
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            console.log('Page changed to: ' + event.page);
            console.log('Number items per page: ' + event.itemsPerPage);
          }
        }]);

        return PaginationsComponent;
      }();

      PaginationsComponent.ctorParameters = function () {
        return [];
      };

      PaginationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_paginations_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        styles: [".pager li.btn:active { box-shadow: none; }"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PaginationsComponent);
      /***/
    },

    /***/
    "Ymbk": function Ymbk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Bootstrap Pagination\n      <div class=\"card-header-actions\">\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/pagination\" target=\"_blank\">\n          <small className=\"text-muted\">docs</small>\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-12 d-sm-down-none\">\n          <pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\"></pagination>\n        </div>\n        <div class=\"col-xs-12 col-12\">\n          <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" class=\"pagination-sm\" [maxSize]=\"6\"\n                      previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n        </div>\n        <div class=\"col-xs-12 col-12 d-sm-down-none\">\n          <pagination [directionLinks]=\"false\" [boundaryLinks]=\"true\" [totalItems]=\"totalItems\"\n                      [(ngModel)]=\"currentPage\"></pagination>\n        </div>\n        <div class=\"col-xs-12 col-12\">\n          <pagination [directionLinks]=\"false\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\"\n                      (numPages)=\"smallnumPages = $event\"></pagination>\n        </div>\n      </div>\n      <pre class=\"card card-body card-header mb-3\">The selected page no: {{currentPage}}/{{smallnumPages}}</pre>\n    </div>\n    <div class=\"card-footer\">\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"setPage(3)\">Set current page to: 3</button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Pagination <small>states & limits</small>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-12\">\n          <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\"\n                      previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" [boundaryLinks]=\"true\"></pagination>\n        </div>\n\n        <div class=\"col-xs-12 col-12\">\n          <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\"\n                      previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"\n                      [boundaryLinks]=\"true\" [rotate]=\"false\" (numPages)=\"numPages = $event\"></pagination>\n        </div>\n      </div>\n      <pre class=\"card card-body card-header\">Page: {{bigCurrentPage}} / {{numPages}}</pre>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Pager\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-12 col-md-6\">\n          <pagination\n            [directionLinks]=\"false\"\n            [totalItems]=\"totalItems\"\n            [(ngModel)]=\"currentPager\"\n            (numPages)=\"smallnumPages = $event\">\n          </pagination>\n        </div>\n\n        <div class=\"col-xs-12 col-12 col-md-6\">\n          <pager\n            [totalItems]=\"totalItems\"\n            [(ngModel)]=\"currentPager\"\n            (pageChanged)=\"pageChanged($event)\"\n            pageBtnClass=\"btn\"\n            [itemsPerPage]=\"10\"\n            class=\"pull-left\">\n          </pager>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "ZX8u": function ZX8u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Simple Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Samppa Nori</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Estavan Lykos</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Chetan Mohamed</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Derick Maximinus</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Friderik Dávid</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Striped Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Yiorgos Avraamu</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Avram Tarasios</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Quintin Ed</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Enéas Kwadwo</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Agapetus Tadeáš</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Condensed Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Carwyn Fachtna</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Nehemiah Tatius</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Ebbe Gemariah</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Eustorgios Amulius</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Leopold Gáspár</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bordered Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Pompeius René</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Paĉjo Jadon</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Micheal Mercurius</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Ganesha Dubhghall</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Hiroto Šimun</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Combined All Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-bordered table-striped table-sm\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Vishnu Serghei</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Zbyněk Phoibos</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Einar Randall</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Félix Troels</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Aulus Agmundr</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <nav>\n            <ul class=\"pagination\">\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n              <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"#\">1</a>\n              </li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n</div>\n";
      /***/
    },

    /***/
    "cgWR": function cgWR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseRoutingModule", function () {
        return BaseRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cards.component */
      "yiC3");
      /* harmony import */


      var _forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./forms.component */
      "cuZX");
      /* harmony import */


      var _switches_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./switches.component */
      "DOlD");
      /* harmony import */


      var _tables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tables.component */
      "ORZi");
      /* harmony import */


      var _tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tabs.component */
      "mxBt");
      /* harmony import */


      var _carousels_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./carousels.component */
      "Ro3z");
      /* harmony import */


      var _collapses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./collapses.component */
      "BIqA");
      /* harmony import */


      var _paginations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./paginations.component */
      "U5AO");
      /* harmony import */


      var _popovers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./popovers.component */
      "0U47");
      /* harmony import */


      var _progress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./progress.component */
      "/BEz");
      /* harmony import */


      var _tooltips_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./tooltips.component */
      "/cIL");
      /* harmony import */


      var _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./navbars/navbars.component */
      "YYp0");

      var routes = [{
        path: '',
        data: {
          title: 'Base'
        },
        children: [{
          path: '',
          redirectTo: 'cards'
        }, {
          path: 'cards',
          component: _cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"],
          data: {
            title: 'Cards'
          }
        }, {
          path: 'forms',
          component: _forms_component__WEBPACK_IMPORTED_MODULE_4__["FormsComponent"],
          data: {
            title: 'Forms'
          }
        }, {
          path: 'switches',
          component: _switches_component__WEBPACK_IMPORTED_MODULE_5__["SwitchesComponent"],
          data: {
            title: 'Switches'
          }
        }, {
          path: 'tables',
          component: _tables_component__WEBPACK_IMPORTED_MODULE_6__["TablesComponent"],
          data: {
            title: 'Tables'
          }
        }, {
          path: 'tabs',
          component: _tabs_component__WEBPACK_IMPORTED_MODULE_7__["TabsComponent"],
          data: {
            title: 'Tabs'
          }
        }, {
          path: 'carousels',
          component: _carousels_component__WEBPACK_IMPORTED_MODULE_8__["CarouselsComponent"],
          data: {
            title: 'Carousels'
          }
        }, {
          path: 'collapses',
          component: _collapses_component__WEBPACK_IMPORTED_MODULE_9__["CollapsesComponent"],
          data: {
            title: 'Collapses'
          }
        }, {
          path: 'paginations',
          component: _paginations_component__WEBPACK_IMPORTED_MODULE_10__["PaginationsComponent"],
          data: {
            title: 'Pagination'
          }
        }, {
          path: 'popovers',
          component: _popovers_component__WEBPACK_IMPORTED_MODULE_11__["PopoversComponent"],
          data: {
            title: 'Popover'
          }
        }, {
          path: 'progress',
          component: _progress_component__WEBPACK_IMPORTED_MODULE_12__["ProgressComponent"],
          data: {
            title: 'Progress'
          }
        }, {
          path: 'tooltips',
          component: _tooltips_component__WEBPACK_IMPORTED_MODULE_13__["TooltipsComponent"],
          data: {
            title: 'Tooltips'
          }
        }, {
          path: 'navbars',
          component: _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_14__["NavbarsComponent"],
          data: {
            title: 'Navbars'
          }
        }]
      }];

      var BaseRoutingModule = function BaseRoutingModule() {
        _classCallCheck(this, BaseRoutingModule);
      };

      BaseRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BaseRoutingModule);
      /***/
    },

    /***/
    "cuZX": function cuZX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
        return FormsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forms_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forms.component.html */
      "tzVq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var FormsComponent = /*#__PURE__*/function () {
        function FormsComponent() {
          _classCallCheck(this, FormsComponent);

          this.isCollapsed = false;
          this.iconCollapse = 'icon-arrow-up';
        }

        _createClass(FormsComponent, [{
          key: "collapsed",
          value: function collapsed(event) {// console.log(event);
          }
        }, {
          key: "expanded",
          value: function expanded(event) {// console.log(event);
          }
        }, {
          key: "toggleCollapse",
          value: function toggleCollapse() {
            this.isCollapsed = !this.isCollapsed;
            this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
          }
        }]);

        return FormsComponent;
      }();

      FormsComponent.ctorParameters = function () {
        return [];
      };

      FormsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_forms_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FormsComponent);
      /***/
    },

    /***/
    "mxBt": function mxBt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsComponent", function () {
        return TabsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tabs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tabs.component.html */
      "MLa8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TabsComponent = function TabsComponent() {
        _classCallCheck(this, TabsComponent);
      };

      TabsComponent.ctorParameters = function () {
        return [];
      };

      TabsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_tabs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TabsComponent);
      /***/
    },

    /***/
    "n8aU": function n8aU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Bootstrap Collapse\n      <div class=\"card-header-actions\">\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/collapse\" target=\"_blank\">\n          <small className=\"text-muted\">docs</small>\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\"\n         (collapsed)=\"collapsed($event)\"\n         (expanded)=\"expanded($event)\"\n         [collapse]=\"isCollapsed\">\n      <p>\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo\n        consequat.\n      </p>\n    </div>\n    <div class=\"card-footer\">\n      <button type=\"button\" class=\"btn btn-primary\"\n              (click)=\"isCollapsed = !isCollapsed\">Toggle collapse\n      </button>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "t4w8": function t4w8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Bootstrap Carousel\n          <div class=\"card-header-actions\">\n            <a href=\"https://valor-software.com/ngx-bootstrap/#/carousel\" target=\"_blank\">\n              <small className=\"text-muted\">docs</small>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <carousel [interval]=\"false\">\n            <slide>\n              <img src=\"https://picsum.photos/id/1/900/500\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n            </slide>\n            <slide>\n              <img src=\"https://picsum.photos/id/1026/900/500\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n            </slide>\n            <slide>\n              <img src=\"https://picsum.photos/id/1031/900/500\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\n            </slide>\n          </carousel>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Carousel\n          <small> optional captions</small>\n        </div>\n        <div class=\"card-body\">\n          <carousel [interval]=\"false\">\n            <slide>\n              <img src=\"https://picsum.photos/id/1032/900/500\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>First slide label</h3>\n                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n              </div>\n            </slide>\n            <slide>\n              <img src=\"https://picsum.photos/id/1036/900/500\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>Second slide label</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n              </div>\n            </slide>\n            <slide>\n              <img src=\"https://picsum.photos/id/1043/900/500\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>Third slide label</h3>\n                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n              </div>\n            </slide>\n          </carousel>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Carousel\n          <small> configuring defaults</small>\n        </div>\n        <div class=\"card-body\">\n          <carousel [interval]=\"false\">\n            <slide>\n              <img src=\"https://picsum.photos/id/1054/900/500\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>First slide label</h3>\n                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n              </div>\n            </slide>\n            <slide>\n              <img src=\"https://picsum.photos/id/1059/900/500\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>Second slide label</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n              </div>\n            </slide>\n            <slide>\n              <img src=\"https://picsum.photos/id/1065/900/500\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>Third slide label</h3>\n                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n              </div>\n            </slide>\n          </carousel>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Carousel\n          <small> dynamic slides</small>\n        </div>\n        <div class=\"card-body\">\n          <carousel [interval]=\"myInterval\" [noWrap]=\"noWrapSlides\" [(activeSlide)]=\"activeSlideIndex\">\n            <slide *ngFor=\"let slide of slides; let index=index\">\n              <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block; width: 100%;\">\n\n              <div class=\"carousel-caption\">\n                <h4>Slide {{index}}</h4>\n                <p>{{slide.text}}</p>\n              </div>\n            </slide>\n          </carousel>\n          <br/>\n          <div>\n            <button type=\"button\" class=\"btn btn-info\"\n                    (click)=\"addSlide()\">Add Slide\n            </button>\n            <button type=\"button\" class=\"btn btn-info\"\n                    (click)=\"removeSlide()\">Remove Current\n            </button>\n            <button type=\"button\" class=\"btn btn-info\"\n                    (click)=\"removeSlide(2)\">Remove #3\n            </button>\n          </div>\n          <div>\n            <div class=\"checkbox\">\n              <label><input type=\"checkbox\" [(ngModel)]=\"noWrapSlides\">Disable Slide Looping</label>\n            </div>\n\n            <span>Interval, in milliseconds (Enter a negative number or 0 to stop the interval.): </span>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"myInterval\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "t55K": function t55K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Bootstrap Popover\n      <div class=\"card-header-actions\">\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/popover\" target=\"_blank\">\n          <small className=\"text-muted\">docs</small>\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-primary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n        Live demo\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>positioning</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover on top\"\n              placement=\"top\">\n        Popover on top\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover on right\"\n              placement=\"right\">\n        Popover on right\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover auto\"\n              placement=\"auto\">\n        Popover auto\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover on left\"\n              placement=\"left\">\n        Popover on left\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover on bottom\"\n              placement=\"bottom\">\n        Popover on bottom\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small><code>focus</code> trigger</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-success\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Dismissible popover\"\n              triggers=\"focus\">\n        Dismissible popover\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>dynamic content</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-info\"\n              [popover]=\"content\" [popoverTitle]=\"title\">\n        Simple binding\n      </button>\n\n      <ng-template #popTemplate>Just another: {{content}}</ng-template>\n      <button type=\"button\" class=\"btn btn-warning\"\n              [popover]=\"popTemplate\" popoverTitle=\"Template ref content inside\">\n        TemplateRef binding\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>dynamic HTML</small>\n    </div>\n    <div class=\"card-body\">\n      <ng-template #popTemplateHtml>Here we go:\n        <div [innerHtml]=\"html\"></div>\n      </ng-template>\n      <button type=\"button\" class=\"btn btn-success\"\n              [popover]=\"popTemplateHtml\" popoverTitle=\"Dynamic html inside\">\n        Show me popover with html\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>append to <code>body</code></small>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row panel\" style=\"position: relative; overflow: hidden;\">\n        <div class=\"card-body panel-body\">\n          <button type=\"button\" class=\"btn btn-danger\"\n                  popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n            Default popover\n          </button>\n          <button type=\"button\" class=\"btn btn-success\"\n                  popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n                  container=\"body\">\n            Popover appended to body\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>custom triggers</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-info\"\n              popover=\"I will hide on blur\"\n              triggers=\"mouseenter:mouseleave\">\n        Hover over me!\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>manual triggering</small>\n    </div>\n    <div class=\"card-body\">\n      <p>\n        <span popover=\"Hello there! I was triggered manually\"\n              triggers=\"\" #pop=\"bs-popover\">\n        This text has attached popover\n        </span>\n      </p>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"pop.show()\">\n        Show\n      </button>\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"pop.hide()\">\n        Hide\n      </button>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "tzVq": function tzVq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Credit Card</strong>\n          <small>Form</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter your name\">\n              </div>\n            </div>\n          </div><!--/.row-->\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"ccnumber\">Credit Card Number</label>\n                <input type=\"text\" class=\"form-control\" id=\"ccnumber\" placeholder=\"0000 0000 0000 0000\">\n              </div>\n            </div>\n          </div><!--/.row-->\n          <div class=\"row\">\n            <div class=\"form-group col-sm-4\">\n              <label for=\"ccmonth\">Month</label>\n              <select class=\"form-control\" id=\"ccmonth\">\n                <option>1</option>\n                <option>2</option>\n                <option>3</option>\n                <option>4</option>\n                <option>5</option>\n                <option>6</option>\n                <option>7</option>\n                <option>8</option>\n                <option>9</option>\n                <option>10</option>\n                <option>11</option>\n                <option>12</option>\n              </select>\n            </div>\n            <div class=\"form-group col-sm-4\">\n              <label for=\"ccyear\">Year</label>\n              <select class=\"form-control\" id=\"ccyear\">\n                <option>2014</option>\n                <option>2015</option>\n                <option>2016</option>\n                <option>2017</option>\n                <option>2018</option>\n                <option>2019</option>\n                <option>2020</option>\n                <option>2021</option>\n                <option>2022</option>\n                <option>2023</option>\n                <option>2024</option>\n                <option>2025</option>\n              </select>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label for=\"cvv\">CVV/CVC</label>\n                <input type=\"text\" class=\"form-control\" id=\"cvv\" placeholder=\"123\">\n              </div>\n            </div>\n          </div><!--/.row-->\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Company</strong>\n          <small>Form</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <label for=\"company\">Company</label>\n            <input type=\"text\" class=\"form-control\" id=\"company\" placeholder=\"Enter your company name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"vat\">VAT</label>\n            <input type=\"text\" class=\"form-control\" id=\"vat\" placeholder=\"PL1234567890\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"street\">Street</label>\n            <input type=\"text\" class=\"form-control\" id=\"street\" placeholder=\"Enter street name\">\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-sm-8\">\n              <label for=\"city\">City</label>\n              <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"Enter your city\">\n            </div>\n            <div class=\"form-group col-sm-4\">\n              <label for=\"postal-code\">Postal Code</label>\n              <input type=\"text\" class=\"form-control\" id=\"postal-code\" placeholder=\"Postal Code\">\n            </div>\n          </div><!--/.row-->\n          <div class=\"form-group\">\n            <label for=\"country\">Country</label>\n            <input type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"Country name\">\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Basic Form</strong> Elements\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">Static</label>\n              <div class=\"col-md-9\">\n                <p class=\"form-control-static\">Username</p>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Text Input</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"Text\">\n                <span class=\"help-block\">This is a help text</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Email Input</label>\n              <div class=\"col-md-9\">\n                <input type=\"email\" id=\"email-input\" name=\"email-input\" class=\"form-control\" placeholder=\"Enter Email\" autocomplete=\"email\">\n                <span class=\"help-block\">Please enter your email</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"password-input\">Password</label>\n              <div class=\"col-md-9\">\n                <input type=\"password\" id=\"password-input\" name=\"password-input\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\">\n                <span class=\"help-block\">Please enter a complex password</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"date-input\">Date Input</label>\n              <div class=\"col-md-9\">\n                <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"date-input\" placeholder=\"date\">\n                <span class=\"help-block\">Please enter a valid date</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"disabled-input\">Disabled Input</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" id=\"disabled-input\" name=\"disabled-input\" class=\"form-control\" placeholder=\"Disabled\" disabled>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"textarea-input\">Textarea</label>\n              <div class=\"col-md-9\">\n                <textarea id=\"textarea-input\" name=\"textarea-input\" rows=\"9\" class=\"form-control\" placeholder=\"Content..\"></textarea>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"select1\">Select</label>\n              <div class=\"col-md-9\">\n                <select id=\"select1\" name=\"select1\" class=\"form-control\">\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"select2\">Select Large</label>\n              <div class=\"col-md-9\">\n                <select id=\"select2\" name=\"select2\" class=\"form-control form-control-lg\">\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"select3\">Select Small</label>\n              <div class=\"col-md-9\">\n                <select id=\"select3\" name=\"select3\" class=\"form-control form-control-sm\">\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"disabledSelect\">Disabled Select</label>\n              <div class=\"col-md-9\">\n                <select id=\"disabledSelect\" class=\"form-control\" disabled>\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"multiple-select\">Multiple select</label>\n              <div class=\"col-md-9\">\n                <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                  <option value=\"4\">Option #4</option>\n                  <option value=\"5\">Option #5</option>\n                  <option value=\"6\">Option #6</option>\n                  <option value=\"7\">Option #7</option>\n                  <option value=\"8\">Option #8</option>\n                  <option value=\"9\">Option #9</option>\n                  <option value=\"10\">Option #10</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" >Radios</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"radios\" id=\"radio1\" value=\"option1\" checked>\n                  <label class=\"form-check-label\" for=\"radio1\">\n                    Option 1\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"radios\" id=\"radio2\" value=\"option2\">\n                  <label class=\"form-check-label\" for=\"radio2\">\n                    Option 2\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"radios\" id=\"radio3\" value=\"option3\">\n                  <label class=\"form-check-label\" for=\"radio3\">\n                    Option 3\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"inline-radios\">Inline Radios</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check form-check-inline mr-1\" id=\"inline-radios\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inline-radios\" id=\"inlineRadio1\" value=\"option1\">\n                  <label class=\"form-check-label\" for=\"inlineRadio1\">One</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inline-radios\" id=\"inlineRadio2\" value=\"option2\">\n                  <label class=\"form-check-label\" for=\"inlineRadio2\">Two</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inline-radios\" id=\"inlineRadio3\" value=\"option3\">\n                  <label class=\"form-check-label\" for=\"inlineRadio3\">Three</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">Checkboxes</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" id=\"checkbox1\">\n                  <label class=\"form-check-label\" for=\"checkbox1\">\n                    Option 1\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" id=\"checkbox2\">\n                  <label class=\"form-check-label\" for=\"checkbox2\">\n                    Option 2\n                  </label>\n                </div>\n                <div class=\"form-check checkbox\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" id=\"checkbox3\">\n                  <label class=\"form-check-label\" for=\"checkbox3\">\n                    Option 3\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">Inline Checkboxes</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inline-checkbox1\" value=\"option1\">\n                  <label class=\"form-check-label\" for=\"inline-checkbox1\">One</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inline-checkbox2\" value=\"option2\">\n                  <label class=\"form-check-label\" for=\"inline-checkbox2\">Two</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inline-checkbox3\" value=\"option3\">\n                  <label class=\"form-check-label\" for=\"inline-checkbox3\">Three</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"file-input\">File input</label>\n              <div class=\"col-md-9\">\n                <input type=\"file\" id=\"file-input\" name=\"file-input\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"file-multiple-input\">Multiple File input</label>\n              <div class=\"col-md-9\">\n                <input type=\"file\" id=\"file-multiple-input\" name=\"file-multiple-input\" multiple>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Inline</strong> Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-inline\">\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"if-email\">Email</label>\n              <input type=\"email\" id=\"if-email\" name=\"if-email\" class=\"form-control\" placeholder=\"Enter Email..\" autocomplete=\"email\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"if-password\">Password</label>\n              <input type=\"password\" id=\"if-password\" name=\"if-password\" class=\"form-control\" placeholder=\"Enter Password..\" autocomplete=\"current-password\">\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Horizontal</strong> Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Email</label>\n              <div class=\"col-md-9\">\n                <input type=\"email\" id=\"hf-email\" name=\"hf-email\" class=\"form-control\" placeholder=\"Enter Email..\" autocomplete=\"email\">\n                <span class=\"help-block\">Please enter your email</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-password\">Password</label>\n              <div class=\"col-md-9\">\n                <input type=\"password\" id=\"hf-password\" name=\"hf-password\" class=\"form-control\" placeholder=\"Enter Password..\" autocomplete=\"current-password\">\n                <span class=\"help-block\">Please enter your password</span>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Normal</strong> Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <label for=\"nf-email\">Email</label>\n              <input type=\"email\" id=\"nf-email\" name=\"nf-email\" class=\"form-control\" placeholder=\"Enter Email..\" autocomplete=\"email\">\n              <span class=\"help-block\">Please enter your email</span>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"nf-password\">Password</label>\n              <input type=\"password\" id=\"nf-password\" name=\"nf-password\" class=\"form-control\" placeholder=\"Enter Password..\" autocomplete=\"current-password\">\n              <span class=\"help-block\">Please enter your password</span>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Input\n          <strong>Grid</strong>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-3\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-3\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-4\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-5\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-6\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-7\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-8\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-9\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-9\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-10\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-11\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-11\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-12\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-user\"></i> Login</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Input\n          <strong>Sizes</strong>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-5 col-form-label\" for=\"input-small\">Small Input</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" id=\"input-small\" name=\"input-small\" class=\"form-control form-control-sm\" placeholder=\".form-control-sm\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-5 col-form-label\" for=\"input-normal\">Normal Input</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" id=\"input-normal\" name=\"input-normal\" class=\"form-control\" placeholder=\"Normal\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-5 col-form-label\" for=\"input-large\">Large Input</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" id=\"input-large\" name=\"input-large\" class=\"form-control form-control-lg\" placeholder=\".form-control-lg\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Validation states</strong> Form\n        </div>\n        <form>\n          <div class=\"card-body\">\n            <div class=\"form-group\">\n              <label class=\"form-col-form-label\" for=\"inputSuccess1\">Input with success</label>\n              <input type=\"text\" class=\"form-control is-valid\" id=\"inputSuccess1\">\n              <div class=\"valid-feedback\">\n                Input is valid.\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-col-form-label\" for=\"inputError1\">Input with error</label>\n              <input type=\"text\" class=\"form-control is-invalid\" id=\"inputError1\">\n              <div class=\"invalid-feedback\">\n                Please provide a valid information.\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Validation </strong> <code>was-validated</code>\n        </div>\n        <div class=\"card-body\">\n          <form class=\"was-validated\">\n            <div class=\"form-group\">\n              <label class=\"form-col-form-label\" for=\"inputSuccess2\">Input is valid</label>\n              <input type=\"text\" class=\"form-control is-valid\" id=\"inputSuccess2\">\n              <div class=\"valid-feedback\">\n                Looks good!\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-col-form-label\" for=\"inputError2\">Input required</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputError2\" required>\n              <div class=\"valid-feedback\">\n                Input is valid.\n              </div>\n              <div class=\"invalid-feedback\">\n                Please provide a valid information.\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Icon/Text</strong> Groups\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                  </div>\n                  <input type=\"text\" id=\"input1-group1\" name=\"input1-group1\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <input type=\"email\" id=\"input2-group1\" name=\"input2-group1\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-envelope-o\"></i></span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-euro\"></i></span>\n                  </div>\n                  <input type=\"text\" id=\"input3-group1\" name=\"input3-group1\" class=\"form-control\" placeholder=\"..\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">.00</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Buttons</strong> Groups\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-prepend\">\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Search</button>\n                  </span>\n                  <input type=\"text\" id=\"input1-group2\" name=\"input1-group2\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <input type=\"email\" id=\"input2-group2\" name=\"input2-group2\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\">\n                  <span class=\"input-group-append\">\n                    <button type=\"button\" class=\"btn btn-primary\">Submit</button>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-prepend\">\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-facebook\"></i></button>\n                  </span>\n                  <input type=\"text\" id=\"input3-group2\" name=\"input3-group2\" class=\"form-control\" placeholder=\"Search\">\n                  <span class=\"input-group-append\">\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-twitter\"></i></button>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Dropdowns</strong> Groups\n        </div>\n        <div class=\"card-body\">\n\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>Action\n                      <span class=\"caret\"></span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                  <input type=\"text\" id=\"input1-group3\" name=\"input1-group3\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <input type=\"email\" id=\"input2-group3\" name=\"input2-group3\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\">\n                  <div class=\"input-group-append\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>Action\n                      <span class=\"caret\"></span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary\">Action</button>\n                    <button type=\"button\" dropdownToggle class=\"btn btn-primary dropdown-toggle dropdown-toggle-split\">\n                      <span class=\"caret\"></span>\n                      <span class=\"sr-only\">Split button!</span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action prepend</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                  <input type=\"text\" id=\"input3-group3\" name=\"input3-group3\" class=\"form-control\" placeholder=\"..\">\n                  <div class=\"input-group-append\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>Action\n                      <span class=\"caret\"></span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action append</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Use the grid for big devices!\n          <small>\n            <code>.col-lg-*</code>\n            <code>.col-md-*</code>\n            <code>.col-sm-*</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-8\">\n              </div>\n              <div class=\"col-md-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-4\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-7\">\n              </div>\n              <div class=\"col-md-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-5\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-6\">\n              </div>\n              <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-6\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-5\">\n              </div>\n              <div class=\"col-md-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-7\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-4\">\n              </div>\n              <div class=\"col-md-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-8\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-danger\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-warning\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-info\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-success\">Action</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Input Grid for small devices!\n          <small>\n            <code>.col-*</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-4\">\n              </div>\n              <div class=\"col-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-8\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-5\">\n              </div>\n              <div class=\"col-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-7\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-6\">\n              </div>\n              <div class=\"col-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-6\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-5\">\n              </div>\n              <div class=\"col-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-5\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-8\">\n              </div>\n              <div class=\"col-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-4\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-danger\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-warning\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-info\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-success\">Action</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Example Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Username</span>\n                </div>\n                <input type=\"text\" id=\"username3\" name=\"username3\" class=\"form-control\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Email</span>\n                </div>\n                <input type=\"email\" id=\"email3\" name=\"email3\" class=\"form-control\" autocomplete=\"email\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Password</span>\n                </div>\n                <input type=\"password\" id=\"password3\" name=\"password3\" class=\"form-control\" autocomplete=\"current-password\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-asterisk\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group form-actions\">\n              <button type=\"submit\" class=\"btn btn-sm btn-primary\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Example Form <code>append</code>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <input type=\"text\" id=\"username2\" name=\"username2\" class=\"form-control\" placeholder=\"Username\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <input type=\"email\" id=\"email2\" name=\"email2\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-asterisk\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group form-actions\">\n              <button type=\"submit\" class=\"btn btn-sm btn-secondary\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Example Form <code>prepend</code>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                </div>\n                <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></span>\n                </div>\n                <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-asterisk\"></i></span>\n                </div>\n                <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\">\n              </div>\n            </div>\n            <div class=\"form-group form-actions\">\n              <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-edit\"></i>Form Elements\n          <div class=\"card-header-actions\">\n            <button type=\"button\" class=\"card-header-action btn btn-link btn-setting\"><i class=\"icon-settings\"></i></button>\n            <button type=\"button\" class=\"card-header-action btn btn-link btn-minimize\"(click)=\"toggleCollapse()\"><i class={{iconCollapse}}></i></button>\n            <button type=\"button\" class=\"card-header-action btn btn-link btn-close\"><i class=\"icon-close\"></i></button>\n          </div>\n        </div>\n        <div (collapsed)=\"collapsed($event)\"\n             (expanded)=\"expanded($event)\"\n             [collapse]=\"isCollapsed\"\n             class=\"card-body\">\n          <form class=\"form-horizontal\">\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"prependedInput\">Prepended text</label>\n            <div class=\"controls\">\n              <div class=\"input-prepend input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">@</span>\n                </div>\n                <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\">\n              </div>\n              <p class=\"help-block\">Here's some help text</p>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedInput\">Appended text</label>\n            <div class=\"controls\">\n              <div class=\"input-group\">\n                <input id=\"appendedInput\" class=\"form-control\" size=\"16\" type=\"text\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">.00</span>\n                </div>\n              </div>\n              <span class=\"help-block\">Here's more help text</span>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedPrependedInput\">Append and prepend</label>\n            <div class=\"controls\">\n              <div class=\"input-prepend input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">$</span>\n                </div>\n                <input id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"text\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">.00</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedInputButton\">Append with button</label>\n            <div class=\"controls\">\n              <div class=\"input-group\">\n                <input id=\"appendedInputButton\" class=\"form-control\" size=\"16\" type=\"text\">\n                <span class=\"input-group-append\">\n                  <button class=\"btn btn-secondary\" type=\"button\">Go!</button>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedInputButtons\">Two-button append</label>\n            <div class=\"controls\">\n              <div class=\"input-group\">\n                <input id=\"appendedInputButtons\" size=\"16\" class=\"form-control\" type=\"text\">\n                <span class=\"input-group-append\">\n                  <button class=\"btn btn-secondary\" type=\"button\">Search</button>\n                  <button class=\"btn btn-secondary\" type=\"button\">Options</button>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-actions\">\n            <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n            <button class=\"btn btn-secondary\" type=\"button\">Cancel</button>\n          </div>\n        </form>\n        </div>\n      </div>\n    </div> <!--/.col-->\n  </div><!--/.row-->\n</div>\n";
      /***/
    },

    /***/
    "yiC3": function yiC3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardsComponent", function () {
        return CardsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cards_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cards.component.html */
      "/zdl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CardsComponent = function CardsComponent() {
        _classCallCheck(this, CardsComponent);
      };

      CardsComponent.ctorParameters = function () {
        return [];
      };

      CardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_cards_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardsComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-base-base-module-es5.js.map