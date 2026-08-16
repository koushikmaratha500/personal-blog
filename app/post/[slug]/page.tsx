import { ReadingProgress } from "@/components/blog/reading-progress";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <>
      <ReadingProgress />
      <main className="flex-grow pt-[120px] pb-stack-xl">
        {/* Article Header */}
        <header className="max-w-reading-width mx-auto px-gutter text-center mb-stack-xl">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider">Strategy</span>
            <span className="text-outline-variant">•</span>
            <span className="text-secondary font-label-sm text-label-sm">8 min read</span>
          </div>
          <h1 className="font-display text-display mb-6 md:hidden">The Future of Intellectual Work</h1>
          <h1 className="font-display text-display mb-6 hidden md:block">The Future of Intellectual Work in an Automated Age</h1>
          <p className="font-body-lg text-body-lg text-secondary mb-8 max-w-2xl mx-auto">
            As artificial intelligence continues to reshape the landscape of professional knowledge work, we must adapt our cognitive strategies to remain valuable.
          </p>
          <div className="flex items-center justify-center gap-4">
            <img className="w-12 h-12 rounded-full object-cover border border-outline-variant" alt="Elena Rostova Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1yzbfWFPUV_EkV4t0bKqJyFN1q51e3wMsExc8Qic2sJzyVA_lluQh7jYtlWxWJnAjwtisFeLx-B0Hu_zdH0fzrXePJW6QdsiCRoinjCNhIv2EaZuzdtiamYENHTn6N-knKT11zWKkRoJg0uuAAJuHBgnA6dP9UMv6sW34WoTAg5lBs5z3vz9Y9L_U0Suto9x4DKzE6PFAez8zv5L7-yiHsX8TsUloqawrMIhK7nZDK3SNxi0bIzbI"/>
            <div className="text-left">
              <p className="font-label-sm text-label-sm text-on-surface">By Elena Rostova</p>
              <p className="font-body-md text-body-md text-secondary text-sm">October 24, 2024</p>
            </div>
          </div>
        </header>
        
        {/* Featured Image */}
        <div className="max-w-container-max mx-auto px-gutter mb-stack-xl">
          <figure className="w-full aspect-video md:aspect-[21/9] relative rounded-lg overflow-hidden border border-outline-variant">
            <img className="w-full h-full object-cover" alt="Architecture of modern thought" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA23U2V_JwzCRsBJzAtsN_4V5I5ls0oRWRbtnq-yoe465iduXOiYdKIGOQPbcyg8qsFdN0nhT2iLuo-69FxcorLZsxin6J6hu7OreI34iYz9B3Iqi_N0zVrZPI3Cz0DaaBOHAm5xB0KCkle9-o9osQ1dtDB48xteVpm0Rjf8_UJKOT-xp_opBKTGQEx14GN-AAvG656QatvkXQQEJXs5sP3-dyG_2bt7qXtrhRx5MAR3MtYNeLNuGvS"/>
            <figcaption className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white font-label-sm text-label-sm text-center opacity-0 hover:opacity-100 transition-opacity">
              Architecture of modern thought. Photo by J. Doe.
            </figcaption>
          </figure>
        </div>
        
        {/* Article Body */}
        <article className="max-w-reading-width mx-auto px-gutter font-body-lg text-body-lg text-on-surface-variant space-y-8">
          <p>
            The rapid advancement of generative models has forced a reckoning across disciplines previously thought immune to automation. For decades, the implicit promise of higher education was that cognitive labor—the manipulation of symbols, ideas, and strategies—would remain a uniquely human domain. That promise is now fundamentally broken.
          </p>
          <p>
            However, this disruption is not merely a crisis of employment; it is a profound philosophical shift in what we consider "valuable" thought. When rote synthesis and basic articulation can be summoned instantly, the premium shifts from the generation of content to the discernment of truth and the orchestration of complex, multi-disciplinary strategies.
          </p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-12 mb-6">The Shift from Generation to Curation</h2>
          <p>
            Consider the role of an editor in a traditional publishing house. They do not write the manuscript; they shape it, challenge it, and align it with a broader vision. This editorial mindset is rapidly becoming the baseline requirement for all intellectual workers. We are transitioning from being primary creators of raw informational artifacts to directors of synthetic intelligence.
          </p>
          <blockquote className="my-10 pl-6 border-l-4 border-tertiary-fixed italic font-body-lg text-body-lg text-on-surface bg-surface-container-low py-4 pr-4 rounded-r-lg">
            "The mind of the future professional will not be a repository of facts, but a highly attuned filter for signal amidst overwhelming noise."
          </blockquote>
          <p>
            This requires a different educational pedagogy. Instead of rewarding the mere regurgitation of facts or the standard formulation of arguments, we must train for anomaly detection, ethical reasoning, and the ability to ask questions that models cannot anticipate. The value lies in the prompt, not just the output.
          </p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-12 mb-6">Cultivating the Irreplaceable</h2>
          <p>
            So, what remains distinctly human? Empathy, contextual nuance, and the courage to take intellectual risks that defy algorithmic prediction. The models are trained on consensus; they are inherently conservative, pulling toward the mathematical mean of human knowledge. True innovation occurs at the edges, in the seemingly irrational leaps of logic that characterize paradigm shifts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
            <div className="p-6 bg-surface-container-lowest border border-outline-variant rounded-lg">
              <span className="material-symbols-outlined text-secondary mb-4" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>psychology</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Cognitive Flexibility</h3>
              <p className="font-body-md text-body-md text-secondary">The ability to rapidly switch contexts and integrate disparate fields of study.</p>
            </div>
            <div className="p-6 bg-surface-container-lowest border border-outline-variant rounded-lg">
              <span className="material-symbols-outlined text-secondary mb-4" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>balance</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Ethical Discernment</h3>
              <p className="font-body-md text-body-md text-secondary">Navigating moral gray areas where programmatic logic fails to capture human values.</p>
            </div>
          </div>
          <p>
            To thrive in this new era, professionals must cultivate deep, idiosyncratic expertise while maintaining broad, generalist frameworks for understanding how different systems interact. It is the synthesis of the hyper-specific with the universal that will define the intellectual leaders of the next decade.
          </p>
          
          {/* Tags */}
          <div className="pt-8 mt-12 border-t border-outline-variant flex flex-wrap gap-3">
            <a className="px-4 py-1.5 border border-outline-variant rounded-full font-label-sm text-label-sm text-secondary hover:bg-surface-container-low hover:text-on-surface transition-colors" href="#">#Technology</a>
            <a className="px-4 py-1.5 border border-outline-variant rounded-full font-label-sm text-label-sm text-secondary hover:bg-surface-container-low hover:text-on-surface transition-colors" href="#">#FutureOfWork</a>
            <a className="px-4 py-1.5 border border-outline-variant rounded-full font-label-sm text-label-sm text-secondary hover:bg-surface-container-low hover:text-on-surface transition-colors" href="#">#Philosophy</a>
          </div>
          
          {/* Share / Actions */}
          <div className="flex items-center justify-between mt-8 py-4">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors group">
                <span className="material-symbols-outlined group-hover:text-tertiary-fixed transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>thumb_up</span>
                <span className="font-label-sm text-label-sm">240</span>
              </button>
              <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>chat_bubble_outline</span>
                <span className="font-label-sm text-label-sm">32</span>
              </button>
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-secondary hover:bg-surface-container-low rounded-full transition-colors" title="Bookmark">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>bookmark_border</span>
              </button>
              <button className="p-2 text-secondary hover:bg-surface-container-low rounded-full transition-colors" title="Share">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>share</span>
              </button>
            </div>
          </div>
        </article>
        
        {/* Related Posts (Bento/Card Grid) */}
        <section className="max-w-container-max mx-auto px-gutter mt-stack-xl pt-stack-xl border-t border-outline-variant">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Further Reading</h2>
            <a className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors flex items-center gap-1" href="#">
              View all <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <a className="group block bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden hover:border-outline transition-colors" href="#">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Analog Mind" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbtIul3kT5Fn36pWeab_KtirvIvi1HSv0l2I2IhYiqdDA3ndw0a07zsoEykry069U4iyVS_qV-W0ANz3_RqlnzHQ9maymjLTEJiBXuDUl8Dor0fuDeNV8pAB7J8Zc6umcXop2rmS-c1AmBnwhc0_O8o70BWAhl1YA8xDAzv5YJUJLLaQHHwG1T_5amAQHuAazYuLTs_G-qr5fj9p-A-XeP1NnldNyWFLl3frqIU_d0RNfz-d8sHChg"/>
              </div>
              <div className="p-6">
                <span className="font-label-sm text-label-sm text-secondary mb-3 block uppercase tracking-wider">Productivity</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 line-clamp-2 group-hover:text-tertiary-fixed transition-colors">The Analog Mind in a Digital World</h3>
                <p className="font-body-md text-body-md text-secondary line-clamp-2">Why returning to physical tools might be the key to unlocking deeper cognitive focus.</p>
              </div>
            </a>
            {/* Card 2 */}
            <a className="group block bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden hover:border-outline transition-colors" href="#">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Resilient Information Diets" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCz7KtJq2mKgtnVNOoGNgFJeSQngqoZj1MTa3TlaOzorfgSTCCglZ766nOHXySzBsyywXqBWkAPnM2P6wYoWuoMPIb4OjWgvSTl1U1PfBrucPuDvMJ3bA4g0OO-LwYJp_ktBcJ-Y17Pb5ANh6RmjmsnxzorisQSXP7WU9icEUly6Srpsp3bjBgyVEnKtB5gdVAwA_Aw0IwXXC1H3z4fbJpzMkjqFS5RXZ04n4tboYiccyweYTOdiXH"/>
              </div>
              <div className="p-6">
                <span className="font-label-sm text-label-sm text-secondary mb-3 block uppercase tracking-wider">Systems</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 line-clamp-2 group-hover:text-tertiary-fixed transition-colors">Designing Resilient Information Diets</h3>
                <p className="font-body-md text-body-md text-secondary line-clamp-2">Strategies for filtering signal from noise in an era of infinite content abundance.</p>
              </div>
            </a>
            {/* Card 3 */}
            <a className="group block bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden hover:border-outline transition-colors" href="#">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Aesthetics of Subtraction" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Qq7OJaD-WAQu71T0Ys_rpuuOS4ENAW6RE7d7I63u369wkKNJqtUI6TIUNr5iSCE4sKzaT_PtNlXnS1lXG35PSh_j-13vdWov5I0VsFfl-Wiiv4uyMv88Yj6QIYaWx3Ur_qxr0oFaoOqO0e-wykw1LY2xrft4I4XkwIfMNcolQB8oEKwHe8LuC1MO55oyjUV3JMtvFah9CgcDHH0XLmcmQbWOM97upTxqdSRu5ghz69wyxR42C2x0"/>
              </div>
              <div className="p-6">
                <span className="font-label-sm text-label-sm text-secondary mb-3 block uppercase tracking-wider">Culture</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 line-clamp-2 group-hover:text-tertiary-fixed transition-colors">The Aesthetics of Subtraction</h3>
                <p className="font-body-md text-body-md text-secondary line-clamp-2">How removing elements from our work and lives can paradoxically increase their impact.</p>
              </div>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
