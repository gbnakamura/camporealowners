export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a3d3d',
      color: 'white',
      fontFamily: 'Space Grotesk, sans-serif',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: 14,
        background: '#00897B', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        fontSize: 22, fontWeight: 700, marginBottom: 24,
      }}>CR</div>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 12 }}>
        Campo Real AGM 2026
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 400, lineHeight: 1.6 }}>
        We'll be back shortly. Thank you for your patience.
      </p>
    </div>
  );
}