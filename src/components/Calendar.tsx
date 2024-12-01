import { Dispatch, SetStateAction } from 'react';
import styles from './calendar.module.scss';
import Door from './Door';
import { type Door as DoorType } from '../types/door';

interface CalendarProps {
	setModalIsOpen: Dispatch<SetStateAction<boolean>>;
	calendarDoors: DoorType[];
	setCalendarDoors: Dispatch<SetStateAction<DoorType[]>>;
	setSelectedDoor: Dispatch<SetStateAction<number | null>>;
}

const Calendar = (props: CalendarProps) => {
	const { setModalIsOpen, calendarDoors, setCalendarDoors, setSelectedDoor } =
		props;

	//TODO Should this be moved to Door component?
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
						setSelectedDoor={setSelectedDoor}
					/>
				);
			})}
		</div>
	);
};
export default Calendar;
