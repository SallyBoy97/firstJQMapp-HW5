let habitArray = [];
 
let Habit = function (name, category, day, time) {
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
    

        habitList();

        
    })

    document.getElementById("category").addEventListener("change", function () {
        selectedCategory = document.getElementById("category").value;
    });

});


