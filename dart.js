var handl=document.getElementById("handl")
var fl=document.getElementById("fl")
var wc=document.getElementById("wc")
var uc=document.getElementById("uc")
var lc=document.getElementById("lc")
var a2a=document.getElementById("a2a")
var s2a=document.getElementById("s2a")
var sw=document.getElementById("sw")
var handtopc=document.getElementById("handtopc")
var handbotc=document.getElementById("handbotc")
var handl=document.getElementById("handl")
var bneck=document.getElementById("bneck")
var fneck=document.getElementById("fneck")
var calc=document.querySelector(".sub")
var q=document.getElementById('q')
var w=document.getElementById('w')
var e=document.getElementById('e')
var r=document.getElementById('r')
var t=document.getElementById('t')
var y=document.getElementById('y')
var u=document.getElementById('u')
var i=document.getElementById('i')
var o=document.getElementById('o')
var p=document.getElementById('p')
var a=document.getElementById('a')
var s=document.getElementById('s')
var d=document.getElementById('d')
var f=document.getElementById('f')
var g=document.getElementById('g')
var h=document.getElementById('h')
var j=document.getElementById('j')
var k=document.getElementById('k')
var l=document.getElementById('l')
var z=document.getElementById('z')


calc.addEventListener('click',(e)=>{
    e.preventDefault()
    var q1=Number(bl.value)
var e1=Number(sw.value)
var w1=Number(2.5)
var r1=Number(handtopc.value)
var uc1=Number(uc.value)
 q.textContent=q1
 w.textContent=Number(2.5)
 e.textContent=(e1/4)-1
 r.textContent=r1/4
 t.textContent=(uc1/4)+1
 y.textContent=Number(4.5)

 var u2=Number(fl.value)
 var i2=Number(fneck.value)
 var o2=Number(sw.value)
 var p2=Number(2.5)
 var a2=Number(handtopc.value)
 var s2=Number(s2a.value)
 var d2=Number(a2a.value)
  u.textContent=u2
  i.textContent=i2
  o.textContent=(o2/4)-1
  p.textContent=p2
  a.textContent=a2/4
  s.textContent=s2
  d.textContent=d2

  var f3=Number(bl.value - fl.value )
  var g3=Number(wc.value)
  var h3=Number(bl.value-fl.value )

  f.textContent=f3+2
  g.textContent=g3
  h.textContent=h3+2.5

  var j4=Number(handl.value)
  var k4=Number(handbotc.value)
  var l4=Number(3)
  var z4=Number(handtopc.value)
  j.textContent=j4
  k.textContent=k4
  l.textContent=l4
  z.textContent=(z4/2)-1
})