[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic Tac Toe Link

https://sinyru.github.io/tic-tac-toe/

-  Seconds to play
-  Minutes to learn
-  Forever to make!

## Technologies Used

-   Javascript
-   Ajax
-   jQuery
-   html
-   css
-   bootstrap
-   node
-   bash shell


## Plannings/Modeling

1.  Create Game engine
1.  html/css for basic setup of the game board
1.  jQuery to make interaction with html
1.  ajax to interact with server for game action apis
1.  css for page decoration.
1.  jQuery to hide/show certain html elements on clicks.

## Development Process

My development process kicks off at creating the logic for the game engine.
First, I list out all the necessary functions/variables needed in order for the
game engine to work. Then, I work out each function/variables one by one and
test them on the node console. Please see below for the function/variables order
I created them in:

1.  Variable - array for the board
1.  Function - checks if either side wins
1.  Variable - string for player x (assumming x goes first)
1.  Function - changes turn when player x inputs to board
1.  Function - adds x/o to the board (so the user can actually play)
1.  Function - resets the board array for new game.

The next step to the process is to create the board in the browser and enable
testing. So I used both html and css to create a 3x3 grid box for the game. Not
much css has been implemented or needed at this point as I only need the 3x3 for
testing now.

With the 3x3 grid created, I can now access html with jQuery. I went back into
the previously created functions and implemented jQuery inside them so that the
DOM will change accordingly when the javascript function executes.

The game now is playable in the browser. However, I still need to upload data
to the server to store user credentials and statistics. So I implemented ajax
for game actions such as sign-up, sign-in, change-password, sign-out, and
history log of user.

The last step to my process is to decorate the webpage and make it user friendly.







## Unsolved Problems!!!

-   Still don't know how to work with api through ajax.
-   Must seperate the file for better organization.
-   Enabling 2 users logging/playing at the same time
-   Able to switch player and uploads to server.
-   Enabling the feature to see all previous games in the browser.


## Links to Wireframe and User Stories

http://imgur.com/XBdhs9h

- As a user, I want the game to be playable.
- As a user, I want the page to look good.
- As a user, I want to see how many games I played.
- As a user, I want to see if I winned or not.
- As a user, I want to keep my game statistics.
- As a user, I want no one else to log into my account.



## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
