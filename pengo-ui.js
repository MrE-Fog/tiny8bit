
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",k=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,u,v;
if(ea){var fs=require("fs"),ha=require("path");q=l?ha.dirname(q)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};u=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=f);process.on("uncaughtException",
function(a){if(!(a instanceof w))throw a;});process.on("unhandledRejection",function(a){throw a;});k=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof w||x("exiting due to exception: "+b);process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ia=f.print||console.log.bind(console),x=f.printErr||console.warn.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);
f.thisProgram&&(ca=f.thisProgram);f.quit&&(k=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&z("no native wasm support detected");var ja,ka=!1,la="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ma(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&la)return la.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function A(a,b){return a?ma(B,a,b):""}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function na(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var oa,B,pa,qa,D,E,F,G;function ra(){var a=ja.buffer;f.HEAP8=oa=new Int8Array(a);f.HEAP16=pa=new Int16Array(a);f.HEAP32=D=new Int32Array(a);f.HEAPU8=B=new Uint8Array(a);f.HEAPU16=qa=new Uint16Array(a);f.HEAPU32=E=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}var sa,ta=[],ua=[],va=[],wa=[],xa=[];
function ya(){var a=f.preRun.shift();ta.unshift(a)}var H=0,za=null,I=null;function z(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";x(a);ka=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Aa(){return J.startsWith("data:application/octet-stream;base64,")}var J;J="pengo-ui.wasm";if(!Aa()){var Ba=J;J=f.locateFile?f.locateFile(Ba,q):q+Ba}
function Ca(){var a=J;try{if(a==J&&y)return new Uint8Array(y);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){z(b)}}
function Da(){if(!y&&(da||l)){if("function"==typeof fetch&&!J.startsWith("file://"))return fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ca()});if(u)return new Promise(function(a,b){u(J,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ca()})}function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ea(a){for(;0<a.length;)a.shift()(f)}function Fa(a){var b=Ga();a();Ha(b)}var Ia=0;function Ja(){for(var a=K.length-1;0<=a;--a)Ka(a);K=[];La=[]}var La=[];function Ma(){if(Ia&&Na.pc)for(var a=0;a<La.length;++a){var b=La[a];La.splice(a,1);--a;b.Yc.apply(null,b.Oc)}}var K=[];function Ka(a){var b=K[a];b.target.removeEventListener(b.hc,b.Jc,b.ic);K.splice(a,1)}
function L(a){function b(d){++Ia;Na=a;Ma();a.kc(d);Ma();--Ia}if(a.jc)a.Jc=b,a.target.addEventListener(a.hc,b,a.ic),K.push(a),Oa||(wa.push(Ja),Oa=!0);else for(var c=0;c<K.length;++c)K[c].target==a.target&&K[c].hc==a.hc&&Ka(c--)}function Pa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Oa,Na,Qa,Ra,Sa,Ta,Ua,Va,Wa,Xa=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function M(a){a=2<a?A(a):a;return Xa[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Ya(a){return 0>Xa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var Za;Za=ea?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();var $a=[];function N(a){var b=$a[a];b||(a>=$a.length&&($a.length=a+1),$a[a]=b=sa.get(a));return b}
function ab(a,b,c,d,e,h){Qa||(Qa=O(256));a={target:M(a),hc:h,jc:d,kc:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Qa;C(Pa(g.target),B,n+0,128);C(m,B,n+128,128);N(d)(e,n,b)&&g.preventDefault()},ic:c};L(a)}
function bb(a,b,c,d,e,h){Ra||(Ra=O(176));a={target:M(a),pc:!0,hc:h,jc:d,kc:function(g){var m=Ra;G[m>>3]=g.timeStamp;var n=m>>2;D[n+2]=g.location;D[n+3]=g.ctrlKey;D[n+4]=g.shiftKey;D[n+5]=g.altKey;D[n+6]=g.metaKey;D[n+7]=g.repeat;D[n+8]=g.charCode;D[n+9]=g.keyCode;D[n+10]=g.which;C(g.key||"",B,m+44,32);C(g.code||"",B,m+76,32);C(g.char||"",B,m+108,32);C(g.locale||"",B,m+140,32);N(d)(e,m,b)&&g.preventDefault()},ic:c};L(a)}
function cb(a,b,c){G[a>>3]=b.timeStamp;a>>=2;D[a+2]=b.screenX;D[a+3]=b.screenY;D[a+4]=b.clientX;D[a+5]=b.clientY;D[a+6]=b.ctrlKey;D[a+7]=b.shiftKey;D[a+8]=b.altKey;D[a+9]=b.metaKey;pa[2*a+20]=b.button;pa[2*a+21]=b.buttons;D[a+11]=b.movementX;D[a+12]=b.movementY;c=Ya(c);D[a+13]=b.clientX-c.left;D[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,h){Sa||(Sa=O(72));a=M(a);L({target:a,pc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,hc:h,jc:d,kc:function(g){g=g||event;cb(Sa,g,a);N(d)(e,Sa,b)&&g.preventDefault()},ic:c})}function db(a,b,c,d,e){Ta||(Ta=O(260));L({target:a,hc:e,jc:d,kc:function(h){h=h||event;var g=Ta,m=document.pointerLockElement||document.nc||document.xc||document.wc;D[g>>2]=!!m;var n=m&&m.id?m.id:"";C(Pa(m),B,g+4,128);C(n,B,g+132,128);N(d)(20,g,b)&&h.preventDefault()},ic:c})}
function eb(a,b,c,d,e){L({target:a,hc:e,jc:d,kc:function(h){h=h||event;N(d)(38,0,b)&&h.preventDefault()},ic:c})}
function fb(a,b,c,d){Ua||(Ua=O(36));a=M(a);L({target:a,hc:"resize",jc:d,kc:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Ua;D[g>>2]=e.detail;D[g+4>>2]=h.clientWidth;D[g+8>>2]=h.clientHeight;D[g+12>>2]=innerWidth;D[g+16>>2]=innerHeight;D[g+20>>2]=outerWidth;D[g+24>>2]=outerHeight;D[g+28>>2]=pageXOffset;D[g+32>>2]=pageYOffset;N(d)(10,g,b)&&e.preventDefault()}}},ic:c})}
function gb(a,b,c,d,e,h){Va||(Va=O(1696));a=M(a);L({target:a,pc:"touchstart"==h||"touchend"==h,hc:h,jc:d,kc:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.yc=m.zc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.yc=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].zc=1;p=Va;G[p>>3]=g.timeStamp;var t=p>>2;D[t+3]=g.ctrlKey;D[t+4]=g.shiftKey;D[t+5]=g.altKey;D[t+6]=g.metaKey;t+=7;var mb=Ya(a),nb=0;for(r in n)if(m=
n[r],D[t]=m.identifier,D[t+1]=m.screenX,D[t+2]=m.screenY,D[t+3]=m.clientX,D[t+4]=m.clientY,D[t+5]=m.pageX,D[t+6]=m.pageY,D[t+7]=m.yc,D[t+8]=m.zc,D[t+9]=m.clientX-mb.left,D[t+10]=m.clientY-mb.top,t+=13,31<++nb)break;D[p+8>>2]=nb;N(d)(e,p,b)&&g.preventDefault()},ic:c})}function hb(a,b,c,d,e,h){a={target:M(a),hc:h,jc:d,kc:function(g){g=g||event;N(d)(e,0,b)&&g.preventDefault()},ic:c};L(a)}
function ib(a,b,c,d){Wa||(Wa=O(104));L({target:a,pc:!0,hc:"wheel",jc:d,kc:function(e){e=e||event;var h=Wa;cb(h,e,a);G[h+72>>3]=e.deltaX;G[h+80>>3]=e.deltaY;G[h+88>>3]=e.deltaZ;D[h+96>>2]=e.deltaMode;N(d)(9,h,b)&&e.preventDefault()},ic:c})}
function jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function lb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function ob(a){a.Tc=a.getExtension("WEBGL_multi_draw")}
var pb=1,qb=[],Q=[],rb=[],R=[],S=[],T=[],sb=[],tb={};function U(a){ub||(ub=a)}function vb(a){for(var b=pb++,c=a.length;c<b;c++)a[c]=null;return b}function wb(a,b){a.nc||(a.nc=a.getContext,a.getContext=function(d,e){e=a.nc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?xb(c,b):0}function xb(a,b){var c=vb(sb),d={Rc:c,attributes:b,version:b.Mc,tc:a};a.canvas&&(a.canvas.Nc=d);sb[c]=d;("undefined"==typeof b.vc||b.vc)&&yb(d);return c}
function yb(a){a||(a=zb);if(!a.Lc){a.Lc=!0;var b=a.tc;jb(b);kb(b);lb(b);b.Qc=b.getExtension("EXT_disjoint_timer_query");ob(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var ub,zb,Ab=["default","low-power","high-performance"],Bb=[null,[],[]];function Cb(a,b,c,d){for(var e=0;e<a;e++){var h=V[c](),g=h&&vb(d);h?(h.name=g,d[g]=h):U(1282);D[b+4*e>>2]=g}}
function Db(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}D[b>>2]=c}else U(1281)}function Eb(a){var b=na(a)+1,c=O(b);C(a,B,c,b);return c}
function Fb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Gb(a,b,c,d,e){a-=5120;a=1==a?B:4==a?D:6==a?F:5==a||28922==a?E:qa;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}function W(a){var b=V.Ic;if(b){var c=b.oc[a];"number"==typeof c&&(b.oc[a]=c=V.getUniformLocation(b,b.Gc[a]+(0<c?"["+c+"]":"")));return c}U(1282)}var X=[],Y=[];
function Hb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);ka=!0}k(a,new w(a))}function Ib(a){var b=na(a)+1,c=Jb(b);C(a,oa,c,b);return c}for(var V,Kb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Kb.subarray(0,Z+1);var Lb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Lb.subarray(0,Z+1);
var Zb={ma:function(){return 0},hb:function(){return 0},ib:function(){},bb:function(){z("")},K:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},R:function(a,b,c){a=M(a);if(!a)return-4;a=Ya(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},E:Za,db:function(a,b,c){B.copyWithin(a,b,b+c)},Ib:function(a,b){function c(d){N(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},cb:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+
.2/c);d=Math.min(d,a+100663296);var e=Math,h=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;a:{var g=ja.buffer;try{ja.grow(h.call(e,2147483648,d)-g.byteLength+65535>>>16);ra();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},W:function(a,b,c,d){ab(a,b,c,d,12,"blur");return 0},H:function(a,b,c){a=M(a);if(!a)return-4;a.width=b;a.height=c;return 0},X:function(a,b,c,d){ab(a,b,c,d,13,"focus");return 0},ea:function(a,b,c,d){bb(a,b,c,d,2,"keydown");return 0},ca:function(a,b,c,d){bb(a,b,c,d,1,"keypress");
return 0},da:function(a,b,c,d){bb(a,b,c,d,3,"keyup");return 0},ka:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},ha:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ga:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ia:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ja:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},Z:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.nc||document.body.xc||document.body.wc))return-1;a=M(a);
if(!a)return-4;db(a,b,c,d,"pointerlockchange");db(a,b,c,d,"mozpointerlockchange");db(a,b,c,d,"webkitpointerlockchange");db(a,b,c,d,"mspointerlockchange");return 0},Y:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.nc||document.body.xc||document.body.wc))return-1;a=M(a);if(!a)return-4;eb(a,b,c,d,"pointerlockerror");eb(a,b,c,d,"mozpointerlockerror");eb(a,b,c,d,"webkitpointerlockerror");eb(a,b,c,d,"mspointerlockerror");return 0},Ka:function(a,b,c,d){fb(a,b,c,d);return 0},
_:function(a,b,c,d){gb(a,b,c,d,25,"touchcancel");return 0},$:function(a,b,c,d){gb(a,b,c,d,23,"touchend");return 0},aa:function(a,b,c,d){gb(a,b,c,d,24,"touchmove");return 0},ba:function(a,b,c,d){gb(a,b,c,d,22,"touchstart");return 0},V:function(a,b,c,d){hb(a,b,c,d,31,"webglcontextlost");return 0},U:function(a,b,c,d){hb(a,b,c,d,32,"webglcontextrestored");return 0},fa:function(a,b,c,d){a=M(a);return"undefined"!=typeof a.onwheel?(ib(a,b,c,d),0):-1},qa:function(a,b){b>>=2;b={alpha:!!D[b],depth:!!D[b+1],
stencil:!!D[b+2],antialias:!!D[b+3],premultipliedAlpha:!!D[b+4],preserveDrawingBuffer:!!D[b+5],powerPreference:Ab[D[b+6]],failIfMajorPerformanceCaveat:!!D[b+7],Mc:D[b+8],Sc:D[b+9],vc:D[b+10],Kc:D[b+11],Uc:D[b+12],Vc:D[b+13]};a=M(a);return!a||b.Kc?0:wb(a,b)},eb:function(a,b){a=sb[a];b=A(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&jb(V);"OES_vertex_array_object"==b&&kb(V);"WEBGL_draw_buffers"==b&&lb(V);"WEBGL_multi_draw"==b&&ob(V);return!!a.tc.getExtension(b)},Eb:function(a){a>>=
2;for(var b=0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},kb:function(a){zb=sb[a];f.Pc=V=zb&&zb.tc;return!a||V?0:-5},la:function(){return 52},gb:function(){return 52},ab:function(){return 70},fb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var g=E[b>>2],m=E[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=B[g+n],r=Bb[a];0===p||10===p?((1===a?ia:x)(ma(r,0)),r.length=0):r.push(p)}e+=m}E[d>>2]=e;return 0},j:function(a,b,c){const d=A(a);console.log("fs_js_load_snapshot: called with",d,b);let e;
try{e=window.indexedDB.open("chips",1)}catch(h){console.log("fs_js_load_snapshot: failed to open IndexedDB with "+h)}e.onupgradeneeded=()=>{console.log("fs_js_load_snapshot: creating db");e.result.createObjectStore("store")};e.onsuccess=()=>{var h=e.result;let g;try{g=h.transaction(["store"],"readwrite")}catch(p){console.log("fs_js_load_snapshot: db.transaction failed with",p);return}h=g.objectStore("store");let m=d+"_"+b,n=h.get(m);n.onsuccess=()=>{if(void 0!==n.result){let p=n.result.length;console.log("fs_js_load_snapshot:",
m,"successfully loaded",p,"bytes");let r=Mb(p);B.set(n.result,r);Nb(c,r,p)}else console.log("fs_js_load_snapshot:",m,"does not exist"),Nb(c,0,0)};n.onerror=()=>{console.log("fs_js_load_snapshot: FAILED loading",m)};g.onerror=()=>{console.log("fs_js_load_snapshot: transaction onerror")}};e.onerror=()=>{console.log("fs_js_load_snapshot: open_request onerror")}},Jb:function(a,b,c,d){const e=A(a);console.log("fs_js_save_snapshot: called with",e,b);let h;try{h=window.indexedDB.open("chips",1)}catch(g){console.log("fs_js_save_snapshot: failed to open IndexedDB with "+
g);return}h.onupgradeneeded=()=>{console.log("fs_js_save_snapshot: creating db");h.result.createObjectStore("store")};h.onsuccess=()=>{console.log("fs_js_save_snapshot: onsuccess");let g=h.result.transaction(["store"],"readwrite");var m=g.objectStore("store");let n=e+"_"+b;m=m.put(B.subarray(c,c+d),n);m.onsuccess=()=>{console.log("fs_js_save_snapshot:",n,"successfully stored")};m.onerror=()=>{console.log("fs_js_save_snapshot: FAILED to store",n)};g.onerror=()=>{console.log("fs_js_save_snapshot: transaction onerror")}};
h.onerror=()=>{console.log("fs_js_save_snapshot: open_request onerror")}},b:function(a){V.activeTexture(a)},J:function(a,b){V.attachShader(Q[a],T[b])},c:function(a,b){V.bindBuffer(a,qb[b])},g:function(a,b){V.bindFramebuffer(a,rb[b])},Ga:function(a,b){V.bindRenderbuffer(a,R[b])},a:function(a,b){V.bindTexture(a,S[b])},O:function(a,b,c,d){V.blendColor(a,b,c,d)},P:function(a,b){V.blendEquationSeparate(a,b)},Q:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},Ia:function(a,b,c,d){V.bufferData(a,c?B.subarray(c,
c+b):b,d)},u:function(a,b,c,d){V.bufferSubData(a,b,B.subarray(d,d+c))},s:function(a){return V.checkFramebufferStatus(a)},Fb:function(a){V.clear(a)},Hb:function(a,b,c,d){V.clearColor(a,b,c,d)},ta:function(a){V.clearDepth(a)},Gb:function(a){V.clearStencil(a)},p:function(a,b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},wa:function(a){V.compileShader(T[a])},Da:function(a,b,c,d,e,h,g,m){V.compressedTexImage2D(a,b,c,d,e,h,m?B.subarray(m,m+g):null)},Ba:function(){var a=vb(Q),b=V.createProgram();b.name=a;b.sc=b.qc=
b.rc=0;b.uc=1;Q[a]=b;return a},ya:function(a){var b=vb(T);T[b]=V.createShader(a);return b},L:function(a){V.cullFace(a)},Oa:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=qb[d];e&&(V.deleteBuffer(e),e.name=0,qb[d]=null)}},d:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],e=rb[d];e&&(V.deleteFramebuffer(e),e.name=0,rb[d]=null)}},q:function(a){if(a){var b=Q[a];b?(V.deleteProgram(b),b.name=0,Q[a]=null):U(1281)}},T:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=R[d];e&&(V.deleteRenderbuffer(e),
e.name=0,R[d]=null)}},y:function(a){if(a){var b=T[a];b?(V.deleteShader(b),T[a]=null):U(1281)}},Na:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=S[d];e&&(V.deleteTexture(e),e.name=0,S[d]=null)}},B:function(a){V.depthFunc(a)},A:function(a){V.depthMask(!!a)},e:function(a){V.disable(a)},S:function(a){V.disableVertexAttribArray(a)},ob:function(a,b,c){V.drawArrays(a,b,c)},pb:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},qb:function(a,b,c,d){V.drawElements(a,b,c,d)},rb:function(a,b,c,d,e){V.drawElementsInstanced(a,
b,c,d,e)},i:function(a){V.enable(a)},Bb:function(a){V.enableVertexAttribArray(a)},n:function(a,b,c,d){V.framebufferRenderbuffer(a,b,c,R[d])},h:function(a,b,c,d,e){V.framebufferTexture2D(a,b,c,S[d],e)},M:function(a){V.frontFace(a)},Ja:function(a,b){Cb(a,b,"createBuffer",qb)},o:function(a,b){Cb(a,b,"createFramebuffer",rb)},Ha:function(a,b){Cb(a,b,"createRenderbuffer",R)},Ea:function(a,b){Cb(a,b,"createTexture",S)},ua:function(a,b){return V.getAttribLocation(Q[a],A(b))},f:function(a,b){Db(a,b)},za:function(a,
b,c,d){a=V.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,B,d,b):0;c&&(D[c>>2]=b)},I:function(a,b,c){if(c)if(a>=pb)U(1281);else if(a=Q[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b){if(!a.sc)for(b=0;b<V.getProgramParameter(a,35718);++b)a.sc=Math.max(a.sc,V.getActiveUniform(a,b).name.length+1);D[c>>2]=a.sc}else if(35722==b){if(!a.qc)for(b=0;b<V.getProgramParameter(a,35721);++b)a.qc=Math.max(a.qc,V.getActiveAttrib(a,b).name.length+
1);D[c>>2]=a.qc}else if(35381==b){if(!a.rc)for(b=0;b<V.getProgramParameter(a,35382);++b)a.rc=Math.max(a.rc,V.getActiveUniformBlockName(a,b).length+1);D[c>>2]=a.rc}else D[c>>2]=V.getProgramParameter(a,b);else U(1281)},va:function(a,b,c,d){a=V.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,B,d,b):0;c&&(D[c>>2]=b)},F:function(a,b,c){c?35716==b?(a=V.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),D[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(T[a]),D[c>>2]=a?a.length+
1:0):D[c>>2]=V.getShaderParameter(T[a],b):U(1281)},Qa:function(a){var b=tb[a];if(!b){switch(a){case 7939:b=V.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Eb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=V.getParameter(a))||U(1280);b=b&&Eb(b);break;case 7938:b=Eb("OpenGL ES 2.0 ("+V.getParameter(7938)+")");break;case 35724:b=V.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b=
"OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Eb(b);break;default:U(1280)}tb[a]=b}return b},t:function(a,b){b=A(b);if(a=Q[a]){var c=a,d=c.oc,e=c.Hc,h;if(!d)for(c.oc=d={},c.Gc={},h=0;h<V.getProgramParameter(c,35718);++h){var g=V.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Fb(m);n=0<n?m.slice(0,n):m;var p=c.uc;c.uc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.Gc[p++]=n}c=a.oc;d=0;e=b;h=Fb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.Hc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,
b)))return d}else U(1281);return-1},Aa:function(a){a=Q[a];V.linkProgram(a);a.oc=0;a.Hc={}},N:function(a,b){V.polygonOffset(a,b)},Fa:function(a,b,c,d){V.renderbufferStorage(a,b,c,d)},r:function(a,b,c,d){V.scissor(a,b,c,d)},xa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?D[d+4*h>>2]:-1;e+=A(D[c+4*h>>2],0>g?void 0:g)}V.shaderSource(T[a],e)},Ma:function(a,b,c){V.stencilFunc(a,b,c)},sa:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},z:function(a){V.stencilMask(a)},La:function(a,b,c){V.stencilOp(a,
b,c)},ra:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},Ca:function(a,b,c,d,e,h,g,m,n){V.texImage2D(a,b,c,d,e,h,g,m,n?Gb(m,g,d,e,n):null)},k:function(a,b,c){V.texParameteri(a,b,c)},nb:function(a,b,c,d,e,h,g,m,n){var p=null;n&&(p=Gb(m,g,e,h,n));V.texSubImage2D(a,b,c,d,e,h,g,m,p)},Ab:function(a,b,c){if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);V.uniform1fv(W(a),d)},G:function(a,b){V.uniform1i(W(a),b)},wb:function(a,b,c){if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=
D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);V.uniform1iv(W(a),d)},zb:function(a,b,c){if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);V.uniform2fv(W(a),d)},vb:function(a,b,c){if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);V.uniform2iv(W(a),d)},yb:function(a,b,c){if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+
8)>>2];else d=F.subarray(c>>2,c+12*b>>2);V.uniform3fv(W(a),d)},ub:function(a,b,c){if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);V.uniform3iv(W(a),d)},xb:function(a,b,c){if(72>=b){var d=X[4*b-1],e=F;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);V.uniform4fv(W(a),d)},tb:function(a,b,c){if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=
4)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2],d[e+3]=D[c+(4*e+12)>>2];else d=D.subarray(c>>2,c+16*b>>2);V.uniform4iv(W(a),d)},sb:function(a,b,c,d){if(18>=b){var e=X[16*b-1],h=F;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=F.subarray(d>>2,d+64*b>>
2);V.uniformMatrix4fv(W(a),!!c,e)},l:function(a){a=Q[a];V.useProgram(a);V.Ic=a},Cb:function(a,b){V.vertexAttribDivisor(a,b)},Db:function(a,b,c,d,e,h){V.vertexAttribPointer(a,b,c,!!d,e,h)},m:function(a,b,c,d){V.viewport(a,b,c,d)},_a:function(){f.Ac=a=>{0!=Ob()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Ac)},Za:function(){f.Fc=a=>{const b=a.clipboardData.getData("text");Fa(()=>{const c=Ib(b);Pb(c)})};window.addEventListener("paste",f.Fc)},Ya:function(a){f.Wc=[];
a=A(a);a=document.getElementById(a);f.Bc=b=>{b.stopPropagation();b.preventDefault()};f.Cc=b=>{b.stopPropagation();b.preventDefault()};f.Dc=b=>{b.stopPropagation();b.preventDefault()};f.Ec=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.Xc=c;Qb(c.length);for(let d=0;d<c.length;d++)Fa(()=>{const e=Ib(c[d].name);Rb(d,e)});Sb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.Bc,!1);a.addEventListener("dragleave",f.Cc,!1);a.addEventListener("dragover",f.Dc,!1);a.addEventListener("drop",
f.Ec,!1)},Sa:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},x:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Tb()});document.body.append(a)},w:function(){document.getElementById("_sokol_app_input_element").focus()},Pa:function(a){a=A(a);f.mc=document.getElementById(a);f.mc||console.log("sokol_app.h: invalid target:"+a);f.mc.requestPointerLock||
console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Xa:function(){window.removeEventListener("beforeunload",f.Ac)},Wa:function(){window.removeEventListener("paste",f.Fc)},Va:function(a){a=A(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.Bc);a.removeEventListener("dragleave",f.Cc);a.removeEventListener("dragover",f.Dc);a.removeEventListener("drop",f.Ec)},D:function(){f.mc&&f.mc.requestPointerLock&&f.mc.requestPointerLock()},Ua:function(a,b){if(f.mc){if(0===
b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}f.mc.style.cursor=a}},Ra:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(B.subarray(c,
c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},v:function(){document.getElementById("_sokol_app_input_element").blur()},Ta:function(a){a=A(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=
1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},jb:function(){return f.lc?f.lc.bufferSize:0},mb:function(a,b,c){f.fc=null;f.lc=null;"undefined"!==typeof AudioContext?f.fc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(f.fc=null,console.log("sokol_audio.h: no WebAudio support"));return f.fc?(console.log("sokol_audio.h: sample rate ",f.fc.sampleRate),f.lc=f.fc.createScriptProcessor(c,0,b),f.lc.onaudioprocess=
d=>{const e=d.outputBuffer.length,h=Ub(e);if(h){const g=d.outputBuffer.numberOfChannels;for(let m=0;m<g;m++){const n=d.outputBuffer.getChannelData(m);for(let p=0;p<e;p++)n[p]=F[(h>>2)+(g*p+m)]}}},f.lc.connect(f.fc.destination),a=()=>{f.fc&&"suspended"===f.fc.state&&f.fc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},lb:function(){return f.fc?f.fc.sampleRate:0},pa:function(){const a=
f.fc;null!==a&&(f.lc&&f.lc.disconnect(),a.close(),f.fc=null,f.lc=null)},$a:function(){if(f.fc)return"suspended"===f.fc.state?1:0},C:function(a,b,c,d,e,h){b=A(b);const g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";const m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(g.readyState==XMLHttpRequest.DONE)if(206==g.status||200==g.status&&!m){const n=new Uint8Array(g.response),p=n.length;p<=h?(B.set(n,e),Vb(a,d,p)):Wb(a)}else Xb(a,g.status)};
g.send()},oa:function(a,b){b=A(b);const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");Yb(a,d)}else Xb(a,c.status)};c.send()},na:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;ja=f.asm.Kb;ra();sa=f.asm.bc;ua.unshift(f.asm.Lb);H--;f.monitorRunDependencies&&f.monitorRunDependencies(H);0==H&&(null!==za&&(clearInterval(za),za=null),I&&(e=I,I=null,e()))}function b(e){a(e.instance)}function c(e){return Da().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){x("failed to asynchronously prepare wasm: "+h);z(h)})}var d={a:Zb};H++;f.monitorRunDependencies&&f.monitorRunDependencies(H);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||Aa()||J.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(J,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Lb).apply(null,arguments)};
var Mb=f._fs_emsc_alloc=function(){return(Mb=f._fs_emsc_alloc=f.asm.Mb).apply(null,arguments)},O=f._malloc=function(){return(O=f._malloc=f.asm.Nb).apply(null,arguments)},Nb=f._fs_emsc_load_snapshot_callback=function(){return(Nb=f._fs_emsc_load_snapshot_callback=f.asm.Ob).apply(null,arguments)},Tb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Tb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Pb).apply(null,arguments)},Pb=f.__sapp_emsc_onpaste=function(){return(Pb=f.__sapp_emsc_onpaste=f.asm.Qb).apply(null,
arguments)},Ob=f.__sapp_html5_get_ask_leave_site=function(){return(Ob=f.__sapp_html5_get_ask_leave_site=f.asm.Rb).apply(null,arguments)},Qb=f.__sapp_emsc_begin_drop=function(){return(Qb=f.__sapp_emsc_begin_drop=f.asm.Sb).apply(null,arguments)},Rb=f.__sapp_emsc_drop=function(){return(Rb=f.__sapp_emsc_drop=f.asm.Tb).apply(null,arguments)},Sb=f.__sapp_emsc_end_drop=function(){return(Sb=f.__sapp_emsc_end_drop=f.asm.Ub).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Vb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Wb).apply(null,arguments)};var Ub=f.__saudio_emsc_pull=function(){return(Ub=f.__saudio_emsc_pull=f.asm.Xb).apply(null,arguments)};f.__sargs_add_kvp=function(){return(f.__sargs_add_kvp=f.asm.Yb).apply(null,arguments)};
var Yb=f.__sfetch_emsc_head_response=function(){return(Yb=f.__sfetch_emsc_head_response=f.asm.Zb).apply(null,arguments)},Vb=f.__sfetch_emsc_get_response=function(){return(Vb=f.__sfetch_emsc_get_response=f.asm._b).apply(null,arguments)},Xb=f.__sfetch_emsc_failed_http_status=function(){return(Xb=f.__sfetch_emsc_failed_http_status=f.asm.$b).apply(null,arguments)},Wb=f.__sfetch_emsc_failed_buffer_too_small=function(){return(Wb=f.__sfetch_emsc_failed_buffer_too_small=f.asm.ac).apply(null,arguments)},Ga=
f.stackSave=function(){return(Ga=f.stackSave=f.asm.cc).apply(null,arguments)},Ha=f.stackRestore=function(){return(Ha=f.stackRestore=f.asm.dc).apply(null,arguments)},Jb=f.stackAlloc=function(){return(Jb=f.stackAlloc=f.asm.ec).apply(null,arguments)};f.___start_em_js=92228;f.___stop_em_js=104984;var $b;I=function ac(){$b||bc();$b||(I=ac)};
function cc(a){var b=f._main;a=a||[];a.unshift(ca);var c=a.length,d=Jb(4*(c+1)),e=d>>2;a.forEach(g=>{D[e++]=Ib(g)});D[e]=0;try{var h=b(c,d);Hb(h)}catch(g){g instanceof w||"unwind"==g||k(1,g)}}
function bc(){function a(){if(!$b&&($b=!0,f.calledRun=!0,!ka)){Ea(ua);Ea(va);if(f.onRuntimeInitialized)f.onRuntimeInitialized();dc&&cc(b);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();xa.unshift(c)}Ea(xa)}}var b=b||ba;if(!(0<H)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)ya();Ea(ta);0<H||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);
a()},1)):a())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var dc=!0;f.noInitialRun&&(dc=!1);bc();
