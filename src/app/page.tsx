
'use client';

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Check, Crown, Gamepad2, PlayCircle, Star, Tv, Smartphone, Tablet, Laptop, GitCompareArrows, MessageCircle, Box, Sparkles, Film, X, ShieldCheck, Zap, Lock } from "lucide-react";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function Home() {
  const features = [
    'Acesso ilimitado a todos os animes da plataforma',
    'Lançamentos simultâneos com o Japão',
    'Sem anúncios',
    'Qualidade em Full HD e 4K',
    'Assista em até 4 dispositivos ao mesmo tempo',
    'Baixe e assista offline',
    'Catálogo com mais de 1.000 títulos',
  ];

  const devices = [
    { icon: <Tv className="h-6 w-6 text-primary" />, name: 'Smart TVs' },
    { icon: <Smartphone className="h-6 w-6 text-primary" />, name: 'Celular' },
    { icon: <Tablet className="h-6 w-6 text-primary" />, name: 'Tablet' },
    { icon: <Laptop className="h-6 w-6 text-primary" />, name: 'PC' },
    { icon: <Gamepad2 className="h-6 w-6 text-primary" />, name: 'Videogames' },
  ];

  const testimonials = [
    { name: "Cliente 5", quote: "Depoimento de um cliente 5", aiHint: "person portrait" },
    { name: "Cliente 6", quote: "Depoimento de um cliente 6", aiHint: "person smiling" },
    { name: "Cliente 1", quote: "Depoimento de um cliente 1", aiHint: "person glasses" },
    { name: "Cliente 2", quote: "Depoimento de um cliente 2", aiHint: "person happy" },
    { name: "Cliente 3", quote: "Depoimento de um cliente 3", aiHint: "person excited" },
    { name: "Cliente 4", quote: "Depoimento de um cliente 4", aiHint: "person content" },
  ];

  const faqs = [
    {
      question: "O que está incluído no Crunchyroll MEGA FAN?",
      answer: "O plano Crunchyroll MEGA FAN inclui acesso ilimitado a todos os animes, lançamentos simultâneos com o Japão, sem anúncios, qualidade Full HD e 4K, visualização em até 4 dispositivos, downloads para assistir offline e um catálogo com mais de 1.000 títulos."
    },
    {
      question: "Funciona em quais dispositivos?",
      answer: "Funciona na maioria dos dispositivos, incluindo Smart TVs, celulares (iOS e Android), tablets, computadores (PC) e consoles de videogame como PlayStation e Xbox."
    },
    {
      question: "Como faço para instalar?",
      answer: "Após a compra, você receberá um acesso imediato. Basta baixar o aplicativo da Crunchyroll na loja de aplicativos do seu dispositivo e fazer login com suas credenciais."
    },
    {
      question: "Posso atualizar o aplicativo?",
      answer: "Sim, você pode e deve manter o aplicativo sempre atualizado para garantir o acesso a todos os novos recursos e lançamentos."
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer: "Sim, você tem uma garantia de 7 dias para solicitar o reembolso total se não gostar. O cancelamento pode ser feito de acordo com os termos do plano adquirido."
    }
  ];

  const bonus = [
    { icon: <GitCompareArrows className="h-8 w-8 text-primary" />, text: 'Acesso vitalício' },
    { icon: <MessageCircle className="h-8 w-8 text-primary" />, text: 'Suporte VIP 24/7' },
    { icon: <Box className="h-8 w-8 text-primary" />, text: 'Atualizações de lançamentos' },
    { icon: <Sparkles className="h-8 w-8 text-primary" />, text: 'Novas plataformas futuras' },
  ];

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground font-body">
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-bold">
        Desconto apenas HOJE nesta página: 01/08/2025
      </div>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <Crown className="h-7 w-7 text-primary" />
            <span className="font-headline">Rei Dos Apps</span>
          </a>
          <Button>QUERO GARANTIR MEU COMBO</Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <Badge variant="destructive" className="mb-4 text-base font-semibold">
              <span className="mr-2">🔥</span> OFERTA LIMITADA
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
              1 Ano de Crunchyroll Premium MEGA FAN Por Apenas <span className="text-primary">R$10.00</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
              Assista TODOS os seus animes favoritos sem anúncios, em HD, offline e com lançamentos no mesmo dia do Japão
            </p>
            <div className="mt-8 flex flex-col items-center gap-6">
              <p className="font-semibold text-lg">▶️ Assista ao vídeo abaixo para entender:</p>
              <Card className="overflow-hidden shadow-lg w-full">
                <div className="relative aspect-video cursor-pointer group">
                  <Image
                    src="https://placehold.co/1280x720.png"
                    alt="Anime montage video"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="anime montage"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <PlayCircle className="h-20 w-20 text-white/80 transition-all group-hover:text-white group-hover:scale-110" />
                  </div>
                </div>
              </Card>
              <Button size="lg" className="text-lg animate-pulse">
                <span className="mr-2">🚀</span> QUERO MEU ACESSO AGORA!
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted/60 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">🎁 O Que Você Vai Receber</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Acesso completo à melhor plataforma de animes do mundo.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="flex justify-center items-center">
                <Image src="https://placehold.co/600x400.png" alt="Anime characters" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="anime characters collage" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 font-headline">🟧 Com o plano Crunchyroll Premium você terá:</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                   <h3 className="text-xl font-bold mb-4 font-headline">📱 Funciona em:</h3>
                   <div className="flex flex-wrap gap-4">
                        {devices.map(device => (
                            <div key={device.name} className="flex items-center gap-2 p-2 bg-background rounded-md">
                                {device.icon}
                                <span className="font-semibold">{device.name}</span>
                            </div>
                        ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">💬 Depoimentos Reais de Clientes</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Veja o que nossos clientes estão dizendo sobre o Combo Premium.
              </p>
            </div>
            <Carousel opts={{ align: "start", loop: true, }} className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="h-full">
                        <CardContent className="flex flex-col items-center text-center p-6">
                          <Avatar className="w-20 h-20 mb-4">
                            <AvatarImage src={`https://placehold.co/100x100.png`} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex my-2">
                            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-accent fill-accent" />)}
                          </div>
                          <p className="text-muted-foreground flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
                          <p className="mt-4 font-semibold text-foreground">- {testimonial.name}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section id="planos" className="bg-muted/60 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">💸 Escolha o Plano Perfeito Para Você</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Oferta por tempo limitado. Aproveite agora!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                <Card className="flex flex-col">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold font-headline">PLANO BÁSICO</CardTitle>
                        <CardDescription className="text-4xl font-bold text-primary">R$10,00</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-center font-semibold mb-4">1 Ano Sem Preocupações</p>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Crunchyroll MEGA FAN, por 1 ano, sem interrupções</li>
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Android + IOS + desktop</li>
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Garantia de 7 dias</li>
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Acesso imediato</li>
                        </ul>
                    </CardContent>
                    <div className="p-6 pt-0">
                        <Button className="w-full text-lg">👉 QUERO ESSA OPÇÃO</Button>
                    </div>
                </Card>
                <Card className="border-2 border-primary relative flex flex-col">
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Mais Vendido ⭐⭐⭐⭐⭐</Badge>
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold font-headline">PLANO COMPLETO</CardTitle>
                        <CardDescription className="text-4xl font-bold text-primary">R$27,00</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-center font-semibold mb-4">🎁 Bônus Exclusivos:</p>
                        <div className="grid grid-cols-2 gap-4 text-center mb-4">
                            {bonus.map(b => (
                                <div key={b.text} className="flex flex-col items-center gap-1">
                                    {b.icon}
                                    <span className="text-sm text-muted-foreground">{b.text}</span>
                                </div>
                            ))}
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Tudo do plano básico</li>
                            <li className="flex items-center gap-2"><Film className="h-5 w-5 text-green-500" /> Combo Streaming</li>
                        </ul>
                    </CardContent>
                    <div className="p-6 pt-0">
                        <Button className="w-full text-lg animate-pulse">🚀 SIM! QUERO O COMBO COMPLETO</Button>
                    </div>
                </Card>
            </div>
             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-headline">Garantia de 7 dias</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Reembolso total se não gostar.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-headline">Acesso imediato</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Em até 5 minutos após a compra.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-headline">Suporte</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">WhatsApp: (11) 95331-2416</p>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg text-center">
              <h2 className="text-2xl md:text-3xl font-bold font-headline">Ainda tem dúvidas?</h2>
              <p className="mt-2 text-lg text-muted-foreground">Fale conosco diretamente pelo WhatsApp. Estamos aqui para ajudar!</p>
              <Button size="lg" className="text-lg mt-6 bg-green-500 hover:bg-green-600 text-white">
                <WhatsAppIcon className="mr-2 h-6 w-6" />
                Dúvidas e Suporte via WhatsApp
              </Button>
            </div>
          </div>
        </section>
        
        <section className="bg-muted/60 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">❓ Perguntas Frequentes</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Tiramos todas as suas dúvidas para você comprar com tranquilidade.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-16 md:py-24 text-center">
            <div className="container mx-auto max-w-4xl px-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Não Perca Mais Tempo e Dinheiro!</h2>
                <div className="flex justify-center items-center gap-4 mt-4 text-muted-foreground">
                    <span className="flex items-center gap-1"><Lock className="h-5 w-5 text-primary"/> Compra 100% Segura</span>
                    •
                    <span className="flex items-center gap-1"><Zap className="h-5 w-5 text-primary"/> Acesso imediato</span>
                    •
                    <span className="flex items-center gap-1"><ShieldCheck className="h-5 w-5 text-primary"/> Garantia total</span>
                </div>
                <Button size="lg" className="text-xl mt-8 animate-pulse">
                    QUERO GARANTIR MEU COMBO
                </Button>
            </div>
        </section>

      </main>

      <footer className="border-t bg-gray-900 text-gray-400">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 p-4 text-center text-sm">
          <p>Rei Dos Apps - Rodrigo Digital - © 2024. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
