import deezerApiClient from '@/Helpers/deezerApiClient';
import keys from '../../config/keys';

export const search = async (url, q, limit = 6) => {
	if (url) {
		console.log('next', url);
		return await deezerApiClient().get(keys.PROXY_URL + url);
	} else {
		console.log('normal', keys.DEZZER_BASE_URL + 'search' + q + limit);
		return await deezerApiClient().get(
			keys.PROXY_URL + keys.DEZZER_BASE_URL + 'search',
			{
				params: {
					q,
					limit,
				},
			}
		);
	}
};
