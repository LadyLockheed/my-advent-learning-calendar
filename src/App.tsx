import styles from './app.module.scss';
import Calendar from './components/Calendar';
import StatusPanel from './components/StatusPanel';

function App() {
	return (
		<div className={styles.mainWrapper}>
			<StatusPanel />
			<Calendar />
		</div>
	);
}

export default App;
