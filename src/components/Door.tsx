import styles from './door.module.scss';

interface DoorProps {
	isOpen: boolean;
	isUnlocked: boolean;
	doorNumber: number;
}
const Door = (props: DoorProps) => {
	const { isOpen, isUnlocked, doorNumber } = props;

	return <div className={styles.doorFrame}>{doorNumber}</div>;
};
export default Door;
