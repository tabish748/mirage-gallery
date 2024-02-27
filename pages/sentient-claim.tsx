import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { ROUTES } from 'utils/routes';

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    router.push(ROUTES.membership);
  }, [router]);

  return <></>;
}
