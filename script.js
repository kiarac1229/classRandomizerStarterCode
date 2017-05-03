$(document).ready(function(){
var teachers = ["Alyxe", "Julia", "Zack", "Aaron", "Justin"];

var students = ["Luis", "Chris","Sammy", "Jessie", "Kiara", "Monserrat", "Julio", "Yanella", "Adonis", "Jen", "Leslie", "Zen", "David","Kevin"];


$("#studentButton").click(function(){
    var random_student = Math.floor(Math.random()*students.length);
    $("#studentDisplay").html(students[random_student]);
    
});

$("#teacherButton").click(function(){
    var random_teacher = Math.floor(Math.random()*teachers.length);
    $("#teacherDisplay").html(teachers[random_teacher]);
    
});
    
});