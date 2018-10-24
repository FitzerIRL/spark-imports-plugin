px.configImport({
  "mySrc:" : px.getPackageBaseFilePath() + "/src/"
});


px.import({  scene: 'px:scene.1.js',
              keys: 'px:tools.keys.js',
            button: 'src/textButton.js'
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

  buttonsArray.push( new TextButton(scene, params) );

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

      if(buttonIndex < 0) buttonIndex = buttonsArray.length -1; // wrap

      console.log("buttonIndex = " + buttonIndex)
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
  console.error("Import failed for TestButtons.js: " + err);
});