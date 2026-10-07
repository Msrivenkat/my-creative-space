import { createFileRoute } from '@tanstack/react-router';
import { portfolioHead, pageDescriptions } from '@/data/portfolio';
import { PageIntro } from '@/components/portfolio/layout';
import { ExperienceSection } from '@/components/portfolio/sections';
export const Route = createFileRoute('/experience')({head:()=>portfolioHead('My Experience',pageDescriptions.experience),component:Page});
function Page(){return <><PageIntro page="experience" title="My Experience"/><ExperienceSection/></>;}
