
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",k=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,p="",fa,t,u;
if(ea){var fs=require("fs"),ha=require("path");p=l?ha.dirname(p)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};u=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};t=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=f);process.on("uncaughtException",
function(a){if(!(a instanceof w))throw a;});process.on("unhandledRejection",function(a){throw a;});k=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof w||x("exiting due to exception: "+b);process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?p=self.location.href:"undefined"!=typeof document&&document.currentScript&&(p=document.currentScript.src),p=0!==p.indexOf("blob:")?p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},l&&(u=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var x=f.printErr||console.warn.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);
f.thisProgram&&(ca=f.thisProgram);f.quit&&(k=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ia("no native wasm support detected");var z,ja=!1,ka="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function A(a,b){if(a){var c=B,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&ka)a=ka.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function la(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var ma,B,na,oa,D,pa,E,F;function qa(){var a=z.buffer;f.HEAP8=ma=new Int8Array(a);f.HEAP16=na=new Int16Array(a);f.HEAP32=D=new Int32Array(a);f.HEAPU8=B=new Uint8Array(a);f.HEAPU16=oa=new Uint16Array(a);f.HEAPU32=pa=new Uint32Array(a);f.HEAPF32=E=new Float32Array(a);f.HEAPF64=F=new Float64Array(a)}var ra,sa=[],ta=[],ua=[],va=[],wa=[];
function xa(){var a=f.preRun.shift();sa.unshift(a)}var G=0,ya=null,H=null;function ia(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";x(a);ja=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function za(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="atom.wasm";if(!za()){var Aa=I;I=f.locateFile?f.locateFile(Aa,p):p+Aa}
function Ba(){var a=I;try{if(a==I&&y)return new Uint8Array(y);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){ia(b)}}
function Ca(){if(!y&&(da||l)){if("function"==typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ba()});if(t)return new Promise(function(a,b){t(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ba()})}function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Da(a){for(;0<a.length;)a.shift()(f)}function Ea(a){var b=Fa();a();Ga(b)}var Ha=0;function Ia(){for(var a=J.length-1;0<=a;--a)Ja(a);J=[];Ka=[]}var Ka=[];function La(){if(Ha&&Ma.fc)for(var a=0;a<Ka.length;++a){var b=Ka[a];Ka.splice(a,1);--a;b.Pc.apply(null,b.Gc)}}var J=[];function Ja(a){var b=J[a];b.target.removeEventListener(b.Yb,b.Bc,b.Zb);J.splice(a,1)}
function K(a){function b(d){++Ha;Ma=a;La();a.ac(d);La();--Ha}if(a.$b)a.Bc=b,a.target.addEventListener(a.Yb,b,a.Zb),J.push(a),Na||(va.push(Ia),Na=!0);else for(var c=0;c<J.length;++c)J[c].target==a.target&&J[c].Yb==a.Yb&&Ja(c--)}function Oa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Na,Ma,Pa,Qa,Ra,Sa,Ta,Ua,Va,Wa=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function L(a){a=2<a?A(a):a;return Wa[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Xa(a){return 0>Wa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var Ya;Ya=ea?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();var Za=[];function M(a){var b=Za[a];b||(a>=Za.length&&(Za.length=a+1),Za[a]=b=ra.get(a));return b}
function $a(a,b,c,d,e,h){Pa||(Pa=N(256));a={target:L(a),Yb:h,$b:d,ac:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Pa;C(Oa(g.target),B,n+0,128);C(m,B,n+128,128);M(d)(e,n,b)&&g.preventDefault()},Zb:c};K(a)}
function ab(a,b,c,d,e,h){Qa||(Qa=N(176));a={target:L(a),fc:!0,Yb:h,$b:d,ac:function(g){var m=Qa;F[m>>3]=g.timeStamp;var n=m>>2;D[n+2]=g.location;D[n+3]=g.ctrlKey;D[n+4]=g.shiftKey;D[n+5]=g.altKey;D[n+6]=g.metaKey;D[n+7]=g.repeat;D[n+8]=g.charCode;D[n+9]=g.keyCode;D[n+10]=g.which;C(g.key||"",B,m+44,32);C(g.code||"",B,m+76,32);C(g.char||"",B,m+108,32);C(g.locale||"",B,m+140,32);M(d)(e,m,b)&&g.preventDefault()},Zb:c};K(a)}
function bb(a,b,c){F[a>>3]=b.timeStamp;a>>=2;D[a+2]=b.screenX;D[a+3]=b.screenY;D[a+4]=b.clientX;D[a+5]=b.clientY;D[a+6]=b.ctrlKey;D[a+7]=b.shiftKey;D[a+8]=b.altKey;D[a+9]=b.metaKey;na[2*a+20]=b.button;na[2*a+21]=b.buttons;D[a+11]=b.movementX;D[a+12]=b.movementY;c=Xa(c);D[a+13]=b.clientX-c.left;D[a+14]=b.clientY-c.top}
function O(a,b,c,d,e,h){Ra||(Ra=N(72));a=L(a);K({target:a,fc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Yb:h,$b:d,ac:function(g){g=g||event;bb(Ra,g,a);M(d)(e,Ra,b)&&g.preventDefault()},Zb:c})}function cb(a,b,c,d,e){Sa||(Sa=N(260));K({target:a,Yb:e,$b:d,ac:function(h){h=h||event;var g=Sa,m=document.pointerLockElement||document.cc||document.nc||document.mc;D[g>>2]=!!m;var n=m&&m.id?m.id:"";C(Oa(m),B,g+4,128);C(n,B,g+132,128);M(d)(20,g,b)&&h.preventDefault()},Zb:c})}
function db(a,b,c,d,e){K({target:a,Yb:e,$b:d,ac:function(h){h=h||event;M(d)(38,0,b)&&h.preventDefault()},Zb:c})}
function eb(a,b,c,d){Ta||(Ta=N(36));a=L(a);K({target:a,Yb:"resize",$b:d,ac:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Ta;D[g>>2]=e.detail;D[g+4>>2]=h.clientWidth;D[g+8>>2]=h.clientHeight;D[g+12>>2]=innerWidth;D[g+16>>2]=innerHeight;D[g+20>>2]=outerWidth;D[g+24>>2]=outerHeight;D[g+28>>2]=pageXOffset;D[g+32>>2]=pageYOffset;M(d)(10,g,b)&&e.preventDefault()}}},Zb:c})}
function fb(a,b,c,d,e,h){Ua||(Ua=N(1696));a=L(a);K({target:a,fc:"touchstart"==h||"touchend"==h,Yb:h,$b:d,ac:function(g){for(var m,n={},q=g.touches,v=0;v<q.length;++v)m=q[v],m.pc=m.qc=0,n[m.identifier]=m;for(v=0;v<g.changedTouches.length;++v)m=g.changedTouches[v],m.pc=1,n[m.identifier]=m;for(v=0;v<g.targetTouches.length;++v)n[g.targetTouches[v].identifier].qc=1;q=Ua;F[q>>3]=g.timeStamp;var r=q>>2;D[r+3]=g.ctrlKey;D[r+4]=g.shiftKey;D[r+5]=g.altKey;D[r+6]=g.metaKey;r+=7;var lb=Xa(a),mb=0;for(v in n)if(m=
n[v],D[r]=m.identifier,D[r+1]=m.screenX,D[r+2]=m.screenY,D[r+3]=m.clientX,D[r+4]=m.clientY,D[r+5]=m.pageX,D[r+6]=m.pageY,D[r+7]=m.pc,D[r+8]=m.qc,D[r+9]=m.clientX-lb.left,D[r+10]=m.clientY-lb.top,r+=13,31<++mb)break;D[q+8>>2]=mb;M(d)(e,q,b)&&g.preventDefault()},Zb:c})}function gb(a,b,c,d,e,h){a={target:L(a),Yb:h,$b:d,ac:function(g){g=g||event;M(d)(e,0,b)&&g.preventDefault()},Zb:c};K(a)}
function hb(a,b,c,d){Va||(Va=N(104));K({target:a,fc:!0,Yb:"wheel",$b:d,ac:function(e){e=e||event;var h=Va;bb(h,e,a);F[h+72>>3]=e.deltaX;F[h+80>>3]=e.deltaY;F[h+88>>3]=e.deltaZ;D[h+96>>2]=e.deltaMode;M(d)(9,h,b)&&e.preventDefault()},Zb:c})}
function ib(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function jb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function kb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function nb(a){a.Lc=a.getExtension("WEBGL_multi_draw")}
var ob=1,pb=[],P=[],qb=[],Q=[],R=[],S=[],rb=[],sb={};function T(a){tb||(tb=a)}function ub(a){for(var b=ob++,c=a.length;c<b;c++)a[c]=null;return b}function vb(a,b){a.cc||(a.cc=a.getContext,a.getContext=function(d,e){e=a.cc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?wb(c,b):0}function wb(a,b){var c=ub(rb),d={Jc:c,attributes:b,version:b.Ec,kc:a};a.canvas&&(a.canvas.Fc=d);rb[c]=d;("undefined"==typeof b.oc||b.oc)&&xb(d);return c}
function xb(a){a||(a=yb);if(!a.Dc){a.Dc=!0;var b=a.kc;ib(b);jb(b);kb(b);b.Ic=b.getExtension("EXT_disjoint_timer_query");nb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var tb,yb,zb=["default","low-power","high-performance"];function Ab(a,b,c,d){for(var e=0;e<a;e++){var h=U[c](),g=h&&ub(d);h?(h.name=g,d[g]=h):T(1282);D[b+4*e>>2]=g}}
function Bb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:T(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:T(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}D[b>>2]=c}else T(1281)}function Cb(a){var b=la(a)+1,c=N(b);C(a,B,c,b);return c}
function Db(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Eb(a,b,c,d,e){a-=5120;a=1==a?B:4==a?D:6==a?E:5==a||28922==a?pa:oa;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}function V(a){var b=U.Ac;if(b){var c=b.ec[a];"number"==typeof c&&(b.ec[a]=c=U.getUniformLocation(b,b.yc[a]+(0<c?"["+c+"]":"")));return c}T(1282)}var W=[],X=[];
function Fb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);ja=!0}k(a,new w(a))}function Y(a){var b=la(a)+1,c=Gb(b);C(a,ma,c,b);return c}for(var U,Hb=new Float32Array(288),Z=0;288>Z;++Z)W[Z]=Hb.subarray(0,Z+1);var Ib=new Int32Array(288);for(Z=0;288>Z;++Z)X[Z]=Ib.subarray(0,Z+1);
var Wb={F:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},L:function(a,b,c){a=L(a);if(!a)return-4;a=Xa(a);F[b>>3]=a.width;F[c>>3]=a.height;return 0},C:Ya,_a:function(a,b,c){B.copyWithin(a,b,b+c)},ub:function(a,b){function c(d){M(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math,h=e.min;d=Math.max(a,d);d+=(65536-d%65536)%
65536;a:{var g=z.buffer;try{z.grow(h.call(e,2147483648,d)-g.byteLength+65535>>>16);qa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},T:function(a,b,c,d){$a(a,b,c,d,12,"blur");return 0},pa:function(a,b,c){a=L(a);if(!a)return-4;a.width=b;a.height=c;return 0},U:function(a,b,c,d){$a(a,b,c,d,13,"focus");return 0},ba:function(a,b,c,d){ab(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){ab(a,b,c,d,1,"keypress");return 0},aa:function(a,b,c,d){ab(a,b,c,d,3,"keyup");return 0},ha:function(a,
b,c,d){O(a,b,c,d,5,"mousedown");return 0},ea:function(a,b,c,d){O(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,d){O(a,b,c,d,34,"mouseleave");return 0},fa:function(a,b,c,d){O(a,b,c,d,8,"mousemove");return 0},ga:function(a,b,c,d){O(a,b,c,d,6,"mouseup");return 0},W:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.cc||document.body.nc||document.body.mc))return-1;a=L(a);if(!a)return-4;cb(a,b,c,d,"pointerlockchange");cb(a,b,c,d,"mozpointerlockchange");
cb(a,b,c,d,"webkitpointerlockchange");cb(a,b,c,d,"mspointerlockchange");return 0},V:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.cc||document.body.nc||document.body.mc))return-1;a=L(a);if(!a)return-4;db(a,b,c,d,"pointerlockerror");db(a,b,c,d,"mozpointerlockerror");db(a,b,c,d,"webkitpointerlockerror");db(a,b,c,d,"mspointerlockerror");return 0},Aa:function(a,b,c,d){eb(a,b,c,d);return 0},X:function(a,b,c,d){fb(a,b,c,d,25,"touchcancel");return 0},Y:function(a,b,c,
d){fb(a,b,c,d,23,"touchend");return 0},Z:function(a,b,c,d){fb(a,b,c,d,24,"touchmove");return 0},_:function(a,b,c,d){fb(a,b,c,d,22,"touchstart");return 0},S:function(a,b,c,d){gb(a,b,c,d,31,"webglcontextlost");return 0},R:function(a,b,c,d){gb(a,b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=L(a);return"undefined"!=typeof a.onwheel?(hb(a,b,c,d),0):-1},ka:function(a,b){b>>=2;b={alpha:!!D[b],depth:!!D[b+1],stencil:!!D[b+2],antialias:!!D[b+3],premultipliedAlpha:!!D[b+4],preserveDrawingBuffer:!!D[b+
5],powerPreference:zb[D[b+6]],failIfMajorPerformanceCaveat:!!D[b+7],Ec:D[b+8],Kc:D[b+9],oc:D[b+10],Cc:D[b+11],Mc:D[b+12],Nc:D[b+13]};a=L(a);return!a||b.Cc?0:vb(a,b)},Xa:function(a,b){a=rb[a];b=A(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ib(U);"OES_vertex_array_object"==b&&jb(U);"WEBGL_draw_buffers"==b&&kb(U);"WEBGL_multi_draw"==b&&nb(U);return!!a.kc.getExtension(b)},jb:function(a){a>>=2;for(var b=0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},Ya:function(a){yb=
rb[a];f.Hc=U=yb&&yb.kc;return!a||U?0:-5},b:function(a){U.activeTexture(a)},H:function(a,b){U.attachShader(P[a],S[b])},c:function(a,b){U.bindBuffer(a,pb[b])},g:function(a,b){U.bindFramebuffer(a,qb[b])},Da:function(a,b){U.bindRenderbuffer(a,Q[b])},a:function(a,b){U.bindTexture(a,R[b])},M:function(a,b,c,d){U.blendColor(a,b,c,d)},N:function(a,b){U.blendEquationSeparate(a,b)},O:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},Fa:function(a,b,c,d){U.bufferData(a,c?B.subarray(c,c+b):b,d)},q:function(a,b,
c,d){U.bufferSubData(a,b,B.subarray(d,d+c))},o:function(a){return U.checkFramebufferStatus(a)},vb:function(a){U.clear(a)},xb:function(a,b,c,d){U.clearColor(a,b,c,d)},na:function(a){U.clearDepth(a)},wb:function(a){U.clearStencil(a)},n:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},sa:function(a){U.compileShader(S[a])},za:function(a,b,c,d,e,h,g,m){U.compressedTexImage2D(a,b,c,d,e,h,m?B.subarray(m,m+g):null)},xa:function(){var a=ub(P),b=U.createProgram();b.name=a;b.jc=b.hc=b.ic=0;b.lc=1;P[a]=b;return a},
ua:function(a){var b=ub(S);S[b]=U.createShader(a);return b},I:function(a){U.cullFace(a)},La:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=pb[d];e&&(U.deleteBuffer(e),e.name=0,pb[d]=null)}},d:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],e=qb[d];e&&(U.deleteFramebuffer(e),e.name=0,qb[d]=null)}},r:function(a){if(a){var b=P[a];b?(U.deleteProgram(b),b.name=0,P[a]=null):T(1281)}},Q:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=Q[d];e&&(U.deleteRenderbuffer(e),e.name=0,Q[d]=null)}},
w:function(a){if(a){var b=S[a];b?(U.deleteShader(b),S[a]=null):T(1281)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=R[d];e&&(U.deleteTexture(e),e.name=0,R[d]=null)}},z:function(a){U.depthFunc(a)},y:function(a){U.depthMask(!!a)},e:function(a){U.disable(a)},P:function(a){U.disableVertexAttribArray(a)},db:function(a,b,c){U.drawArrays(a,b,c)},eb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},fb:function(a,b,c,d){U.drawElements(a,b,c,d)},gb:function(a,b,c,d,e){U.drawElementsInstanced(a,
b,c,d,e)},i:function(a){U.enable(a)},rb:function(a){U.enableVertexAttribArray(a)},k:function(a,b,c,d){U.framebufferRenderbuffer(a,b,c,Q[d])},h:function(a,b,c,d,e){U.framebufferTexture2D(a,b,c,R[d],e)},J:function(a){U.frontFace(a)},Ga:function(a,b){Ab(a,b,"createBuffer",pb)},m:function(a,b){Ab(a,b,"createFramebuffer",qb)},Ea:function(a,b){Ab(a,b,"createRenderbuffer",Q)},Ba:function(a,b){Ab(a,b,"createTexture",R)},qa:function(a,b){return U.getAttribLocation(P[a],A(b))},f:function(a,b){Bb(a,b)},va:function(a,
b,c,d){a=U.getProgramInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,B,d,b):0;c&&(D[c>>2]=b)},G:function(a,b,c){if(c)if(a>=ob)T(1281);else if(a=P[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b){if(!a.jc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.jc=Math.max(a.jc,U.getActiveUniform(a,b).name.length+1);D[c>>2]=a.jc}else if(35722==b){if(!a.hc)for(b=0;b<U.getProgramParameter(a,35721);++b)a.hc=Math.max(a.hc,U.getActiveAttrib(a,b).name.length+
1);D[c>>2]=a.hc}else if(35381==b){if(!a.ic)for(b=0;b<U.getProgramParameter(a,35382);++b)a.ic=Math.max(a.ic,U.getActiveUniformBlockName(a,b).length+1);D[c>>2]=a.ic}else D[c>>2]=U.getProgramParameter(a,b);else T(1281)},ra:function(a,b,c,d){a=U.getShaderInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,B,d,b):0;c&&(D[c>>2]=b)},D:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(S[a]),null===a&&(a="(unknown error)"),D[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(S[a]),D[c>>2]=a?a.length+
1:0):D[c>>2]=U.getShaderParameter(S[a],b):T(1281)},Ma:function(a){var b=sb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Cb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||T(1280);b=b&&Cb(b);break;case 7938:b=Cb("OpenGL ES 2.0 ("+U.getParameter(7938)+")");break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b=
"OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Cb(b);break;default:T(1280)}sb[a]=b}return b},p:function(a,b){b=A(b);if(a=P[a]){var c=a,d=c.ec,e=c.zc,h;if(!d)for(c.ec=d={},c.yc={},h=0;h<U.getProgramParameter(c,35718);++h){var g=U.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Db(m);n=0<n?m.slice(0,n):m;var q=c.lc;c.lc+=g;e[n]=[g,q];for(m=0;m<g;++m)d[q]=m,c.yc[q++]=n}c=a.ec;d=0;e=b;h=Db(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.zc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,
b)))return d}else T(1281);return-1},wa:function(a){a=P[a];U.linkProgram(a);a.ec=0;a.zc={}},K:function(a,b){U.polygonOffset(a,b)},Ca:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},oa:function(a,b,c,d){U.scissor(a,b,c,d)},ta:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?D[d+4*h>>2]:-1;e+=A(D[c+4*h>>2],0>g?void 0:g)}U.shaderSource(S[a],e)},Ia:function(a,b,c){U.stencilFunc(a,b,c)},ma:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},x:function(a){U.stencilMask(a)},Ha:function(a,b,c){U.stencilOp(a,
b,c)},la:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},ya:function(a,b,c,d,e,h,g,m,n){U.texImage2D(a,b,c,d,e,h,g,m,n?Eb(m,g,d,e,n):null)},j:function(a,b,c){U.texParameteri(a,b,c)},cb:function(a,b,c,d,e,h,g,m,n){var q=null;n&&(q=Eb(m,g,e,h,n));U.texSubImage2D(a,b,c,d,e,h,g,m,q)},qb:function(a,b,c){if(288>=b)for(var d=W[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1fv(V(a),d)},E:function(a,b){U.uniform1i(V(a),b)},mb:function(a,b,c){if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=
D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);U.uniform1iv(V(a),d)},pb:function(a,b,c){if(144>=b)for(var d=W[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2fv(V(a),d)},lb:function(a,b,c){if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);U.uniform2iv(V(a),d)},ob:function(a,b,c){if(96>=b)for(var d=W[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+
8)>>2];else d=E.subarray(c>>2,c+12*b>>2);U.uniform3fv(V(a),d)},kb:function(a,b,c){if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);U.uniform3iv(V(a),d)},nb:function(a,b,c){if(72>=b){var d=W[4*b-1],e=E;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=E.subarray(c>>2,c+16*b>>2);U.uniform4fv(V(a),d)},ib:function(a,b,c){if(72>=b)for(var d=X[4*b-1],e=0;e<4*b;e+=
4)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2],d[e+3]=D[c+(4*e+12)>>2];else d=D.subarray(c>>2,c+16*b>>2);U.uniform4iv(V(a),d)},hb:function(a,b,c,d){if(18>=b){var e=W[16*b-1],h=E;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=E.subarray(d>>2,d+64*b>>
2);U.uniformMatrix4fv(V(a),!!c,e)},l:function(a){a=P[a];U.useProgram(a);U.Ac=a},sb:function(a,b){U.vertexAttribDivisor(a,b)},tb:function(a,b,c,d,e,h){U.vertexAttribPointer(a,b,c,!!d,e,h)},v:function(a,b,c,d){U.viewport(a,b,c,d)},Va:function(){f.rc=a=>{0!=Jb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.rc)},Ua:function(){f.xc=a=>{const b=a.clipboardData.getData("text");Ea(()=>{const c=Y(b);Kb(c)})};window.addEventListener("paste",f.xc)},Ta:function(a){f.Oc=[];
a=A(a);a=document.getElementById(a);f.sc=b=>{b.stopPropagation();b.preventDefault()};f.tc=b=>{b.stopPropagation();b.preventDefault()};f.uc=b=>{b.stopPropagation();b.preventDefault()};f.vc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.wc=c;Lb(c.length);for(let d=0;d<c.length;d++)Ea(()=>{const e=Y(c[d].name);Mb(d,e)});Nb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.sc,!1);a.addEventListener("dragleave",f.tc,!1);a.addEventListener("dragover",f.uc,!1);a.addEventListener("drop",
f.vc,!1)},Oa:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},u:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},zb:function(a){const b=f.wc;return 0>a||a>=b.length?0:b[a].size},yb:function(a,b,c,d,e){const h=new FileReader;h.onload=g=>{g=g.target.result;g.byteLength>d?Pb(a,0,1,b,0,c,d,e):(B.set(new Uint8Array(g),
c),Pb(a,1,0,b,g.byteLength,c,d,e))};h.onerror=()=>{Pb(a,0,2,b,0,c,d,e)};h.readAsArrayBuffer(f.wc[a])},t:function(){document.getElementById("_sokol_app_input_element").focus()},Ja:function(a){a=A(a);f.dc=document.getElementById(a);f.dc||console.log("sokol_app.h: invalid target:"+a);f.dc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ra:function(){window.removeEventListener("beforeunload",f.rc)},Qa:function(){window.removeEventListener("paste",f.xc)},Pa:function(a){a=
A(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.sc);a.removeEventListener("dragleave",f.tc);a.removeEventListener("dragover",f.uc);a.removeEventListener("drop",f.vc)},B:function(){f.dc&&f.dc.requestPointerLock&&f.dc.requestPointerLock()},Na:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(B.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";
a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},s:function(){document.getElementById("_sokol_app_input_element").blur()},Sa:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],d=b.value[1];Ea(()=>{const e=Y(c),h=Y(d);Qb(e,h)})}},$a:function(){return f.bc?f.bc.bufferSize:0},bb:function(a,b,c){f.Xb=null;f.bc=null;"undefined"!==typeof AudioContext?f.Xb=new AudioContext({sampleRate:a,latencyHint:"interactive"}):
(f.Xb=null,console.log("sokol_audio.h: no WebAudio support"));return f.Xb?(console.log("sokol_audio.h: sample rate ",f.Xb.sampleRate),f.bc=f.Xb.createScriptProcessor(c,0,b),f.bc.onaudioprocess=d=>{const e=d.outputBuffer.length,h=Rb(e);if(h){const g=d.outputBuffer.numberOfChannels;for(let m=0;m<g;m++){const n=d.outputBuffer.getChannelData(m);for(let q=0;q<e;q++)n[q]=E[(h>>2)+(g*q+m)]}}},f.bc.connect(f.Xb.destination),a=()=>{f.Xb&&"suspended"===f.Xb.state&&f.Xb.resume()},document.addEventListener("click",
a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},ab:function(){return f.Xb?f.Xb.sampleRate:0},ja:function(){const a=f.Xb;null!==a&&(f.bc&&f.bc.disconnect(),a.close(),f.Xb=null,f.bc=null)},Wa:function(){if(f.Xb)return"suspended"===f.Xb.state?1:0},A:function(a,b,c,d,e,h){b=A(b);const g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";const m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=
function(){if(g.readyState==XMLHttpRequest.DONE)if(206==g.status||200==g.status&&!m){const n=new Uint8Array(g.response),q=n.length;q<=h?(B.set(n,e),Sb(a,d,q)):Tb(a)}else Ub(a,g.status)};g.send()},ia:function(a,b){b=A(b);const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");Vb(a,d)}else Ub(a,c.status)};c.send()}};
(function(){function a(e){f.asm=e.exports;z=f.asm.Ab;qa();ra=f.asm.Tb;ta.unshift(f.asm.Bb);G--;f.monitorRunDependencies&&f.monitorRunDependencies(G);0==G&&(null!==ya&&(clearInterval(ya),ya=null),H&&(e=H,H=null,e()))}function b(e){a(e.instance)}function c(e){return Ca().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){x("failed to asynchronously prepare wasm: "+h);ia(h)})}var d={a:Wb};G++;f.monitorRunDependencies&&f.monitorRunDependencies(G);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||za()||I.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Bb).apply(null,arguments)};f._fs_emsc_alloc=function(){return(f._fs_emsc_alloc=f.asm.Cb).apply(null,arguments)};var N=f._malloc=function(){return(N=f._malloc=f.asm.Db).apply(null,arguments)};f._fs_emsc_load_snapshot_callback=function(){return(f._fs_emsc_load_snapshot_callback=f.asm.Eb).apply(null,arguments)};
var Ob=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Fb).apply(null,arguments)},Kb=f.__sapp_emsc_onpaste=function(){return(Kb=f.__sapp_emsc_onpaste=f.asm.Gb).apply(null,arguments)},Jb=f.__sapp_html5_get_ask_leave_site=function(){return(Jb=f.__sapp_html5_get_ask_leave_site=f.asm.Hb).apply(null,arguments)},Lb=f.__sapp_emsc_begin_drop=function(){return(Lb=f.__sapp_emsc_begin_drop=f.asm.Ib).apply(null,arguments)},Mb=f.__sapp_emsc_drop=function(){return(Mb=
f.__sapp_emsc_drop=f.asm.Jb).apply(null,arguments)},Nb=f.__sapp_emsc_end_drop=function(){return(Nb=f.__sapp_emsc_end_drop=f.asm.Kb).apply(null,arguments)},Pb=f.__sapp_emsc_invoke_fetch_cb=function(){return(Pb=f.__sapp_emsc_invoke_fetch_cb=f.asm.Lb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Mb).apply(null,arguments)};
var Rb=f.__saudio_emsc_pull=function(){return(Rb=f.__saudio_emsc_pull=f.asm.Nb).apply(null,arguments)},Qb=f.__sargs_add_kvp=function(){return(Qb=f.__sargs_add_kvp=f.asm.Ob).apply(null,arguments)},Vb=f.__sfetch_emsc_head_response=function(){return(Vb=f.__sfetch_emsc_head_response=f.asm.Pb).apply(null,arguments)},Sb=f.__sfetch_emsc_get_response=function(){return(Sb=f.__sfetch_emsc_get_response=f.asm.Qb).apply(null,arguments)},Ub=f.__sfetch_emsc_failed_http_status=function(){return(Ub=f.__sfetch_emsc_failed_http_status=
f.asm.Rb).apply(null,arguments)},Tb=f.__sfetch_emsc_failed_buffer_too_small=function(){return(Tb=f.__sfetch_emsc_failed_buffer_too_small=f.asm.Sb).apply(null,arguments)},Fa=f.stackSave=function(){return(Fa=f.stackSave=f.asm.Ub).apply(null,arguments)},Ga=f.stackRestore=function(){return(Ga=f.stackRestore=f.asm.Vb).apply(null,arguments)},Gb=f.stackAlloc=function(){return(Gb=f.stackAlloc=f.asm.Wb).apply(null,arguments)};f.___start_em_js=3E4;f.___stop_em_js=42662;var Xb;
H=function Yb(){Xb||Zb();Xb||(H=Yb)};function $b(a){var b=f._main;a=a||[];a.unshift(ca);var c=a.length,d=Gb(4*(c+1)),e=d>>2;a.forEach(g=>{D[e++]=Y(g)});D[e]=0;try{var h=b(c,d);Fb(h)}catch(g){g instanceof w||"unwind"==g||k(1,g)}}
function Zb(){function a(){if(!Xb&&(Xb=!0,f.calledRun=!0,!ja)){Da(ta);Da(ua);if(f.onRuntimeInitialized)f.onRuntimeInitialized();ac&&$b(b);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();wa.unshift(c)}Da(wa)}}var b=b||ba;if(!(0<G)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)xa();Da(sa);0<G||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);
a()},1)):a())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var ac=!0;f.noInitialRun&&(ac=!1);Zb();
