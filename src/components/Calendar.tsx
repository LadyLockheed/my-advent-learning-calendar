import { Dispatch, SetStateAction, useState } from 'react';
import styles from './calendar.module.scss';
import Door from './Door';
import { type Door as DoorType } from '../types/door';
import { initializeDoorsArray } from './utils/initializeDoorsArray';

interface CalendarProps {
	setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Calendar = (props: CalendarProps) => {
	const { setModalIsOpen } = props;

	const [calendarDoors, setCalendarDoors] = useState<DoorType[]>(
		initializeDoorsArray()
	);

	const toggleDoorOpenStatus = (
		targetDoorNumber: number,
		isOpenCurrentStatus: boolean
	) => {
		const newDoorsArray = calendarDoors.map((door) => {
			if (door.doorNumber === targetDoorNumber) {
				return { ...door, isOpen: !isOpenCurrentStatus };
			}
			return door;
		});

		setCalendarDoors(newDoorsArray);
		localStorage.setItem('doorsArray', JSON.stringify(newDoorsArray));
	};

	return (
		<div className={styles.calendar}>
			{calendarDoors.map(({ isOpen, isUnlocked, doorNumber }, index) => {
				return (
					<Door
						key={index}
						isDoorOpen={isOpen}
						toggleOpen={toggleDoorOpenStatus}
						isUnlocked={isUnlocked}
						doorNumber={doorNumber}
						setModalIsOpen={setModalIsOpen}
					/>
				);
			})}
		</div>
	);
};
export default Calendar;
