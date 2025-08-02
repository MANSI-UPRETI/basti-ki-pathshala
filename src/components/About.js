import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';
const About = () => {

  const milestones = [
    { year: "2014", title: "Foundation", description: "Started with 10 children in a small room" },
    { year: "2016", title: "Expansion", description: "Reached 100 children with 5 volunteers" },
    { year: "2018", title: "Recognition", description: "Received community service award" },
    { year: "2020", title: "Digital Shift", description: "Adapted to online learning during pandemic" },
    { year: "2023", title: "Growth", description: "Now serving 500+ children with 50+ volunteers" }
  ];

  const impactAreas = [
    { area: "Education Quality", percentage: 95, icon: "📚" },
    { area: "Community Engagement", percentage: 88, icon: "🤝" },
    { area: "Student Success", percentage: 92, icon: "🎓" },
    { area: "Volunteer Satisfaction", percentage: 96, icon: "❤️" }
  ];

  const values = [
    { title: "Equality", description: "Every child deserves quality education regardless of background", icon: "⚖️" },
    { title: "Excellence", description: "Striving for the highest standards in education delivery", icon: "⭐" },
    { title: "Empathy", description: "Understanding and addressing the unique needs of each child", icon: "💝" },
    { title: "Innovation", description: "Embracing new methods to make learning more effective", icon: "💡" }
  ];

  return (
    <div style={{ paddingTop: '80px', background: 'linear-gradient(135deg, #ffd6e7 0%, #ffe8d6 50%, #ffd6e7 100%)', minHeight: '100vh' }}>
      <section className="hero-section" style={{ minHeight: '60vh', background: 'linear-gradient(135deg, #ffd6e7 0%, #ffe8d6 50%, #ffd6e7 100%)' }}>
        <Container>
          <Row className="align-items-center min-vh-60">
            <Col lg={8} className="mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-4 fw-bold mb-4" style={{ color: '#000000' }}>
                  About <span className="text-primary">Basti Ki Pathshala</span>
                </h1>
                <p className="lead fs-5" style={{ color: '#000000' }}>
                  Transforming lives through education, one child at a time. 
                  Our journey from a small initiative to a community movement.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title text-start">Our Vision</h2>
                <p className="lead mb-4">
                  We envision a world where every child has access to quality education, 
                  regardless of their economic circumstances. Education is the key to breaking 
                  the cycle of poverty and building a brighter future.
                </p>
                <p className="mb-4">
                  Basti Ki Pathshala was born from the belief that education is a fundamental right, 
                  not a privilege. Our founder, Anita Desai, started this initiative in 2014 with 
                  just 10 children in a small room, driven by the vision of creating equal 
                  opportunities for all.
                </p>
                <div className="d-flex align-items-center mb-3">
                  <div className="display-6 me-3">🎯</div>
                  <div>
                    <h5 className="mb-1">Accessible Education</h5>
                    <p className="text-muted mb-0">Making quality education available to every child</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="display-6 me-3">🌟</div>
                  <div>
                    <h5 className="mb-1">Community Transformation</h5>
                    <p className="text-muted mb-0">Building stronger, more educated communities</p>
                  </div>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="display-1 mb-4">🏫</div>
                <div className="fs-2 text-warning mb-3">📚 ✨ 🎓</div>
                <div className="fs-4 text-primary">Empowering Dreams</div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Journey</h2>
            <Row className="g-4">
              {milestones.map((milestone, index) => (
                <Col lg={4} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="h-100 border-0 shadow text-center">
                      <Card.Body className="p-4">
                        <div className="display-4 mb-3 text-primary">{milestone.year}</div>
                        <h4 className="mb-3">{milestone.title}</h4>
                        <p className="text-muted">{milestone.description}</p>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Impact</h2>
            <Row className="g-4">
              {impactAreas.map((area, index) => (
                <Col lg={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 shadow-sm">
                      <Card.Body className="p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div className="display-5 me-3">{area.icon}</div>
                          <div>
                            <h5 className="mb-1">{area.area}</h5>
                            <div className="d-flex align-items-center">
                              <ProgressBar 
                                now={area.percentage} 
                                className="flex-grow-1 me-3"
                                style={{ height: '8px' }}
                              />
                              <span className="fw-bold text-primary">{area.percentage}%</span>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Values</h2>
            <Row className="g-4">
              {values.map((value, index) => (
                <Col lg={6} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-100 border-0 shadow-sm">
                      <Card.Body className="p-4">
                        <div className="d-flex align-items-start">
                          <div className="display-4 me-3">{value.icon}</div>
                          <div>
                            <h4 className="mb-2">{value.title}</h4>
                            <p className="text-muted mb-0">{value.description}</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      <section className="section" style={{ background: `linear-gradient(135deg, var(--accent-teal) 0%, var(--accent-navy) 100%)` }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="mb-4">Join Our Mission</h2>
            <p className="lead mb-5">
              Every volunteer, every donation, every hour of teaching makes a difference. 
              Together, we can build a brighter future for our children.
            </p>
            <div className="row g-4 justify-content-center">
              <div className="col-md-3 col-6">
                <div className="display-4 mb-2">500+</div>
                <div className="text-light">Children Educated</div>
              </div>
              <div className="col-md-3 col-6">
                <div className="display-4 mb-2">50+</div>
                <div className="text-light">Dedicated Volunteers</div>
              </div>
              <div className="col-md-3 col-6">
                <div className="display-4 mb-2">10+</div>
                <div className="text-light">Years of Service</div>
              </div>
              <div className="col-md-3 col-6">
                <div className="display-4 mb-2">95%</div>
                <div className="text-light">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default About; 