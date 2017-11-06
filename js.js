window.onload=function () {
    init();
    control();
}
window.onresize=function(){
    myInnerWidth=window.innerWidth;
    console.log(myInnerWidth);
}
var myRotate=0;
var myInnerWidth=window.innerWidth;

function init(){
    var img=document.getElementById("container").getElementsByTagName("img");
    for(var i=0;i<img.length;i++){
        img[i].style.transform="rotateY("+40*i+"deg) translateZ(700px)";
        //禁止图片拖动
        img[i].ondragstart=function () {
            return false;
        }
    }
    console.log(document.getElementById("content").style.transform)
}

function control(){
    var container=document.getElementById("container");
    document.addEventListener("mousedown",function (event) {
        if(event.screenX>(myInnerWidth/2)){
            myRotate+=1;
            container.style.transform= "rotateY("+40*myRotate+"deg)";
            container.style.transition="transform 1s";
            console.log(myRotate)
        }else {
            myRotate-=1;
            container.style.transform= "rotateY("+40*myRotate+"deg)";
            container.style.transition="transform 1s";
            console.log(myRotate)
        }
    })
}

//禁止网页里面全部图片的拖动
// function imgDragstart(){return false;}
// for(var i=0;i < document.images.length;i++){
//     document.images[i].ondragstart=imgDragstart;
// }