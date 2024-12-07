import { type Door } from '../types/door';

export const initializeDoorsArray = () => {
	const storedDoorsArray = localStorage.getItem('doorsArray');

	//If doorsArray exist in localStorage, parse
	if (storedDoorsArray) {
		const doorsArray: Door[] = JSON.parse(storedDoorsArray);

		const updatedUnlockedStatusDoorsArray = doorsArray.map((door, index) => {
			return { ...door, isUnlocked: canOpenDoor(index + 1) };
		});

		return updatedUnlockedStatusDoorsArray;
	}

	//If localstorage is empty, create doors
	const doorsArray: Door[] = Array.from({ length: 24 }, (_, index) => ({
		isOpen: false,
		isUnlocked: canOpenDoor(index + 1),
		doorNumber: index + 1, // Door numbers start from 1,
		hasBeenOpened: false,
	}));
	console.log(doorsArray);
	localStorage.setItem('doorsArray', JSON.stringify(doorsArray));

	return doorsArray;
};

//The doors can only be opened from start december, and only if doors date is less than or equal to todays date
export const canOpenDoor = (doorNumber: number): boolean => {
	const todaysDate = new Date();

	const isDecember = todaysDate.getMonth() + 1 === 12;

	return isDecember && doorNumber <= todaysDate.getDate();
};
