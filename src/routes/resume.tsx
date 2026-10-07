import { createFileRoute } from '@tanstack/react-router';
import { portfolioHead, pageDescriptions } from '@/data/portfolio';
import { PageIntro } from '@/components/portfolio/layout';
import { ResumeSection } from '@/components/portfolio/sections';
export const Route = createFileRoute('/resume')({head:()=>portfolioHead('My Resume',pageDescriptions.resume),component:Page});
function Page(){return <><PageIntro page="resume" title="My Resume"/><ResumeSection/></>;}
