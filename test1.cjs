'inicio de archivo
DimV i;
DimV w;
w : 5;
i: 5;

imprimir("ejecutando " + "un si");
Si (i==w){
	imprimir("i es igual a w");
	imprimir("da error antes?");
}sino{
	imprimir("i es diferente");
}

DimV a : 0;

imprimir("ejecutando un Mientras");

Mientras(a<w){
	imprimir(a);
	a++;
}

DimV s;

imprimir("un ciclo para");

Para(s:10; s>0; --){
	imprimir(s);
}

imprimir("funciona el seleccionar?");
w : 5;
selecciona (w){
	caso  5:
		imprimir("5 aqui?");
		
	caso 6:
		imprimir("6 se detiene aqui");
		DetenEr;
	caso 7:
		imprimir("7");
		Detener;
	defecto:
		imprimir("defecto");
	caso 10:
		imprimir("caso 10 depues del defecto");
		Detener;
}

imprimir("un ciclo con detener");

Para(s:10; s>0; --){
	imprimir(s);
	si(s==3){
		Imprimir("Ya no deben imprimirse desde el 2");
		detener;
	}
}

funcion primera(){
	DimV c: "Hola funcion";
	imprimir(c);
}

DimV v2 : "sin cambio";

primera();

funcion parametrizada( x, y,z){
	dimV r;
	r : x+y*z;
	imprimir("el resultado es: " + r);
}

parametrizada(5,2-1,2);

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

imprimir(v2);

mensaje("Hola mundo");
'fin de archivo

