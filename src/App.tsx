import { useEffect, useState } from 'react';
import styles from './app.module.scss';
import Calendar from './components/Calendar';
import Modal from './components/Modal';
import StatusPanel from './components/StatusPanel';
import { type Door } from './types/door';
import { type AdventUrl } from './types/adventUrl';
import { initializeDoorsArray } from './utils/initializeDoorsArray';
import { initializeUrlsArray } from './utils/initializeUrlsArray';
import { getUrl } from './utils/urlUtils';

function App() {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [calendarDoors, setCalendarDoors] = useState<Door[]>(
		initializeDoorsArray()
	);
	const [calendarUrls, setCalendarUrls] = useState<AdventUrl[]>(
		initializeUrlsArray()
	);
	const [selectedDoor, setSelectedDoor] = useState<number | null>(null);
	const [currentUrl, setCurrentUrl] = useState<string>('');

	useEffect(() => {
		if (selectedDoor !== null) {
			setCurrentUrl(getUrl(selectedDoor, calendarUrls, setCalendarUrls));
		}
	}, [selectedDoor, calendarUrls]);

	return (
		<div className={styles.mainWrapper}>
			<StatusPanel calendarDoors={calendarDoors} />
			<Calendar
				setModalIsOpen={setModalIsOpen}
				modalIsOpen={modalIsOpen}
				calendarDoors={calendarDoors}
				setCalendarDoors={setCalendarDoors}
				setSelectedDoor={setSelectedDoor}
				selectedDoor={selectedDoor}
			/>
			<Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} url={currentUrl} />
		</div>
	);
}

export default App;
