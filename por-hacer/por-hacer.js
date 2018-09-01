const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
	let data = JSON.stringify(listadoPorHacer);

	fs.writeFile('db/data.json', data, (err) => {

		if ( err ) throw new Error('No se pudo grabar', err);
    });
}

const cargaDB = () => {

	try{
		listadoPorHacer = require('../db/data.json');
	}catch (error) {
		listadoPorHacer = [];
	}	
}

const getListado = () => {
	cargaDB();
	return listadoPorHacer;
}


const actualizar = (descripcion, completado = true) => {
	cargaDB();

	let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

	if ( index >= 0 ){
		listadoPorHacer[index].completado = completado;
		guardarDB();
		return true;
	}else{
		return false;
	}
}


const crear = ( descripcion ) => {

	cargaDB();

	let porHacer = {
		descripcion,
		completado: false
	}

	listadoPorHacer.push( porHacer );

	guardarDB();

	return porHacer;
}

const eliminar = ( descripcion ) => {
	cargaDB();
	let nuevoListado = listadoPorHacer.filter( tarea => {
		return tarea.descripcion !== descripcion
	});

	if(listadoPorHacer.length === nuevoListado.length){
		return false;
	}else{
		listadoPorHacer = nuevoListado
		guardarDB();
		return true;
	}
}

module.exports = {
	crear,
	getListado,
	actualizar,
	eliminar
}