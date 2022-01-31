let firstSon = +prompt('birinchi sonni kiriting?');
let secondSon = +prompt('ikkinchi sonni kiriting?');
let thirdSon = +prompt('uchinchi sonni kiriting?');


if (firstSon < secondSon && firstSon > thirdSon || firstSon < secondSon && firstSon > thirdSon){
  alert('ortacha son' + firstSon);
}else if(secondSon > firstSon && secondSon < thirdSon || secondSon < firstSon && secondSon > thirdSon){
  alert('ortacha son'+ secondSon)  
}else{
  alert('ortacha son'+ thirdSon)
}

 
