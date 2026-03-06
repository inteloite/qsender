import { Play } from 'lucide-react';

export default function DemoVideo() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
            See Zyqora in Action
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Watch how Zyqora helps businesses automate WhatsApp messaging in minutes.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-2xl sm:rounded-3xl blur-2xl"></div>

          <div className="relative group cursor-pointer">
            <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 overflow-hidden aspect-video flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full blur-xl sm:blur-2xl opacity-50 animate-pulse"></div>
                  <button className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 sm:p-6 hover:bg-white/20 transition-all group-hover:scale-110 transform">
                    <Play className="w-8 h-8 sm:w-12 sm:h-12 text-white fill-white" />
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
