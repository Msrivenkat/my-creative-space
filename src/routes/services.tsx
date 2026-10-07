import { createFileRoute } from '@tanstack/react-router';
import { portfolioHead, pageDescriptions } from '@/data/portfolio';
import { PageIntro } from '@/components/portfolio/layout';
import { ServicesSection } from '@/components/portfolio/sections';
export const Route = createFileRoute('/services')({head:()=>portfolioHead('Services',pageDescriptions.services),component:Page});
function Page(){return <><PageIntro page="services" title="Services"/><ServicesSection/></>;}
