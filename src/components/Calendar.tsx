import { useState } from 'react';
import styles from './calendar.module.scss';
import Door from './Door';
import { type Door as DoorType } from '../types/door';

const Calendar = () => {
	//The doors can only be opened from start december, and only if doors date is less than or equal to todays date
	const validateDateOfDoor = (doorNumber: number): boolean => {
		//! Do not forget to remove the customized date.
		const todaysDate = new Date('2021-11-16');
		//! Do not forget to change the number back to 12. 11 is used during development
		const isDecember = todaysDate.getMonth() + 1 === 11;

		return isDecember && doorNumber <= todaysDate.getDate();
	};
	//TODO Den här borde flyttas någon annanstans
	//Antagligen till context kanske, hämtas från localstorage
	const doorsArray = Array.from({ length: 24 }, (_, index) => ({
		isOpen: false,
		isUnlocked: validateDateOfDoor(index + 1),
		doorNumber: index + 1, // Door numbers start from 1
	}));

	//TODO Döpa om doors till calendardoors kanske?
	const [doors, setDoors] = useState<DoorType[]>(doorsArray);

	const handleDoorOpenStatus = (
		doorNumber: number,
		isOpenCurrentStatus: boolean
	) => {
		const newDoorsArray = doors.map((door) => {
			if (door.doorNumber === doorNumber) {
				return { ...door, isOpen: !isOpenCurrentStatus };
			}
			return door;
		});

		setDoors(newDoorsArray);
	};

	return (
		<div className={styles.calendar}>
			{doors.map(({ isOpen, isUnlocked, doorNumber }, index) => {
				return (
					<Door
						key={index}
						isOpen={isOpen}
						toggleOpen={handleDoorOpenStatus}
						isUnlocked={isUnlocked}
						doorNumber={doorNumber}
					/>
				);
			})}
		</div>
	);
};
export default Calendar;
