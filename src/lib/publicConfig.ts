import { requestJson } from './api';

export type PublicConfig = {
  images: {
    web: {
      heroDoctorTech?: string;
      dashboardScreen?: string;
      clinicSoftware?: string;
      modernHospital?: string;
    };
    app: {
      homeCarouselRemote1?: string;
      homeCarouselRemote2?: string;
    };
  };
  updatedAt?: string | null;
};

export async function fetchPublicConfig(): Promise<PublicConfig> {
  const res = await requestJson<{ config: PublicConfig }>({ path: '/api/public/config' });
  return res?.config;
}
