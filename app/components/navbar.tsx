"use client"

/*
look into rpelace this comp with this

https://ui.shadcn.com/docs/components/radix/navigation-menu
*/

export default function Navbar() {
  const items = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#work" },
    { label: "CONTACT", href: "#contact" },
  ]

  return (
    <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.20)]">
        <ul className="flex items-center gap-10 px-10 py-3 text-xs tracking-[0.3em] text-white/80">
          {items.map((it) => (
            <li key={it.href}>
              <a className="hover:text-white transition" href={it.href}>
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
