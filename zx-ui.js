
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",k=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,u,v;
if(ea){var fs=require("fs"),ha=require("path");q=l?ha.dirname(q)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};u=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=f);process.on("uncaughtException",
function(a){if(!(a instanceof w))throw a;});process.on("unhandledRejection",function(a){throw a;});k=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof w||x("exiting due to exception: "+b);process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ia=f.print||console.log.bind(console),x=f.printErr||console.warn.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);
f.thisProgram&&(ca=f.thisProgram);f.quit&&(k=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ja("no native wasm support detected");var ka,la=!1,ma="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function na(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&ma)return ma.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function z(a,b){return a?na(A,a,b):""}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function oa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var pa,A,qa,ra,C,D,E,F;function sa(){var a=ka.buffer;f.HEAP8=pa=new Int8Array(a);f.HEAP16=qa=new Int16Array(a);f.HEAP32=C=new Int32Array(a);f.HEAPU8=A=new Uint8Array(a);f.HEAPU16=ra=new Uint16Array(a);f.HEAPU32=D=new Uint32Array(a);f.HEAPF32=E=new Float32Array(a);f.HEAPF64=F=new Float64Array(a)}var ta,ua=[],va=[],wa=[],xa=[],ya=[];
function za(){var a=f.preRun.shift();ua.unshift(a)}var G=0,Aa=null,H=null;function ja(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";x(a);la=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ba(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="zx-ui.wasm";if(!Ba()){var Ca=I;I=f.locateFile?f.locateFile(Ca,q):q+Ca}
function Da(){var a=I;try{if(a==I&&y)return new Uint8Array(y);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){ja(b)}}
function Ea(){if(!y&&(da||l)){if("function"==typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Da()});if(u)return new Promise(function(a,b){u(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Da()})}function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Fa(a){for(;0<a.length;)a.shift()(f)}function Ga(a){var b=Ha();a();Ia(b)}var Ja=0;function Ka(){for(var a=J.length-1;0<=a;--a)La(a);J=[];Ma=[]}var Ma=[];function Na(){if(Ja&&Oa.rc)for(var a=0;a<Ma.length;++a){var b=Ma[a];Ma.splice(a,1);--a;b.$c.apply(null,b.Rc)}}var J=[];function La(a){var b=J[a];b.target.removeEventListener(b.jc,b.Mc,b.kc);J.splice(a,1)}
function K(a){function b(d){++Ja;Oa=a;Na();a.mc(d);Na();--Ja}if(a.lc)a.Mc=b,a.target.addEventListener(a.jc,b,a.kc),J.push(a),Pa||(xa.push(Ka),Pa=!0);else for(var c=0;c<J.length;++c)J[c].target==a.target&&J[c].jc==a.jc&&La(c--)}function Qa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Pa,Oa,Ra,Sa,Ta,Ua,Va,Wa,Xa,Ya=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function L(a){a=2<a?z(a):a;return Ya[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Za(a){return 0>Ya.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var $a;$a=ea?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();var ab=[];function M(a){var b=ab[a];b||(a>=ab.length&&(ab.length=a+1),ab[a]=b=ta.get(a));return b}
function bb(a,b,c,d,e,h){Ra||(Ra=N(256));a={target:L(a),jc:h,lc:d,mc:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ra;B(Qa(g.target),A,n+0,128);B(m,A,n+128,128);M(d)(e,n,b)&&g.preventDefault()},kc:c};K(a)}
function cb(a,b,c,d,e,h){Sa||(Sa=N(176));a={target:L(a),rc:!0,jc:h,lc:d,mc:function(g){var m=Sa;F[m>>3]=g.timeStamp;var n=m>>2;C[n+2]=g.location;C[n+3]=g.ctrlKey;C[n+4]=g.shiftKey;C[n+5]=g.altKey;C[n+6]=g.metaKey;C[n+7]=g.repeat;C[n+8]=g.charCode;C[n+9]=g.keyCode;C[n+10]=g.which;B(g.key||"",A,m+44,32);B(g.code||"",A,m+76,32);B(g.char||"",A,m+108,32);B(g.locale||"",A,m+140,32);M(d)(e,m,b)&&g.preventDefault()},kc:c};K(a)}
function db(a,b,c){F[a>>3]=b.timeStamp;a>>=2;C[a+2]=b.screenX;C[a+3]=b.screenY;C[a+4]=b.clientX;C[a+5]=b.clientY;C[a+6]=b.ctrlKey;C[a+7]=b.shiftKey;C[a+8]=b.altKey;C[a+9]=b.metaKey;qa[2*a+20]=b.button;qa[2*a+21]=b.buttons;C[a+11]=b.movementX;C[a+12]=b.movementY;c=Za(c);C[a+13]=b.clientX-c.left;C[a+14]=b.clientY-c.top}
function O(a,b,c,d,e,h){Ta||(Ta=N(72));a=L(a);K({target:a,rc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,jc:h,lc:d,mc:function(g){g=g||event;db(Ta,g,a);M(d)(e,Ta,b)&&g.preventDefault()},kc:c})}function eb(a,b,c,d,e){Ua||(Ua=N(260));K({target:a,jc:e,lc:d,mc:function(h){h=h||event;var g=Ua,m=document.pointerLockElement||document.pc||document.Ac||document.zc;C[g>>2]=!!m;var n=m&&m.id?m.id:"";B(Qa(m),A,g+4,128);B(n,A,g+132,128);M(d)(20,g,b)&&h.preventDefault()},kc:c})}
function fb(a,b,c,d,e){K({target:a,jc:e,lc:d,mc:function(h){h=h||event;M(d)(38,0,b)&&h.preventDefault()},kc:c})}
function gb(a,b,c,d){Va||(Va=N(36));a=L(a);K({target:a,jc:"resize",lc:d,mc:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Va;C[g>>2]=e.detail;C[g+4>>2]=h.clientWidth;C[g+8>>2]=h.clientHeight;C[g+12>>2]=innerWidth;C[g+16>>2]=innerHeight;C[g+20>>2]=outerWidth;C[g+24>>2]=outerHeight;C[g+28>>2]=pageXOffset;C[g+32>>2]=pageYOffset;M(d)(10,g,b)&&e.preventDefault()}}},kc:c})}
function hb(a,b,c,d,e,h){Wa||(Wa=N(1696));a=L(a);K({target:a,rc:"touchstart"==h||"touchend"==h,jc:h,lc:d,mc:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.yc=m.Bc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.yc=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].Bc=1;p=Wa;F[p>>3]=g.timeStamp;var t=p>>2;C[t+3]=g.ctrlKey;C[t+4]=g.shiftKey;C[t+5]=g.altKey;C[t+6]=g.metaKey;t+=7;var nb=Za(a),ob=0;for(r in n)if(m=
n[r],C[t]=m.identifier,C[t+1]=m.screenX,C[t+2]=m.screenY,C[t+3]=m.clientX,C[t+4]=m.clientY,C[t+5]=m.pageX,C[t+6]=m.pageY,C[t+7]=m.yc,C[t+8]=m.Bc,C[t+9]=m.clientX-nb.left,C[t+10]=m.clientY-nb.top,t+=13,31<++ob)break;C[p+8>>2]=ob;M(d)(e,p,b)&&g.preventDefault()},kc:c})}function ib(a,b,c,d,e,h){a={target:L(a),jc:h,lc:d,mc:function(g){g=g||event;M(d)(e,0,b)&&g.preventDefault()},kc:c};K(a)}
function jb(a,b,c,d){Xa||(Xa=N(104));K({target:a,rc:!0,jc:"wheel",lc:d,mc:function(e){e=e||event;var h=Xa;db(h,e,a);F[h+72>>3]=e.deltaX;F[h+80>>3]=e.deltaY;F[h+88>>3]=e.deltaZ;C[h+96>>2]=e.deltaMode;M(d)(9,h,b)&&e.preventDefault()},kc:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function pb(a){a.Wc=a.getExtension("WEBGL_multi_draw")}
var qb=1,rb=[],P=[],sb=[],Q=[],R=[],S=[],tb=[],ub={};function T(a){vb||(vb=a)}function wb(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}function xb(a,b){a.pc||(a.pc=a.getContext,a.getContext=function(d,e){e=a.pc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?yb(c,b):0}function yb(a,b){var c=wb(tb),d={Uc:c,attributes:b,version:b.Pc,vc:a};a.canvas&&(a.canvas.Qc=d);tb[c]=d;("undefined"==typeof b.xc||b.xc)&&zb(d);return c}
function zb(a){a||(a=Ab);if(!a.Oc){a.Oc=!0;var b=a.vc;kb(b);lb(b);mb(b);b.Tc=b.getExtension("EXT_disjoint_timer_query");pb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var vb,Ab,Bb=["default","low-power","high-performance"],Cb=[null,[],[]];function Db(a,b,c,d){for(var e=0;e<a;e++){var h=U[c](),g=h&&wb(d);h?(h.name=g,d[g]=h):T(1282);C[b+4*e>>2]=g}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:T(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:T(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}C[b>>2]=c}else T(1281)}function Fb(a){var b=oa(a)+1,c=N(b);B(a,A,c,b);return c}
function Gb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Hb(a,b,c,d,e){a-=5120;a=1==a?A:4==a?C:6==a?E:5==a||28922==a?D:ra;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}function V(a){var b=U.Lc;if(b){var c=b.qc[a];"number"==typeof c&&(b.qc[a]=c=U.getUniformLocation(b,b.Jc[a]+(0<c?"["+c+"]":"")));return c}T(1282)}var W=[],X=[];
function Ib(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);la=!0}k(a,new w(a))}function Y(a){var b=oa(a)+1,c=Jb(b);B(a,pa,c,b);return c}for(var U,Kb=new Float32Array(288),Z=0;288>Z;++Z)W[Z]=Kb.subarray(0,Z+1);var Lb=new Int32Array(288);for(Z=0;288>Z;++Z)X[Z]=Lb.subarray(0,Z+1);
var ac={la:function(){return 0},kb:function(){return 0},lb:function(){},eb:function(){ja("")},sa:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},I:function(a,b,c){a=L(a);if(!a)return-4;a=Za(a);F[b>>3]=a.width;F[c>>3]=a.height;return 0},E:$a,gb:function(a,b,c){A.copyWithin(a,b,b+c)},qb:function(a,b){function c(d){M(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},fb:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*
(1+.2/c);d=Math.min(d,a+100663296);var e=Math,h=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;a:{var g=ka.buffer;try{ka.grow(h.call(e,2147483648,d)-g.byteLength+65535>>>16);sa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},U:function(a,b,c,d){bb(a,b,c,d,12,"blur");return 0},pa:function(a,b,c){a=L(a);if(!a)return-4;a.width=b;a.height=c;return 0},V:function(a,b,c,d){bb(a,b,c,d,13,"focus");return 0},ca:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},aa:function(a,b,c,d){cb(a,b,c,d,
1,"keypress");return 0},ba:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},ia:function(a,b,c,d){O(a,b,c,d,5,"mousedown");return 0},fa:function(a,b,c,d){O(a,b,c,d,33,"mouseenter");return 0},ea:function(a,b,c,d){O(a,b,c,d,34,"mouseleave");return 0},ga:function(a,b,c,d){O(a,b,c,d,8,"mousemove");return 0},ha:function(a,b,c,d){O(a,b,c,d,6,"mouseup");return 0},X:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.pc||document.body.Ac||document.body.zc))return-1;
a=L(a);if(!a)return-4;eb(a,b,c,d,"pointerlockchange");eb(a,b,c,d,"mozpointerlockchange");eb(a,b,c,d,"webkitpointerlockchange");eb(a,b,c,d,"mspointerlockchange");return 0},W:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.pc||document.body.Ac||document.body.zc))return-1;a=L(a);if(!a)return-4;fb(a,b,c,d,"pointerlockerror");fb(a,b,c,d,"mozpointerlockerror");fb(a,b,c,d,"webkitpointerlockerror");fb(a,b,c,d,"mspointerlockerror");return 0},Lb:function(a,b,c,d){gb(a,b,c,
d);return 0},Y:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");return 0},Z:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},_:function(a,b,c,d){hb(a,b,c,d,24,"touchmove");return 0},$:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},T:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},S:function(a,b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},da:function(a,b,c,d){a=L(a);return"undefined"!=typeof a.onwheel?(jb(a,b,c,d),0):-1},ja:function(a,b){b>>=2;b={alpha:!!C[b],depth:!!C[b+
1],stencil:!!C[b+2],antialias:!!C[b+3],premultipliedAlpha:!!C[b+4],preserveDrawingBuffer:!!C[b+5],powerPreference:Bb[C[b+6]],failIfMajorPerformanceCaveat:!!C[b+7],Pc:C[b+8],Vc:C[b+9],xc:C[b+10],Nc:C[b+11],Xc:C[b+12],Yc:C[b+13]};a=L(a);return!a||b.Nc?0:xb(a,b)},bb:function(a,b){a=tb[a];b=z(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(U);"OES_vertex_array_object"==b&&lb(U);"WEBGL_draw_buffers"==b&&mb(U);"WEBGL_multi_draw"==b&&pb(U);return!!a.vc.getExtension(b)},jb:function(a){a>>=
2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},cb:function(a){Ab=tb[a];f.Sc=U=Ab&&Ab.vc;return!a||U?0:-5},ka:function(){return 52},ib:function(){return 52},db:function(){return 70},hb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var g=D[b>>2],m=D[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=A[g+n],r=Cb[a];0===p||10===p?((1===a?ia:x)(na(r,0)),r.length=0):r.push(p)}e+=m}D[d>>2]=e;return 0},j:function(a,b,c){const d=z(a);console.log("fs_js_load_snapshot: called with",d,b);let e;
try{e=window.indexedDB.open("chips",1)}catch(h){console.log("fs_js_load_snapshot: failed to open IndexedDB with "+h)}e.onupgradeneeded=()=>{console.log("fs_js_load_snapshot: creating db");e.result.createObjectStore("store")};e.onsuccess=()=>{var h=e.result;let g;try{g=h.transaction(["store"],"readwrite")}catch(p){console.log("fs_js_load_snapshot: db.transaction failed with",p);return}h=g.objectStore("store");let m=d+"_"+b,n=h.get(m);n.onsuccess=()=>{if(void 0!==n.result){let p=n.result.length;console.log("fs_js_load_snapshot:",
m,"successfully loaded",p,"bytes");let r=Mb(p);A.set(n.result,r);Nb(c,r,p)}else console.log("fs_js_load_snapshot:",m,"does not exist"),Nb(c,0,0)};n.onerror=()=>{console.log("fs_js_load_snapshot: FAILED loading",m)};g.onerror=()=>{console.log("fs_js_load_snapshot: transaction onerror")}};e.onerror=()=>{console.log("fs_js_load_snapshot: open_request onerror")}},Mb:function(a,b,c,d){const e=z(a);console.log("fs_js_save_snapshot: called with",e,b);let h;try{h=window.indexedDB.open("chips",1)}catch(g){console.log("fs_js_save_snapshot: failed to open IndexedDB with "+
g);return}h.onupgradeneeded=()=>{console.log("fs_js_save_snapshot: creating db");h.result.createObjectStore("store")};h.onsuccess=()=>{console.log("fs_js_save_snapshot: onsuccess");let g=h.result.transaction(["store"],"readwrite");var m=g.objectStore("store");let n=e+"_"+b;m=m.put(A.subarray(c,c+d),n);m.onsuccess=()=>{console.log("fs_js_save_snapshot:",n,"successfully stored")};m.onerror=()=>{console.log("fs_js_save_snapshot: FAILED to store",n)};g.onerror=()=>{console.log("fs_js_save_snapshot: transaction onerror")}};
h.onerror=()=>{console.log("fs_js_save_snapshot: open_request onerror")}},b:function(a){U.activeTexture(a)},J:function(a,b){U.attachShader(P[a],S[b])},c:function(a,b){U.bindBuffer(a,rb[b])},h:function(a,b){U.bindFramebuffer(a,sb[b])},Fa:function(a,b){U.bindRenderbuffer(a,Q[b])},a:function(a,b){U.bindTexture(a,R[b])},N:function(a,b,c,d){U.blendColor(a,b,c,d)},O:function(a,b){U.blendEquationSeparate(a,b)},P:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},Ia:function(a,b,c,d){U.bufferData(a,c?A.subarray(c,
c+b):b,d)},u:function(a,b,c,d){U.bufferSubData(a,b,A.subarray(d,d+c))},r:function(a){return U.checkFramebufferStatus(a)},Hb:function(a){U.clear(a)},Jb:function(a,b,c,d){U.clearColor(a,b,c,d)},ta:function(a){U.clearDepth(a)},Ib:function(a){U.clearStencil(a)},o:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},va:function(a){U.compileShader(S[a])},Ca:function(a,b,c,d,e,h,g,m){U.compressedTexImage2D(a,b,c,d,e,h,m?A.subarray(m,m+g):null)},Aa:function(){var a=wb(P),b=U.createProgram();b.name=a;b.uc=b.sc=
b.tc=0;b.wc=1;P[a]=b;return a},xa:function(a){var b=wb(S);S[b]=U.createShader(a);return b},K:function(a){U.cullFace(a)},Oa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=rb[d];e&&(U.deleteBuffer(e),e.name=0,rb[d]=null)}},d:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],e=sb[d];e&&(U.deleteFramebuffer(e),e.name=0,sb[d]=null)}},p:function(a){if(a){var b=P[a];b?(U.deleteProgram(b),b.name=0,P[a]=null):T(1281)}},R:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=Q[d];e&&(U.deleteRenderbuffer(e),
e.name=0,Q[d]=null)}},y:function(a){if(a){var b=S[a];b?(U.deleteShader(b),S[a]=null):T(1281)}},Na:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=R[d];e&&(U.deleteTexture(e),e.name=0,R[d]=null)}},C:function(a){U.depthFunc(a)},B:function(a){U.depthMask(!!a)},e:function(a){U.disable(a)},Q:function(a){U.disableVertexAttribArray(a)},rb:function(a,b,c){U.drawArrays(a,b,c)},sb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},tb:function(a,b,c,d){U.drawElements(a,b,c,d)},ub:function(a,b,c,d,e){U.drawElementsInstanced(a,
b,c,d,e)},i:function(a){U.enable(a)},Eb:function(a){U.enableVertexAttribArray(a)},n:function(a,b,c,d){U.framebufferRenderbuffer(a,b,c,Q[d])},g:function(a,b,c,d,e){U.framebufferTexture2D(a,b,c,R[d],e)},L:function(a){U.frontFace(a)},Ja:function(a,b){Db(a,b,"createBuffer",rb)},s:function(a,b){Db(a,b,"createFramebuffer",sb)},Ga:function(a,b){Db(a,b,"createRenderbuffer",Q)},Da:function(a,b){Db(a,b,"createTexture",R)},Kb:function(a,b){return U.getAttribLocation(P[a],z(b))},f:function(a,b){Eb(a,b)},ya:function(a,
b,c,d){a=U.getProgramInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,A,d,b):0;c&&(C[c>>2]=b)},H:function(a,b,c){if(c)if(a>=qb)T(1281);else if(a=P[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b){if(!a.uc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.uc=Math.max(a.uc,U.getActiveUniform(a,b).name.length+1);C[c>>2]=a.uc}else if(35722==b){if(!a.sc)for(b=0;b<U.getProgramParameter(a,35721);++b)a.sc=Math.max(a.sc,U.getActiveAttrib(a,b).name.length+
1);C[c>>2]=a.sc}else if(35381==b){if(!a.tc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.tc=Math.max(a.tc,U.getActiveUniformBlockName(a,b).length+1);C[c>>2]=a.tc}else C[c>>2]=U.getProgramParameter(a,b);else T(1281)},ua:function(a,b,c,d){a=U.getShaderInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,A,d,b):0;c&&(C[c>>2]=b)},F:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(S[a]),null===a&&(a="(unknown error)"),C[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(S[a]),C[c>>2]=a?a.length+
1:0):C[c>>2]=U.getShaderParameter(S[a],b):T(1281)},Pa:function(a){var b=ub[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Fb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||T(1280);b=b&&Fb(b);break;case 7938:b=Fb("OpenGL ES 2.0 ("+U.getParameter(7938)+")");break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b=
"OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Fb(b);break;default:T(1280)}ub[a]=b}return b},t:function(a,b){b=z(b);if(a=P[a]){var c=a,d=c.qc,e=c.Kc,h;if(!d)for(c.qc=d={},c.Jc={},h=0;h<U.getProgramParameter(c,35718);++h){var g=U.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Gb(m);n=0<n?m.slice(0,n):m;var p=c.wc;c.wc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.Jc[p++]=n}c=a.qc;d=0;e=b;h=Gb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.Kc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,
b)))return d}else T(1281);return-1},za:function(a){a=P[a];U.linkProgram(a);a.qc=0;a.Kc={}},M:function(a,b){U.polygonOffset(a,b)},Ea:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},q:function(a,b,c,d){U.scissor(a,b,c,d)},wa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?C[d+4*h>>2]:-1;e+=z(C[c+4*h>>2],0>g?void 0:g)}U.shaderSource(S[a],e)},La:function(a,b,c){U.stencilFunc(a,b,c)},ra:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},A:function(a){U.stencilMask(a)},Ka:function(a,b,c){U.stencilOp(a,
b,c)},qa:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},Ba:function(a,b,c,d,e,h,g,m,n){U.texImage2D(a,b,c,d,e,h,g,m,n?Hb(m,g,d,e,n):null)},k:function(a,b,c){U.texParameteri(a,b,c)},pb:function(a,b,c,d,e,h,g,m,n){var p=null;n&&(p=Hb(m,g,e,h,n));U.texSubImage2D(a,b,c,d,e,h,g,m,p)},Db:function(a,b,c){if(288>=b)for(var d=W[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1fv(V(a),d)},G:function(a,b){U.uniform1i(V(a),b)},zb:function(a,b,c){if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=
C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);U.uniform1iv(V(a),d)},Cb:function(a,b,c){if(144>=b)for(var d=W[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2fv(V(a),d)},yb:function(a,b,c){if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);U.uniform2iv(V(a),d)},Bb:function(a,b,c){if(96>=b)for(var d=W[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+
8)>>2];else d=E.subarray(c>>2,c+12*b>>2);U.uniform3fv(V(a),d)},xb:function(a,b,c){if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);U.uniform3iv(V(a),d)},Ab:function(a,b,c){if(72>=b){var d=W[4*b-1],e=E;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=E.subarray(c>>2,c+16*b>>2);U.uniform4fv(V(a),d)},wb:function(a,b,c){if(72>=b)for(var d=X[4*b-1],e=0;e<4*b;e+=
4)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2],d[e+3]=C[c+(4*e+12)>>2];else d=C.subarray(c>>2,c+16*b>>2);U.uniform4iv(V(a),d)},vb:function(a,b,c,d){if(18>=b){var e=W[16*b-1],h=E;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=E.subarray(d>>2,d+64*b>>
2);U.uniformMatrix4fv(V(a),!!c,e)},l:function(a){a=P[a];U.useProgram(a);U.Lc=a},Fb:function(a,b){U.vertexAttribDivisor(a,b)},Gb:function(a,b,c,d,e,h){U.vertexAttribPointer(a,b,c,!!d,e,h)},m:function(a,b,c,d){U.viewport(a,b,c,d)},_a:function(){f.Cc=a=>{0!=Ob()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Cc)},Za:function(){f.Ic=a=>{const b=a.clipboardData.getData("text");Ga(()=>{const c=Y(b);Pb(c)})};window.addEventListener("paste",f.Ic)},Ya:function(a){f.Zc=[];
a=z(a);a=document.getElementById(a);f.Dc=b=>{b.stopPropagation();b.preventDefault()};f.Ec=b=>{b.stopPropagation();b.preventDefault()};f.Fc=b=>{b.stopPropagation();b.preventDefault()};f.Gc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.Hc=c;Qb(c.length);for(let d=0;d<c.length;d++)Ga(()=>{const e=Y(c[d].name);Rb(d,e)});Sb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.Dc,!1);a.addEventListener("dragleave",f.Ec,!1);a.addEventListener("dragover",f.Fc,!1);a.addEventListener("drop",
f.Gc,!1)},Sa:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},x:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Tb()});document.body.append(a)},ab:function(a){const b=f.Hc;return 0>a||a>=b.length?0:b[a].size},$a:function(a,b,c,d,e){const h=new FileReader;h.onload=g=>{g=g.target.result;g.byteLength>d?Ub(a,0,1,b,0,c,d,e):(A.set(new Uint8Array(g),
c),Ub(a,1,0,b,g.byteLength,c,d,e))};h.onerror=()=>{Ub(a,0,2,b,0,c,d,e)};h.readAsArrayBuffer(f.Hc[a])},w:function(){document.getElementById("_sokol_app_input_element").focus()},Ha:function(a){a=z(a);f.oc=document.getElementById(a);f.oc||console.log("sokol_app.h: invalid target:"+a);f.oc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Xa:function(){window.removeEventListener("beforeunload",f.Cc)},Wa:function(){window.removeEventListener("paste",f.Ic)},Va:function(a){a=
z(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.Dc);a.removeEventListener("dragleave",f.Ec);a.removeEventListener("dragover",f.Fc);a.removeEventListener("drop",f.Gc)},D:function(){f.oc&&f.oc.requestPointerLock&&f.oc.requestPointerLock()},Ua:function(a,b){if(f.oc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a=
"nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}f.oc.style.cursor=a}},Qa:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(A.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},v:function(){document.getElementById("_sokol_app_input_element").blur()},
Ta:function(a){a=z(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Ma:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=
a.next()){const c=b.value[0],d=b.value[1];Ga(()=>{const e=Y(c),h=Y(d);Vb(e,h)})}},mb:function(){return f.nc?f.nc.bufferSize:0},ob:function(a,b,c){f.ic=null;f.nc=null;"undefined"!==typeof AudioContext?f.ic=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(f.ic=null,console.log("sokol_audio.h: no WebAudio support"));return f.ic?(console.log("sokol_audio.h: sample rate ",f.ic.sampleRate),f.nc=f.ic.createScriptProcessor(c,0,b),f.nc.onaudioprocess=d=>{const e=d.outputBuffer.length,h=Wb(e);if(h){const g=
d.outputBuffer.numberOfChannels;for(let m=0;m<g;m++){const n=d.outputBuffer.getChannelData(m);for(let p=0;p<e;p++)n[p]=E[(h>>2)+(g*p+m)]}}},f.nc.connect(f.ic.destination),a=()=>{f.ic&&"suspended"===f.ic.state&&f.ic.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},nb:function(){return f.ic?f.ic.sampleRate:0},oa:function(){const a=f.ic;null!==a&&(f.nc&&f.nc.disconnect(),a.close(),f.ic=
null,f.nc=null)},Ra:function(){if(f.ic)return"suspended"===f.ic.state?1:0},z:function(a,b,c,d,e,h){b=z(b);const g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";const m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(g.readyState==XMLHttpRequest.DONE)if(206==g.status||200==g.status&&!m){const n=new Uint8Array(g.response),p=n.length;p<=h?(A.set(n,e),Xb(a,d,p)):Yb(a)}else Zb(a,g.status)};g.send()},na:function(a,b){b=z(b);const c=new XMLHttpRequest;
c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");$b(a,d)}else Zb(a,c.status)};c.send()},ma:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;ka=f.asm.Nb;sa();ta=f.asm.ec;va.unshift(f.asm.Ob);G--;f.monitorRunDependencies&&f.monitorRunDependencies(G);0==G&&(null!==Aa&&(clearInterval(Aa),Aa=null),H&&(e=H,H=null,e()))}function b(e){a(e.instance)}function c(e){return Ea().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){x("failed to asynchronously prepare wasm: "+h);ja(h)})}var d={a:ac};G++;f.monitorRunDependencies&&f.monitorRunDependencies(G);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||Ba()||I.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Ob).apply(null,arguments)};
var Mb=f._fs_emsc_alloc=function(){return(Mb=f._fs_emsc_alloc=f.asm.Pb).apply(null,arguments)},N=f._malloc=function(){return(N=f._malloc=f.asm.Qb).apply(null,arguments)},Nb=f._fs_emsc_load_snapshot_callback=function(){return(Nb=f._fs_emsc_load_snapshot_callback=f.asm.Rb).apply(null,arguments)},Tb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Tb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Sb).apply(null,arguments)},Pb=f.__sapp_emsc_onpaste=function(){return(Pb=f.__sapp_emsc_onpaste=f.asm.Tb).apply(null,
arguments)},Ob=f.__sapp_html5_get_ask_leave_site=function(){return(Ob=f.__sapp_html5_get_ask_leave_site=f.asm.Ub).apply(null,arguments)},Qb=f.__sapp_emsc_begin_drop=function(){return(Qb=f.__sapp_emsc_begin_drop=f.asm.Vb).apply(null,arguments)},Rb=f.__sapp_emsc_drop=function(){return(Rb=f.__sapp_emsc_drop=f.asm.Wb).apply(null,arguments)},Sb=f.__sapp_emsc_end_drop=function(){return(Sb=f.__sapp_emsc_end_drop=f.asm.Xb).apply(null,arguments)},Ub=f.__sapp_emsc_invoke_fetch_cb=function(){return(Ub=f.__sapp_emsc_invoke_fetch_cb=
f.asm.Yb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Zb).apply(null,arguments)};
var Wb=f.__saudio_emsc_pull=function(){return(Wb=f.__saudio_emsc_pull=f.asm._b).apply(null,arguments)},Vb=f.__sargs_add_kvp=function(){return(Vb=f.__sargs_add_kvp=f.asm.$b).apply(null,arguments)},$b=f.__sfetch_emsc_head_response=function(){return($b=f.__sfetch_emsc_head_response=f.asm.ac).apply(null,arguments)},Xb=f.__sfetch_emsc_get_response=function(){return(Xb=f.__sfetch_emsc_get_response=f.asm.bc).apply(null,arguments)},Zb=f.__sfetch_emsc_failed_http_status=function(){return(Zb=f.__sfetch_emsc_failed_http_status=
f.asm.cc).apply(null,arguments)},Yb=f.__sfetch_emsc_failed_buffer_too_small=function(){return(Yb=f.__sfetch_emsc_failed_buffer_too_small=f.asm.dc).apply(null,arguments)},Ha=f.stackSave=function(){return(Ha=f.stackSave=f.asm.fc).apply(null,arguments)},Ia=f.stackRestore=function(){return(Ia=f.stackRestore=f.asm.gc).apply(null,arguments)},Jb=f.stackAlloc=function(){return(Jb=f.stackAlloc=f.asm.hc).apply(null,arguments)};f.___start_em_js=92260;f.___stop_em_js=105016;var bc;
H=function cc(){bc||dc();bc||(H=cc)};function ec(a){var b=f._main;a=a||[];a.unshift(ca);var c=a.length,d=Jb(4*(c+1)),e=d>>2;a.forEach(g=>{C[e++]=Y(g)});C[e]=0;try{var h=b(c,d);Ib(h)}catch(g){g instanceof w||"unwind"==g||k(1,g)}}
function dc(){function a(){if(!bc&&(bc=!0,f.calledRun=!0,!la)){Fa(va);Fa(wa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();fc&&ec(b);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();ya.unshift(c)}Fa(ya)}}var b=b||ba;if(!(0<G)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)za();Fa(ua);0<G||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);
a()},1)):a())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var fc=!0;f.noInitialRun&&(fc=!1);dc();
