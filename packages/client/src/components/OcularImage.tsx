import * as React from 'react';
import { cn } from '@/lib/utils';

interface OcularImageProps {
   children: React.ReactNode;
   className?: string;
   title?: string;
}

export function OcularImage({ children, className, title }: OcularImageProps) {
   return (
      <div
         className={cn(
            'border border-border rounded-lg bg-card shadow-lg p-6',
            'border-l-4 border-l-sky-800',
            className
         )}
      >
         {title && (
            <h2 className="text-lg font-mono font-bold mb-4 text-primary uppercase tracking-wider">
               {title}
            </h2>
         )}
         {children}
      </div>
   );
}
