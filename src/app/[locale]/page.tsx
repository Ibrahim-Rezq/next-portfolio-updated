import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { LatestPosts } from "@/components/sections/LatestPosts";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { getAllPosts } from "@/lib/blog";
import type { Locale } from "@/i18n/types";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const latestPosts = (await getAllPosts(locale as Locale)).slice(0, 2);

  return (
    <>
      <Hero />
      <Services />
      <Experience />
      <Projects />
      <LatestPosts posts={latestPosts} />
      <Skills />
      <Contact />
    </>
  );
}
