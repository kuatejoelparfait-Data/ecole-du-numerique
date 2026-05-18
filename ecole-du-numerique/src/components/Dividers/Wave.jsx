export default function Wave({ top, bottom }) {
  return (
    <div style={{ background: top, lineHeight: 0, display: 'block', marginBottom: '-2px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '50px' }}
        aria-hidden="true"
      >
        <path
          d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
          fill={bottom}
        />
      </svg>
    </div>
  )
}
