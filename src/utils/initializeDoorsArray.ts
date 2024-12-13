import { type Door } from '../types/door';
import {
	setLocalStorageValue,
	getLocalStorageValue,
} from '../utils/localStorageUtils';
import { localStorageKeys } from '../types/localStorageKey';

export const initializeDoorsArray = (): Door[] => {
	const storedDoorsArray = getLocalStorageValue<Door[]>(
		localStorageKeys.doorsArrayKey
	);

	if (storedDoorsArray) {
		const updatedUnlockedStatusDoorsArray = storedDoorsArray.map(
			(door, index) => {
				return { ...door, isUnlocked: canOpenDoor(index + 1) };
			}
		);

		return updatedUnlockedStatusDoorsArray;
	}

	//If localstorage is empty, create doors
	const doorsArray: Door[] = Array.from({ length: 24 }, (_, index) => ({
		isUnlocked: canOpenDoor(index + 1),
		doorNumber: index + 1, // Door numbers start from 1,
		hasBeenOpened: false,
	}));

	setLocalStorageValue(localStorageKeys.doorsArrayKey, doorsArray);

	return doorsArray;
};

//The doors can only be opened from start december, and only if doors date is less than or equal to todays date
export const canOpenDoor = (doorNumber: number): boolean => {
	const todaysDate = new Date();

	const isDecember = todaysDate.getMonth() + 1 === 12;

	return isDecember && doorNumber <= todaysDate.getDate();
};
