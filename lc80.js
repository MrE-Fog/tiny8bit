var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",k=(a,b)=>{throw b;},da="object"==typeof window,m="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,r="",fa,t,v;
if(ea){var fs=require("fs"),ha=require("path");r=m?ha.dirname(r)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};t=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,h)=>{e?c(e):b(d?h.buffer:h)})};!g.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&
(module.exports=g);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof ia||a.context instanceof ia))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});k=(a,b)=>{process.exitCode=a;throw b;};g.inspect=()=>"[Emscripten Module object]"}else if(da||m)m?r=self.location.href:"undefined"!=typeof document&&document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?r.substr(0,r.replace(/[?#].*/,"").lastIndexOf("/")+1):"",
fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},m&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ja=g.print||console.log.bind(console),w=g.printErr||console.warn.bind(console);
Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);g.quit&&(k=g.quit);var x;g.wasmBinary&&(x=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&ka("no native wasm support detected");var la,ma=!1,na,y,oa,pa,z,A,B,C;
function qa(){var a=la.buffer;g.HEAP8=na=new Int8Array(a);g.HEAP16=oa=new Int16Array(a);g.HEAP32=z=new Int32Array(a);g.HEAPU8=y=new Uint8Array(a);g.HEAPU16=pa=new Uint16Array(a);g.HEAPU32=A=new Uint32Array(a);g.HEAPF32=B=new Float32Array(a);g.HEAPF64=C=new Float64Array(a)}var ra,sa=[],ta=[],ua=[],va=[],wa=[];function xa(){var a=g.preRun.shift();sa.unshift(a)}var D=0,ya=null,E=null;
function ka(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";w(a);ma=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function za(a){return a.startsWith("data:application/octet-stream;base64,")}var F;F="lc80.wasm";if(!za(F)){var Aa=F;F=g.locateFile?g.locateFile(Aa,r):r+Aa}function Ba(a){try{if(a==F&&x)return new Uint8Array(x);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){ka(b)}}
function Ca(a){if(!x&&(da||m)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>Ba(a));if(t)return new Promise((b,c)=>{t(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Ba(a))}function Da(a,b,c){return Ca(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{w("failed to asynchronously prepare wasm: "+d);ka(d)})}
function Ea(a,b){var c=F;x||"function"!=typeof WebAssembly.instantiateStreaming||za(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?Da(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){w("wasm streaming compile failed: "+e);w("falling back to ArrayBuffer instantiation");return Da(c,a,b)}))}function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Fa(a){for(;0<a.length;)a.shift()(g)}var Ga="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function Ha(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Ga)return Ga.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|f:(e&7)<<18|h<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function G(a,b){return a?Ha(y,a,b):""}
function Ia(a){var b=Ja();a();Ka(b)}var La=0;function Ma(){for(var a=H.length-1;0<=a;--a)Na(a);H=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.wc)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.jd.apply(null,b.Xc)}}var H=[];function Na(a){var b=H[a];b.target.removeEventListener(b.nc,b.Tc,b.oc);H.splice(a,1)}
function I(a){function b(d){++La;Qa=a;Pa();a.qc(d);Pa();--La}if(a.pc)a.Tc=b,a.target.addEventListener(a.nc,b,a.oc),H.push(a),Ra||(va.push(Ma),Ra=!0);else for(var c=0;c<H.length;++c)H[c].target==a.target&&H[c].nc==a.nc&&Na(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function J(a){a=2<a?G(a):a;return $a[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var bb;bb=ea?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();var cb=[];function K(a){var b=cb[a];b||(a>=cb.length&&(cb.length=a+1),cb[a]=b=ra.get(a));return b}
function L(a,b,c){var d=y;if(!(0<c))return 0;var e=b;c=b+c-1;for(var h=0;h<a.length;++h){var f=a.charCodeAt(h);if(55296<=f&&57343>=f){var l=a.charCodeAt(++h);f=65536+((f&1023)<<10)|l&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e}
function db(a,b,c,d,e,h){Ta||(Ta=M(256));a={target:J(a),nc:h,pc:d,qc:function(f=event){var l=f.target.id?f.target.id:"",n=Ta;L(Sa(f.target),n+0,128);L(l,n+128,128);K(d)(e,n,b)&&f.preventDefault()},oc:c};I(a)}
function eb(a,b,c,d,e,h){Ua||(Ua=M(176));a={target:J(a),wc:!0,nc:h,pc:d,qc:function(f){var l=Ua;C[l>>3]=f.timeStamp;var n=l>>2;z[n+2]=f.location;z[n+3]=f.ctrlKey;z[n+4]=f.shiftKey;z[n+5]=f.altKey;z[n+6]=f.metaKey;z[n+7]=f.repeat;z[n+8]=f.charCode;z[n+9]=f.keyCode;z[n+10]=f.which;L(f.key||"",l+44,32);L(f.code||"",l+76,32);L(f.char||"",l+108,32);L(f.locale||"",l+140,32);K(d)(e,l,b)&&f.preventDefault()},oc:c};I(a)}
function fb(a,b,c){C[a>>3]=b.timeStamp;a>>=2;z[a+2]=b.screenX;z[a+3]=b.screenY;z[a+4]=b.clientX;z[a+5]=b.clientY;z[a+6]=b.ctrlKey;z[a+7]=b.shiftKey;z[a+8]=b.altKey;z[a+9]=b.metaKey;oa[2*a+20]=b.button;oa[2*a+21]=b.buttons;z[a+11]=b.movementX;z[a+12]=b.movementY;c=ab(c);z[a+13]=b.clientX-c.left;z[a+14]=b.clientY-c.top}
function N(a,b,c,d,e,h){Va||(Va=M(72));a=J(a);I({target:a,wc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,nc:h,pc:d,qc:function(f=event){fb(Va,f,a);K(d)(e,Va,b)&&f.preventDefault()},oc:c})}function gb(a,b,c,d,e){Wa||(Wa=M(260));I({target:a,nc:e,pc:d,qc:function(h=event){var f=Wa,l=document.pointerLockElement||document.uc||document.Ic||document.Hc;z[f>>2]=!!l;var n=l&&l.id?l.id:"";L(Sa(l),f+4,128);L(n,f+132,128);K(d)(20,f,b)&&h.preventDefault()},oc:c})}
function hb(a,b,c,d,e){I({target:a,nc:e,pc:d,qc:function(h=event){K(d)(38,0,b)&&h.preventDefault()},oc:c})}function ib(a,b,c,d){Xa||(Xa=M(36));a=J(a);I({target:a,nc:"resize",pc:d,qc:function(e=event){if(e.target==a){var h=document.body;if(h){var f=Xa;z[f>>2]=e.detail;z[f+4>>2]=h.clientWidth;z[f+8>>2]=h.clientHeight;z[f+12>>2]=innerWidth;z[f+16>>2]=innerHeight;z[f+20>>2]=outerWidth;z[f+24>>2]=outerHeight;z[f+28>>2]=pageXOffset;z[f+32>>2]=pageYOffset;K(d)(10,f,b)&&e.preventDefault()}}},oc:c})}
function jb(a,b,c,d,e,h){Ya||(Ya=M(1696));a=J(a);I({target:a,wc:"touchstart"==h||"touchend"==h,nc:h,pc:d,qc:function(f){for(var l,n={},p=f.touches,q=0;q<p.length;++q)l=p[q],l.Fc=l.Jc=0,n[l.identifier]=l;for(q=0;q<f.changedTouches.length;++q)l=f.changedTouches[q],l.Fc=1,n[l.identifier]=l;for(q=0;q<f.targetTouches.length;++q)n[f.targetTouches[q].identifier].Jc=1;p=Ya;C[p>>3]=f.timeStamp;var u=p>>2;z[u+3]=f.ctrlKey;z[u+4]=f.shiftKey;z[u+5]=f.altKey;z[u+6]=f.metaKey;u+=7;var ob=ab(a),pb=0;for(q in n)if(l=
n[q],z[u]=l.identifier,z[u+1]=l.screenX,z[u+2]=l.screenY,z[u+3]=l.clientX,z[u+4]=l.clientY,z[u+5]=l.pageX,z[u+6]=l.pageY,z[u+7]=l.Fc,z[u+8]=l.Jc,z[u+9]=l.clientX-ob.left,z[u+10]=l.clientY-ob.top,u+=13,31<++pb)break;z[p+8>>2]=pb;K(d)(e,p,b)&&f.preventDefault()},oc:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,f){b.drawElementsInstancedANGLE(c,d,e,h,f)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function nb(a){a.Zc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function qb(a){a.ad=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function rb(a){a.cd=a.getExtension("WEBGL_multi_draw")}var sb=1,tb=[],O=[],ub=[],vb=[],wb=[],P=[],xb=[],yb=[],zb={},Ab=4;function Q(a){Bb||(Bb=a)}function Cb(a){for(var b=sb++,c=a.length;c<b;c++)a[c]=null;return b}
function Db(a,b){a.uc||(a.uc=a.getContext,a.getContext=function(d,e){e=a.uc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Gc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Eb(c,b):0}function Eb(a,b){var c=Cb(yb),d={$c:c,attributes:b,version:b.Gc,Ac:a};a.canvas&&(a.canvas.Wc=d);yb[c]=d;("undefined"==typeof b.Ec||b.Ec)&&Fb(d);return c}
function Fb(a){a||(a=R);if(!a.Vc){a.Vc=!0;var b=a.Ac;kb(b);lb(b);mb(b);nb(b);qb(b);2<=a.version&&(b.Dc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Dc)b.Dc=b.getExtension("EXT_disjoint_timer_query");rb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Bb,R;function Gb(a,b,c,d,e,h){a={target:J(a),nc:h,pc:d,qc:(f=event)=>{K(d)(e,0,b)&&f.preventDefault()},oc:c};I(a)}
function Hb(a,b,c,d){Za||(Za=M(104));I({target:a,wc:!0,nc:"wheel",pc:d,qc:function(e=event){var h=Za;fb(h,e,a);C[h+72>>3]=e.deltaX;C[h+80>>3]=e.deltaY;C[h+88>>3]=e.deltaZ;z[h+96>>2]=e.deltaMode;K(d)(9,h,b)&&e.preventDefault()},oc:c})}var Ib=["default","low-power","high-performance"],Jb=[null,[],[]];function Kb(a,b,c,d){for(var e=0;e<a;e++){var h=S[c](),f=h&&Cb(d);h?(h.name=f,d[f]=h):Q(1282);z[b+4*e>>2]=f}}
function Lb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=S.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>R.version){Q(1282);return}c=2*(S.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>R.version){Q(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=S.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Q(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:Q(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)z[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){Q(1280);w("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:Q(1280);w("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}z[b>>2]=c}else Q(1281)}
function Mb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Nb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}var Ob=[];function T(a){a-=5120;return 0==a?na:1==a?y:2==a?oa:4==a?z:6==a?B:5==a||28922==a||28520==a||30779==a||30782==a?A:pa}function U(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}
function Pb(a,b,c,d,e){a=T(a);var h=U(a),f=Ab;return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+f-1&-f)>>h)}function V(a){var b=S.Sc;if(b){var c=b.vc[a];"number"==typeof c&&(b.vc[a]=c=S.getUniformLocation(b,b.Qc[a]+(0<c?"["+c+"]":"")));return c}Q(1282)}var W=[],X=[];function Qb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);ma=!0}k(a,new ia(a))}function Y(a){var b=Mb(a)+1,c=Rb(b);L(a,c,b);return c}for(var S,Z=0;32>Z;++Z)Ob.push(Array(Z));
var Sb=new Float32Array(288);for(Z=0;288>Z;++Z)W[Z]=Sb.subarray(0,Z+1);var Tb=new Int32Array(288);for(Z=0;288>Z;++Z)X[Z]=Tb.subarray(0,Z+1);
var hc={ma:function(){return 0},gb:function(){return 0},hb:function(){},i:function(){ka("")},ga:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ha:function(a,b,c){a=J(a);if(!a)return-4;a=ab(a);C[b>>3]=a.width;C[c>>3]=a.height;return 0},z:bb,db:function(a,b,c){y.copyWithin(a,b,b+c)},Va:function(a,b){function c(d){K(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},cb:function(a){var b=y.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*
(1+.2/c);d=Math.min(d,a+100663296);var e=Math,h=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;a:{var f=la.buffer;try{la.grow(h.call(e,2147483648,d)-f.byteLength+65535>>>16);qa();var l=1;break a}catch(n){}l=void 0}if(l)return!0}return!1},Q:function(a,b,c,d){db(a,b,c,d,12,"blur");return 0},fa:function(a,b,c){a=J(a);if(!a)return-4;a.width=b;a.height=c;return 0},R:function(a,b,c,d){db(a,b,c,d,13,"focus");return 0},_:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},Y:function(a,b,c,d){eb(a,b,c,d,1,
"keypress");return 0},Z:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},ea:function(a,b,c,d){N(a,b,c,d,5,"mousedown");return 0},ba:function(a,b,c,d){N(a,b,c,d,33,"mouseenter");return 0},aa:function(a,b,c,d){N(a,b,c,d,34,"mouseleave");return 0},ca:function(a,b,c,d){N(a,b,c,d,8,"mousemove");return 0},da:function(a,b,c,d){N(a,b,c,d,6,"mouseup");return 0},T:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.uc||document.body.Ic||document.body.Hc))return-1;
a=J(a);if(!a)return-4;gb(a,b,c,d,"pointerlockchange");gb(a,b,c,d,"mozpointerlockchange");gb(a,b,c,d,"webkitpointerlockchange");gb(a,b,c,d,"mspointerlockchange");return 0},S:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.uc||document.body.Ic||document.body.Hc))return-1;a=J(a);if(!a)return-4;hb(a,b,c,d,"pointerlockerror");hb(a,b,c,d,"mozpointerlockerror");hb(a,b,c,d,"webkitpointerlockerror");hb(a,b,c,d,"mspointerlockerror");return 0},Wa:function(a,b,c,d){ib(a,b,c,
d);return 0},U:function(a,b,c,d){jb(a,b,c,d,25,"touchcancel");return 0},V:function(a,b,c,d){jb(a,b,c,d,23,"touchend");return 0},W:function(a,b,c,d){jb(a,b,c,d,24,"touchmove");return 0},X:function(a,b,c,d){jb(a,b,c,d,22,"touchstart");return 0},P:function(a,b,c,d){Gb(a,b,c,d,31,"webglcontextlost");return 0},O:function(a,b,c,d){Gb(a,b,c,d,32,"webglcontextrestored");return 0},$:function(a,b,c,d){a=J(a);return"undefined"!=typeof a.onwheel?(Hb(a,b,c,d),0):-1},Ta:function(a,b){b>>=2;b={alpha:!!z[b],depth:!!z[b+
1],stencil:!!z[b+2],antialias:!!z[b+3],premultipliedAlpha:!!z[b+4],preserveDrawingBuffer:!!z[b+5],powerPreference:Ib[z[b+6]],failIfMajorPerformanceCaveat:!!z[b+7],Gc:z[b+8],bd:z[b+9],Ec:z[b+10],Uc:z[b+11],dd:z[b+12],ed:z[b+13]};a=J(a);return!a||b.Uc?0:Db(a,b)},Ra:function(a,b){a=yb[a];b=G(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(S);"OES_vertex_array_object"==b&&lb(S);"WEBGL_draw_buffers"==b&&mb(S);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&nb(S);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&qb(S);"WEBGL_multi_draw"==b&&rb(S);return!!a.Ac.getExtension(b)},Ua:function(a){a>>=2;for(var b=0;14>b;++b)z[a+b]=0;z[a]=z[a+1]=z[a+3]=z[a+4]=z[a+8]=z[a+10]=1},Sa:function(a){R=yb[a];g.Yc=S=R&&R.Ac;return!a||S?0:-5},la:function(){return 52},fb:function(){return 52},ab:function(){return 70},eb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var f=A[b>>2],l=A[b+4>>2];b+=8;for(var n=0;n<l;n++){var p=y[f+n],q=Jb[a];0===p||10===p?((1===a?ja:w)(Ha(q,0)),q.length=0):q.push(p)}e+=l}A[d>>2]=e;return 0},h:function(a,
b,c){const d=G(a);console.log("fs_js_load_snapshot: called with",d,b);let e;try{e=window.indexedDB.open("chips",1)}catch(h){console.log("fs_js_load_snapshot: failed to open IndexedDB with "+h)}e.onupgradeneeded=()=>{console.log("fs_js_load_snapshot: creating db");e.result.createObjectStore("store")};e.onsuccess=()=>{var h=e.result;let f;try{f=h.transaction(["store"],"readwrite")}catch(p){console.log("fs_js_load_snapshot: db.transaction failed with",p);return}h=f.objectStore("store");let l=d+"_"+b,
n=h.get(l);n.onsuccess=()=>{if(void 0!==n.result){let p=n.result.length;console.log("fs_js_load_snapshot:",l,"successfully loaded",p,"bytes");let q=Ub(p);y.set(n.result,q);Vb(c,q,p)}else console.log("fs_js_load_snapshot:",l,"does not exist"),Vb(c,0,0)};n.onerror=()=>{console.log("fs_js_load_snapshot: FAILED loading",l)};f.onerror=()=>{console.log("fs_js_load_snapshot: transaction onerror")}};e.onerror=()=>{console.log("fs_js_load_snapshot: open_request onerror")}},Qb:function(a,b,c,d){const e=G(a);
console.log("fs_js_save_snapshot: called with",e,b);let h;try{h=window.indexedDB.open("chips",1)}catch(f){console.log("fs_js_save_snapshot: failed to open IndexedDB with "+f);return}h.onupgradeneeded=()=>{console.log("fs_js_save_snapshot: creating db");h.result.createObjectStore("store")};h.onsuccess=()=>{console.log("fs_js_save_snapshot: onsuccess");let f=h.result.transaction(["store"],"readwrite");var l=f.objectStore("store");let n=e+"_"+b;l=l.put(y.subarray(c,c+d),n);l.onsuccess=()=>{console.log("fs_js_save_snapshot:",
n,"successfully stored")};l.onerror=()=>{console.log("fs_js_save_snapshot: FAILED to store",n)};f.onerror=()=>{console.log("fs_js_save_snapshot: transaction onerror")}};h.onerror=()=>{console.log("fs_js_save_snapshot: open_request onerror")}},e:function(a){S.activeTexture(a)},C:function(a,b){S.attachShader(O[a],P[b])},b:function(a,b){35051==a?S.Cc=b:35052==a&&(S.sc=b);S.bindBuffer(a,tb[b])},s:function(a,b){S.bindFramebuffer(a,ub[b])},Ca:function(a,b){S.bindRenderbuffer(a,vb[b])},a:function(a,b){S.bindTexture(a,
wb[b])},L:function(a){S.bindVertexArray(xb[a])},H:function(a,b,c,d){S.blendColor(a,b,c,d)},I:function(a,b){S.blendEquationSeparate(a,b)},J:function(a,b,c,d){S.blendFuncSeparate(a,b,c,d)},mb:function(a,b,c,d,e,h,f,l,n,p){S.blitFramebuffer(a,b,c,d,e,h,f,l,n,p)},Ea:function(a,b,c,d){2<=R.version?c&&b?S.bufferData(a,y,d,c,b):S.bufferData(a,b,d):S.bufferData(a,c?y.subarray(c,c+b):b,d)},m:function(a,b,c,d){2<=R.version?c&&S.bufferSubData(a,b,y,d,c):S.bufferSubData(a,b,y.subarray(d,d+c))},Gb:function(a,
b,c,d){S.clearBufferfi(a,b,c,d)},qa:function(a,b,c){S.clearBufferfv(a,b,B,c>>2)},Fb:function(a,b,c){S.clearBufferiv(a,b,z,c>>2)},k:function(a,b,c,d){S.colorMask(!!a,!!b,!!c,!!d)},Kb:function(a){S.compileShader(P[a])},ya:function(a,b,c,d,e,h,f,l){2<=R.version?S.sc||!f?S.compressedTexImage2D(a,b,c,d,e,h,f,l):S.compressedTexImage2D(a,b,c,d,e,h,y,l,f):S.compressedTexImage2D(a,b,c,d,e,h,l?y.subarray(l,l+f):null)},wa:function(a,b,c,d,e,h,f,l,n){S.sc?S.compressedTexImage3D(a,b,c,d,e,h,f,l,n):S.compressedTexImage3D(a,
b,c,d,e,h,f,y,n,l)},ua:function(){var a=Cb(O),b=S.createProgram();b.name=a;b.zc=b.xc=b.yc=0;b.Bc=1;O[a]=b;return a},Mb:function(a){var b=Cb(P);P[b]=S.createShader(a);return b},E:function(a){S.cullFace(a)},Oa:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2],e=tb[d];e&&(S.deleteBuffer(e),e.name=0,tb[d]=null,d==S.Cc&&(S.Cc=0),d==S.sc&&(S.sc=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=z[b+4*c>>2],e=ub[d];e&&(S.deleteFramebuffer(e),e.name=0,ub[d]=null)}},x:function(a){if(a){var b=O[a];b?(S.deleteProgram(b),
b.name=0,O[a]=null):Q(1281)}},M:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2],e=vb[d];e&&(S.deleteRenderbuffer(e),e.name=0,vb[d]=null)}},B:function(a){if(a){var b=P[a];b?(S.deleteShader(b),P[a]=null):Q(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2],e=wb[d];e&&(S.deleteTexture(e),e.name=0,wb[d]=null)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2];S.deleteVertexArray(xb[d]);xb[d]=null}},w:function(a){S.depthFunc(a)},v:function(a){S.depthMask(!!a)},d:function(a){S.disable(a)},
K:function(a){S.disableVertexAttribArray(a)},ob:function(a,b,c){S.drawArrays(a,b,c)},pb:function(a,b,c,d){S.drawArraysInstanced(a,b,c,d)},qb:function(a,b,c,d){S.drawElements(a,b,c,d)},rb:function(a,b,c,d,e){S.drawElementsInstanced(a,b,c,d,e)},g:function(a){S.enable(a)},Bb:function(a){S.enableVertexAttribArray(a)},F:function(a){S.frontFace(a)},Fa:function(a,b){Kb(a,b,"createBuffer",tb)},Da:function(a,b){Kb(a,b,"createRenderbuffer",vb)},za:function(a,b){Kb(a,b,"createTexture",wb)},La:function(a,b){Kb(a,
b,"createVertexArray",xb)},Hb:function(a,b){return S.getAttribLocation(O[a],G(b))},c:function(a,b){Lb(a,b)},Nb:function(a,b,c,d){a=S.getProgramInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?L(a,d,b):0;c&&(z[c>>2]=b)},ta:function(a,b,c){if(c)if(a>=sb)Q(1281);else if(a=O[a],35716==b)a=S.getProgramInfoLog(a),null===a&&(a="(unknown error)"),z[c>>2]=a.length+1;else if(35719==b){if(!a.zc)for(b=0;b<S.getProgramParameter(a,35718);++b)a.zc=Math.max(a.zc,S.getActiveUniform(a,b).name.length+1);z[c>>
2]=a.zc}else if(35722==b){if(!a.xc)for(b=0;b<S.getProgramParameter(a,35721);++b)a.xc=Math.max(a.xc,S.getActiveAttrib(a,b).name.length+1);z[c>>2]=a.xc}else if(35381==b){if(!a.yc)for(b=0;b<S.getProgramParameter(a,35382);++b)a.yc=Math.max(a.yc,S.getActiveUniformBlockName(a,b).length+1);z[c>>2]=a.yc}else z[c>>2]=S.getProgramParameter(a,b);else Q(1281)},Ib:function(a,b,c,d){a=S.getShaderInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?L(a,d,b):0;c&&(z[c>>2]=b)},ra:function(a,b,c){c?35716==b?(a=S.getShaderInfoLog(P[a]),
null===a&&(a="(unknown error)"),z[c>>2]=a?a.length+1:0):35720==b?(a=S.getShaderSource(P[a]),z[c>>2]=a?a.length+1:0):z[c>>2]=S.getShaderParameter(P[a],b):Q(1281)},Pa:function(a,b){if(2>R.version)return Q(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(Q(1281),0):c[b];switch(a){case 7939:return c=S.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=Mb(d)+1,h=M(e);h&&L(d,h,e);return h}),c=zb[a]=c,0>b||b>=c.length?(Q(1281),0):c[b];default:return Q(1280),
0}},t:function(a,b){b=G(b);if(a=O[a]){var c=a,d=c.vc,e=c.Rc,h;if(!d)for(c.vc=d={},c.Qc={},h=0;h<S.getProgramParameter(c,35718);++h){var f=S.getActiveUniform(c,h);var l=f.name;f=f.size;var n=Nb(l);n=0<n?l.slice(0,n):l;var p=c.Bc;c.Bc+=f;e[n]=[f,p];for(l=0;l<f;++l)d[p]=l,c.Qc[p++]=n}c=a.vc;d=0;e=b;h=Nb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.Rc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||S.getUniformLocation(a,b)))return d}else Q(1281);return-1},lb:function(a,b,c){for(var d=Ob[b],e=0;e<b;e++)d[e]=
z[c+4*e>>2];S.invalidateFramebuffer(a,d)},Ob:function(a){a=O[a];S.linkProgram(a);a.vc=0;a.Rc={}},Ka:function(a,b){3317==a&&(Ab=b);S.pixelStorei(a,b)},G:function(a,b){S.polygonOffset(a,b)},nb:function(a){S.readBuffer(a)},Aa:function(a,b,c,d,e){S.renderbufferStorageMultisample(a,b,c,d,e)},q:function(a,b,c,d){S.scissor(a,b,c,d)},Lb:function(a,b,c,d){for(var e="",h=0;h<b;++h){var f=d?z[d+4*h>>2]:-1;e+=G(z[c+4*h>>2],0>f?void 0:f)}S.shaderSource(P[a],e)},Ia:function(a,b,c){S.stencilFunc(a,b,c)},pa:function(a,
b,c,d){S.stencilFuncSeparate(a,b,c,d)},u:function(a){S.stencilMask(a)},Ha:function(a,b,c){S.stencilOp(a,b,c)},oa:function(a,b,c,d){S.stencilOpSeparate(a,b,c,d)},xa:function(a,b,c,d,e,h,f,l,n){if(2<=R.version)if(S.sc)S.texImage2D(a,b,c,d,e,h,f,l,n);else if(n){var p=T(l);S.texImage2D(a,b,c,d,e,h,f,l,p,n>>U(p))}else S.texImage2D(a,b,c,d,e,h,f,l,null);else S.texImage2D(a,b,c,d,e,h,f,l,n?Pb(l,f,d,e,n):null)},va:function(a,b,c,d,e,h,f,l,n,p){if(S.sc)S.texImage3D(a,b,c,d,e,h,f,l,n,p);else if(p){var q=T(n);
S.texImage3D(a,b,c,d,e,h,f,l,n,q,p>>U(q))}else S.texImage3D(a,b,c,d,e,h,f,l,n,null)},D:function(a,b,c){S.texParameterf(a,b,c)},f:function(a,b,c){S.texParameteri(a,b,c)},kb:function(a,b,c,d,e,h,f,l,n){if(2<=R.version)if(S.sc)S.texSubImage2D(a,b,c,d,e,h,f,l,n);else if(n){var p=T(l);S.texSubImage2D(a,b,c,d,e,h,f,l,p,n>>U(p))}else S.texSubImage2D(a,b,c,d,e,h,f,l,null);else p=null,n&&(p=Pb(l,f,e,h,n)),S.texSubImage2D(a,b,c,d,e,h,f,l,p)},ib:function(a,b,c,d,e,h,f,l,n,p,q){if(S.sc)S.texSubImage3D(a,b,c,
d,e,h,f,l,n,p,q);else if(q){var u=T(p);S.texSubImage3D(a,b,c,d,e,h,f,l,n,p,u,q>>U(u))}else S.texSubImage3D(a,b,c,d,e,h,f,l,n,p,null)},Ab:function(a,b,c){if(2<=R.version)b&&S.uniform1fv(V(a),B,c>>2,b);else{if(288>=b)for(var d=W[b-1],e=0;e<b;++e)d[e]=B[c+4*e>>2];else d=B.subarray(c>>2,c+4*b>>2);S.uniform1fv(V(a),d)}},sa:function(a,b){S.uniform1i(V(a),b)},wb:function(a,b,c){if(2<=R.version)b&&S.uniform1iv(V(a),z,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=z[c+4*e>>2];else d=z.subarray(c>>
2,c+4*b>>2);S.uniform1iv(V(a),d)}},zb:function(a,b,c){if(2<=R.version)b&&S.uniform2fv(V(a),B,c>>2,2*b);else{if(144>=b)for(var d=W[2*b-1],e=0;e<2*b;e+=2)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2];else d=B.subarray(c>>2,c+8*b>>2);S.uniform2fv(V(a),d)}},vb:function(a,b,c){if(2<=R.version)b&&S.uniform2iv(V(a),z,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2];else d=z.subarray(c>>2,c+8*b>>2);S.uniform2iv(V(a),d)}},yb:function(a,b,c){if(2<=R.version)b&&S.uniform3fv(V(a),
B,c>>2,3*b);else{if(96>=b)for(var d=W[3*b-1],e=0;e<3*b;e+=3)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2];else d=B.subarray(c>>2,c+12*b>>2);S.uniform3fv(V(a),d)}},ub:function(a,b,c){if(2<=R.version)b&&S.uniform3iv(V(a),z,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2],d[e+2]=z[c+(4*e+8)>>2];else d=z.subarray(c>>2,c+12*b>>2);S.uniform3iv(V(a),d)}},xb:function(a,b,c){if(2<=R.version)b&&S.uniform4fv(V(a),B,c>>2,4*b);else{if(72>=b){var d=
W[4*b-1],e=B;c>>=2;for(var h=0;h<4*b;h+=4){var f=c+h;d[h]=e[f];d[h+1]=e[f+1];d[h+2]=e[f+2];d[h+3]=e[f+3]}}else d=B.subarray(c>>2,c+16*b>>2);S.uniform4fv(V(a),d)}},tb:function(a,b,c){if(2<=R.version)b&&S.uniform4iv(V(a),z,c>>2,4*b);else{if(72>=b)for(var d=X[4*b-1],e=0;e<4*b;e+=4)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2],d[e+2]=z[c+(4*e+8)>>2],d[e+3]=z[c+(4*e+12)>>2];else d=z.subarray(c>>2,c+16*b>>2);S.uniform4iv(V(a),d)}},sb:function(a,b,c,d){if(2<=R.version)b&&S.uniformMatrix4fv(V(a),!!c,B,d>>2,16*
b);else{if(18>=b){var e=W[16*b-1],h=B;d>>=2;for(var f=0;f<16*b;f+=16){var l=d+f;e[f]=h[l];e[f+1]=h[l+1];e[f+2]=h[l+2];e[f+3]=h[l+3];e[f+4]=h[l+4];e[f+5]=h[l+5];e[f+6]=h[l+6];e[f+7]=h[l+7];e[f+8]=h[l+8];e[f+9]=h[l+9];e[f+10]=h[l+10];e[f+11]=h[l+11];e[f+12]=h[l+12];e[f+13]=h[l+13];e[f+14]=h[l+14];e[f+15]=h[l+15]}}else e=B.subarray(d>>2,d+64*b>>2);S.uniformMatrix4fv(V(a),!!c,e)}},l:function(a){a=O[a];S.useProgram(a);S.Sc=a},Cb:function(a,b){S.vertexAttribDivisor(a,b)},Db:function(a,b,c,d,e,h){S.vertexAttribPointer(a,
b,c,!!d,e,h)},r:function(a,b,c,d){S.viewport(a,b,c,d)},Qa:function(){g.Kc=a=>{0!=Wb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.Kc)},Ja:function(){g.Pc=a=>{const b=a.clipboardData.getData("text");Ia(()=>{const c=Y(b);Xb(c)})};window.addEventListener("paste",g.Pc)},Pb:function(a){g.gd=[];a=G(a);a=document.getElementById(a);g.Lc=b=>{b.stopPropagation();b.preventDefault()};g.Mc=b=>{b.stopPropagation();b.preventDefault()};g.Nc=b=>{b.stopPropagation();b.preventDefault()};
g.Oc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.hd=c;Yb(c.length);for(let d=0;d<c.length;d++)Ia(()=>{const e=Y(c[d].name);Zb(d,e)});$b(b.clientX,b.clientY)};a.addEventListener("dragenter",g.Lc,!1);a.addEventListener("dragleave",g.Mc,!1);a.addEventListener("dragover",g.Nc,!1);a.addEventListener("drop",g.Oc,!1)},bb:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){const a=document.createElement("input");a.type=
"text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){ac()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},Eb:function(a){a=G(a);g.tc=document.getElementById(a);g.tc||console.log("sokol_app.h: invalid target:"+a);g.tc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Na:function(){window.removeEventListener("beforeunload",g.Kc)},Ga:function(){window.removeEventListener("paste",
g.Pc)},Jb:function(a){a=G(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.Lc);a.removeEventListener("dragleave",g.Mc);a.removeEventListener("dragover",g.Nc);a.removeEventListener("drop",g.Oc)},A:function(){g.tc&&g.tc.requestPointerLock&&g.tc.requestPointerLock()},jb:function(a,b){if(g.tc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";
break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}g.tc.style.cursor=a}},$a:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(y.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},
Ba:function(a){a=G(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Xa:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=
a.next()){const c=b.value[0],d=b.value[1];Ia(()=>{const e=Y(c),h=Y(d);bc(e,h)})}},Ya:function(){return g.rc?g.rc.bufferSize:0},_a:function(a,b,c){g.mc=null;g.rc=null;"undefined"!==typeof AudioContext?g.mc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(g.mc=null,console.log("sokol_audio.h: no WebAudio support"));return g.mc?(console.log("sokol_audio.h: sample rate ",g.mc.sampleRate),g.rc=g.mc.createScriptProcessor(c,0,b),g.rc.onaudioprocess=d=>{const e=d.outputBuffer.length,h=cc(e);if(h){const f=
d.outputBuffer.numberOfChannels;for(let l=0;l<f;l++){const n=d.outputBuffer.getChannelData(l);for(let p=0;p<e;p++)n[p]=B[(h>>2)+(f*p+l)]}}},g.rc.connect(g.mc.destination),a=()=>{g.mc&&"suspended"===g.mc.state&&g.mc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},Za:function(){return g.mc?g.mc.sampleRate:0},ka:function(){const a=g.mc;null!==a&&(g.rc&&g.rc.disconnect(),a.close(),g.mc=null,
g.rc=null)},y:function(a,b,c,d,e,h){b=G(b);const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const l=0<d;l&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!l){const n=new Uint8Array(f.response),p=n.length;p<=h?(y.set(n,e),dc(a,d,p)):ec(a)}else fc(a,f.status)};f.send()},ja:function(a,b){b=G(b);const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==
XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");gc(a,d)}else fc(a,c.status)};c.send()},na:function(){return navigator.userAgent.includes("Macintosh")?1:0},ia:function(a,b){b=G(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;g.asm=c;la=g.asm.Rb;qa();ra=g.asm.ic;ta.unshift(g.asm.Sb);D--;g.monitorRunDependencies&&g.monitorRunDependencies(D);if(0==D&&(null!==ya&&(clearInterval(ya),ya=null),E)){var d=E;E=null;d()}return c}var b={a:hc};D++;g.monitorRunDependencies&&g.monitorRunDependencies(D);if(g.instantiateWasm)try{return g.instantiateWasm(b,a)}catch(c){return w("Module.instantiateWasm callback failed with error: "+c),!1}Ea(b,function(c){a(c.instance)});return{}})();
var Ub=g._fs_emsc_alloc=function(){return(Ub=g._fs_emsc_alloc=g.asm.Tb).apply(null,arguments)};function M(){return(M=g.asm.Ub).apply(null,arguments)}
var Vb=g._fs_emsc_load_snapshot_callback=function(){return(Vb=g._fs_emsc_load_snapshot_callback=g.asm.Vb).apply(null,arguments)},ac=g.__sapp_emsc_notify_keyboard_hidden=function(){return(ac=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Wb).apply(null,arguments)},Xb=g.__sapp_emsc_onpaste=function(){return(Xb=g.__sapp_emsc_onpaste=g.asm.Xb).apply(null,arguments)},Wb=g.__sapp_html5_get_ask_leave_site=function(){return(Wb=g.__sapp_html5_get_ask_leave_site=g.asm.Yb).apply(null,arguments)},Yb=g.__sapp_emsc_begin_drop=
function(){return(Yb=g.__sapp_emsc_begin_drop=g.asm.Zb).apply(null,arguments)},Zb=g.__sapp_emsc_drop=function(){return(Zb=g.__sapp_emsc_drop=g.asm._b).apply(null,arguments)},$b=g.__sapp_emsc_end_drop=function(){return($b=g.__sapp_emsc_end_drop=g.asm.$b).apply(null,arguments)};g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.ac).apply(null,arguments)};
var ic=g._main=function(){return(ic=g._main=g.asm.bc).apply(null,arguments)},cc=g.__saudio_emsc_pull=function(){return(cc=g.__saudio_emsc_pull=g.asm.cc).apply(null,arguments)},bc=g.__sargs_add_kvp=function(){return(bc=g.__sargs_add_kvp=g.asm.dc).apply(null,arguments)},gc=g.__sfetch_emsc_head_response=function(){return(gc=g.__sfetch_emsc_head_response=g.asm.ec).apply(null,arguments)},dc=g.__sfetch_emsc_get_response=function(){return(dc=g.__sfetch_emsc_get_response=g.asm.fc).apply(null,arguments)},
fc=g.__sfetch_emsc_failed_http_status=function(){return(fc=g.__sfetch_emsc_failed_http_status=g.asm.gc).apply(null,arguments)},ec=g.__sfetch_emsc_failed_buffer_too_small=function(){return(ec=g.__sfetch_emsc_failed_buffer_too_small=g.asm.hc).apply(null,arguments)};function Ja(){return(Ja=g.asm.jc).apply(null,arguments)}function Ka(){return(Ka=g.asm.kc).apply(null,arguments)}function Rb(){return(Rb=g.asm.lc).apply(null,arguments)}g.___start_em_js=42708;g.___stop_em_js=55696;var jc;
E=function kc(){jc||lc();jc||(E=kc)};function mc(a=[]){var b=ic;a.unshift(ca);var c=a.length,d=Rb(4*(c+1)),e=d>>2;a.forEach(f=>{z[e++]=Y(f)});z[e]=0;try{var h=b(c,d);Qb(h)}catch(f){f instanceof ia||"unwind"==f||k(1,f)}}
function lc(){var a=ba;function b(){if(!jc&&(jc=!0,g.calledRun=!0,!ma)){Fa(ta);Fa(ua);if(g.onRuntimeInitialized)g.onRuntimeInitialized();nc&&mc(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();wa.unshift(c)}Fa(wa)}}if(!(0<D)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)xa();Fa(sa);0<D||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},
1)):b())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var nc=!0;g.noInitialRun&&(nc=!1);lc();
