export function PawsGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 118 78" className={className} fill="none" aria-hidden>
      <circle
        cx="58"
        cy="40"
        r="32"
        stroke="currentColor"
        strokeWidth="0.55"
        className="text-foreground/30"
      />
      <circle cx="58" cy="40" r="16" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="84" cy="24" r="1.5" fill="currentColor" />
      <circle cx="34" cy="54" r="1.5" fill="currentColor" />
      <g fill="currentColor" transform="translate(58 40) rotate(-8) scale(0.72)">
        <ellipse cx="0" cy="7.2" rx="4.2" ry="3.3" />
        <ellipse cx="-4.6" cy="0.2" rx="1.55" ry="2.05" />
        <ellipse cx="-1.5" cy="-1.6" rx="1.5" ry="2.1" />
        <ellipse cx="1.6" cy="-1.6" rx="1.5" ry="2.1" />
        <ellipse cx="4.6" cy="0.2" rx="1.55" ry="2.05" />
      </g>
    </svg>
  );
}

export function GasWaitGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 118 78" className={className} fill="none" aria-hidden>
      <path
        d="M10 40h38"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
      />
      <path
        d="M48 40 92 16"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M48 40 92 64"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <text x="96" y="20" className="fill-current font-heading" fontSize="8">
        FILL
      </text>
      <text x="96" y="68" className="fill-current font-heading" fontSize="8">
        WAIT
      </text>
    </svg>
  );
}

export function LinesGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 118 78" className={className} fill="none" aria-hidden>
      <path
        d="M10 18h58"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        className="text-foreground/30"
      />
      <path
        d="M10 32h86"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        className="text-foreground/30"
      />
      <path
        d="M10 46h74"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M10 60h48"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        className="text-foreground/25"
      />
    </svg>
  );
}

export function ProtoLabGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 118 78" className={className} fill="none" aria-hidden>
      <path d="M8 8h102v62H8z" stroke="currentColor" strokeWidth="0.8" />
      <path d="M8 20h102" stroke="currentColor" strokeWidth="0.65" />
      <text x="14" y="16" className="fill-current font-heading" fontSize="7">
        PROTOCOL
      </text>
      <circle cx="16" cy="32" r="1.4" fill="currentColor" />
      <text x="24" y="34" className="fill-current" fontSize="5.5" letterSpacing="0.12em">
        MANUAL
      </text>
      <path
        d="M56 32h36"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        className="text-foreground/35"
      />
      <circle cx="16" cy="48" r="1.4" fill="currentColor" />
      <text x="24" y="50" className="fill-current" fontSize="5.5" letterSpacing="0.12em">
        AUTO
      </text>
      <path d="M48 48h48" stroke="currentColor" strokeWidth="1.05" strokeLinecap="round" />
      <circle cx="16" cy="64" r="1.4" fill="currentColor" />
      <text x="24" y="66" className="fill-current" fontSize="5.5" letterSpacing="0.12em">
        MANUAL
      </text>
      <path
        d="M56 64h28"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        className="text-foreground/35"
      />
    </svg>
  );
}
