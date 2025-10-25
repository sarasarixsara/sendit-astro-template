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
  console.log(`Registered: ${bookshopName} -> ${obj.default ? 'OK' : 'UNDEFINED'}`);
});

console.log('All components:', Object.keys(components));

export default function Page({ contentBlocks }) {
  return (
    <main>
      {contentBlocks.map((block, i) => {
        const Component = components[block._bookshop_name];
        if (!Component) {
          console.error(`NOT FOUND: ${block._bookshop_name}`);
          console.error('Available:', Object.keys(components));
        }
        return <Component {...block} key={i} />;
      })}
    </main>
  );
}
