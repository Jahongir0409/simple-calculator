let screen = document.querySelector('.screen')
let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')	
let select = document.querySelector('select')	
let btn = document.querySelector('#btn')

btn.addEventListener('click', function(){
	let operator = select.value 
	if (operator === "+") {
		screen.textContent = (num1.value - 0) + (num2.value - 0)  
	} else if (operator === "-") {
		screen.textContent = (num1.value - 0) - (num2.value - 0)  
	} else if (operator === "*") {
		screen.textContent = (num1.value - 0) * (num2.value - 0)  
	}else if (operator === "/") {
		screen.textContent = (num1.value - 0) / (num2.value - 0)  
	} else {
		screen.textContent = 'Please fill ..!' 
	}
})	