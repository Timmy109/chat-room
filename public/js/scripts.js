/* function loadPage() {
    scrollDown;
}

function scrollDown() {
    var objDiv = document.getElementById("messages");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function readTextFile() {
    fetch('log/log.txt')
    .then(response => response.text())
    .then(text => console.log(text))
}

function sendMessage() {
    const msg = document.getElementById("chatMessageInput")

    if (msg.value === "") {return;}


    document.getElementById("message-container").innerHTML += 

    `<div class="w3-panel w3-card-2 break-words rounded-xl"
        style="margin-top: 1%;;margin-right: 5%;">
        <header class="float-left text-xs pt-1.5 font-bold">Tim </header>
        <br /><p>` + msg.value + `</p>
        <footer class="float-right text-xs pb-1.5 font-bold">1:02pm</footer>
        </div>`

    msg.value = "";  
} */