import { Dispatch } from 'react';
import { type Door } from '../types/door';

export const toggleDoorOpenStatus = (
	targetDoorNumber: number,
	isOpenCurrentStatus: boolean,
	calendarDoors: Door[],
	setCalendarDoors: Dispatch<React.SetStateAction<Door[]>>
) => {
	//Update isOpen status
	const newDoorsArray = calendarDoors.map((door) => {
		if (door.doorNumber === targetDoorNumber) {
			return { ...door, isOpen: !isOpenCurrentStatus };
		}
		return door;
	});

	setCalendarDoors(newDoorsArray);
	localStorage.setItem('doorsArray', JSON.stringify(newDoorsArray));
};

export const updateDoorHasBeenOpenedStatus = (
	targetDoorNumber: number,
	calendarDoors: Door[],
	setCalendarDoors: Dispatch<React.SetStateAction<Door[]>>
) => {
	//Update hasBeenOpened status
	const newDoorsArray = calendarDoors.map((door) => {
		if (door.doorNumber === targetDoorNumber) {
			return { ...door, hasBeenOpened: true };
		}
		return door;
	});

	setCalendarDoors(newDoorsArray);
	localStorage.setItem('doorsArray', JSON.stringify(newDoorsArray));
};

export const countUnopenedAvailableDoors = (calendarDoors: Door[]): number => {
	const unopenedDoors = calendarDoors.filter(
		(door) => !door.hasBeenOpened && door.isUnlocked
	);

	return unopenedDoors.length;
};
