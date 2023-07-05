import React from 'react';

import { SidebarItem } from './SidebarItem';

interface Props {
  title?: string;
  items: React.ComponentProps<typeof SidebarItem>[];
}

export function SidebarSection({ title, items }: Props) {
  return (
    <div>
      {title && (
        <h3 className="text-xs text-light-primary font-semibold pt-4 pb-2 pl-4">
          {title}
        </h3>
      )}
      {items.map((item) => (
        <SidebarItem key={item.label} {...item} />
      ))}
    </div>
  );
}
