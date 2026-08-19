import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { GROK_PROVIDERS, authClient, authEnabled, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const navigate = useNavigate();
  const { user, isPending } = useCurrentUserState();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [busy, setBusy] = useState(false);

  if (!isPending && user) {
    void navigate({ to: "/admin" });
  }

  return (
    <main className="grid min-h-dvh place-items-center bg-bg px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-line bg-surface p-6 sm:p-8">
        <p className="font-display text-2xl font-semibold">Ludgate</p>
        <h1 className="mt-2 text-lg font-medium">Update the website</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          This page is for John or Sheila. Visitors do not need to sign in to listen, read, or write
          a note.
        </p>

        {authEnabled ? (
          <div className="mt-6 grid gap-2">
            {GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                variant="secondary"
                onClick={() => void signIn(p.providerId, { callbackURL: "/admin" })}
              >
                Continue with {p.label}
              </Button>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-sm text-muted">Sign-in is turned off.</p>
        )}

        <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-faint">
          <span className="h-px flex-1 bg-line" />
          or email
          <span className="h-px flex-1 bg-line" />
        </div>

        <form
          className="grid gap-3"
          onSubmit={async (e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const email = String(fd.get("email") ?? "");
            const password = String(fd.get("password") ?? "");
            const name = String(fd.get("name") ?? "John or Sheila");
            setBusy(true);
            try {
              if (mode === "up") {
                const { error } = await authClient.signUp.email({ email, password, name });
                if (error) throw new Error(error.message ?? "Could not create account");
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
          {mode === "up" ? (
            <div>
              <Label htmlFor="name">Your name</Label>
              <Input id="name" name="name" autoComplete="name" placeholder="John Ludgate" />
            </div>
          ) : null}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required autoComplete={mode === "up" ? "new-password" : "current-password"} />
          </div>
          <Button type="submit" disabled={busy}>
            {busy ? "Please wait…" : mode === "up" ? "Create account" : "Sign in"}
          </Button>
        </form>
        <button
          type="button"
          className="mt-4 text-sm text-muted underline-offset-4 hover:underline"
          onClick={() => setMode((m) => (m === "in" ? "up" : "in"))}
        >
          {mode === "in" ? "First time? Create an account" : "Already have an account? Sign in"}
        </button>
      </div>
    </main>
  );
}
