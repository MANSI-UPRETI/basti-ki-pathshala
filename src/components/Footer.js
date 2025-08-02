import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' }
  ];

  const contactInfo = [
    { icon: '📍', text: '123 Education Street, Community Area, City - 123456' },
    { icon: '📞', text: '+91 98765 43210' },
    { icon: '✉️', text: 'info@bastikipathshala.org' },
    { icon: '🕒', text: 'Mon - Fri: 9:00 AM - 6:00 PM' }
  ];

  return (
    <footer className="py-5" style={{ marginTop: 'auto' }}>
      <Container>
        <Row className="g-4">
          <Col lg={4} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-3 text-primary fw-bold">Basti Ki Pathshala</h4>
                             <p className="mb-4 text-dark">
                Empowering dreams through education. We believe every child deserves quality education 
                regardless of their economic background. Join us in building a brighter future.
              </p>
              <div className="d-flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div 
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'var(--primary)',
                        borderRadius: '50%',
                        fontSize: '1.2rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col lg={2} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="mb-3 text-primary">Quick Links</h5>
              <ul className="list-unstyled">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-2"
                  >
                                         <Link 
                       to={link.path}
                       className="text-dark text-decoration-none"
                       style={{ transition: 'all 0.3s ease' }}
                       onMouseEnter={(e) => {
                         e.target.style.color = 'var(--primary)';
                         e.target.style.paddingLeft = '5px';
                       }}
                       onMouseLeave={(e) => {
                         e.target.style.color = '#000000';
                         e.target.style.paddingLeft = '0px';
                       }}
                     >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>

          <Col lg={3} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h5 className="mb-3 text-primary">Contact Info</h5>
              <div>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="d-flex align-items-start mb-3"
                  >
                    <span className="me-2" style={{ fontSize: '1.1rem' }}>{info.icon}</span>
                                         <span className="text-dark small">{info.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col lg={3} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h5 className="mb-3 text-primary">Newsletter</h5>
                             <p className="text-dark small mb-3">
                Stay updated with our latest activities and volunteer opportunities.
              </p>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                                     style={{
                     backgroundColor: 'rgba(255, 255, 255, 0.9)',
                     border: '1px solid rgba(0, 0, 0, 0.1)',
                     color: '#000000'
                   }}
                />
                <motion.button
                  className="btn btn-primary"
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
              <div className="d-flex gap-2">
                <div className="text-center">
                  <div className="display-6 text-primary">500+</div>
                                     <div className="text-dark small">Children</div>
                 </div>
                 <div className="text-center">
                   <div className="display-6 text-primary">50+</div>
                   <div className="text-dark small">Volunteers</div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>

        <motion.hr
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="my-4"
          style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
        />

        <Row className="align-items-center">
          <Col md={6}>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
                             className="text-dark small mb-0"
            >
              © {new Date().getFullYear()} Basti Ki Pathshala. All rights reserved.
            </motion.p>
          </Col>
          <Col md={6} className="text-md-end">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="d-flex gap-3 justify-content-md-end"
            >
                             <Link to="/privacy" className="text-dark text-decoration-none small">
                 Privacy Policy
               </Link>
               <Link to="/terms" className="text-dark text-decoration-none small">
                 Terms of Service
               </Link>
               <Link to="/sitemap" className="text-dark text-decoration-none small">
                 Sitemap
               </Link>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
                 footer {
           background: linear-gradient(135deg, #ffd6e7 0%, #ffe8d6 50%, #ffd6e7 100%) !important;
           color: #000000 !important;
         }

        .input-group .form-control:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 0.2rem rgba(230, 57, 70, 0.25);
        }

        .input-group .form-control::placeholder {
          color: #6c757d;
        }

        @media (max-width: 768px) {
          .d-flex.gap-3 {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 