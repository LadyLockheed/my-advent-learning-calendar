import styles from './calendar.module.scss';
import Door from './Door';

const Calendar = () => {
	const doors = Array.from({ length: 24 }, (_, index) => ({
		isOpen: false,
		isUnlocked: false,
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
