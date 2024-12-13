import styles from './calendar.module.scss';
import Door from './Door';
import { type Door as DoorType } from '../types/door';
import { type ReactStateSetter } from '../types/stateSetter';

interface CalendarProps {
	setModalIsOpen: ReactStateSetter<boolean>;
	modalIsOpen: boolean;
	calendarDoors: DoorType[];
	setCalendarDoors: ReactStateSetter<DoorType[]>;
	setSelectedDoor: ReactStateSetter<number | null>;
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
			{calendarDoors.map(({ isUnlocked, doorNumber, hasBeenOpened }) => {
				return (
					<Door
						key={doorNumber}
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
