
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},m;for(m in e)e.hasOwnProperty(m)&&(k[m]=e[m]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,x,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
y),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=e.print||console.log.bind(console),z=e.printErr||console.warn.bind(console);for(m in k)k.hasOwnProperty(m)&&(e[m]=k[m]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var A;e.wasmBinary&&(A=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&z("no native wasm support detected");var B,ka=new WebAssembly.Table({initial:51,maximum:51,element:"anyfunc"}),la=!1;
function assert(a,b){a||y("Assertion failed: "+b)}function ma(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function na(a,b,c,d){var f={string:function(p){var q=0;if(null!==p&&void 0!==p&&0!==p){var Y=(p.length<<2)+1;q=C(Y);D(p,E,q,Y)}return q},array:function(p){var q=C(p.length);oa.set(p,q);return q}},h=ma(a),g=[];a=0;if(d)for(var l=0;l<d.length;l++){var n=f[c[l]];n?(0===a&&(a=pa()),g[l]=n(d[l])):g[l]=d[l]}c=h.apply(null,g);c=function(p){return"string"===b?F(p):"boolean"===b?!!p:p}(c);0!==a&&qa(a);return c}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function sa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ra)return ra.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=a[b++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function F(a,b){return a?sa(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var l=a.charCodeAt(++h);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ua(a){var b=ta(a)+1,c=C(b);D(a,oa,c,b);return c}var va,oa,E,wa,xa,G,ya,H,I;
function za(a){va=a;e.HEAP8=oa=new Int8Array(a);e.HEAP16=wa=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=xa=new Uint16Array(a);e.HEAPU32=ya=new Uint32Array(a);e.HEAPF32=H=new Float32Array(a);e.HEAPF64=I=new Float64Array(a)}var Aa=e.INITIAL_MEMORY||33554432;e.wasmMemory?B=e.wasmMemory:B=new WebAssembly.Memory({initial:Aa/65536,maximum:32768});B&&(va=B.buffer);Aa=va.byteLength;za(va);G[1711E3]=12087040;
function Ba(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.ec;"number"===typeof c?void 0===b.Yb?e.dynCall_v(c):e.dynCall_vi(c,b.Yb):c(void 0===b.Yb?null:b.Yb)}}}var Ca=[],Da=[],Ea=[],Fa=[],Ga=[];function Ha(){var a=e.preRun.shift();Ca.unshift(a)}var J=0,Ia=null,Ja=null;e.preloadedImages={};e.preloadedAudios={};function y(a){if(e.onAbort)e.onAbort(a);ja(a);z(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ka(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="atom-ui.wasm";if(!Ka()){var La=K;K=e.locateFile?e.locateFile(La,v):v+La}function Ma(){try{if(A)return new Uint8Array(A);if(x)return x(K);throw"both async and sync fetching of the wasm failed";}catch(a){y(a)}}
function Na(){return A||!ba&&!u||"function"!==typeof fetch?new Promise(function(a){a(Ma())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ma()})}Da.push({ec:function(){Oa()}});var Pa=0,Qa=0,L=0,Ra=0,Sa=0,Ta=null,Ua=null,Va=!1;function Wa(){for(var a=M.length-1;0<=a;--a)Xa(a);M=[];Ya=[]}var Ya=[];
function Za(){if($a&&ab.Wb)for(var a=0;a<Ya.length;++a){var b=Ya[a];Ya.splice(a,1);--a;b.rc.apply(null,b.kc)}}var $a=0,ab=null,M=[];function Xa(a){var b=M[a];b.target.removeEventListener(b.Pb,b.cc,b.Qb);M.splice(a,1)}function N(a){function b(d){++$a;ab=a;Za();a.Sb(d);Za();--$a}if(a.Rb)a.cc=b,a.target.addEventListener(a.Pb,b,a.Qb),M.push(a),Va||(Fa.push(Wa),Va=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Pb==a.Pb&&Xa(c--)}function bb(a){return a===a+0?F(a):a}
var cb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){return cb[a]||("undefined"!==typeof document?document.querySelector(bb(a)):void 0)}function db(a){return 0>cb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function eb(a,b,c,d,f,h){Pa||(Pa=P(164));a={target:O(a),Wb:!0,Pb:h,Rb:d,Sb:function(g){g=g||event;var l=Pa;D(g.key?g.key:"",E,l+0,32);D(g.code?g.code:"",E,l+32,32);G[l+64>>2]=g.location;G[l+68>>2]=g.ctrlKey;G[l+72>>2]=g.shiftKey;G[l+76>>2]=g.altKey;G[l+80>>2]=g.metaKey;G[l+84>>2]=g.repeat;D(g.locale?g.locale:"",E,l+88,32);D(g.char?g.char:"",E,l+120,32);G[l+152>>2]=g.charCode;G[l+156>>2]=g.keyCode;G[l+160>>2]=g.which;Q(d,f,l,b)&&g.preventDefault()},Qb:c};N(a)}
function fb(a,b,c){G[a>>2]=b.screenX;G[a+4>>2]=b.screenY;G[a+8>>2]=b.clientX;G[a+12>>2]=b.clientY;G[a+16>>2]=b.ctrlKey;G[a+20>>2]=b.shiftKey;G[a+24>>2]=b.altKey;G[a+28>>2]=b.metaKey;wa[a+32>>1]=b.button;wa[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Ua;G[a+36>>2]=b.movementX||b.screenX-Ta;G[a+40>>2]=d;c=db(c);G[a+44>>2]=b.clientX-c.left;G[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&"mousewheel"!==b.type&&(Ta=b.screenX,Ua=b.screenY)}
function gb(a,b,c,d,f,h){Qa||(Qa=P(64));a=O(a);N({target:a,Wb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Pb:h,Rb:d,Sb:function(g){g=g||event;fb(Qa,g,a);Q(d,f,Qa,b)&&g.preventDefault()},Qb:c})}
function hb(a,b,c,d){Ra||(Ra=P(36));a=O(a);N({target:a,Pb:"resize",Rb:d,Sb:function(f){f=f||event;if(f.target==a){var h=Ra,g=document.body;G[h>>2]=f.detail;G[h+4>>2]=g.clientWidth;G[h+8>>2]=g.clientHeight;G[h+12>>2]=innerWidth;G[h+16>>2]=innerHeight;G[h+20>>2]=outerWidth;G[h+24>>2]=outerHeight;G[h+28>>2]=pageXOffset;G[h+32>>2]=pageYOffset;Q(d,10,h,b)&&f.preventDefault()}},Qb:c})}
function ib(a,b,c,d,f,h){Sa||(Sa=P(1684));a=O(a);N({target:a,Wb:"touchstart"==h||"touchend"==h,Pb:h,Rb:d,Sb:function(g){g=g||event;for(var l={},n=0;n<g.touches.length;++n){var p=g.touches[n];p.$b=!1;l[p.identifier]=p}for(n=0;n<g.changedTouches.length;++n)p=g.changedTouches[n],l[p.identifier]=p,p.$b=!0;for(n=0;n<g.targetTouches.length;++n)p=g.targetTouches[n],l[p.identifier].ic=!0;var q=p=Sa;G[q+4>>2]=g.ctrlKey;G[q+8>>2]=g.shiftKey;G[q+12>>2]=g.altKey;G[q+16>>2]=g.metaKey;q+=20;var Y=db(a),mb=0;for(n in l){var w=
l[n];G[q>>2]=w.identifier;G[q+4>>2]=w.screenX;G[q+8>>2]=w.screenY;G[q+12>>2]=w.clientX;G[q+16>>2]=w.clientY;G[q+20>>2]=w.pageX;G[q+24>>2]=w.pageY;G[q+28>>2]=w.$b;G[q+32>>2]=w.ic;G[q+36>>2]=w.clientX-Y.left;G[q+40>>2]=w.clientY-Y.top;q+=52;if(32<=++mb)break}G[p>>2]=mb;Q(d,f,p,b)&&g.preventDefault()},Qb:c})}function jb(a,b,c,d,f,h){a={target:O(a),Pb:h,Rb:d,Sb:function(g){g=g||event;Q(d,f,0,b)&&g.preventDefault()},Qb:c};N(a)}
function kb(a,b,c,d,f){function h(l){l=l||event;fb(L,l,a);I[L+64>>3]=l.wheelDeltaX||0;I[L+72>>3]=-(l.wheelDeltaY||l.wheelDelta);I[L+80>>3]=0;G[L+88>>2]=0;Q(d,9,L,b)&&l.preventDefault()}function g(l){l=l||event;var n=L;fb(n,l,a);I[n+64>>3]=l.deltaX;I[n+72>>3]=l.deltaY;I[n+80>>3]=l.deltaZ;G[n+88>>2]=l.deltaMode;Q(d,9,n,b)&&l.preventDefault()}L||(L=P(96));N({target:a,Wb:!0,Pb:f,Rb:d,Sb:"wheel"==f?g:h,Qb:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function nb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}var pb=1,qb=0,rb=[],R=[],sb=[],tb=[],ub=[],S=[],T=[],vb=[],wb=null,xb={},yb={};
function U(a){qb||(qb=a)}function V(a){for(var b=pb++,c=a.length;c<b;c++)a[c]=null;return b}var W=[0];
function zb(a){a||(a=wb);if(!a.fc){a.fc=!0;var b=a.Xb;2>a.version&&(lb(b),nb(b),ob(b));b.mc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var Ab,Bb,Cb=["default","low-power","high-performance"],Db=[null,[],[]];function Eb(a,b,c,d){for(var f=0;f<a;f++){var h=X[c](),g=h&&V(d);h?(h.name=g,d[g]=h):U(1282);G[b+4*f>>2]=g}}
function Fb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){U(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:U(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else U(1281)}function Gb(a){var b=ta(a)+1,c=P(b);D(a,E,c,b);return c}
function Hb(a,b,c,d,f){a-=5120;a=1==a?E:4==a?G:6==a?H:5==a||28922==a?ya:xa;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var X,Ib=new Float32Array(256),Z=0;256>Z;Z++)W[Z]=Ib.subarray(0,Z+1);for(Z=0;256>Z;Z++);
var Nb={_a:function(){y()},ib:function(){console.log("fs.h: registering Module['ccall']");e.ccall=na},jb:function(a){var b=F(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var d=new Uint8Array(c.response);na("emsc_load_data","int",["string","array","number"],[b,d,d.length])};c.send()},Q:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},Z:function(a,b,c){a=O(a);if(!a)return-4;a=db(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},Wa:function(a,
b,c){E.copyWithin(a,b,b+c)},Fa:function(a,b){function c(d){Jb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Xa:function(a){var b=E.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{B.grow(Math.min(2147483648,d)-va.byteLength+65535>>>16);za(B.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},L:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},
Oa:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},Ma:function(a,b,c,d){eb(a,b,c,d,1,"keypress");return 0},Na:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},Ua:function(a,b,c,d){gb(a,b,c,d,5,"mousedown");return 0},Ra:function(a,b,c,d){gb(a,b,c,d,33,"mouseenter");return 0},Qa:function(a,b,c,d){gb(a,b,c,d,34,"mouseleave");return 0},Sa:function(a,b,c,d){gb(a,b,c,d,8,"mousemove");return 0},Ta:function(a,b,c,d){gb(a,b,c,d,6,"mouseup");return 0},xa:function(a,b,c,d){hb(a,b,c,d);return 0},Ia:function(a,
b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},Ja:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},Ka:function(a,b,c,d){ib(a,b,c,d,24,"touchmove");return 0},La:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},Ha:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},Ga:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},Pa:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(kb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(kb(a,b,c,d,"mousewheel"),
0):-1},H:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=Cb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.hc=G[b+8];c.oc=G[b+9];c.ac=G[b+10];c.dc=G[b+11];c.pc=G[b+12];c.qc=G[b+13];a=O(a);if(!a||c.dc)c=0;else if(a=a.getContext("webgl",c)){b=V(vb);var d={nc:b,attributes:c,version:c.hc,Xb:a};a.canvas&&(a.canvas.jc=d);vb[b]=d;("undefined"===typeof c.ac||c.ac)&&zb(d);
c=b}else c=0;return c},$a:function(a,b){a=vb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?lb(X):"OES_vertex_array_object"==b?nb(X):"WEBGL_draw_buffers"==b&&ob(X);return!!a.Xb.getExtension(b)},ka:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},hb:function(a){wb=vb[a];e.lc=X=wb&&wb.Xb;return!a||X?0:-5},Za:function(){return 0},Va:function(){},$:function(a,b,c,d){for(var f=0,h=0;h<c;h++){for(var g=G[b+8*h>>2],l=G[b+(8*h+4)>>2],
n=0;n<l;n++){var p=E[g+n],q=Db[a];0===p||10===p?((1===a?ja:z)(sa(q,0)),q.length=0):q.push(p)}f+=l}G[d>>2]=f;return 0},g:function(a){X.activeTexture(a)},N:function(a,b){X.attachShader(R[a],T[b])},b:function(a,b){X.bindBuffer(a,rb[b])},f:function(a,b){X.bindFramebuffer(a,sb[b])},va:function(a,b){X.bindRenderbuffer(a,tb[b])},a:function(a,b){X.bindTexture(a,ub[b])},W:function(a,b,c,d){X.blendColor(a,b,c,d)},X:function(a,b){X.blendEquationSeparate(a,b)},Y:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},
R:function(a,b,c,d){X.bufferData(a,c?E.subarray(c,c+b):b,d)},t:function(a,b,c,d){X.bufferSubData(a,b,E.subarray(d,d+c))},o:function(a){return X.checkFramebufferStatus(a)},fa:function(a){X.clear(a)},ia:function(a,b,c,d){X.clearColor(a,b,c,d)},ha:function(a){X.clearDepth(a)},ga:function(a){X.clearStencil(a)},y:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},na:function(a){X.compileShader(T[a])},P:function(a,b,c,d,f,h,g,l){X.compressedTexImage2D(a,b,c,d,f,h,l?E.subarray(l,l+g):null)},sa:function(){var a=
V(R),b=X.createProgram();b.name=a;R[a]=b;return a},pa:function(a){var b=V(T);T[b]=X.createShader(a);return b},T:function(a){X.cullFace(a)},ja:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=rb[d];f&&(X.deleteBuffer(f),f.name=0,rb[d]=null,d==Ab&&(Ab=0),d==Bb&&(Bb=0))}},c:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],f=sb[d];f&&(X.deleteFramebuffer(f),f.name=0,sb[d]=null)}},K:function(a){if(a){var b=R[a];b?(X.deleteProgram(b),b.name=0,R[a]=null,xb[a]=null):U(1281)}},r:function(a,b){for(var c=
0;c<a;c++){var d=G[b+4*c>>2],f=tb[d];f&&(X.deleteRenderbuffer(f),f.name=0,tb[d]=null)}},x:function(a){if(a){var b=T[a];b?(X.deleteShader(b),T[a]=null):U(1281)}},I:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=ub[d];f&&(X.deleteTexture(f),f.name=0,ub[d]=null)}},B:function(a){X.depthFunc(a)},A:function(a){X.depthMask(!!a)},e:function(a){X.disable(a)},_:function(a){X.disableVertexAttribArray(a)},C:function(a,b,c){X.drawArrays(a,b,c)},D:function(a,b,c,d){X.drawElements(a,b,c,d)},h:function(a){X.enable(a)},
ca:function(a){X.enableVertexAttribArray(a)},l:function(a,b,c,d){X.framebufferRenderbuffer(a,b,c,tb[d])},d:function(a,b,c,d,f){X.framebufferTexture2D(a,b,c,ub[d],f)},U:function(a){X.frontFace(a)},S:function(a,b){Eb(a,b,"createBuffer",rb)},p:function(a,b){Eb(a,b,"createFramebuffer",sb)},wa:function(a,b){Eb(a,b,"createRenderbuffer",tb)},ta:function(a,b){Eb(a,b,"createTexture",ub)},la:function(a,b){return X.getAttribLocation(R[a],F(b))},j:function(a,b){Fb(a,b)},qa:function(a,b,c,d){a=X.getProgramInfoLog(R[a]);
null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},M:function(a,b,c){if(c)if(a>=pb)U(1281);else{var d=xb[a];if(d)if(35716==b)a=X.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Zb;else if(35722==b){if(-1==d.Ub){a=R[a];var f=X.getProgramParameter(a,35721);for(b=d.Ub=0;b<f;++b)d.Ub=Math.max(d.Ub,X.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Ub}else if(35381==b){if(-1==d.Vb)for(a=R[a],f=X.getProgramParameter(a,35382),b=d.Vb=0;b<
f;++b)d.Vb=Math.max(d.Vb,X.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.Vb}else G[c>>2]=X.getProgramParameter(R[a],b);else U(1282)}else U(1281)},ma:function(a,b,c,d){a=X.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},J:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=X.getShaderSource(T[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=X.getShaderParameter(T[a],b):U(1281)},
Aa:function(a){if(yb[a])return yb[a];switch(a){case 7939:var b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Gb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||U(1280);b=Gb(b);break;case 7938:b=Gb("OpenGL ES 2.0 ("+X.getParameter(7938)+")");break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Gb(b);break;
default:return U(1280),0}return yb[a]=b},s:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=xb[a]&&xb[a].bc[b])&&0<=c&&c<a[0]?a[1]+c:-1},ra:function(a){X.linkProgram(R[a]);var b=R[a];a=xb[a]={bc:{},Zb:0,Ub:-1,Vb:-1};for(var c=a.bc,d=X.getProgramParameter(b,35718),f=0;f<d;++f){var h=X.getActiveUniform(b,f),g=h.name;a.Zb=Math.max(a.Zb,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var l=X.getUniformLocation(b,
g);if(l){var n=V(S);c[g]=[h.size,n];S[n]=l;for(var p=1;p<h.size;++p)l=X.getUniformLocation(b,g+"["+p+"]"),n=V(S),S[n]=l}}},V:function(a,b){X.polygonOffset(a,b)},ua:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},q:function(a,b,c,d){X.scissor(a,b,c,d)},oa:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?G[d+4*h>>2]:-1;f+=F(G[c+4*h>>2],0>g?void 0:g)}X.shaderSource(T[a],f)},za:function(a,b,c){X.stencilFunc(a,b,c)},G:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},z:function(a){X.stencilMask(a)},
ya:function(a,b,c){X.stencilOp(a,b,c)},F:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},O:function(a,b,c,d,f,h,g,l,n){X.texImage2D(a,b,c,d,f,h,g,l,n?Hb(l,g,d,f,n):null)},i:function(a,b,c){X.texParameteri(a,b,c)},n:function(a,b,c,d,f,h,g,l,n){var p=null;n&&(p=Hb(l,g,f,h,n));X.texSubImage2D(a,b,c,d,f,h,g,l,p)},ba:function(a,b,c){if(256>=b)for(var d=W[b-1],f=0;f<b;++f)d[f]=H[c+4*f>>2];else d=H.subarray(c>>2,c+4*b>>2);X.uniform1fv(S[a],d)},E:function(a,b){X.uniform1i(S[a],b)},gb:function(a,b,c){if(256>=
2*b)for(var d=W[2*b-1],f=0;f<2*b;f+=2)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);X.uniform2fv(S[a],d)},fb:function(a,b,c){if(256>=3*b)for(var d=W[3*b-1],f=0;f<3*b;f+=3)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2],d[f+2]=H[c+(4*f+8)>>2];else d=H.subarray(c>>2,c+12*b>>2);X.uniform3fv(S[a],d)},eb:function(a,b,c){if(256>=4*b){var d=W[4*b-1],f=H;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=f[g];d[h+1]=f[g+1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=H.subarray(c>>2,c+16*b>>2);X.uniform4fv(S[a],
d)},db:function(a,b,c,d){if(256>=16*b){var f=W[16*b-1],h=H;d>>=2;for(var g=0;g<16*b;g+=16){var l=d+g;f[g]=h[l];f[g+1]=h[l+1];f[g+2]=h[l+2];f[g+3]=h[l+3];f[g+4]=h[l+4];f[g+5]=h[l+5];f[g+6]=h[l+6];f[g+7]=h[l+7];f[g+8]=h[l+8];f[g+9]=h[l+9];f[g+10]=h[l+10];f[g+11]=h[l+11];f[g+12]=h[l+12];f[g+13]=h[l+13];f[g+14]=h[l+14];f[g+15]=h[l+15]}}else f=H.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(S[a],!!c,f)},ea:function(a){X.useProgram(R[a])},Ya:function(a,b){X.vertexAttribDivisor(a,b)},da:function(a,b,c,d,f,
h){X.vertexAttribPointer(a,b,c,!!d,f,h)},k:function(a,b,c,d){X.viewport(a,b,c,d)},memory:B,w:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Kb()});document.body.append(a)},v:function(){document.getElementById("_sokol_app_input_element").focus()},Ea:function(){window.addEventListener("beforeunload",function(a){0!=Lb()&&(a.preventDefault(),a.returnValue=" ")})},Da:function(){window.addEventListener("paste",
function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste","void",["string"],[a])})},u:function(){document.getElementById("_sokol_app_input_element").blur()},Ba:function(a){a=F(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();
document.execCommand("copy");document.body.removeChild(b)},Ca:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())na("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},ab:function(){return e.Tb?e.Tb.bufferSize:0},cb:function(a,b,c){e.Ob=null;e.Tb=null;"undefined"!==typeof AudioContext?(e.Ob=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?
(e.Ob=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):(e.Ob=null,console.log("sokol_audio.h: no WebAudio support"));return e.Ob?(console.log("sokol_audio.h: sample rate ",e.Ob.sampleRate),e.Tb=e.Ob.createScriptProcessor(c,0,b),e.Tb.onaudioprocess=function(d){var f=d.outputBuffer.length,h=Mb(f);if(h)for(var g=d.outputBuffer.numberOfChannels,l=0;l<g;l++)for(var n=d.outputBuffer.getChannelData(l),p=0;p<f;p++)n[p]=H[(h>>2)+(g*
p+l)]},e.Tb.connect(e.Ob.destination),a=function(){e.Ob&&"suspended"===e.Ob.state&&e.Ob.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},bb:function(){return e.Ob?e.Ob.sampleRate:0},aa:function(){return navigator.userAgent.includes("Macintosh")?1:0},m:function(){return performance.now()},table:ka},Ob=function(){function a(f){e.asm=f.exports;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);
0==J&&(null!==Ia&&(clearInterval(Ia),Ia=null),Ja&&(f=Ja,Ja=null,f()))}function b(f){a(f.instance)}function c(f){return Na().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){z("failed to asynchronously prepare wasm: "+h);y(h)})}var d={a:Nb};J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return z("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||
Ka()||"function"!==typeof fetch)return c(b);fetch(K,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){z("wasm streaming compile failed: "+h);z("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();e.asm=Ob;var Oa=e.___wasm_call_ctors=function(){return(Oa=e.___wasm_call_ctors=e.asm.kb).apply(null,arguments)};e._emsc_load_data=function(){return(e._emsc_load_data=e.asm.lb).apply(null,arguments)};
e.___em_js__emsc_fs_init=function(){return(e.___em_js__emsc_fs_init=e.asm.mb).apply(null,arguments)};e.___em_js__emsc_load_file=function(){return(e.___em_js__emsc_load_file=e.asm.nb).apply(null,arguments)};var Kb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Kb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.ob).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.pb).apply(null,arguments)};
e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.qb).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.rb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.sb).apply(null,arguments)};var Lb=e.__sapp_html5_get_ask_leave_site=function(){return(Lb=e.__sapp_html5_get_ask_leave_site=e.asm.tb).apply(null,arguments)};
e.___em_js__sapp_js_hook_beforeunload=function(){return(e.___em_js__sapp_js_hook_beforeunload=e.asm.ub).apply(null,arguments)};e.___em_js__sapp_js_init_clipboard=function(){return(e.___em_js__sapp_js_init_clipboard=e.asm.vb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.wb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.xb).apply(null,arguments)};
e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.yb).apply(null,arguments)};var Mb=e.__saudio_emsc_pull=function(){return(Mb=e.__saudio_emsc_pull=e.asm.zb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.Ab).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.Bb).apply(null,arguments)};
e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.Cb).apply(null,arguments)};e.__sargs_add_kvp=function(){return(e.__sargs_add_kvp=e.asm.Db).apply(null,arguments)};e.___em_js__sargs_js_parse_url=function(){return(e.___em_js__sargs_js_parse_url=e.asm.Eb).apply(null,arguments)};var P=e._malloc=function(){return(P=e._malloc=e.asm.Fb).apply(null,arguments)};e.___em_js__simgui_js_is_osx=function(){return(e.___em_js__simgui_js_is_osx=e.asm.Gb).apply(null,arguments)};
var pa=e.stackSave=function(){return(pa=e.stackSave=e.asm.Hb).apply(null,arguments)},C=e.stackAlloc=function(){return(C=e.stackAlloc=e.asm.Ib).apply(null,arguments)},qa=e.stackRestore=function(){return(qa=e.stackRestore=e.asm.Jb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.Kb).apply(null,arguments)};var Q=e.dynCall_iiii=function(){return(Q=e.dynCall_iiii=e.asm.Lb).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.Mb).apply(null,arguments)};
var Jb=e.dynCall_idi=function(){return(Jb=e.dynCall_idi=e.asm.Nb).apply(null,arguments)};e.asm=Ob;var Pb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ja=function Qb(){Pb||Rb();Pb||(Ja=Qb)};
function Rb(a){function b(){if(!Pb&&(Pb=!0,e.calledRun=!0,!la)){Ba(Da);Ba(Ea);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Sb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=C(4*(f+1));G[h>>2]=ua(aa);for(var g=1;g<f;g++)G[(h>>2)+g]=ua(c[g-1]);G[(h>>2)+f]=0;try{var l=d(f,h);if(!noExitRuntime||0!==l){if(!noExitRuntime&&(la=!0,e.onExit))e.onExit(l);t(l,new ia(l))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),z("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ga.unshift(c);Ba(Ga)}}a=a||r;if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ha();Ba(Ca);0<J||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Rb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Sb=!0;e.noInitialRun&&(Sb=!1);noExitRuntime=!0;Rb();
