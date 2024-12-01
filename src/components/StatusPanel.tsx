import styles from './statusPanel.module.scss';

const StatusPanel = () => {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;

	return (
		<div className={styles.statusPanelContainer}>
			<p>
				{day} /{month}
			</p>
		</div>
	);
};
export default StatusPanel;
