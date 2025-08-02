import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const stats = [
    { number: "500+", label: "Children Educated" },
    { number: "50+", label: "Volunteers" },
    { number: "10+", label: "Years of Service" },
    { number: "95%", label: "Success Rate" }
  ];

  const testimonials = [
    {
      text: "Basti Ki Pathshala gave my daughter the education she deserved. Now she dreams of becoming a doctor!",
      author: "Priya Sharma",
      role: "Parent"
    },
    {
      text: "Volunteering here has been the most rewarding experience of my life. The children's enthusiasm is contagious.",
      author: "Rahul Verma",
      role: "Volunteer"
    },
    {
      text: "This organization is truly making a difference in our community. Every child deserves quality education.",
      author: "Dr. Meera Patel",
      role: "Community Leader"
    }
  ];

  const teamMembers = [
    {
      name: "Anita Desai",
      role: "Founder & Director",
      image: "👩‍🏫",
      description: "Former teacher with 15+ years of experience in community education."
    },
    {
      name: "Rajesh Kumar",
      role: "Program Coordinator",
      image: "👨‍💼",
      description: "Social worker dedicated to empowering underprivileged communities."
    },
    {
      name: "Sunita Devi",
      role: "Education Head",
      image: "👩‍🎓",
      description: "Specialist in child development and innovative teaching methods."
    }
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #ffd6e7 0%, #ffe8d6 50%, #ffd6e7 100%)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ background: 'linear-gradient(135deg, #ffd6e7 0%, #ffe8d6 50%, #ffd6e7 100%)' }}>
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="display-4 fw-bold mb-4" style={{ color: '#000000' }}>
                  Empowering Dreams Through
                  <span className="text-primary"> Education</span>
                </h1>
                <p className="lead mb-4 fs-5" style={{ color: '#000000' }}>
                  Basti Ki Pathshala is dedicated to providing quality education to underprivileged children, 
                  transforming lives and building a brighter future for our community.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button as={Link} to="/volunteer" size="lg" className="btn-primary">
                      Join Us Today
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button as={Link} to="/about" variant="outline-light" size="lg">
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </Col>
            <Col lg={6} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hero-image"
              >
                <div className="display-1 mb-4">🏫</div>
                <div className="fs-2 text-warning">📚 ✨ 🎓</div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #ffd6e7 0%, #ffe8d6 50%, #ffd6e7 100%)' }}>
        <Container>
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.6 }}
          >
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <h2 className="section-title">Our Mission</h2>
                <p className="lead fs-4 mb-5">
                  To provide accessible, quality education to every child in our community, 
                  regardless of their economic background, and empower them to break the cycle of poverty.
                </p>
              </Col>
            </Row>
            <Row className="g-4">
              <Col md={4}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="h-100 text-center border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="display-4 mb-3">🎯</div>
                      <h4>Accessible Education</h4>
                      <p>Making quality education available to every child in our community.</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="h-100 text-center border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="display-4 mb-3">🤝</div>
                      <h4>Community Support</h4>
                      <p>Building strong partnerships with volunteers and local organizations.</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Card className="h-100 text-center border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="display-4 mb-3">🌟</div>
                      <h4>Future Leaders</h4>
                      <p>Nurturing the next generation of leaders and change-makers.</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section" style={{ background: 'linear-gradient(135deg, #ffd6e7 0%, #ffe8d6 50%, #ffd6e7 100%)' }}>
        <Container>
          <Row className="g-4">
            {stats.map((stat, index) => (
              <Col md={3} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="stat-card"
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Meet Our Team</h2>
            <Row className="g-4">
              {teamMembers.map((member, index) => (
                <Col lg={4} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="h-100 text-center border-0 shadow">
                      <Card.Body className="p-4">
                        <div className="display-3 mb-3">{member.image}</div>
                        <h4 className="mb-2">{member.name}</h4>
                        <p className="text-primary fw-semibold mb-3">{member.role}</p>
                        <p className="text-muted">{member.description}</p>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #ffd6e7 0%, #ffe8d6 50%, #ffd6e7 100%)' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">What People Say</h2>
            <Row className="g-4">
              {testimonials.map((testimonial, index) => (
                <Col lg={4} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="testimonial-card">
                      <div className="testimonial-text">"{testimonial.text}"</div>
                      <div className="testimonial-author">
                        <strong>{testimonial.author}</strong>
                        <br />
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #ffd6e7 0%, #ffe8d6 50%, #ffd6e7 100%)' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ color: '#000000' }}
          >
            <h2 className="mb-4">Ready to Make a Difference?</h2>
            <p className="lead mb-5">
              Join our community of volunteers and help us transform lives through education.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button as={Link} to="/volunteer" size="lg" variant="light" className="fw-bold">
                Become a Volunteer
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Home; 
