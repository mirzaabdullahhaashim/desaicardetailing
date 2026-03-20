import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Filter } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { galleryImages, type GalleryImage } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import { Button } from '@/components/ui/button';

type CategoryFilter = 'all' | 'coating' | 'ppf' | 'detailing' | 'wrapping';

const categories: { value: CategoryFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'coating', label: 'Coating' },
  { value: 'ppf', label: 'PPF' },
  { value: 'detailing', label: 'Detailing' },
  { value: 'wrapping', label: 'Wrapping' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const getImageSrc = (imageKey: string) => {
    return IMAGES[imageKey as keyof typeof IMAGES] || '';
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Our Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Witness the transformation. Browse our portfolio of premium detailing, coating, and customization work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                className="transition-all duration-200"
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-xl bg-card border border-border cursor-pointer"
                  onClick={() => setLightboxImage(image)}
                  style={{ aspectRatio: '4/3' }}
                >
                  <img
                    src={getImageSrc(image.src)}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-medium text-foreground">{image.alt}</p>
                      <p className="text-xs text-muted-foreground capitalize mt-1">{image.category}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary/20 backdrop-blur-sm rounded-full p-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted-foreground">No images found in this category.</p>
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 z-10 bg-card/80 backdrop-blur-sm hover:bg-card border border-border rounded-full p-3 transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl">
                <img
                  src={getImageSrc(lightboxImage.src)}
                  alt={lightboxImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{lightboxImage.alt}</h3>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30 capitalize">
                      {lightboxImage.category}
                    </span>
                  </div>
                </div>
              </div>

              {lightboxImage.beforeAfter && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-2 gap-4 mt-6"
                >
                  <div className="rounded-xl overflow-hidden border border-border bg-card">
                    <img
                      src={getImageSrc(lightboxImage.beforeAfter.before)}
                      alt="Before"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 text-center">
                      <p className="text-sm font-medium text-muted-foreground">Before</p>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-border bg-card">
                    <img
                      src={getImageSrc(lightboxImage.beforeAfter.after)}
                      alt="After"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 text-center">
                      <p className="text-sm font-medium text-primary">After</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}