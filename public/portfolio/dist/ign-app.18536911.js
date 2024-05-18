// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/js/ign-app.js":[function(require,module,exports) {
var GetGitRepo = function GetGitRepo() {
  var i = "Tijl-Pleuger-Vista",
    e = "/repos/HeadBodyScript/DATA-Armoury/commits";
  fetch("https://api.github.com/users/".concat(i, "/repos")).then(function (i) {
    return i.json();
  }).then(function (e) {
    console.log(e);
    var t = e.reduce(function (i, e) {
      return i + "/".concat(e.name);
    }, "");
    localStorage.setItem("reducedName", t);
    var s = e.reduce(function (i, e) {
      return i + "/".concat(e.description);
    }, "");
    function l() {
      var e,
        t = localStorage.getItem("reducedName").split("/"),
        s = t.pop(),
        l = t.join("/");
      localStorage.setItem("reducedName", l);
      var r = localStorage.getItem("reducedDescription").split("/"),
        o = r.pop(),
        a = r.join("/");
      localStorage.setItem("reducedDescription", a), fetch("https://raw.githubusercontent.com/".concat(i, "/").concat(s, "/main/README.md")).then(function (i) {
        return i.text();
      }).then(function (i) {
        e = i;
      }), fetch("https://api.github.com/repos/".concat(i, "/").concat(s, "/commits/main")).then(function (i) {
        return i.json();
      }).then(function (t) {
        console.log(t);
        var l = t.commit.author.date,
          r = t.commit.author.name,
          a = t.commit.message,
          c = t.committer.avatar_url;
        Form.innerHTML += "\n                <div class=\"card\">\n                    <div class=\"card-container\">\n                        <ul>\n                            <li class=\"card-header\"><strong>".concat(s, "</strong><img class=\"icon\" src=\"icon.jpeg\" alt=\"\"></li>\n                            <li class=\"border\"><i class=\"bi bi-caret-right-fill\"></i>Description</li>\n                            <li class=\"border sub\"><i class=\"bi bi-dot\"></i>").concat(o, "</li>\n                            <li class=\"border\"><i class=\"bi bi-caret-right-fill\"></i>ReadMe.MD</li>\n                            <li class=\"border readme scrollbar sub\"><i class=\"bi bi-dot\"></i>").concat(e, "</li>\n                            <li class=\"border\"><i class=\"bi bi-caret-right-fill\"></i>Latest Update</li>\n                            <li class=\"border\"><i class=\"bi bi-dot\"></i>Date: ").concat(l, "</li>\n                            <li class=\"border\"><i class=\"bi bi-dot\"></i>By: ").concat(r, "<img class=\"icon\" src=\"").concat(c, "\" alt=\"\"></li>\n                            <li class=\"border\"><i class=\"bi bi-dot\"></i>Note: ").concat(a, "</li>\n                            <li class=\"border card-footer\"><i class=\"bi bi-link\"></i><a style=\"color: blueviolet;\" class=\"link\" href=\"https://github.com/").concat(i, "/").concat(s, "\">Visit the repository</a></li>\n                        </ul>\n                    </div>\n                </div>\n                ");
      });
    }
    localStorage.setItem("reducedDescription", s);
    var r = 0;
    for (var o = 0; o < e.length; o++) r += l();
  });
};
GetGitRepo();
var intro = document.querySelector(".splash-intro"),
  logo = document.querySelector(".splash-logo-header"),
  logoSpan = document.querySelectorAll(".splash-logo");
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    logoSpan.forEach(function (i, e) {
      setTimeout(function () {
        i.classList.add("active");
      }, (e + 1) * 400);
    }), setTimeout(function () {
      logoSpan.forEach(function (i, e) {
        setTimeout(function () {
          i.classList.remove("active"), i.classList.add("fade");
        }, (e + 1) * 50);
      });
    }, 2e3), setTimeout(function () {
      intro.style.top = "-100vh";
    }, 2300);
  });
});
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60333" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/ign-app.js"], null)
//# sourceMappingURL=/ign-app.18536911.js.map