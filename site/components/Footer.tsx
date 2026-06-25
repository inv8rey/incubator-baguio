import Image from "next/image";

export default function Footer() {
  return (
    <div style={{ background: "#0B0B0D", padding: "56px 40px 36px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: 40,
            paddingBottom: 40,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 18 }}>
              <Image src="/assets/ib-icon.png" alt="Incubator Baguio" width={38} height={31} style={{ height: 38, width: "auto" }} />
              <div style={{ fontSize: 17, fontWeight: 600, color: "#fff" }}>Incubator Baguio</div>
            </div>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,0.5)", maxWidth: 280 }}>
              Baguio City Research and Innovation Alliance. Operationalized under Ordinance No. 63, s.2023 by the CPDSO, City Government of Baguio.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
              Explore
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: 14, color: "rgba(255,255,255,0.62)" }}>
              <span>Programs</span>
              <span>Knowledge Hub</span>
              <span>Ecosystem</span>
              <span>News &amp; Events</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
              Apply
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: 14, color: "rgba(255,255,255,0.62)" }}>
              <span>Startup Incubation</span>
              <span>Research Submission</span>
              <span>Mentor Registration</span>
              <span>Partner Inquiry</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: 14, color: "rgba(255,255,255,0.62)" }}>
              <span>CPDSO, City Hall, Baguio</span>
              <span>hello@incubatorbaguio.ph</span>
              <span>Facebook · LinkedIn</span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            fontSize: 12.5,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <span>© 2026 City Government of Baguio · CPDSO</span>
          <span>Privacy Policy · IP Policy · Data Privacy Act (RA 10173)</span>
        </div>
      </div>
    </div>
  );
}
