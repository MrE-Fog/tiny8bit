var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,ha,ia;
if(ea){var fs=require("fs"),ja=require("path");q=l?ja.dirname(q)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ja.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ia=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};ha=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ja.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,k)=>{e?c(e):b(d?k.buffer:k)})};!f.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=
typeof module&&(module.exports=f);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof ka||a.context instanceof ka))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});h=(a,b)=>{process.exitCode=a;throw b;};f.inspect=()=>"[Emscripten Module object]"}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+
1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(ia=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ha=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var r=f.printErr||console.warn.bind(console);
Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);f.thisProgram&&(ca=f.thisProgram);f.quit&&(h=f.quit);var v;f.wasmBinary&&(v=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&la("no native wasm support detected");var ma,na=!1,oa,w,pa,qa,x,ra,y,z;
function sa(){var a=ma.buffer;f.HEAP8=oa=new Int8Array(a);f.HEAP16=pa=new Int16Array(a);f.HEAP32=x=new Int32Array(a);f.HEAPU8=w=new Uint8Array(a);f.HEAPU16=qa=new Uint16Array(a);f.HEAPU32=ra=new Uint32Array(a);f.HEAPF32=y=new Float32Array(a);f.HEAPF64=z=new Float64Array(a)}var ta,ua=[],va=[],wa=[],xa=[],ya=[];function za(){var a=f.preRun.shift();ua.unshift(a)}var A=0,Aa=null,B=null;
function la(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";r(a);na=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ba(a){return a.startsWith("data:application/octet-stream;base64,")}var C;C="cpc.wasm";if(!Ba(C)){var Ca=C;C=f.locateFile?f.locateFile(Ca,q):q+Ca}function Da(a){try{if(a==C&&v)return new Uint8Array(v);if(ia)return ia(a);throw"both async and sync fetching of the wasm failed";}catch(b){la(b)}}
function Ea(a){if(!v&&(da||l)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>Da(a));if(ha)return new Promise((b,c)=>{ha(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Da(a))}function Fa(a,b,c){return Ea(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{r("failed to asynchronously prepare wasm: "+d);la(d)})}
function Ga(a,b){var c=C;v||"function"!=typeof WebAssembly.instantiateStreaming||Ba(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?Fa(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){r("wasm streaming compile failed: "+e);r("falling back to ArrayBuffer instantiation");return Fa(c,a,b)}))}function ka(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ha(a){for(;0<a.length;)a.shift()(f)}function Ia(a){var b=Ja();a();Ka(b)}var La=0;function Ma(){for(var a=D.length-1;0<=a;--a)Na(a);D=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.tc)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.ed.apply(null,b.Vc)}}var D=[];function Na(a){var b=D[a];b.target.removeEventListener(b.kc,b.Rc,b.lc);D.splice(a,1)}
function E(a){function b(d){++La;Qa=a;Pa();a.nc(d);Pa();--La}if(a.mc)a.Rc=b,a.target.addEventListener(a.kc,b,a.lc),D.push(a),Ra||(xa.push(Ma),Ra=!0);else for(var c=0;c<D.length;++c)D[c].target==a.target&&D[c].kc==a.kc&&Na(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=w,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&$a)a=$a.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
var ab=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function G(a){a=2<a?F(a):a;return ab[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function bb(a){return 0>ab.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var cb;cb=ea?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();var db=[];function H(a){var b=db[a];b||(a>=db.length&&(db.length=a+1),db[a]=b=ta.get(a));return b}
function I(a,b,c){var d=w;if(!(0<c))return 0;var e=b;c=b+c-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0;return b-e}
function eb(a,b,c,d,e,k){Ta||(Ta=J(256));a={target:G(a),kc:k,mc:d,nc:function(g=event){var m=g.target.id?g.target.id:"",n=Ta;I(Sa(g.target),n+0,128);I(m,n+128,128);H(d)(e,n,b)&&g.preventDefault()},lc:c};E(a)}
function fb(a,b,c,d,e,k){Ua||(Ua=J(176));a={target:G(a),tc:!0,kc:k,mc:d,nc:function(g){var m=Ua;z[m>>3]=g.timeStamp;var n=m>>2;x[n+2]=g.location;x[n+3]=g.ctrlKey;x[n+4]=g.shiftKey;x[n+5]=g.altKey;x[n+6]=g.metaKey;x[n+7]=g.repeat;x[n+8]=g.charCode;x[n+9]=g.keyCode;x[n+10]=g.which;I(g.key||"",m+44,32);I(g.code||"",m+76,32);I(g.char||"",m+108,32);I(g.locale||"",m+140,32);H(d)(e,m,b)&&g.preventDefault()},lc:c};E(a)}
function gb(a,b,c){z[a>>3]=b.timeStamp;a>>=2;x[a+2]=b.screenX;x[a+3]=b.screenY;x[a+4]=b.clientX;x[a+5]=b.clientY;x[a+6]=b.ctrlKey;x[a+7]=b.shiftKey;x[a+8]=b.altKey;x[a+9]=b.metaKey;pa[2*a+20]=b.button;pa[2*a+21]=b.buttons;x[a+11]=b.movementX;x[a+12]=b.movementY;c=bb(c);x[a+13]=b.clientX-c.left;x[a+14]=b.clientY-c.top}
function K(a,b,c,d,e,k){Va||(Va=J(72));a=G(a);E({target:a,tc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,kc:k,mc:d,nc:function(g=event){gb(Va,g,a);H(d)(e,Va,b)&&g.preventDefault()},lc:c})}function hb(a,b,c,d,e){Wa||(Wa=J(260));E({target:a,kc:e,mc:d,nc:function(k=event){var g=Wa,m=document.pointerLockElement||document.qc||document.Ec||document.Dc;x[g>>2]=!!m;var n=m&&m.id?m.id:"";I(Sa(m),g+4,128);I(n,g+132,128);H(d)(20,g,b)&&k.preventDefault()},lc:c})}
function ib(a,b,c,d,e){E({target:a,kc:e,mc:d,nc:function(k=event){H(d)(38,0,b)&&k.preventDefault()},lc:c})}function jb(a,b,c,d){Xa||(Xa=J(36));a=G(a);E({target:a,kc:"resize",mc:d,nc:function(e=event){if(e.target==a){var k=document.body;if(k){var g=Xa;x[g>>2]=e.detail;x[g+4>>2]=k.clientWidth;x[g+8>>2]=k.clientHeight;x[g+12>>2]=innerWidth;x[g+16>>2]=innerHeight;x[g+20>>2]=outerWidth;x[g+24>>2]=outerHeight;x[g+28>>2]=pageXOffset;x[g+32>>2]=pageYOffset;H(d)(10,g,b)&&e.preventDefault()}}},lc:c})}
function kb(a,b,c,d,e,k){Ya||(Ya=J(1696));a=G(a);E({target:a,tc:"touchstart"==k||"touchend"==k,kc:k,mc:d,nc:function(g){for(var m,n={},p=g.touches,t=0;t<p.length;++t)m=p[t],m.Cc=m.Gc=0,n[m.identifier]=m;for(t=0;t<g.changedTouches.length;++t)m=g.changedTouches[t],m.Cc=1,n[m.identifier]=m;for(t=0;t<g.targetTouches.length;++t)n[g.targetTouches[t].identifier].Gc=1;p=Ya;z[p>>3]=g.timeStamp;var u=p>>2;x[u+3]=g.ctrlKey;x[u+4]=g.shiftKey;x[u+5]=g.altKey;x[u+6]=g.metaKey;u+=7;var ob=bb(a),pb=0;for(t in n)if(m=
n[t],x[u]=m.identifier,x[u+1]=m.screenX,x[u+2]=m.screenY,x[u+3]=m.clientX,x[u+4]=m.clientY,x[u+5]=m.pageX,x[u+6]=m.pageY,x[u+7]=m.Cc,x[u+8]=m.Gc,x[u+9]=m.clientX-ob.left,x[u+10]=m.clientY-ob.top,u+=13,31<++pb)break;x[p+8>>2]=pb;H(d)(e,p,b)&&g.preventDefault()},lc:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function qb(a){a.Xc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function rb(a){a.Zc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function sb(a){a.ad=a.getExtension("WEBGL_multi_draw")}var tb=1,ub=[],L=[],vb=[],M=[],N=[],O=[],wb=[],xb=[],yb={},zb=4;function P(a){Ab||(Ab=a)}function Bb(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}
function Cb(a,b){a.qc||(a.qc=a.getContext,a.getContext=function(d,e){e=a.qc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Fc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0}function Db(a,b){var c=Bb(xb),d={Yc:c,attributes:b,version:b.Fc,xc:a};a.canvas&&(a.canvas.Uc=d);xb[c]=d;("undefined"==typeof b.Bc||b.Bc)&&Eb(d);return c}
function Eb(a){a||(a=Q);if(!a.Tc){a.Tc=!0;var b=a.xc;lb(b);mb(b);nb(b);qb(b);rb(b);2<=a.version&&(b.Ac=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Ac)b.Ac=b.getExtension("EXT_disjoint_timer_query");sb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ab,Q;function Fb(a,b,c,d,e,k){a={target:G(a),kc:k,mc:d,nc:(g=event)=>{H(d)(e,0,b)&&g.preventDefault()},lc:c};E(a)}
function Gb(a,b,c,d){Za||(Za=J(104));E({target:a,tc:!0,kc:"wheel",mc:d,nc:function(e=event){var k=Za;gb(k,e,a);z[k+72>>3]=e.deltaX;z[k+80>>3]=e.deltaY;z[k+88>>3]=e.deltaZ;x[k+96>>2]=e.deltaMode;H(d)(9,k,b)&&e.preventDefault()},lc:c})}var Hb=["default","low-power","high-performance"],Ib=[];function R(a,b,c,d){for(var e=0;e<a;e++){var k=S[c](),g=k&&Bb(d);k?(k.name=g,d[g]=k):P(1282);x[b+4*e>>2]=g}}
function Jb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=S.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>Q.version){P(1282);return}c=2*(S.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>Q.version){P(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=S.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":P(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:P(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)x[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){P(1280);r("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:P(1280);r("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}x[b>>2]=c}else P(1281)}
function Kb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Lb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function T(a){a-=5120;return 0==a?oa:1==a?w:2==a?pa:4==a?x:6==a?y:5==a||28922==a||28520==a||30779==a||30782==a?ra:qa}function U(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}
function Mb(a,b,c,d,e){a=T(a);var k=U(a),g=zb;return a.subarray(e>>k,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<k)+g-1&-g)>>k)}function V(a){var b=S.Qc;if(b){var c=b.sc[a];"number"==typeof c&&(b.sc[a]=c=S.getUniformLocation(b,b.Oc[a]+(0<c?"["+c+"]":"")));return c}P(1282)}var W=[],X=[];function Nb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);na=!0}h(a,new ka(a))}function Y(a){var b=Kb(a)+1,c=Ob(b);I(a,c,b);return c}for(var S,Z=0;32>Z;++Z)Ib.push(Array(Z));
var Pb=new Float32Array(288);for(Z=0;288>Z;++Z)W[Z]=Pb.subarray(0,Z+1);var Qb=new Int32Array(288);for(Z=0;288>Z;++Z)X[Z]=Qb.subarray(0,Z+1);
var dc={i:function(){la("")},ga:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ha:function(a,b,c){a=G(a);if(!a)return-4;a=bb(a);z[b>>3]=a.width;z[c>>3]=a.height;return 0},y:cb,gb:function(a,b,c){w.copyWithin(a,b,b+c)},Za:function(a,b){function c(d){H(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},fb:function(a){var b=w.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math,k=e.min;d=Math.max(a,
d);d+=(65536-d%65536)%65536;a:{var g=ma.buffer;try{ma.grow(k.call(e,2147483648,d)-g.byteLength+65535>>>16);sa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},Q:function(a,b,c,d){eb(a,b,c,d,12,"blur");return 0},fa:function(a,b,c){a=G(a);if(!a)return-4;a.width=b;a.height=c;return 0},R:function(a,b,c,d){eb(a,b,c,d,13,"focus");return 0},_:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},Y:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},Z:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},
ea:function(a,b,c,d){K(a,b,c,d,5,"mousedown");return 0},ba:function(a,b,c,d){K(a,b,c,d,33,"mouseenter");return 0},aa:function(a,b,c,d){K(a,b,c,d,34,"mouseleave");return 0},ca:function(a,b,c,d){K(a,b,c,d,8,"mousemove");return 0},da:function(a,b,c,d){K(a,b,c,d,6,"mouseup");return 0},T:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.qc||document.body.Ec||document.body.Dc))return-1;a=G(a);if(!a)return-4;hb(a,b,c,d,"pointerlockchange");hb(a,b,c,d,"mozpointerlockchange");
hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");return 0},S:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.qc||document.body.Ec||document.body.Dc))return-1;a=G(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},$a:function(a,b,c,d){jb(a,b,c,d);return 0},U:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},V:function(a,b,c,
d){kb(a,b,c,d,23,"touchend");return 0},W:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},X:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},P:function(a,b,c,d){Fb(a,b,c,d,31,"webglcontextlost");return 0},O:function(a,b,c,d){Fb(a,b,c,d,32,"webglcontextrestored");return 0},$:function(a,b,c,d){a=G(a);return"undefined"!=typeof a.onwheel?(Gb(a,b,c,d),0):-1},Xa:function(a,b){b>>=2;b={alpha:!!x[b],depth:!!x[b+1],stencil:!!x[b+2],antialias:!!x[b+3],premultipliedAlpha:!!x[b+4],preserveDrawingBuffer:!!x[b+
5],powerPreference:Hb[x[b+6]],failIfMajorPerformanceCaveat:!!x[b+7],Fc:x[b+8],$c:x[b+9],Bc:x[b+10],Sc:x[b+11],bd:x[b+12],cd:x[b+13]};a=G(a);return!a||b.Sc?0:Cb(a,b)},Va:function(a,b){a=xb[a];b=F(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(S);"OES_vertex_array_object"==b&&mb(S);"WEBGL_draw_buffers"==b&&nb(S);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&qb(S);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&rb(S);"WEBGL_multi_draw"==b&&sb(S);return!!a.xc.getExtension(b)},
Ya:function(a){a>>=2;for(var b=0;14>b;++b)x[a+b]=0;x[a]=x[a+1]=x[a+3]=x[a+4]=x[a+8]=x[a+10]=1},Wa:function(a){Q=xb[a];f.Wc=S=Q&&Q.xc;return!a||S?0:-5},f:function(a){S.activeTexture(a)},C:function(a,b){S.attachShader(L[a],O[b])},b:function(a,b){35051==a?S.zc=b:35052==a&&(S.pc=b);S.bindBuffer(a,ub[b])},j:function(a,b){S.bindFramebuffer(a,vb[b])},Fa:function(a,b){S.bindRenderbuffer(a,M[b])},a:function(a,b){S.bindTexture(a,N[b])},L:function(a){S.bindVertexArray(wb[a])},H:function(a,b,c,d){S.blendColor(a,
b,c,d)},I:function(a,b){S.blendEquationSeparate(a,b)},J:function(a,b,c,d){S.blendFuncSeparate(a,b,c,d)},kb:function(a,b,c,d,e,k,g,m,n,p){S.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},Ha:function(a,b,c,d){2<=Q.version?c&&b?S.bufferData(a,w,d,c,b):S.bufferData(a,b,d):S.bufferData(a,c?w.subarray(c,c+b):b,d)},n:function(a,b,c,d){2<=Q.version?c&&S.bufferSubData(a,b,w,d,c):S.bufferSubData(a,b,w.subarray(d,d+c))},qa:function(a){return S.checkFramebufferStatus(a)},Fb:function(a,b,c,d){S.clearBufferfi(a,b,c,d)},
na:function(a,b,c){S.clearBufferfv(a,b,y,c>>2)},Eb:function(a,b,c){S.clearBufferiv(a,b,x,c>>2)},l:function(a,b,c,d){S.colorMask(!!a,!!b,!!c,!!d)},Jb:function(a){S.compileShader(O[a])},Ba:function(a,b,c,d,e,k,g,m){2<=Q.version?S.pc||!g?S.compressedTexImage2D(a,b,c,d,e,k,g,m):S.compressedTexImage2D(a,b,c,d,e,k,w,m,g):S.compressedTexImage2D(a,b,c,d,e,k,m?w.subarray(m,m+g):null)},za:function(a,b,c,d,e,k,g,m,n){S.pc?S.compressedTexImage3D(a,b,c,d,e,k,g,m,n):S.compressedTexImage3D(a,b,c,d,e,k,g,w,n,m)},
xa:function(){var a=Bb(L),b=S.createProgram();b.name=a;b.wc=b.uc=b.vc=0;b.yc=1;L[a]=b;return a},Lb:function(a){var b=Bb(O);O[b]=S.createShader(a);return b},E:function(a){S.cullFace(a)},Ra:function(a,b){for(var c=0;c<a;c++){var d=x[b+4*c>>2],e=ub[d];e&&(S.deleteBuffer(e),e.name=0,ub[d]=null,d==S.zc&&(S.zc=0),d==S.pc&&(S.pc=0))}},d:function(a,b){for(var c=0;c<a;++c){var d=x[b+4*c>>2],e=vb[d];e&&(S.deleteFramebuffer(e),e.name=0,vb[d]=null)}},w:function(a){if(a){var b=L[a];b?(S.deleteProgram(b),b.name=
0,L[a]=null):P(1281)}},M:function(a,b){for(var c=0;c<a;c++){var d=x[b+4*c>>2],e=M[d];e&&(S.deleteRenderbuffer(e),e.name=0,M[d]=null)}},B:function(a){if(a){var b=O[a];b?(S.deleteShader(b),O[a]=null):P(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=x[b+4*c>>2],e=N[d];e&&(S.deleteTexture(e),e.name=0,N[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=x[b+4*c>>2];S.deleteVertexArray(wb[d]);wb[d]=null}},v:function(a){S.depthFunc(a)},u:function(a){S.depthMask(!!a)},e:function(a){S.disable(a)},
K:function(a){S.disableVertexAttribArray(a)},mb:function(a,b,c){S.drawArrays(a,b,c)},ob:function(a,b,c,d){S.drawArraysInstanced(a,b,c,d)},pa:function(a,b){for(var c=Ib[a],d=0;d<a;d++)c[d]=x[b+4*d>>2];S.drawBuffers(c)},pb:function(a,b,c,d){S.drawElements(a,b,c,d)},qb:function(a,b,c,d,e){S.drawElementsInstanced(a,b,c,d,e)},h:function(a){S.enable(a)},Bb:function(a){S.enableVertexAttribArray(a)},ra:function(a,b,c,d){S.framebufferRenderbuffer(a,b,c,M[d])},k:function(a,b,c,d,e){S.framebufferTexture2D(a,
b,c,N[d],e)},A:function(a,b,c,d,e){S.framebufferTextureLayer(a,b,N[c],d,e)},F:function(a){S.frontFace(a)},Ia:function(a,b){R(a,b,"createBuffer",ub)},sa:function(a,b){R(a,b,"createFramebuffer",vb)},Ga:function(a,b){R(a,b,"createRenderbuffer",M)},Ca:function(a,b){R(a,b,"createTexture",N)},Oa:function(a,b){R(a,b,"createVertexArray",wb)},Gb:function(a,b){return S.getAttribLocation(L[a],F(b))},c:function(a,b){Jb(a,b)},Mb:function(a,b,c,d){a=S.getProgramInfoLog(L[a]);null===a&&(a="(unknown error)");b=0<
b&&d?I(a,d,b):0;c&&(x[c>>2]=b)},va:function(a,b,c){if(c)if(a>=tb)P(1281);else if(a=L[a],35716==b)a=S.getProgramInfoLog(a),null===a&&(a="(unknown error)"),x[c>>2]=a.length+1;else if(35719==b){if(!a.wc)for(b=0;b<S.getProgramParameter(a,35718);++b)a.wc=Math.max(a.wc,S.getActiveUniform(a,b).name.length+1);x[c>>2]=a.wc}else if(35722==b){if(!a.uc)for(b=0;b<S.getProgramParameter(a,35721);++b)a.uc=Math.max(a.uc,S.getActiveAttrib(a,b).name.length+1);x[c>>2]=a.uc}else if(35381==b){if(!a.vc)for(b=0;b<S.getProgramParameter(a,
35382);++b)a.vc=Math.max(a.vc,S.getActiveUniformBlockName(a,b).length+1);x[c>>2]=a.vc}else x[c>>2]=S.getProgramParameter(a,b);else P(1281)},Ib:function(a,b,c,d){a=S.getShaderInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?I(a,d,b):0;c&&(x[c>>2]=b)},ta:function(a,b,c){c?35716==b?(a=S.getShaderInfoLog(O[a]),null===a&&(a="(unknown error)"),x[c>>2]=a?a.length+1:0):35720==b?(a=S.getShaderSource(O[a]),x[c>>2]=a?a.length+1:0):x[c>>2]=S.getShaderParameter(O[a],b):P(1281)},Sa:function(a,b){if(2>Q.version)return P(1282),
0;var c=yb[a];if(c)return 0>b||b>=c.length?(P(1281),0):c[b];switch(a){case 7939:return c=S.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=Kb(d)+1,k=J(e);k&&I(d,k,e);return k}),c=yb[a]=c,0>b||b>=c.length?(P(1281),0):c[b];default:return P(1280),0}},q:function(a,b){b=F(b);if(a=L[a]){var c=a,d=c.sc,e=c.Pc,k;if(!d)for(c.sc=d={},c.Oc={},k=0;k<S.getProgramParameter(c,35718);++k){var g=S.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Lb(m);n=0<n?m.slice(0,
n):m;var p=c.yc;c.yc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.Oc[p++]=n}c=a.sc;d=0;e=b;k=Lb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Pc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||S.getUniformLocation(a,b)))return d}else P(1281);return-1},jb:function(a,b,c){for(var d=Ib[b],e=0;e<b;e++)d[e]=x[c+4*e>>2];S.invalidateFramebuffer(a,d)},wa:function(a){a=L[a];S.linkProgram(a);a.sc=0;a.Pc={}},Na:function(a,b){3317==a&&(zb=b);S.pixelStorei(a,b)},G:function(a,b){S.polygonOffset(a,b)},lb:function(a){S.readBuffer(a)},
Ea:function(a,b,c,d,e){S.renderbufferStorageMultisample(a,b,c,d,e)},oa:function(a,b,c,d){S.scissor(a,b,c,d)},Kb:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?x[d+4*k>>2]:-1;e+=F(x[c+4*k>>2],0>g?void 0:g)}S.shaderSource(O[a],e)},La:function(a,b,c){S.stencilFunc(a,b,c)},ma:function(a,b,c,d){S.stencilFuncSeparate(a,b,c,d)},t:function(a){S.stencilMask(a)},Ka:function(a,b,c){S.stencilOp(a,b,c)},la:function(a,b,c,d){S.stencilOpSeparate(a,b,c,d)},Aa:function(a,b,c,d,e,k,g,m,n){if(2<=Q.version)if(S.pc)S.texImage2D(a,
b,c,d,e,k,g,m,n);else if(n){var p=T(m);S.texImage2D(a,b,c,d,e,k,g,m,p,n>>U(p))}else S.texImage2D(a,b,c,d,e,k,g,m,null);else S.texImage2D(a,b,c,d,e,k,g,m,n?Mb(m,g,d,e,n):null)},ya:function(a,b,c,d,e,k,g,m,n,p){if(S.pc)S.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var t=T(n);S.texImage3D(a,b,c,d,e,k,g,m,n,t,p>>U(t))}else S.texImage3D(a,b,c,d,e,k,g,m,n,null)},D:function(a,b,c){S.texParameterf(a,b,c)},g:function(a,b,c){S.texParameteri(a,b,c)},ib:function(a,b,c,d,e,k,g,m,n){if(2<=Q.version)if(S.pc)S.texSubImage2D(a,
b,c,d,e,k,g,m,n);else if(n){var p=T(m);S.texSubImage2D(a,b,c,d,e,k,g,m,p,n>>U(p))}else S.texSubImage2D(a,b,c,d,e,k,g,m,null);else p=null,n&&(p=Mb(m,g,e,k,n)),S.texSubImage2D(a,b,c,d,e,k,g,m,p)},hb:function(a,b,c,d,e,k,g,m,n,p,t){if(S.pc)S.texSubImage3D(a,b,c,d,e,k,g,m,n,p,t);else if(t){var u=T(p);S.texSubImage3D(a,b,c,d,e,k,g,m,n,p,u,t>>U(u))}else S.texSubImage3D(a,b,c,d,e,k,g,m,n,p,null)},Ab:function(a,b,c){if(2<=Q.version)b&&S.uniform1fv(V(a),y,c>>2,b);else{if(288>=b)for(var d=W[b-1],e=0;e<b;++e)d[e]=
y[c+4*e>>2];else d=y.subarray(c>>2,c+4*b>>2);S.uniform1fv(V(a),d)}},ua:function(a,b){S.uniform1i(V(a),b)},vb:function(a,b,c){if(2<=Q.version)b&&S.uniform1iv(V(a),x,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=x[c+4*e>>2];else d=x.subarray(c>>2,c+4*b>>2);S.uniform1iv(V(a),d)}},zb:function(a,b,c){if(2<=Q.version)b&&S.uniform2fv(V(a),y,c>>2,2*b);else{if(144>=b)for(var d=W[2*b-1],e=0;e<2*b;e+=2)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2];else d=y.subarray(c>>2,c+8*b>>2);S.uniform2fv(V(a),d)}},
ub:function(a,b,c){if(2<=Q.version)b&&S.uniform2iv(V(a),x,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2];else d=x.subarray(c>>2,c+8*b>>2);S.uniform2iv(V(a),d)}},xb:function(a,b,c){if(2<=Q.version)b&&S.uniform3fv(V(a),y,c>>2,3*b);else{if(96>=b)for(var d=W[3*b-1],e=0;e<3*b;e+=3)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2],d[e+2]=y[c+(4*e+8)>>2];else d=y.subarray(c>>2,c+12*b>>2);S.uniform3fv(V(a),d)}},tb:function(a,b,c){if(2<=Q.version)b&&S.uniform3iv(V(a),
x,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2];else d=x.subarray(c>>2,c+12*b>>2);S.uniform3iv(V(a),d)}},wb:function(a,b,c){if(2<=Q.version)b&&S.uniform4fv(V(a),y,c>>2,4*b);else{if(72>=b){var d=W[4*b-1],e=y;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=y.subarray(c>>2,c+16*b>>2);S.uniform4fv(V(a),d)}},sb:function(a,b,c){if(2<=Q.version)b&&S.uniform4iv(V(a),x,c>>2,4*b);else{if(72>=
b)for(var d=X[4*b-1],e=0;e<4*b;e+=4)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2],d[e+3]=x[c+(4*e+12)>>2];else d=x.subarray(c>>2,c+16*b>>2);S.uniform4iv(V(a),d)}},rb:function(a,b,c,d){if(2<=Q.version)b&&S.uniformMatrix4fv(V(a),!!c,y,d>>2,16*b);else{if(18>=b){var e=W[16*b-1],k=y;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+
11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=y.subarray(d>>2,d+64*b>>2);S.uniformMatrix4fv(V(a),!!c,e)}},m:function(a){a=L[a];S.useProgram(a);S.Qc=a},Cb:function(a,b){S.vertexAttribDivisor(a,b)},Db:function(a,b,c,d,e,k){S.vertexAttribPointer(a,b,c,!!d,e,k)},p:function(a,b,c,d){S.viewport(a,b,c,d)},_a:function(){f.Hc=a=>{0!=Rb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Hc)},Ta:function(){f.Nc=a=>{const b=a.clipboardData.getData("text");
Ia(()=>{const c=Y(b);Sb(c)})};window.addEventListener("paste",f.Nc)},Ma:function(a){f.dd=[];a=F(a);a=document.getElementById(a);f.Ic=b=>{b.stopPropagation();b.preventDefault()};f.Jc=b=>{b.stopPropagation();b.preventDefault()};f.Kc=b=>{b.stopPropagation();b.preventDefault()};f.Lc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.Mc=c;Tb(c.length);for(let d=0;d<c.length;d++)Ia(()=>{const e=Y(c[d].name);Ub(d,e)});Vb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.Ic,!1);
a.addEventListener("dragleave",f.Jc,!1);a.addEventListener("dragover",f.Kc,!1);a.addEventListener("drop",f.Lc,!1)},yb:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},s:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Wb()});document.body.append(a)},Ja:function(a){const b=f.Mc;return 0>a||a>=b.length?0:b[a].size},Da:function(a,b,c,d,e){const k=
new FileReader;k.onload=g=>{g=g.target.result;g.byteLength>d?Xb(a,0,1,b,0,c,d,e):(w.set(new Uint8Array(g),c),Xb(a,1,0,b,g.byteLength,c,d,e))};k.onerror=()=>{Xb(a,0,2,b,0,c,d,e)};k.readAsArrayBuffer(f.Mc[a])},r:function(){document.getElementById("_sokol_app_input_element").focus()},Hb:function(a){a=F(a);f.rc=document.getElementById(a);f.rc||console.log("sokol_app.h: invalid target:"+a);f.rc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ua:function(){window.removeEventListener("beforeunload",
f.Hc)},Qa:function(){window.removeEventListener("paste",f.Nc)},Nb:function(a){a=F(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.Ic);a.removeEventListener("dragleave",f.Jc);a.removeEventListener("dragover",f.Kc);a.removeEventListener("drop",f.Lc)},z:function(){f.rc&&f.rc.requestPointerLock&&f.rc.requestPointerLock()},nb:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(w.subarray(c,c+a*
b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},o:function(){document.getElementById("_sokol_app_input_element").blur()},ab:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],d=b.value[1];Ia(()=>{const e=Y(c),k=Y(d);Yb(e,k)})}},cb:function(){return f.oc?f.oc.bufferSize:0},eb:function(a,b,c){f.jc=null;f.oc=null;
"undefined"!==typeof AudioContext?f.jc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(f.jc=null,console.log("sokol_audio.h: no WebAudio support"));return f.jc?(console.log("sokol_audio.h: sample rate ",f.jc.sampleRate),f.oc=f.jc.createScriptProcessor(c,0,b),f.oc.onaudioprocess=d=>{const e=d.outputBuffer.length,k=Zb(e);if(k){const g=d.outputBuffer.numberOfChannels;for(let m=0;m<g;m++){const n=d.outputBuffer.getChannelData(m);for(let p=0;p<e;p++)n[p]=y[(k>>2)+(g*p+m)]}}},f.oc.connect(f.jc.destination),
a=()=>{f.jc&&"suspended"===f.jc.state&&f.jc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},db:function(){return f.jc?f.jc.sampleRate:0},ka:function(){const a=f.jc;null!==a&&(f.oc&&f.oc.disconnect(),a.close(),f.jc=null,f.oc=null)},bb:function(){if(f.jc)return"suspended"===f.jc.state?1:0},x:function(a,b,c,d,e,k){b=F(b);const g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";
const m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(g.readyState==XMLHttpRequest.DONE)if(206==g.status||200==g.status&&!m){const n=new Uint8Array(g.response),p=n.length;p<=k?(w.set(n,e),$b(a,d,p)):ac(a)}else bc(a,g.status)};g.send()},ja:function(a,b){b=F(b);const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");cc(a,d)}else bc(a,
c.status)};c.send()},ia:function(a,b){b=F(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;f.asm=c;ma=f.asm.Ob;sa();ta=f.asm.fc;va.unshift(f.asm.Pb);A--;f.monitorRunDependencies&&f.monitorRunDependencies(A);if(0==A&&(null!==Aa&&(clearInterval(Aa),Aa=null),B)){var d=B;B=null;d()}return c}var b={a:dc};A++;f.monitorRunDependencies&&f.monitorRunDependencies(A);if(f.instantiateWasm)try{return f.instantiateWasm(b,a)}catch(c){return r("Module.instantiateWasm callback failed with error: "+c),!1}Ga(b,function(c){a(c.instance)});return{}})();
f._fs_emsc_alloc=function(){return(f._fs_emsc_alloc=f.asm.Qb).apply(null,arguments)};function J(){return(J=f.asm.Rb).apply(null,arguments)}f._fs_emsc_load_snapshot_callback=function(){return(f._fs_emsc_load_snapshot_callback=f.asm.Sb).apply(null,arguments)};
var Wb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Wb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Tb).apply(null,arguments)},Sb=f.__sapp_emsc_onpaste=function(){return(Sb=f.__sapp_emsc_onpaste=f.asm.Ub).apply(null,arguments)},Rb=f.__sapp_html5_get_ask_leave_site=function(){return(Rb=f.__sapp_html5_get_ask_leave_site=f.asm.Vb).apply(null,arguments)},Tb=f.__sapp_emsc_begin_drop=function(){return(Tb=f.__sapp_emsc_begin_drop=f.asm.Wb).apply(null,arguments)},Ub=f.__sapp_emsc_drop=function(){return(Ub=
f.__sapp_emsc_drop=f.asm.Xb).apply(null,arguments)},Vb=f.__sapp_emsc_end_drop=function(){return(Vb=f.__sapp_emsc_end_drop=f.asm.Yb).apply(null,arguments)},Xb=f.__sapp_emsc_invoke_fetch_cb=function(){return(Xb=f.__sapp_emsc_invoke_fetch_cb=f.asm.Zb).apply(null,arguments)},ec=f._main=function(){return(ec=f._main=f.asm._b).apply(null,arguments)},Zb=f.__saudio_emsc_pull=function(){return(Zb=f.__saudio_emsc_pull=f.asm.$b).apply(null,arguments)},Yb=f.__sargs_add_kvp=function(){return(Yb=f.__sargs_add_kvp=
f.asm.ac).apply(null,arguments)},cc=f.__sfetch_emsc_head_response=function(){return(cc=f.__sfetch_emsc_head_response=f.asm.bc).apply(null,arguments)},$b=f.__sfetch_emsc_get_response=function(){return($b=f.__sfetch_emsc_get_response=f.asm.cc).apply(null,arguments)},bc=f.__sfetch_emsc_failed_http_status=function(){return(bc=f.__sfetch_emsc_failed_http_status=f.asm.dc).apply(null,arguments)},ac=f.__sfetch_emsc_failed_buffer_too_small=function(){return(ac=f.__sfetch_emsc_failed_buffer_too_small=f.asm.ec).apply(null,
arguments)};function Ja(){return(Ja=f.asm.gc).apply(null,arguments)}function Ka(){return(Ka=f.asm.hc).apply(null,arguments)}function Ob(){return(Ob=f.asm.ic).apply(null,arguments)}f.___start_em_js=131312;f.___stop_em_js=144206;var fc;B=function gc(){fc||hc();fc||(B=gc)};function ic(a=[]){var b=ec;a.unshift(ca);var c=a.length,d=Ob(4*(c+1)),e=d>>2;a.forEach(g=>{x[e++]=Y(g)});x[e]=0;try{var k=b(c,d);Nb(k)}catch(g){g instanceof ka||"unwind"==g||h(1,g)}}
function hc(){var a=ba;function b(){if(!fc&&(fc=!0,f.calledRun=!0,!na)){Ha(va);Ha(wa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();jc&&ic(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();ya.unshift(c)}Ha(ya)}}if(!(0<A)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)za();Ha(ua);0<A||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},
1)):b())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var jc=!0;f.noInitialRun&&(jc=!1);hc();
