
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign,ba=aa({},f),ca=[],da="./this.program",k=(a,b)=>{throw b;},ea="object"===typeof window,l="function"===typeof importScripts,fa="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node,q="",ha,u,v,fs,w,ia;
if(fa)q=l?require("path").dirname(q)+"/":__dirname+"/",ia=function(){w||(fs=require("fs"),w=require("path"))},ha=function(a,b){ia();a=w.normalize(a);return fs.readFileSync(a,b?null:"utf8")},v=function(a){a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a},u=function(a,b,c){ia();a=w.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,"/")),ca=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",
function(a){if(!(a instanceof x))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=(a,b)=>{if(noExitRuntime||0<ja)throw process.exitCode=a,b;b instanceof x||y("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea||l)l?q=self.location.href:"undefined"!==typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ha=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(v=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var y=f.printErr||console.warn.bind(console);aa(f,ba);
ba=null;f.arguments&&(ca=f.arguments);f.thisProgram&&(da=f.thisProgram);f.quit&&(k=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&ka("no native wasm support detected");var la,ma=!1;
function na(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var t=(n.length<<2)+1;p=A(t);B(n,C,p,t)}return p},array:function(n){var p=A(n.length);oa.set(n,p);return p}};a=f["_"+a];var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=pa()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&qa(h);return n}(b)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a,b){if(a){var c=C,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ra)a=ra.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=A(b);B(a,oa,c,b);return c}var ua,oa,C,va,wa,E,xa,F,G;
function ya(){var a=la.buffer;ua=a;f.HEAP8=oa=new Int8Array(a);f.HEAP16=va=new Int16Array(a);f.HEAP32=E=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=wa=new Uint16Array(a);f.HEAPU32=xa=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}var za,Aa=[],Ba=[],Ca=[],Da=[],Ea=[],ja=0;function Fa(){var a=f.preRun.shift();Aa.unshift(a)}var H=0,Ga=null,I=null;f.preloadedImages={};f.preloadedAudios={};
function ka(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";y(a);ma=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ha(){return J.startsWith("data:application/octet-stream;base64,")}var J;J="vic20.wasm";if(!Ha()){var Ia=J;J=f.locateFile?f.locateFile(Ia,q):q+Ia}function Ja(){var a=J;try{if(a==J&&z)return new Uint8Array(z);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){ka(b)}}
function Ka(){if(!z&&(ea||l)){if("function"===typeof fetch&&!J.startsWith("file://"))return fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ja()});if(u)return new Promise(function(a,b){u(J,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ja()})}
function La(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Jc;"number"===typeof c?void 0===b.ic?K(c)():K(c)(b.ic):c(void 0===b.ic?null:b.ic)}}}var Ma=[];function K(a){var b=Ma[a];b||(a>=Ma.length&&(Ma.length=a+1),Ma[a]=b=za.get(a));return b}var Na=0;function Oa(){for(var a=L.length-1;0<=a;--a)Pa(a);L=[];Qa=[]}var Qa=[];function Ra(){if(Na&&Sa.cc)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.Qc.apply(null,b.Gc)}}var L=[];
function Pa(a){var b=L[a];b.target.removeEventListener(b.Wb,b.Bc,b.Xb);L.splice(a,1)}function M(a){function b(d){++Na;Sa=a;Ra();a.Zb(d);Ra();--Na}if(a.Yb)a.Bc=b,a.target.addEventListener(a.Wb,b,a.Xb),L.push(a),Ta||(Da.push(Oa),Ta=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Wb==a.Wb&&Pa(c--)}function Ua(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ta,Sa,Va,Wa,Xa,Ya,Za,$a,ab,bb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function N(a){a=2<a?D(a):a;return bb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var db;db=fa?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();
function eb(a,b,c,d,e,h){Va||(Va=O(256));a={target:N(a),Wb:h,Yb:d,Zb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Va;B(Ua(g.target),C,n+0,128);B(m,C,n+128,128);K(d)(e,n,b)&&g.preventDefault()},Xb:c};M(a)}
function fb(a,b,c,d,e,h){Wa||(Wa=O(176));a={target:N(a),cc:!0,Wb:h,Yb:d,Zb:function(g){var m=Wa;G[m>>3]=g.timeStamp;var n=m>>2;E[n+2]=g.location;E[n+3]=g.ctrlKey;E[n+4]=g.shiftKey;E[n+5]=g.altKey;E[n+6]=g.metaKey;E[n+7]=g.repeat;E[n+8]=g.charCode;E[n+9]=g.keyCode;E[n+10]=g.which;B(g.key||"",C,m+44,32);B(g.code||"",C,m+76,32);B(g.char||"",C,m+108,32);B(g.locale||"",C,m+140,32);K(d)(e,m,b)&&g.preventDefault()},Xb:c};M(a)}
function gb(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;va[2*a+20]=b.button;va[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=cb(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,h){Xa||(Xa=O(72));a=N(a);M({target:a,cc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Wb:h,Yb:d,Zb:function(g){g=g||event;gb(Xa,g,a);K(d)(e,Xa,b)&&g.preventDefault()},Xb:c})}function hb(a,b,c,d,e){Ya||(Ya=O(260));M({target:a,Wb:e,Yb:d,Zb:function(h){h=h||event;var g=Ya,m=document.pointerLockElement||document.lc||document.nc||document.mc;E[g>>2]=!!m;var n=m&&m.id?m.id:"";B(Ua(m),C,g+4,128);B(n,C,g+132,128);K(d)(20,g,b)&&h.preventDefault()},Xb:c})}
function ib(a,b,c,d,e){M({target:a,Wb:e,Yb:d,Zb:function(h){h=h||event;K(d)(38,0,b)&&h.preventDefault()},Xb:c})}
function jb(a,b,c,d){Za||(Za=O(36));a=N(a);M({target:a,Wb:"resize",Yb:d,Zb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Za;E[g>>2]=e.detail;E[g+4>>2]=h.clientWidth;E[g+8>>2]=h.clientHeight;E[g+12>>2]=innerWidth;E[g+16>>2]=innerHeight;E[g+20>>2]=outerWidth;E[g+24>>2]=outerHeight;E[g+28>>2]=pageXOffset;E[g+32>>2]=pageYOffset;K(d)(10,g,b)&&e.preventDefault()}}},Xb:c})}
function kb(a,b,c,d,e,h){$a||($a=O(1696));a=N(a);M({target:a,cc:"touchstart"==h||"touchend"==h,Wb:h,Yb:d,Zb:function(g){for(var m,n={},p=g.touches,t=0;t<p.length;++t)m=p[t],m.qc=m.rc=0,n[m.identifier]=m;for(t=0;t<g.changedTouches.length;++t)m=g.changedTouches[t],m.qc=1,n[m.identifier]=m;for(t=0;t<g.targetTouches.length;++t)n[g.targetTouches[t].identifier].rc=1;p=$a;G[p>>3]=g.timeStamp;var r=p>>2;E[r+3]=g.ctrlKey;E[r+4]=g.shiftKey;E[r+5]=g.altKey;E[r+6]=g.metaKey;r+=7;var qb=cb(a),rb=0;for(t in n)if(m=
n[t],E[r]=m.identifier,E[r+1]=m.screenX,E[r+2]=m.screenY,E[r+3]=m.clientX,E[r+4]=m.clientY,E[r+5]=m.pageX,E[r+6]=m.pageY,E[r+7]=m.qc,E[r+8]=m.rc,E[r+9]=m.clientX-qb.left,E[r+10]=m.clientY-qb.top,r+=13,31<++rb)break;E[p+8>>2]=rb;K(d)(e,p,b)&&g.preventDefault()},Xb:c})}function lb(a,b,c,d,e,h){a={target:N(a),Wb:h,Yb:d,Zb:function(g){g=g||event;K(d)(e,0,b)&&g.preventDefault()},Xb:c};M(a)}
function mb(a,b,c,d){ab||(ab=O(104));M({target:a,cc:!0,Wb:"wheel",Yb:d,Zb:function(e){e=e||event;var h=ab;gb(h,e,a);G[h+72>>3]=e.deltaX;G[h+80>>3]=e.deltaY;G[h+88>>3]=e.deltaZ;E[h+96>>2]=e.deltaMode;K(d)(9,h,b)&&e.preventDefault()},Xb:c})}
function nb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function ob(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function pb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function sb(a){a.Mc=a.getExtension("WEBGL_multi_draw")}
var tb=1,ub=[],Q=[],vb=[],R=[],S=[],T=[],wb=[],xb={};function U(a){yb||(yb=a)}function zb(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}function Ab(a,b){a.pc||(a.pc=a.getContext,a.getContext=function(d,e){e=a.pc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?Bb(c,b):0}function Bb(a,b){var c=zb(wb),d={Kc:c,attributes:b,version:b.Ec,hc:a};a.canvas&&(a.canvas.Fc=d);wb[c]=d;("undefined"===typeof b.oc||b.oc)&&Cb(d);return c}
function Cb(a){a||(a=Db);if(!a.Dc){a.Dc=!0;var b=a.hc;nb(b);ob(b);pb(b);b.Ic=b.getExtension("EXT_disjoint_timer_query");sb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var yb,Db,Eb=["default","low-power","high-performance"];function Fb(a,b,c,d){for(var e=0;e<a;e++){var h=V[c](),g=h&&zb(d);h?(h.name=g,d[g]=h):U(1282);E[b+4*e>>2]=g}}
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else U(1281)}function Hb(a){var b=sa(a)+1,c=O(b);B(a,C,c,b);return c}
function Ib(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Jb(a,b,c,d,e){a-=5120;a=1==a?C:4==a?E:6==a?F:5==a||28922==a?xa:wa;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}function W(a){var b=V.Ac;if(b){var c=b.bc[a];"number"===typeof c&&(b.bc[a]=c=V.getUniformLocation(b,b.yc[a]+(0<c?"["+c+"]":"")));return c}U(1282)}for(var X=[],Y=[],V,Kb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Kb.subarray(0,Z+1);
var Lb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Lb.subarray(0,Z+1);
var Wb={E:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},K:function(a,b,c){a=N(a);if(!a)return-4;a=cb(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},da:db,Za:function(a,b,c){C.copyWithin(a,b,b+c)},ub:function(a,b){function c(d){K(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},_a:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,
d)-ua.byteLength+65535>>>16);ya();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},S:function(a,b,c,d){eb(a,b,c,d,12,"blur");return 0},pa:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},T:function(a,b,c,d){eb(a,b,c,d,13,"focus");return 0},aa:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},_:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},$:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},ha:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},ea:function(a,
b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ca:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},fa:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ga:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},V:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.lc||document.body.nc||document.body.mc))return-1;a=N(a);if(!a)return-4;hb(a,b,c,d,"pointerlockchange");hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");
return 0},U:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.lc||document.body.nc||document.body.mc))return-1;a=N(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},Aa:function(a,b,c,d){jb(a,b,c,d);return 0},W:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},X:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},Y:function(a,b,c,d){kb(a,b,c,d,24,
"touchmove");return 0},Z:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},R:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},Q:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},ba:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(mb(a,b,c,d),0):-1},ka:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+5],powerPreference:Eb[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+
7],Ec:E[b+8],Lc:E[b+9],oc:E[b+10],Cc:E[b+11],Nc:E[b+12],Oc:E[b+13]};a=N(a);return!a||b.Cc?0:Ab(a,b)},Xa:function(a,b){a=wb[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&nb(V);"OES_vertex_array_object"==b&&ob(V);"WEBGL_draw_buffers"==b&&pb(V);"WEBGL_multi_draw"==b&&sb(V);return!!a.hc.getExtension(b)},jb:function(a){a>>=2;for(var b=0;14>b;++b)E[a+b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},Ya:function(a){Db=wb[a];f.Hc=V=Db&&Db.hc;return!a||V?0:-5},b:function(a){V.activeTexture(a)},
G:function(a,b){V.attachShader(Q[a],T[b])},c:function(a,b){V.bindBuffer(a,ub[b])},g:function(a,b){V.bindFramebuffer(a,vb[b])},Da:function(a,b){V.bindRenderbuffer(a,R[b])},a:function(a,b){V.bindTexture(a,S[b])},L:function(a,b,c,d){V.blendColor(a,b,c,d)},M:function(a,b){V.blendEquationSeparate(a,b)},N:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},Fa:function(a,b,c,d){V.bufferData(a,c?C.subarray(c,c+b):b,d)},k:function(a,b,c,d){V.bufferSubData(a,b,C.subarray(d,d+c))},p:function(a){return V.checkFramebufferStatus(a)},
vb:function(a){V.clear(a)},xb:function(a,b,c,d){V.clearColor(a,b,c,d)},na:function(a){V.clearDepth(a)},wb:function(a){V.clearStencil(a)},o:function(a,b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},sa:function(a){V.compileShader(T[a])},za:function(a,b,c,d,e,h,g,m){V.compressedTexImage2D(a,b,c,d,e,h,m?C.subarray(m,m+g):null)},xa:function(){var a=zb(Q),b=V.createProgram();b.name=a;b.fc=b.dc=b.ec=0;b.kc=1;Q[a]=b;return a},ua:function(a){var b=zb(T);T[b]=V.createShader(a);return b},H:function(a){V.cullFace(a)},
La:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=ub[d];e&&(V.deleteBuffer(e),e.name=0,ub[d]=null)}},d:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=vb[d];e&&(V.deleteFramebuffer(e),e.name=0,vb[d]=null)}},r:function(a){if(a){var b=Q[a];b?(V.deleteProgram(b),b.name=0,Q[a]=null):U(1281)}},P:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=R[d];e&&(V.deleteRenderbuffer(e),e.name=0,R[d]=null)}},w:function(a){if(a){var b=T[a];b?(V.deleteShader(b),T[a]=null):U(1281)}},Ka:function(a,
b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=S[d];e&&(V.deleteTexture(e),e.name=0,S[d]=null)}},z:function(a){V.depthFunc(a)},y:function(a){V.depthMask(!!a)},e:function(a){V.disable(a)},O:function(a){V.disableVertexAttribArray(a)},db:function(a,b,c){V.drawArrays(a,b,c)},eb:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},fb:function(a,b,c,d){V.drawElements(a,b,c,d)},gb:function(a,b,c,d,e){V.drawElementsInstanced(a,b,c,d,e)},i:function(a){V.enable(a)},rb:function(a){V.enableVertexAttribArray(a)},l:function(a,
b,c,d){V.framebufferRenderbuffer(a,b,c,R[d])},h:function(a,b,c,d,e){V.framebufferTexture2D(a,b,c,S[d],e)},I:function(a){V.frontFace(a)},Ga:function(a,b){Fb(a,b,"createBuffer",ub)},n:function(a,b){Fb(a,b,"createFramebuffer",vb)},Ea:function(a,b){Fb(a,b,"createRenderbuffer",R)},Ba:function(a,b){Fb(a,b,"createTexture",S)},qa:function(a,b){return V.getAttribLocation(Q[a],D(b))},f:function(a,b){Gb(a,b)},va:function(a,b,c,d){a=V.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):
0;c&&(E[c>>2]=b)},F:function(a,b,c){if(c)if(a>=tb)U(1281);else if(a=Q[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b){if(!a.fc)for(b=0;b<V.getProgramParameter(a,35718);++b)a.fc=Math.max(a.fc,V.getActiveUniform(a,b).name.length+1);E[c>>2]=a.fc}else if(35722==b){if(!a.dc)for(b=0;b<V.getProgramParameter(a,35721);++b)a.dc=Math.max(a.dc,V.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.dc}else if(35381==b){if(!a.ec)for(b=0;b<V.getProgramParameter(a,
35382);++b)a.ec=Math.max(a.ec,V.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.ec}else E[c>>2]=V.getProgramParameter(a,b);else U(1281)},ra:function(a,b,c,d){a=V.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},C:function(a,b,c){c?35716==b?(a=V.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(T[a]),E[c>>2]=a?a.length+1:0):E[c>>2]=V.getShaderParameter(T[a],b):U(1281)},Ma:function(a){var b=xb[a];
if(!b){switch(a){case 7939:b=V.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Hb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=V.getParameter(a))||U(1280);b=b&&Hb(b);break;case 7938:b=Hb("OpenGL ES 2.0 ("+V.getParameter(7938)+")");break;case 35724:b=V.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Hb(b);break;default:U(1280)}xb[a]=b}return b},
q:function(a,b){b=D(b);if(a=Q[a]){var c=a,d=c.bc,e=c.zc,h;if(!d)for(c.bc=d={},c.yc={},h=0;h<V.getProgramParameter(c,35718);++h){var g=V.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Ib(m);n=0<n?m.slice(0,n):m;var p=c.kc;c.kc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.yc[p++]=n}c=a.bc;d=0;e=b;h=Ib(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.zc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else U(1281);return-1},wa:function(a){a=Q[a];V.linkProgram(a);a.bc=0;
a.zc={}},J:function(a,b){V.polygonOffset(a,b)},Ca:function(a,b,c,d){V.renderbufferStorage(a,b,c,d)},oa:function(a,b,c,d){V.scissor(a,b,c,d)},ta:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?E[d+4*h>>2]:-1;e+=D(E[c+4*h>>2],0>g?void 0:g)}V.shaderSource(T[a],e)},Ia:function(a,b,c){V.stencilFunc(a,b,c)},ma:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},x:function(a){V.stencilMask(a)},Ha:function(a,b,c){V.stencilOp(a,b,c)},la:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},ya:function(a,b,c,d,
e,h,g,m,n){V.texImage2D(a,b,c,d,e,h,g,m,n?Jb(m,g,d,e,n):null)},j:function(a,b,c){V.texParameteri(a,b,c)},cb:function(a,b,c,d,e,h,g,m,n){var p=null;n&&(p=Jb(m,g,e,h,n));V.texSubImage2D(a,b,c,d,e,h,g,m,p)},qb:function(a,b,c){if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);V.uniform1fv(W(a),d)},D:function(a,b){V.uniform1i(W(a),b)},mb:function(a,b,c){if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);V.uniform1iv(W(a),d)},
pb:function(a,b,c){if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);V.uniform2fv(W(a),d)},lb:function(a,b,c){if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);V.uniform2iv(W(a),d)},ob:function(a,b,c){if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);V.uniform3fv(W(a),d)},kb:function(a,
b,c){if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);V.uniform3iv(W(a),d)},nb:function(a,b,c){if(72>=b){var d=X[4*b-1],e=F;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);V.uniform4fv(W(a),d)},ib:function(a,b,c){if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2],d[e+3]=E[c+(4*
e+12)>>2];else d=E.subarray(c>>2,c+16*b>>2);V.uniform4iv(W(a),d)},hb:function(a,b,c,d){if(18>=b){var e=X[16*b-1],h=F;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=F.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(W(a),!!c,e)},m:function(a){a=Q[a];V.useProgram(a);V.Ac=a},
sb:function(a,b){V.vertexAttribDivisor(a,b)},tb:function(a,b,c,d,e,h){V.vertexAttribPointer(a,b,c,!!d,e,h)},v:function(a,b,c,d){V.viewport(a,b,c,d)},Va:function(){f.sc=function(a){0!=Mb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.sc)},Ua:function(){f.xc=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.xc)},Ta:function(a){f.Pc=[];a=D(a);a=document.getElementById(a);f.tc=function(b){b.stopPropagation();
b.preventDefault()};f.uc=function(b){b.stopPropagation();b.preventDefault()};f.vc=function(b){b.stopPropagation();b.preventDefault()};f.wc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.jc=c;Nb(c.length);var d;for(d=0;d<c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Ob(b.clientX,b.clientY)};a.addEventListener("dragenter",f.tc,!1);a.addEventListener("dragleave",f.uc,!1);a.addEventListener("dragover",f.vc,!1);a.addEventListener("drop",f.wc,!1)},
Oa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Pb()});document.body.append(a)},zb:function(a){return 0>a||a>=f.jc.length?0:f.jc[a].size},yb:function(a,b,c,d,e){var h=new FileReader;h.onload=function(g){g=g.target.result;g.byteLength>d?Qb(a,0,1,b,0,c,d,e):(C.set(new Uint8Array(g),c),Qb(a,
1,0,b,g.byteLength,c,d,e))};h.onerror=function(){Qb(a,0,2,b,0,c,d,e)};h.readAsArrayBuffer(f.jc[a])},t:function(){document.getElementById("_sokol_app_input_element").focus()},Ja:function(a){a=D(a);f.ac=document.getElementById(a);f.ac||console.log("sokol_app.h: invalid target:"+a);f.ac.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ra:function(){window.removeEventListener("beforeunload",f.sc)},Qa:function(){window.removeEventListener("paste",f.xc)},Pa:function(a){a=
D(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.tc);a.removeEventListener("dragleave",f.uc);a.removeEventListener("dragover",f.vc);a.removeEventListener("drop",f.wc)},B:function(){f.ac&&f.ac.requestPointerLock&&f.ac.requestPointerLock()},Na:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(C.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";
a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},s:function(){document.getElementById("_sokol_app_input_element").blur()},Sa:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())na("_sargs_add_kvp",["string","string"],[b.value[0],b.value[1]])},$a:function(){return f.$b?f.$b.bufferSize:0},bb:function(a,b,c){f.Vb=null;f.$b=null;"undefined"!==typeof AudioContext?f.Vb=new AudioContext({sampleRate:a,latencyHint:"interactive"}):
"undefined"!==typeof webkitAudioContext?f.Vb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(f.Vb=null,console.log("sokol_audio.h: no WebAudio support"));return f.Vb?(console.log("sokol_audio.h: sample rate ",f.Vb.sampleRate),f.$b=f.Vb.createScriptProcessor(c,0,b),f.$b.onaudioprocess=function(d){var e=d.outputBuffer.length,h=Rb(e);if(h)for(var g=d.outputBuffer.numberOfChannels,m=0;m<g;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<e;p++)n[p]=F[(h>>2)+(g*p+m)]},f.$b.connect(f.Vb.destination),
a=function(){f.Vb&&"suspended"===f.Vb.state&&f.Vb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},ab:function(){return f.Vb?f.Vb.sampleRate:0},ja:function(){null!==f.Vb&&(f.$b&&f.$b.disconnect(),f.Vb.close(),f.Vb=null,f.$b=null)},Wa:function(){if(f.Vb)return"suspended"===f.Vb.state?1:0},A:function(a,b,c,d,e,h){b=D(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";
var m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(g.response),p=n.length;p<=h?(C.set(n,e),Sb(a,d,p)):Tb(a)}else Ub(a,this.status)};g.send()},ia:function(a,b){b=D(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Vb(a,d)}else Ub(a,this.status)};
c.send()}};
(function(){function a(e){f.asm=e.exports;la=f.asm.Ab;ya();za=f.asm.Ub;Ba.unshift(f.asm.Bb);H--;f.monitorRunDependencies&&f.monitorRunDependencies(H);0==H&&(null!==Ga&&(clearInterval(Ga),Ga=null),I&&(e=I,I=null,e()))}function b(e){a(e.instance)}function c(e){return Ka().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){y("failed to asynchronously prepare wasm: "+h);ka(h)})}var d={a:Wb};H++;f.monitorRunDependencies&&f.monitorRunDependencies(H);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||J.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(J,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Bb).apply(null,arguments)};var Pb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Pb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Cb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Db).apply(null,arguments)};
var Mb=f.__sapp_html5_get_ask_leave_site=function(){return(Mb=f.__sapp_html5_get_ask_leave_site=f.asm.Eb).apply(null,arguments)},Nb=f.__sapp_emsc_begin_drop=function(){return(Nb=f.__sapp_emsc_begin_drop=f.asm.Fb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Gb).apply(null,arguments)};
var Ob=f.__sapp_emsc_end_drop=function(){return(Ob=f.__sapp_emsc_end_drop=f.asm.Hb).apply(null,arguments)},Qb=f.__sapp_emsc_invoke_fetch_cb=function(){return(Qb=f.__sapp_emsc_invoke_fetch_cb=f.asm.Ib).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Jb).apply(null,arguments)};var Rb=f.__saudio_emsc_pull=function(){return(Rb=f.__saudio_emsc_pull=f.asm.Kb).apply(null,arguments)};f.__sargs_add_kvp=function(){return(f.__sargs_add_kvp=f.asm.Lb).apply(null,arguments)};
var Vb=f.__sfetch_emsc_head_response=function(){return(Vb=f.__sfetch_emsc_head_response=f.asm.Mb).apply(null,arguments)},Sb=f.__sfetch_emsc_get_response=function(){return(Sb=f.__sfetch_emsc_get_response=f.asm.Nb).apply(null,arguments)},Ub=f.__sfetch_emsc_failed_http_status=function(){return(Ub=f.__sfetch_emsc_failed_http_status=f.asm.Ob).apply(null,arguments)},Tb=f.__sfetch_emsc_failed_buffer_too_small=function(){return(Tb=f.__sfetch_emsc_failed_buffer_too_small=f.asm.Pb).apply(null,arguments)},O=
f._malloc=function(){return(O=f._malloc=f.asm.Qb).apply(null,arguments)},pa=f.stackSave=function(){return(pa=f.stackSave=f.asm.Rb).apply(null,arguments)},qa=f.stackRestore=function(){return(qa=f.stackRestore=f.asm.Sb).apply(null,arguments)},A=f.stackAlloc=function(){return(A=f.stackAlloc=f.asm.Tb).apply(null,arguments)},Xb;function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}I=function Yb(){Xb||Zb();Xb||(I=Yb)};
function Zb(a){function b(){if(!Xb&&(Xb=!0,f.calledRun=!0,!ma)){La(Ba);La(Ca);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if($b){var c=a,d=f._main;c=c||[];var e=c.length+1,h=A(4*(e+1));E[h>>2]=ta(da);for(var g=1;g<e;g++)E[(h>>2)+g]=ta(c[g-1]);E[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<ja)){if(f.onExit)f.onExit(m);ma=!0}k(m,new x(m))}catch(n){n instanceof x||"unwind"==n||k(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Ea.unshift(c);La(Ea)}}a=a||ca;if(!(0<H)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Fa();La(Aa);0<H||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Zb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var $b=!0;f.noInitialRun&&($b=!1);Zb();
