function calculate(x, y){
    return(x * y)
}

function doCalc(){
    const things = parseFloat(document.querySelector("#string1").value)
    const size = parseFloat(document.querySelector("#string2").value)

    total = calculate(things, size);


    document.querySelector('#shortString').innerHTML =  total
    localStorage.setItem("value", total);
}

const getAdvice = async () =>{
    var data = await fetch("https://api.adviceslip.com/advice")
    var json = await data.json()
    console.log(json.slip.advice)
    document.querySelector("#adviceField").innerHTML = json.slip.advice
}

document.querySelector('#calcButton').addEventListener('click', doCalc)
document.querySelector('#advice').addEventListener('click', getAdvice)