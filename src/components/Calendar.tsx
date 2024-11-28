import styles from './calendar.module.scss';
import Door from './Door';

const Calendar = () => {
	//the doors can only be opened from start december, and only if doors date is less than or equal to todays date
	const validateDateOfDoor = (doorNumber: number): boolean => {
		const todaysDate = new Date();
		const isDecember = todaysDate.getMonth() + 1 === 12;

		return isDecember && doorNumber <= todaysDate.getDate();
	};

	const doors = Array.from({ length: 24 }, (_, index) => ({
		isOpen: false,
		isUnlocked: validateDateOfDoor(index + 1),
		doorNumber: index + 1, // Door numbers start from 1
	}));

	return (
		<div className={styles.calendar}>
			{doors.map(({ isOpen, isUnlocked, doorNumber }) => {
				return <Door isOpen isUnlocked doorNumber={doorNumber} />;
			})}
		</div>
	);
};
export default Calendar;
