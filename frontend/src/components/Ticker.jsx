import { useEffect, useRef } from 'react';

const Ticker = () => {
  const items = [
    'Next.js', 'Supabase', 'Groq / Llama 3', 'Redis', 'asyncpg',
    'D3.js', 'Stripe', 'HIPAA Compliant', 'FastAPI', 'LightGBM',
    'Vercel', 'MIT Licensed'
  ];

  return (
    <div style={styles.ticker}>
      <div style={styles.tickerTrack}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={styles.tickerItem}>
            <span style={{ color: 'var(--accent)', marginRight: '8px' }}>▸</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const styles = {
  ticker: {
    background: 'var(--surface)',
    borderTop: '1px solid var(--border)',
    borderBottom: '1px solid var(--border)',
    padding: '14px 0',
    overflow: 'hidden',
    position: 'relative'
  },
  tickerTrack: {
    display: 'flex',
    gap: '60px',
    animation: 'ticker 20s linear infinite',
    whiteSpace: 'nowrap'
  },
  tickerItem: {
    fontFamily: 'var(--mono)',
    fontSize: '11px',
    color: 'var(--muted)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    flexShrink: 0
  }
};

export default Ticker;