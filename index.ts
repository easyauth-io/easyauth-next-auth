interface optionsConfig {
  clientId?: string
  clientSecret?: string
  tenantURL: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function EasyAuth (options: optionsConfig) {
  return {
    id: "easyauth",
    name: "easyauth",
    type: "oauth",
    version: "2.0",
    params: {grant_type: "authorization_code"},
    wellKnown: new URL(
      "/tenantbackend/.well-known/openid-configuration",
      options.tenantURL
    ).href,
    idToken: true,
    checks: ["pkce"],
    authorization: {
      params: {scope: "openid"},
    },
    profile (profile: any) {
      return {
        id: profile.sub,
        email: profile.sub
      }
    },
    options
  }
}
