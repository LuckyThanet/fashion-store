/** @type {import('next').NextConfig} */
export default {
  // keep existing dev origins
  allowedDevOrigins: ["100.80.105.9"],
  // export a static site suitable for GitHub Pages (Next 13+)
  output: "export",
  // ensure directories end with index.html to work on static hosts
  trailingSlash: true,
};
