//your JS code here. If required.
let count=0;
let counter1=document.getElementById("counter");
counter1.textContent=count;
function update(){
    alert(count);
	count++;
	counter1.textContent=count;
}
