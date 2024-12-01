import { type AdventUrl } from '../types/adventUrl';
import { adventUrlsArray } from '../data/adventUrlsData';

export const initializeUrlsArray = (): AdventUrl[] => {
	const storedUrlsArray = localStorage.getItem('urlsArray');

	//If storedUrlsArray exist in localStorage, parse
	if (storedUrlsArray) {
		return JSON.parse(storedUrlsArray);
	}

	//If localstorage is empty, set urlsArray
	localStorage.setItem('urlsArray', JSON.stringify(adventUrlsArray));

	return adventUrlsArray;
};
