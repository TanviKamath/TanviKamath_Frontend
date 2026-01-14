import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Droplets, Heart } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Organic Ingredients',
    description: 'Sourced from certified organic farms that prioritize sustainable and ethical farming practices.',
  },
  {
    icon: Droplets,
    title: 'Cold-Pressed',
    description: 'Our gentle cold-press process preserves vitamins, enzymes, and natural flavors without heat damage.',
  },
  {
    icon: Heart,
    title: 'No Added Sugar',
    description: 'Just pure fruit sweetness. We never add sugars, artificial sweeteners, or preservatives.',
  },
];

const StorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-lime-bg/50 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-peach-bg/50 blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="badge-organic mb-6 inline-block"
          >
            Our Philosophy
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-editorial-display mb-6"
          >
            From Orchard
            <br />
            to <span className="text-primary">Your Glass</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            We believe in the power of pure ingredients. Every bottle of Verdant is a 
            celebration of nature's bounty, crafted with care and respect for the earth.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 lg:p-10 rounded-3xl bg-card border border-border/50 transition-all duration-500 hover:shadow-elevated hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <feature.icon 
                    size={28} 
                    className="text-primary transition-colors duration-300 group-hover:text-primary-foreground" 
                  />
                </div>

                <h3 className="font-serif text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <blockquote className="max-w-2xl mx-auto">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium italic text-foreground/80 leading-relaxed">
              "We don't just make drinks. We craft moments of pure, 
              <span className="text-primary"> refreshing joy</span>."
            </p>
            <footer className="mt-6 text-muted-foreground">
              — The Verdant Team
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
