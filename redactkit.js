var redact = function redact(text,ignoreSpaces,start,stop){
  var output = "";
  for(var i=0; i<text.length; i++){
    if(i < start || i> stop){
      output += text.charAt(i);
    }
    else{
      if((text.charAt(i) != ' '|| ignoreSpaces) && text.charAt(i) != '\n'){
        output += "\u2588";
      }
      else{
        output += text.charAt(i);
      }
    }
  }
  return output;
}
module.exports = redact;
