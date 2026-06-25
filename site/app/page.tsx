import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import ArrowRight from "../components/ArrowRight";
import ChevronMotif, { mountainLines } from "../components/ChevronMotif";

const programs = [
  {
    n: "01",
    color: "#F26522",
    title: "Startup Incubation Program",
    body: "Structured support from idea validation to venture development, with mentorship, training, and ecosystem connections.",
  },
  {
    n: "02",
    color: "#F5A623",
    title: "Innovation Challenges",
    body: "Challenge-driven programs that connect real-world problems with innovators, researchers, and solution providers.",
  },
  {
    n: "03",
    color: "#E23A2E",
    title: "Research Commercialization",
    body: "Support for transforming research, technology, and intellectual property into practical applications and ventures.",
  },
  {
    n: "04",
    color: "#9E2A52",
    title: "Innovation Academy",
    body: "Workshops, bootcamps, and learning programs covering entrepreneurship, innovation, and startup development.",
  },
  {
    n: "05",
    color: "#285E7A",
    title: "Ecosystem Events",
    body: "Forums, conferences, networking activities, demo days, and community events that strengthen collaboration across the ecosystem.",
  },
  {
    n: "06",
    color: "#F26522",
    title: "Partnership Programs",
    body: "Collaboration opportunities for government, academia, industry, and development organizations.",
  },
];

const sectors = [
  {
    color: "#285E7A",
    label: "Government",
    title: "Smarter public services",
    body: "LGUs post operational challenges in transport, waste, tourism, and digital governance for the community to solve.",
  },
  {
    color: "#F26522",
    label: "Industry",
    title: "MSME growth problems",
    body: "Local businesses surface bottlenecks in operations, supply chains, and market access that startups can address.",
  },
  {
    color: "#9E2A52",
    label: "Academia",
    title: "Research to market",
    body: "Universities open up applied research questions and technologies seeking commercialization partners.",
  },
];

const challenges = [
  {
    tag: "AGRICULTURE",
    tagColor: "#1A6B3C",
    days: "9 days left",
    daysColor: "#E23A2E",
    title: "Cut post-harvest loss for highland vegetable farmers",
    body: "Build a cold-chain or logistics solution that keeps Benguet produce fresh to market.",
    orgInitials: "DA",
    orgColor: "#1A6B3C",
    org: "Dept of Agriculture, CAR",
  },
  {
    tag: "ENVIRONMENT",
    tagColor: "#285E7A",
    days: "21 days left",
    daysColor: "#F5A623",
    title: "Smart waste segregation for Baguio public markets",
    body: "Design a system that improves sorting and diversion at high-traffic market sites.",
    orgInitials: "CEPMO",
    orgColor: "#F26522",
    org: "City Environment Office",
  },
  {
    tag: "TOURISM",
    tagColor: "#9E2A52",
    days: "16 days left",
    daysColor: "#F5A623",
    title: "Spread tourism beyond peak-season rush",
    body: "Create a platform that promotes off-peak travel and local creative experiences.",
    orgInitials: "DOT",
    orgColor: "#9E2A52",
    org: "Baguio Tourism",
  },
];

const startups = [
  {
    initials: "TT",
    color: "#F5A623",
    name: "TerraTrack",
    category: "AgriTech",
    body: "Soil and crop monitoring for highland farmers across the Cordillera.",
  },
  {
    initials: "PW",
    color: "#285E7A",
    name: "PineWaste",
    category: "CleanTech",
    body: "Turning pine and organic waste into compost and biochar products.",
  },
  {
    initials: "KW",
    color: "#9E2A52",
    name: "KraftWeave",
    category: "Creative",
    body: "Marketplace connecting Cordillera weavers to national and global buyers.",
  },
];

const events = [
  {
    month: "Jul",
    day: "12",
    title: "Founder Foundations Workshop",
    body: "Idea validation and lean startup basics · Incubator Baguio Hub",
  },
  {
    month: "Jul",
    day: "24",
    title: "Innovation Forum: Highland Futures",
    body: "Cross-sector panel on regional innovation · Saint Louis University",
  },
  {
    month: "Aug",
    day: "07",
    title: "Community Demo Night",
    body: "Open showcase of incubator startups · Baguio Convention Center",
  },
];

const partners = [
  { initials: "SLU", color: "#F5A623", name: "Saint Louis University" },
  { initials: "UB", color: "#285E7A", name: "University of Baguio" },
  { initials: "UP", color: "#7E0707", name: "UP Baguio" },
  { initials: "UC", color: "#1A6B3C", name: "University of the Cordilleras" },
  { initials: "BSU", color: "#3A5FA0", name: "Benguet State University" },
  { initials: "DOST", color: "#0055A5", name: "Dept of Science & Technology" },
  { initials: "DTI", color: "#CE1126", name: "Dept of Trade & Industry" },
  { initials: "CHED", color: "#5B3A99", name: "Comm on Higher Education" },
  { initials: "DICT", color: "#009B8D", name: "Dept of ICT" },
  { initials: "CPDS", color: "#F26522", name: "CPDSO · City of Baguio" },
  { initials: "BCC", color: "#2D2D2D", name: "Baguio Chamber of Commerce" },
];

function PartnerChip({ initials, color, name }: { initials: string; color: string; name: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "#F4F2EC",
        border: "1px solid rgba(20,20,25,0.09)",
        borderRadius: 14,
        padding: "11px 18px",
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 8,
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: initials.length > 3 ? 10 : 12,
          fontWeight: 700,
          color: "#fff",
          flexShrink: 0,
        }}
      >
        {initials}
      </div>
      <span style={{ fontSize: 14, fontWeight: 600, color: "#141417" }}>{name}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Nav variant="home" />

      {/* HERO */}
      <div
        style={{
          position: "relative",
          background: "#0B0B0D",
          padding: "80px 40px 70px",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: "50%",
            transform: "translateX(-50%)",
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(242,101,34,0.38) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <ChevronMotif
          lines={mountainLines}
          width={760}
          height={430}
          strokeWidth={6}
          preserveAspectRatio="none"
          style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", opacity: 0.18 }}
        />
        <div style={{ position: "relative", maxWidth: 880, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "7px 15px",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(255,255,255,0.04)",
              marginBottom: 28,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: 9999, background: "#F26522" }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>
              Official Technology Business Incubator of the City of Baguio
            </span>
          </div>
          <h1 style={{ margin: 0, fontSize: 78, lineHeight: 0.98, fontWeight: 700, letterSpacing: "-0.035em", color: "#fff" }}>
            Building Baguio&rsquo;s Innovation and{" "}
            <span style={{ color: "#F26522" }}>Startup Ecosystem.</span>
          </h1>
          <p style={{ margin: "26px auto 0", fontSize: 19, lineHeight: 1.6, color: "rgba(255,255,255,0.66)", maxWidth: 560 }}>
            Incubator Baguio brings together entrepreneurs, researchers, students, government agencies, businesses, and academic institutions to transform ideas into solutions that create economic, social, and technological impact.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 36 }}>
            <Link
              href="/apply"
              className="hov-orange"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "#F26522",
                color: "#fff",
                fontWeight: 600,
                fontSize: 16,
                padding: "16px 32px",
                borderRadius: 9999,
                textDecoration: "none",
                boxShadow: "0 14px 36px rgba(242,101,34,0.4)",
              }}
            >
              Start your application
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/programs"
              className="hov-border-white"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                color: "#fff",
                fontWeight: 600,
                fontSize: 16,
                padding: "16px 28px",
                borderRadius: 9999,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Explore programs
            </Link>
          </div>
        </div>
      </div>

      {/* STAT BAND */}
      <div style={{ background: "#F26522", padding: "38px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          <div style={{ textAlign: "center" }}>
            <Counter target={500} suffix="+" style={{ fontSize: 44, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }} />
            <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.85)", marginTop: 4 }}>Youth in Innovation Camp</div>
          </div>
          <div style={{ textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.25)" }}>
            <Counter target={10} suffix="+" style={{ fontSize: 44, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }} />
            <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.85)", marginTop: 4 }}>Startups incubated</div>
          </div>
          <div style={{ textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.25)" }}>
            <Counter target={10} suffix="+" style={{ fontSize: 44, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }} />
            <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.85)", marginTop: 4 }}>Formal partnerships</div>
          </div>
          <div style={{ textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.25)" }}>
            <Counter target={3} suffix="M" style={{ fontSize: 44, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }} />
            <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.85)", marginTop: 4 }}>Innovation Fund (₱)</div>
          </div>
        </div>
      </div>

      {/* PROGRAMS LIST */}
      <div style={{ background: "#FAFAF7", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F26522", marginBottom: 12 }}>
              Programs
            </div>
            <h2 style={{ margin: 0, fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", color: "#141417" }}>
              Support for Every Stage of Innovation
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {programs.map((p, i) => (
              <div
                key={p.n}
                className="hov-bg-white"
                style={{
                  display: "grid",
                  gridTemplateColumns: "64px 1fr auto",
                  gap: 28,
                  alignItems: "center",
                  padding: "26px 8px",
                  borderTop: "1px solid rgba(20,20,25,0.12)",
                  borderBottom: i === programs.length - 1 ? "1px solid rgba(20,20,25,0.12)" : undefined,
                }}
              >
                <span style={{ fontSize: 30, fontWeight: 700, color: p.color, letterSpacing: "-0.02em" }}>{p.n}</span>
                <div>
                  <h3 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 600, color: "#141417" }}>{p.title}</h3>
                  <p style={{ margin: 0, fontSize: 14.5, color: "#6B6B73" }}>{p.body}</p>
                </div>
                <ArrowRight size={20} color="#141417" strokeWidth={2.2} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INNOVATION CHALLENGES */}
      <div style={{ background: "#fff", padding: "80px 40px", borderTop: "1px solid rgba(20,20,25,0.06)" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ marginBottom: 40, maxWidth: 640 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F26522", marginBottom: 12 }}>
              Innovation Challenges
            </div>
            <h2 style={{ margin: 0, fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em", color: "#141417", lineHeight: 1.08 }}>
              Problem Statements from Government, Industry, and Academia
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {sectors.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "#FAFAF7",
                  border: "1px solid rgba(20,20,25,0.08)",
                  borderRadius: 18,
                  padding: 28,
                  borderTop: `3px solid ${s.color}`,
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: s.color, marginBottom: 12 }}>
                  {s.label}
                </div>
                <h3 style={{ margin: "0 0 8px", fontSize: 19, fontWeight: 600, color: "#141417" }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "#6B6B73" }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9A958B", marginBottom: 18 }}>
              Open challenges
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {challenges.map((c) => (
                <div
                  key={c.title}
                  className="hov-shadow-sm"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(20,20,25,0.12)",
                    borderRadius: 18,
                    padding: 26,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                    <span
                      style={{
                        fontSize: 11.5,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: c.tagColor,
                        background: `${c.tagColor}1A`,
                        padding: "6px 13px",
                        borderRadius: 9999,
                      }}
                    >
                      {c.tag}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13.5, fontWeight: 700, color: c.daysColor }}>
                      <span style={{ width: 7, height: 7, borderRadius: 9999, background: c.daysColor }} />
                      {c.days}
                    </span>
                  </div>
                  <h3 style={{ margin: "0 0 12px", fontSize: 23, fontWeight: 700, letterSpacing: "-0.02em", color: "#141417", lineHeight: 1.15 }}>
                    {c.title}
                  </h3>
                  <p style={{ margin: "0 0 22px", fontSize: 15, lineHeight: 1.5, color: "#6B6B73" }}>{c.body}</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginTop: "auto",
                      paddingTop: 20,
                      borderTop: "1px solid rgba(20,20,25,0.1)",
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 11,
                        background: c.orgColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#fff",
                        flexShrink: 0,
                      }}
                    >
                      {c.orgInitials}
                    </div>
                    <span style={{ fontSize: 14, color: "#9A958B" }}>{c.org}</span>
                    <a href="#" style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 7, fontSize: 14.5, fontWeight: 600, color: "#141417", textDecoration: "none", whiteSpace: "nowrap" }}>
                      View
                      <ArrowRight size={15} color="#141417" strokeWidth={2.4} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <a
                href="#"
                className="hov-orange"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  background: "#F26522",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "14px 28px",
                  borderRadius: 9999,
                  textDecoration: "none",
                }}
              >
                View all challenges
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED STARTUPS */}
      <div style={{ background: "#FAFAF7", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ marginBottom: 40, maxWidth: 640 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F26522", marginBottom: 12 }}>
              Startup Directory
            </div>
            <h2 style={{ margin: 0, fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em", color: "#141417", lineHeight: 1.08 }}>
              Startups in the Incubator Baguio Network
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {startups.map((s) => (
              <div
                key={s.name}
                className="hov-shadow-sm"
                style={{ background: "#fff", border: "1px solid rgba(20,20,25,0.10)", borderRadius: 18, overflow: "hidden" }}
              >
                <div
                  style={{
                    height: 148,
                    background: "repeating-linear-gradient(135deg,#F4F2EC,#F4F2EC 11px,#EDEAE1 11px,#EDEAE1 22px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 11, letterSpacing: "0.08em", color: "#A8A399" }}>
                    startup cover
                  </span>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 12,
                        background: s.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#fff",
                        flexShrink: 0,
                      }}
                    >
                      {s.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 600, color: "#141417" }}>{s.name}</div>
                      <div style={{ fontSize: 12.5, color: "#9A958B" }}>{s.category}</div>
                    </div>
                  </div>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "#6B6B73" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <a
              href="#"
              className="hov-black"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "#141417",
                color: "#fff",
                fontWeight: 600,
                fontSize: 15,
                padding: "14px 28px",
                borderRadius: 9999,
                textDecoration: "none",
              }}
            >
              View all startups
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* UPCOMING EVENTS */}
      <div style={{ background: "#fff", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ marginBottom: 40, maxWidth: 640 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F26522", marginBottom: 12 }}>
              Events
            </div>
            <h2 style={{ margin: 0, fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em", color: "#141417", lineHeight: 1.08 }}>
              Workshops, Forums, and Community Activities
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {events.map((e, i) => (
              <div
                key={e.title}
                className="hov-bg-cream"
                style={{
                  display: "grid",
                  gridTemplateColumns: "96px 1fr auto",
                  gap: 28,
                  alignItems: "center",
                  padding: "24px 8px",
                  borderTop: "1px solid rgba(20,20,25,0.12)",
                  borderBottom: i === events.length - 1 ? "1px solid rgba(20,20,25,0.12)" : undefined,
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#F26522" }}>{e.month}</div>
                  <div style={{ fontSize: 30, fontWeight: 700, color: "#141417", letterSpacing: "-0.02em" }}>{e.day}</div>
                </div>
                <div>
                  <h3 style={{ margin: "0 0 4px", fontSize: 19, fontWeight: 600, color: "#141417" }}>{e.title}</h3>
                  <p style={{ margin: 0, fontSize: 14, color: "#6B6B73" }}>{e.body}</p>
                </div>
                <a
                  href="#"
                  style={{
                    background: "#141417",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 13.5,
                    padding: "10px 20px",
                    borderRadius: 9999,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  RSVP
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STARTUP WEEK FEATURE */}
      <div style={{ background: "#0E0E10" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "stretch" }}>
          <div style={{ padding: "72px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span
              style={{
                display: "inline-block",
                width: "fit-content",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#FFB489",
                padding: "6px 12px",
                borderRadius: 9999,
                border: "1px solid rgba(242,101,34,0.4)",
                background: "rgba(242,101,34,0.12)",
                marginBottom: 20,
              }}
            >
              Flagship event · 3rd week of April
            </span>
            <h2 style={{ margin: "0 0 14px", fontSize: 40, fontWeight: 700, letterSpacing: "-0.025em", color: "#fff", lineHeight: 1.08 }}>
              Innovation Startup Week 2026
            </h2>
            <p style={{ margin: "0 0 26px", fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.62)", maxWidth: 420 }}>
              A full week of pitching, demos, and matchmaking. 10+ startups, investors, mentors, and the public, all in one place.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="#" className="hov-orange" style={{ background: "#F26522", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 26px", borderRadius: 9999, textDecoration: "none" }}>
                Register now
              </a>
              <a href="#" style={{ color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 24px", borderRadius: 9999, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
                View schedule
              </a>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              background: "#141418",
              minHeight: 420,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderLeft: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(242,101,34,0.12), transparent 55%)" }} />
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 14, textAlign: "center" }}>
              <ChevronMotif lines={mountainLines} width={120} height={104} strokeWidth={9} />
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                Event Imagery
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* APPLY CTA */}
      <div style={{ background: "#FAFAF7", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", background: "#F26522", borderRadius: 28, padding: "60px 56px", position: "relative", overflow: "hidden" }}>
          <ChevronMotif
            lines={[
              { points: "12,40 60,12 108,40", stroke: "#fff" },
              { points: "12,62 60,34 108,62", stroke: "#fff" },
              { points: "12,84 60,56 108,84", stroke: "#fff" },
            ]}
            width={320}
            height={280}
            strokeWidth={7}
            style={{ position: "absolute", top: -40, right: -30, opacity: 0.22 }}
          />
          <div style={{ position: "relative", maxWidth: 560 }}>
            <h2 style={{ margin: "0 0 12px", fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.05 }}>
              Ready to build something for Baguio?
            </h2>
            <p style={{ margin: "0 0 30px", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,0.9)" }}>
              Choose your track and start your application. It takes a few minutes.
            </p>
          </div>
          <div style={{ position: "relative", display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/apply" className="hov-black" style={{ background: "#0B0B0D", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 26px", borderRadius: 9999, textDecoration: "none" }}>
              I&rsquo;m a Founder
            </Link>
            <Link
              href="/apply"
              className="hov-white-wash"
              style={{ background: "rgba(255,255,255,0.16)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 26px", borderRadius: 9999, textDecoration: "none", border: "1px solid rgba(255,255,255,0.4)" }}
            >
              I&rsquo;m a Researcher
            </Link>
            <Link
              href="/apply"
              className="hov-white-wash"
              style={{ background: "rgba(255,255,255,0.16)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 26px", borderRadius: 9999, textDecoration: "none", border: "1px solid rgba(255,255,255,0.4)" }}
            >
              I&rsquo;m a Partner
            </Link>
          </div>
        </div>
      </div>

      {/* PARTNERS MARQUEE */}
      <div style={{ background: "#fff", padding: "56px 0 48px", borderTop: "1px solid rgba(20,20,25,0.06)", overflow: "hidden" }}>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9A958B" }}>Ecosystem partners</div>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ display: "flex", width: "max-content", animation: "ibmarquee 36s linear infinite" }}>
            <div style={{ display: "flex", gap: 14, paddingRight: 14, alignItems: "center" }}>
              {partners.map((p) => (
                <PartnerChip key={`a-${p.initials}`} {...p} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 14, paddingRight: 14, alignItems: "center" }}>
              {partners.map((p) => (
                <PartnerChip key={`b-${p.initials}`} {...p} />
              ))}
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <a href="#" style={{ fontSize: 13, fontWeight: 600, color: "#F26522", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
            View all ecosystem partners
            <ArrowRight size={14} color="#F26522" strokeWidth={2.3} />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
