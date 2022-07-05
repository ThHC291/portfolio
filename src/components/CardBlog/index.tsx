import Image from "next/image";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

export interface CardBlogProps {
  title: string;
  description: string;
  publisheDate: string;
  timeRead: string;
  image: string;
}
const CardBlog: React.FC<CardBlogProps> = ({ title, description, publisheDate, timeRead, image }: CardBlogProps) => {
  return (
    <>
      <div className="flex rounded bg-secondary border-t-2 border-t-primary overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
        <div className="flex flex-col px-6 py-12">
          <div className="flex text-sm space-x-2">
            <div className="flex items-center space-x-1 text-sm font-extralight">
              <FaCalendarAlt />
              <p>{publisheDate}</p>
            </div>
            <div className="flex items-center space-x-1 text-sm font-extralight">
              <FaClock />
              <p>{timeRead}</p>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold pt-2 md:text-5xl">{title}</p>
          </div>

          <div className="pt-5 text-sm">
            <p>{description}</p>
          </div>

        </div>
        <div className="hidden md:flex translate-x-7 -skew-x-12">
          <Image width="600" height="50" src={image} alt="Project photo" />
        </div>
      </div>
    </>
  );
}

export default CardBlog;
