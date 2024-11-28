import styles from './door.module.scss';

interface DoorProps {
	isOpen: boolean;
	isUnlocked: boolean;
	doorNumber: number;
	toggleOpen: (doorNumber: number, isOpenCurrentStatus: boolean) => void;
}
const Door = (props: DoorProps) => {
	const { isOpen, isUnlocked, doorNumber, toggleOpen } = props;

	return (
		<button
			className={`${styles.doorFrame} ${isOpen ? styles.open : styles.closed}`}
			disabled={!isUnlocked}
			onClick={() => toggleOpen(doorNumber, isOpen)}
		>
			{doorNumber}
		</button>
	);
};
export default Door;
