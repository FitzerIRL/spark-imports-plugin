
"use strict";

module.exports = class SparkPluginImports {
  constructor(options) {
    this.options = options;
  }
  apply(compiler)
  {
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function locateImportVar(findStr)
    {
        var rePxImport = /.*px\.import\s*\(\s*\{([^}]*?)\}\s*\).then\s*\(.*\((.*)\)[^{]*\{/g;

        var myStr = findStr; // to modify param

        var matchImports = null;

        while((matchImports = rePxImport.exec(myStr)) != null)// Found 'px.import()' statement
        {
            var importVar  = ""
            // console.log("## REGEX: " + matchImports[1]);

            importVar = matchImports[2];
        }//WHILE

        return importVar;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    function commentWebPackRequires(importVar, findStr)
    {
  //      console.log("######  commentWebPackRequires() - ENTER ");
        var rePxWebpackRequire = new RegExp("(.*"+importVar+"\\..*\\s*\\=\\s*__webpack_require__\\(.*).*\n",'g');
        var myStr = findStr; // to modify param
        var matchWebpackRequire = null;

        while((matchWebpackRequire = rePxWebpackRequire.exec(myStr)) != null)// Found 'px.import()' statement
        {
            // console.log("######  commentWebPackRequires() - MATCH >> " + matchWebpackRequire[0]);

            // Remove the '__webpack_require__()' the spark-import-loader injected.

            myStr = myStr.replace(matchWebpackRequire[0], "");//"// ## " + matchWebpackRequire[0]);
        }

        return myStr;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // REPLACE >>  function(module, exports   >> function(module=px.module, exports=px.exports

    function addPxModuleExports(findStr)
    {
  //      console.log("######  addPxModuleExports() - ENTER ");
        var reFunctionHeader = new RegExp(".*(function\\(module, exports).*",'g');
        var myStr = findStr; // to modify param
        var matchFunctionHeader = null;

        while((matchFunctionHeader = reFunctionHeader.exec(myStr)) != null)
        {
            //console.log("######  addPxModuleExports() - MATCH >> " + matchFunctionHeader[0]);

            // Add 'px' to function header
            myStr = myStr.replace(matchFunctionHeader[1], "function(module=px.module, exports=px.exports");//"// ## " + matchWebpackRequire[0]);
        }

        return myStr;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // REPLACE >>
    //
    //       __webpack_require__(/*! ./pack/src/textButton.js */"./pack/src/textButton.js");
    //       module.exports = __webpack_require__(/*! ./pack/TestButtons.js */"./pack/TestButtons.js");
    //
    // WITH >>
    //
    //       px.registerCode(__webpack_require__.m)
    //       __webpack_require__(/*! TestButtons.js */"TestButtons.js");
    //

    function addFinalPxRegisterCode(findStr)
    {
        //      console.log("######  addFinalPxRegisterCode() - ENTER ");
        var reRemoveRequire = new RegExp("($__webpack_require__.*)",'g');
        //var reLastMatch = new RegExp("$(__webpack_require__\\.*(\".*\"\\);).*",'g');
        var myStr = findStr; // to modify param
        var matchRequire = null;

        while((matchRequire = reRemoveRequire.exec(myStr)) != null)
        {
            console.log("######  addFinalPxRegisterCode() - marchRequire MATCH >> " + matchRequire[0]);

            // Add 'px.register' to function header
           // myStr = myStr.replace(matchLast[1], "function(module=px.module, exports=px.exports");//"// ## " + matchWebpackRequire[0]);
        }

        var reLastMatch = new RegExp('(module.exports = __webpack_require__\\(.*\\"(.*)\\"\\).*)','g');
        var myStr = findStr; // to modify param
        var matchLast = null;

        while((matchLast = reLastMatch.exec(myStr)) != null)
        {
           console.log("######  addFinalPxRegisterCode() - reLastMatch MATCH [1]>> " + matchLast[1]);

          var filename = matchLast[2];
          // Add 'px.register' to function header
           myStr = myStr.replace(matchLast[1], "px.registerCode(__webpack_require__.m)\n\n__webpack_require__(/*! "+filename+" */\""+filename+"\");");
        }
        return myStr;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    function noDotPaths(findStr)
    {
  //      console.log("######  noDotPaths() - ENTER ");
        var reDotPath = new RegExp(".*(\".\\/).*\\.js",'g');
        var myStr = findStr; // to modify param
        var matchPath = null;

        while((matchPath = reDotPath.exec(myStr)) != null)
        {
            myStr = myStr.replace(matchPath[1], "\"");  // REPLACE  "./path" with "path/"
        }

        return myStr;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    // compiler.plugin("compile", function(params) {
    //   console.log("EVENT: 'compile' - The compiler is starting to compile...");

    // //  console.log(params)
    // });

    // compiler.plugin("compilation", function(compilation) {
    //   console.log("EVENT: 'compilation' - The compiler is starting a new compilation... "
    //        //       + "key:" + JSON.stringify(compilation)
    //                 );

    //   // compilation.plugin("buildModule", function(o) {
    //   //   console.log("EVENT: 'buildModule' - Fired  o:" + Object.keys(o));
    //   //   console.log("EVENT: 'buildModule' - Fired  r:" + o.resource);
    //   //   console.log("EVENT: 'buildModule' - Fired  s:" + o.dependencies);
    //   // });

    //   // compilation.plugin("optimizeModules", function() {
    //   //   console.log("EVENT: 'optimizeModules' - Fired.");
    //   // });

    //   // compilation.plugin("optimize", function() {
    //   //   console.log("EVENT: 'optimize' - The compilation is starting to optimize files...");
    //   // });
    // });

if(false)
{
    // compiler.plugin("compile", function(params) {
    //   console.log("EVENT: 'compile' - The compiler is starting to compile...");

    // //  console.log(params)
    // });

    compiler.plugin("compilation", function(compilation)
    {
      console.log("EVENT: 'compilation' - The compiler is starting a new compilation... "
                 // + "key:" + JSON.stringify(compilation)
                    );

      compilation.plugin("optimize", function()
      {
        console.log("EVENT: 'optimize' - The compilation is starting to optimize files... 123 >" + JSON.stringify(compilation.assets));

          Object.keys(compilation.assets).forEach((key) =>
          {
            console.log("EVENT: 'optimize' - key: " + key);

            var children = compilation.assets[key].children;

            if (children && children[0])
            {
              var source = children[0]._value;

              var importVar = locateImportVar(source)
                    source = commentWebPackRequires(importVar, source);
                    source = addPxModuleExports(source);
                    source = addFinalPxRegisterCode(source);
                    source = noDotPaths(source);

              children[0]._value = source;
            }
          });
      });//COMPILATION
    });//COMPILER
}
else
{
  compiler.hooks.make.tap('spark-imports-plugin', ac =>
  {
    console.log("EVENT: 'ac' - The compiler is starting a new ac... " + ac);

    Object.keys(ac).forEach((key) =>
    {
      console.log("######  AC ...  key: " + key + " >>> " + ac[key] + " <<<");

      if(key == "chunks")
      {
        var val = ac[key];

        console.log("######  AC KEYS ...  keys: " + Object.keys(val));

          
      //  console.log("######  AC Chunks...  key: " + key + " >>> " + JSON.stringify(val) + " <<<");
//        console.log("######  AC Chunks...  key: " + key + " >>> " + JSON.stringify(chunks[0].Module) + " <<<");
      }
    });

  
  } );
    compiler.hooks.thisCompilation.tap('spark-imports-plugin', compilation =>
    {
      console.log("EVENT: 'compilation' - The compiler is starting a new compilation... "
              //    + "key:" + JSON.stringify(compilation)
                    );

      // compilation.hooks.buildModule.tap('spark-imports-plugin', module =>
      // {
      //   console.log("EVENT: 'buildModule' - The compilation is starting to optimize files... params >" + module );//+ JSON.stringify(params));

      //   // console.log("EVENT: 'buildModule' - The compilation is starting to optimize files... abc >" + Object.keys(compilation));
      //   // console.log("EVENT: 'buildModule' - The compilation is starting to optimize files... abc >" + Object.keys(compilation.modules));
      //   // console.log("EVENT: 'buildModule' - The compilation is starting to optimize files... ABC1 >" +  Object.keys(module));
      //   // console.log("EVENT: 'buildModule' - The compilation is starting to optimize files... ABC >" + (module._source));

      //   if( module["_source"] )
      //     console.log("######  buildModule ...  _source:  >>> " + JSON.stringify(module["_source"]) );
      //   else
      //     console.log("######  buildModule ...  NO _source ");

      // });

 // optimizeChunkAssets  afterOptimizeChunkAssets

      compilation.hooks.afterSeal.tap('spark-imports-plugin', module =>
      {
        if(module !== undefined)
        {
          Object.keys(module).forEach((key) =>
          {
            console.log("######  succeedModule ...  key: " + key + " >>> " + module[key] );

            var obj = module[key];

            if(obj !== undefined)
            {
              Object.keys( obj ).forEach((k) =>
              {
                console.log("######  succeedModule ... obj key: " + k );//+ " >>> " + obj[k] );
 
                var myVal = obj[k];

                if(myVal !== undefined && k !== "entryModule")
                  console.log("######  succeedModule ... >>> myVal key: '"+k+"' >>> " + JSON.stringify( myVal ) );


                if(myVal !== undefined && k == "_modules")
                console.log("######  succeedModule ... >>> myVal key: '"+k+"' >>> " + JSON.stringify( myVal["_cache"] ) );

                // var srcObj = obj[myKey];
                // if( srcObj !== undefined && srcObj !== null )
                // {
                //   console.log("######  succeedModule ...  srcObj  >>> " + JSON.stringify( srcObj) );

                //   var src = srcObj["_value"];
                //   if( src && src.indexOf("__webpack_require__") >= 0 )
                //   {
                //     console.log("######  succeedModule ...  _source:  >>> " + src );
                //   }
                //   else
                //   {
                //     //console.log("######  succeedModule ...  NO '_value '  >>> " );
                //     //console.log("######  succeedModule ...  NO '_value '  >>> obj key: " + k + " >>> " + JSON.stringify( obj[k] ) );
                //   }
                // }
                // else 
                // {
                //   console.log("######  succeedModule ...  NO '_source '  >>> " );
                // }

              });
            }//ENDIF

          });
        }

      });

    });

    compiler.hooks.emit.tap('spark-imports-plugin', (compilation, callback) =>
    {
      Object.keys(compilation.assets).forEach((key) =>
      {
        console.log("######  spark-plugin-loader ...  key: " + key);

        var children = compilation.assets[key].children;

        if (children && children[0])
        {
          var source = children[0]._value;

       //   console.log("######  spark-plugin-loader ... source: " + source);

          var importVar = locateImportVar(source)
                 source = commentWebPackRequires(importVar, source);
                 source = addPxModuleExports(source);
                 source = addFinalPxRegisterCode(source);
                 source = noDotPaths(source);

          children[0]._value = source;
        }
        else
        {
          console.log("######  spark-plugin-loader ... ERROR: compilation.assets");
        }
      });

      if(callback) callback();
    });// "emit"
  }
}//false
};