var f;f||(f=typeof Module !== 'undefined' ? Module : {});var h={},k;for(k in f)f.hasOwnProperty(k)&&(h[k]=f[k]);var m=[],aa="./this.program";function t(a,b){throw b;}var u=!1,v=!1,ba=!1,ca=!1,da=!1;u="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!v;da=!u&&!ba&&!v;var x="",ea,y,fa,ha;
if(ba)x=__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},y=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),m=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",ja),t=function(a){process.exit(a)},
f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),y=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?m=scriptArgs:"undefined"!=typeof arguments&&(m=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=
console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?x=self.location.href:document.currentScript&&(x=document.currentScript.src),x=0!==x.indexOf("blob:")?x.substr(0,x.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(y=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=f.print||console.log.bind(console),z=f.printErr||console.warn.bind(console);for(k in h)h.hasOwnProperty(k)&&(f[k]=h[k]);h=null;f.arguments&&(m=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var A;f.wasmBinary&&(A=f.wasmBinary);var B;f.noExitRuntime&&(B=f.noExitRuntime);"object"!==typeof WebAssembly&&z("no native wasm support detected");var C,la=new WebAssembly.Table({initial:50,maximum:50,element:"anyfunc"}),ma=!1;function assert(a,b){a||ja("Assertion failed: "+b)}
function na(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function oa(a,b,c,d){var e={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=pa(c);D(a,E,b,c)}return b},array:function(a){var b=pa(a.length);qa.set(a,b);return b}},g=na(a),l=[];a=0;if(d)for(var n=0;n<d.length;n++){var p=e[c[n]];p?(0===a&&(a=ra()),l[n]=p(d[n])):l[n]=d[n]}c=g.apply(null,l);c=function(a){return"string"===b?F(a):"boolean"===b?!!a:a}(c);0!==a&&sa(a);return c}var ta="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ta)a=ta.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var g=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var l=c[a++]&63;e=224==(e&240)?(e&15)<<12|g<<6|l:(e&7)<<18|g<<12|l<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var l=a.charCodeAt(g);if(55296<=l&&57343>=l){var n=a.charCodeAt(++g);l=65536+((l&1023)<<10)|n&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function va(a){var b=ua(a)+1,c=pa(b);D(a,qa,c,b);return c}function wa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,qa,E,xa,ya,G,za,H,I;
function Aa(a){buffer=a;f.HEAP8=qa=new Int8Array(a);f.HEAP16=xa=new Int16Array(a);f.HEAP32=G=new Int32Array(a);f.HEAPU8=E=new Uint8Array(a);f.HEAPU16=ya=new Uint16Array(a);f.HEAPU32=za=new Uint32Array(a);f.HEAPF32=H=new Float32Array(a);f.HEAPF64=I=new Float64Array(a)}var Ba=f.TOTAL_MEMORY||33554432;f.wasmMemory?C=f.wasmMemory:C=new WebAssembly.Memory({initial:Ba/65536});C&&(buffer=C.buffer);Ba=buffer.byteLength;Aa(buffer);G[1691272]=12008128;
function Ca(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Xb;"number"===typeof c?void 0===b.Qb?f.dynCall_v(c):f.dynCall_vi(c,b.Qb):c(void 0===b.Qb?null:b.Qb)}}}var Da=[],Ea=[],Fa=[],Ga=[],Ha=[];function Ia(){var a=f.preRun.shift();Da.unshift(a)}var J=0,Ja=null,K=null;f.preloadedImages={};f.preloadedAudios={};function ja(a){if(f.onAbort)f.onAbort(a);ka(a);z(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ka(){var a=L;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var L="z1013-ui.wasm";if(!Ka()){var La=L;L=f.locateFile?f.locateFile(La,x):x+La}function Na(){try{if(A)return new Uint8Array(A);if(y)return y(L);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Oa(){return A||!u&&!v||"function"!==typeof fetch?new Promise(function(a){a(Na())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Na()})}Ea.push({Xb:function(){Pa()}});var Qa=0,Ra=0,M=0,Sa=0,Ta=0,Ua=null,Va=null,Wa=!1;function Xa(){for(var a=N.length-1;0<=a;--a)Ya(a);N=[];Za=[]}var Za=[];
function $a(){if(ab&&bb.Kb)for(var a=0;a<Za.length;++a){var b=Za[a];Za.splice(a,1);--a;b.ic.apply(this,b.bc)}}var ab=0,bb=null,N=[];function Ya(a){var b=N[a];b.target.removeEventListener(b.Ib,b.Vb,b.Jb);N.splice(a,1)}function O(a){function b(b){++ab;bb=a;$a();a.Mb(b);$a();--ab}if(a.Lb)a.Vb=b,a.target.addEventListener(a.Ib,b,a.Jb),N.push(a),Wa||(Ga.push(Xa),Wa=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Ib==a.Ib&&Ya(c--)}function cb(a){return a===a+0?F(a):a}
var db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){return db[a]||("undefined"!==typeof document?document.querySelector(cb(a)):void 0)}
function eb(a,b,c,d,e,g){Qa||(Qa=Q(164));a={target:P(a),Kb:!0,Ib:g,Lb:d,Mb:function(a){a=a||event;var c=Qa;D(a.key?a.key:"",E,c+0,32);D(a.code?a.code:"",E,c+32,32);G[c+64>>2]=a.location;G[c+68>>2]=a.ctrlKey;G[c+72>>2]=a.shiftKey;G[c+76>>2]=a.altKey;G[c+80>>2]=a.metaKey;G[c+84>>2]=a.repeat;D(a.locale?a.locale:"",E,c+88,32);D(a.char?a.char:"",E,c+120,32);G[c+152>>2]=a.charCode;G[c+156>>2]=a.keyCode;G[c+160>>2]=a.which;R(d,e,c,b)&&a.preventDefault()},Jb:c};O(a)}
function fb(a,b,c){G[a>>2]=b.screenX;G[a+4>>2]=b.screenY;G[a+8>>2]=b.clientX;G[a+12>>2]=b.clientY;G[a+16>>2]=b.ctrlKey;G[a+20>>2]=b.shiftKey;G[a+24>>2]=b.altKey;G[a+28>>2]=b.metaKey;xa[a+32>>1]=b.button;xa[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Va;G[a+36>>2]=b.movementX||b.screenX-Ua;G[a+40>>2]=d;c=0>db.indexOf(c)?c.getBoundingClientRect():{left:0,top:0};G[a+44>>2]=b.clientX-c.left;G[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&"mousewheel"!==b.type&&(Ua=b.screenX,Va=b.screenY)}
function S(a,b,c,d,e,g){Ra||(Ra=Q(64));a=P(a);O({target:a,Kb:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Ib:g,Lb:d,Mb:function(c){c=c||event;fb(Ra,c,a);R(d,e,Ra,b)&&c.preventDefault()},Jb:c})}
function gb(a,b,c,d){Sa||(Sa=Q(36));a=P(a);O({target:a,Kb:!1,Ib:"resize",Lb:d,Mb:function(c){c=c||event;if(c.target==a){var e=Sa,l=document.body;G[e>>2]=c.detail;G[e+4>>2]=l.clientWidth;G[e+8>>2]=l.clientHeight;G[e+12>>2]=innerWidth;G[e+16>>2]=innerHeight;G[e+20>>2]=outerWidth;G[e+24>>2]=outerHeight;G[e+28>>2]=pageXOffset;G[e+32>>2]=pageYOffset;R(d,10,e,b)&&c.preventDefault()}},Jb:c})}
function ib(a,b,c,d,e,g){Ta||(Ta=Q(1684));a=P(a);O({target:a,Kb:"touchstart"==g||"touchend"==g,Ib:g,Lb:d,Mb:function(c){c=c||event;for(var g={},l=0;l<c.touches.length;++l){var q=c.touches[l];q.Sb=!1;g[q.identifier]=q}for(l=0;l<c.changedTouches.length;++l)q=c.changedTouches[l],g[q.identifier]=q,q.Sb=!0;for(l=0;l<c.targetTouches.length;++l)q=c.targetTouches[l],g[q.identifier].$b=!0;var r=q=Ta;G[r+4>>2]=c.ctrlKey;G[r+8>>2]=c.shiftKey;G[r+12>>2]=c.altKey;G[r+16>>2]=c.metaKey;r+=20;var Ma=a.getBoundingClientRect(),
hb=0;for(l in g){var w=g[l];G[r>>2]=w.identifier;G[r+4>>2]=w.screenX;G[r+8>>2]=w.screenY;G[r+12>>2]=w.clientX;G[r+16>>2]=w.clientY;G[r+20>>2]=w.pageX;G[r+24>>2]=w.pageY;G[r+28>>2]=w.Sb;G[r+32>>2]=w.$b;G[r+36>>2]=w.clientX-Ma.left;G[r+40>>2]=w.clientY-Ma.top;r+=52;if(32<=++hb)break}G[q>>2]=hb;R(d,e,q,b)&&c.preventDefault()},Jb:c})}function jb(a,b,c,d,e,g){a={target:P(a),Kb:!1,Ib:g,Lb:d,Mb:function(a){a=a||event;R(d,e,0,b)&&a.preventDefault()},Jb:c};O(a)}
function kb(a,b,c,d,e){function g(c){c=c||event;fb(M,c,a);I[M+64>>3]=c.wheelDeltaX||0;I[M+72>>3]=-(c.wheelDeltaY||c.wheelDelta);I[M+80>>3]=0;G[M+88>>2]=0;R(d,9,M,b)&&c.preventDefault()}function l(c){c=c||event;var e=M;fb(e,c,a);I[e+64>>3]=c.deltaX;I[e+72>>3]=c.deltaY;I[e+80>>3]=c.deltaZ;G[e+88>>2]=c.deltaMode;R(d,9,e,b)&&c.preventDefault()}M||(M=Q(96));O({target:a,Kb:!0,Ib:e,Lb:d,Mb:"wheel"==e?l:g,Jb:c})}
var lb=["default","low-power","high-performance"],mb=1,nb=0,ob=[],T=[],pb=[],qb=[],rb=[],U=[],V=[],sb={},tb=null,ub={},vb={};function W(a){nb||(nb=a)}function wb(a){for(var b=mb++,c=a.length;c<b;c++)a[c]=null;return b}var X=[0];
function xb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,g){b.drawArraysInstancedANGLE(a,d,e,g)},a.drawElementsInstanced=function(a,d,e,g,l){b.drawElementsInstancedANGLE(a,d,e,g,l)})}
function yb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function zb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function Ab(a){a||(a=tb);if(!a.Yb){a.Yb=!0;var b=a.Pb;2>a.version&&(xb(b),yb(b),zb(b));b.dc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var Bb,Cb;function Db(a,b,c,d){for(var e=0;e<a;e++){var g=Y[c](),l=g&&wb(d);g?(g.name=l,d[l]=g):W(1282);G[b+4*e>>2]=l}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){W(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:W(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else W(1281)}function Fb(a){var b=ua(a)+1,c=Q(b);D(a,E,c,b);return c}
function Gb(a,b,c,d,e){a-=5120;a=1==a?E:4==a?G:6==a?H:5==a||28922==a?za:ya;var g=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>g,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<g)+4-1&-4)>>g)}for(var Y,Hb=new Float32Array(256),Z=0;256>Z;Z++)X[Z]=Hb.subarray(0,Z+1);for(Z=0;256>Z;Z++);
var Lb={bb:function(){console.log("fs.h: registering Module['ccall']");f.ccall=oa},cb:function(a){var b=F(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var a=new Uint8Array(c.response);oa("emsc_load_data","int",["string","array","number"],[b,a,a.length])};c.send()},P:function(){return devicePixelRatio||1},X:function(a,b,c){a=P(a);if(!a)return-4;a=a.getBoundingClientRect();I[b>>3]=a.width;I[c>>3]=a.height;return 0},Ua:function(a,b,c){E.set(E.subarray(b,b+
c),a)},Ea:function(a,b){function c(d){Ib(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Wa:function(a){if(2147418112<a)return!1;for(var b=Math.max(qa.length,16777216);b<a;)536870912>=b?b=wa(2*b):b=Math.min(wa((3*b+2147483648)/4),2147418112);a:{try{C.grow(b-buffer.byteLength+65535>>16);Aa(C.buffer);var c=1;break a}catch(d){}c=void 0}return c?!0:!1},N:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=c;return 0},Oa:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},Ma:function(a,
b,c,d){eb(a,b,c,d,1,"keypress");return 0},Na:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},Va:function(a,b,c,d){S(a,b,c,d,5,"mousedown");return 0},Ra:function(a,b,c,d){S(a,b,c,d,33,"mouseenter");return 0},Qa:function(a,b,c,d){S(a,b,c,d,34,"mouseleave");return 0},Sa:function(a,b,c,d){S(a,b,c,d,8,"mousemove");return 0},Ta:function(a,b,c,d){S(a,b,c,d,6,"mouseup");return 0},ya:function(a,b,c,d){gb(a,b,c,d);return 0},Ha:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},Ia:function(a,b,c,d){ib(a,
b,c,d,23,"touchend");return 0},Ja:function(a,b,c,d){ib(a,b,c,d,24,"touchmove");return 0},Ka:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},Ga:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},Fa:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},Pa:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(kb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(kb(a,b,c,d,"mousewheel"),0):-1},E:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];
c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=lb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.Zb=G[b+8];c.ec=G[b+9];c.Tb=G[b+10];c.Wb=G[b+11];c.fc=G[b+12];c.hc=G[b+13];a=P(a);if(!a||c.Wb)c=0;else if(a=a.getContext("webgl",c)){b=Q(8);var d={handle:b,attributes:c,version:c.Zb,Pb:a};a.canvas&&(a.canvas.ac=d);sb[b]=d;("undefined"===typeof c.Tb||c.Tb)&&Ab(d);c=b}else c=0;return c},ab:function(a,b){a=sb[a];b=F(b);0==b.indexOf("GL_")&&
(b=b.substr(3));"ANGLE_instanced_arrays"==b?xb(Y):"OES_vertex_array_object"==b?yb(Y):"WEBGL_draw_buffers"==b&&zb(Y);return!!a.Pb.getExtension(b)},oa:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},fa:function(a){tb=sb[a];f.cc=Y=tb&&tb.Pb;return!a||Y?0:-5},g:function(a){Y.activeTexture(a)},Q:function(a,b){Y.attachShader(T[a],V[b])},b:function(a,b){Y.bindBuffer(a,ob[b])},f:function(a,b){Y.bindFramebuffer(a,pb[b])},xa:function(a,b){Y.bindRenderbuffer(a,qb[b])},
a:function(a,b){Y.bindTexture(a,rb[b])},G:function(a,b,c,d){Y.blendColor(a,b,c,d)},H:function(a,b){Y.blendEquationSeparate(a,b)},I:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},T:function(a,b,c,d){Y.bufferData(a,c?E.subarray(c,c+b):b,d)},r:function(a,b,c,d){Y.bufferSubData(a,b,E.subarray(d,d+c))},m:function(a){return Y.checkFramebufferStatus(a)},ma:function(a){Y.clear(a)},qa:function(a,b,c,d){Y.clearColor(a,b,c,d)},pa:function(a){Y.clearDepth(a)},na:function(a){Y.clearStencil(a)},y:function(a,b,
c,d){Y.colorMask(!!a,!!b,!!c,!!d)},Za:function(a){Y.compileShader(V[a])},S:function(a,b,c,d,e,g,l,n){Y.compressedTexImage2D(a,b,c,d,e,g,n?E.subarray(n,n+l):null)},ua:function(){var a=wb(T),b=Y.createProgram();b.name=a;T[a]=b;return a},$a:function(a){var b=wb(V);V[b]=Y.createShader(a);return b},F:function(a){Y.cullFace(a)},Aa:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=ob[d];e&&(Y.deleteBuffer(e),e.name=0,ob[d]=null,d==Bb&&(Bb=0),d==Cb&&(Cb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=
G[b+4*c>>2],e=pb[d];e&&(Y.deleteFramebuffer(e),e.name=0,pb[d]=null)}},V:function(a){if(a){var b=T[a];b?(Y.deleteProgram(b),b.name=0,T[a]=null,ub[a]=null):W(1281)}},s:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=qb[d];e&&(Y.deleteRenderbuffer(e),e.name=0,qb[d]=null)}},z:function(a){if(a){var b=V[a];b?(Y.deleteShader(b),V[a]=null):W(1281)}},W:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=rb[d];e&&(Y.deleteTexture(e),e.name=0,rb[d]=null)}},w:function(a){Y.depthFunc(a)},x:function(a){Y.depthMask(!!a)},
d:function(a){Y.disable(a)},A:function(a){Y.disableVertexAttribArray(a)},ba:function(a,b,c){Y.drawArrays(a,b,c)},ca:function(a,b,c,d){Y.drawElements(a,b,c,d)},e:function(a){Y.enable(a)},ja:function(a){Y.enableVertexAttribArray(a)},k:function(a,b,c,d){Y.framebufferRenderbuffer(a,b,c,qb[d])},c:function(a,b,c,d,e){Y.framebufferTexture2D(a,b,c,rb[d],e)},D:function(a){Y.frontFace(a)},U:function(a,b){Db(a,b,"createBuffer",ob)},n:function(a,b){Db(a,b,"createFramebuffer",pb)},za:function(a,b){Db(a,b,"createRenderbuffer",
qb)},va:function(a,b){Db(a,b,"createTexture",rb)},ra:function(a,b){return Y.getAttribLocation(T[a],F(b))},i:function(a,b){Eb(a,b)},sa:function(a,b,c,d){a=Y.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},O:function(a,b,c){if(c)if(a>=mb)W(1281);else{var d=ub[a];if(d)if(35716==b)a=Y.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Rb;else if(35722==b){if(-1==d.Nb){a=T[a];var e=Y.getProgramParameter(a,
35721);for(b=d.Nb=0;b<e;++b)d.Nb=Math.max(d.Nb,Y.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Nb}else if(35381==b){if(-1==d.Ob)for(a=T[a],e=Y.getProgramParameter(a,35382),b=d.Ob=0;b<e;++b)d.Ob=Math.max(d.Ob,Y.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.Ob}else G[c>>2]=Y.getProgramParameter(T[a],b);else W(1282)}else W(1281)},Ya:function(a,b,c,d){a=Y.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},Z:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(V[a]),
null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(V[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Y.getShaderParameter(V[a],b):W(1281)},Ba:function(a){if(vb[a])return vb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Fb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=Fb(b);break;case 7938:b=Fb("OpenGL ES 2.0 ("+Y.getParameter(Y.VERSION)+")");break;case 35724:b=
Y.getParameter(Y.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Fb(b);break;default:return W(1280),0}return vb[a]=b},l:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=ub[a]&&ub[a].Ub[b])&&0<=c&&c<a[0]?a[1]+c:-1},ta:function(a){Y.linkProgram(T[a]);var b=T[a];a=ub[a]={Ub:{},Rb:0,Nb:-1,Ob:-1};
for(var c=a.Ub,d=Y.getProgramParameter(b,35718),e=0;e<d;++e){var g=Y.getActiveUniform(b,e),l=g.name;a.Rb=Math.max(a.Rb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var n=Y.getUniformLocation(b,l);if(n){var p=wb(U);c[l]=[g.size,p];U[p]=n;for(var q=1;q<g.size;++q)n=Y.getUniformLocation(b,l+"["+q+"]"),p=wb(U),U[p]=n}}},C:function(a,b){Y.polygonOffset(a,b)},wa:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},L:function(a,b,c,d){Y.scissor(a,b,c,d)},_a:function(a,b,c,d){for(var e="",
g=0;g<b;++g){var l=d?G[d+4*g>>2]:-1;e+=F(G[c+4*g>>2],0>l?void 0:l)}Y.shaderSource(V[a],e)},aa:function(a,b,c){Y.stencilFunc(a,b,c)},K:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},v:function(a){Y.stencilMask(a)},$:function(a,b,c){Y.stencilOp(a,b,c)},J:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},R:function(a,b,c,d,e,g,l,n,p){Y.texImage2D(a,b,c,d,e,g,l,n,p?Gb(n,l,d,e,p):null)},h:function(a,b,c){Y.texParameteri(a,b,c)},q:function(a,b,c,d,e,g,l,n,p){var q=null;p&&(q=Gb(n,l,e,g,p));Y.texSubImage2D(a,
b,c,d,e,g,l,n,q)},ia:function(a,b,c){if(256>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=H[c+4*e>>2];else d=H.subarray(c>>2,c+4*b>>2);Y.uniform1fv(U[a],d)},B:function(a,b){Y.uniform1i(U[a],b)},ha:function(a,b,c){if(256>=2*b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);Y.uniform2fv(U[a],d)},ga:function(a,b,c){if(256>=3*b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2];else d=H.subarray(c>>2,c+12*
b>>2);Y.uniform3fv(U[a],d)},ea:function(a,b,c){if(256>=4*b)for(var d=X[4*b-1],e=0;e<4*b;e+=4)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2],d[e+3]=H[c+(4*e+12)>>2];else d=H.subarray(c>>2,c+16*b>>2);Y.uniform4fv(U[a],d)},da:function(a,b,c,d){if(256>=16*b)for(var e=X[16*b-1],g=0;g<16*b;g+=16)e[g]=H[d+4*g>>2],e[g+1]=H[d+(4*g+4)>>2],e[g+2]=H[d+(4*g+8)>>2],e[g+3]=H[d+(4*g+12)>>2],e[g+4]=H[d+(4*g+16)>>2],e[g+5]=H[d+(4*g+20)>>2],e[g+6]=H[d+(4*g+24)>>2],e[g+7]=H[d+(4*g+28)>>2],e[g+8]=H[d+
(4*g+32)>>2],e[g+9]=H[d+(4*g+36)>>2],e[g+10]=H[d+(4*g+40)>>2],e[g+11]=H[d+(4*g+44)>>2],e[g+12]=H[d+(4*g+48)>>2],e[g+13]=H[d+(4*g+52)>>2],e[g+14]=H[d+(4*g+56)>>2],e[g+15]=H[d+(4*g+60)>>2];else e=H.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(U[a],!!c,e)},la:function(a){Y.useProgram(T[a])},Xa:function(a,b){Y.vertexAttribDivisor(a,b)},ka:function(a,b,c,d,e,g){Y.vertexAttribPointer(a,b,c,!!d,e,g)},M:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:C,o:function(){var a=document.createElement("input");a.type=
"text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Jb()});document.body.append(a)},u:function(){document.getElementById("_sokol_app_input_element").focus()},Da:function(){window.addEventListener("beforeunload",function(a){0!=Kb()&&(a.preventDefault(),a.returnValue=" ")})},La:function(){window.addEventListener("paste",function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste","void",["string"],[a])})},t:function(){document.getElementById("_sokol_app_input_element").blur()},
Ca:function(a){a=F(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},_:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())oa("_sargs_add_kvp",
"void",["string","string"],[b.value[0],b.value[1]])},Y:function(){return navigator.userAgent.includes("Macintosh")?1:0},p:function(){return performance.now()},table:la},Mb=function(){function a(a){f.asm=a.exports;J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==Ja&&(clearInterval(Ja),Ja=null),K&&(a=K,K=null,a()))}function b(b){a(b.instance)}function c(a){return Oa().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+
a);ja(a)})}var d={env:Lb,wasi_snapshot_preview1:Lb};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return z("Module.instantiateWasm callback failed with error: "+e),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||"function"!==typeof fetch)return c(b);fetch(L,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){z("wasm streaming compile failed: "+
a);z("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();f.asm=Mb;var Pa=f.___wasm_call_ctors=function(){return f.asm.db.apply(null,arguments)};f._emsc_load_data=function(){return f.asm.eb.apply(null,arguments)};f.___em_js__emsc_fs_init=function(){return f.asm.fb.apply(null,arguments)};f.___em_js__emsc_load_file=function(){return f.asm.gb.apply(null,arguments)};var Jb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.hb.apply(null,arguments)};
f.___em_js__sapp_js_create_textfield=function(){return f.asm.ib.apply(null,arguments)};f.___em_js__sapp_js_focus_textfield=function(){return f.asm.jb.apply(null,arguments)};f.___em_js__sapp_js_unfocus_textfield=function(){return f.asm.kb.apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return f.asm.lb.apply(null,arguments)};var Kb=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.mb.apply(null,arguments)};f.___em_js__sapp_js_hook_beforeunload=function(){return f.asm.nb.apply(null,arguments)};
f.___em_js__sapp_js_init_clipboard=function(){return f.asm.ob.apply(null,arguments)};f.___em_js__sapp_js_write_clipboard=function(){return f.asm.pb.apply(null,arguments)};f._main=function(){return f.asm.qb.apply(null,arguments)};var Q=f._malloc=function(){return f.asm.rb.apply(null,arguments)};f._free=function(){return f.asm.sb.apply(null,arguments)};f.___em_js__stm_js_perfnow=function(){return f.asm.tb.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.ub.apply(null,arguments)};
f.___em_js__saudio_js_init=function(){return f.asm.vb.apply(null,arguments)};f.___em_js__saudio_js_sample_rate=function(){return f.asm.wb.apply(null,arguments)};f.___em_js__saudio_js_buffer_frames=function(){return f.asm.xb.apply(null,arguments)};f.__sargs_add_kvp=function(){return f.asm.yb.apply(null,arguments)};f.___em_js__sargs_js_parse_url=function(){return f.asm.zb.apply(null,arguments)};f.___em_js__simgui_js_is_osx=function(){return f.asm.Ab.apply(null,arguments)};
var ra=f.stackSave=function(){return f.asm.Bb.apply(null,arguments)},pa=f.stackAlloc=function(){return f.asm.Cb.apply(null,arguments)},sa=f.stackRestore=function(){return f.asm.Db.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.Eb.apply(null,arguments)};f.dynCall_v=function(){return f.asm.Fb.apply(null,arguments)};var R=f.dynCall_iiii=function(){return f.asm.Gb.apply(null,arguments)},Ib=f.dynCall_idi=function(){return f.asm.Hb.apply(null,arguments)};f.asm=Mb;var Nb;
function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Ob(){Nb||Pb();Nb||(K=Ob)};
function Pb(a){function b(){if(!Nb&&(Nb=!0,!ma)){Ca(Ea);Ca(Fa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Qb){var b=a,d=f._main;b=b||[];var e=b.length+1,g=pa(4*(e+1));G[g>>2]=va(aa);for(var l=1;l<e;l++)G[(g>>2)+l]=va(b[l-1]);G[(g>>2)+e]=0;try{var n=d(e,g);if(!B||0!==n){if(!B&&(ma=!0,f.onExit))f.onExit(n);t(n,new ia(n))}}catch(p){p instanceof ia||("unwind"==p?B=!0:((b=p)&&"object"===typeof p&&p.stack&&(b=[p,p.stack]),z("exception thrown: "+b),t(1,p)))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),Ha.unshift(b);Ca(Ha)}}a=a||m;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ia();Ca(Da);0<J||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Pb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Qb=!0;f.noInitialRun&&(Qb=!1);B=!0;Pb();
