import React, { useEffect, useMemo, useState } from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import { useTheme } from "next-themes";
import * as simpleIcons from "simple-icons"; // Import all icons
import { ICloud } from "react-icon-cloud"; // Import ICloud to add types

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon: any, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;
  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      // Remove the clickable behavior by not including href, target, or rel
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(), // Prevent any default behavior
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

const SimpleIconCloud: React.FC<DynamicCloudProps> = ({ iconSlugs }) => {
  const [icons, setIcons] = useState<any[]>([]); // Store the icon elements
  const { theme } = useTheme();

  useEffect(() => {
    const loadedIcons = iconSlugs.map((slug) => {
      const iconKey = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`; // Format slug to match export name
      const icon = (simpleIcons as any)[iconKey]; // Dynamically access icon
      if (!icon) {
        console.error(`Icon with slug "${slug}" not found.`);
        return null;
      }
      return icon;
    });

    setIcons(loadedIcons.filter(Boolean)); // Remove null values
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!icons) return null;

    return icons.map((icon) => renderCustomIcon(icon, theme || "dark"));
  }, [icons, theme]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
};

export default SimpleIconCloud;
