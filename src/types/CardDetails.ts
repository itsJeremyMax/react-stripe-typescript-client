export type CardDetails = {
  readonly number: number;
  readonly exp_month: number;
  readonly exp_year: number;
  readonly cvc: number;
  readonly name: string;
  readonly address_line1?: string;
  readonly address_line2?: string;
  readonly address_city?: string;
  readonly address_state?: string;
  readonly address_zip?: number;
  readonly address_country?: string;
};
