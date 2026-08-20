import { i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { i as getSql, t as authMiddleware } from "./middleware-ChX83k2O.mjs";
import { n as isFamilyAdminEmail, r as parseAdminEmails, t as FAMILY_ADMIN_EMAILS } from "./admins-BfKTxyPC.mjs";
import { a as SEED_REVIEWS, i as SEED_PHOTOS, o as SEED_VIDEOS, t as DEFAULT_SETTINGS } from "./content-C7zs6QT1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/queries-DeTvKnPo.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var SEED_ALBUMS = [
	{
		title: "Folk Rock",
		year: 2025,
		slug: "folk-rock",
		cover: "/media/albums/folk-rock.jpg",
		appleUrl: "https://music.apple.com/us/album/folk-rock/1852258611",
		blurb: "John and Sheila are joined by their sons Luke, Anthony and Shane. The folk of the duo meets the rock of Beautiful Nothing — acoustic songs with a new electric twist. Released November 2025.",
		kind: "studio",
		creditsPdf: "/media/credits/folk-rock.pdf",
		tracks: [
			{
				n: 1,
				title: "Electric Guitars",
				duration: "4:19"
			},
			{
				n: 2,
				title: "Northern Soul",
				duration: "4:06"
			},
			{
				n: 3,
				title: "Masquerade",
				duration: "3:29"
			},
			{
				n: 4,
				title: "Sad & Beautiful",
				duration: "5:57"
			},
			{
				n: 5,
				title: "Never Too Late",
				duration: "4:17"
			},
			{
				n: 6,
				title: "Coming Home To You",
				duration: "2:59"
			},
			{
				n: 7,
				title: "Fleeing Forward",
				duration: "3:33"
			},
			{
				n: 8,
				title: "Requiem For Love",
				duration: "4:35"
			},
			{
				n: 9,
				title: "Grace",
				duration: "3:46"
			},
			{
				n: 10,
				title: "Through The Glass Darkly",
				duration: "3:23"
			},
			{
				n: 11,
				title: "One Thing's For Certain",
				duration: "3:25"
			},
			{
				n: 12,
				title: "I Walk On",
				duration: "7:44"
			}
		]
	},
	{
		title: "The Kitchen Sessions",
		year: 2023,
		slug: "the-kitchen-sessions",
		cover: "/media/albums/the-kitchen-sessions.jpg",
		appleUrl: "https://music.apple.com/us/album/the-kitchen-sessions/1691140812",
		blurb: "Recorded around the family kitchen table in 2023. #2 in downloads on the APD Global Radio Indicator Chart (June 2023). “The Gift Of An Ordinary Day” made the Folk Alliance International Top 10.",
		kind: "studio",
		creditsPdf: "/media/credits/kitchen-sessions.pdf",
		lyricsPdf: "/media/lyrics/kitchen-sessions.pdf",
		tracks: [
			{
				n: 1,
				title: "The Gift Of An Ordinary Day",
				duration: "3:02"
			},
			{
				n: 2,
				title: "Long Shadows",
				duration: "3:35"
			},
			{
				n: 3,
				title: "A Silent Prayer",
				duration: "3:38"
			},
			{
				n: 4,
				title: "Wayfaring Stranger",
				duration: "4:09"
			},
			{
				n: 5,
				title: "Time Can't Stand Still",
				duration: "3:44"
			},
			{
				n: 6,
				title: "Nineteen Eighty-Four All Over Again",
				duration: "4:12"
			},
			{
				n: 7,
				title: "Daily Dose Of Nightly News",
				duration: "3:17"
			},
			{
				n: 8,
				title: "On Valentine's Day",
				duration: "3:26"
			},
			{
				n: 9,
				title: "Children Having Children",
				duration: "4:08"
			},
			{
				n: 10,
				title: "Halloween Dad",
				duration: "4:01"
			},
			{
				n: 11,
				title: "Songs Of Peace And Love",
				duration: "3:55"
			},
			{
				n: 12,
				title: "End Of Summer",
				duration: "3:32"
			}
		]
	},
	{
		title: "What the Camera Couldn't See",
		year: 2018,
		slug: "what-the-camera-couldn-t-see",
		cover: "/media/albums/what-the-camera-couldn-t-see.jpg",
		appleUrl: "https://music.apple.com/us/album/what-the-camera-couldnt-see/1692032240",
		blurb: "2018 studio album. Jim Marino of CFMU’s Freewheeling Folk Show named it one of his Top 10 CDs of the year for Penguin Eggs Magazine.",
		kind: "studio",
		creditsPdf: "/media/credits/what-the-camera.pdf",
		lyricsPdf: "/media/lyrics/what-the-camera.pdf",
		tracks: [
			{
				n: 1,
				title: "Through The Glass Darkly",
				duration: "3:23"
			},
			{
				n: 2,
				title: "The Old Man Knows",
				duration: "3:22"
			},
			{
				n: 3,
				title: "Sad & Beautiful",
				duration: "5:57"
			},
			{
				n: 4,
				title: "Between A Whisper & A Sigh",
				duration: "3:16"
			},
			{
				n: 5,
				title: "Trick Of The Light",
				duration: "3:13"
			},
			{
				n: 6,
				title: "Back In The Shadows",
				duration: "3:53"
			},
			{
				n: 7,
				title: "Hush Little Baby",
				duration: "3:18"
			},
			{
				n: 8,
				title: "I Pray",
				duration: "3:52"
			},
			{
				n: 9,
				title: "Employee 41759",
				duration: "3:52"
			},
			{
				n: 10,
				title: "I Walk On",
				duration: "7:44"
			},
			{
				n: 11,
				title: "Almost Through",
				duration: "3:25"
			}
		]
	},
	{
		title: "Two, Three, Four... (Live - Volume Two)",
		year: 2019,
		slug: "two-three-four-live-volume-two",
		cover: "/media/albums/two-three-four-live-volume-two.jpg",
		appleUrl: "https://music.apple.com/us/album/two-three-four-live-volume-two/1821934218",
		blurb: "Live off-the-floor, 2019. Just two voices, an acoustic guitar, a bass and a harmonica — the count-in that starts almost every Ludgate show.",
		kind: "live",
		creditsPdf: "/media/credits/two-three-four-vol-two.pdf",
		tracks: [
			{
				n: 1,
				title: "On This Guitar (Live)",
				duration: "2:09"
			},
			{
				n: 2,
				title: "Time Can't Stand Still (Live)",
				duration: "3:44"
			},
			{
				n: 3,
				title: "Trick Of The Light (Live)",
				duration: "3:12"
			},
			{
				n: 4,
				title: "Between A Whisper And A Sigh (Live)",
				duration: "4:47"
			},
			{
				n: 5,
				title: "Long Shadows (Live)",
				duration: "3:44"
			},
			{
				n: 6,
				title: "Employee 41759 (Live)",
				duration: "4:16"
			},
			{
				n: 7,
				title: "End of Summer (Live)",
				duration: "3:58"
			},
			{
				n: 8,
				title: "Riding On This Train Again (Live)",
				duration: "3:21"
			},
			{
				n: 9,
				title: "Songs Of Peace And Love (Live)",
				duration: "4:05"
			}
		]
	},
	{
		title: "Two, Three, Four... (Live - Volume One)",
		year: 2014,
		slug: "two-three-four-live-volume-one",
		cover: "/media/albums/two-three-four-live-volume-one.jpg",
		appleUrl: "https://music.apple.com/us/album/two-three-four-live-volume-one/1821933520",
		blurb: "Live off-the-floor, 2014. Stripped-down performances of old and new songs that capture the character of a John & Sheila night.",
		kind: "live",
		creditsPdf: "/media/credits/two-three-four-vol-one.pdf",
		tracks: [
			{
				n: 1,
				title: "Robert Frost Said (Live)",
				duration: "3:25"
			},
			{
				n: 2,
				title: "Masquerade (Live)",
				duration: "3:17"
			},
			{
				n: 3,
				title: "Family Man (Live)",
				duration: "3:33"
			},
			{
				n: 4,
				title: "Between Us (Live)",
				duration: "3:06"
			},
			{
				n: 5,
				title: "Sad & Beautiful (Live)",
				duration: "4:54"
			},
			{
				n: 6,
				title: "About Me (Live)",
				duration: "4:56"
			},
			{
				n: 7,
				title: "Hockey Night In Canada (Live)",
				duration: "4:04"
			},
			{
				n: 8,
				title: "The Innocent Years (Live)",
				duration: "4:36"
			},
			{
				n: 9,
				title: "Bobblehead Boogie (The Yes Man Song) [Live]",
				duration: "3:15"
			},
			{
				n: 10,
				title: "A Candle For The Prodigal (Live)",
				duration: "3:56"
			},
			{
				n: 11,
				title: "Steinbeck's Guitar (Live)",
				duration: "3:31"
			},
			{
				n: 12,
				title: "Coureur de Bois To Coureur d'Étoiles (Live)",
				duration: "4:26"
			},
			{
				n: 13,
				title: "Walk On (Live)",
				duration: "5:22"
			},
			{
				n: 14,
				title: "One Thing's For Certain (Live)",
				duration: "3:41"
			},
			{
				n: 15,
				title: "Wedding Song (Live)",
				duration: "4:14"
			},
			{
				n: 16,
				title: "I'm A Dog (Live)",
				duration: "2:58"
			},
			{
				n: 17,
				title: "A Dog's Last Ride (Live)",
				duration: "4:27"
			},
			{
				n: 18,
				title: "Northern Soul (Live)",
				duration: "4:51"
			},
			{
				n: 19,
				title: "Too Much Body (Live)",
				duration: "3:24"
			},
			{
				n: 20,
				title: "I'm Not Worried (Live)",
				duration: "2:56"
			}
		]
	},
	{
		title: "Northern Soul",
		year: 2013,
		slug: "northern-soul",
		cover: "/media/albums/northern-soul.jpg",
		appleUrl: "https://music.apple.com/us/album/northern-soul/1687219124",
		blurb: "2013. The title track won Folk Music Ontario’s Songs From The Heart (Multicultural). Three songs were recognized by NSAI in Nashville.",
		kind: "studio",
		creditsPdf: "/media/credits/northern-soul.pdf",
		lyricsPdf: "/media/lyrics/northern-soul.pdf",
		tracks: [
			{
				n: 1,
				title: "Electric Guitars",
				duration: "4:19"
			},
			{
				n: 2,
				title: "Northern Soul",
				duration: "4:06"
			},
			{
				n: 3,
				title: "One Thing’s for Certain",
				duration: "3:25"
			},
			{
				n: 4,
				title: "In Between Days",
				duration: "3:48"
			},
			{
				n: 5,
				title: "Coming Home to You",
				duration: "2:59"
			},
			{
				n: 6,
				title: "Blink",
				duration: "3:25"
			},
			{
				n: 7,
				title: "Requiem for Love",
				duration: "4:35"
			},
			{
				n: 8,
				title: "Fine Line",
				duration: "3:20"
			},
			{
				n: 9,
				title: "Inside Job",
				duration: "3:10"
			},
			{
				n: 10,
				title: "Let’s Just Say",
				duration: "4:36"
			},
			{
				n: 11,
				title: "A Candle for the Prodigal",
				duration: "3:33"
			},
			{
				n: 12,
				title: "I’m a Dog",
				duration: "2:29"
			},
			{
				n: 13,
				title: "A Dog’s Last Ride (For Abbie)",
				duration: "3:54"
			}
		]
	},
	{
		title: "Running Through The Innocent Years",
		year: 2011,
		slug: "running-through-the-innocent-years",
		cover: "/media/albums/running-through-the-innocent-years.jpg",
		appleUrl: "https://music.apple.com/us/album/running-through-the-innocent-years/1692031894",
		blurb: "2011. Strong folk/roots airplay in Canada and the U.S. The video for “Never Too Late” was shot in and around Hamilton.",
		kind: "studio",
		creditsPdf: "/media/credits/innocent-years.pdf",
		lyricsPdf: "/media/lyrics/innocent-years.pdf",
		tracks: [
			{
				n: 1,
				title: "Payback Road",
				duration: "4:12"
			},
			{
				n: 2,
				title: "Never Too Late",
				duration: "4:17"
			},
			{
				n: 3,
				title: "Masquerade",
				duration: "3:29"
			},
			{
				n: 4,
				title: "The Innocent Years",
				duration: "4:05"
			},
			{
				n: 5,
				title: "Time’s March",
				duration: "4:15"
			},
			{
				n: 6,
				title: "Get It All In",
				duration: "3:09"
			},
			{
				n: 7,
				title: "Fly Away",
				duration: "3:14"
			},
			{
				n: 8,
				title: "The Coming of Winter",
				duration: "3:46"
			},
			{
				n: 9,
				title: "Sealed With A Song",
				duration: "3:14"
			},
			{
				n: 10,
				title: "Colours",
				duration: "3:33"
			},
			{
				n: 11,
				title: "Wasted Time",
				duration: "2:46"
			}
		]
	},
	{
		title: "Suburban Folk",
		year: 2009,
		slug: "suburban-folk",
		cover: "/media/albums/suburban-folk.jpg",
		appleUrl: "https://music.apple.com/us/album/suburban-folk/1692032037",
		blurb: "Released in 2009 as Suburban Tales / Suburban Folk. The video for “Steinbeck’s Guitar” was picked up by the Steinbeck Centre in Salinas, California.",
		kind: "studio",
		creditsPdf: "/media/credits/suburban-tales.pdf",
		tracks: [
			{
				n: 1,
				title: "Grace",
				duration: "3:46"
			},
			{
				n: 2,
				title: "Karaoke Land",
				duration: "3:11"
			},
			{
				n: 3,
				title: "For You",
				duration: "3:15"
			},
			{
				n: 4,
				title: "Fleeing Forward",
				duration: "3:34"
			},
			{
				n: 5,
				title: "Bobblehead Boogie - The Yes Man Song",
				duration: "2:22"
			},
			{
				n: 6,
				title: "Steinbeck's Guitar",
				duration: "3:16"
			},
			{
				n: 7,
				title: "The Garden",
				duration: "2:25"
			},
			{
				n: 8,
				title: "Adam's Blues",
				duration: "2:51"
			},
			{
				n: 9,
				title: "Robert Frost Said",
				duration: "3:35"
			},
			{
				n: 10,
				title: "Another Mile",
				duration: "2:32"
			},
			{
				n: 11,
				title: "Forgotten",
				duration: "3:19"
			},
			{
				n: 12,
				title: "Trickle Down",
				duration: "2:38"
			},
			{
				n: 13,
				title: "Recovered",
				duration: "4:23"
			},
			{
				n: 14,
				title: "Walls Go Up",
				duration: "3:00"
			},
			{
				n: 15,
				title: "I'm Not Worried",
				duration: "2:24"
			}
		]
	},
	{
		title: "Passengers",
		year: 2003,
		slug: "passengers",
		cover: "/media/albums/passengers.jpg",
		appleUrl: "https://music.apple.com/us/album/passengers/1692029571",
		blurb: "The first studio CD. Nominated at the Hamilton Music Scene awards.",
		kind: "studio",
		creditsPdf: "/media/credits/passengers.pdf",
		tracks: [
			{
				n: 1,
				title: "The Lighthouse",
				duration: "2:32"
			},
			{
				n: 2,
				title: "Let Me Be Yours",
				duration: "2:31"
			},
			{
				n: 3,
				title: "Armour Of God",
				duration: "1:56"
			},
			{
				n: 4,
				title: "As A Father",
				duration: "3:00"
			},
			{
				n: 5,
				title: "The Answering Heart",
				duration: "3:14"
			},
			{
				n: 6,
				title: "Between You and I",
				duration: "2:46"
			},
			{
				n: 7,
				title: "Jesus Lover Of My Soul",
				duration: "3:22"
			},
			{
				n: 8,
				title: "Rest My Soul",
				duration: "3:03"
			},
			{
				n: 9,
				title: "A Seekers Prayer",
				duration: "3:18"
			},
			{
				n: 10,
				title: "Give Me Eyes To See",
				duration: "3:22"
			},
			{
				n: 11,
				title: "Lord We Need Your Touch",
				duration: "3:24"
			},
			{
				n: 12,
				title: "Backslider's Lament",
				duration: "4:52"
			},
			{
				n: 13,
				title: "In The Still Of The Night",
				duration: "3:15"
			},
			{
				n: 14,
				title: "Benediction",
				duration: "1:15"
			}
		]
	}
];
var SEED_SHOWS = [
	{
		date: "2026-12-03",
		time: "15:00",
		venue: "The Kensington",
		address: "25 Lakeshore Rd W",
		city: "Oakville",
		province: "ON"
	},
	{
		date: "2026-11-19",
		time: "14:00",
		venue: "Appleby Place",
		address: "500 Appleby Line",
		city: "Burlington",
		province: "ON"
	},
	{
		date: "2026-11-13",
		time: "14:30",
		venue: "Birkdale Place",
		address: "611 Farmstead Dr",
		city: "Milton",
		province: "ON"
	},
	{
		date: "2026-11-12",
		time: "14:45",
		venue: "Christopher Terrace",
		address: "3131 New St",
		city: "Burlington",
		province: "ON"
	},
	{
		date: "2026-11-05",
		time: "14:15",
		venue: "The Beechwood",
		address: "1500 Rathburn Rd E",
		city: "Mississauga",
		province: "ON"
	},
	{
		date: "2026-10-30",
		time: "14:30",
		venue: "Lundy Manor",
		address: "7860 Lundy's Ln",
		city: "Niagara Falls",
		province: "ON"
	},
	{
		date: "2026-10-24",
		time: "14:00",
		venue: "The Village Of Wentworth Heights",
		address: "1620 Upper Wentworth St",
		city: "Hamilton",
		province: "ON"
	},
	{
		date: "2026-10-15",
		time: "14:15",
		venue: "The Beechwood",
		address: "1500 Rathburn Rd E",
		city: "Mississauga",
		province: "ON"
	},
	{
		date: "2026-10-13",
		time: "19:15",
		venue: "The Village Of Tansley Woods",
		address: "4100 Upper Middle Rd",
		city: "Burlington",
		province: "ON"
	},
	{
		date: "2026-10-08",
		time: "15:00",
		venue: "Churchill Place",
		address: "345 Church St",
		city: "Oakville",
		province: "ON"
	},
	{
		date: "2026-09-10",
		time: "15:00",
		venue: "The Kensington",
		address: "25 Lakeshore Rd W",
		city: "Oakville",
		province: "ON"
	},
	{
		date: "2026-09-08",
		time: "14:00",
		venue: "The Village Of Riverside Glen",
		address: "60 Woodlawn Rd E",
		city: "Guelph",
		province: "ON"
	},
	{
		date: "2026-08-28",
		time: "14:30",
		venue: "Park View",
		address: "254 Dalhousie St",
		city: "Brantford",
		province: "ON"
	},
	{
		date: "2026-08-09",
		time: "13:45",
		venue: "The Court At Rushdale",
		address: "1360 Upper Sherman Ave",
		city: "Hamilton",
		province: "ON"
	},
	{
		date: "2026-08-06",
		time: "14:15",
		venue: "The Beechwood",
		address: "1500 Rathburn Rd E",
		city: "Mississauga",
		province: "ON"
	},
	{
		date: "2026-07-31",
		time: "14:00",
		venue: "Appleby Place",
		address: "500 Appleby Line",
		city: "Burlington",
		province: "ON"
	},
	{
		date: "2026-07-16",
		time: "14:15",
		venue: "The Beechwood",
		address: "1500 Rathburn Rd E",
		city: "Mississauga",
		province: "ON"
	},
	{
		date: "2026-07-09",
		time: "14:45",
		venue: "Christopher Terrace",
		address: "3131 New St",
		city: "Burlington",
		province: "ON"
	},
	{
		date: "2026-07-08",
		time: "15:00",
		venue: "Churchill Place",
		address: "345 Church St",
		city: "Oakville",
		province: "ON"
	},
	{
		date: "2026-07-01",
		time: "14:00",
		venue: "Burlington Gardens",
		address: "300 Plains Rd W",
		city: "Burlington",
		province: "ON"
	},
	{
		date: "2026-06-30",
		time: "14:15",
		venue: "Hampton Terrace",
		address: "75 Plains Road West",
		city: "Burlington",
		province: "ON"
	},
	{
		date: "2026-05-28",
		time: "15:00",
		venue: "The Kensington",
		address: "25 Lakeshore Rd W",
		city: "Oakville",
		province: "ON"
	},
	{
		date: "2026-05-22",
		time: "14:30",
		venue: "Birkdale Place",
		address: "611 Farmstead Dr",
		city: "Milton",
		province: "ON"
	},
	{
		date: "2026-05-13",
		time: "14:30",
		venue: "Lundy Manor",
		address: "7860 Lundy's Ln",
		city: "Niagara Falls",
		province: "ON"
	},
	{
		date: "2026-05-12",
		time: "19:15",
		venue: "The Village Of Tansley Woods",
		address: "4100 Upper Middle Rd",
		city: "Burlington",
		province: "ON"
	},
	{
		date: "2026-05-09",
		time: "14:00",
		venue: "The Village Of Wentworth Heights",
		address: "1620 Upper Wentworth St",
		city: "Hamilton",
		province: "ON"
	},
	{
		date: "2026-05-07",
		time: "14:15",
		venue: "The Beechwood",
		address: "1500 Rathburn Rd E",
		city: "Mississauga",
		province: "ON"
	},
	{
		date: "2026-04-16",
		time: "14:15",
		venue: "The Village Of Riverside Glen",
		address: "60 Woodlawn Rd E",
		city: "Guelph",
		province: "ON"
	},
	{
		date: "2026-04-12",
		time: "13:45",
		venue: "The Court At Rushdale",
		address: "1360 Upper Sherman Ave",
		city: "Hamilton",
		province: "ON"
	},
	{
		date: "2026-04-09",
		time: "14:15",
		venue: "The Beechwood",
		address: "1500 Rathburn Rd E",
		city: "Mississauga",
		province: "ON"
	},
	{
		date: "2026-04-08",
		time: "14:15",
		venue: "Hampton Terrace",
		address: "75 Plains Road West",
		city: "Burlington",
		province: "ON"
	},
	{
		date: "2026-03-27",
		time: "14:30",
		venue: "Park View",
		address: "254 Dalhousie St, Brantford, ON N3S 3V2",
		city: "Brantford",
		province: "ON"
	},
	{
		date: "2026-03-25",
		time: "14:00",
		venue: "SLEC Suite",
		address: "120, 2030 Bristol Cir",
		city: "Oakville",
		province: "ON"
	},
	{
		date: "2026-03-17",
		time: "14:30",
		venue: "Birkdale Place",
		address: "611 Farmstead Dr",
		city: "Milton",
		province: "ON"
	},
	{
		date: "2026-02-25",
		time: "14:00",
		venue: "St. Joseph's Villa",
		address: "56 Governors Rd",
		city: "Dundas",
		province: "ON"
	},
	{
		date: "2026-02-19",
		time: "14:45",
		venue: "Christopher Terrace",
		address: "3131 New St",
		city: "Burlington",
		province: "ON"
	},
	{
		date: "2026-02-13",
		time: "14:15",
		venue: "Hampton Terrace",
		address: "75 Plains Road West",
		city: "Burlington",
		province: "ON"
	},
	{
		date: "2026-02-11",
		time: "15:00",
		venue: "St. Joseph's Villa",
		address: "56 Governors Rd",
		city: "Dundas",
		province: "ON"
	},
	{
		date: "2026-02-05",
		time: "15:00",
		venue: "The Kensington",
		address: "25 Lakeshore Rd W",
		city: "Oakville",
		province: "ON"
	},
	{
		date: "2026-01-27",
		time: "19:00",
		venue: "Shalom Village",
		address: "70 Macklin St N",
		city: "Hamilton",
		province: "ON"
	},
	{
		date: "2026-01-20",
		time: "19:15",
		venue: "The Village Of Tansley Woods",
		address: "4100 Upper Middle Rd",
		city: "Burlington",
		province: "ON"
	},
	{
		date: "2026-01-15",
		time: "14:00",
		venue: "Appleby Place",
		address: "500 Appleby Line",
		city: "Burlington",
		province: "ON"
	},
	{
		date: "2026-01-08",
		time: "14:15",
		venue: "The Beechwood",
		address: "1500 Rathburn Rd E",
		city: "Mississauga",
		province: "ON"
	}
];
var seedLock = { done: false };
async function ensureSeeded(sql) {
	if (seedLock.done) return;
	if (((await sql`select count(*)::int as c from shows`)[0]?.c ?? 0) > 0) {
		seedLock.done = true;
		return;
	}
	for (const [key, value] of Object.entries(DEFAULT_SETTINGS)) await sql`insert into site_settings (key, value) values (${key}, ${value}) on conflict (key) do nothing`;
	for (const s of SEED_SHOWS) await sql`
      insert into shows (show_date, show_time, venue, address, city, province)
      values (${s.date}, ${s.time}, ${s.venue}, ${s.address}, ${s.city}, ${s.province})
    `;
	let i = 0;
	for (const r of SEED_REVIEWS) {
		await sql`
      insert into reviews (quote, attribution, publication, featured, sort_order)
      values (${r.quote}, ${r.attribution}, ${r.publication}, ${r.featured}, ${i})
    `;
		i += 1;
	}
	i = 0;
	for (const v of SEED_VIDEOS) {
		await sql`
      insert into videos (title, youtube_id, note, sort_order)
      values (${v.title}, ${v.youtubeId}, ${v.note}, ${i})
    `;
		i += 1;
	}
	i = 0;
	for (const p of SEED_PHOTOS) {
		await sql`
      insert into photos (src, caption, sort_order)
      values (${p.src}, ${p.caption}, ${i})
    `;
		i += 1;
	}
	seedLock.done = true;
}
async function requireAdmin(sql, userId) {
	if (userId === "dev-user") return;
	const users = await sql`select email from "user" where id = ${userId}`;
	const extra = await sql`select value from site_settings where key = 'adminEmails'`;
	const allowed = parseAdminEmails(extra[0]?.value);
	if (!isFamilyAdminEmail(users[0]?.email, allowed)) throw new Error("This sign-in is not allowed to update the site.");
}
async function readSettings(sql) {
	const rows = await sql`select key, value from site_settings`;
	const map = Object.fromEntries(rows.map((r) => [r.key, r.value]));
	return {
		phone: map.phone ?? DEFAULT_SETTINGS.phone,
		email: map.email ?? DEFAULT_SETTINGS.email,
		city: map.city ?? DEFAULT_SETTINGS.city,
		announcement: map.announcement || DEFAULT_SETTINGS.announcement,
		homeQuote: map.homeQuote || DEFAULT_SETTINGS.homeQuote,
		homeQuoteBy: map.homeQuoteBy || DEFAULT_SETTINGS.homeQuoteBy,
		heroImage: map.heroImage || DEFAULT_SETTINGS.heroImage,
		heroImageMobile: map.heroImageMobile || DEFAULT_SETTINGS.heroImageMobile
	};
}
var getPublicSite_createServerFn_handler = createServerRpc({
	id: "15d94654242c9ff40679a1d61b4762ca86f94f5ace54c64699e97803d74dd93a",
	name: "getPublicSite",
	filename: "src/lib/site/queries.ts"
}, (opts) => getPublicSite.__executeServer(opts));
var getPublicSite = createServerFn({ method: "GET" }).handler(getPublicSite_createServerFn_handler, async () => {
	const sql = await getSql();
	await ensureSeeded(sql);
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	return {
		upcoming: await sql`
    select id, show_date as "showDate", show_time as "showTime", venue, address, city, province, notes
    from shows
    where show_date >= ${today}
    order by show_date asc, show_time asc
  `,
		recent: await sql`
    select id, show_date as "showDate", show_time as "showTime", venue, address, city, province, notes
    from shows
    where show_date < ${today}
    order by show_date desc
    limit 8
  `,
		reviews: await sql`
    select id, quote, attribution, publication, featured
    from reviews
    order by sort_order asc, id asc
  `,
		videos: await sql`
    select id, title, youtube_id as "youtubeId", note
    from videos
    order by sort_order asc, id asc
  `,
		photos: await sql`
    select id, src, caption from photos order by sort_order asc, id asc
  `,
		settings: await readSettings(sql),
		albums: SEED_ALBUMS,
		messageCount: (await sql`select count(*)::int as c from messages`)[0]?.c ?? 0
	};
});
var getAdminBundle_createServerFn_handler = createServerRpc({
	id: "1e6c9fdd573bdf61c19013e22c69b6c0da80e6eca5bcee1d3d3749ef33998338",
	name: "getAdminBundle",
	filename: "src/lib/site/queries.ts"
}, (opts) => getAdminBundle.__executeServer(opts));
var getAdminBundle = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getAdminBundle_createServerFn_handler, async ({ context }) => {
	const sql = await getSql();
	await ensureSeeded(sql);
	await requireAdmin(sql, context.userId);
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	return {
		upcoming: await sql`
      select id, show_date as "showDate", show_time as "showTime", venue, address, city, province, notes
      from shows where show_date >= ${today}
      order by show_date asc, show_time asc
    `,
		past: await sql`
      select id, show_date as "showDate", show_time as "showTime", venue, address, city, province, notes
      from shows where show_date < ${today}
      order by show_date desc
    `,
		reviews: await sql`
      select id, quote, attribution, publication, featured from reviews order by sort_order, id
    `,
		videos: await sql`
      select id, title, youtube_id as "youtubeId", note from videos order by sort_order, id
    `,
		photos: await sql`
      select id, src, caption from photos order by sort_order asc, id asc
    `,
		messages: await sql`
      select id, name, email, phone, body, created_at as "createdAt"
      from messages order by created_at desc
    `,
		settings: await readSettings(sql),
		extraAdminEmails: (await sql`select value from site_settings where key = 'adminEmails'`)[0]?.value ?? ""
	};
});
var addShow_createServerFn_handler = createServerRpc({
	id: "b33a67da5ebaa0b430c9ac44c9dbe5f1ca82b25cfd448e663db3fddae1ce9d6b",
	name: "addShow",
	filename: "src/lib/site/queries.ts"
}, (opts) => addShow.__executeServer(opts));
var addShow = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(addShow_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireAdmin(sql, context.userId);
	if (!data.venue.trim() || !data.date) throw new Error("Please add a date and a place.");
	await sql`
      insert into shows (show_date, show_time, venue, address, city, province, notes)
      values (${data.date}, ${data.time || null}, ${data.venue.trim()}, ${data.address.trim() || null}, ${data.city.trim() || null}, ${"ON"}, ${data.notes.trim() || null})
    `;
	return { ok: true };
});
var updateShow_createServerFn_handler = createServerRpc({
	id: "d204bbdcfd24177e59d9e2c2d69a0e13c35d04d686137aef7df1f5c4537c5122",
	name: "updateShow",
	filename: "src/lib/site/queries.ts"
}, (opts) => updateShow.__executeServer(opts));
var updateShow = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(updateShow_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireAdmin(sql, context.userId);
	await sql`
      update shows
      set show_date = ${data.date},
          show_time = ${data.time || null},
          venue = ${data.venue.trim()},
          address = ${data.address.trim() || null},
          city = ${data.city.trim() || null},
          notes = ${data.notes.trim() || null}
      where id = ${data.id}
    `;
	return { ok: true };
});
var deleteShow_createServerFn_handler = createServerRpc({
	id: "78d3c7916488559d764ab9e439c42b755e0e40734328d4bdf95e215713089948",
	name: "deleteShow",
	filename: "src/lib/site/queries.ts"
}, (opts) => deleteShow.__executeServer(opts));
var deleteShow = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(deleteShow_createServerFn_handler, async ({ context, data: id }) => {
	const sql = await getSql();
	await requireAdmin(sql, context.userId);
	await sql`delete from shows where id = ${id}`;
	return { ok: true };
});
var saveSettings_createServerFn_handler = createServerRpc({
	id: "9caee72ed020d09adf61fb5a5f2e4cc284318b6130f1811ed0eed9e8d5dc9292",
	name: "saveSettings",
	filename: "src/lib/site/queries.ts"
}, (opts) => saveSettings.__executeServer(opts));
var saveSettings = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(saveSettings_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireAdmin(sql, context.userId);
	for (const [key, value] of Object.entries(data)) await sql`
        insert into site_settings (key, value) values (${key}, ${value})
        on conflict (key) do update set value = excluded.value
      `;
	return { ok: true };
});
var addReview_createServerFn_handler = createServerRpc({
	id: "333f4d51e5f118663f9eeea10531fd5b6c3a21f87af7dfc9b687866cae0e4cab",
	name: "addReview",
	filename: "src/lib/site/queries.ts"
}, (opts) => addReview.__executeServer(opts));
var addReview = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(addReview_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireAdmin(sql, context.userId);
	if (!data.quote.trim()) throw new Error("Please paste the review.");
	await sql`
      insert into reviews (quote, attribution, publication, featured, sort_order)
      values (${data.quote.trim()}, ${data.attribution.trim() || "Reviewer"}, ${data.publication.trim() || null}, ${false}, ${0})
    `;
	return { ok: true };
});
var deleteReview_createServerFn_handler = createServerRpc({
	id: "b69cadb3a19c1b497d2bc9b87a0b4fc30cbd701544f4a2dc831e8bbe6d8846c0",
	name: "deleteReview",
	filename: "src/lib/site/queries.ts"
}, (opts) => deleteReview.__executeServer(opts));
var deleteReview = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(deleteReview_createServerFn_handler, async ({ context, data: id }) => {
	const sql = await getSql();
	await requireAdmin(sql, context.userId);
	await sql`delete from reviews where id = ${id}`;
	return { ok: true };
});
var addVideo_createServerFn_handler = createServerRpc({
	id: "50f0faf4436f48e54d0418d8c9f63e34f6f7059c69558e1d23b81e3a9d8c213c",
	name: "addVideo",
	filename: "src/lib/site/queries.ts"
}, (opts) => addVideo.__executeServer(opts));
var addVideo = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(addVideo_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireAdmin(sql, context.userId);
	const id = extractYoutubeId(data.youtube);
	if (!id) throw new Error("Paste a YouTube link or video ID.");
	if (!data.title.trim()) throw new Error("Please add a song title.");
	await sql`
      insert into videos (title, youtube_id, note, sort_order)
      values (${data.title.trim()}, ${id}, ${data.note.trim() || null}, ${0})
    `;
	return { ok: true };
});
var deleteVideo_createServerFn_handler = createServerRpc({
	id: "397d0a1c1c0ed8b43d8aca0858d24b17edf8a5d9ad3fa64f73a6dc7ddc6d89ca",
	name: "deleteVideo",
	filename: "src/lib/site/queries.ts"
}, (opts) => deleteVideo.__executeServer(opts));
var deleteVideo = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(deleteVideo_createServerFn_handler, async ({ context, data: id }) => {
	const sql = await getSql();
	await requireAdmin(sql, context.userId);
	await sql`delete from videos where id = ${id}`;
	return { ok: true };
});
var addPhoto_createServerFn_handler = createServerRpc({
	id: "77792732f6795856114b3324d8a20f68c776c34bf1741d066a401ccca190e945",
	name: "addPhoto",
	filename: "src/lib/site/queries.ts"
}, (opts) => addPhoto.__executeServer(opts));
var addPhoto = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(addPhoto_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireAdmin(sql, context.userId);
	const src = data.src.trim();
	if (!src.startsWith("data:image/") && !src.startsWith("/")) throw new Error("Please choose a photo from your computer.");
	if (src.length > 2e6) throw new Error("That photo is too large. Try a smaller one.");
	await sql`
      insert into photos (src, caption, sort_order)
      values (${src}, ${data.caption.trim() || null}, ${0})
    `;
	return { ok: true };
});
var deletePhoto_createServerFn_handler = createServerRpc({
	id: "851510ecf54edf1d6ca9fb480b663d262c374038ce860d7dedb407c2277eace6",
	name: "deletePhoto",
	filename: "src/lib/site/queries.ts"
}, (opts) => deletePhoto.__executeServer(opts));
var deletePhoto = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(deletePhoto_createServerFn_handler, async ({ context, data: id }) => {
	const sql = await getSql();
	await requireAdmin(sql, context.userId);
	const settings = await readSettings(sql);
	const gone = (await sql`select id, src, caption from photos where id = ${id}`)[0];
	await sql`delete from photos where id = ${id}`;
	if (gone) {
		const next = { ...settings };
		if (settings.heroImage === gone.src) next.heroImage = DEFAULT_SETTINGS.heroImage;
		if (settings.heroImageMobile === gone.src) next.heroImageMobile = DEFAULT_SETTINGS.heroImageMobile;
		if (next.heroImage !== settings.heroImage || next.heroImageMobile !== settings.heroImageMobile) for (const [key, value] of Object.entries(next)) await sql`
            insert into site_settings (key, value) values (${key}, ${value})
            on conflict (key) do update set value = excluded.value
          `;
	}
	return { ok: true };
});
var sendMessage_createServerFn_handler = createServerRpc({
	id: "667b333ed73061ecd588c4aeb3b28ada7312c778ffabb7797ee9a39aa13288c0",
	name: "sendMessage",
	filename: "src/lib/site/queries.ts"
}, (opts) => sendMessage.__executeServer(opts));
var sendMessage = createServerFn({ method: "POST" }).validator((d) => d).handler(sendMessage_createServerFn_handler, async ({ data }) => {
	const sql = await getSql();
	await ensureSeeded(sql);
	if (!data.name.trim() || !data.email.trim() || !data.body.trim()) throw new Error("Please fill in your name, email and message.");
	await sql`
      insert into messages (name, email, phone, body)
      values (${data.name.trim()}, ${data.email.trim()}, ${data.phone.trim() || null}, ${data.body.trim()})
    `;
	return { ok: true };
});
var deleteMessage_createServerFn_handler = createServerRpc({
	id: "e4ebc3866f491a35fc10b806d0ca04fc174abb16cac56dd4bad93007f192b041",
	name: "deleteMessage",
	filename: "src/lib/site/queries.ts"
}, (opts) => deleteMessage.__executeServer(opts));
var deleteMessage = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(deleteMessage_createServerFn_handler, async ({ context, data: id }) => {
	const sql = await getSql();
	await requireAdmin(sql, context.userId);
	await sql`delete from messages where id = ${id}`;
	return { ok: true };
});
var saveAdminEmails_createServerFn_handler = createServerRpc({
	id: "742ab88dda0d76d2b9e5ff1aea9d6d3e22f2d7fa3bea863e964914b99653b6ef",
	name: "saveAdminEmails",
	filename: "src/lib/site/queries.ts"
}, (opts) => saveAdminEmails.__executeServer(opts));
var saveAdminEmails = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((raw) => raw).handler(saveAdminEmails_createServerFn_handler, async ({ context, data: raw }) => {
	const sql = await getSql();
	await requireAdmin(sql, context.userId);
	await sql`
      insert into site_settings (key, value) values ('adminEmails', ${parseAdminEmails(raw).filter((e) => !FAMILY_ADMIN_EMAILS.includes(e)).join("\n")})
      on conflict (key) do update set value = excluded.value
    `;
	return { ok: true };
});
function extractYoutubeId(input) {
	const raw = input.trim();
	if (/^[\w-]{11}$/.test(raw)) return raw;
	try {
		const u = new URL(raw);
		if (u.hostname.includes("youtu.be")) return u.pathname.slice(1).slice(0, 11) || null;
		const v = u.searchParams.get("v");
		if (v && /^[\w-]{11}$/.test(v)) return v;
		const parts = u.pathname.split("/");
		const idx = parts.findIndex((p) => p === "embed" || p === "shorts");
		if (idx >= 0 && parts[idx + 1] && /^[\w-]{11}$/.test(parts[idx + 1])) return parts[idx + 1];
	} catch {}
	return null;
}
//#endregion
export { addPhoto_createServerFn_handler, addReview_createServerFn_handler, addShow_createServerFn_handler, addVideo_createServerFn_handler, deleteMessage_createServerFn_handler, deletePhoto_createServerFn_handler, deleteReview_createServerFn_handler, deleteShow_createServerFn_handler, deleteVideo_createServerFn_handler, getAdminBundle_createServerFn_handler, getPublicSite_createServerFn_handler, saveAdminEmails_createServerFn_handler, saveSettings_createServerFn_handler, sendMessage_createServerFn_handler, updateShow_createServerFn_handler };
