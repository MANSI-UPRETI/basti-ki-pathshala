import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    motivation: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Please tell us why you want to join';
    } else if (formData.motivation.trim().length < 50) {
      newErrors.motivation = 'Please provide at least 50 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        motivation: ''
      });
    }, 2000);
  };

  const volunteerBenefits = [
    { icon: "🎓", title: "Teaching Experience", description: "Gain valuable teaching and mentoring experience" },
    { icon: "🤝", title: "Community Impact", description: "Make a real difference in children's lives" },
    { icon: "📚", title: "Skill Development", description: "Develop leadership and communication skills" },
    { icon: "❤️", title: "Personal Growth", description: "Experience the joy of giving back to society" }
  ];

  const requirements = [
    "Minimum age of 18 years",
    "Commitment of at least 2 hours per week",
    "Passion for education and children",
    "Good communication skills",
    "Background verification required"
  ];

  if (isSubmitted) {
    return (
      <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Card className="border-0 shadow-lg">
                  <Card.Body className="p-5">
                    <div className="display-1 text-success mb-4">✅</div>
                    <h2 className="mb-4">Thank You for Your Interest!</h2>
                    <p className="lead mb-4">
                      We've received your volunteer application. Our team will review your information 
                      and contact you within 2-3 business days to discuss next steps.
                    </p>
                                         <div className="p-4 rounded-3 mb-4" style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
                      <h5 className="mb-3">What happens next?</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">📞 We'll call you to discuss your interests and availability</li>
                        <li className="mb-2">🏫 You'll visit our center for orientation</li>
                        <li className="mb-2">📋 Complete background verification process</li>
                        <li className="mb-2">🎯 Start your volunteering journey!</li>
                      </ul>
                    </div>
                    <Button 
                      variant="primary" 
                      size="lg"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Submit Another Application
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '80px', background: 'linear-gradient(135deg, #ffd6e7 0%, #ffe8d6 50%, #ffd6e7 100%)', minHeight: '100vh' }}>
      <section className="hero-section" style={{ minHeight: '40vh' }}>
        <Container>
          <Row className="align-items-center min-vh-40">
            <Col lg={8} className="mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-4 fw-bold mb-4">
                  Join Our <span className="text-warning">Volunteer</span> Team
                </h1>
                <p className="lead fs-5">
                  Make a difference in children's lives. Your time and skills can transform futures.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row className="g-5">
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg">
                  <Card.Body className="p-5">
                    <h2 className="mb-4">Volunteer Application Form</h2>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-4">
                            <Form.Label className="form-label">Full Name *</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={errors.name ? 'is-invalid' : ''}
                              placeholder="Enter your full name"
                            />
                            {errors.name && (
                              <Form.Control.Feedback type="invalid">
                                {errors.name}
                              </Form.Control.Feedback>
                            )}
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-4">
                            <Form.Label className="form-label">Email Address *</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={errors.email ? 'is-invalid' : ''}
                              placeholder="Enter your email address"
                            />
                            {errors.email && (
                              <Form.Control.Feedback type="invalid">
                                {errors.email}
                              </Form.Control.Feedback>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-4">
                        <Form.Label className="form-label">Phone Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={errors.phone ? 'is-invalid' : ''}
                          placeholder="Enter your 10-digit phone number"
                        />
                        {errors.phone && (
                          <Form.Control.Feedback type="invalid">
                            {errors.phone}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="form-label">
                          Why do you want to join Basti Ki Pathshala? *
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="motivation"
                          value={formData.motivation}
                          onChange={handleChange}
                          className={errors.motivation ? 'is-invalid' : ''}
                          placeholder="Tell us about your motivation, relevant experience, and how you can contribute to our mission..."
                        />
                        {errors.motivation && (
                          <Form.Control.Feedback type="invalid">
                            {errors.motivation}
                          </Form.Control.Feedback>
                        )}
                        <Form.Text className="text-muted">
                          Minimum 50 characters. Share your passion for education and community service.
                        </Form.Text>
                      </Form.Group>

                      <div className="d-grid">
                        <Button
                          type="submit"
                          size="lg"
                          className="btn-primary"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Submitting...
                            </>
                          ) : (
                            'Submit Application'
                          )}
                        </Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col lg={4}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="sticky-top" style={{ top: '100px' }}>
                  <Card className="border-0 shadow-sm mb-4">
                    <Card.Body className="p-4">
                      <h4 className="mb-3">Volunteer Benefits</h4>
                      {volunteerBenefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="d-flex align-items-start mb-3"
                        >
                          <div className="display-6 me-3">{benefit.icon}</div>
                          <div>
                            <h6 className="mb-1">{benefit.title}</h6>
                            <p className="text-muted small mb-0">{benefit.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </Card.Body>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h4 className="mb-3">Requirements</h4>
                      <ul className="list-unstyled">
                        {requirements.map((requirement, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="mb-2 d-flex align-items-center"
                          >
                            <span className="text-primary me-2">✓</span>
                            {requirement}
                          </motion.li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

             <section className="section" style={{ background: 'linear-gradient(135deg, #ffd6e7 0%, #ffe8d6 50%, #ffd6e7 100%)' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-4">Ready to Make a Difference?</h2>
            <p className="lead mb-5">
              Join our community of dedicated volunteers and help us create a brighter future for children.
            </p>
            <div className="row g-4 justify-content-center">
              <div className="col-md-3 col-6">
                <div className="display-4 mb-2 text-primary">50+</div>
                <div className="text-muted">Active Volunteers</div>
              </div>
              <div className="col-md-3 col-6">
                <div className="display-4 mb-2 text-primary">500+</div>
                <div className="text-muted">Children Helped</div>
              </div>
              <div className="col-md-3 col-6">
                <div className="display-4 mb-2 text-primary">10+</div>
                <div className="text-muted">Years of Service</div>
              </div>
              <div className="col-md-3 col-6">
                <div className="display-4 mb-2 text-primary">96%</div>
                <div className="text-muted">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default VolunteerForm; 