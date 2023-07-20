import axios from 'axios';
import queryString from 'query-string';
import { ServiceProviderInterface, ServiceProviderGetQueryInterface } from 'interfaces/service-provider';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getServiceProviders = async (
  query?: ServiceProviderGetQueryInterface,
): Promise<PaginatedInterface<ServiceProviderInterface>> => {
  const response = await axios.get('/api/service-providers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createServiceProvider = async (serviceProvider: ServiceProviderInterface) => {
  const response = await axios.post('/api/service-providers', serviceProvider);
  return response.data;
};

export const updateServiceProviderById = async (id: string, serviceProvider: ServiceProviderInterface) => {
  const response = await axios.put(`/api/service-providers/${id}`, serviceProvider);
  return response.data;
};

export const getServiceProviderById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/service-providers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteServiceProviderById = async (id: string) => {
  const response = await axios.delete(`/api/service-providers/${id}`);
  return response.data;
};
