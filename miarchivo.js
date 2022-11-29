//Estudiante: Luis Carlos Torres
// Curso: Javascript/Comisión: 44545
// Proyecto: Visualizador de Tabla de multiplicar/Determinador de Nota Mayor y Menor.

var opcion = parseInt(prompt("Seleccione \n"+
                             "1- Tabla de multiplicar del 8\n"+
                             "2- Nota mayor y menor"));

switch(opcion){

    case 1:

        for (var i = 1; i <= 12; i++) {
            var resultado = 8 * i;
            document.write("8 * "+i+" = "+resultado);
            document.write("<br>");
        }

    break;

    case 2:

        var mayor, menor;

        for(var i=1; i<=4; i++){
        
            var nota = parseFloat(prompt("Ingrese una nota"));
        
            if(i==1){
                mayor=nota;
                menor=nota;
            }else{
        
                if(mayor<nota){
                    mayor=nota;
                }
        
                if(menor>nota){
                    menor=nota;
                }
        
            }
        
        }
        
        document.write("Nota mayor "+mayor );
        document.write("<br>");
        document.write("Nota menor "+menor );
            
    break;

    default:
        alert("Opcion invalida");
    break;    

}