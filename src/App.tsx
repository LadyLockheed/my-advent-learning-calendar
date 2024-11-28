import styles from './app.module.scss';
import Calendar from './components/Calendar';
import StatusPanel from './components/StatusPanel';

function App() {
	return (
		<div className={styles.mainWrapper}>
			<StatusPanel />
			<Calendar setModalIsOpen={setModalIsOpen} />
			<Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} url={'url'} />
		</div>
	);
}

export default App;
