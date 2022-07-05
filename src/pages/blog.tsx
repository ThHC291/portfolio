import { NextPage } from 'next';
import CardBlog, { CardBlogProps } from '../components/CardBlog';

const projects: CardBlogProps[] = [
  {timeRead: '6min read', publisheDate: 'June 01, 2022', title: 'Description card', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', image: '/photo.jfif', },
  {timeRead: '6min read', publisheDate: 'June 01, 2022', title: 'Description card', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', image: '/photo.jfif', },
  {timeRead: '6min read', publisheDate: 'June 01, 2022', title: 'Description card', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', image: '/photo.jfif', },
];

const Blog: NextPage = () => {
  return (
    <div className="container flex flex-col items-center p-4 xl:flex-row gap-x-12 xl:mb-12">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <CardBlog
            key={index}
            title={project.title}
            description={project.description}
            publisheDate={project.publisheDate}
            timeRead={project.timeRead}
            image={project.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Blog;