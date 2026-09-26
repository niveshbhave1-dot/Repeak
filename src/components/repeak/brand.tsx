import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

/** The ascending twin-ridge mark is constructed from three open trail strokes. */
export function PeakMark(props: IconProps) {
  return <svg viewBox="0 0 44 44" fill="none" aria-hidden="true" {...props}>
    <path d="M3 34 17.5 10l7.2 12.2 4.8-7.5L41 34" stroke="currentColor" strokeWidth="4.4" strokeLinecap="square" strokeLinejoin="miter" />
    <path d="M13.5 34h26" stroke="currentColor" strokeWidth="4.4" strokeLinecap="square" />
    <path d="m20.7 17.1 4-6.4" stroke="currentColor" strokeWidth="2.7" strokeLinecap="square" />
  </svg>;
}

export function Wordmark({ className = '' }: { className?: string }) {
  return <div className={`flex items-center gap-2.5 ${className}`} aria-label="Repeak"><PeakMark className="h-8 w-8 shrink-0" /><span className="font-display text-[25px] font-extrabold leading-none uppercase tracking-[0.025em]">repeak<span className="text-signal">.</span></span></div>;
}

/** Original reward medallion, editable as inline SVG. */
export function RepeakCoin({ className = '' }: { className?: string }) {
  return <svg viewBox="0 0 96 96" fill="none" className={className} role="img" aria-label="Repeak coin">
    <circle cx="48" cy="48" r="45" fill="var(--coin-face)" stroke="var(--coin-edge)" strokeWidth="4" />
    <circle cx="48" cy="48" r="37" stroke="var(--coin-etch)" strokeWidth="1.5" strokeDasharray="2 3" />
    <circle cx="48" cy="48" r="30" fill="var(--coin-inner)" stroke="var(--coin-etch)" strokeWidth="1.5" />
    <path d="M23 61 42 32l10 15 7-10 14 24H23Z" stroke="var(--coin-mark)" strokeWidth="4.2" strokeLinejoin="miter" />
    <path d="M38 61h35" stroke="var(--coin-mark)" strokeWidth="4.2" />
    <path d="M39 22h18M39 74h18" stroke="var(--coin-etch)" strokeWidth="2" strokeLinecap="round" />
  </svg>;
}

/** Original three-icon navigation family. */
export function TrailIcon(props: IconProps) {
  return <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="m2.5 21 8-13 5 8 3-5 7 10H2.5Z"/><path d="M11 26c1-3 3-4 6-5m3-17 1-2m3 5 2-.5"/>
  </svg>;
}
export function CompassIcon(props: IconProps) {
  return <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="14" cy="14" r="10.5"/><path d="m18.5 9.5-2.7 6.3-6.3 2.7 2.7-6.3 6.3-2.7Z"/><path d="M14 1v2m0 22v2M1 14h2m22 0h2"/>
  </svg>;
}
export function SummitIcon(props: IconProps) {
  return <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M4 25V6l10 4 10-4v19M4 6l10-4 10 4M14 10v15M2 25h24"/><path d="m8 18 2.5-4 2.5 4m-4.5-1h4"/>
  </svg>;
}
