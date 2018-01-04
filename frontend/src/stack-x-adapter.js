class StackXAdapter
{
  // const CLIENT_ID = 11539
  // const CLIENT_SECRET_KEY = "WKM9bfwN8CnsG3Ag*cruoA(("
  // const KEY = "9Zi7FOM4BG)czMpaX*PchA(("
  static getStackDataAPI(searchTerm){
    let encodedTerm = encodeURI(searchTerm)
    return fetch(`https://api.stackexchange.com/2.2/search/advanced?pagesize=10&order=desc&sort=relevance&q=${encodedTerm}&answers=1&site=stackoverflow&filter=!9YdnSIaCy`).then(resp => resp.json())

  }

}
