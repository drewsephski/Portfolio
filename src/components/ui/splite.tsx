
import React from 'react'
import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <div style={{ background: 'transparent' }} className={className}>
        <Spline
          scene={scene}
          style={{ background: 'transparent' }}
          className={className}
        />
      </div>
    </Suspense>
  )
}