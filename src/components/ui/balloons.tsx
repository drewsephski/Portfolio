import { balloons, textBalloons } from "balloons-js";
import * as React from "react";

import { cn } from "@/lib/utils";

export interface BalloonsProps {
  type?: "default" | "text"
  text?: string
  fontSize?: number
  color?: string
  className?: string
  onLaunch?: () => void
}

export interface BalloonsHandle {
  launchAnimation: () => void;
}

const Balloons = React.forwardRef<BalloonsHandle, BalloonsProps>(
  ({ type = "default", text, fontSize = 120, color = "#000000", className, onLaunch }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null) // This ref is for the actual div

    const launchAnimation = React.useCallback(() => {
      if (type === "default") {
        balloons()
      } else if (type === "text" && text) {
        textBalloons([
          {
            text,
            fontSize,
            color,
          },
        ])
      }

      if (onLaunch) {
        onLaunch()
      }
    }, [type, text, fontSize, color, onLaunch])

    // Expose only the launchAnimation method via the ref
    React.useImperativeHandle(ref, () => ({
      launchAnimation,
    }), [launchAnimation])

    // The actual div element uses containerRef.
    // The `ref` passed to `Balloons` component will now point to the object returned by useImperativeHandle.
    return <div ref={containerRef} className={cn("balloons-container", className)} />
  }
)
Balloons.displayName = "Balloons"

export { Balloons }