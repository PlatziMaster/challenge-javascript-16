const { StackObj } = require ('./stack-obj');

function baseConverter(decNumber, base) 
{
  if (decNumber < 0 || base < 2 || base > 36)
    return null;
  else
    { 
      var resultado = decNumber.toString(base);
      return resultado.toUpperCase();
    }    
}


module.exports =   baseConverter;
