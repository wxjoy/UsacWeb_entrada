'segundo test... probando llamadas entre funciones....

DimV v2;


funcion llamada1(){
	retornar 15+2;
}

funcion llamando(){
	DimV v2;
	v2 : llamada1();
	Imprimir("deberia continuar " + v2);
	Imprimir("se propago?");
}

llamando();
