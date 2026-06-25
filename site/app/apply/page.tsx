"use client";

import Nav from "../../components/Nav";
import ArrowRight from "../../components/ArrowRight";

const stages = ["Idea", "Prototype", "Early revenue", "Growth"];

const checklist = [
  { label: "Founder & team details", done: true },
  { label: "Problem & solution overview", done: false },
  { label: "Traction or validation so far", done: false },
  { label: "A pitch deck (optional)", done: false },
];

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#141417", marginBottom: 7 }}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        readOnly
        style={{
          height: 46,
          width: "100%",
          border: "1px solid rgba(20,20,25,0.16)",
          borderRadius: 10,
          background: "#fff",
          padding: "0 14px",
          fontSize: 14,
          color: "#1A1A1F",
          fontFamily: "inherit",
        }}
      />
    </div>
  );
}

export default function Apply() {
  return (
    <div>
      <Nav variant="interior" />

      {/* HEADER */}
      <div style={{ position: "relative", background: "#0B0B0D", padding: "44px 40px 48px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -60,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(242,101,34,0.2), transparent 65%)",
          }}
        />
        <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.45)", marginBottom: 18 }}>
            Home <span style={{ margin: "0 6px" }}>/</span> Apply <span style={{ margin: "0 6px" }}>/</span>{" "}
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Startup Incubation</span>
          </div>
          <h1 style={{ margin: 0, fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.04 }}>
            Startup Incubation Application
          </h1>
          <p style={{ margin: "14px 0 26px", fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.62)", maxWidth: 560 }}>
            Tell us about your venture. Your progress saves automatically, so you can finish later.
          </p>

          {/* STEP PROGRESS */}
          <div style={{ display: "flex", alignItems: "center", maxWidth: 720 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 9999,
                  background: "#F26522",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                1
              </span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#fff", whiteSpace: "nowrap" }}>Your team</span>
            </div>
            <div style={{ flex: 1, height: 2, background: "linear-gradient(90deg,#F26522,rgba(255,255,255,0.15))", margin: "0 14px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 9999,
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 13,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                2
              </span>
              <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.55)", whiteSpace: "nowrap" }}>The venture</span>
            </div>
            <div style={{ flex: 1, height: 2, background: "rgba(255,255,255,0.15)", margin: "0 14px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 9999,
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 13,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                3
              </span>
              <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.55)", whiteSpace: "nowrap" }}>Review &amp; submit</span>
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div style={{ background: "#FAFAF7", padding: "48px 40px 72px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 320px", gap: 40, alignItems: "start" }}>
          {/* FORM */}
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ background: "#fff", border: "1px solid rgba(20,20,25,0.10)", borderRadius: 20, padding: 36 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#F26522" }}>Step 1 of 3</span>
            </div>
            <h2 style={{ margin: "0 0 28px", fontSize: 24, fontWeight: 600, color: "#141417", letterSpacing: "-0.01em" }}>Founder &amp; team</h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
              <Field label="Full name" placeholder="Juan dela Cruz" />
              <Field label="Email address" placeholder="juan@startup.ph" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
              <Field label="Mobile number" placeholder="+63 9XX XXX XXXX" />
              <Field label="Team size" placeholder="e.g. 3 members" />
            </div>
            <div style={{ marginBottom: 18 }}>
              <Field label="Startup name" placeholder="e.g. HarvestLink" />
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#141417", marginBottom: 7 }}>Stage</label>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {stages.map((s, i) => (
                  <span
                    key={s}
                    style={
                      i === 0
                        ? { fontSize: 13, fontWeight: 600, color: "#fff", background: "#F26522", padding: "9px 16px", borderRadius: 9999 }
                        : {
                            fontSize: 13,
                            fontWeight: 500,
                            color: "#44444C",
                            background: "#F4F2EC",
                            padding: "9px 16px",
                            borderRadius: 9999,
                            border: "1px solid rgba(20,20,25,0.08)",
                          }
                    }
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#141417", marginBottom: 7 }}>Problem you&rsquo;re solving</label>
              <textarea
                placeholder="Describe the problem and who it affects…"
                rows={4}
                readOnly
                style={{
                  width: "100%",
                  minHeight: 90,
                  border: "1px solid rgba(20,20,25,0.16)",
                  borderRadius: 10,
                  background: "#fff",
                  padding: "12px 14px",
                  fontSize: 14,
                  color: "#1A1A1F",
                  lineHeight: 1.55,
                  fontFamily: "inherit",
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#141417", marginBottom: 7 }}>Pitch deck</label>
              <div
                style={{
                  border: "1.5px dashed rgba(20,20,25,0.2)",
                  borderRadius: 12,
                  background: "#FBFAF6",
                  padding: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  textAlign: "center",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth={2}>
                  <path d="M12 16V4m0 0L8 8m4-4 4 4" />
                  <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                </svg>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#141417" }}>Drag &amp; drop or browse</div>
                  <div style={{ fontSize: 12.5, color: "#9A958B" }}>PDF, DOCX, or PPTX · max 10MB</div>
                </div>
              </div>
            </div>

            <label style={{ display: "flex", alignItems: "flex-start", gap: 11, marginBottom: 28, cursor: "pointer" }}>
              <input type="checkbox" defaultChecked style={{ width: 20, height: 20, accentColor: "#F26522", marginTop: 1, flexShrink: 0 }} />
              <span style={{ fontSize: 13, lineHeight: 1.5, color: "#6B6B73" }}>
                I consent to the processing of my personal data in accordance with the Data Privacy Act (RA 10173) and the Incubator Baguio{" "}
                <span style={{ color: "#F26522", fontWeight: 600 }}>Privacy Policy</span>.
              </span>
            </label>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                paddingTop: 24,
                borderTop: "1px solid rgba(20,20,25,0.08)",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12.5, fontWeight: 600 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3F9E4D" strokeWidth={2.4}>
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span style={{ color: "#6B6B73" }}>Draft saved a moment ago</span>
              </span>
              <button
                type="submit"
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
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Continue to the venture
                <ArrowRight size={16} />
              </button>
            </div>
          </form>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ background: "#fff", border: "1px solid rgba(20,20,25,0.10)", borderRadius: 18, padding: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9A958B", marginBottom: 16 }}>
                What you&rsquo;ll need
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                {checklist.map((c) => (
                  <div key={c.label} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                    {c.done ? (
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3F9E4D" strokeWidth={2.4} style={{ flexShrink: 0, marginTop: 1 }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    ) : (
                      <span style={{ width: 17, height: 17, borderRadius: 9999, border: "2px solid rgba(20,20,25,0.2)", flexShrink: 0, marginTop: 1 }} />
                    )}
                    <span style={{ fontSize: 14, color: "#44444C" }}>{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "#FFF6F0", border: "1px solid rgba(242,101,34,0.2)", borderRadius: 18, padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 10 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth={2}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 16v-5M12 8h.01" />
                </svg>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#141417" }}>What happens next</span>
              </div>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "#6B6B73" }}>
                You&rsquo;ll get an acknowledgment email instantly. Our team reviews applications and invites shortlisted founders to an interview.
              </p>
            </div>

            <div style={{ background: "#fff", border: "1px solid rgba(20,20,25,0.10)", borderRadius: 18, padding: 22 }}>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "#6B6B73" }}>
                Questions? Email <span style={{ color: "#F26522", fontWeight: 600 }}>apply@incubatorbaguio.ph</span> or visit the CPDSO at Baguio City Hall.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
