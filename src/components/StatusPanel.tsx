import styles from './statusPanel.module.scss';
import { type Door } from '../types/door';
import { countUnopenedUnlockedDoors } from '../utils/doorUtils';

interface StatusPanelProps {
	calendarDoors: Door[];
}
const StatusPanel = (props: StatusPanelProps) => {
	const { calendarDoors } = props;

	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;

	const amountOfDoorsToOpen = countUnopenedUnlockedDoors(calendarDoors);

	const dateMessage = `Today: ${day}/${month}`;
	const amountMessage =
		amountOfDoorsToOpen > 0
			? `Doors to open: ${amountOfDoorsToOpen}`
			: 'You have no doors left to open';

	return (
		<div className={styles.statusPanelContainer}>
			<h1>Welcome</h1>
			<p>{dateMessage}</p>
			<p>{amountMessage}</p>
		</div>
	);
};
export default StatusPanel;
