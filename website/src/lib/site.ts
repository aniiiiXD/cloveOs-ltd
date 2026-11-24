export const BRAND_NAME = "Clove OS";
export const SITE_TITLE = `${BRAND_NAME} | Own your AI`;
export const SITE_DESCRIPTION =
  "Specialist AI models built and evaluated for deployment on infrastructure you control.";

export const BOOKING_URL = "https://cal.com/aniruddh-sharma-rygvji/30min";

// The inference API and developer portal are served by the product deployment.
export const PRODUCT_ORIGIN = "https://sova-native.vercel.app";

/**
 * Public contact email for mailto links (careers, about, footer).
 * Set NEXT_PUBLIC_CONTACT_EMAIL in .env.local or Vercel to show an email link.
 * The contact form separately delivers via Resend to
 * CONTACT_TO_EMAIL (server-side only).
 */
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "";

export const CONTACT_MAILTO = CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : "";
