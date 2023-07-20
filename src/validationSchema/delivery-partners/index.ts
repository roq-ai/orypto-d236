import * as yup from 'yup';

export const deliveryPartnerValidationSchema = yup.object().shape({
  delivery_status: yup.string(),
  user_id: yup.string().nullable(),
});
