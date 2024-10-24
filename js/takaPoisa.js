let totalTk = parseInt(document.getElementById('totalPara').innerText);

document.getElementById('deposit').addEventListener('click', function(){
    
    const depositInput = parseInt(document.getElementById('depositIn').value);
    if(isNaN(depositInput)){
        document.getElementById('deposit').setAttribute('disabled', true);
        document.getElementById('deposit').classList.remove('hover:bg-blue-700');

    } else{
        document.getElementById('deposit').removeAttribute('disabled');
        document.getElementById('deposit').classList.add('hover:bg-blue-700');
        
    }
    if(!isNaN(depositInput)){
        const depositPara = parseInt(document.getElementById('depositPara').innerText);
    document.getElementById('depositPara').innerText = depositInput + depositPara;
    
    
    totalTk += depositInput;
    document.getElementById('totalPara').innerText = totalTk;
    document.getElementById('depositIn').value = '';
    }

})

document.getElementById('withdraw').addEventListener('click', function (){
   
    const withdrawInput = parseInt(document.getElementById('withdrawIn').value);
    if(isNaN(withdrawInput)){
        document.getElementById('withdraw').setAttribute('disabled');
    } else{
        document.getElementById('withdraw').removeAttribute('disabled');
        
    }
    const withdrawPara = parseInt(document.getElementById('withdrawPara').innerText);

    if(document.getElementById('withdrawIn').value < totalTk){
        document.getElementById('withdrawPara').innerText = withdrawInput + withdrawPara;
    
        totalTk -= withdrawInput;
        document.getElementById('totalPara').innerText =totalTk;
    } else {
        alert("You don't have sufficient balance");
    }
    
    document.getElementById('withdrawIn').value = '';

})