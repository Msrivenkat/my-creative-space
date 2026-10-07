import { createFileRoute } from '@tanstack/react-router';
import { portfolioHead, pageDescriptions } from '@/data/portfolio';
import { PageIntro } from '@/components/portfolio/layout';
import { TestimonialsSection } from '@/components/portfolio/sections';
export const Route = createFileRoute('/testimonials')({head:()=>portfolioHead('Kind Words',pageDescriptions.testimonials),component:Page});
function Page(){return <><PageIntro page="testimonials" title="Kind Words"/><TestimonialsSection/></>;}
