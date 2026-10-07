import { createFileRoute } from '@tanstack/react-router';
import { portfolioHead, pageDescriptions } from '@/data/portfolio';
import { PageIntro } from '@/components/portfolio/layout';
import { ProjectsSection } from '@/components/portfolio/sections';
export const Route = createFileRoute('/projects/')({head:()=>portfolioHead('Selected Projects',pageDescriptions.projects),component:Page});
function Page(){return <><PageIntro page="projects" title="Selected Projects"/><ProjectsSection standalone/></>;}
