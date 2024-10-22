document.getElementById('deposit').addEventListener('click', function(){
    const depositIn = parseInt(document.getElementById('depositIn').value);
    const depositPara = parseInt(document.getElementById('depositPara').innerText);
    document.getElementById('depositPara').innerText = depositIn + depositPara;
    
    let totalTk = parseInt(document.getElementById('totalPara').innerText);
    totalTk += depositIn;
    document.getElementById('totalPara').innerText = totalTk;

})