import { createFileRoute } from '@tanstack/react-router';
import { portfolioHead, pageDescriptions } from '@/data/portfolio';
import { PageIntro } from '@/components/portfolio/layout';
import { CertificationsSection } from '@/components/portfolio/sections';
export const Route = createFileRoute('/certifications')({head:()=>portfolioHead('Certifications',pageDescriptions.certifications),component:Page});
function Page(){return <><PageIntro page="certifications" title="Certifications"/><CertificationsSection/></>;}
