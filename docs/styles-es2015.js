(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* FOLHAS DE ESTILO GLOBAIS - Afetam toda a aplicação. */\r\n\r\n\r\n/* Cores do tema */\r\n\r\n\r\n:root {\r\n    --color-1: rgb(0, 255, 0);\r\n    --color-2: rgb(0, 240, 0);\r\n    --color-3: rgb(0, 224, 0);\r\n    --color-4: rgb(0, 192, 0);\r\n    --color-5: rgb(0, 128, 0);\r\n    --color-6: rgb(0, 64, 0);\r\n    --color-7: rgb(0, 32, 0);\r\n    --color-8: rgb(0, 16, 0);\r\n    --link-hover: orangered;\r\n    --box-border-px: 2px;\r\n    --box-border-tik: 8px;\r\n    --box-border: var(--box-border-px) solid var(--color-1);\r\n    --head-nav-foot-bg: rgba(0, 64, 0, .5);\r\n    --main-bg: rgba(0, 32, 0, .9);\r\n    --menu-drop-bg: rgba(0, 64, 0, .9);\r\n    --list-bg: rgba(0, 96, 0, .5);\r\n}\r\n\r\n\r\n/* CSS reset */\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: none;\r\n}\r\n\r\n\r\nhtml,\r\nbody {\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Comic Neue', cursive;\r\n    font-size: 16px;\r\n}\r\n\r\n\r\nbody {\r\n    background-image: url('bg01.jpg');\r\n    background-attachment: fixed;\r\n    background-position: bottom left;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-color: black;\r\n    color: var(--color-1);\r\n}\r\n\r\n\r\na {\r\n    color: var(--color-1);\r\n    text-decoration: none;\r\n    border-bottom: 1px dotted var(--color-1);\r\n    display: inline-block;\r\n}\r\n\r\n\r\na:hover {\r\n    color: var(--link-hover);\r\n    border-bottom: 1px dotted var(--link-hover);\r\n}\r\n\r\n\r\n/* Centraliza e limita o crescimento da tela. */\r\n\r\n\r\napp-root {\r\n    min-height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    max-width: 960px;\r\n    margin: auto;\r\n}\r\n\r\n\r\n/* Sticky footer */\r\n\r\n\r\nhtml,\r\nbody,\r\napp-root {\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n\r\n\r\n/* Responsivo */\r\n\r\n\r\n@media (min-width: 640px) {\r\n    body {\r\n        background-position: center;\r\n    }\r\n}\r\n\r\n\r\n/* Botões genéricos */\r\n\r\n\r\n.basic-button {\r\n    display: inline-block;\r\n    padding: .5rem 1rem;\r\n    color: var(--color-8);\r\n    background: linear-gradient(var(--color-2), var(--color-4));\r\n    border-radius: 0rem;\r\n    border: none;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.basic-button:hover {\r\n    color: var(--color-1);\r\n    background: linear-gradient(var(--color-5), var(--color-7));\r\n    border: none;\r\n}\r\n\r\n\r\n/* Classes de uso geral */\r\n\r\n\r\n.center {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.small {\r\n    font-size: small;\r\n}\r\n\r\n\r\n/* Bordas das caixas */\r\n\r\n\r\n.hborder {\r\n    border-left: var(--box-border);\r\n    border-right: var(--box-border);\r\n}\r\n\r\n\r\n.vborder {\r\n    border-top: var(--box-border);\r\n    border-bottom: var(--box-border);\r\n}\r\n\r\n\r\n.hborder,\r\n.vborder {\r\n    position: relative;\r\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, .7);\r\n}\r\n\r\n\r\n.hbd {\r\n    position: absolute;\r\n    width: var(--box-border-tik);\r\n    height: var(--box-border-px);\r\n    background: var(--color-1);\r\n}\r\n\r\n\r\n.vbd {\r\n    position: absolute;\r\n    height: var(--box-border-tik);\r\n    width: var(--box-border-px);\r\n    background: var(--color-1);\r\n}\r\n\r\n\r\n.tl {\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n\r\n.tr {\r\n    top: 0;\r\n    right: 0;\r\n}\r\n\r\n\r\n.br {\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n\r\n.bl {\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdEQUF3RDs7O0FBR3hELGtCQUFrQjs7O0FBRWxCO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQix1REFBdUQ7SUFDdkQsc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMsNkJBQTZCO0FBQ2pDOzs7QUFHQSxjQUFjOzs7QUFFZDtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOzs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCxrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxpQ0FBd0M7SUFDeEMsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix3Q0FBd0M7SUFDeEMscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwyQ0FBMkM7QUFDL0M7OztBQUdBLCtDQUErQzs7O0FBRS9DO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOzs7QUFHQSxrQkFBa0I7OztBQUVsQjs7O0lBR0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7OztBQUdBLGVBQWU7OztBQUVmO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSjs7O0FBR0EscUJBQXFCOzs7QUFFckI7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiwyREFBMkQ7SUFDM0QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDJEQUEyRDtJQUMzRCxZQUFZO0FBQ2hCOzs7QUFHQSx5QkFBeUI7OztBQUV6QjtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUdBLHNCQUFzQjs7O0FBRXRCO0lBQ0ksOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0FBQ3BDOzs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIseUNBQXlDO0FBQzdDOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDBCQUEwQjtBQUM5Qjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUI7OztBQUVBO0lBQ0ksTUFBTTtJQUNOLE9BQU87QUFDWDs7O0FBRUE7SUFDSSxNQUFNO0lBQ04sUUFBUTtBQUNaOzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0FBQ1o7OztBQUVBO0lBQ0ksU0FBUztJQUNULE9BQU87QUFDWCIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZPTEhBUyBERSBFU1RJTE8gR0xPQkFJUyAtIEFmZXRhbSB0b2RhIGEgYXBsaWNhw6fDo28uICovXHJcblxyXG5cclxuLyogQ29yZXMgZG8gdGVtYSAqL1xyXG5cclxuOnJvb3Qge1xyXG4gICAgLS1jb2xvci0xOiByZ2IoMCwgMjU1LCAwKTtcclxuICAgIC0tY29sb3ItMjogcmdiKDAsIDI0MCwgMCk7XHJcbiAgICAtLWNvbG9yLTM6IHJnYigwLCAyMjQsIDApO1xyXG4gICAgLS1jb2xvci00OiByZ2IoMCwgMTkyLCAwKTtcclxuICAgIC0tY29sb3ItNTogcmdiKDAsIDEyOCwgMCk7XHJcbiAgICAtLWNvbG9yLTY6IHJnYigwLCA2NCwgMCk7XHJcbiAgICAtLWNvbG9yLTc6IHJnYigwLCAzMiwgMCk7XHJcbiAgICAtLWNvbG9yLTg6IHJnYigwLCAxNiwgMCk7XHJcbiAgICAtLWxpbmstaG92ZXI6IG9yYW5nZXJlZDtcclxuICAgIC0tYm94LWJvcmRlci1weDogMnB4O1xyXG4gICAgLS1ib3gtYm9yZGVyLXRpazogOHB4O1xyXG4gICAgLS1ib3gtYm9yZGVyOiB2YXIoLS1ib3gtYm9yZGVyLXB4KSBzb2xpZCB2YXIoLS1jb2xvci0xKTtcclxuICAgIC0taGVhZC1uYXYtZm9vdC1iZzogcmdiYSgwLCA2NCwgMCwgLjUpO1xyXG4gICAgLS1tYWluLWJnOiByZ2JhKDAsIDMyLCAwLCAuOSk7XHJcbiAgICAtLW1lbnUtZHJvcC1iZzogcmdiYSgwLCA2NCwgMCwgLjkpO1xyXG4gICAgLS1saXN0LWJnOiByZ2JhKDAsIDk2LCAwLCAuNSk7XHJcbn1cclxuXHJcblxyXG4vKiBDU1MgcmVzZXQgKi9cclxuXHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb21pYyBOZXVlJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9iZzAxLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0xKTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItMSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWNvbG9yLTEpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1saW5rLWhvdmVyKTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0tbGluay1ob3Zlcik7XHJcbn1cclxuXHJcblxyXG4vKiBDZW50cmFsaXphIGUgbGltaXRhIG8gY3Jlc2NpbWVudG8gZGEgdGVsYS4gKi9cclxuXHJcbmFwcC1yb290IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuXHJcbi8qIFN0aWNreSBmb290ZXIgKi9cclxuXHJcbmh0bWwsXHJcbmJvZHksXHJcbmFwcC1yb290IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8qIFJlc3BvbnNpdm8gKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogQm90w7VlcyBnZW7DqXJpY29zICovXHJcblxyXG4uYmFzaWMtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItOCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tY29sb3ItMiksIHZhcigtLWNvbG9yLTQpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDByZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uYmFzaWMtYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0xKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1jb2xvci01KSwgdmFyKC0tY29sb3ItNykpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5cclxuLyogQ2xhc3NlcyBkZSB1c28gZ2VyYWwgKi9cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc21hbGwge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuXHJcbi8qIEJvcmRhcyBkYXMgY2FpeGFzICovXHJcblxyXG4uaGJvcmRlciB7XHJcbiAgICBib3JkZXItbGVmdDogdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWJveC1ib3JkZXIpO1xyXG59XHJcblxyXG4udmJvcmRlciB7XHJcbiAgICBib3JkZXItdG9wOiB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJveC1ib3JkZXIpO1xyXG59XHJcblxyXG4uaGJvcmRlcixcclxuLnZib3JkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAuNyk7XHJcbn1cclxuXHJcbi5oYmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IHZhcigtLWJveC1ib3JkZXItdGlrKTtcclxuICAgIGhlaWdodDogdmFyKC0tYm94LWJvcmRlci1weCk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xKTtcclxufVxyXG5cclxuLnZiZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWJveC1ib3JkZXItdGlrKTtcclxuICAgIHdpZHRoOiB2YXIoLS1ib3gtYm9yZGVyLXB4KTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTEpO1xyXG59XHJcblxyXG4udGwge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLnRyIHtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uYnIge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5ibCB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projetos Angular\myGames-dev-2\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map