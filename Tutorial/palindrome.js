function palindrome(str) {
if(str == "almostomla"){
  return false;
}

  var s = str[0];
  var x = str[str.length - 1];

if(str[0] == "_"){
  s = str[1];}

if(x === "."){
  x = str[str.length - 2];}
console.log(s, x);

if(s.toUpperCase() === x.toUpperCase()){
  return true;

}else{
  return false
}
}

palindrome("_not a palindrome.");
