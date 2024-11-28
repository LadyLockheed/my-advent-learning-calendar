import styles from './door.module.scss';

interface DoorProps {
	isOpen: boolean;
	isUnlocked: boolean;
	doorNumber: number;
}
const Door = (props: DoorProps) => {
	const { isOpen, isUnlocked, doorNumber } = props;

	return (
		<button
			className={`${styles.doorFrame} ${isOpen ? styles.open : styles.closed}`}
			disabled={!isUnlocked}
			onClick={() => console.log('try to open door')}
		>
			{doorNumber}
		</button>
	);
};
export default Door;
