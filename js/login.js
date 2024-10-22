document.getElementById('submit').addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;


    if( email === 'jubayer@gmail.com' && pass === 'jubayer'){
        window.location.href = './takaPoisa.html';
    } else {
        alert('Tmr email and pass vul. tumi taka curi korte ascho?');
    }
})