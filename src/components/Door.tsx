import { Dispatch, SetStateAction } from 'react';
import styles from './door.module.scss';
import {
	toggleDoorOpenStatus,
	updateDoorHasBeenOpenedStatus,
} from '../utils/doorUtils';
import { type Door as DoorType } from '../types/door';

interface DoorProps {
	isDoorOpen: boolean;
	isUnlocked: boolean;
	doorNumber: number;
	setModalIsOpen: Dispatch<SetStateAction<boolean>>;
	setSelectedDoor: Dispatch<SetStateAction<number | null>>;
	hasBeenOpened: boolean;
	calendarDoors: DoorType[];
	setCalendarDoors: Dispatch<React.SetStateAction<DoorType[]>>;
}
const Door = (props: DoorProps) => {
	const {
		isDoorOpen,
		isUnlocked,
		doorNumber,
		setModalIsOpen,
		setSelectedDoor,
		hasBeenOpened,
		calendarDoors,
		setCalendarDoors,
	} = props;

	return (
		<button
			className={`${styles.doorFrame} ${
				isDoorOpen ? styles.open : styles.closed
			}`}
			disabled={!isUnlocked}
			onClick={() => {
				toggleDoorOpenStatus(
					doorNumber,
					isDoorOpen,
					calendarDoors,
					setCalendarDoors
				);

				//Current door should be set only when opening it
				//Modal should only open if door is closed
				if (!isDoorOpen) {
					setModalIsOpen(true);
					setSelectedDoor(doorNumber);
				}
				//Update if door has been opened once
				if (!hasBeenOpened) {
					updateDoorHasBeenOpenedStatus(
						doorNumber,
						calendarDoors,
						setCalendarDoors
					);
				}
			}}
		>
			{doorNumber}
		</button>
	);
};
export default Door;
