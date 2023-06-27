# easyauth-next-auth
[EasyAuth](https://easyauth.io/) provider for [next-auth](https://next-auth.js.org/).

### Installation
The EasyAuth provider is installed with npm. 

```
npm install @easyauth.io/easyauth-next-auth
```

### Usage
Create an application at [EasyAuth](https://easyauth.io/) and register a new client. Add `http://127.0.0.1:3000/auth/easyauth/callback` to the Redirect URL
and pass clientID and clientSecret to the provider. 

Note: Change the Redirect URL port `3000` to the corresponding port where your app is running.

```js
// [...nextauth].js

import NextAuth from 'next-auth';

export const authOptions = {
  providers: [
    EasyAuth({
      clientId: process.env.EASYAUTH_CLIENT_ID,
      clientSecret: process.env.EASYAUTH_CLIENT_SECRET,
      tenantURL: provess.env.EASYAUTH_TENANT_URL,
    }),
    //...
  ],
  //...
  },
};
export default NextAuth(authOptions);
```
