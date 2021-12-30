# React Stripe Typescript Client

A small library for React / React Native which creates Stripe tokens using your Publishable API Key which can then safely be consumed by your backend

## Installation

`$ npm i install react-stripe-typescript-client`

or

`$ yarn add react-stripe-typescript-client`


## Usage


```typescript

import { createToken } from "react-stripe-typescript-client"

const res: TokenResponse = await createToken(
    'YOUR_PUBLISHABLE_STRIPE_TOKEN',
      {
        cvc: 245,
        exp_month: 12,
        exp_year: 24,
        number: 42424242424242,
      }
    );
```

The `createToken` function also accepts all other [Stripe card parameters ](https://stripe.com/docs/api/tokens/create_card#create_card_token-card) within the card object

The TokenResponse interface has the following format

```
interface TokenResponse {
  id: string;
  object: string;
  card: Card;
  client_ip: string;
  created: number;
  livemode: boolean;
  type: string;
  used: boolean;
  error: TokenErrorResponse;
}
```

## Error handling
If an error is sent back by Stripe, it's made available in the `error` key inside of the `TokenResponse` interface


