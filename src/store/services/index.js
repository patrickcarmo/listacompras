import axios from 'axios';

export const services = {
	getImages: (product) => {
		const url = 'https://www.googleapis.com/customsearch/v1';
		const params = {
			key: 'AIzaSyDbyQmh1SkcD4cr46YXcwhqe7KL1MmjAs4',
			cx: '001566152571461233323:icxasji7cck',
			searchType: 'image',
			lr: 'lang_pt',
			num: 1,
			q: product
		}
		return axios.get(url, { params })
			.then(response => response.data.items[0].link)
			.catch(erro => erro);
	}
}