// const PERSONA = {
// 	nombre: "Hugo",
// 	apellido: "Olvera"
// };

// PERSONA.nombre="Victor";

// console.log(PERSONA);

/////////////////////////////////////

// for (var i = 0; i<=10; i++){
// 	//
// 	//
// 	//
// }

// for (let i = 0; i<=10; i++){
// 	//
// 	//
// 	//
// }

// console.log(i);


////////////////////////////////

// var funciones = [];

// for (var i = 0; i < 10; i++) {
// 	funciones.push( function(){ console.log(i) } );
// }


// funciones.forEach( function(func){

// 	func();

// });

// var funciones = [];

// for (let i = 0; i < 10; i++) {
// 	funciones.push( function(){ console.log(i) } );
// }


// funciones.forEach( function(func){

// 	func();

// });


/////////////////////////////////////////////////////////////////////-
// let numero = 10;
 
// if( true ){ 
//     let numero = 20;
    
//     while(true){ 
//         let numero = 20; 
        
//         for(let numero = 1; numero < 10; numero ++){ 
//             numero = numero; 
//         } break; 
//    }
// }
 
// console.log(numero);


///////////////////////////////////////////////////////////////////////

 // var saludo ="Hola Mundo!";

 // console.log(saludo.substr(0,1) === "h");


 // console.log(saludo.startsWith("Hola"));
 // console.log(saludo.endsWith("!"));

 // console.log(saludo.indexOf("x"));
 // console.log(saludo.includes("x"));

 // console.log(saludo.startsWith("Mu",5)); // Base 1
 // console.log(saludo.includes("a",5)); 

///////////////////////////////////////////////////////////////////////

// let texto = "Hola";

// console.log(texto.repeat(2));
// console.log("Hola".repeat(2));


// const ESPACIOS = 12;

// let nombres = ["Fernando","Melissa","Juan"];
// let telefonos = ["9988774455","98745632","97846512"];


// for (i in nombres) {
// 	let dif = ESPACIOS - nombres[i].length;

// 	console.log( nombres[i] + " ".repeat(dif) + "|" + telefonos[i]);

// }

///////////////////////////////////////////////////////////////////////
// function obtenerNombre(){
// 	return "Maria Perez";
// }

// let nombre = "Maria";
// let apellido = "Perez";

// let nombreCompleto = nombre + " " + apellido;
// console.log(nombreCompleto);

// //Template Literals //
// let nombreCompleto2 = `El nombre completo es ${nombre} ${apellido}`;
// console.log(nombreCompleto2);


// let nombreCompleto3= `El nombre completo es ${obtenerNombre()}`;
// console.log(nombreCompleto3);

// let multilinea = `<h1 class="algo">${nombre}</h1> 
// <p>Hola Mundo ${apellido}</p>`;
// console.log(multilinea); 

///////////////////////////////////////////////////////////////////////
//Template con tags (Tagged templates)
// function etiqueta(literales, ...substituciones){
// 	// console.log(arguments);
// 	let resultado = "";

// 	console.log(literales);
// 	console.log(substituciones);

// 	for (var i = 0; i < substituciones.length; i++) {
// 		resultado += literales[i];
// 		resultado += substituciones[i];
// 	}

// 	return resultado;
// }


// let unidades = 5, costo_unitario=10;

// let mensaje = etiqueta`${unidades} lapices cuestan ${unidades * costo_unitario} pesos`;

// console.log(mensaje);



/////////////////////////////////////////////////////////////////////
//Valores "Crudos" (Valores Raw)

// let mensaje = `Hola Mundo`;
// console.log(mensaje);

// let mensaje = `Hola \nMundo\\`; //No aparece las dos diagonales inversas
// let mensaje2 = String.raw`Hola \nMundo\\`;
// let mensaje3 = String.raw"Hola \nMundo\\"; //No funciona, solo con templates
// console.log(mensaje);
// console.log(mensaje2);
// console.log(mensaje3); //No funciona, solo con templates 


///////////////////////////////////////////////////////////////////////
//Default Parameters (Parametros por defecto)

//ES5
// function saludo(mensaje, tiempo){

	//En ES5 se validaba si venia o no algo en "mensaje"
	// mensaje = mensaje || "Hola Mundo";
	// mensaje = ( typeof mensaje != "undefined" ) ? mensaje : "Hola Mundo 2";

// 	setTimeout(function() {
// 		console.log(mensaje);
// 	},tiempo);
// }


//ES6
// function saludo(mensaje = "Hola Mundo", tiempo = 1500){ // Primero parametros que siempre van, luego opcionales

// 	setTimeout(function() {
// 		console.log(mensaje);
// 	},tiempo);
// }

// saludo();


///Poniendo una funcion como parametro
// function saludo( fn = fnTemporal ){ // Primero parametros que siempre van, luego opcionales

// 	fn();	
// }

// function fnTemporal(){
// 	console.log("Hola Victor Hugo");
// }

// saludo();



//////////////////////////////////////////////////////////////////////
// REST Parameters (...)

//ES5
// function agregar_alumno(){

// 	console.log(arguments);

// 	for(var i=1; i<arguments.length; i++ ){
// 		arguments[0].push( arguments[i]);
// 	}

// 	return arguments[0];
// }

// var alumnos_arr = ["Fernando"];
// var alumnos_arr2 = agregar_alumno(alumnos_arr, "Maria","Pedro","Susana","Juan");

// console.log(alumnos_arr2);

//ES6
// function agregar_alumno(arr_alumnos, ...alumnos){
// 	console.log(arguments);

// 	for(var i=0; i<alumnos.length; i++ ){
// 		arr_alumnos.push( alumnos[i]);
// 	}

// 	return arr_alumnos;
// }

// let alumnos_arr = ["Fernando"];
// let alumnos_arr2 = agregar_alumno(alumnos_arr, "Maria","Pedro","Susana","Juan");

// console.log(alumnos_arr2);


//////////////////////////////////////////////////////////////////////
//Aclarando el doble comportamiento de las funciones

//ES5
// Cuando se usa "new", "this" crea un nuevo objeto

// function Persona(nombre){
	// if(this inistanceof Persona){
	// 	this.nombre= nombre;
	// }else{
	// 	throw Error("Esta funcion debe de ser utilizada con new");
	// }

// }

// let persona = new Persona("Fernando");
// let noEsPErsona = Persona("Persona");

// console.log(persona);
// console.log(noEsPErsona);


//ES6
// function Persona(nombre){

// 	if(typeof new.target !== "undefined"){
// 		this.nombre= nombre;
// 	}else{
// 		throw Error("Esta funcion debe de ser utilizada con new");
// 	}
// 	this.nombre= nombre;
// }

// let persona = new Persona("Fernando");
// let noEsPErsona = Persona("Persona");

// console.log(persona);
// console.log(noEsPErsona);


//////////////////////////////////////////////////////////////////////
//Arrow Functions ( => )

// var miFuncion2 = function(valor){
// 	return valor;
// }


// //usando arrow
// let miFuncion1 = valor => valor;

// console.log(miFuncion1);
// console.log(miFuncion2);


// //con mas parametros
// var sumar2 = function(num1,num2){
// 	return num1 = num2;
// }


// //usando arrow
// let sumar1 = (num1,num2) => num1 + num2;


// //sin parametro
// var saludar2 = function(){
// 	return "Hola Mundo";
// }


// //usando arrow
// let saludar1 = () => "Hola Mundo";



// //Otro ejemplo
// var saludarPersona = function(nombre){
// 	var salida = "Hola, " + nombre;

// 	return salida;
// }


// //Con arrow
// let saludarPersona2 = nombre => {
// 	let salida = `Hola, ${nombre}`;
// 	return salida;
// }

// console.log (saludarPersona("Fernando"));
// console.log (saludarPersona2("Melissa"));


// //Regresar un objeto literal de una funcion
// var obtenerLibro = function(id){
// 	return {
// 		id: id,
// 		nombre: "Harry Potter"
// 	}
// }


// //Usando arrow
// let obtenerLibro2 = id => ({id:id,nombre:"Harry Potter"});



//////////////////////////////////////////////////////////////////////
//Ventaja de Arrow
//Creando funciones anonimas

// //ES5
// var saludo1 = function(nombre){
// 	return "Hola " + nombre;
// } ("Fernando");

// console.log(saludo1);


// //ES6
// let saludo2 = ( nombre => `Hola ${nombre}` )("Melissa");

// console.log(saludo2);

//////////////////////////////////////////////////////////////////////
//No hay cambio en el objeto "this"

//ES5
// var manejador = {
// 	id: "123",
// 	init: function(){
// 		document.addEventListener("click",(function(event){
// 			this.clickEnPagina(event.type);
// 		}).bind(this),false);
// 	}, //fin del init
// 	clickEnPagina: function(type){
// 		console.log("Manejando " + type + " para el id:" + this.id);
// 	}
// };

// manejador.init();


//ES6
// var manejador = {
// 	id: "123",
// 	init: function(){
// 		document.addEventListener("click",
// 								event => this.clickEnPagina(event.type));
// 	}, //fin del init
// 	clickEnPagina: function(type){
// 		console.log("Manejando " + type + " para el id:" + this.id);
// 	}
// };

// manejador.init();

//////////////////////////////////////////////////////////////////////
//Arrow con arreglos


// var arreglo = [5,10,11,2,1,9,20];

// var ordenado = arreglo.sort(function(a,b){
// 	return a-b;
// });

// console.log(ordenado);


// //ES6
// let ordenadoES6 = arreglo.sort((a,b)=>a-b );

// console.log(ordenadoES6);


//////////////////////////////////////////////////////////////////////
//Identificando funciones flecha

// let restar=(a,b) => a-b;

// console.log(typeof restar);
// console.log(restar instanceof Function); 

// // let restar2 =  restar(1,2); //error porque no se usa new en arrow

// //Arrow no tienen objeto argumentos
// function ejemplo(x,y){
// 	( (a,b) => {
// 		console.log(arguments[1]) 
// 	} ) ();	
// }

// ejemplo(10,20);



//////////////////////////////////////////////////////////////////////
//Objetos Literales

//ES5
// var obj = {
// 	name: "Hugo"
// }

//ES6
// function createPerson(name,lastName,age){

// 	return{
// 		name: name,
// 		lastName: lastName,
// 		age: age
// 	}
// }

//o puede ser asi
// function createPerson(name,lastName,age){

// 	return{
// 		name,
// 		lastName,
// 		age
// 	}
// }


// let hugo = createPerson("Hugo","Olvera",29);
// console.log(hugo);

//////////////////////////////////////////////////////////////////////
//Concise Methods (Metodos concisos)

//ES6
// let person = {
// 	name:"Hugo",
// 	getName: function(){
// 		console.log(this.name);
// 	}
// }

// person.getName();

//Se puede obviar ": function"
// let person = {
// 	name: "Hugo",
// 	getName(){
// 		console.log(this.name);
// 	}
// }

// person.getName();

//////////////////////////////////////////////////////////////////////
//Processed property names

//Ejemplo ES5
// let person = {};

// let lastName = "lastName";

// person["first name"] = "Hugo";
// person[lastName] = "Olvera";

// console.log(person["first name"]);
// console.log(person[lastName]);


//ES6
// let lastName = "last name";
// let person = {
// 	"first name": "Hugo",
// 	[lastName] : "Olvera"
// };

// console.log(person["first name"]);
// console.log(person[lastName]);

//////////////////////////////////////////////////////////////////////
//Object.is

//Normalmente usamos comparador relajado == y comparador estricto ===
//para determinar si dos objetos son lo mismo, pero a veces no alcanza

// console.log( +0 == -0);
// console.log( +0 === -0);
// console.log( Object.is(+0,-0));

// console.log("====");

// console.log( NaN == NaN);
// console.log( NaN === NaN);
// console.log( Object.is(NaN,NaN));

// console.log("====");

// console.log( 5 == 5);
// console.log( 5 == "5");

// console.log( 5 === 5);
// console.log( 5 === "5");

// console.log("====");

// console.log(Object.is(5,5));
// console.log(Object.is(5,"5"));


//////////////////////////////////////////////////////////////////////
//Object.assign
//Pasar propiedades a otro objeto sin herencia

//ES5
// function mezclar(objReceptor, objDonador){
// 	Object.keys(objDonador).forEach(function(key){
// 		objReceptor[key] = objDonador[key];
// 	});

// 	return objReceptor;
// }

// let objReceptor = {};
// let objDonador = {
// 	nombre:"Mi_archivo.js"
// }

// console.log(mezclar(objReceptor,objDonador));

//ES6
// let objReceptor = {};
// let objDonador = {
// 	nombre:"Mi_archivo.js"
// }
// console.log (Object.assign(objReceptor,objDonador));

//////////////////////////////////////////////////////////////////////
//Orden de propiedades de los objetos.

// let obj = {
// 	c:1,
// 	0:1,
// 	x:1,
// 	15:1,
// 	r:1,
// 	3:1,
// 	b:1
// };

// obj.d=1;
// obj["2"]=1;
// obj["a"]=1;


// console.log(Object.getOwnPropertyNames(obj).join(","));
//////////////////////////////////////////////////////////////////////
//Cambiar prototipo de un objeto

// let gato = {
// 	sonido(){
// 		console.log("Miau!");
// 	},
// 	chillido(){
// 		console.log("MIAU!");
// 	}
// }

// let perro = {
// 	sonido(){
// 		console.log("Guau!");
// 	}
// }


// // let angora = Object.create (gato);
// let angora = Object.create(gato);
// console.log(Object.getPrototypeOf(angora) === gato);


// //segunda parte
// angora.sonido();
// angora.chillido();


// //Cambiando prototipo con ES6
// Object.setPrototypeOf(angora,perro);

// console.log(Object.getPrototypeOf(angora) === gato); //false


// angora.sonido(); //guau
// angora.chillido(); //no existe,error
//////////////////////////////////////////////////////////////////////
//keyword super

//ES5
// let persona = {
// 	saludar(){
// 		return "Hola";
// 	}
// }

// let amigo ={
// 	saludar(){
// 		return Object.getPrototypeOf(this).saludar.call(this) + ", saludos.";
// 	}
// }

// Object.setPrototypeOf(amigo, persona);
// console.log(amigo.saludar());


//ES6
// let persona = {
// 	saludar(){
// 		return "Hola";
// 	}
// }

// let amigo ={
// 	saludar(){
// 		return super.saludar() + ", saludos!!!";
// 	}
// }

// Object.setPrototypeOf(amigo, persona);
// console.log(amigo.saludar());


//////////////////////////////////////////////////////////////////////
//Destructuracion de objetos (object destructuring)

// let ajustes ={
// 	nombre: "Victor Hugo Olvera Cruz",
// 	email: "hugo@hotmail.com",
// 	facebook:"hugo.10",
// 	google: "hugo.123",
// 	premium: true
// };

// // let { nombre,email,facebook,google,premium } = ajustes;
// //poniendo otra variable
// // let { nombre,email,facebook,google,dePago } = ajustes;
// //cambiando el nombre a la variable
// // let { nombre,email,facebook,google,premium:dePago } = ajustes;
// //inicializando otra variable
// let { nombre,email,facebook,google,twitter="hugo_tw" } = ajustes;


// // console.log(google,premium);
// console.log(twitter);

// //////////////////////////////////////////////////////////////////////
// //Destructurating inheried objects

// let autoGuardado = {
// 	archivo: "app.js",
// 	cursor:{
// 		linea:7,
// 		columna:16
// 	},
// 	ultimoArchivo:{
// 		archivo:"index.html",
// 		cursor:{
// 			linea:8,
// 			columna:16
// 		}
// 	},
// 	otroNodo:{
// 		subNodo:{
// 			cursor:{
// 				linea:11,
// 				columna:11
// 			}
// 		}
// 	}
// };

// let {cursor} = autoGuardado;
// console.log(cursor);

// //quiero el cursor del ultomoArchivo
// let {ultimoArchivo:{cursor:ultimoArchivo}} = autoGuardado;
// console.log(ultimoArchivo);

// //Ahora el de otroNodo

// let { otroNodo:{subNodo:{cursor:otroNodo}} } = autoGuardado;
// console.log(otroNodo);

// //otra forma
// let otroNodo2 = autoGuardado.otroNodo.subNodo.cursor;

// console.log(otroNodo2);

//////////////////////////////////////////////////////////////////////
//Destructurating arrays

// let frutas =["banano","pera","uva"];

// let[fruta1,fruta2] = frutas;

// console.log(fruta1);
// console.log(fruta2);

// let[,,fruta3] = frutas;
// console.log(fruta3);


// let otraFruta="manzana";
// //toma el primer valor del arreglo
// [otraFruta] = frutas;

// console.log(otraFruta);

//////////////////////////////////////////////////////////////////////
//Valores por defecto en arreglos  y objetos

//arreglos
// let frutas = ["fresa","pera"];

// let [fruta1,fruta2 = "uva"] = frutas; //uva es default

// console.log(fruta1);
// console.log(fruta2);

// //Ahora con destructuracion

// let opciones = {
// 	nombre:"Hugo",
// 	apellido:"Cruz"
// };

// let {nombre, apellido="Olvera"} = opciones; //Olvera es default, si no existiera en opciones

// console.log(nombre, apellido);




//////////////////////////////////////////////////////////////////////
//Destructurating Parameters 
// function crearJugador(nickname, options){
// 	options = options || {};

// 	let hp = options.hp,
// 		sp = options.sp,
// 		clase = options.clase;

// 	console.log(nickname,hp,sp,clase);

// 	//Code to create player

// }

// crearJugador("Strider",{
// 		hp: 100,
// 		sp: 50,
// 		clase: "Magician"	
// 	});



//Si otro desarrollador ve el codigo, no sabe la estructura de opciones hasta que lo analice
// function crearJugador(nickname, {hp,sp,clase}){

// 	console.log(nickname,hp,sp,clase);

// 	//Code to create player

// }

// crearJugador("Strider",{
// 		hp: 100,
// 		sp: 50,
// 		clase: "Magician"	
// 	});

// //Que pasa si no mando en la funcion, los otros argumentos
// crearJugador("Strider"); //error

//Podriamos ponerlo como vacio
// function crearJugador(nickname, {hp,sp,clase} = {}){ //Daria "undefined" en los 3 parametros que faltan

//Dejando un default en las variables
// function crearJugador(nickname, 
// 	{hp,sp,clase} = {hp:100, sp:50, clase:"Mago"}
// ){
// 	console.log(nickname,hp,sp,clase);
// }

// crearJugador("Strider",{
// 		hp: 300,
// 		sp: 150,
// 		clase: "God"	
// 	});


//////////////////////////////////////////////////////////////////////
//Simbolos

// let firstName = Symbol();
// let person = {};

// //Agregando propiedad
// person[firstName] ="Hugo";

// console.log(person.firstName); // Da undefined,
// porque se debe escribir como una propiedad computada  []

// let firstName = Symbol('Este es un alias');
// let secondName = Symbol();
// let person = {
// 	[secondName] : 'Hugol'
// };

// //Agregando propiedad
// person[firstName] ="Hugo";

// console.log(person[firstName]); 
// console.log(person[secondName]); 

// console.log(firstName); 
// console.log(secondName);


// //Otro ejemplo
// let simbolo1 = Symbol('alias');
// let simbolo2 = Symbol('alias');

// console.log (simbolo1 == simbolo2);
// console.log (simbolo1 === simbolo2);
// console.log (Object.is(simbolo1,simbolo2));

// //Para saber si es un simbolo
// console.log(typeof firstName);

// //No se puede convertir un Symbol a un valor String
// // console.log( "My symbol " + firstName); //Da error

// //Ni usando templates
// // console.log(`${ firstName}`);

// //Ni se puede hacer verificacion si la propiedad dentro de un objeto

// console.log ("firstName" in person); // Da falase a pesar de que si lo tiene
// console.log(person[firstName]);

//////////////////////////////////////////////////////////////////////
//Compartir symbols
//Symbol.for() y Symbol.keyFor()

// let userID= Symbol.for("userID");
// let objeto = {};

// objeto[userID] = "12345";

// console.log(objeto[userID]); //12345
// console.log(userID); //Symbol(userID)

// //Si quisieramos acceder desde otro archivo
// let userID2 = Symbol.for("userID");

// console.log(userID == userID2); //true
// console.log(userID === userID2); //true
// console.log(Object.is(userID,userID2)); //true

// console.log(objeto[userID2]); //12345
// console.log(userID2); //Symbol(userID)

//////////////////////////////////////////////////////////////////////
//Coercion symbols

// let id = Symbol.for("id");
// let obj = {[id]:100};
// let numero = 10;
// let texto = "10";
// let bool = true;
// let nNaN = NaN;

// console.log(numero + texto); //1010
// console.log(numero + Number(texto)); //20
// console.log(bool + bool); //2
// // console.log(texto + id); // error
// console.log(String(id)); //Symbol(id)
// console.log( numero + obj[id]);

//////////////////////////////////////////////////////////////////////
//Getting Symbol properties

// let obj = {
// 	["code"] : "abc123",
// 	name : "Victor",
// 	lastName : "Olvera",
// 	age: 29
// };

// for (key in obj){
// 	console.log(key,obj[key]);
// }


//Que pasa al colocarle un Symbol\
// let id = Symbol.for("id");
// let status = Symbol.for("status");

// let obj = {
// 	[id] : "1",
// 	[status] : "active",
// 	["code"] : "abc123",
// 	name : "Victor",
// 	lastName : "Olvera",
// 	age: 29
// };

// for (key in obj){
// 	console.log(key,obj[key]); // no sale id ni status
// }

// //obtener simbolos
// let symbols = Object.getOwnPropertySymbols(obj);
// console.log(symbols);

// //haciendolo con for
// for (i in symbols) {
// 	console.log(symbols[i], Symbol.keyFor(symbols[i]));
// }

//////////////////////////////////////////////////////////////////////
//Set (StrongSet)

//JavaScript solo tenia arrays, ahora ya tiene sets (no duplicados)
// let items = new Set();

// items.add(10);
// items.add(5);
// items.add(2);
// items.add(6);
// items.add(2); // ya no entra
// items.add("2"); // Este si, porque es un string

// console.log(items);
// console.log(items.size);


// //Set definido
// let items2 = new Set([1,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5]);
// console.log(items2);
// console.log(items2.size);

// //buscar en un Set sin necesidad de un for
// console.log(items.has(5)); //true
// console.log(items2.has(9)); //false

//////////////////////////////////////////////////////////////////////
//Borrar elemento

// let items = new Set([1,2,3,4,5]);
// console.log(items);
// console.log(items.size);

// items.delete(3);

// console.log(items);
// console.log(items.size);

// items.clear();

// console.log(items);
// console.log(items.size);

//////////////////////////////////////////////////////////////////////
//ForEach con Set

// let people = new Set(["Victor", "Hugo", "Portero", "Buffon"]);

// people.forEach(function (value,key,originalSet){
// 	console.log(value,key,originalSet);
// })

//////////////////////////////////////////////////////////////////////
//Convert Set to Array

// let arrPeople = ["Victor", "Hugo", "Portero", "Buffon"];
// let setPeople = new Set (arrPeople); 

// console.log(setPeople);
// //Convert to Set
// let newArrayPeople = [...setPeople];

// //Convert to Array
// console.log(newArrayPeople);

//////////////////////////////////////////////////////////////////////
//WeakSets
//Solo sirven par aguardar referencia hacia los objetos
//no hay for ni ciclos
//no forEach
//no hay metodo size
//add, has y remove dan error si enciamos algo que no sea un objeto.


//////////////////////////////////////////////////////////////////////
//Maps
// let map = new Map();

// map.set("nombre","Hugo");
// map.set("edad",29);
// map.set("apellido");

// console.log(map);
// console.log(map.size);

// //Obtener el value basado en el key
// console.log(map.get("nombre"));
// console.log(map.get("edad"));

// //Revisar si un key existe
// console.log(map.has("nombre"));
// console.log(map.has("apellido")); //true, pero pone undefined al imprimir la estructura

// //agregando un objeto
// map.set({},{});
// console.log(map);

// //Eliminando un registro por key
// map.delete("nombre");
// console.log(map);

// //Eliminar todo el map
// map.clear();
// console.log(map);

// //Inicializando map
// //Se debe hacer con arreglos de arreglos
// let mapDefault = new Map([["name","Victor"],["age",29], [null,undefined],[null,123],[undefined,456]]);
// let mapDefault2 = new Map([[null,undefined]]);

// console.log(mapDefault);
// console.log(mapDefault.get(null));
// console.log(mapDefault.get(undefined));
// console.log(mapDefault2.get(null));


// //ForEach
// let mapExample3 = new Map();

// mapExample3.set("nombre","Hugo");
// mapExample3.set("edad",29);

// // console.log(mapExample3);

// mapExample3.forEach(function(value,key,originalMap){
// 	console.log(key,value,originalMap);
// 	console.log(`Key is ${key}, value is ${value}`);
// });

// //con arrow
// mapExample3.forEach( (value,key,originalMap) => {
// 	console.log(`Este es el map con arrow, el key  ${key} y el value ${value} `  );
// })

//////////////////////////////////////////////////////////////////////
//Ciclo FOR-OF

//Trabaja bastante bien con las Collections
// let numbers = [10,20,30,50,200];

//imprimir en consola cada valor, for normal
// for (let i = 0; i < numbers.length; i++) {
// 	console.log(numbers[i]);
// }

//Otro ciclo for
// for( let i in numbers){
// 	console.log(numbers[i]);	
// }

//Ciclo for-of
// for(let i of numbers){
// 	console.log(i);
// }

// //Otro ejemplo con objetos
// let people = [
// 	{nombre:"Victor",edad:29},	
// 	{nombre:"Hugo",edad:11},	
// 	{nombre:"Portero",edad:33},	
// 	{nombre:"Buffon",edad:24}	
// ];

// for(person of people){
// 	console.log(person.nombre, person.edad);
// }

// //Ejemplo con Sets
// let animalsSet = new Set();

// animalsSet.add({type:"Cat" ,sound:"Miau"});
// animalsSet.add({type:"Dog" ,sound:"Guau"});
// animalsSet.add({type:"Cow" ,sound:"Muuuu"});

// for(singleAnimalSet of animalsSet){
// 	console.log(singleAnimalSet.type, singleAnimalSet.sound);
// }

// //Ejemplo con Maps
// let animalsMap = new Map();

// animalsMap.set("Cat" ,"Miau");
// animalsMap.set("Dog" ,"Guau");
// animalsMap.set("Cow" ,"Muuuu");

// for(singleAnimalMap of animalsMap){
// 	console.log(singleAnimalMap);
// }
//////////////////////////////////////////////////////////////////////
//Clases

// //en ES5 no habia como tal, pero se hacian aprox asi
// function Person(name){
// 	this.name = name;
// 	this.screamName = function(){
// 		console.log(this.name.toUpperCase());
// 	}

// }

// //Agregando una funcion
// Person.prototype.sayName = function(){
// 	console.log(this.name);
// }

// let victor = new Person("Hugo");

// victor.sayName();
// victor.screamName();


//ES6
// class Example{

// 	//constructor
// 	constructor(name){
// 		this.name = name;
// 	}

// 	//methods
// 	decirNombre(){
// 		console.log(this.name);
// 	}
// }

// let objExample = new Example("Hugo");
// // let objExample = Example("Hugo"); //validacion de creacion de instancia

// objExample.decirNombre();
// console.log(objExample instanceof Example);
// console.log(objExample instanceof Object);

//////////////////////////////////////////////////////////////////////
//Class as expressions

// let Person = class{
// 	constructor(){
// 		this.name="name default";
// 		this.age=0;
// 		this.address="Address";
// 	}

// 	sayName(){
// 		console.log(`Este es el nombre ${this.name}`);
// 	}
// }

// let hugo = new Person();
// console.log(typeof hugo);
// console.log(hugo instanceof Person);

// hugo.sayName();



//////////////////////////////////////////////////////////////////////
//Class as parameter

// function classCreator(classDefinition){
// 	return new classDefinition();
// }

// let obj = classCreator( class{

// 	constructor(){
// 		this.name = "Default";
// 		this.age = 31;
// 	}

// 	greetings(){
// 		console.log("Hi");
// 	}

// });

// obj.greetings();


//Otro ejemplo
// class Square {

// 	constructor(a){
// 		this.a = a ;
// 	}

// 	getArea(){
// 		return this.a*this.a;
// 	}
// };


// function printSquare (square){
// 	if(square instanceof Square){
// 		console.log(square.getArea());	
// 	}else{
// 		console.error("The parameter is not a Square")
// 	}

	
// }

// // let table = new Squad(10);
// let table = 123; //Probando que no sea un Square

// printSquare(table);

//////////////////////////////////////////////////////////////////////
//Static and computed methods 

// let computedMethod = "screamName";

// class ExampleStatic {
// 	constructor(name){
// 		this.name = name;
// 	}

// 	getName(){
// 		console.log(this.name);
// 	}

// 	//Static method
// 	static create(name){
// 		return new ExampleStatic(name);
// 	}

// 	//computed methods
// 	[computedMethod](){
// 		console.log(this.name.toUpperCase());
// 	}
// }

// let exa = ExampleStatic.create("Victor Hugo");
// console.log(exa);


//////////////////////////////////////////////////////////////////////
//Herencia

// class Rectangle{
// 	constructor(height, width){
// 		this.height = height;
// 		this.width = width;
// 	}

// 	getArea(){
// 		return this.height * this.width;
// 	}
// }

// let obj = new Rectangle(5,8);

// console.log(obj.getArea());

// class Square extends Rectangle{
// 	constructor(height){
// 		super(height,height); //usando el constructor de Rectangle
// 		// this.height = height; //usando propio contructor
// 	}
// }


// let square = new Square(5);

// console.log(square.getArea()); // Usando metodo del padre

// console.log( square instanceof Square);
// console.log( square instanceof Rectangle);


//////////////////////////////////////////////////////////////////////
//Overriding parents methods

// class Rectangle{
// 	constructor(height, width){
// 		this.height = height;
// 		this.width = width;
// 	}

// 	getArea(){
// 		return "getArea from Rectangle: " + this.height*this.width;
// 	}
// }

// let obj = new Rectangle(5,8);

// console.log(obj.getArea());

// class Square extends Rectangle{
// 	constructor(height){
// 		super(height,height); //usando el constructor de Rectangle
// 		// this.height = height; //usando propio contructor
// 	}

// 	getArea(){
// 		// return "getArea from Square: " + this.height*this.height; //Overriding parent method
// 		return super.getArea(); //Using parent method 
// 	}
// }


// let square = new Square(5);

// console.log(square.getArea()); // Usando metodo del padre

// console.log( square instanceof Square);
// console.log( square instanceof Rectangle);

//////////////////////////////////////////////////////////////////////
//Promises

//Example of AsyncTask
//Even the sequencial code is after the async, is executed first
// function asyncTask(){
// 	setTimeout(function(){
// 		console.log("Async process ends");
// 		resolve();	
// 	},1300)
// }

// asyncTask();
// console.log("Sequencial code");

// function resolve(){
// 	console.log("Well done");
// }
// function rejected(){
// 	console.log("Errors");
// }


//ES6
function asyncTask(){

	let promise = new Promise( (resolve,reject) => {
		setTimeout(function(){
			console.log("Async process ends");
			resolve();	
		},1300)
	});

	return promise;
	
}

asyncTask().then(
	function(){ 
		console.log("Well done!");	
	}, 
	function(){ 
		console.error("Errors");	
	});
console.log("Sequencial code");

