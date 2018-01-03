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
  return Adapter.createUserAPI(userName).then(obj =>{
    return new User(obj)
  })
}


  static getExistingUser(){
    let userName = document.getElementsByName("username")[0].value;
    return Adapter.getUserDataAPI(userName).then(obj => {
        return new User(obj[0])
    })
  }


}
