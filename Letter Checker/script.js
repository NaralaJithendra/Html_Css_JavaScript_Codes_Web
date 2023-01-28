function todayDate(){
        var d = new Date();
        var n = d.getFullYear() + "  ";
        return document.getElementById("date").innerHTML = n;
        //return document.write(n);
}
function function22(){
            var a=document.getElementById("q");
            var b=/^[A-z]/.test(a);
            if(!b){
                alert("Hey😒😢☹️");
            }
            else{
                a.innerText='😀👌👏👍';
            }
        }