let frase = 'Ciao ragazzi, come state ?';
console.log(frase.split(", "));

const btn = document.getElementById('btn1');

btn.addEventListener('click',function(){
    const parola = document.getElementById('data').value;
    let palindroma = reverseWord(parola).toLocaleLowerCase() === parola.toLocaleLowerCase();
    console.log(palindroma);
    
});

function reverseWord(word){
    return word.split("").reverse().join("");
};