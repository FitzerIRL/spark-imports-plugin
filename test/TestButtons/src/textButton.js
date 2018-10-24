px.import({  scene: 'px:scene.1.js',
}).then( function importsAreReady(imports)
{
    var scene = imports.scene;

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

}).catch(function importFailed(err){
  console.error("Import failed for testCard.js: " + err);
});