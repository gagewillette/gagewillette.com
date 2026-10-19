import Link from "next/link";

const links = [
  { label: "Support", href: "/kc/support" },
  { label: "Privacy", href: "/kc/privacy" },
];

export default function KeeperCamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/kc/support" className="font-semibold tracking-tight">
            KeeperCam
          </Link>
          <div className="flex gap-6 text-sm text-muted-foreground">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">{children}</div>

      <footer className="mx-auto max-w-3xl px-6 pb-12 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">
          © {new Date().getFullYear()} Gage Willette
        </Link>
      </footer>
    </main>
  );
}
