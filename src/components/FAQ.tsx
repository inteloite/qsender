import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is QSender safe to use?',
    answer: 'Yes, QSender is designed with safety in mind. We implement various anti-ban measures and account warming features to ensure your WhatsApp accounts remain secure. However, we always recommend following WhatsApp\'s terms of service and using the platform responsibly.'
  },
  {
    question: 'Does QSender require WhatsApp Business API?',
    answer: 'No, QSender works with regular WhatsApp and WhatsApp Business without requiring the official Business API. This makes it accessible and affordable for businesses of all sizes.'
  },
  {
    question: 'Can I send messages to unsaved numbers?',
    answer: 'Yes, QSender allows you to send bulk messages to unsaved contacts. You can import contact lists and send messages to thousands of recipients without saving each number individually.'
  },
  {
    question: 'Can I connect multiple WhatsApp accounts?',
    answer: 'Absolutely! QSender supports multi-device functionality, allowing you to connect and manage multiple WhatsApp accounts simultaneously. The number of devices depends on your chosen plan.'
  },
  {
    question: 'Does QSender include anti-ban protection?',
    answer: 'Yes, QSender includes features like Trust Builder which gradually warms up your accounts, and intelligent sending patterns to minimize the risk of account bans. We continuously update our system to align with WhatsApp\'s best practices.'
  },
  {
    question: 'How do I activate my QSender license?',
    answer: 'After installing QSender, the software will display a unique device ID. Send this device ID to our support team after purchase, and we will generate your license key based on your plan and device limit. Once activated, your license will remain valid for the selected duration.'
  },
  {
    question: 'How many devices can I activate with my license?',
    answer: 'Each plan supports a specific number of WhatsApp devices: Starter – up to 3 devices, Professional – up to 10 devices, Enterprise – up to 25 devices.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden hover:border-green-400/50 transition-colors">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-3"
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-green-400 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
