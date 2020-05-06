/* for(variable inicio; longitud o condición, incremento){
	
}

*/

for(var i = 1; i <= 10; ++i){

console.log(i);

}

// MUY importante Incrementar o decrementar la variable, o se puede crear un blucle infinito que bloquee el equipo.

// var semana ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']

// for(var i = 0; i < semana.length; i++){

// 	console.log(semana[i]);
// }


// FOR IN

var semana ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']

for(dia in semana){
	console.log(semana[dia]);
}