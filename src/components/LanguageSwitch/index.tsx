import { useRouter } from "next/router";
import { MdLanguage } from "react-icons/md";

const LanguageSwitch = () => {
  const router = useRouter();
  const { locales, pathname, query, asPath } = router;
  const otherLocales = locales || [];

  return (
    <>
      <section className="flex items-center">
        <MdLanguage size={40} />
        <select className="text-semibold text-xl p-1 rounded bg-transparent	transition focus:outline-none"
          onChange={(event) => router.push({ pathname, query }, asPath, { locale: event.target.value })}
        >
          {otherLocales.map((localeOption, key) => {
            return (
              <option key={key} className="dark:bg-bg-color" value={localeOption}>{localeOption.toUpperCase()}</option>
            );
          })}
        </select>
      </section>
    </>
  );
}

export default LanguageSwitch;
