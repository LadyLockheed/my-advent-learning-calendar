export const setLocalStorageValue = <T>(key: string, value: T): void => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.error(`Error setting localStorage key "${key}":`, error);
	}
};

export const getLocalStorageValue = <T>(key: string): T | null => {
	try {
		const item = localStorage.getItem(key);
		return item ? (JSON.parse(item) as T) : null;
	} catch (error) {
		console.error(`Error getting localStorage key "${key}":`, error);
		return null;
	}
};
