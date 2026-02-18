import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Package, Award, MapPin, Mail, Menu, X, CheckCircle, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const phoneNumber = '9464003009';
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const telLink = `tel:${phoneNumber}`;

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'products', label: 'Products' },
    { id: 'why-choose', label: 'Why Choose Us' },
    { id: 'contact', label: 'Contact' }
  ];

  const products = [
    {
      title: 'Stationery Items',
      icon: '✏️',
      items: ['Notebooks, Registers', 'Pens, Pencils, Erasers', 'Chart papers, Files']
    },
    {
      title: 'Cleaning & Maintenance Items',
      icon: '🧹',
      items: ['Phenyl, Harpic', 'Brooms, Mops', 'Dustbins, Cleaning Brushes']
    },
    {
      title: 'Sports Items',
      icon: '⚽',
      items: ['Cricket Kits, Footballs', 'Volleyballs, Badminton Sets', 'Sports Cones & Nets']
    },
    {
      title: 'School Furniture',
      icon: '🪑',
      items: ['Student Desks & Benches', 'Chairs & Tables', 'Steel Almirahs & Storage Racks']
    }
  ];

  const whyChoosePoints = [
    '5+ Years Government Supply Experience',
    'Trusted by Multiple Govt Schools',
    'Quality Products at Competitive Rates',
    'On-Time Delivery & Proper Billing',
    'Strong Local Market Reputation'
  ];

  const workExperience = [
    'Government Primary Schools',
    'Government Senior Secondary Schools',
    'Education Department Supply Orders',
    'Local Block & District Education Offices'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/generated/bhatoa-traders-logo.dim_512x512.png" 
              alt="Bhatoa Traders Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="font-display text-xl font-bold text-foreground">Bhatoa Traders</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-medium transition-colors hover:text-primary py-2 ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-background">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="w-fit" variant="secondary">
                5+ Years of Excellence
              </Badge>
              <h1 className="font-display text-balance">
                Trusted Supplier to Government Schools
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Bhatoa Traders specializes in delivering quality, durable, and cost-effective products 
                required for school operations and student needs across government institutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild className="gap-2">
                  <a href={telLink}>
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="gap-2">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
              <div className="pt-4 space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Owner</p>
                <p className="text-lg font-semibold">Harsimrat Singh Bhatoa</p>
                <p className="text-sm text-muted-foreground">Contact: {phoneNumber}</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/assets/generated/bhatoa-traders-hero.dim_1600x600.png" 
                alt="Bhatoa Traders - Government School Supplies" 
                className="w-full h-auto rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="w-fit mx-auto">About Us</Badge>
            <h2 className="font-display">About Bhatoa Traders</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bhatoa Traders is a trusted supplier of general products to Government Schools with over 
              5+ years of experience. We specialize in delivering quality, durable, and cost-effective 
              products required for school operations and student needs.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <Card>
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">5+</CardTitle>
                  <CardDescription>Years Experience</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">100+</CardTitle>
                  <CardDescription>Schools Served</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">1000+</CardTitle>
                  <CardDescription>Products Supplied</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="w-fit mx-auto">Our Experience</Badge>
              <h2 className="font-display">Our Work Experience</h2>
              <p className="text-lg text-muted-foreground">
                For the last 5 years, Bhatoa Traders has been actively working with various government 
                educational institutions, ensuring timely delivery, proper billing, and reliable service.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {workExperience.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="w-fit mx-auto">Our Products</Badge>
            <h2 className="font-display">Products We Supply</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deal in a wide range of general school-use products to meet all your educational institution needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{product.icon}</div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="w-fit mx-auto">Why Choose Us</Badge>
              <h2 className="font-display">Why Choose Bhatoa Traders</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {whyChoosePoints.map((point, index) => (
                <Card key={index} className="bg-card hover:bg-accent/5 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span>{point}</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="w-fit mx-auto">Service Area</Badge>
            <h2 className="font-display">Our Service Area</h2>
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We supply products to Government Schools across nearby districts and rural as well as 
              urban education institutions, ensuring quality service throughout the region.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="w-fit mx-auto">Get In Touch</Badge>
              <h2 className="font-display">Contact Us</h2>
              <p className="text-lg text-muted-foreground">
                Ready to place an order or have questions? Get in touch with us today.
              </p>
            </div>
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-display font-semibold">Bhatoa Traders</h3>
                    <p className="text-muted-foreground">Owner: Harsimrat Singh Bhatoa</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild className="gap-2">
                      <a href={telLink}>
                        <Phone className="h-5 w-5" />
                        {phoneNumber}
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="gap-2">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4" />
                      Available for inquiries and orders
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="w-fit mx-auto">Our Vision</Badge>
            <h2 className="font-display">Future Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our goal is to expand Bhatoa Traders to supply high-quality educational and general 
              products to more government institutions across the region while maintaining trust, 
              quality, and timely service.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/generated/bhatoa-traders-logo.dim_512x512.png" 
                  alt="Bhatoa Traders Logo" 
                  className="h-10 w-10 object-contain"
                />
                <span className="font-display text-xl font-bold">Bhatoa Traders</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted supplier of quality products to Government Schools for over 5 years.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                {navItems.slice(1).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Contact Info</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Owner: Harsimrat Singh Bhatoa</p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {phoneNumber}
                </p>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={telLink}>Call</a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Bhatoa Traders. All rights reserved. | Built with ❤️ using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'bhatoa-traders')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

