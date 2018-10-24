/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pack/TestButtons.js":
/*!*****************************!*\
  !*** ./pack/TestButtons.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



px.import({  scene: 'px:scene.1.js',
              keys: 'px:tools.keys.js',
              button: 'textButton.js',
              button22: 'textButton22.js'
            }).then( function importsAreReady(imports)
{
  module.exports.wantsClearscreen = function() 
  {
    return false; // skip clearscreen by framework... using opaque bg.
  };

  var scene = imports.scene;
  var root  = scene.root;
  var keys  = imports.keys;

  scene.keys = keys; // add to scene

  const TextButton = imports.button;
  const TextButton22 = imports.button22;

  var bg = scene.create({ t: "rect", parent: root, fillColor: "#999", x: 0, y: 0, w:  800, h: 600, interactive: false }); 

  var buttonsArray = [];
  var buttonsObj = scene.create({ t: "object", parent: bg, x: 100, y: 250, w: (200*3 + 50*2), h: 60 });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // BUTTON 1
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  function onClick1CB() { console.log("CLICKY 1"); };

  var params = { parent: buttonsObj, id: "Button 1", text: "Button 1",
                      w: 200, h: 60, rx: 9, ry: 9, x: 0, y: 0,
                    fill: "#777", fillFocus: "#090", onClick: onClick1CB }; 

  params.id = "Button 1";
  params.x  = 0;

  buttonsArray.push( new TextButton(scene, params) );

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // BUTTON 2
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  function onClick2CB() { console.log("CLICKY 2"); };

  params.id = "Button 2";
  params.x += params.w + 50;

  params.text    = "Button 2";
  params.onClick = onClick2CB;

  buttonsArray.push( new TextButton22(scene, params) );

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // BUTTON 3
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  function onClick3CB() { console.log("CLICKY 3"); };

  params.id = "Button 3";
  params.x += params.w + 50;

  params.pixelSize = 30;

  delete params.rx; // Lets have Square corners
  delete params.ry; // Lets have Square corners

  params.text    = "Button 3";
  params.onClick = onClick3CB;

  buttonsArray.push( new TextButton(scene, params) );
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  var buttons_ready = buttonsArray.map( o => o.ready); // collect promises

  Promise.all( buttons_ready ).then( function(o)
  {
      buttonsArray.cx = buttonsArray.w/2;
      buttonsArray.cy = buttonsArray.h/2;
  });

  //var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var date = new Date();
  //var str = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear(); 

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  buttonsArray[0].focus = true;

  var buttonIndex = 0;
  buttonsObj.on("onKeyDown", function(e)
  {
    if (e.keyCode == keys.LEFT || e.keyCode == keys.RIGHT)
    {
      buttonsArray[buttonIndex].focus = false;

      // Handle LEFT (-1) / RIGHT (+1) index update...
      buttonIndex += (e.keyCode == keys.LEFT) ? -1 : 1;
      buttonIndex = ( buttonIndex % buttonsArray.length);

      buttonsArray[buttonIndex].focus = true;
    }
  });

  var font     = scene.create({ t: "fontResource", url: "FreeSans.ttf" });
  var infoText = scene.create({t:"textBox", x: (scene.w - 900)/2, y: 400, w: 900,h: 60, parent: root,
                    pixelSize: 35, textColor:"#fff", font: font,
                    text:  "Use the ARROW keys to move focus LEFT / RIGHT",
                    alignVertical:   scene.alignVertical.CENTER,
                    alignHorizontal: scene.alignHorizontal.CENTER});
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function updateSize(w, h)
    {
      bg.w = w;
      bg.h = h;

      buttonsObj.x = (w - buttonsObj.w)/2;
      infoText.x   = (w - infoText.w)/2;
    }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  scene.on("onResize", function(e) {  updateSize(e.w, e.h); });

  updateSize(scene.w, scene.h);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).catch(function importFailed(err){
  console.error("Import failed for testCard.js: " + err);
});

/***/ }),

/***/ "./pack/textButton.js":
/*!****************************!*\
  !*** ./pack/textButton.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function TextButton(scene, params)
{
    const DURATION = .5;
    const EASING = scene.animation.EASE_OUT_ELASTIC

    if( scene.keys == null)
    {
        this._ready = Promise.reject("Oh NO ... No KEYS provided in scene.");

        return this;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // READY
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._ready = null;
    Object.defineProperty(this, "ready",
    {
        get: function ()    { return this._ready; },
    });

    if( scene.capabilities              == undefined ||
        scene.capabilities.graphics     == undefined ||
        scene.capabilities.graphics.svg == undefined)
    {
        this._ready = Promise.reject("Oh NO ... SVG is not supported in this build.");

        return this;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // PARENT
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._parent = (params && params.parent) ? params.parent : null;
    Object.defineProperty(this, "parent",
    {
        set: function (val) { this._parent = val;  rootObj.parent = this._parent; },
        get: function ()    { return this._parent; },
    });

    if( this._parent == null)
    {
        this._ready = Promise.reject("Oh NO ... No Parent provided.");

        return this;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // ID
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._id = (params && params.id) ? params.id : "rootObj";
    Object.defineProperty(this, "id",
    {
        set: function (val) { this._id = val;  },
        get: function ()    { return this._id; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // ALPHA
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._a = (params && params.a) ? params.a : 0;
    Object.defineProperty(this, "a",
    {
        set: function (val) { this._a = val;  rootObj.a = this._a; },
        get: function ()    { return this._a; },
    });
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // POSITION
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._x = (params && params.x) ? params.x : 0;
    Object.defineProperty(this, "x",
    {
        set: function (val) { this._x = val;  rootObj.x = this._x; },
        get: function ()    { return this._x; },
    });

    this._y = (params && params.y) ? params.y : 0;
    Object.defineProperty(this, "y",
    {
        set: function (val) { this._y = val;  rootObj.y = this._y; },
        get: function ()    { return this._y; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // DIMENSION
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._w = (params && params.w) ? params.w : 100;
    Object.defineProperty(this, "w",
    {
        set: function (val) { this._w = val;  },
        get: function ()    { return this._w; },
    });

    this._h = (params && params.h) ? params.h : 60;
    Object.defineProperty(this, "h",
    {
        set: function (val) { this._h = val;  },
        get: function ()    { return this._h; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // CORNER RADIUS
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._rx = (params && params.rx) ? params.rx : 0;
    Object.defineProperty(this, "rx",
    {
        set: function (val) { this._rx = val;  },
        get: function ()    { return this._rx; },
    });

    this._ry = (params && params.ry) ? params.ry : 0;
    Object.defineProperty(this, "ry",
    {
        set: function (val) { this._ry = val;  },
        get: function ()    { return this._ry; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // FILL
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._fill = (params && params.fill) ? params.fill : "#f0f";
    Object.defineProperty(this, "fill",
    {
        set: function (val) { this._fill = val;  },
        get: function ()    { return this._fill; },
    });


    this._fillFocus = (params && params.fillFocus) ? params.fillFocus : "#f0f";
    Object.defineProperty(this, "fillFocus",
    {
        set: function (val) { this._fillFocus = val;  },
        get: function ()    { return this._fillFocus; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // FOCUS
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Object.defineProperty(this, "focus",
    {
        set: function (val) { this.rootObj.focus = val;  },
        get: function ()    { return this.rootObj.focus; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // TEXT
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._text = (params && params.text) ? params.text : "";
    Object.defineProperty(this, "text",
    {
        set: function (val) { this._text = val;  },
        get: function ()    { return this._text; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // POINT SIZE
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._pixelSize = (params && params.pixelSize) ? params.pixelSize : 25;
    Object.defineProperty(this, "pixelSize",
    {
        set: function (val) { this._pixelSize = val;  },
        get: function ()    { return this._pixelSize; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // FONT
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    function isObject(val) {
        if (val === null) { return false;}
        return ( (typeof val === 'function') || (typeof val === 'object') );
    }

    this._font = (params && params.font && isObject(params.font) ) ? params.font : 
                    scene.create({ t: "fontResource", url: "FreeSans.ttf" });

    Object.defineProperty(this, "font",
    {
        set: function (val) { this._font = val;  },
        get: function ()    { return this._font; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // ON-CLICK
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._onClick = (params && params.onClick) ? params.onClick : null;
    Object.defineProperty(this, "onClick",
    {
        set: function (val) { this._onClick = val;  },
        get: function ()    { return this._onClick; },
    });
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    let ww = this._w;  // WxH of the component
    let hh = this._h;

    let xx = this._x;
    let yy = this._y;

    let rx = this._rx;
    let ry = this._ry;

    let fill = this._fill;
    let fillFocus = this._fillFocus

    this.rootObj = scene.create({ id: this._id, t: "object", parent: this._parent, x: xx, y: yy, w: ww, h: hh });

    var rootObj = this.rootObj; // alias

    var rounded = ((rx !== undefined) && (ry !== undefined)) ?  // optional Rounded Corners
                        (' rx="'+rx+'" ry="'+ry ): ''

    const normalSVG = 'data:image/svg,<svg width="'+ww+'px" height="'+hh+'px">'+
                        '<rect fill="'+fill+'" stroke="none" stroke-width="0"'+
                        rounded+' "width="'+ww+'" height="'+hh+'"/></svg>'

    const focusSVG  = 'data:image/svg,<svg width="'+ww+'px" height="'+hh+'px">'+
                        '<rect fill="'+fillFocus+'" stroke="none" stroke-width="0"'+
                        rounded+'" width="'+ww+'" height="'+hh+'"/></svg>'

    this.normalRes = scene.create({ t: "imageResource", url: normalSVG });
    this.focusRes  = scene.create({ t: "imageResource", url: focusSVG  });

    let normalRes  = this.normalRes; // alias
    let focusRes   = this.focusRes;  // alias

    this.buttonImg = scene.create({ t: "image", parent: rootObj, w: ww, h: hh,
        resource: normalRes, interactive: false });

    let buttonImg = this.buttonImg; // alias

    this.label = scene.create({t:"textBox",w: ww,h: hh, parent: rootObj,
        pixelSize: this._pixelSize, textColor:"#fff", font: this._font, text:  this._text,
        alignVertical:   scene.alignVertical.CENTER,
        alignHorizontal: scene.alignHorizontal.CENTER});

    let assets = [rootObj.ready, normalRes.ready, focusRes.ready, buttonImg.ready, this.label.ready ];

    this._ready = Promise.all( assets ).then( function(o)
    {
        rootObj.cx = ww/2;
        rootObj.cy = hh/2;
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    var scaleX = 1.1;
    var scaleY = 1.1;

    var self = this;

    function doMouseDown()
    {
        return rootObj.animateTo({ sx: scaleX, sy: scaleY }, DURATION, EASING);
    }

    function doMouseUp()
    {
        return rootObj.animateTo({ sx: 1, sy: 1 }, DURATION, EASING).then( (o) =>
        {
            if(self._onClick)
            {
                self._onClick(); // TODO: make async ?
            }
        } )
    }

    rootObj.on('onMouseDown', doMouseDown);
    rootObj.on('onMouseUp',   doMouseUp);

    rootObj.on('onFocus', function()
    {
        buttonImg.resource    = self.focusRes;
        buttonImg.interactive = true;
    });

    rootObj.on('onBlur', function()
    {
        buttonImg.resource    = self.normalRes;
        buttonImg.interactive = false;
    });

    rootObj.on('onKeyDown', function(e)
    {
        if(e.keyCode == scene.keys.ENTER) // TODO: hardcode for this one value ?
        {
            doMouseDown().then(doMouseUp);
        }
    });
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports = TextButton;


/***/ }),

/***/ "./pack/textButton22.js":
/*!******************************!*\
  !*** ./pack/textButton22.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function TextButton22(scene, params)
{
    const DURATION = .5;
    const EASING = scene.animation.EASE_OUT_ELASTIC

    if( scene.keys == null)
    {
        this._ready = Promise.reject("Oh NO ... No KEYS provided in scene.");

        return this;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // READY
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._ready = null;
    Object.defineProperty(this, "ready",
    {
        get: function ()    { return this._ready; },
    });

    if( scene.capabilities              == undefined ||
        scene.capabilities.graphics     == undefined ||
        scene.capabilities.graphics.svg == undefined)
    {
        this._ready = Promise.reject("Oh NO ... SVG is not supported in this build.");

        return this;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // PARENT
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._parent = (params && params.parent) ? params.parent : null;
    Object.defineProperty(this, "parent",
    {
        set: function (val) { this._parent = val;  rootObj.parent = this._parent; },
        get: function ()    { return this._parent; },
    });

    if( this._parent == null)
    {
        this._ready = Promise.reject("Oh NO ... No Parent provided.");

        return this;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // ID
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._id = (params && params.id) ? params.id : "rootObj";
    Object.defineProperty(this, "id",
    {
        set: function (val) { this._id = val;  },
        get: function ()    { return this._id; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // ALPHA
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._a = (params && params.a) ? params.a : 0;
    Object.defineProperty(this, "a",
    {
        set: function (val) { this._a = val;  rootObj.a = this._a; },
        get: function ()    { return this._a; },
    });
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // POSITION
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._x = (params && params.x) ? params.x : 0;
    Object.defineProperty(this, "x",
    {
        set: function (val) { this._x = val;  rootObj.x = this._x; },
        get: function ()    { return this._x; },
    });

    this._y = (params && params.y) ? params.y : 0;
    Object.defineProperty(this, "y",
    {
        set: function (val) { this._y = val;  rootObj.y = this._y; },
        get: function ()    { return this._y; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // DIMENSION
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._w = (params && params.w) ? params.w : 100;
    Object.defineProperty(this, "w",
    {
        set: function (val) { this._w = val;  },
        get: function ()    { return this._w; },
    });

    this._h = (params && params.h) ? params.h : 60;
    Object.defineProperty(this, "h",
    {
        set: function (val) { this._h = val;  },
        get: function ()    { return this._h; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // CORNER RADIUS
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._rx = (params && params.rx) ? params.rx : 0;
    Object.defineProperty(this, "rx",
    {
        set: function (val) { this._rx = val;  },
        get: function ()    { return this._rx; },
    });

    this._ry = (params && params.ry) ? params.ry : 0;
    Object.defineProperty(this, "ry",
    {
        set: function (val) { this._ry = val;  },
        get: function ()    { return this._ry; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // FILL
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._fill = (params && params.fill) ? params.fill : "#f0f";
    Object.defineProperty(this, "fill",
    {
        set: function (val) { this._fill = val;  },
        get: function ()    { return this._fill; },
    });


    this._fillFocus = (params && params.fillFocus) ? params.fillFocus : "#f0f";
    Object.defineProperty(this, "fillFocus",
    {
        set: function (val) { this._fillFocus = val;  },
        get: function ()    { return this._fillFocus; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // FOCUS
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Object.defineProperty(this, "focus",
    {
        set: function (val) { this.rootObj.focus = val;  },
        get: function ()    { return this.rootObj.focus; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // TEXT
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._text = (params && params.text) ? params.text + " 22" : "";
    Object.defineProperty(this, "text",
    {
        set: function (val) { this._text = val + " 22";  },
        get: function ()    { return this._text; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // POINT SIZE
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._pixelSize = (params && params.pixelSize) ? params.pixelSize : 25;
    Object.defineProperty(this, "pixelSize",
    {
        set: function (val) { this._pixelSize = val;  },
        get: function ()    { return this._pixelSize; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // FONT
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    function isObject(val) {
        if (val === null) { return false;}
        return ( (typeof val === 'function') || (typeof val === 'object') );
    }

    this._font = (params && params.font && isObject(params.font) ) ? params.font : 
                    scene.create({ t: "fontResource", url: "FreeSans.ttf" });

    Object.defineProperty(this, "font",
    {
        set: function (val) { this._font = val;  },
        get: function ()    { return this._font; },
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // ON-CLICK
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    this._onClick = (params && params.onClick) ? params.onClick : null;
    Object.defineProperty(this, "onClick",
    {
        set: function (val) { this._onClick = val;  },
        get: function ()    { return this._onClick; },
    });
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    let ww = this._w;  // WxH of the component
    let hh = this._h;

    let xx = this._x;
    let yy = this._y;

    let rx = this._rx;
    let ry = this._ry;

    let fill = this._fill;
    let fillFocus = this._fillFocus

    this.rootObj = scene.create({ id: this._id, t: "object", parent: this._parent, x: xx, y: yy, w: ww, h: hh });

    var rootObj = this.rootObj; // alias

    var rounded = ((rx !== undefined) && (ry !== undefined)) ?  // optional Rounded Corners
                        (' rx="'+rx+'" ry="'+ry ): ''

    const normalSVG = 'data:image/svg,<svg width="'+ww+'px" height="'+hh+'px">'+
                        '<rect fill="'+fill+'" stroke="none" stroke-width="0"'+
                        rounded+' "width="'+ww+'" height="'+hh+'"/></svg>'

    const focusSVG  = 'data:image/svg,<svg width="'+ww+'px" height="'+hh+'px">'+
                        '<rect fill="'+fillFocus+'" stroke="none" stroke-width="0"'+
                        rounded+'" width="'+ww+'" height="'+hh+'"/></svg>'

    this.normalRes = scene.create({ t: "imageResource", url: normalSVG });
    this.focusRes  = scene.create({ t: "imageResource", url: focusSVG  });

    let normalRes  = this.normalRes; // alias
    let focusRes   = this.focusRes;  // alias

    this.buttonImg = scene.create({ t: "image", parent: rootObj, w: ww, h: hh,
        resource: normalRes, interactive: false });

    let buttonImg = this.buttonImg; // alias

    this.label = scene.create({t:"textBox",w: ww,h: hh, parent: rootObj,
        pixelSize: this._pixelSize, textColor:"#fff", font: this._font, text:  this._text,
        alignVertical:   scene.alignVertical.CENTER,
        alignHorizontal: scene.alignHorizontal.CENTER});

    let assets = [rootObj.ready, normalRes.ready, focusRes.ready, buttonImg.ready, this.label.ready ];

    this._ready = Promise.all( assets ).then( function(o)
    {
        rootObj.cx = ww/2;
        rootObj.cy = hh/2;
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    var scaleX = 1.1;
    var scaleY = 1.1;

    var self = this;

    function doMouseDown()
    {
        return rootObj.animateTo({ sx: scaleX, sy: scaleY }, DURATION, EASING);
    }

    function doMouseUp()
    {
        return rootObj.animateTo({ sx: 1, sy: 1 }, DURATION, EASING).then( (o) =>
        {
            if(self._onClick)
            {
                self._onClick(); // TODO: make async ?
            }
        } )
    }

    rootObj.on('onMouseDown', doMouseDown);
    rootObj.on('onMouseUp',   doMouseUp);

    rootObj.on('onFocus', function()
    {
        buttonImg.resource    = self.focusRes;
        buttonImg.interactive = true;
    });

    rootObj.on('onBlur', function()
    {
        buttonImg.resource    = self.normalRes;
        buttonImg.interactive = false;
    });

    rootObj.on('onKeyDown', function(e)
    {
        if(e.keyCode == scene.keys.ENTER) // TODO: hardcode for this one value ?
        {
            doMouseDown().then(doMouseUp);
        }
    });
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports = TextButton22;


/***/ }),

/***/ 0:
/*!*******************************************************************************!*\
  !*** multi ./pack/TestButtons.js ./pack/textButton.js ./pack/textButton22.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./pack/TestButtons.js */"./pack/TestButtons.js");
__webpack_require__(/*! ./pack/textButton.js */"./pack/textButton.js");
module.exports = __webpack_require__(/*! ./pack/textButton22.js */"./pack/textButton22.js");


/***/ })

/******/ });