///26)	Valide el ingreso de números múltiplos.
///Escriba un número entero positivo: 7
///Escriba un múltiplo de 7: 50
///Resultado: 		El segundo número ingresado es múltiplo del primero.
///En caso contrario:	¡50 no es múltiplo de 7!


function ejercicio26(){
  let num1 = prompt("Ingrese un número");
  let num2 = prompt("Ingrese un multiplo del primer número");
  let multiplo = num2%num1
  if(multiplo==0){
      alert(`El numero ${num2} es múltiplo de ${num1}. `)
  } 
  else{
      alert(`!${num2} no es múltiplo de ${num1}. `)
  }
}



