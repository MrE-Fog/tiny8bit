var e;e||(e=typeof Module !== 'undefined' ? Module : {});var f={},h;for(h in e)e.hasOwnProperty(h)&&(f[h]=e[h]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var q=!1,r=!1,aa=!1,ba=!1,ca=!1;q="object"===typeof window;r="function"===typeof importScripts;aa=(ba="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!q&&!r;ca=!q&&!aa&&!r;var u="";
if(aa){u=__dirname+"/";var da,ea;e.read=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);a=da.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof w))throw a;});process.on("unhandledRejection",
x);e.quit=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(ca)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(q||r)r?
u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==
d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};var fa=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),y=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||fa);for(h in f)f.hasOwnProperty(h)&&(e[h]=f[h]);f=void 0;"object"!==typeof WebAssembly&&y("no native wasm support detected");var z,ha=!1;
function assert(a,b){a||x("Assertion failed: "+b)}function ia(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function ja(a,b,c,d){var g={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=A(c);B(a,C,b,c)}return b},array:function(a){var b=A(a.length);D.set(a,b);return b}},k=ia(a),l=[];a=0;if(d)for(var m=0;m<d.length;m++){var t=g[c[m]];t?(0===a&&(a=ka()),l[m]=t(d[m])):l[m]=d[m]}c=k.apply(null,l);c=function(a){return"string"===b?E(a):"boolean"===b?!!a:a}(c);0!==a&&la(a);return c}var ma="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=C,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ma)a=ma.decode(c.subarray(a,b));else{for(d="";a<b;){var g=c[a++];if(g&128){var k=c[a++]&63;if(192==(g&224))d+=String.fromCharCode((g&31)<<6|k);else{var l=c[a++]&63;g=224==(g&240)?(g&15)<<12|k<<6|l:(g&7)<<18|k<<12|l<<6|c[a++]&63;65536>g?d+=String.fromCharCode(g):(g-=65536,d+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else d+=String.fromCharCode(g)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var g=c;d=c+d-1;for(var k=0;k<a.length;++k){var l=a.charCodeAt(k);if(55296<=l&&57343>=l){var m=a.charCodeAt(++k);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-g}
function na(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function oa(a){var b=na(a)+1,c=A(b);B(a,D,c,b);return c}function pa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,D,C,qa,sa,F,ta,ua,G;
function va(){e.HEAP8=D=new Int8Array(buffer);e.HEAP16=qa=new Int16Array(buffer);e.HEAP32=F=new Int32Array(buffer);e.HEAPU8=C=new Uint8Array(buffer);e.HEAPU16=sa=new Uint16Array(buffer);e.HEAPU32=ta=new Uint32Array(buffer);e.HEAPF32=ua=new Float32Array(buffer);e.HEAPF64=G=new Float64Array(buffer)}var wa=e.TOTAL_MEMORY||33554432;5242880>wa&&y("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+wa+"! (TOTAL_STACK=5242880)");e.wasmMemory?z=e.wasmMemory:z=new WebAssembly.Memory({initial:wa/65536});
z&&(buffer=z.buffer);wa=buffer.byteLength;va();F[1497084]=11231248;function xa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Fb;"number"===typeof c?void 0===b.yb?e.dynCall_v(c):e.dynCall_vi(c,b.yb):c(void 0===b.yb?null:b.yb)}}}var ya=[],za=[],Aa=[],Ba=[],Ca=[];function Da(){var a=e.preRun.shift();ya.unshift(a)}var H=0,Ea=null,I=null;e.preloadedImages={};e.preloadedAudios={};
function Fa(){var a=J;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var J="c64.wasm";if(!Fa()){var Ga=J;J=e.locateFile?e.locateFile(Ga,u):u+Ga}function Ha(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(J);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function Ia(){return e.wasmBinary||!q&&!r||"function"!==typeof fetch?new Promise(function(a){a(Ha())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ha()})}
function Ja(a){function b(a){e.asm=a.exports;H--;e.monitorRunDependencies&&e.monitorRunDependencies(H);0==H&&(null!==Ea&&(clearInterval(Ea),Ea=null),I&&(a=I,I=null,a()))}function c(a){b(a.instance)}function d(a){return Ia().then(function(a){return WebAssembly.instantiate(a,g)}).then(a,function(a){y("failed to asynchronously prepare wasm: "+a);x(a)})}var g={env:a};H++;e.monitorRunDependencies&&e.monitorRunDependencies(H);if(e.instantiateWasm)try{return e.instantiateWasm(g,b)}catch(k){return y("Module.instantiateWasm callback failed with error: "+
k),!1}(function(){if(e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||"function"!==typeof fetch)return d(c);fetch(J,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,g).then(c,function(a){y("wasm streaming compile failed: "+a);y("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}e.asm=function(a,b){b.memory=z;b.table=new WebAssembly.Table({initial:25,maximum:25,element:"anyfunc"});return Ja(b)};za.push({Fb:function(){Ka()}});
var La=0,Ma=0,K=0,Na=0,Oa=0,Pa=null,Qa=null,Ra=!1;function Sa(){for(var a=L.length-1;0<=a;--a)Ta(a);L=[];Ua=[]}var Ua=[];function Va(){if(Wa&&Xa.qb)for(var a=0;a<Ua.length;++a){var b=Ua[a];Ua.splice(a,1);--a;b.Qb.apply(this,b.Kb)}}var Wa=0,Xa=null,L=[];function Ya(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Ta(a){var b=L[a];b.target.removeEventListener(b.pb,b.Db,b.rb);L.splice(a,1)}
function M(a){function b(b){++Wa;Xa=a;Va();a.tb(b);Va();--Wa}if(a.sb)a.Db=b,a.target.addEventListener(a.pb,b,a.rb),L.push(a),Ra||(Ba.push(Sa),Ra=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].pb==a.pb&&Ta(c--)}var Za=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function N(a){try{if(!a)return window;"number"===typeof a&&(a=Za[a]||E(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function $a(a){"number"===typeof a&&(a=E(a));return a&&"#canvas"!==a?"undefined"!==typeof ab&&db[a]?db[a]:N(a):"undefined"!==typeof ab&&db.canvas?db.canvas:e.canvas}
function eb(a,b,c,d,g,k){La||(La=O(164));a={target:N(a),qb:Ya()?!1:!0,pb:k,sb:d,tb:function(a){a=a||window.event;var c=La;B(a.key?a.key:"",C,c+0,32);B(a.code?a.code:"",C,c+32,32);F[c+64>>2]=a.location;F[c+68>>2]=a.ctrlKey;F[c+72>>2]=a.shiftKey;F[c+76>>2]=a.altKey;F[c+80>>2]=a.metaKey;F[c+84>>2]=a.repeat;B(a.locale?a.locale:"",C,c+88,32);B(a.char?a.char:"",C,c+120,32);F[c+152>>2]=a.charCode;F[c+156>>2]=a.keyCode;F[c+160>>2]=a.which;P(d,g,c,b)&&a.preventDefault()},rb:c};M(a)}
function fb(a,b,c){G[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();F[a+8>>2]=b.screenX;F[a+12>>2]=b.screenY;F[a+16>>2]=b.clientX;F[a+20>>2]=b.clientY;F[a+24>>2]=b.ctrlKey;F[a+28>>2]=b.shiftKey;F[a+32>>2]=b.altKey;F[a+36>>2]=b.metaKey;qa[a+40>>1]=b.button;qa[a+42>>1]=b.buttons;F[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Pa;F[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Qa;if(e.canvas){var d=e.canvas.getBoundingClientRect();
F[a+60>>2]=b.clientX-d.left;F[a+64>>2]=b.clientY-d.top}else F[a+60>>2]=0,F[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},F[a+52>>2]=b.clientX-d.left,F[a+56>>2]=b.clientY-d.top):(F[a+52>>2]=0,F[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Pa=b.screenX,Qa=b.screenY)}
function Q(a,b,c,d,g,k){Ma||(Ma=O(72));a=N(a);c={target:a,qb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,pb:k,sb:d,tb:function(c){c=c||window.event;fb(Ma,c,a);P(d,g,Ma,b)&&c.preventDefault()},rb:c};Ya()&&"mousedown"==k&&(c.qb=!1);M(c)}
function gb(a,b,c,d){Na||(Na=O(36));a=N(a);M({target:a,qb:!1,pb:"resize",sb:d,tb:function(c){c=c||window.event;if(c.target==a){var g=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Na;F[l>>2]=c.detail;F[l+4>>2]=document.body.clientWidth;
F[l+8>>2]=document.body.clientHeight;F[l+12>>2]=window.innerWidth;F[l+16>>2]=window.innerHeight;F[l+20>>2]=window.outerWidth;F[l+24>>2]=window.outerHeight;F[l+28>>2]=g[0];F[l+32>>2]=g[1];P(d,10,l,b)&&c.preventDefault()}},rb:c})}
function hb(a,b,c,d,g,k){Oa||(Oa=O(1684));a=N(a);M({target:a,qb:"touchstart"==k||"touchend"==k,pb:k,sb:d,tb:function(c){c=c||window.event;for(var l={},k=0;k<c.touches.length;++k){var n=c.touches[k];n.Ab=!1;l[n.identifier]=n}for(k=0;k<c.changedTouches.length;++k)n=c.changedTouches[k],l[n.identifier]=n,n.Ab=!0;for(k=0;k<c.targetTouches.length;++k)n=c.targetTouches[k],l[n.identifier].Ib=!0;var p=n=Oa;F[p+4>>2]=c.ctrlKey;F[p+8>>2]=c.shiftKey;F[p+12>>2]=c.altKey;F[p+16>>2]=c.metaKey;p+=20;var ra=e.canvas?
e.canvas.getBoundingClientRect():void 0,bb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},cb=0;for(k in l){var v=l[k];F[p>>2]=v.identifier;F[p+4>>2]=v.screenX;F[p+8>>2]=v.screenY;F[p+12>>2]=v.clientX;F[p+16>>2]=v.clientY;F[p+20>>2]=v.pageX;F[p+24>>2]=v.pageY;F[p+28>>2]=v.Ab;F[p+32>>2]=v.Ib;ra?(F[p+44>>2]=v.clientX-ra.left,F[p+48>>2]=v.clientY-ra.top):(F[p+44>>2]=0,F[p+48>>2]=0);F[p+36>>2]=v.clientX-bb.left;F[p+40>>2]=v.clientY-bb.top;p+=52;if(32<=++cb)break}F[n>>2]=cb;P(d,g,n,b)&&
c.preventDefault()},rb:c})}function ib(a,b,c,d,g,k){a||(a=e.canvas);a={target:N(a),qb:!1,pb:k,sb:d,tb:function(a){a=a||window.event;P(d,g,0,b)&&a.preventDefault()},rb:c};M(a)}
function jb(a,b,c,d,g){function k(c){c=c||window.event;fb(K,c,a);G[K+72>>3]=c.wheelDeltaX||0;G[K+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);G[K+88>>3]=0;F[K+96>>2]=0;P(d,9,K,b)&&c.preventDefault()}function l(c){c=c||window.event;var g=K;fb(g,c,a);G[g+72>>3]=c.deltaX;G[g+80>>3]=c.deltaY;G[g+88>>3]=c.deltaZ;F[g+96>>2]=c.deltaMode;P(d,9,g,b)&&c.preventDefault()}K||(K=O(104));M({target:a,qb:!0,pb:g,sb:d,tb:"wheel"==g?l:k,rb:c})}
var kb=1,lb=0,mb=[],R=[],nb=[],S=[],T=[],U=[],V=[],ob={},pb=null,db={},W={},qb={};function X(a){lb||(lb=a)}function Y(a){for(var b=kb++,c=a.length;c<b;c++)a[c]=null;return b}
function rb(a){a||(a=pb);if(!a.Gb){a.Gb=!0;var b=a.xb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,g){c.drawArraysInstancedANGLE(a,b,d,g)},b.drawElementsInstanced=function(a,b,d,g,k){c.drawElementsInstancedANGLE(a,b,d,g,k)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var g=b.getExtension("WEBGL_draw_buffers");g&&(b.drawBuffers=function(a,b){g.drawBuffersWEBGL(a,b)})}b.Mb=b.getExtension("EXT_disjoint_timer_query");var k="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=k.indexOf(a)&&b.getExtension(a)})}}var ab={},sb,tb,ub=["default","low-power","high-performance"];function vb(a,b,c,d){for(var g=0;g<a;g++){var k=Z[c](),l=k&&Y(d);k?(k.name=l,d[l]=k):X(1282);F[b+4*g>>2]=l}}
function wb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(g){X(1280);y("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+g+")");return}}break;default:X(1280);return}F[b>>2]=c}else X(1281)}function xb(a){var b=na(a)+1,c=O(b);B(a,C,c,b);return c}var yb={6402:1,6406:1,6407:3,6408:4,6409:1,6410:2,35904:3,35906:4},zb={5121:1,5123:2,5125:4,5126:4,32819:2,32820:2,33635:2,34042:4,36193:2};
function Ab(a,b,c,d,g){if(b=yb[b]*zb[a])switch(c=g+d*(c*b+4-1&-4),a){case 5121:return C.subarray(g,c);case 5126:return ua.subarray(g>>2,c>>2);case 5125:case 34042:return ta.subarray(g>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return sa.subarray(g>>1,c>>1);default:X(1280)}else X(1280)}function Bb(){e.___errno_location&&(F[e.___errno_location()>>2]=12)}function Cb(a){a=pa(a);var b=buffer.byteLength;try{return-1!==z.grow((a-b)/65536)?(buffer=z.buffer,!0):!1}catch(c){return!1}}
for(var Z,Db=0;256>Db;Db++);
var Ib=e.asm({},{Ya:function(){console.log("fs.h: registering Module['ccall']");e.ccall=ja},Za:function(a){var b=E(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var a=new Uint8Array(c.response);ja("emsc_load_data","int",["string","array","number"],[b,a,a.length])};c.send()},R:function(){return window.devicePixelRatio||1},X:function(a,b,c){a=a?N(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),G[b>>3]=a.right-a.left,G[c>>3]=
a.bottom-a.top):(G[b>>3]=a.clientWidth,G[c>>3]=a.clientHeight);return 0},Ta:function(a,b,c){C.set(C.subarray(b,b+c),a)},Ea:function(a,b){function c(d){Eb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},N:function(a,b,c){a=$a(a);if(!a)return-4;a.width=b;a.height=c;return 0},Na:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},La:function(a,b,c,d){eb(a,b,c,d,1,"keypress");return 0},Ma:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},Xa:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");
return 0},Qa:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},Pa:function(a,b,c,d){Q(a,b,c,d,34,"mouseleave");return 0},Ra:function(a,b,c,d){Q(a,b,c,d,8,"mousemove");return 0},Sa:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},Aa:function(a,b,c,d){gb(a,b,c,d);return 0},Ha:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");return 0},Ia:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},Ja:function(a,b,c,d){hb(a,b,c,d,24,"touchmove");return 0},Ka:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");
return 0},Ga:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},Fa:function(a,b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},Oa:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(jb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(jb(a,b,c,d,"mousewheel"),0):-1},K:function(a,b){var c={};b>>=2;c.alpha=!!F[b];c.depth=!!F[b+1];c.stencil=!!F[b+2];c.antialias=!!F[b+3];c.premultipliedAlpha=!!F[b+4];c.preserveDrawingBuffer=!!F[b+5];c.powerPreference=ub[F[b+6]];c.failIfMajorPerformanceCaveat=
!!F[b+7];c.Hb=F[b+8];c.Nb=F[b+9];c.Bb=F[b+10];c.Eb=F[b+11];c.Ob=F[b+12];c.Pb=F[b+13];a=$a(a);if(!a||c.Eb)c=0;else if(a=a.getContext("webgl",c)||a.getContext("experimental-webgl",c)){b=O(8);var d={handle:b,attributes:c,version:c.Hb,xb:a};a.canvas&&(a.canvas.Jb=d);ob[b]=d;("undefined"===typeof c.Bb||c.Bb)&&rb(d);c=b}else c=0;return c},da:function(a,b){a=ob[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));return!!a.xb.getExtension(b)},ra:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+
3]=F[a+4]=F[a+8]=F[a+10]=1},la:function(a){pb=ob[a];e.Lb=Z=pb&&pb.xb;return!a||Z?0:-5},h:function(a){Z.activeTexture(a)},O:function(a,b){Z.attachShader(R[a],V[b])},e:function(a,b){Z.bindBuffer(a,mb[b])},g:function(a,b){Z.bindFramebuffer(a,nb[b])},ya:function(a,b){Z.bindRenderbuffer(a,S[b])},b:function(a,b){Z.bindTexture(a,T[b])},F:function(a,b,c,d){Z.blendColor(a,b,c,d)},G:function(a,b){Z.blendEquationSeparate(a,b)},H:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},T:function(a,b,c,d){Z.bufferData(a,
c?C.subarray(c,c+b):b,d)},S:function(a,b,c,d){Z.bufferSubData(a,b,C.subarray(d,d+c))},m:function(a){return Z.checkFramebufferStatus(a)},ma:function(a){Z.clear(a)},pa:function(a,b,c,d){Z.clearColor(a,b,c,d)},oa:function(a){Z.clearDepth(a)},na:function(a){Z.clearStencil(a)},z:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},Wa:function(a){Z.compileShader(V[a])},Q:function(a,b,c,d,g,k,l,m){Z.compressedTexImage2D(a,b,c,d,g,k,m?C.subarray(m,m+l):null)},va:function(){var a=Y(R),b=Z.createProgram();b.name=
a;R[a]=b;return a},_:function(a){var b=Y(V);V[b]=Z.createShader(a);return b},E:function(a){Z.cullFace(a)},Ba:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],g=mb[d];g&&(Z.deleteBuffer(g),g.name=0,mb[d]=null,d==sb&&(sb=0),d==tb&&(tb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],g=nb[d];g&&(Z.deleteFramebuffer(g),g.name=0,nb[d]=null)}},V:function(a){if(a){var b=R[a];b?(Z.deleteProgram(b),b.name=0,R[a]=null,W[a]=null):X(1281)}},t:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>
2],g=S[d];g&&(Z.deleteRenderbuffer(g),g.name=0,S[d]=null)}},A:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},W:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],g=T[d];g&&(Z.deleteTexture(g),g.name=0,T[d]=null)}},x:function(a){Z.depthFunc(a)},y:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},a:function(a){Z.disableVertexAttribArray(a)},ga:function(a,b,c){Z.drawArrays(a,b,c)},ha:function(a,b,c,d){Z.drawElements(a,b,c,d)},f:function(a){Z.enable(a)},ia:function(a){Z.enableVertexAttribArray(a)},
k:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,S[d])},c:function(a,b,c,d,g){Z.framebufferTexture2D(a,b,c,T[d],g)},D:function(a){Z.frontFace(a)},U:function(a,b){vb(a,b,"createBuffer",mb)},n:function(a,b){vb(a,b,"createFramebuffer",nb)},za:function(a,b){vb(a,b,"createRenderbuffer",S)},wa:function(a,b){vb(a,b,"createTexture",T)},sa:function(a,b){return Z.getAttribLocation(R[a],E(b))},u:function(a,b){wb(a,b)},ta:function(a,b,c,d){a=Z.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");0<b&&d?
(b=B(a,C,d,b),c&&(F[c>>2]=b)):c&&(F[c>>2]=0)},M:function(a,b,c){if(c)if(a>=kb)X(1281);else{var d=W[a];if(d)if(35716==b)a=Z.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.zb;else if(35722==b){if(-1==d.vb){a=R[a];var g=Z.getProgramParameter(a,35721);for(b=d.vb=0;b<g;++b)d.vb=Math.max(d.vb,Z.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.vb}else if(35381==b){if(-1==d.wb)for(a=R[a],g=Z.getProgramParameter(a,35382),b=d.wb=0;b<g;++b)d.wb=Math.max(d.wb,
Z.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.wb}else F[c>>2]=Z.getProgramParameter(R[a],b);else X(1282)}else X(1281)},Va:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");0<b&&d?(b=B(a,C,d,b),c&&(F[c>>2]=b)):c&&(F[c>>2]=0)},Y:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),F[c>>2]=null===a||0==a.length?0:a.length+1):F[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},Ca:function(a){if(qb[a])return qb[a];
switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=xb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=xb(b);break;case 7938:b=xb("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+")");break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=xb(b);break;
default:return X(1280),0}return qb[a]=b},l:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=W[a]&&W[a].Cb[b])&&0<=c&&c<a[0]?a[1]+c:-1},ua:function(a){Z.linkProgram(R[a]);var b=R[a];a=W[a]={Cb:{},zb:0,vb:-1,wb:-1};for(var c=a.Cb,d=Z.getProgramParameter(b,35718),g=0;g<d;++g){var k=Z.getActiveUniform(b,g),l=k.name;a.zb=Math.max(a.zb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var m=Z.getUniformLocation(b,
l);if(m){var t=Y(U);c[l]=[k.size,t];U[t]=m;for(var n=1;n<k.size;++n)m=Z.getUniformLocation(b,l+"["+n+"]"),t=Y(U),U[t]=m}}},C:function(a,b){Z.polygonOffset(a,b)},xa:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},qa:function(a,b,c,d){Z.scissor(a,b,c,d)},Z:function(a,b,c,d){for(var g="",k=0;k<b;++k){var l=d?F[d+4*k>>2]:-1;g+=E(F[c+4*k>>2],0>l?void 0:l)}Z.shaderSource(V[a],g)},fa:function(a,b,c){Z.stencilFunc(a,b,c)},J:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},w:function(a){Z.stencilMask(a)},
ea:function(a,b,c){Z.stencilOp(a,b,c)},I:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},P:function(a,b,c,d,g,k,l,m,t){Z.texImage2D(a,b,c,d,g,k,l,m,t?Ab(m,l,d,g,t):null)},i:function(a,b,c){Z.texParameteri(a,b,c)},s:function(a,b,c,d,g,k,l,m,t){var n=null;t&&(n=Ab(m,l,g,k,t));Z.texSubImage2D(a,b,c,d,g,k,l,m,n)},B:function(a,b){Z.uniform1i(U[a],b)},ka:function(a){Z.useProgram(R[a])},Ua:function(a,b){Z.vertexAttribDivisor(a,b)},ja:function(a,b,c,d,g,k){Z.vertexAttribPointer(a,b,c,!!d,g,k)},L:function(a,
b,c,d){Z.viewport(a,b,c,d)},r:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Fb()});document.body.append(a)},q:function(){document.getElementById("_sokol_app_input_element").focus()},Da:function(){window.addEventListener("beforeunload",function(a){0!=Gb()&&(a.preventDefault(),a.returnValue=" ")})},p:function(){document.getElementById("_sokol_app_input_element").blur()},$:function(){for(var a=
(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())ja("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},aa:function(){return e.ub?e.ub.bufferSize:0},ca:function(a,b,c){e.ob=null;e.ub=null;"undefined"!==typeof AudioContext?(e.ob=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?(e.ob=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),
console.log("sokol_audio.h: created webkitAudioContext")):(e.ob=null,console.log("sokol_audio.h: no WebAudio support"));return e.ob?(console.log("sokol_audio.h: sample rate ",e.ob.sampleRate),e.ub=e.ob.createScriptProcessor(c,0,b),e.ub.onaudioprocess=function(a){var b=a.outputBuffer.length,c=Hb(b);if(c)for(var d=a.outputBuffer.numberOfChannels,m=0;m<d;m++)for(var t=a.outputBuffer.getChannelData(m),n=0;n<b;n++)t[n]=ua[(c>>2)+(d*n+m)]},e.ub.connect(e.ob.destination),a=function(){e.ob&&"suspended"===
e.ob.state&&e.ob.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},ba:function(){return e.ob?e.ob.sampleRate:0},o:function(a){a|=0;var b=D.length|0;var c=F[1497084]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return x("OOM"),0,Bb(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(D.length,16777216);b<a;)536870912>=b?b=pa(2*b):b=Math.min(pa((3*b+2147483648)/4),2147418112);
Cb(b)?(va(),a=!0):a=!1}a=!(a|0)}if(a)return Bb(),-1;F[1497084]=d|0;return c|0},v:function(){return performance.now()}},buffer);e.asm=Ib;var Ka=e.___wasm_call_ctors=function(){return e.asm._a.apply(null,arguments)};e._emsc_load_data=function(){return e.asm.$a.apply(null,arguments)};var Fb=e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.ab.apply(null,arguments)},Gb=e.__sapp_html5_get_ask_leave_site=function(){return e.asm.bb.apply(null,arguments)};
e._main=function(){return e.asm.cb.apply(null,arguments)};var O=e._malloc=function(){return e.asm.db.apply(null,arguments)};e._free=function(){return e.asm.eb.apply(null,arguments)};var Hb=e.__saudio_emsc_pull=function(){return e.asm.fb.apply(null,arguments)};e.__sargs_add_kvp=function(){return e.asm.gb.apply(null,arguments)};
var ka=e.stackSave=function(){return e.asm.hb.apply(null,arguments)},A=e.stackAlloc=function(){return e.asm.ib.apply(null,arguments)},la=e.stackRestore=function(){return e.asm.jb.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.kb.apply(null,arguments)};e.dynCall_v=function(){return e.asm.lb.apply(null,arguments)};var P=e.dynCall_iiii=function(){return e.asm.mb.apply(null,arguments)},Eb=e.dynCall_idi=function(){return e.asm.nb.apply(null,arguments)};e.asm=Ib;
function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}w.prototype=Error();w.prototype.constructor=w;I=function Jb(){e.calledRun||Kb();e.calledRun||(I=Jb)};
e.callMain=function(a){a=a||[];var b=a.length+1,c=A(4*(b+1));F[c>>2]=oa(e.thisProgram);for(var d=1;d<b;d++)F[(c>>2)+d]=oa(a[d-1]);F[(c>>2)+b]=0;try{var g=e._main(b,c,0);if(!e.noExitRuntime||0!==g){if(!e.noExitRuntime&&(ha=!0,e.onExit))e.onExit(g);e.quit(g,new w(g))}}catch(k){k instanceof w||("SimulateInfiniteLoop"==k?e.noExitRuntime=!0:((a=k)&&"object"===typeof k&&k.stack&&(a=[k,k.stack]),y("exception thrown: "+a),e.quit(1,k)))}finally{}};
function Kb(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!ha)){xa(za);xa(Aa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&Lb&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();Ca.unshift(b)}xa(Ca)}}a=a||e.arguments;if(!(0<H)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Da();xa(ya);0<H||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}}e.run=Kb;function x(a){if(e.onAbort)e.onAbort(a);void 0!==a?(fa(a),y(a),a='"'+a+'"'):a="";ha=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=x;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Lb=!0;e.noInitialRun&&(Lb=!1);e.noExitRuntime=!0;Kb();
