function id_int_value(_id){
    let txt = document.getElementById(_id).value;
    let num = parseInt(txt);
    return num;

}
function id_int_text(_id){
    let txt = document.getElementById(_id).innerText;
    let num = parseInt(txt);
    return num;
}

