class GoogleAdapter{
  static makeRequest(uriInput){
    return fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAQYow_00OnXRXEglSnyOsm1rwUadmm68I&cx=011805643419764676712:-wfgvcmc5py&q=${uriInput}`).then(resp => resp.json())

  }

}
