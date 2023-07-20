const mapping: Record<string, string> = {
  'business-owners': 'business_owner',
  'delivery-partners': 'delivery_partner',
  'service-providers': 'service_provider',
  superapps: 'superapp',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
