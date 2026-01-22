import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const benefits = [
  "Acesso a conteúdos exclusivos",
  "Networking com profissionais do digital",
  "Suporte 24/7 da comunidade",
  "Mentorias e lives semanais"
]

export function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-foreground/10 border border-foreground/20 mb-6 md:mb-8">
          <span className="text-xs md:text-sm text-foreground font-medium">Vagas Limitadas</span>
        </div>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance px-2">
          Pronto para fazer parte da Neo Team?
        </h2>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 px-2">
          Use esse espaco com respeito, participe das discussoes, absorva o maximo e, principalmente, aplique.
          A Neo Team e para quem busca clareza, consistencia e progresso continuo.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-10 px-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-background border border-border">
              <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-foreground shrink-0" />
              <span className="text-xs md:text-sm text-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button size="lg" className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 gap-2 group w-full sm:w-auto" asChild>
          <a href="https://payfast.greenn.com.br/155182" target="_blank" rel="noopener noreferrer">
            Entrar na Neo Team
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>

        <p className="mt-4 md:mt-6 text-xs md:text-sm text-muted-foreground">
          Ja somos +100 membros. Faca parte voce tambem.
        </p>
      </div>
    </section>
  )
}
