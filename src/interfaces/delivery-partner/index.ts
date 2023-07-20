import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DeliveryPartnerInterface {
  id?: string;
  delivery_status?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface DeliveryPartnerGetQueryInterface extends GetQueryInterface {
  id?: string;
  delivery_status?: string;
  user_id?: string;
}
