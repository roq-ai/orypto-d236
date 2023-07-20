import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessOwnerInterface {
  id?: string;
  product_service_status?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface BusinessOwnerGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_service_status?: string;
  user_id?: string;
}
