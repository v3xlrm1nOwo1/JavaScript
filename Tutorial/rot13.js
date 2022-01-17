function rot13(str) {
  str = str.toUpperCase();
  let str2 = "";
  let arr1 = ["A", "B", "C", "D", ".", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let arr2 = [];
.
  for(let i=0; i<str.length; i++){
    arr2.push(str[i],);
  }
  console.log(arr2);

  for(let i=0; i<arr2.length; i++){
    if(arr2[i] == " " || arr2[i] == "?" || arr2[i] == "." || arr2[i] == "!"){
      str2 += arr2[i];
    }
    else{
      let n = arr1.indexOf(arr2[i]);
      if(n < 13){
        n += arr1.length;
      }
      str2 += arr1[n-13];
      console.log(n);
      console.log(str2)
     }
  }
  console.log(str2);
  return str2;
}
