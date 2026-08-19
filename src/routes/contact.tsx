import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { getPublicSite, sendMessage } from "@/lib/site/queries";

export const Route = createFileRoute("/contact")({
  loader: () => getPublicSite(),
  component: ContactPage,
});

function ContactPage() {
  const { settings } = Route.useLoaderData();
  const [pending, setPending] = useState(false);

  return (
    <SiteShell phone={settings.phone} email={settings.email}>
      <PageIntro kicker="Hello" title="Contact & purchase">
        John or Sheila will get back to you. For CDs, a phone call or a short note is the surest way.
      </PageIntro>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold">Talk to us</h2>
          <p className="mt-3 text-sm">
            <a className="font-medium text-pine" href={`tel:${settings.phone.replace(/\s/g, "")}`}>
              {settings.phone}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a className="font-medium text-pine" href={`mailto:${settings.email}`}>
              {settings.email}
            </a>
          </p>
          <p className="mt-1 text-sm text-muted">{settings.city}</p>

          <h2 className="mt-10 font-display text-2xl font-semibold">Buy a CD</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line text-sm">
            <li className="flex justify-between py-3">
              <span>Any single-disc CD</span>
              <span className="font-medium">$10</span>
            </li>
            <li className="flex justify-between py-3">
              <span>Any 2 or 3 disc set</span>
              <span className="font-medium">$15</span>
            </li>
            <li className="flex justify-between py-3">
              <span>“99 Songs” (6 discs)</span>
              <span className="font-medium">$20</span>
            </li>
            <li className="flex justify-between py-3">
              <span>Music Retrospective USB — about 800 tracks</span>
              <span className="font-medium">$30</span>
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            The USB holds roughly 7GB: every official John & Sheila, John Ludgate and Ludgate
            release, plus a folder of unreleased “rejects” from 2006 to now. Some are diamonds.
            Some explain themselves.
          </p>
        </div>

        <form
          className="rounded-xl border border-line bg-surface p-5 sm:p-6"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const fd = new FormData(form);
            setPending(true);
            try {
              await sendMessage({
                data: {
                  name: String(fd.get("name") ?? ""),
                  email: String(fd.get("email") ?? ""),
                  phone: String(fd.get("phone") ?? ""),
                  body: String(fd.get("body") ?? ""),
                },
              });
              form.reset();
              toast.success("Sent — John or Sheila will be in touch.");
            } catch (err) {
              toast.error(err instanceof Error ? err.message : "Could not send.");
            } finally {
              setPending(false);
            }
          }}
        >
          <h2 className="font-display text-2xl font-semibold">Write a note</h2>
          <div className="mt-5 grid gap-4">
            <div>
              <Label htmlFor="name">Your name</Label>
              <Input id="name" name="name" required autoComplete="name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div>
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div>
              <Label htmlFor="body">Message</Label>
              <Textarea id="body" name="body" required rows={5} />
            </div>
            <Button type="submit" disabled={pending}>
              {pending ? "Sending…" : "Send"}
            </Button>
          </div>
        </form>
      </div>
    </SiteShell>
  );
}
