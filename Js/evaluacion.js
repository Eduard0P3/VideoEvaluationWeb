function todo() {
    getDatos();
    clear();
    DisableNextButton("btnEnviar");
}

function Sentencia() {
    var j = 1;
    var CodigoHTML="";
    for (var i = 1; i < 6; i++) {
        CodigoHTML += "<h4 class='mb-3'>Secuencia "+i+"</h4><video id='video"+i+"' class='video-js vjs-big-play-centered' controls preload='auto' width='768' height='432'    data-setup='{}' poster='./Other_files/764x432.jpg'>    <source src='./Other_files/Data/pa1_25fps.mp4' type='video/mp4' />    <p class='vjs-no-js'>        To view this video please enable JavaScript, and consider upgrading to a        web browser that        <a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a>    </p></video><div class='d-block my-3'>    <div class='custom-control custom-radio'>        <input id='v"+i+"_"+j+"' name='sequence"+i+"' type='radio' class='custom-control-input' required='' value='1'>        <label class='custom-control-label' for='v"+i+"_"+j+"'>1. Múy distorsionada.</label>    </div>    <div class='custom-control custom-radio'>        <input id='v"+i+"_"+(j+1)+"' name='sequence"+i+"' type='radio' class='custom-control-input' required='' value ='2'>        <label class='custom-control-label' for='v"+i+"_"+(j+1)+"'>2. Distorsionada.</label>    </div>    <div class='custom-control custom-radio'>        <input id='v"+i+"_"+(j+2)+"' name='sequence"+i+"' type='radio' class='custom-control-input' required='' value ='3'>        <label class='custom-control-label' for='v"+i+"_"+(j+2)+"'>3. Ligeramente distorsionada.</label>    </div>    <div class='custom-control custom-radio'>        <input id='v"+i+"_"+(j+3)+"' name='sequence"+i+"' type='radio' class='custom-control-input' required='' value ='4'>        <label class='custom-control-label' for='v"+i+"_"+(j+3)+"'>4. Perceptible, con mínima distorsión.</label>    </div>    <div class='custom-control custom-radio'>        <input id='v"+i+"_"+(j+4)+"' name='sequence"+i+"' type='radio' class='custom-control-input' required='' value ='5'>        <label class='custom-control-label' for='v"+i+"_"+(j+4)+"'>5. Sin distorsión.</label>    </div></div><hr class='mb-4'>";
    }
    document.getElementById("formulario").innerHTML = CodigoHTML;
}
Sentencia();

function displayRadioValue() {
    document.getElementById("result").innerHTML = "";
    var ele = document.getElementsByTagName("input");
    
    for(var i = 0; i < ele.length; i++) {
        
        if(ele[i].getAttribute("type")=="radio") {
        
            if(ele[i].checked)
                document.getElementById("result").innerHTML
                        += ele[i].name + " Value: "
                        + ele[i].value + "<br>";
        }
    }
}

function clear() {
    clearRadioGroup("sequence1");
    clearRadioGroup("sequence2");
    clearRadioGroup("sequence3");
    clearRadioGroup("sequence4");
    clearRadioGroup("sequence5");
}

function clearRadioGroup(GroupName) {
    var ele = document.getElementsByName(GroupName);
	for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
}

function DisableNextButton(btnId) {
    document.getElementById(btnId).disabled = 'true';
}

function getDatos() {
    var nombre = document.getElementsByTagName("source");
    var ev = document.getElementsByTagName("input");
    var evaluacion = new Array(new Array(),new Array(),new Array(),new Array(),new Array());
    var j = 0;
    for (var i = 0; i < ev.length; i++) {
        if(ev[i].getAttribute("type")=="radio") {
            if(ev[i].checked){
                evaluacion[j]['valor'] = ev[i].value;
                j = j + 1;
            }
        }
    }
    for (var i = 0; i < nombre.length; i++) {
        if(nombre[i].getAttribute("type")=="video/mp4") {
            evaluacion[i]['nombre'] = nombre[i].src;
        }
    }
    var evaluacion2 = {
        'nombre1': evaluacion[0]['nombre'],
        'nombre2': evaluacion[1]['nombre'],
        'nombre3': evaluacion[2]['nombre'],
        'nombre4': evaluacion[3]['nombre'],
        'nombre5': evaluacion[4]['nombre'],
        'valor1' : evaluacion[0]['valor'],
        'valor2' : evaluacion[1]['valor'],
        'valor3' : evaluacion[2]['valor'],
        'valor4' : evaluacion[3]['valor'],
        'valor5' : evaluacion[4]['valor']
    }
    $.ajax({
        data: evaluacion2, //datos que se van a enviar al ajax
        url: './Controllers/evaluacion.C.php', //archivo php que recibe los datos
        type: 'POST', //método para enviar los datos
        dataType: 'json',//Recibe el array desde php
        success: function (respuesta) {
            alert(respuesta['respuesta']);
        }
    });
}