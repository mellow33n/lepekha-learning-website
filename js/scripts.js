function displayOpa() { 
    document.getElementById("password-page").removeAttribute("style");
   var pass = prompt("Кодовое слово"); 
    if(pass == 'qq123') {
        alert('Ладно, заходи');
        document.getElementById("password-page").removeAttribute("style");
    } else if (pass == 'pidor' || pass == 'пидор' || pass == 'лох' || pass == 'loh') {
        alert('Кодовое слово, пожалуйста. Ваше имя мне не интересно');
        location.reload();
    }
    
    else {
        alert('Уходи, НЕЛЬОХА!');
        location.reload();
    }
}
window.onload = displayOpa; 