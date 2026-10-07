import { createFileRoute } from '@tanstack/react-router';
import { portfolioHead, pageDescriptions } from '@/data/portfolio';
import { PageIntro } from '@/components/portfolio/layout';
import { AboutSection, AboutMore } from '@/components/portfolio/sections';
export const Route = createFileRoute('/about')({head:()=>portfolioHead('About Me',pageDescriptions.about),component:Page});
function Page(){return <><PageIntro page="about" title="About Me"/><AboutSection/><AboutMore/></>;}
