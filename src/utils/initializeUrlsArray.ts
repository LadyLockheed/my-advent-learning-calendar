import { type CalendarUrl } from '../types/calendarUrl';
import { adventUrls } from '../data/calendarUrls';

export const initializeUrlsArray = (): CalendarUrl[] => {
	const storedUrlsArray = localStorage.getItem('urlsArray');

	//If storedUrlsArray exist in localStorage, parse
	if (storedUrlsArray) {
		return JSON.parse(storedUrlsArray);
	}

	//If localstorage is empty, set urlsArray
	localStorage.setItem('urlsArray', JSON.stringify(adventUrls));

	return adventUrls;
};
