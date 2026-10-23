const LADDOOS: ReadonlyArray<readonly [number, number]> = [
  [118, 128],
  [160, 128],
  [202, 128],
  [139, 98],
  [181, 98],
  [160, 68],
];

/** Plate of laddoos with barfi. Decorative only. */
export function SweetsScene() {
  return (
    <>
      <circle cx="264" cy="44" r="58" fill="#fff" opacity=".3" />
      <circle cx="46" cy="164" r="52" fill="#fff" opacity=".2" />

      <ellipse cx="160" cy="172" rx="108" ry="9" fill="#5a3a24" opacity=".14" />
      <ellipse cx="160" cy="152" rx="106" ry="22" fill="#fffdf8" />
      <ellipse cx="160" cy="148" rx="84" ry="14" fill="#f6e7d0" />

      <path d="M66 152l20-11 20 11-20 11z" fill="#a9c98a" />
      <path d="M214 152l20-11 20 11-20 11z" fill="#f4b6b0" />

      {LADDOOS.map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="23" fill="#f2a22b" />
          <path
            d={`M${cx - 15} ${cy - 8}c4-8 11-12 18-12`}
            fill="none"
            stroke="#fff"
            strokeWidth="4"
            strokeLinecap="round"
            opacity=".4"
          />
          <g fill="#d9811a">
            <circle cx={cx - 6} cy={cy + 6} r="1.8" />
            <circle cx={cx + 8} cy={cy + 2} r="1.8" />
            <circle cx={cx + 1} cy={cy + 12} r="1.8" />
          </g>
        </g>
      ))}
    </>
  );
}
