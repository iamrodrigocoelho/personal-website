// Analytics configuration
// Set env vars in .env.local to enable:
//   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
//   NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "";

export const hasGA = GA_ID.length > 0;
export const hasClarity = CLARITY_ID.length > 0;
