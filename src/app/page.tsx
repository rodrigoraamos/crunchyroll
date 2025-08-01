
'use client';

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Star, HandCoins, Clock, CircleHelp, Shield, Tv, Zap } from "lucide-react";


const IconCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex flex-col items-center text-center gap-2">
        <div className="p-3 bg-primary/10 rounded-full">
            {icon}
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
    </div>
);


const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.671 2.12a5.038 5.038 0 00-2.235.516c-1.396.726-2.422 2.21-2.586 3.993-.146 1.62.7 3.244 1.814 4.29a4.426 4.426 0 00-1.42 3.442c.012 2.404 1.942 4.493 4.34 4.622a5.39 5.39 0 00.83.023c.82 0 1.62-.243 2.28-.686a5.617 5.617 0 001.95-1.577c.43-.58.74-1.256.932-1.986a10.02 10.02 0 01-.31-2.148c.112-2.413-1.48-4.48-3.6-5.266a4.89 4.89 0 00-2.005-.31z" /><path d="M14.65 2.25c-.75.01-1.49.2-2.17.54a4.42 4.42 0 00-1.9 1.59C9.4 6.01 9.88 7.93 11.23 8.9c.7.5 1.55.77 2.43.72a3.8 3.8 0 002.8-1.53c1.1-1.46.99-3.48-.25-4.82a3.47 3.47 0 00-1.56-.8z" />
    </svg>
)

const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.62 12.38a1.55 1.55 0 010-1.12l-7-3.95-3.8 3.8 10.8 5.27z" /><path d="M3.38 3.73L9.82 12l-6.44 8.27a1.47 1.47 0 01-.1-2.07L3.38 3.73z" /><path d="M20.62 12.38L9.82 12l-3.8-3.8L13.62 3l7 5.43a1.55 1.55 0 010 3.95z" /><path d="M9.82 12l-3.8 3.8 7.6 4.25 7-3.95a1.55 1.55 0 010-1.12L9.82 12z" />
    </svg>
)
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M16.6 14.2c-.2-.1-1.5-0.7-1.7-0.8-.2-.1-.4-.1-.6.1-.2.2-.6.7-.8.9-.1.1-.3.2-.5.1-.2-.1-.9-.3-1.8-1.1-.7-.6-1.1-1.4-1.3-1.6s0-.3.1-.4c.1-.1.2-.2.4-.4.1-.1.2-.2.2-.4.1-.1 0-.3-.1-.4-.1-.1-.6-1.3-.8-1.8-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.1 1.5 2.3 3.7 3.2.5.2.9.4 1.2.5.5.2.9.1 1.2-.1.4-.2 1.2-.5 1.3-1 .1-.5.1-1 0-1.1-.1-.1-.2-.2-.4-.3zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
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
    'Funciona em Smart TVs, celular, tablet, PC e videogames'
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

  const planBasicFeatures = [
      'Crunchyroll MEGA FAN, por 1 ano, sem interrupções',
      'Android + IOS + desktop',
      'Garantia de 7 dias',
      'Acesso imediato'
  ];

  const planCompleteFeatures = [
      { icon: '🔁', text: 'Acesso vitalício' },
      { icon: '💬', text: 'Suporte VIP 24/7' },
      { icon: '📦', text: 'Atualizações de lançamentos' },
      { icon: '✨', text: 'Novas plataformas futuras' },
      { icon: '✅', text: 'Tudo do plano básico' },
      { icon: '🎬', text: 'Combo Streaming:' },
  ];

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-black">
        Desconto apenas HOJE nesta página: 01/08/2025
      </div>
      
      <main className="flex-1">
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="text-2xl mr-2">🔥</span>
              <span className="text-2xl font-black text-primary">OFERTA LIMITADA</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl text-gray-800">
              1 Ano de Crunchyroll Premium MEGA FAN Por Apenas <span className="text-primary">R$10.00</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
              Assista TODOS os seus animes favoritos sem anúncios, em HD, offline e com lançamentos no mesmo dia do Japão
            </p>
            <div className="mt-8 flex flex-col items-center gap-6">
              <Button size="lg" className="text-lg font-black rounded-xl px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                 🚀 QUERO MEU ACESSO AGORA! <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-12">
               <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-1 text-sm font-semibold text-primary mb-4">
                 🎁 O Que Você Vai Receber
              </div>
              <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground font-bold">
                Acesso completo à melhor plataforma de animes do mundo.
              </p>
            </div>
            <Card className="p-8 rounded-2xl shadow-lg">
                <div className="grid gap-6 md:grid-cols-2 items-center">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-black">🟧 Com o plano Crunchyroll Premium você terá:</h3>
                         <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <span className="text-base text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div className="flex justify-center items-center">
                        <Image src="https://i.imgur.com/eSeozeF.png" alt="Anime characters collage" width={500} height={350} className="rounded-lg shadow-md" data-ai-hint="video player" />
                    </div>
                </div>
            </Card>
          </div>
        </section>

        <section id="planos" className="bg-muted py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-12">
               <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-1 text-sm font-semibold text-primary mb-4">
                <HandCoins className="h-4 w-4 mr-2" />
                 Escolha o Plano Perfeito Para Você
              </div>
              <p className="mx-auto mt-2 text-lg text-muted-foreground">
                Oferta por tempo limitado. Aproveite agora!
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                <Card className="flex flex-col p-6 rounded-2xl border-2">
                    <CardHeader className="text-center p-2">
                        <CardTitle className="text-2xl font-black text-gray-700">PLANO BÁSICO</CardTitle>
                        <CardDescription className="text-4xl font-black text-primary pt-2">R$10,00</CardDescription>
                         <p className="text-base text-muted-foreground">1 Ano Sem Preocupações</p>
                    </CardHeader>
                    <CardContent className="flex-grow pt-6">
                        <ul className="space-y-3">
                           {planBasicFeatures.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                                </li>
                           ))}
                        </ul>
                    </CardContent>
                    <div className="p-6 pt-0">
                        <Button className="w-full text-lg font-black rounded-xl py-6 text-primary-foreground" style={{ backgroundColor: '#FF6A00' }}>
                            👉 QUERO ESSA OPÇÃO
                        </Button>
                    </div>
                </Card>
                <div className="dark">
                    <Card className="flex flex-col p-6 rounded-2xl border-2 border-primary relative overflow-visible bg-[#111827]">
                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-xl text-sm font-black text-primary-foreground flex items-center gap-2">
                             <Star className="w-4 h-4" /> RECOMENDADO
                        </div>
                        <CardHeader className="text-center p-2">
                            <div className="flex justify-center my-2">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                            </div>
                            <CardTitle className="text-2xl font-black">PLANO COMPLETO</CardTitle>
                            <CardDescription className="text-4xl font-black pt-2" style={{ color: '#facc15' }}>R$27,00</CardDescription>
                            <p className="text-base font-black text-muted-foreground">🎁 BÔNUS EXCLUSIVOS</p>
                        </CardHeader>
                        <CardContent className="flex-grow pt-6">
                             <ul className="space-y-3 mb-4">
                               {planCompleteFeatures.map((feat, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                    <span className="text-xl">{feat.icon}</span>
                                    <span className="text-sm font-bold">{feat.text}</span>
                                    </li>
                               ))}
                            </ul>
                            <div className="flex justify-center mt-4">
                                <Image src="https://i.imgur.com/W82YUws.png" alt="Plataformas de streaming" width={350} height={58} />
                            </div>
                        </CardContent>
                        <div className="p-6 pt-0">
                             <Button className="w-full text-lg font-black rounded-xl py-6 bg-green-500 hover:bg-green-600 text-white">
                                🚀 SIM, QUERO O COMBO COMPLETO
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
             <div className="container mx-auto max-w-5xl px-4 grid md:grid-cols-3 gap-8">
                <IconCard
                    icon={<Shield className="h-8 w-8 text-primary"/>}
                    title="Garantia de 7 dias"
                    description="Reembolso total se não gostar."
                />
                 <IconCard
                    icon={<Clock className="h-8 w-8 text-primary"/>}
                    title="Acesso imediato"
                    description="Em até 5 minutos após a compra."
                />
                 <IconCard
                    icon={<Tv className="h-8 w-8 text-primary"/>}
                    title="Suporte"
                    description="WhatsApp: (11) 95331-2416"
                />
            </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto max-w-2xl px-4 text-center">
             <div className="inline-flex items-center bg-primary/10 rounded-full p-3 text-primary mb-4">
                <WhatsAppIcon className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-black">Ainda tem dúvidas?</h2>
              <p className="mt-2 text-lg text-muted-foreground">Fale conosco diretamente pelo WhatsApp. Estamos aqui para ajudar!</p>
              <Button size="lg" className="text-lg mt-6 bg-green-500 hover:bg-green-600 text-white rounded-xl font-black px-8 py-6">
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                Dúvidas e Suporte via WhatsApp
              </Button>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="text-center mb-12">
               <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-1 text-sm font-semibold text-primary mb-4">
                <CircleHelp className="h-4 w-4 mr-2" />
                 Perguntas Frequentes
              </div>
              <p className="mx-auto mt-2 text-lg text-muted-foreground">
                Tiramos todas as suas dúvidas para você comprar com tranquilidade.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white border-b-0 rounded-xl shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-left px-6 hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground px-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-gray-800 text-white py-16">
            <div className="container mx-auto max-w-4xl px-4 text-center">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-primary">Não Perca Mais Tempo e Dinheiro!</h2>
                <div className="flex justify-center items-center gap-4 mt-4 text-gray-300 flex-wrap text-base">
                    <span className="flex items-center gap-2"><Shield className="h-5 w-5 text-primary"/> Compra 100% Segura</span>
                    <span className="hidden md:inline">•</span>
                    <span className="flex items-center gap-2"><Zap className="h-5 w-5 text-primary"/> Acesso imediato</span>
                    <span className="hidden md:inline">•</span>
                    <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary"/> Garantia total</span>
                </div>
                <Button size="lg" className="text-xl mt-8 font-black rounded-xl py-6 px-10 bg-primary hover:bg-primary/90 text-primary-foreground">
                   QUERO GARANTIR MEU COMBO
                </Button>
            </div>
        </section>

      </main>

      <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 p-4 text-center text-sm sm:flex-row">
            <p>Rodrigo Digital - © 2024. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
                <AppleIcon className="h-6 w-6" />
                <GooglePlayIcon className="h-5 w-5" />
            </div>
        </div>
      </footer>
    </div>
  );
}

    