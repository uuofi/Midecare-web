export const SITE_IMAGES: {
  heroDoctorTech: string;
  dashboardScreen: string;
  clinicSoftware: string;
  modernHospital: string;
  errorPlaceholderSvg: string;
  medicalEcgMask: string;
} = {
  heroDoctorTech:
    'https://images.unsplash.com/photo-1757152962882-6bf8495b324d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc1NDgzODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  dashboardScreen:
    'https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDF8fHx8MTc2NzU0ODM4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  clinicSoftware:
    'https://images.unsplash.com/photo-1691934286085-c88039d93dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwc29mdHdhcmUlMjBjbGluaWN8ZW58MXx8fHwxNzY3NTQ4MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  modernHospital:
    'https://images.unsplash.com/photo-1764885517847-79d62138cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1vZGVybiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njc1NDgzODR8MA&ixlib=rb-4.1.0&q=80&w=1080',

  errorPlaceholderSvg:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==',

  medicalEcgMask:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='180' viewBox='0 0 1200 180'%3E%3Cpath d='M0 90 H120 L140 90 L160 40 L180 140 L200 90 H280 L300 90 L320 55 L340 125 L360 90 H480 L500 90 L520 65 L540 115 L560 90 H680 L700 90 L720 35 L740 145 L760 90 H1200' fill='none' stroke='%23fff' stroke-width='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
};

export function applySiteImagesCssVars(root: HTMLElement = document.documentElement) {
  root.style.setProperty('--medical-ecg-mask', SITE_IMAGES.medicalEcgMask);
}
