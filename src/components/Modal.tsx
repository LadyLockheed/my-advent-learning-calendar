import { Dispatch, SetStateAction } from 'react';
import { SquareX } from 'lucide-react';
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
				<SquareX />
			</button>
			<a href={url} className={styles.urlText} target="_blank">
				<button className={styles.linkButton}>Click to read</button>
			</a>
		</div>
	);
};
export default Modal;
