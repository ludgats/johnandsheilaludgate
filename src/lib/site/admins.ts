/** Only these emails can update the public site. Extra family emails can be added in the editor. */
export const FAMILY_ADMIN_EMAILS = ["sjludgate@hotmail.com"];

export function parseAdminEmails(raw: string | null | undefined): string[] {
  return (raw ?? "")
    .split(/[\s,;]+/)
    .map((e) => e.trim().toLowerCase())
    .filter((e) => e.includes("@"));
}

export function isFamilyAdminEmail(email: string | null | undefined, extra: string[] = []): boolean {
  const value = email?.trim().toLowerCase() ?? "";
  if (!value) return false;
  return FAMILY_ADMIN_EMAILS.includes(value) || extra.includes(value);
}
