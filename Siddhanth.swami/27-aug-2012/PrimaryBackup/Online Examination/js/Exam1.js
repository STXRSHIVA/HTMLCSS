NoOfQuestions = 5;// Edit this value before adding questions 
Questions = Array(NoOfQuestions);
Answers = new Array(NoOfQuestions);

for (var i = 0 ; i < NoOfQuestions ; i++)
{
    Answers[i] = new Array(4);
}

CorrectAnswers = new Array(NoOfQuestions);

QuestionNo = 0;
Marks = 0;
OptionChoosed = 0;
Answer = 5;

function AnswerChoosed(Ans)
{
	Answer = Ans;
}



function load()
{
	LoadQuestion();
}

function LoadQuestion()
{
	document.getElementById("Question").innerHTML = "(" + (QuestionNo + 1)+") : " + Questions[QuestionNo];
	document.getElementById("Option0").innerHTML = "(a) " + Answers[QuestionNo][0];
	document.getElementById("Option1").innerHTML = "(b) " + Answers[QuestionNo][1];
	document.getElementById("Option2").innerHTML = "(c) " + Answers[QuestionNo][2];
	document.getElementById("Option3").innerHTML = "(d) " + Answers[QuestionNo][3];		
	document.getElementById("Opt1").checked = false;	
	document.getElementById("Opt2").checked = false;	
	document.getElementById("Opt3").checked = false;	
	document.getElementById("Opt4").checked = false;
	Answer = 5;
}


function NextQuestion()
{
	if(Answer == CorrectAnswers[QuestionNo])
	{
		Marks++;
	}
	if(QuestionNo < NoOfQuestions - 1)
	{	
		QuestionNo++;
		LoadQuestion();
	}
	else
	{
		alert("End of Examination \n"+"Marks Are : "+Marks+"");
	}
}


Questions [0] = "The father of C,C++ & Unix is";
Answers[0][0] = "Forouzan";
Answers[0][1] = "Dennis Ritchie";
Answers[0][2] = "Andrew Tenenbaum";
Answers[0][3] = "Dijkstra";
CorrectAnswers[0] = 2;


Questions [1] = "The Open source among following is  ";
Answers[1][0] = "Windows XP";
Answers[1][1] = "Mac OS X";
Answers[1][2] = "Linux Ubuntu";
Answers[1][3] = "Sun Solaris";
CorrectAnswers[1] = 4;


Questions [2] = "Pancake Sorting Algorithm and BASIC Interpreter was written by";
Answers[2][0] = "Steve Jobs";
Answers[2][1] = "Steve William";
Answers[2][2] = "Bill Gates";
Answers[2][3] = "Jerry yang";
CorrectAnswers[2] = 3;


Questions [3] = "Larry page and Sergei Brinn are Co-Founders of ";
Answers[3][0] = "Yahoo";
Answers[3][1] = "Rediff";
Answers[3][2] = "Google";
Answers[3][3] = "Apple";
CorrectAnswers[3] = 3;


Questions [4] = "The first computer to defeat Chess Grandmaster was";
Answers[4][0] = "Zeus";
Answers[4][1] = "Armageddon";
Answers[4][2] = "White Knight";
Answers[4][3] = "Deep Blue";
CorrectAnswers[4] = 4;