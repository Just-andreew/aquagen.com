'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

export default function LenisProvider({ children }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.07, 
      duration: 1.5, 
      smoothWheel: true,
      syncTouch: true 
    }}>
      {children}
    </ReactLenis>
  );
}