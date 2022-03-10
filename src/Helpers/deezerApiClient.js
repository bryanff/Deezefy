import axios from 'axios';
import keys from '../../config/keys';

export default () => {
	return axios.create({
		baseURL: keys.PROXY_URL+keys.DEZZER_BASE_URL,
		responseType: 'json',
		headers: { 'X-Requested-With': 'XMLHttpRequest' },
	});
};
