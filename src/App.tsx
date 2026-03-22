import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowRight, Download, ShoppingBag, Leaf, BookOpen, Brain, Activity, Heart, ChevronRight, Instagram, Youtube, PinIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'Recipes', 'Benefits', 'Research', 'Recipe Book', 'Free Guides', 'Products', 'Blog', 'Contact'];

  return (
    <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-md border-b border-accent/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-2xl font-bold text-primary tracking-wider">MORIVA</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const targetId = item.toLowerCase().replace(' ', '-');
              return (
                <a 
                  key={item} 
                  href={`#${targetId}`}
                  className="text-sm font-medium text-text/80 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-primary/80 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-accent"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const targetId = item.toLowerCase().replace(' ', '-');
              return (
                <a
                  key={item}
                  href={`#${targetId}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-text/80 hover:text-primary hover:bg-accent/30 rounded-md"
                >
                  {item}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center min-h-[90vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-background">
        <iframe
          src="https://www.youtube.com/embed/juTeosQ2KWQ?autoplay=1&mute=1&loop=1&playlist=juTeosQ2KWQ&controls=0&showinfo=0&rel=0&playsinline=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40"
          style={{ 
            width: '100vw', 
            height: '100vh', 
            minWidth: '56.25vh', 
            minHeight: '177.77vw' 
          }}
          allow="autoplay; encrypted-media"
          tabIndex={-1}
          aria-hidden="true"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-primary leading-tight mb-6"
        >
          The Global Moringa <br className="hidden md:block" /> Recipe Universe
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-text/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Discover recipes, research and creative ways to use moringa every day for natural wellness and vitality.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#recipes" 
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
          >
            Explore Recipes <ArrowRight size={18} />
          </a>
          <a 
            href="#recipe-book" 
            className="w-full sm:w-auto px-8 py-4 bg-secondary text-primary rounded-full font-medium hover:bg-secondary/90 transition-all flex items-center justify-center gap-2"
          >
            Get Recipe Book <BookOpen size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Recipes = () => {
  const recipes = [
    { title: 'Moringa Smoothie', image: 'https://picsum.photos/seed/smoothie/600/400' },
    { title: 'Moringa Tea', image: 'https://picsum.photos/seed/tea/600/400' },
    { title: 'Moringa Latte', image: 'https://picsum.photos/seed/latte/600/400' },
    { title: 'Moringa Energy Drink', image: 'https://picsum.photos/seed/energy/600/400' },
    { title: 'Moringa Breakfast Bowl', image: 'https://picsum.photos/seed/bowl/600/400' },
  ];

  return (
    <section id="recipes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-primary mb-4">Recipe Universe</h2>
          <p className="text-text/70 max-w-2xl mx-auto">Explore our curated collection of delicious and nutritious moringa recipes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-background shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-primary mb-4">{recipe.title}</h3>
                <button className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Recipe <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { title: 'Energy', icon: <Activity size={32} />, desc: 'Natural, sustained energy without the caffeine crash.' },
    { title: 'Nutrition', icon: <Leaf size={32} />, desc: 'Packed with vitamins, minerals, and essential amino acids.' },
    { title: 'Focus', icon: <Brain size={32} />, desc: 'Supports cognitive function and mental clarity.' },
    { title: 'Wellness', icon: <Heart size={32} />, desc: 'Rich in antioxidants to support overall immune health.' },
  ];

  return (
    <section id="benefits" className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-primary mb-4">Why Moringa?</h2>
          <p className="text-text/70 max-w-2xl mx-auto">Discover the incredible benefits of the miracle tree.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center"
            >
              <div className="w-16 h-16 mx-auto bg-secondary/30 text-primary rounded-full flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">{benefit.title}</h3>
              <p className="text-text/70 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Research = () => {
  const researchItems = [
    { title: 'Nutrition Facts', desc: 'Detailed breakdown of vitamins, minerals, and protein content.' },
    { title: 'Scientific Studies', desc: 'Latest clinical research on moringa oleifera benefits.' },
    { title: 'Traditional Uses', desc: 'Historical applications in Ayurvedic and traditional medicine.' },
    { title: 'Health Benefits', desc: 'Evidence-based health outcomes and therapeutic uses.' },
  ];

  return (
    <section id="research" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-serif text-primary mb-6">The Science of Moringa</h2>
            <p className="text-text/70 mb-8 leading-relaxed">
              We believe in evidence-based wellness. Explore the scientific research and nutritional data that makes moringa a true superfood.
            </p>
            <button className="px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all">
              Read Full Research
            </button>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {researchItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-accent rounded-2xl hover:border-secondary transition-colors"
              >
                <h3 className="text-lg font-serif text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const RecipeBook = () => {
  return (
    <section id="recipe-book" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-white/10 p-4">
              <img 
                src="https://picsum.photos/seed/book/800/1000" 
                alt="MORIVA Global Moringa Recipe Book Cover" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">MORIVA Global Moringa Recipe Book</h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Elevate your daily nutrition with 50+ carefully crafted moringa recipes. From energizing smoothies and comforting lattes to nourishing breakfast bowls and savory meals.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">✓</div>
                <span>50+ Delicious Recipes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">✓</div>
                <span>Nutritional Information Included</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">✓</div>
                <span>Instant Digital Download</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-secondary text-primary rounded-full font-medium hover:bg-white transition-all flex items-center justify-center gap-2">
                Buy with Razorpay
              </button>
              <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                Buy with PayPal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FreeGuides = () => {
  const guides = [
    { title: '10 Moringa Smoothie Recipes', image: 'https://picsum.photos/seed/guide1/400/500' },
    { title: 'Beginner Guide to Moringa', image: 'https://picsum.photos/seed/guide2/400/500' },
    { title: 'Moringa Tea Recipes', image: 'https://picsum.photos/seed/guide3/400/500' },
  ];

  return (
    <section id="free-guides" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-primary mb-4">Free Guides</h2>
          <p className="text-text/70 max-w-2xl mx-auto">Start your moringa journey with our free downloadable resources.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-32 h-40 mb-6 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={guide.image} 
                  alt={guide.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-lg font-serif text-primary mb-6 flex-grow">{guide.title}</h3>
              <button className="w-full py-3 border border-accent rounded-xl text-primary font-medium hover:bg-accent/30 transition-colors flex items-center justify-center gap-2">
                <Download size={18} /> Download
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const products = [
    { title: 'Organic Moringa Powder', image: 'https://picsum.photos/seed/powder/400/400' },
    { title: 'Moringa Capsules', image: 'https://picsum.photos/seed/capsules/400/400' },
    { title: 'Moringa Herbal Tea', image: 'https://picsum.photos/seed/herbaltea/400/400' },
    { title: 'Moringa Beauty Oil', image: 'https://picsum.photos/seed/oil/400/400' },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-primary mb-4">Recommended Products</h2>
          <p className="text-text/70 max-w-2xl mx-auto">Our curated selection of high-quality moringa products.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-accent/20 mb-4 p-6 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-lg font-medium text-primary mb-3">{product.title}</h3>
              <button className="text-sm font-medium text-text/60 hover:text-primary flex items-center gap-2 transition-colors">
                <ShoppingBag size={16} /> View on Amazon
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const articles = [
    { title: 'Coffee vs Moringa Energy: What\'s the Difference?', category: 'Wellness', date: 'Oct 12, 2023', image: 'https://picsum.photos/seed/coffee/600/400' },
    { title: 'Best Ways to Use Moringa Powder Every Day', category: 'Recipes', date: 'Oct 05, 2023', image: 'https://picsum.photos/seed/ways/600/400' },
    { title: 'The Ultimate Moringa Nutrition Guide', category: 'Research', date: 'Sep 28, 2023', image: 'https://picsum.photos/seed/nutrition/600/400' },
  ];

  return (
    <section id="blog" className="py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-primary mb-4">Latest Articles</h2>
            <p className="text-text/70">Insights, tips, and deep dives into moringa wellness.</p>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            View All <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-text/50 mb-3 uppercase tracking-wider font-medium">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-serif text-primary leading-snug group-hover:text-primary/80 transition-colors">{article.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="sm:hidden mt-8 w-full py-4 flex justify-center items-center gap-2 text-primary font-medium border border-primary/20 rounded-xl">
          View All <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-primary rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Join the Universe</h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">Get weekly moringa recipes, wellness tips, and exclusive offers straight to your inbox.</p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary transition-colors"
                required
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-secondary text-primary rounded-full font-medium hover:bg-white transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-background pt-16 pb-8 border-t border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <span className="font-serif text-2xl font-bold text-primary tracking-wider block mb-4">MORIVA</span>
            <p className="text-text/60 text-sm leading-relaxed mb-6">
              The Global Moringa Recipe Universe. Dedicated to sharing the nutritional power and culinary versatility of the miracle tree.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <PinIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-primary mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-text/70">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#recipes" className="hover:text-primary transition-colors">Recipes</a></li>
              <li><a href="#benefits" className="hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#research" className="hover:text-primary transition-colors">Research</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-primary mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-text/70">
              <li><a href="#recipe-book" className="hover:text-primary transition-colors">Recipe Book</a></li>
              <li><a href="#free-guides" className="hover:text-primary transition-colors">Free Guides</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-primary mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-text/70">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-accent flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text/50">
            © {new Date().getFullYear()} MORIVA. All rights reserved.
          </p>
          <p className="text-xs text-text/50">
            *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-text selection:bg-secondary/30">
      <Navbar />
      <main>
        <Hero />
        <Recipes />
        <Benefits />
        <Research />
        <RecipeBook />
        <FreeGuides />
        <Products />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
