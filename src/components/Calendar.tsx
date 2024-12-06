import { Dispatch, SetStateAction } from 'react';
import styles from './calendar.module.scss';
import Door from './Door';
import { type Door as DoorType } from '../types/door';

interface CalendarProps {
	setModalIsOpen: Dispatch<SetStateAction<boolean>>;
	modalIsOpen: boolean;
	calendarDoors: DoorType[];
	setCalendarDoors: Dispatch<SetStateAction<DoorType[]>>;
	setSelectedDoor: Dispatch<SetStateAction<number | null>>;
	selectedDoor: number | null;
}

const Calendar = (props: CalendarProps) => {
	const {
		setModalIsOpen,
		modalIsOpen,
		calendarDoors,
		setCalendarDoors,
		selectedDoor,
		setSelectedDoor,
	} = props;

	return (
		<div className={styles.calendar}>
			{calendarDoors.map(({ isUnlocked, doorNumber, hasBeenOpened }, index) => {
				return (
					<Door
						key={index}
						isUnlocked={isUnlocked}
						doorNumber={doorNumber}
						setModalIsOpen={setModalIsOpen}
						isActive={modalIsOpen}
						selectedDoor={selectedDoor}
						setSelectedDoor={setSelectedDoor}
						hasBeenOpened={hasBeenOpened}
						calendarDoors={calendarDoors}
						setCalendarDoors={setCalendarDoors}
					/>
				);
			})}
		</div>
	);
};
export default Calendar;
