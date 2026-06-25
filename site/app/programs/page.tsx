import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ArrowRight from "../../components/ArrowRight";

const filters = ["All programs", "For Founders", "For Youth", "For Researchers", "For Industry"];

const programs = [
  {
    color: "#F26522",
    tag: "Founders",
    title: "Startup Incubation",
    body: "Pre-incubation to post-incubation support, mentorship, and milestone tracking.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth={2}>
        <path d="M12 2v6m0 0 3.5 11a3.5 3.5 0 0 1-7 0L12 8Z" />
        <circle cx="12" cy="4" r="2" />
      </svg>
    ),
  },
  {
    color: "#F5A623",
    tag: "Youth",
    title: "Innovation Camp",
    body: "Annual immersion for 500+ youth, with challenge briefs, SDG focus, prototyping, prizes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D88A0A" strokeWidth={2}>
        <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    color: "#E23A2E",
    tag: "Researchers",
    title: "City Research Forum",
    body: "Annual forum for paper submissions, presentations, and published proceedings.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E23A2E" strokeWidth={2}>
        <path d="M4 19V5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
        <path d="M14 3v5h5M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    color: "#9E2A52",
    tag: "Everyone",
    title: "Innovation Startup Week",
    body: "Every 3rd week of April: pitch competition, demo day, investor matching.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9E2A52" strokeWidth={2}>
        <path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    color: "#285E7A",
    tag: "Builders",
    title: "Hackathons & Sprints",
    body: "Themed design sprints with team formation, judging criteria, and prizes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#285E7A" strokeWidth={2}>
        <path d="m8 3 4 8 4-8M4 21l8-10 8 10M2 21h20" />
      </svg>
    ),
  },
  {
    color: "#F26522",
    tag: "Industry",
    title: "Workshops & Masterclasses",
    body: "Design thinking, lean startup, IP, and fundraising with speaker profiles.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth={2}>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2.5" />
        <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5M15 20c0-2 .8-3.5 2-4" />
      </svg>
    ),
  },
];

export default function Programs() {
  return (
    <div>
      <Nav variant="interior" active="programs" />

      {/* HEADER */}
      <div style={{ position: "relative", background: "#0B0B0D", padding: "56px 40px 60px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 440,
            height: 440,
            background: "radial-gradient(circle, rgba(242,101,34,0.22), transparent 65%)",
          }}
        />
        <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.45)", marginBottom: 18 }}>
            Home <span style={{ margin: "0 6px" }}>/</span> <span style={{ color: "rgba(255,255,255,0.8)" }}>Programs</span>
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#FFB489", marginBottom: 14 }}>
            Programs &amp; Services
          </div>
          <h1 style={{ margin: 0, fontSize: 52, fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.04, maxWidth: 760 }}>
            Pathways for founders, youth, researchers &amp; partners
          </h1>
          <p style={{ margin: "20px 0 0", fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.62)", maxWidth: 600 }}>
            Mapped to the functions of the Alliance under Ordinance No. 63. Each program answers three questions: what is it, who is it for, and what do you do next.
          </p>
        </div>
      </div>

      {/* FILTER CHIPS */}
      <div style={{ background: "#fff", borderBottom: "1px solid rgba(20,20,25,0.07)", padding: "18px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", gap: 10, flexWrap: "wrap" }}>
          {filters.map((f, i) => (
            <span
              key={f}
              style={
                i === 0
                  ? { fontSize: 13.5, fontWeight: 600, color: "#fff", background: "#141417", padding: "9px 18px", borderRadius: 9999 }
                  : { fontSize: 13.5, fontWeight: 500, color: "#44444C", background: "#F4F2EC", padding: "9px 18px", borderRadius: 9999 }
              }
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* PROGRAM GRID */}
      <div style={{ background: "#FAFAF7", padding: "56px 40px 72px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {programs.map((p) => (
            <div
              key={p.title}
              className="hov-lift"
              style={{
                background: "#fff",
                border: "1px solid rgba(20,20,25,0.10)",
                borderRadius: 18,
                padding: 28,
                borderTop: `3px solid ${p.color}`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: `${p.color}1F`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {p.icon}
                </div>
                <span
                  style={{
                    fontSize: 10.5,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: p.color,
                    background: `${p.color}1A`,
                    padding: "5px 10px",
                    borderRadius: 9999,
                  }}
                >
                  {p.tag}
                </span>
              </div>
              <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 600, color: "#141417" }}>{p.title}</h3>
              <p style={{ margin: "0 0 18px", fontSize: 14, lineHeight: 1.55, color: "#6B6B73" }}>{p.body}</p>
              <a href="#" style={{ fontSize: 13.5, fontWeight: 600, color: "#141417", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                Learn more
                <ArrowRight size={14} color="#141417" strokeWidth={2.3} />
              </a>
            </div>
          ))}
        </div>

        <div
          style={{
            maxWidth: 1180,
            margin: "36px auto 0",
            background: "#141417",
            borderRadius: 20,
            padding: "36px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3 style={{ margin: "0 0 6px", fontSize: 24, fontWeight: 600, color: "#fff" }}>Looking for the Mentorship Program?</h3>
            <p style={{ margin: 0, fontSize: 14.5, color: "rgba(255,255,255,0.6)" }}>Browse the mentor network or register to give back as a mentor.</p>
          </div>
          <Link
            href="/apply"
            className="hov-orange"
            style={{ background: "#F26522", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 26px", borderRadius: 9999, textDecoration: "none", whiteSpace: "nowrap" }}
          >
            Meet the mentors
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
