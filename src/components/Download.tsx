import { Download as DownloadIcon, Apple } from 'lucide-react';

export default function Download() {
  return (
    <section id="download" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
            Download Zyqora
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Download Zyqora software and start automating your WhatsApp campaigns instantly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch max-w-2xl mx-auto px-4">
          <button className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-xl overflow-hidden flex-1 sm:min-w-[240px]">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl sm:blur-2xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
            <div className="relative flex items-center justify-center gap-3 text-white">
              <DownloadIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <div className="text-left">
                <div className="text-xs sm:text-sm opacity-90">Download for</div>
                <div className="text-base sm:text-lg font-bold">Windows</div>
              </div>
            </div>
          </button>

          <button className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-xl overflow-hidden flex-1 sm:min-w-[240px]">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 blur-xl sm:blur-2xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="relative flex items-center justify-center gap-3 text-white">
              <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
              <div className="text-left">
                <div className="text-xs sm:text-sm opacity-90">Download for</div>
                <div className="text-base sm:text-lg font-bold">macOS</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
