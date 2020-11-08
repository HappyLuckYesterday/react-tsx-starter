import axios from 'axios';

// const CLASSNAME = 'HttpService';
export class HttpService {
	get<T>(url: string, params?: any): Promise<T> {
		return axios.get(url, { params: params });
	}

	post<T>(url: string, data: any): Promise<T> {
		return axios.post(url, data);
	}

	put<T>(url: string, body: any): Promise<T> {
		return axios.put(url);
	}

	delete<T>(url: string, params?: any): Promise<T> {
		return axios.delete(url);
	}

}
