import {
  caseTypeOptions,
  type CaseTypeKey,
  phoneModels,
  type PhoneModel,
} from "@/lib/product-options";

type RawParam = string | string[] | undefined;

export type ConfigSelection = {
  model?: PhoneModel;
  caseType?: CaseTypeKey;
  color?: string;
};

export function getSingleParam(param: RawParam): string | undefined {
  if (typeof param === "string") return param;
  if (Array.isArray(param)) return param[0];
  return undefined;
}

export function isValidPhoneModel(model?: string): model is PhoneModel {
  if (!model) return false;
  return phoneModels.some((phoneModel) => phoneModel === model);
}

export function isCaseTypeKey(caseType?: string): caseType is CaseTypeKey {
  if (!caseType) return false;
  return caseType in caseTypeOptions;
}

export function isValidColor(caseType: CaseTypeKey, color?: string): boolean {
  if (!color) return false;
  return caseTypeOptions[caseType].colors.includes(color.toLowerCase());
}
