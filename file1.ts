const sleep = waitTime => new Promise(resolve => setTimeout(resolve, waitTime));
let d:HTMLElement = document.getElementById("sd");
var df = document.getElementById("hide")
df.addEventListener("click", function () { df.style.backgroundColor = "blue"; sleep(2000);df.style.backgroundColor="forestgreem" })
d.textContent = "dsdfasf";

