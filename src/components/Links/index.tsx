import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Links: React.FC = () => {
  return (
    <>
      <section className="flex items-center">
        <section className="px-1">
          <Link href="https://github.com/ThHC291">
            <a target="_blank"><FaGithub size={25} /></a>
          </Link>
        </section>

        <section className="px-1">
          <Link className="w-full" href="">
            <a target="_blank"><FaLinkedin size={25} /></a>
          </Link>
        </section>

        <section className="px-1">
          <Link href="https://www.instagram.com/thiago_chinen/">
            <a target="_blank"><FaInstagram size={25} /></a>
          </Link>
        </section>
      </section>
    </>
  )
}

export default Links