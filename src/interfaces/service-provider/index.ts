import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ServiceProviderInterface {
  id?: string;
  service_status?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ServiceProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  service_status?: string;
  user_id?: string;
}
