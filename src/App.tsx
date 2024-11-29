import { useState } from 'react';
import styles from './app.module.scss';
import Calendar from './components/Calendar';
import Modal from './components/Modal';
import StatusPanel from './components/StatusPanel';

function App() {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
	return (
		<div className={styles.mainWrapper}>
			<StatusPanel />
			<Calendar setModalIsOpen={setModalIsOpen} />
			<Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} url={'url'} />
		</div>
	);
}

export default App;
