import { Flame, Brain, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Flame,
    title: "Conhecimento Real",
    description: "Troca de conhecimento real, sem achismos. Conteúdo prático que você aplica e vê resultados."
  },
  {
    icon: Brain,
    title: "Marketing & Mentalidade",
    description: "Conteúdos estratégicos sobre marketing, mentalidade e posicionamento para dominar o mercado digital."
  },
  {
    icon: Users,
    title: "Networking Poderoso",
    description: "Networking com pessoas que pensam grande. Conexões que abrem portas e aceleram seu crescimento."
  },
  {
    icon: TrendingUp,
    title: "Evolução Diária",
    description: "Evolução diária — pessoal e profissional. Ambiente que impulsiona você a ser melhor todos os dias."
  }
]

export function Features() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-foreground font-medium mb-4 uppercase tracking-wider text-sm">O que oferecemos</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Este grupo foi criado para
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa para vencer no mercado digital, em um só lugar.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-foreground/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-foreground/10 flex items-center justify-center mb-6 group-hover:bg-foreground/20 transition-colors">
                <feature.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
