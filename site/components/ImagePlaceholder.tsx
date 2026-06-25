import ChevronMotif, { mountainLines } from "./ChevronMotif";

export default function ImagePlaceholder({
  label,
  style,
}: {
  label: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: "relative",
        background: "#141418",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 18,
        minHeight: 320,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(160deg, rgba(242,101,34,0.12), transparent 55%)",
        }}
      />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <ChevronMotif width={110} height={95} lines={mountainLines} strokeWidth={9} />
        <div
          style={{
            fontSize: 11.5,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
