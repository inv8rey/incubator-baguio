import Link from "next/link";
import Image from "next/image";
import ArrowRight from "./ArrowRight";

const navLinks: { label: string; href?: string; key: "about" | "programs" | "knowledge" | "ecosystem" | "news" }[] = [
  { label: "About", href: "/about", key: "about" },
  { label: "Programs", href: "/programs", key: "programs" },
  { label: "Knowledge Hub", key: "knowledge" },
  { label: "Ecosystem", key: "ecosystem" },
  { label: "News", key: "news" },
];

export default function Nav({
  variant = "interior",
  active,
}: {
  variant?: "home" | "interior";
  active?: "about" | "programs";
}) {
  const isHome = variant === "home";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isHome ? "18px 40px" : "16px 40px",
        background: isHome ? "#0B0B0D" : "#0E0E10",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 11,
          textDecoration: "none",
        }}
      >
        <Image
          src="/assets/ib-icon.png"
          alt="Incubator Baguio"
          width={34}
          height={28}
          style={{ height: isHome ? 34 : 32, width: "auto", display: "block" }}
        />
        <div style={{ fontSize: 16, fontWeight: 600, color: "#fff", letterSpacing: "-0.01em" }}>
          Incubator Baguio
        </div>
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: isHome ? 30 : 28 }}>
        <div
          style={{
            display: "flex",
            gap: isHome ? 24 : 22,
            fontSize: 14,
            fontWeight: 500,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          {navLinks.map((link) => {
            const isActive = active === link.key;
            const content = (
              <span
                style={
                  isActive
                    ? { color: "#fff", borderBottom: "2px solid #F26522", paddingBottom: 3 }
                    : undefined
                }
              >
                {link.label}
              </span>
            );
            if (link.href) {
              return (
                <Link key={link.key} href={link.href} style={{ textDecoration: "none", color: "inherit" }}>
                  {content}
                </Link>
              );
            }
            return <span key={link.key}>{link.label}</span>;
          })}
        </div>
        <Link
          href="/apply"
          className="hov-orange"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#F26522",
            color: "#fff",
            fontWeight: 600,
            fontSize: 14,
            padding: isHome ? "11px 22px" : "10px 20px",
            borderRadius: 9999,
            textDecoration: "none",
          }}
        >
          Apply Now
          {isHome && <ArrowRight size={14} />}
        </Link>
      </div>
    </div>
  );
}
