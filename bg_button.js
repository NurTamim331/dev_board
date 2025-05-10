document.getElementById("random_bg_btn").addEventListener('click',function(){
    let colors = ['red','blue','cyan','orange','teal','skyblue','tomato'];
    let rnd_num = new Date().getTime() % colors.length;
    let bdy = document.getElementsByTagName("body");
    bdy[0].style.backgroundColor= colors[rnd_num];
})