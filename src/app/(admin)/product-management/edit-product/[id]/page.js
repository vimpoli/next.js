import { getProductById } from "@/api/products";
import ProductForm from "../../_components/Form";

const EditProduct = async ({ params }) => {
  const productId = (await params).id;
  const response = await getProductById(productId);
  const product = response.data;
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit product
        </h2>
        <ProductForm product={product} isEditing={true} />
      </div>
    </section>
  );
};

export default EditProduct;
