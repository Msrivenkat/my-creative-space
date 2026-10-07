import { createFileRoute } from '@tanstack/react-router';
import { portfolioHead, pageDescriptions } from '@/data/portfolio';
import { PageIntro } from '@/components/portfolio/layout';
import { SkillsSection } from '@/components/portfolio/sections';
export const Route = createFileRoute('/skills')({head:()=>portfolioHead('Skills & Toolkit',pageDescriptions.skills),component:Page});
function Page(){return <><PageIntro page="skills" title="Skills & Toolkit"/><SkillsSection/></>;}
