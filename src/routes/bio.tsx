import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { getPublicSite } from "@/lib/site/queries";

export const Route = createFileRoute("/bio")({
  loader: () => getPublicSite(),
  component: BioPage,
});

function BioPage() {
  const { settings } = Route.useLoaderData();
  return (
    <SiteShell phone={settings.phone} email={settings.email}>
      <PageIntro kicker="The band" title="John, Sheila, and the boys">
        Two voices, an acoustic guitar, a bass and a harmonica — and, when the sons join in, a family
        band that slides from late-sixties folk-rock to something unmistakably now.
      </PageIntro>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-8 sm:px-6 lg:grid-cols-2">
        <img
          src="/media/photos/web-p01.jpg"
          alt="John and Sheila Ludgate performing"
          className="h-full max-h-[520px] w-full rounded-xl object-cover object-top"
        />
        <div className="space-y-4 text-[15px] leading-relaxed text-ink">
          <p>
            John Ludgate has been playing in clubs, pubs, coffee houses and festivals for more than
            forty years. He has won awards and FACTOR grants for his songwriting and has received
            radio play across Canada and the United States.
          </p>
          <p>
            For the last twenty years he has been joined by his wife Sheila on bass and harmony
            vocals. They write together, and they play as a duo across Southern Ontario, into
            Montreal and down into the States. Audiences come for the rhythms, the blend of voices,
            and the original songs.
          </p>
          <p>
            Seven studio records. Two live albums that start, almost every time, with a counted-in
            “two, three, four…”. The later records —
            <em> Running Through The Innocent Years</em>, <em>Northern Soul</em>,{" "}
            <em>What The Camera Couldn’t See</em>, <em>The Kitchen Sessions</em> and{" "}
            <em>Folk Rock</em> — bring in Luke, Anthony and Shane, once of the alternative band
            Beautiful Nothing. John and Sheila are the folk. The sons are the rock.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight">Ludgate, the family band</h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-[15px] leading-relaxed text-muted">
            <p>
              Luke, Anthony and Shane are the lead guitar, voice and drums of Beautiful Nothing —
              college radio, Aux TV, MuchLoud, and stages shared with The Trews, Monster Truck, The
              Arkells and Finger Eleven.
            </p>
            <p>
              Both sides of the family have FACTOR awards. The title track of <em>Northern Soul</em>{" "}
              won Folk Music Ontario’s Songs From The Heart. Jim Marino put{" "}
              <em>What The Camera Couldn’t See</em> on his 2018 Top 10 for Penguin Eggs. “The Gift
              Of An Ordinary Day,” from the kitchen-table record, made the Folk Alliance
              International Top 10.
            </p>
            <p>
              They have recorded together for years. More recently they have started walking on
              stage as one band: Ludgate.
            </p>
          </div>
          <img
            src="/media/photos/web-p06.jpg"
            alt="The Ludgate family band"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">As they tell it</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">The real story</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink">
            <p>
              John has played guitar since his early teens, having picked up the basics from his
              Dad. He started with folk, moved to soft rock, heavier rock and, after several decades
              of experimentation, back to his folk roots. Sheila was raised on classical and
              traditional music. She had never so much as plucked a string.
            </p>
            <p>
              Not so for their kids. The early years of the three oldest boys were spent practicing
              brass instruments (Sheila’s idea, of course), and they resented nearly every note they
              blew. One showed promise as a trumpeter. He traded it for drums. His brothers played
              guitar — with as much noise and distortion as electronically possible. A fourth son
              stayed enthusiastic about piano and trumpet, and revived Sheila’s fantasy of attending
              classical concerts as the mother of the virtuoso. It’s a fantasy, remember.
            </p>
            <p>
              With a rock band thumping in the cellar, a husband howling in the music room (where
              they also keep the furnace), and a kindergartener on the piano, Sheila always had a
              headache. So John bought her a bass for Christmas — shiny and blue, with a decent amp.
              A major concession: he almost always bought second-hand.
            </p>
            <p>
              To John’s amazement, Sheila decided she really liked the bass. Now the only tension in
              the house is over which songs to play, how fast to play them, and who’s responsible
              for that sour note.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
