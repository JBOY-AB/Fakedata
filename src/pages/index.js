import blogPosts from "@/fake-db/blog";

export default function Home() {

  const tableHeaders = blogPosts.length > 0 ? Object.keys(blogPosts[0]) : [];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              {tableHeaders.map((header) => (
                <th key={header} className="border px-4 py-2 text-left uppercase">
                  {header.replace(/_/g, " ")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {blogPosts.map((post) => (
              <tr key={post.id} className="odd:bg-gray-200 even:bg-white">
                {tableHeaders.map((header) => (
                  <td key={header} className="border px-4 py-2">
                    {post[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
