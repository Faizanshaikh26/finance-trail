import { useEffect } from "react";

export default function useBlockInspect() {
  useEffect(() => {
    // Block right-click
    const handleContextMenu = (e) => e.preventDefault();

    // Block F12, Ctrl+Shift+I/J/C/K, Ctrl+U (view source)
    const handleKeyDown = (e) => {
      if (e.key === "F12") e.preventDefault();
      if (e.ctrlKey && e.shiftKey && ["I", "J", "C", "K"].includes(e.key.toUpperCase())) e.preventDefault();
      if (e.ctrlKey && ["U", "S"].includes(e.key.toUpperCase())) e.preventDefault();
    };

    // Block text selection & drag
    const handleSelectStart = (e) => e.preventDefault();
    const handleDragStart = (e) => e.preventDefault();

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("dragstart", handleDragStart);

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);
}
