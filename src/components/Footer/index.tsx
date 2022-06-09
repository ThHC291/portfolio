import Links from "../Links"

const Footer: React.FC = () => {
  return (
      <footer className="flex flex-col items-center rounded-t-full py-4 bg-main-color">
          <section className="text-primary font-normal">thiagochinen2015@gmail.com</section>
          <br />
          <Links />
          <br />
          <section className="text-black font-light text-xs">@ 2022 Copyright: Thiago Chinen</section>
      </footer>
  )
}

export default Footer