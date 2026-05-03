type Props = {
  size?: number;
  className?: string;
};

/**
 * Synergie brand mark — round, clipped from /public/logo.png.
 * The source image has a square bounding box; we clip to a circle so it
 * sits cleanly on any background.
 */
export default function SynergieMark({ size = 28, className = "" }: Props) {
  return (
    <span
      className={`inline-flex rounded-full overflow-hidden bg-[#f3ece1] shrink-0 leading-none ${className}`}
      aria-hidden="true"
    >
      <img
        src="/logo.png"
        alt=""
        width={size}
        height={size}
        className="block object-cover"
        draggable={false}
      />
    </span>
  );
}
