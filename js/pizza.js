// crear los selectores
const btnDefinirT = document.querySelector('#TamanoSeleccionado');//este es el boton para seleccionar el tamano de la pizza.
const btnIngreSelect = document.querySelector('#IngredientesSeleccionados');//este es el boton para enviar los ingredientes seleccionados.
const btnBebidaSelect = document.querySelector('#BebidaSeleccionada');//este boton es para seleccionar la bebida.
const btnPagar = document.querySelector('#PagarOrden');//estos son los ultimos botones de la ultima carta.
const btnEliminarP = document.querySelector('#VaciarOrden'); // este es el boton para limpiar el html



//Declaracion de variables
// El diamentro es dos veces el radio, este es el diamentro de los diferentes
// tamaño Tp= 10 , Tm= 14 , Tg=16
let Tp = 5, Tm=7, Tg= 8;
let Pi= 3.14;

//declaracion de los datos del ejercicio
let harina = 0.03; let manoObraP = ''; let manoObraM = ''; let manoObraG = ''; 
const costoIngs = 2; const costoFijo= 1.5; 
let costoFinalP = ''; let costoFinalM = ''; let costoFinalG = '';

//valor de las bebidas
let limonada = 3;let te = 2; let cola = 5; let pepsi = 5;



//Formula para calcular el area A=pi.r^2

let AreatTp = Pi*(Tp*Tp);
let AreatTm = Pi*(Tm*Tm);
let AreatTg = Pi*(Tg*Tg);

//Declariacion del area de la pizza * la harina utilizada

const harinaTp = AreatTp*harina;
const harinaTm = AreatTm*harina;
const harinaTg = AreatTg*harina;

//Declaracion del valor de los insgredientes

const ExtrasPizzaP = costoIngs*1.5;
const ExtrasPizzaM = ExtrasPizzaP*2;
const ExtrasPizzaG = ExtrasPizzaM*2;

//mano de obra preparacion
manoObraP= parseInt(harinaTp+ExtrasPizzaP);
manoObraM = parseInt(harinaTm+ExtrasPizzaM);
manoObraG = parseInt(harinaTg+ExtrasPizzaG);

//Costo de preparacion por tamaño
const costoPreparacionP = manoObraP;
const costoPreparacionM = manoObraM;
const costoPreparacionG = manoObraG;

//Costos finales

costoFinalP= (costoFijo*costoPreparacionP)*1.5;
costoFinalM= (costoFijo*costoPreparacionM)*1.5;
costoFinalG= (costoFijo*costoPreparacionG)*1.5;

//console.log(costoFinalP,costoFinalM,costoFinalG)

//definir los eventos
cargarEventListener();
function cargarEventListener(){
    btnDefinirT.addEventListener('click',definirTamano);
    btnIngreSelect.addEventListener('click',selectIng);
    btnBebidaSelect.addEventListener('click',SelectBebida);
    btnPagar.addEventListener('click', TotalPagar);
    btnEliminarP.addEventListener('click', limpiarHtml);
}


//funcion para seleccionar tamaño
function definirTamano(e){
    e.preventDefault();
    limpiarHtml();
    var radio = document.getElementsByName('PizzaTamano');
    var objecto1 = '';
    var PrecioTP = costoFinalP;
    var PrecioTM = costoFinalM;
    var PrecioTG = costoFinalG;
    for(i = 0; i < radio.length; i++){
        if(radio[i].checked != ''){
            objecto1 = (radio[i].value);
            //objecto2 para mostrar el precio
             var objecto2 = (radio[i].id)
            PizzaObj.TAMANOp = objecto1;
            if(objecto2 === 'Pequeña'){
                var selecPequeña = PrecioTP;
                objecto2 = selecPequeña;
                ValorTPizza.TamanoValor= objecto2;
                console.log(ValorTPizza.TamanoValor)
            }else if(objecto2 === 'Mediana'){
                var selecMediana = PrecioTM;
                objecto2 = selecMediana;
                ValorTPizza.TamanoValor= objecto2;
                console.log(ValorTPizza.TamanoValor)
            }else if(objecto2 === 'Grande'){
                var selecGrande = PrecioTG;
                objecto2 = selecGrande;
                ValorTPizza.TamanoValor= objecto2;
                console.log(ValorTPizza.TamanoValor)
            }
            goodtweet('Has seleccionado Pizza\n'+ PizzaObj.TAMANOp );
        }
    }
    if(objecto1 === '' || objecto2 === ''){
        mostrarError('Por favor selecciona una opcion');
    }
    mostrarHtml();
}

//funcion para seleccionar Ingredientes
function selectIng(e){
    e.preventDefault();
    limpiarHtml();
    var check = document.querySelectorAll('.Ing');
    var Ingredientes= [];
    ValorTPizza.suma = 0;
    var ValueIng=[]
    check.forEach(e=>{
        if(e.checked == true){
            Ingredientes = [...PizzaObj.INGREDIENTES,e.id];
            let result = Ingredientes.filter((items,index)=>{
                return Ingredientes.indexOf(items) === index;
            })
            PizzaObj.INGREDIENTES = result;
            console.log(result)
            Ingredientes = [...ValorTPizza.IngredientesValor,e.value];
            let result1 = Ingredientes.filter((items,index)=>{
                return Ingredientes.indexOf(items) === index;
            })
            
            //console.log(result)
            
            //console.log(nombre)
           for(var i = 0; i < result1.length; i++){
            ValorTPizza.suma +=+ result1[i];
            console.log(ValorTPizza.suma);
           }
            
            
            //console.log(e.value +"\n"+ PizzaObj.INGREDIENTES)
            goodtweet('Ingredientes seleccionados: \n'+result);
        }
    })
    if(Ingredientes == ''){
        mostrarError('No has seleccionado ninguna opcion')
    }
    mostrarHtml();
}

//funcion para seleccionar Bebidas
function SelectBebida(e){
    e.preventDefault();
    limpiarHtml();
    var drink = document.getElementsByName('Bebidas');
    var bebida = '';
    for(i = 0; i < drink.length; i++){
        if(drink[i].checked){
            bebida = drink[i].value;
            var bebida2 = drink[i].id;
            //console.log(ValorTPizza.BebidaValor);
            PizzaObj.BEBIDA = bebida;
            if(bebida2 === 'Limonada'){
                ValorTPizza.BebidaValor = limonada;
                //console.log(ValorTPizza.BebidaValor);
            }else if(bebida2 === 'Té'){
                ValorTPizza.BebidaValor = te;
                //console.log(ValorTPizza.BebidaValor)
            }else if(bebida2 === 'Coca-Cola'){
                ValorTPizza.BebidaValor = cola;
                //console.log(ValorTPizza.BebidaValor)
            }else if(bebida2 === 'Pepsi'){
                ValorTPizza.BebidaValor = pepsi;
                //console.log(ValorTPizza.BebidaValor)
            }
            
            goodtweet('Has seleccionado de beber \n'+ PizzaObj.BEBIDA);
        }
    }
    if(bebida == ''){
        mostrarError('No has seleccionado una bebida');
    }
    mostrarHtml();
}

//objecto para guardar la informacion
const PizzaObj = {
    TAMANOp: '',
    INGREDIENTES:[],
    BEBIDA:'',
}

//Estructura para guardar costo de la pizza
const ValorTPizza ={
    TamanoValor:'',
    IngredientesValor: [],
    BebidaValor: '',
    suma: '',
}

//console.log(ValorTPizza)

function mostrarHtml(){
    limpiarHtml();
    var TotalGeneral = ValorTPizza.TamanoValor + ValorTPizza.suma + ValorTPizza.BebidaValor;
    //console.log(TotalGeneral);
    const divPizza = document.querySelector('#Pfinal')
    divPizza.innerHTML =`
    <div class="DivF">
        <h4>Seleccionó Tamano: ${PizzaObj.TAMANOp} Precio: ${ValorTPizza.TamanoValor} $</h4>
        <h4 class="intermedio">Agregó estos Ingredientes:${'\n'+PizzaObj.INGREDIENTES} ${'<br>'}Total Precio: ${ValorTPizza.suma} $</h4>
        <h4>Seleccionó de Beber: ${PizzaObj.BEBIDA} Precio: ${ValorTPizza.BebidaValor} $</h4>
    </div>
    <div class="DivT">
        <h2 align="center">Total Monto</h2>
        <h4 class="total"> Monto: ${TotalGeneral} $</h4>
    </div>
    `

    let divSpinner = divPizza ;
    
    //console.log(PizzaObj) 
}
   
//funcion limpiar html
function limpiarHtml(){
    const contendIng = document.querySelector('#Pfinal');
    while(contendIng.firstChild){
        contendIng.removeChild(contendIng.firstChild);
    }
}

function TotalPagar(e){
    e.preventDefault(); 
    limpiarHtml();
    goodtweet2('Gracias por confiar en nosotros... \nEn unos minutos le entregamos su Pedido')


}


//mostrar mensajes
function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');
    //insertar el mensaje de errors
    const contenido = document.querySelector('#cardB');
    contenido.appendChild(mensajeError);

    //eliminar la alerta despues de 3segundos
    setTimeout(()=>{
        mensajeError.remove()
    }, 2000)
}


function goodtweet(mensaje){
    const goodtweet = document.createElement('p');
    goodtweet.textContent = mensaje;
    goodtweet.classList.add('good');
    const contenido1 = document.querySelector('#cardB')
    contenido1.appendChild(goodtweet);
   
    setTimeout(()=>{
       goodtweet.remove()
   }, 1500)
}

function goodtweet2(mensaje){
    const goodtweet = document.createElement('p');
    goodtweet.textContent = mensaje;
    goodtweet.classList.add('good1');
    const contenido1 = document.querySelector('#good')
    contenido1.appendChild(goodtweet);
   
    setTimeout(()=>{
       goodtweet.remove()
   }, 5000)
}


function cancelar(){
    mostrarError('Usted ha cancelado');
}

