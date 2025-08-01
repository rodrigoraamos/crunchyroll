import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Crown, Gamepad2, PlayCircle, Star, Tv, X } from "lucide-react";

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
  const plans = [
    { name: 'Feature', free: 'Free', fan: 'Fan', megaFan: 'Mega Fan' },
    { name: 'Ad-free viewing', free: false, fan: true, megaFan: true },
    { name: 'Access entire Crunchyroll library', free: false, fan: true, megaFan: true },
    { name: 'New episodes 1 hour after Japan', free: false, fan: true, megaFan: true },
    { name: 'Access to digital manga', free: false, fan: true, megaFan: true },
    { name: 'Stream on 1 device at a time', free: true, fan: true, megaFan: false },
    { name: 'Stream on 4 devices at a time', free: false, fan: false, megaFan: true },
    { name: 'Offline viewing', free: false, fan: false, megaFan: true },
    { name: 'Discounts on Crunchyroll Store', free: false, fan: false, megaFan: true },
  ];

  const testimonials = [
    {
      name: "Alex K.",
      avatar: "https://placehold.co/100x100.png",
      aiHint: "person portrait",
      title: "Worth every penny!",
      quote: "As a long-time anime fan, Crunchyroll is my go-to. The Mega Fan plan is worth every penny for the offline viewing and multi-device streaming!"
    },
    {
      name: "Maria P.",
      avatar: "https://placehold.co/100x100.png",
      aiHint: "person smiling",
      title: "Up to date!",
      quote: "I love that I can watch new episodes right after they air in Japan. It keeps me in the loop with all my friends! No more spoilers for me."
    },
    {
      name: "David L.",
      avatar: "https://placehold.co/100x100.png",
      aiHint: "person glasses",
      title: "Content is King",
      quote: "The amount of content is insane! I've discovered so many hidden gems, from classic series to new originals. The app is super smooth too."
    }
  ];

  const faqs = [
    {
      question: "What is the difference between Fan and Mega Fan?",
      answer: "The Mega Fan plan enhances your experience by allowing streaming on up to 4 devices simultaneously and includes offline viewing, which is not available on the Fan plan. It also offers discounts in the Crunchyroll store."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, so you can keep watching until then."
    },
    {
      question: "What devices can I use to watch Crunchyroll?",
      answer: "Crunchyroll is available on a wide range of devices, including iOS, Android, Roku, Apple TV, Android TV, Amazon Fire TV, Chromecast, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, and Nintendo Switch."
    },
    {
      question: "Are there ads on the premium plans?",
      answer: "No, both the Fan and Mega Fan plans are completely ad-free, ensuring an uninterrupted viewing experience. Dive into your favorite anime without any breaks."
    }
  ];

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground font-body">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <Crown className="h-7 w-7 text-primary" />
            <span className="font-headline">Crunchyroll</span>
          </a>
          <Button>Get Mega Fan Annual</Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <Badge variant="outline" className="mb-4 border-accent text-accent-foreground font-semibold">SAVE 16% WITH ANNUAL PLAN</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Go Mega Fan. Go Annual.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
              Unlock the ultimate anime experience. Enjoy ad-free viewing, access the entire library, watch new episodes one hour after Japan, and so much more.
            </p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" className="text-lg">Start Your 14-Day Free Trial</Button>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24 lg:pb-32">
          <div className="container mx-auto max-w-5xl px-4">
            <Card className="overflow-hidden shadow-lg">
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
          </div>
        </section>

        <section className="bg-muted/60 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Why Go Mega Fan?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Explore the exclusive benefits that make the Mega Fan Annual plan the best choice for every anime lover.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Tv className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline">Ad-Free Viewing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Watch your favorite anime without a single interruption. Ever.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Crown className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline">Full Library Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Get unlimited access to our entire library of anime, manga, and more.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Gamepad2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline">Offline Viewing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Download your favorite episodes and watch them on the go, anytime.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline">Exclusive Discounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Enjoy special member discounts on merchandise at the Crunchyroll Store.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Choose Your Plan</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                We have a plan for every fan. Compare our options and find the perfect fit for you.
              </p>
            </div>
            <Card className="overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%] text-lg font-medium">Features</TableHead>
                    <TableHead className="text-center text-lg font-medium">Free</TableHead>
                    <TableHead className="text-center text-lg font-medium">Fan</TableHead>
                    <TableHead className="text-center text-lg font-medium border-2 border-primary rounded-t-lg bg-primary/5">
                      <div className="flex items-center justify-center gap-2">
                        <Crown className="h-5 w-5 text-primary"/>
                        Mega Fan
                      </div>
                      <Badge className="mt-1 bg-primary">Most Popular</Badge>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {plans.slice(1).map((feature, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium text-base">{feature.name}</TableCell>
                      <TableCell className="text-center">
                        {feature.free ? <Check className="mx-auto h-6 w-6 text-green-500" /> : <X className="mx-auto h-6 w-6 text-muted-foreground/50" />}
                      </TableCell>
                      <TableCell className="text-center">
                        {feature.fan ? <Check className="mx-auto h-6 w-6 text-green-500" /> : <X className="mx-auto h-6 w-6 text-muted-foreground/50" />}
                      </TableCell>
                      <TableCell className="text-center border-x-2 border-primary bg-primary/5">
                        {feature.megaFan ? <Check className="mx-auto h-6 w-6 text-primary" /> : <X className="mx-auto h-6 w-6 text-muted-foreground/50" />}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell className="text-center"><Button variant="outline">Sign Up Free</Button></TableCell>
                    <TableCell className="text-center"><Button variant="outline">Choose Fan</Button></TableCell>
                    <TableCell className="text-center border-x-2 border-b-2 border-primary rounded-b-lg bg-primary/5 p-4">
                      <Button className="w-full">Choose Mega Fan</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
        </section>

        <section className="bg-muted/60 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">What Our Fans Say</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Millions of fans trust Crunchyroll for their daily dose of anime.
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="h-full">
                        <CardContent className="flex flex-col items-center text-center p-6">
                          <Avatar className="w-20 h-20 mb-4">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <h3 className="font-bold text-lg font-headline">{testimonial.title}</h3>
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
        
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Frequently Asked Questions</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Have questions? We've got answers.
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

        <section className="bg-secondary/40 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-headline">Have more questions?</h2>
                <p className="mt-2 text-lg text-muted-foreground">Our support team is happy to help you. Contact us on WhatsApp.</p>
              </div>
              <Button size="lg" className="text-lg shrink-0">
                <WhatsAppIcon className="mr-2 h-6 w-6" />
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 p-4 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Crunchyroll, LLC. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="hover:text-primary">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
