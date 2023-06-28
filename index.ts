interface optionsConfig {
  clientId?: string;
  clientSecret?: string;
  tenantURL?: string;
}

export default function EasyAuth(options: optionsConfig) {
  return {
    id: 'easyauth',
    name: 'easyauth',
    type: 'oauth',
    version: '2.0',
    params: {grant_type: 'authorization_code'},
    wellKnown:
      options.tenantURL + '/tenantbackend/.well-known/openid-configuration',
    idToken: true,
    checks: ['pkce'],
    authorization: {
      params: {scope: 'openid'},
    },
    profile(profile: any) {
      return {
        id: profile.sub,
        email: profile.sub,
      };
    },
    options,
  };
}
