function week_day_string(value){
    console.log(value);
    switch (value){
        case 0: return "Sun";
        case 1: return "Mon";
        case 2: return "Tue";
        case 3: return "Wed";
        case 4: return "Thu";
        case 5: return "Fri";
        case 6: return "Sat";
        default: return "Undefined";
    }
}
function month_string(value){
    console.log(value);
    switch (value){
        case 0: return "Jan";
        case 1: return "Feb";
        case 2: return "Mar";
        case 3: return "Apr";
        case 4: return "May";
        case 5: return "Jun";
        case 6: return "Jul";
        case 6: return "Aug";
        case 6: return "Sep";
        case 6: return "Oct";
        case 6: return "Nov";
        case 6: return "Dec";
        default: return "Undefined";
    }
}
let cur_date = new Date();
let week_day = week_day_string(cur_date.getDay());
console.log(week_day);
let month = month_string(cur_date.getMonth());
let year = cur_date.getFullYear();
let month_day = cur_date.getDate();
document.getElementById("day_of_the_week").innerText = week_day + ", ";
let full_date = month + " " + month_day + " " + year;
document.getElementById("full_date").innerText = full_date;
