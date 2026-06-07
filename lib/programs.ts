export type ProgramStatus = "active" | "comingSoon";

export type Program = {
  id: string;
  slug: string;
  titleEn: string;
  titleMl: string;
  descriptionEn: string;
  descriptionMl: string;
  outcomeEn: string;
  status: ProgramStatus;
  href: string;
  image: string;
  badgeEn?: string;
  badgeMl?: string;
};

export const programs: Program[] = [
  {
    id: "nios",
    slug: "nios-plus-two",
    titleEn: "NIOS 10th & Plus Two",
    titleMl: "NIOS പ്ലസ് ടു",
    descriptionEn:
      "Flexible open schooling with warm mentor support until you pass.",
    descriptionMl:
      "തോൽവി അവസാനമല്ല — സ്നേഹപൂർണ്ണമായ പിന്തുണയോടെ NIOS പൂർത്തിയാക്കുക. പരീക്ഷ പാസാകുന്നതുവരെ കൂടെ.",
    outcomeEn: "Flexible open schooling with warm support until you pass",
    status: "active",
    href: "/nios-plus-two",
    image: "/images/nios-hero.jpg",
    badgeEn: "Admission open",
    badgeMl: "ഇപ്പോൾ അഡ്മിഷൻ",
  },
];

export const activePrograms = programs.filter((p) => p.status === "active");
