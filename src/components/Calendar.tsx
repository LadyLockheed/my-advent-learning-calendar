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

	return (
		<div className={styles.calendar}>
			{calendarDoors.map(
				({ isOpen, isUnlocked, doorNumber, hasBeenOpened }, index) => {
					return (
						<Door
							key={index}
							isDoorOpen={isOpen}
							isUnlocked={isUnlocked}
							doorNumber={doorNumber}
							setModalIsOpen={setModalIsOpen}
							setSelectedDoor={setSelectedDoor}
							hasBeenOpened={hasBeenOpened}
							calendarDoors={calendarDoors}
							setCalendarDoors={setCalendarDoors}
						/>
					);
				}
			)}
		</div>
	);
};
export default Calendar;
