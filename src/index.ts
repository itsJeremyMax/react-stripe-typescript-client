import 'isomorphic-fetch';

import { CardDetails } from './types/CardDetails';
import { TokenResponse } from './types/TokenResponse';

export const STRIPE_URL = 'https://api.stripe.com/v1/tokens';

export async function createToken(
  publicKey: string,
  cardDetails: CardDetails
): Promise<TokenResponse> {
  const body = Object.entries(cardDetails)
    .map(([key, value]) => `card[${key}]=${value}`)
    .reduce((previous, current) => `${previous}&${current}`, '');

  let res: TokenResponse = await (
    await fetch(STRIPE_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${publicKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    })
  ).json();

  // If there is an error, lets attach it to the response
  if (res.error) {
    res.error = res.error;
  }

  return res as TokenResponse;
}
