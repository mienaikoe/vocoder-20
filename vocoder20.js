fm=65536;fh=fm/2;d=document;d.ce=d.createElement;c=new AudioContext();M=Math;
c._G=c.createGain;c._F=c.createBiquadFilter;c._W=c.createWaveShaper;hx=[];ox=[];
anp=AudioNode.prototype;anp.to=anp.connect;n=navigator;n.getUserMedia=
(n.getUserMedia||n.webkitGetUserMedia||n.mozGetUserMedia||n.msGetUserMedia);
n.getUserMedia({audio:true},function(str){mic=c.createMediaStreamSource(str);
for(i=65;i<91;i++){oz=c.createOscillator();oz.type='triangle';oz.start();
oz.frequency.value=8*M.pow(2,i/12);z=c._G();z.gain.value=0.1;oz.to(z);ox[i]=z;
hb=d.ce("div");hv=hb.style;d.body.appendChild(hb);hx[i]=hv;hv.opacity=0;
hb.innerHTML=String.fromCharCode(i);}d.body.style.height="100%";
cv=new Float32Array(fm);for(i=-fh;i<fh;i++){cv[i+fh]=M.pow(i/fh,2);}
for(i=0;i<10;i++){fr=32*M.pow(2,i);mb=c._F();mb.type="bandpass";
mb.frequency.value=fr;mr=c._W();mr.curve=cv;mf=c._F();mf.type='LOWPASS';
ob=c._F();ob.type="bandpass";mf.frequency.value=mb.frequency.value/10;
ob.frequency.value=fr;og=c._G();og.gain.value=0;mic.to(mb);mb.to(mr);
mr.to(mf);mf.to(og.gain);for(ix in ox){ox[ix].to(ob);}ob.to(og);
og.to(c.destination);}w=window;w.a=w.addEventListener;function et(v){
return function(ev){_=ev.keyCode;if(_>64 && _<91){ox[_].gain.value=v;
hx[_].opacity=v;}};}w.a("keydown",et(0.5));w.a("keyup",et(0));
},function(){});ho="<p style='margin:3%;float:right;clear:both;'>";hc="</p>";
d.body.innerHTML=ho+"Keys = Play Note"+hc+ho+"Microphone = Modulate"+hc;