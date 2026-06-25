export default function ArrowRight({
  size = 16,
  color = "#fff",
  strokeWidth = 2.4,
}: {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
