var e;e||(e=typeof Module !== 'undefined' ? Module : {});var h={},k;for(k in e)e.hasOwnProperty(k)&&(h[k]=e[k]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var m=!1,t=!1,aa=!1,ba=!1;m="object"===typeof window;t="function"===typeof importScripts;aa="object"===typeof process&&"function"===typeof require&&!m&&!t;ba=!m&&!aa&&!t;var u="";
if(aa){u=__dirname+"/";var ca,da;e.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof v))throw a;});process.on("unhandledRejection",
x);e.quit=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(m||t)t?
u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==
d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};var ea=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),y=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ea);for(k in h)h.hasOwnProperty(k)&&(e[k]=h[k]);h=void 0;var fa={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};
"object"!==typeof WebAssembly&&y("no native wasm support detected");var ha,ia=!1;function assert(a,b){a||x("Assertion failed: "+b)}function ja(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function ka(a,b,c,d){var f={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=la(c);z(a,A,b,c)}return b},array:function(a){var b=la(a.length);ma.set(a,b);return b}},g=ja(a),l=[];a=0;if(d)for(var n=0;n<d.length;n++){var r=f[c[n]];r?(0===a&&(a=na()),l[n]=r(d[n])):l[n]=d[n]}c=g.apply(null,l);c=function(a){return"string"===b?B(a):"boolean"===b?!!a:a}(c);0!==a&&oa(a)}var pa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function qa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&pa)return pa.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|g);else{var l=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|l:(f&7)<<18|g<<12|l<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function B(a,b){return a?qa(A,a,b):""}
function z(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var g=0;g<a.length;++g){var l=a.charCodeAt(g);if(55296<=l&&57343>=l){var n=a.charCodeAt(++g);l=65536+((l&1023)<<10)|n&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-f}
function ra(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function sa(a){var b=ra(a)+1,c=la(b);z(a,ma,c,b);return c}var buffer,ma,A,ta,ua,C,va,D,E,F=e.TOTAL_MEMORY||33554432;5242880>F&&y("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+F+"! (TOTAL_STACK=5242880)");
e.buffer?buffer=e.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(ha=new WebAssembly.Memory({initial:F/65536,maximum:F/65536}),buffer=ha.buffer):buffer=new ArrayBuffer(F);e.HEAP8=ma=new Int8Array(buffer);e.HEAP16=ta=new Int16Array(buffer);e.HEAP32=C=new Int32Array(buffer);e.HEAPU8=A=new Uint8Array(buffer);e.HEAPU16=ua=new Uint16Array(buffer);e.HEAPU32=va=new Uint32Array(buffer);e.HEAPF32=D=new Float32Array(buffer);e.HEAPF64=E=new Float64Array(buffer);C[1727504]=12153152;
function G(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.nc;"number"===typeof c?void 0===b.Vb?e.dynCall_v(c):e.dynCall_vi(c,b.Vb):c(void 0===b.Vb?null:b.Vb)}}}var wa=[],xa=[],za=[],Aa=[],Ba=[],Ca=!1;function Da(){var a=e.preRun.shift();wa.unshift(a)}var H=0,Ea=null,I=null;e.preloadedImages={};e.preloadedAudios={};
function Fa(){var a=J;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var J="zx-ui.wasm";if(!Fa()){var Ga=J;J=e.locateFile?e.locateFile(Ga,u):u+Ga}function Ha(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(J);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function Ia(){return e.wasmBinary||!m&&!t||"function"!==typeof fetch?new Promise(function(a){a(Ha())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ha()})}
function Ja(a){function b(a){e.asm=a.exports;H--;e.monitorRunDependencies&&e.monitorRunDependencies(H);0==H&&(null!==Ea&&(clearInterval(Ea),Ea=null),I&&(a=I,I=null,a()))}function c(a){b(a.instance)}function d(a){Ia().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){y("failed to asynchronously prepare wasm: "+a);x(a)})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:fa};H++;e.monitorRunDependencies&&e.monitorRunDependencies(H);if(e.instantiateWasm)try{return e.instantiateWasm(f,
b)}catch(g){return y("Module.instantiateWasm callback failed with error: "+g),!1}e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||"function"!==typeof fetch?d(c):WebAssembly.instantiateStreaming(fetch(J,{credentials:"same-origin"}),f).then(c,function(a){y("wasm streaming compile failed: "+a);y("falling back to ArrayBuffer instantiation");d(c)});return{}}
e.asm=function(a,b){b.memory=ha;b.table=new WebAssembly.Table({initial:71,maximum:71,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Ja(b)};var Ka=[null,[],[]],K=0;function L(){K+=4;return C[K-4>>2]}var La={},Ma=0,Na=0,M=0,Oa=0,Pa=0,Qa=null,Ra=null,Sa=!1;function Ta(){for(var a=N.length-1;0<=a;--a)Ua(a);N=[];Va=[]}var Va=[];function Wa(){if(Xa&&Ya.Nb)for(var a=0;a<Va.length;++a){var b=Va[a];Va.splice(a,1);--a;b.sc.apply(this,b.jc)}}var Xa=0,Ya=null,N=[];
function Za(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Ua(a){var b=N[a];b.target.removeEventListener(b.Mb,b.bc,b.Ob);N.splice(a,1)}function O(a){function b(b){++Xa;Ya=a;Wa();a.Qb(b);Wa();--Xa}if(a.Pb)a.bc=b,a.target.addEventListener(a.Mb,b,a.Ob),N.push(a),Sa||(Aa.push(Ta),Sa=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Mb==a.Mb&&Ua(c--)}
var $a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){try{if(!a)return window;"number"===typeof a&&(a=$a[a]||B(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function ab(){x("OOM")}
function bb(a){"number"===typeof a&&(a=B(a));return a&&"#canvas"!==a?"undefined"!==typeof cb&&db[a]?db[a]:P(a):"undefined"!==typeof cb&&db.canvas?db.canvas:e.canvas}
function eb(a,b,c,d,f,g){Ma||(Ma=Q(164));a={target:P(a),Nb:Za()?!1:!0,Mb:g,Pb:d,Qb:function(a){a=a||window.event;var c=Ma;z(a.key?a.key:"",A,c+0,32);z(a.code?a.code:"",A,c+32,32);C[c+64>>2]=a.location;C[c+68>>2]=a.ctrlKey;C[c+72>>2]=a.shiftKey;C[c+76>>2]=a.altKey;C[c+80>>2]=a.metaKey;C[c+84>>2]=a.repeat;z(a.locale?a.locale:"",A,c+88,32);z(a.char?a.char:"",A,c+120,32);C[c+152>>2]=a.charCode;C[c+156>>2]=a.keyCode;C[c+160>>2]=a.which;R(d,f,c,b)&&a.preventDefault()},Ob:c};O(a)}
function fb(a,b,c){E[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();C[a+8>>2]=b.screenX;C[a+12>>2]=b.screenY;C[a+16>>2]=b.clientX;C[a+20>>2]=b.clientY;C[a+24>>2]=b.ctrlKey;C[a+28>>2]=b.shiftKey;C[a+32>>2]=b.altKey;C[a+36>>2]=b.metaKey;ta[a+40>>1]=b.button;ta[a+42>>1]=b.buttons;C[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Qa;C[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ra;if(e.canvas){var d=e.canvas.getBoundingClientRect();
C[a+60>>2]=b.clientX-d.left;C[a+64>>2]=b.clientY-d.top}else C[a+60>>2]=0,C[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},C[a+52>>2]=b.clientX-d.left,C[a+56>>2]=b.clientY-d.top):(C[a+52>>2]=0,C[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Qa=b.screenX,Ra=b.screenY)}
function S(a,b,c,d,f,g){Na||(Na=Q(72));a=P(a);c={target:a,Nb:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Mb:g,Pb:d,Qb:function(c){c=c||window.event;fb(Na,c,a);R(d,f,Na,b)&&c.preventDefault()},Ob:c};Za()&&"mousedown"==g&&(c.Nb=!1);O(c)}
function ib(a,b,c,d){Oa||(Oa=Q(36));a=P(a);O({target:a,Nb:!1,Mb:"resize",Pb:d,Qb:function(c){c=c||window.event;if(c.target==a){var f=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Oa;C[l>>2]=c.detail;C[l+4>>2]=document.body.clientWidth;
C[l+8>>2]=document.body.clientHeight;C[l+12>>2]=window.innerWidth;C[l+16>>2]=window.innerHeight;C[l+20>>2]=window.outerWidth;C[l+24>>2]=window.outerHeight;C[l+28>>2]=f[0];C[l+32>>2]=f[1];R(d,10,l,b)&&c.preventDefault()}},Ob:c})}
function jb(a,b,c,d,f,g){Pa||(Pa=Q(1684));a=P(a);O({target:a,Nb:"touchstart"==g||"touchend"==g,Mb:g,Pb:d,Qb:function(c){c=c||window.event;for(var g={},l=0;l<c.touches.length;++l){var p=c.touches[l];g[p.identifier]=p}for(l=0;l<c.changedTouches.length;++l)p=c.changedTouches[l],g[p.identifier]=p,p.ac=!0;for(l=0;l<c.targetTouches.length;++l)p=c.targetTouches[l],g[p.identifier].hc=!0;var q=p=Pa;C[q+4>>2]=c.ctrlKey;C[q+8>>2]=c.shiftKey;C[q+12>>2]=c.altKey;C[q+16>>2]=c.metaKey;q+=20;var ya=e.canvas?e.canvas.getBoundingClientRect():
void 0,gb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},hb=0;for(l in g){var w=g[l];C[q>>2]=w.identifier;C[q+4>>2]=w.screenX;C[q+8>>2]=w.screenY;C[q+12>>2]=w.clientX;C[q+16>>2]=w.clientY;C[q+20>>2]=w.pageX;C[q+24>>2]=w.pageY;C[q+28>>2]=w.ac;C[q+32>>2]=w.hc;ya?(C[q+44>>2]=w.clientX-ya.left,C[q+48>>2]=w.clientY-ya.top):(C[q+44>>2]=0,C[q+48>>2]=0);C[q+36>>2]=w.clientX-gb.left;C[q+40>>2]=w.clientY-gb.top;q+=52;if(32<=++hb)break}C[p>>2]=hb;R(d,f,p,b)&&c.preventDefault()},Ob:c})}
function kb(a,b,c,d,f,g){a||(a=e.canvas);a={target:P(a),Nb:!1,Mb:g,Pb:d,Qb:function(a){a=a||window.event;R(d,f,0,b)&&a.preventDefault()},Ob:c};O(a)}
function lb(a,b,c,d,f){function g(c){c=c||window.event;fb(M,c,a);E[M+72>>3]=c.wheelDeltaX||0;E[M+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);E[M+88>>3]=0;C[M+96>>2]=0;R(d,9,M,b)&&c.preventDefault()}function l(c){c=c||window.event;var f=M;fb(f,c,a);E[f+72>>3]=c.deltaX;E[f+80>>3]=c.deltaY;E[f+88>>3]=c.deltaZ;C[f+96>>2]=c.deltaMode;R(d,9,f,b)&&c.preventDefault()}M||(M=Q(104));O({target:a,Nb:!0,Mb:f,Pb:d,Qb:"wheel"==f?l:g,Ob:c})}
var mb=1,nb=0,ob=[],T=[],pb=[],U=[],qb=[],V=[],W=[],rb={},sb=null,db={},tb={},ub={};function X(a){nb||(nb=a)}function vb(a){for(var b=mb++,c=a.length;c<b;c++)a[c]=null;return b}var wb=null,Y=[0];
function xb(a){a||(a=sb);if(!a.ec){a.ec=!0;var b=a.Xb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,f){c.drawArraysInstancedANGLE(a,b,d,f)},b.drawElementsInstanced=function(a,b,d,f,g){c.drawElementsInstancedANGLE(a,b,d,f,g)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var f=b.getExtension("WEBGL_draw_buffers");f&&(b.drawBuffers=function(a,b){f.drawBuffersWEBGL(a,b)})}b.lc=b.getExtension("EXT_disjoint_timer_query");var g="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=g.indexOf(a)&&b.getExtension(a)})}}var cb={},yb,zb,Ab=["default","low-power","high-performance"];function Bb(a,b,c,d){for(var f=0;f<a;f++){var g=Z[c](),l=g&&vb(d);g?(g.name=l,d[l]=g):X(1282);C[b+4*f>>2]=l}}
function Cb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){X(1280);y("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:X(1280);return}C[b>>2]=c}else X(1281)}function Db(a){var b=ra(a)+1,c=Q(b);z(a,A,c,b);return c}var Eb={6402:1,6406:1,6407:3,6408:4,6409:1,6410:2,35904:3,35906:4},Fb={5121:1,5123:2,5125:4,5126:4,32819:2,32820:2,33635:2,34042:4,36193:2};
function Gb(a,b,c,d,f){if(b=Eb[b]*Fb[a])switch(c=f+d*(c*b+4-1&-4),a){case 5121:return A.subarray(f,c);case 5126:return D.subarray(f>>2,c>>2);case 5125:case 34042:return va.subarray(f>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return ua.subarray(f>>1,c>>1);default:X(1280)}else X(1280)}var Z;wb=new Float32Array(256);for(var Hb=0;256>Hb;Hb++)Y[Hb]=wb.subarray(0,Hb+1);
var Lb=e.asm({},{d:x,I:function(){},ca:function(a){e.___errno_location&&(C[e.___errno_location()>>2]=a);return a},Qa:function(a,b){K=b;try{var c=La.Zb();L();var d=L(),f=L(),g=L();(void 0).oc(c,d,g);C[f>>2]=c.position;c.dc&&0===d&&0===g&&(c.dc=null);return 0}catch(l){return x(l),-l.Ub}},Fa:function(a,b){K=b;try{var c=La.Zb(),d=L(),f=L();return La.mc(c,d,f)}catch(g){return x(g),-g.Ub}},Z:function(a,b){K=b;try{var c=L(),d=L(),f=L();for(b=a=0;b<f;b++){for(var g=C[d+8*b>>2],l=C[d+(8*b+4)>>2],n=0;n<l;n++){var r=
A[g+n],p=Ka[c];0===r||10===r?((1===c?ea:y)(qa(p,0)),p.length=0):p.push(r)}a+=l}return a}catch(q){return x(q),-q.Ub}},q:function(a,b){K=b;return 0},ra:function(a,b){K=b;try{var c=B(L()),d=L(),f=L();return(void 0).open(c,d,f).fd}catch(g){return x(g),-g.Ub}},Q:function(a,b){K=b;return 0},N:function(a,b){K=b;try{var c=La.Zb();(void 0).close(c);return 0}catch(d){return x(d),-d.Ub}},H:function(){},u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize=
"none";a.addEventListener("focusout",function(){Ib()});document.body.append(a)},t:function(){document.getElementById("_sokol_app_input_element").focus()},s:function(){document.getElementById("_sokol_app_input_element").blur()},ab:function(){return e.Rb?e.Rb.bufferSize:0},$a:function(a,b,c){e.Lb=null;e.Rb=null;"undefined"!==typeof AudioContext?(e.Lb=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?
(e.Lb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):(e.Lb=null,console.log("sokol_audio.h: no WebAudio support"));return e.Lb?(console.log("sokol_audio.h: sample rate ",e.Lb.sampleRate),e.Rb=e.Lb.createScriptProcessor(c,0,b),e.Rb.onaudioprocess=function(a){var b=a.outputBuffer.length,c=Jb(b);if(c)for(var d=a.outputBuffer.numberOfChannels,n=0;n<d;n++)for(var r=a.outputBuffer.getChannelData(n),p=0;p<b;p++)r[p]=D[(c>>2)+(d*
p+n)]},e.Rb.connect(e.Lb.destination),a=function(){e.Lb&&"suspended"===e.Lb.state&&e.Lb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},_a:function(){return e.Lb?e.Lb.sampleRate:0},m:function(){return performance.now()},Za:function(a){var b=B(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var a=new Uint8Array(c.response);ka("emsc_load_data",
"int",["string","array","number"],[b,a,a.length])};c.send()},da:function(){return window.devicePixelRatio||1},ba:function(a,b,c){a=a?P(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),E[b>>3]=a.right-a.left,E[c>>3]=a.bottom-a.top):(E[b>>3]=a.clientWidth,E[c>>3]=a.clientHeight);return 0},Ya:function(){return ma.length},Xa:function(a,b,c){A.set(A.subarray(b,b+c),a)},Wa:function(a,b){function c(d){Kb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Va:function(a){ab(a)},
aa:function(a,b,c){a=bb(a);if(!a)return-4;a.width=b;a.height=c;return 0},Ua:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},Ta:function(a,b,c,d){eb(a,b,c,d,1,"keypress");return 0},Sa:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},Ra:function(a,b,c,d){S(a,b,c,d,5,"mousedown");return 0},Pa:function(a,b,c,d){S(a,b,c,d,33,"mouseenter");return 0},Oa:function(a,b,c,d){S(a,b,c,d,34,"mouseleave");return 0},Na:function(a,b,c,d){S(a,b,c,d,8,"mousemove");return 0},Ma:function(a,b,c,d){S(a,b,c,d,6,"mouseup");
return 0},La:function(a,b,c,d){ib(a,b,c,d);return 0},Ka:function(a,b,c,d){jb(a,b,c,d,25,"touchcancel");return 0},Ja:function(a,b,c,d){jb(a,b,c,d,23,"touchend");return 0},Ia:function(a,b,c,d){jb(a,b,c,d,24,"touchmove");return 0},Ha:function(a,b,c,d){jb(a,b,c,d,22,"touchstart");return 0},Ga:function(a,b,c,d){kb(a,b,c,d,31,"webglcontextlost");return 0},Ea:function(a,b,c,d){kb(a,b,c,d,32,"webglcontextrestored");return 0},Da:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(lb(a,b,c,d,"wheel"),
0):"undefined"!==typeof a.onmousewheel?(lb(a,b,c,d,"mousewheel"),0):-1},$:function(a,b){var c={};b>>=2;c.alpha=!!C[b];c.depth=!!C[b+1];c.stencil=!!C[b+2];c.antialias=!!C[b+3];c.premultipliedAlpha=!!C[b+4];c.preserveDrawingBuffer=!!C[b+5];c.powerPreference=Ab[C[b+6]];c.failIfMajorPerformanceCaveat=!!C[b+7];c.fc=C[b+8];c.pc=C[b+9];c.Yb=C[b+10];c.cc=C[b+11];c.qc=C[b+12];c.rc=C[b+13];a=bb(a);if(!a||c.cc)c=0;else{if(b=a=a.getContext("webgl",c)||a.getContext("experimental-webgl",c)){b=Q(8);var d={handle:b,
attributes:c,version:c.fc,Xb:a};a.canvas&&(a.canvas.ic=d);rb[b]=d;("undefined"===typeof c.Yb||c.Yb)&&xb(d)}c=b}return c},Ca:function(a){a>>=2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},Ba:function(a){sb=rb[a];e.kc=Z=sb&&sb.Xb;return!a||Z?0:-5},E:function(a){Z.activeTexture(a)},_:function(a,b){Z.attachShader(T[a],W[b])},h:function(a,b){Z.bindBuffer(a,ob[b])},f:function(a,b){Z.bindFramebuffer(a,pb[b])},Aa:function(a,b){Z.bindRenderbuffer(a,U[b])},r:function(a,b){Z.bindTexture(a,
qb[b])},Y:function(a,b,c,d){Z.blendColor(a,b,c,d)},X:function(a,b){Z.blendEquationSeparate(a,b)},W:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},V:function(a,b,c,d){Z.bufferData(a,c?A.subarray(c,c+b):b,d)},D:function(a,b,c,d){Z.bufferSubData(a,b,A.subarray(d,d+c))},o:function(a){return Z.checkFramebufferStatus(a)},za:function(a){Z.clear(a)},ya:function(a,b,c,d){Z.clearColor(a,b,c,d)},xa:function(a){Z.clearDepth(a)},wa:function(a){Z.clearStencil(a)},C:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},
va:function(a){Z.compileShader(W[a])},U:function(a,b,c,d,f,g,l,n){Z.compressedTexImage2D(a,b,c,d,f,g,n?A.subarray(n,n+l):null)},ua:function(){var a=vb(T),b=Z.createProgram();b.name=a;T[a]=b;return a},ta:function(a){var b=vb(W);W[b]=Z.createShader(a);return b},T:function(a){Z.cullFace(a)},sa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],f=ob[d];f&&(Z.deleteBuffer(f),f.name=0,ob[d]=null,d==yb&&(yb=0),d==zb&&(zb=0))}},l:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],f=pb[d];f&&(Z.deleteFramebuffer(f),
f.name=0,pb[d]=null)}},S:function(a){if(a){var b=T[a];b?(Z.deleteProgram(b),b.name=0,T[a]=null,tb[a]=null):X(1281)}},p:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],f=U[d];f&&(Z.deleteRenderbuffer(f),f.name=0,U[d]=null)}},B:function(a){if(a){var b=W[a];b?(Z.deleteShader(b),W[a]=null):X(1281)}},R:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],f=qb[d];f&&(Z.deleteTexture(f),f.name=0,qb[d]=null)}},A:function(a){Z.depthFunc(a)},z:function(a){Z.depthMask(!!a)},e:function(a){Z.disable(a)},
b:function(a){Z.disableVertexAttribArray(a)},y:function(a,b,c){Z.drawArrays(a,b,c)},x:function(a,b,c,d){Z.drawElements(a,b,c,d)},g:function(a){Z.enable(a)},qa:function(a){Z.enableVertexAttribArray(a)},k:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,U[d])},c:function(a,b,c,d,f){Z.framebufferTexture2D(a,b,c,qb[d],f)},P:function(a){Z.frontFace(a)},O:function(a,b){Bb(a,b,"createBuffer",ob)},n:function(a,b){Bb(a,b,"createFramebuffer",pb)},pa:function(a,b){Bb(a,b,"createRenderbuffer",U)},oa:function(a,
b){Bb(a,b,"createTexture",qb)},na:function(a,b){return Z.getAttribLocation(T[a],B(b))},w:function(a,b){Cb(a,b)},ma:function(a,b,c,d){a=Z.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");0<b&&d?(b=z(a,A,d,b),c&&(C[c>>2]=b)):c&&(C[c>>2]=0)},M:function(a,b,c){if(c)if(a>=mb)X(1281);else{var d=tb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b)C[c>>2]=d.Wb;else if(35722==b){if(-1==d.Sb){a=T[a];var f=Z.getProgramParameter(a,35721);
for(b=d.Sb=0;b<f;++b)d.Sb=Math.max(d.Sb,Z.getActiveAttrib(a,b).name.length+1)}C[c>>2]=d.Sb}else if(35381==b){if(-1==d.Tb)for(a=T[a],f=Z.getProgramParameter(a,35382),b=d.Tb=0;b<f;++b)d.Tb=Math.max(d.Tb,Z.getActiveUniformBlockName(a,b).length+1);C[c>>2]=d.Tb}else C[c>>2]=Z.getProgramParameter(T[a],b);else X(1282)}else X(1281)},la:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===a&&(a="(unknown error)");0<b&&d?(b=z(a,A,d,b),c&&(C[c>>2]=b)):c&&(C[c>>2]=0)},L:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),
null===a&&(a="(unknown error)"),C[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(W[a]),C[c>>2]=null===a||0==a.length?0:a.length+1):C[c>>2]=Z.getShaderParameter(W[a],b):X(1281)},ka:function(a){if(ub[a])return ub[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=Db(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Db(b);break;case 7938:b=Db("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+
")");break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Db(b);break;default:return X(1280),0}return ub[a]=b},j:function(a,b){b=B(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=tb[a]&&tb[a].$b[b])&&0<=c&&c<a[0]?a[1]+c:-1},ja:function(a){Z.linkProgram(T[a]);var b=T[a];a=tb[a]={$b:{},
Wb:0,Sb:-1,Tb:-1};for(var c=a.$b,d=Z.getProgramParameter(b,35718),f=0;f<d;++f){var g=Z.getActiveUniform(b,f),l=g.name;a.Wb=Math.max(a.Wb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var n=Z.getUniformLocation(b,l);if(n){var r=vb(V);c[l]=[g.size,r];V[r]=n;for(var p=1;p<g.size;++p)n=Z.getUniformLocation(b,l+"["+p+"]"),r=vb(V),V[r]=n}}},K:function(a,b){Z.polygonOffset(a,b)},ia:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},J:function(a,b,c,d){Z.scissor(a,b,c,d)},nb:function(a,b,
c,d){for(var f="",g=0;g<b;++g){var l=d?C[d+4*g>>2]:-1;f+=B(C[c+4*g>>2],0>l?void 0:l)}Z.shaderSource(W[a],f)},mb:function(a,b,c){Z.stencilFunc(a,b,c)},ha:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},G:function(a){Z.stencilMask(a)},lb:function(a,b,c){Z.stencilOp(a,b,c)},ga:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},fa:function(a,b,c,d,f,g,l,n,r){Z.texImage2D(a,b,c,d,f,g,l,n,r?Gb(n,l,d,f,r):null)},i:function(a,b,c){Z.texParameteri(a,b,c)},v:function(a,b,c,d,f,g,l,n,r){var p=null;r&&(p=Gb(n,
l,f,g,r));Z.texSubImage2D(a,b,c,d,f,g,l,n,p)},kb:function(a,b,c){if(256>=b)for(var d=Y[b-1],f=0;f<b;++f)d[f]=D[c+4*f>>2];else d=D.subarray(c>>2,c+4*b>>2);Z.uniform1fv(V[a],d)},ea:function(a,b){Z.uniform1i(V[a],b)},jb:function(a,b,c){if(256>=2*b)for(var d=Y[2*b-1],f=0;f<2*b;f+=2)d[f]=D[c+4*f>>2],d[f+1]=D[c+(4*f+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);Z.uniform2fv(V[a],d)},ib:function(a,b,c){if(256>=3*b)for(var d=Y[3*b-1],f=0;f<3*b;f+=3)d[f]=D[c+4*f>>2],d[f+1]=D[c+(4*f+4)>>2],d[f+2]=D[c+(4*f+8)>>2];
else d=D.subarray(c>>2,c+12*b>>2);Z.uniform3fv(V[a],d)},hb:function(a,b,c){if(256>=4*b)for(var d=Y[4*b-1],f=0;f<4*b;f+=4)d[f]=D[c+4*f>>2],d[f+1]=D[c+(4*f+4)>>2],d[f+2]=D[c+(4*f+8)>>2],d[f+3]=D[c+(4*f+12)>>2];else d=D.subarray(c>>2,c+16*b>>2);Z.uniform4fv(V[a],d)},gb:function(a,b,c,d){if(256>=16*b)for(var f=Y[16*b-1],g=0;g<16*b;g+=16)f[g]=D[d+4*g>>2],f[g+1]=D[d+(4*g+4)>>2],f[g+2]=D[d+(4*g+8)>>2],f[g+3]=D[d+(4*g+12)>>2],f[g+4]=D[d+(4*g+16)>>2],f[g+5]=D[d+(4*g+20)>>2],f[g+6]=D[d+(4*g+24)>>2],f[g+7]=
D[d+(4*g+28)>>2],f[g+8]=D[d+(4*g+32)>>2],f[g+9]=D[d+(4*g+36)>>2],f[g+10]=D[d+(4*g+40)>>2],f[g+11]=D[d+(4*g+44)>>2],f[g+12]=D[d+(4*g+48)>>2],f[g+13]=D[d+(4*g+52)>>2],f[g+14]=D[d+(4*g+56)>>2],f[g+15]=D[d+(4*g+60)>>2];else f=D.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(V[a],!!c,f)},fb:function(a){Z.useProgram(T[a])},eb:function(a,b){Z.vertexAttribDivisor(a,b)},db:function(a,b,c,d,f,g){Z.vertexAttribPointer(a,b,c,!!d,f,g)},F:function(a,b,c,d){Z.viewport(a,b,c,d)},cb:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),
b=a.next();!b.done;b=a.next())ka("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},bb:ab,a:6910016},buffer);e.asm=Lb;e.___em_js___sapp_js_create_textfield=function(){return e.asm.ob.apply(null,arguments)};e.___em_js___sapp_js_focus_textfield=function(){return e.asm.pb.apply(null,arguments)};e.___em_js___sapp_js_unfocus_textfield=function(){return e.asm.qb.apply(null,arguments)};e.___em_js___saudio_js_buffer_frames=function(){return e.asm.rb.apply(null,arguments)};
e.___em_js___saudio_js_init=function(){return e.asm.sb.apply(null,arguments)};e.___em_js___saudio_js_sample_rate=function(){return e.asm.tb.apply(null,arguments)};e.___em_js___stm_js_perfnow=function(){return e.asm.ub.apply(null,arguments)};e.___em_js__emsc_load_file=function(){return e.asm.vb.apply(null,arguments)};e.___em_js__sargs_js_parse_url=function(){return e.asm.wb.apply(null,arguments)};var Ib=e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.xb.apply(null,arguments)};
e.__sargs_add_kvp=function(){return e.asm.yb.apply(null,arguments)};var Jb=e.__saudio_emsc_pull=function(){return e.asm.zb.apply(null,arguments)};e._emsc_load_data=function(){return e.asm.Ab.apply(null,arguments)};e._free=function(){return e.asm.Bb.apply(null,arguments)};e._main=function(){return e.asm.Cb.apply(null,arguments)};
var Q=e._malloc=function(){return e.asm.Db.apply(null,arguments)},la=e.stackAlloc=function(){return e.asm.Ib.apply(null,arguments)},oa=e.stackRestore=function(){return e.asm.Jb.apply(null,arguments)},na=e.stackSave=function(){return e.asm.Kb.apply(null,arguments)},Kb=e.dynCall_idi=function(){return e.asm.Eb.apply(null,arguments)},R=e.dynCall_iiii=function(){return e.asm.Fb.apply(null,arguments)};e.dynCall_v=function(){return e.asm.Gb.apply(null,arguments)};
e.dynCall_vi=function(){return e.asm.Hb.apply(null,arguments)};e.asm=Lb;function v(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}v.prototype=Error();v.prototype.constructor=v;I=function Mb(){e.calledRun||Nb();e.calledRun||(I=Mb)};
e.callMain=function(a){a=a||[];Ca||(Ca=!0,G(xa));var b=a.length+1,c=la(4*(b+1));C[c>>2]=sa(e.thisProgram);for(var d=1;d<b;d++)C[(c>>2)+d]=sa(a[d-1]);C[(c>>2)+b]=0;try{var f=e._main(b,c,0);if(!e.noExitRuntime||0!==f){if(!e.noExitRuntime&&(ia=!0,e.onExit))e.onExit(f);e.quit(f,new v(f))}}catch(g){g instanceof v||("SimulateInfiniteLoop"==g?e.noExitRuntime=!0:((a=g)&&"object"===typeof g&&g.stack&&(a=[g,g.stack]),y("exception thrown: "+a),e.quit(1,g)))}finally{}};
function Nb(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!ia)){Ca||(Ca=!0,G(xa));G(za);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&Ob&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();Ba.unshift(b)}G(Ba)}}a=a||e.arguments;if(!(0<H)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Da();G(wa);0<H||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}}e.run=Nb;function x(a){if(e.onAbort)e.onAbort(a);void 0!==a?(ea(a),y(a),a=JSON.stringify(a)):a="";ia=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=x;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Ob=!0;e.noInitialRun&&(Ob=!1);e.noExitRuntime=!0;Nb();
