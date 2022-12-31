import './App.css'
import {useState} from 'react'

function App() {
	const [showEvents, setShowEvents] = useState(true)
	const [events, setEvents] = useState([
		{title: "mario's birthday bash", id: 1},
		{title: "bowser's live stream", id: 2},
		{title: 'race on moo moo farm', id: 3},
	])

	const handleClick = id => {
		setEvents(prevEvents => {
			return prevEvents.filter(event => event.id !== id)
		})
	}

	return (
		<div className="App">
			{showEvents && (
				<div>
					<button onClick={() => setShowEvents(false)}>hide events</button>
				</div>
			)}
			{!showEvents && (
				<div>
					<button onClick={() => setShowEvents(true)}>show events</button>
				</div>
			)}
			{showEvents &&
				events.map((event, index) => (
					<div key={event.id}>
						<h2>
							{index} - {event.title}
							<button onClick={() => handleClick(event.id)}>
								delete event
							</button>
						</h2>
					</div>
				))}
		</div>
	)
}

export default App
