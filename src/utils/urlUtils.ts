import { Dispatch } from 'react';
import { AdventUrl } from '../types/adventUrl';

export const pickRandomUnassignedUrl = (
	calendarUrls: AdventUrl[]
): [number, string] => {
	const unAssignedUrls = calendarUrls.filter(
		(url) => url.assignedDoor === null
	);

	// if (unAssignedUrls.length === 0) {
	// 	return null
	// }
	const randomIndex = Math.floor(Math.random() * unAssignedUrls.length);
	const randomUrl = unAssignedUrls[randomIndex].url;

	return [randomIndex, randomUrl];
};

export const updateCalendarUrlsArray = (
	selectedDoor: number,
	randomIndex: number,
	calendarUrls: AdventUrl[],
	setCalendarUrls: Dispatch<React.SetStateAction<AdventUrl[]>>
) => {
	const newCalendarUrlArray = calendarUrls.map((url, index) => {
		if (index === randomIndex) {
			return { ...url, assignedDoor: selectedDoor };
		}

		return url;
	});

	localStorage.setItem('urlsArray', JSON.stringify(newCalendarUrlArray));
	setCalendarUrls(newCalendarUrlArray);
};

export const getUrl = (
	selectedDoor: number,
	calendarUrls: AdventUrl[],
	setCalendarUrls: Dispatch<React.SetStateAction<AdventUrl[]>>
): string => {
	//Find the url with assigned door same as selectedDoor
	const assignedAdventUrlObject = calendarUrls.find(
		(url) => url.assignedDoor === selectedDoor
	);

	//If url has assignedDoor, return url related to that door
	if (assignedAdventUrlObject) {
		return assignedAdventUrlObject.url;
	}
	//If no assigned door, random pick url, assign the current door, return url
	else {
		const [randomIndex, randomUrl] = pickRandomUnassignedUrl(calendarUrls);
		updateCalendarUrlsArray(
			selectedDoor,
			randomIndex,
			calendarUrls,
			setCalendarUrls
		);
		return randomUrl;
	}
};