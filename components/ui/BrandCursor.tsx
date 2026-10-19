import Image from "next/image";

type BrandCursorProps = {
  className?: string;
};

export function BrandCursor({ className = "" }: BrandCursorProps) {
  return (
    <span className={`brand-cursor ${className}`.trim()} aria-hidden="true">
      <Image
        src="/images/brand-cursor.png"
        alt=""
        width={1536}
        height={1024}
        priority={false}
      />
    </span>
  );
}
