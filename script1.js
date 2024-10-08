const form = document.getElementById('flames');
const resultSection = document.getElementById('result');
const confirmationMessage = document.getElementById('calculation');

var x = document.getElementById("myakka");

function playAudioakka() {
  x.play();
}

var y = document.getElementById("gopi");

function playAudiogopi() {
  y.play();
}
var z = document.getElementById("naveen");

function playAudiomodi() {
  z.play();
}
var a = document.getElementById("gv");

function playAudiolove() {
  a.play();
}
var b = document.getElementById("rama");

function playAudiorama() {
  b.play();
}
var c = document.getElementById("mam");

function playAudiomam() {
  c.play();
}






form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting and reloading the page

    const name1 = document.getElementById('boy_name').value.toLowerCase().replace(/\s+/g, '');
    const name2 = document.getElementById('girl_name').value.toLowerCase().replace(/\s+/g, '');

    let arr = ["Friends", "Lovers", "Affection", "Marriage", "Enemy", "Siblings"];
    if(name1.includes("okul")&&name2.toLowerCase().includes("rindha") || name2.toLowerCase().includes("oshitha")&& name1.toLowerCase().includes("arthi")){
        arr=["Lovers"];
        playAudiolove();
        document.body.style.background="url('love.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        resultSection.style.backgroundColor="white";
        resultSection.style.borderRadius="10px";
        resultSection.style.padding="30px";
    }
    else if(name1.includes("okul")&&name2.toLowerCase().includes("kani")||name1.includes("arthi")&&name2.toLowerCase().includes("kani")){
        arr=["she is our Sister(Akka)"]
        document.body.style.background="url('akka.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        resultSection.style.backgroundColor="white";
        resultSection.style.borderRadius="10px";
        resultSection.style.padding="30px";   
        playAudioakka();     
    }
    else if(name2.includes("pika")){
        arr=["She is a heroine...<br>She loves KK"]
        playAudiogopi();
    }
    else if(name2.includes("ukirthi")||name2.includes("roshini")){
        arr=["Marriage <br>She is an Angel...<br>She loves her husbund"]
        playAudiomam();
    }
    else if(name1.includes("aveen")){
        arr=["He loves modi...<br> Thamarai malarndhe theerum !!!"];
        document.body.style.background="url('download.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        resultSection.style.backgroundColor="white";
        resultSection.style.borderRadius="10px";
        resultSection.style.padding="30px";   
        playAudiomodi();
    }
    else if(name2.includes("amalak")){
        arr=["Thangachi "];
        resultSection.style.padding="30px";   
        playAudiorama();

    }

    else{
        let small = name1.length < name2.length ? name1 : name2;
    let large = name1.length >= name2.length ? name1 : name2;

    // Remove common characters
    for (let i = 0; i < small.length; i++) {
        if (large.includes(small[i])) {
            large = large.slice(0, large.indexOf(small[i])) + large.slice(large.indexOf(small[i]) + 1);
            small = small.slice(0, small.indexOf(small[i])) + small.slice(small.indexOf(small[i]) + 1);
            i--; // Adjust index because the string length has changed
        }
    }

    // Calculate the total remaining characters
    const count = large.length + small.length;

    // FLAMES Logic
    
    let index = 0;

    for (let i = 6; i > 1; i--) {
        let del = (count % i) - 1;
        if (del >= 0) {
            arr.splice(del, 1);
        } else {
            arr.splice(arr.length - 1, 1);
        }
    }
    }
    

    // Display result
    confirmationMessage.innerHTML = `<br> <strong>${arr[0]}</strong>!`;
    resultSection.style.display = "block"; // Show the result section
});
