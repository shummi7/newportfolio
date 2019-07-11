var homeButton=document.getElementById("home");
var aboutButton=document.getElementById("about");
var skillsButton=document.getElementById("skills");
var projectsButton=document.getElementById("projects");
var contactButton=document.getElementById("contact");
var demo = document.getElementsByClassName("demo");

var pageArray=["mainPage","aboutPage","skillsPage","projectPage","contactPage"];

for(var i=1;i<pageArray.length;i++){
    document.getElementById(pageArray[i]).style.display='none';
}
document.getElementById("mainPage").style.display='';
document.getElementById("home").classList.add('active');

function pageSelectionFunc(idname,pagename){
    document.getElementById(idname).style.display='';
    var newpageArray=pageArray.filter(arr=>{
        if(arr!== idname) return arr;
    });
    console.log(newpageArray);
    for(var i=0;i<newpageArray.length;i++){
        document.getElementById(newpageArray[i]).style.display='none';
    }

    for(var i=0; i<document.getElementById("navigation").children.length;i++){
        document.getElementById("navigation").children[i].classList.remove('active');
    }

    document.getElementById(pagename).classList.add('active');
}

homeButton.addEventListener('click',function(){pageSelectionFunc("mainPage","home")}, false);
aboutButton.addEventListener('click',function(){pageSelectionFunc("aboutPage","about")}, false);
skillsButton.addEventListener('click',function(){pageSelectionFunc("skillsPage","skills")}, false);
projectsButton.addEventListener('click',function(){pageSelectionFunc("projectPage","projects")}, false);
contactButton.addEventListener('click',function(){pageSelectionFunc("contactPage","contact")}, false);


demo[0].firstElementChild.addEventListener('click',function(e) {
    window.location.href = 'https://shummi7.github.io/ecommerce/';
}, false);
demo[1].firstElementChild.addEventListener('click',function(e) {
    window.location.href = 'https://shummi7.github.io/testrobo/';
}, false);
demo[2].firstElementChild.addEventListener('click',function(e) {
    window.location.href = 'https://shummi7.github.io/Todo_List/';
}, false);
demo[3].firstElementChild.addEventListener('click',function(e) {
    window.location.href = 'https://shummi7.github.io/Snake_Game/';
}, false);
demo[4].firstElementChild.addEventListener('click',function(e) {
    window.location.href = 'https://shummi7.github.io/Background_Gradient/';
}, false);
demo[5].firstElementChild.addEventListener('click',function(e) {
    window.location.href = 'https://smart-brain-face-rcgn.herokuapp.com/';
}, false);
demo[6].firstElementChild.addEventListener('click',function(e) {
    window.location.href = 'https://shummi-quizapp.herokuapp.com/';
}, false);

// ----------------------------------------------------------------------------

demo[0].lastElementChild.addEventListener('click',function(e) {
    window.location.href = 'https://github.com/shummi7/ecommerce';
}, false);
demo[1].lastElementChild.addEventListener('click',function(e) {
    window.location.href = 'https://github.com/shummi7/testrobo';
}, false);
demo[2].lastElementChild.addEventListener('click',function(e) {
    window.location.href = 'https://github.com/shummi7/Todo_List';
}, false);
demo[3].lastElementChild.addEventListener('click',function(e) {
    window.location.href = 'https://github.com/shummi7/Snake_Game';
}, false);
demo[4].lastElementChild.addEventListener('click',function(e) {
    window.location.href = 'https://github.com/shummi7/Background_Gradient';
}, false);
demo[5].lastElementChild.addEventListener('click',function(e) {
    window.location.href = 'https://github.com/shummi7/smart-brain-api';
}, false);
demo[6].lastElementChild.addEventListener('click',function(e) {
    window.location.href = 'https://github.com/shummi7/quizApp';
}, false);

// ---------------------------------------------------------------

