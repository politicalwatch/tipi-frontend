export default {
  SHORTNAME: process.env.VUE_APP_SHORTNAME || 'front',
  URL: process.env.VUE_APP_URL || 'http://localhost:5000',
  GOOGLE_ANALYTICS: process.env.VUE_APP_GOOGLE_ANALYTICS || 'XXXXXXXXXXXX',
  USE_ALERTS: process.env.VUE_APP_USE_ALERTS || false,
  SCANNER_HELPTEXT: process.env.VUE_APP_SCANNER_HELPTEXT || "",
}
