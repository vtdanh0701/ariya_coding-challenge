const user = require('../../model/user');



module.exports = {
    getUser: () => {
        return user
    },

    
    // login function , again without database for simplification. 
    login: ({email,password}) =>{
        //check if user input match user model. We only have one user now. 
        if(email !== user.email || password !== user.password){
            throw new Error ('Invalid Email or Password')
        }
        else{
            return {...user}
        }
    }
}