import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Heart,
  Calendar,
  MapPin,
  X,
  ChevronRight,
  ChevronLeft,
  Quote,
  BookOpen,
  Compass,
  Bus,
  Layers
} from 'lucide-react';
import { threeMajorChapters, timelineMemories, TimelineMemory, MajorChapter } from '@/config/memories';
import { MemoryTimeline3D } from '@/components/3d/MemoryTimeline3D';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { CollegeVanScene } from '@/components/3d/CollegeVanScene';

export const ThreeYearsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chapters' | 'timeline'>('chapters');
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [activeMemory, setActiveMemory] = useState<TimelineMemory | null>(null);
  const [isVanModalOpen, setIsVanModalOpen] = useState(false);

  const activeChapter: MajorChapter = threeMajorChapters[selectedChapterIndex];

  const filteredMemories = selectedYear
    ? timelineMemories.filter((m) => m.yearNumber === selectedYear)
    : timelineMemories;

  const handleNextMemory = () => {
    if (!activeMemory) return;
    const currentIndex = timelineMemories.findIndex((m) => m.id === activeMemory.id);
    const nextIndex = (currentIndex + 1) % timelineMemories.length;
    setActiveMemory(timelineMemories[nextIndex]);
  };

  const handlePrevMemory = () => {
    if (!activeMemory) return;
    const currentIndex = timelineMemories.findIndex((m) => m.id === activeMemory.id);
    const prevIndex = (currentIndex - 1 + timelineMemories.length) % timelineMemories.length;
    setActiveMemory(timelineMemories[prevIndex]);
  };

  return (
    <section id="three-years-timeline" className="relative w-full py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#10091C] via-[#1a0c2b] to-[#10091C] overflow-hidden select-none">
      {/* Dynamic ambient nebula glows */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] bg-[#F2A7C6]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#E8C58A]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#241331]/80 border border-[#E8C58A]/40 backdrop-blur-md mb-6 shadow-gold-glow animate-float-slow">
            <Sparkles size={14} className="text-[#E8C58A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8C58A] font-semibold">
              Phase 4 • Interactive Story & Timeline
            </span>
            <Heart size={13} className="text-[#F2A7C6] fill-[#F2A7C6]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#FFF7FC] text-glow-rose tracking-tight mb-4 uppercase">
            Three Years, Countless Memories
          </h2>

          {/* Central Message Highlight */}
          <div className="max-w-3xl mx-auto p-4 sm:p-6 rounded-2xl bg-[#241331]/40 border border-[#E8C58A]/30 backdrop-blur-md mb-8 shadow-glass">
            <p className="font-serif text-lg sm:text-2xl text-[#FFF7FC] italic text-glow-gold">
              "We met as schoolmates. Life separated us. Somehow, we found our way back to each other."
            </p>
          </div>

          {/* Mode Switcher: 3 Major Chapters vs Year-by-Year Timeline */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#180E2B]/80 border border-white/10 backdrop-blur-md shadow-glass mb-10">
            <button
              onClick={() => setActiveTab('chapters')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'chapters'
                  ? 'bg-gradient-to-r from-[#F2A7C6] to-[#E8C58A] text-[#10091C] shadow-rose-glow font-bold'
                  : 'text-[#FFF7FC]/70 hover:text-[#FFF7FC]'
              }`}
            >
              <BookOpen size={14} />
              <span>3 Major Chapters</span>
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'timeline'
                  ? 'bg-gradient-to-r from-[#F2A7C6] to-[#E8C58A] text-[#10091C] shadow-rose-glow font-bold'
                  : 'text-[#FFF7FC]/70 hover:text-[#FFF7FC]'
              }`}
            >
              <Layers size={14} />
              <span>Year-by-Year Timeline</span>
            </button>
          </div>
        </div>

        {/* TAB 1: 3 MAJOR CHAPTERS */}
        {activeTab === 'chapters' && (
          <div className="w-full">
            {/* Chapter Stepper Buttons */}
            <div className="flex items-center justify-center gap-3 mb-10 overflow-x-auto pb-2 no-scrollbar">
              {threeMajorChapters.map((chap, idx) => {
                const isSelected = selectedChapterIndex === idx;
                return (
                  <button
                    key={chap.id}
                    onClick={() => setSelectedChapterIndex(idx)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#F2A7C6]/90 to-[#E8C58A]/90 text-[#10091C] shadow-rose-glow scale-105 font-bold'
                        : 'bg-[#241331]/60 text-[#FFF7FC]/70 hover:text-[#FFF7FC] hover:bg-[#321A44]/80 border border-white/10'
                    }`}
                  >
                    <span>{idx === 0 ? <BookOpen size={14} /> : idx === 1 ? <Compass size={14} /> : <Bus size={14} />}</span>
                    <span>Chapter 0{chap.chapterNumber}</span>
                    <span className="hidden sm:inline font-serif font-normal italic">— {chap.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Chapter Visual Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                {selectedChapterIndex === 2 ? (
                  /* CHAPTER 3 WITH 3D MINIATURE COLLEGE VAN */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 flex flex-col">
                      <CollegeVanScene
                        onWindowClick={() => setIsVanModalOpen(true)}
                        isOpen={isVanModalOpen}
                      />
                      <p className="text-center text-xs text-[#E8C58A] mt-3 tracking-widest uppercase flex items-center justify-center gap-1.5">
                        <Sparkles size={12} className="animate-spin" style={{ animationDuration: '4s' }} />
                        Interactive: Click the van window to relive our favourite journey
                      </p>
                    </div>

                    <div className="lg:col-span-5">
                      <GlassCard glow="gold" className="relative overflow-hidden">
                        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#E8C58A]/20 text-[#E8C58A] border border-[#E8C58A]/30 mb-3">
                          {activeChapter.badge} • {activeChapter.period}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FFF7FC] mb-2 text-glow-gold">
                          {activeChapter.title}
                        </h3>
                        <p className="text-[#F2A7C6] text-sm font-serif italic mb-4">
                          "{activeChapter.tagline}"
                        </p>
                        <div className="space-y-3 mb-6">
                          {activeChapter.narrative.map((p, i) => (
                            <p key={i} className="text-sm text-[#FFF7FC]/80 leading-relaxed font-serif">
                              {p}
                            </p>
                          ))}
                        </div>
                        <Button
                          variant="luxury"
                          size="md"
                          onClick={() => setIsVanModalOpen(true)}
                          icon={<Heart size={14} className="fill-[#F2A7C6] text-[#F2A7C6]" />}
                          className="w-full"
                        >
                          Peek Inside The Van Memory
                        </Button>
                      </GlassCard>
                    </div>
                  </div>
                ) : (
                  /* CHAPTER 1 & 2 NARRATIVE PRESENTATION */
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-8 rounded-3xl bg-[#241331]/40 border border-white/10 backdrop-blur-xl shadow-glass">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#241331] to-[#3a1848] border border-[#E8C58A]/50 shadow-gold-glow mb-4 text-[#E8C58A]">
                        {selectedChapterIndex === 0 ? <BookOpen size={28} /> : <Compass size={28} />}
                      </div>
                      <span className="text-xs uppercase tracking-[0.3em] text-[#E8C58A] font-semibold mb-1">
                        Chapter 0{activeChapter.chapterNumber}
                      </span>
                      <span className="font-serif text-3xl font-bold text-[#FFF7FC] mb-2">
                        {activeChapter.title}
                      </span>
                      <span className="text-xs text-[#C7A5F5] font-medium tracking-wide">
                        {activeChapter.period}
                      </span>
                    </div>

                    <div className="md:col-span-8">
                      <GlassCard glow="rose" className="relative">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F2A7C6]/20 text-[#F2A7C6] border border-[#F2A7C6]/30 mb-3">
                          {activeChapter.badge}
                        </span>
                        <h4 className="font-serif text-2xl text-[#FFF7FC] italic text-glow-rose mb-4">
                          "{activeChapter.tagline}"
                        </h4>
                        <div className="space-y-4 text-base text-[#FFF7FC]/85 leading-relaxed font-serif mb-6">
                          {activeChapter.narrative.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>

                        {/* Chapter Milestones Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                          {activeChapter.milestones.map((m, idx) => (
                            <div key={idx} className="p-4 rounded-xl bg-[#10091C]/60 border border-white/10">
                              <h5 className="font-serif font-semibold text-[#E8C58A] text-sm mb-1">{m.title}</h5>
                              <p className="text-xs text-[#FFF7FC]/70">{m.description}</p>
                            </div>
                          ))}
                        </div>
                      </GlassCard>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Stepper Navigation Actions */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
              <button
                onClick={() => setSelectedChapterIndex((prev) => Math.max(0, prev - 1))}
                disabled={selectedChapterIndex === 0}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  selectedChapterIndex === 0
                    ? 'opacity-30 cursor-not-allowed text-[#FFF7FC]/40'
                    : 'bg-[#241331]/80 hover:bg-[#321A44] text-[#FFF7FC] border border-white/10'
                }`}
              >
                <ChevronLeft size={16} /> Previous Chapter
              </button>
              <span className="font-serif text-sm italic text-[#C7A5F5]/70">
                Chapter {selectedChapterIndex + 1} of {threeMajorChapters.length}
              </span>
              <button
                onClick={() => setSelectedChapterIndex((prev) => Math.min(threeMajorChapters.length - 1, prev + 1))}
                disabled={selectedChapterIndex === threeMajorChapters.length - 1}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  selectedChapterIndex === threeMajorChapters.length - 1
                    ? 'opacity-30 cursor-not-allowed text-[#FFF7FC]/40'
                    : 'bg-gradient-to-r from-[#F2A7C6] to-[#E8C58A] text-[#10091C] font-bold shadow-rose-glow'
                }`}
              >
                Next Chapter <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: YEAR-BY-YEAR INTERACTIVE 3D TIMELINE */}
        {activeTab === 'timeline' && (
          <div className="w-full">
            {/* Interactive 3D Milestone Spline Canvas */}
            <MemoryTimeline3D
              activeYear={selectedYear}
              onSelectYear={(year) => setSelectedYear(selectedYear === year ? null : year)}
            />

            {/* Year Filters */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
              {[
                { label: 'All 3 Years', year: null },
                { label: 'Year 1 • The Spark (2023–2024)', year: 1 },
                { label: 'Year 2 • Deepening Roots (2024–2025)', year: 2 },
                { label: 'Year 3 • Everlasting Bloom (2025–2026)', year: 3 },
              ].map((btn) => {
                const isActive = selectedYear === btn.year;
                return (
                  <button
                    key={btn.label}
                    onClick={() => setSelectedYear(btn.year)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-[#F2A7C6] to-[#E8C58A] text-[#10091C] shadow-rose-glow scale-105 font-bold'
                        : 'bg-[#241331]/70 text-[#FFF7FC]/70 hover:text-[#FFF7FC] hover:bg-[#321A44]/90 border border-white/10'
                    }`}
                  >
                    {btn.label}
                  </button>
                );
              })}
            </div>

            {/* Memory Cards Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatePresence>
                {filteredMemories.map((memory, idx) => (
                  <motion.div
                    key={memory.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    onClick={() => setActiveMemory(memory)}
                    className="cursor-pointer"
                  >
                    <GlassCard
                      glow={memory.yearNumber === 1 ? 'rose' : memory.yearNumber === 2 ? 'lavender' : 'gold'}
                      variant="frosted"
                      className="h-full flex flex-col justify-between group hover:border-[#E8C58A]/60 transition-all duration-300"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#241331] text-[#E8C58A] border border-[#E8C58A]/30">
                            {memory.tag}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-[#C7A5F5]/80 font-medium">
                            <Calendar size={13} />
                            {memory.date}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#FFF7FC] mb-2 group-hover:text-[#E8C58A] transition-colors">
                          {memory.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#F2A7C6] font-serif italic mb-4">
                          "{memory.subtitle}"
                        </p>
                        <p className="text-xs sm:text-sm text-[#FFF7FC]/75 line-clamp-3 leading-relaxed mb-4 font-serif">
                          {memory.description}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#C7A5F5]/70">
                        <span className="flex items-center gap-1.5 truncate max-w-[180px]">
                          <MapPin size={12} className="text-[#F2A7C6]" />
                          {memory.location}
                        </span>
                        <span className="text-[#E8C58A] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
                          Expand <ChevronRight size={14} />
                        </span>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </div>

      {/* EXPANDED BEAUTIFUL VIEW MODAL */}
      <AnimatePresence>
        {activeMemory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#10091C]/85 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-2xl w-full p-8 sm:p-10 rounded-3xl bg-[#1e0e2e] border-2 border-[#E8C58A]/50 shadow-gold-glow text-left overflow-hidden"
            >
              <button
                onClick={() => setActiveMemory(null)}
                aria-label="Close modal"
                className="absolute top-6 right-6 p-2 rounded-full bg-[#241331] text-[#FFF7FC]/70 hover:text-[#FFF7FC] hover:bg-[#321A44] transition-colors cursor-pointer border border-white/10"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F2A7C6]/20 text-[#F2A7C6] border border-[#F2A7C6]/40">
                  Year {activeMemory.yearNumber}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#E8C58A] font-semibold tracking-wider">
                  <Calendar size={14} />
                  {activeMemory.date}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#FFF7FC] mb-2 text-glow-rose">
                {activeMemory.title}
              </h3>
              <p className="font-serif text-base sm:text-lg text-[#E8C58A] italic mb-6">
                "{activeMemory.subtitle}"
              </p>
              <p className="text-[#FFF7FC]/90 text-sm sm:text-base leading-relaxed mb-6 font-serif">
                {activeMemory.description}
              </p>

              {activeMemory.quote && (
                <div className="p-5 rounded-2xl bg-[#10091C]/70 border border-[#E8C58A]/30 mb-8 relative">
                  <Quote size={20} className="text-[#E8C58A]/40 mb-2" />
                  <p className="font-serif text-base sm:text-lg italic text-[#FFE8BD] leading-relaxed">
                    "{activeMemory.quote}"
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <button
                  onClick={handlePrevMemory}
                  className="flex items-center gap-1.5 text-xs text-[#C7A5F5] hover:text-[#FFF7FC] transition-colors cursor-pointer font-medium"
                >
                  <ChevronLeft size={16} /> Previous Memory
                </button>
                <span className="flex items-center gap-1.5 text-xs text-[#FFF7FC]/50">
                  <MapPin size={12} className="text-[#F2A7C6]" />
                  {activeMemory.location}
                </span>
                <button
                  onClick={handleNextMemory}
                  className="flex items-center gap-1.5 text-xs text-[#E8C58A] hover:text-[#FFF7FC] transition-colors cursor-pointer font-medium"
                >
                  Next Memory <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SPECIAL INTERACTIVE POPUP MODAL FOR COLLEGE VAN */}
      <AnimatePresence>
        {isVanModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10091C]/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-xl w-full p-8 rounded-3xl bg-[#1e0e2e] border border-[#E8C58A]/50 shadow-gold-glow text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#241331] border border-[#F2A7C6]/40 text-[#F2A7C6] text-xs font-semibold tracking-widest uppercase mb-4">
                <Heart size={12} className="fill-[#F2A7C6]" />
                <span>Our Absolute Favourite Memory</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF7FC] mb-2 text-glow-rose">
                Holding Hands in the College Van
              </h3>
              <p className="font-serif text-[#E8C58A] italic text-base mb-6">
                On the way to computer class, watching the world blur past outside.
              </p>
              <div className="p-6 rounded-2xl bg-[#10091C]/75 border border-[#C7A5F5]/30 text-left mb-6 space-y-3">
                <p className="text-sm sm:text-base text-[#FFF7FC]/90 leading-relaxed font-serif">
                  "Every morning as that little van navigated the crowded roads toward computer class, nothing else in the world mattered except the seat next to you.
                </p>
                <p className="text-sm sm:text-base text-[#FFF7FC]/90 leading-relaxed font-serif">
                  When our hands quietly found each other and our fingers intertwined, a calm peace settled over everything. Those rides were simple, but they were the moments I realized my soul had chosen yours forever."
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="luxury"
                  size="md"
                  onClick={() => {
                    setIsVanModalOpen(false);
                    setActiveTab('timeline');
                  }}
                  icon={<ChevronRight size={16} />}
                >
                  Explore 3-Year Milestones
                </Button>
                <button
                  onClick={() => setIsVanModalOpen(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-medium text-[#FFF7FC]/60 hover:text-[#FFF7FC] cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
