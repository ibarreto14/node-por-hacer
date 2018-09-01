
const argv = require('yargs')
					.command('crear', 'Crea una nueva tarea por hacer', {
						descripcion: {
							demand: true,
							alias: 'd',
							desc: 'Descripción de la tarea por hacer'
						}	
					})
					.command('actualizar', 'Actualiza una tarea por hacer', {
						descripcion: {
							demand: true,
							alias: 'd'
						},
						completado: {							
							alias: 'c',
							default: true,
							desc: 'Marca como completado o pendiente la tarea'
						}
					})
					.command('eliminar', 'Elimina una tarea por hacer', {
						descripcion: {
							demand: true,
							alias: 'd',
							desc: 'Elimina una tarea del listado de tareas pendientes'
						}
					})
					.help()
					.argv;


module.exports = {
	argv
}