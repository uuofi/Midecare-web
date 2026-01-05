export const SITE_IMAGES: {
  heroDoctorTech: string;
  dashboardScreen: string;
  clinicSoftware: string;
  modernHospital: string;
  errorPlaceholderSvg: string;
  medicalEcgMask: string;
} = {
  // Default to local, server-managed assets.
  // Put these files in your hosting under: /site/
  heroDoctorTech: '/site/hero-doctor-tech.png',
  dashboardScreen: '/site/dashboard-screen.png',
  clinicSoftware: '/site/clinic-software.png',
  modernHospital: '/site/im5.png',

  errorPlaceholderSvg:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==',

  medicalEcgMask:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='180' viewBox='0 0 1200 180'%3E%3Cpath d='M0 90 H120 L140 90 L160 40 L180 140 L200 90 H280 L300 90 L320 55 L340 125 L360 90 H480 L500 90 L520 65 L540 115 L560 90 H680 L700 90 L720 35 L740 145 L760 90 H1200' fill='none' stroke='%23fff' stroke-width='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
};

export function applySiteImagesCssVars(root: HTMLElement = document.documentElement) {
  root.style.setProperty('--medical-ecg-mask', SITE_IMAGES.medicalEcgMask);
}
