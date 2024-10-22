document.getElementById('sum').addEventListener('click', function(){
    const firstNum = parseInt(document.getElementById('firstPnum').value);
    const secondNum = parseInt(document.getElementById('secondPnum').value);
    document.getElementById('positivePara').innerText = firstNum + secondNum;
    
})
//subtraction------------------------------------------------------------------------------------------------
document.getElementById('sub').addEventListener('click', function(){
    const firstNum = parseInt(document.getElementById('firstNnum').value);
    const secondNum = parseInt(document.getElementById('secondNnum').value);
    document.getElementById('negativePara').innerText = firstNum - secondNum;
    
})
// Multiplication-------------------------------------------------------------------------------------------------
document.getElementById('mul').addEventListener('click', function(){
    const firstNum = parseInt(document.getElementById('firstMnum').value);
    const secondNum = parseInt(document.getElementById('secondMnum').value);
    document.getElementById('multiplyPara').innerText = firstNum * secondNum;
    
})
// division -------------------------------------------------------------------------------------------
document.getElementById('div').addEventListener('click', function(){
    const firstNum = parseInt(document.getElementById('firstDnum').value);
    const secondNum = parseInt(document.getElementById('secondDnum').value);
    document.getElementById('dividePara').innerText = firstNum / secondNum;
    
})
// Modulus -------------------------------------------------------------------------------------------
document.getElementById('mod').addEventListener('click', function(){
    const firstNum = parseInt(document.getElementById('firstModNum').value);
    const secondNum = parseInt(document.getElementById('secondModNum').value);
    document.getElementById('modPara').innerText = firstNum % secondNum;
    
})