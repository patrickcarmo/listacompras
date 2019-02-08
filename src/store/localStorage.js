export const loadState = () => {
	try {
		const localStorageState = localStorage.getItem('list');
		if (localStorageState === null) {
			return undefined;
		}
		return JSON.parse(localStorageState);
	} catch (error) {
		console.log('Não foi possivel recuperar o estado: ', error);
		return undefined;
	}
}

export const saveState = state => {
	try {
		const localStorageState = JSON.stringify(state);
		localStorage.setItem('list', localStorageState);
	} catch (error) {
		console.log('Não foi possivel salvar o estado: ', error);
	}
}