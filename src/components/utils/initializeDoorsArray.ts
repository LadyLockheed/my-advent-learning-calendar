export const initializeDoorsArray = () => {
	const storedDoorsArray = localStorage.getItem('doorsArray');

	if (storedDoorsArray) {
		return JSON.parse(storedDoorsArray);
	}

	const doorsArray = Array.from({ length: 24 }, (_, index) => ({
		isOpen: false,
		isUnlocked: validateDateOfDoor(index + 1),
		doorNumber: index + 1, // Door numbers start from 1
	}));

	localStorage.setItem('doorsArray', JSON.stringify(doorsArray));

	return doorsArray;
};

//The doors can only be opened from start december, and only if doors date is less than or equal to todays date
export const validateDateOfDoor = (doorNumber: number): boolean => {
	//! Do not forget to remove the customized date.
	const todaysDate = new Date('2021-11-16');
	//! Do not forget to change the number back to 12. 11 is used during development
	const isDecember = todaysDate.getMonth() + 1 === 11;

	return isDecember && doorNumber <= todaysDate.getDate();
};
