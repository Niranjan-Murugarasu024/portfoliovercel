import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" style={styles.section}>
      <div style={styles.sectionLabel}>// Who I Am</div>
      <h2 style={styles.sectionTitle}>About Me</h2>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={styles.aboutGrid}
        className="about-grid"
      >
        <div style={styles.aboutText}>
          <p>
            I'm an <strong>independent AI product builder</strong> based in Coimbatore, Tamil Nadu — a city the startup world largely overlooks, and one I'm working to change that perception for.
          </p>
          <p>
            I build at the intersection of <strong>AI capabilities and production software</strong>. I've shipped products across healthcare data infrastructure, geopolitical financial intelligence, and AI coding tooling — largely solo, without external funding.
          </p>
          <p>
            What drives me isn't just shipping fast — it's <strong>identifying structural moats</strong> that incumbents can't replicate, and building toward them deliberately. From Bloomberg's geopolitical blindspot to the trust gap in vibe-coded software, I work in the spaces large players ignore.
          </p>
          <p>
            I'm deeply embedded in the <strong>AI-assisted development</strong> movement — not just using it, but thinking critically about where it breaks and how to fix it.
          </p>
        </div>
        <div style={styles.aboutRight}>
          <div style={styles.aboutCard}>
            <div style={styles.aboutCardTitle}>📍 Based In</div>
            <div style={styles.aboutCardText}>
              Coimbatore, Tamil Nadu — India's manufacturing capital and an underrated startup hub with deep industrial and engineering DNA.
            </div>
          </div>
          <div style={{ ...styles.aboutCard, borderLeftColor: 'var(--accent2)' }}>
            <div style={styles.aboutCardTitle}>⚙️ Build Style</div>
            <div style={styles.aboutCardText}>
              Solo. AI-assisted. Production-grade. I compress what takes funded teams months into weeks — without sacrificing architecture.
            </div>
          </div>
          <div style={{ ...styles.aboutCard, borderLeftColor: 'var(--accent3)' }}>
            <div style={styles.aboutCardTitle}>🎯 Focus Areas</div>
            <div style={styles.aboutCardText}>
              Healthcare SaaS · Geopolitical Intelligence · AI Dev Tooling · B2B Bootstrapped Products
            </div>
          </div>
          <div style={styles.aboutCard}>
            <div style={styles.aboutCardTitle}>🚀 Currently Building</div>
            <div style={styles.aboutCardText}>
              NEXUS/ATLAS (open-source Bloomberg alternative) + Medicl dashboard UI + geopolitical trading signals platform.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const styles = {
  section: {
    padding: '120px 60px',
    position: 'relative',
    zIndex: 1
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
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'start'
  },
  aboutText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  aboutRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  aboutCard: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    padding: '28px',
    borderLeft: '2px solid var(--accent)'
  },
  aboutCardTitle: {
    fontFamily: 'var(--display)',
    fontSize: '15px',
    fontWeight: 700,
    marginBottom: '8px'
  },
  aboutCardText: {
    fontSize: '14px',
    color: 'var(--muted)',
    fontWeight: 300,
    lineHeight: 1.6
  }
};

export default About;