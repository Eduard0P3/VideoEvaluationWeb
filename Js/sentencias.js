function Sentencia() {
    var j = 1;
    var CodigoHTML="";
    for (var i = 1; i < 91; i++) {
        CodigoHTML += "<h4 class='mb-3'>Secuencia "+i+"</h4><video id='video"+i+"' class='video-js vjs-big-play-centered' controls preload='auto' width='768' height='432'    data-setup='{}' poster='./Other_files/764x432.jpg'>    <source src='./Other_files/Data/pa1_25fps.mp4' type='video/mp4' />    <source src='MY_VIDEO.webm' type='video/webm' />    <p class='vjs-no-js'>        To view this video please enable JavaScript, and consider upgrading to a        web browser that        <a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a>    </p></video><div class='d-block my-3'>    <div class='custom-control custom-radio'>        <input id='v"+i+"_"+j+"' name='sequence"+i+"' type='radio' class='custom-control-input' required='' value='1'>        <label class='custom-control-label' for='v"+i+"_"+j+"'>1. muy distorcionada.</label>    </div>    <div class='custom-control custom-radio'>        <input id='v"+i+"_"+(j+1)+"' name='sequence"+i+"' type='radio' class='custom-control-input' required='' value ='2'>        <label class='custom-control-label' for='v"+i+"_"+(j+1)+"'>2. Distorcionada.</label>    </div>    <div class='custom-control custom-radio'>        <input id='v"+i+"_"+(j+2)+"' name='sequence"+i+"' type='radio' class='custom-control-input' required='' value ='3'>        <label class='custom-control-label' for='v"+i+"_"+(j+2)+"'>3. Ligeramente distorcionada.</label>    </div>    <div class='custom-control custom-radio'>        <input id='v"+i+"_"+(j+3)+"' name='sequence"+i+"' type='radio' class='custom-control-input' required='' value ='4'>        <label class='custom-control-label' for='v"+i+"_"+(j+3)+"'>4. Perceptible con minima distorcion.</label>    </div>    <div class='custom-control custom-radio'>        <input id='v"+i+"_"+(j+4)+"' name='sequence"+i+"' type='radio' class='custom-control-input' required='' value ='5'>        <label class='custom-control-label' for='v"+i+"_"+(j+4)+"'>5. Sin distorsion.</label>    </div></div><hr class='mb-4'>";
    }
    // console.log(CodigoHTML);
    document.getElementById("formulario").innerHTML = CodigoHTML;
}
Sentencia();

function displayRadioValue() {
    document.getElementById("result").innerHTML = "";
    var ele = document.getElementsByTagName('input');
    
    for(i = 0; i < ele.length; i++) {
        
        if(ele[i].type="radio") {
        
            if(ele[i].checked)
                document.getElementById("result").innerHTML
                        += ele[i].name + " Value: "
                        + ele[i].value + "<br>";
        }
    }
}