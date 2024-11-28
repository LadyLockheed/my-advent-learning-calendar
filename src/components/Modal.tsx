import { Dispatch, SetStateAction } from 'react';
import styles from './modal.module.scss';

interface ModalProps {
	isOpen: boolean;
	url: string;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = (props: ModalProps) => {
	const { isOpen, setIsOpen, url } = props;
	return (
		<div
			className={`${styles.modalContainer} ${
				isOpen ? styles.open : styles.closed
			}`}
		>
			<button className={styles.closeButton} onClick={() => setIsOpen(false)}>
				x
			</button>
			<p className={styles.urlText}>{url}</p>
		</div>
	);
};
export default Modal;
