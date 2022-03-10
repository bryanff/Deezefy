import { useState } from 'react';

export function useLocalStorage(key) {
	const [storedValue, setStoreValue] = useState(() => {
		console.log('useStateFavorites');
		const item = window.localStorage.getItem(key);
		if(item){
			return JSON.parse(item);
		}else{
			window.localStorage.setItem(key, JSON.stringify([]));
			return [];
		}
	});
	const setValue = (value) => {
		const stored = JSON.parse(window.localStorage.getItem(key));
		window.localStorage.setItem(key, JSON.stringify([value, ...stored]));
	};

	return [storedValue, setValue];
}
