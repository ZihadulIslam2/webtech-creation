'use client';

import { useState } from 'react';
import Image from 'next/image';
import projectsData from '@/data/projects.json';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  isStylized: boolean;
  projectUrl: string;
  themeColor: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 2);

  return (
    <section
      id="portfolios"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_center,rgba(12,40,28,0.7)_0%,rgba(4,14,10,1)_90%)] bg-[#040e0a] py-20 md:py-28"
    >
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 h-96 w-96 rounded-full bg-emerald-950/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 h-96 w-96 rounded-full bg-teal-950/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Title and subtitle */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Featured Work
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our{' '}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Explore a selection of our digital creations, crafted with a perfect balance of cutting-edge technology, premium aesthetic appeal, and optimized usability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedProject(project as Project)}
            >
              {/* Image Card Container */}
              <div
                className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#071711] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
                style={{
                  boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 0px transparent`,
                }}
              >
                {/* Glow Overlay on Card Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${project.themeColor}, transparent 70%)`,
                  }}
                />

                {/* Mockup image container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden flex items-center justify-center p-6 bg-[#040e0a]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority={project.isStylized}
                  />
                </div>

                {/* Plus Icon lower right corner */}
                <button
                  type="button"
                  className="absolute bottom-6 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group-hover:bg-[#00df89] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,223,137,0.4)]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project as Project);
                  }}
                  aria-label={`View ${project.title} details`}
                >
                  <svg
                    className="h-6 w-6 transform transition-transform duration-500 group-hover:rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>

              {/* Title and details below mockup */}
              <div className="mt-6 pl-2">
                <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-base font-medium text-slate-400">
                  {project.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-20 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
          >
            <span>{showAll ? 'Show Featured' : 'Explore All Projects'}</span>
            <svg
              className={`h-5 w-5 transition-transform duration-300 ${
                showAll ? 'rotate-180' : 'group-hover:translate-y-0.5'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Project details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6"
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop overlay */}
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300" />

          {/* Modal content box */}
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#061911] p-6 sm:p-8 md:p-10 text-left shadow-2xl transition-all duration-300 scale-100 opacity-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-6">
              {/* Left Column: Image mockup */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-[#030c08] shadow-inner">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Project details */}
              <div className="md:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Project Showcase
                  </span>
                  
                  <h3 className="mt-4 text-3xl font-black tracking-tight text-white">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="mt-2 text-sm font-semibold text-slate-400">
                    {selectedProject.subtitle}
                  </p>

                  <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-300">
                    This project was tailored to highlight our clients distinct capabilities and elevate their brand. With focus on fast response speeds, accessibility, and high visual standards, it stands as a prime example of our premium execution.
                  </p>

                  {/* Tags list */}
                  <div className="mt-8">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Deliverables
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-white/5 border border-white/5 px-2.5 py-1.5 text-xs font-semibold text-white/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 md:mt-14">
                  <a
                    href={selectedProject.projectUrl}
                    className="group relative flex w-full justify-center items-center gap-2 overflow-hidden rounded-2xl bg-[#00df89] hover:bg-[#00c578] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_25px_rgba(0,223,137,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,223,137,0.45)]"
                  >
                    <span>Launch Live Website</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
