import { createFileRoute } from '@tanstack/react-router';
import { portfolioHead, pageDescriptions } from '@/data/portfolio';
import { PageIntro } from '@/components/portfolio/layout';
import { ContactSection } from '@/components/portfolio/sections';
export const Route = createFileRoute('/contact')({head:()=>portfolioHead('Let’s Connect',pageDescriptions.contact),component:Page});
function Page(){return <><PageIntro page="contact" title="Let’s Connect"/><ContactSection/></>;}
