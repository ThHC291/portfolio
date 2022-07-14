import Image from "next/image";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { limitSizeOfString } from "../../utils";

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
      <div className="flex rounded bg-light-color dark:bg-secondary border-t-2 border-t-primary overflow-hidden shadow-lg transform hover:cursor-pointer hover:scale-105 transition duration-300">

        <div className="flex flex-col px-6 py-10 lg:w-2/3">

          <div className="flex text-sm space-x-2 font-extralight">
            <div className="flex items-center space-x-1">
              <FaCalendarAlt />
              <p>{publisheDate}</p>
            </div>
            <div className="flex items-center space-x-1">
              <FaClock />
              <p>{timeRead}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold pt-2 md:text-2xl">{title}</p>
          </div>

          <div className="pt-2 text-xs">
            <p>{limitSizeOfString(description, 180)}</p>
          </div>
        </div>

        <div className="hidden lg:flex translate-x-7 -skew-x-6 lg:w-1/3">
          <Image width="500" height="10" src={image} alt="Project photo" />
        </div>

      </div>
    </>
  );
}

export default CardBlog;
