export default function AboutPage() {
  return (
    <main className="flex-grow pt-[104px] pb-stack-xl px-gutter max-w-container-max mx-auto w-full">
      {/* Hero Section */}
      <section className="max-w-reading-width mx-auto mb-stack-xl text-center">
        <h1 className="font-display text-display text-primary mb-stack-md hidden md:block">Clarity over decoration.</h1>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-stack-md md:hidden">Clarity over decoration.</h1>
        <p className="font-body-lg text-body-lg text-secondary">
          The Insightful is a dedicated space for deep thinking, rigorous analysis, and quiet contemplation in an increasingly noisy digital world. We believe that ideas require room to breathe.
        </p>
      </section>
      
      {/* Mission & History (Editorial Layout) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-stack-md mb-stack-xl">
        <div className="md:col-span-5 hidden md:block">
          <div className="bg-surface-container-low border border-outline-variant rounded-DEFAULT h-full min-h-[400px] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAw_uv7Gajs440wo105Wtw6tYcL5z_atsl0zAH-LPUNUZutCG8jW1XIjupJyTcpGj2x8DN3ltk5qO67PV_RlUoOVlxhJCtuXBt1jpFVsm9sst_Q1gkubHCUSyVh2AASjLCVIm0_IOozmaH72WhY93c7zxNW_a-G579YUlCc_d0a1vOhxjo2hLVcJcuLpBIKOntSOpIIlA0y3U5LL5ZwPTp0bmYgE5YKEiripbCqUPzs8Q8bHW7nHRfo')" }}></div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-center gap-stack-md">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-xs hidden md:block">Our Mission</h2>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-stack-xs md:hidden">Our Mission</h2>
            <p className="font-body-md text-body-md text-secondary">
              Founded on the principle that the medium shapes the message, our platform is designed to prioritize the reader's experience. We eschew clickbait, pop-ups, and artificial urgency. Instead, we offer a serene reading environment where the author's voice and the reader's attention are paramount.
            </p>
          </div>
          <div className="border-l-3 border-tertiary pl-4 my-stack-md">
            <p className="font-body-lg text-body-lg text-primary italic">
              "In an age of constant interruption, focused attention is the ultimate luxury. We build for the contemplative mind."
            </p>
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-xs hidden md:block">Our History</h2>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-stack-xs md:hidden">Our History</h2>
            <p className="font-body-md text-body-md text-secondary">
              What began in 2020 as a personal repository for essays on modern philosophy and digital culture has evolved into a curated publication. We maintain a small, highly selective roster of contributors who share our commitment to long-form, high-signal writing.
            </p>
          </div>
        </div>
      </section>
      
      {/* Author / Team Section */}
      <section className="max-w-container-max mx-auto">
        <div className="mb-stack-md text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary hidden md:block">The Voices</h2>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary md:hidden">The Voices</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          {/* Profile Card 1 */}
          <div className="bg-surface-container-lowest border border-outline-variant p-stack-md rounded-DEFAULT flex flex-col sm:flex-row gap-stack-md hover:border-outline transition-colors duration-200">
            <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border border-outline-variant mx-auto sm:mx-0">
              <img className="w-full h-full object-cover" alt="Dr. Elias Thorne Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaLcvBa7VvzjZfq68XbIBYiAx-EDQuvylzVMd352LTQDq7olqBNq4NTFco7at4Mdg71YRyH-jssKnkVgUd-R535Vcjy-Zibv3Drej2vGp9-5zxNMcVA160sMBqbORlILlK7JK2rw_kVpLYdaGx-eKZy5YkhZ7WrW2xExVpoOR8-8vDzlZ8GJj2rWCRI8_lmdjHlJLe1UZZzQCg6JeJ8x687e_LlHMsy1iMgd6Ds-2_zzRh8MkSrdep"/>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary">Dr. Elias Thorne</h3>
              <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">Editor-in-Chief</p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A former professor of cognitive science, Elias focuses on the intersection of human psychology and emerging digital paradigms. His essays have been syndicated internationally.
              </p>
            </div>
          </div>
          {/* Profile Card 2 */}
          <div className="bg-surface-container-lowest border border-outline-variant p-stack-md rounded-DEFAULT flex flex-col sm:flex-row gap-stack-md hover:border-outline transition-colors duration-200">
            <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border border-outline-variant mx-auto sm:mx-0">
              <img className="w-full h-full object-cover" alt="Sarah Jenkins Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJnpbVmbQj8IZsBqkeqmtXH7sTT6ijJdd9izzdn9trSB4AzWpV31BJNdWqUZMtn1Z2oqIyOZ3KvDG58eQYqW-90fsR-rfjMqZcQ9xHU3rtDX1dlP7qur2g31QIU0S5dGQgojhLso1V6HuXnjhwnQLHGY52EHB6r_RnHzEz86nzuENz1cpw8J8HLWSxTEH4-qbZFOyziAjXDV8PZI3mwTXuxdAYHN3Ig-KxhcSV3jDjmhNaBbT1SIWA"/>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary">Sarah Jenkins</h3>
              <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">Senior Contributor</p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Sarah explores cultural theory and aesthetic philosophy. With a background in architectural history, she examines how spatial design influences societal behavior.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
