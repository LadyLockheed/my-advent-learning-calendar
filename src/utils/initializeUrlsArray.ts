import { type AdventUrl } from '../types/adventUrl';
import { adventUrlsArray } from '../data/adventUrlsData';
import {
	setLocalStorageValue,
	getLocalStorageValue,
} from '../utils/localStorageUtils';

export const initializeUrlsArray = (): AdventUrl[] => {
	const storedUrlsArray = getLocalStorageValue<AdventUrl[]>('urlsArray');

	if (storedUrlsArray) {
		return storedUrlsArray;
	}

	//If localstorage is empty, set urlsArray
	setLocalStorageValue('urlsArray', adventUrlsArray);

	return adventUrlsArray;
};
