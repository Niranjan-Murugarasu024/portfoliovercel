const Footer = () => {
  return (
    <footer style={styles.footer}>
      <span style={styles.footerText}>
        © 2025 <span style={{ color: 'var(--accent)' }}>Niranjan</span> — Coimbatore, India
      </span>
      <span style={styles.footerText}>
        Designed & built <span style={{ color: 'var(--accent)' }}>solo</span> · Shipping what others plan
      </span>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '32px 60px',
    borderTop: '1px solid var(--border)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1
  },
  footerText: {
    fontFamily: 'var(--mono)',
    fontSize: '11px',
    color: 'var(--muted)',
    letterSpacing: '0.05em'
  }
};

export default Footer;