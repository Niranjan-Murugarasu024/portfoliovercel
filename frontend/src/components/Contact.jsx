import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" style={styles.section}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center' }}
      >
        <div style={styles.sectionLabel}>// Let's Connect</div>
        <h2 style={styles.sectionTitle}>Get In Touch</h2>
        <p style={styles.contactSub}>
          Open to collaborations, partnerships, and conversations with fellow builders.
        </p>
        <div style={styles.contactLinks}>
          <a href="mailto:niranjanmurugarasu@gmail.com" style={styles.contactLink}>
            ✉ Email Me
          </a>
          <a href="https://github.com/Niranjan-Murugarasu024" style={styles.contactLink} target="_blank" rel="noopener noreferrer">
            ⌥ GitHub
          </a>
          <a href="https://www.linkedin.com/in/niranjan-murugarasu-b2661825b/" style={styles.contactLink} target="_blank" rel="noopener noreferrer">
            ⇥ LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const styles = {
  section: {
    padding: '120px 60px',
    borderTop: '1px solid var(--border)',
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
    marginBottom: '24px'
  },
  contactSub: {
    fontSize: '16px',
    color: 'var(--muted)',
    marginBottom: '48px',
    fontWeight: 300
  },
  contactLinks: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center'
  },
  contactLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 28px',
    border: '1px solid var(--border)',
    color: 'var(--muted)',
    fontFamily: 'var(--mono)',
    fontSize: '12px',
    textDecoration: 'none',
    borderRadius: '2px',
    letterSpacing: '0.05em',
    transition: 'all 0.2s'
  }
};

export default Contact;