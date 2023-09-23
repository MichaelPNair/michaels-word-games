# Michael's Word Games

This is a single page application done in HTML, CSS and Javascript with React and express. This utilizes the MangaDex API and RAWG API to let users play various games that fetch data from MangaDex such as manga titles, authors, artists and cover art or data from RAWG such as game title, release date, platforms and art.

## Technologies used

* HTML, CSS, JavaScript, Express, React, axios
* RAWG API
* MangaDex API
* Dotenv
* Git

## Features

* Game Word Guesser: Play a Wordle like game where you guess the mystery 5 letter word. If you correctly guess the word or give up, you will be shown details of a video game that has that word.
* Manga Wordle: Play a Wordle like game where you guess the mystery 5 letter word. If you correctly guess the word or give up, you will be shown details of a manga that has that word.
* Guess the Manga: You will have to guess a mystery manga by typing in its title. If you get it wrong, you will see what details of the manga you typed match the mystery manga.


## About me

- Michael Nair [GitHub Profile](https://github.com/MichaelPNair)

## Getting Started

At the start, you can choose to play the Game Word Guesser or Manga Wordle or Guess The Manga. You can also log in or create an account at the top of the screen at any time.

### Game Word Guesser

In Game Word Guesser, you have to guess a mystery 5 letter word that has appeared in a game title. After you make a guess, it will be revealed how close your guess is to the mystery word. Green letters denote correct letter and correct position and yellow letters denote correct letter but wrong position.

Once you guess the word or you choose to give up, you will be shown details about a game related to the mystery word.

Selecting a new game will give you a new word from a random pool to guess.

You can also select a specific game word from the dropdown.

There is no limit on the number of guesses you can try.

### Mangdle

In Mangdle, you have to guess a mystery 5 letter word that has appeared in a manga title. After you make a guess, it will be revealed how close your guess is to the mystery word. Green letters denote correct letter and correct position and yellow letters denote correct letter but wrong position.

Once you guess the word or you choose to give up, you will be shown details about a manga related to the mystery word.

Selecting a new game will give you a new word from a random pool to guess.

You can also select a specific manga word from the dropdown.

There is no limit on the number of guesses you can try.

### Guess The Manga

In Guess The Manga, you will have to guess a mystery manga. As you type a title in the input box, you will be shown suggestion for a matching manga title. Selecting a manga will then allow you to submit a guess.

After submitting a guess, you will be shown whether your guess matches on the categories of Title, Authors, Artists, Demographic, Status, Publication Year, Genres or Themes. For categories with multiple values possible, you will be shown if you have a partial match. Complete matches are green, failed matches are red and partial matches are yellow with the specific items showing as green or red for matches or non matches respectively.

You can also click the button to show hint any any time to reveal the author of the manga.

Once you guess the manga or you choose to give up, you will be shown details about the manga.

Selecting a new game will give you a new word from a random pool to guess.

There is no limit on the number of guesses you can try.




## Screenshots
### Initial Screen
![Screenshot of initial screen](/Screenshots/InitialScreen.png)

### Manga Wordle Initial Screen
![Screenshot of initial screen for Game Word Guesser](/Screenshots/GameWordleInitial.png)

### Game Word Guesser In Progress
![Screenshot of Game Word Guesser in progress](/Screenshots/GameWordleExample.png)

### Game Word Guesser Victory Screen
![Screenshot of Manga Wordle Victory screen](/Screenshots/GameWordleVictory.png)

### Game Word Guesser Defeat Screen
![Screenshot of Manga Wordle Defeat screen](/Screenshots/GameWordleGiveUp.png)

### Manga Wordle Initial Screen
![Screenshot of initial screen for Manga Wordle](/Screenshots/MangaWordleInitial.png)

### Manga Wordle In Progress
![Screenshot of Manga Wordle in progress](/Screenshots/MangaWordleProgress.png)

### Manga Wordle Victory Screen
![Screenshot of Manga Wordle Victory screen](/Screenshots/MangaWordleVictory.png)

### Manga Wordle Defeat Screen
![Screenshot of Manga Wordle Defeat screen](/Screenshots/MangaWordleGiveUp.png)

### Guess the Manga Initial Screen
![Screenshot of Guess The Manga initial screen](/Screenshots/GuessTheMangaInitial.png)

### Guess the Manga Search for Manga Titles
![Screenshot of searching for Manga titles in Guess The Manga](/Screenshots/GuessTheMangaSearch.png)

### Guess the Manga with guess
![Screenshot of Guess the Manga with 1 guess](/Screenshots/GuessTheMangaGuess.png)

### Guess the Manga with hint revealed
![Screenshot of Guess the Manga with hint revealed](/Screenshots/GuessTheMangaHint.png)

### Guess the Manga Victory Screen
![Screenshot of Guess the Manga Victory screen](/Screenshots/GuessTheMangaVictory.png)

### Guess the Manga Defeat Screen
![Screenshot of Guess the Manga Defeat screen](/Screenshots/GuessTheMangaGiveUp.png)



## Future Improvements

* Improve style of webpage
* Move Wordle answers and color validation to a server to prevent it being visible in browser dev tools
* Make games more colour blind friendly (eg. patterns instead of colours to indicate match)
* Change home page buttons to pictures of the games
* Add donate page
* Add ability to make players wait a day for the next game
