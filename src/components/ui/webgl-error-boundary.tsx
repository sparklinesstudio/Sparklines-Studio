"use client";

import React, { Component, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface WebGLErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface WebGLErrorBoundaryState {
  hasError: boolean;
}

export class WebGLErrorBoundary extends Component<
  WebGLErrorBoundaryProps,
  WebGLErrorBoundaryState
> {
  constructor(props: WebGLErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("WebGL Error caught by boundary:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}

export function WebGLFallback({
  className,
  message = "This feature requires WebGL, which is unavailable in this browser.",
}: {
  className?: string;
  message?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-zinc-100 text-zinc-500 text-sm p-6 text-center rounded-2xl border border-zinc-200",
        className
      )}
    >
      <p className="font-medium text-zinc-700">{message}</p>
      <p className="text-xs text-zinc-400 mt-1">Please ensure hardware acceleration is enabled.</p>
    </div>
  );
}
