export const checkSpCharacters =(str)  =>{
  let spChars = /[%^&*()_+\-=\[\]{};':`"\\|,.<>\/?]+/;
    if(spChars.test(str)){
      return true;
    } else {
      return false;
    }
}

export const checkMatch= (pass, confirm)=> {
  if (pass === confirm) {
    return true
  } else {
    return false
  }
}