import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 60px',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        background: 'rgba(8, 11, 15, 0.8)'
      }}
    >
      <div style={{
        fontFamily: 'var(--display)',
        fontSize: '18px',
        fontWeight: 800,
        letterSpacing: '-0.5px'
      }}>
        N<span style={{ color: 'var(--accent)' }}>.</span>INJU
      </div>
      <ul style={{
        display: 'flex',
        gap: '40px',
        listStyle: 'none'
      }}>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#stack" style={styles.link}>Stack</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </motion.nav>
  );
};

const styles = {
  link: {
    fontFamily: 'var(--mono)',
    fontSize: '12px',
    color: 'var(--muted)',
    textDecoration: 'none',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    transition: 'color 0.2s'
  }
};

export default Navigation;