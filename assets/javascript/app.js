$(document).ready(function () {
    console.log("ready!");

var count = 45;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }
  document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
}
  //Do code for showing the number of seconds here
     var correct = 0;
    var incorrect = 0;
    var questionsList = [
        {
            Q: "<strong>1.  Christopher Plummer played ‘Doc’ Emmett Brown in the ‘Back to the Future’ series.</strong>",
            A1: "FALSE, it was Christopher Lloyd",
        },
        
        {
            Q: "<strong>2.  The quote 'Peachy keen, Jelly Bean.' is from the 1978 movie 'Grease'.</strong>",           
            A2: "TRUE"
        },
        {
            Q: "<strong>3.  'Meet the Focker's' was the prequel to the move 'Meet the Parents'.</strong>",           
            A3: "FALSE, 'Meet the Parents' was the first movie of the franchise."
        },
        {
            Q: "<strong>4.  Katniss Everdeen in ‘The Hunger Games’ series, was played by Jennifer Lawrence.</strong>",           
            A4: "TRUE"
        },
        {
            Q: "<strong>5.  Dave Chappelle turned down the role of Bubba in 1994's 'Forrest Gump'.</strong>",           
            A5: "TRUE"
        },
        {
            Q: "<strong>6.  The quote 'Do you ever look at someone and wonder, 'What is going on inside their head?' is from the 2004 movie 'Eternal Sunshine of the Spotless Mind'.",           
            A6: "FALSE, this quote is from the 2015 childrens movie 'Inside Out'.</strong>"
        },
        {
            Q: "<strong>7.  The 1993 movie 'Cool Runnings' was based on a true story.</strong>",           
            A7: "TRUE"
        },
        {
            Q: "<strong>8.  Carrie Bradshaw played Princess Leia in the original ‘Star Wars’ series.</strong>",           
            A8: "FALSE, this character was played by Carrie Fisher"
        },
        {
            Q: "<strong>9.  The movie 'Ace Ventura: Pet Detective' was the sequal to  'Ace Ventura: When Nature Calls'.</strong>",           
            A9: "FALSE, 'Ace Ventura: Pet Detective' was the first movie of this franchise."
        },
        {
            Q: "<strong>10. Harrison Ford originally had a cameo in 1982's 'E.T' but it was later cut from the film.</strong>",           
            A10: "TRUE"
        },
    ]

    setTimeout(startGame, 1000 * 60);
    displayQuestion()
    function startGame() {
        console.log("Game Over")
        alert("Game Over!!! Click submit to see how many you got correct!")
        
    }
    function displayQuestion() {
        for (var i = 0; i < questionsList.length; i++) {
            var Q = questionsList[i].Q
            // console.log(Q)
            // console.log("A1")
            newDiv = $("<div>")
            newDiv.html("<p>" + questionsList[i].Q + "</p>" + 
            '<input type="radio" value="true" name="Q' + i + '">True<br>' +
            '<input type="radio" value="false" name="Q' + i + '">False<br>');
            $("#target").append(newDiv);
        }
       
    }
    $( "#submit" ).on( "click", function() {
        console.log("Hello" );
        // var correct = 0;

    var answer1 = $('input[name=Q0]:checked').val();
    console.log(answer1)
     if (answer1 === "false"){
         correct++;
         console.log("you have" + correct)
     }
     else {incorrect++}

    var answer2 = $('input[name=Q1]:checked').val();
    console.log(answer2)
    if (answer2 === "true"){
        correct++;
        console.log("you have" + correct)
    }
    else {incorrect++}

var answer3 = $('input[name=Q2]:checked').val();
    console.log(answer3)
    if (answer3 === "false"){
        correct++;
        console.log("you have" + correct)
    }
    else {incorrect++}

    var answer4 = $('input[name=Q3]:checked').val();
    console.log(answer4)
    if (answer4 === "true"){
        correct++;
        console.log("you have" + correct)
    }
    else {incorrect++}

    var answer5 = $('input[name=Q4]:checked').val();
    console.log(answer5)
    if (answer5 === "true"){
        correct++;
        console.log("you have" + correct)
    }
    else {incorrect++}

    var answer6 = $('input[name=Q5]:checked').val();
    console.log(answer6)
    if (answer6 === "false"){
        correct++;
        console.log("you have" + correct)
    }
    else {incorrect++}

    var answer7 = $('input[name=Q6]:checked').val();
    console.log(answer7)
    if (answer7 === "true"){
        correct++;
        console.log("you have" + correct)
    }
    else {incorrect++}

    var answer8 = $('input[name=Q7]:checked').val();
    console.log(answer8)
    if (answer8 === "false"){
        correct++;
        console.log("you have" + correct)
    }
    else {incorrect++}

    var answer9 = $('input[name=Q8]:checked').val();
    console.log(answer9)
    if (answer9 === "false"){
        correct++;
        console.log("you have" + correct)
    }
    else {incorrect++}

    var answer10 = $('input[name=Q9]:checked').val();
    console.log(answer10)
    if (answer10 === "true"){
        correct++;
        console.log("you have" + correct)
    }
    else {incorrect++}
    
    newDiv = $("<div>")
    newDiv.html("<p>" + correct+ "</p>" );
    $("#result").append(newDiv);
    displayResult()
      });

function displayResult (){
    $("#target").hide()
 
}

    //   end of document.ready
});



// set interval function for 60 seconds. 

// inside set interval display start game function console hello.
// create an array called questions, inside the array there should be objects
// questions = [
//     {

//     }
// ]
// display the questions with the options
// decrement the timer
//  when the timer = 0 end the game 
// when the user hits submit button end the game
// $("#submit").on("click", function () {

// }
// once the game has ended, calculate incorrect and correct answers.
