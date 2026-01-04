import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { SITE_IMAGES, applySiteImagesCssVars } from './siteImages';
import { fetchPublicConfig } from './publicConfig';

export type SiteImages = typeof SITE_IMAGES;

type SiteImagesContextValue = {
  siteImages: SiteImages;
  updatedAt: string | null;
};

const SiteImagesContext = createContext<SiteImagesContextValue | null>(null);

const pickString = (value: unknown): string | undefined => {
  if (typeof value !== 'string') return undefined;
  const v = value.trim();
  return v ? v : undefined;
};

export function SiteImagesProvider({ children }: { children: React.ReactNode }) {
  const [siteImages, setSiteImages] = useState<SiteImages>(SITE_IMAGES);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    try {
      applySiteImagesCssVars();
    } catch {
      // ignore
    }

    (async () => {
      try {
        const config = await fetchPublicConfig();
        const web = config?.images?.web || {};
        const next: SiteImages = {
          ...SITE_IMAGES,
          heroDoctorTech: pickString(web.heroDoctorTech) ?? SITE_IMAGES.heroDoctorTech,
          dashboardScreen: pickString(web.dashboardScreen) ?? SITE_IMAGES.dashboardScreen,
          clinicSoftware: pickString(web.clinicSoftware) ?? SITE_IMAGES.clinicSoftware,
          modernHospital: pickString(web.modernHospital) ?? SITE_IMAGES.modernHospital,
        };
        if (!cancelled) {
          setSiteImages(next);
          setUpdatedAt(config?.updatedAt ?? null);
          try {
            applySiteImagesCssVars();
          } catch {
            // ignore
          }
        }
      } catch {
        // ignore
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(() => ({ siteImages, updatedAt }), [siteImages, updatedAt]);

  return <SiteImagesContext.Provider value={value}>{children}</SiteImagesContext.Provider>;
}

export function useSiteImages() {
  const ctx = useContext(SiteImagesContext);
  if (!ctx) return { siteImages: SITE_IMAGES, updatedAt: null };
  return ctx;
}
