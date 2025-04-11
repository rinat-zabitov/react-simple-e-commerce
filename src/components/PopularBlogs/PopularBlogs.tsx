import { MessageCircle, ThumbsUp } from 'lucide-react';

export const PopularBlogs = () => {
  const blogs = [
    { title: 'My Amazing Blog Title', author: 'Jordan', likes: 150, comments: 46 },
    { title: 'My Amazing Blog Title2', author: 'Mike', likes: 43, comments: 23 },
    { title: 'My Amazing Blog Title3', author: 'John', likes: 789, comments: 345 },
    { title: 'My Amazing Blog Title4', author: 'Rinat', likes: 1990, comments: 794 },
  ];
  return (
    <div className="bg-white p-4 w-[23rem] mt-4 border ml-5 rounded">
      <h2 className="text-2xl font-bold mb-5">Popular Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <span className="font-bold mb-2">{blog.title}</span>
            </div>
            <span className="text-gray-600">Publish by {blog.author}</span>
            <div className="flex items-center mt-2">
              <MessageCircle size={16} />
              <span className="text-gray-500 mr-5 ml-1">{blog.likes}</span>
              <ThumbsUp size={16} />
              <span className="text-gray-500 mr-2 ml-2">{blog.comments}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
