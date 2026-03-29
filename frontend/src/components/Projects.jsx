import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.sectionLabel}>// Selected Work</div>
      <h2 style={styles.sectionTitle}>Projects</h2>

      <div ref={ref} style={styles.projectsGrid} className="projects-grid">
        {/* NEXUS - Featured with 3D Globe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={styles.projectCardFeatured}
          className="project-card-featured"
        >
          <div>
            <div style={styles.projectNum}>01</div>
            <div style={styles.projectTitle}>NEXUS</div>
            <div style={styles.projectSubtitle}>Open-Source Bloomberg Alternative</div>
            <p style={styles.projectDesc}>
              A self-hostable geopolitical and financial intelligence terminal. Built with a proprietary Geopolitical Risk Index (GRI) formula, dual-layer D3 geoMercator mapping, real-time signal aggregation, and Redis deduplication. Designed to undercut Bloomberg's structural moats with a geopolitical data layer Bloomberg cannot replicate.
            </p>
            <div style={styles.projectTags}>
              <span style={styles.tagHighlight}>Open Source</span>
              <span style={styles.tagHighlight}>MIT Licensed</span>
              <span style={styles.tag}>Next.js</span>
              <span style={styles.tag}>D3.js</span>
              <span style={styles.tag}>Redis</span>
              <span style={styles.tag}>asyncpg</span>
              <span style={styles.tag}>Zustand</span>
              <span style={styles.tag}>Groq / Llama 3</span>
            </div>
          </div>
          <div style={styles.projectVisual3D}>
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'radial-gradient(circle at center, rgba(0, 229, 160, 0.1), transparent)',
              position: 'relative'
            }}>
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                border: '2px solid rgba(0, 229, 160, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                animation: 'rotate3d 20s linear infinite'
              }}>
                <div style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '12px',
                  color: 'var(--accent)',
                  textAlign: 'center'
                }}>
                  GEOPOLITICAL<br/>INTELLIGENCE
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Medicl */}
        <ProjectCard
          num="02"
          title="Medicl"
          subtitle="Healthcare Data Intelligence Platform"
          desc="A HIPAA-compliant SaaS platform for healthcare data cleaning, preprocessing, and compliance. Positioned as a trust and validation layer for medical AI pipelines — with a production-ready backend and a full data intelligence dashboard in progress."
          tags={[
            { text: 'HIPAA Compliant', highlight: true },
            { text: 'B2B SaaS', highlight: true },
            { text: 'FastAPI' },
            { text: 'Supabase' },
            { text: 'Stripe' },
            { text: 'Python' }
          ]}
          inView={inView}
          delay={0.2}
        />

        {/* ShipSafe */}
        <ProjectCard
          num="03"
          title="ShipSafe"
          subtitle="Post-Generation AI Code Trust Layer"
          desc="Built around the gap between AI code generation speed and production reliability. ShipSafe is a validation and trust layer for vibe-coded products — a freemium-to-enterprise tool that catches what AI code generators miss before it hits production."
          tags={[
            { text: 'AI Tooling', highlight: true },
            { text: 'Freemium', highlight: true },
            { text: 'Next.js' },
            { text: 'LLM Integration' },
            { text: 'Vercel' }
          ]}
          inView={inView}
          delay={0.4}
        />

        {/* VisionQC */}
        <ProjectCard
          num="04"
          title="VisionQC"
          subtitle="AI Visual Defect Detection · Manufacturing"
          desc="An API-first computer vision platform targeting Coimbatore's manufacturing sector. Tiered INR pricing model, a 24-month bootstrap roadmap, and GTM via local industrial associations. Built with deep domain knowledge of the regional industrial ecosystem."
          tags={[
            { text: 'API-First', highlight: true },
            { text: 'Computer Vision' },
            { text: 'B2B' },
            { text: 'Manufacturing' },
            { text: 'Bootstrapped' }
          ]}
          inView={inView}
          delay={0.6}
          borderColor="rgba(255,107,53,0.4)"
        />
      </div>
    </section>
  );
};

const ProjectCard = ({ num, title, subtitle, desc, tags, inView, delay, borderColor }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.7, delay }}
    style={{
      ...styles.projectCard,
      borderLeft: borderColor ? `2px solid ${borderColor}` : undefined
    }}
  >
    <div style={styles.projectNum}>{num}</div>
    <div style={styles.projectTitle}>{title}</div>
    <div style={styles.projectSubtitle}>{subtitle}</div>
    <p style={styles.projectDesc}>{desc}</p>
    <div style={styles.projectTags}>
      {tags.map((tag, i) => (
        <span key={i} style={tag.highlight ? styles.tagHighlight : styles.tag}>
          {tag.text}
        </span>
      ))}
    </div>
  </motion.div>
);

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
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2px'
  },
  projectCard: {
    background: 'var(--surface)',
    padding: '48px',
    border: '1px solid var(--border)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'border-color 0.3s',
    cursor: 'default'
  },
  projectCardFeatured: {
    background: 'var(--surface)',
    padding: '48px',
    border: '1px solid var(--border)',
    gridColumn: 'span 2',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '48px',
    alignItems: 'center'
  },
  projectNum: {
    fontFamily: 'var(--mono)',
    fontSize: '11px',
    color: 'var(--muted)',
    letterSpacing: '0.1em',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  projectTitle: {
    fontFamily: 'var(--display)',
    fontSize: '28px',
    fontWeight: 800,
    letterSpacing: '-1px',
    marginBottom: '8px'
  },
  projectSubtitle: {
    fontFamily: 'var(--mono)',
    fontSize: '11px',
    color: 'var(--accent)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '20px'
  },
  projectDesc: {
    fontSize: '15px',
    color: 'var(--muted)',
    lineHeight: 1.7,
    fontWeight: 300,
    marginBottom: '32px'
  },
  projectTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  tag: {
    fontFamily: 'var(--mono)',
    fontSize: '10px',
    padding: '5px 12px',
    border: '1px solid var(--border)',
    borderRadius: '2px',
    color: 'var(--muted)',
    letterSpacing: '0.05em'
  },
  tagHighlight: {
    fontFamily: 'var(--mono)',
    fontSize: '10px',
    padding: '5px 12px',
    border: '1px solid rgba(0, 229, 160, 0.25)',
    borderRadius: '2px',
    color: 'var(--accent)',
    background: 'rgba(0, 229, 160, 0.05)',
    letterSpacing: '0.05em'
  },
  projectVisual3D: {
    background: 'var(--bg2)',
    border: '1px solid var(--border)',
    borderRadius: '4px',
    height: '400px',
    position: 'relative'
  }
};

export default Projects;