export const HUBSPOT_PORTAL_ID = '243989543';

/** Pilot waitlist form (CTASection, FinalCTASection) */
export const HUBSPOT_PILOT_FORM_ID = 'be0e0acc-6317-4da9-b98f-62483aa4e332';

/**
 * Dedicated HubSpot form for footer "Get product updates" newsletter.
 * Set this when the form is created in HubSpot — must differ from HUBSPOT_PILOT_FORM_ID.
 */
export const HUBSPOT_NEWSLETTER_FORM_ID = null;

export function isNewsletterFormConfigured() {
  return Boolean(HUBSPOT_NEWSLETTER_FORM_ID);
}

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/tracesecure',
  twitter: 'https://x.com/tracesecure',
  instagram: 'https://www.instagram.com/tracesecure',
};
