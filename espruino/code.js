
function onInit(){
  USB.setConsole(true);
  main();
}

var avalue;
function main(){
  setInterval(()=>{
    avalue = analogRead(0);
    console.log(avalue);
  },1000);
}