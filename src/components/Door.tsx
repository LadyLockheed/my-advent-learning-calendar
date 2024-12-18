import styles from './door.module.scss';
import { useCallback } from 'react';
import { updateDoorHasBeenOpenedStatus } from '../utils/doorUtils';
import { type Door as DoorType } from '../types/door';
import { type ReactStateSetter } from '../types/stateSetter';

interface DoorProps {
	isUnlocked: boolean;
	doorNumber: number;
	setModalIsOpen: ReactStateSetter<boolean>;
	isActive: boolean;
	setSelectedDoor: ReactStateSetter<number | null>;
	selectedDoor: number | null;
	hasBeenOpened: boolean;
	calendarDoors: DoorType[];
	setCalendarDoors: ReactStateSetter<DoorType[]>;
}
const Door = (props: DoorProps) => {
	const {
		isUnlocked,
		doorNumber,
		setModalIsOpen,
		isActive,
		setSelectedDoor,
		selectedDoor,
		hasBeenOpened,
		calendarDoors,
		setCalendarDoors,
	} = props;

	const isSelectedDoor = (): boolean => {
		return doorNumber === selectedDoor;
	};

	const isDaysDoor = () => {
		const date = new Date();

		const currentDay = date.getDate();

		return doorNumber === currentDay;
	};

	const handleDoorClick = useCallback(() => {
		setModalIsOpen(true);
		setSelectedDoor(doorNumber);

		//Update when door opens first time
		if (!hasBeenOpened) {
			updateDoorHasBeenOpenedStatus(
				doorNumber,
				calendarDoors,
				setCalendarDoors
			);
		}
	}, [
		doorNumber,
		hasBeenOpened,
		calendarDoors,
		setCalendarDoors,
		setModalIsOpen,
		setSelectedDoor,
	]);

	return (
		<button
			className={`${styles.doorFrame} ${isUnlocked && styles.doorUnlocked} ${
				isSelectedDoor() && isActive && styles.doorOpen
			} ${hasBeenOpened && styles.doorHasBeenOpened}`}
			disabled={!isUnlocked}
			onClick={handleDoorClick}
		>
			<span
				className={`${styles.doorNumberText} ${
					isUnlocked && styles.doorUnlockedNumberText
				}  ${isDaysDoor() && styles.currentDayText}`}
			>
				{doorNumber}
			</span>
		</button>
	);
};
export default Door;
