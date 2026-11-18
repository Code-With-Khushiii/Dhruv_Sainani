import { useEffect, useState } from 'react';
import { ChevronDown, ExternalLink, Lightbulb, Linkedin, Mail, Menu, Phone, Rocket, Target, TrendingUp, Users, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const summary = "Marketing Coordinator with 2+ years of experience delivering B2B and B2C campaigns across paid social, CRM, email, SEO, content, and brand communications. Increased social impressions by 130% and organic website sessions by 25–30%, and delivered segmented email campaigns to 4,000+ members with a 36% open rate. Based in Sydney, Australia.";

    const experience = [
    { company: "Travluxe Travel Club", role: "Marketing Specialist", location: "Sydney, NSW", dates: "Mar 2026 - Present", highlights: [
      "Designed segmented CRM and email campaigns for 4,000+ Passport and VIP members, optimising onboarding journeys, offers, and calls to action to achieve a 36% open rate and 2.3% click rate.",
      "Improved Meta Ads lead generation by analysing campaign metrics, refining creative and messaging, and partnering with developers to resolve conversion tracking issues.",
      "Created integrated digital campaigns for travel memberships, premium promotions, and local business advertising to strengthen brand visibility and customer acquisition.",
      "Coordinated briefs, creative deliverables, stakeholder communications, and launch timelines with the founder, developers, and advertising partners."
    ]},
    { company: "adidas", role: "In-Store Sales Trainer", location: "Sydney, NSW", dates: "Jul 2025 - Present", highlights: [
      "Translate product and campaign messaging into briefings and one-on-one coaching for 10+ colleagues.",
      "Coach staff on product benefits, service standards, upselling, and customer needs, helping sales reach 123% of target.",
      "Promote adiClub loyalty sign-ups, with membership identification peaking at 51% of shoppers, the highest in APAC."
    ]},
    { company: "Calm N Caring Psychology", role: "Social Media Coordinator", location: "Brisbane, QLD", dates: "Sep 2024 - Mar 2025", highlights: [
      "Managed weekly Instagram, Facebook, and TikTok content using Meta Business Suite and Canva, increasing impressions by 130% and engagement by 2.4%.",
      "Created six SEO-optimised articles, contributing to 25–30% organic traffic growth and 15% more time on page.",
      "Used GA4 and Meta Insights to report performance and refine publishing schedules, themes, and creative strategy."
    ]},
    { company: "Digital Armour", role: "Marketing Assistant", location: "Sydney, NSW", dates: "Oct 2024 - Feb 2025", highlights: [
      "Cleaned CRM contacts, tags, and segments to support targeted campaigns and follow-ups.",
      "Built three Keap and Mailchimp workflows, reducing manual send steps by 60% and increasing enquiry and booking rates by 18%.",
      "Coordinated marketing for two events and prepared weekly performance reports for campaign decisions."
    ]},
    { company: "Manson Industrial", role: "Marketing Specialist Intern", location: "Sydney, NSW", dates: "Nov 2023 - May 2024", highlights: [
      "Optimised 12 WordPress and Wix pages with SEO research and audience-focused content, increasing impressions by 55% and average time on page by 22%.",
      "Turned technical product information into benefit-led LinkedIn and website content, increasing impressions by 50–60%."
    ]}
  ];

    const projects = [
    { title: "Member CRM & Email Campaigns", subtitle: "CRM, Email Marketing, Segmentation", category: "Campaigns", introduction: "A segmented campaign programme for 4,000+ travel club members, combining onboarding journeys, promotional offers, and clear calls to action.", problem: "Different member groups need relevant communications and consistent follow-up.", objective: "Improve engagement through segmentation and campaign optimisation.", methodology: ["Segmented Passport and VIP members.", "Optimised onboarding, promotional offers, and calls to action.", "Reviewed campaign performance and refined messaging."], results: ["36% email open rate.", "2.3% email click rate.", "Campaigns reached more than 4,000 members."], conclusion: "Targeted CRM journeys helped deliver measurable member engagement.", links: null },
    { title: "Social Content & SEO Growth", subtitle: "Content Strategy, GA4, Meta Insights", category: "Content & SEO", introduction: "A social and search content programme built around a weekly publishing calendar and search-focused articles.", problem: "Consistent content and relevant search visibility are essential to reach and engage audiences.", objective: "Grow social reach, engagement, and organic website sessions.", methodology: ["Managed weekly social publishing.", "Produced six SEO articles using keyword and search-intent research.", "Used GA4 and Meta Insights to refine the content plan."], results: ["Social impressions increased 130%.", "Organic search traffic grew 25–30%.", "Average time on page increased 15%."], conclusion: "An insight-led content calendar improved reach and organic discovery.", links: null },
    { title: "CRM Automation & Event Marketing", subtitle: "Keap, Mailchimp, GA4", category: "CRM & Automation", introduction: "CRM clean-up and automated campaign workflows supporting event invitations, promotions, lead nurturing, and sales follow-up.", problem: "Manual sends and inconsistent contact data can slow campaign execution.", objective: "Improve audience targeting and streamline marketing operations.", methodology: ["Audited contacts, tags, and segments.", "Built three Keap and Mailchimp workflows.", "Coordinated two events and reported campaign performance."], results: ["Reduced manual send steps by 60%.", "Improved enquiry and booking rates by 18%."], conclusion: "Cleaner CRM data and automated journeys made campaigns more targeted and consistent.", links: null }
  ];

    const skillCategories = [
    { icon: Target, title: 'Digital Marketing', skills: ['Paid Social Advertising', 'Meta Ads Manager', 'Lead Generation', 'Social Media Marketing', 'Content Marketing', 'Event Marketing'] },
    { icon: TrendingUp, title: 'CRM & Email', skills: ['CRM', 'Email Marketing', 'Marketing Automation', 'Audience Segmentation', 'Lead Nurturing', 'Mailchimp', 'Keap', 'Constant Contact'] },
    { icon: Users, title: 'SEO & Analytics', skills: ['SEO', 'Keyword Research', 'Website Optimisation', 'Google Analytics 4', 'Campaign Reporting', 'Social Analytics', 'Tableau'] },
    { icon: Lightbulb, title: 'Content & Communications', skills: ['Content Creation', 'Brand Communications', 'Campaign Messaging', 'Creative Briefs'] },
    { icon: Rocket, title: 'Platforms', skills: ['Meta Business Suite', 'Canva', 'WordPress', 'Wix', 'LinkedIn', 'Instagram', 'Facebook', 'TikTok'] },
    { icon: Target, title: 'Certifications', skills: ['Google Ads (2024)', 'Facebook Ads (2024)', 'Defining Your Ad Audience (2025)', 'AI-Powered Marketer (2025)', 'Marketing Explorer Simulation'] }
  ];

    const education = [
    { school: "University of Technology Sydney", degree: "Master of Marketing", location: "Sydney, NSW", dates: "Aug 2023 - Jun 2025", details: "" }
  ];

    const papers: Array<{ title: string; publication: string; year: string; link: string }> = [];

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'contact'];
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
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="relative flex items-center justify-center">
            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 flex-shrink-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id ? "text-black font-medium" : "text-brown hover:text-black"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button className="absolute right-0 md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img src="images/image.png" alt="Dhruv Sainani" className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              DHRUV SAINANI
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              MARKETING COORDINATOR | DIGITAL CAMPAIGNS | CRM & COMMUNICATIONS
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1">
              SYDNEY, NSW, AUSTRALIA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">{summary}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => scrollToSection('experience')} className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                VIEW EXPERIENCE
              </button>
              <button onClick={() => scrollToSection('contact')} className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300">
                CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'SOCIAL IMPRESSIONS', value: '+130%', detail: 'Content Strategy & Campaigns' },
              { label: 'ORGANIC SESSIONS', value: '+25–30%', detail: 'SEO & Website Content' },
              { label: 'EMAIL OPEN RATE', value: '36%', detail: '4,000+ Member Campaigns' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors" onClick={() => scrollToSection('summary')} />
          </div>
        </div>
      </section>

      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Marketing professional connecting digital campaigns, CRM, content, and analytics to measurable audience and business growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Target, title: 'Digital Campaigns', detail: 'Plan and coordinate paid social, lead generation, and integrated campaigns for business and consumer audiences.' },
              { icon: Rocket, title: 'CRM & Email', detail: 'Build segmented email journeys and marketing automation that support member engagement, lead nurturing, and follow-up.' },
              { icon: Lightbulb, title: 'Content & SEO', detail: 'Create audience-focused social and search content, then use performance insights to improve reach and engagement.' }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Digital campaign, CRM, social media, and content marketing experience across travel, retail, psychology, and B2B industries.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">{role.location} | {role.dates}</div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Selected campaign work across CRM, email marketing, social content, SEO, and event marketing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1" onClick={() => setSelectedProject(index)}>
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">{project.category}</span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">{project.title}</h3>
                <p className="text-sm text-brown mb-4 font-light">{project.subtitle}</p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">{project.introduction}</p>
                {project.links && (project.links.demo || project.links.github) && (
                  <div className="flex gap-4 mt-4" onClick={e => e.stopPropagation()}>
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-black font-medium hover:text-brown transition-colors">
                        <ExternalLink className="w-3 h-3" /> Live Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-black font-medium hover:text-brown transition-colors">
                        <ExternalLink className="w-3 h-3" /> GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">{projects[selectedProject].title}</h2>
              <button onClick={() => setSelectedProject(null)} className="text-brown hover:text-black transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">{projects[selectedProject].category}</span>
                <p className="text-brown font-light mt-2">{projects[selectedProject].subtitle}</p>
                {projects[selectedProject].links && (projects[selectedProject].links.demo || projects[selectedProject].links.github) && (
                  <div className="flex gap-4 mt-3">
                    {projects[selectedProject].links.demo && (
                      <a href={projects[selectedProject].links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-black font-medium hover:text-brown transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                    {projects[selectedProject].links.github && (
                      <a href={projects[selectedProject].links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-black font-medium hover:text-brown transition-colors">
                        <ExternalLink className="w-4 h-4" /> GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
              {[
                ['INTRODUCTION', projects[selectedProject].introduction],
                ['PROBLEM STATEMENT', projects[selectedProject].problem],
                ['OBJECTIVE', projects[selectedProject].objective],
                ['CONCLUSION', projects[selectedProject].conclusion]
              ].map(([title, body]) => (
                <div key={title}>
                  <h3 className="text-lg font-display text-black mb-3 tracking-wide">{title}</h3>
                  <p className="text-brown leading-relaxed font-light">{body}</p>
                </div>
              ))}
              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Digital marketing, CRM, campaign execution, content, SEO, and analytics capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">{edu.location} | {edu.dates}</div>
                </div>
                <p className="text-brown leading-relaxed font-light">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let’s connect about digital marketing, CRM, campaign coordination, and communications opportunities.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a href="tel:+61423669974" className="text-white/80 font-light hover:text-white transition-colors">+61 423 669 974</a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a href="https://www.linkedin.com/in/dhruv-sainani" target="_blank" rel="noopener noreferrer" className="text-white/80 font-light hover:text-white transition-colors">LinkedIn</a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a href="mailto:dhruv.sainani.contact@gmail.com" className="text-white/80 font-light hover:text-white transition-colors">dhruv.sainani.contact@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            (c) 2026 Dhruv Sainani | Marketing Coordinator.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
