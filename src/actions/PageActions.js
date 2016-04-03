import { CREATE_LABEL } from '../constants/Page';

export function createLabel(labelText) {
	return {
		type: CREATE_LABEL,
		text: labelText
	}
}
