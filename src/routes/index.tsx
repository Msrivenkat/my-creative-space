import { createFileRoute } from '@tanstack/react-router';
import { portfolioHead } from '@/data/portfolio';
import { Hero, AboutSection, ProjectsSection, SkillsSection, ExperienceSection, ServicesSection, ResumeSection, CertificationsSection, AchievementsSection, TestimonialsSection, ContactSection } from '@/components/portfolio/sections';
export const Route = createFileRoute('/')({ head:()=>portfolioHead('Software Engineer & Creative Developer','Explore Alex Morgan’s fictional portfolio of thoughtful web applications, AI experiences, and cloud solutions.'), component:Index });
function Index(){return <><Hero/><AboutSection/><ProjectsSection/><SkillsSection/><ExperienceSection/><ServicesSection/><ResumeSection/><CertificationsSection/><AchievementsSection/><TestimonialsSection/><ContactSection/></>;}
