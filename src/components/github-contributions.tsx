import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";

interface Props {
  username: string;
}

const theme = {
  light: ["#f0f0f0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export function GitHubContributions({ username }: Props) {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("dark");
  const [blockSize, setBlockSize] = useState(5.4);
  const [blockMargin, setBlockMargin] = useState(1.4);
  const [fontSize, setFontSize] = useState(7);

  useEffect(() => {
    const html = document.documentElement;
    setColorScheme(
      html.getAttribute("data-theme") === "light" ? "light" : "dark",
    );

    const observer = new MutationObserver(() => {
      setColorScheme(
        html.getAttribute("data-theme") === "light" ? "light" : "dark",
      );
    });
    observer.observe(html, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth < 640) {
        setBlockSize(5.4);
        setBlockMargin(1.4);
        setFontSize(7);
      } else {
        setBlockSize(10);
        setBlockMargin(3);
        setFontSize(12);
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="mt-10 w-full text-left" aria-labelledby="github-title">
      <h2 id="github-title" className="text-sm font-medium text-foreground/60">
        GITHUB
      </h2>

      <div className="mt-4 overflow-x-auto">
        <GitHubCalendar
          className="max-sm:scrollbar-none max-sm:[&::-webkit-scrollbar]:display-none"
          username={username}
          colorScheme={colorScheme}
          theme={theme}
          blockSize={blockSize}
          blockMargin={blockMargin}
          fontSize={fontSize}
        />
      </div>
    </section>
  );
}
