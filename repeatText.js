// write a function that taks num and texte and repeat the text of a giving num

// first method

function rpt(num, tex) {
  result = "";
  for (let i = 0; i < num; i++) {
    result = result + tex + " ";
  }

  return result;
}

console.log(rpt(5, "ahmed"));

// second way

function rpt2(num,text) {
 return text.repeat(num)
}

console.log(rpt2(5,'ahmed'));
