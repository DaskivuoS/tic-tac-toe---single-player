/*
The logic behind this game is simple,
on clicking a button, that button needs to be disabled as well as marked as marked and with appropiate symbol
a player needs to see who is online so that the person can select an opponent
a player can not have two consecutive terms and that is ensured by the backend programming mantaining the database of the game
*/
var current_player = 1;//the game starts with player 1 being the current player
var table = new Array(3);
for(var i=0; i<3; i++)
{
	table[i] = new Array(3);
	for(var j=0; j<3; j++)
	{
		table[i][j] = i*10+j; // each element is initialized with a null value
	}
}

function locate1()
{
	if( current_player == 1 )
        document.getElementById("one").innerHTML = "x";
    if( current_player == 2 )
        document.getElementById("one").innerHTML = "o";
	document.getElementById("one").disabled = true;
	document.getElementById("one").style.color = "seagreen";
	console.log("button has been clicked by player "+current_player);
	if( current_player == 1 )
        table[0][0] = "x";
    if( current_player == 2 )
        table[0][0] = "o";
	evaluate();
    display_player();
    //now we need to place a choice from computer if the user has opted for the service
    if(computer_player_simple == true)
        start_simple_player();
    if(computer_player_complex != 0)
        call_complex_player();
}
function locate2()
{
	if( current_player == 1 )
        document.getElementById("two").innerHTML = "x";
    if( current_player == 2 )
        document.getElementById("two").innerHTML = "o";
	document.getElementById("two").disabled = true;
	document.getElementById("two").style.color = "seagreen";
	console.log("button has been clicked by player "+current_player);
	if( current_player == 1 )
        table[0][1] = "x";
    if( current_player == 2 )
        table[0][1] = "o";
	evaluate();
    display_player();
    //now we need to place a choice from computer if the user has opted for the service
    if(computer_player_simple == true)
        start_simple_player();
    if(computer_player_complex != 0)
        call_complex_player();
}
function locate3()
{
	if( current_player == 1 )
        document.getElementById("three").innerHTML = "x";
    if( current_player == 2 )
        document.getElementById("three").innerHTML = "o";
	document.getElementById("three").disabled = true;
	document.getElementById("three").style.color = "seagreen";
	console.log("button has been clicked by player "+current_player);
	if( current_player == 1 )
        table[0][2] = "x";
    if( current_player == 2 )
        table[0][2] = "o";
	evaluate();
    display_player();
    //now we need to place a choice from computer if the user has opted for the service
    if(computer_player_simple == true)
        start_simple_player();
    if(computer_player_complex != 0)
        call_complex_player();
}
function locate4()
{
	if( current_player == 1 )
        document.getElementById("four").innerHTML = "x";
    if( current_player == 2 )
        document.getElementById("four").innerHTML = "o";
	document.getElementById("four").disabled = true;
	document.getElementById("four").style.color = "seagreen";
	console.log("button has been clicked by player "+current_player);
	if( current_player == 1 )
        table[1][0] = "x";
    if( current_player == 2 )
        table[1][0] = "o";
	evaluate();
    display_player();
    //now we need to place a choice from computer if the user has opted for the service
    if(computer_player_simple == true)
        start_simple_player();
    if(computer_player_complex != 0)
        call_complex_player();
}
function locate5()
{
	if( current_player == 1 )
        document.getElementById("five").innerHTML = "x";
    if( current_player == 2 )
        document.getElementById("five").innerHTML = "o";
	document.getElementById("five").disabled = true;
	document.getElementById("five").style.color = "seagreen";
	console.log("button has been clicked by player "+current_player);
	if( current_player == 1 )
        table[1][1] = "x";
    if( current_player == 2 )
        table[1][1] = "o";
	evaluate();
    display_player();
    //now we need to place a choice from computer if the user has opted for the service
    if(computer_player_simple == true)
        start_simple_player();
    if(computer_player_complex != 0)
        call_complex_player();
}
function locate6()
{
	if( current_player == 1 )
        document.getElementById("six").innerHTML = "x";
    if( current_player == 2 )
        document.getElementById("six").innerHTML = "o";
	document.getElementById("six").disabled = true;
	document.getElementById("six").style.color = "seagreen";
	console.log("button has been clicked by player "+current_player);
	if( current_player == 1 )
        table[1][2] = "x";
    if( current_player == 2 )
        table[1][2] = "o";
	evaluate();
    display_player();
    //now we need to place a choice from computer if the user has opted for the service
    if(computer_player_simple == true)
        start_simple_player();
    if(computer_player_complex != 0)
        call_complex_player();
}
function locate7()
{
	if( current_player == 1 )
        document.getElementById("seven").innerHTML = "x";
    if( current_player == 2 )
        document.getElementById("seven").innerHTML = "o";
	document.getElementById("seven").disabled = true;
	document.getElementById("seven").style.color = "seagreen";
	console.log("button has been clicked by player "+current_player);
	if( current_player == 1 )
        table[2][0] = "x";
    if( current_player == 2 )
        table[2][0] = "o";
	evaluate();
    display_player();
    //now we need to place a choice from computer if the user has opted for the service
    if(computer_player_simple == true)
        start_simple_player();
    if(computer_player_complex != 0)
        call_complex_player();
}
function locate8()
{
	if( current_player == 1 )
        document.getElementById("eight").innerHTML = "x";
    if( current_player == 2 )
        document.getElementById("eight").innerHTML = "o";
	document.getElementById("eight").disabled = true;
	document.getElementById("eight").style.color = "seagreen";
	console.log("button has been clicked by player "+current_player);
    if( current_player == 1 )
        table[2][1] = "x";
    if( current_player == 2 )
        table[2][1] = "o";
	evaluate();
    display_player();
    //now we need to place a choice from computer if the user has opted for the service
    if(computer_player_simple == true)
        start_simple_player();
    if(computer_player_complex != 0)
        call_complex_player();
}
function locate9()
{
    if( current_player == 1 )
	    document.getElementById("nine").innerHTML = "x";
    if( current_player == 2 )
        document.getElementById("nine").innerHTML = "o";
	document.getElementById("nine").disabled = true;
	document.getElementById("nine").style.color = "seagreen";
	console.log("button has been clicked by player "+current_player);
    if( current_player == 1 )
        table[2][2] = "x";
    if( current_player == 2 )
        table[2][2] = "o";
	evaluate();
    display_player();
    //now we need to place a choice from computer if the user has opted for the service
    if(computer_player_simple == true)
        start_simple_player();
    if(computer_player_complex != 0)
        call_complex_player();
}


//the following section defines the logic of the game and enables the identification of the winner
function blockall()
{
	//this aims at freezing all the buttons
	document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("six").disabled = true;
    document.getElementById("seven").disabled = true;
    document.getElementById("eight").disabled = true;
    document.getElementById("nine").disabled = true;
}
function freeall()
{
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = false;
    document.getElementById("four").disabled = false;
    document.getElementById("five").disabled = false;
    document.getElementById("six").disabled = false;
    document.getElementById("seven").disabled = false;
    document.getElementById("eight").disabled = false;
    document.getElementById("nine").disabled = false;
}
function evaluate()
{
	//just to check if it is working properly
	/*
	for(var i=0; i<3; i++)
    {
	    for(var j=0; j<3; j++)
	    {
	    	console.log(i,j,table[i][j],"\n");		    
	    }
    }
    */
    //now the code actually evaluates a match
    //the whole array is sweeped for all the table[i]==table[j] for any diagonal match
    //the whole array is sweeped for table[i][0,1,2] being the same for horizontal match
    //the whole array is sweeped for table[0,1,2][j] being the same for vertical match

    for( var i=0;i<3;i++)
    {
    	var valueoffirst = table[i][0];
    	var valueofsecond = table[i][1];
    	var valueofthird = table[i][2];
    	console.log(valueoffirst," ",valueofsecond," ",valueofthird);
    	if( valueoffirst == valueofsecond)
    		if( valueoffirst == valueofthird)
    		{
    		    console.log("it is a horizontal win by "+current_player+" !");
                document.getElementById('winner').innerHTML = "Player "+current_player+" wins the game !";
    		    //all the buttons must be frozen immediately so that no button can be pressed further
    		    blockall();
    		    break;
    		}
    }
    for( var i=0;i<3;i++)
    {
    	var valueoffirst = table[0][i];
    	var valueofsecond = table[1][i];
    	var valueofthird = table[2][i];
    	console.log(valueoffirst," ",valueofsecond," ",valueofthird);
    	if( valueoffirst == valueofsecond)
    		if( valueoffirst == valueofthird)
    		{
    		    console.log("it is a vertical win by "+current_player+" !");
                document.getElementById('winner').innerHTML = "Player "+current_player+" wins the game !";
                //all the buttons must be frozen immediately so that no button can be pressed further
    		    blockall();
    		    break;
    		}
    }
    //we are now getting the diagonal values
    /*
    _________________________
    |  one  | _____ |  two  |
    _________________________
    | _____ | three | _____ |
    _________________________
    |  four | _____ |  five |
    _________________________
    */
    var one = table[0][0];
    var two = table[0][2];
    var three = table[1][1];
    var four = table[2][0];
    var five = table[2][2];
    //left to right diagonal
    if(one==three && three==five)
    {
    	console.log("it is a win, a diagonal cut form left top to right bottom by "+current_player+"  !");
        document.getElementById('winner').innerHTML = "Player "+current_player+" wins the game !";
        //all the buttons must be frozen immediately so that no button can be pressed further
    	blockall();
    }
    //right to left diagonal
    if(two==three && three==four)
    {
    	console.log("it is a win, a diagonal cut from right tp to left bottom by "+current_player+" !");
        document.getElementById('winner').innerHTML = "Player "+current_player+" wins the game !";
        //all the buttons must be frozen immediately so that no button can be pressed further
    	blockall();
    }
    current_player ++;
    if(current_player == 3)
        current_player = 1;

}
//now we go on to the identification of a player, whether it is the turn of player 1 or player 2
function display_player()
{
    if( current_player == 1)
    {
        document.getElementById('now_play').innerHTML = "Now is Player One's turn <br>";
    }
    if( current_player == 2)
    {
        document.getElementById('now_play').innerHTML = "Now is Player Two's turn <br>";
    }
}
//now for the buttons ...
function showbutt()
{
    document.getElementById('gamebox').style.display = "none";
    document.getElementById('utilities').style.display = "block";
    document.getElementById('message').style.display = "none";
    //we need to make the page scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function togame()
{
    document.getElementById('gamebox').style.display = "block";
    document.getElementById('utilities').style.display = "none";
    document.getElementById('message').style.display = "block";
    //we need to make the page scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
//now for refreshing the game
function refresh()
{
    console.log("A new game has been initiated");
    freeall();
    //setting the value of the elements in the table to null
    for(var i=0; i<3; i++)
    {
        table[i] = new Array(3);
        for(var j=0; j<3; j++)
        {
            table[i][j] = i*10+j; // each element is initialized with a null value
        }
    }
    var current_player = 2;//the game starts with player 2 being the current player
    //setting the values of the buttons right
    document.getElementById("one").innerHTML = "v";
    document.getElementById("one").style.color = "transparent";
    document.getElementById("two").innerHTML = "v";
    document.getElementById("two").style.color = "transparent";
    document.getElementById("three").innerHTML = "v";
    document.getElementById("three").style.color = "transparent";
    document.getElementById("four").innerHTML = "v";
    document.getElementById("four").style.color = "transparent";
    document.getElementById("five").innerHTML = "v";
    document.getElementById("five").style.color = "transparent";
    document.getElementById("six").innerHTML = "v";
    document.getElementById("six").style.color = "transparent";
    document.getElementById("seven").innerHTML = "v";
    document.getElementById("seven").style.color = "transparent";
    document.getElementById("eight").innerHTML = "v";
    document.getElementById("eight").style.color = "transparent";
    document.getElementById("nine").innerHTML = "v";
    document.getElementById("nine").style.color = "transparent";
    //now bringing it to the game page
    document.getElementById('gamebox').style.display = "block";
    document.getElementById('utilities').style.display = "none";
    document.getElementById('message').style.display = "block";
    //getting the winner block empty again
    document.getElementById('winner').innerHTML = "";
    //we need to make the page scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
//this line was added just to make the number of lines of code to 333 because it felt awesome









//-----------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------THIS IS THE AUTO-GAMING SECTION--------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------










function auto_gamer_simple()
{
    //we need to give some space to the computer's console output
    for(var i=0;i<10;i++)
        console.log();
    //this simply scans for the empty spots and randomly assigns value to a candidate
    var random = Math.random();
    console.log(random+' is a random number generated ');
    //now we now need to fetch a single integer off the number
    random = random*10;
    random = Math.floor(random);
    console.log(random+" is the number extracted, computer decides that cell");
    //we simply put the bet to the number that crops up, after checking the availability of the cell
    if(random == 1)
    {
        var editable = true;//this value defnes if this cell can be taken or not, initialized with true
        console.log("can table "+random+" be taken ? "+" "+editable);
        var value = document.getElementById('one').innerHTML;
        console.log(value);
        if(value == "x" || value == "o")
            var editable = false;
        if(editable == true)
        {
            console.log("cubicle number one is available");
            var button_test  = document.getElementById('one');
            button_test.click();
            console.log("...and bet placed !");
        }
        else
        {
            console.log("well, cubicle number 1 is not available");
            auto_gamer_simple();
        }
    }
    if(random == 2)
    {
        var editable = true;//this value defnes if this cell can be taken or not, initialized with true
        console.log("can table "+random+" be taken ? "+" "+editable);
        var value = document.getElementById('two').innerHTML;
        console.log(value);
        if(value == "x" || value == "o")
            var editable = false;
        if(editable == true)
        {
            console.log("cubicle number two is available");
            var button_test  = document.getElementById('two');
            button_test.click();
            console.log("...and bet placed !");
        }
        else
        {
            console.log("well, cubicle number 2 is not available");
            auto_gamer_simple();
        }
    }
    if(random == 3)
    {
        var editable = true;//this value defnes if this cell can be taken or not, initialized with true
        console.log("can table "+random+" be taken ? "+" "+editable);
        var value = document.getElementById('three').innerHTML;
        console.log(value);
        if(value == "x" || value == "o")
            var editable = false;
        if(editable == true)
        {
            console.log("cubicle number three is available");
            var button_test  = document.getElementById('three');
            button_test.click();
            console.log("...and bet placed !");
        }
        else
        {
            console.log("well, cubicle number 3 is not available");
            auto_gamer_simple();
        }
    }
    if(random == 4)
    {
        var editable = true;//this value defnes if this cell can be taken or not, initialized with true
        console.log("can table "+random+" be taken ? "+" "+editable);
        var value = document.getElementById('four').innerHTML;
        console.log(value);
        if(value == "x" || value == "o")
            var editable = false;
        if(editable == true)
        {
            console.log("cubicle number four is available");
            var button_test  = document.getElementById('four');
            button_test.click();
            console.log("...and bet placed !");
        }
        else
        {
            console.log("well, cubicle number 4 is not available");
            auto_gamer_simple();
        }
    }
    if(random == 5)
    {
        var editable = true;//this value defnes if this cell can be taken or not, initialized with true
        console.log("can table "+random+" be taken ? "+" "+editable);
        var value = document.getElementById('five').innerHTML;
        console.log(value);
        if(value == "x" || value == "o")
            var editable = false;
        if(editable == true)
        {
            console.log("cubicle number five is available");
            var button_test  = document.getElementById('five');
            button_test.click();
            console.log("...and bet placed !");
        }
        else
        {
            console.log("well, cubicle number 5 is not available");
            auto_gamer_simple();
        }
    }
    if(random == 6)
    {
        var editable = true;//this value defnes if this cell can be taken or not, initialized with true
        console.log("can table "+random+" be taken ? "+" "+editable);
        var value = document.getElementById('six').innerHTML;
        console.log(value);
        if(value == "x" || value == "o")
            var editable = false;
        if(editable == true)
        {
            console.log("cubicle number six is available");
            var button_test  = document.getElementById('six');
            button_test.click();
            console.log("...and bet placed !");
        }
        else
        {
            console.log("well, cubicle number 6 is not available");
            auto_gamer_simple();
        }
    }
    if(random == 7)
    {
        var editable = true;//this value defnes if this cell can be taken or not, initialized with true
        console.log("can table "+random+" be taken ? "+" "+editable);
        var value = document.getElementById('seven').innerHTML;
        console.log(value);
        if(value == "x" || value == "o")
            var editable = false;
        if(editable == true)
        {
            console.log("cubicle number seven is available");
            var button_test  = document.getElementById('seven');
            button_test.click();
            console.log("...and bet placed !");
        }
        else
        {
            console.log("well, cubicle number 7 is not available");
            auto_gamer_simple();
        }
    }
    if(random == 8)
    {
        var editable = true;//this value defnes if this cell can be taken or not, initialized with true
        console.log("can table "+random+" be taken ? "+" "+editable);
        var value = document.getElementById('eight').innerHTML;
        console.log(value);
        if(value == "x" || value == "o")
            var editable = false;
        if(editable == true)
        {
            console.log("cubicle number eight is available");
            var button_test  = document.getElementById('eight');
            button_test.click();
            console.log("...and bet placed !");
        }
        else
        {
            console.log("well, cubicle number 8 is not available");
            auto_gamer_simple();
        }
    }
    if(random == 9)
    {
        var editable = true;//this value defnes if this cell can be taken or not, initialized with true
        console.log("can table "+random+" be taken ? "+" "+editable);
        var value = document.getElementById('nine').innerHTML;
        console.log(value);
        if(value == "x" || value == "o")
            var editable = false;
        if(editable == true)
        {
            console.log("cubicle number nine is available");
            var button_test  = document.getElementById('nine');
            button_test.click();
            console.log("...and bet placed !");
        }
        else
        {
            console.log("well, cubicle number 9 is not available");
            auto_gamer_simple();
        }
    }
    if(random == 0)
    {
        //we can not use a 0 as a case and hence we shell roll the die again
        console.log("The outcome was cell numbered zero and since there is no cell by that identity, we take another chance");
        auto_gamer_simple();
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------

//now we need to establish the simple gamer
var gamer_simple_activation = false;//this sees is the player is activated and is set to false
function activate_gamer_simple()
{
    //if this has already been running, we turn it off !
    if(gamer_simple_activation == true)
    {
        console.log('The simple auto player is turned off');
        gamer_simple_activation = false;
        document.getElementById('computer_player').style.display = "none";
        document.getElementById('simple_player_button').innerHTML = "Activate the simple opponent player";
    }
    //first thing, the computer should know that the auto gamer is on and is set to simple
    else
    {
        console.log('The simple auto player is turned on');
        gamer_simple_activation = true;
        document.getElementById('computer_player').style.display = "block";
        document.getElementById('simple_player_button').innerHTML = "Deactivate the simple automated player";
    }
}
//now we need to know whom the user has selected to be the new player, player 1 or player 2
var computer_player = 0;//the default being a null value
play = "no";//this tells if the computer should play or not
function start_simple_player()
{
    //we decide who is playing the game
    console.log(current_player+" is currently playing the game");
    if(current_player == computer_player)
    {
        play = "yes";
        //only when it is turn of the computer, does the computer play
        if(play == "yes")
            auto_gamer_simple();
        play = "no";
    }
    else
    {
        play = "no";
    }
}
function select_opponent_1()
{
    computer_player = 1;
    start_simple_player();
    document.getElementById('player_choice_simple').style.display = "none";
    document.getElementById('gamebox').style.display = "block";
    document.getElementById('utilities').style.display = "none";
    document.getElementById('message').style.display = "block";
}
function select_opponent_2()
{
    computer_player = 2;
    start_simple_player();
    document.getElementById('player_choice_simple').style.display = "none";
    document.getElementById('gamebox').style.display = "block";
    document.getElementById('utilities').style.display = "none";
    document.getElementById('message').style.display = "block";
}
var computer_player_simple = false;//this checks if the user wants the computer to play for simple game at all
function initialize_simple()
{
    if(computer_player_simple == false)
    {
        computer_player_simple = true;
        console.log('the computer as a simple opponent has been activated');
        document.getElementById('simple_player_button').innerHTML = "Dectivate the simple opponent player";
        document.getElementById('player_choice_simple').style.display = "block";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else
    {
        computer_player_simple = false;
        console.log('the computer as a comple opponent has been deactivated');
        document.getElementById('simple_player_button').innerHTML = "Activate the simple automated player";
    }
}
//hence, we have finished writing the code for the simple co-player, where the computer acts as the co-player
//now we need to move on to a more intelligent player for computer










//----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------INTELLIGENT OPPONENT SYSTEM--------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------









//first we prepare a function to find the neighbour of a given block
function find_neighbour(x,y)
{
    //first we declare all the possible neighbours
    var probable_neighbour = new Array(9);
    var neighbour_catalogue = 0;
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            probable_neighbour[neighbour_catalogue] = (i*10)+j;
            neighbour_catalogue++;
        }
    }
    //now we check if this function is working properly
    //console.log("we determine the address of each and every cell");
    var neighbour_catalogue = 0;
    for(var i=0; i<3; i++)
    {
        for(var j=0;j<3;j++)
        {
            //console.log(probable_neighbour[neighbour_catalogue]);
            neighbour_catalogue++;
        }
    }
    //the above segment is working, probable_neighbour contains the address of all the cubicles present

    //now we determine the neighbours of the given cubicle, there can be wight possibilities
    var immediate_blocks = new Array(8);
    immediate_blocks[0] = ((x-1)*10)+y;       //a possible nehibouring address
    immediate_blocks[1] = ((x+1)*10)+y;       //a possible nehibouring address
    immediate_blocks[2] = (x*10)+(y-1);       //a possible nehibouring address
    immediate_blocks[3] = (x*10)+(y+1);       //a possible nehibouring address
    immediate_blocks[4] = ((x-1)*10)+(y-1);   //a possible nehibouring address
    immediate_blocks[5] = ((x+1)*10)+(y+1);   //a possible nehibouring address
    immediate_blocks[6] = ((x-1)*10)+(y+1);   //a possible nehibouring address
    immediate_blocks[7] = ((x+1)*10)+(y-1);   //a possible nehibouring address
    //now we check if this section is working properly
    //console.log("now we determine the possible neighbouring addresses");
    for(var i=0; i<8; i++)
        //console.log(immediate_blocks[i]);
    //the above section is working properly

    //now we check which of the probable cells are actual neighbours
    var actual_neighbours = new Array();
    var neighbour_count = 0;//holds the number of actual neighbours
    for(var i=0;i<9;i++)
    {
        var probable_neighbour_cell = probable_neighbour[i];
        for(var j=0;j<8;j++)
        {
            var immediate_blocks_cell = immediate_blocks[j];
            if(probable_neighbour_cell == immediate_blocks_cell)
            {
                actual_neighbours[neighbour_count] = probable_neighbour_cell;//we use this because it is in a more orderly fashion
                neighbour_count++;
            }
        }
    }
    //now we check the working of the above section
    //console.log("now we check the actual neighbours");
    for(var i=0;i<neighbour_count;i++)
        //console.log(actual_neighbours[i]);
    //the above segment is working alright
    //now we need to return the neighbours
    return actual_neighbours;
}

//now we define a function to see if a cell is taken or empty, and if taken, who took it
function free_check(x,y)
{
    //x and y contain the coordinates of a cell, whose availability is in question
    //console.log('We check the availability of the cell '+x+','+y);
    //console.log(table[x][y] + ' is the value of the entered co-ordinates');
    var cell_name = "";
    if(x==0 && y==0)
        cell_name = "one";
    if(x==0 && y==1)
        cell_name = "two";
    if(x==0 && y==2)
        cell_name = "three";
    if(x==1 && y==0)
        cell_name = "four";
    if(x==1 && y==1)
        cell_name = "five";
    if(x==1 && y==2)
        cell_name = "six";
    if(x==2 && y==0)
        cell_name = "seven";
    if(x==2 && y==1)
        cell_name = "eight";
    if(x==2 && y==2)
        cell_name = "nine";
    //console.log('We are dealing with the cell number '+cell_name);
    if(document.getElementById(cell_name) != null)//***this is an important and controversial makeshift logic
    {
        var value = document.getElementById(cell_name).innerHTML;
    }
    else
    {
        var value = "not available";
    }
    //console.log(value+' is the entry in that specific cell');
    var status = "";
    if(value == "v")
    {
        status = "free";
        //console.log('It falls under the '+status+' domain');
    }
    if(value == "x")
    {
        status = "Player1";
        //console.log('It falls under the '+status+' domain');
    }
    if(value == "o")
    {
        status = "Player2";
        //console.log('It falls under the '+status+' domain');
    }
    //now we return the status of the player
    return status;
}

//now we make a function to check the probable pattern between two adjacent points and we need to suggest a feasible third number
function pattern_finder(x,y)
{
    //x and y are two numbers representing two cells
    var x_value_1 = Math.floor(x/10);
    var y_value_1 = x%10;
    var x_value_2 = Math.floor(y/10);
    var y_value_2 = y%10;
    //now we check if the information is properly extracted or not
    //console.log('One cell is at '+x_value_1+','+y_value_1);
    //console.log('Another cell is at '+x_value_2+','+y_value_2);
    //the above defined piece of code is working correcctly
    //now we need to find the pattern for x and y
    var x_trend = x_value_1 - x_value_2 ;
    var y_trend = y_value_1 - y_value_2 ;
    //console.log("The trend being "+x_trend+","+y_trend);
    //now we check which should have been the third number(s) according to the entry
    var option_1 = ((x_value_1 + x_trend)*10)+(y_value_1 + y_trend);
    var option_2 = ((x_value_2 - x_trend)*10)+(y_value_2 - y_trend);
    //console.log("The options are "+option_1+" and "+option_2+" to make a patern complete");

    //only one address can be possible to complete the pattern
    var possibility = "none";
    //we start with the fist option which needs to be a neighbour of x_value_1,y_value_1
    //console.log("We start by checking the position of "+x_value_1+","+y_value_1);
    var cell_neighbours = find_neighbour(x_value_1,y_value_1);
    var number_of_neighbours = cell_neighbours.length;
    //console.log('The cell addressed '+x_value_1+','+y_value_1+' has '+number_of_neighbours+' neighbours valued as:');
    //console.log(cell_neighbours);
    for(var i=0;i<number_of_neighbours;i++)
    {
        var current_neighbour = cell_neighbours[i];
        if( current_neighbour == option_1)
        {
            possibility = current_neighbour;
            //console.log(option_1+' is a possible solution to make the pattern');
            break;
        }
        else
        {
            //console.log(current_neighbour+' is invalid in this case');
            //console.log('the target was '+option_1);
        }
    }
    //we start with the second option which needs to be a neighbour of x_value_2,y_value_2 -  it is only if the first bore no possibility
    if(possibility != "none")
    {
        //console.log("We now check the position of "+x_value_2+","+y_value_2);
        var cell_neighbours = find_neighbour(x_value_2,y_value_2);
        var number_of_neighbours = cell_neighbours.length;
        //console.log('The cell addressed '+x_value_2+','+y_value_2+' has '+number_of_neighbours+' neighbours valued as:');
        //console.log(cell_neighbours);
        for(var i=0;i<number_of_neighbours;i++)
        {
            var current_neighbour = cell_neighbours[i];
            if( current_neighbour == option_2)
            {
                possibility = current_neighbour;
                //console.log(option_2+' is a possible solution to make the pattern');
                break;
            }
            else
            {
                //console.log(current_neighbour+' is invalid in this case');
                //console.log('the target was '+current_neighbour);
            }
        }
    }
    //console.log(possibility+' is the possible solution to the problem to make a pattern');
    return possibility;
}
//thus we can now determine a suitable position for a bet. so we will dive into the foreseeing algorithm now

//this decides which cell to bet upon when we have only one cell chosen of a whole pattern
function foresight_2(x)
{
    //we check the scores of all the cells based on one single cell entered

    //x is the number representing the cell
    //console.log(x+" is the target");
    var x_value = Math.floor(x/10);
    var y_value = x%10;
    //first we check all the neighbours of the cel in question
    var neighbours = find_neighbour(x_value,y_value);
    //console.log(neighbours);
    //console.log('are the cells neighbouring '+x_value+','+y_value);
    var number_of_neighbours = neighbours.length;
    //console.log('the cell has '+number_of_neighbours+' neighbours and now we will check their availability');

    var free_neighbours = new Array(8);
    var number_free = 0;
    var taken_by_self = new Array(8);
    var number_self = 0;

    for(var i=0;i<number_of_neighbours;i++)
    {
        var current_neighbour = neighbours[i];
        var x_value_current_neighbour = Math.floor(current_neighbour/10);
        var y_value_current_neighbour = current_neighbour%10;
        var availability = free_check(x_value_current_neighbour,y_value_current_neighbour);
        //console.log(x_value_current_neighbour+','+y_value_current_neighbour+' is under the domain of '+availability);
        if(availability == "free")
        {
            free_neighbours[number_free] = current_neighbour;
            number_free++;
        }
        if(availability == self)
        {
            taken_by_self[number_self] = current_neighbour;
            number_self++;
        }
    }
    //now we print the constituents of the two arrays used
    //console.log("The following neighbours are free");
    //console.log(free_neighbours);
    //console.log("The following neighbours are taken by self");
    //console.log(taken_by_self);

    var possibilities = new Array();
    var possibilities_count = 0;

    var main_cell_value = x;
    //console.log("Now we embark upn the quest to find a suitable pattern branching from "+main_cell_value);
    if(number_self>0)
    {
        //now we need to identify the couples who can indeed make patterns
        for(var i=0;i<number_self;i++)
        {
            var target_cell_value = taken_by_self[i];
            //console.log("checking "+main_cell_value+" with "+target_cell_value);
            var finishing_cell = pattern_finder(main_cell_value,target_cell_value);
            //console.log(finishing_cell+" could have finished the pattern");
            //now we need to check if the cell is filled up
            var finishing_cell_x = Math.floor(finishing_cell/10);
            var finishing_cell_y = finishing_cell%10;
            var status = free_check(finishing_cell_x,finishing_cell_y);
            if(status == "free")
            {
                //console.log("and "+finishing_cell_x+","+finishing_cell_y+" is free");
                //we store the possibility in an array
                possibilities[possibilities_count] = finishing_cell;
                possibilities_count++;
            }
        }
    }
    else
    {
        //console.log("There is no pattern possible right now");
    }
    //we need to return the finishing cells in the form of an array
    return possibilities;
}

//we here determine which cells are taken by the computer and check the scores for the whole table based on the choices, then add them up
function foresight_1(input)
{
    //the objective of this function to check in advance whether the next step to bet upon if there is only one in a probable pattern
    //we create a dummy table mimicking the actual setup
    var dummy_table = new Array(3);
    var cell_number = 0;
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            dummy_table[cell_number] = " ";//all cells are to be initialized with space so that we can reassign the values as we go along
            cell_number++;
        }
    }
    //first we need data as to which cells are taken by the computer
    var self_taken = new Array();
    var self_taken_count = 0;
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            var current_cell = table[i][j];
            var property_of = "";//this determines the player who has used the current address
            //now we check if the content is of the player taken by computer
            if(current_cell == "x")
            {
                property_of = "Player1";
                //console.log(property_of+" has claimed this and the computer has assumed "+self);
            }
            if(current_cell == "o")
            {
                property_of = "Player2";
                //console.log(property_of+" has claimed this and the computer has assumed "+self);
            }
            //console.log("The cell is "+property_of);
            //if the turn was the computer's, it gets into the array
            if(property_of == self)
            {
                self_taken[self_taken_count] = (i*10)+j;
                self_taken_count++;
            }
            property_of = "";//the value is again reset to null for unbiased determination
        }
    }
    //now we check if the program to store the elements of self is working correctly or not
    //console.log("Following have been claimed by the computer");
    //console.log(self_taken);
    //we mark every cell in the table from 0 to <undefined> where zeroes can not be played upon
    for(var i=0;i<3;i++)
    {
        dummy_table[i] = new Array(3);
        for(var j=0;j<3;j++)
        {
            var current_cell = table[i][j];
            //console.log(current_cell);
            if(current_cell == "x" || current_cell == "o")
            {
                dummy_table[i][j] = 0;
            }
            else
            {
                dummy_table[i][j] = 1;
            }
        }
    }
    //now we check the working of the above defined code in sorting out the places that can not be played upon
    //console.log(dummy_table[0][0]+" | "+dummy_table[0][1]+" | "+dummy_table[0][2]);
    //console.log(dummy_table[1][0]+" | "+dummy_table[1][1]+" | "+dummy_table[1][2]);
    //console.log(dummy_table[2][0]+" | "+dummy_table[2][1]+" | "+dummy_table[2][2]);
    //the above piece of code is working alright
    //now we need to find out the empty neighbours of the table
    //we also need to check the neighbours of the neighbours to check for a pattern-in-making
    for(var i=0;i<self_taken_count;i++)
    {
        var current_cell = self_taken[i];
        x_value = Math.floor(current_cell/10);
        y_value = current_cell%10;
        //console.log("We are checking the prospects of "+x_value+","+y_value);
        var neighbours = find_neighbour(x_value,y_value);
        //console.log(neighbours);
        //console.log("The above neighbours are of "+x_value+","+y_value);
        var neighbour_count = neighbours.length;
        for(var j=0;j<neighbour_count;j++)
        {
            var current_neighbour = neighbours[j];
            var current_neighbour_x = Math.floor(current_neighbour/10);
            var current_neighbour_y = current_neighbour%10;
            var value_current_neighbour = table[current_neighbour_x][current_neighbour_y];
            //console.log(current_neighbour+" as "+current_neighbour_x+","+current_neighbour_y+" has a value of "+value_current_neighbour);
            if(value_current_neighbour != "x" && value_current_neighbour != "o")
            {
                //console.log(current_neighbour+" is free");
                dummy_table[current_neighbour_x][current_neighbour_y]++;
                //now that we have got so far, we go on to check the neighbours of the neighbour
                var neighbours_of_neighbour = find_neighbour(current_neighbour_x,current_neighbour_y);
                //console.log(neighbours_of_neighbour);
                var neighbours_of_neighbour_count = neighbours_of_neighbour.length;
                //console.log("The above "+neighbours_of_neighbour_count+" are the neighbours of the neighbour, "+current_neighbour);
                //console.log("We now check for probable patterns in the future with the neighbours");
                for(var k=0;k<neighbours_of_neighbour_count;k++)
                {
                    var secondary_neighbour = neighbours_of_neighbour[k];
                    //we proceed only if the secondary neighbour is empty
                    var secondary_neighbour_x = Math.floor(secondary_neighbour/10);
                    var secondary_neighbour_y = secondary_neighbour%10;
                    var value_secondary_neighbour = table[secondary_neighbour_x][secondary_neighbour_y];
                    if(value_secondary_neighbour != "x" && value_secondary_neighbour != "o")
                    {
                        //it means the spot in the table is free !
                        var link_cell = pattern_finder(current_neighbour,secondary_neighbour);
                        if(link_cell != "none")
                        {
                            var link_cell_x = Math.floor(link_cell/10);
                            var link_cell_y = link_cell%10;
                            //console.log(link_cell+" could possibly have completed "+current_neighbour+" and "+secondary_neighbour);
                            var value = table[link_cell_x][link_cell_y];
                            //console.log(value+" is the value of "+link_cell);
                            if(value != "x" && value != "o")
                            {
                                //the target site is empty
                                //console.log("The target site is empty");
                                //console.log(current_neighbour+" gets three points");
                                //console.log(secondary_neighbour+" gets two points");
                                //console.log(link_cell+" gets a point");
                                dummy_table[current_neighbour_x][current_neighbour_y]+=3;
                                dummy_table[secondary_neighbour_x][secondary_neighbour_y]+=2;
                                dummy_table[link_cell_x][link_cell_y]++;
                            }
                            else
                            {
                                //console.log("Blocked road");
                                //console.log(current_neighbour+" minus three points");
                                //console.log(secondary_neighbour+" minus two points");
                                //console.log(link_cell+" minus a point");
                                dummy_table[current_neighbour_x][current_neighbour_y]-=3;
                                dummy_table[secondary_neighbour_x][secondary_neighbour_y]-=2;
                                dummy_table[link_cell_x][link_cell_y]--;
                            }
                            if(value == self_sign)
                            {
                                //the target site is already set
                                //console.log("The target site is already set, we just need to fill in the blank")
                                //console.log(current_neighbour+" gets ten points");
                                //console.log(secondary_neighbour+" gets two points");
                                //console.log(link_cell+" gets a point");
                                dummy_table[current_neighbour_x][current_neighbour_y]+=10;
                                dummy_table[secondary_neighbour_x][secondary_neighbour_y]+=2;
                                dummy_table[link_cell_x][link_cell_y]++;
                            }
                        }
                        else
                        {
                            //console.log(current_neighbour+" can not form a pattern with "+secondary_neighbour);
                        }
                    }
                    else
                    {
                        //console.log("neighbour "+secondary_neighbour+" is taken");
                        dummy_table[secondary_neighbour_x][secondary_neighbour_y]--;
                        break;
                    }
                    //console.log(" ");
                    //console.log(" ");
                    //console.log(" ");
                    //console.log(" ");
                }
            }
            else
            {
                //console.log(current_neighbour+" is not free");
            }
        }
    }
    //we mark every cell in the table from 0 to <undefined> where zeroes can not be played upon
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            var current_cell = table[i][j];
            //console.log(current_cell);
            if(current_cell == "x" || current_cell == "o")
            {
                dummy_table[i][j] = 0;
            }
        }
    }
    //console.log("if the dummy gets marked as 0, the cell is taken and can not be selected");
    //console.log("if the dummy table is set to 1, the cell is free and can be selected");
    //console.log("if the dummy table bears a value more than 1, the preference of that cell increases for a bet");
    //now we check the working of the above defined code in sorting out the places that can not be played upon
    //console.log(dummy_table[0][0]+" | "+dummy_table[0][1]+" | "+dummy_table[0][2]);
    //console.log(dummy_table[1][0]+" | "+dummy_table[1][1]+" | "+dummy_table[1][2]);
    //console.log(dummy_table[2][0]+" | "+dummy_table[2][1]+" | "+dummy_table[2][2]);

    //now we need to get the highest number from the table
    var highest_score = 0;
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            var current_score = dummy_table[i][j];
            if(current_score>highest_score)
            {
                highest_score = current_score;
            }
        }
    }
    var top_scorers = new Array();
    var count_top_scorers = 0;
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            var current_score = dummy_table[i][j];
            if(current_score==highest_score)
            {
                top_scorers[count_top_scorers] = (i*10)+j;
                count_top_scorers++;
            }
        }
    }
    if(input == "topper")
        return top_scorers;
    if(input == "dummy")
        return dummy_table;
}
function fillup()
{
    //this aims at filling up the blanks between two cells to complete a pattern
    var dummy_table = foresight_1("dummy");
    //now we check the locations with 3 as their score
    var potential_solve = new Array();
    var potential_solve_count = 0;
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            if(dummy_table[i][j] == 3)
            {
                //we need to enroll it in the array
                potential_solve[potential_solve_count] = (i*10)+j;
                potential_solve_count++;
                //console.log("we got a possible bet");
            }
        }
    }
    var answers = new Array();
    var answers_count = 0;
    if(potential_solve_count>0)
    {
        //console.log(potential_solve);
        //now we go on to see if they are problems at all
        //we can simply check if the problem, when coupled with an already filled cell, lets out a pattern ending choice
        //we need to check if the pattern ending choice is already taken or not
        for(var i=0;i<potential_solve_count;i++)
        {
            var current_possibility = potential_solve[i];
            //we match it with all the filled up cell and then look for a pattern ending cell
            //then we see if the pattern ending cell is filled by the player or it is empty
            for(var j=0;j<3;j++)
            {
                for(var k=0;k<3;k++)
                {
                    var current_element = table[j][k];
                    if(current_element == self_sign)
                    {
                        //these need to be tallied against the possibility
                        var current_address = (j*10)+k;
                        var check = pattern_finder(current_possibility,current_address);
                        var check_x = Math.floor(check/10);
                        var check_y = check%10;
                        var x = free_check(check_x,check_y)
                        if(x == self)
                        {
                            //it is going to be a match
                            //console.log(current_possibility+" IS the answer");
                            //now we need to hold the results in an array
                            answers[answers_count] = current_possibility ;
                            answers_count++;
                        }
                    }
                }
            }
        }
    }
    else
    {
        //there is no value of 3 in the table
        //console.log("no apparent position to fillup a blank");
    }
    //for some reason the answer is getting doubled, but that does not matter
    return answers;
}
function continue_streak()
{
    //this continues two filled cells to get a streak                                                               *
    //***************************************************************************************************************
    //first we need to get a list of all the cells filled by the user in support
    //console.log("We are "+self+" and we play for the sign of "+self_sign);
    //first we need to identify all the spots occupied by the supporting team
    var selected_cells = new Array();
    var selected_cells_counter = 0;
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            var cell_content = table[i][j];
            if(cell_content == self_sign)
            {
                //we need to store it as our supporting team's choice
                var cell_address = (i*10)+j;
                selected_cells[selected_cells_counter] = cell_address;
                selected_cells_counter++;
            }
        }
    }
    //now we print the filled up cells for testing purposes
    //console.log("The following are cells filled up by the player we support");
    for(var i=0;i<selected_cells_counter;i++)
    {
        //console.log(selected_cells[i]);
    }
    //now we look for a probable streak
    var streak_possibility = new Array();
    var streak_possibility_counter = 0;
    for(var i=0;i<selected_cells_counter;i++)
    {
        var matcher_one = selected_cells[i];
        for(var j=0;j<selected_cells_counter;j++)
        {
            var matcher_two = selected_cells[j]
            //we can not allow the same cell to match
            if(matcher_one==matcher_two)
                continue;
            var possibility = pattern_finder(matcher_one,matcher_two)
            //console.log("We are matching "+matcher_one+" with "+matcher_two+" and we got "+possibility+" as a possibility");
            //now we need to check if the target is taken or empty
            var x_coordinate = Math.floor(possibility/10);
            var y_coordinate = possibility%10;
            var status = free_check(x_coordinate,y_coordinate);
            //console.log("We check the status of "+x_coordinate+","+y_coordinate+" and we find that it is "+status);
            //we count it in only if it is free
            if(status == "free")
            {
                //now we add it to the possible solutions
                streak_possibility[streak_possibility_counter] = possibility;
                streak_possibility_counter++;
            }
        }
    }
    //now we display the winning cell(s)
    //console.log("Now we present our winning deals");
    for(var i=0;i<streak_possibility_counter;i++)
    {
        //console.log(streak_possibility[i]);
    }
    //now we return the array containing the winning deals
    return streak_possibility;
    //this is working alright
}
function block_opponent()
{
    var result = 0;//this simply holds the information whether a button has been pressed or not

    //in case the opponent is about to complete a pattern, this program acts to avoid a loss
    //first we need to change the perspective
    var opponent = 0;//this helps in gaining the new perspective
    var computer = 0;//this should help to revert back the identity
    if(self=="Player1")
    {
        opponent = 2;
        computer = 1;
        //console.log("The computer is "+computer+" but now, it thinks on behalf of "+opponent);
    }
    else
    {
        opponent = 1;
        computer = 2;
        //console.log("The computer is "+computer+" but now, it thinks on behalf of "+opponent);
    }
    assignment(opponent);
    //now we proceed upon an action to stop the immediate
    //we need to store the possibilities within an array
    var problems = new Array();
    var problems_count = 0;
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            //console.log("We are now dealing with "+i+","+j);
            var status = free_check(i,j);
            if(status == self)
            {
                //this means this has been claimed by the opponent
                var input = (i*10)+j;
                var possibilities = foresight_2(input);
                var possibilities_count = possibilities.length;
                if(possibilities_count>0)
                {
                    //this means there is a pattern to form
                    //this set is stored within the main array
                    for(var k=0;k<possibilities_count;k++)
                    {
                        problems[problems_count] = possibilities[k];
                        problems_count++;
                    }
                }
            }
        }
    }
    //console.log(problems+" pose a threat");
    //we proceed to neutralize the threat
    if(problems_count>0)
    {
        for(var i=1;i>0;i++)
        {
            var random = Math.random();
            random = Math.floor(random*10);
            //console.log("The random value is "+random);
            var current_possibility = problems[random];
            //console.log(current_possibility+" is the value we get");
            if(current_possibility != undefined)
            {
                //console.log("This value is very feasible indeed !");
                //now we place the bet
                assignment(computer);//we re-set the computer's identity
                button_press(current_possibility);
                result = 1;
                //console.log("We place the bet !");
                break;
            }
        }
    }
    //this is working

    //now, we need to check the fill-in wins
    //it can be verefied that for filling up a blank, the foresight_1() inevitably returns a value of 3
    if(problems_count==0)
    {
        //console.log("no direct pattern can be played by the opponent");
        //we check if any pattern can be formed by filling up a blank
        var secondary_possibilities = fillup();
        var secondary_possibilities_count = secondary_possibilities.length;
        if(secondary_possibilities_count > 0)
        {
            //console.log(secondary_possibilities);
            //console.log("the above are the possibilities to fill up the blanks");  
        for(var i=1;i>0;i++)
        {
            var random = Math.random();
            random = Math.floor(random*10);
            //console.log("The random value is "+random);
            var current_possibility = secondary_possibilities[random];
            //console.log(current_possibility+" is the value we get");
            if(current_possibility != undefined)
            {
                //console.log("This value is very feasible indeed !");
                //now we place the bet
                assignment(computer);//we re-set the computer's identity
                button_press(current_possibility);
                result = 1;
                //console.log("We place the bet !");
                break;
            }
        }
        }
    }
    //the above piece of code is working alright

    //now computer needs to assume it's own identity
    assignment(computer);
    //console.log("The identity has beem made alright, it is of "+computer);

    //now we need to return the value stored in result
    return result;
}
function button_press(x)
{
    //this is intented to make the button x,y pressed

    //first we need to decipher the name of the button based on the co-ordinates
    var x_value = Math.floor(x/10);
    var y_value = x%10;

    var identity = "";//this is supposed to keep in store the identity of the button

    //now we need to locate the button
    if(x_value == 0 && y_value == 0)
        identity = "one";
    if(x_value == 0 && y_value == 1)
        identity = "two";
    if(x_value == 0 && y_value == 2)
        identity = "three";
    if(x_value == 1 && y_value == 0)
        identity = "four";
    if(x_value == 1 && y_value == 1)
        identity = "five";
    if(x_value == 1 && y_value == 2)
        identity = "six";
    if(x_value == 2 && y_value == 0)
        identity = "seven";
    if(x_value == 2 && y_value == 1)
        identity = "eight";
    if(x_value == 2 && y_value == 2)
        identity = "nine";
    var button_target  = document.getElementById(identity);
    button_target.click();
}
function assignment(x)
{
    //this assigns the computer as player 1 or player 2
    if(x == 1)
    {
        self = "Player1";
        self_sign = "x";
    }
    if(x == 2)
    {
        self = "Player2";
        self_sign = "o";
    }
    if(x == "none")
        self = "none";
}
function complex_gamer(x)
{
    console.log("The complex gaming mechanism takes on from now on ------------------------------------");
    var self = "";//this assigns a player to the computer as Player1 Player2, initiated with null value
    var self_sign = "";//this holds the symbol the computer is playing for
    assignment(x);
    //this not only symbolizes if the computer has been activated as Player1 or Player2 but also tells if it has been activated at all

    if(assignment!="none")
    {
        //here is the code for the gamer

        //first we use the primary function to complete a pattern, if any
        //we need to check for all slots filled up by computer and then we need to run the program along those

        //we need to store the options in an array so as to choose a random from
        var options_primary = new Array();
        var options_primary_count = 0;
        for(var i=0; i<3;i++)
        {
            for(var j=0;j<3;j++)
            {
                var value = table[i][j];
                if(value == self_sign)
                {
                    var address = (i*10)+j;
                    console.log("We are looking for possibilities regarding "+address);
                    var primary_check = foresight_2(address);
                    var primary_check_count = primary_check.length;
                    console.log(primary_check);
                    if(primary_check_count>0)//to check if the value is a null
                    {
                        for(var k=0;k<primary_check_count;k++)
                        {
                            var current_element = primary_check[k];
                            options_primary[options_primary_count] = current_element;
                            options_primary_count++;
                        }
                    }
                }
            }
        }
        console.log(options_primary);
        for(var i=0;i<options_primary_count;i++)
            console.log(options_primary[i]);
        console.log("is/are the possible option(s)");
        //the above piece of code is working alright

        //now we check if there can be made any streaks for a score
        //we shall store the count of such possibilities as options_secondary_count
        //we need to call the function continue_streak()
        var continue_streak_points = continue_streak();
        var continue_streak_points_count = continue_streak_points.length;

        //if we find suitable targets we should press the button, if not, we go on to the next step
        if(options_primary_count>0 || continue_streak_points_count>0)
        {
            //this section attempts for fill-in-the-blank
            if(options_primary_count>0)
            {
                console.log("there is a possibility of one win by filling up the blank");
                //we drive an infinite loop here obtaining random numbers and it shall be broken when one number can get selected
                for(var i=1;i>0;i++)
                {
                    var random = Math.random();
                    random = Math.floor(random*10);
                    console.log("The random value is "+random);
                    var current_possibility = options_primary[random];
                    console.log(current_possibility+" is the value we get");
                    if(current_possibility != undefined)
                    {
                        console.log("This value is very feasible indeed !");
                        //now we place the bet
                        button_press(current_possibility);
                        console.log("We place the bet !");
                        break;
                    }
                }
            }
            //this section attempts for extension for a streak
            if(continue_streak_points_count>0)
            {
                console.log("there is a possibility of one win by extending into a streak");
                //we drive an infinite loop here obtaining random numbers and it shall be broken when one number can get selected
                for(var i=1;i>0;i++)
                {
                    var random = Math.random();
                    random = Math.floor(random*10);
                    console.log("The random value is "+random);
                    var current_possibility = continue_streak_points[random];
                    console.log(current_possibility+" is the value we get");
                    if(current_possibility != undefined)
                    {
                        console.log("This value is very feasible indeed !");
                        //now we place the bet
                        button_press(current_possibility);
                        console.log("We place the bet !");
                        break;
                    }
                }
            }
        }
        else
        {
            //first we need to know if there is any point that can be filled up to get a victory
            var fill_up_points = fillup();
            var fill_up_points_count = fill_up_points.length;
            if(fill_up_points_count > 0)
            {
                for(var i=1;i>0;i++)
                {
                    var random = Math.random();
                    random = Math.floor(random*10);
                    if(fill_up_points[random] != undefined)
                    {
                        //we place the bet
                        var cell = fill_up_points[random];
                        button_press(cell);
                        break;
                    }
                }
            }
            //the above piece only links two dots by placing another on the center
            //now we need to design a part where the going streak shall be extented
            else
            {
                //now we go on to block the opponent
                var check = block_opponent();
                //now we need to check if a button has been
                if(check == 0)//it means that no action has yet been taken
                {
                    //we check if the whole board is empty or not, if empty, we need to target the central cell
                    console.log("We now check if the board is empty");
                    var flag = "empty";
                    {
                        var dummy_table = foresight_1("dummy");
                        for(var i=0;i<3;i++)
                        {
                            for(var j=0;j<3;j++)
                            {
                                var current_value = dummy_table[i][j];
                                if(current_value != 1)
                                {
                                    //it means that the table is not all empty
                                    flag = "not empty";
                                }
                            }
                        }
                    }
                    if(flag == "empty")
                    {
                        console.log("The whole board is empty, we choose the central button in this case");
                        //we need to press the central button
                        button_press(11);
                    }
                    else
                    {
                        //now we call in the big function to play according to chances
                        console.log("We call in the big function");
                        var last_choices = foresight_1("topper");
                        console.log(last_choices);
                        var last_choices_count = last_choices.length;
                        for(var i=1;i>0;i++)
                        {
                            var random = Math.random();
                            random = Math.floor(random*10);
                            console.log(random);
                            if(last_choices[random] != undefined)
                            {
                                var current_element = last_choices[random];
                                console.log(current_element);
                                button_press(current_element);
                                break;
                            }
                        }
                    }    
                }
            }
            console.log("The complex gaming mechanism is called off over here");
            //this is ready
        }
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------

//now we need to make provisions for accessing the complex gamer
var computer_player_complex = 0;

computer_player_complex = false;//we initialize the variable with a false value
function initialize_complex()
{
    if(computer_player_complex == false)
    {
        computer_player_complex = true;
        console.log('the computer as a complex opponent has been activated');
        document.getElementById('complex_player_button').innerHTML = "Dectivate the complex opponent player";
        document.getElementById('player_choice_complex').style.display = "block";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else
    {
        computer_player_complex = false;
        console.log('the computer as a comple opponent has been deactivated');
        document.getElementById('complex_player_button').innerHTML = "Activate the simple automated player";
        document.getElementById('gamebox').style.display = "block";
        document.getElementById('utilities').style.display = "none";
        document.getElementById('message').style.display = "block";
        computer_player_complex = 0;
    }
}
function select_opponent_1_complex()
{
    computer_player_complex = 1;
    start_complex_player();
}
function select_opponent_2_complex()
{
    computer_player_complex = 2;
    start_complex_player();
}
function start_complex_player()
{
    console.log("The computer has assumed the identity of Player"+computer_player_complex);
    document.getElementById('player_choice_complex').style.display = "none";
    document.getElementById('gamebox').style.display = "block";
    document.getElementById('utilities').style.display = "none";
    document.getElementById('message').style.display = "block";
    call_complex_player();
}
function call_complex_player()
{
    console.log("The complex player has been called");
    console.log("the status of variable computer_player_complex is "+computer_player_complex);
    if(computer_player_complex != 0)
    {
        console.log("This is computer_player_complex "+computer_player_complex+" and this is current_player "+current_player);
        if(computer_player_complex == current_player)
        {
            complex_gamer(computer_player_complex);
        }
    }
}