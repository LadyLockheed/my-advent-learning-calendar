import { Dispatch } from 'react';
import { type Door } from '../types/door';

export const updateDoorHasBeenOpenedStatus = (
	targetDoorNumber: number,
	calendarDoors: Door[],
	setCalendarDoors: Dispatch<React.SetStateAction<Door[]>>
) => {
	const newDoorsArray = calendarDoors.map((door) => {
		if (door.doorNumber === targetDoorNumber) {
			return { ...door, hasBeenOpened: true };
		}
		return door;
	});

	setCalendarDoors(newDoorsArray);
	localStorage.setItem('doorsArray', JSON.stringify(newDoorsArray));
};

export const countUnopenedUnlockedDoors = (calendarDoors: Door[]): number => {
	const unopenedDoors = calendarDoors.filter(
		(door) => !door.hasBeenOpened && door.isUnlocked
	);

	return unopenedDoors.length;
};
