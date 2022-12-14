import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const dataAtom = atom({
	key: 'dataAtom',
	default: {
		number1: '',
		number2: '',
		operator: '+',
	},
	effects_UNSTABLE: [persistAtom],
});
