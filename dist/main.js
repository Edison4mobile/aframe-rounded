/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/rounded.js":
/*!************************!*\
  !*** ./lib/rounded.js ***!
  \************************/
/***/ (() => {

eval("AFRAME.registerComponent('rounded', {\n  schema: {\n    enabled: {default: true},\n    width: {type: 'number', default: 1},\n    height: {type: 'number', default: 1},\n    radius: {type: 'number', default: 0.3},\n    topLeftRadius: {type: 'number', default: -1},\n    topRightRadius: {type: 'number', default: -1},\n    bottomLeftRadius: {type: 'number', default: -1},\n    bottomRightRadius: {type: 'number', default: -1},\n    color: {type: 'color', default: \"#F0F0F0\"},\n    opacity: {type: 'number', default: 1}\n  },\n  init: function () {\n    this.rounded = new THREE.Mesh( this.draw(), new THREE.MeshPhongMaterial( { color: new THREE.Color(this.data.color), side: THREE.DoubleSide } ) );\n    this.updateOpacity();\n    this.el.setObject3D('mesh', this.rounded)\n  },\n  update: function () {\n    if (this.data.enabled) {\n      if (this.rounded) {\n        this.rounded.visible = true;\n        this.rounded.geometry = this.draw();\n        this.rounded.material.color = new THREE.Color(this.data.color);\n        this.updateOpacity();\n      }\n    } else {\n      this.rounded.visible = false;\n    }\n  },\n  updateOpacity: function() {\n    if (this.data.opacity < 0) { this.data.opacity = 0; }\n    if (this.data.opacity > 1) { this.data.opacity = 1; }\n    if (this.data.opacity < 1) {\n      this.rounded.material.transparent = true;\n    } else {\n      this.rounded.material.transparent = false;\n    }\n    this.rounded.material.opacity = this.data.opacity;\n  },\n  tick: function () {},\n  remove: function () {\n    if (!this.rounded) { return; }\n    this.el.object3D.remove( this.rounded );\n    this.rounded = null;\n  },\n  draw: function() {\n    var roundedRectShape = new THREE.Shape();\n    function roundedRect( ctx, x, y, width, height, topLeftRadius, topRightRadius, bottomLeftRadius, bottomRightRadius ) {\n      if (!topLeftRadius) { topLeftRadius = 0.00001; }\n      if (!topRightRadius) { topRightRadius = 0.00001; }\n      if (!bottomLeftRadius) { bottomLeftRadius = 0.00001; }\n      if (!bottomRightRadius) { bottomRightRadius = 0.00001; }\n      ctx.moveTo( x, y + topLeftRadius );\n      ctx.lineTo( x, y + height - topLeftRadius );\n      ctx.quadraticCurveTo( x, y + height, x + topLeftRadius, y + height );\n      ctx.lineTo( x + width - topRightRadius, y + height );\n      ctx.quadraticCurveTo( x + width, y + height, x + width, y + height - topRightRadius );\n      ctx.lineTo( x + width, y + bottomRightRadius );\n      ctx.quadraticCurveTo( x + width, y, x + width - bottomRightRadius, y );\n      ctx.lineTo( x + bottomLeftRadius, y );\n      ctx.quadraticCurveTo( x, y, x, y + bottomLeftRadius );\n    }\n\n    var corners = [this.data.radius, this.data.radius, this.data.radius, this.data.radius];\n    if (this.data.topLeftRadius != -1) { corners[0] = this.data.topLeftRadius; }\n    if (this.data.topRightRadius != -1) { corners[1] = this.data.topRightRadius; }\n    if (this.data.bottomLeftRadius != -1) { corners[2] = this.data.bottomLeftRadius; }\n    if (this.data.bottomRightRadius != -1) { corners[3] = this.data.bottomRightRadius; }\n\n    roundedRect( roundedRectShape, 0, 0, this.data.width, this.data.height, corners[0], corners[1], corners[2], corners[3] );\n    return new THREE.BufferGeometry( roundedRectShape );\n  },\n  pause: function () {},\n  play: function () {}\n});\n\nAFRAME.registerPrimitive('a-rounded', {\n  defaultComponents: {\n    rounded: {}\n  },\n  mappings: {\n    enabled: 'rounded.enabled',\n    width: 'rounded.width',\n    height: 'rounded.height',\n    radius: 'rounded.radius',\n    'top-left-radius': 'rounded.topLeftRadius',\n    'top-right-radius': 'rounded.topRightRadius',\n    'bottom-left-radius': 'rounded.bottomLeftRadius',\n    'bottom-right-radius': 'rounded.bottomRightRadius',\n    color: 'rounded.color',\n    opacity: 'rounded.opacity'\n  }\n});\n\n\n//# sourceURL=webpack://aframe-round/./lib/rounded.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./lib/rounded.js"]();
/******/ 	
/******/ })()
;