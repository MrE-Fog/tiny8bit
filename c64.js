var e;e||(e=typeof Module !== 'undefined' ? Module : {});var f={},h;for(h in e)e.hasOwnProperty(h)&&(f[h]=e[h]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var q=!1,r=!1,aa=!1,ba=!1;q="object"===typeof window;r="function"===typeof importScripts;aa="object"===typeof process&&"function"===typeof require&&!q&&!r;ba=!q&&!aa&&!r;var u="";
if(aa){u=__dirname+"/";var ca,da;e.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof w))throw a;});process.on("unhandledRejection",
x);e.quit=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(q||r)r?
u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==
d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};var ea=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),y=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ea);for(h in f)f.hasOwnProperty(h)&&(e[h]=f[h]);f=void 0;"object"!==typeof WebAssembly&&y("no native wasm support detected");var fa,ha=!1;
function assert(a,b){a||x("Assertion failed: "+b)}function ia(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function ja(a,b,c,d){var g={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=z(c);A(a,B,b,c)}return b},array:function(a){var b=z(a.length);ka.set(a,b);return b}},k=ia(a),l=[];a=0;if(d)for(var m=0;m<d.length;m++){var t=g[c[m]];t?(0===a&&(a=la()),l[m]=t(d[m])):l[m]=d[m]}c=k.apply(null,l);c=function(a){return"string"===b?C(a):"boolean"===b?!!a:a}(c);0!==a&&ma(a);return c}var na="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function C(a,b){if(a){var c=B,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&na)a=na.decode(c.subarray(a,b));else{for(d="";a<b;){var g=c[a++];if(g&128){var k=c[a++]&63;if(192==(g&224))d+=String.fromCharCode((g&31)<<6|k);else{var l=c[a++]&63;g=224==(g&240)?(g&15)<<12|k<<6|l:(g&7)<<18|k<<12|l<<6|c[a++]&63;65536>g?d+=String.fromCharCode(g):(g-=65536,d+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else d+=String.fromCharCode(g)}a=d}}else a="";return a}
function A(a,b,c,d){if(!(0<d))return 0;var g=c;d=c+d-1;for(var k=0;k<a.length;++k){var l=a.charCodeAt(k);if(55296<=l&&57343>=l){var m=a.charCodeAt(++k);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-g}
function oa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function pa(a){var b=oa(a)+1,c=z(b);A(a,ka,c,b);return c}var buffer,ka,B,qa,ra,D,ta,ua,E,F=e.TOTAL_MEMORY||33554432;5242880>F&&y("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+F+"! (TOTAL_STACK=5242880)");
e.buffer?buffer=e.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(fa=new WebAssembly.Memory({initial:F/65536,maximum:F/65536}),buffer=fa.buffer):buffer=new ArrayBuffer(F);e.HEAP8=ka=new Int8Array(buffer);e.HEAP16=qa=new Int16Array(buffer);e.HEAP32=D=new Int32Array(buffer);e.HEAPU8=B=new Uint8Array(buffer);e.HEAPU16=ra=new Uint16Array(buffer);e.HEAPU32=ta=new Uint32Array(buffer);e.HEAPF32=ua=new Float32Array(buffer);e.HEAPF64=E=new Float64Array(buffer);D[1494572]=11221200;
function G(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Cb;"number"===typeof c?void 0===b.ub?e.dynCall_v(c):e.dynCall_vi(c,b.ub):c(void 0===b.ub?null:b.ub)}}}var va=[],wa=[],xa=[],ya=[],za=[],Aa=!1;function Ba(){var a=e.preRun.shift();va.unshift(a)}var H=0,Ca=null,I=null;e.preloadedImages={};e.preloadedAudios={};
function Da(){var a=J;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var J="c64.wasm";if(!Da()){var Ea=J;J=e.locateFile?e.locateFile(Ea,u):u+Ea}function Fa(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(J);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function Ga(){return e.wasmBinary||!q&&!r||"function"!==typeof fetch?new Promise(function(a){a(Fa())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Fa()})}
function Ha(a){function b(a){e.asm=a.exports;H--;e.monitorRunDependencies&&e.monitorRunDependencies(H);0==H&&(null!==Ca&&(clearInterval(Ca),Ca=null),I&&(a=I,I=null,a()))}function c(a){b(a.instance)}function d(a){return Ga().then(function(a){return WebAssembly.instantiate(a,g)}).then(a,function(a){y("failed to asynchronously prepare wasm: "+a);x(a)})}var g={env:a};H++;e.monitorRunDependencies&&e.monitorRunDependencies(H);if(e.instantiateWasm)try{return e.instantiateWasm(g,b)}catch(k){return y("Module.instantiateWasm callback failed with error: "+
k),!1}(function(){return e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Da()||"function"!==typeof fetch?d(c):WebAssembly.instantiateStreaming(fetch(J,{credentials:"same-origin"}),g).then(c,function(a){y("wasm streaming compile failed: "+a);y("falling back to ArrayBuffer instantiation");d(c)})})();return{}}e.asm=function(a,b){b.memory=fa;b.table=new WebAssembly.Table({initial:25,maximum:25,element:"anyfunc"});return Ha(b)};wa.push({Cb:function(){Ia()}});
var Ja=0,Ka=0,K=0,La=0,Ma=0,Na=null,Oa=null,Pa=!1;function Qa(){for(var a=L.length-1;0<=a;--a)Ra(a);L=[];Sa=[]}var Sa=[];function Ta(){if(Ua&&Va.nb)for(var a=0;a<Sa.length;++a){var b=Sa[a];Sa.splice(a,1);--a;b.Nb.apply(this,b.Hb)}}var Ua=0,Va=null,L=[];function Wa(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Ra(a){var b=L[a];b.target.removeEventListener(b.mb,b.Ab,b.ob);L.splice(a,1)}
function M(a){function b(b){++Ua;Va=a;Ta();a.qb(b);Ta();--Ua}if(a.pb)a.Ab=b,a.target.addEventListener(a.mb,b,a.ob),L.push(a),Pa||(ya.push(Qa),Pa=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].mb==a.mb&&Ra(c--)}var Xa=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function N(a){try{if(!a)return window;"number"===typeof a&&(a=Xa[a]||C(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Ya(a){"number"===typeof a&&(a=C(a));return a&&"#canvas"!==a?"undefined"!==typeof Za&&bb[a]?bb[a]:N(a):"undefined"!==typeof Za&&bb.canvas?bb.canvas:e.canvas}
function cb(a,b,c,d,g,k){Ja||(Ja=O(164));a={target:N(a),nb:Wa()?!1:!0,mb:k,pb:d,qb:function(a){a=a||window.event;var c=Ja;A(a.key?a.key:"",B,c+0,32);A(a.code?a.code:"",B,c+32,32);D[c+64>>2]=a.location;D[c+68>>2]=a.ctrlKey;D[c+72>>2]=a.shiftKey;D[c+76>>2]=a.altKey;D[c+80>>2]=a.metaKey;D[c+84>>2]=a.repeat;A(a.locale?a.locale:"",B,c+88,32);A(a.char?a.char:"",B,c+120,32);D[c+152>>2]=a.charCode;D[c+156>>2]=a.keyCode;D[c+160>>2]=a.which;P(d,g,c,b)&&a.preventDefault()},ob:c};M(a)}
function db(a,b,c){E[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();D[a+8>>2]=b.screenX;D[a+12>>2]=b.screenY;D[a+16>>2]=b.clientX;D[a+20>>2]=b.clientY;D[a+24>>2]=b.ctrlKey;D[a+28>>2]=b.shiftKey;D[a+32>>2]=b.altKey;D[a+36>>2]=b.metaKey;qa[a+40>>1]=b.button;qa[a+42>>1]=b.buttons;D[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Na;D[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Oa;if(e.canvas){var d=e.canvas.getBoundingClientRect();
D[a+60>>2]=b.clientX-d.left;D[a+64>>2]=b.clientY-d.top}else D[a+60>>2]=0,D[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},D[a+52>>2]=b.clientX-d.left,D[a+56>>2]=b.clientY-d.top):(D[a+52>>2]=0,D[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Na=b.screenX,Oa=b.screenY)}
function Q(a,b,c,d,g,k){Ka||(Ka=O(72));a=N(a);c={target:a,nb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,mb:k,pb:d,qb:function(c){c=c||window.event;db(Ka,c,a);P(d,g,Ka,b)&&c.preventDefault()},ob:c};Wa()&&"mousedown"==k&&(c.nb=!1);M(c)}
function eb(a,b,c,d){La||(La=O(36));a=N(a);M({target:a,nb:!1,mb:"resize",pb:d,qb:function(c){c=c||window.event;if(c.target==a){var g=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=La;D[l>>2]=c.detail;D[l+4>>2]=document.body.clientWidth;
D[l+8>>2]=document.body.clientHeight;D[l+12>>2]=window.innerWidth;D[l+16>>2]=window.innerHeight;D[l+20>>2]=window.outerWidth;D[l+24>>2]=window.outerHeight;D[l+28>>2]=g[0];D[l+32>>2]=g[1];P(d,10,l,b)&&c.preventDefault()}},ob:c})}
function fb(a,b,c,d,g,k){Ma||(Ma=O(1684));a=N(a);M({target:a,nb:"touchstart"==k||"touchend"==k,mb:k,pb:d,qb:function(c){c=c||window.event;for(var l={},k=0;k<c.touches.length;++k){var n=c.touches[k];l[n.identifier]=n}for(k=0;k<c.changedTouches.length;++k)n=c.changedTouches[k],l[n.identifier]=n,n.zb=!0;for(k=0;k<c.targetTouches.length;++k)n=c.targetTouches[k],l[n.identifier].Fb=!0;var p=n=Ma;D[p+4>>2]=c.ctrlKey;D[p+8>>2]=c.shiftKey;D[p+12>>2]=c.altKey;D[p+16>>2]=c.metaKey;p+=20;var sa=e.canvas?e.canvas.getBoundingClientRect():
void 0,$a=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},ab=0;for(k in l){var v=l[k];D[p>>2]=v.identifier;D[p+4>>2]=v.screenX;D[p+8>>2]=v.screenY;D[p+12>>2]=v.clientX;D[p+16>>2]=v.clientY;D[p+20>>2]=v.pageX;D[p+24>>2]=v.pageY;D[p+28>>2]=v.zb;D[p+32>>2]=v.Fb;sa?(D[p+44>>2]=v.clientX-sa.left,D[p+48>>2]=v.clientY-sa.top):(D[p+44>>2]=0,D[p+48>>2]=0);D[p+36>>2]=v.clientX-$a.left;D[p+40>>2]=v.clientY-$a.top;p+=52;if(32<=++ab)break}D[n>>2]=ab;P(d,g,n,b)&&c.preventDefault()},ob:c})}
function gb(a,b,c,d,g,k){a||(a=e.canvas);a={target:N(a),nb:!1,mb:k,pb:d,qb:function(a){a=a||window.event;P(d,g,0,b)&&a.preventDefault()},ob:c};M(a)}
function hb(a,b,c,d,g){function k(c){c=c||window.event;db(K,c,a);E[K+72>>3]=c.wheelDeltaX||0;E[K+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);E[K+88>>3]=0;D[K+96>>2]=0;P(d,9,K,b)&&c.preventDefault()}function l(c){c=c||window.event;var g=K;db(g,c,a);E[g+72>>3]=c.deltaX;E[g+80>>3]=c.deltaY;E[g+88>>3]=c.deltaZ;D[g+96>>2]=c.deltaMode;P(d,9,g,b)&&c.preventDefault()}K||(K=O(104));M({target:a,nb:!0,mb:g,pb:d,qb:"wheel"==g?l:k,ob:c})}
var ib=1,jb=0,kb=[],R=[],lb=[],S=[],T=[],U=[],V=[],mb={},nb=null,bb={},W={},ob={};function X(a){jb||(jb=a)}function Y(a){for(var b=ib++,c=a.length;c<b;c++)a[c]=null;return b}
function pb(a){a||(a=nb);if(!a.Db){a.Db=!0;var b=a.wb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,g){c.drawArraysInstancedANGLE(a,b,d,g)},b.drawElementsInstanced=function(a,b,d,g,k){c.drawElementsInstancedANGLE(a,b,d,g,k)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var g=b.getExtension("WEBGL_draw_buffers");g&&(b.drawBuffers=function(a,b){g.drawBuffersWEBGL(a,b)})}b.Jb=b.getExtension("EXT_disjoint_timer_query");var k="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=k.indexOf(a)&&b.getExtension(a)})}}var Za={},qb,rb,sb=["default","low-power","high-performance"];function tb(a,b,c,d){for(var g=0;g<a;g++){var k=Z[c](),l=k&&Y(d);k?(k.name=l,d[l]=k):X(1282);D[b+4*g>>2]=l}}
function ub(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(g){X(1280);y("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+g+")");return}}break;default:X(1280);return}D[b>>2]=c}else X(1281)}function vb(a){var b=oa(a)+1,c=O(b);A(a,B,c,b);return c}var wb={6402:1,6406:1,6407:3,6408:4,6409:1,6410:2,35904:3,35906:4},xb={5121:1,5123:2,5125:4,5126:4,32819:2,32820:2,33635:2,34042:4,36193:2};
function yb(a,b,c,d,g){if(b=wb[b]*xb[a])switch(c=g+d*(c*b+4-1&-4),a){case 5121:return B.subarray(g,c);case 5126:return ua.subarray(g>>2,c>>2);case 5125:case 34042:return ta.subarray(g>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return ra.subarray(g>>1,c>>1);default:X(1280)}else X(1280)}function zb(){e.___errno_location&&(D[e.___errno_location()>>2]=12)}for(var Z,Ab=0;256>Ab;Ab++);
var Eb=e.asm({},{Wa:function(){console.log("fs.h: registering Module['ccall']");e.ccall=ja},Xa:function(a){var b=C(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var a=new Uint8Array(c.response);ja("emsc_load_data","int",["string","array","number"],[b,a,a.length])};c.send()},S:function(){return window.devicePixelRatio||1},Y:function(a,b,c){a=a?N(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),E[b>>3]=a.right-a.left,E[c>>3]=
a.bottom-a.top):(E[b>>3]=a.clientWidth,E[c>>3]=a.clientHeight);return 0},Sa:function(a,b,c){B.set(B.subarray(b,b+c),a)},Ea:function(a,b){function c(d){Bb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},N:function(a,b,c){a=Ya(a);if(!a)return-4;a.width=b;a.height=c;return 0},Na:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},La:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},Ma:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},da:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");
return 0},Qa:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},Pa:function(a,b,c,d){Q(a,b,c,d,34,"mouseleave");return 0},Ra:function(a,b,c,d){Q(a,b,c,d,8,"mousemove");return 0},Va:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},Ba:function(a,b,c,d){eb(a,b,c,d);return 0},Ha:function(a,b,c,d){fb(a,b,c,d,25,"touchcancel");return 0},Ia:function(a,b,c,d){fb(a,b,c,d,23,"touchend");return 0},Ja:function(a,b,c,d){fb(a,b,c,d,24,"touchmove");return 0},Ka:function(a,b,c,d){fb(a,b,c,d,22,"touchstart");
return 0},Ga:function(a,b,c,d){gb(a,b,c,d,31,"webglcontextlost");return 0},Fa:function(a,b,c,d){gb(a,b,c,d,32,"webglcontextrestored");return 0},Oa:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(hb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(hb(a,b,c,d,"mousewheel"),0):-1},L:function(a,b){var c={};b>>=2;c.alpha=!!D[b];c.depth=!!D[b+1];c.stencil=!!D[b+2];c.antialias=!!D[b+3];c.premultipliedAlpha=!!D[b+4];c.preserveDrawingBuffer=!!D[b+5];c.powerPreference=sb[D[b+6]];c.failIfMajorPerformanceCaveat=
!!D[b+7];c.Eb=D[b+8];c.Kb=D[b+9];c.xb=D[b+10];c.Bb=D[b+11];c.Lb=D[b+12];c.Mb=D[b+13];a=Ya(a);if(!a||c.Bb)c=0;else{if(b=a=a.getContext("webgl",c)||a.getContext("experimental-webgl",c)){b=O(8);var d={handle:b,attributes:c,version:c.Eb,wb:a};a.canvas&&(a.canvas.Gb=d);mb[b]=d;("undefined"===typeof c.xb||c.xb)&&pb(d)}c=b}return c},ra:function(a){a>>=2;for(var b=0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},la:function(a){nb=mb[a];e.Ib=Z=nb&&nb.wb;return!a||Z?0:-5},h:function(a){Z.activeTexture(a)},
P:function(a,b){Z.attachShader(R[a],V[b])},e:function(a,b){Z.bindBuffer(a,kb[b])},f:function(a,b){Z.bindFramebuffer(a,lb[b])},za:function(a,b){Z.bindRenderbuffer(a,S[b])},c:function(a,b){Z.bindTexture(a,T[b])},G:function(a,b,c,d){Z.blendColor(a,b,c,d)},H:function(a,b){Z.blendEquationSeparate(a,b)},I:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},U:function(a,b,c,d){Z.bufferData(a,c?B.subarray(c,c+b):b,d)},T:function(a,b,c,d){Z.bufferSubData(a,b,B.subarray(d,d+c))},m:function(a){return Z.checkFramebufferStatus(a)},
na:function(a){Z.clear(a)},qa:function(a,b,c,d){Z.clearColor(a,b,c,d)},pa:function(a){Z.clearDepth(a)},oa:function(a){Z.clearStencil(a)},z:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},Z:function(a){Z.compileShader(V[a])},R:function(a,b,c,d,g,k,l,m){Z.compressedTexImage2D(a,b,c,d,g,k,m?B.subarray(m,m+l):null)},wa:function(){var a=Y(R),b=Z.createProgram();b.name=a;R[a]=b;return a},$:function(a){var b=Y(V);V[b]=Z.createShader(a);return b},F:function(a){Z.cullFace(a)},Ca:function(a,b){for(var c=0;c<
a;c++){var d=D[b+4*c>>2],g=kb[d];g&&(Z.deleteBuffer(g),g.name=0,kb[d]=null,d==qb&&(qb=0),d==rb&&(rb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],g=lb[d];g&&(Z.deleteFramebuffer(g),g.name=0,lb[d]=null)}},W:function(a){if(a){var b=R[a];b?(Z.deleteProgram(b),b.name=0,R[a]=null,W[a]=null):X(1281)}},t:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],g=S[d];g&&(Z.deleteRenderbuffer(g),g.name=0,S[d]=null)}},A:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},X:function(a,
b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],g=T[d];g&&(Z.deleteTexture(g),g.name=0,T[d]=null)}},x:function(a){Z.depthFunc(a)},y:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},a:function(a){Z.disableVertexAttribArray(a)},ha:function(a,b,c){Z.drawArrays(a,b,c)},ia:function(a,b,c,d){Z.drawElements(a,b,c,d)},g:function(a){Z.enable(a)},ja:function(a){Z.enableVertexAttribArray(a)},k:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,S[d])},b:function(a,b,c,d,g){Z.framebufferTexture2D(a,b,c,T[d],
g)},E:function(a){Z.frontFace(a)},V:function(a,b){tb(a,b,"createBuffer",kb)},n:function(a,b){tb(a,b,"createFramebuffer",lb)},Aa:function(a,b){tb(a,b,"createRenderbuffer",S)},xa:function(a,b){tb(a,b,"createTexture",T)},ta:function(a,b){return Z.getAttribLocation(R[a],C(b))},u:function(a,b){ub(a,b)},ua:function(a,b,c,d){a=Z.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");0<b&&d?(b=A(a,B,d,b),c&&(D[c>>2]=b)):c&&(D[c>>2]=0)},O:function(a,b,c){if(c)if(a>=ib)X(1281);else{var d=W[a];if(d)if(35716==
b)a=Z.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b)D[c>>2]=d.vb;else if(35722==b){if(-1==d.sb){a=R[a];var g=Z.getProgramParameter(a,35721);for(b=d.sb=0;b<g;++b)d.sb=Math.max(d.sb,Z.getActiveAttrib(a,b).name.length+1)}D[c>>2]=d.sb}else if(35381==b){if(-1==d.tb)for(a=R[a],g=Z.getProgramParameter(a,35382),b=d.tb=0;b<g;++b)d.tb=Math.max(d.tb,Z.getActiveUniformBlockName(a,b).length+1);D[c>>2]=d.tb}else D[c>>2]=Z.getProgramParameter(R[a],b);else X(1282)}else X(1281)},
Ua:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");0<b&&d?(b=A(a,B,d,b),c&&(D[c>>2]=b)):c&&(D[c>>2]=0)},B:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),D[c>>2]=null===a||0==a.length?0:a.length+1):D[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},Da:function(a){if(ob[a])return ob[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),
c.push("GL_"+b[d]);b=vb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=vb(b);break;case 7938:b=vb("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+")");break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=vb(b);break;default:return X(1280),0}return ob[a]=b},l:function(a,b){b=C(b);var c=0;if("]"==b[b.length-1]){var d=
b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=W[a]&&W[a].yb[b])&&0<=c&&c<a[0]?a[1]+c:-1},va:function(a){Z.linkProgram(R[a]);var b=R[a];a=W[a]={yb:{},vb:0,sb:-1,tb:-1};for(var c=a.yb,d=Z.getProgramParameter(b,35718),g=0;g<d;++g){var k=Z.getActiveUniform(b,g),l=k.name;a.vb=Math.max(a.vb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var m=Z.getUniformLocation(b,l);if(m){var t=Y(U);c[l]=[k.size,t];U[t]=m;for(var n=1;n<k.size;++n)m=Z.getUniformLocation(b,
l+"["+n+"]"),t=Y(U),U[t]=m}}},D:function(a,b){Z.polygonOffset(a,b)},ya:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},sa:function(a,b,c,d){Z.scissor(a,b,c,d)},_:function(a,b,c,d){for(var g="",k=0;k<b;++k){var l=d?D[d+4*k>>2]:-1;g+=C(D[c+4*k>>2],0>l?void 0:l)}Z.shaderSource(V[a],g)},ga:function(a,b,c){Z.stencilFunc(a,b,c)},K:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},w:function(a){Z.stencilMask(a)},fa:function(a,b,c){Z.stencilOp(a,b,c)},J:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},Q:function(a,
b,c,d,g,k,l,m,t){Z.texImage2D(a,b,c,d,g,k,l,m,t?yb(m,l,d,g,t):null)},i:function(a,b,c){Z.texParameteri(a,b,c)},s:function(a,b,c,d,g,k,l,m,t){var n=null;t&&(n=yb(m,l,g,k,t));Z.texSubImage2D(a,b,c,d,g,k,l,m,n)},C:function(a,b){Z.uniform1i(U[a],b)},ma:function(a){Z.useProgram(R[a])},Ta:function(a,b){Z.vertexAttribDivisor(a,b)},ka:function(a,b,c,d,g,k){Z.vertexAttribPointer(a,b,c,!!d,g,k)},M:function(a,b,c,d){Z.viewport(a,b,c,d)},r:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Cb()});document.body.append(a)},q:function(){document.getElementById("_sokol_app_input_element").focus()},p:function(){document.getElementById("_sokol_app_input_element").blur()},aa:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())ja("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},ba:function(){return e.rb?e.rb.bufferSize:0},ea:function(a,b,c){e.lb=null;
e.rb=null;"undefined"!==typeof AudioContext?(e.lb=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?(e.lb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):(e.lb=null,console.log("sokol_audio.h: no WebAudio support"));return e.lb?(console.log("sokol_audio.h: sample rate ",e.lb.sampleRate),e.rb=e.lb.createScriptProcessor(c,0,b),
e.rb.onaudioprocess=function(a){var b=a.outputBuffer.length,c=Db(b);if(c)for(var d=a.outputBuffer.numberOfChannels,m=0;m<d;m++)for(var t=a.outputBuffer.getChannelData(m),n=0;n<b;n++)t[n]=ua[(c>>2)+(d*n+m)]},e.rb.connect(e.lb.destination),a=function(){e.lb&&"suspended"===e.lb.state&&e.lb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},ca:function(){return e.lb?e.lb.sampleRate:0},o:function(a){a|=
0;var b=ka.length|0;var c=D[1494572]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return x("OOM"),0,zb(),-1;if(a=(d|0)>(b|0))x("OOM"),a=!0;if(a)return zb(),-1;D[1494572]=d|0;return c|0},v:function(){return performance.now()}},buffer);e.asm=Eb;var Ia=e.___wasm_call_ctors=function(){return e.asm.Ya.apply(null,arguments)};e._emsc_load_data=function(){return e.asm.Za.apply(null,arguments)};var Cb=e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm._a.apply(null,arguments)};
e._main=function(){return e.asm.$a.apply(null,arguments)};var O=e._malloc=function(){return e.asm.ab.apply(null,arguments)};e._free=function(){return e.asm.bb.apply(null,arguments)};var Db=e.__saudio_emsc_pull=function(){return e.asm.cb.apply(null,arguments)};e.__sargs_add_kvp=function(){return e.asm.db.apply(null,arguments)};
var la=e.stackSave=function(){return e.asm.eb.apply(null,arguments)},z=e.stackAlloc=function(){return e.asm.fb.apply(null,arguments)},ma=e.stackRestore=function(){return e.asm.gb.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.hb.apply(null,arguments)};e.dynCall_v=function(){return e.asm.ib.apply(null,arguments)};var P=e.dynCall_iiii=function(){return e.asm.jb.apply(null,arguments)},Bb=e.dynCall_idi=function(){return e.asm.kb.apply(null,arguments)};e.asm=Eb;
function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}w.prototype=Error();w.prototype.constructor=w;I=function Fb(){e.calledRun||Gb();e.calledRun||(I=Fb)};
e.callMain=function(a){a=a||[];Aa||(Aa=!0,G(wa));var b=a.length+1,c=z(4*(b+1));D[c>>2]=pa(e.thisProgram);for(var d=1;d<b;d++)D[(c>>2)+d]=pa(a[d-1]);D[(c>>2)+b]=0;try{var g=e._main(b,c,0);if(!e.noExitRuntime||0!==g){if(!e.noExitRuntime&&(ha=!0,e.onExit))e.onExit(g);e.quit(g,new w(g))}}catch(k){k instanceof w||("SimulateInfiniteLoop"==k?e.noExitRuntime=!0:((a=k)&&"object"===typeof k&&k.stack&&(a=[k,k.stack]),y("exception thrown: "+a),e.quit(1,k)))}finally{}};
function Gb(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!ha)){Aa||(Aa=!0,G(wa));G(xa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&Hb&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();za.unshift(b)}G(za)}}a=a||e.arguments;if(!(0<H)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ba();G(va);0<H||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}}e.run=Gb;function x(a){if(e.onAbort)e.onAbort(a);void 0!==a?(ea(a),y(a),a=JSON.stringify(a)):a="";ha=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=x;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Hb=!0;e.noInitialRun&&(Hb=!1);e.noExitRuntime=!0;Gb();
