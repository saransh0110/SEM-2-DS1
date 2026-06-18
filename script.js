function calculateSum() {
var n = document.getElementById("num").value;
var sum = 0;

for (var i = 1; i <= n; i++) 
{
sum = sum + i;
}
document.getElementById("result").innerHTML = "Sum =" + sum;
}