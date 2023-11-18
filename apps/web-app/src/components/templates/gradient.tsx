import { CSSProperties } from "react";

function Gradient({
  conic,
  style,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  style?: CSSProperties | undefined;
}): JSX.Element {
  function getProperties() {
    let properties: CSSProperties = {
      position: "absolute",
      mixBlendMode: "normal",
      willChange: "filter",
    };
    if (style) {
      properties = { ...properties, ...style };
    }
    if (conic) {
      properties.backgroundImage = `conic-gradient(
				from 180deg at 50% 50%,
				#2a8af6 0deg,
				#a853ba 180deg,
				#e92a67 360deg
			)`;
    }
    if (small) {
      properties.filter = "blur(32px)";
    } else {
      properties.filter = "blur(75px)";
    }
    return properties;
  }
  return <span style={getProperties()} />;
}

export default function GradientWrapper({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <div
        style={{
          display: "flex",
          position: "absolute",
          zIndex: 50,
          justifyContent: "center",
          alignItems: "center",
          width: "16rem",
          height: "16rem",
        }}
      >
        <Gradient
          style={{ opacity: 0.3, width: "120px", height: "120px" }}
          conic
          small
        />
      </div>
      {children}
      <div
        style={{
          display: "flex",
          position: "absolute",
          zIndex: 40,
          justifyContent: "center",
          alignItems: "center",
          width: "16rem",
          height: "16rem",
        }}
      >
        <Gradient
          style={{
            top: "-500px",
            width: "1000px",
            height: "1000px",
            opacity: "0.15",
          }}
          conic
        />
      </div>
    </>
  );
}
