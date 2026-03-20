import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { teamMembers } from "@/lib/index";
import { IMAGES } from "@/assets/images";
import { Shield, Target, Users, Award, Clock, ThumbsUp } from "lucide-react";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  const trustIndicators = [
    {
      icon: Shield,
      title: "Certified Excellence",
      description: "Industry-certified technicians with advanced training in nano-coating technology"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest products from leading manufacturers worldwide"
    },
    {
      icon: Clock,
      title: "15+ Years Experience",
      description: "Over a decade of expertise in luxury automotive care and protection"
    },
    {
      icon: ThumbsUp,
      title: "500+ Happy Clients",
      description: "Trusted by luxury car owners and automotive enthusiasts"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={IMAGES.HERO_LUXURY_CAR_2}
              alt="Luxury car detailing studio"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                About Our Studio
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Where precision meets passion in automotive excellence
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              {...fadeInUp}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-foreground">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Founded in 2011, our studio emerged from a passion for automotive perfection and a vision to bring world-class detailing services to luxury vehicle owners. What started as a small workshop has evolved into a premier destination for ceramic coating, paint protection, and automotive customization.
                    </p>
                    <p>
                      We believe every vehicle deserves the highest level of care and protection. Our team combines cutting-edge nano-technology with meticulous craftsmanship to deliver results that exceed expectations. From exotic supercars to daily drivers, we treat every vehicle as a masterpiece.
                    </p>
                    <p>
                      Over the years, we've protected over 1,000 vehicles and built lasting relationships with clients who trust us with their most prized possessions. Our commitment to excellence and continuous innovation keeps us at the forefront of the automotive care industry.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={IMAGES.WORKSHOP_2}
                    alt="Professional car detailing studio"
                    className="rounded-2xl shadow-2xl shadow-primary/20"
                  />
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl -z-10" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              {...fadeInUp}
            >
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Our Mission</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        To provide unparalleled automotive protection and detailing services using the latest nano-technology and premium products. We strive to preserve and enhance the beauty of every vehicle while delivering exceptional customer experiences that build lasting trust.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Our Vision</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        To become the most trusted name in luxury automotive care, setting industry standards for quality, innovation, and customer satisfaction. We envision a future where every vehicle owner has access to premium protection solutions that preserve their investment for years to come.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              {...fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-4 text-foreground">Meet Our Expert Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Certified professionals dedicated to automotive excellence
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  className="group"
                  variants={fadeInUp}
                >
                  <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={IMAGES[member.image as keyof typeof IMAGES]}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-60" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              {...fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-4 text-foreground">Our State-of-the-Art Facility</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Equipped with the latest technology and premium tools
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[IMAGES.WORKSHOP_3, IMAGES.WORKSHOP_4, IMAGES.WORKSHOP_2].map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group overflow-hidden rounded-2xl aspect-[4/3]"
                  variants={fadeInUp}
                >
                  <img
                    src={image}
                    alt={`Workshop facility ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              {...fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-4 text-foreground">Why Customers Trust Us</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built on a foundation of excellence and integrity
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center group"
                    variants={fadeInUp}
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{indicator.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{indicator.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-12 border border-primary/20"
              {...fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Experience Premium Care?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join hundreds of satisfied clients who trust us with their vehicles
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#/contact"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                >
                  Book Appointment
                </a>
                <a
                  href="#/services"
                  className="px-8 py-4 bg-card text-foreground rounded-xl font-semibold border border-border hover:border-primary/50 transition-colors"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}