var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",k=(a,b)=>{throw b;},da="object"==typeof window,m="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,r="",fa,ha,ia;
if(ea){var fs=require("fs"),ja=require("path");r=m?ja.dirname(r)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ja.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ia=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};ha=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ja.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,h)=>{e?c(e):b(d?h.buffer:h)})};!g.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=
typeof module&&(module.exports=g);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof ka||a.context instanceof ka))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});k=(a,b)=>{process.exitCode=a;throw b;};g.inspect=()=>"[Emscripten Module object]"}else if(da||m)m?r=self.location.href:"undefined"!=typeof document&&document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?r.substr(0,r.replace(/[?#].*/,"").lastIndexOf("/")+
1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},m&&(ia=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ha=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var la=g.print||console.log.bind(console),t=g.printErr||console.warn.bind(console);
Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);g.quit&&(k=g.quit);var v;g.wasmBinary&&(v=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&ma("no native wasm support detected");var na,oa=!1,pa,w,qa,ra,x,y,z,A;
function sa(){var a=na.buffer;g.HEAP8=pa=new Int8Array(a);g.HEAP16=qa=new Int16Array(a);g.HEAP32=x=new Int32Array(a);g.HEAPU8=w=new Uint8Array(a);g.HEAPU16=ra=new Uint16Array(a);g.HEAPU32=y=new Uint32Array(a);g.HEAPF32=z=new Float32Array(a);g.HEAPF64=A=new Float64Array(a)}var ta,ua=[],va=[],wa=[],xa=[],ya=[];function za(){var a=g.preRun.shift();ua.unshift(a)}var B=0,Aa=null,C=null;
function ma(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";t(a);oa=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ba(a){return a.startsWith("data:application/octet-stream;base64,")}var D;D="pengo-ui.wasm";if(!Ba(D)){var Ca=D;D=g.locateFile?g.locateFile(Ca,r):r+Ca}function Da(a){try{if(a==D&&v)return new Uint8Array(v);if(ia)return ia(a);throw"both async and sync fetching of the wasm failed";}catch(b){ma(b)}}
function Ea(a){if(!v&&(da||m)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>Da(a));if(ha)return new Promise((b,c)=>{ha(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Da(a))}function Fa(a,b,c){return Ea(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{t("failed to asynchronously prepare wasm: "+d);ma(d)})}
function Ga(a,b){var c=D;v||"function"!=typeof WebAssembly.instantiateStreaming||Ba(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?Fa(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){t("wasm streaming compile failed: "+e);t("falling back to ArrayBuffer instantiation");return Fa(c,a,b)}))}function ka(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ha(a){for(;0<a.length;)a.shift()(g)}var Ia="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function Ja(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Ia)return Ia.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|f:(e&7)<<18|h<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function E(a,b){return a?Ja(w,a,b):""}
function Ka(a){var b=La();a();Ma(b)}var Na=0;function Oa(){for(var a=F.length-1;0<=a;--a)Pa(a);F=[];Qa=[]}var Qa=[];function Ra(){if(Na&&Sa.Cc)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.pd.apply(null,b.cd)}}var F=[];function Pa(a){var b=F[a];b.target.removeEventListener(b.tc,b.Zc,b.uc);F.splice(a,1)}
function G(a){function b(d){++Na;Sa=a;Ra();a.wc(d);Ra();--Na}if(a.vc)a.Zc=b,a.target.addEventListener(a.tc,b,a.uc),F.push(a),Ta||(xa.push(Oa),Ta=!0);else for(var c=0;c<F.length;++c)F[c].target==a.target&&F[c].tc==a.tc&&Pa(c--)}function Ua(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ta,Sa,Va,Wa,Xa,Ya,Za,$a,ab,bb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function H(a){a=2<a?E(a):a;return bb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var db;db=ea?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();var eb=[];function I(a){var b=eb[a];b||(a>=eb.length&&(eb.length=a+1),eb[a]=b=ta.get(a));return b}
function J(a,b,c){var d=w;if(!(0<c))return 0;var e=b;c=b+c-1;for(var h=0;h<a.length;++h){var f=a.charCodeAt(h);if(55296<=f&&57343>=f){var l=a.charCodeAt(++h);f=65536+((f&1023)<<10)|l&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e}
function fb(a,b,c,d,e,h){Va||(Va=K(256));a={target:H(a),tc:h,vc:d,wc:function(f=event){var l=f.target.id?f.target.id:"",n=Va;J(Ua(f.target),n+0,128);J(l,n+128,128);I(d)(e,n,b)&&f.preventDefault()},uc:c};G(a)}
function gb(a,b,c,d,e,h){Wa||(Wa=K(176));a={target:H(a),Cc:!0,tc:h,vc:d,wc:function(f){var l=Wa;A[l>>3]=f.timeStamp;var n=l>>2;x[n+2]=f.location;x[n+3]=f.ctrlKey;x[n+4]=f.shiftKey;x[n+5]=f.altKey;x[n+6]=f.metaKey;x[n+7]=f.repeat;x[n+8]=f.charCode;x[n+9]=f.keyCode;x[n+10]=f.which;J(f.key||"",l+44,32);J(f.code||"",l+76,32);J(f.char||"",l+108,32);J(f.locale||"",l+140,32);I(d)(e,l,b)&&f.preventDefault()},uc:c};G(a)}
function hb(a,b,c){A[a>>3]=b.timeStamp;a>>=2;x[a+2]=b.screenX;x[a+3]=b.screenY;x[a+4]=b.clientX;x[a+5]=b.clientY;x[a+6]=b.ctrlKey;x[a+7]=b.shiftKey;x[a+8]=b.altKey;x[a+9]=b.metaKey;qa[2*a+20]=b.button;qa[2*a+21]=b.buttons;x[a+11]=b.movementX;x[a+12]=b.movementY;c=cb(c);x[a+13]=b.clientX-c.left;x[a+14]=b.clientY-c.top}
function L(a,b,c,d,e,h){Xa||(Xa=K(72));a=H(a);G({target:a,Cc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,tc:h,vc:d,wc:function(f=event){hb(Xa,f,a);I(d)(e,Xa,b)&&f.preventDefault()},uc:c})}function ib(a,b,c,d,e){Ya||(Ya=K(260));G({target:a,tc:e,vc:d,wc:function(h=event){var f=Ya,l=document.pointerLockElement||document.Ac||document.Vc||document.Uc;x[f>>2]=!!l;var n=l&&l.id?l.id:"";J(Ua(l),f+4,128);J(n,f+132,128);I(d)(20,f,b)&&h.preventDefault()},uc:c})}
function jb(a,b,c,d,e){G({target:a,tc:e,vc:d,wc:function(h=event){I(d)(38,0,b)&&h.preventDefault()},uc:c})}function kb(a,b,c,d){Za||(Za=K(36));a=H(a);G({target:a,tc:"resize",vc:d,wc:function(e=event){if(e.target==a){var h=document.body;if(h){var f=Za;x[f>>2]=e.detail;x[f+4>>2]=h.clientWidth;x[f+8>>2]=h.clientHeight;x[f+12>>2]=innerWidth;x[f+16>>2]=innerHeight;x[f+20>>2]=outerWidth;x[f+24>>2]=outerHeight;x[f+28>>2]=pageXOffset;x[f+32>>2]=pageYOffset;I(d)(10,f,b)&&e.preventDefault()}}},uc:c})}
function lb(a,b,c,d,e,h){$a||($a=K(1696));a=H(a);G({target:a,Cc:"touchstart"==h||"touchend"==h,tc:h,vc:d,wc:function(f){for(var l,n={},p=f.touches,q=0;q<p.length;++q)l=p[q],l.Lc=l.Nc=0,n[l.identifier]=l;for(q=0;q<f.changedTouches.length;++q)l=f.changedTouches[q],l.Lc=1,n[l.identifier]=l;for(q=0;q<f.targetTouches.length;++q)n[f.targetTouches[q].identifier].Nc=1;p=$a;A[p>>3]=f.timeStamp;var u=p>>2;x[u+3]=f.ctrlKey;x[u+4]=f.shiftKey;x[u+5]=f.altKey;x[u+6]=f.metaKey;u+=7;var pb=cb(a),qb=0;for(q in n)if(l=
n[q],x[u]=l.identifier,x[u+1]=l.screenX,x[u+2]=l.screenY,x[u+3]=l.clientX,x[u+4]=l.clientY,x[u+5]=l.pageX,x[u+6]=l.pageY,x[u+7]=l.Lc,x[u+8]=l.Nc,x[u+9]=l.clientX-pb.left,x[u+10]=l.clientY-pb.top,u+=13,31<++qb)break;x[p+8>>2]=qb;I(d)(e,p,b)&&f.preventDefault()},uc:c})}
function mb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,f){b.drawElementsInstancedANGLE(c,d,e,h,f)})}
function nb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function rb(a){a.ed=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function sb(a){a.hd=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function tb(a){a.kd=a.getExtension("WEBGL_multi_draw")}var ub=1,vb=[],M=[],wb=[],N=[],O=[],P=[],xb=[],yb=[],zb={},Ab=4;function Q(a){Bb||(Bb=a)}function Cb(a){for(var b=ub++,c=a.length;c<b;c++)a[c]=null;return b}
function Db(a,b){a.Ac||(a.Ac=a.getContext,a.getContext=function(d,e){e=a.Ac(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Mc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Eb(c,b):0}function Eb(a,b){var c=Cb(yb),d={gd:c,attributes:b,version:b.Mc,Gc:a};a.canvas&&(a.canvas.bd=d);yb[c]=d;("undefined"==typeof b.Kc||b.Kc)&&Fb(d);return c}
function Fb(a){a||(a=R);if(!a.ad){a.ad=!0;var b=a.Gc;mb(b);nb(b);ob(b);rb(b);sb(b);2<=a.version&&(b.Jc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Jc)b.Jc=b.getExtension("EXT_disjoint_timer_query");tb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Bb,R;function Gb(a,b,c,d,e,h){a={target:H(a),tc:h,vc:d,wc:(f=event)=>{I(d)(e,0,b)&&f.preventDefault()},uc:c};G(a)}
function Hb(a,b,c,d){ab||(ab=K(104));G({target:a,Cc:!0,tc:"wheel",vc:d,wc:function(e=event){var h=ab;hb(h,e,a);A[h+72>>3]=e.deltaX;A[h+80>>3]=e.deltaY;A[h+88>>3]=e.deltaZ;x[h+96>>2]=e.deltaMode;I(d)(9,h,b)&&e.preventDefault()},uc:c})}var Ib=["default","low-power","high-performance"],Jb=[null,[],[]],Kb=[];function S(a,b,c,d){for(var e=0;e<a;e++){var h=T[c](),f=h&&Cb(d);h?(h.name=f,d[f]=h):Q(1282);x[b+4*e>>2]=f}}
function Lb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=T.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>R.version){Q(1282);return}c=2*(T.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>R.version){Q(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=T.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Q(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:Q(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)x[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){Q(1280);t("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:Q(1280);t("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}x[b>>2]=c}else Q(1281)}
function Mb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Nb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function U(a){a-=5120;return 0==a?pa:1==a?w:2==a?qa:4==a?x:6==a?z:5==a||28922==a||28520==a||30779==a||30782==a?y:ra}function V(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}
function Ob(a,b,c,d,e){a=U(a);var h=V(a),f=Ab;return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+f-1&-f)>>h)}function W(a){var b=T.Yc;if(b){var c=b.Bc[a];"number"==typeof c&&(b.Bc[a]=c=T.getUniformLocation(b,b.Wc[a]+(0<c?"["+c+"]":"")));return c}Q(1282)}var X=[],Y=[];function Pb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);oa=!0}k(a,new ka(a))}function Qb(a){var b=Mb(a)+1,c=Rb(b);J(a,c,b);return c}for(var T,Z=0;32>Z;++Z)Kb.push(Array(Z));
var Sb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Sb.subarray(0,Z+1);var Tb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Tb.subarray(0,Z+1);
var gc={oa:function(){return 0},lb:function(){return 0},nb:function(){},g:function(){ma("")},ia:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ja:function(a,b,c){a=H(a);if(!a)return-4;a=cb(a);A[b>>3]=a.width;A[c>>3]=a.height;return 0},A:db,ib:function(a,b,c){w.copyWithin(a,b,b+c)},$a:function(a,b){function c(d){I(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},hb:function(a){var b=w.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*
(1+.2/c);d=Math.min(d,a+100663296);var e=Math,h=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;a:{var f=na.buffer;try{na.grow(h.call(e,2147483648,d)-f.byteLength+65535>>>16);sa();var l=1;break a}catch(n){}l=void 0}if(l)return!0}return!1},S:function(a,b,c,d){fb(a,b,c,d,12,"blur");return 0},ha:function(a,b,c){a=H(a);if(!a)return-4;a.width=b;a.height=c;return 0},T:function(a,b,c,d){fb(a,b,c,d,13,"focus");return 0},aa:function(a,b,c,d){gb(a,b,c,d,2,"keydown");return 0},_:function(a,b,c,d){gb(a,b,c,d,
1,"keypress");return 0},$:function(a,b,c,d){gb(a,b,c,d,3,"keyup");return 0},ga:function(a,b,c,d){L(a,b,c,d,5,"mousedown");return 0},da:function(a,b,c,d){L(a,b,c,d,33,"mouseenter");return 0},ca:function(a,b,c,d){L(a,b,c,d,34,"mouseleave");return 0},ea:function(a,b,c,d){L(a,b,c,d,8,"mousemove");return 0},fa:function(a,b,c,d){L(a,b,c,d,6,"mouseup");return 0},V:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Ac||document.body.Vc||document.body.Uc))return-1;
a=H(a);if(!a)return-4;ib(a,b,c,d,"pointerlockchange");ib(a,b,c,d,"mozpointerlockchange");ib(a,b,c,d,"webkitpointerlockchange");ib(a,b,c,d,"mspointerlockchange");return 0},U:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Ac||document.body.Vc||document.body.Uc))return-1;a=H(a);if(!a)return-4;jb(a,b,c,d,"pointerlockerror");jb(a,b,c,d,"mozpointerlockerror");jb(a,b,c,d,"webkitpointerlockerror");jb(a,b,c,d,"mspointerlockerror");return 0},ab:function(a,b,c,d){kb(a,b,c,
d);return 0},W:function(a,b,c,d){lb(a,b,c,d,25,"touchcancel");return 0},X:function(a,b,c,d){lb(a,b,c,d,23,"touchend");return 0},Y:function(a,b,c,d){lb(a,b,c,d,24,"touchmove");return 0},Z:function(a,b,c,d){lb(a,b,c,d,22,"touchstart");return 0},R:function(a,b,c,d){Gb(a,b,c,d,31,"webglcontextlost");return 0},Q:function(a,b,c,d){Gb(a,b,c,d,32,"webglcontextrestored");return 0},ba:function(a,b,c,d){a=H(a);return"undefined"!=typeof a.onwheel?(Hb(a,b,c,d),0):-1},Za:function(a,b){b>>=2;b={alpha:!!x[b],depth:!!x[b+
1],stencil:!!x[b+2],antialias:!!x[b+3],premultipliedAlpha:!!x[b+4],preserveDrawingBuffer:!!x[b+5],powerPreference:Ib[x[b+6]],failIfMajorPerformanceCaveat:!!x[b+7],Mc:x[b+8],jd:x[b+9],Kc:x[b+10],$c:x[b+11],ld:x[b+12],md:x[b+13]};a=H(a);return!a||b.$c?0:Db(a,b)},Xa:function(a,b){a=yb[a];b=E(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&mb(T);"OES_vertex_array_object"==b&&nb(T);"WEBGL_draw_buffers"==b&&ob(T);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&rb(T);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&sb(T);"WEBGL_multi_draw"==b&&tb(T);return!!a.Gc.getExtension(b)},_a:function(a){a>>=2;for(var b=0;14>b;++b)x[a+b]=0;x[a]=x[a+1]=x[a+3]=x[a+4]=x[a+8]=x[a+10]=1},Ya:function(a){R=yb[a];g.dd=T=R&&R.Gc;return!a||T?0:-5},na:function(){return 52},kb:function(){return 52},gb:function(){return 70},jb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var f=y[b>>2],l=y[b+4>>2];b+=8;for(var n=0;n<l;n++){var p=w[f+n],q=Jb[a];0===p||10===p?((1===a?la:t)(Ja(q,0)),q.length=0):q.push(p)}e+=l}y[d>>2]=e;return 0},j:function(a,
b,c){const d=E(a);console.log("fs_js_load_snapshot: called with",d,b);let e;try{e=window.indexedDB.open("chips",1)}catch(h){console.log("fs_js_load_snapshot: failed to open IndexedDB with "+h)}e.onupgradeneeded=()=>{console.log("fs_js_load_snapshot: creating db");e.result.createObjectStore("store")};e.onsuccess=()=>{var h=e.result;let f;try{f=h.transaction(["store"],"readwrite")}catch(p){console.log("fs_js_load_snapshot: db.transaction failed with",p);return}h=f.objectStore("store");let l=d+"_"+b,
n=h.get(l);n.onsuccess=()=>{if(void 0!==n.result){let p=n.result.length;console.log("fs_js_load_snapshot:",l,"successfully loaded",p,"bytes");let q=Ub(p);w.set(n.result,q);Vb(c,q,p)}else console.log("fs_js_load_snapshot:",l,"does not exist"),Vb(c,0,0)};n.onerror=()=>{console.log("fs_js_load_snapshot: FAILED loading",l)};f.onerror=()=>{console.log("fs_js_load_snapshot: transaction onerror")}};e.onerror=()=>{console.log("fs_js_load_snapshot: open_request onerror")}},Wb:function(a,b,c,d){const e=E(a);
console.log("fs_js_save_snapshot: called with",e,b);let h;try{h=window.indexedDB.open("chips",1)}catch(f){console.log("fs_js_save_snapshot: failed to open IndexedDB with "+f);return}h.onupgradeneeded=()=>{console.log("fs_js_save_snapshot: creating db");h.result.createObjectStore("store")};h.onsuccess=()=>{console.log("fs_js_save_snapshot: onsuccess");let f=h.result.transaction(["store"],"readwrite");var l=f.objectStore("store");let n=e+"_"+b;l=l.put(w.subarray(c,c+d),n);l.onsuccess=()=>{console.log("fs_js_save_snapshot:",
n,"successfully stored")};l.onerror=()=>{console.log("fs_js_save_snapshot: FAILED to store",n)};f.onerror=()=>{console.log("fs_js_save_snapshot: transaction onerror")}};h.onerror=()=>{console.log("fs_js_save_snapshot: open_request onerror")}},f:function(a){T.activeTexture(a)},E:function(a,b){T.attachShader(M[a],P[b])},b:function(a,b){35051==a?T.Ic=b:35052==a&&(T.yc=b);T.bindBuffer(a,vb[b])},l:function(a,b){T.bindFramebuffer(a,wb[b])},Ia:function(a,b){T.bindRenderbuffer(a,N[b])},a:function(a,b){T.bindTexture(a,
O[b])},N:function(a){T.bindVertexArray(xb[a])},J:function(a,b,c,d){T.blendColor(a,b,c,d)},K:function(a,b){T.blendEquationSeparate(a,b)},L:function(a,b,c,d){T.blendFuncSeparate(a,b,c,d)},rb:function(a,b,c,d,e,h,f,l,n,p){T.blitFramebuffer(a,b,c,d,e,h,f,l,n,p)},Ka:function(a,b,c,d){2<=R.version?c&&b?T.bufferData(a,w,d,c,b):T.bufferData(a,b,d):T.bufferData(a,c?w.subarray(c,c+b):b,d)},q:function(a,b,c,d){2<=R.version?c&&T.bufferSubData(a,b,w,d,c):T.bufferSubData(a,b,w.subarray(d,d+c))},ua:function(a){return T.checkFramebufferStatus(a)},
Lb:function(a,b,c,d){T.clearBufferfi(a,b,c,d)},sa:function(a,b,c){T.clearBufferfv(a,b,z,c>>2)},Kb:function(a,b,c){T.clearBufferiv(a,b,x,c>>2)},n:function(a,b,c,d){T.colorMask(!!a,!!b,!!c,!!d)},Qb:function(a){T.compileShader(P[a])},Ea:function(a,b,c,d,e,h,f,l){2<=R.version?T.yc||!f?T.compressedTexImage2D(a,b,c,d,e,h,f,l):T.compressedTexImage2D(a,b,c,d,e,h,w,l,f):T.compressedTexImage2D(a,b,c,d,e,h,l?w.subarray(l,l+f):null)},Ca:function(a,b,c,d,e,h,f,l,n){T.yc?T.compressedTexImage3D(a,b,c,d,e,h,f,l,
n):T.compressedTexImage3D(a,b,c,d,e,h,f,w,n,l)},Aa:function(){var a=Cb(M),b=T.createProgram();b.name=a;b.Fc=b.Dc=b.Ec=0;b.Hc=1;M[a]=b;return a},Sb:function(a){var b=Cb(P);P[b]=T.createShader(a);return b},G:function(a){T.cullFace(a)},Ua:function(a,b){for(var c=0;c<a;c++){var d=x[b+4*c>>2],e=vb[d];e&&(T.deleteBuffer(e),e.name=0,vb[d]=null,d==T.Ic&&(T.Ic=0),d==T.yc&&(T.yc=0))}},d:function(a,b){for(var c=0;c<a;++c){var d=x[b+4*c>>2],e=wb[d];e&&(T.deleteFramebuffer(e),e.name=0,wb[d]=null)}},y:function(a){if(a){var b=
M[a];b?(T.deleteProgram(b),b.name=0,M[a]=null):Q(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=x[b+4*c>>2],e=N[d];e&&(T.deleteRenderbuffer(e),e.name=0,N[d]=null)}},D:function(a){if(a){var b=P[a];b?(T.deleteShader(b),P[a]=null):Q(1281)}},P:function(a,b){for(var c=0;c<a;c++){var d=x[b+4*c>>2],e=O[d];e&&(T.deleteTexture(e),e.name=0,O[d]=null)}},Sa:function(a,b){for(var c=0;c<a;c++){var d=x[b+4*c>>2];T.deleteVertexArray(xb[d]);xb[d]=null}},x:function(a){T.depthFunc(a)},w:function(a){T.depthMask(!!a)},
e:function(a){T.disable(a)},M:function(a){T.disableVertexAttribArray(a)},tb:function(a,b,c){T.drawArrays(a,b,c)},ub:function(a,b,c,d){T.drawArraysInstanced(a,b,c,d)},ta:function(a,b){for(var c=Kb[a],d=0;d<a;d++)c[d]=x[b+4*d>>2];T.drawBuffers(c)},wb:function(a,b,c,d){T.drawElements(a,b,c,d)},xb:function(a,b,c,d,e){T.drawElementsInstanced(a,b,c,d,e)},i:function(a){T.enable(a)},Hb:function(a){T.enableVertexAttribArray(a)},va:function(a,b,c,d){T.framebufferRenderbuffer(a,b,c,N[d])},m:function(a,b,c,d,
e){T.framebufferTexture2D(a,b,c,O[d],e)},C:function(a,b,c,d,e){T.framebufferTextureLayer(a,b,O[c],d,e)},H:function(a){T.frontFace(a)},La:function(a,b){S(a,b,"createBuffer",vb)},wa:function(a,b){S(a,b,"createFramebuffer",wb)},Ja:function(a,b){S(a,b,"createRenderbuffer",N)},Fa:function(a,b){S(a,b,"createTexture",O)},Ra:function(a,b){S(a,b,"createVertexArray",xb)},Nb:function(a,b){return T.getAttribLocation(M[a],E(b))},c:function(a,b){Lb(a,b)},Tb:function(a,b,c,d){a=T.getProgramInfoLog(M[a]);null===
a&&(a="(unknown error)");b=0<b&&d?J(a,d,b):0;c&&(x[c>>2]=b)},za:function(a,b,c){if(c)if(a>=ub)Q(1281);else if(a=M[a],35716==b)a=T.getProgramInfoLog(a),null===a&&(a="(unknown error)"),x[c>>2]=a.length+1;else if(35719==b){if(!a.Fc)for(b=0;b<T.getProgramParameter(a,35718);++b)a.Fc=Math.max(a.Fc,T.getActiveUniform(a,b).name.length+1);x[c>>2]=a.Fc}else if(35722==b){if(!a.Dc)for(b=0;b<T.getProgramParameter(a,35721);++b)a.Dc=Math.max(a.Dc,T.getActiveAttrib(a,b).name.length+1);x[c>>2]=a.Dc}else if(35381==
b){if(!a.Ec)for(b=0;b<T.getProgramParameter(a,35382);++b)a.Ec=Math.max(a.Ec,T.getActiveUniformBlockName(a,b).length+1);x[c>>2]=a.Ec}else x[c>>2]=T.getProgramParameter(a,b);else Q(1281)},Ob:function(a,b,c,d){a=T.getShaderInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?J(a,d,b):0;c&&(x[c>>2]=b)},xa:function(a,b,c){c?35716==b?(a=T.getShaderInfoLog(P[a]),null===a&&(a="(unknown error)"),x[c>>2]=a?a.length+1:0):35720==b?(a=T.getShaderSource(P[a]),x[c>>2]=a?a.length+1:0):x[c>>2]=T.getShaderParameter(P[a],
b):Q(1281)},Va:function(a,b){if(2>R.version)return Q(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(Q(1281),0):c[b];switch(a){case 7939:return c=T.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=Mb(d)+1,h=K(e);h&&J(d,h,e);return h}),c=zb[a]=c,0>b||b>=c.length?(Q(1281),0):c[b];default:return Q(1280),0}},u:function(a,b){b=E(b);if(a=M[a]){var c=a,d=c.Bc,e=c.Xc,h;if(!d)for(c.Bc=d={},c.Wc={},h=0;h<T.getProgramParameter(c,35718);++h){var f=T.getActiveUniform(c,
h);var l=f.name;f=f.size;var n=Nb(l);n=0<n?l.slice(0,n):l;var p=c.Hc;c.Hc+=f;e[n]=[f,p];for(l=0;l<f;++l)d[p]=l,c.Wc[p++]=n}c=a.Bc;d=0;e=b;h=Nb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.Xc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||T.getUniformLocation(a,b)))return d}else Q(1281);return-1},qb:function(a,b,c){for(var d=Kb[b],e=0;e<b;e++)d[e]=x[c+4*e>>2];T.invalidateFramebuffer(a,d)},Ub:function(a){a=M[a];T.linkProgram(a);a.Bc=0;a.Xc={}},Qa:function(a,b){3317==a&&(Ab=b);T.pixelStorei(a,b)},
I:function(a,b){T.polygonOffset(a,b)},sb:function(a){T.readBuffer(a)},Ga:function(a,b,c,d,e){T.renderbufferStorageMultisample(a,b,c,d,e)},p:function(a,b,c,d){T.scissor(a,b,c,d)},Rb:function(a,b,c,d){for(var e="",h=0;h<b;++h){var f=d?x[d+4*h>>2]:-1;e+=E(x[c+4*h>>2],0>f?void 0:f)}T.shaderSource(P[a],e)},Oa:function(a,b,c){T.stencilFunc(a,b,c)},ra:function(a,b,c,d){T.stencilFuncSeparate(a,b,c,d)},v:function(a){T.stencilMask(a)},Na:function(a,b,c){T.stencilOp(a,b,c)},qa:function(a,b,c,d){T.stencilOpSeparate(a,
b,c,d)},Da:function(a,b,c,d,e,h,f,l,n){if(2<=R.version)if(T.yc)T.texImage2D(a,b,c,d,e,h,f,l,n);else if(n){var p=U(l);T.texImage2D(a,b,c,d,e,h,f,l,p,n>>V(p))}else T.texImage2D(a,b,c,d,e,h,f,l,null);else T.texImage2D(a,b,c,d,e,h,f,l,n?Ob(l,f,d,e,n):null)},Ba:function(a,b,c,d,e,h,f,l,n,p){if(T.yc)T.texImage3D(a,b,c,d,e,h,f,l,n,p);else if(p){var q=U(n);T.texImage3D(a,b,c,d,e,h,f,l,n,q,p>>V(q))}else T.texImage3D(a,b,c,d,e,h,f,l,n,null)},F:function(a,b,c){T.texParameterf(a,b,c)},h:function(a,b,c){T.texParameteri(a,
b,c)},pb:function(a,b,c,d,e,h,f,l,n){if(2<=R.version)if(T.yc)T.texSubImage2D(a,b,c,d,e,h,f,l,n);else if(n){var p=U(l);T.texSubImage2D(a,b,c,d,e,h,f,l,p,n>>V(p))}else T.texSubImage2D(a,b,c,d,e,h,f,l,null);else p=null,n&&(p=Ob(l,f,e,h,n)),T.texSubImage2D(a,b,c,d,e,h,f,l,p)},ob:function(a,b,c,d,e,h,f,l,n,p,q){if(T.yc)T.texSubImage3D(a,b,c,d,e,h,f,l,n,p,q);else if(q){var u=U(p);T.texSubImage3D(a,b,c,d,e,h,f,l,n,p,u,q>>V(u))}else T.texSubImage3D(a,b,c,d,e,h,f,l,n,p,null)},Gb:function(a,b,c){if(2<=R.version)b&&
T.uniform1fv(W(a),z,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=z[c+4*e>>2];else d=z.subarray(c>>2,c+4*b>>2);T.uniform1fv(W(a),d)}},ya:function(a,b){T.uniform1i(W(a),b)},Cb:function(a,b,c){if(2<=R.version)b&&T.uniform1iv(W(a),x,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=x[c+4*e>>2];else d=x.subarray(c>>2,c+4*b>>2);T.uniform1iv(W(a),d)}},Fb:function(a,b,c){if(2<=R.version)b&&T.uniform2fv(W(a),z,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=z[c+4*e>>2],d[e+
1]=z[c+(4*e+4)>>2];else d=z.subarray(c>>2,c+8*b>>2);T.uniform2fv(W(a),d)}},Bb:function(a,b,c){if(2<=R.version)b&&T.uniform2iv(W(a),x,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2];else d=x.subarray(c>>2,c+8*b>>2);T.uniform2iv(W(a),d)}},Eb:function(a,b,c){if(2<=R.version)b&&T.uniform3fv(W(a),z,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2],d[e+2]=z[c+(4*e+8)>>2];else d=z.subarray(c>>2,c+12*b>>2);
T.uniform3fv(W(a),d)}},Ab:function(a,b,c){if(2<=R.version)b&&T.uniform3iv(W(a),x,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2];else d=x.subarray(c>>2,c+12*b>>2);T.uniform3iv(W(a),d)}},Db:function(a,b,c){if(2<=R.version)b&&T.uniform4fv(W(a),z,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=z;c>>=2;for(var h=0;h<4*b;h+=4){var f=c+h;d[h]=e[f];d[h+1]=e[f+1];d[h+2]=e[f+2];d[h+3]=e[f+3]}}else d=z.subarray(c>>2,c+16*b>>2);T.uniform4fv(W(a),
d)}},zb:function(a,b,c){if(2<=R.version)b&&T.uniform4iv(W(a),x,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2],d[e+3]=x[c+(4*e+12)>>2];else d=x.subarray(c>>2,c+16*b>>2);T.uniform4iv(W(a),d)}},yb:function(a,b,c,d){if(2<=R.version)b&&T.uniformMatrix4fv(W(a),!!c,z,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],h=z;d>>=2;for(var f=0;f<16*b;f+=16){var l=d+f;e[f]=h[l];e[f+1]=h[l+1];e[f+2]=h[l+2];e[f+3]=h[l+3];e[f+4]=h[l+4];e[f+5]=h[l+5];
e[f+6]=h[l+6];e[f+7]=h[l+7];e[f+8]=h[l+8];e[f+9]=h[l+9];e[f+10]=h[l+10];e[f+11]=h[l+11];e[f+12]=h[l+12];e[f+13]=h[l+13];e[f+14]=h[l+14];e[f+15]=h[l+15]}}else e=z.subarray(d>>2,d+64*b>>2);T.uniformMatrix4fv(W(a),!!c,e)}},o:function(a){a=M[a];T.useProgram(a);T.Yc=a},Ib:function(a,b){T.vertexAttribDivisor(a,b)},Jb:function(a,b,c,d,e,h){T.vertexAttribPointer(a,b,c,!!d,e,h)},k:function(a,b,c,d){T.viewport(a,b,c,d)},Wa:function(){g.Oc=a=>{0!=Wb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",
g.Oc)},Pa:function(){g.Tc=a=>{const b=a.clipboardData.getData("text");Ka(()=>{const c=Qb(b);Xb(c)})};window.addEventListener("paste",g.Tc)},Vb:function(a){g.nd=[];a=E(a);a=document.getElementById(a);g.Pc=b=>{b.stopPropagation();b.preventDefault()};g.Qc=b=>{b.stopPropagation();b.preventDefault()};g.Rc=b=>{b.stopPropagation();b.preventDefault()};g.Sc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.od=c;Yb(c.length);for(let d=0;d<c.length;d++)Ka(()=>{const e=Qb(c[d].name);Zb(d,
e)});$b(b.clientX,b.clientY)};a.addEventListener("dragenter",g.Pc,!1);a.addEventListener("dragleave",g.Qc,!1);a.addEventListener("dragover",g.Rc,!1);a.addEventListener("drop",g.Sc,!1)},mb:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},t:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){ac()});document.body.append(a)},s:function(){document.getElementById("_sokol_app_input_element").focus()},
Mb:function(a){a=E(a);g.zc=document.getElementById(a);g.zc||console.log("sokol_app.h: invalid target:"+a);g.zc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ta:function(){window.removeEventListener("beforeunload",g.Oc)},Ma:function(){window.removeEventListener("paste",g.Tc)},Pb:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.Pc);a.removeEventListener("dragleave",g.Qc);a.removeEventListener("dragover",g.Rc);a.removeEventListener("drop",
g.Sc)},B:function(){g.zc&&g.zc.requestPointerLock&&g.zc.requestPointerLock()},vb:function(a,b){if(g.zc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}g.zc.style.cursor=a}},fb:function(a,b,c){const d=document.createElement("canvas");
d.width=a;d.height=b;const e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(w.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},r:function(){document.getElementById("_sokol_app_input_element").blur()},Ha:function(a){a=E(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize",
"off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},cb:function(){return g.xc?g.xc.bufferSize:0},eb:function(a,b,c){g.sc=null;g.xc=null;"undefined"!==typeof AudioContext?g.sc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(g.sc=null,console.log("sokol_audio.h: no WebAudio support"));return g.sc?(console.log("sokol_audio.h: sample rate ",
g.sc.sampleRate),g.xc=g.sc.createScriptProcessor(c,0,b),g.xc.onaudioprocess=d=>{const e=d.outputBuffer.length,h=bc(e);if(h){const f=d.outputBuffer.numberOfChannels;for(let l=0;l<f;l++){const n=d.outputBuffer.getChannelData(l);for(let p=0;p<e;p++)n[p]=z[(h>>2)+(f*p+l)]}}},g.xc.connect(g.sc.destination),a=()=>{g.sc&&"suspended"===g.sc.state&&g.sc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),
1):0},db:function(){return g.sc?g.sc.sampleRate:0},ma:function(){const a=g.sc;null!==a&&(g.xc&&g.xc.disconnect(),a.close(),g.sc=null,g.xc=null)},bb:function(){if(g.sc)return"suspended"===g.sc.state?1:0},z:function(a,b,c,d,e,h){b=E(b);const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const l=0<d;l&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!l){const n=new Uint8Array(f.response),
p=n.length;p<=h?(w.set(n,e),cc(a,d,p)):dc(a)}else ec(a,f.status)};f.send()},la:function(a,b){b=E(b);const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");fc(a,d)}else ec(a,c.status)};c.send()},pa:function(){return navigator.userAgent.includes("Macintosh")?1:0},ka:function(a,b){b=E(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);
break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;g.asm=c;na=g.asm.Xb;sa();ta=g.asm.oc;va.unshift(g.asm.Yb);B--;g.monitorRunDependencies&&g.monitorRunDependencies(B);if(0==B&&(null!==Aa&&(clearInterval(Aa),Aa=null),C)){var d=C;C=null;d()}return c}var b={a:gc};B++;g.monitorRunDependencies&&g.monitorRunDependencies(B);if(g.instantiateWasm)try{return g.instantiateWasm(b,a)}catch(c){return t("Module.instantiateWasm callback failed with error: "+c),!1}Ga(b,function(c){a(c.instance)});return{}})();
var Ub=g._fs_emsc_alloc=function(){return(Ub=g._fs_emsc_alloc=g.asm.Zb).apply(null,arguments)};function K(){return(K=g.asm._b).apply(null,arguments)}
var Vb=g._fs_emsc_load_snapshot_callback=function(){return(Vb=g._fs_emsc_load_snapshot_callback=g.asm.$b).apply(null,arguments)},ac=g.__sapp_emsc_notify_keyboard_hidden=function(){return(ac=g.__sapp_emsc_notify_keyboard_hidden=g.asm.ac).apply(null,arguments)},Xb=g.__sapp_emsc_onpaste=function(){return(Xb=g.__sapp_emsc_onpaste=g.asm.bc).apply(null,arguments)},Wb=g.__sapp_html5_get_ask_leave_site=function(){return(Wb=g.__sapp_html5_get_ask_leave_site=g.asm.cc).apply(null,arguments)},Yb=g.__sapp_emsc_begin_drop=
function(){return(Yb=g.__sapp_emsc_begin_drop=g.asm.dc).apply(null,arguments)},Zb=g.__sapp_emsc_drop=function(){return(Zb=g.__sapp_emsc_drop=g.asm.ec).apply(null,arguments)},$b=g.__sapp_emsc_end_drop=function(){return($b=g.__sapp_emsc_end_drop=g.asm.fc).apply(null,arguments)};g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.gc).apply(null,arguments)};
var hc=g._main=function(){return(hc=g._main=g.asm.hc).apply(null,arguments)},bc=g.__saudio_emsc_pull=function(){return(bc=g.__saudio_emsc_pull=g.asm.ic).apply(null,arguments)};g.__sargs_add_kvp=function(){return(g.__sargs_add_kvp=g.asm.jc).apply(null,arguments)};
var fc=g.__sfetch_emsc_head_response=function(){return(fc=g.__sfetch_emsc_head_response=g.asm.kc).apply(null,arguments)},cc=g.__sfetch_emsc_get_response=function(){return(cc=g.__sfetch_emsc_get_response=g.asm.lc).apply(null,arguments)},ec=g.__sfetch_emsc_failed_http_status=function(){return(ec=g.__sfetch_emsc_failed_http_status=g.asm.mc).apply(null,arguments)},dc=g.__sfetch_emsc_failed_buffer_too_small=function(){return(dc=g.__sfetch_emsc_failed_buffer_too_small=g.asm.nc).apply(null,arguments)};
function La(){return(La=g.asm.pc).apply(null,arguments)}function Ma(){return(Ma=g.asm.qc).apply(null,arguments)}function Rb(){return(Rb=g.asm.rc).apply(null,arguments)}g.___start_em_js=94964;g.___stop_em_js=107952;var ic;C=function jc(){ic||kc();ic||(C=jc)};function lc(a=[]){var b=hc;a.unshift(ca);var c=a.length,d=Rb(4*(c+1)),e=d>>2;a.forEach(f=>{x[e++]=Qb(f)});x[e]=0;try{var h=b(c,d);Pb(h)}catch(f){f instanceof ka||"unwind"==f||k(1,f)}}
function kc(){var a=ba;function b(){if(!ic&&(ic=!0,g.calledRun=!0,!oa)){Ha(va);Ha(wa);if(g.onRuntimeInitialized)g.onRuntimeInitialized();mc&&lc(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();ya.unshift(c)}Ha(ya)}}if(!(0<B)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)za();Ha(ua);0<B||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},
1)):b())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var mc=!0;g.noInitialRun&&(mc=!1);kc();
