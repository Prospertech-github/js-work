var btn = document.getElementById('btn');
var ul = document.getElementById('ul');
var scoreCard = document.getElementById('scoreCard')
var quizBox = document.getElementById('questionBox');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

var app = {
    questions: [
        {
            q:'What is the full meaning of HTML?',
            options: ['Hyper Transfer Markup Language', 'Hyper Text Markup Language', 'Hyper Text Machine Language', 'None of the above'],
            answer:2
        },
        {
            q:'If TS stands for TypeScript, then JS stands for?',
            options: ['JavaScript', 'JamScript', 'JavaScreen', 'None of the above'],
            answer:1
        },
        {
            q:'What is the full meaning of CSS?',
            options: ['Cascading Styling Sheet', 'Cascading Style Shit', 'Cascading Style Sheet', 'None of the above'],
            answer:3
        },
        {
            q:'The meta tag is located in the ______ tag',
            options: ['head', 'body', 'title', 'None of the above'],
            answer:1
        },
        {
            q:'_____ is always referred to as the skeleton of webpages?',
            options: ['CSS', 'Java', 'HTML', 'None of the above'],
            answer:3
        }
    ],
    index:0,
    load:function(){
        if(this.index<=this.questions.length-1){
            quizBox.innerHTML = this.index+1+". "+this.questions[this.index].q;
            opt1.innerHTML = this.questions[this.index].options[0];
            opt2.innerHTML = this.questions[this.index].options[1];
            opt3.innerHTML = this.questions[this.index].options[2];
            opt4.innerHTML = this.questions[this.index].options[3];
            scoreCard.innerHTML = this.score;
        }else{
            quizBox.innerHTML = "Quiz Completed"
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none"; 
            btn.style.display = "none";
            scoreCard.innerHTML = this.score+"/"+this.questions.length;
        } 
    },
    next:function(){
        this.index++;
        this.load();
    },
    check:function(ele){
        var id = ele.id.split('');
        
        if(id[id.length-1] == this.questions[this.index].answer){
            this.score++;
            ele.className = "correct";
        }else{
            ele.className = "wrong";
            
        }
    },
    notClickAble:function(){
        for(let i=0; i<ul.children.length; i++) {
            ul.children[i].style.pointerEvents="none";
        }
    },
    clickAble:function(){
        for(let i=0; i<ul.children.length; i++) {
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].className="";
        }
    },
    score:0,
}

window.onload = app.load();

function button(ele){
    app.check(ele);
    app.notClickAble();
}
function next(){
    app.next();
    app.clickAble();
}