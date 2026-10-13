// ============================================================
// JuriVault — Download Configuration
// Set the URLs when builds are available.
// ============================================================

export const DOWNLOAD_CONFIG = {
  /**
   * Set to a valid URL when the Windows build is published.
   * Example: 'https://releases.jurivault.tech/JuriVault-Setup-1.0.0.exe'
   */
  windowsDownloadUrl: null as string | null,

  /**
   * Set to a valid URL when the macOS build is published.
   * Example: 'https://releases.jurivault.tech/JuriVault-1.0.0.dmg'
   */
  macosDownloadUrl: null as string | null,
};

// Contact / legal placeholders — fill before going live
export const CONTACT_CONFIG = {
  email: null as string | null,             // e.g. 'contact@jurivault.tech'
  legalEntity: null as string | null,       // e.g. 'JuriVault SAS'
  siret: null as string | null,             // e.g. '123 456 789 00012'
  address: null as string | null,           // e.g. '1 rue du Palais, 75001 Paris'
};

export const NAV_LINKS = [
  { label: 'Produit',          href: '#product' },
  { label: 'Confidentialité',  href: '#privacy' },
  { label: 'Fonctionnalités',  href: '#features' },
  { label: 'FAQ',              href: '#faq' },
];
