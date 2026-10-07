import { describe, it, expect } from 'vitest';
import { filterProjects, validateContact, projects } from '../data/portfolio';
describe('portfolio project rules',()=>{
 it('provides at least six fictional projects',()=>expect(projects.length).toBeGreaterThanOrEqual(6));
 it('filters AI projects without showing other categories',()=>expect(filterProjects('AI','').map(p=>p.slug)).toEqual(['roomly','content-assistant']));
 it('combines search with the active category',()=>expect(filterProjects('Web','Flowboard').map(p=>p.slug)).toEqual(['flowboard']));
 it('returns no results for an unmatched project search',()=>expect(filterProjects('All','unmatched-project')).toEqual([]));
});
describe('contact validation',()=>{
 it('requires all four fields',()=>expect(Object.keys(validateContact({name:'',email:'',subject:'',message:''}))).toEqual(['name','email','subject','message']));
 it('rejects invalid email addresses',()=>expect(validateContact({name:'Sample',email:'invalid',subject:'Hello',message:'Test'})["email"]).toBe('Please enter a valid email address.'));
 it('rejects whitespace-only messages',()=>expect(validateContact({name:'Sample',email:'sample@example.com',subject:'Hello',message:'  '})["message"]).toBe('Message is required.'));
 it('accepts a complete sample message',()=>expect(validateContact({name:'Sample',email:'sample@example.com',subject:'Hello',message:'A sample project inquiry'})).toEqual({}));
});
