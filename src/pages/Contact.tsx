import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/index";
import { IMAGES } from "@/assets/images";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { SiWhatsapp, SiFacebook, SiInstagram, SiX } from "react-icons/si";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";



export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    carType: "",
  });

 
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 91064 07236",
      link: "tel:+919106407236",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@premiumdetailing.com",
      link: "mailto:info@premiumdetailing.com",
    },
{
  icon: MapPin,
  title: "Address",
  content: "Desai Car Detailing, OYO 18776 Occazia Bungalow, Near Sheth Mangaldas Rd Junction, Ashram Rd, 5 Samarpan Bungalows, Ahmedabad, Gujarat 380006, India",
  link: "https://maps.google.com/?q=123+Luxury+Auto+Lane+Beverly+Hills+CA",
},
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
  ];

  const socialLinks = [
    { icon: SiFacebook, label: "Facebook", url: "https://facebook.com" },
    { icon: SiInstagram, label: "Instagram", url: "https://instagram.com" },
    { icon: SiX, label: "X (Twitter)", url: "https://x.com" },
  ];

  const whatsappNumber = "9106407236";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like to book a detailing service."
  );

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 z-0 opacity-30"
            style={{
              backgroundImage: `url(${IMAGES.WORKSHOP_5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your vehicle? Contact us today to schedule
                your appointment or ask any questions.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">Send Us a Message</h2>
                    <iframe name="hidden_iframe" style={{ display: "none" }} />
                    <form 
                    action="https://docs.google.com/forms/d/e/1FAIpQLSeo6bUIlJ45E2qxfh4T4aunnIq9sxGw2m9rzQoeaLN8WOUimA/formResponse"
                        method="POST"
                        target="hidden_iframe"
                        className="space-y-6"
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
                              service: "",
                              message: "",
                              carType: "",
                            });
                          }, 500);
                        }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          name="entry.500560441"
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="bg-background/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="bg-background/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          name="entry.385507556"
                          id="phone"
                          type="tel"
                          placeholder="+91 1234567890"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          className="bg-background/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select
                          value={formData.service || ""}
                          onValueChange={(value) =>
                            handleChange("service", value === "none" ? "" : value)
                          }
                        >
                          
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Ceramic Coating">Ceramic Coating</SelectItem>
                            <SelectItem value="PPF">PPF</SelectItem>
                            <SelectItem value="Graphene Coating">Graphene Coating</SelectItem>
                            <SelectItem value="Full PH body wash">Full PH body wash</SelectItem>
                          </SelectContent>
                        </Select>
                        <input type="hidden" name="entry.115166031" value={formData.service} />
                      </div>

                      <div className="space-y-2">
                      <Label>Car Type</Label>

                      <Select
                        value={formData.carType || ""}
                        onValueChange={(value) =>
                          handleChange("carType", value === "none" ? "" : value)
                        }
                      >
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select car type" />
                        </SelectTrigger>
                        <SelectContent>
                          {/* <SelectItem value={formData.service || ""}>Select car type</SelectItem> */}
                          <SelectItem value="Hatchback">Hatchback</SelectItem>
                          <SelectItem value="Sedan">Sedan</SelectItem>
                          <SelectItem value="Suv">Suv</SelectItem>
                          <SelectItem value="Luxury">Luxury</SelectItem>
                        </SelectContent>
                      </Select>

                      {/* 🔥 REQUIRED */}
                      <input
                        type="hidden"
                        name="entry.1845775784"
                        value={formData.carType}
                      />
                    </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          name="entry.1192111398"
                          id="message"
                          placeholder="Tell us about your vehicle and what you're looking for..."
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          required
                          rows={5}
                          className="bg-background/50 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Contact Information</h2>
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="block"
                    >
                      <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-200">
                        <CardContent className="p-6 flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">
                              {info.title}
                            </h3>
                            <p className="text-muted-foreground">{info.content}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.a>
                  ))}
                </div>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-secondary/10">
                        <Clock className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          Working Hours
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-3 mt-4">
                      {workingHours.map((schedule, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center gap-4"
                          >
                          <span className="text-muted-foreground whitespace-nowrap">
                                {schedule.day}
                          </span>
                          <span className="font-medium text-right whitespace-nowrap">
                                {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <motion.a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  >
                    <SiWhatsapp className="w-5 h-5 mr-2" />
                    Book via WhatsApp
                  </Button>
                </motion.a>

                {/* <div>
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-200"
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </div> */}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16"
            >
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Find Us
                </h2>
                <p className="mt-2 text-sm md:text-base text-gray-700">
                  Easily locate our studio and visit us for premium car detailing services.
                </p>
              </div>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
                <CardContent className="p-0">
                  <div className="w-full h-[260px] md:h-[320px] lg:h-[360px] xl:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3672.0346483539365!2d72.5714!3d23.0225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1773924971417!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
