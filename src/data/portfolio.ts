import portrait from '@/assets/alex-portrait.jpg';
import room from '@/assets/room-project.jpg';
import shop from '@/assets/shop-project.jpg';

// All information here is fictional. Replace these values to personalize the portfolio.
export const profile = {
  name: 'Alex Morgan', firstName: 'Alex', role: 'Software Engineer & Creative Developer',
  email: 'hello@alexmorgan.example', location: 'Bengaluru, India', portrait,
  intro: 'I build modern digital experiences by combining software engineering, intelligent technologies, and thoughtful design.',
  about: "I'm Alex, a software engineer who enjoys turning complex problems into simple, thoughtful digital experiences. I work at the intersection of engineering, design, and emerging technology.",
  summary: "From the first sketch to the last line of code, I care about the details. My focus is building accessible, reliable products that feel as good as they work.",
  resume: '/sample-resume.pdf',
};
export const navigation = [
  { label: 'Home', to: '/', id: 'home' }, { label: 'About', to: '/about', id: 'about' },
  { label: 'Skills', to: '/skills', id: 'skills' }, { label: 'Experience', to: '/experience', id: 'experience' },
  { label: 'Projects', to: '/projects', id: 'projects' }, { label: 'Services', to: '/services', id: 'services' },
  { label: 'Resume', to: '/resume', id: 'resume' }, { label: 'Contact', to: '/contact', id: 'contact' },
] as const;
export const stats = [{value:'2', label:'Years of experience'}, {value:'15',label:'Projects delivered'}, {value:'10',label:'Technologies explored'}, {value:'5',label:'Certifications earned'}];
export const skillGroups = [
 {name:'Frontend',icon:'code',skills:['React','TypeScript','JavaScript','HTML & CSS','Tailwind CSS'],usage:'Used in Flowboard, Forma & DevPulse'},
 {name:'Backend',icon:'terminal',skills:['Python','Django','Node.js','REST APIs'],usage:'Used in Forma & AI Content Assistant'},
 {name:'Database',icon:'database',skills:['PostgreSQL','MySQL','SQL','Redis'],usage:'Used in Flowboard & Cloudscape'},
 {name:'Cloud & DevOps',icon:'cloud',skills:['AWS','Oracle Cloud','Docker','CI/CD'],usage:'Used in Cloudscape & deployment pipelines'},
 {name:'AI & Automation',icon:'sparkles',skills:['AI/ML','OpenAI APIs','Python','Automation'],usage:'Used in Roomly & AI Content Assistant'},
 {name:'Tools & Design',icon:'pen',skills:['Git','GitHub','Figma','VS Code'],usage:'Part of my everyday development workflow'},
];
export const experiences = [
 {role:'Software Engineer',company:'TechNova Solutions',location:'Bengaluru · Hybrid',period:'2025 — Present',description:'Building thoughtful web applications and cloud-based solutions with a collaborative product team.',tech:['React','TypeScript','Python','AWS'],achievements:['Built reusable frontend components for three product teams.','Improved application performance through code splitting and caching.','Collaborated with designers to deliver accessible user experiences.']},
 {role:'Frontend Developer',company:'PixelCraft Studio',location:'Remote',period:'2024 — 2025',description:'Translated product ideas into responsive, polished interfaces for early-stage businesses.',tech:['React','JavaScript','Tailwind CSS','Figma'],achievements:['Delivered six responsive client websites from concept to launch.','Introduced a shared design system across client projects.','Worked closely with clients to simplify complex user journeys.']},
 {role:'Software Development Intern',company:'Nexus Digital',location:'Bengaluru · On-site',period:'2023 — 2024',description:'Started my engineering journey developing internal tools and learning from experienced mentors.',tech:['Python','Django','SQL','Git'],achievements:['Built an internal reporting tool for the operations team.','Contributed fixes and tests to an existing Django application.','Presented a capstone project at the engineering showcase.']},
];
export type ProjectCategory = 'Web' | 'AI' | 'Cloud' | 'UI/UX';
export type Project = {slug:string;name:string;category:ProjectCategory;year:string;description:string;tech:string[];image?:string;art?:string;problem:string;solution:string;features:string[];challenge:string;result:string;};
export const projects: Project[] = [
 {slug:'roomly',name:'Roomly — AI Room Visualizer',category:'AI',year:'2026',description:'Reimagine your space with AI-powered interior design, one photo at a time.',tech:['React','Python','AI/ML'],image:room,problem:'Visualizing a new interior before investing in furniture is difficult.',solution:'A photo-first experience that generates room concepts while preserving the original layout.',features:['Room photo upload','Style exploration','Before-and-after comparison','Saved design collections'],challenge:'Keeping room geometry consistent across generated designs.',result:'A polished sample concept with a clear, accessible design exploration flow.'},
 {slug:'flowboard',name:'Flowboard — Task Management',category:'Web',year:'2026',description:'A calmer way for teams to organize projects and move great work forward.',tech:['Next.js','TypeScript','PostgreSQL'],art:'task',problem:'Teams lose focus when task management becomes fragmented.',solution:'A unified workspace with intuitive boards, clear ownership and focused project views.',features:['Kanban boards','Project milestones','Team workspaces','Activity history'],challenge:'Maintaining fast interactions as project boards grow.',result:'A complete prototype demonstrating a streamlined team workflow.'},
 {slug:'cloudscape',name:'Cloudscape — Cloud Dashboard',category:'Cloud',year:'2025',description:'A unified command center to monitor, manage, and understand your cloud.',tech:['React','AWS','Docker'],art:'cloud',problem:'Cloud resources and costs are scattered across multiple consoles.',solution:'A single view of infrastructure health, resource usage and cost trends.',features:['Resource overview','Cost insights','Health monitoring','Deployment history'],challenge:'Presenting complex infrastructure information without overwhelming the user.',result:'A scannable concept dashboard designed around daily engineering tasks.'},
 {slug:'forma',name:'Forma — E-Commerce Platform',category:'Web',year:'2025',description:'A considered shopping experience for beautifully designed everyday essentials.',tech:['React','Node.js','PostgreSQL'],image:shop,problem:'Online stores often prioritize volume over an enjoyable shopping experience.',solution:'An editorial storefront that makes product discovery simple and thoughtful.',features:['Product discovery','Saved favorites','Shopping bag','Accessible product pages'],challenge:'Balancing rich product photography with fast page performance.',result:'A responsive storefront prototype with cohesive product browsing.'},
 {slug:'devpulse',name:'DevPulse — Developer Analytics',category:'UI/UX',year:'2025',description:'Meaningful insights into your code, contributions, and development journey.',tech:['Figma','React','TypeScript'],art:'analytics',problem:'Contribution counts alone do not tell the story of engineering work.',solution:'A clear dashboard emphasizing project activity, collaboration and trends.',features:['Activity overview','Repository insights','Team trends','Accessible charts'],challenge:'Turning dense data into meaningful, actionable signals.',result:'A visual design study exploring thoughtful developer analytics.'},
 {slug:'content-assistant',name:'Muse — AI Content Assistant',category:'AI',year:'2025',description:'Your creative co-pilot for turning a first thought into a well-crafted story.',tech:['Python','OpenAI API','React'],art:'assistant',problem:'Starting from a blank page slows down content creation.',solution:'A collaborative writing workspace for brainstorming, drafting and refining ideas.',features:['Idea generation','Tone controls','Draft revision','Content collections'],challenge:'Keeping suggestions helpful without losing the writer’s individual voice.',result:'An interactive sample exploring human-centered AI-assisted writing.'},
];
export const services = [
 {name:'Web Development',icon:'code',description:'Fast, reliable websites built around your business and your users.',features:['Full-stack applications','Responsive websites','API integrations']},
 {name:'UI/UX Design',icon:'pen',description:'Thoughtful interfaces that make complex ideas feel intuitive.',features:['Interface design','Interactive prototypes','Design systems']},
 {name:'Frontend Development',icon:'layers',description:'Polished, accessible experiences with attention to every detail.',features:['React development','Reusable components','Accessible interactions']},
 {name:'AI Integration',icon:'sparkles',description:'Practical intelligence that adds real value to your product.',features:['AI-powered features','Workflow automation','Conversational interfaces']},
 {name:'Cloud Solutions',icon:'cloud',description:'A dependable foundation for products that are ready to grow.',features:['Cloud deployment','Infrastructure setup','CI/CD pipelines']},
 {name:'Website Optimization',icon:'gauge',description:'Small improvements that make a big difference to your website.',features:['Performance audits','SEO foundations','Accessibility reviews']},
];
export const certifications = [
 {name:'AWS Certified Cloud Practitioner',org:'Amazon Web Services',year:'2025',id:'SAMPLE-AWS-001'},
 {name:'Oracle Cloud Infrastructure Foundations',org:'Oracle University',year:'2025',id:'SAMPLE-OCI-002'},
 {name:'Meta Front-End Developer',org:'Meta · Coursera',year:'2024',id:'SAMPLE-META-003'},
 {name:'Google UX Design',org:'Google · Coursera',year:'2024',id:'SAMPLE-UX-004'},
 {name:'Python for Data Science',org:'IBM · Coursera',year:'2024',id:'SAMPLE-IBM-005'},
];
export const testimonials = [
 {quote:'Alex brings a rare combination of technical depth and genuine care for the user experience. Every detail feels intentional, and the quality of the work speaks for itself.',name:'Jamie Chen',role:'Product Lead',company:'TechNova Solutions',initials:'JC'},
 {quote:'From the first conversation to the final delivery, Alex made the whole process feel effortless. Our new website is fast, thoughtful, and exactly what our brand needed.',name:'Taylor Brooks',role:'Founder',company:'Studio North',initials:'TB'},
 {quote:'A curious engineer and a generous teammate. Alex asks the right questions, embraces feedback, and consistently turns complicated problems into elegant solutions.',name:'Sam Rivera',role:'Engineering Manager',company:'PixelCraft Studio',initials:'SR'},
];
export const pageDescriptions = {
 about:'The person behind the pixels. A little about my approach, curiosity, and journey.',skills:'A thoughtful toolkit for turning ambitious ideas into dependable digital products.',experience:'The teams, challenges, and experiences that have shaped how I build.',projects:'A selection of thoughtful digital experiences, built with curiosity and care.',services:'From your first idea to the final detail, let’s create something that matters.',resume:'A snapshot of my education, experience, and the things I bring to the table.',certifications:'Always learning. Exploring new tools and strengthening the foundations.',achievements:'Milestones along the way, and a few reasons to keep moving forward.',testimonials:'Kind words from the people I’ve had the pleasure of building with.',contact:'Have an idea, opportunity, or project in mind? Let’s talk.',
};
export function portfolioHead(title:string,description:string) { return {meta:[{title:`${title} — Alex Morgan`},{name:'description',content:description},{property:'og:title',content:`${title} — Alex Morgan`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}; }
export function filterProjects(category:string,query:string) { const normalized=query.trim().toLowerCase(); return projects.filter(p=>(category==='All'||p.category===category)&&`${p.name} ${p.description} ${p.tech.join(' ')}`.toLowerCase().includes(normalized)); }
export function validateContact(values:Record<string,string>) { const errors:Record<string,string>={}; for(const key of ['name','email','subject','message']) { if(!values[key]?.trim()) errors[key]=`${key.charAt(0).toUpperCase()+key.slice(1)} is required.`; } if(values['email']?.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values['email'].trim())) errors['email']='Please enter a valid email address.'; return errors; }
