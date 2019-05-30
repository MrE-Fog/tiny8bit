var e;e||(e=typeof Module !== 'undefined' ? Module : {});var f={},h;for(h in e)e.hasOwnProperty(h)&&(f[h]=e[h]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var q=!1,r=!1,aa=!1,ba=!1;q="object"===typeof window;r="function"===typeof importScripts;aa="object"===typeof process&&"function"===typeof require&&!q&&!r;ba=!q&&!aa&&!r;var t="";
if(aa){t=__dirname+"/";var ca,da;e.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||v("Assertion failed: undefined");return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof
x))throw a;});process.on("unhandledRejection",v);e.quit=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||v("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),
"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(q||r)r?t=self.location.href:document.currentScript&&(t=document.currentScript.src),t=0!==t.indexOf("blob:")?t.substr(0,t.lastIndexOf("/")+1):"",e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;
d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};var ea=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),y=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ea);for(h in f)f.hasOwnProperty(h)&&(e[h]=f[h]);f=void 0;
"object"!==typeof WebAssembly&&y("no native wasm support detected");var fa,ha=!1,ia="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function z(a,b){if(a){var c=A,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ia)a=ia.decode(c.subarray(a,b));else{for(d="";a<b;){var g=c[a++];if(g&128){var k=c[a++]&63;if(192==(g&224))d+=String.fromCharCode((g&31)<<6|k);else{var l=c[a++]&63;g=224==(g&240)?(g&15)<<12|k<<6|l:(g&7)<<18|k<<12|l<<6|c[a++]&63;65536>g?d+=String.fromCharCode(g):(g-=65536,d+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else d+=String.fromCharCode(g)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var g=c;d=c+d-1;for(var k=0;k<a.length;++k){var l=a.charCodeAt(k);if(55296<=l&&57343>=l){var n=a.charCodeAt(++k);l=65536+((l&1023)<<10)|n&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-g}
function ja(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ka(a){var b=ja(a)+1,c=la(b);B(a,ma,c,b);return c}var buffer,ma,A,na,oa,C,pa,qa,D,E=e.TOTAL_MEMORY||33554432;5242880>E&&y("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+E+"! (TOTAL_STACK=5242880)");
e.buffer?buffer=e.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(fa=new WebAssembly.Memory({initial:E/65536,maximum:E/65536}),buffer=fa.buffer):buffer=new ArrayBuffer(E);e.HEAP8=ma=new Int8Array(buffer);e.HEAP16=na=new Int16Array(buffer);e.HEAP32=C=new Int32Array(buffer);e.HEAPU8=A=new Uint8Array(buffer);e.HEAPU16=oa=new Uint16Array(buffer);e.HEAPU32=pa=new Uint32Array(buffer);e.HEAPF32=qa=new Float32Array(buffer);e.HEAPF64=D=new Float64Array(buffer);C[1364172]=10699600;
function F(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.xb;"number"===typeof c?void 0===b.pb?e.dynCall_v(c):e.dynCall_vi(c,b.pb):c(void 0===b.pb?null:b.pb)}}}var ra=[],sa=[],ta=[],ua=[],va=[],G=!1;function wa(){var a=e.preRun.shift();ra.unshift(a)}var H=0,xa=null,I=null;e.preloadedImages={};e.preloadedAudios={};
function ya(){var a=J;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var J="bombjack.wasm";if(!ya()){var za=J;J=e.locateFile?e.locateFile(za,t):t+za}function Ba(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(J);throw"both async and sync fetching of the wasm failed";}catch(a){v(a)}}
function Ca(){return e.wasmBinary||!q&&!r||"function"!==typeof fetch?new Promise(function(a){a(Ba())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ba()})}
function Da(a){function b(a){e.asm=a.exports;H--;e.monitorRunDependencies&&e.monitorRunDependencies(H);0==H&&(null!==xa&&(clearInterval(xa),xa=null),I&&(a=I,I=null,a()))}function c(a){b(a.instance)}function d(a){return Ca().then(function(a){return WebAssembly.instantiate(a,g)}).then(a,function(a){y("failed to asynchronously prepare wasm: "+a);v(a)})}var g={env:a};H++;e.monitorRunDependencies&&e.monitorRunDependencies(H);if(e.instantiateWasm)try{return e.instantiateWasm(g,b)}catch(k){return y("Module.instantiateWasm callback failed with error: "+
k),!1}(function(){return e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||ya()||"function"!==typeof fetch?d(c):WebAssembly.instantiateStreaming(fetch(J,{credentials:"same-origin"}),g).then(c,function(a){y("wasm streaming compile failed: "+a);y("falling back to ArrayBuffer instantiation");d(c)})})();return{}}e.asm=function(a,b){b.memory=fa;b.table=new WebAssembly.Table({initial:18,maximum:18,element:"anyfunc"});return Da(b)};sa.push({xb:function(){Ea()}});
var Fa=0,Ga=0,K=0,Ha=0,Ia=0,Ja=null,Ka=null,La=!1;function Ma(){for(var a=L.length-1;0<=a;--a)Na(a);L=[];Oa=[]}var Oa=[];function Pa(){if(Qa&&Ra.ib)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Ib.apply(this,b.Cb)}}var Qa=0,Ra=null,L=[];function Sa(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Na(a){var b=L[a];b.target.removeEventListener(b.hb,b.vb,b.jb);L.splice(a,1)}
function M(a){function b(b){++Qa;Ra=a;Pa();a.lb(b);Pa();--Qa}if(a.kb)a.vb=b,a.target.addEventListener(a.hb,b,a.jb),L.push(a),La||(ua.push(Ma),La=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].hb==a.hb&&Na(c--)}var Ta=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function N(a){try{if(!a)return window;"number"===typeof a&&(a=Ta[a]||z(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Ua(a){"number"===typeof a&&(a=z(a));return a&&"#canvas"!==a?"undefined"!==typeof Va&&Wa[a]?Wa[a]:N(a):"undefined"!==typeof Va&&Wa.canvas?Wa.canvas:e.canvas}
function Xa(a,b,c,d,g,k){Fa||(Fa=O(164));a={target:N(a),ib:Sa()?!1:!0,hb:k,kb:d,lb:function(a){a=a||window.event;var c=Fa;B(a.key?a.key:"",A,c+0,32);B(a.code?a.code:"",A,c+32,32);C[c+64>>2]=a.location;C[c+68>>2]=a.ctrlKey;C[c+72>>2]=a.shiftKey;C[c+76>>2]=a.altKey;C[c+80>>2]=a.metaKey;C[c+84>>2]=a.repeat;B(a.locale?a.locale:"",A,c+88,32);B(a.char?a.char:"",A,c+120,32);C[c+152>>2]=a.charCode;C[c+156>>2]=a.keyCode;C[c+160>>2]=a.which;P(d,g,c,b)&&a.preventDefault()},jb:c};M(a)}
function Ya(a,b,c){D[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();C[a+8>>2]=b.screenX;C[a+12>>2]=b.screenY;C[a+16>>2]=b.clientX;C[a+20>>2]=b.clientY;C[a+24>>2]=b.ctrlKey;C[a+28>>2]=b.shiftKey;C[a+32>>2]=b.altKey;C[a+36>>2]=b.metaKey;na[a+40>>1]=b.button;na[a+42>>1]=b.buttons;C[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ja;C[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ka;if(e.canvas){var d=e.canvas.getBoundingClientRect();
C[a+60>>2]=b.clientX-d.left;C[a+64>>2]=b.clientY-d.top}else C[a+60>>2]=0,C[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},C[a+52>>2]=b.clientX-d.left,C[a+56>>2]=b.clientY-d.top):(C[a+52>>2]=0,C[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ja=b.screenX,Ka=b.screenY)}
function Q(a,b,c,d,g,k){Ga||(Ga=O(72));a=N(a);c={target:a,ib:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,hb:k,kb:d,lb:function(c){c=c||window.event;Ya(Ga,c,a);P(d,g,Ga,b)&&c.preventDefault()},jb:c};Sa()&&"mousedown"==k&&(c.ib=!1);M(c)}
function ab(a,b,c,d){Ha||(Ha=O(36));a=N(a);M({target:a,ib:!1,hb:"resize",kb:d,lb:function(c){c=c||window.event;if(c.target==a){var g=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ha;C[l>>2]=c.detail;C[l+4>>2]=document.body.clientWidth;
C[l+8>>2]=document.body.clientHeight;C[l+12>>2]=window.innerWidth;C[l+16>>2]=window.innerHeight;C[l+20>>2]=window.outerWidth;C[l+24>>2]=window.outerHeight;C[l+28>>2]=g[0];C[l+32>>2]=g[1];P(d,10,l,b)&&c.preventDefault()}},jb:c})}
function bb(a,b,c,d,g,k){Ia||(Ia=O(1684));a=N(a);M({target:a,ib:"touchstart"==k||"touchend"==k,hb:k,kb:d,lb:function(c){c=c||window.event;for(var l={},k=0;k<c.touches.length;++k){var m=c.touches[k];l[m.identifier]=m}for(k=0;k<c.changedTouches.length;++k)m=c.changedTouches[k],l[m.identifier]=m,m.ub=!0;for(k=0;k<c.targetTouches.length;++k)m=c.targetTouches[k],l[m.identifier].Ab=!0;var p=m=Ia;C[p+4>>2]=c.ctrlKey;C[p+8>>2]=c.shiftKey;C[p+12>>2]=c.altKey;C[p+16>>2]=c.metaKey;p+=20;var Aa=e.canvas?e.canvas.getBoundingClientRect():
void 0,Za=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},$a=0;for(k in l){var u=l[k];C[p>>2]=u.identifier;C[p+4>>2]=u.screenX;C[p+8>>2]=u.screenY;C[p+12>>2]=u.clientX;C[p+16>>2]=u.clientY;C[p+20>>2]=u.pageX;C[p+24>>2]=u.pageY;C[p+28>>2]=u.ub;C[p+32>>2]=u.Ab;Aa?(C[p+44>>2]=u.clientX-Aa.left,C[p+48>>2]=u.clientY-Aa.top):(C[p+44>>2]=0,C[p+48>>2]=0);C[p+36>>2]=u.clientX-Za.left;C[p+40>>2]=u.clientY-Za.top;p+=52;if(32<=++$a)break}C[m>>2]=$a;P(d,g,m,b)&&c.preventDefault()},jb:c})}
function cb(a,b,c,d,g,k){a||(a=e.canvas);a={target:N(a),ib:!1,hb:k,kb:d,lb:function(a){a=a||window.event;P(d,g,0,b)&&a.preventDefault()},jb:c};M(a)}
function db(a,b,c,d,g){function k(c){c=c||window.event;Ya(K,c,a);D[K+72>>3]=c.wheelDeltaX||0;D[K+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);D[K+88>>3]=0;C[K+96>>2]=0;P(d,9,K,b)&&c.preventDefault()}function l(c){c=c||window.event;var g=K;Ya(g,c,a);D[g+72>>3]=c.deltaX;D[g+80>>3]=c.deltaY;D[g+88>>3]=c.deltaZ;C[g+96>>2]=c.deltaMode;P(d,9,g,b)&&c.preventDefault()}K||(K=O(104));M({target:a,ib:!0,hb:g,kb:d,lb:"wheel"==g?l:k,jb:c})}
var eb=1,fb=0,gb=[],R=[],hb=[],S=[],T=[],U=[],V=[],ib={},jb=null,Wa={},W={},kb={};function X(a){fb||(fb=a)}function Y(a){for(var b=eb++,c=a.length;c<b;c++)a[c]=null;return b}
function lb(a){a||(a=jb);if(!a.yb){a.yb=!0;var b=a.rb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,g){c.drawArraysInstancedANGLE(a,b,d,g)},b.drawElementsInstanced=function(a,b,d,g,k){c.drawElementsInstancedANGLE(a,b,d,g,k)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var g=b.getExtension("WEBGL_draw_buffers");g&&(b.drawBuffers=function(a,b){g.drawBuffersWEBGL(a,b)})}b.Eb=b.getExtension("EXT_disjoint_timer_query");var k="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=k.indexOf(a)&&b.getExtension(a)})}}var Va={},mb,nb,ob=["default","low-power","high-performance"];function pb(a,b,c,d){for(var g=0;g<a;g++){var k=Z[c](),l=k&&Y(d);k?(k.name=l,d[l]=k):X(1282);C[b+4*g>>2]=l}}
function qb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(g){X(1280);y("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+g+")");return}}break;default:X(1280);return}C[b>>2]=c}else X(1281)}function rb(a){var b=ja(a)+1,c=O(b);B(a,A,c,b);return c}var sb={6402:1,6406:1,6407:3,6408:4,6409:1,6410:2,35904:3,35906:4},tb={5121:1,5123:2,5125:4,5126:4,32819:2,32820:2,33635:2,34042:4,36193:2};
function ub(a,b,c,d,g){if(b=sb[b]*tb[a])switch(c=g+d*(c*b+4-1&-4),a){case 5121:return A.subarray(g,c);case 5126:return qa.subarray(g>>2,c>>2);case 5125:case 34042:return pa.subarray(g>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return oa.subarray(g>>1,c>>1);default:X(1280)}else X(1280)}function vb(){e.___errno_location&&(C[e.___errno_location()>>2]=12)}for(var Z,wb=0;256>wb;wb++);
var Ab=e.asm({},{X:function(){return window.devicePixelRatio||1},Y:function(a,b,c){a=a?N(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),D[b>>3]=a.right-a.left,D[c>>3]=a.bottom-a.top):(D[b>>3]=a.clientWidth,D[c>>3]=a.clientHeight);return 0},Sa:function(a,b,c){A.set(A.subarray(b,b+c),a)},Ga:function(a,b){function c(d){xb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},T:function(a,b,c){a=Ua(a);if(!a)return-4;a.width=b;a.height=c;return 0},Pa:function(a,
b,c,d){Xa(a,b,c,d,2,"keydown");return 0},Na:function(a,b,c,d){Xa(a,b,c,d,1,"keypress");return 0},Oa:function(a,b,c,d){Xa(a,b,c,d,3,"keyup");return 0},oa:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},Ta:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},Ra:function(a,b,c,d){Q(a,b,c,d,34,"mouseleave");return 0},ca:function(a,b,c,d){Q(a,b,c,d,8,"mousemove");return 0},ka:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},Ua:function(a,b,c,d){ab(a,b,c,d);return 0},Ja:function(a,b,c,d){bb(a,
b,c,d,25,"touchcancel");return 0},Ka:function(a,b,c,d){bb(a,b,c,d,23,"touchend");return 0},La:function(a,b,c,d){bb(a,b,c,d,24,"touchmove");return 0},Ma:function(a,b,c,d){bb(a,b,c,d,22,"touchstart");return 0},Ia:function(a,b,c,d){cb(a,b,c,d,31,"webglcontextlost");return 0},Ha:function(a,b,c,d){cb(a,b,c,d,32,"webglcontextrestored");return 0},Qa:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(db(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(db(a,b,c,d,"mousewheel"),0):-1},M:function(a,
b){var c={};b>>=2;c.alpha=!!C[b];c.depth=!!C[b+1];c.stencil=!!C[b+2];c.antialias=!!C[b+3];c.premultipliedAlpha=!!C[b+4];c.preserveDrawingBuffer=!!C[b+5];c.powerPreference=ob[C[b+6]];c.failIfMajorPerformanceCaveat=!!C[b+7];c.zb=C[b+8];c.Fb=C[b+9];c.sb=C[b+10];c.wb=C[b+11];c.Gb=C[b+12];c.Hb=C[b+13];a=Ua(a);if(!a||c.wb)c=0;else{if(b=a=a.getContext("webgl",c)||a.getContext("experimental-webgl",c)){b=O(8);var d={handle:b,attributes:c,version:c.zb,rb:a};a.canvas&&(a.canvas.Bb=d);ib[b]=d;("undefined"===
typeof c.sb||c.sb)&&lb(d)}c=b}return c},za:function(a){a>>=2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},ta:function(a){jb=ib[a];e.Db=Z=jb&&jb.rb;return!a||Z?0:-5},h:function(a){Z.activeTexture(a)},O:function(a,b){Z.attachShader(R[a],V[b])},e:function(a,b){Z.bindBuffer(a,gb[b])},f:function(a,b){Z.bindFramebuffer(a,hb[b])},Ca:function(a,b){Z.bindRenderbuffer(a,S[b])},c:function(a,b){Z.bindTexture(a,T[b])},G:function(a,b,c,d){Z.blendColor(a,b,c,d)},H:function(a,b){Z.blendEquationSeparate(a,
b)},I:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},S:function(a,b,c,d){Z.bufferData(a,c?A.subarray(c,c+b):b,d)},R:function(a,b,c,d){Z.bufferSubData(a,b,A.subarray(d,d+c))},m:function(a){return Z.checkFramebufferStatus(a)},pa:function(a){Z.clear(a)},sa:function(a,b,c,d){Z.clearColor(a,b,c,d)},ra:function(a){Z.clearDepth(a)},qa:function(a){Z.clearStencil(a)},z:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},$:function(a){Z.compileShader(V[a])},Q:function(a,b,c,d,g,k,l,n){Z.compressedTexImage2D(a,
b,c,d,g,k,n?A.subarray(n,n+l):null)},ya:function(){var a=Y(R),b=Z.createProgram();b.name=a;R[a]=b;return a},ba:function(a){var b=Y(V);V[b]=Z.createShader(a);return b},F:function(a){Z.cullFace(a)},Ea:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],g=gb[d];g&&(Z.deleteBuffer(g),g.name=0,gb[d]=null,d==mb&&(mb=0),d==nb&&(nb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],g=hb[d];g&&(Z.deleteFramebuffer(g),g.name=0,hb[d]=null)}},V:function(a){if(a){var b=R[a];b?(Z.deleteProgram(b),b.name=
0,R[a]=null,W[a]=null):X(1281)}},s:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],g=S[d];g&&(Z.deleteRenderbuffer(g),g.name=0,S[d]=null)}},A:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},W:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],g=T[d];g&&(Z.deleteTexture(g),g.name=0,T[d]=null)}},x:function(a){Z.depthFunc(a)},y:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},a:function(a){Z.disableVertexAttribArray(a)},ia:function(a,b,c){Z.drawArrays(a,b,c)},ja:function(a,
b,c,d){Z.drawElements(a,b,c,d)},g:function(a){Z.enable(a)},la:function(a){Z.enableVertexAttribArray(a)},k:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,S[d])},b:function(a,b,c,d,g){Z.framebufferTexture2D(a,b,c,T[d],g)},E:function(a){Z.frontFace(a)},U:function(a,b){pb(a,b,"createBuffer",gb)},n:function(a,b){pb(a,b,"createFramebuffer",hb)},Da:function(a,b){pb(a,b,"createRenderbuffer",S)},Aa:function(a,b){pb(a,b,"createTexture",T)},va:function(a,b){return Z.getAttribLocation(R[a],z(b))},t:function(a,
b){qb(a,b)},wa:function(a,b,c,d){a=Z.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");0<b&&d?(b=B(a,A,d,b),c&&(C[c>>2]=b)):c&&(C[c>>2]=0)},N:function(a,b,c){if(c)if(a>=eb)X(1281);else{var d=W[a];if(d)if(35716==b)a=Z.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b)C[c>>2]=d.qb;else if(35722==b){if(-1==d.nb){a=R[a];var g=Z.getProgramParameter(a,35721);for(b=d.nb=0;b<g;++b)d.nb=Math.max(d.nb,Z.getActiveAttrib(a,b).name.length+1)}C[c>>2]=d.nb}else if(35381==
b){if(-1==d.ob)for(a=R[a],g=Z.getProgramParameter(a,35382),b=d.ob=0;b<g;++b)d.ob=Math.max(d.ob,Z.getActiveUniformBlockName(a,b).length+1);C[c>>2]=d.ob}else C[c>>2]=Z.getProgramParameter(R[a],b);else X(1282)}else X(1281)},_:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");0<b&&d?(b=B(a,A,d,b),c&&(C[c>>2]=b)):c&&(C[c>>2]=0)},B:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),C[c>>
2]=null===a||0==a.length?0:a.length+1):C[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},Fa:function(a){if(kb[a])return kb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=rb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=rb(b);break;case 7938:b=rb("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+")");break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=rb(b);break;default:return X(1280),0}return kb[a]=b},l:function(a,b){b=z(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=W[a]&&W[a].tb[b])&&0<=c&&c<a[0]?a[1]+c:-1},xa:function(a){Z.linkProgram(R[a]);var b=R[a];a=W[a]={tb:{},qb:0,nb:-1,ob:-1};for(var c=a.tb,d=Z.getProgramParameter(b,35718),g=0;g<d;++g){var k=Z.getActiveUniform(b,g),l=k.name;a.qb=
Math.max(a.qb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var n=Z.getUniformLocation(b,l);if(n){var w=Y(U);c[l]=[k.size,w];U[w]=n;for(var m=1;m<k.size;++m)n=Z.getUniformLocation(b,l+"["+m+"]"),w=Y(U),U[w]=n}}},D:function(a,b){Z.polygonOffset(a,b)},Ba:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},ua:function(a,b,c,d){Z.scissor(a,b,c,d)},aa:function(a,b,c,d){for(var g="",k=0;k<b;++k){var l=d?C[d+4*k>>2]:-1;g+=z(C[c+4*k>>2],0>l?void 0:l)}Z.shaderSource(V[a],g)},ha:function(a,
b,c){Z.stencilFunc(a,b,c)},K:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},w:function(a){Z.stencilMask(a)},ga:function(a,b,c){Z.stencilOp(a,b,c)},J:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},P:function(a,b,c,d,g,k,l,n,w){Z.texImage2D(a,b,c,d,g,k,l,n,w?ub(n,l,d,g,w):null)},i:function(a,b,c){Z.texParameteri(a,b,c)},r:function(a,b,c,d,g,k,l,n,w){var m=null;w&&(m=ub(n,l,g,k,w));Z.texSubImage2D(a,b,c,d,g,k,l,n,m)},C:function(a,b){Z.uniform1i(U[a],b)},na:function(a){Z.useProgram(R[a])},Z:function(a,
b){Z.vertexAttribDivisor(a,b)},ma:function(a,b,c,d,g,k){Z.vertexAttribPointer(a,b,c,!!d,g,k)},L:function(a,b,c,d){Z.viewport(a,b,c,d)},q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){yb()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},o:function(){document.getElementById("_sokol_app_input_element").blur()},da:function(){return e.mb?
e.mb.bufferSize:0},fa:function(a,b,c){e.gb=null;e.mb=null;"undefined"!==typeof AudioContext?(e.gb=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?(e.gb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):(e.gb=null,console.log("sokol_audio.h: no WebAudio support"));return e.gb?(console.log("sokol_audio.h: sample rate ",e.gb.sampleRate),
e.mb=e.gb.createScriptProcessor(c,0,b),e.mb.onaudioprocess=function(a){var b=a.outputBuffer.length,c=zb(b);if(c)for(var d=a.outputBuffer.numberOfChannels,n=0;n<d;n++)for(var w=a.outputBuffer.getChannelData(n),m=0;m<b;m++)w[m]=qa[(c>>2)+(d*m+n)]},e.mb.connect(e.gb.destination),a=function(){e.gb&&"suspended"===e.gb.state&&e.gb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},ea:function(){return e.gb?
e.gb.sampleRate:0},u:function(a){a|=0;var b=ma.length|0;var c=C[1364172]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return v("OOM"),0,vb(),-1;if(a=(d|0)>(b|0))v("OOM"),a=!0;if(a)return vb(),-1;C[1364172]=d|0;return c|0},v:function(){return performance.now()}},buffer);e.asm=Ab;var Ea=e.___wasm_call_ctors=function(){return e.asm.Va.apply(null,arguments)};e._emsc_load_data=function(){return e.asm.Wa.apply(null,arguments)};
var yb=e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.Xa.apply(null,arguments)};e._main=function(){return e.asm.Ya.apply(null,arguments)};var O=e._malloc=function(){return e.asm.Za.apply(null,arguments)};e._free=function(){return e.asm._a.apply(null,arguments)};var zb=e.__saudio_emsc_pull=function(){return e.asm.$a.apply(null,arguments)};e.__sargs_add_kvp=function(){return e.asm.ab.apply(null,arguments)};var la=e.stackAlloc=function(){return e.asm.bb.apply(null,arguments)};
e.dynCall_vi=function(){return e.asm.cb.apply(null,arguments)};e.dynCall_v=function(){return e.asm.db.apply(null,arguments)};var P=e.dynCall_iiii=function(){return e.asm.eb.apply(null,arguments)},xb=e.dynCall_idi=function(){return e.asm.fb.apply(null,arguments)};e.asm=Ab;function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}x.prototype=Error();x.prototype.constructor=x;I=function Bb(){e.calledRun||Cb();e.calledRun||(I=Bb)};
e.callMain=function(a){a=a||[];G||(G=!0,F(sa));var b=a.length+1,c=la(4*(b+1));C[c>>2]=ka(e.thisProgram);for(var d=1;d<b;d++)C[(c>>2)+d]=ka(a[d-1]);C[(c>>2)+b]=0;try{var g=e._main(b,c,0);if(!e.noExitRuntime||0!==g){if(!e.noExitRuntime&&(ha=!0,e.onExit))e.onExit(g);e.quit(g,new x(g))}}catch(k){k instanceof x||("SimulateInfiniteLoop"==k?e.noExitRuntime=!0:((a=k)&&"object"===typeof k&&k.stack&&(a=[k,k.stack]),y("exception thrown: "+a),e.quit(1,k)))}finally{}};
function Cb(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!ha)){G||(G=!0,F(sa));F(ta);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&Db&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();va.unshift(b)}F(va)}}a=a||e.arguments;if(!(0<H)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)wa();F(ra);0<H||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}}e.run=Cb;function v(a){if(e.onAbort)e.onAbort(a);void 0!==a?(ea(a),y(a),a=JSON.stringify(a)):a="";ha=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=v;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Db=!0;e.noInitialRun&&(Db=!1);e.noExitRuntime=!0;Cb();
