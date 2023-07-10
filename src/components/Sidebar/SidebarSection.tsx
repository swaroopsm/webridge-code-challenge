import React from 'react';
import cx from 'classnames';

import { useSidebar } from 'components/SidebarProvider';

import { SidebarItem } from './SidebarItem';

interface Props {
  title?: string;
  items: React.ComponentProps<typeof SidebarItem>[];
}

export function SidebarSection({ title, items }: Props) {
  const { expanded } = useSidebar();

  return (
    <section>
      {title && (
        <h3
          className={cx(
            'text-xs text-light-primary font-semibold pb-2 pl-4 sm:hidden',
            expanded && 'lg:inline-block'
          )}
        >
          {title}
        </h3>
      )}
      <ul className="flex flex-col gap-0">
        {items.map((item) => (
          <li key={item.label}>
            <SidebarItem {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
