function contarcaracteres(){
            
 
    var total=260;

setTimeout(function(){
var valor=document.getElementById('contador');
var respuesta=document.getElementById('res');
var cantidad=valor.value.length;
document.getElementById('res').innerHTML = cantidad + ' caractere/s, te quedan por usar ' + (total - cantidad) ;
if(cantidad>total){
 respuesta.style.color = "red";
}
else {
 respuesta.style.color = "black";
}
},10);

}