import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

export default Container;

