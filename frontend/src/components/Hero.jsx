import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section style={styles.hero}>
      {/* Animated Background Gradients instead of 3D */}
      <div style={styles.bgGlow} />
      <div style={styles.bgGlow2} />
      <div style={styles.bgGlow3} />

      {/* Content */}
      <div style={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={styles.heroTag}
        >
          <span style={styles.statusDot} />
          AI Builder · Coimbatore, India
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={styles.heroName}
        >
          Building
          <span style={styles.heroNameStroke}>The Future.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={styles.heroDesc}
        >
          I'm <strong>Ninju</strong> — an independent AI product builder shipping across <strong>healthcare infrastructure</strong>, <strong>geopolitical intelligence</strong>, and <strong>AI-assisted development</strong>. Solo. Fast. Production-grade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          style={styles.heroStats}
          className="hero-stats"
        >
          <div>
            <div style={styles.statNum}>5+</div>
            <div style={styles.statLabel}>Products Built</div>
          </div>
          <div>
            <div style={styles.statNum}>3</div>
            <div style={styles.statLabel}>Active Verticals</div>
          </div>
          <div>
            <div style={styles.statNum}>∞</div>
            <div style={styles.statLabel}>Ship Velocity</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          style={styles.heroCta}
        >
          <a href="#projects" style={styles.btnPrimary}>
            → See My Work
          </a>
          <a href="#contact" style={styles.btnSecondary}>
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '120px 60px 80px',
    position: 'relative',
    overflow: 'hidden'
  },
  bgGlow: {
    position: 'absolute',
    width: '800px',
    height: '800px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0, 229, 160, 0.08) 0%, transparent 70%)',
    right: '-200px',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    animation: 'float 20s ease-in-out infinite'
  },
  bgGlow2: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(91, 141, 238, 0.06) 0%, transparent 70%)',
    left: '-100px',
    bottom: '10%',
    pointerEvents: 'none',
    animation: 'float 15s ease-in-out infinite reverse'
  },
  bgGlow3: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 107, 53, 0.04) 0%, transparent 70%)',
    right: '20%',
    bottom: '20%',
    pointerEvents: 'none',
    animation: 'float 12s ease-in-out infinite'
  },
  heroContent: {
    maxWidth: '900px',
    position: 'relative',
    zIndex: 1
  },
  heroTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--mono)',
    fontSize: '11px',
    color: 'var(--accent)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '32px',
    padding: '8px 16px',
    border: '1px solid rgba(0, 229, 160, 0.2)',
    borderRadius: '2px',
    background: 'rgba(0, 229, 160, 0.04)'
  },
  statusDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'var(--accent)',
    animation: 'blink 1.5s ease infinite'
  },
  heroName: {
    fontFamily: 'var(--display)',
    fontSize: 'clamp(56px, 8vw, 96px)',
    fontWeight: 800,
    lineHeight: 0.95,
    letterSpacing: '-3px',
    marginBottom: '24px'
  },
  heroNameStroke: {
    display: 'block',
    color: 'transparent',
    WebkitTextStroke: '1px rgba(232, 237, 242, 0.3)'
  },
  heroDesc: {
    fontSize: '18px',
    color: 'var(--muted)',
    maxWidth: '560px',
    lineHeight: 1.7,
    marginBottom: '48px',
    fontWeight: 300
  },
  heroStats: {
    display: 'flex',
    gap: '48px',
    marginBottom: '48px'
  },
  statNum: {
    fontFamily: 'var(--display)',
    fontSize: '36px',
    fontWeight: 800,
    color: 'var(--accent)',
    lineHeight: 1
  },
  statLabel: {
    fontFamily: 'var(--mono)',
    fontSize: '11px',
    color: 'var(--muted)',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    marginTop: '4px'
  },
  heroCta: {
    display: 'flex',
    gap: '16px'
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 32px',
    background: 'var(--accent)',
    color: '#080b0f',
    fontFamily: 'var(--mono)',
    fontSize: '13px',
    fontWeight: 500,
    letterSpacing: '0.05em',
    textDecoration: 'none',
    borderRadius: '2px',
    transition: 'all 0.2s'
  },
  btnSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 32px',
    border: '1px solid var(--border)',
    color: 'var(--muted)',
    fontFamily: 'var(--mono)',
    fontSize: '13px',
    fontWeight: 400,
    letterSpacing: '0.05em',
    textDecoration: 'none',
    borderRadius: '2px',
    transition: 'all 0.2s'
  }
};

export default Hero;
