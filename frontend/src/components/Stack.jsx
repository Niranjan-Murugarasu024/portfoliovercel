import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Stack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stackData = [
    {
      label: 'Frontend',
      color: 'var(--accent2)',
      items: ['Next.js / React', 'D3.js / Recharts', 'Tailwind CSS', 'Zustand', 'Vercel Deploy']
    },
    {
      label: 'Backend & Data',
      color: 'var(--accent2)',
      items: ['FastAPI / Python', 'asyncpg / PostgreSQL', 'Redis (Dedup/Cache)', 'Supabase', 'LightGBM / ML']
    },
    {
      label: 'AI / LLM',
      color: 'var(--accent2)',
      items: ['Groq / Llama 3', 'Claude (Anthropic)', 'LLM Prompt Eng.', 'RAG Pipelines', 'Vibe Coding']
    },
    {
      label: 'Infra & Monetization',
      color: 'var(--accent2)',
      items: ['Stripe Billing', 'HIPAA Compliance', 'CI/CD Pipelines', 'SaaS Architecture', 'Bootstrapped GTM']
    }
  ];

  return (
    <section id="stack" style={styles.section}>
      <div style={styles.sectionLabel}>// Technical Arsenal</div>
      <h2 style={styles.sectionTitle}>My Stack</h2>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={styles.stackGrid}
        className="stack-grid"
      >
        {stackData.map((category, i) => (
          <div key={i} style={styles.stackCategory}>
            <div style={{ ...styles.stackCatLabel, color: category.color }}>
              {category.label}
            </div>
            <div style={styles.stackItems}>
              {category.items.map((item, j) => (
                <div key={j} style={styles.stackItem}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--accent)' }}>→</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const styles = {
  section: {
    padding: '120px 60px',
    position: 'relative',
    zIndex: 1,
    background: 'var(--bg2)'
  },
  sectionLabel: {
    fontFamily: 'var(--mono)',
    fontSize: '11px',
    color: 'var(--accent)',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '16px'
  },
  sectionTitle: {
    fontFamily: 'var(--display)',
    fontSize: 'clamp(36px, 5vw, 56px)',
    fontWeight: 800,
    letterSpacing: '-2px',
    lineHeight: 1,
    marginBottom: '64px'
  },
  stackGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2px'
  },
  stackCategory: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    padding: '32px'
  },
  stackCatLabel: {
    fontFamily: 'var(--mono)',
    fontSize: '10px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '20px'
  },
  stackItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  stackItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: 'var(--muted)',
    fontWeight: 300
  }
};

export default Stack;