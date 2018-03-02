' este ejemplo debe modificar la etiqueta cuerpo para ponerle color de fondo rosado
' También muestra un cuadro de dialogo con el contenido

Documento.setObservador("Listo", cambiar_color());

funcion cambiar_color(){
	'/esto es un comentario /'
	DimV Cuerpo : Documento.Obtener("Cuerpo");
	Cuerpo.setElemento("FondoElemento","Pink");
	Mensaje("Se cambio el color a Rosado ");
	DimV date : '12/12/1989 25:02:00';
}
