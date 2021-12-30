export interface TokenErrorResponse {
  error: Error;
}

export interface Error {
  code: string;
  doc_url: string;
  message: string;
  param: string;
  type: string;
}
