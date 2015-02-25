zz=[0,0];ox=[];fm=65536;fh=32768;c=new AudioContext();
c._G=c.createGain;c._F=c.createBiquadFilter;c._W=c.createWaveShaper;
anp=AudioNode.prototype;anp.to=anp.connect;n=navigator;
n.getUserMedia=(n.getUserMedia||n.webkitGetUserMedia||n.mozGetUserMedia||
n.msGetUserMedia);n.getUserMedia({audio:true},function(stream){
mic=c.createMediaStreamSource(stream);for(var i=0;i<4;i++){
oz=c.createOscillator();oz.type='sine';oz.start();
oz.frequency.value=220*Math.pow(2,Math.floor(i/3)+[0,4,7][i%3]/12);
var az=c._G(); az.gain.value=0.2; oz.to(az);ox[i]=az;az.to(c.destination);}
cv=new Float32Array(fm);for(i=-fh;i<fh;i++){cv[i+fh]=((i>0)?i:-i)/fh;}
for(i=0;i<10;i++){var fr=32*Math.pow(2,i);var mb=c._F();mb.type="bandpass";
mb.frequency.value=fr;var mr=c._W();mr.curve=cv;var mf=c._F();mf.type='LOWPASS';
mf.frequency.value=mb.frequency.value/10;var ob=c._F();ob.type="bandpass";
ob.frequency.value=fr;var og=c._G();og.gain.value=0.0;
mic.to(mb);mb.to(mr);mr.to(mf);mf.to(og.gain);
for(ix in ox){ox[ix].to(ob);}ob.to(og);og.to(c.destination); }},function(){});

