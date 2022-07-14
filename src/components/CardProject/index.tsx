import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink, FaListUl } from "react-icons/fa";
import { LinkProject } from "../../pages/projects";

interface CardProps {
    image: string;
    title: string;
    description: string;
    techs: string;
    links: LinkProject;
}

const CardProject: React.FC<CardProps> = ({ image, title, description, techs, links }: CardProps) => {
    return (
        <>
            <div className="flex flex-col justify-between rounded bg-light-color dark:bg-secondary overflow-hidden shadow-lg transform hover:scale-105 hover:cursor-pointer transition duration-300">

                <Image className="w-full" layout="responsive" width="100" height="70" src={image} alt="Project photo" />

                <div className="flex flex-col items-center">
                    <div className="font-bold text-2xl p-2">{title}</div>
                    <div className="w-36 border-t border-primary"></div>
                    <p className="max-w-sm text-center text-sm p-4">
                        {description}
                    </p>
                    <div className="w-36 border-t border-primary"></div>
                    <div className="p-2">
                        {techs}
                    </div>
                </div>

                <div className="flex justify-center space-x-4 nowrap text-xs font-semibold bg-light-color dark:bg-main-color p-2 md:text-sm">
                    {links.detail ?
                        <Link href={links.detail}>
                            <a className="flex justify-center items-center space-x-1 hover:text-primary">
                                <FaListUl />
                                <p>View detail</p>
                            </a>
                        </Link> : ''}
                    {links.preview ?
                        <Link href={links.preview}>
                            <a className="flex justify-center items-center space-x-1 hover:text-primary">
                                <FaLink />
                                <p>Link preview</p>
                            </a>
                        </Link> : ''}
                    {links.repository ?
                        <Link href={links.repository}>
                            <a className="flex justify-center items-center space-x-1 hover:text-primary">
                                <FaGithub />
                                <p>Repository</p>
                            </a>
                        </Link> : ''}
                </div>
            </div>
        </>
    );
}

export default CardProject;
