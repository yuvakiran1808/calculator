
const  key = document.getElementById("content");
function dis(val)
{
key.value+=val
}

function solve()
{
let x = document.getElementById("content").value
let y = eval(x)
document.getElementById("content").value = y
}
function clr()
{
document.getElementById("content").value = ""
}