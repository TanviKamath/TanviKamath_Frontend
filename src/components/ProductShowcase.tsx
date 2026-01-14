import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

import canLemon from '@/assets/can-lemon.png';
import canOrange from '@/assets/can-orange.png';
import canGrapefruit from '@/assets/can-grapefruit.png';
import canLime from '@/assets/can-lime.png';
import canPeach from '@/assets/can-peach.png';

const products = [
  {
    name: 'Lemon',
    description: 'Bright, zesty, and refreshingly tart. A classic citrus experience.',
    image: canLemon,
    bgColorClass: 'bg-lemon',
    textColorClass: 'text-foreground',
    badge: 'Bestseller',
  },
  {
    name: 'Orange',
    description: 'Sweet and vibrant with natural sunshine in every sip.',
    image: canOrange,
    bgColorClass: 'bg-orange',
    textColorClass: 'text-foreground',
    badge: 'No Added Sugar',
  },
  {
    name: 'Grapefruit',
    description: 'Bold and tangy with a perfectly balanced bitter-sweet finish.',
    image: canGrapefruit,
    bgColorClass: 'bg-grapefruit',
    textColorClass: 'text-foreground',
  },
  {
    name: 'Lime',
    description: 'Crisp and invigorating with a tropical twist.',
    image: canLime,
    bgColorClass: 'bg-lime',
    textColorClass: 'text-foreground',
    badge: 'New',
  },
  {
    name: 'Peach',
    description: 'Velvety smooth with the essence of summer orchards.',
    image: canPeach,
    bgColorClass: 'bg-peach',
    textColorClass: 'text-foreground',
  },
];

const ProductShowcase = () => {
  return (
    <section id="products" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="badge-organic mb-6 inline-block"
          >
            Our Collection
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-editorial-display mb-6"
          >
            Five Flavors,
            <br />
            <span className="text-primary">One Promise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Each flavor is carefully crafted to deliver pure, authentic taste.
            Discover your new favorite.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              {...product}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a href="#buy" className="btn-pill-hero">
            Shop All Flavors
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
