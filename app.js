let text = document.getElementById('text');

for (let i = 15; i < 60; i +=5) {
    text.innerText = text.innerText +'\n'+ "Le capitaine a " +i+ " ans";

    if (i < 18) {
        text.innerText = text.innerText +', '+ "le capitaine est jeune"
    }

    if (i >18 && i <= 50) {
        text.innerText = text.innerText +', '+ "le capitaine n'est pas très vieux"
    }

    if (i > 50) {
        text.innerText = text.innerText +', '+ "Le capitaine est vieux"
    }
}


