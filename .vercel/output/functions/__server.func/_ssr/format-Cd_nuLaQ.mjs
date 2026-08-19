//#region node_modules/.nitro/vite/services/ssr/assets/format-Cd_nuLaQ.js
var MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
function formatShowDate(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	if (!y || !m || !d) return iso;
	return `${MONTHS[m - 1]} ${d}, ${y}`;
}
function formatShowTime(hhmm) {
	if (!hhmm) return "";
	const [hStr, mStr] = hhmm.split(":");
	let h = Number(hStr);
	const m = Number(mStr);
	if (Number.isNaN(h)) return hhmm;
	const suffix = h >= 12 ? "p.m." : "a.m.";
	h = h % 12 || 12;
	return m ? `${h}:${String(m).padStart(2, "0")} ${suffix}` : `${h} ${suffix}`;
}
//#endregion
export { formatShowTime as n, formatShowDate as t };
