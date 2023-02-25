import { useRouter } from 'next/router';

export const useChangeLanguage = () => {
  const router = useRouter();

  return (locale: string) =>
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale }
    );
};
