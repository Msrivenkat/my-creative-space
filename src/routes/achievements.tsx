import { createFileRoute } from '@tanstack/react-router';
import { portfolioHead, pageDescriptions } from '@/data/portfolio';
import { PageIntro } from '@/components/portfolio/layout';
import { AchievementsSection } from '@/components/portfolio/sections';
export const Route = createFileRoute('/achievements')({head:()=>portfolioHead('Achievements',pageDescriptions.achievements),component:Page});
function Page(){return <><PageIntro page="achievements" title="Achievements"/><AchievementsSection/></>;}
