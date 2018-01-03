class EventHandler{
  static userExists(){
  let userName = document.getElementsByName("username")[0].value
  let backendObj = Adapter.getUserDataAPI(userName).then(obj => {
    if (obj.length === 0){
      return false
    }
    else {
      return true
    }
  })
  return backendObj
}

static createNewUser(){
  let userName = document.getElementsByName("username")[0].value
  let newUser;
  Adapter.createUserAPI(userName).then(obj =>{
    let newUser = new User(obj)
  })
  debugger
  return newUser
}


  static getExistingUser(){
    let userName = document.getElementsByName("username")[0].value
    let user;
    let backendObj = Adapter.getUserDataAPI(userName).then(obj => {
      debugger
        user = new User(obj[0])
    })
    return user
  }
}
