dimV vci: 142;

funcion sacarIva( x ){
	DimV base;
	DimV iva;
	base : x/1.12;
	iva : base * 0.12;
	Imprimir("el impuesto es:      " + iva);
	Imprimir("precio sin impuesto: " + base);
}

sacarIva(vci);

dimv Horax: 15;
he();
funcion he( ) {
	dimv vh:horax;
	dimv fact:1.5;
	dimv hex;
	
	hex: vh*fact;
	imprimir("valor hora extra es:    " + hex);
	imprimir("valor hora:    " + horax);    }
	

Dimv num: 15;
Imprimir("comenzando funcion impar");

funcion impar(numero){
	Si(numero<0){
		imprimir("numero negativo");
		retornar 0;
	}
	
	Si(numero > 1){
		impar(numero -2);
	}Sino{
		Si(numero == 0){
			Imprimir("es par");
		}sino{
			Imprimir("es impar");
		}
	}
}

impar(num);

Imprimir("fin");

DimV dec : 15.12;

funcion tieneDec(numero){
	DimV var;
	DimV v;
	para(var:0;var<numero; ++){
		
	}
	Imprimir(var);
	Si(numero == var){
		Imprimir(numero + " Es entero");
	}sino{
		v: numero - (numero -(var-1));
		Imprimir("parte entera: " + v);
		Imprimir("valor original: " + numero);
	}
	
}

tieneDec(dec);
