import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import canLemon from '@/assets/can-lemon.png';
import canOrange from '@/assets/can-orange.png';
import canGrapefruit from '@/assets/can-grapefruit.png';
import canLime from '@/assets/can-lime.png';
import canPeach from '@/assets/can-peach.png';

// Magnetic Button Component
const MagneticButton = ({ href, children, variant = 'primary' }: { href: string; children: React.ReactNode; variant?: 'primary' | 'outline' }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      className={variant === 'primary' ? 'btn-pill-hero group' : 'btn-pill-outline group'}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.a>
  );
};

const cans = [
  { name: 'Lemon', image: canLemon, color: 'bg-lemon-bg', textColor: '#fde68a' },
  { name: 'Orange', image: canOrange, color: 'bg-orange-bg', textColor: '#fdba74' },
  { name: 'Grapefruit', image: canGrapefruit, color: 'bg-grapefruit-bg', textColor: '#fda4af' },
  { name: 'Lime', image: canLime, color: 'bg-lime-bg', textColor: '#bef264' },
  { name: 'Peach', image: canPeach, color: 'bg-peach-bg', textColor: '#fbcfe8' },
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Listen to carousel changes
  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const currentCan = cans[currentIndex];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Background Typography */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <motion.h1
          key={currentCan.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-editorial-huge whitespace-nowrap"
          style={{ color: currentCan.textColor }}
        >
          {currentCan.name.toUpperCase()}
        </motion.h1>
      </motion.div>

      {/* Content Container */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-32">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-semibold tracking-wide text-primary uppercase">
                  100% Organic
                </span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-editorial-display mb-6"
            >
              Nature's Finest,
              <br />
              <span className="text-primary">Cold-Pressed</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed"
            >
              Pure, handcrafted beverages made with organic citrus fruits. 
              No added sugars, no preservatives — just nature at its best.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton href="#products" variant="primary">
                Explore Flavors
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton href="#story" variant="outline">
                Our Story
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Content - Can Carousel */}
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, type: 'spring' }}
              className="w-full max-w-[500px]"
            >
              <Carousel
                setApi={setApi}
                opts={{
                  align: 'center',
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 2500,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {cans.map((can, index) => (
                    <CarouselItem key={can.name}>
                      <div className="relative flex items-center justify-center p-8">
                        <motion.img
                          src={can.image}
                          alt={`${can.name} Beverage`}
                          className="w-full h-auto max-w-[300px] md:max-w-[400px] drop-shadow-2xl"
                          animate={{
                            y: [0, -15, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: index * 0.5,
                          }}
                          style={{
                            filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.2))',
                          }}
                        />
                        {/* Decorative glow */}
                        <motion.div
                          animate={{ opacity: [0.3, 0.5, 0.3] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className={`absolute inset-0 ${can.color} blur-3xl -z-10`}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default Hero;
