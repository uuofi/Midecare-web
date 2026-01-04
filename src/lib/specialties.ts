export type SpecialtyItem = {
  slug: string;
  title: string;
};

export const specialtyItems: SpecialtyItem[] = [
  { slug: 'cardiology', title: 'تخصص القلب' },
  { slug: 'neurology', title: 'تخصص الأعصاب' },
  { slug: 'dermatology', title: 'تخصص الجلدية' },
  { slug: 'pediatrics', title: 'تخصص الأطفال' },
  { slug: 'orthopedics', title: 'تخصص العظام' },
  { slug: 'ent', title: 'تخصص الأذن والأنف والحنجرة' },
  { slug: 'radiology', title: 'تخصص الأشعة' },
  { slug: 'general-surgery', title: 'تخصص الجراحة العامة' },
  { slug: 'ophthalmology', title: 'تخصص العيون' },
  { slug: 'aesthetics', title: 'تخصص التجميل' },
  { slug: 'dentistry', title: 'تخصص الأسنان' },
];

export const specialtyOptions = specialtyItems.map((s) => ({
  value: s.slug,
  label: s.title,
}));
