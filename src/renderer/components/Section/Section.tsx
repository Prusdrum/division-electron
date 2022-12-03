import React from 'react';

export interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ children, title }: SectionProps) {
  return (
    <div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
}
