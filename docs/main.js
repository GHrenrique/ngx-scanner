"use strict";
(self["webpackChunkzxing_scanner_demo"] = self["webpackChunkzxing_scanner_demo"] || []).push([["main"],{

/***/ 4532:
/*!******************************************************************************************!*\
  !*** ./projects/zxing-scanner-demo/src/app/app-info-dialog/app-info-dialog.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInfoDialogComponent": () => (/* binding */ AppInfoDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-button */ 8376);
/* harmony import */ var _app_info_app_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-info/app-info.component */ 8448);





class AppInfoDialogComponent {
  constructor(data) {
    this.data = data;
    this.hasDevices = data.hasDevices;
    this.hasPermission = data.hasPermission;
  }
  static #_ = this.ɵfac = function AppInfoDialogComponent_Factory(t) {
    return new (t || AppInfoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_LEGACY_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppInfoDialogComponent,
    selectors: [["app-info-dialog"]],
    decls: 4,
    vars: 2,
    consts: [[3, "hasDevices", "hasPermission"], ["mat-flat-button", "", "color", "primary", "mat-dialog-close", ""]],
    template: function AppInfoDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-info", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-dialog-actions")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hasDevices", ctx.hasDevices)("hasPermission", ctx.hasPermission);
      }
    },
    dependencies: [_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MatLegacyDialogClose, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MatLegacyDialogActions, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__.MatLegacyButton, _app_info_app_info_component__WEBPACK_IMPORTED_MODULE_0__.AppInfoComponent],
    encapsulation: 2,
    changeDetection: 0
  });
}


/***/ }),

/***/ 8448:
/*!****************************************************************************!*\
  !*** ./projects/zxing-scanner-demo/src/app/app-info/app-info.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInfoComponent": () => (/* binding */ AppInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 443);



class AppInfoComponent {
  constructor() {
    this.ngVersion = _angular_core__WEBPACK_IMPORTED_MODULE_0__.VERSION.full;
  }
  stateToEmoji(state) {
    const states = {
      // not checked
      undefined: '❔',
      // failed to check
      null: '⭕',
      // success
      true: '✔',
      // can't touch that
      false: '❌'
    };
    return states['' + state];
  }
  static #_ = this.ɵfac = function AppInfoComponent_Factory(t) {
    return new (t || AppInfoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppInfoComponent,
    selectors: [["app-info"]],
    inputs: {
      hasDevices: "hasDevices",
      hasPermission: "hasPermission"
    },
    decls: 22,
    vars: 3,
    consts: [[1, "table-scanner-state"], ["matLine", "", 1, "ng-version"]],
    template: function AppInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody")(8, "tr")(9, "td")(10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr")(15, "td")(16, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stateToEmoji(ctx.hasDevices));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stateToEmoji(ctx.hasPermission));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Angular version: ", ctx.ngVersion, "");
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatLine],
    styles: [".table-scanner-state[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.ng-version[_ngcontent-%COMP%] {\n  color: #ff6687;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3p4aW5nLXNjYW5uZXItZGVtby9zcmMvYXBwL2FwcC1pbmZvL2FwcC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtBQUFKOztBQUlBO0VBQ0UsY0FBQTtBQURGIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXNjYW5uZXItc3RhdGUge1xyXG4gIHRoZWFkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ubmctdmVyc2lvbiB7XHJcbiAgY29sb3I6ICNmZjY2ODc7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}


/***/ }),

/***/ 5286:
/*!**************************************************************!*\
  !*** ./projects/zxing-scanner-demo/src/app/app-ui.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppUiModule": () => (/* binding */ AppUiModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-button */ 8376);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8499);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 7189);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-input */ 894);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-list */ 974);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-menu */ 6291);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-select */ 3115);
/* harmony import */ var _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-tooltip */ 9826);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 3761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 6839);













const UI_MODULES = [
// Angular
_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
// Material
_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_3__.MatLegacyDialogModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_4__.MatLegacyListModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatLegacyTooltipModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButtonModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyFormFieldModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_8__.MatLegacySelectModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_9__.MatLegacyInputModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_10__.MatLegacyMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
// Local
_public_api__WEBPACK_IMPORTED_MODULE_0__.ZXingScannerModule];
class AppUiModule {
  static #_ = this.ɵfac = function AppUiModule_Factory(t) {
    return new (t || AppUiModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: AppUiModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [
    // Angular
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
    // Material
    _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_3__.MatLegacyDialogModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_4__.MatLegacyListModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatLegacyTooltipModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButtonModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyFormFieldModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_8__.MatLegacySelectModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_9__.MatLegacyInputModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_10__.MatLegacyMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
    // Local
    _public_api__WEBPACK_IMPORTED_MODULE_0__.ZXingScannerModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppUiModule, {
    exports: [
    // Angular
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
    // Material
    _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_3__.MatLegacyDialogModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_4__.MatLegacyListModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatLegacyTooltipModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButtonModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyFormFieldModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_8__.MatLegacySelectModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_9__.MatLegacyInputModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_10__.MatLegacyMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
    // Local
    _public_api__WEBPACK_IMPORTED_MODULE_0__.ZXingScannerModule]
  });
})();

/***/ }),

/***/ 1498:
/*!**************************************************************!*\
  !*** ./projects/zxing-scanner-demo/src/app/app.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ 796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _formats_dialog_formats_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats-dialog/formats-dialog.component */ 8965);
/* harmony import */ var _app_info_dialog_app_info_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-info-dialog/app-info-dialog.component */ 4532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8499);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-list */ 974);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 445);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-button */ 8376);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 7189);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-select */ 3115);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-core */ 6391);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-menu */ 6291);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _zxing_scanner_src_lib_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../zxing-scanner/src/lib/zxing-scanner.component */ 5653);
















function AppComponent_mat_list_option_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_mat_list_option_6_Template_mat_list_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.toggleTorch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Enable Torch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", ctx_r1.torchEnabled);
  }
}
function AppComponent_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const device_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", device_r10.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](device_r10.label);
  }
}
function AppComponent_section_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 14)(1, "div")(2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "teste");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_section_23_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.clearResult());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.qrResultString);
  }
}
function AppComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Waiting for permissions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " If your device does not has cameras, no permissions will be asked. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function AppComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "You denied the camera permission, we can't scan anything without it. \uD83D\uDE2A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function AppComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Couldn't check for devices.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " This may be caused by some security error. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function AppComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No devices were found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " I believe your device has no media devices attached to. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
class AppComponent {
  constructor(_dialog) {
    this._dialog = _dialog;
    this.formatsEnabled = [_zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.CODE_128, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.DATA_MATRIX, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.EAN_13, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.QR_CODE];
    this.torchEnabled = false;
    this.torchAvailable$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.tryHarder = false;
  }
  clearResult() {
    this.qrResultString = null;
  }
  onCamerasFound(devices) {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }
  onCodeResult(resultString) {
    this.qrResultString = resultString;
  }
  onDeviceSelectChange(selected) {
    const selectedStr = selected || '';
    if (this.deviceSelected === selectedStr) {
      return;
    }
    this.deviceSelected = selectedStr;
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.deviceCurrent = device || undefined;
  }
  onDeviceChange(device) {
    const selectedStr = device?.deviceId || '';
    if (this.deviceSelected === selectedStr) {
      return;
    }
    this.deviceSelected = selectedStr;
    this.deviceCurrent = device || undefined;
  }
  openFormatsDialog() {
    const data = {
      formatsEnabled: this.formatsEnabled
    };
    this._dialog.open(_formats_dialog_formats_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormatsDialogComponent, {
      data
    }).afterClosed().subscribe(x => {
      if (x) {
        this.formatsEnabled = x;
      }
    });
  }
  onHasPermission(has) {
    this.hasPermission = has;
  }
  openInfoDialog() {
    const data = {
      hasDevices: this.hasDevices,
      hasPermission: this.hasPermission
    };
    this._dialog.open(_app_info_dialog_app_info_dialog_component__WEBPACK_IMPORTED_MODULE_2__.AppInfoDialogComponent, {
      data
    });
  }
  onTorchCompatible(isCompatible) {
    this.torchAvailable$.next(isCompatible || false);
  }
  toggleTorch() {
    this.torchEnabled = !this.torchEnabled;
  }
  toggleTryHarder() {
    this.tryHarder = !this.tryHarder;
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_6__.MatLegacyDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 28,
    vars: 17,
    consts: [[1, "scanner-shell", 3, "hidden"], ["appMenu", "matMenu"], ["checkboxPosition", "start", 3, "selected", "click"], ["checkboxPosition", "start", 3, "selected", "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["appearance", "fill"], [3, "value", "valueChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [3, "torch", "device", "formats", "tryHarder", "deviceChange", "scanSuccess", "permissionResponse", "camerasFound", "torchCompatible"], ["class", "results", 4, "ngIf"], [4, "ngIf"], [3, "value"], [1, "results"], ["mat-icon-button", "", 3, "click"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-menu", null, 1)(3, "mat-selection-list")(4, "mat-list-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_option_click_4_listener() {
          return ctx.toggleTryHarder();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Enable Try-harder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AppComponent_mat_list_option_6_Template, 2, 1, "mat-list-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() {
          return ctx.openFormatsDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Barcode formats");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() {
          return ctx.openInfoDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "App info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "header")(14, "mat-form-field", 5)(15, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function AppComponent_Template_mat_select_valueChange_15_listener($event) {
          return ctx.onDeviceSelectChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "No Device Selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, AppComponent_mat_option_18_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 9)(20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "zxing-scanner", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("deviceChange", function AppComponent_Template_zxing_scanner_deviceChange_22_listener($event) {
          return ctx.onDeviceChange($event);
        })("scanSuccess", function AppComponent_Template_zxing_scanner_scanSuccess_22_listener($event) {
          return ctx.onCodeResult($event);
        })("permissionResponse", function AppComponent_Template_zxing_scanner_permissionResponse_22_listener($event) {
          return ctx.onHasPermission($event);
        })("camerasFound", function AppComponent_Template_zxing_scanner_camerasFound_22_listener($event) {
          return ctx.onCamerasFound($event);
        })("torchCompatible", function AppComponent_Template_zxing_scanner_torchCompatible_22_listener($event) {
          return ctx.onTorchCompatible($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, AppComponent_section_23_Template, 8, 1, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, AppComponent_ng_container_24_Template, 5, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, AppComponent_ng_container_25_Template, 3, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AppComponent_ng_container_26_Template, 5, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, AppComponent_ng_container_27_Template, 5, 0, "ng-container", 12);
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx.hasDevices);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", ctx.tryHarder);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 15, ctx.torchAvailable$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.deviceSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.availableDevices);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("torch", ctx.torchEnabled)("device", ctx.deviceCurrent)("formats", ctx.formatsEnabled)("tryHarder", ctx.tryHarder);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.qrResultString);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasPermission === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasPermission === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasDevices === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasDevices === false);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_8__.MatLegacySelectionList, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_8__.MatLegacyListOption, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_10__.MatLegacyButton, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLegacyFormField, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_12__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_13__.MatLegacyOption, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_14__.MatLegacyMenu, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_14__.MatLegacyMenuItem, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_14__.MatLegacyMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _zxing_scanner_src_lib_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_3__.ZXingScannerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["zxing-scanner[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  padding: 10px;\n  background: #333;\n  display: flex;\n}\nheader[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: bold;\n}\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding: 0;\n}\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex {\n  padding-top: 0;\n}\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-underline {\n  bottom: 0;\n}\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 10px;\n  line-height: 2;\n  background: #474747;\n  color: #fff;\n}\n\n.results[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 0;\n  padding: 15px;\n  background: #02c3c3;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.results[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  display: block;\n  font-size: 60%;\n  margin: -0.6em 0 0 0;\n}\n.results[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  line-height: 1;\n  font-weight: bolder;\n  font-size: 120%;\n  float: right;\n  color: #fff;\n  margin: -8px -8px -8px 8px;\n}\n\nh2[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3p4aW5nLXNjYW5uZXItZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUVFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFBRjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSjtBQUdFO0VBRUUsV0FBQTtFQUNBLGlCQUFBO0FBRko7QUFLTTtFQUVFLFVBQUE7QUFKUjtBQU1RO0VBQ0UsY0FBQTtBQUpWO0FBT007RUFDRSxTQUFBO0FBTFI7QUFTSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBUE47O0FBWUE7RUFFRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFYRjtBQWFFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBWEo7QUFjRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLDBCQUFBO0FBYko7O0FBaUJBO0VBQ0UsZUFBQTtBQWRGIiwic291cmNlc0NvbnRlbnQiOlsienhpbmctc2Nhbm5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG5cclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG5cclxuICBtYXQtZm9ybS1maWVsZCB7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICA6Om5nLWRlZXAge1xyXG4gICAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcHRpb24ge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgICAgYmFja2dyb3VuZDogIzQ3NDc0NztcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmVzdWx0cyB7XHJcblxyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogIzAyYzNjMztcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgc21hbGwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiA2MCU7XHJcbiAgICBtYXJnaW46IC0uNmVtIDAgMCAwO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgICRtZzogOHB4O1xyXG4gICAgbWFyZ2luOiAoLSRtZykgKC0kbWcpICgtJG1nKSAkbWc7XHJcbiAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 8890:
/*!***********************************************************!*\
  !*** ./projects/zxing-scanner-demo/src/app/app.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ 4413);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 4170);
/* harmony import */ var _app_info_dialog_app_info_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-info-dialog/app-info-dialog.component */ 4532);
/* harmony import */ var _app_info_app_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-info/app-info.component */ 8448);
/* harmony import */ var _app_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-ui.module */ 5286);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 1498);
/* harmony import */ var _formats_dialog_formats_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formats-dialog/formats-dialog.component */ 8965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);










class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [
    // Angular
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
    }),
    // Local
    _app_ui_module__WEBPACK_IMPORTED_MODULE_3__.AppUiModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _formats_dialog_formats_dialog_component__WEBPACK_IMPORTED_MODULE_5__.FormatsDialogComponent, _app_info_app_info_component__WEBPACK_IMPORTED_MODULE_2__.AppInfoComponent, _app_info_dialog_app_info_dialog_component__WEBPACK_IMPORTED_MODULE_1__.AppInfoDialogComponent],
    imports: [
    // Angular
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerModule,
    // Local
    _app_ui_module__WEBPACK_IMPORTED_MODULE_3__.AppUiModule]
  });
})();

/***/ }),

/***/ 6230:
/*!****************************************************************!*\
  !*** ./projects/zxing-scanner-demo/src/app/barcode-formats.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatNames": () => (/* binding */ formatNames),
/* harmony export */   "formatsAvailable": () => (/* binding */ formatsAvailable)
/* harmony export */ });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ 796);

const formatsAvailable = [_zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.AZTEC, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.CODE_39, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.CODE_128, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.DATA_MATRIX, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.EAN_13, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.EAN_8, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.ITF, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.QR_CODE, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.PDF_417, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.RSS_14];
const formatNames = ['Aztec 2D barcode format.', 'CODABAR 1D format.', 'Code 39 1D format.', 'Code 93 1D format.', 'Code 128 1D format.', 'Data Matrix 2D barcode format.', 'EAN-8 1D format.', 'EAN-13 1D format.', 'ITF (Interleaved Two of Five) 1D format.', 'MaxiCode 2D barcode format.', 'PDF417 format.', 'QR Code 2D barcode format.', 'RSS 14', 'RSS EXPANDED', 'UPC-A 1D format.', 'UPC-E 1D format.', 'UPC/EAN extension format. Not a stand-alone format.'];

/***/ }),

/***/ 8965:
/*!****************************************************************************************!*\
  !*** ./projects/zxing-scanner-demo/src/app/formats-dialog/formats-dialog.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatsDialogComponent": () => (/* binding */ FormatsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8499);
/* harmony import */ var _barcode_formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../barcode-formats */ 6230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-list */ 974);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-button */ 8376);







function FormatsDialogComponent_mat_list_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const format_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx_r1.isEnabled(format_r2))("value", format_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.formatNames[format_r2], " ");
  }
}
class FormatsDialogComponent {
  constructor(data, _dialogRef) {
    this.data = data;
    this._dialogRef = _dialogRef;
    this.formatsAvailable = _barcode_formats__WEBPACK_IMPORTED_MODULE_0__.formatsAvailable;
    this.formatNames = _barcode_formats__WEBPACK_IMPORTED_MODULE_0__.formatNames;
    this.formatsEnabled = data.formatsEnabled || [];
  }
  close() {
    this._dialogRef.close(this.formatsEnabled);
  }
  isEnabled(format) {
    return this.formatsEnabled.find(x => x === format);
  }
  onSelectionChange(event) {
    this.formatsEnabled = event.source.selectedOptions.selected.map(selected => selected.value);
  }
  static #_ = this.ɵfac = function FormatsDialogComponent_Factory(t) {
    return new (t || FormatsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_LEGACY_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MatLegacyDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FormatsDialogComponent,
    selectors: [["app-formats-dialog"]],
    decls: 8,
    vars: 1,
    consts: [[3, "selectionChange"], ["selectedFormats", ""], ["checkboxPosition", "start", 3, "selected", "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["checkboxPosition", "start", 3, "selected", "value"]],
    template: function FormatsDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Available formats:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-selection-list", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function FormatsDialogComponent_Template_mat_selection_list_selectionChange_2_listener($event) {
          return ctx.onSelectionChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FormatsDialogComponent_mat_list_option_4_Template, 2, 3, "mat-list-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-dialog-actions")(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormatsDialogComponent_Template_button_click_6_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.formatsAvailable);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MatLegacyDialogActions, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_4__.MatLegacySelectionList, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_4__.MatLegacyListOption, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__.MatLegacyButton],
    styles: ["mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3p4aW5nLXNjYW5uZXItZGVtby9zcmMvYXBwL2Zvcm1hdHMtZGlhbG9nL2Zvcm1hdHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 3761:
/*!***********************************************************!*\
  !*** ./projects/zxing-scanner-demo/src/app/public_api.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZXingScannerComponent": () => (/* reexport safe */ _zxing_scanner_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ZXingScannerComponent),
/* harmony export */   "ZXingScannerModule": () => (/* reexport safe */ _zxing_scanner_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ZXingScannerModule)
/* harmony export */ });
/* harmony import */ var _zxing_scanner_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../zxing-scanner/src/public_api */ 9052);
/*
 * Public API Surface of zxing-scanner
 */


/***/ }),

/***/ 4170:
/*!*********************************************************************!*\
  !*** ./projects/zxing-scanner-demo/src/environments/environment.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 3492:
/*!*************************************************!*\
  !*** ./projects/zxing-scanner-demo/src/main.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8890);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4170);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 9609:
/*!**********************************************************************************!*\
  !*** ./projects/zxing-scanner/src/lib/browser-multi-format-continuous-reader.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserMultiFormatContinuousReader": () => (/* binding */ BrowserMultiFormatContinuousReader)
/* harmony export */ });
/* harmony import */ var D_zerodoze_tech_ngx_scanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zxing/library */ 796);
/* harmony import */ var _zxing_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zxing/browser */ 749);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);




/**
 * Based on zxing-typescript BrowserCodeReader
 */
class BrowserMultiFormatContinuousReader extends _zxing_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserMultiFormatReader {
  /**
   * Returns the code reader scanner controls.
   */
  getScannerControls() {
    if (!this.scannerControls) {
      throw new Error('No scanning is running at the time.');
    }
    return this.scannerControls;
  }
  /**
   * Starts the decoding from the current or a new video element.
   *
   * @param deviceId The device's to be used Id
   * @param previewEl A new video element
   */
  scanFromDeviceObservable(deviceId, previewEl) {
    var _this = this;
    return (0,D_zerodoze_tech_ngx_scanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const scan$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({});
      let ctrls;
      try {
        ctrls = yield _this.decodeFromVideoDevice(deviceId, previewEl, (result, error) => {
          if (!error) {
            scan$.next({
              result
            });
            return;
          }
          const errorName = error.name;
          // stream cannot stop on fails.
          if (
          // scan Failure - found nothing, no error
          errorName === _zxing_library__WEBPACK_IMPORTED_MODULE_1__.NotFoundException.name ||
          // scan Error - found the QR but got error on decoding
          errorName === _zxing_library__WEBPACK_IMPORTED_MODULE_1__.ChecksumException.name || errorName === _zxing_library__WEBPACK_IMPORTED_MODULE_1__.FormatException.name || error.message.includes('No MultiFormat Readers were able to detect the code.')) {
            scan$.next({
              error
            });
            return;
          }
          // probably fatal error
          scan$.error(error);
          _this.scannerControls.stop();
          _this.scannerControls = undefined;
          return;
        });
        _this.scannerControls = {
          ...ctrls,
          stop() {
            ctrls.stop();
            scan$.complete();
          }
        };
      } catch (e) {
        scan$.error(e);
        _this.scannerControls?.stop();
        _this.scannerControls = undefined;
      }
      return scan$.asObservable();
    })();
  }
}

/***/ }),

/***/ 5653:
/*!*******************************************************************!*\
  !*** ./projects/zxing-scanner/src/lib/zxing-scanner.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZXingScannerComponent": () => (/* binding */ ZXingScannerComponent)
/* harmony export */ });
/* harmony import */ var D_zerodoze_tech_ngx_scanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _zxing_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zxing/browser */ 749);
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zxing/library */ 796);
/* harmony import */ var _browser_multi_format_continuous_reader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browser-multi-format-continuous-reader */ 9609);






const _c0 = ["preview"];
class ZXingScannerComponent {
  /**
   * Exposes the current code reader, so the user can use it's APIs.
   */
  get codeReader() {
    return this._codeReader;
  }
  /**
   * User device input
   */
  set device(device) {
    if (!this._ready) {
      this._devicePreStart = device;
      // let's ignore silently, users don't like logs
      return;
    }
    if (this.isAutostarting) {
      // do not allow setting devices during auto-start, since it will set one and emit it.
      console.warn('Avoid setting a device during auto-start.');
      return;
    }
    if (this.isCurrentDevice(device)) {
      console.warn('Setting the same device is not allowed.');
      return;
    }
    if (!this.hasPermission) {
      console.warn('Permissions not set yet, waiting for them to be set to apply device change.');
      // this.permissionResponse
      //   .pipe(
      //     take(1),
      //     tap(() => console.log(`Permissions set, applying device change${device ? ` (${device.deviceId})` : ''}.`))
      //   )
      //   .subscribe(() => this.device = device);
      return;
    }
    this.setDevice(device);
  }
  /**
   * User device accessor.
   */
  get device() {
    return this._device;
  }
  /**
   * Returns all the registered formats.
   */
  get formats() {
    return this.hints.get(_zxing_library__WEBPACK_IMPORTED_MODULE_2__.DecodeHintType.POSSIBLE_FORMATS);
  }
  /**
   * Registers formats the scanner should support.
   *
   * @param input BarcodeFormat or case-insensitive string array.
   */
  set formats(input) {
    if (typeof input === 'string') {
      throw new Error('Invalid formats, make sure the [formats] input is a binding.');
    }
    // formats may be set from html template as BarcodeFormat or string array
    const formats = input.map(f => this.getBarcodeFormatOrFail(f));
    const hints = this.hints;
    // updates the hints
    hints.set(_zxing_library__WEBPACK_IMPORTED_MODULE_2__.DecodeHintType.POSSIBLE_FORMATS, formats);
    // handles updating the codeReader
    this.hints = hints;
  }
  /**
   * Returns all the registered hints.
   */
  get hints() {
    return this._hints;
  }
  /**
   * Does what it takes to set the hints.
   */
  set hints(hints) {
    this._hints = hints;
    // new instance with new hints.
    this.codeReader?.setHints(this._hints);
  }
  /**
   * Sets the desired constraints in all video tracks.
   * @experimental
   */
  set videoConstraints(constraints) {
    // new instance with new hints.
    const controls = this.codeReader?.getScannerControls();
    if (!controls) {
      // fails silently
      return;
    }
    controls?.streamVideoConstraintsApply(constraints);
  }
  /**
   *
   */
  set isAutostarting(state) {
    this._isAutostarting = state;
    this.autostarting.next(state);
  }
  /**
   *
   */
  get isAutostarting() {
    return this._isAutostarting;
  }
  /**
   * Can turn on/off the device flashlight.
   *
   * @experimental Torch/Flash APIs are not stable in all browsers, it may be buggy!
   */
  set torch(onOff) {
    try {
      const controls = this.getCodeReader().getScannerControls();
      controls.switchTorch(onOff);
    } catch (error) {
      // ignore error
    }
  }
  /**
   * Starts and Stops the scanning.
   */
  set enable(enabled) {
    this._enabled = Boolean(enabled);
    if (!this._enabled) {
      this.reset();
      _browser_multi_format_continuous_reader__WEBPACK_IMPORTED_MODULE_3__.BrowserMultiFormatContinuousReader.releaseAllStreams();
    } else {
      if (this.device) {
        this.scanFromDevice(this.device.deviceId);
      } else {
        this.init();
      }
    }
  }
  /**
   * Tells if the scanner is enabled or not.
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * If is `tryHarder` enabled.
   */
  get tryHarder() {
    return this.hints.get(_zxing_library__WEBPACK_IMPORTED_MODULE_2__.DecodeHintType.TRY_HARDER);
  }
  /**
   * Enable/disable tryHarder hint.
   */
  set tryHarder(enable) {
    const hints = this.hints;
    if (enable) {
      hints.set(_zxing_library__WEBPACK_IMPORTED_MODULE_2__.DecodeHintType.TRY_HARDER, true);
    } else {
      hints.delete(_zxing_library__WEBPACK_IMPORTED_MODULE_2__.DecodeHintType.TRY_HARDER);
    }
    this.hints = hints;
  }
  /**
   * Constructor to build the object and do some DI.
   */
  constructor() {
    /**
     * Delay between attempts to decode (default is 500ms)
     */
    this.timeBetweenScans = 500;
    /**
     * Delay between successful decode (default is 500ms)
     */
    this.delayBetweenScanSuccess = 500;
    /**
     * How the preview element should be fit inside the :host container.
     */
    this.previewFitMode = 'cover';
    this._ready = false;
    // instance based emitters
    this.autostarted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.autostarting = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.torchCompatible = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(false);
    this.scanSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.scanFailure = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.scanError = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.scanComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.camerasFound = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.camerasNotFound = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.permissionResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(true);
    this.hasDevices = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.deviceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this._enabled = true;
    this._hints = new Map();
    this.autofocusEnabled = true;
    this.autostart = true;
    this.formats = [_zxing_library__WEBPACK_IMPORTED_MODULE_2__.BarcodeFormat.QR_CODE];
    // computed data
    this.hasNavigator = typeof navigator !== 'undefined';
    this.isMediaDevicesSupported = this.hasNavigator && !!navigator.mediaDevices;
  }
  /**
   * Gets and registers all cameras.
   */
  askForPermission() {
    var _this = this;
    return (0,D_zerodoze_tech_ngx_scanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.hasNavigator) {
        console.error('@zxing/ngx-scanner', 'Can\'t ask permission, navigator is not present.');
        _this.setPermission(null);
        return _this.hasPermission;
      }
      if (!_this.isMediaDevicesSupported) {
        console.error('@zxing/ngx-scanner', 'Can\'t get user media, this is not supported.');
        _this.setPermission(null);
        return _this.hasPermission;
      }
      let stream;
      let permission;
      try {
        // Will try to ask for permission
        stream = yield _this.getAnyVideoDevice();
        permission = !!stream;
      } catch (err) {
        return _this.handlePermissionException(err);
      } finally {
        _this.terminateStream(stream);
      }
      _this.setPermission(permission);
      // Returns the permission
      return permission;
    })();
  }
  /**
   *
   */
  getAnyVideoDevice() {
    return navigator.mediaDevices.getUserMedia({
      video: true
    });
  }
  /**
   * Terminates a stream and it's tracks.
   */
  terminateStream(stream) {
    if (stream) {
      stream.getTracks().forEach(t => t.stop());
    }
    stream = undefined;
  }
  init() {
    var _this2 = this;
    return (0,D_zerodoze_tech_ngx_scanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.autostart) {
        console.warn('Feature \'autostart\' disabled. Permissions and devices recovery has to be run manually.');
        // does the necessary configuration without autostarting
        _this2.initAutostartOff();
        _this2._ready = true;
        return;
      }
      // configures the component and starts the scanner
      yield _this2.initAutostartOn();
      _this2._ready = true;
    })();
  }
  /**
   * Initializes the component without starting the scanner.
   */
  initAutostartOff() {
    // do not ask for permission when autostart is off
    this.isAutostarting = false;
    // just update devices information
    this.updateVideoInputDevices();
    if (this._device && this._devicePreStart) {
      this.setDevice(this._devicePreStart);
    }
  }
  /**
   * Initializes the component and starts the scanner.
   * Permissions are asked to accomplish that.
   */
  initAutostartOn() {
    var _this3 = this;
    return (0,D_zerodoze_tech_ngx_scanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.isAutostarting = true;
      let hasPermission;
      try {
        // Asks for permission before enumerating devices so it can get all the device's info
        hasPermission = yield _this3.askForPermission();
      } catch (e) {
        console.error('Exception occurred while asking for permission:', e);
        return;
      }
      // from this point, things gonna need permissions
      if (hasPermission) {
        const devices = yield _this3.updateVideoInputDevices();
        yield _this3.autostartScanner([...devices]);
      }
      _this3.isAutostarting = false;
      _this3.autostarted.next();
    })();
  }
  /**
   * Checks if the given device is the current defined one.
   */
  isCurrentDevice(device) {
    return device?.deviceId === this._device?.deviceId;
  }
  /**
   * Executes some actions before destroy the component.
   */
  ngOnDestroy() {
    this.reset();
    _browser_multi_format_continuous_reader__WEBPACK_IMPORTED_MODULE_3__.BrowserMultiFormatContinuousReader.releaseAllStreams();
  }
  /**
   *
   */
  ngOnInit() {
    this.init();
  }
  /**
   * Stops the scanning, if any.
   */
  scanStop() {
    if (this._scanSubscription) {
      this.codeReader?.getScannerControls().stop();
      this._scanSubscription?.unsubscribe();
      this._scanSubscription = undefined;
    }
    this.torchCompatible.next(false);
  }
  /**
   * Stops the scanning, if any.
   */
  scanStart() {
    if (this._scanSubscription) {
      throw new Error('There is already a scan process running.');
    }
    if (!this._device) {
      throw new Error('No device defined, cannot start scan, please define a device.');
    }
    this.scanFromDevice(this._device.deviceId);
  }
  /**
   * Stops old `codeReader` and starts scanning in a new one.
   */
  restart() {
    // note only necessary for now because of the Torch
    this._codeReader = undefined;
    const prevDevice = this._reset();
    if (!prevDevice) {
      return;
    }
    this.device = prevDevice;
  }
  /**
   * Discovers and updates known video input devices.
   */
  updateVideoInputDevices() {
    var _this4 = this;
    return (0,D_zerodoze_tech_ngx_scanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // permissions aren't needed to get devices, but to access them and their info
      const devices = (yield _zxing_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserCodeReader.listVideoInputDevices()) || [];
      const hasDevices = devices && devices.length > 0;
      // stores discovered devices and updates information
      _this4.hasDevices.next(hasDevices);
      _this4.camerasFound.next([...devices]);
      if (!hasDevices) {
        _this4.camerasNotFound.next(null);
      }
      return devices;
    })();
  }
  /**
   * Starts the scanner with the back camera otherwise take the last
   * available device.
   */
  autostartScanner(devices) {
    var _this5 = this;
    return (0,D_zerodoze_tech_ngx_scanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const matcher = ({
        label
      }) => /back|trás|rear|traseira|environment|ambiente/gi.test(label);
      // select the rear camera by default, otherwise take the last camera.
      const device = devices.find(matcher) || devices.pop();
      if (!device) {
        throw new Error('Impossible to autostart, no input devices available.');
      }
      yield _this5.setDevice(device);
      _this5.deviceChange.next(device);
    })();
  }
  /**
   * Dispatches the scan success event.
   *
   * @param result the scan result.
   */
  dispatchScanSuccess(result) {
    this.scanSuccess.next(result.getText());
  }
  /**
   * Dispatches the scan failure event.
   */
  dispatchScanFailure(reason) {
    this.scanFailure.next(reason);
  }
  /**
   * Dispatches the scan error event.
   *
   * @param error the error thing.
   */
  dispatchScanError(error) {
    if (!this.scanError.observed) {
      console.error(`zxing scanner component: ${error.name}`, error);
      console.warn('Use the `(scanError)` property to handle errors like this!');
    }
    this.scanError.next(error);
  }
  /**
   * Dispatches the scan event.
   *
   * @param result the scan result.
   */
  dispatchScanComplete(result) {
    this.scanComplete.next(result);
  }
  /**
   * Returns the filtered permission.
   */
  handlePermissionException(err) {
    // failed to grant permission to video input
    console.error('@zxing/ngx-scanner', 'Error when asking for permission.', err);
    let permission;
    switch (err.name) {
      // usually caused by not secure origins
      case 'NotSupportedError':
        console.warn('@zxing/ngx-scanner', err.message);
        // could not claim
        permission = null;
        // can't check devices
        this.hasDevices.next(null);
        break;
      // user denied permission
      case 'NotAllowedError':
        console.warn('@zxing/ngx-scanner', err.message);
        // claimed and denied permission
        permission = false;
        // this means that input devices exists
        this.hasDevices.next(true);
        break;
      // the device has no attached input devices
      case 'NotFoundError':
        console.warn('@zxing/ngx-scanner', err.message);
        // no permissions claimed
        permission = null;
        // because there was no devices
        this.hasDevices.next(false);
        // tells the listener about the error
        this.camerasNotFound.next(err);
        break;
      case 'NotReadableError':
        console.warn('@zxing/ngx-scanner', 'Couldn\'t read the device(s)\'s stream, it\'s probably in use by another app.');
        // no permissions claimed
        permission = null;
        // there are devices, which I couldn't use
        this.hasDevices.next(false);
        // tells the listener about the error
        this.camerasNotFound.next(err);
        break;
      default:
        console.warn('@zxing/ngx-scanner', 'I was not able to define if I have permissions for camera or not.', err);
        // unknown
        permission = null;
        // this.hasDevices.next(undefined;
        break;
    }
    this.setPermission(permission);
    // tells the listener about the error
    this.permissionResponse.error(err);
    return permission;
  }
  /**
   * Returns a valid BarcodeFormat or fails.
   */
  getBarcodeFormatOrFail(format) {
    return typeof format === 'string' ? _zxing_library__WEBPACK_IMPORTED_MODULE_2__.BarcodeFormat[format.trim().toUpperCase()] : format;
  }
  /**
   * Return a code reader, create one if non exist
   */
  getCodeReader() {
    if (!this._codeReader) {
      const options = {
        delayBetweenScanAttempts: this.timeBetweenScans,
        delayBetweenScanSuccess: this.delayBetweenScanSuccess
      };
      this._codeReader = new _browser_multi_format_continuous_reader__WEBPACK_IMPORTED_MODULE_3__.BrowserMultiFormatContinuousReader(this.hints, options);
    }
    return this._codeReader;
  }
  /**
   * Starts the continuous scanning for the given device.
   *
   * @param deviceId The deviceId from the device.
   */
  scanFromDevice(deviceId) {
    var _this6 = this;
    return (0,D_zerodoze_tech_ngx_scanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const videoElement = _this6.previewElemRef.nativeElement;
      const codeReader = _this6.getCodeReader();
      const scanStream = yield codeReader.scanFromDeviceObservable(deviceId, videoElement);
      if (!scanStream) {
        throw new Error('Undefined decoding stream, aborting.');
      }
      const next = x => _this6._onDecodeResult(x.result, x.error);
      const error = err => _this6._onDecodeError(err);
      const complete = () => {};
      _this6._scanSubscription = scanStream.subscribe(next, error, complete);
      if (_this6._scanSubscription.closed) {
        return;
      }
      const controls = codeReader.getScannerControls();
      const hasTorchControl = typeof controls.switchTorch !== 'undefined';
      _this6.torchCompatible.next(hasTorchControl);
    })();
  }
  /**
   * Handles decode errors.
   */
  _onDecodeError(err) {
    this.dispatchScanError(err);
    // this.reset();
  }
  /**
   * Handles decode results.
   */
  _onDecodeResult(result, error) {
    if (result) {
      this.dispatchScanSuccess(result);
    } else {
      this.dispatchScanFailure(error);
    }
    this.dispatchScanComplete(result);
  }
  /**
   * Stops the code reader and returns the previous selected device.
   */
  _reset() {
    if (!this._codeReader) {
      return;
    }
    // clearing codeReader first to prevent setOptions error appearing in several Chromium versions
    this._codeReader = undefined;
    const device = this._device;
    // do not set this.device inside this method, it would create a recursive loop
    this.device = undefined;
    return device;
  }
  /**
   * Resets the scanner and emits device change.
   */
  reset() {
    this._reset();
    this.deviceChange.emit(null);
  }
  /**
   * Sets the current device.
   */
  setDevice(device) {
    var _this7 = this;
    return (0,D_zerodoze_tech_ngx_scanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // instantly stops the scan before changing devices
      _this7.scanStop();
      // correctly sets the new (or none) device
      _this7._device = device || undefined;
      if (!_this7._device) {
        // cleans the video because user removed the device
        _zxing_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserCodeReader.cleanVideoSource(_this7.previewElemRef.nativeElement);
      }
      // if enabled, starts scanning
      if (_this7._enabled && device) {
        yield _this7.scanFromDevice(device.deviceId);
      }
    })();
  }
  /**
   * Sets the permission value and emits the event.
   */
  setPermission(hasPermission) {
    this.hasPermission = hasPermission;
    this.permissionResponse.next(hasPermission);
  }
  static #_ = this.ɵfac = function ZXingScannerComponent_Factory(t) {
    return new (t || ZXingScannerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ZXingScannerComponent,
    selectors: [["zxing-scanner"]],
    viewQuery: function ZXingScannerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.previewElemRef = _t.first);
      }
    },
    inputs: {
      autofocusEnabled: "autofocusEnabled",
      timeBetweenScans: "timeBetweenScans",
      delayBetweenScanSuccess: "delayBetweenScanSuccess",
      autostart: "autostart",
      previewFitMode: "previewFitMode",
      device: "device",
      formats: "formats",
      videoConstraints: "videoConstraints",
      torch: "torch",
      enable: "enable",
      tryHarder: "tryHarder"
    },
    outputs: {
      autostarted: "autostarted",
      autostarting: "autostarting",
      torchCompatible: "torchCompatible",
      scanSuccess: "scanSuccess",
      scanFailure: "scanFailure",
      scanError: "scanError",
      scanComplete: "scanComplete",
      camerasFound: "camerasFound",
      camerasNotFound: "camerasNotFound",
      permissionResponse: "permissionResponse",
      hasDevices: "hasDevices",
      deviceChange: "deviceChange"
    },
    decls: 6,
    vars: 2,
    consts: [["poster", "noposter"], ["preview", ""]],
    template: function ZXingScannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "video", 0, 1)(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Your browser does not support this feature, please try to upgrade it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Seu navegador n\u00E3o suporta este recurso, por favor tente atualiz\u00E1-lo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("object-fit", ctx.previewFitMode);
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\nvideo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3p4aW5nLXNjYW5uZXIvc3JjL2xpYi96eGluZy1zY2FubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG52aWRlbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}


/***/ }),

/***/ 9976:
/*!****************************************************************!*\
  !*** ./projects/zxing-scanner/src/lib/zxing-scanner.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZXingScannerModule": () => (/* binding */ ZXingScannerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _zxing_scanner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zxing-scanner.component */ 5653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




class ZXingScannerModule {
  static #_ = this.ɵfac = function ZXingScannerModule_Factory(t) {
    return new (t || ZXingScannerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ZXingScannerModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ZXingScannerModule, {
    declarations: [_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_0__.ZXingScannerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule],
    exports: [_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_0__.ZXingScannerComponent]
  });
})();

/***/ }),

/***/ 9052:
/*!**************************************************!*\
  !*** ./projects/zxing-scanner/src/public_api.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZXingScannerComponent": () => (/* reexport safe */ _lib_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_1__.ZXingScannerComponent),
/* harmony export */   "ZXingScannerModule": () => (/* reexport safe */ _lib_zxing_scanner_module__WEBPACK_IMPORTED_MODULE_0__.ZXingScannerModule)
/* harmony export */ });
/* harmony import */ var _lib_zxing_scanner_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/zxing-scanner.module */ 9976);
/* harmony import */ var _lib_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/zxing-scanner.component */ 5653);
/*
 * Public API Surface of zxing-scanner
 */



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3492)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map