'use client';

import {
  TrendingUp,
  Users,
  Building2,
  Rocket,
  Globe,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';
import Card from '@/components/ui/Card';
import StatCard from '@/components/ui/StatCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function CroatiaEcosystemPage() {
  const keyStats = [
    { label: 'Global Ranking', value: '#50', icon: Globe, trend: 'StartupBlink 2025' },
    { label: 'Unicorn GDP Impact', value: '4.1%', icon: Award, trend: '11th globally (WIPO)' },
    { label: 'ICT Specialists', value: '80,000+', icon: Users, trend: '4.3% of employment' },
    { label: 'Total VC Raised', value: '$5B', icon: TrendingUp, trend: '734 funded companies' },
    { label: 'English Proficiency', value: '#11', icon: BookOpen, trend: 'Globally (EF EPI)' },
    { label: 'IT Competitiveness', value: '10th', icon: Rocket, trend: 'In Europe (2024)' }
  ];

  const unicorns = [
    {
      name: 'Infobip',
      valuation: '$10B',
      founded: '2006',
      description: 'Global communications platform reaching 8 billion people',
      highlights: [
        '$2.3 billion revenue (2024)',
        '3,500+ employees across 75+ offices',
        'Bootstrapped to unicorn status in 2020',
        'Serves 200+ countries and territories'
      ]
    },
    {
      name: 'Rimac Group',
      valuation: '$2B+',
      founded: '2009',
      description: 'Electric hypercar manufacturer and technology supplier',
      highlights: [
        'Majority owner of Bugatti Rimac (55%)',
        'Rimac Nevera: 412 km/h top speed',
        'Raised $500M+ from Porsche and others',
        'Supplies EV tech to major automakers'
      ]
    }
  ];

  const techHubs = [
    {
      city: 'Zagreb',
      description: 'The capital of innovation',
      facilities: [
        'Nuqleus - Deep-tech venture builder (FT Top 150)',
        'HUB385 - Premier incubator',
        'WESPA Spaces - 7,000m² with 600+ members',
        'ZICER Innovation Centre',
        'Algebra LAB'
      ]
    },
    {
      city: 'Split',
      description: 'Adriatic tech hub',
      facilities: ['Split Tech City', 'BIRD Incubator']
    },
    {
      city: 'Osijek',
      description: 'Eastern powerhouse',
      facilities: ['BIOS', 'Osijek Software City']
    },
    {
      city: 'Rijeka',
      description: 'Port city innovation',
      facilities: ['STEP RI']
    }
  ];

  const governmentSupport = [
    { program: 'R&D Investment', amount: '€350M annually', description: '1.43% of GDP (2025)' },
    { program: 'Deep-Tech Fund', amount: '€40M', description: 'HBOR + EIF for research commercialization' },
    { program: 'EU Funding', amount: '€1.1B total', description: 'Digital transformation' },
    { program: 'Startup Grants', amount: 'Up to €25,000', description: 'HAMAG-BICRO acceleration' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-primary/10 dark:via-gray-900 dark:to-secondary/10">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,85,164,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,85,164,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-5 py-2 bg-accent/20 rounded-full mb-8 hover:bg-accent/30 transition-colors duration-300">
              <span className="text-accent-dark font-medium text-sm md:text-base">🇭🇷 Croatian Ecosystem</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Croatia: Europe's <span className="text-secondary">Rising Tech Powerhouse</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Two unicorns worth $12B+. 80,000+ ICT specialists. $5B raised by 734 startups.
              The Croatian tech scene is no longer emerging—it has arrived.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Key Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {keyStats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
              color="secondary"
            />
          ))}
        </div>
      </section>

      {/* Unicorn Success Stories */}
      <section className="bg-navy-950 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Unicorn Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {unicorns.map((unicorn) => (
              <Card key={unicorn.name} className="h-full bg-navy-900 border-navy-700">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary">{unicorn.name}</h3>
                    <p className="text-navy-200">Founded {unicorn.founded}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent-dark">{unicorn.valuation}</div>
                    <div className="text-sm text-navy-300">Valuation</div>
                  </div>
                </div>
                <p className="text-navy-200 mb-4">{unicorn.description}</p>
                <ul className="space-y-2">
                  {unicorn.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span className="text-sm text-navy-200">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Other Success Stories */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-center text-white">Rising Stars & Recent Exits</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { name: 'Photomath', sector: 'EdTech (Acquired by Google €500M)' },
                { name: 'Verne', sector: 'Mobility (Raised €100M in 2024)' },
                { name: 'Fonoa', sector: 'Global Tax Compliance' },
                { name: 'AGRIVI', sector: 'Agricultural Technology' }
              ].map((company) => (
                <Card key={company.name} className="text-center p-4 bg-navy-900 border-navy-700">
                  <h4 className="font-bold text-lg text-white">{company.name}</h4>
                  <p className="text-sm text-navy-200 mt-1">{company.sector}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Hubs */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Tech Hubs & Infrastructure</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techHubs.map((hub) => (
            <Card key={hub.city} hover className="h-full">
              <Building2 className="text-secondary mb-3" size={24} />
              <h3 className="text-xl font-bold mb-2">{hub.city}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{hub.description}</p>
              <ul className="space-y-1">
                {hub.facilities.map((facility) => (
                  <li key={facility} className="text-sm text-gray-500 dark:text-gray-500">
                    • {facility}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Government Support */}
      <section className="bg-navy-950 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Government Support</h2>
          <div className="text-center mb-8">
            <p className="text-lg text-navy-200">
              <span className="font-bold">HAMAG-BICRO</span> - Croatian Agency for SMEs, Innovation, and Investments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {governmentSupport.map((support) => (
              <Card key={support.program} className="text-center h-full bg-navy-900 border-navy-700">
                <Briefcase className="text-accent-dark mx-auto mb-3" size={24} />
                <h4 className="font-bold text-lg mb-1 text-white">{support.amount}</h4>
                <p className="text-sm font-medium mb-2 text-navy-200">{support.program}</p>
                <p className="text-xs text-navy-300">{support.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Croatia for French Companies */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Croatia for <span className="text-primary">French Companies</span>?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Talent Pool', desc: '7,000+ ICT students annually', icon: Users },
            { title: 'Cost Advantage', desc: '30-50% lower than Western Europe', icon: TrendingUp },
            { title: 'Time Zone', desc: 'Same as France (CET)', icon: Globe },
            { title: 'EU & Eurozone', desc: 'EU since 2013, Euro since 2023', icon: Award },
            { title: 'English Fluency', desc: '#11 globally, Very High', icon: BookOpen },
            { title: 'Strategic Location', desc: 'Gateway to Southeast Europe', icon: Building2 }
          ].map((item) => (
            <Card key={item.title} hover className="text-center p-6">
              <item.icon className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Croatian Tech Opportunities</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover the fastest-growing tech ecosystem in the EU. Join our community to learn about partnerships, talent, and investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/community">
              <Button variant="secondary" size="lg">
                Join the Community
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="container mx-auto px-4 pb-20">
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Data Sources:</strong> StartupBlink Global Ecosystem Index 2025 | WIPO Global Innovation Index |
            EF English Proficiency Index 2025 | Emerging Europe IT Competitiveness Report 2024 |
            EU Digital Decade Report 2024 | Tracxn Startup Analytics | Company Reports
          </p>
        </div>
      </section>
    </div>
  );
}