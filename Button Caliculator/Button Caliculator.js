var count=0
//var previous=0;
function Increment(){
    count+=1;
     //document.write(count);
    document.getElementById("math").innerText=count;
}
function Decrement(){
    count-=1;
    //document.write(count);
    document.getElementById("math").innerText=count;
}
function Multiply(){
    count*=10;
    //document.write(count);
    document.getElementById("math").innerText=count;
}
function Divison(){
    count/=10;
    //document.write(count);
    document.getElementById("math").innerText=count;
}
function AllClear(){
    count=0;
    document.getElementById("math").innerText=0;
}
function Previous(){
    document.getElementById("previous").textContent+=count+" - ";
}
function todayDate(){
        var d = new Date();
        var n = d.getFullYear() + "  ";
        return document.getElementById("date").innerHTML = n;
        //return document.write(n);
}