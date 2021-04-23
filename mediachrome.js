(() => {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
    var __commonJS = (callback, module) => () => {
      if (!module) {
        module = {exports: {}};
        callback(module.exports, module);
      }
      return module.exports;
    };
    var __exportStar = (target, module, desc) => {
      __markAsModule(target);
      if (module && typeof module === "object" || typeof module === "function") {
        for (let key of __getOwnPropNames(module))
          if (!__hasOwnProp.call(target, key) && key !== "default")
            __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
      }
      return target;
    };
    var __toModule = (module) => {
      if (module && module.__esModule)
        return module;
      return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true}), module);
    };
  
    // node_modules/mux-embed/dist/mux.js
    var require_mux = __commonJS((exports, module) => {
      (function() {
        var define = false;
        !function(e, t) {
          typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define("mux", [], t) : typeof exports == "object" ? exports.mux = t() : e.mux = t();
        }(this, function() {
          return function(e) {
            function t(r) {
              if (a[r])
                return a[r].exports;
              var i = a[r] = {i: r, l: false, exports: {}};
              return e[r].call(i.exports, i, i.exports, t), i.l = true, i.exports;
            }
            var a = {};
            return t.m = e, t.c = a, t.d = function(e2, a2, r) {
              t.o(e2, a2) || Object.defineProperty(e2, a2, {configurable: false, enumerable: true, get: r});
            }, t.n = function(e2) {
              var a2 = e2 && e2.__esModule ? function() {
                return e2.default;
              } : function() {
                return e2;
              };
              return t.d(a2, "a", a2), a2;
            }, t.o = function(e2, t2) {
              return Object.prototype.hasOwnProperty.call(e2, t2);
            }, t.p = "", t(t.s = 16);
          }([function(e, t, a) {
            (function(t2) {
              var a2;
              a2 = typeof window != "undefined" ? window : t2 !== void 0 ? t2 : typeof self != "undefined" ? self : {}, e.exports = a2;
            }).call(t, a(6));
          }, function(e, t) {
            function a(e2, t2, a2) {
              switch (a2.length) {
                case 0:
                  return e2.call(t2);
                case 1:
                  return e2.call(t2, a2[0]);
                case 2:
                  return e2.call(t2, a2[0], a2[1]);
                case 3:
                  return e2.call(t2, a2[0], a2[1], a2[2]);
              }
              return e2.apply(t2, a2);
            }
            function r(e2, t2) {
              for (var a2 = -1, r2 = Array(e2); ++a2 < e2; )
                r2[a2] = t2(a2);
              return r2;
            }
            function i(e2, t2) {
              var a2 = R(e2) || h(e2) ? r(e2.length, String) : [], i2 = a2.length, n2 = !!i2;
              for (var o2 in e2)
                !t2 && !D.call(e2, o2) || n2 && (o2 == "length" || d(o2, i2)) || a2.push(o2);
              return a2;
            }
            function n(e2, t2, a2) {
              var r2 = e2[t2];
              D.call(e2, t2) && f(r2, a2) && (a2 !== void 0 || t2 in e2) || (e2[t2] = a2);
            }
            function o(e2) {
              if (!c(e2))
                return P(e2);
              var t2 = [];
              for (var a2 in Object(e2))
                D.call(e2, a2) && a2 != "constructor" && t2.push(a2);
              return t2;
            }
            function s(e2, t2) {
              return t2 = A(t2 === void 0 ? e2.length - 1 : t2, 0), function() {
                for (var r2 = arguments, i2 = -1, n2 = A(r2.length - t2, 0), o2 = Array(n2); ++i2 < n2; )
                  o2[i2] = r2[t2 + i2];
                i2 = -1;
                for (var s2 = Array(t2 + 1); ++i2 < t2; )
                  s2[i2] = r2[i2];
                return s2[t2] = o2, a(e2, this, s2);
              };
            }
            function u(e2, t2, a2, r2) {
              a2 || (a2 = {});
              for (var i2 = -1, o2 = t2.length; ++i2 < o2; ) {
                var s2 = t2[i2], u2 = r2 ? r2(a2[s2], e2[s2], s2, a2, e2) : void 0;
                n(a2, s2, u2 === void 0 ? e2[s2] : u2);
              }
              return a2;
            }
            function d(e2, t2) {
              return !!(t2 = t2 == null ? w : t2) && (typeof e2 == "number" || E.test(e2)) && e2 > -1 && e2 % 1 == 0 && e2 < t2;
            }
            function l(e2, t2, a2) {
              if (!m(a2))
                return false;
              var r2 = typeof t2;
              return !!(r2 == "number" ? _(a2) && d(t2, a2.length) : r2 == "string" && t2 in a2) && f(a2[t2], e2);
            }
            function c(e2) {
              var t2 = e2 && e2.constructor;
              return e2 === (typeof t2 == "function" && t2.prototype || q);
            }
            function f(e2, t2) {
              return e2 === t2 || e2 !== e2 && t2 !== t2;
            }
            function h(e2) {
              return p(e2) && D.call(e2, "callee") && (!O.call(e2, "callee") || S.call(e2) == x);
            }
            function _(e2) {
              return e2 != null && y(e2.length) && !v(e2);
            }
            function p(e2) {
              return b(e2) && _(e2);
            }
            function v(e2) {
              var t2 = m(e2) ? S.call(e2) : "";
              return t2 == T || t2 == k;
            }
            function y(e2) {
              return typeof e2 == "number" && e2 > -1 && e2 % 1 == 0 && e2 <= w;
            }
            function m(e2) {
              var t2 = typeof e2;
              return !!e2 && (t2 == "object" || t2 == "function");
            }
            function b(e2) {
              return !!e2 && typeof e2 == "object";
            }
            function g(e2) {
              return _(e2) ? i(e2) : o(e2);
            }
            var w = 9007199254740991, x = "[object Arguments]", T = "[object Function]", k = "[object GeneratorFunction]", E = /^(?:0|[1-9]\d*)$/, q = Object.prototype, D = q.hasOwnProperty, S = q.toString, O = q.propertyIsEnumerable, P = function(e2, t2) {
              return function(a2) {
                return e2(t2(a2));
              };
            }(Object.keys, Object), A = Math.max, M = !O.call({valueOf: 1}, "valueOf"), R = Array.isArray, j = function(e2) {
              return s(function(t2, a2) {
                var r2 = -1, i2 = a2.length, n2 = i2 > 1 ? a2[i2 - 1] : void 0, o2 = i2 > 2 ? a2[2] : void 0;
                for (n2 = e2.length > 3 && typeof n2 == "function" ? (i2--, n2) : void 0, o2 && l(a2[0], a2[1], o2) && (n2 = i2 < 3 ? void 0 : n2, i2 = 1), t2 = Object(t2); ++r2 < i2; ) {
                  var s2 = a2[r2];
                  s2 && e2(t2, s2, r2, n2);
                }
                return t2;
              });
            }(function(e2, t2) {
              if (M || c(t2) || _(t2))
                return void u(t2, g(t2), e2);
              for (var a2 in t2)
                D.call(t2, a2) && n(e2, a2, t2[a2]);
            });
            e.exports = j;
          }, function(e, t, a) {
            "use strict";
            function r(e2, t2, a2) {
              a2 = a2 === void 0 ? 1 : a2, e2[t2] = e2[t2] || 0, e2[t2] += a2;
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.default = r;
          }, function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: true});
            var r = a(0), i = function(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }(r), n = {};
            n.now = function() {
              var e2 = i.default.performance, t2 = e2 && e2.timing;
              return t2 && typeof t2.navigationStart == "number" && typeof e2.now == "function" ? t2.navigationStart + e2.now() : Date.now();
            }, t.default = n;
          }, function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: true});
            var r = a(18), i = function(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }(r), n = i.default.methodFactory;
            i.default.methodFactory = function(e2, t2, a2) {
              var r2 = n(e2, t2, a2);
              return function() {
                for (var e3 = ["[mux]"], t3 = 0; t3 < arguments.length; t3++)
                  e3.push(arguments[t3]);
                r2.apply(void 0, e3);
              };
            }, i.default.setLevel(i.default.getLevel()), t.default = i.default;
          }, function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: true});
            var r = function(e2) {
              return n(e2)[0];
            }, i = function(e2) {
              return n(e2)[1];
            }, n = function(e2) {
              if (typeof e2 != "string" || e2 === "")
                return ["localhost"];
              var t2 = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, a2 = e2.match(t2) || [], r2 = a2[4], i2 = void 0;
              return r2 && (i2 = (r2.match(/[^\.]+\.[^\.]+$/) || [])[0]), [r2, i2];
            };
            t.extractHostnameAndDomain = n, t.extractHostname = r, t.extractDomain = i;
          }, function(e, t) {
            var a;
            a = function() {
              return this;
            }();
            try {
              a = a || Function("return this")() || (0, eval)("this");
            } catch (e2) {
              typeof window == "object" && (a = window);
            }
            e.exports = a;
          }, function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: true});
            var r = function() {
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
                var t2 = 16 * Math.random() | 0;
                return (e2 === "x" ? t2 : 3 & t2 | 8).toString(16);
              });
            }, i = function() {
              return ("000000" + (Math.random() * Math.pow(36, 6) << 0).toString(36)).slice(-6);
            };
            t.generateUUID = r, t.generateShortID = i;
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              e2 = e2 || "";
              var t2 = {};
              return e2.trim().split(/[\r\n]+/).forEach(function(e3) {
                if (e3) {
                  var a2 = e3.split(": "), r2 = a2.shift();
                  r2 && i.indexOf(r2.toLowerCase()) >= 0 && (t2[r2] = a2.join(": "));
                }
              }), t2;
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.default = r;
            var i = ["x-cdn", "content-type"];
          }, function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: true}), t.findMediaElement = t.getMuxPlayerId = void 0;
            var r = a(7), i = function(e2) {
              return e2 && e2.nodeName !== void 0 ? (e2.muxId || (e2.muxId = e2.id || (0, r.generateShortID)()), e2.muxId) : e2;
            }, n = function(e2) {
              var t2 = void 0;
              return e2 && e2.nodeName !== void 0 ? (t2 = e2, e2 = i(t2)) : t2 = document.querySelector(e2), [t2, e2, t2 && t2.nodeName ? t2.nodeName.toLowerCase() : ""];
            };
            t.getMuxPlayerId = i, t.findMediaElement = n;
          }, function(e, t, a) {
            "use strict";
            function r() {
              return (n.default.doNotTrack || n.default.navigator && (n.default.navigator.doNotTrack || n.default.navigator.msDoNotTrack)) === "1";
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.default = r;
            var i = a(0), n = function(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }(i);
          }, function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: true});
            var r = a(0), i = function(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }(r), n = {};
            n.exists = function() {
              var e2 = i.default.performance;
              return (e2 && e2.timing) !== void 0;
            }, n.domContentLoadedEventEnd = function() {
              var e2 = i.default.performance, t2 = e2 && e2.timing;
              return t2 && t2.domContentLoadedEventEnd;
            }, n.navigationStart = function() {
              var e2 = i.default.performance, t2 = e2 && e2.timing;
              return t2 && t2.navigationStart;
            }, t.default = n;
          }, function(e, t, a) {
            "use strict";
            var r = a(42), i = a(43), n = a(14);
            e.exports = {formats: n, parse: i, stringify: r};
          }, function(e, t, a) {
            "use strict";
            var r = Object.prototype.hasOwnProperty, i = function() {
              for (var e2 = [], t2 = 0; t2 < 256; ++t2)
                e2.push("%" + ((t2 < 16 ? "0" : "") + t2.toString(16)).toUpperCase());
              return e2;
            }(), n = function(e2) {
              for (var t2; e2.length; ) {
                var a2 = e2.pop();
                if (t2 = a2.obj[a2.prop], Array.isArray(t2)) {
                  for (var r2 = [], i2 = 0; i2 < t2.length; ++i2)
                    t2[i2] !== void 0 && r2.push(t2[i2]);
                  a2.obj[a2.prop] = r2;
                }
              }
              return t2;
            };
            t.arrayToObject = function(e2, t2) {
              for (var a2 = t2 && t2.plainObjects ? Object.create(null) : {}, r2 = 0; r2 < e2.length; ++r2)
                e2[r2] !== void 0 && (a2[r2] = e2[r2]);
              return a2;
            }, t.merge = function(e2, a2, i2) {
              if (!a2)
                return e2;
              if (typeof a2 != "object") {
                if (Array.isArray(e2))
                  e2.push(a2);
                else {
                  if (typeof e2 != "object")
                    return [e2, a2];
                  (i2.plainObjects || i2.allowPrototypes || !r.call(Object.prototype, a2)) && (e2[a2] = true);
                }
                return e2;
              }
              if (typeof e2 != "object")
                return [e2].concat(a2);
              var n2 = e2;
              return Array.isArray(e2) && !Array.isArray(a2) && (n2 = t.arrayToObject(e2, i2)), Array.isArray(e2) && Array.isArray(a2) ? (a2.forEach(function(a3, n3) {
                r.call(e2, n3) ? e2[n3] && typeof e2[n3] == "object" ? e2[n3] = t.merge(e2[n3], a3, i2) : e2.push(a3) : e2[n3] = a3;
              }), e2) : Object.keys(a2).reduce(function(e3, n3) {
                var o = a2[n3];
                return r.call(e3, n3) ? e3[n3] = t.merge(e3[n3], o, i2) : e3[n3] = o, e3;
              }, n2);
            }, t.assign = function(e2, t2) {
              return Object.keys(t2).reduce(function(e3, a2) {
                return e3[a2] = t2[a2], e3;
              }, e2);
            }, t.decode = function(e2) {
              try {
                return decodeURIComponent(e2.replace(/\+/g, " "));
              } catch (t2) {
                return e2;
              }
            }, t.encode = function(e2) {
              if (e2.length === 0)
                return e2;
              for (var t2 = typeof e2 == "string" ? e2 : String(e2), a2 = "", r2 = 0; r2 < t2.length; ++r2) {
                var n2 = t2.charCodeAt(r2);
                n2 === 45 || n2 === 46 || n2 === 95 || n2 === 126 || n2 >= 48 && n2 <= 57 || n2 >= 65 && n2 <= 90 || n2 >= 97 && n2 <= 122 ? a2 += t2.charAt(r2) : n2 < 128 ? a2 += i[n2] : n2 < 2048 ? a2 += i[192 | n2 >> 6] + i[128 | 63 & n2] : n2 < 55296 || n2 >= 57344 ? a2 += i[224 | n2 >> 12] + i[128 | n2 >> 6 & 63] + i[128 | 63 & n2] : (r2 += 1, n2 = 65536 + ((1023 & n2) << 10 | 1023 & t2.charCodeAt(r2)), a2 += i[240 | n2 >> 18] + i[128 | n2 >> 12 & 63] + i[128 | n2 >> 6 & 63] + i[128 | 63 & n2]);
              }
              return a2;
            }, t.compact = function(e2) {
              for (var t2 = [{obj: {o: e2}, prop: "o"}], a2 = [], r2 = 0; r2 < t2.length; ++r2)
                for (var i2 = t2[r2], o = i2.obj[i2.prop], s = Object.keys(o), u = 0; u < s.length; ++u) {
                  var d = s[u], l = o[d];
                  typeof l == "object" && l !== null && a2.indexOf(l) === -1 && (t2.push({obj: o, prop: d}), a2.push(l));
                }
              return n(t2);
            }, t.isRegExp = function(e2) {
              return Object.prototype.toString.call(e2) === "[object RegExp]";
            }, t.isBuffer = function(e2) {
              return e2 !== null && e2 !== void 0 && !!(e2.constructor && e2.constructor.isBuffer && e2.constructor.isBuffer(e2));
            };
          }, function(e, t, a) {
            "use strict";
            var r = String.prototype.replace, i = /%20/g;
            e.exports = {default: "RFC3986", formatters: {RFC1738: function(e2) {
              return r.call(e2, i, "+");
            }, RFC3986: function(e2) {
              return e2;
            }}, RFC1738: "RFC1738", RFC3986: "RFC3986"};
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            function i(e2) {
              var t2 = {};
              for (var a2 in e2)
                e2.hasOwnProperty(a2) && (t2[e2[a2]] = a2);
              return t2;
            }
            function n(e2) {
              var t2 = {}, a2 = {};
              return Object.keys(e2).forEach(function(r2) {
                var i2 = false;
                if (e2.hasOwnProperty(r2) && e2[r2] !== void 0) {
                  var n2 = r2.split("_"), o2 = n2[0], u2 = c[o2];
                  u2 || (s.default.info("Data key word `" + n2[0] + "` not expected in " + r2), u2 = o2 + "_"), n2.splice(1).forEach(function(e3) {
                    e3 === "url" && (i2 = true), h[e3] ? u2 += h[e3] : (s.default.info("Data key word `" + e3 + "` not expected in " + r2), u2 += "_" + e3 + "_");
                  }), i2 ? a2[u2] = e2[r2] : t2[u2] = e2[r2];
                }
              }), (0, d.default)(t2, a2);
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.default = n;
            var o = a(4), s = r(o), u = a(1), d = r(u), l = {a: "env", b: "beacon", d: "ad", e: "event", f: "experiment", m: "mux", n: "response", p: "player", q: "request", r: "retry", s: "session", t: "timestamp", u: "viewer", v: "video", w: "page", x: "view", y: "sub"}, c = i(l), f = {ad: "ad", ag: "aggregate", ap: "api", al: "application", ar: "architecture", as: "asset", au: "autoplay", av: "average", bi: "bitrate", br: "break", bw: "browser", by: "bytes", ca: "cached", cb: "cancel", cd: "code", cg: "category", ch: "changed", cn: "config", co: "count", ce: "counter", cp: "complete", cr: "creative", ct: "content", cu: "current", cx: "connection", dg: "downscaling", dm: "domain", dn: "cdn", do: "downscale", du: "duration", dv: "device", ec: "encoding", en: "end", eg: "engine", em: "embed", er: "error", es: "errorcode", et: "errortext", ee: "event", ev: "events", ex: "expires", fi: "first", fm: "family", ft: "format", fq: "frequency", fr: "frame", fs: "fullscreen", he: "headers", ho: "host", hn: "hostname", ht: "height", id: "id", ii: "init", in: "instance", ip: "ip", is: "is", ke: "key", la: "language", lb: "labeled", le: "level", li: "live", ld: "loaded", lo: "load", ls: "lists", lt: "latency", ma: "max", md: "media", me: "message", mi: "mime", ml: "midroll", mm: "min", mn: "manufacturer", mo: "model", mx: "mux", nm: "name", no: "number", on: "on", os: "os", pa: "paused", pb: "playback", pd: "producer", pe: "percentage", pf: "played", pg: "program", ph: "playhead", pi: "plugin", pl: "preroll", pn: "playing", po: "poster", pr: "preload", ps: "position", py: "property", ra: "rate", rd: "requested", re: "rebuffer", rf: "rendition", ro: "ratio", rp: "response", rq: "request", rs: "requests", sa: "sample", se: "session", sk: "seek", sm: "stream", so: "source", sq: "sequence", sr: "series", st: "start", su: "startup", sv: "server", sw: "software", ta: "tag", tc: "tech", te: "text", th: "throughput", ti: "time", tl: "total", to: "to", tt: "title", ty: "type", ug: "upscaling", up: "upscale", ur: "url", us: "user", va: "variant", vd: "viewed", vi: "video", ve: "version", vw: "view", vr: "viewer", wd: "width", wa: "watch", wt: "waiting"}, h = i(f);
          }, function(e, t, a) {
            "use strict";
            e.exports = a(17).default;
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            Object.defineProperty(t, "__esModule", {value: true});
            var i = function() {
              function e2(e3, t2) {
                var a2 = [], r2 = true, i2 = false, n2 = void 0;
                try {
                  for (var o2, s2 = e3[Symbol.iterator](); !(r2 = (o2 = s2.next()).done) && (a2.push(o2.value), !t2 || a2.length !== t2); r2 = true)
                    ;
                } catch (e4) {
                  i2 = true, n2 = e4;
                } finally {
                  try {
                    !r2 && s2.return && s2.return();
                  } finally {
                    if (i2)
                      throw n2;
                  }
                }
                return a2;
              }
              return function(t2, a2) {
                if (Array.isArray(t2))
                  return t2;
                if (Symbol.iterator in Object(t2))
                  return e2(t2, a2);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              };
            }(), n = a(0), o = r(n), s = a(9), u = a(4), d = r(u), l = a(10), c = r(l), f = a(3), h = r(f), _ = a(19), p = r(_), v = a(50), y = r(v), m = a(51), b = r(m), g = {}, w = function e2(t2) {
              var a2 = arguments;
              typeof t2 == "string" ? e2.hasOwnProperty(t2) ? o.default.setTimeout(function() {
                a2 = Array.prototype.splice.call(a2, 1), e2[t2].apply(null, a2);
              }, 0) : d.default.warn("`" + t2 + "` is an unknown task") : typeof t2 == "function" ? o.default.setTimeout(function() {
                t2(e2);
              }, 0) : d.default.warn("`" + t2 + "` is invalid.");
            };
            w.loaded = h.default.now(), w.NAME = "mux-embed", w.VERSION = "4.0.1", w.API_VERSION = "2.1", w.PLAYER_TRACKED = false, w.monitor = function(e2, t2) {
              return (0, y.default)(w, e2, t2);
            }, w.destroyMonitor = function(e2) {
              var t2 = (0, s.findMediaElement)(e2), a2 = i(t2, 1), r2 = a2[0];
              r2 && r2.mux && typeof r2.mux.destroy == "function" ? r2.mux.destroy() : d.default.error("A video element monitor for `" + e2 + "` has not been initialized via `mux.monitor`.");
            }, w.addHLSJS = function(e2, t2) {
              var a2 = (0, s.getMuxPlayerId)(e2);
              g[a2] ? g[a2].addHLSJS(t2) : d.default.error("A monitor for `" + a2 + "` has not been initialized.");
            }, w.addDashJS = function(e2, t2) {
              var a2 = (0, s.getMuxPlayerId)(e2);
              g[a2] ? g[a2].addDashJS(t2) : d.default.error("A monitor for `" + a2 + "` has not been initialized.");
            }, w.removeHLSJS = function(e2) {
              var t2 = (0, s.getMuxPlayerId)(e2);
              g[t2] ? g[t2].removeHLSJS() : d.default.error("A monitor for `" + t2 + "` has not been initialized.");
            }, w.removeDashJS = function(e2) {
              var t2 = (0, s.getMuxPlayerId)(e2);
              g[t2] ? g[t2].removeDashJS() : d.default.error("A monitor for `" + t2 + "` has not been initialized.");
            }, w.init = function(e2, t2) {
              (0, c.default)() && t2 && t2.respectDoNotTrack && d.default.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
              var a2 = (0, s.getMuxPlayerId)(e2);
              g[a2] = new p.default(w, a2, t2);
            }, w.emit = function(e2, t2, a2) {
              var r2 = (0, s.getMuxPlayerId)(e2);
              g[r2] ? (g[r2].emit(t2, a2), t2 === "destroy" && delete g[r2]) : d.default.error("A monitor for `" + r2 + "` has not been initialized.");
            }, o.default !== void 0 && typeof o.default.addEventListener == "function" && o.default.addEventListener("unload", function() {
              w.WINDOW_UNLOADING = true;
            }, false), w.checkDoNotTrack = c.default, w.log = d.default, w.utils = b.default, t.default = w;
          }, function(e, t, a) {
            var r, i;
            !function(n, o) {
              "use strict";
              r = o, (i = typeof r == "function" ? r.call(t, a, t, e) : r) !== void 0 && (e.exports = i);
            }(0, function() {
              "use strict";
              function e2(e3, t3) {
                var a3 = e3[t3];
                if (typeof a3.bind == "function")
                  return a3.bind(e3);
                try {
                  return Function.prototype.bind.call(a3, e3);
                } catch (t4) {
                  return function() {
                    return Function.prototype.apply.apply(a3, [e3, arguments]);
                  };
                }
              }
              function t2() {
                console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
              }
              function a2(a3) {
                return a3 === "debug" && (a3 = "log"), typeof console !== u && (a3 === "trace" && d ? t2 : console[a3] !== void 0 ? e2(console, a3) : console.log !== void 0 ? e2(console, "log") : s);
              }
              function r2(e3, t3) {
                for (var a3 = 0; a3 < l.length; a3++) {
                  var r3 = l[a3];
                  this[r3] = a3 < e3 ? s : this.methodFactory(r3, e3, t3);
                }
                this.log = this.debug;
              }
              function i2(e3, t3, a3) {
                return function() {
                  typeof console !== u && (r2.call(this, t3, a3), this[e3].apply(this, arguments));
                };
              }
              function n(e3, t3, r3) {
                return a2(e3) || i2.apply(this, arguments);
              }
              function o(e3, t3, a3) {
                function i3(e4) {
                  var t4 = (l[e4] || "silent").toUpperCase();
                  if (typeof window !== u && c2) {
                    try {
                      return void (window.localStorage[c2] = t4);
                    } catch (e5) {
                    }
                    try {
                      window.document.cookie = encodeURIComponent(c2) + "=" + t4 + ";";
                    } catch (e5) {
                    }
                  }
                }
                function o2() {
                  var e4;
                  if (typeof window !== u && c2) {
                    try {
                      e4 = window.localStorage[c2];
                    } catch (e5) {
                    }
                    if (typeof e4 === u)
                      try {
                        var t4 = window.document.cookie, a4 = t4.indexOf(encodeURIComponent(c2) + "=");
                        a4 !== -1 && (e4 = /^([^;]+)/.exec(t4.slice(a4))[1]);
                      } catch (e5) {
                      }
                    return d2.levels[e4] === void 0 && (e4 = void 0), e4;
                  }
                }
                var s2, d2 = this, c2 = "loglevel";
                typeof e3 == "string" ? c2 += ":" + e3 : typeof e3 == "symbol" && (c2 = void 0), d2.name = e3, d2.levels = {TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5}, d2.methodFactory = a3 || n, d2.getLevel = function() {
                  return s2;
                }, d2.setLevel = function(t4, a4) {
                  if (typeof t4 == "string" && d2.levels[t4.toUpperCase()] !== void 0 && (t4 = d2.levels[t4.toUpperCase()]), !(typeof t4 == "number" && t4 >= 0 && t4 <= d2.levels.SILENT))
                    throw "log.setLevel() called with invalid level: " + t4;
                  if (s2 = t4, a4 !== false && i3(t4), r2.call(d2, t4, e3), typeof console === u && t4 < d2.levels.SILENT)
                    return "No console available for logging";
                }, d2.setDefaultLevel = function(e4) {
                  o2() || d2.setLevel(e4, false);
                }, d2.enableAll = function(e4) {
                  d2.setLevel(d2.levels.TRACE, e4);
                }, d2.disableAll = function(e4) {
                  d2.setLevel(d2.levels.SILENT, e4);
                };
                var f2 = o2();
                f2 == null && (f2 = t3 == null ? "WARN" : t3), d2.setLevel(f2, false);
              }
              var s = function() {
              }, u = "undefined", d = typeof window !== u && typeof window.navigator !== u && /Trident\/|MSIE /.test(window.navigator.userAgent), l = ["trace", "debug", "info", "warn", "error"], c = new o(), f = {};
              c.getLogger = function(e3) {
                if (typeof e3 != "symbol" && typeof e3 != "string" || e3 === "")
                  throw new TypeError("You must supply a name when creating a logger.");
                var t3 = f[e3];
                return t3 || (t3 = f[e3] = new o(e3, c.getLevel(), c.methodFactory)), t3;
              };
              var h = typeof window !== u ? window.log : void 0;
              return c.noConflict = function() {
                return typeof window !== u && window.log === c && (window.log = h), c;
              }, c.getLoggers = function() {
                return f;
              }, c.default = c, c;
            });
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            Object.defineProperty(t, "__esModule", {value: true});
            var i = function() {
              function e2(e3, t2) {
                var a2 = [], r2 = true, i2 = false, n2 = void 0;
                try {
                  for (var o2, s2 = e3[Symbol.iterator](); !(r2 = (o2 = s2.next()).done) && (a2.push(o2.value), !t2 || a2.length !== t2); r2 = true)
                    ;
                } catch (e4) {
                  i2 = true, n2 = e4;
                } finally {
                  try {
                    !r2 && s2.return && s2.return();
                  } finally {
                    if (i2)
                      throw n2;
                  }
                }
                return a2;
              }
              return function(t2, a2) {
                if (Array.isArray(t2))
                  return t2;
                if (Symbol.iterator in Object(t2))
                  return e2(t2, a2);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              };
            }(), n = a(4), o = r(n), s = a(1), u = r(s), d = a(7), l = a(5), c = a(0), f = r(c), h = a(11), _ = r(h), p = a(2), v = r(p), y = a(20), m = r(y), b = a(25), g = a(26), w = a(27), x = r(w), T = a(28), k = r(T), E = a(29), q = r(E), D = a(30), S = r(D), O = a(31), P = r(O), A = a(32), M = r(A), R = a(33), j = r(R), L = a(34), I = r(L), H = a(35), N = r(H), C = a(36), B = r(C), U = a(37), F = r(U), J = a(38), V = r(J), Q = a(39), W = r(Q), G = a(40), z = r(G), Y = a(49), K = r(Y), X = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "adfirstquartile", "admidpoint", "adthirdquartile", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled", "renditionchange"], $ = function(e2, t2, a2) {
              var r2 = this;
              this.DOM_CONTENT_LOADED_EVENT_END = _.default.domContentLoadedEventEnd(), this.NAVIGATION_START = _.default.navigationStart();
              var i2 = {debug: false, minimumRebufferDuration: 250, sustainedRebufferThreshold: 1e3, playbackHeartbeatTime: 25, beaconDomain: "litix.io", sampleRate: 1, disableCookies: false, respectDoNotTrack: false, disableRebufferTracking: false, errorTranslator: function(e3) {
                return e3;
              }};
              this.mux = e2, this.id = t2, a2 = (0, u.default)(i2, a2), a2.data = a2.data || {}, a2.data.property_key && (a2.data.env_key = a2.data.property_key, delete a2.data.property_key), o.default.setLevel(a2.debug ? "debug" : "warn"), this.getPlayheadTime = a2.getPlayheadTime, this.getStateData = a2.getStateData || function() {
              }, this.getAdData = a2.getAdData || function() {
              }, this.minimumRebufferDuration = a2.minimumRebufferDuration, this.sustainedRebufferThreshold = a2.sustainedRebufferThreshold, this.playbackHeartbeatTime = a2.playbackHeartbeatTime, this.disableRebufferTracking = a2.disableRebufferTracking, this.disableRebufferTracking && this.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."), this.errorTranslator = a2.errorTranslator, this.playbackEventDispatcher = new z.default(e2, a2.data.env_key, a2), this.data = {player_instance_id: (0, d.generateUUID)(), mux_sample_rate: a2.sampleRate, beacon_domain: a2.beaconDomain}, this.data.view_sequence_number = 1, this.data.player_sequence_number = 1, this.oldEmit = this.emit, this.emit = function(e3, t3) {
                t3 = (0, u.default)({viewer_time: this.mux.utils.now()}, t3), this.oldEmit(e3, t3);
              };
              var n2 = function() {
                this.data.view_start === void 0 && (this.data.view_start = this.mux.utils.now(), this.emit("viewstart"));
              }.bind(this);
              this.on("viewinit", function(e3, t3) {
                this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), (0, u.default)(this.data, t3), this._initializeViewData(), this.one("play", n2), this.one("adbreakstart", n2);
              });
              var s2 = function(e3) {
                this.emit("viewend"), this.send("viewend"), this.emit("viewinit", e3);
              }.bind(this);
              this.on("videochange", function(e3, t3) {
                s2(t3);
              }), this.on("programchange", function(e3, t3) {
                this.data.player_is_paused && this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."), s2((0, u.default)(t3, {view_program_changed: true})), n2();
              }), this.on("destroy", this.destroy);
              var l2 = this.destroy.bind(this);
              f.default !== void 0 && typeof f.default.addEventListener == "function" && f.default.addEventListener("unload", l2, false), this.on("destroy", function() {
                f.default !== void 0 && typeof f.default.removeEventListener == "function" && f.default.removeEventListener("unload", l2);
              }), this.on("playerready", function(e3, t3) {
                (0, u.default)(this.data, t3);
              }), X.forEach(function(e3) {
                r2.on(e3, function(t3, a3) {
                  e3.indexOf("ad") !== 0 && this._updateStateData(), (0, u.default)(this.data, a3), this._sanitizeData();
                }), r2.on("after" + e3, function() {
                  (e3 !== "error" || this.viewErrored) && this.send(e3);
                });
              }), this.on("viewend", function(e3, t3) {
                (0, u.default)(r2.data, t3);
              });
              var c2 = function(e3) {
                var t3 = this.mux.utils.now();
                this.data.player_init_time && (this.data.player_startup_time = t3 - this.data.player_init_time), !this.mux.PLAYER_TRACKED && this.NAVIGATION_START && (this.mux.PLAYER_TRACKED = true, (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0) - this.NAVIGATION_START)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time;
              };
              this.one("playerready", c2), q.default.apply(this), W.default.apply(this), B.default.apply(this), M.default.apply(this), k.default.apply(this), N.default.apply(this), S.default.apply(this), P.default.apply(this), F.default.apply(this), j.default.apply(this), I.default.apply(this), V.default.apply(this), K.default.apply(this), a2.hlsjs && this.addHLSJS(a2), a2.dashjs && this.addDashJS(a2), this.emit("viewinit", a2.data);
            };
            (0, u.default)($.prototype, x.default.prototype), (0, u.default)($.prototype, M.default.prototype), (0, u.default)($.prototype, B.default.prototype), (0, u.default)($.prototype, k.default.prototype), (0, u.default)($.prototype, S.default.prototype), (0, u.default)($.prototype, P.default.prototype), (0, u.default)($.prototype, F.default.prototype), (0, u.default)($.prototype, j.default.prototype), (0, u.default)($.prototype, I.default.prototype), $.prototype.destroy = function() {
              this._destroyed || (this._destroyed = true, this.data.view_start !== void 0 && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), f.default.clearTimeout(this._heartBeatTimeout));
            }, $.prototype.send = function(e2) {
              var t2 = (0, u.default)({}, this.data);
              if (t2.player_error_code === 1 && (delete t2.player_error_code, delete t2.player_error_message), t2.player_source_duration === 1 / 0 || t2.video_source_duration === 1 / 0 ? t2.video_source_is_live = true : (t2.player_source_duration > 0 || t2.video_source_duration > 0) && (t2.video_source_is_live = false), t2.video_source_url = t2.video_source_url || t2.player_source_url, t2.video_source_url) {
                var a2 = (0, l.extractHostnameAndDomain)(t2.video_source_url), r2 = i(a2, 2), n2 = r2[0], o2 = r2[1];
                t2.video_source_domain = o2, t2.video_source_hostname = n2;
              }
              delete t2.ad_request_id, this.playbackEventDispatcher.send(e2, t2), this.data.view_sequence_number++, this.data.player_sequence_number++, this._restartHeartBeat();
            }, $.prototype._updateStateData = function() {
              (0, u.default)(this.data, this.getStateData()), this.getPlayheadTime && (this.data.player_playhead_time = this.getPlayheadTime()), this._sanitizeData();
            }, $.prototype._sanitizeData = function() {
              var e2 = this;
              ["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time", "video_source_bitrate"].forEach(function(t2) {
                var a2 = parseInt(e2.data[t2], 10);
                e2.data[t2] = isNaN(a2) ? void 0 : a2;
              }), ["player_source_url", "video_source_url"].forEach(function(t2) {
                if (e2.data[t2]) {
                  var a2 = e2.data[t2].toLowerCase();
                  a2.indexOf("data:") !== 0 && a2.indexOf("blob:") !== 0 || (e2.data[t2] = "MSE style URL");
                }
              });
            }, $.prototype._resetVideoData = function(e2, t2) {
              var a2 = this;
              Object.keys(this.data).forEach(function(e3) {
                e3.indexOf("video_") === 0 && delete a2.data[e3];
              });
            }, $.prototype._resetViewData = function() {
              var e2 = this;
              Object.keys(this.data).forEach(function(t2) {
                t2.indexOf("view_") === 0 && delete e2.data[t2];
              }), this.data.view_sequence_number = 1;
            }, $.prototype._resetErrorData = function(e2, t2) {
              delete this.data.player_error_code, delete this.data.player_error_message;
            }, $.prototype._initializeViewData = function() {
              var e2 = this, t2 = this.data.view_id = (0, d.generateUUID)();
              this.data.video_id || (this.data.video_id = (0, m.default)(this.data.player_source_url));
              var a2 = function() {
                t2 === e2.data.view_id && (0, v.default)(e2.data, "player_view_count", 1);
              };
              this.data.player_is_paused ? this.one("play", a2) : a2();
            }, $.prototype._restartHeartBeat = function() {
              var e2 = this;
              f.default.clearTimeout(this._heartBeatTimeout), this.viewErrored || (this._heartBeatTimeout = f.default.setTimeout(function() {
                e2.data.player_is_paused || e2.emit("hb");
              }, 1e4));
            }, $.prototype.addHLSJS = function(e2) {
              return e2.hlsjs ? this.hlsjs ? void this.mux.log.warn("An instance of HLS.js is already being monitored for this player.") : (this.hlsjs = e2.hlsjs, void (0, b.monitorHlsJs)(this.mux, this.id, e2.hlsjs, {}, e2.Hls || f.default.Hls)) : void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");
            }, $.prototype.removeHLSJS = function() {
              this.hlsjs && ((0, b.stopMonitoringHlsJs)(this.hlsjs), this.hlsjs = void 0);
            }, $.prototype.addDashJS = function(e2) {
              return e2.dashjs ? this.dashjs ? void this.mux.log.warn("An instance of Dash.js is already being monitored for this player.") : (this.dashjs = e2.dashjs, void (0, g.monitorDashJS)(this.mux, this.id, e2.dashjs)) : void this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");
            }, $.prototype.removeDashJS = function() {
              this.dashjs && ((0, g.stopMonitoringDashJS)(this.dashjs), this.dashjs = void 0);
            }, t.default = $;
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            function i(e2) {
              var t2 = o.default.createElement("a");
              t2.href = e2;
              var a2 = t2.pathname.replace(/\.[^\/.]+$/, "");
              return u.default.encode(t2.host + a2).split("=")[0];
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.default = i;
            var n = a(21), o = r(n), s = a(23), u = r(s);
          }, function(e, t, a) {
            (function(t2) {
              var r, i = t2 !== void 0 ? t2 : typeof window != "undefined" ? window : {}, n = a(22);
              typeof document != "undefined" ? r = document : (r = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (r = i["__GLOBAL_DOCUMENT_CACHE@4"] = n), e.exports = r;
            }).call(t, a(6));
          }, function(e, t) {
          }, function(e, t, a) {
            (function(e2, r) {
              var i;
              !function(n) {
                var o = typeof t == "object" && t, s = (typeof e2 == "object" && e2 && e2.exports, typeof r == "object" && r);
                var u = function(e3) {
                  this.message = e3;
                };
                u.prototype = new Error(), u.prototype.name = "InvalidCharacterError";
                var d = function(e3) {
                  throw new u(e3);
                }, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = /[\t\n\f\r ]/g, f = function(e3) {
                  e3 = String(e3).replace(c, "");
                  var t2 = e3.length;
                  t2 % 4 == 0 && (e3 = e3.replace(/==?$/, ""), t2 = e3.length), (t2 % 4 == 1 || /[^+a-zA-Z0-9\/]/.test(e3)) && d("Invalid character: the string to be decoded is not correctly encoded.");
                  for (var a2, r2, i2 = 0, n2 = "", o2 = -1; ++o2 < t2; )
                    r2 = l.indexOf(e3.charAt(o2)), a2 = i2 % 4 ? 64 * a2 + r2 : r2, i2++ % 4 && (n2 += String.fromCharCode(255 & a2 >> (-2 * i2 & 6)));
                  return n2;
                }, h = function(e3) {
                  e3 = String(e3), /[^\0-\xFF]/.test(e3) && d("The string to be encoded contains characters outside of the Latin1 range.");
                  for (var t2, a2, r2, i2, n2 = e3.length % 3, o2 = "", s2 = -1, u2 = e3.length - n2; ++s2 < u2; )
                    t2 = e3.charCodeAt(s2) << 16, a2 = e3.charCodeAt(++s2) << 8, r2 = e3.charCodeAt(++s2), i2 = t2 + a2 + r2, o2 += l.charAt(i2 >> 18 & 63) + l.charAt(i2 >> 12 & 63) + l.charAt(i2 >> 6 & 63) + l.charAt(63 & i2);
                  return n2 == 2 ? (t2 = e3.charCodeAt(s2) << 8, a2 = e3.charCodeAt(++s2), i2 = t2 + a2, o2 += l.charAt(i2 >> 10) + l.charAt(i2 >> 4 & 63) + l.charAt(i2 << 2 & 63) + "=") : n2 == 1 && (i2 = e3.charCodeAt(s2), o2 += l.charAt(i2 >> 2) + l.charAt(i2 << 4 & 63) + "=="), o2;
                }, _ = {encode: h, decode: f, version: "0.1.0"};
                (i = function() {
                  return _;
                }.call(t, a, t, e2)) !== void 0 && (e2.exports = i);
              }();
            }).call(t, a(24)(e), a(6));
          }, function(e, t) {
            e.exports = function(e2) {
              return e2.webpackPolyfill || (e2.deprecate = function() {
              }, e2.paths = [], e2.children || (e2.children = []), Object.defineProperty(e2, "loaded", {enumerable: true, get: function() {
                return e2.l;
              }}), Object.defineProperty(e2, "id", {enumerable: true, get: function() {
                return e2.i;
              }}), e2.webpackPolyfill = 1), e2;
            };
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.stopMonitoringHlsJs = t.monitorHlsJs = void 0;
            var i = a(8), n = r(i), o = a(11), s = r(o), u = a(5), d = function(e2) {
              if (!e2)
                return {};
              var t2 = s.default.navigationStart(), a2 = e2.loading, r2 = a2 ? a2.start : e2.trequest, i2 = a2 ? a2.first : e2.tfirst, n2 = a2 ? a2.end : e2.tload;
              return {bytesLoaded: e2.total, requestStart: Math.round(t2 + r2), responseStart: Math.round(t2 + i2), responseEnd: Math.round(t2 + n2)};
            }, l = function(e2) {
              if (e2 && typeof e2.getAllResponseHeaders == "function")
                return (0, n.default)(e2.getAllResponseHeaders());
            }, c = function(e2, t2, a2) {
              var r2 = (arguments.length > 3 && arguments[3] !== void 0 && arguments[3], arguments[4]), i2 = e2.log;
              if (!s.default.exists())
                return void i2.warn("performance timing not supported. Not tracking HLS.js.");
              var n2 = function(a3, r3) {
                return e2.emit(t2, a3, r3);
              }, o2 = function(e3, t3) {
                var a3 = t3.levels, r3 = t3.audioTracks, i3 = t3.url, o3 = t3.stats, s2 = t3.networkDetails, c3 = {}, f3 = {};
                a3.forEach(function(e4, t4) {
                  c3[t4] = {width: e4.width, height: e4.height, bitrate: e4.bitrate, attrs: e4.attrs};
                }), r3.forEach(function(e4, t4) {
                  f3[t4] = {name: e4.name, language: e4.lang, bitrate: e4.bitrate};
                });
                var h2 = d(o3), _2 = h2.bytesLoaded, p2 = h2.requestStart, v2 = h2.responseStart, y = h2.responseEnd;
                n2("requestcompleted", {request_event_type: e3, request_bytes_loaded: _2, request_start: p2, request_response_start: v2, request_response_end: y, request_type: "manifest", request_hostname: (0, u.extractHostname)(i3), request_response_headers: l(s2), request_rendition_lists: {media: c3, audio: f3, video: {}}});
              };
              a2.on(r2.Events.MANIFEST_LOADED, o2);
              var c2 = function(e3, t3) {
                var a3 = t3.details, r3 = t3.level, i3 = t3.networkDetails, o3 = t3.stats, s2 = d(o3), c3 = s2.bytesLoaded, f3 = s2.requestStart, h2 = s2.responseStart, _2 = s2.responseEnd;
                n2("requestcompleted", {request_event_type: e3, request_bytes_loaded: c3, request_start: f3, request_response_start: h2, request_response_end: _2, request_current_level: r3, request_type: "manifest", request_hostname: (0, u.extractHostname)(a3.url), request_response_headers: l(i3)});
              };
              a2.on(r2.Events.LEVEL_LOADED, c2);
              var f2 = function(e3, t3) {
                var a3 = t3.details, r3 = t3.networkDetails, i3 = t3.stats, o3 = d(i3), s2 = o3.bytesLoaded, c3 = o3.requestStart, f3 = o3.responseStart, h2 = o3.responseEnd;
                n2("requestcompleted", {request_event_type: e3, request_bytes_loaded: s2, request_start: c3, request_response_start: f3, request_response_end: h2, request_type: "manifest", request_hostname: (0, u.extractHostname)(a3.url), request_response_headers: l(r3)});
              };
              a2.on(r2.Events.AUDIO_TRACK_LOADED, f2);
              var h = function(e3, t3) {
                var r3 = t3.stats, i3 = t3.networkDetails, o3 = t3.frag, s2 = d(r3), c3 = s2.bytesLoaded, f3 = s2.requestStart, h2 = s2.responseStart, _2 = s2.responseEnd, p2 = {request_event_type: e3, request_bytes_loaded: c3, request_start: f3, request_response_start: h2, request_response_end: _2, request_hostname: i3 ? (0, u.extractHostname)(i3.responseURL) : void 0, request_response_headers: l(i3), request_media_duration: o3.duration};
                o3.type === "main" ? (p2.request_type = "media", p2.request_current_level = o3.level, p2.request_video_width = (a2.levels[o3.level] || {}).width, p2.request_video_height = (a2.levels[o3.level] || {}).height) : p2.request_type = o3.type, n2("requestcompleted", p2);
              };
              a2.on(r2.Events.FRAG_LOADED, h);
              var _ = function(e3, t3) {
                var a3 = t3.details, i3 = t3.response, o3 = t3.context, s2 = t3.frag;
                if (a3 === r2.ErrorDetails.MANIFEST_LOAD_ERROR || a3 === r2.ErrorDetails.MANIFEST_LOAD_TIMEOUT || a3 === r2.ErrorDetails.FRAG_LOAD_ERROR || a3 === r2.ErrorDetails.FRAG_LOAD_TIMEOUT || a3 === r2.ErrorDetails.LEVEL_LOAD_ERROR || a3 === r2.ErrorDetails.LEVEL_LOAD_TIMEOUT) {
                  var d2 = s2 && s2.url || o3 && o3.url || "";
                  n2("requestfailed", {request_error: a3, request_url: d2, request_hostname: (0, u.extractHostname)(d2), request_type: a3 === r2.ErrorDetails.FRAG_LOAD_ERROR || a3 === r2.ErrorDetails.FRAG_LOAD_TIMEOUT ? "media" : "manifest", request_error_code: i3 && i3.code, request_error_text: i3 && i3.text});
                }
              };
              a2.on(r2.Events.ERROR, _);
              var p = function(e3, t3) {
                var a3 = t3.frag, r3 = a3 && a3._url || "";
                n2("requestcanceled", {request_cancel: e3, request_url: r3, request_type: "media", request_hostname: (0, u.extractHostname)(r3)});
              };
              a2.on(r2.Events.FRAG_LOAD_EMERGENCY_ABORTED, p);
              var v = function(e3, t3) {
                var r3 = t3.level, o3 = a2.levels.find(function(e4) {
                  return e4.level === r3;
                });
                if (o3 && o3.attrs && o3.attrs.BANDWIDTH) {
                  var s2 = o3.attrs.BANDWIDTH;
                  s2 ? n2("renditionchange", {video_source_bitrate: s2, video_source_width: o3.width, video_source_height: o3.height}) : i2.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
                }
              };
              a2.on(r2.Events.LEVEL_SWITCHED, v), a2._stopMuxMonitor = function() {
                a2.off(r2.Events.MANIFEST_LOADED, o2), a2.off(r2.Events.LEVEL_LOADED, c2), a2.off(r2.Events.AUDIO_TRACK_LOADED, f2), a2.off(r2.Events.FRAG_LOADED, h), a2.off(r2.Events.ERROR, _), a2.off(r2.Events.FRAG_LOAD_EMERGENCY_ABORTED, p), a2.off(r2.Events.LEVEL_SWITCHED, v), a2.off(r2.Events.DESTROYING, a2._stopMuxMonitor), delete a2._stopMuxMonitor;
              }, a2.on(r2.Events.DESTROYING, a2._stopMuxMonitor);
            }, f = function(e2) {
              e2 && typeof e2._stopMuxMonitor == "function" && e2._stopMuxMonitor();
            };
            t.monitorHlsJs = c, t.stopMonitoringHlsJs = f;
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.stopMonitoringDashJS = t.monitorDashJS = void 0;
            var i = a(0), n = r(i), o = a(8), s = r(o), u = a(5), d = function(e2, t2) {
              if (!e2 || typeof e2.getRequests != "function")
                return {};
              var a2 = e2.getRequests({state: "executed"});
              if (a2.length === 0)
                return {};
              var r2 = a2[a2.length - 1], i2 = (0, u.extractHostname)(r2.url), n2 = r2.bytesLoaded, o2 = new Date(r2.requestStartDate).getTime(), d2 = new Date(r2.firstByteDate).getTime(), l2 = new Date(r2.requestEndDate).getTime(), c2 = isNaN(r2.duration) ? 0 : r2.duration, f2 = typeof t2.getMetricsFor == "function" ? t2.getMetricsFor(r2.mediaType).HttpList : t2.getDashMetrics().getHttpRequests(r2.mediaType), h = void 0;
              return f2.length > 0 && (h = (0, s.default)(f2[f2.length - 1]._responseHeaders || "")), {requestStart: o2, requestResponseStart: d2, requestResponseEnd: l2, requestBytesLoaded: n2, requestResponseHeaders: h, requestMediaDuration: c2, requestHostname: i2};
            }, l = function(e2, t2) {
              var a2 = t2.getQualityFor(e2), r2 = t2.getCurrentTrackFor(e2), i2 = r2.bitrateList;
              return i2 ? {currentLevel: a2, renditionWidth: i2[a2].width || null, renditionHeight: i2[a2].height || null, renditionBitrate: i2[a2].bandwidth} : {};
            }, c = function(e2, t2, a2) {
              var r2 = (arguments.length > 3 && arguments[3] !== void 0 && arguments[3], e2.log);
              if (!a2 || !a2.on)
                return void r2.warn("Invalid dash.js player reference. Monitoring blocked.");
              var i2 = function(a3, r3) {
                return e2.emit(t2, a3, r3);
              }, o2 = function(e3) {
                var t3 = e3.type, a3 = e3.data, r3 = a3 || {}, n2 = r3.url;
                i2("requestcompleted", {request_event_type: t3, request_start: 0, request_response_start: 0, request_response_end: 0, request_bytes_loaded: -1, request_type: "manifest", request_hostname: (0, u.extractHostname)(n2)});
              };
              a2.on("manifestLoaded", o2);
              var s2 = {}, c2 = function(e3) {
                var t3 = e3.type, r3 = e3.fragmentModel, n2 = e3.chunk, o3 = n2 || {}, u2 = o3.mediaInfo, l2 = u2 || {}, c3 = l2.type, f3 = l2.bitrateList;
                f3 = f3 || [];
                var h2 = {};
                f3.forEach(function(e4, t4) {
                  h2[t4] = {}, h2[t4].width = e4.width, h2[t4].height = e4.height, h2[t4].bitrate = e4.bandwidth, h2[t4].attrs = {};
                }), c3 === "video" ? s2.video = h2 : c3 === "audio" ? s2.audio = h2 : s2.media = h2;
                var _2 = d(r3, a2), p2 = _2.requestStart, v2 = _2.requestResponseStart, y = _2.requestResponseEnd, m = _2.requestResponseHeaders, b = _2.requestMediaDuration, g = _2.requestHostname;
                i2("requestcompleted", {request_event_type: t3, request_start: p2, request_response_start: v2, request_response_end: y, request_bytes_loaded: -1, request_type: c3 + "_init", request_response_headers: m, request_hostname: g, request_media_duration: b, request_rendition_lists: s2});
              };
              a2.on("initFragmentLoaded", c2);
              var f2 = function(e3) {
                var t3 = e3.type, r3 = e3.fragmentModel, n2 = e3.chunk, o3 = n2 || {}, s3 = o3.mediaInfo, u2 = o3.start, c3 = s3 || {}, f3 = c3.type, h2 = d(r3, a2), _2 = h2.requestStart, p2 = h2.requestResponseStart, v2 = h2.requestResponseEnd, y = h2.requestBytesLoaded, m = h2.requestResponseHeaders, b = h2.requestMediaDuration, g = h2.requestHostname, w = l(f3, a2), x = w.currentLevel, T = w.renditionWidth, k = w.renditionHeight, E = w.renditionBitrate;
                i2("requestcompleted", {request_event_type: t3, request_start: _2, request_response_start: p2, request_response_end: v2, request_bytes_loaded: y, request_type: f3, request_response_headers: m, request_hostname: g, request_media_start_time: u2, request_media_duration: b, request_current_level: x, request_labeled_bitrate: E, request_video_width: T, request_video_height: k});
              };
              a2.on("mediaFragmentLoaded", f2);
              var h = {video: void 0, audio: void 0, totalBitrate: void 0}, _ = function() {
                if (h.video && typeof h.video.bitrate == "number") {
                  if (!h.video.width || !h.video.height)
                    return void r2.warn("have bitrate info for video but missing width/height");
                  var e3 = h.video.bitrate;
                  return h.audio && typeof h.audio.bitrate == "number" && (e3 += h.audio.bitrate), e3 !== h.totalBitrate ? (h.totalBitrate = e3, {video_source_bitrate: e3, video_source_height: h.video.height, video_source_width: h.video.width}) : void 0;
                }
              }, p = function(e3, t3, n2) {
                if (typeof e3.newQuality != "number")
                  return void r2.warn("missing evt.newQuality in qualityChangeRendered event", e3);
                var o3 = e3.mediaType;
                if (o3 === "audio" || o3 === "video") {
                  var s3 = a2.getBitrateInfoListFor(o3).find(function(t4) {
                    return t4.qualityIndex === e3.newQuality;
                  });
                  if (!s3 || typeof s3.bitrate != "number")
                    return void r2.warn("missing bitrate info for " + o3);
                  h[o3] = s3;
                  var u2 = _();
                  u2 && i2("renditionchange", u2);
                }
              };
              a2.on("qualityChangeRendered", p);
              var v = function(e3) {
                var t3 = e3.error, a3 = e3.event;
                a3 = a3 || {};
                var r3 = a3.request || {}, o3 = n.default.event && n.default.event.currentTarget || {};
                i2("requestfailed", {request_error: t3 + "_" + a3.id + "_" + r3.type, request_url: a3.url, request_hostname: (0, u.extractHostname)(a3.url), request_type: r3.mediaType, request_error_code: o3.status, request_error_type: o3.statusText});
              };
              a2.on("error", v), a2._stopMuxMonitor = function() {
                a2.off("manifestLoaded", o2), a2.off("initFragmentLoaded", c2), a2.off("mediaFragmentLoaded", f2), a2.off("qualityChangeRendered", p), a2.off("error", v), delete a2._stopMuxMonitor;
              };
            }, f = function(e2) {
              e2 && typeof e2._stopMuxMonitor == "function" && e2._stopMuxMonitor();
            };
            t.monitorDashJS = c, t.stopMonitoringDashJS = f;
          }, function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: true});
            var r = function() {
            }, i = 0;
            r.prototype.on = function(e2, t2, a2) {
              return t2._eventEmitterGuid = t2._eventEmitterGuid || ++i, this._listeners = this._listeners || {}, this._listeners[e2] = this._listeners[e2] || [], a2 && (t2 = t2.bind(a2)), this._listeners[e2].push(t2), t2;
            }, r.prototype.off = function(e2, t2) {
              var a2 = this._listeners && this._listeners[e2];
              a2 && a2.forEach(function(e3, r2) {
                e3._eventEmitterGuid === t2._eventEmitterGuid && a2.splice(r2, 1);
              });
            }, r.prototype.one = function(e2, t2, a2) {
              var r2 = this;
              t2._eventEmitterGuid = t2._eventEmitterGuid || ++i;
              var n = function i2() {
                r2.off(e2, i2), t2.apply(a2 || this, arguments);
              };
              n._eventEmitterGuid = t2._eventEmitterGuid, this.on(e2, n);
            }, r.prototype.emit = function(e2, t2) {
              var a2 = this;
              if (this._listeners) {
                t2 = t2 || {};
                var r2 = this._listeners["before*"] || [], i2 = this._listeners[e2] || [], n = this._listeners["after" + e2] || [], o = function(t3, r3) {
                  t3 = t3.slice(), t3.forEach(function(t4) {
                    t4.call(a2, {type: e2}, r3);
                  });
                };
                o(r2, t2), o(i2, t2), o(n, t2);
              }
            }, t.default = r;
          }, function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: true});
            var r = a(0), i = function(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }(r), n = function() {
              this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = false, this.on("playing", function() {
                this._playheadShouldBeProgressing = true;
              }), this.on("play", this._startPlaybackHeartbeatInterval), this.on("playing", this._startPlaybackHeartbeatInterval), this.on("adbreakstart", this._startPlaybackHeartbeatInterval), this.on("adplay", this._startPlaybackHeartbeatInterval), this.on("adplaying", this._startPlaybackHeartbeatInterval), this.on("seeking", this._startPlaybackHeartbeatInterval), this.on("devicewake", this._startPlaybackHeartbeatInterval), this.on("viewstart", this._startPlaybackHeartbeatInterval), this.on("pause", this._stopPlaybackHeartbeatInterval), this.on("ended", this._stopPlaybackHeartbeatInterval), this.on("viewend", this._stopPlaybackHeartbeatInterval), this.on("error", this._stopPlaybackHeartbeatInterval), this.on("aderror", this._stopPlaybackHeartbeatInterval), this.on("adpause", this._stopPlaybackHeartbeatInterval), this.on("adended", this._stopPlaybackHeartbeatInterval), this.on("adbreakend", this._stopPlaybackHeartbeatInterval), this.on("seeked", function() {
                this.data.player_is_paused ? this._stopPlaybackHeartbeatInterval() : this._startPlaybackHeartbeatInterval();
              }), this.on("timeupdate", function() {
                this._playbackHeartbeatInterval !== null && this.emit("playbackheartbeat");
              }), this.on("devicesleep", function(e2, t2) {
                this._playbackHeartbeatInterval !== null && (i.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend", {viewer_time: t2.viewer_time}), this._playbackHeartbeatInterval = null);
              });
            };
            n.prototype._startPlaybackHeartbeatInterval = function() {
              var e2 = this;
              this._playbackHeartbeatInterval === null && (this.emit("playbackheartbeat"), this._playbackHeartbeatInterval = i.default.setInterval(function() {
                e2.emit("playbackheartbeat");
              }, this.playbackHeartbeatTime));
            }, n.prototype._stopPlaybackHeartbeatInterval = function() {
              this._playheadShouldBeProgressing = false, this._playbackHeartbeatInterval !== null && (i.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null);
            }, t.default = n;
          }, function(e, t, a) {
            "use strict";
            function r() {
              var e2 = this;
              this.on("viewinit", function() {
                e2.viewErrored = false;
              }), this.on("error", function() {
                try {
                  var t2 = e2.errorTranslator({player_error_code: e2.data.player_error_code, player_error_message: e2.data.player_error_message});
                  t2 ? (e2.data.player_error_code = t2.player_error_code, e2.data.player_error_message = t2.player_error_message, e2.viewErrored = true) : (delete e2.data.player_error_code, delete e2.data.player_error_message);
                } catch (t3) {
                  e2.mux.log.warn("Exception in error translator callback.", t3), e2.viewErrored = true;
                }
              });
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.default = r;
          }, function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: true});
            var r = a(2), i = function(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }(r), n = function() {
              this._watchTimeTrackerLastCheckedTime = null, this.on("playbackheartbeat", this._updateWatchTime), this.on("playbackheartbeatend", this._clearWatchTimeState);
            };
            n.prototype._updateWatchTime = function(e2, t2) {
              var a2 = t2.viewer_time;
              this._watchTimeTrackerLastCheckedTime === null && (this._watchTimeTrackerLastCheckedTime = a2), (0, i.default)(this.data, "view_watch_time", a2 - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = a2;
            }, n.prototype._clearWatchTimeState = function(e2, t2) {
              this._updateWatchTime(e2, t2), this._watchTimeTrackerLastCheckedTime = null;
            }, t.default = n;
          }, function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: true});
            var r = a(2), i = function(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }(r), n = function() {
              this._playbackTimeTrackerLastPlayheadPosition = -1, this.on("playbackheartbeat", this._updatePlaybackTime), this.on("playbackheartbeatend", this._clearPlaybackTimeState), this.on("seeking", this._clearPlaybackTimeState);
            };
            n.prototype._updatePlaybackTime = function() {
              var e2 = this.data.player_playhead_time;
              if (this._playbackTimeTrackerLastPlayheadPosition >= 0 && e2 > this._playbackTimeTrackerLastPlayheadPosition) {
                var t2 = e2 - this._playbackTimeTrackerLastPlayheadPosition;
                t2 <= 1e3 && (0, i.default)(this.data, "view_content_playback_time", t2);
              }
              this._playbackTimeTrackerLastPlayheadPosition = e2;
            }, n.prototype._clearPlaybackTimeState = function() {
              this._updatePlaybackTime(), this._playbackTimeTrackerLastPlayheadPosition = -1;
            }, t.default = n;
          }, function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: true});
            var r = function() {
              this.on("playbackheartbeat", this._updatePlayheadTime), this.on("playbackheartbeatend", this._updatePlayheadTime), this.on("timeupdate", this._updatePlayheadTime), this.on("destroy", function() {
                this.off("timeupdate", this._updatePlayheadTime);
              });
            };
            r.prototype._updateMaxPlayheadPosition = function() {
              this.data.view_max_playhead_position = this.data.view_max_playhead_position === void 0 ? this.data.player_playhead_time : Math.max(this.data.view_max_playhead_position, this.data.player_playhead_time);
            }, r.prototype._updatePlayheadTime = function(e2, t2) {
              if (t2.player_playhead_time)
                this.data.player_playhead_time = t2.player_playhead_time, this._updateMaxPlayheadPosition();
              else if (this.getPlayheadTime) {
                var a2 = this.getPlayheadTime();
                a2 !== void 0 && (this.data.player_playhead_time = a2, this._updateMaxPlayheadPosition());
              }
            }, t.default = r;
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            Object.defineProperty(t, "__esModule", {value: true});
            var i = a(3), n = r(i), o = a(2), s = r(o), u = function() {
              this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, this.on("playbackheartbeat", this._checkIfRebuffering), this.on("playbackheartbeatend", this._cleanupRebufferTracker), this.on("seeking", function() {
                this._cleanupRebufferTracker(null, {viewer_time: n.default.now()});
              });
            };
            u.prototype._checkIfRebuffering = function(e2, t2) {
              if (!this.disableRebufferTracking) {
                if (this.isSeeking || this.isAdBreak || !this._playheadShouldBeProgressing)
                  return void this._cleanupRebufferTracker(e2, t2);
                if (this._lastCheckedTime === null)
                  return this._prepareRebufferTrackerState(t2.viewer_time), void this._updateRebufferMetrics();
                if (this._lastPlayheadTime !== this.data.player_playhead_time)
                  return void this._cleanupRebufferTracker(e2, t2, true);
                var a2 = t2.viewer_time - this._lastPlayheadTimeUpdatedTime;
                a2 >= this.sustainedRebufferThreshold && (this._rebuffering ? this._updateRebufferMetrics(t2.viewer_time - this._lastCheckedTime) : (this._rebuffering = true, (0, s.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(a2), this.emit("rebufferstart"))), this._lastCheckedTime = t2.viewer_time;
              }
            }, u.prototype._clearRebufferTrackerState = function() {
              this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null;
            }, u.prototype._prepareRebufferTrackerState = function(e2) {
              this._lastCheckedTime = e2, this._lastPlayheadTime = this.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = e2;
            }, u.prototype._cleanupRebufferTracker = function(e2, t2) {
              var a2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
              if (!this.disableRebufferTracking) {
                if (this._rebuffering)
                  this._rebuffering = false, this._updateRebufferMetrics(t2.viewer_time - this._lastCheckedTime), this.emit("rebufferend", {viewer_time: t2.viewer_time});
                else {
                  if (this._lastCheckedTime === null)
                    return void this._updateRebufferMetrics();
                  var r2 = this.data.player_playhead_time - this._lastPlayheadTime, i2 = t2.viewer_time - this._lastPlayheadTimeUpdatedTime;
                  r2 > 0 && i2 - r2 > this.minimumRebufferDuration ? ((0, s.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(i2 - r2), this.emit("rebufferstart", {viewer_time: this._lastPlayheadTimeUpdatedTime}), this.emit("rebufferend", {viewer_time: this._lastPlayheadTimeUpdatedTime + i2 - r2})) : this._updateRebufferMetrics();
                }
                a2 ? this._prepareRebufferTrackerState(t2.viewer_time) : this._clearRebufferTrackerState();
              }
            }, u.prototype._updateRebufferMetrics = function(e2) {
              e2 > 0 && (0, s.default)(this.data, "view_rebuffer_duration", e2), this.data.view_watch_time >= 0 && this.data.view_rebuffer_count > 0 && (this.data.view_rebuffer_frequency = this.data.view_rebuffer_count / this.data.view_watch_time, this.data.view_rebuffer_percentage = this.data.view_rebuffer_duration / this.data.view_watch_time);
            }, t.default = u;
          }, function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: true});
            var r = a(3), i = function(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }(r), n = function() {
              this.on("viewinit", function() {
                var e2 = this.data, t2 = e2.view_id;
                if (!e2.view_program_changed) {
                  var a2 = function(e3, a3) {
                    var r2 = a3.viewer_time;
                    e3.type === "playing" && this.data.view_time_to_first_frame === void 0 ? this.calculateTimeToFirstFrame(r2 || i.default.now(), t2) : e3.type !== "adplaying" || this.data.view_time_to_first_frame !== void 0 && !this.inPrerollPosition() || this.calculateTimeToFirstFrame(r2 || i.default.now(), t2);
                  };
                  this.one("playing", a2), this.one("adplaying", a2), this.one("viewend", function() {
                    this.off("playing", a2), this.off("adplaying", a2);
                  });
                }
              });
            };
            n.prototype.calculateTimeToFirstFrame = function(e2, t2) {
              t2 === this.data.view_id && (this._updateWatchTime(null, {viewer_time: e2}), this.data.view_time_to_first_frame = this.data.view_watch_time, (this.data.player_autoplay_on || this.data.video_is_autoplay) && this.NAVIGATION_START && (this.data.view_aggregate_startup_time = this.data.view_start + this.data.view_watch_time - this.NAVIGATION_START));
            }, t.default = n;
          }, function(e, t, a) {
            "use strict";
            function r() {
              var e2 = this;
              this.on("viewinit", function() {
                this._lastPlayheadPosition = -1;
              });
              var t2 = ["pause", "rebufferstart", "seeking", "error", "adbreakstart", "hb"], a2 = ["playing", "hb"];
              t2.forEach(function(t3) {
                e2.on(t3, function() {
                  if (this._lastPlayheadPosition >= 0 && this.data.player_playhead_time >= 0 && this._lastPlayerWidth >= 0 && this._lastSourceWidth > 0 && this._lastPlayerHeight >= 0 && this._lastSourceHeight > 0) {
                    var e3 = this.data.player_playhead_time - this._lastPlayheadPosition;
                    if (e3 < 0)
                      return void (this._lastPlayheadPosition = -1);
                    var t4 = Math.min(this._lastPlayerWidth / this._lastSourceWidth, this._lastPlayerHeight / this._lastSourceHeight), a3 = Math.max(0, t4 - 1), r2 = Math.max(0, 1 - t4);
                    this.data.view_max_upscale_percentage = Math.max(this.data.view_max_upscale_percentage || 0, a3), this.data.view_max_downscale_percentage = Math.max(this.data.view_max_downscale_percentage || 0, r2), (0, n.default)(this.data, "view_total_content_playback_time", e3), (0, n.default)(this.data, "view_total_upscaling", a3 * e3), (0, n.default)(this.data, "view_total_downscaling", r2 * e3);
                  }
                  this._lastPlayheadPosition = -1;
                });
              }), a2.forEach(function(t3) {
                e2.on(t3, function() {
                  this._lastPlayheadPosition = this.data.player_playhead_time, this._lastPlayerWidth = this.data.player_width, this._lastPlayerHeight = this.data.player_height, this._lastSourceWidth = this.data.video_source_width, this._lastSourceHeight = this.data.video_source_height;
                });
              });
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.default = r;
            var i = a(2), n = function(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }(i);
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            function i() {
              this.isSeeking = false, this.on("seeking", function(e2, t2) {
                (0, l.default)(this.data, t2), this._lastSeekingTime = o.default.now(), this.isSeeking === false && (this.isSeeking = true, this.send("seeking"));
              }), this.on("seeked", function() {
                this.isSeeking = false;
                var e2 = this._lastSeekingTime || o.default.now(), t2 = o.default.now() - e2;
                (0, u.default)(this.data, "view_seek_count", 1), (0, u.default)(this.data, "view_seek_duration", t2);
                var a2 = this.data.view_max_seek_time || 0;
                this.data.view_max_seek_time = Math.max(a2, t2);
              }), this.on("viewend", function() {
                this.isSeeking = false;
              });
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.default = i;
            var n = a(3), o = r(n), s = a(2), u = r(s), d = a(1), l = r(d);
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            Object.defineProperty(t, "__esModule", {value: true});
            var i = function() {
              function e2(e3, t2) {
                var a2 = [], r2 = true, i2 = false, n2 = void 0;
                try {
                  for (var o2, s2 = e3[Symbol.iterator](); !(r2 = (o2 = s2.next()).done) && (a2.push(o2.value), !t2 || a2.length !== t2); r2 = true)
                    ;
                } catch (e4) {
                  i2 = true, n2 = e4;
                } finally {
                  try {
                    !r2 && s2.return && s2.return();
                  } finally {
                    if (i2)
                      throw n2;
                  }
                }
                return a2;
              }
              return function(t2, a2) {
                if (Array.isArray(t2))
                  return t2;
                if (Symbol.iterator in Object(t2))
                  return e2(t2, a2);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              };
            }(), n = a(2), o = r(n), s = a(5), u = a(1), d = r(u), l = function(e2, t2) {
              e2.push(t2), e2.sort(function(e3, t3) {
                return e3.viewer_time - t3.viewer_time;
              });
            }, c = ["adbreakstart", "adrequest", "adresponse", "adplay", "adplaying", "adpause", "adended", "adbreakend", "aderror"], f = function() {
              var e2 = this;
              this.on("viewinit", function() {
                this.isAdBreak = false, this._currentAdRequestNumber = 0, this._currentAdResponseNumber = 0, this._adRequests = [], this._adResponses = [], this._adHasPlayed = false, this._wouldBeNewAdPlay = true, this._prerollPlayTime = void 0;
              }), c.forEach(function(t3) {
                return e2.on(t3, e2._updateAdData);
              });
              var t2 = function() {
                e2.isAdBreak = false;
              };
              this.on("adbreakstart", function() {
                this.isAdBreak = true;
              }), this.on("play", t2), this.on("playing", t2), this.on("viewend", t2), this.on("adrequest", function(e3, t3) {
                t3 = (0, d.default)({ad_request_id: "generatedAdRequestId" + this._currentAdRequestNumber++}, t3), l(this._adRequests, t3), (0, o.default)(this.data, "view_ad_request_count"), this.inPrerollPosition() && (this.data.view_preroll_requested = true, this._adHasPlayed || (0, o.default)(this.data, "view_preroll_request_count"));
              }), this.on("adresponse", function(e3, t3) {
                t3 = (0, d.default)({ad_request_id: "generatedAdRequestId" + this._currentAdResponseNumber++}, t3), l(this._adResponses, t3);
                var a2 = this.findAdRequest(t3.ad_request_id);
                a2 && (0, o.default)(this.data, "view_ad_request_time", Math.max(0, t3.viewer_time - a2.viewer_time));
              }), this.on("adplay", function(e3, t3) {
                this._adHasPlayed = true, this._wouldBeNewAdPlay && (this._wouldBeNewAdPlay = false, (0, o.default)(this.data, "view_ad_played_count")), this.inPrerollPosition() && !this.data.view_preroll_played && (this.data.view_preroll_played = true, this._adRequests.length > 0 && (this.data.view_preroll_request_time = Math.max(0, t3.viewer_time - this._adRequests[0].viewer_time)), this.data.view_start && (this.data.view_startup_preroll_request_time = Math.max(0, t3.viewer_time - this.data.view_start)), this._prerollPlayTime = t3.viewer_time);
              }), this.on("adplaying", function(e3, t3) {
                this.inPrerollPosition() && this.data.view_preroll_load_time === void 0 && this._prerollPlayTime !== void 0 && (this.data.view_preroll_load_time = t3.viewer_time - this._prerollPlayTime, this.data.view_startup_preroll_load_time = t3.viewer_time - this._prerollPlayTime);
              }), this.on("adended", function() {
                this._wouldBeNewAdPlay = true;
              }), this.on("aderror", function() {
                this._wouldBeNewAdPlay = true;
              });
            };
            f.prototype.inPrerollPosition = function() {
              return this.data.view_content_playback_time === void 0 || this.data.view_content_playback_time <= 1e3;
            }, f.prototype.findAdRequest = function(e2) {
              for (var t2 = 0; t2 < this._adRequests.length; t2++)
                if (this._adRequests[t2].ad_request_id === e2)
                  return this._adRequests[t2];
            }, f.prototype._updateAdData = function(e2, t2) {
              if (this.inPrerollPosition()) {
                if (!this.data.view_preroll_ad_tag_hostname && t2.ad_tag_url) {
                  var a2 = (0, s.extractHostnameAndDomain)(t2.ad_tag_url), r2 = i(a2, 2), n2 = r2[0], o2 = r2[1];
                  this.data.view_preroll_ad_tag_domain = o2, this.data.view_preroll_ad_tag_hostname = n2;
                }
                if (!this.data.view_preroll_ad_asset_hostname && t2.ad_asset_url) {
                  var u2 = (0, s.extractHostnameAndDomain)(t2.ad_asset_url), d2 = i(u2, 2), l2 = d2[0], c2 = d2[1];
                  this.data.view_preroll_ad_asset_domain = c2, this.data.view_preroll_ad_asset_hostname = l2;
                }
              }
            }, t.default = f;
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            function i() {
              var e2 = this, t2 = void 0, a2 = void 0, r2 = function() {
                e2.disableRebufferTracking || ((0, u.default)(e2.data, "view_waiting_rebuffer_count", 1), t2 = o.default.now(), a2 = window.setInterval(function() {
                  if (t2) {
                    var a3 = o.default.now();
                    (0, u.default)(e2.data, "view_waiting_rebuffer_duration", a3 - t2), t2 = a3;
                  }
                }, 250));
              }, i2 = function() {
                e2.disableRebufferTracking || t2 && ((0, u.default)(e2.data, "view_waiting_rebuffer_duration", o.default.now() - t2), t2 = false, window.clearInterval(a2));
              }, n2 = false, s2 = function() {
                n2 = true;
              }, d = function() {
                n2 = false, i2();
              };
              this.on("waiting", function() {
                n2 && r2();
              }), this.on("playing", function() {
                i2(), s2();
              }), this.on("pause", d), this.on("seeking", d);
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.default = i;
            var n = a(3), o = r(n), s = a(2), u = r(s);
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            function i() {
              var e2 = this;
              this.one("playbackheartbeat", d), this.on("playbackheartbeatend", function() {
                e2.off("before*", l), e2.one("playbackheartbeat", d);
              });
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.default = i;
            var n = a(1), o = r(n), s = a(3), u = r(s), d = function() {
              this.lastWallClockTime = u.default.now(), this.on("before*", l);
            }, l = function(e2) {
              var t2 = u.default.now(), a2 = this.lastWallClockTime;
              this.lastWallClockTime = t2, t2 - a2 > 3e4 && (this.emit("devicesleep", {viewer_time: a2}), (0, o.default)(this.data, {viewer_time: a2}), this.send("devicesleep"), this.emit("devicewake", {viewer_time: t2}), (0, o.default)(this.data, {viewer_time: t2}), this.send("devicewake"));
            };
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            Object.defineProperty(t, "__esModule", {value: true});
            var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
              return typeof e2;
            } : function(e2) {
              return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
            }, n = a(0), o = r(n), s = a(41), u = a(4), d = r(u), l = a(45), c = r(l), f = a(10), h = r(f), _ = a(46), p = r(_), v = a(15), y = r(v), m = a(47), b = r(m), g = a(1), w = r(g), x = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id", "player_instance_id"], T = ["viewstart", "error", "ended", "viewend"], k = function(e2, t2) {
              var a2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              this.mux = e2, this.envKey = t2, this.eventQueue = new b.default((0, c.default)(t2, a2.beaconDomain)), this.previousBeaconData = null, this.lastEventTime = null, this.sampleRate = a2.sampleRate, this.disableCookies = a2.disableCookies, this.respectDoNotTrack = a2.respectDoNotTrack;
              var r2 = a2.platform || {};
              this.pageLevelData = {mux_api_version: this.mux.API_VERSION, mux_embed: this.mux.NAME, mux_embed_version: this.mux.VERSION, viewer_application_name: r2.name, viewer_application_version: r2.version, viewer_application_engine: r2.layout, viewer_device_name: r2.product, viewer_device_category: "", viewer_device_manufacturer: r2.manufacturer, viewer_os_family: r2.os && r2.os.family, viewer_os_architecture: r2.os && r2.os.architecture, viewer_os_version: r2.os && r2.os.version};
              var i2 = (0, p.default)();
              i2 && (this.pageLevelData = (0, w.default)(this.pageLevelData, {viewer_connection_type: i2})), o.default !== void 0 && o.default.location && o.default.location.href && (this.pageLevelData.page_url = o.default.location.href), this.viewerData = this.disableCookies ? {} : (0, s.getAndUpdateViewerData)();
            };
            k.prototype.send = function(e2, t2) {
              if (e2) {
                if (this.respectDoNotTrack && (0, h.default)())
                  return d.default.info("Not sending `" + e2 + "` because Do Not Track is enabled");
                if (!t2 || (t2 === void 0 ? "undefined" : i(t2)) !== "object")
                  return d.default.error("A data object was expected in send() but was not provided");
                var a2 = this.disableCookies ? {} : (0, s.getAndUpdateSessionData)(), r2 = {};
                (0, w.default)(r2, this.pageLevelData), (0, w.default)(r2, t2), (0, w.default)(r2, a2), (0, w.default)(r2, this.viewerData), r2.event = e2, r2.env_key = this.envKey, r2.user_id && (r2.viewer_user_id = r2.user_id, delete r2.user_id);
                var n2 = r2.mux_sample_number >= this.sampleRate, o2 = this._deduplicateBeaconData(e2, r2), u2 = (0, y.default)(o2);
                if (this.lastEventTime = this.mux.utils.now(), n2)
                  return d.default.info("Not sending event due to sample rate restriction", e2, r2, u2);
                if (!this.envKey)
                  return d.default.info("Not sending event due to missing environment key", e2, r2, u2);
                if (!this.rateLimited) {
                  if (d.default.info("Sending event", e2, r2, u2), this.rateLimited = !this.eventQueue.queueEvent(e2, u2), this.mux.WINDOW_UNLOADING && e2 === "viewend")
                    this.eventQueue.destroy(true);
                  else if (T.indexOf(e2) >= 0 && this.eventQueue.flushEvents(), this.rateLimited)
                    return r2.event = "eventrateexceeded", u2 = (0, y.default)(r2), this.eventQueue.queueEvent(r2.event, u2), d.default.error("Beaconing disabled due to rate limit.");
                }
              }
            }, k.prototype.destroy = function() {
              this.eventQueue.destroy(false);
            };
            var E = function(e2, t2, a2, r2) {
              return !(!e2 || t2.indexOf("request_") !== 0) && (t2 === "request_response_headers" || ((a2 === void 0 ? "undefined" : i(a2)) !== "object" || (r2 === void 0 ? "undefined" : i(r2)) !== "object" || Object.keys(a2 || {}).length !== Object.keys(r2 || {}).length));
            }, q = function(e2, t2) {
              return e2 === "renditionchange" && t2.indexOf("video_source_") === 0;
            };
            k.prototype._deduplicateBeaconData = function(e2, t2) {
              var a2 = this, r2 = {}, i2 = t2.view_id;
              if (!i2 || e2 === "viewstart" || e2 === "viewend" || !this.previousBeaconData || this.mux.utils.now() - this.lastEventTime >= 6e5)
                r2 = (0, w.default)({}, t2), i2 && (this.previousBeaconData = r2), i2 && e2 === "viewend" && (this.previousBeaconData = null);
              else {
                var n2 = e2.indexOf("request") === 0;
                Object.keys(t2).forEach(function(i3) {
                  var o2 = t2[i3];
                  (o2 !== a2.previousBeaconData[i3] || x.indexOf(i3) > -1 || E(n2, i3, o2, a2.previousBeaconData[i3]) || q(e2, i3)) && (r2[i3] = o2, a2.previousBeaconData[i3] = o2);
                });
              }
              return r2;
            }, t.default = k;
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.getAndUpdateSessionData = t.getAndUpdateViewerData = void 0;
            var i = a(12), n = r(i), o = a(44), s = r(o), u = a(7), d = a(3), l = r(d), c = function() {
              var e2 = void 0;
              try {
                e2 = n.default.parse(s.default.get("muxData") || "");
              } catch (t2) {
                e2 = {};
              }
              return e2;
            }, f = function(e2) {
              try {
                s.default.set("muxData", n.default.stringify(e2), {expires: 7300});
              } catch (e3) {
              }
            }, h = function() {
              var e2 = c();
              return e2.mux_viewer_id = e2.mux_viewer_id || (0, u.generateUUID)(), e2.msn = e2.msn || Math.random(), f(e2), {mux_viewer_id: e2.mux_viewer_id, mux_sample_number: e2.msn};
            }, _ = function() {
              var e2 = c(), t2 = l.default.now();
              return e2.session_start && (e2.sst = e2.session_start, delete e2.session_start), e2.session_id && (e2.sid = e2.session_id, delete e2.session_id), e2.session_expires && (e2.sex = e2.session_expires, delete e2.session_expires), (!e2.sex || e2.sex < t2) && (e2.sid = (0, u.generateUUID)(), e2.sst = t2), e2.sex = t2 + 15e5, f(e2), {session_id: e2.sid, session_start: e2.sst, session_expires: e2.sex};
            };
            t.getAndUpdateViewerData = h, t.getAndUpdateSessionData = _;
          }, function(e, t, a) {
            "use strict";
            var r = a(13), i = a(14), n = {brackets: function(e2) {
              return e2 + "[]";
            }, indices: function(e2, t2) {
              return e2 + "[" + t2 + "]";
            }, repeat: function(e2) {
              return e2;
            }}, o = Date.prototype.toISOString, s = {delimiter: "&", encode: true, encoder: r.encode, encodeValuesOnly: false, serializeDate: function(e2) {
              return o.call(e2);
            }, skipNulls: false, strictNullHandling: false}, u = function e2(t2, a2, i2, n2, o2, u2, d, l, c, f, h, _) {
              var p = t2;
              if (typeof d == "function")
                p = d(a2, p);
              else if (p instanceof Date)
                p = f(p);
              else if (p === null) {
                if (n2)
                  return u2 && !_ ? u2(a2, s.encoder) : a2;
                p = "";
              }
              if (typeof p == "string" || typeof p == "number" || typeof p == "boolean" || r.isBuffer(p)) {
                if (u2) {
                  return [h(_ ? a2 : u2(a2, s.encoder)) + "=" + h(u2(p, s.encoder))];
                }
                return [h(a2) + "=" + h(String(p))];
              }
              var v = [];
              if (p === void 0)
                return v;
              var y;
              if (Array.isArray(d))
                y = d;
              else {
                var m = Object.keys(p);
                y = l ? m.sort(l) : m;
              }
              for (var b = 0; b < y.length; ++b) {
                var g = y[b];
                o2 && p[g] === null || (v = Array.isArray(p) ? v.concat(e2(p[g], i2(a2, g), i2, n2, o2, u2, d, l, c, f, h, _)) : v.concat(e2(p[g], a2 + (c ? "." + g : "[" + g + "]"), i2, n2, o2, u2, d, l, c, f, h, _)));
              }
              return v;
            };
            e.exports = function(e2, t2) {
              var a2 = e2, o2 = t2 ? r.assign({}, t2) : {};
              if (o2.encoder !== null && o2.encoder !== void 0 && typeof o2.encoder != "function")
                throw new TypeError("Encoder has to be a function.");
              var d = o2.delimiter === void 0 ? s.delimiter : o2.delimiter, l = typeof o2.strictNullHandling == "boolean" ? o2.strictNullHandling : s.strictNullHandling, c = typeof o2.skipNulls == "boolean" ? o2.skipNulls : s.skipNulls, f = typeof o2.encode == "boolean" ? o2.encode : s.encode, h = typeof o2.encoder == "function" ? o2.encoder : s.encoder, _ = typeof o2.sort == "function" ? o2.sort : null, p = o2.allowDots !== void 0 && o2.allowDots, v = typeof o2.serializeDate == "function" ? o2.serializeDate : s.serializeDate, y = typeof o2.encodeValuesOnly == "boolean" ? o2.encodeValuesOnly : s.encodeValuesOnly;
              if (o2.format === void 0)
                o2.format = i.default;
              else if (!Object.prototype.hasOwnProperty.call(i.formatters, o2.format))
                throw new TypeError("Unknown format option provided.");
              var m, b, g = i.formatters[o2.format];
              typeof o2.filter == "function" ? (b = o2.filter, a2 = b("", a2)) : Array.isArray(o2.filter) && (b = o2.filter, m = b);
              var w = [];
              if (typeof a2 != "object" || a2 === null)
                return "";
              var x;
              x = o2.arrayFormat in n ? o2.arrayFormat : "indices" in o2 ? o2.indices ? "indices" : "repeat" : "indices";
              var T = n[x];
              m || (m = Object.keys(a2)), _ && m.sort(_);
              for (var k = 0; k < m.length; ++k) {
                var E = m[k];
                c && a2[E] === null || (w = w.concat(u(a2[E], E, T, l, c, f ? h : null, b, _, p, v, g, y)));
              }
              var q = w.join(d), D = o2.addQueryPrefix === true ? "?" : "";
              return q.length > 0 ? D + q : "";
            };
          }, function(e, t, a) {
            "use strict";
            var r = a(13), i = Object.prototype.hasOwnProperty, n = {allowDots: false, allowPrototypes: false, arrayLimit: 20, decoder: r.decode, delimiter: "&", depth: 5, parameterLimit: 1e3, plainObjects: false, strictNullHandling: false}, o = function(e2, t2) {
              for (var a2 = {}, r2 = t2.ignoreQueryPrefix ? e2.replace(/^\?/, "") : e2, o2 = t2.parameterLimit === 1 / 0 ? void 0 : t2.parameterLimit, s2 = r2.split(t2.delimiter, o2), u2 = 0; u2 < s2.length; ++u2) {
                var d, l, c = s2[u2], f = c.indexOf("]="), h = f === -1 ? c.indexOf("=") : f + 1;
                h === -1 ? (d = t2.decoder(c, n.decoder), l = t2.strictNullHandling ? null : "") : (d = t2.decoder(c.slice(0, h), n.decoder), l = t2.decoder(c.slice(h + 1), n.decoder)), i.call(a2, d) ? a2[d] = [].concat(a2[d]).concat(l) : a2[d] = l;
              }
              return a2;
            }, s = function(e2, t2, a2) {
              for (var r2 = t2, i2 = e2.length - 1; i2 >= 0; --i2) {
                var n2, o2 = e2[i2];
                if (o2 === "[]")
                  n2 = [], n2 = n2.concat(r2);
                else {
                  n2 = a2.plainObjects ? Object.create(null) : {};
                  var s2 = o2.charAt(0) === "[" && o2.charAt(o2.length - 1) === "]" ? o2.slice(1, -1) : o2, u2 = parseInt(s2, 10);
                  !isNaN(u2) && o2 !== s2 && String(u2) === s2 && u2 >= 0 && a2.parseArrays && u2 <= a2.arrayLimit ? (n2 = [], n2[u2] = r2) : n2[s2] = r2;
                }
                r2 = n2;
              }
              return r2;
            }, u = function(e2, t2, a2) {
              if (e2) {
                var r2 = a2.allowDots ? e2.replace(/\.([^.[]+)/g, "[$1]") : e2, n2 = /(\[[^[\]]*])/, o2 = /(\[[^[\]]*])/g, u2 = n2.exec(r2), d = u2 ? r2.slice(0, u2.index) : r2, l = [];
                if (d) {
                  if (!a2.plainObjects && i.call(Object.prototype, d) && !a2.allowPrototypes)
                    return;
                  l.push(d);
                }
                for (var c = 0; (u2 = o2.exec(r2)) !== null && c < a2.depth; ) {
                  if (c += 1, !a2.plainObjects && i.call(Object.prototype, u2[1].slice(1, -1)) && !a2.allowPrototypes)
                    return;
                  l.push(u2[1]);
                }
                return u2 && l.push("[" + r2.slice(u2.index) + "]"), s(l, t2, a2);
              }
            };
            e.exports = function(e2, t2) {
              var a2 = t2 ? r.assign({}, t2) : {};
              if (a2.decoder !== null && a2.decoder !== void 0 && typeof a2.decoder != "function")
                throw new TypeError("Decoder has to be a function.");
              if (a2.ignoreQueryPrefix = a2.ignoreQueryPrefix === true, a2.delimiter = typeof a2.delimiter == "string" || r.isRegExp(a2.delimiter) ? a2.delimiter : n.delimiter, a2.depth = typeof a2.depth == "number" ? a2.depth : n.depth, a2.arrayLimit = typeof a2.arrayLimit == "number" ? a2.arrayLimit : n.arrayLimit, a2.parseArrays = a2.parseArrays !== false, a2.decoder = typeof a2.decoder == "function" ? a2.decoder : n.decoder, a2.allowDots = typeof a2.allowDots == "boolean" ? a2.allowDots : n.allowDots, a2.plainObjects = typeof a2.plainObjects == "boolean" ? a2.plainObjects : n.plainObjects, a2.allowPrototypes = typeof a2.allowPrototypes == "boolean" ? a2.allowPrototypes : n.allowPrototypes, a2.parameterLimit = typeof a2.parameterLimit == "number" ? a2.parameterLimit : n.parameterLimit, a2.strictNullHandling = typeof a2.strictNullHandling == "boolean" ? a2.strictNullHandling : n.strictNullHandling, e2 === "" || e2 === null || e2 === void 0)
                return a2.plainObjects ? Object.create(null) : {};
              for (var i2 = typeof e2 == "string" ? o(e2, a2) : e2, s2 = a2.plainObjects ? Object.create(null) : {}, d = Object.keys(i2), l = 0; l < d.length; ++l) {
                var c = d[l], f = u(c, i2[c], a2);
                s2 = r.merge(s2, f, a2);
              }
              return r.compact(s2);
            };
          }, function(e, t, a) {
            "use strict";
            var r, i, n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
              return typeof e2;
            } : function(e2) {
              return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
            };
            !function(o) {
              var s = false;
              if (r = o, (i = typeof r == "function" ? r.call(t, a, t, e) : r) !== void 0 && (e.exports = i), s = true, n(t) === "object" && (e.exports = o(), s = true), !s) {
                var u = window.Cookies, d = window.Cookies = o();
                d.noConflict = function() {
                  return window.Cookies = u, d;
                };
              }
            }(function() {
              function e2(a2) {
                function r2(e3, i2, n2) {
                  var o;
                  if (typeof document != "undefined") {
                    if (arguments.length > 1) {
                      if (n2 = t2({path: "/"}, r2.defaults, n2), typeof n2.expires == "number") {
                        var s = new Date();
                        s.setMilliseconds(s.getMilliseconds() + 864e5 * n2.expires), n2.expires = s;
                      }
                      try {
                        o = JSON.stringify(i2), /^[\{\[]/.test(o) && (i2 = o);
                      } catch (e4) {
                      }
                      return i2 = a2.write ? a2.write(i2, e3) : encodeURIComponent(String(i2)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e3 = encodeURIComponent(String(e3)), e3 = e3.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), e3 = e3.replace(/[\(\)]/g, escape), document.cookie = [e3, "=", i2, n2.expires ? "; expires=" + n2.expires.toUTCString() : "", n2.path ? "; path=" + n2.path : "", n2.domain ? "; domain=" + n2.domain : "", n2.secure ? "; secure" : ""].join("");
                    }
                    e3 || (o = {});
                    for (var u = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, l = 0; l < u.length; l++) {
                      var c = u[l].split("="), f = c.slice(1).join("=");
                      f.charAt(0) === '"' && (f = f.slice(1, -1));
                      try {
                        var h = c[0].replace(d, decodeURIComponent);
                        if (f = a2.read ? a2.read(f, h) : a2(f, h) || f.replace(d, decodeURIComponent), this.json)
                          try {
                            f = JSON.parse(f);
                          } catch (e4) {
                          }
                        if (e3 === h) {
                          o = f;
                          break;
                        }
                        e3 || (o[h] = f);
                      } catch (e4) {
                      }
                    }
                    return o;
                  }
                }
                return r2.set = r2, r2.get = function(e3) {
                  return r2.call(r2, e3);
                }, r2.getJSON = function() {
                  return r2.apply({json: true}, [].slice.call(arguments));
                }, r2.defaults = {}, r2.remove = function(e3, a3) {
                  r2(e3, "", t2(a3, {expires: -1}));
                }, r2.withConverter = e2, r2;
              }
              var t2 = function() {
                for (var e3 = 0, t3 = {}; e3 < arguments.length; e3++) {
                  var a2 = arguments[e3];
                  for (var r2 in a2)
                    t3[r2] = a2[r2];
                }
                return t3;
              };
              return e2(function() {
              });
            });
          }, function(e, t, a) {
            "use strict";
            function r(e2, t2) {
              return e2 = e2 || "", t2 = t2 || "litix.io", e2.match(/^[a-z0-9]+$/) ? "https://" + e2 + "." + t2 : "https://img.litix.io/a.gif";
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.default = r;
          }, function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: true});
            var r = a(0), i = function(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }(r), n = function() {
              var e2 = void 0;
              switch (o()) {
                case "cellular":
                  e2 = "cellular";
                  break;
                case "ethernet":
                  e2 = "wired";
                  break;
                case "wifi":
                  e2 = "wifi";
                  break;
                case void 0:
                  break;
                default:
                  e2 = "other";
              }
              return e2;
            }, o = function() {
              var e2 = i.default.navigator, t2 = e2 && (e2.connection || e2.mozConnection || e2.webkitConnection);
              return t2 && t2.type;
            };
            t.default = n;
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            Object.defineProperty(t, "__esModule", {value: true});
            var i = a(0), n = r(i), o = a(4), s = r(o), u = a(48), d = r(u), l = a(1), c = r(l), f = a(15), h = r(f), _ = !!n.default.XMLHttpRequest && "withCredentials" in new n.default.XMLHttpRequest(), p = {maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 5e3}, v = function(e2, t2) {
              this._beaconUrl = e2 || "https://img.litix.io", this._eventQueue = [], this._postInFlight = false, this._failureCount = 0, this._sendTimeout = false, this._options = (0, c.default)({}, p, t2);
            };
            v.prototype.queueEvent = function(e2, t2) {
              var a2 = (0, c.default)({}, t2);
              return _ ? (this._eventQueue.length <= this._options.maxQueueLength || e2 === "eventrateexceeded") && (this._eventQueue.push(a2), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength) : (d.default.send(this._beaconUrl, a2), true);
            }, v.prototype.flushEvents = function() {
              _ && (this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending());
            }, v.prototype.destroy = function() {
              var e2 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
              this.destroyed = true, e2 ? this._clearBeaconQueue() : this.flushEvents(), n.default.clearTimeout(this._sendTimeout);
            }, v.prototype._clearBeaconQueue = function() {
              var e2 = n.default.navigator, t2 = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0, a2 = this._eventQueue.slice(t2);
              if (t2 > 0 && (0, c.default)(a2[a2.length - 1], (0, h.default)({mux_view_message: "event queue truncated"})), e2.sendBeacon)
                e2.sendBeacon(this._beaconUrl, JSON.stringify({events: a2}));
              else if (n.default.XMLHttpRequest) {
                var r2 = new n.default.XMLHttpRequest();
                r2.open("POST", this._beaconUrl), r2.setRequestHeader("Content-Type", "application/json"), r2.send(JSON.stringify({events: a2}));
              } else
                d.default.send(this._beaconUrl, a2[a2.length - 1]);
            }, v.prototype._sendBeaconQueue = function() {
              var e2 = this;
              if (n.default.XMLHttpRequest && !this._postInFlight) {
                var t2 = new n.default.XMLHttpRequest(), a2 = this._eventQueue.slice(0, this._options.maxBeaconSize);
                this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = true, t2.onreadystatechange = function() {
                  t2.readyState === 4 && (t2.status !== 200 ? (e2._eventQueue = a2.concat(e2._eventQueue), e2._failureCount += 1, s.default.info("Error sending beacon: " + t2.status), s.default.info(t2.responseText)) : e2._failureCount = 0, e2._postInFlight = false);
                }, t2.open("POST", this._beaconUrl), t2.setRequestHeader("Content-Type", "application/json"), t2.send(JSON.stringify({events: a2}));
              }
            }, v.prototype._getNextBeaconTime = function() {
              if (!this._failureCount)
                return this._options.baseTimeBetweenBeacons;
              var e2 = Math.pow(2, this._failureCount - 1);
              return (1 + (e2 *= Math.random())) * this._options.baseTimeBetweenBeacons;
            }, v.prototype._startBeaconSending = function() {
              var e2 = this;
              n.default.clearTimeout(this._sendTimeout), this.destroyed || (this._sendTimeout = n.default.setTimeout(function() {
                e2._eventQueue.length && e2._sendBeaconQueue(), e2._startBeaconSending();
              }, this._getNextBeaconTime()));
            }, t.default = v;
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            Object.defineProperty(t, "__esModule", {value: true});
            var i = a(12), n = r(i), o = a(0), s = r(o), u = {};
            u.send = function(e2, t2) {
              function a2() {
                r2.src = o2 + (i2 ? "&rc=" + i2 : "");
              }
              var r2 = new Image(), i2 = 0, o2 = e2 + "?" + n.default.stringify(t2);
              return r2.addEventListener("error", function() {
                i2 > 3 || s.default.setTimeout(function() {
                  i2++, a2();
                }, 5e3 * i2);
              }), a2(), r2;
            }, t.default = u;
          }, function(e, t, a) {
            "use strict";
            function r() {
              function e2(e3, t3) {
                var a3 = t3.request_start, u2 = t3.request_response_start, d2 = t3.request_response_end, l = t3.request_bytes_loaded;
                o++;
                var c = void 0, f = void 0;
                if (u2 ? (c = u2 - a3, f = d2 - u2) : f = d2 - a3, f > 0 && l > 0) {
                  var h = l / f * 8e3;
                  s++, i += l, n += f, this.data.view_min_request_throughput = Math.min(this.data.view_min_request_throughput || 1 / 0, h), this.data.view_average_request_throughput = i / n * 8e3, this.data.view_request_count = o, c > 0 && (r2 += c, this.data.view_max_request_latency = Math.max(this.data.view_max_request_latency || 0, c), this.data.view_average_request_latency = r2 / s);
                }
              }
              function t2(e3, t3) {
                o++, u++, this.data.view_request_count = o, this.data.view_request_failed_count = u;
              }
              function a2(e3, t3) {
                o++, d++, this.data.view_request_count = o, this.data.view_request_canceled_count = d;
              }
              var r2 = 0, i = 0, n = 0, o = 0, s = 0, u = 0, d = 0;
              this.on("requestcompleted", e2), this.on("requestfailed", t2), this.on("requestcanceled", a2);
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.default = r;
          }, function(e, t, a) {
            "use strict";
            function r(e2, t2, a2) {
              var r2 = (0, u.findMediaElement)(t2), o2 = n(r2, 3), c = o2[0], f = o2[1], h = o2[2], _ = e2.log, p = e2.utils.getComputedStyle, v = e2.utils.secondsToMs, y = {automaticErrorTracking: true};
              return c ? h !== "video" && h !== "audio" ? _.error("The element of `" + f + "` was not a media element.") : (a2 = (0, s.default)(y, a2), a2.data = (0, s.default)({player_software: "HTML5 Video Element", player_software_version: "No Versions", player_mux_plugin_name: "VideoElementMonitor", player_mux_plugin_version: "4.0.1"}, a2.data), a2.getPlayheadTime = function() {
                return v(c.currentTime);
              }, a2.getStateData = function() {
                var e3 = this.hlsjs && this.hlsjs.url, t3 = this.dashjs && i(this.dashjs.getSource === "function") && this.dashjs.getSource();
                return {player_is_paused: c.paused, player_playhead_time: v(c.currentTime), player_width: parseInt(p(c, "width")), player_height: parseInt(p(c, "height")), player_autoplay_on: c.autoplay, player_preload_on: c.preload, video_poster_url: c.poster, video_source_url: e3 || t3 || c.currentSrc, video_source_duration: v(c.duration), video_source_height: c.videoHeight, video_source_width: c.videoWidth};
              }, c.mux = c.mux || {}, c.mux.emit = function(t3, a3) {
                e2.emit(f, t3, a3);
              }, c.mux.destroy = function() {
                Object.keys(c.mux.listeners).forEach(function(e3) {
                  c.removeEventListener(e3, c.mux.listeners[e3], false);
                }), delete c.mux.listeners, e2.emit(f, "destroy");
              }, c.mux.swapElement = function(t3) {
                var a3 = (0, u.findMediaElement)(t3), r3 = n(a3, 3), i2 = r3[0], o3 = r3[1], d2 = r3[2];
                return i2 ? d2 !== "video" && d2 !== "audio" ? e2.log.error("The element of `" + o3 + "` was not a media element.") : (i2.muxId = c.muxId, delete c.muxId, i2.mux = i2.mux || {}, i2.mux.listeners = (0, s.default)({}, c.mux.listeners), delete c.mux.listeners, Object.keys(i2.mux.listeners).forEach(function(e3) {
                  c.removeEventListener(e3, i2.mux.listeners[e3], false), i2.addEventListener(e3, i2.mux.listeners[e3], false);
                }), i2.mux.swapElement = c.mux.swapElement, i2.mux.destroy = c.mux.destroy, delete c.mux, void (c = i2)) : e2.log.error("No element was found with the `" + o3 + "` query selector.");
              }, c.mux.addHLSJS = function(t3) {
                e2.addHLSJS(f, t3);
              }, c.mux.addDashJS = function(t3) {
                e2.addDashJS(f, t3);
              }, c.mux.removeHLSJS = function() {
                e2.removeHLSJS(f);
              }, c.mux.removeDashJS = function() {
                e2.removeDashJS(f);
              }, e2.init(f, a2), e2.emit(f, "playerready"), c.paused || (e2.emit(f, "play"), c.readyState > 2 && e2.emit(f, "playing")), c.mux.listeners = {}, void d.forEach(function(t3) {
                (t3 !== "error" || a2.automaticErrorTracking) && (c.mux.listeners[t3] = function() {
                  var a3 = {};
                  t3 === "error" && (a3.player_error_code = c.error && c.error.code, a3.player_error_message = c.error && l[c.error.code]), e2.emit(f, t3, a3);
                }, c.addEventListener(t3, c.mux.listeners[t3], false));
              })) : _.error("No element was found with the `" + f + "` query selector.");
            }
            Object.defineProperty(t, "__esModule", {value: true});
            var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
              return typeof e2;
            } : function(e2) {
              return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
            }, n = function() {
              function e2(e3, t2) {
                var a2 = [], r2 = true, i2 = false, n2 = void 0;
                try {
                  for (var o2, s2 = e3[Symbol.iterator](); !(r2 = (o2 = s2.next()).done) && (a2.push(o2.value), !t2 || a2.length !== t2); r2 = true)
                    ;
                } catch (e4) {
                  i2 = true, n2 = e4;
                } finally {
                  try {
                    !r2 && s2.return && s2.return();
                  } finally {
                    if (i2)
                      throw n2;
                  }
                }
                return a2;
              }
              return function(t2, a2) {
                if (Array.isArray(t2))
                  return t2;
                if (Symbol.iterator in Object(t2))
                  return e2(t2, a2);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              };
            }();
            t.default = r;
            var o = a(1), s = function(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }(o), u = a(9), d = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"], l = {1: "MEDIA_ERR_ABORTED", 2: "MEDIA_ERR_NETWORK", 3: "MEDIA_ERR_DECODE", 4: "MEDIA_ERR_SRC_NOT_SUPPORTED"};
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }
            Object.defineProperty(t, "__esModule", {value: true});
            var i = a(52), n = r(i), o = a(2), s = r(o), u = a(53), d = r(u), l = a(54), c = r(l), f = a(1), h = r(f), _ = a(8), p = r(_), v = a(5), y = a(3), m = r(y), b = {};
            b.safeCall = n.default, b.safeIncrement = s.default, b.getComputedStyle = d.default, b.secondsToMs = c.default, b.assign = h.default, b.headersStringToObject = p.default, b.extractHostnameAndDomain = v.extractHostnameAndDomain, b.extractHostname = v.extractHostname, b.now = m.default.now, t.default = b;
          }, function(e, t, a) {
            "use strict";
            function r(e2, t2, a2, r2) {
              var i2 = r2;
              if (e2 && typeof e2[t2] == "function")
                try {
                  i2 = e2[t2].apply(e2, a2);
                } catch (e3) {
                  n.default.info("safeCall error", e3);
                }
              return i2;
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.default = r;
            var i = a(4), n = function(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }(i);
          }, function(e, t, a) {
            "use strict";
            function r(e2, t2) {
              if (e2 && t2 && n.default && typeof n.default.getComputedStyle == "function") {
                var a2 = void 0;
                return o && o.has(e2) && (a2 = o.get(e2)), a2 || (a2 = n.default.getComputedStyle(e2, null), o && o.set(e2, a2)), a2.getPropertyValue(t2);
              }
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.default = r;
            var i = a(0), n = function(e2) {
              return e2 && e2.__esModule ? e2 : {default: e2};
            }(i), o = void 0;
            n.default && n.default.WeakMap && (o = new WeakMap());
          }, function(e, t, a) {
            "use strict";
            function r(e2) {
              return Math.floor(1e3 * e2);
            }
            Object.defineProperty(t, "__esModule", {value: true}), t.default = r;
          }]);
        });
      })();
    });
  
    // src/js/utils/server-safe-globals.js
    var windowShim = {
      HTMLElement: function HTMLElement() {
      },
      customElements: {
        get: function() {
        },
        define: function() {
        },
        whenDefined: function() {
        }
      }
    };
    var documentShim = {
      createElement: function() {
        return {};
      }
    };
    var isServer = typeof window === "undefined";
    var Window = isServer ? windowShim : window;
    var Document = isServer ? documentShim : window.document;
  
    // src/js/utils/defineCustomElement.js
    function defineCustomElement(name, element) {
      if (!Window.customElements.get(name)) {
        Window.customElements.define(name, element);
        Window[element.name] = element;
      }
    }
  
    // src/js/utils/dashedToCamel.js
    function dashedToCamel(word) {
      return word.split("-").map(function(x, i) {
        return (i ? x[0].toUpperCase() : x[0].toLowerCase()) + x.slice(1).toLowerCase();
      }).join("");
    }
  
    // src/js/media-chrome-html-element.js
    var MediaChromeHTMLElement = class extends Window.HTMLElement {
      constructor() {
        super();
        this._media = null;
      }
      static get observedAttributes() {
        return ["media"].concat(super.observedAttributes || []);
      }
      attributeChangedCallback(attrName, oldValue, newValue) {
        const propName = dashedToCamel(attrName);
        if (propName == "media") {
          if (newValue === null) {
            this.media = null;
            return;
          }
          let media = Document.querySelector(newValue);
          if (!media || !media.play) {
            throw new Error("Supplied media attribute does not appear to match a media element.");
          }
          this.media = media;
          return;
        }
        if (typeof this[propName] == "boolean") {
          if (newValue === null) {
            this[propName] = false;
          } else {
            this[propName] = true;
          }
        } else {
          this[propName] = newValue;
        }
      }
      set media(media) {
        if (media === this._media)
          return;
        if (this._media) {
          this.mediaUnsetCallback(this._media);
        }
        this._media = media;
        propagateMedia(this, media);
        propagateMedia(this.shadowRoot, media);
        if (media) {
          const mediaName = media.nodeName.toLowerCase();
          if (mediaName.includes("-")) {
            Window.customElements.whenDefined(mediaName).then(() => {
              this.mediaSetCallback(media);
            });
          } else {
            this.mediaSetCallback(media);
          }
        }
      }
      get media() {
        return this._media;
      }
      connectedCallback() {
      }
      disconnectedCallback() {
      }
      mediaSetCallback() {
      }
      mediaUnsetCallback() {
      }
    };
    function setAndPropagateMedia(el, media) {
      const elName = el.nodeName.toLowerCase();
      if (elName == "media-chrome")
        return;
      if (elName.includes("-")) {
        Window.customElements.whenDefined(elName).then(() => {
          if (el instanceof MediaChromeHTMLElement) {
            el.media = media;
          } else {
            propagateMedia(el, media);
          }
        });
      } else if (el.slot !== "media") {
        propagateMedia(el, media);
      }
    }
    function propagateMedia(parent, media) {
      Array.prototype.forEach.call(parent.children, (child) => {
        setAndPropagateMedia(child, media);
      });
    }
    defineCustomElement("media-chrome-html-element", MediaChromeHTMLElement);
    var media_chrome_html_element_default = MediaChromeHTMLElement;
  
    // src/js/media-chrome-button.js
    var template = Document.createElement("template");
    template.innerHTML = `
  <style>
    :host {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      box-sizing: border-box;
      background-color: transparent;
  
      /* Default width and height can be overridden externally */
      height: 44px;
      width: 44px;
  
      /* Vertically center any text */
      font-size: 14px;
      line-height: 1;
      font-weight: bold;
  
      /* Min icon size is 24x24 */
      min-height: 24px;
      min-width: 24px;
  
      transition: background-color 0.15s linear;
    }
  
    /*
      Only show outline when keyboard focusing.
      https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo
    */
    :host-context(.media-focus-visible):host(:focus, :focus-within) {
      box-shadow: inset 0 0 0 2px rgba(27, 127, 204, 0.8);
    }
  
    :host(:hover) {
      background: rgba(255,255,255, 0.10);
    }
  
    button {
      width: 100%;
      height: 100%;
      vertical-align: middle;
      border: none;
      margin: 0;
      padding: 0;
      text-decoration: none;
      background: transparent;
      color: #ffffff;
      font-family: sans-serif;
      font-size: 14px;
      line-height: 24px;
      font-weight: bold;
      font-family: Arial, sans-serif;
      cursor: pointer;
      text-align: center;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
  
    button:hover {}
    button:focus {
      outline: 0;
    }
    button:active {}
  
    svg {
      width: var(--media-button-icon-width);
      height: var(--media-button-icon-height);
      transform: var(--media-button-icon-transform);
      transition: var(--media-button-icon-transition);
    }
  
    svg .icon {
      fill: var(--media-icon-color, #eee);
    }
  </style>
  <button id="container">
    <slot></slot>
  </button>
  `;
    var MediaChromeButton = class extends media_chrome_html_element_default {
      constructor() {
        super();
        var shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.container = this.shadowRoot.querySelector("#container");
        this.addEventListener("click", (e) => {
          this.onClick(e);
        });
      }
      onClick() {
      }
      set icon(svg) {
        this.container.innerHTML = svg;
      }
    };
    defineCustomElement("media-chrome-button", MediaChromeButton);
    var media_chrome_button_default = MediaChromeButton;
  
    // src/js/media-container.js
    var template2 = Document.createElement("template");
    template2.innerHTML = `
    <style>
      :host {
        box-sizing: border-box;
        position: relative;
  
        /* Position controls at the bottom  */
        display: flex;
        flex-direction: column-reverse;
  
        /* Default dimensions */
        width: 100%;
        max-width: 720px;
        height: 480px;
        background-color: #000;
      }
  
      /* Safari needs this to actually make the element fill the window */
      :host(:-webkit-full-screen) {
        /* Needs to use !important otherwise easy to break */
        width: 100% !important;
        height: 100% !important;
      }
  
      /* Position the media element to fill the container */
      ::slotted([slot=media]) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
  
      /* Hide controls when inactive and not paused */
      #container ::slotted(*) {
        opacity: 1;
        transition: opacity 0.25s;
        visibility: visible;
      }
  
      #container.inactive:not(.paused) ::slotted(*) {
        opacity: 0;
        transition: opacity 1s;
      }
    </style>
    <slot name="media"></slot>
    <div id="container">
      <slot></slot>
    </div>
  `;
    var MediaContainer = class extends Window.HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template2.content.cloneNode(true));
        this.container = this.shadowRoot.getElementById("container");
        const mutationCallback = (mutationsList, observer2) => {
          const media = this.media;
          for (let mutation of mutationsList) {
            if (mutation.type === "childList") {
              mutation.removedNodes.forEach((node) => {
                if (node.slot == "media" && mutation.target == this) {
                  let previousSibling = mutation.previousSibling && mutation.previousSibling.previousElementSibling;
                  if (!previousSibling || !media) {
                    this.mediaUnsetCallback(node);
                  } else {
                    let wasFirst = previousSibling.slot !== "media";
                    while ((previousSibling = previousSibling.previousSibling) !== null) {
                      if (previousSibling.slot == "media")
                        wasFirst = false;
                    }
                    if (wasFirst)
                      this.mediaUnsetCallback(node);
                  }
                  if (media) {
                    this.mediaSetCallback(this, media);
                  }
                } else {
                  setAndPropagateMedia(node, null);
                }
              });
              if (media) {
                mutation.addedNodes.forEach((node) => {
                  if (node == media) {
                    this.mediaSetCallback(node);
                  } else {
                    setAndPropagateMedia(node, media);
                  }
                });
              }
            }
          }
        };
        const observer = new MutationObserver(mutationCallback);
        observer.observe(this, {childList: true, subtree: true});
      }
      get media() {
        return this.querySelector(":scope > [slot=media]");
      }
      mediaSetCallback(media) {
        if (!media || !media.play) {
          console.error('<media-chrome>: Media element set with slot="media" does not appear to be compatible.', media);
          return;
        }
        const mediaName = media.nodeName.toLowerCase();
        if (mediaName.includes("-") && !Window.customElements.get(mediaName)) {
          Window.customElements.whenDefined(mediaName).then(() => {
            this.mediaSetCallback(media);
          });
          return;
        }
        propagateMedia(this, media);
        if (media.paused) {
          this.container.classList.add("paused");
        }
        this._mediaPlayHandler = (e) => {
          this.container.classList.remove("paused");
        };
        media.addEventListener("play", this._mediaPlayHandler);
        this._mediaPauseHandler = (e) => {
          this.container.classList.add("paused");
        };
        media.addEventListener("pause", this._mediaPauseHandler);
        this._mediaClickHandler = (e) => {
          if (media.paused) {
            media.play();
          } else {
            media.pause();
          }
        };
        media.addEventListener("click", this._mediaClickHandler, false);
      }
      mediaUnsetCallback(media) {
        media.removeEventListener("click", this._mediaClickHandler);
        media.removeEventListener("play", this._mediaPlayHandler);
        media.removeEventListener("pause", this._mediaPauseHandler);
        propagateMedia(this, null);
        this.container.classList.add("paused");
      }
      connectedCallback() {
        if (this.media) {
          this.mediaSetCallback(this.media);
        }
        const scheduleInactive = () => {
          this.container.classList.remove("inactive");
          Window.clearTimeout(this.inactiveTimeout);
          this.inactiveTimeout = Window.setTimeout(() => {
            this.container.classList.add("inactive");
          }, 2e3);
        };
        this.addEventListener("keyup", (e) => {
          scheduleInactive();
        });
        this.addEventListener("keyup", (e) => {
          this.container.classList.add("media-focus-visible");
        });
        this.addEventListener("mouseup", (e) => {
          this.container.classList.remove("media-focus-visible");
        });
        this.addEventListener("mousemove", (e) => {
          if (e.target === this)
            return;
          this.container.classList.remove("inactive");
          Window.clearTimeout(this.inactiveTimeout);
          if (e.target === this.media) {
            scheduleInactive();
          }
        });
        this.addEventListener("mouseout", (e) => {
          this.container.classList.add("inactive");
        });
      }
      autoHide(seconds) {
      }
    };
    defineCustomElement("media-container", MediaContainer);
    var media_container_default = MediaContainer;
  
    // src/js/media-chrome-menuitem.js
    var template3 = Document.createElement("template");
    template3.innerHTML = `
  <style>
    :host {
      position: relative;
      display: block;
      vertical-align: middle;
      box-sizing: border-box;
      background-color: #333;
  
      /* Default width and height can be overridden externally */
      height: 30px;
  
      /* Vertically center any text */
      font-size: 14px;
      line-height: 24px;
  
      /* Min icon size is 24x24 */
      min-height: 24px;
      min-width: 100px;
  
      padding: 3px 10px 3px 30px;
    }
  
    :host(:focus, :focus-within) {
      outline: 2px solid rgba(0,150,255, 0.33);
      outline-offset: -2px;
    }
  
    :host(:hover) {
      background: rgba(255,255,255, 0.10);
    }
  </style>
  
  <div id="labelContainer">
    <slot></slot>
  </div>
  <div id="contentContainer">
    <slot name="content"></slot>
  </div>
  `;
    var MediaChromeMenuitem = class extends media_chrome_html_element_default {
      constructor() {
        super();
        var shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template3.content.cloneNode(true));
        this.contentConatiner = this.shadowRoot.querySelector("#contentContainer");
        this.addEventListener("click", (e) => {
          this.onClick(e);
        });
      }
      onClick() {
      }
    };
    defineCustomElement("media-chrome-menuitem", MediaChromeMenuitem);
    var media_chrome_menuitem_default = MediaChromeMenuitem;
  
    // src/js/media-chrome-menu-button.js
    var template4 = Document.createElement("template");
    template4.innerHTML = `
  <style>
    #menuPositioner {
      position: absolute;
      display: flex;
  
      border: 1px solid #f00;
  
      /* Align menu top and centered */
      top: 0;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  
    #menuContainer {
      display: none;
      position: absolute;
      bottom: 0;
      align: center;
      margin-bottom: 20px;
  
      border: 1px solid #999;
      background-color: #111;
    }
  
    slot[name=menu] {
  
    }
  </style>
  
  <div id="menuPositioner">
    <div id="menuContainer">
      <slot name="menu"></slot>
    </div>
  </div>
  `;
    var MediaChromeMenuButton = class extends media_chrome_button_default {
      constructor() {
        super();
        this.shadowRoot.prepend(template4.content.cloneNode(true));
        this.menuContainer = this.shadowRoot.querySelector("#menuContainer");
        if (this.attributes.expanded) {
          this.menuContainer.style.display = "flex";
        }
      }
      onClick(e) {
        if (this.attributes.expanded) {
          this.removeAttribute("expanded");
          this.menuContainer.style.display = "none";
        } else {
          this.setAttribute("expanded", "expanded");
          this.menuContainer.style.display = "flex";
        }
      }
      mediaSetCallback(media) {
      }
    };
    defineCustomElement("media-chrome-menu-button", MediaChromeMenuButton);
  
    // src/js/media-chrome-submenu-menuitem.js
    var template5 = Document.createElement("template");
    template5.innerHTML = `
  <style>
    :host {
      background-position: right 9px center;
      background-repeat: no-repeat;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTAwJSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIxMDAlIj48cGF0aCBkPSJtIDEyLjU5LDIwLjM0IDQuNTgsLTQuNTkgLTQuNTgsLTQuNTkgMS40MSwtMS40MSA2LDYgLTYsNiB6IiBmaWxsPSIjZmZmIiAvPjwvc3ZnPg==)
    }
  
    ::slotted([slot=menu]) {
      position: absolute;
      display: block;
      left: 0;
      top: 0;
      width: 100%;
      border: 1px solid #00f;
    }
  </style>
  
  <div id="menuContainer">
    <slot name="menu"></slot>
  </div>
  `;
    var MediaChromeSubmenuMenuitem = class extends media_chrome_menuitem_default {
      constructor() {
        super();
        this.shadowRoot.appendChild(addTemplate.content.cloneNode(true));
        this.menu = this.querySelector("[slot=menu]");
        this.menu.style.display = "none";
      }
      onClick() {
        if (this.menu.style.display == "block") {
          this.menu.style.display = "none";
        } else {
          this.menu.style.display = "block";
        }
      }
    };
    defineCustomElement("media-chrome-submenu-menuitem", MediaChromeSubmenuMenuitem);
  
    // src/js/media-chrome-menu.js
    var template6 = Document.createElement("template");
    template6.innerHTML = `
    <style>
      :host {
        display: block;
        position: relative;
        width: 100%;
        border: 1px solid #f00;
        background-color: #000;
      }
    </style>
    <slot></slot>
  `;
    var MediaChromeMenu = class extends media_chrome_html_element_default {
      constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template6.content.cloneNode(true));
      }
      mediaSetCallback(media) {
      }
    };
    defineCustomElement("media-chrome-menu", MediaChromeMenu);
  
    // src/js/media-chrome-popup.js
    var template7 = Document.createElement("template");
    template7.innerHTML = `
    <style>
      :host {
        display: block;
        position: absolute;
        width: 300px;
        height: 200px;
        padding: 10px;
        border: 1px solid #333;
        color: #fff;
        background-color: #000;
      }
    </style>
    <slot></slot>
  `;
    var MediaChromePopup = class extends media_chrome_html_element_default {
      constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template7.content.cloneNode(true));
      }
      mediaSetCallback(media) {
      }
      mediaUnsetCallback() {
      }
    };
    defineCustomElement("media-chrome-popup", MediaChromePopup);
  
    // src/js/media-chrome-range.js
    var template8 = Document.createElement("template");
    var thumbStyles = `
    height: var(--thumb-height);
    width: var(--media-range-thumb-width, 10px);
    border: var(--media-range-thumb-border, none);
    border-radius: var(--media-range-thumb-border-radius, 10px);
    background: var(--media-range-thumb-background, #fff);
    box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
    cursor: pointer;
    transition: var(--media-range-thumb-transition, none);
    transform: var(--media-range-thumb-transform, none);
    opacity: var(--media-range-thumb-opacity, 1);
  `;
    var trackStyles = `
    width: var(--media-range-track-width, 100%);
    min-width: 40px;
    height: var(--track-height);
    border: var(--media-range-track-border, none);
    border-radius: var(--media-range-track-border-radius, 0);
    background: var(--media-range-track-background-internal, --media-range-track-background, #eee);
  
    box-shadow: var(--media-range-track-box-shadow, none);
    transition: var(--media-range-track-transition, none);
    cursor: pointer;
  `;
    template8.innerHTML = `
    <style>
      :host {
        --thumb-height: var(--media-range-thumb-height, 10px);
        --track-height: var(--media-range-track-height, 4px);
  
        position: relative;
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        background-color: transparent;
        transition: background-color 0.15s linear;
        height: 44px;
        width: 100px;
        min-height: 24px;
        font-size: 16px;
        line-height: 24px;
        padding: 0 10px;
      }
  
      /*
        Only show outline when keyboard focusing.
        https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo
      */
      :host-context(.media-focus-visible):host(:focus, :focus-within) {
        box-shadow: inset 0 0 0 2px rgba(27, 127, 204, 0.8);
      }
  
      :host(:hover) {
        background: rgba(255,255,255, 0.10);
      }
  
      input[type=range] {
        /* Reset */
        -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
        background: transparent; /* Otherwise white in Chrome */
  
        /* Fill host with the range */
        height: 100%;
        width: var(--media-range-track-width, 100%); /* Specific width is required for Firefox. */
  
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
  
      /* Special styling for WebKit/Blink */
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        ${thumbStyles}
        /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
        margin-top: calc(calc(0px - var(--thumb-height) + var(--track-height)) / 2);
      }
      input[type=range]::-moz-range-thumb { ${thumbStyles} }
  
      input[type=range]::-webkit-slider-runnable-track { ${trackStyles} }
      input[type=range]::-moz-range-track { ${trackStyles} }
      input[type=range]::-ms-track {
        /* Reset */
        width: 100%;
        cursor: pointer;
        /* Hides the slider so custom styles can be added */
        background: transparent;
        border-color: transparent;
        color: transparent;
  
        ${trackStyles}
      }
  
      /* Eventually want to move towards different styles for focus-visible
         https://github.com/WICG/focus-visible/blob/master/src/focus-visible.js
         Youtube appears to do this by de-focusing a button after a button click */
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }
  
      input[type=range]:disabled::-webkit-slider-thumb {
        background-color: #777;
      }
  
      input[type=range]:disabled::-webkit-slider-runnable-track {
        background-color: #777;
      }
  
    </style>
    <input id="range" type="range" min="0" max="1000" step="1" value="0">
  `;
    var MediaChromeRange = class extends media_chrome_html_element_default {
      constructor() {
        super();
        var shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template8.content.cloneNode(true));
        this.range = this.shadowRoot.querySelector("#range");
        this.range.addEventListener("input", this.updateBar.bind(this));
      }
      connectedCallback() {
        this.updateBar();
      }
      updateBar() {
        const colorArray = this.getBarColors();
        let gradientStr = "linear-gradient(to right, ";
        let prevPercent = 0;
        colorArray.forEach((color) => {
          if (color[1] < prevPercent)
            return;
          gradientStr = gradientStr + `${color[0]} ${prevPercent}%, ${color[0]} ${color[1]}%,`;
          prevPercent = color[1];
        });
        gradientStr = gradientStr.slice(0, gradientStr.length - 1) + ")";
        this.style.setProperty("--media-range-track-background-internal", gradientStr);
      }
      getBarColors() {
        const range = this.range;
        const rangePercent = this.range.value / 1e3 * 100;
        let colorArray = [
          ["var(--media-range-bar-color, #fff)", rangePercent],
          ["var(--media-range-track-background, #333)", 100]
        ];
        return colorArray;
      }
    };
    defineCustomElement("media-chrome-range", MediaChromeRange);
    var media_chrome_range_default = MediaChromeRange;
  
    // src/js/media-control-bar.js
    var template9 = Document.createElement("template");
    template9.innerHTML = `
    <style>
      :host {
        /* Need position to display above video for some reason */
        position: relative;
        box-sizing: border-box;
        display: flex;
  
        /* All putting the progress range at full width on other lines */
        flex-wrap: wrap;
  
        width: 100%;
        color: var(--media-icon-color, #eee);
  
        background-color: var(--media-control-bar-background, rgba(20,20,30, 0.7));
      }
  
      ::slotted(*), :host > * {
        /* position: relative; */
      }
  
      media-progress-range,
      ::slotted(media-progress-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }
    </style>
  
    <slot></slot>
  `;
    var MediaControlBar = class extends media_chrome_html_element_default {
      constructor() {
        super();
        var shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template9.content.cloneNode(true));
      }
      connectedCallback() {
      }
    };
    defineCustomElement("media-control-bar", MediaControlBar);
  
    // src/js/utils/time.js
    function formatTime(seconds, guide) {
      seconds = seconds < 0 ? 0 : seconds;
      let s = Math.floor(seconds % 60);
      let m = Math.floor(seconds / 60 % 60);
      let h = Math.floor(seconds / 3600);
      const gm = Math.floor(guide / 60 % 60);
      const gh = Math.floor(guide / 3600);
      if (isNaN(seconds) || seconds === Infinity) {
        h = m = s = "-";
      }
      h = h > 0 || gh > 0 ? h + ":" : "";
      m = ((h || gm >= 10) && m < 10 ? "0" + m : m) + ":";
      s = s < 10 ? "0" + s : s;
      return h + m + s;
    }
  
    // src/js/media-current-time-display.js
    var template10 = Document.createElement("template");
    template10.innerHTML = `
    <style>
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
  
        background-color: transparent;
  
        /* Default width and height can be overridden externally */
        height: 44px;
  
        box-sizing: border-box;
        padding: 0 5px;
  
        /* Min icon size is 24x24 */
        min-height: 24px;
        min-width: 24px;
  
        /* Vertically center any text */
        font-size: 16px;
        line-height: 24px;
        font-family: sans-serif;
        text-align: center;
        color: #ffffff;
      }
  
      #container {}
    </style>
    <div id="container"></div>
  `;
    var MediaCurrentTimeDisplay = class extends media_chrome_html_element_default {
      constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template10.content.cloneNode(true));
        this.container = this.shadowRoot.querySelector("#container");
        this.update(6e3);
      }
      update(time3) {
        this.container.innerHTML = formatTime(time3);
      }
      mediaSetCallback(media) {
        media.addEventListener("timeupdate", (e) => {
          this.update(media.currentTime);
        });
        this.update(media.currentTime);
      }
      mediaUnsetCallback() {
        this.update(0);
      }
    };
    defineCustomElement("media-current-time-display", MediaCurrentTimeDisplay);
  
    // src/js/media-duration-display.js
    var template11 = Document.createElement("template");
    template11.innerHTML = `
    <style>
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
  
        background-color: transparent;
  
        /* Default width and height can be overridden externally */
        height: 44px;
  
        box-sizing: border-box;
        padding: 0 5px;
  
        /* Min icon size is 24x24 */
        min-height: 24px;
        min-width: 24px;
  
        /* Vertically center any text */
        font-size: 16px;
        line-height: 24px;
        font-family: sans-serif;
        text-align: center;
        color: #ffffff;
      }
  
      #container {}
    </style>
    <div id="container"></div>
  `;
    var MediaDurationDisplay = class extends media_chrome_html_element_default {
      constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template11.content.cloneNode(true));
        this.container = this.shadowRoot.querySelector("#container");
        this.update(0);
      }
      update(duration) {
        this.container.innerHTML = formatTime(duration);
      }
      mediaSetCallback(media) {
        media.addEventListener("durationchange", (e) => {
          this.update(media.duration);
        });
        this.update(media.duration);
      }
      mediaUnsetCallback() {
        this.update(0);
      }
    };
    defineCustomElement("media-duration-display", MediaDurationDisplay);
  
    // src/js/media-forward-button.js
    var forwardIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24"><defs><path class="icon" id="a" d="M24 24H0V0h24v24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path class="icon" d="M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z" clip-path="url(#b)"/></svg>';
    var MediaForwardButton = class extends media_chrome_button_default {
      constructor() {
        super();
        this.icon = forwardIcon;
      }
      onClick(e) {
        const media = this.media;
        media.currentTime = media.currentTime + 30;
      }
    };
    defineCustomElement("media-forward-button", MediaForwardButton);
  
    // src/js/media-fullscreen-button.js
    var enterFullscreenIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path class="icon" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
  </svg>`;
    var exitFullscreenIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path class="icon" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
  </svg>`;
    var api = {
      enter: "requestFullscreen",
      exit: "exitFullscreen",
      event: "fullscreenchange",
      element: "fullscreenElement",
      error: "fullscreenerror"
    };
    if (Document.fullscreenElement === void 0) {
      api.enter = "webkitRequestFullScreen";
      api.exit = Document.webkitExitFullscreen != null ? "webkitExitFullscreen" : "webkitCancelFullScreen";
      api.event = "webkitfullscreenchange";
      api.element = "webkitFullscreenElement";
      api.error = "webkitfullscreenerror";
    }
    var MediaFullscreenButton = class extends media_chrome_button_default {
      constructor() {
        super();
        this.icon = enterFullscreenIcon;
        Document.addEventListener(api.event, () => {
          if (this.isFullscreen) {
            this.icon = exitFullscreenIcon;
          } else {
            this.icon = enterFullscreenIcon;
          }
        });
      }
      static get observedAttributes() {
        return ["fullscreen-element"].concat(super.observedAttributes || []);
      }
      get isFullscreen() {
        const el = this.fullscreenElement;
        if (!el)
          return false;
        return el.getRootNode()[api.element] == el;
      }
      get fullscreenElement() {
        return this._fullscreenElement || this.media && this.media.closest("media-container, media-chrome") || this.media;
      }
      set fullscreenElement(val) {
        this._fullscreenElement = Document.querySelector(val);
      }
      onClick() {
        if (this.isFullscreen) {
          Document[api.exit]();
        } else {
          if (Document.pictureInPictureElement) {
            Document.exitPictureInPicture();
          }
          this.fullscreenElement && this.fullscreenElement[api.enter]();
        }
      }
    };
    defineCustomElement("media-fullscreen-button", MediaFullscreenButton);
  
    // src/js/media-mute-button.js
    var volumeUp = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="icon" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
    var volumeOff = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="icon" d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
    var volumeLow = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="icon" d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
    var MediaMuteButton = class extends media_chrome_button_default {
      constructor() {
        super();
        this.icon = volumeUp;
      }
      onClick(e) {
        const media = this.media;
        media.muted = !media.muted;
        if (!media.muted && media.volume === 0) {
          media.volume = 0.25;
        }
      }
      update() {
        const media = this.media;
        if (media.muted || media.volume === 0) {
          this.icon = volumeOff;
        } else if (media.volume < 0.5) {
          this.icon = volumeLow;
        } else {
          this.icon = volumeUp;
        }
      }
      mediaSetCallback(media) {
        media.addEventListener("volumechange", this.update.bind(this));
        this.update();
      }
    };
    defineCustomElement("media-mute-button", MediaMuteButton);
  
    // src/js/media-pip-button.js
    var pipIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="icon" d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
    var MediaPIPButton = class extends media_chrome_button_default {
      constructor() {
        super();
        this.icon = pipIcon;
        this.addEventListener("click", (e) => {
          const media = this.media;
          if (Document.pictureInPictureElement) {
            Document.exitPictureInPicture();
          } else {
            if (Document.fullscreenElement) {
              Document.exitFullscreen();
            } else if (Document.webkitFullscreenElement) {
              Document.webkitExitFullscreen();
            }
            media.requestPictureInPicture();
          }
        });
      }
    };
    defineCustomElement("media-pip-button", MediaPIPButton);
  
    // src/js/media-play-button.js
    var playIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="icon" d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
    var pauseIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="icon" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
    var MediaPlayButton = class extends media_chrome_button_default {
      constructor() {
        super();
        this.icon = playIcon;
        this._playing = false;
      }
      static get observedAttributes() {
        return ["playing"].concat(super.observedAttributes || []);
      }
      get playing() {
        return this._playing;
      }
      set playing(val) {
        this._playing = !!val;
        if (val) {
          this.icon = pauseIcon;
        } else {
          this.icon = playIcon;
        }
      }
      onClick(e) {
        const media = this.media;
        if (!media) {
          console.warn("<media-play-button>: No media was found and an alternative onClick handler was not set.");
          return;
        }
        if (media.paused) {
          media.play();
        } else {
          media.pause();
        }
      }
      mediaSetCallback(media) {
        media.addEventListener("play", () => {
          this.playing = true;
        });
        media.addEventListener("pause", () => {
          this.playing = false;
        });
      }
    };
    defineCustomElement("media-play-button", MediaPlayButton);
  
    // src/js/media-playback-rate-button.js
    var DEFAULT_RATES = [1, 1.25, 1.5, 1.75, 2];
    var MediaPlaybackRateButton = class extends media_chrome_button_default {
      constructor() {
        super();
        this._rates = DEFAULT_RATES;
      }
      static get observedAttributes() {
        return ["rates"].concat(super.observedAttributes || []);
      }
      set rates(rates) {
        if (!rates) {
          this._rates = DEFAULT_RATES;
        } else {
          if (typeof rates == "string") {
            rates = rates.split(/,\s?/);
          }
          this._rates = rates;
        }
      }
      get rates() {
        return this._rates;
      }
      onClick(e) {
        const media = this.media;
        if (!media)
          return;
        const currentRate = media.playbackRate;
        let newRate = this.rates.find((r) => r > currentRate);
        if (!newRate)
          newRate = this.rates[0];
        media.playbackRate = newRate;
      }
      mediaSetCallback(media) {
        this._rateChangeHandler = () => {
          const newRate = media.playbackRate.toString().substring(0, 4);
          this.shadowRoot.querySelector("button").innerHTML = `${newRate}x`;
        };
        media.addEventListener("ratechange", this._rateChangeHandler);
        this._rateChangeHandler();
      }
      mediaUnsetCallback(media) {
        if (!media)
          return;
        media.removeEventListener("ratechange", this._rateChangeHandler);
      }
    };
    defineCustomElement("media-playback-rate-button", MediaPlaybackRateButton);
  
    // src/js/media-poster.js
    var template12 = Document.createElement("template");
    template12.innerHTML = `
  <style>
    :host {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  
    #poster {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
  
      background-color: #000;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: contain;
      transition: opacity 0.2s ease;
      opacity: 1;
    }
  
    #poster.hidden {
      display: none;
      opacity: 0;
    }
  </style>
  <div id="poster"></div>
  `;
    var MediaPoster = class extends media_chrome_html_element_default {
      constructor() {
        super();
        var shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template12.content.cloneNode(true));
        this.addEventListener("click", (e) => {
          this.onClick(e);
        });
      }
      mediaSetCallback(media) {
        media.addEventListener("play", () => {
          this.hide();
        });
      }
      onClick() {
        const media = this.media;
        if (media) {
          media.play();
        }
      }
      set src(url) {
        this.shadowRoot.querySelector("#poster").style.backgroundImage = `url(${url})`;
      }
      get src() {
        const val = this.shadowRoot.querySelector("#poster").style.backgroundImage;
        if (!val || val === "none") {
          return null;
        } else {
          return val.substr(4, val.length - 5);
        }
      }
      show() {
        this.shadowRoot.querySelector("#poster").className = "";
      }
      hide() {
        this.shadowRoot.querySelector("#poster").className = "hidden";
      }
    };
    defineCustomElement("media-poster", MediaPoster);
  
    // src/js/media-thumbnail-preview-element.js
    var template13 = Document.createElement("template");
    template13.innerHTML = `
    <style>
      :host {
        box-sizing: border-box;
        background-color: #000;
        width: 284px;
        height: 160px;
        overflow: hidden;
      }
  
      img {
        position: absolute;
        left: 0;
        top: 0;
      }
    </style>
    <img crossorigin loading="eager" decoding="async" />
  `;
    var MediaThumbnailPreviewElement = class extends media_chrome_html_element_default {
      static get observedAttributes() {
        return ["time"].concat(super.observedAttributes || []);
      }
      constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template13.content.cloneNode(true));
      }
      set time(time3) {
        if (this.media && this.media.textTracks && this.media.textTracks.length) {
          let track = Array.prototype.find.call(this.media.textTracks, (t) => {
            return t.label == "thumbnails";
          });
          if (!track)
            return;
          if (!track.cues)
            return;
          let cue = Array.prototype.find.call(track.cues, (c) => c.startTime >= time3);
          if (cue) {
            const url = new URL(cue.text);
            const [x, y, w, h] = url.hash.split("=")[1].split(",");
            const img = this.shadowRoot.querySelector("img");
            const src = url.origin + url.pathname;
            const scale = this.offsetWidth / w;
            const resize = () => {
              img.style.width = `${scale * img.naturalWidth}px`;
              img.style.height = `${scale * img.naturalHeight}px`;
            };
            if (img.src !== src) {
              img.onload = resize;
              img.src = src;
              resize();
            }
            resize();
            img.style.left = `-${scale * x}px`;
            img.style.top = `-${scale * y}px`;
          }
        }
      }
      get time() {
        return parseFloat(this.getAttribute("time"));
      }
      mediaSetCallback(media) {
        const trackList = media && media.textTracks;
        if (!trackList || !trackList.addEventListener)
          return;
        this._trackChangeHandler = (evt) => {
          for (let i = 0; i < trackList.length; i++) {
            let track = trackList[i];
            if (track.label === "thumbnails") {
              if (!this.time)
                this.time = 0;
            }
          }
        };
        trackList.addEventListener("addtrack", this._trackChangeHandler, false);
        this._trackChangeHandler();
      }
      mediaUnsetCallback(media) {
        const trackList = media && media.textTracks;
        if (trackList && trackList.removeEventListener) {
          trackList.removeEventListener("addtrack", this._trackChangeHandler);
        }
      }
    };
    if (!Window.customElements.get("media-thumbnail-preview")) {
      Window.customElements.define("media-thumbnail-preview", MediaThumbnailPreviewElement);
      Window.MediaThumbnailPreviewElement = MediaThumbnailPreviewElement;
    }
  
    // src/js/media-progress-range.js
    var template14 = Document.createElement("template");
    template14.innerHTML = `
    <style>
      #thumbnailContainer {
        display: none;
        position: absolute;
        top: 0;
      }
  
      media-thumbnail-preview {
        position: absolute;
        bottom: 10px;
        border: 2px solid #fff;
        border-radius: 2px;
        background-color: #000;
        width: 160px;
        height: 90px;
  
        /* Negative offset of half to center on the handle */
        margin-left: -80px;
      }
  
      /* Can't get this working. Trying a downward triangle. */
      /* media-thumbnail-preview::after {
        content: "";
        display: block;
        width: 300px;
        height: 300px;
        margin: 100px;
        background-color: #ff0;
      } */
  
      :host(:hover) #thumbnailContainer.enabled {
        display: block;
        animation: fadeIn ease 0.5s;
      }
  
      @keyframes fadeIn {
        0% {
          /* transform-origin: bottom center; */
          /* transform: scale(0.7); */
          margin-top: 10px;
          opacity: 0;
        }
        100% {
          /* transform-origin: bottom center; */
          /* transform: scale(1); */
          margin-top: 0;
          opacity: 1;
        }
      }
    </style>
    <div id="thumbnailContainer">
      <media-thumbnail-preview></media-thumbnail-preview>
    </div>
  `;
    var MediaProgressRange = class extends media_chrome_range_default {
      static get observedAttributes() {
        return ["thumbnails"].concat(super.observedAttributes || []);
      }
      constructor() {
        super();
        this.shadowRoot.appendChild(template14.content.cloneNode(true));
        this.setMediaTimeWithRange = () => {
          const media = this.media;
          const range = this.range;
          if (media.readyState > 0 || media.readyState === void 0) {
            media.currentTime = Math.round(range.value / 1e3 * media.duration);
          }
        };
        this.range.addEventListener("input", this.setMediaTimeWithRange);
        this.updateRangeWithMediaTime = () => {
          const media = this.media;
          this.range.value = Math.round(media.currentTime / media.duration * 1e3);
          this.updateBar();
        };
        this.playIfNotReady = (e) => {
          this.range.removeEventListener("change", this.playIfNotReady);
          const media = this.media;
          media.play().then(this.setMediaTimeWithRange);
        };
      }
      mediaSetCallback(media) {
        super.mediaSetCallback(media);
        const range = this.range;
        media.addEventListener("timeupdate", this.updateRangeWithMediaTime);
        if (media.readyState !== void 0 && media.readyState == 0) {
        }
        media.addEventListener("progress", this.updateBar.bind(this));
        if (media.textTracks && media.textTracks.length) {
          const thumbnailTrack = Array.prototype.find.call(media.textTracks, (t) => t.label == "thumbnails");
          if (thumbnailTrack) {
            this.enableThumbnails();
          } else {
            this.thumbnailPreview.style.display = "none";
          }
        }
      }
      mediaUnsetCallback(media) {
        super.mediaUnsetCallback(media);
        media.removeEventListener("timeupdate", this.updateRangeWithMediaTime);
        this.range.removeEventListener("change", this.playIfNotReady);
      }
      getBarColors() {
        const media = this.media;
        let colorsArray = super.getBarColors();
        if (!media || !media.buffered || !media.buffered.length || media.duration <= 0) {
          return colorsArray;
        }
        const buffered = media.buffered;
        const buffPercent = buffered.end(buffered.length - 1) / media.duration * 100;
        colorsArray.splice(1, 0, ["var(--media-progress-buffered-color, #777)", buffPercent]);
        return colorsArray;
      }
      enableThumbnails() {
        this.thumbnailPreview = this.shadowRoot.querySelector("media-thumbnail-preview");
        const thumbnailContainer2 = this.shadowRoot.querySelector("#thumbnailContainer");
        thumbnailContainer2.classList.add("enabled");
        let mouseMoveHandler;
        const trackMouse = () => {
          mouseMoveHandler = (evt) => {
            const duration = this.media && this.media.duration;
            if (!duration)
              return;
            const rangeRect = this.range.getBoundingClientRect();
            let mousePercent = (evt.clientX - rangeRect.left) / rangeRect.width;
            mousePercent = Math.max(0, Math.min(1, mousePercent));
            const leftPadding = rangeRect.left - this.getBoundingClientRect().left;
            const thumbnailLeft = leftPadding + mousePercent * rangeRect.width;
            this.thumbnailPreview.style.left = `${thumbnailLeft}px`;
            this.thumbnailPreview.time = mousePercent * this.media.duration;
          };
          Window.addEventListener("mousemove", mouseMoveHandler, false);
        };
        const stopTrackingMouse = () => {
          Window.removeEventListener("mousemove", mouseMoveHandler);
        };
        let rangeEntered = false;
        let rangeMouseMoveHander = (evt) => {
          if (!rangeEntered && this.media && this.media.duration) {
            rangeEntered = true;
            this.thumbnailPreview.style.display = "block";
            trackMouse();
            let offRangeHandler = (evt2) => {
              if (evt2.target != this && !this.contains(evt2.target)) {
                this.thumbnailPreview.style.display = "none";
                Window.removeEventListener("mousemove", offRangeHandler);
                rangeEntered = false;
                stopTrackingMouse();
              }
            };
            Window.addEventListener("mousemove", offRangeHandler, false);
          }
          if (!this.media || !this.media.duration) {
            this.thumbnailPreview.style.display = "none";
          }
        };
        this.addEventListener("mousemove", rangeMouseMoveHander, false);
      }
      disableThumbnails() {
        thumbnailContainer.classList.remove("enabled");
      }
    };
    defineCustomElement("media-progress-range", MediaProgressRange);
  
    // src/js/media-clip-selector.js
    var template15 = Document.createElement("template");
    var HANDLE_W = 8;
    var Z = {
      "100": 100,
      "200": 200,
      "300": 300
    };
    function lockBetweenZeroAndOne(num) {
      return Math.max(0, Math.min(1, num));
    }
    template15.innerHTML = `
    <style>
      #selectorContainer {
        background-color: transparent;
        height: 44px;
        width: 100%;
        display: flex;
        position: relative;
      }
  
      #timeline {
        width: 100%;
        height: 10px;
        background: #ccc;
        position: absolute;
        top: 16px;
        z-index: ${Z["100"]};
      }
  
      #startHandle, #endHandle {
        cursor: pointer;
        height: 80%;
        width: ${HANDLE_W}px;
        border-radius: 4px;
        background-color: royalblue;
      }
  
      #playhead {
        height: 100%;
        width: 3px;
        background-color: #aaa;
        position: absolute;
        display: none;
        z-index: ${Z["300"]};
      }
  
      #selection {
        display: flex;
        z-index: ${Z["200"]};
        width: 25%;
        height: 100%;
        align-items: center;
      }
  
      #leftTrim {
        width: 25%;
      }
  
      #spacer {
        flex: 1;
        background-color: cornflowerblue;
        height: 40%;
      }
  
      #thumbnailContainer {
        display: none;
        position: absolute;
        top: 0;
      }
  
      media-thumbnail-preview {
        position: absolute;
        bottom: 10px;
        border: 2px solid #fff;
        border-radius: 2px;
        background-color: #000;
        width: 160px;
        height: 90px;
  
        /* Negative offset of half to center on the handle */
        margin-left: -80px;
      }
  
      /* Can't get this working. Trying a downward triangle. */
      /* media-thumbnail-preview::after {
        content: "";
        display: block;
        width: 300px;
        height: 300px;
        margin: 100px;
        background-color: #ff0;
      } */
  
      :host(:hover) #thumbnailContainer.enabled {
        display: block;
        animation: fadeIn ease 0.5s;
      }
  
      @keyframes fadeIn {
        0% {
          /* transform-origin: bottom center; */
          /* transform: scale(0.7); */
          margin-top: 10px;
          opacity: 0;
        }
        100% {
          /* transform-origin: bottom center; */
          /* transform: scale(1); */
          margin-top: 0;
          opacity: 1;
        }
      }
    </style>
    <div id="thumbnailContainer">
      <media-thumbnail-preview></media-thumbnail-preview>
    </div>
    <div id="selectorContainer">
      <div id="timeline"></div>
      <div id="playhead"></div>
      <div id="leftTrim"></div>
      <div id="selection">
        <div id="startHandle"></div>
        <div id="spacer"></div>
        <div id="endHandle"></div>
      </div>
    </div>
  `;
    var MediaClipSelector = class extends media_chrome_html_element_default {
      static get observedAttributes() {
        return ["thumbnails"].concat(super.observedAttributes || []);
      }
      constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template15.content.cloneNode(true));
        this.draggingEl = null;
        this.wrapper = this.shadowRoot.querySelector("#selectorContainer");
        this.selection = this.shadowRoot.querySelector("#selection");
        this.playhead = this.shadowRoot.querySelector("#playhead");
        this.leftTrim = this.shadowRoot.querySelector("#leftTrim");
        this.spacerFirst = this.shadowRoot.querySelector("#spacerFirst");
        this.startHandle = this.shadowRoot.querySelector("#startHandle");
        this.spacerMiddle = this.shadowRoot.querySelector("#spacerMiddle");
        this.endHandle = this.shadowRoot.querySelector("#endHandle");
        this.spacerLast = this.shadowRoot.querySelector("#spacerLast");
        this._clickHandler = this.handleClick.bind(this);
        this._dragStart = this.dragStart.bind(this);
        this._dragEnd = this.dragEnd.bind(this);
        this._drag = this.drag.bind(this);
        this.wrapper.addEventListener("click", this._clickHandler, false);
        this.wrapper.addEventListener("touchstart", this._dragStart, false);
        Window.addEventListener("touchend", this._dragEnd, false);
        this.wrapper.addEventListener("touchmove", this._drag, false);
        this.wrapper.addEventListener("mousedown", this._dragStart, false);
        Window.addEventListener("mouseup", this._dragEnd, false);
        Window.addEventListener("mousemove", this._drag, false);
      }
      getPlayheadBasedOnMouseEvent(evt) {
        const duration = this.media && this.media.duration;
        if (!duration)
          return;
        const mousePercent = lockBetweenZeroAndOne(this.getMousePercent(evt));
        return mousePercent * duration;
      }
      getXPositionFromMouse(evt) {
        let clientX;
        if (["touchstart", "touchmove"].includes(evt.type)) {
          clientX = evt.touches[0].clientX;
        }
        return clientX || evt.clientX;
      }
      getMousePercent(evt) {
        const rangeRect = this.wrapper.getBoundingClientRect();
        const mousePercent = (this.getXPositionFromMouse(evt) - rangeRect.left) / rangeRect.width;
        return lockBetweenZeroAndOne(mousePercent);
      }
      dragStart(evt) {
        if (evt.target === this.startHandle) {
          this.draggingEl = this.startHandle;
        }
        if (evt.target === this.endHandle) {
          this.draggingEl = this.endHandle;
        }
        this.initialX = this.getXPositionFromMouse(evt);
      }
      dragEnd(evt) {
        this.initialX = null;
        this.draggingEl = null;
      }
      setSelectionWidth(selectionPercent, fullTimelineWidth) {
        let percent = selectionPercent;
        const minWidthPx = HANDLE_W * 3;
        const minWidthPercent = lockBetweenZeroAndOne(minWidthPx / fullTimelineWidth);
        if (percent < minWidthPercent) {
          percent = minWidthPercent;
        }
        this.selection.style.width = `${percent * 100}%`;
      }
      drag(evt) {
        if (!this.draggingEl) {
          return;
        }
        evt.preventDefault();
        const rangeRect = this.wrapper.getBoundingClientRect();
        const fullTimelineWidth = rangeRect.width;
        const endXPosition = this.getXPositionFromMouse(evt);
        const xDelta = endXPosition - this.initialX;
        const percent = this.getMousePercent(evt);
        const selectionW = this.selection.getBoundingClientRect().width;
        if (this.draggingEl === this.startHandle) {
          this.initialX = this.getXPositionFromMouse(evt);
          this.leftTrim.style.width = `${percent * 100}%`;
          const selectionPercent = lockBetweenZeroAndOne((selectionW - xDelta) / fullTimelineWidth);
          this.setSelectionWidth(selectionPercent, fullTimelineWidth);
        }
        if (this.draggingEl === this.endHandle) {
          this.initialX = this.getXPositionFromMouse(evt);
          const selectionPercent = lockBetweenZeroAndOne((selectionW + xDelta) / fullTimelineWidth);
          this.setSelectionWidth(selectionPercent, fullTimelineWidth);
        }
        this.dispatchUpdate();
      }
      dispatchUpdate() {
        const updateEvent = new CustomEvent("update", {
          detail: this.getCurrentClipBounds()
        });
        this.dispatchEvent(updateEvent);
      }
      getCurrentClipBounds() {
        const rangeRect = this.wrapper.getBoundingClientRect();
        const leftTrimRect = this.leftTrim.getBoundingClientRect();
        const selectionRect = this.selection.getBoundingClientRect();
        const percentStart = lockBetweenZeroAndOne(leftTrimRect.width / rangeRect.width);
        const percentEnd = lockBetweenZeroAndOne((leftTrimRect.width + selectionRect.width) / rangeRect.width);
        return {
          startTime: Math.round(percentStart * this.media.duration),
          endTime: Math.round(percentEnd * this.media.duration)
        };
      }
      isTimestampInBounds(timestamp) {
        const {startTime, endTime} = this.getCurrentClipBounds();
        return startTime <= timestamp && endTime >= timestamp;
      }
      handleClick(evt) {
        const mousePercent = this.getMousePercent(evt);
        const timestampForClick = mousePercent * this.media.duration;
        if (this.media && this.isTimestampInBounds(timestampForClick)) {
          this.media.currentTime = timestampForClick;
        }
      }
      mediaSetCallback(media) {
        super.mediaSetCallback(media);
        this._timeUpdate = this.timeUpdate.bind(this);
        media.addEventListener("timeupdate", this._timeUpdate);
        if (media.textTracks && media.textTracks.length) {
          const thumbnailTrack = Array.prototype.find.call(media.textTracks, (t) => t.label == "thumbnails");
          if (thumbnailTrack) {
            this.enableThumbnails();
          } else {
            this.thumbnailPreview.style.display = "none";
          }
        }
      }
      timeUpdate(evt) {
        const percentComplete = lockBetweenZeroAndOne(this.media.currentTime / this.media.duration);
        const fullW = this.wrapper.getBoundingClientRect().width;
        const progressW = percentComplete * fullW;
        this.playhead.style.left = `${percentComplete * 100}%`;
        this.playhead.style.display = "block";
        if (!this.media.paused) {
          const {startTime, endTime} = this.getCurrentClipBounds();
          if (this.media.currentTime < startTime) {
            this.media.currentTime = startTime;
          }
          if (this.media.currentTime > endTime) {
            this.media.currentTime = startTime;
          }
        }
      }
      mediaUnsetCallback(media) {
        super.mediaUnsetCallback(media);
        media.removeEventListener("timeupdate", this._timeUpdate);
        this.wrapper.removeEventListener("click", this._clickHandler);
        this.wrapper.removeEventListener("touchstart", this._dragStart);
        this.wrapper.removeEventListener("touchend", this._dragEnd);
        this.wrapper.removeEventListener("touchmove", this._drag);
        this.wrapper.removeEventListener("mousedown", this._dragStart);
        Window.removeEventListener("mouseup", this._dragEnd);
        Window.removeEventListener("mousemove", this._drag);
      }
      enableThumbnails() {
        this.thumbnailPreview = this.shadowRoot.querySelector("media-thumbnail-preview");
        const thumbnailContainer2 = this.shadowRoot.querySelector("#thumbnailContainer");
        thumbnailContainer2.classList.add("enabled");
        let mouseMoveHandler;
        const trackMouse = () => {
          mouseMoveHandler = (evt) => {
            const duration = this.media && this.media.duration;
            if (!duration)
              return;
            const rangeRect = this.wrapper.getBoundingClientRect();
            const mousePercent = this.getMousePercent(evt);
            const leftPadding = rangeRect.left - this.getBoundingClientRect().left;
            const thumbnailLeft = leftPadding + mousePercent * rangeRect.width;
            this.thumbnailPreview.style.left = `${thumbnailLeft}px`;
            this.thumbnailPreview.time = mousePercent * this.media.duration;
          };
          Window.addEventListener("mousemove", mouseMoveHandler, false);
        };
        const stopTrackingMouse = () => {
          Window.removeEventListener("mousemove", mouseMoveHandler);
        };
        let rangeEntered = false;
        let rangeMouseMoveHander = (evt) => {
          if (!rangeEntered && this.media && this.media.duration) {
            rangeEntered = true;
            this.thumbnailPreview.style.display = "block";
            trackMouse();
            let offRangeHandler = (evt2) => {
              if (evt2.target != this && !this.contains(evt2.target)) {
                this.thumbnailPreview.style.display = "none";
                Window.removeEventListener("mousemove", offRangeHandler);
                rangeEntered = false;
                stopTrackingMouse();
              }
            };
            Window.addEventListener("mousemove", offRangeHandler, false);
          }
          if (!this.media || !this.media.duration) {
            this.thumbnailPreview.style.display = "none";
          }
        };
        this.addEventListener("mousemove", rangeMouseMoveHander, false);
      }
      disableThumbnails() {
        thumbnailContainer.classList.remove("enabled");
      }
    };
    defineCustomElement("media-clip-selector", MediaClipSelector);
  
    // src/js/media-replay-button.js
    var forwardIcon2 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24"><defs><path class="icon" id="a" d="M0 0h24v24H0V0z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path class="icon" d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-2.4 8.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5c0-.1-.1-.2-.1-.3s-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z" clip-path="url(#b)"/></svg>';
    var MediaReplayButton = class extends media_chrome_button_default {
      constructor() {
        super();
        this.icon = forwardIcon2;
      }
      onClick(e) {
        const media = this.media;
        media.currentTime = media.currentTime - 30;
      }
    };
    defineCustomElement("media-replay-button", MediaReplayButton);
  
    // src/js/media-settings-popup.js
    var template16 = Document.createElement("template");
    template16.innerHTML = `
    <style>
      :host {
        display: block;
        position: absolute;
        width: 300px;
        height: auto;
        right: 5px;
        bottom: 45px;
        padding: 10px;
        border: 1px solid #333;
        color: #ccc;
        background-color: #000;
      }
    </style>
    <slot></slot>
  
    <!-- This is too much for a menu... -->
  
    <media-chrome-panel>
    <media-chrome-menu>
      <media-chrome-submenu-menuitem label="Playback speed" value="1.2">
      </media-chrome-submenu-menuitem>
      <media-chrome-menuitem>Hello1</media-chrome-menuitem>
      <media-chrome-menuitem>Hello1</media-chrome-menuitem>
      <media-chrome-menuitem>Hello1</media-chrome-menuitem>
      <media-chrome-menuitem>Hello1</media-chrome-menuitem>
    </media-chrome-menu>
    <media-chrome-menu slot="menu">
      <media-chrome-menuitem>Normal</media-chrome-menuitem>
      <media-chrome-menuitem>1.5</media-chrome-menuitem>
    </media-chrome-menu>
  `;
    var MediaSettingsPopup = class extends media_chrome_html_element_default {
      constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template16.content.cloneNode(true));
      }
      mediaSetCallback(media) {
      }
      mediaUnsetCallback() {
      }
    };
    defineCustomElement("media-settings-popup", MediaSettingsPopup);
  
    // src/js/media-title-element.js
    var template17 = Document.createElement("template");
    template17.innerHTML = `
    <style>
      :host {
  
      }
    </style>
  
    <slot></slot>
  `;
    var MediaTitleBar = class extends media_chrome_html_element_default {
      constructor() {
        super();
        var shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template17.content.cloneNode(true));
      }
    };
    defineCustomElement("media-title-bar", MediaTitleBar);
  
    // src/js/media-volume-range.js
    var MediaVolumeRange = class extends media_chrome_range_default {
      constructor() {
        super();
        this.range.addEventListener("input", () => {
          const media = this.media;
          if (!media)
            return;
          const volume = this.range.value / 1e3;
          media.volume = volume;
          if (volume > 0 && media.muted) {
            media.muted = false;
          }
        });
        this.range.addEventListener("mousedown", () => {
          const volume = this.media && this.media.volume;
          if (volume > 0) {
            this._lastNonZeroVolume = volume;
          }
        });
        this.range.addEventListener("change", () => {
          const media = this.media;
          if (!media)
            return;
          if (media.volume == 0) {
            media.muted = true;
            media.volume = this._lastNonZeroVolume || 1;
          }
          try {
            Window.localStorage.setItem("media-chrome-pref-volume", media.volume.toString());
          } catch (e) {
          }
        });
      }
      mediaSetCallback(media) {
        this._handleVolumeChange = this._updateRange.bind(this);
        media.addEventListener("volumechange", this._handleVolumeChange);
        try {
          const volPref = Window.localStorage.getItem("media-chrome-pref-volume");
          if (volPref !== null)
            media.volume = volPref;
        } catch (e) {
        }
        this._updateRange();
      }
      mediaUnsetCallback(media) {
        media.removeEventListener("volumechange", this._handleVolumeChange);
      }
      _updateRange() {
        const media = this.media;
        const range = this.range;
        if (media.muted) {
          range.value = 0;
        } else {
          range.value = Math.round(media.volume * 1e3);
        }
        this.updateBar();
      }
    };
    defineCustomElement("media-volume-range", MediaVolumeRange);
  
    // src/js/media-data.js
    var mux_embed = __toModule(require_mux());
    var MediaData = class extends media_chrome_html_element_default {
      constructor() {
        super();
        const dataComponent = Document.querySelector("mux-data");
        const player = Document.querySelector("media-container").querySelector("video");
        const data = {
          env_key: dataComponent.dataset.envkey,
          viewer_application_name: "Media-Chrome",
          viewer_user_id: dataComponent.dataset.userid ?? "",
          experiment_name: dataComponent.dataset.experimentname ?? "",
          sub_property_id: dataComponent.dataset.subPropertyid ?? "",
          player_name: dataComponent.dataset.playername ?? "",
          player_version: dataComponent.dataset.playerversion ?? "",
          player_init_time: Date.now(),
          video_id: dataComponent.dataset.videoid ?? "",
          video_title: dataComponent.dataset.videotitle ?? ""
        };
        mux_embed.default.monitor(player, {
          debug: true,
          data
        });
      }
    };
    defineCustomElement("media-data", MediaData);
  
    // index.js
    var MediaChrome = class extends media_container_default {
    };
    if (!Window.customElements.get("media-chrome")) {
      Window.customElements.define("media-chrome", MediaChrome);
    }
  })();
  