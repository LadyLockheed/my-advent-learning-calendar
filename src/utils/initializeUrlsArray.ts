import { type AdventUrl } from '../types/adventUrl';
import { adventUrlsArray } from '../data/adventUrlsData';
import {
	setLocalStorageValue,
	getLocalStorageValue,
} from '../utils/localStorageUtils';
import { localStorageKeys } from '../types/localStorageKey';

export const initializeUrlsArray = (): AdventUrl[] => {
	const storedUrlsArray = getLocalStorageValue<AdventUrl[]>(
		localStorageKeys.urlsArrayKey
	);

	if (storedUrlsArray) {
		return storedUrlsArray;
	}

	//If localstorage is empty, set urlsArray
	setLocalStorageValue(localStorageKeys.urlsArrayKey, adventUrlsArray);

	return adventUrlsArray;
};
