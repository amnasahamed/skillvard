export const siteConfig = {
  siteName: "Skillvard",
  legalName: "SKILLVARD INTERNATIONAL LLP",
  llpin: "ACZ-5861",
  siteUrl: "https://www.skillvard.in",
  whatsappNumber: "918129310715",
  hubWhatsappMessage:
    "Hi, I'd like to learn more about Skillvard courses. Can you help?",
  whatsappMessage:
    "ഹായ്, NIOS Plus Two-യെ കുറിച്ച് സംസാരിക്കാൻ ആഗ്രഹിക്കുന്നു. ഒരുപാട് സംശയങ്ങളുണ്ട് — സഹായിക്കുമോ?",
  phone: "+91 81293 10715",
  phoneTel: "+918129310715",
  address: {
    name: "സ്കിൽവാർഡ്",
    nameEn: "Skillvard International LLP",
    lines: ["14/2004-A, വയലിൽ, മുക്കം", "കോഴിക്കോട്, കേരളം 673602"],
    linesEn: [
      "14/2004-A, Vayalil, Mukkam",
      "Kozhikode, Kerala 673602, India",
    ],
  },
  email: "hello@skillvard.com",
  /** Shown as guidance — confirm exact fee before publish */
  programFeeLabel: "സമഗ്ര പിന്തുണ പാക്കേജ്",
  programFeeApprox: "₹20,000",
  programFeeNoteMl:
    "ഒറ്റയ്ക്ക് പഠിച്ച് കഷ്ടപ്പെടുന്നതിനേക്കാൾ മികച്ചത് — വിജയം വരെ കൂടെ നിൽക്കുന്ന ഒരു മെന്ററുടെ പിന്തുണ.",
} as const;

export function getWhatsAppUrl(
  location: string,
  message: string = siteConfig.whatsappMessage,
): string {
  const text = `${message} (${location})`;
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
