"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-lg border border-border">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background font-bold">N</span>
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:block">Neo Team</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Sobre
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Benefícios
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Comunidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button size="sm" className="gap-2" asChild>
              <a href="https://payfast.greenn.com.br/155182" target="_blank" rel="noopener noreferrer">
                Entrar agora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 px-6 py-6 rounded-2xl bg-card/95 backdrop-blur-lg border border-border">
            <nav className="flex flex-col gap-4">
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">
                Sobre
              </a>
              <a href="#beneficios" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">
                Beneficios
              </a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">
                Comunidade
              </a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">
                Contato
              </a>
              <Button className="mt-2 w-full" asChild>
                <a href="https://payfast.greenn.com.br/155182" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  Entrar agora
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
