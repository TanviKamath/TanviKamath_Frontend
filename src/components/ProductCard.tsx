import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  bgColorClass: string;
  textColorClass: string;
  badge?: string;
  index: number;
}

const ProductCard = ({
  name,
  description,
  image,
  bgColorClass,
  textColorClass,
  badge,
  index,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative ${bgColorClass} p-8 lg:p-10 min-h-[500px] md:min-h-[550px] flex flex-col`}>
        {/* Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <motion.span
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              opacity: isHovered ? 0.08 : 0.05,
            }}
            transition={{ duration: 0.5 }}
            className={`text-editorial-huge ${textColorClass} whitespace-nowrap select-none`}
            style={{ fontSize: 'clamp(5rem, 12vw, 10rem)' }}
          >
            {name.toUpperCase()}
          </motion.span>
        </div>

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className="absolute top-6 right-6 z-20"
          >
            <span className="badge-organic">
              {badge}
            </span>
          </motion.div>
        )}

        {/* Floating Can */}
        <div className="relative flex-1 flex items-center justify-center py-8">
          <motion.img
            src={image}
            alt={`${name} Beverage`}
            className="product-can w-[55%] md:w-[50%] h-auto transition-transform duration-500 ease-out"
            animate={{
              y: isHovered ? -15 : 0,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              filter: `drop-shadow(0 ${isHovered ? '40px' : '25px'} ${isHovered ? '50px' : '35px'} rgba(0,0,0,${isHovered ? '0.25' : '0.18'}))`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mt-auto">
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
            {name}
          </h3>
          <p className="text-foreground/70 text-sm md:text-base">
            {description}
          </p>

          {/* Hover CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <button className="text-sm font-semibold text-primary underline underline-offset-4 hover:no-underline">
              Shop Now →
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
