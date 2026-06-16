function NinjaIcon({ size = 44, className, tailsClassName }) {
  return (
    <svg
      viewBox="0 0 56 48"
      width={size}
      height={Math.round((size * 48) / 56)}
      className={className}
      aria-hidden="true"
    >
      <g className={tailsClassName}>
        <path d="M14 20 L1 13 L4 22 L1 31 L14 27 Z" fill="var(--color-accent)" />
      </g>
      <path
        d="M28 6c10 0 16 7 16 17s-6 17-16 17-16-7-16-17S18 6 28 6Z"
        fill="currentColor"
      />
      <rect x="12" y="17" width="32" height="7" rx="1" fill="var(--color-accent)" />
      <ellipse cx="24" cy="29" rx="3.4" ry="2.3" fill="var(--color-bg)" />
      <ellipse cx="35" cy="29" rx="3.4" ry="2.3" fill="var(--color-bg)" />
    </svg>
  )
}

export default NinjaIcon
