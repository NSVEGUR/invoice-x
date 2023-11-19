import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          color: "white",
          margin: "30px 0 20px 0",
          paddingBottom: "10px",
          borderBottom: "2px solid rgba(108, 108, 108, 0.6)",
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ color: "white", fontWeight: "medium", fontSize: "20px" }}>
        {children}
      </h2>
    ),
    hr: () => (
      <hr
        style={{
          margin: "10px 0",
          borderColor: "rgba(108, 108, 108, 0.6)",
        }}
      />
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          background: "rgba(31, 31 ,31, 0.5)",
          margin: "1.5em 0",
          padding: "0.5em 0.5em 0.5em 1em",
          borderRadius: "0.5em",
          borderTop: "1px solid rgba(108, 108, 108, 0.3)",
          borderBottom: "1px solid rgba(108, 108, 108, 0.3)",
          borderRight: "1px solid rgba(108, 108, 108, 0.3)",
          borderLeft: "7px solid #353940",
        }}
      >
        {children}
      </blockquote>
    ),
    pre: ({ children }) => (
      <pre
        style={{
          position: "relative",
          margin: "20px 0",
          padding: "1rem",
          backgroundColor: "rgba(20, 20, 20, 0.5)",
          border: "1px solid rgba(108, 108, 108, 0.3)",
          borderRadius: "12px",
          color: "#888888",
          whiteSpace: "pre-wrap",
        }}
      >
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul
        style={{
          margin: "10px 0",
          padding: "0 0 0 20px",
          listStyleType: "disc",
        }}
      >
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol
        style={{
          margin: "10px 0",
          padding: "0 0 0 20px",
          listStyleType: "number",
        }}
      >
        {children}
      </ol>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        style={{
          color: "rgb(0, 112, 201)",
        }}
      >
        {children}
      </a>
    ),
    ...components,
  };
}
