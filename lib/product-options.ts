export const phoneModelsByBrand = {
  Apple: [
    "iPhone 16 Pro Max",
    "iPhone 16 Pro",
    "iPhone 16 Plus",
    "iPhone 16",
    "iPhone 16e",
    "iPhone 15 Pro Max",
    "iPhone 15 Pro",
    "iPhone 15 Plus",
    "iPhone 15",
    "iPhone 14 Pro Max",
    "iPhone 14 Pro",
    "iPhone 14 Plus",
    "iPhone 14",
    "iPhone 13 Pro Max",
    "iPhone 13 Pro",
    "iPhone 13",
    "iPhone SE (3rd Gen)",
  ],
  Samsung: [
    "Samsung Galaxy S25 Ultra",
    "Samsung Galaxy S25+",
    "Samsung Galaxy S25",
    "Samsung Galaxy S24 Ultra",
    "Samsung Galaxy S24+",
    "Samsung Galaxy S24",
    "Samsung Galaxy S23 Ultra",
    "Samsung Galaxy S23+",
    "Samsung Galaxy S23",
    "Samsung Galaxy S22 Ultra",
    "Samsung Galaxy S22+",
    "Samsung Galaxy S22",
    "Samsung Galaxy Z Fold6",
    "Samsung Galaxy Z Flip6",
    "Samsung Galaxy Z Fold5",
    "Samsung Galaxy Z Flip5",
    "Samsung Galaxy A55 5G",
    "Samsung Galaxy A35 5G",
    "Samsung Galaxy A25 5G",
  ],
  Motorola: [
    "Motorola Razr+ (2024)",
    "Motorola Razr (2024)",
    "Motorola Razr+ (2023)",
    "Motorola Razr (2023)",
    "Motorola Edge (2024)",
    "Motorola Edge+ (2023)",
    "Motorola Edge (2023)",
    "Motorola Moto G Stylus 5G (2024)",
    "Motorola Moto G Power 5G (2024)",
    "Motorola Moto G 5G (2024)",
    "Motorola Moto G Play (2024)",
  ],
} as const;

export type PhoneBrand = keyof typeof phoneModelsByBrand;
export type PhoneModel = string;
export const phoneBrands = Object.keys(phoneModelsByBrand) as PhoneBrand[];
export const phoneModels = phoneBrands.flatMap((brand) => phoneModelsByBrand[brand]);
export type CaseTypeKey = "clear" | "translucent" | "silicon";

type CaseTypeOption = {
  key: CaseTypeKey;
  label: string;
  description: string;
  colors: readonly string[];
};

export const caseTypeOptions: Record<CaseTypeKey, CaseTypeOption> = {
  clear: {
    key: "clear",
    label: "Clear",
    description: "Crystal look with full artwork visibility.",
    colors: [],
  },
  translucent: {
    key: "translucent",
    label: "Translucent",
    description: "Frosted finish with balanced style and grip.",
    colors: ["black", "blue", "purple", "green"],
  },
  silicon: {
    key: "silicon",
    label: "Silicon",
    description: "Soft-touch protection and comfortable handling.",
    colors: ["black", "blue", "purple", "green", "white"],
  },
} as const;

export const caseTypeList = Object.values(caseTypeOptions);
