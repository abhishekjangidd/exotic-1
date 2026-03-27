import React from 'react'
import { Link } from 'react-router-dom'
import { Leaf, MapPin, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'
import SiteFooter from '../components/SiteFooter'

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500/90">
          Our story
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Crafted for people who care about every cup
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
          Exotic Coffee began as a small roastery focused on traceable beans and calm cafés. Today we
          pair that same care with a fast, friendly ordering experience — so you get barista-level
          drinks without the wait.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {[
            {
              icon: Leaf,
              title: 'Ethical sourcing',
              body: 'Seasonal lots from partner farms with transparent pricing and long-term relationships.',
            },
            {
              icon: Sparkles,
              title: 'Roasted in small batches',
              body: 'Profiles tuned weekly so espresso stays sweet and cold brew stays crisp.',
            },
            {
              icon: MapPin,
              title: 'Neighborhood cafés',
              body: 'Pickup windows designed for commuters; seating when you want to stay awhile.',
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-900/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-950/80 text-emerald-400">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-950/40 to-black p-8 sm:p-12">
          <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                Numbers we are proud of
              </h2>
              <p className="mt-3 text-sm text-neutral-400">
                Illustrative metrics for this demo storefront.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-6 text-center sm:text-left">
              <div>
                <dt className="text-xs uppercase tracking-wider text-neutral-500">Avg. rating</dt>
                <dd className="mt-1 text-3xl font-semibold tabular-nums text-white">4.9</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-neutral-500">Drinks / day</dt>
                <dd className="mt-1 text-3xl font-semibold tabular-nums text-white">2.4k</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-neutral-500">Locations</dt>
                <dd className="mt-1 text-3xl font-semibold tabular-nums text-white">12</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-neutral-500">Bean origins</dt>
                <dd className="mt-1 text-3xl font-semibold tabular-nums text-white">8</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/menu"
            className="inline-flex rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-950/40 transition hover:bg-emerald-500"
          >
            Explore the menu
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
