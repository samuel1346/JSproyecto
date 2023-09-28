const convertAndReverse = 0;
const returnReverseValue = number => {
   const convertAndReverse = number.toString().split("").reverse().join("");
   return Number(convertAndReverse);
};
let number = Number(prompt("elige un numero de tres digitos ordenados de mayor a menor"));

if(number>0){
   alert("ahora restale el mismo numero pero invertido");
   alert(`acaso el resultado es ${number - returnReverseValue(number)}?`);
}
else{
   alert("algo hicimos mal")
};