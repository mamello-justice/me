export const WEBSITE_DOMAIN = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN

export const HTTPS = process.env.NEXT_PUBLIC_HTTPS
export const URL_PROTOCOL = HTTPS ? 'https://' : 'http://'

export const WEBSITE_URL = WEBSITE_DOMAIN ? `${URL_PROTOCOL}${WEBSITE_DOMAIN}` : ''

export const IMAGE_LOADER_URL = process.env.NEXT_PUBLIC_IMAGE_LOADER_URL ?? WEBSITE_URL
