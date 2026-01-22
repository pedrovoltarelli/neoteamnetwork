/* eslint-disable @next/next/no-img-element */

export function CommunityPreview() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-foreground font-medium mb-4 uppercase tracking-wider text-sm">Nossa comunidade</p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Bem-vindo ao proximo nivel
            </h2>
            <div className="space-y-4 md:space-y-6 text-muted-foreground">
              <p className="text-base md:text-lg leading-relaxed">
                Se voce esta aqui, entenda uma coisa: <span className="text-foreground font-medium">ninguem cresce sozinho, mas tambem ninguem cresce sem atitude.</span>
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Use esse espaco com respeito, participe das discussoes, absorva o maximo e, principalmente, aplique. 
                A Neo Team e para quem busca clareza, consistencia e progresso continuo.
              </p>
              <div className="pt-2 md:pt-4">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                    <span className="text-foreground font-bold text-lg md:text-xl">N</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm md:text-base">Comunidade Exclusiva</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Discord com +100 membros ativos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Discord Preview Image */}
          <div className="relative order-1 lg:order-2 w-full">
            <div className="absolute -inset-2 md:-inset-4 bg-foreground/5 rounded-2xl md:rounded-3xl blur-xl" />
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CmhJKHrW1I8GZrxy4mUjzmmW4IdAJN.png"
                alt="Neo Team Discord Community Preview"
                className="w-full h-auto block"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
