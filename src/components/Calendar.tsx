import { Dispatch, SetStateAction } from 'react';
import styles from './calendar.module.scss';
import Door from './Door';
import { type Door as DoorType } from '../types/door';

interface CalendarProps {
	setModalIsOpen: Dispatch<SetStateAction<boolean>>;
	calendarDoors: DoorType[];
	setCalendarDoors: Dispatch<SetStateAction<DoorType[]>>;
}

const Calendar = (props: CalendarProps) => {
	const { setModalIsOpen, calendarDoors, setCalendarDoors } = props;

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
