import Links from "../Links"

const Footer: React.FC = () => {
  return (
      <footer className="flex flex-col items-center py-1 bg-main-color">
          <section className="text-primary font-normal my-3">thiagochinen2015@gmail.com</section>
          <Links />
          <section className="text-black font-light text-xs my-3">@ 2022 Copyright: Thiago Chinen</section>
      </footer>
  )
}

export default Footer;
