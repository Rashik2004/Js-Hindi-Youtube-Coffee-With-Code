const form = document.querySelector('form')
//this usecase will give us the emptyvalues
// const weight =  parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt( document.querySelector('#height').value)
    const weight =  parseInt(document.querySelector('#weight').value)
    const result =  document.querySelector('#result')

    if (height === '' || height <= 0 || isNaN(height)) {
        result.innerHTML=`Please enter a valid ${height}`
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML=`please enter a valid ${weight}`
    } else {
        // height is in cm, weight is in kg
        const BMI = (weight / (height / 100) ** 2).toFixed(2);
        if (BMI < 18.6) {
            result.innerHTML=`The BMI according to height:${height} and weight:${weight} is <span> ${BMI} </span> <br> Sorry you are underwight`
        }
        else if (BMI >=18.6 && BMI < 24.9) {
            result.innerHTML=`The BMI according to height:${height} and weight:${weight} is <span> ${BMI} </span> <br> Good News you are in normal weight`
        } else {
            result.innerHTML=`The BMI according to height:${height} and weight:${weight} is <span> ${BMI} </span> <br> Please control your are overweight`
        }
    }
})

