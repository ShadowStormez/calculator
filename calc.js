let displayBox=document.querySelector(".display");
console.log(displayBox)
function showDisplay(event){
    const x=event.target.innerText;
    //console.log(x)
    if(displayBox.innerHTML==0){
        return displayBox.innerHTML=x;
    }
    return displayBox.innerHTML+=x;
}


function calculate(){
    let result=displayBox.innerText;
    //console.log(typeof result)
    //console.log(eval("1+2"))
   // console.log(eval(result))
   displayBox.innerText=eval(result)
//    let num = Number(result);    
//    console.log(num);

}
function allClear(){
    displayBox.innerText=0;
}
function clear(){
    let text=displayBox.innerText;
    if(text.length===1){
        displayBox.innerText=0;
    }else{
        displayBox.innerText=text.substring(0,text.length-1);//458 (0,1)
    }
}
function sin(){
let result = Math.sin(displayBox.innerText);
displayBox.innerText=eval(result);
}
function cos(){
    let result = Math.cos(displayBox.innerText);
    displayBox.innerText=eval(result);
    }
    function tan(){
        let result = Math.tan(displayBox.innerText);
        displayBox.innerText=eval(result);
        }
        function asin(){
            let result = Math.asin(displayBox.innerText);
            displayBox.innerText=eval(result);
            }
            function acos(){
                let result = Math.acos(displayBox.innerText);
                displayBox.innerText=eval(result);
                }
                function atan(){
                    let result = Math.atan(displayBox.innerText);
                    displayBox.innerText=eval(result);
                    }
                function sinh(){
                    let result = Math.sinh(displayBox.innerText);
                    displayBox.innerText=eval(result);
                    }
                    function cosh(){
                        let result = Math.cosh(displayBox.innerText);
                        displayBox.innerText=eval(result);
                        }
                        function tanh(){
                            let result = Math.tanh(displayBox.innerText);
                            displayBox.innerText=eval(result);
                            }
                            function asinh(){
                                let result = Math.asinh(displayBox.innerText);
                                displayBox.innerText=eval(result);
                                }
                                function acosh(){
                                    let result = Math.acosh(displayBox.innerText);
                                    displayBox.innerText=eval(result);
                                    }
                                    function atanh(){
                                        let result = Math.atanh(displayBox.innerText);
                                        displayBox.innerText=eval(result);
                                        }
                    
function rad() {
    let result=displayBox.innerText * (Math.PI / 180);
     displayBox.innerText=eval(result) ;
    }
function deg() {
    let result=displayBox.innerText * (180 / Math.PI);
    displayBox.innerText=eval(result);
  }
  function ln() {
    let result=Math.log(displayBox.innerText);
    displayBox.innerText=eval(result);
  }
  function log10() {
    let result=Math.log10(displayBox.innerText);
    displayBox.innerText=eval(result);
  }
  function epow() {
    let result=Math.exp(displayBox.innerText);
    displayBox.innerText=eval(result);
  }
  function sqrt() {
    let result=Math.sqrt(displayBox.innerText);
    displayBox.innerText=eval(result);
  }
  function cbrt() {
    let result=Math.cbrt(displayBox.innerText);
    displayBox.innerText=eval(result);
  }
  function pow() {
    const parts = displayBox.innerText.split('^');
    const base = parseFloat(parts[0]);
    const exponent = parseFloat(parts[1]);
    const result = Math.pow(base, exponent);
    displayBox.innerText=eval(result);
    } 
    function PI() {
        x=Math.PI;
        return displayBox.innerHTML=x;
    }
    function e() {
        x=Math.E;
        return displayBox.innerHTML=x;
    }
    function Rand() {
        x=Math.random();
        return displayBox.innerHTML=x;
    }

    function Fac() {
       let n= displayBox.innerText;
        if (n < 0) {
            return 'error';
        }
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
         displayBox.innerText=eval(result);
    }
    function absolute() {
        let result= Math.abs(displayBox.innerText);
        displayBox.innerText=eval(result);
      }

function bin(){
    let number = displayBox.innerText;
    let binaryString =number.toString(2);
    displayBox.innerText = eval(binaryString);
}
function oct(){
   
    let number = displayBox.innerText;
    let octString =number.toString(8);
    displayBox.innerText = eval(octString);
}
function hex(){
   
    let number = displayBox.innerText;
    let hexString =number.toString(16);
    displayBox.innerText = eval(hexString);
}

  
      
      
document.querySelector(".calculate").addEventListener("click",calculate);
document.querySelector(".all-clear").addEventListener("click",allClear);
document.querySelector(".clear-last").addEventListener("click",clear);
document.querySelector(".sin").addEventListener("click",sin);
document.querySelector(".cos").addEventListener("click",cos);
document.querySelector(".tan").addEventListener("click",tan);
document.querySelector(".asin").addEventListener("click",asin);
document.querySelector(".acos").addEventListener("click",acos);
document.querySelector(".atan").addEventListener("click",atan);
document.querySelector(".sinh").addEventListener("click",sinh);
document.querySelector(".cosh").addEventListener("click",cosh);
document.querySelector(".tanh").addEventListener("click",tanh);
document.querySelector(".asinh").addEventListener("click",asinh);
document.querySelector(".acosh").addEventListener("click",acosh);
document.querySelector(".atanh").addEventListener("click",atanh);
document.querySelector(".rad").addEventListener("click",rad);
document.querySelector(".deg").addEventListener("click",deg);
document.querySelector(".ln").addEventListener("click",ln);
document.querySelector(".log10").addEventListener("click",log10);
document.querySelector(".epow").addEventListener("click",epow);
document.querySelector(".sqrt").addEventListener("click",sqrt);
document.querySelector(".cbrt").addEventListener("click",cbrt);
document.querySelector(".pow").addEventListener("click",pow);
document.querySelector(".PI").addEventListener("click",PI);
document.querySelector(".e").addEventListener("click",e);
document.querySelector(".Fac").addEventListener("click",Fac);
document.querySelector(".absolute").addEventListener("click",absolute);
document.querySelector(".bin").addEventListener("click",bin);
document.querySelector(".oct").addEventListener("click",oct);
document.querySelector(".hex").addEventListener("click",hex);
document.querySelector(".Rand").addEventListener("click",Rand);















let list=document.querySelectorAll(".show-display");
//console.log(list)
list.forEach(item=>{
    //console.log(item)
    item.addEventListener("click",showDisplay)
})