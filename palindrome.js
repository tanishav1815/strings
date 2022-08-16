// palindrome check

var Palin_Check = (str) =>
{
  let i=0;
  let len=str.length;
  for(let i=0; i<len/2; i++){
    if(str[i]!== str[len-1-i]){
    return "False";
    }
    else{
      return "True";
    }
    
  }
}

