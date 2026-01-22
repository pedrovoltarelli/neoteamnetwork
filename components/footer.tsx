export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-foreground">Neo Team Network</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Sobre
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contato
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Discord
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 Neo Team Network. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
