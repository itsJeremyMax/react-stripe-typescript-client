import { createToken } from "./index";


const stripeTestToken = 'YOUR_STRIPE_TEST_TOKEN'
describe('Token Generation', () => {
  test('should return Stripe token object when valid card details are provided', async () => {
    const res = await createToken(
      stripeTestToken,
      {
        cvc: 245,
        exp_month: 12,
        exp_year: 24,
        number: 42424242424242,
      }
    );
    expect(res.id).toBeTruthy();
  });
  test('should return Stripe error object when invalid card details are provided', async () => {
    const res = await createToken(
      stripeTestToken,
      {
        cvc: 2450,
        exp_month: 12,
        exp_year: 24,
        number: 1,
      }
    );
   
    expect(res.error).toBeTruthy()
  });
});
