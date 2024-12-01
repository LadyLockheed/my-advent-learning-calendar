import { useEffect, useState } from 'react';
import styles from './app.module.scss';
import Calendar from './components/Calendar';
import Modal from './components/Modal';
import StatusPanel from './components/StatusPanel';
import { type Door } from './types/door';
import { type CalendarUrl } from './types/calendarUrl';
import { initializeDoorsArray } from './utils/initializeDoorsArray';
import { initializeUrlsArray } from './utils/initializeUrlsArray';

function App() {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [calendarDoors, setCalendarDoors] = useState<Door[]>(
		initializeDoorsArray()
	);
	const [calendarUrls, setCalendarUrls] = useState<CalendarUrl[]>(
		initializeUrlsArray()
	);
	const [selectedDoor, setSelectedDoor] = useState<number | null>(null);
	const [currentUrl, setCurrentUrl] = useState<string>('');

	useEffect(() => {
		const pickRandomUnassignedUrl = (): [number, string] => {
			const unAssignedUrls = calendarUrls.filter(
				(url) => url.assignedDoor === null
			);

			// if (unAssignedUrls.length === 0) {
			// 	return null
			// }
			const randomIndex = Math.floor(Math.random() * unAssignedUrls.length);
			const randomUrl = unAssignedUrls[randomIndex].url;

			return [randomIndex, randomUrl];
		};

		const updateCalendarUrlsArray = (
			selectedDoor: number,
			randomIndex: number
		) => {
			const newCalendarUrlArray = calendarUrls.map((url, index) => {
				if (index === randomIndex) {
					return { ...url, assignedDoor: selectedDoor };
				}

				return url;
			});

			localStorage.setItem('urlsArray', JSON.stringify(newCalendarUrlArray));
			setCalendarUrls(newCalendarUrlArray);
		};

		const getUrl = (selectedDoor: number): string => {
			//Find the url with assigned door same as selectedDoor
			const relatedUrlObject = calendarUrls.find(
				(url) => url.assignedDoor === selectedDoor
			);

			//If url has assignedDoor, return url related to that door
			if (relatedUrlObject) {
				return relatedUrlObject.url;
			}
			//If no assginedDoor, random pick url, assign the current door, return url
			else {
				const [randomIndex, randomUrl] = pickRandomUnassignedUrl();
				updateCalendarUrlsArray(selectedDoor, randomIndex);
				return randomUrl;
			}
		};
		if (selectedDoor !== null) {
			setCurrentUrl(getUrl(selectedDoor));
		}
	}, [selectedDoor, calendarUrls]);

	console.log(currentUrl);

	return (
		<div className={styles.mainWrapper}>
			<StatusPanel />
			<Calendar
				setModalIsOpen={setModalIsOpen}
				calendarDoors={calendarDoors}
				setCalendarDoors={setCalendarDoors}
				setSelectedDoor={setSelectedDoor}
			/>
			<Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} url={currentUrl} />
		</div>
	);
}

export default App;
