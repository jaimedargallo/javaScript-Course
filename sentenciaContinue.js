// Continue - Permite saltar a la siguiente ejecución del ciclo

var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

for(var i = 0; i < semana.length; i++){

	if (semana[i] == 'jueves'){
		continue;
	}
	console.log(semana[i]);
}