' este ejemplo debe modificar la etiqueta cuerpo para ponerle color de fondo rosado
' También muestra un cuadro de dialogo con el contenido
#

@	?

Dimv vik : 1 + ;

Documento.setObservador("Listo", cambiar_color());
Documento.setObservador("lis"+"to", funcion(){
	Mensaje("Hola " + "Mundo" + " funcion anonima!");
});
funcion cambiar_color(){
	'/esto es un comentario /'
	DimV Cuerpo : Documento.Obtener("Cuerpo");
	Cuerpo.setElemento("FondoElemento","Pink");
	Mensaje("Se cambio el color a Rosado ");
	DimV date : '12/12/1989 25:02:00';
}
DimV v:0;
funcion evento(){
	dimv a : 0;
	a: v++ + 1;
	Mensaje("evento realizado " + v);
}

DimV ch : Documento.Obtener("ev");

ch.setObservador("clic", evento());

dimV cl : Documento.Obtener("r_nota_2");

cl.setObservador("clic", funcion(){
	imprimir("funciono?");
	Mensaje("me diste clic!");
});
