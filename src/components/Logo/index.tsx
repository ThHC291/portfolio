const Logo: React.FC = () => {
  return (
    <section className="flex text-base lg:text-xl xl:text-xl">
      <img className="w-12 h-12 rounded-full mx-2" src="/photo.jfif" alt="avatar"></img>
      <section className="flex font-semibold items-center">Thiago Chinen</section>
    </section>
  )
}

export default Logo;