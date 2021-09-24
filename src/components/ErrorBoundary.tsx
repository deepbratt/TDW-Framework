import React, { Component, ErrorInfo, ReactNode } from "react";
import { getWithExpiry, setWithExpiry } from "../Utils/helperFunctions";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const chunkFailedMessage = /Loading chunk [\d]+ failed/;
    if (error?.message && chunkFailedMessage.test(error.message)) {
        if (!getWithExpiry("chunk_failed")) {
            setWithExpiry("chunk_failed", "true", 10000);
            window.location.reload();
          }
      }
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
        <div>
        <p>Something went wrong.</p>
        {/* <pre>{error?.message}</pre> */}
      </div>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;