
let habitArray = [];
let selectedCategory = "";

let Habit = function (name, category, day, time) { //habbit definitions instantiation
    this.name = name;
    this.category = category;
    this.day = day;
    this.time = time;
}

habitArray.push (new Habit("Take vitamins", "health", "monday","morning"));



document.addEventListener("DOMContentLoaded", function (event) {


    habitList();
    //add user input to array
    document.getElementById("addButton").addEventListener("click", function(){
        let habitName = document.getElementById("habitName").value;
        let selectedType = document.getElementById("cate").value;
        let selectedDay = document.getElementById("days").value;
        let selectedTime = document.getElementById("timeOfDay").value;

        habitArray.push(new Habit(habitName, selectedType, selectedDay, selectedTime));

        //clear input fields after adding a habit
        document.getElementById("habitName").value = "";
        document.getElementById("cate").value = "";
        document.getElementById("days").value = "";
        document.getElementById("timeOfDay").value = "";


        habitList();

        
    })

    document.getElementById("cate").addEventListener("change", function () {
       selectedCategory = document.getElementById("cate").value;
    });

});


//function to display list
function habitList() {

    var oneUL = document.getElementById("oneUL");
    oneUL.innerHTML = "";

    habitArray.forEach(function (habit) {   
           var li = document.createElement('li');
           li.innerHTML = habit.name + "  " + habit.category + "   " + habit.day + "   " + habit.time;
           oneUL.appendChild(li);
    });
}; 


