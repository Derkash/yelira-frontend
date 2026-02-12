/**
 * Server-only WooCommerce API client.
 * Must only be imported from API routes and server components.
 */

const WC_URL = process.env.WC_URL!;
const WC_KEY = process.env.WC_KEY!;
const WC_SECRET = process.env.WC_SECRET!;

const credentials = Buffer.from(`${WC_KEY}:${WC_SECRET}`).toString('base64');

export async function wcServerFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${WC_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(
      `WC API error ${response.status}: ${error.message || response.statusText}`
    );
  }

  return response.json();
}
