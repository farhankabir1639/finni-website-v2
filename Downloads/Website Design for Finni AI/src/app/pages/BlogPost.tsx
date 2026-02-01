import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
      
      {/* Header */}
      <article className="max-w-4xl mx-auto px-6 pb-24">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="bg-cyan-500/20 text-cyan-400 text-sm px-4 py-1.5 rounded-full border border-cyan-500/30">
            {post.category}
          </span>
        </div>
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {post.title}
        </h1>
        
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
          <div className="flex items-center gap-3">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <span className="font-medium">{post.author.name}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12 border border-cyan-500/10">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-30" />
        </div>
        
        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none">
          <div 
            className="text-gray-300 leading-relaxed space-y-6"
            style={{ whiteSpace: 'pre-line' }}
          >
            {post.content.split('\n').map((paragraph, index) => {
              // Handle headers
              if (paragraph.startsWith('# ')) {
                return <h1 key={index} className="text-4xl font-bold text-white mt-8 mb-4">{paragraph.replace('# ', '')}</h1>;
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-3xl font-bold text-white mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-2xl font-bold text-cyan-400 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
              }
              
              // Handle list items
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="ml-6 text-gray-300 mb-2">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              
              // Regular paragraphs
              if (paragraph.trim()) {
                return <p key={index} className="text-gray-300 leading-relaxed mb-4">{paragraph}</p>;
              }
              
              return null;
            })}
          </div>
        </div>
        
        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-cyan-500/10">
          <div className="flex items-center gap-3 flex-wrap">
            <Tag className="w-4 h-4 text-gray-500" />
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="bg-slate-900/50 text-gray-400 text-sm px-3 py-1 rounded-full border border-cyan-500/10"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-12 p-8 bg-gradient-to-br from-cyan-950/30 to-blue-950/30 rounded-2xl border border-cyan-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Ready to Take Control of Your Finances?
          </h3>
          <p className="text-gray-400 mb-6">
            Join thousands of people using Finni to save money and reach their goals.
          </p>
          <Link to="/">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg px-8 py-6 text-lg shadow-lg shadow-cyan-500/25">
              Try Finni Free
            </Button>
          </Link>
        </div>
      </article>
      
      {/* Related Posts */}
      <section className="bg-slate-900/50 py-16 px-6 border-t border-cyan-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">More Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="relative h-40 rounded-xl overflow-hidden mb-3">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-500">{relatedPost.readTime}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
