let milsec=0;
let sec=0;
let min=0;
let eleid=document.getElementById("ref");
let interval=null;
let flag=false;
function start(){
    if(flag==true){
        return;
    }
    flag=true;
    interval=setInterval(timer,100);
    function timer(){
         milsec+=100;
         if(milsec>=1000){
            sec++;
            milsec=0;
         }
         if(sec>=60){
            min++;
            sec=0;
            milsec=0;
         }
         let seczero=sec>9?"":"0";
         let minzero=min>9?"":"0";
         let milseczero = milsec==0?"000":milsec
         eleid.innerText=`${minzero}${min} : ${seczero}${sec} : ${milseczero}`;
    }

}
function stop(){
    clearInterval(interval);
    flag=false;

}
function reset(){
    clearInterval(interval);
    milsec=0;
    sec=0;
    min=0;
    eleid.innerText=`00 : 00 : 00`;
    flag=false;

}