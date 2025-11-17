import { useEffect } from "react";

export function useWindowPaste(onPasted: (value: string) => void) {
  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      const value = event.clipboardData?.getData("Text");
      if (value) {
        onPasted(value);
      }
    };

    window.addEventListener("paste", handlePaste);

    return () => window.removeEventListener("paste", handlePaste);
  }, [onPasted]);
}
