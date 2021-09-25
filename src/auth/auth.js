class Auth {
    constructor(){
        this.auth = false
    }

    login(cb){
        this.auth = true
    }

    logout(cb){
        this.auth = false
    }

    isAuth(){
        return this.auth
    }
}

export default new Auth()