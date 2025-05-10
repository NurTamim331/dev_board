let btns = document.getElementsByClassName("completed_btn");
for(let btn of btns){
    btn.addEventListener('click',function(event) {
        event.target.style.backgroundColor = 'gray';
        event.target.disabled = 'true';

        let task_count = id_int_text("task_count");
        console.log(task_count);
        let task_box = document.getElementById("task_count");
        task_count -= 1;
        task_box.innerText = task_count;
        alert("Board Updated Successfully");
        // works for the board
        let parent = event.target.parentNode;
        let grandParent = parent.parentNode;
        console.log(grandParent);
        let target_element = grandParent.querySelector("#task_title");
        let task_title = target_element.innerText;
        console.log(task_title);

        let cur_time = new Date().toLocaleTimeString();
        console.log(cur_time);
        let new_log = document.createElement("div");
        new_log.innerHTML= `
            <p class="bg-blue-50 mb-2 px-2 py-3 rounded-xl">You Have completed The Task ${task_title} at ${cur_time}</p>
        `
        document.getElementById("log_container").appendChild(new_log);
        //  total count task
        let cur_count = id_int_text("total_count");
        let new_count = cur_count + 1;
        document.getElementById("total_count").innerText= new_count;







        if(task_count === 0){
            alert("Congrats !!! You have completed All current Task")
        }
        
        
    })
}
document.getElementById("clear_history").addEventListener('click',function(){
    document.getElementById("log_container").innerHTML = "";
})