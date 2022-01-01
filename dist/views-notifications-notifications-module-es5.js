(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-notifications-notifications-module"], {
    /***/
    "/hol":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/alerts.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hol(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Bootstrap Alerts</strong>\r\n          <div class=\"card-header-actions\">\r\n            <a href=\"https://valor-software.com/ngx-bootstrap/#/alerts\" target=\"_blank\">\r\n              <small className=\"text-muted\">docs</small>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <alert type=\"success\">\r\n            <strong>Well done!</strong> You successfully read this important alert message.\r\n          </alert>\r\n          <alert type=\"info\">\r\n            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\r\n          </alert>\r\n          <alert type=\"warning\">\r\n            <strong>Warning!</strong> Better check yourself, you're not looking too good.\r\n          </alert>\r\n          <alert type=\"danger\">\r\n            <strong>Oh snap!</strong> Change a few things up and try submitting again.\r\n          </alert>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong>\r\n          <small>link</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <alert type=\"success\">\r\n            <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert message</a>.\r\n          </alert>\r\n          <alert type=\"info\">\r\n            <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\r\n          </alert>\r\n          <alert type=\"warning\">\r\n            <strong>Warning!</strong> Better check yourself, you're <a href=\"#\" class=\"alert-link\">not looking too good</a>.\r\n          </alert>\r\n          <alert type=\"danger\">\r\n            <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\r\n          </alert>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>additional content</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <alert type=\"success\">\r\n            <h4 class=\"alert-heading\">Well done!</h4>\r\n            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\r\n            <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\r\n          </alert>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>dismissing</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div *ngFor=\"let alert of alerts\">\r\n            <alert [type]=\"alert.type\" [dismissible]=\"dismissible\">{{ alert.msg }}</alert>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"dismissible = !dismissible\">Toggle dismissible</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>dynamic html</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div *ngFor=\"let alert of alertsHtml\">\r\n            <alert [type]=\"alert.type\"><span [innerHtml]=\"alert.msg\"></span></alert>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>dynamic content</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <alert type=\"success\">{{messages[index]}}</alert>\r\n\r\n          <div *ngIf=\"index !== messages.length -1; else elseBlock\">\r\n            <button class=\"btn btn-primary\" (click)=\"changeText()\">Change text</button>\r\n          </div>\r\n          <ng-template #elseBlock>\r\n            <button class=\"btn btn-primary\" (click)=\"index = 0\">Reset</button>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>dismiss on timeout</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <alert type=\"success\" dismissOnTimeout=\"5000\">\r\n            <strong>Well done!</strong> You successfully read this important alert message.\r\n          </alert>\r\n\r\n          <p>If you missed alert on top of me, just press <code>Add more</code> button</p>\r\n          <div *ngFor=\"let alert of alertsDismiss\">\r\n            <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\">{{ alert.msg }}</alert>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">Add more</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>global styling</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <style>\r\n            .alert-md-color {\r\n              background-color: #7B1FA2;\r\n              border-color: #4A148C;\r\n              color: #fff;\r\n            }\r\n          </style>\r\n          <alert type=\"md-color\">\r\n            <strong>Well done!</strong> You successfully read this important alert message.\r\n          </alert>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>component level styling</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <alert type=\"md-local\">\r\n            <strong>Well done!</strong> You successfully read this important alert message.\r\n          </alert>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>configuring defaults</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <alert>\r\n            <strong>Well done!</strong> You successfully read this important alert message.\r\n          </alert>\r\n          <alert type=\"info\">\r\n            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\r\n          </alert>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "C8n3":
    /*!*********************************************************!*\
      !*** ./src/app/views/notifications/modals.component.ts ***!
      \*********************************************************/

    /*! exports provided: ModalsComponent */

    /***/
    function C8n3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalsComponent", function () {
        return ModalsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modals_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modals.component.html */
      "EPky");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");

      var ModalsComponent = /*#__PURE__*/_createClass(function ModalsComponent() {
        _classCallCheck(this, ModalsComponent);
      });

      ModalsComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['myModal']
        }],
        largeModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['largeModal']
        }],
        smallModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['smallModal']
        }],
        primaryModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['primaryModal']
        }],
        successModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['successModal']
        }],
        warningModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['warningModal']
        }],
        dangerModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['dangerModal']
        }],
        infoModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['infoModal']
        }]
      };
      ModalsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_modals_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ModalsComponent);
      /***/
    },

    /***/
    "CNMR":
    /*!**************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js ***!
      \**************************************************************************/

    /*! exports provided: AlertComponent, AlertConfig, AlertModule */

    /***/
    function CNMR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return AlertComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertConfig", function () {
        return AlertConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
        return AlertModule;
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


      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/utils */
      "hpHm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      function AlertComponent_ng_template_0_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertComponent_ng_template_0_ng_template_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r2.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AlertComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertComponent_ng_template_0_ng_template_1_Template, 5, 0, "ng-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("alert alert-" + ctx_r0.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.classes);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.dismissible);
        }
      }

      var _c0 = ["*"];

      var AlertConfig = /*#__PURE__*/_createClass(function AlertConfig() {
        _classCallCheck(this, AlertConfig);

        /**
         * default alert type
         */
        this.type = 'warning';
        /**
         * is alerts are dismissible by default
         */

        this.dismissible = false;
        /**
         * default time before alert will dismiss
         */

        this.dismissOnTimeout = undefined;
      });

      AlertConfig.ɵfac = function AlertConfig_Factory(t) {
        return new (t || AlertConfig)();
      };
      /** @nocollapse */


      AlertConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function AlertConfig_Factory() {
          return new AlertConfig();
        },
        token: AlertConfig,
        providedIn: "root"
      });

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AlertComponent = /*#__PURE__*/function () {
        /**
         * @param {?} _config
         * @param {?} changeDetection
         */
        function AlertComponent(_config, changeDetection) {
          var _this = this;

          _classCallCheck(this, AlertComponent);

          this.changeDetection = changeDetection;
          /**
           * Alert type.
           * Provides one of four bootstrap supported contextual classes:
           * `success`, `info`, `warning` and `danger`
           */

          this.type = 'warning';
          /**
           * If set, displays an inline "Close" button
           */

          this.dismissible = false;
          /**
           * Is alert visible
           */

          this.isOpen = true;
          /**
           * This event fires immediately after close instance method is called,
           * $event is an instance of Alert component.
           */

          this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event fires when alert closed, $event is an instance of Alert component
           */

          this.onClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.classes = '';
          this.dismissibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          Object.assign(this, _config);
          this.dismissibleChange.subscribe(
          /**
          * @param {?} dismissible
          * @return {?}
          */
          function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';

            _this.changeDetection.markForCheck();
          });
        }
        /**
         * @return {?}
         */


        _createClass(AlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            if (this.dismissOnTimeout) {
              // if dismissOnTimeout used as attr without binding, it will be a string
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                return _this2.close();
              }, parseInt(
              /** @type {?} */
              this.dismissOnTimeout, 10));
            }
          } // todo: animation ` If the .fade and .in classes are present on the element,
          // the alert will fade out before it is removed`

          /**
           * Closes an alert by removing it from the DOM.
           * @return {?}
           */

        }, {
          key: "close",
          value: function close() {
            if (!this.isOpen) {
              return;
            }

            this.onClose.emit(this);
            this.isOpen = false;
            this.changeDetection.markForCheck();
            this.onClosed.emit(this);
          }
        }]);

        return AlertComponent;
      }();

      AlertComponent.ɵfac = function AlertComponent_Factory(t) {
        return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AlertConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AlertComponent,
        selectors: [["alert"], ["bs-alert"]],
        inputs: {
          type: "type",
          dismissible: "dismissible",
          isOpen: "isOpen",
          dismissOnTimeout: "dismissOnTimeout"
        },
        outputs: {
          onClose: "onClose",
          onClosed: "onClosed"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 1,
        consts: [[3, "ngIf"], ["role", "alert", 3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"]],
        template: function AlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AlertComponent_ng_template_0_Template, 3, 4, "ng-template", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      AlertComponent.ctorParameters = function () {
        return [{
          type: AlertConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      AlertComponent.propDecorators = {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dismissible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dismissOnTimeout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onClosed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["OnChange"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AlertComponent.prototype, "dismissible", void 0);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'alert,bs-alert',
            template: "<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: AlertConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          dismissible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dismissOnTimeout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AlertModule = /*#__PURE__*/function () {
        function AlertModule() {
          _classCallCheck(this, AlertModule);
        }

        _createClass(AlertModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: AlertModule,
              providers: []
            };
          }
        }]);

        return AlertModule;
      }();

      AlertModule.ɵfac = function AlertModule_Factory(t) {
        return new (t || AlertModule)();
      };

      AlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AlertModule
      });
      AlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AlertModule, {
          declarations: function declarations() {
            return [AlertComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
          },
          exports: function exports() {
            return [AlertComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            declarations: [AlertComponent],
            exports: [AlertComponent],
            entryComponents: [AlertComponent]
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
      //# sourceMappingURL=ngx-bootstrap-alert.js.map

      /***/

    },

    /***/
    "EPky":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/modals.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EPky(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Modals\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <!-- Button trigger modal -->\r\n          <button type=\"button\" class=\"btn btn-secondary mr-1\" data-toggle=\"modal\" (click)=\"myModal.show()\">\r\n            Launch demo modal\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-secondary mr-1\" data-toggle=\"modal\" (click)=\"largeModal.show()\">\r\n            Launch large modal\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-secondary mr-1\" data-toggle=\"modal\" (click)=\"smallModal.show()\">\r\n            Launch small modal\r\n          </button>\r\n          <hr>\r\n          <button type=\"button\" class=\"btn btn-primary mr-1\" data-toggle=\"modal\" (click)=\"primaryModal.show()\">\r\n            Primary modal\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-success mr-1\" data-toggle=\"modal\" (click)=\"successModal.show()\">\r\n            Success modal\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-warning mr-1\" data-toggle=\"modal\" (click)=\"warningModal.show()\">\r\n            Warning modal\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-danger mr-1\" data-toggle=\"modal\" (click)=\"dangerModal.show()\">\r\n            Danger modal\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-info mr-1\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\r\n            Info modal\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n</div>\r\n\r\n<div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div bsModal #smallModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"smallModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"smallModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n\r\n<div bsModal #primaryModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"primaryModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"primaryModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-success\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"successModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"successModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-success\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n\r\n<div bsModal #warningModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-warning\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"warningModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"warningModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-warning\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div bsModal #dangerModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-danger\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"dangerModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dangerModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-danger\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-info\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"infoModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-info\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n";
      /***/
    },

    /***/
    "KpDv":
    /*!*************************************************************!*\
      !*** ./src/app/views/notifications/notifications.module.ts ***!
      \*************************************************************/

    /*! exports provided: NotificationsModule */

    /***/
    function KpDv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsModule", function () {
        return NotificationsModule;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/alert */
      "CNMR");
      /* harmony import */


      var _alerts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alerts.component */
      "Ptrc");
      /* harmony import */


      var _badges_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./badges.component */
      "yqOW");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _modals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modals.component */
      "C8n3");
      /* harmony import */


      var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./notifications-routing.module */
      "jSGo"); // Angular
      // Alert Component
      // Modal Component
      // Notifications Routing


      var NotificationsModule = /*#__PURE__*/_createClass(function NotificationsModule() {
        _classCallCheck(this, NotificationsModule);
      });

      NotificationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_8__["NotificationsRoutingModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot()],
        declarations: [_alerts_component__WEBPACK_IMPORTED_MODULE_4__["AlertsComponent"], _badges_component__WEBPACK_IMPORTED_MODULE_5__["BadgesComponent"], _modals_component__WEBPACK_IMPORTED_MODULE_7__["ModalsComponent"]]
      })], NotificationsModule);
      /***/
    },

    /***/
    "Ptrc":
    /*!*********************************************************!*\
      !*** ./src/app/views/notifications/alerts.component.ts ***!
      \*********************************************************/

    /*! exports provided: getAlertConfig, AlertsComponent */

    /***/
    function Ptrc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAlertConfig", function () {
        return getAlertConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertsComponent", function () {
        return AlertsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_alerts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./alerts.component.html */
      "/hol");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/alert */
      "CNMR"); // such override allows to keep some initial values


      function getAlertConfig() {
        return Object.assign(new ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_4__["AlertConfig"](), {
          type: 'success'
        });
      }

      var AlertsComponent = /*#__PURE__*/function () {
        function AlertsComponent(sanitizer) {
          _classCallCheck(this, AlertsComponent);

          this.dismissible = true;
          this.alerts = [{
            type: 'success',
            msg: "You successfully read this important alert message."
          }, {
            type: 'info',
            msg: "This alert needs your attention, but it's not super important."
          }, {
            type: 'danger',
            msg: "Better check yourself, you're not looking too good."
          }];
          this.alertsHtml = [{
            type: 'success',
            msg: "<strong>Well done!</strong> You successfully read this important alert message."
          }, {
            type: 'info',
            msg: "<strong>Heads up!</strong> This alert needs your attention, but it's not super important."
          }, {
            type: 'danger',
            msg: "<strong>Warning!</strong> Better check yourself, you're not looking too good."
          }];
          this.index = 0;
          this.messages = ['You successfully read this important alert message.', 'Now this text is different from what it was before. Go ahead and click the button one more time', 'Well done! Click reset button and you\'ll see the first message'];
          this.alertsDismiss = [];
          this.alertsHtml = this.alertsHtml.map(function (alert) {
            return {
              type: alert.type,
              msg: sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, alert.msg)
            };
          });
        }

        _createClass(AlertsComponent, [{
          key: "reset",
          value: function reset() {
            this.alerts = this.alerts.map(function (alert) {
              return Object.assign({}, alert);
            });
          }
        }, {
          key: "changeText",
          value: function changeText() {
            if (this.messages.length - 1 !== this.index) {
              this.index++;
            }
          }
        }, {
          key: "add",
          value: function add() {
            this.alertsDismiss.push({
              type: 'info',
              msg: "This alert will be closed in 5 seconds (added: ".concat(new Date().toLocaleTimeString(), ")"),
              timeout: 5000
            });
          }
        }]);

        return AlertsComponent;
      }();

      AlertsComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }];
      };

      AlertsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_alerts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        providers: [{
          provide: ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_4__["AlertConfig"],
          useFactory: getAlertConfig
        }],
        styles: ["\n  .alert-md-local {\n    background-color: #009688;\n    border-color: #00695C;\n    color: #fff;\n  }\n  "]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])], AlertsComponent);
      /***/
    },

    /***/
    "jSGo":
    /*!*********************************************************************!*\
      !*** ./src/app/views/notifications/notifications-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: NotificationsRoutingModule */

    /***/
    function jSGo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function () {
        return NotificationsRoutingModule;
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


      var _alerts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./alerts.component */
      "Ptrc");
      /* harmony import */


      var _badges_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./badges.component */
      "yqOW");
      /* harmony import */


      var _modals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modals.component */
      "C8n3");

      var routes = [{
        path: '',
        data: {
          title: 'Notifications'
        },
        children: [{
          path: '',
          redirectTo: 'alerts'
        }, {
          path: 'alerts',
          component: _alerts_component__WEBPACK_IMPORTED_MODULE_3__["AlertsComponent"],
          data: {
            title: 'Alerts'
          }
        }, {
          path: 'badges',
          component: _badges_component__WEBPACK_IMPORTED_MODULE_4__["BadgesComponent"],
          data: {
            title: 'Badges'
          }
        }, {
          path: 'modals',
          component: _modals_component__WEBPACK_IMPORTED_MODULE_5__["ModalsComponent"],
          data: {
            title: 'Modals'
          }
        }]
      }];

      var NotificationsRoutingModule = /*#__PURE__*/_createClass(function NotificationsRoutingModule() {
        _classCallCheck(this, NotificationsRoutingModule);
      });

      NotificationsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotificationsRoutingModule);
      /***/
    },

    /***/
    "prUS":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/badges.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function prUS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\r\n          <div class=\"card-header-actions\">\r\n            <a href=\"http://coreui.io/docs/components/bootstrap-badge/\" class=\"card-header-action\" target=\"_blank\">\r\n              <small class=\"text-muted\">docs</small>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h1>Example heading\r\n            <span class=\"badge badge-secondary\">New</span>\r\n          </h1>\r\n          <h2>Example heading\r\n            <span class=\"badge badge-secondary\">New</span>\r\n          </h2>\r\n          <h3>Example heading\r\n            <span class=\"badge badge-secondary\">New</span>\r\n          </h3>\r\n          <h4>Example heading\r\n            <span class=\"badge badge-secondary\">New</span>\r\n          </h4>\r\n          <h5>Example heading\r\n            <span class=\"badge badge-secondary\">New</span>\r\n          </h5>\r\n          <h6>Example heading\r\n            <span class=\"badge badge-secondary\">New</span>\r\n          </h6>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button type=\"link\" class=\"btn btn-primary\">Notifications\r\n            <span class=\"badge badge-light badge-pill\" style=\"position: static;\">9</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\r\n          <small>contextual variations</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <span class=\"badge badge-primary\">Primary</span>\r\n          <span class=\"badge badge-secondary\">Secondary</span>\r\n          <span class=\"badge badge-success\">Success</span>\r\n          <span class=\"badge badge-danger\">Danger</span>\r\n          <span class=\"badge badge-warning\">Warning</span>\r\n          <span class=\"badge badge-info\">Info</span>\r\n          <span class=\"badge badge-light\">Light</span>\r\n          <span class=\"badge badge-dark\">Dark</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\r\n          <small>pill badges</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <span class=\"badge badge-pill badge-primary\">Primary</span>\r\n          <span class=\"badge badge-pill badge-secondary\">Secondary</span>\r\n          <span class=\"badge badge-pill badge-success\">Success</span>\r\n          <span class=\"badge badge-pill badge-danger\">Danger</span>\r\n          <span class=\"badge badge-pill badge-warning\">Warning</span>\r\n          <span class=\"badge badge-pill badge-info\">Info</span>\r\n          <span class=\"badge badge-pill badge-light\">Light</span>\r\n          <span class=\"badge badge-pill badge-dark\">Dark</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\r\n          <small>links</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <a href=\"#\" class=\"badge badge-primary\">Primary</a>\r\n          <a href=\"#\" class=\"badge badge-secondary\">Secondary</a>\r\n          <a href=\"#\" class=\"badge badge-success\">Success</a>\r\n          <a href=\"#\" class=\"badge badge-danger\">Danger</a>\r\n          <a href=\"#\" class=\"badge badge-warning\">Warning</a>\r\n          <a href=\"#\" class=\"badge badge-info\">Info</a>\r\n          <a href=\"#\" class=\"badge badge-light\">Light</a>\r\n          <a href=\"#\" class=\"badge badge-dark\">Dark</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/.row-->\r\n</div>\r\n";
      /***/
    },

    /***/
    "yqOW":
    /*!*********************************************************!*\
      !*** ./src/app/views/notifications/badges.component.ts ***!
      \*********************************************************/

    /*! exports provided: BadgesComponent */

    /***/
    function yqOW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BadgesComponent", function () {
        return BadgesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_badges_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./badges.component.html */
      "prUS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var BadgesComponent = /*#__PURE__*/_createClass(function BadgesComponent() {
        _classCallCheck(this, BadgesComponent);
      });

      BadgesComponent.ctorParameters = function () {
        return [];
      };

      BadgesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_badges_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BadgesComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-notifications-notifications-module-es5.js.map