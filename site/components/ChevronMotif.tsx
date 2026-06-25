type ChevronLine = { points: string; stroke: string };

export default function ChevronMotif({
  lines,
  width,
  height,
  viewBox = "0 0 120 104",
  strokeWidth = 9,
  preserveAspectRatio,
  style,
}: {
  lines: ChevronLine[];
  width: number;
  height: number;
  viewBox?: string;
  strokeWidth?: number;
  preserveAspectRatio?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      preserveAspectRatio={preserveAspectRatio}
      style={style}
    >
      {lines.map((line, i) => (
        <polyline
          key={i}
          points={line.points}
          stroke={line.stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

export const mountainLines: ChevronLine[] = [
  { points: "12,40 60,12 108,40", stroke: "#F5A623" },
  { points: "12,60 60,32 108,60", stroke: "#E23A2E" },
  { points: "12,80 60,52 108,80", stroke: "#9E2A52" },
  { points: "12,100 60,72 108,100", stroke: "#285E7A" },
];
