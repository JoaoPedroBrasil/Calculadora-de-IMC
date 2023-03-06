const resultado = document.querySelector('#resultado');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');

const calcIMC = () => {
    if (altura.value !== '' && peso.value !== ''){
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classfication = ''

        if (imc < 18.5){
            classfication = 'Abaixo do peso'
        } else if (imc < 25){
            classfication = 'Peso normal'
        } else if (imc < 30){
            classfication = 'Acima do peso'
        } else if (imc < 35){
            classfication = 'Obesidade grau 1'
        } else if (imc < 41){
            classfication = 'Obesidade grau 2'
        } else{
            classfication = 'Obesidade grau 3'
        }

        resultado.innerHTML = `IMC: ${imc} (${classfication})`
    } else{
        resultado.innerHTML = 'Preencha os campos.'
    }
}