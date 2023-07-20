interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Team Member'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Delivery Partner', 'Service Provider'],
  tenantName: 'Superapp',
  applicationName: 'Orypto',
  addOns: ['chat', 'notifications', 'file'],
};
