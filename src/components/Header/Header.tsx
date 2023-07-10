import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { MobileSidebarToggleControl } from './MobileSidebarToggleControl';

export function Header() {
  const { page } = useParams<{ page: string }>();
  const heading = page || 'Dashboard';

  return (
    <header className="flex gap-[42px]">
      <MobileSidebarToggleControl />

      <h1 className="uppercase text-2xl sm:text-5xl lg:text-7xl">{heading}</h1>
    </header>
  );
}
