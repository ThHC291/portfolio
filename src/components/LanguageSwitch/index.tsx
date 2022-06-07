import Link from "next/link";
import { useRouter } from "next/router";
import { MdLanguage } from "react-icons/md";

const LanguageSwitch = () => {
 const { locales, locale, pathname, query, asPath } = useRouter();
 const otherLocales = locales && locales.filter((l) => l !== locale) || [];

 return (
   <>
    <MdLanguage />
     {otherLocales.map((locale) => {
       return (
         <Link
           key={locale}
           href={{ pathname, query }}
           as={asPath}
           locale={locale}
         >
           <a>Switch to &quot;{locale}&quot;</a>
         </Link>
       );
     })}
   </>
 );
}

export default LanguageSwitch;
