import { Dispatch, SetStateAction } from 'react';
import styles from './modal.module.scss';

interface ModalProps {
	isOpen: boolean;
	url: string;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	selectedDoor: number | null;
}

const Modal = (props: ModalProps) => {
	const { isOpen, setIsOpen, url, selectedDoor } = props;
	return (
		<div
			className={`${styles.modalContainer} ${!isOpen && styles.modalClosed}`}
		>
			<button className={styles.closeButton} onClick={() => setIsOpen(false)}>
				x
			</button>
			<div className={styles.modalContent}>
				<p className={styles.modalText}>
					Click to find out what is behind door number
				</p>
				<p>{selectedDoor}</p>
				<a href={url} className={styles.urlText} target="_blank">
					<button className={styles.linkButton}>Click to read</button>
				</a>
			</div>
		</div>
	);
};
export default Modal;
