import styles from './statusPanel.module.scss';
import { type Door } from '../types/door';
import { countUnopenedAvailableDoors } from '../utils/doorUtils';

interface StatusPanelProps {
	calendarDoors: Door[];
}
const StatusPanel = (props: StatusPanelProps) => {
	const { calendarDoors } = props;

	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;

	const amountOfDoorsToOpen = countUnopenedAvailableDoors(calendarDoors);

	const amountMessage =
		amountOfDoorsToOpen > 0
			? `You have ${amountOfDoorsToOpen} ${
					amountOfDoorsToOpen > 1 ? 'doors' : 'door'
			  }  to open`
			: 'You have no doors left to open';
	const dateMessage = `Today: ${day}/${month}`;

	return (
		<div className={styles.statusPanelContainer}>
			<h1>Welcome</h1>
			<p>{dateMessage}</p>
			<h3>{amountMessage}</h3>
		</div>
	);
};
export default StatusPanel;
