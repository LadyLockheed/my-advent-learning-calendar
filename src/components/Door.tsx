import { Dispatch, SetStateAction } from 'react';
import styles from './door.module.scss';

interface DoorProps {
	isDoorOpen: boolean;
	isUnlocked: boolean;
	doorNumber: number;
	toggleOpen: (doorNumber: number, isOpenCurrentStatus: boolean) => void;
	setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}
const Door = (props: DoorProps) => {
	const { isDoorOpen, isUnlocked, doorNumber, toggleOpen, setModalIsOpen } =
		props;

	return (
		<button
			className={`${styles.doorFrame} ${
				isDoorOpen ? styles.open : styles.closed
			}`}
			disabled={!isUnlocked}
			onClick={() => {
				toggleOpen(doorNumber, isDoorOpen);

				//Modal should only open if door is closed
				if (!isDoorOpen) {
					setModalIsOpen(true);
				}
			}}
		>
			{doorNumber}
		</button>
	);
};
export default Door;
