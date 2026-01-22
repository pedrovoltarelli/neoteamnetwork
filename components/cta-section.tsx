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
    <section className="py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/10 border border-foreground/20 mb-8">
          <span className="text-sm text-foreground font-medium">Vagas Limitadas</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Pronto para fazer parte da Neo Team?
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Use esse espaco com respeito, participe das discussoes, absorva o maximo e, principalmente, aplique.
          A Neo Team e para quem busca clareza, consistencia e progresso continuo.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border">
              <CheckCircle2 className="w-4 h-4 text-foreground" />
              <span className="text-sm text-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button size="lg" className="text-lg px-10 py-7 gap-2 group" asChild>
          <a href="https://payfast.greenn.com.br/155182" target="_blank" rel="noopener noreferrer">
            Entrar na Neo Team
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>

        <p className="mt-6 text-sm text-muted-foreground">
          Já somos +100 membros. Faça parte você também.
        </p>
      </div>
    </section>
  )
}
