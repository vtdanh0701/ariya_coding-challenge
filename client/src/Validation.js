
const Validation = (emailInput) => {
    if(!emailInput.includes('@')){
        return "Invalid Email"
    }
}

export default Validation;