import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Finally, a beverage that tastes like actual fruit. The lemon flavor is absolutely incredible — bright, fresh, and never too sweet.",
    author: "Sarah M.",
    role: "Wellness Blogger",
    rating: 5,
  },
  {
    quote: "I've tried every organic juice brand out there. Verdant is in a league of its own. The quality is unmatched.",
    author: "James K.",
    role: "Health Coach",
    rating: 5,
  },
  {
    quote: "My kids love the peach flavor, and I love that there's no added sugar. It's a win-win for our family.",
    author: "Emily R.",
    role: "Mother of Three",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="badge-organic mb-6 inline-block"
          >
            Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-editorial-display mb-6"
          >
            Loved by
            <br />
            <span className="text-primary">Thousands</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="testimonial-card group hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote 
                  size={32} 
                  className="text-primary/20 fill-primary/10" 
                />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg leading-relaxed mb-8 text-foreground/80">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="mt-auto">
                <p className="font-serif font-semibold text-lg">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
