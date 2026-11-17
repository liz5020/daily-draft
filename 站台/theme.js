(function(){
 var root=document.documentElement,btns=document.querySelectorAll(".theme button"),KEY="draft-theme";
 function apply(m){
  if(m==="light"||m==="dark"){root.setAttribute("data-theme",m)}else{root.removeAttribute("data-theme")}
  btns.forEach(function(b){b.setAttribute("aria-pressed",String(b.getAttribute("data-mode")===m))});
 }
 var saved="auto";try{saved=localStorage.getItem(KEY)||"auto"}catch(e){}
 apply(saved);
 btns.forEach(function(b){b.addEventListener("click",function(){
  var m=b.getAttribute("data-mode");apply(m);try{localStorage.setItem(KEY,m)}catch(x){}
 })});
})();
(function(){
 var b=document.getElementById("copybtn"),p=document.getElementById("cmdtext");
 if(!b||!p)return;
 b.addEventListener("click",function(){
  var txt=p.textContent;
  function sel(){var r=document.createRange();r.selectNodeContents(p);var s=window.getSelection();s.removeAllRanges();s.addRange(r)}
  function ok(){b.textContent="已複製 ✓"}
  try{navigator.clipboard.writeText(txt).then(ok,function(){sel();b.textContent="請按 Cmd+C 複製"})}catch(e){sel();b.textContent="請按 Cmd+C 複製"}
 });
})();
