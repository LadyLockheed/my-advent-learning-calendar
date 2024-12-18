import { type Door } from '../types/door';
import { type ReactStateSetter } from '../types/stateSetter';
import { localStorageKeys } from '../types/localStorageKey';

export const updateDoorHasBeenOpenedStatus = (
	targetDoorNumber: number,
	calendarDoors: Door[],
	setCalendarDoors: ReactStateSetter<Door[]>
) => {
	const newDoorsArray = calendarDoors.map((door) => {
		if (door.doorNumber === targetDoorNumber) {
			return { ...door, hasBeenOpened: true };
		}
		return door;
	});

	setCalendarDoors(newDoorsArray);
	localStorage.setItem(
		localStorageKeys.doorsArrayKey,
		JSON.stringify(newDoorsArray)
	);
};

export const countUnopenedUnlockedDoors = (calendarDoors: Door[]): number => {
	const unopenedDoors = calendarDoors.filter(
		(door) => !door.hasBeenOpened && door.isUnlocked
	);

	return unopenedDoors.length;
};
