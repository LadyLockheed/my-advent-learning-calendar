import { useState } from 'react';
import styles from './app.module.scss';
import Calendar from './components/Calendar';
import Modal from './components/Modal';
import StatusPanel from './components/StatusPanel';
import { type Door } from './types/door';
import { initializeDoorsArray } from './utils/initializeDoorsArray';

function App() {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

	const [calendarDoors, setCalendarDoors] = useState<Door[]>(
		initializeDoorsArray()
	);

	return (
		<div className={styles.mainWrapper}>
			<StatusPanel />
			<Calendar
				setModalIsOpen={setModalIsOpen}
				calendarDoors={calendarDoors}
				setCalendarDoors={setCalendarDoors}
			/>
			<Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} url={'url'} />
		</div>
	);
}

export default App;
