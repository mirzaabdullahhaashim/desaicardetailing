import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Atom, Layers, Palette, Sparkles, Zap, Settings, Wrench, Droplet, Star, ChevronRight, ChevronLeft, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { SiInstagram, SiWhatsapp } from 'react-icons/si';
import { Layout } from '@/components/Layout';
import { ROUTE_PATHS, services, pricingPackages, testimonials } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Typewriter } from 'react-simple-typewriter';
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const iconMap = {
  shield: Shield,
  atom: Atom,
  layers: Layers,
  palette: Palette,
  sparkles: Sparkles,
  zap: Zap,
  settings: Settings,
  wrench: Wrench,
  droplet: Droplet,
};

const cards = [
  {
    icon: Zap,
    title: "Expert Detailing",
    desc: "Precision and perfection in every finish"
  },
  {
    icon: Droplet,
    title: "Premium Products",
    desc: "Protecting and enhancing your vehicle"
  },
  {
    icon: Settings,
    title: "Customized Care",
    desc: "Tailored solutions for every car"
  },
  {
    icon: Wrench,
    title: "Skilled Team",
    desc: "Experienced and passionate professionals"
  },
  {
    icon: Star,
    title: "Customer Satisfaction",
    desc: "Committed to exceeding expectations"
  },
  {
    icon: Shield,
    title: "Trusted Reputation",
    desc: "Trusted by hundreds of happy customers"
  },
  {
    icon: MapPin,
    title: "Doorstep Service Available",
    desc: "Professional care at your home or office"
  }
];



function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
}

export default function Home() {
   const { toast } = useToast();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const featuredServices = services.filter(s => s.featured).slice(0, 3);
  const instagramImages = [
    IMAGES.GALLERY_CAR_1,
    IMAGES.GALLERY_CAR_2,
    IMAGES.GALLERY_CAR_3,
    IMAGES.GALLERY_CAR_4,
  ];

  const tickerRef = useRef(null);
  const isInView = useInView(tickerRef, { once: false, margin: "-100px" });
  return (
    <Layout>
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-visible">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.HERO_LUXURY_CAR_1}
            alt="Luxury car detailing"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center pt-10 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
  
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight text-white">

              <span className="shine-text">
                <Typewriter
                  words={[
                    'Desai Car Detailing',
                    'Luxury Car Protection',
                    'Premium Car Detailing'
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </span>

              <span className="block hero-location mt-3 text-cyan-600">
                Ahmedabad
              </span>

            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-lg md:text-2xl text-gray-200 mt-2 mb-10"
            >
              Premium Protection & Care for Your Vehicle • Estd. 2003
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base text-lg px-6 py-4 shadow-md hover:shadow-lg" asChild>
                <Link to={ROUTE_PATHS.CONTACT}>Book Appointment</Link>
              </Button>
              <Button size="lg" variant="secondary" className="text-base text-lg px-6 py-4 shadow-md hover:shadow-lg" asChild>
                <Link to={ROUTE_PATHS.SERVICES}>View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20">

         <motion.a
           onClick={() => {
                      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
                    }}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="group relative flex items-center justify-center w-14 h-14 rounded-full 
            bg-white/90 backdrop-blur-md shadow-xl border border-white/40 
            hover:bg-primary hover:scale-110 transition-all"
          >

            {/* Pulse ring */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary/30 animate-ping"></span>

            {/* Arrow */}
            <ChevronRight className="w-7 h-7 rotate-90 text-primary group-hover:text-white" />

          </motion.a>

        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Our Studio</h2>
            <p className="text-lg text-muted-foreground">
              Desai Car Detailing is Ahmedabad's premier automotive detailing and protection studio, established in 2003. We specialize in cutting-edge nano-ceramic coatings, paint protection film, and precision detailing services. With over 23 years of experience and 1000+ vehicles protected, we bring showroom perfection to every project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={IMAGES.WORKSHOP_1}
                alt="Professional detailing studio"
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Premium Protection</h3>
                  <p className="text-muted-foreground">
                    Advanced nano-ceramic and graphene coatings with 9H hardness for ultimate paint protection
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
                  <p className="text-muted-foreground">
                    Certified technicians with meticulous attention to detail and passion for automotive excellence
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Luxury Experience</h3>
                  <p className="text-muted-foreground">
                    State-of-the-art facility with premium products and personalized service for every client
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium automotive protection and detailing services tailored to luxury vehicles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        {IconComponent && <IconComponent className="w-8 h-8 text-primary" />}
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.benefits.slice(0, 3).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={ROUTE_PATHS.SERVICES}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button size="lg" asChild>
              <Link to={ROUTE_PATHS.SERVICES}>View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card/50">
          <div className="container mx-auto px-4">

            {/* HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience excellence with Desai Car Detailing
              </p>
            </motion.div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <AnimatedCounter end={500} suffix="+" />
                <p className="text-sm md:text-xl text-muted-foreground mt-1">Happy Clients</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <AnimatedCounter end={1000} suffix="+" />
                <p className="text-sm md:text-xl text-muted-foreground mt-1">Coatings Applied</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  <AnimatedCounter end={4.9} suffix="" />
                  <Star className="w-8 h-8 text-primary fill-primary" />
                </div>
                <p className="text-sm md:text-xl text-muted-foreground mt-1">Average Rating</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <AnimatedCounter end={23} suffix="+" />
                <p className="text-sm md:text-xl text-muted-foreground mt-1">Years of Experience</p>
              </motion.div>

            </div>

            {/* INFINITE SCROLL CARDS */}
            <div ref={tickerRef} className="relative overflow-hidden py-8">

             <div
                  className={`flex gap-6 min-w-max ${isInView ? "marquee" : ""}`}
              >

                  {[...cards, ...cards, ...cards].map((item, index) => (
                      <Card
                        key={index}
                        className="flex-shrink-0 w-72 hover:shadow-lg transition-all duration-300"
                      >
                        <CardContent className="pt-5 pb-5 text-center">

                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>

                          <h3 className="text-lg font-semibold mb-2">
                            {item.title}
                          </h3>

                          <p className="text-sm text-muted-foreground">
                            {item.desc}
                          </p>

                        </CardContent>
                      </Card>
                
                ))}

              </div>

            </div>

          </div>
        </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pricing Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect protection package for your vehicle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full ${pkg.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-2 rounded-t-lg font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                    <div className="text-3xl font-bold text-primary mt-4">
                      ₹{pkg.durations.oneYear.toLocaleString()}
                      <span className="text-sm text-muted-foreground font-normal"> / 1 year</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                      <p>3 Years: ₹{pkg.durations.threeYears.toLocaleString()}</p>
                      <p>5 Years: ₹{pkg.durations.fiveYears.toLocaleString()}</p>
                    </div>
                    <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'} asChild>
                      <Link to={ROUTE_PATHS.PRICING}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client Testimonials
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from luxury car owners who trust us with their vehicles
            </p>
          </motion.div>


          {/* Testimonial Container */}
          <div className="max-w-4xl mx-auto relative">

            {/* LEFT ARROW (Desktop only) */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2
              rounded-full border-2 border-primary/40 bg-background
              shadow-md hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>


            <AnimatePresence mode="wait">

              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}

                /* Swipe support */
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}

                onDragEnd={(e, info) => {
                  if (info.offset.x < -80) nextTestimonial();
                  if (info.offset.x > 80) prevTestimonial();
                }}
              >

                <Card className="p-8 touch-pan-y">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                    ))}
                  </div>

                  <p className="text-xl mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>

                  <div>
                    <p className="font-semibold text-lg">
                      {testimonials[currentTestimonial].name}
                    </p>

                    <p className="text-muted-foreground">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>

                </Card>
                <div className="flex justify-center mt-6 gap-2 md:hidden">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                            currentTestimonial === index
                              ? "bg-primary border-primary"
                              : "bg-white border-gray-400"
                          }`}
                      />
                    ))}
                  </div>

              </motion.div>

            </AnimatePresence>


            {/* RIGHT ARROW (Desktop only) */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2
              rounded-full border-2 border-primary/40 bg-background
              shadow-md hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

          </div>

        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Follow Us on Instagram</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See our latest work and transformations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <SiInstagram className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" asChild>
              <Link to={ROUTE_PATHS.GALLERY}>View Full Gallery</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Ready to protect your vehicle? Contact us for a consultation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <p className="text-muted-foreground">info@premiumdetailing.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Location</p>
                        <p className="text-muted-foreground">123 Luxury Lane, Auto District, City 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Hours</p>
                        <p className="text-muted-foreground">Mon-Sat: 9AM - 7PM</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                    <Button className="w-full" size="lg" asChild>
                      <a
                        href="https://wa.me/15551234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <SiWhatsapp className="w-5 h-5" />
                        Book via WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <iframe name="hidden_iframe" style={{ display: "none" }} />
                    <form
                        action="https://docs.google.com/forms/d/e/1FAIpQLSeo6bUIlJ45E2qxfh4T4aunnIq9sxGw2m9rzQoeaLN8WOUimA/formResponse"
                        method="POST"
                        target="hidden_iframe"
                        className="space-y-4"
                        onSubmit={() => {
                          toast({
                            title: "Request Sent ✅",
                            description: "We will contact you soon.",
                          });

                          setTimeout(() => {
                            setFormData({
                              name: "",
                              email: "",
                              phone: "",
                              message: "",
                            });
                          }, 500);
                        }}
                      >
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <input type="hidden" name="entry.500560441" value={formData.name} />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />

                        <input type="hidden" name="entry.385507556" value={formData.phone} />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                          />

                          <input type="hidden" name="entry.1192111398" value={formData.message} />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
}
