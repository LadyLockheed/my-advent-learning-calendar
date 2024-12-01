import { calendarUrls } from '../data/calendarUrls';
import { type Door } from '../types/door';

export const initializeDoorsArray = () => {
	const storedDoorsArray = localStorage.getItem('doorsArray');

	//If doorsArray exist in localStorage, parse
	if (storedDoorsArray) {
		return JSON.parse(storedDoorsArray);
	}

	//If localstorage is empty, create doors
	const doorsArray: Door[] = Array.from({ length: 24 }, (_, index) => ({
		isOpen: false,
		isUnlocked: canOpenDoor(index + 1),
		doorNumber: index + 1, // Door numbers start from 1
		url: calendarUrls[index].url,
	}));
	console.log(doorsArray);
	localStorage.setItem('doorsArray', JSON.stringify(doorsArray));

	return doorsArray;
};

//The doors can only be opened from start december, and only if doors date is less than or equal to todays date
export const canOpenDoor = (doorNumber: number): boolean => {

	//! Do not forget to change the number back to 12. 11 is used during development
	const isDecember = todaysDate.getMonth() + 1 === 11;

	return isDecember && doorNumber <= todaysDate.getDate();
};
