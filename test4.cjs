dimV v : {10,15,20};
dimV t;

t : v.Conteo;
mensaje("que valor tiene t?" + t);

dimV i ;
dimV r:0;

para(i:0; i<t; ++){
	imprimir(v{i});
	r: r + v{i};
}

mensaje("La suma es: " + r);

dimv v2{5};

v2 : {1,2,3,4,5};

Dimv str : v2.aTexto();

mensaje(str);

dimv vb : {6, 5, 3, 1, 8, 7, 2, 4};

funcion ordenamiento(){
	dimV i;
	dimV j;
	dimv t;
	dimv aux;
	
	t: vb.Conteo;
	
	para( i:1;  i<t ; ++){
		para (j:0; j < t - i; ++){
			Si( vb{j} > vb{j+1}){
				aux : vb{j};
				vb{j} : vb{j+1};
				vb{j+1}: aux;
			}
		}
	}
	
}

ordenamiento();

str: vb.aTexto();

mensaje(str);