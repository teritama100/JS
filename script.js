let lists = document.getElementsByClassName("pull-down-list")

console.log(lists)

const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down")
console.log(pullDownButton)

window.addEventListener('mouseover',function(){

    const pullDownButton = document.getElementById("lists")
    console.log("IN")
})
window.addEventListener('mouseout',function(){

    const pullDownButton = document.getElementById("lists")
    console.log("OUT")
})
window.addEventListener('click',function(){

    const pullDownButton = document.getElementById("lists")
    console.log("CLICK")
})

pullDownButton.addEventListener('mouseover',function(){
  this.setAttribute("style","background-color:blue;")
})

pullDownButton.addEventListener('mouseout',function(){
    this.setAttribute("style","background-color:red;")
  })

  pullDownButton.addEventListener('click',function(){
   this.setAttribute("style","display:block;")
  })

  pullDownButton.addEventListener('click',function(){
    if (pullDownParents.getAttribute("style") == "display:block;"){
        pullDownParents.removeAttribute("style","display:block;")
    console.log("非表示")
  } else {
    pullDownParents.setAttribute("style","display:block;")
    console.log("表示")
  }
  })