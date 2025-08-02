import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/volunteer', label: 'Volunteer' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Navbar
        expand="lg"
        fixed="top"
        className="py-3"
        style={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-primary">
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Basti Ki Pathshala
            </motion.span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            className="border-0"
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Nav.Link
                    as={Link}
                    to={item.path}
                    className={`mx-2 fw-semibold position-relative ${
                      isActive(item.path) ? 'active-link' : ''
                    }`}
                    onClick={() => setIsNavExpanded(false)}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="active-indicator"
                        style={{
                          position: 'absolute',
                          bottom: '-5px',
                          left: '0',
                          right: '0',
                          height: '3px',
                          backgroundColor: 'var(--primary)',
                          borderRadius: '2px'
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx>{`
        .navbar {
          transition: all 0.3s ease;
        }

        .scrolled {
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .navbar-brand {
          color: var(--primary) !important;
          text-decoration: none;
        }

        .nav-link {
          color: #000000 !important;
          text-decoration: none;
          padding: 0.5rem 1rem !important;
          border-radius: 25px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--primary) !important;
          background-color: rgba(230, 57, 70, 0.1);
          transform: translateY(-2px);
        }

        .active-link {
          color: var(--primary) !important;
          font-weight: 700;
        }

        .navbar-toggler {
          border: none !important;
          padding: 0.25rem 0.5rem;
        }

        .navbar-toggler:focus {
          box-shadow: none !important;
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background-color: var(--secondary);
            border-radius: 15px;
            margin-top: 1rem;
            padding: 1rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          .nav-link {
            text-align: center;
            margin: 0.5rem 0;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default NavigationBar; 