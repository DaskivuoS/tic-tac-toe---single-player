# tic-tac-toe---single-player playgame-tic-tac-toe.great-site.net
this is a single-device tic-tac-toe game powered by javascript, it has provisions to use the computer as an opponent in two modes - one where the computer randomly chooses the cells and another where it intellectually analyzes the board before selecting a cell
18-5-2021--3.28PM: sixteen hours ago this was different, smaller, without the option to make the computer play against itself. It was when the program was uploaded.
                   now it has the option to use computer as a partner- in a simple rnadom manner or in a thoughtful complex manner. besides, updated, it can also make th ecomputer play against itself to let us observe the thinking process of the machine
           3.41PM: the problem of the constricting rows and columns whhen it gets filled is fixed in this update. it was happening, quite predictable though, because the cells were initialized with the word tictactoe, which gets changed to x or o. now it gets initialized with v instead, so the alphabet count remains the same
25-07-2021--6.46PM: the earlier version had a problem with the complex player because it could not comprehend the third addition to a set of two consecutive selections though it could fill up the space between two non-consecutive choices. This is an update with the necessary reformation
25-07-2021--11:52PM: the winning cells now highlight themselves
30-07-2021--08.02PM: the winning streaks, being highlighted, used to remain highlighted even when a refresh is requested. This was because the background color was not getting rectified. Now this has been fixed. There is a full refresh on pressing the refresh button. A simple addition of code in the refresh function of logic.js
01-08-2021--08:57PM: there used to be a problem with the system, specifically with the use of the refresh button that it, though retained the computer player activated, did not proceed on to it's turn. Also the refresh inevitably brought the status to starting with turn of second player. This has been changed, that the refresh always
                     brings the turn to the player 1
                     deactivates any player activated
                     clears the console
