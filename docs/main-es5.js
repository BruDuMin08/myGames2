function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 4,
      vars: 0,
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sobre o My Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Aqui teremos uma vis\xE3o geral da aplica\xE7\xE3o e links para p\xE1ginas espec\xEDficas como \"Pol\xEDticas de privacidade\", \"Contatos\" e \"Sobre os Autores\".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _e404_e404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./e404/e404.component */
    "./src/app/e404/e404.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _new_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new/new.component */
    "./src/app/new/new.component.ts");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/edit/edit.component.ts");

    var routes = [// Rota não especificada é redirecionada para a "home"
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, // Rota para página "Home"
    {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, // Rota para a listagem dos games
    {
      path: 'list',
      component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
      data: {
        title: 'Lista de Jogos'
      }
    }, // Rota para novo jogo
    {
      path: 'new',
      component: _new_new_component__WEBPACK_IMPORTED_MODULE_6__["NewComponent"],
      data: {
        title: 'Novo Jogo'
      }
    }, // Rota para página "Sobre"
    {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
      data: {
        title: 'Sobre o My Games'
      }
    }, // Rota para editar um documento
    {
      path: 'edit/:id',
      component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"],
      data: {
        title: 'Editar Jogo'
      }
    }, // Rota desconhecida é redirecionada para o componente "Erro 404"
    {
      path: '**',
      component: _e404_e404_component__WEBPACK_IMPORTED_MODULE_4__["E404Component"],
      data: {
        title: 'Página não encontrada'
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(activatedRoute, router, titleService) {
        _classCallCheck(this, AppComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titleService = titleService; // Título da aplicação

        this.pageTitle = 'My Games';
      } // Método que altera o título dinâmicamente conforme o valor de 'title' em 'app-routing.module.ts'.


      _createClass(AppComponent, [{
        key: "changeTitle",
        value: function changeTitle() {
          var _this = this;

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            var child = _this.activatedRoute.firstChild;

            while (child) {
              if (child.firstChild) {
                child = child.firstChild;
              } else if (child.snapshot.data && child.snapshot.data.title) {
                return "".concat(child.snapshot.data.title, " ~ ").concat(_this.pageTitle);
              } else {
                return _this.pageTitle;
              }
            }

            return _this.pageTitle;
          })).subscribe(function (title) {
            _this.titleService.setTitle(title);
          });
        } // Controla a exibição do menu principal em resoluções mais baixas

      }, {
        key: "menuToggle",
        value: function menuToggle() {
          var _this2 = this;

          jQuery(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_3__('#links').is(':visible')) {
              // Se o menu está visível
              _this2.menuHide(); // Chama o método que oculta o menu

            } else {
              // Se o menu está oculto
              _this2.menuShow(); // Chama o método que mostra o menu

            }
          });
          return false; // Retorna sem fazer mais nada
        } // Oculta o menu

      }, {
        key: "menuHide",
        value: function menuHide() {
          jquery__WEBPACK_IMPORTED_MODULE_3__('#links').slideUp('fast');
        } // Mostra o menu

      }, {
        key: "menuShow",
        value: function menuShow() {
          jquery__WEBPACK_IMPORTED_MODULE_3__('#links').slideDown('fast');
        } // Executa ao iniciar este componente

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // Executa o método que altera o título
          this.changeTitle(); // jQuery 02)

          jQuery(function () {
            // jQuery 03) Quando a janela for redimensionada
            jquery__WEBPACK_IMPORTED_MODULE_3__(window).on('resize', function () {
              if (window.innerWidth > 511) {
                // Se a largura é maior que 511 px
                jquery__WEBPACK_IMPORTED_MODULE_3__('#links').show(0); // Sempre mostra o menu
              } else {
                // Se a largura é menor ou igual a 511 px
                jquery__WEBPACK_IMPORTED_MODULE_3__('#links').hide(0); // Sempre oculta o menu
              }
            }); // Quando clicar em um item (rota) do menu

            jquery__WEBPACK_IMPORTED_MODULE_3__(document).on('click', '#links > a', function () {
              if (window.innerWidth < 512) {
                // Se a largura é menor que 512 px
                jquery__WEBPACK_IMPORTED_MODULE_3__('#links').slideUp('fast'); // Oculta o menu principal
              }
            });
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 44,
      vars: 0,
      consts: [[1, "hborder"], [1, "fas", "fa-fw", "fa-3x", "fa-rotate-90", "fa-gamepad"], [1, "hbd", "tl"], [1, "hbd", "tr"], [1, "hbd", "bl"], [1, "hbd", "br"], ["routerLink", "/home"], [1, "fas", "fa-fw", "fa-home"], ["id", "links", 1, "vborder"], ["routerLink", "/list"], [1, "fas", "fa-fw", "fa-th-list"], ["routerLink", "/new"], [1, "fas", "fa-fw", "fa-plus-square"], ["routerLink", "/about"], [1, "fas", "fa-fw", "fa-info-circle"], [1, "vbd", "tl"], [1, "vbd", "tr"], [1, "vbd", "bl"], [1, "vbd", "br"], ["id", "menu", 3, "click"], [1, "fas", "fa-fw", "fa-bars"], [1, "vborder"], [1, "far", "fa-fw", "fa-copyright"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Listar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Novo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Sobre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_25_listener() {
            return ctx.menuToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "main", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 2020 Andr\xE9 Luferat. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-shadow: -1px -1px var(--color-6), -1px 1px var(--color-6), 1px -1px var(--color-6), 1px 1px var(--color-6);\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 1.2rem 0;\r\n    letter-spacing: 1.5px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    position: relative;\r\n    padding: .5rem;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: .5rem;\r\n    text-transform: uppercase;\r\n    border: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: var(--color-1);\r\n    color: var(--color-6);\r\n    border: none;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n#links[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    top: 2.7rem;\r\n    right: 0;\r\n    z-index: 100;\r\n}\r\n\r\n#links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin: .8rem;\r\n    padding: .5rem 1rem;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n    background: var(--main-bg);\r\n    margin: 0 .8rem;\r\n    padding: 0 .8rem;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: .6rem;\r\n    font-style: italic;\r\n    font-size: .8rem;\r\n}\r\n\r\nheader[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], #links[_ngcontent-%COMP%] {\r\n    color: var(--color-1);\r\n    background: var(--head-nav-foot-bg);\r\n    margin: .8rem;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n}\r\n\r\n#links[_ngcontent-%COMP%] {\r\n    background: var(--menu-drop-bg);\r\n}\r\n\r\n\r\n\r\nmain[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n}\r\n\r\n\r\n\r\n@media ( min-width: 512px) {\r\n    #menu[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    #links[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        display: block;\r\n        top: 0;\r\n        margin: 0;\r\n        background: transparent;\r\n        border: 0;\r\n        box-shadow: none;\r\n    }\r\n    #links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    #links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin: 0 0 0 1rem;\r\n        display: inline-block;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwrR0FBK0c7QUFDbkg7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7Ozs7SUFJSSxxQkFBcUI7SUFDckIsbUNBQW1DO0lBQ25DLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUdBLGtCQUFrQjs7QUFFbEI7SUFDSSxZQUFZO0FBQ2hCOztBQUdBLG1CQUFtQjs7QUFFbkI7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsTUFBTTtRQUNOLFNBQVM7UUFDVCx1QkFBdUI7UUFDdkIsU0FBUztRQUNULGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLHFCQUFxQjtJQUN6QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggdmFyKC0tY29sb3ItNiksIC0xcHggMXB4IHZhcigtLWNvbG9yLTYpLCAxcHggLTFweCB2YXIoLS1jb2xvci02KSwgMXB4IDFweCB2YXIoLS1jb2xvci02KTtcclxufVxyXG5cclxuaGVhZGVyIGgxIHtcclxuICAgIG1hcmdpbjogMS4ycmVtIDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbn1cclxuXHJcbm5hdiBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5uYXYgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci02KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI21lbnUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jbGlua3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMi43cmVtO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbiNsaW5rcyBhIHtcclxuICAgIG1hcmdpbjogLjhyZW07XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG59XHJcblxyXG5tYWluIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmcpO1xyXG4gICAgbWFyZ2luOiAwIC44cmVtO1xyXG4gICAgcGFkZGluZzogMCAuOHJlbTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IC42cmVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxufVxyXG5cclxuaGVhZGVyLFxyXG5uYXYsXHJcbmZvb3RlcixcclxuI2xpbmtzIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0xKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWhlYWQtbmF2LWZvb3QtYmcpO1xyXG4gICAgbWFyZ2luOiAuOHJlbTtcclxufVxyXG5cclxubmF2IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbiNsaW5rcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tZW51LWRyb3AtYmcpO1xyXG59XHJcblxyXG5cclxuLyogU3RpY2t5IGZvb3RlciAqL1xyXG5cclxubWFpbiB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcblxyXG4vKiBSZXNwb25zaXZpZGFkZSAqL1xyXG5cclxuQG1lZGlhICggbWluLXdpZHRoOiA1MTJweCkge1xyXG4gICAgI21lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjbGlua3Mge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAgI2xpbmtzIGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICNsaW5rcyBhIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAwIDFyZW07XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _new_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./new/new.component */
    "./src/app/new/new.component.ts");
    /* harmony import */


    var _e404_e404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./e404/e404.component */
    "./src/app/e404/e404.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./form/form.component */
    "./src/app/form/form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/edit/edit.component.ts"); // Importa componente FormsModule do Angular/forms


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], // Inicialização do Firebase
      _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase), // Carga da classe de acesso ao Firestore
      _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], ///// 2) Importa componente FormsModule do Angular/forms
      _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"], _new_new_component__WEBPACK_IMPORTED_MODULE_9__["NewComponent"], _e404_e404_component__WEBPACK_IMPORTED_MODULE_10__["E404Component"], _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_12__["FormComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["EditComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], // Carga da classe de acesso ao Firestore
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], ///// 2) Importa componente FormsModule do Angular/forms
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"], _new_new_component__WEBPACK_IMPORTED_MODULE_9__["NewComponent"], _e404_e404_component__WEBPACK_IMPORTED_MODULE_10__["E404Component"], _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_12__["FormComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["EditComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], // Inicialização do Firebase
          _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase), // Carga da classe de acesso ao Firestore
          _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], ///// 2) Importa componente FormsModule do Angular/forms
          _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/classes/game-form.ts":
  /*!**************************************!*\
    !*** ./src/app/classes/game-form.ts ***!
    \**************************************/

  /*! exports provided: GameForm */

  /***/
  function srcAppClassesGameFormTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameForm", function () {
      return GameForm;
    });

    var GameForm = function GameForm() {
      _classCallCheck(this, GameForm);

      this.platform = '';
    };
    /***/

  },

  /***/
  "./src/app/e404/e404.component.ts":
  /*!****************************************!*\
    !*** ./src/app/e404/e404.component.ts ***!
    \****************************************/

  /*! exports provided: E404Component */

  /***/
  function srcAppE404E404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "E404Component", function () {
      return E404Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var E404Component = /*#__PURE__*/function () {
      function E404Component() {
        _classCallCheck(this, E404Component);
      }

      _createClass(E404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return E404Component;
    }();

    E404Component.ɵfac = function E404Component_Factory(t) {
      return new (t || E404Component)();
    };

    E404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: E404Component,
      selectors: [["app-e404"]],
      decls: 9,
      vars: 0,
      consts: [[1, "center"], ["routerLink", "/home", 1, "basic-button"], [1, "fas", "fa-fw", "fa-home"]],
      template: function E404Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Oooops! Erro 404!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "A p\xE1gina ou documento que voc\xEA est\xE1 tentando acessar. n\xE3o foi encontrado...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\xA0\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " P\xE1gina Inicial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2U0MDQvZTQwNC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](E404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-e404',
          templateUrl: './e404.component.html',
          styleUrls: ['./e404.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/edit/edit.component.ts":
  /*!****************************************!*\
    !*** ./src/app/edit/edit.component.ts ***!
    \****************************************/

  /*! exports provided: EditComponent */

  /***/
  function srcAppEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
      return EditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../form/form.component */
    "./src/app/form/form.component.ts");

    var EditComponent = /*#__PURE__*/function () {
      function EditComponent() {
        _classCallCheck(this, EditComponent);
      }

      _createClass(EditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditComponent;
    }();

    EditComponent.ɵfac = function EditComponent_Factory(t) {
      return new (t || EditComponent)();
    };

    EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditComponent,
      selectors: [["app-edit"]],
      decls: 3,
      vars: 0,
      template: function EditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Editar Jogo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-form");
        }
      },
      directives: [_form_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit',
          templateUrl: './edit.component.html',
          styleUrls: ['./edit.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form/form.component.ts":
  /*!****************************************!*\
    !*** ./src/app/form/form.component.ts ***!
    \****************************************/

  /*! exports provided: FormComponent */

  /***/
  function srcAppFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _classes_game_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../classes/game-form */
    "./src/app/classes/game-form.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // Importa a classe GameForm


    function FormComponent_option_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", p_r6.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r6.name);
      }
    }

    var FormComponent = /*#__PURE__*/function () {
      function FormComponent( // Conexão com o Firestore
      db, // Roteamentos
      route, router) {
        _classCallCheck(this, FormComponent);

        this.db = db;
        this.route = route;
        this.router = router; // Declara objeto de formulário

        this.gameForm = new _classes_game_form__WEBPACK_IMPORTED_MODULE_2__["GameForm"](); // Armazena os nomes das plataformas

        this.platforms = this.db.collection('platforms', function (ref) {
          return ref.orderBy('name');
        }).valueChanges(); // Obtém o Id da rota

        this.id = this.route.snapshot.paramMap.get('id');
      }

      _createClass(FormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          // Se tem um Id, obter dados do Db
          if (this.id !== null) {
            // Atualizar campo Id do formulário
            this.gameForm.id = this.id;
            this.db.collection('games').doc(this.id).ref.get().then(function (doc) {
              if (doc.exists) {
                // Atibui dados recebidos aos campos do formulário
                _this3.gameForm.id = doc.id;
                _this3.gameForm.title = doc.data().title;
                _this3.gameForm.cover = doc.data().cover;
                _this3.gameForm.description = doc.data().description;
                _this3.gameForm.platform = doc.data().platform;
                _this3.gameForm.media = doc.data().media;
                _this3.gameForm.date = doc.data().date;
              } else {
                // Feedback
                alert('Documento não encontrado!\nClique em [Ok] para continuar...'); // Redireciona para a listagem

                _this3.router.navigate(['/list']);
              }
            })["catch"]( // Mensagem de erro no console
            function (error) {
              console.error('Falha ao obter documento: ', error);
            });
          } // Responsividade da ajuda (aside)


          jQuery(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(window).on('resize', function () {
              if (window.innerWidth > 539) {
                jquery__WEBPACK_IMPORTED_MODULE_1__('aside').show(0);
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_1__('aside').hide(0);
              }
            });
          });
        } // Método que processa o envio do formulário

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          // console.log(this.gameForm);
          // Se não identificou um documento pelo id, cria documento
          if (this.gameForm.id === undefined) {
            // Gravar dados no banco
            this.db.collection('games').add(Object.assign({}, this.gameForm)) // Se conseguiu criar...
            .then(function () {
              // Feedback que salvou novo documento
              alert("Jogo \"".concat(_this4.gameForm.title, "\" adicionado com sucesso!\n\nClique em [Ok] para continuar.")); // Limpa os campos para novos dados

              _this4.gameForm = new _classes_game_form__WEBPACK_IMPORTED_MODULE_2__["GameForm"](); // Sai sem fazer nada

              return false;
            }) // Em caso de erro ao gravar...
            ["catch"](function (err) {
              // Exibe erro no console
              console.error(err);
            }); // Se tem um id, está editando documento existente
          } else {
            // console.log('Editando', this.gameForm);
            this.db.collection('games').doc(this.id).set( // Obtém os dados do formulário e atribui ao documento do Firestore
            {
              title: this.gameForm.title,
              cover: this.gameForm.cover,
              description: this.gameForm.description,
              platform: this.gameForm.platform,
              media: this.gameForm.media,
              date: this.gameForm.date
            } // Se atualizou o documento
            ).then(function () {
              alert("\"".concat(_this4.gameForm.title, "\" atualizado com sucesso!\n\nClique em [Ok] para continuar.")); // Listagem de jogos

              _this4.router.navigate(['/list']);
            } ///// 17) Se não conseguiu, retorna erro
            )["catch"]( // Exibe erro no console
            function (error) {
              console.error('Falha ao atualizar Db:', error);
            });
          }
        } // Oculta / exibe ajuda

      }, {
        key: "helpToggle",
        value: function helpToggle() {
          var _this5 = this;

          // jQuery 02) toggle da ajuda
          jQuery(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_1__('aside').is(':visible')) {
              _this5.helpHide();
            } else {
              _this5.helpShow();
            }
          });
          return false;
        } // Oculta ajuda

      }, {
        key: "helpHide",
        value: function helpHide() {
          jquery__WEBPACK_IMPORTED_MODULE_1__('aside').slideUp('fast');
        } // Mostra ajuda

      }, {
        key: "helpShow",
        value: function helpShow() {
          jquery__WEBPACK_IMPORTED_MODULE_1__('aside').slideDown('fast');
        } // Oculta ajuda em resoluções menores

      }, {
        key: "hideAside",
        value: function hideAside() {
          if (window.innerWidth < 540) {
            this.helpHide();
          }
        }
      }]);

      return FormComponent;
    }();

    FormComponent.ɵfac = function FormComponent_Factory(t) {
      return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormComponent,
      selectors: [["app-form"]],
      decls: 88,
      vars: 11,
      consts: [[1, "hborder", "form-alert", 3, "click"], [1, "help-btn"], [1, "fas", "fa-fw", "fa-caret-down"], [1, "hbd", "tl"], [1, "hbd", "tr"], [1, "hbd", "bl"], [1, "hbd", "br"], [1, "row", 3, "click"], [3, "ngSubmit"], ["type", "hidden", "name", "id", 3, "ngModel", "ngModelChange"], ["for", "title"], ["type", "text", "name", "title", "placeholder", "Nome do game", 3, "ngModel", "ngModelChange"], ["for", "cover"], ["type", "text", "name", "cover", "placeholder", "Ex.: http://site.com/capa.jpg", 3, "ngModel", "ngModelChange"], ["for", "description"], ["name", "description", "placeholder", "Descri\xE7\xE3o resumida.", 3, "ngModel", "ngModelChange"], ["for", "platform"], ["name", "platform", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "Outra"], ["for", "media"], ["type", "radio", "name", "media", "value", "F\xEDsica", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "media", "value", "Digital", 3, "ngModel", "ngModelChange"], ["for", "date"], ["type", "date", "name", "date", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "basic-button"], [1, "fas", "fa-fw", "fa-save"], [1, "vborder", 3, "click"], [1, "vbd", "tl"], [1, "vbd", "tr"], [1, "vbd", "bl"], [1, "vbd", "br"], [3, "value"]],
      template: function FormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_div_click_0_listener() {
            return ctx.helpToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Todos os campos s\xE3o obrigat\xF3rios.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_div_click_9_listener() {
            return ctx.hideAside();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_10_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.gameForm.id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nome do jogo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.gameForm.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "URL da capa:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.gameForm.cover = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Descri\xE7\xE3o do jogo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "textarea", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_textarea_ngModelChange_23_listener($event) {
            return ctx.gameForm.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Plataforma:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_select_ngModelChange_27_listener($event) {
            return ctx.gameForm.platform = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "-- Selecione --");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FormComponent_option_30_Template, 2, 2, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Outra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Tipo de m\xEDdia:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_38_listener($event) {
            return ctx.gameForm.media = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " F\xEDsica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_42_listener($event) {
            return ctx.gameForm.media = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Digital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Data da compra:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_47_listener($event) {
            return ctx.gameForm.date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Salvar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "aside", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_aside_click_52_listener() {
            return ctx.hideAside();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Dicas de preenchimento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Novo Jogo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Lembre-se que todos os campos devem ser preenchidos;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Nome do jogo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Digite o nome completo do jogo, incluindo vers\xF5es, por exemplo: Fallout 4 GOTY; ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "URL da capa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Pesquise no Google Images pela capa do jogo, copie o URL e cole no campo;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Descri\xE7\xE3o do jogo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Descreva o tipo e estilo de jogo, al\xE9m de peculiaridades sobre ele;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Plataforma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Escolha a plataforma para a qual o jogo foi feito, ou a em que voc\xEA vai jogar;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Tipo de m\xEDdia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Selecione \"Digital\" para jogos baixados e \"F\xEDsica\" para CD, DVD, cartucho, cards, etc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Data da compra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Digite ou selecione a data da aquisi\xE7\xE3o do jogo ou uma data aproximada.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gameForm.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gameForm.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gameForm.cover);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gameForm.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gameForm.platform);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 9, ctx.platforms));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gameForm.media);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gameForm.media);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gameForm.date);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["label[for][_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: 0 0 .3rem .5rem;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:not([type='radio']), select[_ngcontent-%COMP%], option[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    padding: .5rem;\r\n    border-radius: .3rem;\r\n    \r\n}\r\n\r\ninput[_ngcontent-%COMP%]:not([type='radio']), select[_ngcontent-%COMP%], option[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\nfieldset[_ngcontent-%COMP%] {\r\n    border: 1px dotted grey;\r\n}\r\n\r\nselect[_ngcontent-%COMP%]:required:invalid {\r\n    color: gray;\r\n}\r\n\r\noption[value=\"\"][disabled][_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\noption[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n    height: 5rem;\r\n    resize: vertical;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    padding: .5rem 1rem;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-alert[_ngcontent-%COMP%] {\r\n    padding: .8rem;\r\n    background: var(--list-bg);\r\n    color: var(--color-1);\r\n    text-align: center;\r\n    font-size: small;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.help-btn[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: .1rem;\r\n    background: var(--color-2);\r\n    color: var(--color-7);\r\n    cursor: pointer;\r\n}\r\n\r\n.help-btn[_ngcontent-%COMP%]:hover {\r\n    color: var(--color-2);\r\n    background: var(--color-6);\r\n    ;\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n    padding: 0 .8rem;\r\n}\r\n\r\n.form-alert[_ngcontent-%COMP%], .list[_ngcontent-%COMP%], .confirm[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 450px;\r\n    margin: 0 auto .8rem auto;\r\n}\r\n\r\n.confirm[_ngcontent-%COMP%] {\r\n    padding: .01rem .8rem;\r\n    background: var(--menu-drop-bg);\r\n}\r\n\r\n.closebox[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: .5rem;\r\n    margin-right: -.5rem;\r\n    border: none;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\naside[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    z-index: 100;\r\n    top: -0.4rem;\r\n    right: 0;\r\n    width: 80%;\r\n    margin: 0 0 .8rem 1.6rem;\r\n    padding: .8rem .8rem;\r\n    background: var(--menu-drop-bg);\r\n    color: var(--color-1);\r\n}\r\n\r\naside[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n\r\naside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin: 1rem 0 0 0;\r\n    padding: 0;\r\n    font-size: small;\r\n    list-style: none;\r\n}\r\n\r\naside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: .8rem;\r\n}\r\n\r\naside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\naside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: .4rem;\r\n}\r\n\r\n@media (min-width: 540px) {\r\n    .row[_ngcontent-%COMP%] {\r\n        display: flex;\r\n    }\r\n    aside[_ngcontent-%COMP%], form[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    aside[_ngcontent-%COMP%] {\r\n        display: block;\r\n        position: relative;\r\n        top: auto;\r\n        right: auto;\r\n        width: 30%;\r\n        min-width: 200px;\r\n        margin: 0 0 .8rem 1.6rem;\r\n        padding: .8rem .8rem;\r\n        background: var(--menu-drop-bg);\r\n    }\r\n    form[_ngcontent-%COMP%] {\r\n        flex-grow: 1;\r\n    }\r\n    .form-alert[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOztBQUVBOzs7Ozs7SUFNSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsS0FBSztBQUNUOztBQUVBOzs7OztJQUtJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCOztBQUU5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7O0lBR0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixRQUFRO0lBQ1IsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7O1FBRUksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsV0FBVztRQUNYLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQiwrQkFBK0I7SUFDbkM7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWxbZm9yXSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMCAuM3JlbSAuNXJlbTtcclxufVxyXG5cclxuaW5wdXQ6bm90KFt0eXBlPSdyYWRpbyddKSxcclxuc2VsZWN0LFxyXG5vcHRpb24sXHJcbnRleHRhcmVhLFxyXG5maWVsZHNldCxcclxuYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcclxuICAgIC8qICAqL1xyXG59XHJcblxyXG5pbnB1dDpub3QoW3R5cGU9J3JhZGlvJ10pLFxyXG5zZWxlY3QsXHJcbm9wdGlvbixcclxuZmllbGRzZXQsXHJcbnRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgZ3JleTtcclxufVxyXG5cclxuc2VsZWN0OnJlcXVpcmVkOmludmFsaWQge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbm9wdGlvblt2YWx1ZT1cIlwiXVtkaXNhYmxlZF0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxub3B0aW9uIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm0tYWxlcnQge1xyXG4gICAgcGFkZGluZzogLjhyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXN0LWJnKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0xKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmhlbHAtYnRuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogLjFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci03KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhlbHAtYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0yKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTYpO1xyXG4gICAgO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwIC44cmVtO1xyXG59XHJcblxyXG4uZm9ybS1hbGVydCxcclxuLmxpc3QsXHJcbi5jb25maXJtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIC44cmVtIGF1dG87XHJcbn1cclxuXHJcbi5jb25maXJtIHtcclxuICAgIHBhZGRpbmc6IC4wMXJlbSAuOHJlbTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1lbnUtZHJvcC1iZyk7XHJcbn1cclxuXHJcbi5jbG9zZWJveCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogLS41cmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuYXNpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHRvcDogLTAuNHJlbTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCAwIC44cmVtIDEuNnJlbTtcclxuICAgIHBhZGRpbmc6IC44cmVtIC44cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWVudS1kcm9wLWJnKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0xKTtcclxufVxyXG5cclxuYXNpZGUgaDQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5hc2lkZSB1bCB7XHJcbiAgICBtYXJnaW46IDFyZW0gMCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmFzaWRlIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC44cmVtO1xyXG59XHJcblxyXG5hc2lkZSBsaTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbmFzaWRlIGxpIHN0cm9uZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IC40cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTQwcHgpIHtcclxuICAgIC5yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICBhc2lkZSxcclxuICAgIGZvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgYXNpZGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAwIC44cmVtIDEuNnJlbTtcclxuICAgICAgICBwYWRkaW5nOiAuOHJlbSAuOHJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tZW51LWRyb3AtYmcpO1xyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tYWxlcnQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-form',
          templateUrl: './form.component.html',
          styleUrls: ['./form.component.css']
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 19,
      vars: 0,
      consts: [["href", "http://luferat.net"], [1, "hborder", "atention"], [1, "hbd", "tl"], [1, "hbd", "tr"], [1, "hbd", "bl"], [1, "hbd", "br"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "P\xE1gina Inicial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "P\xE1gina inicia da nossa aplica\xE7\xE3o Web de gest\xE3o de videogames.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Exemplo de link: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Site do Autor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Aten\xE7\xE3o Programador!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lembre-se de atualizar as chaves de conex\xE3o com o Firebase com as chaves do seu projeto no Firebase, caso voc\xEA esteja clonando esta aplica\xE7\xE3o.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "As chaves s\xE3o configuradas no c\xF3digo fonte, no arquivo \"src/environments/environments.ts\".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".atention[_ngcontent-%COMP%] {\r\n    padding: .01rem .8rem;\r\n    margin: 1rem .8rem;\r\n    background: var(--list-bg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF0ZW50aW9uIHtcclxuICAgIHBhZGRpbmc6IC4wMXJlbSAuOHJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAuOHJlbTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpc3QtYmcpO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/list/list.component.ts":
  /*!****************************************!*\
    !*** ./src/app/list/list.component.ts ***!
    \****************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/edit/", a1];
    };

    function ListComponent_div_22_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_div_22_div_1_Template_a_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var g_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3.deleteGame(g_r2.id, g_r2.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var g_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", g_r2.cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", g_r2.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r2.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", g_r2.platform, " - M\xEDdia ", g_r2.media, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r2.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Adquirido em ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 10, g_r2.date, "dd/MM/yyyy"), ".");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "Editar ", g_r2.title, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, g_r2.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "Apagar ", g_r2.title, "");
      }
    }

    function ListComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_div_22_div_1_Template, 20, 15, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.games));
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "mark": a0
      };
    };

    var ListComponent = /*#__PURE__*/function () {
      function ListComponent(db) {
        _classCallCheck(this, ListComponent);

        this.db = db; // Ordena pelo título ao carregar

        this.orderBy = 'title'; // Em ordem ascendente ao carregar

        this.orderDr = 'asc';
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Atualiza a lista de games
          this.getList();
        }
      }, {
        key: "getList",
        value: function getList() {
          var _this6 = this;

          // Referência aos documentos da coleção 'games'
          this.gameCollection = this.db.collection('games', function (ref) {
            return ref.orderBy(_this6.orderBy, _this6.orderDr);
          }); // Obtém os documento da coleção

          this.games = this.gameCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id; // Retorna os documentos quando eles forem obtidos

              return Object.assign({
                id: id
              }, data);
            });
          }));
        } // Altera o campo usado para ordenar a listagem

      }, {
        key: "changeOrderField",
        value: function changeOrderField(field) {
          if (this.orderBy !== field) {
            // Se o campo selecionado é diferente do atual
            this.orderBy = field; // Muda o valor do campo

            this.getList(); // Atualizar a listagem com o novo parâmetro
          }

          return false; // Sai sem fazer nada
        }
      }, {
        key: "changeOrderDir",
        value: function changeOrderDir(direction) {
          if (this.orderDr !== direction) {
            // Se o campo selecionado é diferente do atual
            this.orderDr = direction; // Muda o valor do campo

            this.getList(); // Atualizar a listagem com o novo parâmetro
          }

          return false; // Sai sem fazer nada
        } // Apaga um documento

      }, {
        key: "deleteGame",
        value: function deleteGame(gameKey, gameTitle) {
          // Mensagem para confirmar se deseja apagar (Observe o ! = NOT)
          if (!confirm("Oooops!\nTem certeza que deseja apagar \"".concat(gameTitle, "\" da sua cole\xE7\xE3o?"))) {
            return false;
          }

          this.db.collection('games').doc(gameKey)["delete"]().then(function (res) {
            alert("\"".concat(gameTitle, "\" foi apagado da sua cole\xE7\xE3o!\nClique em [Ok] para continuar."));
          })["catch"](function (err) {
            console.error("Falha ao apagar: ".concat(err));
          });
          return false;
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]));
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      decls: 23,
      vars: 7,
      consts: [[1, "orderbox", "hborder"], ["name", "orderby", 3, "change"], ["value", "title"], ["value", "date"], ["value", "platform"], ["value", "media"], ["title", "Ascendente", 3, "ngClass", "click"], [1, "fas", "fa-fw", "fa-arrow-alt-circle-up"], ["title", "Descendente", 3, "ngClass", "click"], [1, "fas", "fa-fw", "fa-arrow-alt-circle-down"], [1, "hbd", "tl"], [1, "hbd", "tr"], [1, "hbd", "bl"], [1, "hbd", "br"], ["class", "iflist", 4, "ngIf"], [1, "iflist"], ["class", "list vborder", 4, "ngFor", "ngForOf"], [1, "list", "vborder"], [3, "src", "alt"], [1, "small"], [1, "tools"], [3, "title", "routerLink"], [1, "fas", "fa-fw", "fa-edit"], [3, "title", "click"], [1, "fas", "fa-fw", "fa-trash-alt"], [1, "vbd", "tl"], [1, "vbd", "tr"], [1, "vbd", "bl"], [1, "vbd", "br"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lista de Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Ordem: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ListComponent_Template_select_change_5_listener($event) {
            return ctx.changeOrderField($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "T\xEDtulo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Plataforma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tipo de m\xEDdia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_a_click_14_listener() {
            return ctx.changeOrderDir("asc");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_a_click_16_listener() {
            return ctx.changeOrderDir("desc");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ListComponent_div_22_Template, 3, 3, "div", 14);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.orderDr == "asc"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.orderDr == "desc"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.games);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".list[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: .8rem;\r\n    margin-top: .8rem;\r\n    background: var(--list-bg);\r\n}\r\n\r\n.list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: auto;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n\r\n.list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin: .5rem 0 .3rem 0;\r\n}\r\n\r\n.list[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.list[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n    text-align: left;\r\n}\r\n\r\n.list[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .orderbox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    border: none;\r\n    cursor: pointer;\r\n    padding: .3rem;\r\n}\r\n\r\n.list[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .orderbox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .mark[_ngcontent-%COMP%] {\r\n    background: var(--color-1);\r\n    color: var(--color-6);\r\n}\r\n\r\n.iflist[_ngcontent-%COMP%] {\r\n    padding-bottom: .8rem;\r\n}\r\n\r\n\r\n\r\n.orderbox[_ngcontent-%COMP%] {\r\n    padding: .8rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: small;\r\n    background: var(--list-bg);\r\n}\r\n\r\n.orderbox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    \r\n}\r\n\r\n.orderbox[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    padding: .25rem;\r\n    color: var(--color-1);\r\n    background: var(--color-7);\r\n    border: none;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .iflist[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: space-between;\r\n    }\r\n    .list[_ngcontent-%COMP%] {\r\n        width: 49%;\r\n    }\r\n    .orderbox[_ngcontent-%COMP%] {\r\n        font-size: 1rem;\r\n        justify-content: flex-end;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJLDBCQUEwQjtJQUMxQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBR0EsdUJBQXVCOztBQUV2QjtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsZUFBZTtRQUNmLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO1FBQ2YseUJBQXlCO0lBQzdCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IC44cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLjhyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXN0LWJnKTtcclxufVxyXG5cclxuLmxpc3QgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5saXN0IGgzIHtcclxuICAgIG1hcmdpbjogLjVyZW0gMCAuM3JlbSAwO1xyXG59XHJcblxyXG4ubGlzdCAudG9vbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saXN0IC50b29scyBzcGFuIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5saXN0IC50b29scyBhLFxyXG4ub3JkZXJib3ggYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IC4zcmVtO1xyXG59XHJcblxyXG4ubGlzdCAudG9vbHMgYTpob3ZlcixcclxuLm9yZGVyYm94IGE6aG92ZXIsXHJcbi5tYXJrIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTEpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTYpO1xyXG59XHJcblxyXG4uaWZsaXN0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuOHJlbTtcclxufVxyXG5cclxuXHJcbi8qIENhaXhhIGRlIG9yZGVuYcOnw6NvICovXHJcblxyXG4ub3JkZXJib3gge1xyXG4gICAgcGFkZGluZzogLjhyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpc3QtYmcpO1xyXG59XHJcblxyXG4ub3JkZXJib3ggZGl2IHtcclxuICAgIC8qIGZsZXgtZ3JvdzogMTsgKi9cclxufVxyXG5cclxuLm9yZGVyYm94IHNlbGVjdCB7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IC4yNXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0xKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTcpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAgIC5pZmxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICAgIC5saXN0IHtcclxuICAgICAgICB3aWR0aDogNDklO1xyXG4gICAgfVxyXG4gICAgLm9yZGVyYm94IHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html',
          styleUrls: ['./list.component.css']
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/new/new.component.ts":
  /*!**************************************!*\
    !*** ./src/app/new/new.component.ts ***!
    \**************************************/

  /*! exports provided: NewComponent */

  /***/
  function srcAppNewNewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewComponent", function () {
      return NewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../form/form.component */
    "./src/app/form/form.component.ts");

    var NewComponent = /*#__PURE__*/function () {
      function NewComponent() {
        _classCallCheck(this, NewComponent);
      }

      _createClass(NewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewComponent;
    }();

    NewComponent.ɵfac = function NewComponent_Factory(t) {
      return new (t || NewComponent)();
    };

    NewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewComponent,
      selectors: [["app-new"]],
      decls: 3,
      vars: 0,
      template: function NewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Novo Jogo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-form");
        }
      },
      directives: [_form_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy9uZXcuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new',
          templateUrl: './new.component.html',
          styleUrls: ['./new.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyDujCI6Wqy5pgZh_rCJZ0SA2zZMnzlBy-s',
        authDomain: 'mygamesangular.firebaseapp.com',
        databaseURL: 'https://mygamesangular.firebaseio.com',
        projectId: 'mygamesangular',
        storageBucket: 'mygamesangular.appspot.com',
        messagingSenderId: '885848718029',
        appId: '1:885848718029:web:6b698b97bf95b61d84c784'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Projetos Angular\myGames-dev-2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map