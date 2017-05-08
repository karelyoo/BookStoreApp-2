(function(){
	var app = angular.module('store', []);

var libros=[
		{
			id: '1',
			titulo: 'La Historia del Loco',
 			autor: 'John Katzenbach',
 			editorial: 'Ediciones B',
 			descripcion: "Su familia lo recluyo en el psiquiatrico tras una conducta imprevisible. Pero un reencuentro en los terrenos de la clausurada institucion remueve algo profundo en su mente agitada: unos recuerdos sombrios sobre los truculentos hechos que condujeron al cierre del W. S. Hospital, y el asesinato sin resolver de una joven enfermera, cuyo cadaver mutilado fue encontrado una noche despues del cierre de las luces. La policia sospecho de un paciente, pero solo ahora, con la reaparicion del asesino, se conocera la respuesta.",
 			imagen: 'public/img/uno.png'

		},
		{
			id: '2',
			titulo: 'Tu Nombre Despues de la Lluvia',
 			autor: 'Victoria Alvarez',
 			editorial: 'Ediciones B',
 			descripcion: "Corren los primeros dias de enero de 1903 y el profesor Quills, un hombre sabio y triste, vuelve a su casa de Oxford despues de asistir a unas conferencias en Londres; Oliver Saunders, joven y timido, trabaja en su pequeño cuarto de Balliol College, rodeado de diccionarios y novelas goticas; Lionel Lennox, amante de la buena vida y de las faldas ligeras, esta en Egipto, a punto de profanar la tumba de una princesa para llevarse una joya de inestimable valor. Poco tienen en comun los tres amigos, excepto el interes por las nuevas ciencias que exploran el mundo del mas alla, y muy pronto sus ganas de saber los llevaran a Irlanda, una tierra plagada de leyendas, donde las piedras tienen una historia que contar y el sonido de la lluvia se confunde con el llanto de las mujeres.",
 			imagen: 'public/img/dos.png'

		},
		{
			id: '3',
			titulo: 'El Ladron de las Sombras',
 			autor: 'Alexey Pehov',
 			editorial: 'Booket',
 			descripcion: "El Sin Nombre esta reuniendo a un ejercito, aunando fuerzas de criaturas de todos los rincones de las Tierras Desoladas, por primera vez unidos. Para hallar un modo de detenerlos, Harold, el legendario ladron de Siala, contara con la ayuda de la princesa elfa, su escolta elfica, y una decena de Corazones Salvajes. Su mision, encontrar un artefacto magico que devolvera la paz al reino de Siala.",
 			imagen: 'public/img/tres.jpg'

		},
		{
			id: '4',
			titulo: 'Caballo Blanco',
 			autor: 'ADAMS, ALEX',
 			editorial: 'UMBRIEL',
 			descripcion: "Un dia, Zoe llevaba una vida demasiado comun, como trabajadora en una compañia farmaceutica. Al dia siguiente, el presidente de los Estados Unidos anuncia que los seres humanos estan por extinguirse. Cuando Zoe se da cuenta de que todas las personas a las que amaba han desaparecido, empieza a correr. Asustada y sola en un mundo que se derrumba a su alrededor, Zoe se embarca en un viaje desesperado de supervivencia y redencion por un planeta que parece abocado a una inevitable destruccion. En su camino debe enfrentarse con el hambre, la desesperación, la atroz competencia con otros sobrevivientes y la voracidad de un virus irrefrenable, llamado Caballo blanco. Pero tambien vislumbra algo que parecia tan extinto como el universo: la esperanza.El primer titulo de una impresionante trilogia apocaliptica, Caballo blanco nos ofrece una descarnada vision de un mundo roto, pero tambien la posibilidad de encontrar un brillo de vida en los lugares mas inesperados.",
 			imagen: 'public/img/cuatro.png'

		},
		{
			id: '5',
			titulo: 'La Vida y la Danza',
 			autor: 'Victor Ullate',
 			editorial: 'LA ESFERA DE LOS LIBROS',
 			descripcion: "Victor Ullate, una leyenda de la danza, bailarin, coreografo y maestro, rememora su vida en el transcurso de una intensa jornada. Mientras da clase a sus alumnos, ensaya con su compañia, asiste a la representacion de su obra Samsara y recibe el aplauso del publico, su memoria viaja a traves de su infancia, sus primeros pasos profesionales en la compañia de Antonio Ruiz Soler, sus triunfos con el Ballet del Siglo xx de Maurice Bejart, sus sinsabores como primer director del Ballet Nacional Clasico y la aventura de crear y mantener en auge durante veinticinco años a su propia compañia: el Ballet Victor Ullate Comunidad de Madrid. De este viaje en el tiempo surge un retrato poliedrico de Ullate el gran bailarin y maestro, pero tambien de Victor el hombre, siempre en busca de si mismo, y de la danza, el arte que expresa todo lo animal y lo espiritual del ser humano porque olvida lo racional, que es la palabra.",
 			imagen: 'public/img/cinco.png'

		}
	];

	app.controller('StoreController', function(){
		this.lib =libros;
	});

})();