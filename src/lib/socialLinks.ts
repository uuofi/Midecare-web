export const INSTAGRAM_URL = 'https://www.instagram.com/medicare.iq/';

// Use E.164 format like: +9647XXXXXXXXX
export const WHATSAPP_PHONE_E164 = '+96478188916';

export function getWhatsAppUrl(phoneE164: string): string {
  const digits = String(phoneE164 || '').replace(/\D/g, '');
  if (!digits) return '';
  return `https://wa.me/${digits}`;
}
