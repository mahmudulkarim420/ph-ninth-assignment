import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Python Tips',
    excerpt: 'Learn 5 essential Python tips to boost your coding skills...',
    image: 'https://i.ibb.co/7J5zwqwT/Ym-Ew-OGQ5-My5qc-Gc.jpg',
  },
  {
    id: 2,
    title: 'Design Trends 2025',
    excerpt: 'Stay ahead with the latest design trends this year...',
    image: 'https://i.ibb.co/3m5c7jcb/MA.jpg',
  },
  {
    id: 3,
    title: 'Healthy Living Tips',
    excerpt: 'Simple ways to improve your health and lifestyle...',
    image: 'https://i.ibb.co/W4gD2yjj/c3MuanBn.jpg',
  },
];

const Blog = () => {
  return (
    <div className="my-16 max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Latest Blog
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
