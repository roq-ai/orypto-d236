import axios from 'axios';
import queryString from 'query-string';
import { SuperappInterface, SuperappGetQueryInterface } from 'interfaces/superapp';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSuperapps = async (
  query?: SuperappGetQueryInterface,
): Promise<PaginatedInterface<SuperappInterface>> => {
  const response = await axios.get('/api/superapps', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSuperapp = async (superapp: SuperappInterface) => {
  const response = await axios.post('/api/superapps', superapp);
  return response.data;
};

export const updateSuperappById = async (id: string, superapp: SuperappInterface) => {
  const response = await axios.put(`/api/superapps/${id}`, superapp);
  return response.data;
};

export const getSuperappById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/superapps/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSuperappById = async (id: string) => {
  const response = await axios.delete(`/api/superapps/${id}`);
  return response.data;
};
