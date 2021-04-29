function Sentencia() {
    var CodigoHTML="";
    for (var i = 1; i < 91; i++) {
        for(var j = 1; j < 6; j++){
            CodigoHTML+="<h4 class='mb-3'>Secuencia "+i+"</h4><div class='d-block my-3'>    <div class='custom-control custom-radio'>        <input id='v"+i+"_"+j+"' name='sequence"+i+"' type='radio' class='custom-control-input' required=''>        <label class='custom-control-label' for='v"+i+"_"+j+"'>1. Muy molesta.</label>    </div>    <div class='custom-control custom-radio'>        <input id='v"+i+"_"+j+"' name='sequence"+i+"' type='radio' class='custom-control-input' required=''>        <label class='custom-control-label' for='v"+i+"_"+j+"'>2. Molesta.</label>    </div>    <div class='custom-control custom-radio'>        <input id='v"+i+"_"+j+"' name='sequence"+i+"' type='radio' class='custom-control-input' required=''>        <label class='custom-control-label' for='v"+i+"_"+j+"'>3. Ligeramente molesta.</label>    </div>    <div class='custom-control custom-radio'>        <input id='v"+i+"_"+j+"' name='sequence"+i+"' type='radio' class='custom-control-input' required=''>        <label class='custom-control-label' for='v"+i+"_"+j+"'>4. Perceptible pero no molesta.</label>    </div>    <div class='custom-control custom-radio'>        <input id='v"+i+"_"+j+"' name='sequence"+i+"' type='radio' class='custom-control-input' required=''>        <label class='custom-control-label' for='v"+i+"_"+j+"'>5. Imperceptible.</label>    </div></div><hr class='mb-4'>";
        }
    }
    colsole.log(CodigoHTML);
    document.getElementById("formulario").innerHTML = CodigoHTML;
}
Sentencia();