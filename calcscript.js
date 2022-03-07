const values =  document.getElementById("content");
function dis(val){

    values.value+=val;
    
 }
    
  function solve()
    {
    let  key = document.getElementById("content").value;
    if(isNaN(key))
    {
        document.getElementById("content").value = "ENTER VALID INPUT";
    }
// let x = document.getElementById("content").value
let y = eval(key)
document.getElementById("content").value = y
}
function clr()
{
document.getElementById("content").value = ""
}