var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,ha,ia;
if(ea){var fs=require("fs"),ja=require("path");q=l?ja.dirname(q)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ja.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ia=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};ha=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ja.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,k)=>{e?c(e):b(d?k.buffer:k)})};!g.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=
typeof module&&(module.exports=g);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof ka||a.context instanceof ka))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});h=(a,b)=>{process.exitCode=a;throw b;};g.inspect=()=>"[Emscripten Module object]"}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+
1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(ia=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ha=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};g.print||console.log.bind(console);var r=g.printErr||console.warn.bind(console);
Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);g.quit&&(h=g.quit);var v;g.wasmBinary&&(v=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&la("no native wasm support detected");var ma,na=!1,oa,w,pa,qa,x,ra,y,z;
function sa(){var a=ma.buffer;g.HEAP8=oa=new Int8Array(a);g.HEAP16=pa=new Int16Array(a);g.HEAP32=x=new Int32Array(a);g.HEAPU8=w=new Uint8Array(a);g.HEAPU16=qa=new Uint16Array(a);g.HEAPU32=ra=new Uint32Array(a);g.HEAPF32=y=new Float32Array(a);g.HEAPF64=z=new Float64Array(a)}var ta,ua=[],va=[],wa=[],xa=[],ya=[];function za(){var a=g.preRun.shift();ua.unshift(a)}var A=0,Aa=null,B=null;
function la(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";r(a);na=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ba(a){return a.startsWith("data:application/octet-stream;base64,")}var C;C="z1013.wasm";if(!Ba(C)){var Ca=C;C=g.locateFile?g.locateFile(Ca,q):q+Ca}function Da(a){try{if(a==C&&v)return new Uint8Array(v);if(ia)return ia(a);throw"both async and sync fetching of the wasm failed";}catch(b){la(b)}}
function Ea(a){if(!v&&(da||l)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>Da(a));if(ha)return new Promise((b,c)=>{ha(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Da(a))}function Fa(a,b,c){return Ea(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{r("failed to asynchronously prepare wasm: "+d);la(d)})}
function Ga(a,b){var c=C;v||"function"!=typeof WebAssembly.instantiateStreaming||Ba(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?Fa(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){r("wasm streaming compile failed: "+e);r("falling back to ArrayBuffer instantiation");return Fa(c,a,b)}))}function ka(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ha(a){for(;0<a.length;)a.shift()(g)}function Ia(a){var b=Ja();a();Ka(b)}var La=0;function Ma(){for(var a=D.length-1;0<=a;--a)Na(a);D=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.oc)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.ad.apply(null,b.Rc)}}var D=[];function Na(a){var b=D[a];b.target.removeEventListener(b.fc,b.Nc,b.hc);D.splice(a,1)}
function E(a){function b(d){++La;Qa=a;Pa();a.jc(d);Pa();--La}if(a.ic)a.Nc=b,a.target.addEventListener(a.fc,b,a.hc),D.push(a),Ra||(xa.push(Ma),Ra=!0);else for(var c=0;c<D.length;++c)D[c].target==a.target&&D[c].fc==a.fc&&Na(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=w,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&$a)a=$a.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var f=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|f:(e&7)<<18|k<<12|f<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
var ab=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function G(a){a=2<a?F(a):a;return ab[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function bb(a){return 0>ab.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var cb;cb=ea?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();var db=[];function H(a){var b=db[a];b||(a>=db.length&&(db.length=a+1),db[a]=b=ta.get(a));return b}
function I(a,b,c){var d=w;if(!(0<c))return 0;var e=b;c=b+c-1;for(var k=0;k<a.length;++k){var f=a.charCodeAt(k);if(55296<=f&&57343>=f){var m=a.charCodeAt(++k);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e}
function eb(a,b,c,d,e,k){Ta||(Ta=J(256));a={target:G(a),fc:k,ic:d,jc:function(f=event){var m=f.target.id?f.target.id:"",n=Ta;I(Sa(f.target),n+0,128);I(m,n+128,128);H(d)(e,n,b)&&f.preventDefault()},hc:c};E(a)}
function fb(a,b,c,d,e,k){Ua||(Ua=J(176));a={target:G(a),oc:!0,fc:k,ic:d,jc:function(f){var m=Ua;z[m>>3]=f.timeStamp;var n=m>>2;x[n+2]=f.location;x[n+3]=f.ctrlKey;x[n+4]=f.shiftKey;x[n+5]=f.altKey;x[n+6]=f.metaKey;x[n+7]=f.repeat;x[n+8]=f.charCode;x[n+9]=f.keyCode;x[n+10]=f.which;I(f.key||"",m+44,32);I(f.code||"",m+76,32);I(f.char||"",m+108,32);I(f.locale||"",m+140,32);H(d)(e,m,b)&&f.preventDefault()},hc:c};E(a)}
function gb(a,b,c){z[a>>3]=b.timeStamp;a>>=2;x[a+2]=b.screenX;x[a+3]=b.screenY;x[a+4]=b.clientX;x[a+5]=b.clientY;x[a+6]=b.ctrlKey;x[a+7]=b.shiftKey;x[a+8]=b.altKey;x[a+9]=b.metaKey;pa[2*a+20]=b.button;pa[2*a+21]=b.buttons;x[a+11]=b.movementX;x[a+12]=b.movementY;c=bb(c);x[a+13]=b.clientX-c.left;x[a+14]=b.clientY-c.top}
function K(a,b,c,d,e,k){Va||(Va=J(72));a=G(a);E({target:a,oc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,fc:k,ic:d,jc:function(f=event){gb(Va,f,a);H(d)(e,Va,b)&&f.preventDefault()},hc:c})}function hb(a,b,c,d,e){Wa||(Wa=J(260));E({target:a,fc:e,ic:d,jc:function(k=event){var f=Wa,m=document.pointerLockElement||document.lc||document.yc||document.xc;x[f>>2]=!!m;var n=m&&m.id?m.id:"";I(Sa(m),f+4,128);I(n,f+132,128);H(d)(20,f,b)&&k.preventDefault()},hc:c})}
function ib(a,b,c,d,e){E({target:a,fc:e,ic:d,jc:function(k=event){H(d)(38,0,b)&&k.preventDefault()},hc:c})}function jb(a,b,c,d){Xa||(Xa=J(36));a=G(a);E({target:a,fc:"resize",ic:d,jc:function(e=event){if(e.target==a){var k=document.body;if(k){var f=Xa;x[f>>2]=e.detail;x[f+4>>2]=k.clientWidth;x[f+8>>2]=k.clientHeight;x[f+12>>2]=innerWidth;x[f+16>>2]=innerHeight;x[f+20>>2]=outerWidth;x[f+24>>2]=outerHeight;x[f+28>>2]=pageXOffset;x[f+32>>2]=pageYOffset;H(d)(10,f,b)&&e.preventDefault()}}},hc:c})}
function kb(a,b,c,d,e,k){Ya||(Ya=J(1696));a=G(a);E({target:a,oc:"touchstart"==k||"touchend"==k,fc:k,ic:d,jc:function(f){for(var m,n={},p=f.touches,t=0;t<p.length;++t)m=p[t],m.zc=m.Bc=0,n[m.identifier]=m;for(t=0;t<f.changedTouches.length;++t)m=f.changedTouches[t],m.zc=1,n[m.identifier]=m;for(t=0;t<f.targetTouches.length;++t)n[f.targetTouches[t].identifier].Bc=1;p=Ya;z[p>>3]=f.timeStamp;var u=p>>2;x[u+3]=f.ctrlKey;x[u+4]=f.shiftKey;x[u+5]=f.altKey;x[u+6]=f.metaKey;u+=7;var ob=bb(a),pb=0;for(t in n)if(m=
n[t],x[u]=m.identifier,x[u+1]=m.screenX,x[u+2]=m.screenY,x[u+3]=m.clientX,x[u+4]=m.clientY,x[u+5]=m.pageX,x[u+6]=m.pageY,x[u+7]=m.zc,x[u+8]=m.Bc,x[u+9]=m.clientX-ob.left,x[u+10]=m.clientY-ob.top,u+=13,31<++pb)break;x[p+8>>2]=pb;H(d)(e,p,b)&&f.preventDefault()},hc:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,f){b.drawElementsInstancedANGLE(c,d,e,k,f)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function qb(a){a.Tc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function rb(a){a.Vc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function sb(a){a.Xc=a.getExtension("WEBGL_multi_draw")}var tb=1,ub=[],L=[],vb=[],M=[],N=[],O=[],wb=[],xb=[],yb={},zb=4;function P(a){Ab||(Ab=a)}function Bb(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}
function Cb(a,b){a.lc||(a.lc=a.getContext,a.getContext=function(d,e){e=a.lc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Ac?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0}function Db(a,b){var c=Bb(xb),d={Uc:c,attributes:b,version:b.Ac,sc:a};a.canvas&&(a.canvas.Qc=d);xb[c]=d;("undefined"==typeof b.wc||b.wc)&&Eb(d);return c}
function Eb(a){a||(a=Q);if(!a.Pc){a.Pc=!0;var b=a.sc;lb(b);mb(b);nb(b);qb(b);rb(b);2<=a.version&&(b.vc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.vc)b.vc=b.getExtension("EXT_disjoint_timer_query");sb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ab,Q;function Fb(a,b,c,d,e,k){a={target:G(a),fc:k,ic:d,jc:(f=event)=>{H(d)(e,0,b)&&f.preventDefault()},hc:c};E(a)}
function Gb(a,b,c,d){Za||(Za=J(104));E({target:a,oc:!0,fc:"wheel",ic:d,jc:function(e=event){var k=Za;gb(k,e,a);z[k+72>>3]=e.deltaX;z[k+80>>3]=e.deltaY;z[k+88>>3]=e.deltaZ;x[k+96>>2]=e.deltaMode;H(d)(9,k,b)&&e.preventDefault()},hc:c})}var Hb=["default","low-power","high-performance"],Ib=[];function R(a,b,c,d){for(var e=0;e<a;e++){var k=S[c](),f=k&&Bb(d);k?(k.name=f,d[f]=k):P(1282);x[b+4*e>>2]=f}}
function Jb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=S.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>Q.version){P(1282);return}c=2*(S.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>Q.version){P(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=S.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":P(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:P(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)x[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){P(1280);r("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:P(1280);r("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}x[b>>2]=c}else P(1281)}
function Kb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Lb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function T(a){a-=5120;return 0==a?oa:1==a?w:2==a?pa:4==a?x:6==a?y:5==a||28922==a||28520==a||30779==a||30782==a?ra:qa}function U(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}
function Mb(a,b,c,d,e){a=T(a);var k=U(a),f=zb;return a.subarray(e>>k,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<k)+f-1&-f)>>k)}function V(a){var b=S.Mc;if(b){var c=b.nc[a];"number"==typeof c&&(b.nc[a]=c=S.getUniformLocation(b,b.Jc[a]+(0<c?"["+c+"]":"")));return c}P(1282)}var W=[],X=[];function Nb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);na=!0}h(a,new ka(a))}function Y(a){var b=Kb(a)+1,c=Ob(b);I(a,c,b);return c}for(var S,Z=0;32>Z;++Z)Ib.push(Array(Z));
var Pb=new Float32Array(288);for(Z=0;288>Z;++Z)W[Z]=Pb.subarray(0,Z+1);var Qb=new Int32Array(288);for(Z=0;288>Z;++Z)X[Z]=Qb.subarray(0,Z+1);
var cc={i:function(){la("")},ha:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ia:function(a,b,c){a=G(a);if(!a)return-4;a=bb(a);z[b>>3]=a.width;z[c>>3]=a.height;return 0},z:cb,db:function(a,b,c){w.copyWithin(a,b,b+c)},_a:function(a,b){function c(d){H(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},cb:function(a){var b=w.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math,k=e.min;d=Math.max(a,
d);d+=(65536-d%65536)%65536;a:{var f=ma.buffer;try{ma.grow(k.call(e,2147483648,d)-f.byteLength+65535>>>16);sa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},R:function(a,b,c,d){eb(a,b,c,d,12,"blur");return 0},ga:function(a,b,c){a=G(a);if(!a)return-4;a.width=b;a.height=c;return 0},S:function(a,b,c,d){eb(a,b,c,d,13,"focus");return 0},$:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},Z:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},_:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},
fa:function(a,b,c,d){K(a,b,c,d,5,"mousedown");return 0},ca:function(a,b,c,d){K(a,b,c,d,33,"mouseenter");return 0},ba:function(a,b,c,d){K(a,b,c,d,34,"mouseleave");return 0},da:function(a,b,c,d){K(a,b,c,d,8,"mousemove");return 0},ea:function(a,b,c,d){K(a,b,c,d,6,"mouseup");return 0},U:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.lc||document.body.yc||document.body.xc))return-1;a=G(a);if(!a)return-4;hb(a,b,c,d,"pointerlockchange");hb(a,b,c,d,"mozpointerlockchange");
hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");return 0},T:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.lc||document.body.yc||document.body.xc))return-1;a=G(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},$a:function(a,b,c,d){jb(a,b,c,d);return 0},V:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},W:function(a,b,c,
d){kb(a,b,c,d,23,"touchend");return 0},X:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},Y:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},Q:function(a,b,c,d){Fb(a,b,c,d,31,"webglcontextlost");return 0},P:function(a,b,c,d){Fb(a,b,c,d,32,"webglcontextrestored");return 0},aa:function(a,b,c,d){a=G(a);return"undefined"!=typeof a.onwheel?(Gb(a,b,c,d),0):-1},Ya:function(a,b){b>>=2;b={alpha:!!x[b],depth:!!x[b+1],stencil:!!x[b+2],antialias:!!x[b+3],premultipliedAlpha:!!x[b+4],preserveDrawingBuffer:!!x[b+
5],powerPreference:Hb[x[b+6]],failIfMajorPerformanceCaveat:!!x[b+7],Ac:x[b+8],Wc:x[b+9],wc:x[b+10],Oc:x[b+11],Yc:x[b+12],Zc:x[b+13]};a=G(a);return!a||b.Oc?0:Cb(a,b)},Va:function(a,b){a=xb[a];b=F(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(S);"OES_vertex_array_object"==b&&mb(S);"WEBGL_draw_buffers"==b&&nb(S);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&qb(S);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&rb(S);"WEBGL_multi_draw"==b&&sb(S);return!!a.sc.getExtension(b)},
Za:function(a){a>>=2;for(var b=0;14>b;++b)x[a+b]=0;x[a]=x[a+1]=x[a+3]=x[a+4]=x[a+8]=x[a+10]=1},Xa:function(a){Q=xb[a];g.Sc=S=Q&&Q.sc;return!a||S?0:-5},f:function(a){S.activeTexture(a)},D:function(a,b){S.attachShader(L[a],O[b])},b:function(a,b){35051==a?S.uc=b:35052==a&&(S.kc=b);S.bindBuffer(a,ub[b])},j:function(a,b){S.bindFramebuffer(a,vb[b])},Fa:function(a,b){S.bindRenderbuffer(a,M[b])},a:function(a,b){S.bindTexture(a,N[b])},M:function(a){S.bindVertexArray(wb[a])},I:function(a,b,c,d){S.blendColor(a,
b,c,d)},J:function(a,b){S.blendEquationSeparate(a,b)},K:function(a,b,c,d){S.blendFuncSeparate(a,b,c,d)},ib:function(a,b,c,d,e,k,f,m,n,p){S.blitFramebuffer(a,b,c,d,e,k,f,m,n,p)},Ha:function(a,b,c,d){2<=Q.version?c&&b?S.bufferData(a,w,d,c,b):S.bufferData(a,b,d):S.bufferData(a,c?w.subarray(c,c+b):b,d)},o:function(a,b,c,d){2<=Q.version?c&&S.bufferSubData(a,b,w,d,c):S.bufferSubData(a,b,w.subarray(d,d+c))},qa:function(a){return S.checkFramebufferStatus(a)},Cb:function(a,b,c,d){S.clearBufferfi(a,b,c,d)},
na:function(a,b,c){S.clearBufferfv(a,b,y,c>>2)},Bb:function(a,b,c){S.clearBufferiv(a,b,x,c>>2)},l:function(a,b,c,d){S.colorMask(!!a,!!b,!!c,!!d)},Gb:function(a){S.compileShader(O[a])},Ca:function(a,b,c,d,e,k,f,m){2<=Q.version?S.kc||!f?S.compressedTexImage2D(a,b,c,d,e,k,f,m):S.compressedTexImage2D(a,b,c,d,e,k,w,m,f):S.compressedTexImage2D(a,b,c,d,e,k,m?w.subarray(m,m+f):null)},za:function(a,b,c,d,e,k,f,m,n){S.kc?S.compressedTexImage3D(a,b,c,d,e,k,f,m,n):S.compressedTexImage3D(a,b,c,d,e,k,f,w,n,m)},
xa:function(){var a=Bb(L),b=S.createProgram();b.name=a;b.rc=b.pc=b.qc=0;b.tc=1;L[a]=b;return a},Ib:function(a){var b=Bb(O);O[b]=S.createShader(a);return b},F:function(a){S.cullFace(a)},Ra:function(a,b){for(var c=0;c<a;c++){var d=x[b+4*c>>2],e=ub[d];e&&(S.deleteBuffer(e),e.name=0,ub[d]=null,d==S.uc&&(S.uc=0),d==S.kc&&(S.kc=0))}},d:function(a,b){for(var c=0;c<a;++c){var d=x[b+4*c>>2],e=vb[d];e&&(S.deleteFramebuffer(e),e.name=0,vb[d]=null)}},x:function(a){if(a){var b=L[a];b?(S.deleteProgram(b),b.name=
0,L[a]=null):P(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=x[b+4*c>>2],e=M[d];e&&(S.deleteRenderbuffer(e),e.name=0,M[d]=null)}},t:function(a){if(a){var b=O[a];b?(S.deleteShader(b),O[a]=null):P(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=x[b+4*c>>2],e=N[d];e&&(S.deleteTexture(e),e.name=0,N[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=x[b+4*c>>2];S.deleteVertexArray(wb[d]);wb[d]=null}},w:function(a){S.depthFunc(a)},v:function(a){S.depthMask(!!a)},e:function(a){S.disable(a)},
L:function(a){S.disableVertexAttribArray(a)},kb:function(a,b,c){S.drawArrays(a,b,c)},lb:function(a,b,c,d){S.drawArraysInstanced(a,b,c,d)},pa:function(a,b){for(var c=Ib[a],d=0;d<a;d++)c[d]=x[b+4*d>>2];S.drawBuffers(c)},mb:function(a,b,c,d){S.drawElements(a,b,c,d)},nb:function(a,b,c,d,e){S.drawElementsInstanced(a,b,c,d,e)},h:function(a){S.enable(a)},yb:function(a){S.enableVertexAttribArray(a)},ra:function(a,b,c,d){S.framebufferRenderbuffer(a,b,c,M[d])},k:function(a,b,c,d,e){S.framebufferTexture2D(a,
b,c,N[d],e)},B:function(a,b,c,d,e){S.framebufferTextureLayer(a,b,N[c],d,e)},G:function(a){S.frontFace(a)},Ia:function(a,b){R(a,b,"createBuffer",ub)},sa:function(a,b){R(a,b,"createFramebuffer",vb)},Ga:function(a,b){R(a,b,"createRenderbuffer",M)},Da:function(a,b){R(a,b,"createTexture",N)},Oa:function(a,b){R(a,b,"createVertexArray",wb)},Eb:function(a,b){return S.getAttribLocation(L[a],F(b))},c:function(a,b){Jb(a,b)},va:function(a,b,c,d){a=S.getProgramInfoLog(L[a]);null===a&&(a="(unknown error)");b=0<
b&&d?I(a,d,b):0;c&&(x[c>>2]=b)},C:function(a,b,c){if(c)if(a>=tb)P(1281);else if(a=L[a],35716==b)a=S.getProgramInfoLog(a),null===a&&(a="(unknown error)"),x[c>>2]=a.length+1;else if(35719==b){if(!a.rc)for(b=0;b<S.getProgramParameter(a,35718);++b)a.rc=Math.max(a.rc,S.getActiveUniform(a,b).name.length+1);x[c>>2]=a.rc}else if(35722==b){if(!a.pc)for(b=0;b<S.getProgramParameter(a,35721);++b)a.pc=Math.max(a.pc,S.getActiveAttrib(a,b).name.length+1);x[c>>2]=a.pc}else if(35381==b){if(!a.qc)for(b=0;b<S.getProgramParameter(a,
35382);++b)a.qc=Math.max(a.qc,S.getActiveUniformBlockName(a,b).length+1);x[c>>2]=a.qc}else x[c>>2]=S.getProgramParameter(a,b);else P(1281)},Fb:function(a,b,c,d){a=S.getShaderInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?I(a,d,b):0;c&&(x[c>>2]=b)},ta:function(a,b,c){c?35716==b?(a=S.getShaderInfoLog(O[a]),null===a&&(a="(unknown error)"),x[c>>2]=a?a.length+1:0):35720==b?(a=S.getShaderSource(O[a]),x[c>>2]=a?a.length+1:0):x[c>>2]=S.getShaderParameter(O[a],b):P(1281)},Sa:function(a,b){if(2>Q.version)return P(1282),
0;var c=yb[a];if(c)return 0>b||b>=c.length?(P(1281),0):c[b];switch(a){case 7939:return c=S.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=Kb(d)+1,k=J(e);k&&I(d,k,e);return k}),c=yb[a]=c,0>b||b>=c.length?(P(1281),0):c[b];default:return P(1280),0}},n:function(a,b){b=F(b);if(a=L[a]){var c=a,d=c.nc,e=c.Kc,k;if(!d)for(c.nc=d={},c.Jc={},k=0;k<S.getProgramParameter(c,35718);++k){var f=S.getActiveUniform(c,k);var m=f.name;f=f.size;var n=Lb(m);n=0<n?m.slice(0,
n):m;var p=c.tc;c.tc+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=m,c.Jc[p++]=n}c=a.nc;d=0;e=b;k=Lb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Kc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||S.getUniformLocation(a,b)))return d}else P(1281);return-1},hb:function(a,b,c){for(var d=Ib[b],e=0;e<b;e++)d[e]=x[c+4*e>>2];S.invalidateFramebuffer(a,d)},wa:function(a){a=L[a];S.linkProgram(a);a.nc=0;a.Kc={}},Na:function(a,b){3317==a&&(zb=b);S.pixelStorei(a,b)},H:function(a,b){S.polygonOffset(a,b)},jb:function(a){S.readBuffer(a)},
Ea:function(a,b,c,d,e){S.renderbufferStorageMultisample(a,b,c,d,e)},oa:function(a,b,c,d){S.scissor(a,b,c,d)},Hb:function(a,b,c,d){for(var e="",k=0;k<b;++k){var f=d?x[d+4*k>>2]:-1;e+=F(x[c+4*k>>2],0>f?void 0:f)}S.shaderSource(O[a],e)},La:function(a,b,c){S.stencilFunc(a,b,c)},ma:function(a,b,c,d){S.stencilFuncSeparate(a,b,c,d)},u:function(a){S.stencilMask(a)},Ka:function(a,b,c){S.stencilOp(a,b,c)},la:function(a,b,c,d){S.stencilOpSeparate(a,b,c,d)},Aa:function(a,b,c,d,e,k,f,m,n){if(2<=Q.version)if(S.kc)S.texImage2D(a,
b,c,d,e,k,f,m,n);else if(n){var p=T(m);S.texImage2D(a,b,c,d,e,k,f,m,p,n>>U(p))}else S.texImage2D(a,b,c,d,e,k,f,m,null);else S.texImage2D(a,b,c,d,e,k,f,m,n?Mb(m,f,d,e,n):null)},ya:function(a,b,c,d,e,k,f,m,n,p){if(S.kc)S.texImage3D(a,b,c,d,e,k,f,m,n,p);else if(p){var t=T(n);S.texImage3D(a,b,c,d,e,k,f,m,n,t,p>>U(t))}else S.texImage3D(a,b,c,d,e,k,f,m,n,null)},E:function(a,b,c){S.texParameterf(a,b,c)},g:function(a,b,c){S.texParameteri(a,b,c)},fb:function(a,b,c,d,e,k,f,m,n){if(2<=Q.version)if(S.kc)S.texSubImage2D(a,
b,c,d,e,k,f,m,n);else if(n){var p=T(m);S.texSubImage2D(a,b,c,d,e,k,f,m,p,n>>U(p))}else S.texSubImage2D(a,b,c,d,e,k,f,m,null);else p=null,n&&(p=Mb(m,f,e,k,n)),S.texSubImage2D(a,b,c,d,e,k,f,m,p)},eb:function(a,b,c,d,e,k,f,m,n,p,t){if(S.kc)S.texSubImage3D(a,b,c,d,e,k,f,m,n,p,t);else if(t){var u=T(p);S.texSubImage3D(a,b,c,d,e,k,f,m,n,p,u,t>>U(u))}else S.texSubImage3D(a,b,c,d,e,k,f,m,n,p,null)},xb:function(a,b,c){if(2<=Q.version)b&&S.uniform1fv(V(a),y,c>>2,b);else{if(288>=b)for(var d=W[b-1],e=0;e<b;++e)d[e]=
y[c+4*e>>2];else d=y.subarray(c>>2,c+4*b>>2);S.uniform1fv(V(a),d)}},ua:function(a,b){S.uniform1i(V(a),b)},tb:function(a,b,c){if(2<=Q.version)b&&S.uniform1iv(V(a),x,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=x[c+4*e>>2];else d=x.subarray(c>>2,c+4*b>>2);S.uniform1iv(V(a),d)}},wb:function(a,b,c){if(2<=Q.version)b&&S.uniform2fv(V(a),y,c>>2,2*b);else{if(144>=b)for(var d=W[2*b-1],e=0;e<2*b;e+=2)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2];else d=y.subarray(c>>2,c+8*b>>2);S.uniform2fv(V(a),d)}},
sb:function(a,b,c){if(2<=Q.version)b&&S.uniform2iv(V(a),x,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2];else d=x.subarray(c>>2,c+8*b>>2);S.uniform2iv(V(a),d)}},vb:function(a,b,c){if(2<=Q.version)b&&S.uniform3fv(V(a),y,c>>2,3*b);else{if(96>=b)for(var d=W[3*b-1],e=0;e<3*b;e+=3)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2],d[e+2]=y[c+(4*e+8)>>2];else d=y.subarray(c>>2,c+12*b>>2);S.uniform3fv(V(a),d)}},qb:function(a,b,c){if(2<=Q.version)b&&S.uniform3iv(V(a),
x,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2];else d=x.subarray(c>>2,c+12*b>>2);S.uniform3iv(V(a),d)}},ub:function(a,b,c){if(2<=Q.version)b&&S.uniform4fv(V(a),y,c>>2,4*b);else{if(72>=b){var d=W[4*b-1],e=y;c>>=2;for(var k=0;k<4*b;k+=4){var f=c+k;d[k]=e[f];d[k+1]=e[f+1];d[k+2]=e[f+2];d[k+3]=e[f+3]}}else d=y.subarray(c>>2,c+16*b>>2);S.uniform4fv(V(a),d)}},pb:function(a,b,c){if(2<=Q.version)b&&S.uniform4iv(V(a),x,c>>2,4*b);else{if(72>=
b)for(var d=X[4*b-1],e=0;e<4*b;e+=4)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2],d[e+3]=x[c+(4*e+12)>>2];else d=x.subarray(c>>2,c+16*b>>2);S.uniform4iv(V(a),d)}},ob:function(a,b,c,d){if(2<=Q.version)b&&S.uniformMatrix4fv(V(a),!!c,y,d>>2,16*b);else{if(18>=b){var e=W[16*b-1],k=y;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=k[m];e[f+1]=k[m+1];e[f+2]=k[m+2];e[f+3]=k[m+3];e[f+4]=k[m+4];e[f+5]=k[m+5];e[f+6]=k[m+6];e[f+7]=k[m+7];e[f+8]=k[m+8];e[f+9]=k[m+9];e[f+10]=k[m+10];e[f+11]=k[m+
11];e[f+12]=k[m+12];e[f+13]=k[m+13];e[f+14]=k[m+14];e[f+15]=k[m+15]}}else e=y.subarray(d>>2,d+64*b>>2);S.uniformMatrix4fv(V(a),!!c,e)}},m:function(a){a=L[a];S.useProgram(a);S.Mc=a},zb:function(a,b){S.vertexAttribDivisor(a,b)},Ab:function(a,b,c,d,e,k){S.vertexAttribPointer(a,b,c,!!d,e,k)},q:function(a,b,c,d){S.viewport(a,b,c,d)},Wa:function(){g.Cc=a=>{0!=Rb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.Cc)},Ta:function(){g.Ic=a=>{const b=a.clipboardData.getData("text");
Ia(()=>{const c=Y(b);Sb(c)})};window.addEventListener("paste",g.Ic)},Ma:function(a){g.$c=[];a=F(a);a=document.getElementById(a);g.Dc=b=>{b.stopPropagation();b.preventDefault()};g.Ec=b=>{b.stopPropagation();b.preventDefault()};g.Fc=b=>{b.stopPropagation();b.preventDefault()};g.Gc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.Hc=c;Tb(c.length);for(let d=0;d<c.length;d++)Ia(()=>{const e=Y(c[d].name);Ub(d,e)});Vb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.Dc,!1);
a.addEventListener("dragleave",g.Ec,!1);a.addEventListener("dragover",g.Fc,!1);a.addEventListener("drop",g.Gc,!1)},rb:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},s:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Wb()});document.body.append(a)},Ja:function(a){const b=g.Hc;return 0>a||a>=b.length?0:b[a].size},Ba:function(a,b,c,d,e){const k=
new FileReader;k.onload=f=>{f=f.target.result;f.byteLength>d?Xb(a,0,1,b,0,c,d,e):(w.set(new Uint8Array(f),c),Xb(a,1,0,b,f.byteLength,c,d,e))};k.onerror=()=>{Xb(a,0,2,b,0,c,d,e)};k.readAsArrayBuffer(g.Hc[a])},r:function(){document.getElementById("_sokol_app_input_element").focus()},Db:function(a){a=F(a);g.mc=document.getElementById(a);g.mc||console.log("sokol_app.h: invalid target:"+a);g.mc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ua:function(){window.removeEventListener("beforeunload",
g.Cc)},Qa:function(){window.removeEventListener("paste",g.Ic)},Jb:function(a){a=F(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.Dc);a.removeEventListener("dragleave",g.Ec);a.removeEventListener("dragover",g.Fc);a.removeEventListener("drop",g.Gc)},A:function(){g.mc&&g.mc.requestPointerLock&&g.mc.requestPointerLock()},gb:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(w.subarray(c,c+a*
b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},p:function(){document.getElementById("_sokol_app_input_element").blur()},ab:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],d=b.value[1];Ia(()=>{const e=Y(c),k=Y(d);Yb(e,k)})}},bb:function(){if(g.Lc)return"suspended"===g.Lc.state?1:0},y:function(a,b,c,d,e,k){b=
F(b);const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const m=0<d;m&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!m){const n=new Uint8Array(f.response),p=n.length;p<=k?(w.set(n,e),Zb(a,d,p)):$b(a)}else ac(a,f.status)};f.send()},ka:function(a,b){b=F(b);const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==
c.status){const d=c.getResponseHeader("Content-Length");bc(a,d)}else ac(a,c.status)};c.send()},ja:function(a,b){b=F(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;g.asm=c;ma=g.asm.Kb;sa();ta=g.asm.bc;va.unshift(g.asm.Lb);A--;g.monitorRunDependencies&&g.monitorRunDependencies(A);if(0==A&&(null!==Aa&&(clearInterval(Aa),Aa=null),B)){var d=B;B=null;d()}return c}var b={a:cc};A++;g.monitorRunDependencies&&g.monitorRunDependencies(A);if(g.instantiateWasm)try{return g.instantiateWasm(b,a)}catch(c){return r("Module.instantiateWasm callback failed with error: "+c),!1}Ga(b,function(c){a(c.instance)});return{}})();
g._fs_emsc_alloc=function(){return(g._fs_emsc_alloc=g.asm.Mb).apply(null,arguments)};function J(){return(J=g.asm.Nb).apply(null,arguments)}g._fs_emsc_load_snapshot_callback=function(){return(g._fs_emsc_load_snapshot_callback=g.asm.Ob).apply(null,arguments)};
var Wb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Wb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Pb).apply(null,arguments)},Sb=g.__sapp_emsc_onpaste=function(){return(Sb=g.__sapp_emsc_onpaste=g.asm.Qb).apply(null,arguments)},Rb=g.__sapp_html5_get_ask_leave_site=function(){return(Rb=g.__sapp_html5_get_ask_leave_site=g.asm.Rb).apply(null,arguments)},Tb=g.__sapp_emsc_begin_drop=function(){return(Tb=g.__sapp_emsc_begin_drop=g.asm.Sb).apply(null,arguments)},Ub=g.__sapp_emsc_drop=function(){return(Ub=
g.__sapp_emsc_drop=g.asm.Tb).apply(null,arguments)},Vb=g.__sapp_emsc_end_drop=function(){return(Vb=g.__sapp_emsc_end_drop=g.asm.Ub).apply(null,arguments)},Xb=g.__sapp_emsc_invoke_fetch_cb=function(){return(Xb=g.__sapp_emsc_invoke_fetch_cb=g.asm.Vb).apply(null,arguments)},dc=g._main=function(){return(dc=g._main=g.asm.Wb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Xb).apply(null,arguments)};
var Yb=g.__sargs_add_kvp=function(){return(Yb=g.__sargs_add_kvp=g.asm.Yb).apply(null,arguments)},bc=g.__sfetch_emsc_head_response=function(){return(bc=g.__sfetch_emsc_head_response=g.asm.Zb).apply(null,arguments)},Zb=g.__sfetch_emsc_get_response=function(){return(Zb=g.__sfetch_emsc_get_response=g.asm._b).apply(null,arguments)},ac=g.__sfetch_emsc_failed_http_status=function(){return(ac=g.__sfetch_emsc_failed_http_status=g.asm.$b).apply(null,arguments)},$b=g.__sfetch_emsc_failed_buffer_too_small=function(){return($b=
g.__sfetch_emsc_failed_buffer_too_small=g.asm.ac).apply(null,arguments)};function Ja(){return(Ja=g.asm.cc).apply(null,arguments)}function Ka(){return(Ka=g.asm.dc).apply(null,arguments)}function Ob(){return(Ob=g.asm.ec).apply(null,arguments)}g.___start_em_js=21728;g.___stop_em_js=34622;var ec;B=function fc(){ec||gc();ec||(B=fc)};
function hc(a=[]){var b=dc;a.unshift(ca);var c=a.length,d=Ob(4*(c+1)),e=d>>2;a.forEach(f=>{x[e++]=Y(f)});x[e]=0;try{var k=b(c,d);Nb(k)}catch(f){f instanceof ka||"unwind"==f||h(1,f)}}
function gc(){var a=ba;function b(){if(!ec&&(ec=!0,g.calledRun=!0,!na)){Ha(va);Ha(wa);if(g.onRuntimeInitialized)g.onRuntimeInitialized();ic&&hc(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();ya.unshift(c)}Ha(ya)}}if(!(0<A)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)za();Ha(ua);0<A||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},
1)):b())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var ic=!0;g.noInitialRun&&(ic=!1);gc();
