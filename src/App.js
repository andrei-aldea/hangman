import { useState } from 'react'
import Drawing from './components/Drawing'
import Keyboard from './components/Keyboard'
import Word from './components/Word'
import words from './words.json'

function App() {
	const [wordToGuess, setWordToGuess] = useState(
		() => words[Math.floor(Math.random() * words.length)]
	)
	const [guessedLetters, setGuessedLetters] = useState([])

	console.log(wordToGuess)

	return (
		<div className='container mx-auto flex flex-col items-center gap-8'>
			<div className='text-center text-4xl'>Lose Win</div>
			<Drawing />
			<Word />
			<Keyboard />
		</div>
	)
}

export default App
