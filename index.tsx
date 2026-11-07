import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "@/components/product-card";
import { productsQuery } from "@/lib/products";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DOXA CITY — Premium Christian Clothing" },
      {
        name: "description",
        content:
          "DOXA CITY is a premium Christian clothing brand. Heavyweight tees designed to reflect Christ in culture. Order on WhatsApp.",
      },
      { property: "og:title", content: "DOXA CITY — Wear the Message. Live the Life." },
      {
        property: "og:description",
        content: "Premium Christian clothing designed to reflect Christ in culture.",
      },
      { property: "og:url", content: "/" },
    ],
  }),
  component: Home,
});

function Home() {
  const { data: products = [] } = useQuery(productsQuery);
  const featured = (products.filter((p) => p.is_featured).length ? products.filter((p) => p.is_featured) : products).slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <video
          src={heroVideo.url}
          poster={hero}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Models wearing DOXA CITY tees"
          className="h-[78vh] min-h-[520px] w-full object-cover md:h-[86vh]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="mx-auto w-full max-w-7xl px-5 pb-14 md:px-8 md:pb-0">
            <div className="max-w-2xl fade-up">
              <p className="eyebrow text-white/70">Premium Christian Clothing</p>
              <h1 className="display-xl mt-5 text-5xl text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Wear the message.
                <br />
                Live the life.
              </h1>
              <p className="mt-6 max-w-md text-base text-white/80 md:text-lg">
                Premium Christian clothing designed to reflect Christ in culture.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="rounded-none px-8 text-xs font-semibold uppercase tracking-[0.2em]">
                  <Link to="/shop">Shop the Collection</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-none border-white/60 bg-transparent px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-primary"
                >
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Featured Collection</p>
            <h2 className="display-xl mt-3 text-3xl md:text-5xl">The essentials</h2>
          </div>
          <Link
            to="/shop"
            className="link-underline hidden text-xs font-semibold uppercase tracking-[0.2em] md:block"
          >
            Shop all
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 md:hidden">
          <Button asChild className="w-full rounded-none text-xs uppercase tracking-[0.2em]">
            <Link to="/shop">Shop all</Link>
          </Button>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
          <p className="eyebrow">The DOXA CITY Philosophy</p>
          <p className="mt-8 font-display text-2xl leading-snug tracking-tight md:text-4xl">
            We believe faith is not something you hide. It is carried in how you live, how you
            create, and how you show up in culture. Every piece is made to be worn with quiet
            confidence — premium, contemporary, and unmistakably Christ-centred.
          </p>
        </div>
      </section>

      {/* WEAR YOUR FAITH */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <img
          src={hero}
          alt="DOXA CITY lifestyle"
          loading="lazy"
          width={1600}
          height={1200}
          className="aspect-4/5 w-full object-cover"
        />
        <div className="md:pl-10">
          <h2 className="display-xl text-4xl md:text-6xl">Wear your faith.</h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Heavyweight cotton, contemporary cuts, and messages that mean something. Designed in
            Ghana for believers who want their wardrobe to say what they believe.
          </p>
          <Button asChild className="mt-9 rounded-none px-10 text-xs uppercase tracking-[0.2em]">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
