import { motion } from 'framer-motion';
import { Check, Sparkles, Car, Truck } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { pricingPackages, ROUTE_PATHS } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const vehicleIcons = {
  hatchback: Car,
  sedan: Car,
  suv: Truck,
};

const durationLabels = {
  oneYear: '1 Year',
  threeYears: '3 Years',
  fiveYears: '5 Years',
};

export default function Pricing() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={IMAGES.HERO_LUXURY_CAR_3}
              alt="Luxury car pricing"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                <Sparkles className="w-3 h-3 mr-1" />
                Premium Protection Packages
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Pricing Plans
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect protection package for your vehicle. All packages include professional installation and warranty coverage.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {pricingPackages.map((pkg, index) => {
                const VehicleIcon = vehicleIcons[pkg.vehicleType];
                return (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className={`relative h-full border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_-6px_color-mix(in_srgb,var(--primary)_25%,transparent)] ${
                      pkg.popular ? 'border-primary shadow-[0_8px_30px_-6px_color-mix(in_srgb,var(--primary)_15%,transparent)]' : 'border-border'
                    }`}>
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <Badge className="bg-primary text-primary-foreground px-4 py-1">
                            Most Popular
                          </Badge>
                        </div>
                      )}
                      <CardHeader className="text-center pb-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                          <VehicleIcon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl mb-2">{pkg.title}</CardTitle>
                        <CardDescription className="text-base">
                          Complete protection package
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          <p className="text-sm font-medium text-muted-foreground">Package Includes:</p>
                          <ul className="space-y-2">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-border">
                          <p className="text-sm font-medium text-muted-foreground mb-3">Duration Options:</p>
                          <Tabs defaultValue="oneYear" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="oneYear" className="text-xs">1 Year</TabsTrigger>
                              <TabsTrigger value="threeYears" className="text-xs">3 Years</TabsTrigger>
                              <TabsTrigger value="fiveYears" className="text-xs">5 Years</TabsTrigger>
                            </TabsList>
                            <TabsContent value="oneYear" className="mt-4">
                              <div className="text-center">
                                <p className="text-3xl font-bold text-primary">
                                  ${pkg.durations.oneYear.toLocaleString()}
                                </p>
                                <p className="text-sm text-muted-foreground mt-1">1 Year Protection</p>
                              </div>
                            </TabsContent>
                            <TabsContent value="threeYears" className="mt-4">
                              <div className="text-center">
                                <p className="text-3xl font-bold text-primary">
                                  ${pkg.durations.threeYears.toLocaleString()}
                                </p>
                                <p className="text-sm text-muted-foreground mt-1">3 Years Protection</p>
                                <Badge variant="secondary" className="mt-2">Best Value</Badge>
                              </div>
                            </TabsContent>
                            <TabsContent value="fiveYears" className="mt-4">
                              <div className="text-center">
                                <p className="text-3xl font-bold text-primary">
                                  ${pkg.durations.fiveYears.toLocaleString()}
                                </p>
                                <p className="text-sm text-muted-foreground mt-1">5 Years Protection</p>
                                <Badge variant="secondary" className="mt-2">Maximum Coverage</Badge>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          asChild
                          className={`w-full ${
                            pkg.popular
                              ? 'bg-primary hover:bg-primary/90'
                              : 'bg-secondary hover:bg-secondary/90'
                          }`}
                        >
                          <Link to={ROUTE_PATHS.CONTACT}>Book Now</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <Card className="border-2 border-border">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-2">Package Comparison</CardTitle>
                  <CardDescription>
                    Compare features across all vehicle types and duration options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-4 px-4 font-semibold">Feature</th>
                          <th className="text-center py-4 px-4 font-semibold">Hatchback</th>
                          <th className="text-center py-4 px-4 font-semibold">Sedan</th>
                          <th className="text-center py-4 px-4 font-semibold">SUV</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-4 px-4 text-sm">Exterior Ceramic Coating</td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 px-4 text-sm">Paint Correction</td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 px-4 text-sm">Wheel & Caliper Coating</td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 px-4 text-sm">Glass Coating</td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 px-4 text-sm">Interior Protection</td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 px-4 text-sm">Engine Bay Detailing</td>
                          <td className="text-center py-4 px-4">
                            <span className="text-muted-foreground">-</span>
                          </td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 px-4 text-sm">Undercarriage Protection</td>
                          <td className="text-center py-4 px-4">
                            <span className="text-muted-foreground">-</span>
                          </td>
                          <td className="text-center py-4 px-4">
                            <span className="text-muted-foreground">-</span>
                          </td>
                          <td className="text-center py-4 px-4">
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 px-4 text-sm font-semibold">1 Year Price</td>
                          <td className="text-center py-4 px-4 font-semibold text-primary">
                            ${pricingPackages[0].durations.oneYear.toLocaleString()}
                          </td>
                          <td className="text-center py-4 px-4 font-semibold text-primary">
                            ${pricingPackages[1].durations.oneYear.toLocaleString()}
                          </td>
                          <td className="text-center py-4 px-4 font-semibold text-primary">
                            ${pricingPackages[2].durations.oneYear.toLocaleString()}
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 px-4 text-sm font-semibold">3 Years Price</td>
                          <td className="text-center py-4 px-4 font-semibold text-primary">
                            ${pricingPackages[0].durations.threeYears.toLocaleString()}
                          </td>
                          <td className="text-center py-4 px-4 font-semibold text-primary">
                            ${pricingPackages[1].durations.threeYears.toLocaleString()}
                          </td>
                          <td className="text-center py-4 px-4 font-semibold text-primary">
                            ${pricingPackages[2].durations.threeYears.toLocaleString()}
                          </td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 text-sm font-semibold">5 Years Price</td>
                          <td className="text-center py-4 px-4 font-semibold text-primary">
                            ${pricingPackages[0].durations.fiveYears.toLocaleString()}
                          </td>
                          <td className="text-center py-4 px-4 font-semibold text-primary">
                            ${pricingPackages[1].durations.fiveYears.toLocaleString()}
                          </td>
                          <td className="text-center py-4 px-4 font-semibold text-primary">
                            ${pricingPackages[2].durations.fiveYears.toLocaleString()}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 text-center"
            >
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="text-2xl">Need a Custom Package?</CardTitle>
                  <CardDescription className="text-base">
                    We offer tailored solutions for unique requirements. Contact us for a personalized quote.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link to={ROUTE_PATHS.CONTACT}>Request Custom Quote</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={IMAGES.HERO_LUXURY_CAR_4}
              alt="Premium service"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Our Protection Packages?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Premium Products</h3>
                  <p className="text-muted-foreground text-sm">
                    We use only the highest quality ceramic coatings and protection films from industry-leading brands.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Expert Installation</h3>
                  <p className="text-muted-foreground text-sm">
                    Our certified technicians have years of experience protecting luxury and exotic vehicles.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Warranty Coverage</h3>
                  <p className="text-muted-foreground text-sm">
                    All packages include comprehensive warranty coverage for complete peace of mind.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
