import Image from "next/image"

export function CommunityPreview() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-foreground font-medium mb-4 uppercase tracking-wider text-sm">Nossa comunidade</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Bem-vindo ao próximo nível
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Se você está aqui, entenda uma coisa: <span className="text-foreground font-medium">ninguém cresce sozinho, mas também ninguém cresce sem atitude.</span>
              </p>
              <p className="leading-relaxed">
                Use esse espaço com respeito, participe das discussões, absorva o máximo e, principalmente, aplique. 
                A Neo Team é para quem busca clareza, consistência e progresso contínuo.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                    <span className="text-foreground font-bold text-xl">N</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Comunidade Exclusiva</p>
                    <p className="text-sm text-muted-foreground">Discord com +100 membros ativos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Discord Preview Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-foreground/5 rounded-3xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="/images/image.png"
                alt="Neo Team Discord Community Preview"
                width={1024}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
