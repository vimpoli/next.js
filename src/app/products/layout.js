const ProductsLayout = ({ children }) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-6 py-10">
        <div className="min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default ProductsLayout;
