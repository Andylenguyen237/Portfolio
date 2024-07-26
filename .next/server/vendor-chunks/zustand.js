"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/zustand";
exports.ids = ["vendor-chunks/zustand"];
exports.modules = {

/***/ "(ssr)/./node_modules/zustand/esm/index.js":
/*!*******************************************!*\
  !*** ./node_modules/zustand/esm/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ create)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction createStore(createState) {\n  let state;\n  const listeners = /* @__PURE__ */ new Set();\n  const setState = (partial, replace) => {\n    const nextState = typeof partial === \"function\" ? partial(state) : partial;\n    if (nextState !== state) {\n      const previousState = state;\n      state = replace ? nextState : Object.assign({}, state, nextState);\n      listeners.forEach((listener) => listener(state, previousState));\n    }\n  };\n  const getState = () => state;\n  const subscribeWithSelector = (listener, selector = getState, equalityFn = Object.is) => {\n    console.warn(\"[DEPRECATED] Please use `subscribeWithSelector` middleware\");\n    let currentSlice = selector(state);\n    function listenerToAdd() {\n      const nextSlice = selector(state);\n      if (!equalityFn(currentSlice, nextSlice)) {\n        const previousSlice = currentSlice;\n        listener(currentSlice = nextSlice, previousSlice);\n      }\n    }\n    listeners.add(listenerToAdd);\n    return () => listeners.delete(listenerToAdd);\n  };\n  const subscribe = (listener, selector, equalityFn) => {\n    if (selector || equalityFn) {\n      return subscribeWithSelector(listener, selector, equalityFn);\n    }\n    listeners.add(listener);\n    return () => listeners.delete(listener);\n  };\n  const destroy = () => listeners.clear();\n  const api = { setState, getState, subscribe, destroy };\n  state = createState(setState, getState, api);\n  return api;\n}\n\nconst isSSR = typeof window === \"undefined\" || !window.navigator || /ServerSideRendering|^Deno\\//.test(window.navigator.userAgent);\nconst useIsomorphicLayoutEffect = isSSR ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;\nfunction create(createState) {\n  const api = typeof createState === \"function\" ? createStore(createState) : createState;\n  const useStore = (selector = api.getState, equalityFn = Object.is) => {\n    const [, forceUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((c) => c + 1, 0);\n    const state = api.getState();\n    const stateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state);\n    const selectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(selector);\n    const equalityFnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(equalityFn);\n    const erroredRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n    const currentSliceRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    if (currentSliceRef.current === void 0) {\n      currentSliceRef.current = selector(state);\n    }\n    let newStateSlice;\n    let hasNewStateSlice = false;\n    if (stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || erroredRef.current) {\n      newStateSlice = selector(state);\n      hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);\n    }\n    useIsomorphicLayoutEffect(() => {\n      if (hasNewStateSlice) {\n        currentSliceRef.current = newStateSlice;\n      }\n      stateRef.current = state;\n      selectorRef.current = selector;\n      equalityFnRef.current = equalityFn;\n      erroredRef.current = false;\n    });\n    const stateBeforeSubscriptionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state);\n    useIsomorphicLayoutEffect(() => {\n      const listener = () => {\n        try {\n          const nextState = api.getState();\n          const nextStateSlice = selectorRef.current(nextState);\n          if (!equalityFnRef.current(currentSliceRef.current, nextStateSlice)) {\n            stateRef.current = nextState;\n            currentSliceRef.current = nextStateSlice;\n            forceUpdate();\n          }\n        } catch (error) {\n          erroredRef.current = true;\n          forceUpdate();\n        }\n      };\n      const unsubscribe = api.subscribe(listener);\n      if (api.getState() !== stateBeforeSubscriptionRef.current) {\n        listener();\n      }\n      return unsubscribe;\n    }, []);\n    const sliceToReturn = hasNewStateSlice ? newStateSlice : currentSliceRef.current;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(sliceToReturn);\n    return sliceToReturn;\n  };\n  Object.assign(useStore, api);\n  useStore[Symbol.iterator] = function() {\n    console.warn(\"[useStore, api] = create() is deprecated and will be removed in v4\");\n    const items = [useStore, api];\n    return {\n      next() {\n        const done = items.length <= 0;\n        return { value: items.shift(), done };\n      }\n    };\n  };\n  return useStore;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNGOztBQUV0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsNENBQVMsR0FBRyxrREFBZTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQVU7QUFDdEM7QUFDQSxxQkFBcUIsNkNBQU07QUFDM0Isd0JBQXdCLDZDQUFNO0FBQzlCLDBCQUEwQiw2Q0FBTTtBQUNoQyx1QkFBdUIsNkNBQU07QUFDN0IsNEJBQTRCLDZDQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdUNBQXVDLDZDQUFNO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUksb0RBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy96dXN0YW5kL2VzbS9pbmRleC5qcz9mOTcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZHVjZXIsIHVzZVJlZiwgdXNlRGVidWdWYWx1ZSwgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKGNyZWF0ZVN0YXRlKSB7XG4gIGxldCBzdGF0ZTtcbiAgY29uc3QgbGlzdGVuZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgY29uc3Qgc2V0U3RhdGUgPSAocGFydGlhbCwgcmVwbGFjZSkgPT4ge1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHR5cGVvZiBwYXJ0aWFsID09PSBcImZ1bmN0aW9uXCIgPyBwYXJ0aWFsKHN0YXRlKSA6IHBhcnRpYWw7XG4gICAgaWYgKG5leHRTdGF0ZSAhPT0gc3RhdGUpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzU3RhdGUgPSBzdGF0ZTtcbiAgICAgIHN0YXRlID0gcmVwbGFjZSA/IG5leHRTdGF0ZSA6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXh0U3RhdGUpO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihzdGF0ZSwgcHJldmlvdXNTdGF0ZSkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiBzdGF0ZTtcbiAgY29uc3Qgc3Vic2NyaWJlV2l0aFNlbGVjdG9yID0gKGxpc3RlbmVyLCBzZWxlY3RvciA9IGdldFN0YXRlLCBlcXVhbGl0eUZuID0gT2JqZWN0LmlzKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFwiW0RFUFJFQ0FURURdIFBsZWFzZSB1c2UgYHN1YnNjcmliZVdpdGhTZWxlY3RvcmAgbWlkZGxld2FyZVwiKTtcbiAgICBsZXQgY3VycmVudFNsaWNlID0gc2VsZWN0b3Ioc3RhdGUpO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyVG9BZGQoKSB7XG4gICAgICBjb25zdCBuZXh0U2xpY2UgPSBzZWxlY3RvcihzdGF0ZSk7XG4gICAgICBpZiAoIWVxdWFsaXR5Rm4oY3VycmVudFNsaWNlLCBuZXh0U2xpY2UpKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzU2xpY2UgPSBjdXJyZW50U2xpY2U7XG4gICAgICAgIGxpc3RlbmVyKGN1cnJlbnRTbGljZSA9IG5leHRTbGljZSwgcHJldmlvdXNTbGljZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXJUb0FkZCk7XG4gICAgcmV0dXJuICgpID0+IGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXJUb0FkZCk7XG4gIH07XG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lciwgc2VsZWN0b3IsIGVxdWFsaXR5Rm4pID0+IHtcbiAgICBpZiAoc2VsZWN0b3IgfHwgZXF1YWxpdHlGbikge1xuICAgICAgcmV0dXJuIHN1YnNjcmliZVdpdGhTZWxlY3RvcihsaXN0ZW5lciwgc2VsZWN0b3IsIGVxdWFsaXR5Rm4pO1xuICAgIH1cbiAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gKCkgPT4gbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG4gIH07XG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiBsaXN0ZW5lcnMuY2xlYXIoKTtcbiAgY29uc3QgYXBpID0geyBzZXRTdGF0ZSwgZ2V0U3RhdGUsIHN1YnNjcmliZSwgZGVzdHJveSB9O1xuICBzdGF0ZSA9IGNyZWF0ZVN0YXRlKHNldFN0YXRlLCBnZXRTdGF0ZSwgYXBpKTtcbiAgcmV0dXJuIGFwaTtcbn1cblxuY29uc3QgaXNTU1IgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIHx8ICF3aW5kb3cubmF2aWdhdG9yIHx8IC9TZXJ2ZXJTaWRlUmVuZGVyaW5nfF5EZW5vXFwvLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbmNvbnN0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBpc1NTUiA/IHVzZUVmZmVjdCA6IHVzZUxheW91dEVmZmVjdDtcbmZ1bmN0aW9uIGNyZWF0ZShjcmVhdGVTdGF0ZSkge1xuICBjb25zdCBhcGkgPSB0eXBlb2YgY3JlYXRlU3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IGNyZWF0ZVN0b3JlKGNyZWF0ZVN0YXRlKSA6IGNyZWF0ZVN0YXRlO1xuICBjb25zdCB1c2VTdG9yZSA9IChzZWxlY3RvciA9IGFwaS5nZXRTdGF0ZSwgZXF1YWxpdHlGbiA9IE9iamVjdC5pcykgPT4ge1xuICAgIGNvbnN0IFssIGZvcmNlVXBkYXRlXSA9IHVzZVJlZHVjZXIoKGMpID0+IGMgKyAxLCAwKTtcbiAgICBjb25zdCBzdGF0ZSA9IGFwaS5nZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHN0YXRlUmVmID0gdXNlUmVmKHN0YXRlKTtcbiAgICBjb25zdCBzZWxlY3RvclJlZiA9IHVzZVJlZihzZWxlY3Rvcik7XG4gICAgY29uc3QgZXF1YWxpdHlGblJlZiA9IHVzZVJlZihlcXVhbGl0eUZuKTtcbiAgICBjb25zdCBlcnJvcmVkUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBjdXJyZW50U2xpY2VSZWYgPSB1c2VSZWYoKTtcbiAgICBpZiAoY3VycmVudFNsaWNlUmVmLmN1cnJlbnQgPT09IHZvaWQgMCkge1xuICAgICAgY3VycmVudFNsaWNlUmVmLmN1cnJlbnQgPSBzZWxlY3RvcihzdGF0ZSk7XG4gICAgfVxuICAgIGxldCBuZXdTdGF0ZVNsaWNlO1xuICAgIGxldCBoYXNOZXdTdGF0ZVNsaWNlID0gZmFsc2U7XG4gICAgaWYgKHN0YXRlUmVmLmN1cnJlbnQgIT09IHN0YXRlIHx8IHNlbGVjdG9yUmVmLmN1cnJlbnQgIT09IHNlbGVjdG9yIHx8IGVxdWFsaXR5Rm5SZWYuY3VycmVudCAhPT0gZXF1YWxpdHlGbiB8fCBlcnJvcmVkUmVmLmN1cnJlbnQpIHtcbiAgICAgIG5ld1N0YXRlU2xpY2UgPSBzZWxlY3RvcihzdGF0ZSk7XG4gICAgICBoYXNOZXdTdGF0ZVNsaWNlID0gIWVxdWFsaXR5Rm4oY3VycmVudFNsaWNlUmVmLmN1cnJlbnQsIG5ld1N0YXRlU2xpY2UpO1xuICAgIH1cbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChoYXNOZXdTdGF0ZVNsaWNlKSB7XG4gICAgICAgIGN1cnJlbnRTbGljZVJlZi5jdXJyZW50ID0gbmV3U3RhdGVTbGljZTtcbiAgICAgIH1cbiAgICAgIHN0YXRlUmVmLmN1cnJlbnQgPSBzdGF0ZTtcbiAgICAgIHNlbGVjdG9yUmVmLmN1cnJlbnQgPSBzZWxlY3RvcjtcbiAgICAgIGVxdWFsaXR5Rm5SZWYuY3VycmVudCA9IGVxdWFsaXR5Rm47XG4gICAgICBlcnJvcmVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25zdCBzdGF0ZUJlZm9yZVN1YnNjcmlwdGlvblJlZiA9IHVzZVJlZihzdGF0ZSk7XG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSBhcGkuZ2V0U3RhdGUoKTtcbiAgICAgICAgICBjb25zdCBuZXh0U3RhdGVTbGljZSA9IHNlbGVjdG9yUmVmLmN1cnJlbnQobmV4dFN0YXRlKTtcbiAgICAgICAgICBpZiAoIWVxdWFsaXR5Rm5SZWYuY3VycmVudChjdXJyZW50U2xpY2VSZWYuY3VycmVudCwgbmV4dFN0YXRlU2xpY2UpKSB7XG4gICAgICAgICAgICBzdGF0ZVJlZi5jdXJyZW50ID0gbmV4dFN0YXRlO1xuICAgICAgICAgICAgY3VycmVudFNsaWNlUmVmLmN1cnJlbnQgPSBuZXh0U3RhdGVTbGljZTtcbiAgICAgICAgICAgIGZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGVycm9yZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXBpLnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgICBpZiAoYXBpLmdldFN0YXRlKCkgIT09IHN0YXRlQmVmb3JlU3Vic2NyaXB0aW9uUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgbGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bnN1YnNjcmliZTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3Qgc2xpY2VUb1JldHVybiA9IGhhc05ld1N0YXRlU2xpY2UgPyBuZXdTdGF0ZVNsaWNlIDogY3VycmVudFNsaWNlUmVmLmN1cnJlbnQ7XG4gICAgdXNlRGVidWdWYWx1ZShzbGljZVRvUmV0dXJuKTtcbiAgICByZXR1cm4gc2xpY2VUb1JldHVybjtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih1c2VTdG9yZSwgYXBpKTtcbiAgdXNlU3RvcmVbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUud2FybihcIlt1c2VTdG9yZSwgYXBpXSA9IGNyZWF0ZSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2NFwiKTtcbiAgICBjb25zdCBpdGVtcyA9IFt1c2VTdG9yZSwgYXBpXTtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dCgpIHtcbiAgICAgICAgY29uc3QgZG9uZSA9IGl0ZW1zLmxlbmd0aCA8PSAwO1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogaXRlbXMuc2hpZnQoKSwgZG9uZSB9O1xuICAgICAgfVxuICAgIH07XG4gIH07XG4gIHJldHVybiB1c2VTdG9yZTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand/esm/index.js\n");

/***/ })

};
;