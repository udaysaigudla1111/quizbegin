function fun(){
    





    var x = 0
    if(document.getElementById("correct1").checked){
        x++
    }
    if(document.getElementById("correct2").checked){
      x++
  }
  if(document.getElementById("correct3").checked){
    x++
}
if(document.getElementById("correct4").checked){
  x++
}
    var result = document.getElementById('score')
  result.innerHTML=x
}
