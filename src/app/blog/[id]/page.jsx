import {data} from "@/data"; // Import your data source
import Link from "next/link";

// Generate static parameters for dynamic routes
export async function generateStaticParams() {
  return data.map((blog) => ({
    id: blog.id.toString(),
  }));
}

const SingleBlog = ({params}) => {
  const {id} = params;
  const blog = data.find((item) => item.id.toString() === id);

  if (!blog) {
    return (
      <div className="p-4 max-w-screen-lg mx-auto text-[#3D5C65]">
        <h1 className="text-4xl font-bold my-5">Blog Not Found</h1>
        <p>Sorry, the blog you are looking for does not exist.</p>
      </div>
    );
  }

  const {title, category, snippet} = blog;

  return (
    <div className="card bg-[#f0f3f5] w-2/3 mx-auto shadow-xl text-center border-2 rounded h-[70vh] mt-20 mb-[136px] text-[#3D5C65]">
      <h1 className="text-4xl font-bold my-10">Blog Details</h1>
      <div className="card-body space-y-6">
        <h1 className="card-title mx-auto">{title}</h1>
        <h3>
          <span className="font-bold">Category: </span>
          {category}
        </h3>
        <p className="px-20">
          <span className="font-bold text-justify">Description: </span>
          {snippet}
        </p>
        <Link href={"/"}>
          <button className="btn bg-[#58C3E5] text-[#3D5C65] px-10">Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleBlog;
