console.log('JS OK')

/*
1)  creo una lista della spesa
2)  con un ciclo while la determino
3)  stampo in pagina 
*/

const targetelement = document.getElementById('target');
const list = ['Pane', 'uova', 'sale'];


let i=0;
text= ""
while (list[i]){
    text += list[i];
    i++;

}

targetelement.append(`<li>${list[i]}</li>`);
