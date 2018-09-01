//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

//console.log( argv );

let comando = argv._[0];

switch( comando ){
	case 'crear':		
		let tarea = porHacer.crear( argv.descripcion );
		console.log( tarea );
	break;

	case 'listar':		
		let listado = porHacer.getListado();

		for(let tarea of listado){
			console.log('=============Por hacer=============='.green);
			console.log(tarea.descripcion);
			console.log('Estado: ', tarea.completado);
			console.log('===================================='.green + '\n');
		}
	break;

	case 'actualizar':
		//console.log('Actualiza una tarea por hacer');

		let actualizado = porHacer.actualizar( argv.descripcion, argv.completado );
		console.log(actualizado);
	break;

	case 'eliminar':
		//console.log('Se elimina una tarea por hacer');
		let eliminar = porHacer.eliminar( argv.descripcion );
		console.log(eliminar);
	break;

	default:
		console.log('Comando no reconocido');
	break;
}