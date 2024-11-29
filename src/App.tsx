import { useState } from 'react';
import styles from './app.module.scss';
import Calendar from './components/Calendar';
import Modal from './components/Modal';
import StatusPanel from './components/StatusPanel';
import { calendarData } from './data/calendarData';
import { type Door as DoorType } from './types/door';
import { initializeDoorsArray } from './utils/initializeDoorsArray';

function App() {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	console.log(calendarData);

	const [calendarDoors, setCalendarDoors] = useState<DoorType[]>(
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
