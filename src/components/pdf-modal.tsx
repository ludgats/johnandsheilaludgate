import { useEffect } from "react";
import { X } from "lucide-react";

export function PdfModal({
  title,
  src,
  onClose,
}: {
  title: string;
  src: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <div
        className="absolute inset-0 bg-ink/70"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative z-10 flex h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl bg-paper shadow-2xl sm:h-[88vh] sm:rounded-2xl"
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
          <p className="truncate font-display text-lg font-semibold">{title}</p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-walnut text-cream hover:bg-walnut-dark"
            aria-label="Close booklet"
          >
            <X className="size-5" />
          </button>
        </div>
        <iframe title={title} src={src} className="h-full w-full flex-1 bg-paper" />
      </div>
    </div>
  );
}
