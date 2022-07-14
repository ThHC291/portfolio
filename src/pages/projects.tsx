import { NextPage } from 'next'
import CardProject from '../components/CardProject';

export interface LinkProject {
  detail: string;
  preview?: string;
  repository: string;
}
interface Project {
  image: string;
  title: string;
  description: string;
  techs: string;
  links: LinkProject;
}

const projects: Array<Project> = [
  { image: '/photo.jfif', title: 'Project title', description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`, techs: 'NextJS', links: { detail: '/home', preview: '/home', repository: '/home' } },
  { image: '/photo.jfif', title: 'Project title', description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem standard dummy text ever since the 1500s`, techs: 'NextJS', links: { detail: '/home', repository: '/home' } },
  { image: '/photo.jfif', title: 'Project title', description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum has been the industry's standard dummy text ever since the 1500s`, techs: 'NextJS', links: { detail: '/home', preview: '/home', repository: '/home' } },
  { image: '/photo.jfif', title: 'Project title', description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum has been the industry's standard dummy text ever since the 1500s`, techs: 'NextJS', links: { detail: '/home', preview: '/home', repository: '/home' } },
  { image: '/photo.jfif', title: 'Project title', description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum has been the industry's standard dummy text ever since the 1500s`, techs: 'NextJS', links: { detail: '/home', preview: '/home', repository: '/home' } },
  { image: '/photo.jfif', title: 'Project title', description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem`, techs: 'NextJS', links: { detail: '/home', preview: '/home', repository: '/home' } },
];

const Projects: NextPage = () => {
  return (
    <>
      <div className="container flex flex-col items-center p-4 xl:flex-row gap-x-12 xl:mb-12">
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <CardProject
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              techs={project.techs}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects;