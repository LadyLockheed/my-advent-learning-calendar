import { Dispatch, SetStateAction } from 'react';
import styles from './door.module.scss';
import { updateDoorHasBeenOpenedStatus } from '../utils/doorUtils';
import { type Door as DoorType } from '../types/door';

interface DoorProps {
	isUnlocked: boolean;
	doorNumber: number;
	setModalIsOpen: Dispatch<SetStateAction<boolean>>;
	isActive: boolean;
	setSelectedDoor: Dispatch<SetStateAction<number | null>>;
	selectedDoor: number | null;
	hasBeenOpened: boolean;
	calendarDoors: DoorType[];
	setCalendarDoors: Dispatch<React.SetStateAction<DoorType[]>>;
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
		console.log(doorNumber, currentDay);
		return doorNumber === currentDay;
	};

	return (
		<button
			className={`${styles.doorFrame} ${isUnlocked && styles.doorUnlocked} ${
				isSelectedDoor() && isActive && styles.doorOpen
			} ${hasBeenOpened && styles.doorHasBeenOpened}`}
			disabled={!isUnlocked}
			onClick={() => {
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
			}}
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
