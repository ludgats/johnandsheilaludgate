//#region node_modules/.nitro/vite/services/ssr/assets/admins-BfKTxyPC.js
/** Only these emails can update the public site. Extra family emails can be added in the editor. */
var FAMILY_ADMIN_EMAILS = ["sjludgate@hotmail.com"];
function parseAdminEmails(raw) {
	return (raw ?? "").split(/[\s,;]+/).map((e) => e.trim().toLowerCase()).filter((e) => e.includes("@"));
}
function isFamilyAdminEmail(email, extra = []) {
	const value = email?.trim().toLowerCase() ?? "";
	if (!value) return false;
	return FAMILY_ADMIN_EMAILS.includes(value) || extra.includes(value);
}
//#endregion
export { isFamilyAdminEmail as n, parseAdminEmails as r, FAMILY_ADMIN_EMAILS as t };
