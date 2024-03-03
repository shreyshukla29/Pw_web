function login(username , password){
    if(username ===""){
        throw new Error("Username is Required")
    }
    if(password ===""){
        throw new Error("Password is required")
    }

    check(username,password)
}

function check(username,password){
    if(username ==="user123" && password=="password123"){
        console.log("login successfully")
    }else{
        throw new Error("Invalid username or password")
    }
}


try {
    login("user123","password123")
    login("","password456")
  //  login("user456","")
 //   login("invalidUser123","invalidPassword")
} catch (error) {
    console.log(error.message)
}