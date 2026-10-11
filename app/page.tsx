'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, Filter, Grid2X2, Menu, X } from 'lucide-react'

const projects = [
  { title: 'Clay / Form', category: 'Objects', year: '2024', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=85', size: 'large' },
  { title: 'Solstice House', category: 'Spaces', year: '2024', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85', size: 'tall' },
  { title: 'Between Light', category: 'Editorial', year: '2023', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85', size: 'standard' },
  { title: 'Quiet Geometry', category: 'Objects', year: '2023', image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988b5?auto=format&fit=crop&w=900&q=85', size: 'standard' },
  { title: 'Still / Moving', category: 'Editorial', year: '2022', image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85', size: 'wide' },
  { title: 'Casa Terra', category: 'Spaces', year: '2022', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85', size: 'tall' },
  { title: 'Material Notes', category: 'Objects', year: '2021', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85', size: 'standard' },
  { title: 'After Noon', category: 'Editorial', year: '2021', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85', size: 'wide' },
]

const categories = ['All work', 'Objects', 'Spaces', 'Editorial']

export default function Page() {
  const [activeCategory, setActiveCategory] = useState('All work')
  const [menuOpen, setMenuOpen] = useState(false)
  const visibleProjects = useMemo(() => activeCategory === 'All work' ? projects : projects.filter((project) => project.category === activeCategory), [activeCategory])

  return (
    <main className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <a href="#top" className="font-display text-xl font-medium tracking-[-0.04em]" aria-label="Field Notes home">field<span className="text-primary">/</span>notes</a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="Main navigation">
          <a className="text-foreground" href="#work">Work</a><a href="#about" className="transition-colors hover:text-foreground">About</a><a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full p-2 hover:bg-muted md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>
      </header>
      {menuOpen && <nav className="border-y border-border px-5 py-4 md:hidden" aria-label="Mobile navigation"><div className="flex flex-col gap-4 text-sm"><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div></nav>}

      <section id="top" className="mx-auto max-w-[1440px] px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pt-28">
        <div className="max-w-5xl"><p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-primary">Independent creative studio · 2018—24</p><h1 className="font-display text-[clamp(3.8rem,10vw,9.5rem)] leading-[0.83] tracking-[-0.075em]">A collection<br /><span className="text-muted-foreground">of good work.</span></h1></div>
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-border pt-5 text-sm sm:flex-row sm:items-end"><p className="max-w-sm text-muted-foreground">Field Notes is a small studio for brands, places, and things with a point of view.</p><a href="#work" className="group flex items-center gap-2 font-medium">Explore the archive <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div>
      </section>

      <section id="work" className="mx-auto max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mb-7 flex flex-col justify-between gap-5 border-b border-border pb-4 sm:flex-row sm:items-center"><div className="flex items-center gap-2 text-sm"><Filter className="size-4" /><span className="text-muted-foreground">Filter by</span></div><div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">{categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-full border px-4 py-2 text-xs transition-all ${activeCategory === category ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-foreground'}`}>{category}</button>)}</div></div>
        <div className="grid auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[190px]">{visibleProjects.map((project) => <article key={project.title} className={`group relative overflow-hidden rounded-[2px] bg-muted ${project.size === 'large' ? 'sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2' : project.size === 'wide' ? 'sm:col-span-2 lg:col-span-2' : project.size === 'tall' ? 'sm:row-span-2' : ''}`}><img src={project.image} alt={`${project.title} project`} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/35 via-transparent to-black/60 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><div className="flex items-center justify-between text-xs"><span>{project.category}</span><span>{project.year}</span></div><div className="flex items-end justify-between"><h2 className="font-display text-2xl tracking-[-0.04em]">{project.title}</h2><ArrowUpRight className="size-5" /></div></div></article>)}</div>
        {visibleProjects.length === 0 && <p className="py-20 text-center text-muted-foreground">No work in this collection yet.</p>}
      </section>

      <section id="about" className="border-y border-border bg-secondary"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_2fr] lg:px-12 lg:py-28"><p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">A note from the studio</p><div><p className="font-display text-3xl leading-tight tracking-[-0.05em] sm:text-5xl">We make identities, images, and spaces that feel considered — not overworked.</p><a href="#contact" className="group mt-10 inline-flex items-center gap-2 text-sm font-medium">Start a conversation <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div></div></section>
      <footer id="contact" className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12"><div><p className="font-display text-2xl tracking-[-0.04em]">field<span className="text-primary">/</span>notes</p><p className="mt-2 text-sm text-muted-foreground">New York · London · Everywhere</p></div><div className="flex items-center gap-5 text-sm text-muted-foreground"><a href="mailto:hello@fieldnotes.studio" className="hover:text-foreground">hello@fieldnotes.studio</a><Grid2X2 className="size-4" /></div></footer>
    </main>
  )
}
