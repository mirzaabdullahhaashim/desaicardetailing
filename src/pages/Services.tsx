import { motion } from "framer-motion";
import { Shield, Atom, Layers, Palette, Sparkles, Zap, Settings, Wrench, Droplet, Check, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { services } from "@/lib/index";
import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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

export default function Services() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Premium Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Professional automotive detailing and protection services using cutting-edge nano-technology and premium materials
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                        className={`overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300
                        ${service.available
                          ? "hover:border-primary/30"
                          : "cursor-not-allowed"}`}
                        
                      >
                      <div className="grid md:grid-cols-2 gap-0 relative">
                         {/* 🔥 FULL CARD OVERLAY */}
                          {!service.available && (
                            <div className="absolute inset-0 bg-black/40 md:bg-black/50 z-1" />
                          )}

                          
                        {!service.available && (
                          <div className="hidden md:flex absolute inset-0 items-center justify-center z-20 pointer-events-none">
                            <div className="rotate-[-15deg] border-4 border-red-600 px-8 py-3 rounded-md
                                            text-red-600 font-extrabold text-xl tracking-widest
                                            bg-white shadow-xl shadow-red-500/40">
                              COMING SOON
                            </div>
                          </div>
                        )}


                        <div className={`relative h-64 md:h-auto overflow-hidden 
                          ${!service.available ? "grayscale brightness-75" : ""}`}>
                          <div className="grid grid-cols-2 gap-2 p-4 h-full">
                            {service.images.slice(0, 4).map((imageKey, imgIndex) => {
                              const imageSrc = IMAGES[imageKey as keyof typeof IMAGES];
                              return (
                                <motion.div
                                  key={imgIndex}
                                  className="relative overflow-hidden rounded-lg"
                                  whileHover={service.available ? { scale: 1.05 } : {}}
                                  transition={{ duration: 0.3 }}
                                >
                                  <img
                                    src={imageSrc}
                                    alt={`${service.title} ${imgIndex + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </motion.div>
                              );
                            })}
                          </div>
                          {service.featured && (
                            <div className="absolute top-4 left-4 z-10">
                              <Badge className="bg-secondary text-secondary-foreground">
                                Featured
                              </Badge>
                            </div>
                          )}

                        </div>

                        <div className="p-8 flex flex-col justify-between">
                          <div>
                             {/* ✅ MOBILE ONLY BADGE (ADD HERE) */}
                              {!service.available && (
                                <div className="md:hidden absolute top-3 left-3 z-20">
                                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    COMING SOON
                                  </span>
                                </div>
                              )}
                            <CardHeader className="p-0 mb-6">
                              <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                  {IconComponent && <IconComponent className="w-8 h-8" />}
                                </div>
                                <div>
                                  <CardTitle className="text-3xl mb-2">{service.title}</CardTitle>
                                </div>
                              </div>
                              <CardDescription className="text-base text-muted-foreground">
                                {service.description}
                              </CardDescription>
                            </CardHeader>

                            <CardContent className="p-0 mb-6">
                              <h4 className="text-sm font-semibold text-foreground/80 mb-3 uppercase tracking-wider">
                                Key Benefits
                              </h4>
                              <ul className="grid grid-cols-1 gap-2">
                                {service.benefits.map((benefit, benefitIndex) => (
                                  <motion.li
                                    key={benefitIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + benefitIndex * 0.05 }}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                  >
                                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{benefit}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </CardContent>
                          </div>

                          <CardFooter className="p-0">
                            <Button
                                disabled={!service.available}
                                className={`w-full group text-primary-foreground
                                  ${service.available
                                    ? "bg-primary hover:bg-primary/90"
                                    : "bg-gray-400 cursor-not-allowed"}`}
                                size="lg"
                              >
                              Book Service
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-transparent to-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Vehicle?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Book a consultation with our experts to discuss the perfect protection and detailing package for your luxury vehicle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-accent">
                  View Pricing
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
