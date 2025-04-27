const input = document.querySelector('input')

let previousValue = ''
let firsthree = ''

input.addEventListener('input', (e) => {
    const inputValue = e.target.value

    if(/\d+$/g.test(inputValue)) /*checking regular expression for number only*/
    {
        input.value = inputValue
    }
    else
    {
        input.value = inputValue.substring(0, inputValue.length-1)
    }
    
    if(inputValue.length === 4 && previousValue.length < inputValue.length)
    {
        firsthree = inputValue.substring(0, 3)
        input.value = `+(${firsthree}) - ${inputValue[inputValue.length-1]}`
    }
    else if(inputValue.length === 9 && previousValue.length > inputValue.length)
    {
        input.value = firsthree
    }
    previousValue = inputValue
})