import { MessageSquare, Smartphone, BarChart2, FileText, Bot, UserX, Users, TrendingUp, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'WhatsApp Bulk Messaging',
    description: 'Send personalized messages to thousands of contacts in one click. Schedule, segment, and track delivery in real time.',
    gradient: 'from-green-500 to-emerald-500',
    iconBg: 'bg-green-500/10',
    iconRing: 'ring-green-500/20',
    iconColor: 'text-green-400',
    borderHover: 'hover:border-green-400/40',
    stat: '10k+',
    statLabel: 'msgs / hour',
  },
  {
    icon: Smartphone,
    title: 'Multi Device Support',
    description: 'Connect and manage multiple WhatsApp accounts from a single dashboard. Perfect for teams and agencies.',
    gradient: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-500/10',
    iconRing: 'ring-emerald-500/20',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-400/40',
    stat: '50+',
    statLabel: 'accounts',
  },
  {
    icon: BarChart2,
    title: 'Campaign Management',
    description: 'Launch, monitor, and optimize marketing campaigns with detailed analytics and A/B testing built in.',
    gradient: 'from-teal-500 to-green-500',
    iconBg: 'bg-teal-500/10',
    iconRing: 'ring-teal-500/20',
    iconColor: 'text-teal-400',
    borderHover: 'hover:border-teal-400/40',
    stat: '98%',
    statLabel: 'delivery rate',
  },
  {
    icon: FileText,
    title: 'Message Templates',
    description: 'Create engaging messages with buttons, lists, and rich media. Pre-built templates to get started instantly.',
    gradient: 'from-green-500 to-teal-500',
    iconBg: 'bg-green-500/10',
    iconRing: 'ring-green-500/20',
    iconColor: 'text-green-400',
    borderHover: 'hover:border-green-400/40',
    stat: '100+',
    statLabel: 'templates',
  },
  {
    icon: Bot,
    title: 'Auto Reply & Chatbot',
    description: 'Automate responses 24/7 with intelligent chatbot flows. Handle FAQs, appointments, and lead qualification.',
    gradient: 'from-emerald-500 to-green-500',
    iconBg: 'bg-emerald-500/10',
    iconRing: 'ring-emerald-500/20',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-400/40',
    stat: '24/7',
    statLabel: 'auto-pilot',
  },
  {
    icon: UserX,
    title: 'Opt-Out Management',
    description: 'Automatically handle unsubscribe requests and maintain clean contact lists for better deliverability.',
    gradient: 'from-teal-500 to-emerald-500',
    iconBg: 'bg-teal-500/10',
    iconRing: 'ring-teal-500/20',
    iconColor: 'text-teal-400',
    borderHover: 'hover:border-teal-400/40',
    stat: '100%',
    statLabel: 'compliant',
  },
  {
    icon: Users,
    title: 'Group Grabber',
    description: 'Extract contacts from WhatsApp groups with one click. Build targeted lists for hyper-focused campaigns.',
    gradient: 'from-green-500 to-emerald-500',
    iconBg: 'bg-green-500/10',
    iconRing: 'ring-green-500/20',
    iconColor: 'text-green-400',
    borderHover: 'hover:border-green-400/40',
    stat: '1-click',
    statLabel: 'extraction',
  },
  {
    icon: TrendingUp,
    title: 'Trust Builder',
    description: 'Gradually warm new accounts with intelligent sending patterns to build trust and reduce ban risks.',
    gradient: 'from-teal-500 to-green-500',
    iconBg: 'bg-teal-500/10',
    iconRing: 'ring-teal-500/20',
    iconColor: 'text-teal-400',
    borderHover: 'hover:border-teal-400/40',
    stat: '0%',
    statLabel: 'ban risk',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/5 to-black"></div>

      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-green-500/[0.07] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-emerald-500/[0.05] rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 sm:mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-green-400 mb-4">Features</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 px-4">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Dominate WhatsApp Marketing</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto px-4">
            A complete toolkit built for marketers who want results -- not complexity
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className={`relative h-full rounded-2xl bg-white/[0.03] border border-white/[0.07] p-5 sm:p-6 transition-all duration-300 ${feature.borderHover} hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-xl`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 rounded-xl ${feature.iconBg} ring-1 ${feature.iconRing} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                    </div>

                    <div className="text-right">
                      <span className={`text-lg font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                        {feature.stat}
                      </span>
                      <span className="block text-[10px] uppercase tracking-wider text-gray-600 font-medium">
                        {feature.statLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-green-50 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 group-hover:text-green-400 transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  <div className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
