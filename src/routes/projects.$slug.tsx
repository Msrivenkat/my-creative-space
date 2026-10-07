import { createFileRoute, notFound, Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { portfolioHead, projects } from '@/data/portfolio';
import { ProjectArt } from '@/components/portfolio/project-art';
import { ProjectDetails } from '@/components/portfolio/sections';
export const Route = createFileRoute('/projects/$slug')({loader:({params})=>{const project=projects.find(p=>p.slug===params.slug);if(!project)throw notFound();return project;},head:({loaderData})=>portfolioHead(loaderData?.name||'Project not found',loaderData?.description||'This sample project is not available.'),component:ProjectPage});
function ProjectPage(){const project=Route.useLoaderData();return <><div className="container page-intro"><Link to="/projects" className="text-link mb-8"><ArrowLeft size={14}/>All projects</Link><div className="eyebrow">{project.category} / {project.year} / SAMPLE CASE STUDY</div><h1>{project.name}</h1><p>{project.description}</p></div><section className="section"><div className="container project-detail-content"><div className="project-detail-image"><ProjectArt project={project}/></div><ProjectDetails project={project}/></div></section></>;}
