import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Zap, Target } from "lucide-react"

export function Hero() {
  return (
    <section id="sobre" className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/50 via-background to-background" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/10 border border-foreground/20 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
          </span>
          <span className="text-sm text-muted-foreground">+100 membros ativos</span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 text-balance">
          <span className="text-foreground">Bem-vindo a</span>
          <br />
          <span className="border-b-2 md:border-b-4 border-foreground">Neo Team</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed text-pretty px-2">
          A Neo Team nao e so uma comunidade — e um ambiente de evolucao constante. 
          Aqui se reunem pessoas que decidiram sair do comum, desenvolver mentalidade forte e construir resultados reais no digital e na vida.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-2">
          <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 gap-2 group w-full sm:w-auto" asChild>
            <a href="https://payfast.greenn.com.br/155182" target="_blank" rel="noopener noreferrer">
              Entrar na comunidade
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-transparent w-full sm:w-auto" asChild>
            <a href="#beneficios">Saber mais</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto px-2">
          <div className="flex flex-col items-center gap-1 md:gap-2 p-3 md:p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
            <Users className="w-5 h-5 md:w-8 md:h-8 text-foreground mb-1 md:mb-2" />
            <span className="text-xl md:text-3xl font-bold text-foreground">100+</span>
            <span className="text-xs md:text-sm text-muted-foreground text-center">Membros</span>
          </div>
          <div className="flex flex-col items-center gap-1 md:gap-2 p-3 md:p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
            <Zap className="w-5 h-5 md:w-8 md:h-8 text-foreground mb-1 md:mb-2" />
            <span className="text-xl md:text-3xl font-bold text-foreground">24/7</span>
            <span className="text-xs md:text-sm text-muted-foreground text-center">Suporte</span>
          </div>
          <div className="flex flex-col items-center gap-1 md:gap-2 p-3 md:p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
            <Target className="w-5 h-5 md:w-8 md:h-8 text-foreground mb-1 md:mb-2" />
            <span className="text-xl md:text-3xl font-bold text-foreground">100%</span>
            <span className="text-xs md:text-sm text-muted-foreground text-center">Resultados</span>
          </div>
        </div>
      </div>
    </section>
  )
}
