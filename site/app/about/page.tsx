import Image from "next/image";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import ArrowRight from "../../components/ArrowRight";

const roleCards = [
  {
    title: "Innovation Platform",
    body: "A shared space where ideas, research, and resources from across the city come together.",
  },
  {
    title: "Research and Commercialization",
    body: "Pathways that turn research and intellectual property into ventures and practical applications.",
  },
  {
    title: "Ecosystem Development",
    body: "Programs and partnerships that grow the people, capital, and networks innovation needs to thrive.",
  },
];

const helix = [
  {
    color: "#285E7A",
    label: "Government",
    body: "The City Government provides leadership, policy support, and strategic direction for the alliance.",
  },
  {
    color: "#9E2A52",
    label: "Academia",
    body: "Universities and research institutions contribute knowledge, talent, research, and emerging technologies.",
  },
  {
    color: "#F26522",
    label: "Industry",
    body: "Businesses, investors, and private sector partners provide market access, expertise, mentorship, and investment.",
  },
  {
    color: "#1A6B3C",
    label: "Community",
    body: "Students, entrepreneurs, innovators, civil society organizations, and citizens help identify challenges, test solutions, and drive adoption.",
  },
];

const foundationChips = [
  { label: "City Government of Baguio", sub: "Lead Institution" },
  { label: "CPDSO", sub: "Convening Office" },
  { label: "Ordinance No. 063", sub: "Series of 2023" },
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
];

export default function About() {
  return (
    <div>
      <Nav variant="interior" active="about" />

      {/* HERO */}
      <div style={{ position: "relative", background: "#0B0B0D", padding: "56px 40px 64px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 440,
            height: 440,
            background: "radial-gradient(circle, rgba(242,101,34,0.24), transparent 65%)",
          }}
        />
        <div style={{ position: "relative", maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.45)", marginBottom: 20 }}>
            Home <span style={{ margin: "0 6px" }}>/</span> <span style={{ color: "rgba(255,255,255,0.8)" }}>About</span>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "7px 15px",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(255,255,255,0.04)",
              marginBottom: 24,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: 9999, background: "#F26522" }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>
              About Incubator Baguio
            </span>
          </div>
          <h1 style={{ margin: 0, fontSize: 56, fontWeight: 700, letterSpacing: "-0.035em", color: "#fff", lineHeight: 1.05 }}>
            Baguio&rsquo;s Innovation <span style={{ color: "#F26522" }}>Alliance</span>
          </h1>
          <p style={{ margin: "22px auto 0", fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.62)", maxWidth: 640 }}>
            Incubator Baguio brings together government, academia, industry, entrepreneurs, researchers, and community partners to strengthen innovation, entrepreneurship, and startup development in the city.
          </p>
        </div>
      </div>

      {/* OUR ROLE */}
      <div style={{ background: "#FAFAF7", padding: "72px 40px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start", marginBottom: 48 }}>
            <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", background: "#0B0B0D", minHeight: 320 }}>
              <Image src="/assets/ib-logo-square.jpg" alt="Incubator Baguio" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F26522", marginBottom: 12 }}>
                Our Role
              </div>
              <h2 style={{ margin: "0 0 20px", fontSize: 34, fontWeight: 700, letterSpacing: "-0.03em", color: "#141417", lineHeight: 1.1 }}>
                Building Connections Across the Innovation Ecosystem
              </h2>
              <p
                style={{
                  margin: "0 0 18px",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "#2A2A30",
                  borderLeft: "3px solid #F26522",
                  paddingLeft: 18,
                }}
              >
                Innovation does not happen alone. Builders need mentors, partners, and networks to turn ideas into real ventures and lasting impact.
              </p>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#6B6B73" }}>
                Incubator Baguio exists as that shared platform, connecting the people and institutions who can move an idea from concept to community impact.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(20,20,25,0.10)",
              borderRadius: 18,
              padding: 28,
              borderTop: "3px solid #F26522",
              marginBottom: 20,
            }}
          >
            <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 600, color: "#141417" }}>Technology Business Incubator</h3>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "#6B6B73" }}>
              Supporting startups and innovators through incubation, mentorship, training, and access to networks and opportunities.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            {roleCards.map((c) => (
              <div key={c.title} style={{ background: "#fff", border: "1px solid rgba(20,20,25,0.10)", borderRadius: 18, padding: 26 }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 600, color: "#141417" }}>{c.title}</h3>
                <p style={{ margin: "0 0 14px", fontSize: 14, lineHeight: 1.55, color: "#6B6B73" }}>{c.body}</p>
                <a href="#" style={{ fontSize: 13.5, fontWeight: 600, color: "#141417", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Learn more
                  <ArrowRight size={14} color="#141417" strokeWidth={2.3} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* QUADRUPLE HELIX */}
      <div style={{ background: "#0E0E10", padding: "72px 40px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#FFB489", marginBottom: 12 }}>
              Quadruple Helix Model
            </div>
            <h2 style={{ margin: 0, fontSize: 38, fontWeight: 700, letterSpacing: "-0.025em", color: "#fff" }}>
              A Collaborative Approach to Innovation
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
            {helix.map((h) => (
              <div
                key={h.label}
                style={{
                  background: "#141418",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 18,
                  padding: 24,
                  borderTop: `3px solid ${h.color}`,
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: h.color, marginBottom: 14 }}>
                  {h.label}
                </div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.65)" }}>{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OUR FOUNDATION */}
      <div style={{ background: "#fff", padding: "72px 40px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <ImagePlaceholder label="City Hall Imagery" />
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F26522", marginBottom: 12 }}>
              Our Foundation
            </div>
            <h2 style={{ margin: "0 0 20px", fontSize: 34, fontWeight: 700, letterSpacing: "-0.03em", color: "#141417", lineHeight: 1.1 }}>
              Institutionalized Through City Ordinance
            </h2>
            <p style={{ margin: "0 0 16px", fontSize: 15.5, lineHeight: 1.65, color: "#44444C" }}>
              Incubator Baguio was established through Ordinance No. 063, Series of 2023, which created the Baguio City Research and Innovation Alliance under the City Planning, Development and Sustainability Office (CPDSO).
            </p>
            <p style={{ margin: "0 0 28px", fontSize: 15.5, lineHeight: 1.65, color: "#6B6B73" }}>
              This gives the alliance a durable institutional home, enabling long-term collaboration between government, academia, industry, and community partners well beyond any single administration or program cycle.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {foundationChips.map((c) => (
                <div
                  key={c.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "#FAFAF7",
                    border: "1px solid rgba(20,20,25,0.10)",
                    borderRadius: 12,
                    padding: "14px 18px",
                  }}
                >
                  <span style={{ fontSize: 14.5, fontWeight: 600, color: "#141417" }}>{c.label}</span>
                  <span style={{ fontSize: 13, color: "#9A958B" }}>{c.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PARTNERS */}
      <div style={{ background: "#FAFAF7", padding: "72px 40px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F26522", marginBottom: 12 }}>
              Partners
            </div>
            <h2 style={{ margin: 0, fontSize: 38, fontWeight: 700, letterSpacing: "-0.025em", color: "#141417" }}>Ecosystem partners</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {partners.map((p) => (
              <div
                key={p.initials}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: "#fff",
                  border: "1px solid rgba(20,20,25,0.10)",
                  borderRadius: 14,
                  padding: "16px 20px",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: p.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: p.initials.length > 3 ? 10.5 : 13,
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {p.initials}
                </div>
                <span style={{ fontSize: 14.5, fontWeight: 600, color: "#141417" }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "#FAFAF7", padding: "0 40px 72px" }}>
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            background: "#F26522",
            borderRadius: 28,
            padding: 56,
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <div style={{ position: "relative", maxWidth: 580, margin: "0 auto" }}>
            <h2 style={{ margin: "0 0 12px", fontSize: 38, fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.08 }}>
              Be part of the alliance
            </h2>
            <p style={{ margin: "0 0 28px", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,0.9)" }}>
              Whether you build, research, fund, or teach, there is a place for you here.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/programs" className="hov-black" style={{ background: "#0B0B0D", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 9999, textDecoration: "none" }}>
                Explore programs
              </Link>
              <a
                href="#"
                className="hov-white-wash"
                style={{ background: "rgba(255,255,255,0.16)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 9999, textDecoration: "none", border: "1px solid rgba(255,255,255,0.4)" }}
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
