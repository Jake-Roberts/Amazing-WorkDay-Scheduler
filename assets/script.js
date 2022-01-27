
// add current day function or var
$("#currentDay").text(moment().format("MMM Do YYYY"));
// add a save to local storage function 
$(".saveBtn").on("click", function () {
    
    var textInput = $(this).siblings(".input-area").val();
    var hours = $(this).parent().attr("id");
    console.log(hours)
    console.log(this)
    //save to local
    localStorage.setItem(hours, textInput)
})






// add color's for past present and future 