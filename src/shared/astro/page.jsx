const components = {};
// Import both .jsx and .tsx component files so dynamic blocks (Bookshop) can load
// components authored in either JSX or TSX.
const componentImports = import.meta.glob("../../components/**/*.{jsx,tsx}", {
  eager: true,
});
Object.entries(componentImports).forEach(([path, obj]) => {
  const parts = path.replace("../../components/", "").split(".")[0].split("/");
  if (parts.length > 1 && parts[parts.length - 1] === parts[parts.length - 2]) {
    parts.pop();
  }
  const bookshopName = parts.join("/");
  components[bookshopName] = obj.default;
});

export default function Page({ contentBlocks }) {
  return (
    <main>
      {contentBlocks.map((block, i) => {
        const Component = components[block._bookshop_name];
        return <Component {...block} key={i} />;
      })}
    </main>
  );
}
