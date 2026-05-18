export default function Arc({ top, bottom }) {
  return (
    <div style={{ background: top, lineHeight: 0, display: 'block', marginBottom: '-2px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '70px' }}
        aria-hidden="true"
      >
        <path
          d="M0,0 Q720,105 1440,0 L1440,70 L0,70 Z"
          fill={bottom}
        />
      </svg>
    </div>
  )
}
