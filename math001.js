multiplyThem = () => {
    event.preventDefault();
    // Pulls numbers from the HTML first
    let number1 = document.getElementById("num1").value
    let number2 = document.getElementById("num2").value

    // Multiplies the numbers and converts string to number
    let multipliedNum = parseFloat(number1 * number2)

    // Changes totalMultiplies to new text
    document.getElementById("totalMultiplied").innerHTML = `<p style="color:Green">The total of ${number1} times ${number2} equals ${multipliedNum}</p>`
    
    // Tester line
    // console.log(multipliedNum)
}
