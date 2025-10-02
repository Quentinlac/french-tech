'use client';

import {
  TrendingUp,
  Users,
  Building2,
  Rocket,
  Globe,
  Award,
  Brain,
  Euro,
  Zap
} from 'lucide-react';
import Card from '@/components/ui/Card';
import StatCard from '@/components/ui/StatCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function FranceEcosystemPage() {
  const keyStats = [
    { label: 'Global Ranking', value: '#9', icon: Globe, trend: 'After US, China, UK' },
    { label: 'Unicorns', value: '31', icon: Rocket, trend: 'As of Sept 2025' },
    { label: 'Combined Valuation', value: '$74B', icon: Award },
    { label: 'Startups', value: '81,200+', icon: Users },
    { label: 'AI Startups', value: '1,000+', icon: Brain, trend: 'Leading EU' },
    { label: '2024 Funding', value: '€8B', icon: Euro, trend: 'Stable vs 2023' }
  ];

  const topUnicorns = [
    {
      name: 'Mistral AI',
      valuation: '€11.7B',
      sector: 'AI',
      description: 'Europe\'s AI champion',
      highlights: [
        '€1.7B Series C (Sept 2025)',
        'ASML led investment with €1.3B',
        'Valued at $14B (doubled in 1 year)',
        'Le Chat platform competing with ChatGPT'
      ]
    },
    {
      name: 'Doctolib',
      valuation: '$6.4B',
      sector: 'HealthTech',
      description: 'Leading digital health platform',
      highlights: [
        '90 million patients across Europe',
        '400,000+ healthcare professionals',
        'Operating in France, Germany, Italy',
        'Telemedicine & appointment booking'
      ]
    },
    {
      name: 'Back Market',
      valuation: '$5.7B',
      sector: 'Circular Economy',
      description: 'Refurbished electronics marketplace',
      highlights: [
        'Operating in 18 countries',
        'Fighting e-waste globally',
        '6 million+ customers',
        'Sustainable tech pioneer'
      ]
    },
    {
      name: 'Qonto',
      valuation: '$5B',
      sector: 'FinTech',
      description: 'Business banking for SMEs',
      highlights: [
        '500,000+ business clients',
        'Operating in 5 EU countries',
        'Merged with Penta (2022)',
        '€1.2B deposits managed'
      ]
    }
  ];

  const techHubs = [
    {
      city: 'Paris',
      title: 'Europe\'s 2nd Largest Tech Hub',
      highlights: [
        '25 of 31 French unicorns',
        'Station F - 34,000m² startup campus',
        'Meta, DeepMind AI research labs',
        '62% of French VC investment'
      ]
    },
    {
      city: 'Lyon',
      title: 'Competitive Alternative',
      highlights: [
        'Major emerging tech hub',
        'Competitive costs vs Paris',
        'Diverse tech sectors',
        'Growing ecosystem'
      ]
    },
    {
      city: 'Sophia Antipolis',
      title: 'Europe\'s First Science Park',
      highlights: [
        'Founded in 1969',
        '2,230 companies',
        '36,000 employees',
        'Tech & research focus'
      ]
    },
    {
      city: 'Toulouse',
      title: 'Aerospace Tech Hub',
      highlights: [
        'Aerospace excellence',
        'Deep tech focus',
        'Strong industry ties',
        'Innovation clusters'
      ]
    }
  ];

  const governmentPrograms = [
    { name: 'French Tech Grant', amount: 'Up to €30,000', desc: 'Equity-free for startups <1 year' },
    { name: 'Deep Tech Support', amount: 'Up to €2M', desc: 'Mix of grants and subsidies' },
    { name: 'R&D Tax Credit', amount: '30% of costs', desc: 'Tax credit for R&D investments' },
    { name: 'Innovation Projects', amount: '€600,000', desc: 'Equity-free grant for POCs' }
  ];

  const sectors = [
    { name: 'AI & Software', percentage: '€1.3B', trend: '2024 funding' },
    { name: 'HealthTech', percentage: '€1.1B+', trend: 'Leading sector' },
    { name: 'FinTech', percentage: '€831M', trend: '11 unicorns' },
    { name: 'Transportation', percentage: '€1.5B', trend: 'Mobility focus' },
    { name: 'Deep Tech', percentage: '29/120', trend: 'Next40/120 companies' },
    { name: 'Enterprise', percentage: '16', trend: 'Unicorns' }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            France: Europe's <span className="text-primary">Innovation Powerhouse</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            31 unicorns worth $74B. €8 billion raised in 2024. 81,000+ startups.
            Europe's 3rd largest tech ecosystem leading AI and deep tech innovation.
          </p>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {keyStats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
              color="primary"
            />
          ))}
        </div>
      </section>

      {/* Unicorn Gallery */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Top Unicorns</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {topUnicorns.map((unicorn) => (
              <Card key={unicorn.name} className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{unicorn.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{unicorn.sector}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent-dark">{unicorn.valuation}</div>
                    <div className="text-sm text-gray-500">Valuation</div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{unicorn.description}</p>
                <ul className="space-y-2">
                  {unicorn.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* AI Revolution */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">The AI & Deep Tech Revolution</h3>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              {['Mistral AI', 'HuggingFace', 'Poolside', 'Dataiku', 'Pasqal'].map((company) => (
                <div key={company} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <Brain className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-semibold">{company}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
              Leading AI unicorns & quantum computing pioneer
            </p>
          </div>
        </div>
      </section>

      {/* Tech Hubs */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Innovation Hubs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techHubs.map((hub) => (
            <Card key={hub.city} hover className="h-full">
              <Building2 className="text-primary mb-3" size={24} />
              <h3 className="text-xl font-bold mb-1">{hub.city}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{hub.title}</p>
              <ul className="space-y-1">
                {hub.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-gray-500 dark:text-gray-500">
                    • {highlight}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Sector Distribution */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">2024 Funding by Sector</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {sectors.map((sector) => (
              <Card key={sector.name} className="text-center">
                <Zap className="text-accent-dark mx-auto mb-2" size={24} />
                <h4 className="font-bold text-lg">{sector.name}</h4>
                <p className="text-2xl font-bold text-primary my-2">{sector.percentage}</p>
                <p className="text-sm text-gray-500">{sector.trend}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Government Support */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Government Support Programs</h2>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            <span className="font-bold">Bpifrance</span> backs 30% of seed and VC investments
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {governmentPrograms.map((program) => (
            <Card key={program.name} className="text-center h-full">
              <Euro className="text-primary mx-auto mb-3" size={24} />
              <h4 className="font-bold text-lg mb-1">{program.amount}</h4>
              <p className="text-sm font-medium mb-2">{program.name}</p>
              <p className="text-xs text-gray-500">{program.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* La French Tech */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">La French Tech Initiative</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="text-center">
                <p className="text-3xl font-bold text-primary">120</p>
                <p className="text-sm">Next40/120 Scale-ups</p>
              </Card>
              <Card className="text-center">
                <p className="text-3xl font-bold text-primary">€10B</p>
                <p className="text-sm">Combined 2025 Revenue</p>
              </Card>
              <Card className="text-center">
                <p className="text-3xl font-bold text-primary">42,000</p>
                <p className="text-sm">Jobs Created</p>
              </Card>
              <Card className="text-center">
                <p className="text-3xl font-bold text-primary">€2.8B</p>
                <p className="text-sm">AI Foundation (5 years)</p>
              </Card>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              97% of Next40/120 companies use AI daily. 44% are profitable.
              93% have international commercial presence.
            </p>
          </div>
        </div>
      </section>

      {/* Why France for Croatian Startups */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why France for <span className="text-secondary">Croatian Startups</span>?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Market Size', desc: '68 million consumers', icon: Users },
            { title: 'EU Gateway', desc: 'Access to 450M EU citizens', icon: Globe },
            { title: 'Funding Access', desc: 'Europe\'s 2nd largest VC market', icon: Euro },
            { title: 'AI Leadership', desc: 'Top European AI ecosystem', icon: Brain },
            { title: 'Government Support', desc: 'Extensive grant programs', icon: Award },
            { title: 'Talent Pool', desc: 'World-class engineering schools', icon: Building2 }
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
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Discover French Tech Opportunities</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Learn how to access Europe's most dynamic tech ecosystem. Join our community to explore partnerships, funding, and market entry strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/community">
              <Button variant="primary" size="lg">
                Join the Community
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Schedule a Meeting
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="container mx-auto px-4 pb-20">
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Data Sources:</strong> Tracxn Unicorn Analytics Sept 2025 | La French Tech Next40/120 2025 |
            TechCrunch 2024 Funding Report | Station F Impact Report | Dealroom 2024 |
            Mistral AI Series C Announcement | StartupBlink Global Index 2025
          </p>
        </div>
      </section>
    </div>
  );
}