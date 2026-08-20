import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { authClient, authEnabled } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { FAMILY_ADMIN_EMAILS, isFamilyAdminEmail } from "@/lib/site/admins";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const navigate = useNavigate();
  const { user, isPending } = useCurrentUserState();
  const [firstTime, setFirstTime] = useState(false);
  const [busy, setBusy] = useState(false);

  if (!isPending && user) {
    void navigate({ to: "/admin" });
  }

  return (
    <main className="grid min-h-dvh place-items-center bg-bg px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-line bg-surface p-6 sm:p-8">
        <p className="font-display text-2xl font-semibold">Ludgate</p>
        <h1 className="mt-2 text-lg font-medium">Family sign-in</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Only John and Sheila can update the website. Visitors should use Contact instead.
        </p>

        {!authEnabled ? <p className="mt-6 text-sm text-muted">Sign-in is turned off.</p> : null}

        <form
          className="mt-6 grid gap-3"
          onSubmit={async (e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const email = String(fd.get("email") ?? "").trim();
            const password = String(fd.get("password") ?? "");
            const name = String(fd.get("name") ?? "John or Sheila");
            if (!isFamilyAdminEmail(email)) {
              toast.error("That email cannot update the site.");
              return;
            }
            setBusy(true);
            try {
              if (firstTime) {
                const { error } = await authClient.signUp.email({ email, password, name });
                if (error) throw new Error(error.message ?? "Could not create the family login");
              } else {
                const { error } = await authClient.signIn.email({ email, password });
                if (error) throw new Error(error.message ?? "Could not sign in");
              }
              await navigate({ to: "/admin" });
            } catch (err) {
              toast.error(err instanceof Error ? err.message : "Sign-in failed");
            } finally {
              setBusy(false);
            }
          }}
        >
          {firstTime ? (
            <div>
              <Label htmlFor="name">Your name</Label>
              <Input id="name" name="name" autoComplete="name" placeholder="Sheila Ludgate" />
            </div>
          ) : null}
          <div>
            <Label htmlFor="email">Family email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              defaultValue={FAMILY_ADMIN_EMAILS[0]}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              autoComplete={firstTime ? "new-password" : "current-password"}
            />
          </div>
          <Button type="submit" disabled={busy}>
            {busy ? "Please wait…" : firstTime ? "Create family login" : "Sign in"}
          </Button>
        </form>
        <button
          type="button"
          className="mt-4 text-sm text-muted underline-offset-4 hover:underline"
          onClick={() => setFirstTime((v) => !v)}
        >
          {firstTime ? "Already set up? Sign in" : "First time? Create the family password"}
        </button>
      </div>
    </main>
  );
}
