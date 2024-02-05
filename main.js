
let habitArray = [];
 
let Habit = function (name, category, day, time) { //habbit definitions instantiation
    this.name = name;
    this.category = category;
    this.day = day;
    this.time = time;
}

habitArray.push (new Habit("Take vitamins", "health", "monday","morning"));

let selectedCategory = "";


document.addEventListener("DOMContentLoaded", function (event) {


    habitList();

    document.getElementById("addButton").addEventListener("click", function(){
        habitArray.push ( new Habit(document.getElementById("habitName").value, document.getElementById("cate").value,
        document.getElementById("days").value, document.getElementById("timeOfDay").value ) );
        document.getElementById("cate").value = "";
        document.getElementById("days").value = "";
        document.getElementById("timeOfDay").value = "";

        habitList();

        
    })

    document.getElementById("cate").addEventListener("change", function () {
       selectedCategory = document.getElementById("cate").value;
    });

});

    // function defintions
function habitList() {
    // clear prior data
    var oneUL = document.getElementById("oneUL");
    oneUL.innerHTML = "";

    habitArray.forEach(function (element,) {   // use handy array forEach method
           var li = document.createElement('li');
           // added data-role="listview" to the ul in the html
           li.innerHTML = habbitArray.name + "  " + habitArray.category + "   " + habbitArray.day + "   " + habbitArray.time;
           oneUL.appendChild(li);
    });
}; 


