import { Highlight, themes } from "prism-react-renderer";
import { useState } from "react";

export default function CodeBlock({ language = "javascript", value = "" }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }
  return (
    <div className="relative my-4 overflow-hidden rounded-xl border border-white/10">
      <button onClick={copy} className="absolute right-2 top-2 rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-200 hover:bg-zinc-700">
        {copied ? "Copied" : "Copy"}
      </button>
      <Highlight code={value.trim()} language={language} theme={themes.dracula}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} m-0 overflow-auto p-4 text-sm`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
