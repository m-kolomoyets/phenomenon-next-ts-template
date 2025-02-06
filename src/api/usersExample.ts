import type { AxiosRequestConfig } from 'axios';
import { httpPrivate } from '@/api/@axios';

export const getUsers = async (config?: AxiosRequestConfig) => {
    const response = await httpPrivate.get<string[]>('/api/users', config);

    return response.data;
};

export const createUser = async (data: string, config?: AxiosRequestConfig) => {
    const response = await httpPrivate.post<string>('/api/users', data, config);

    return response.data;
};
