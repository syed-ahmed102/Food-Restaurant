import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MessageSquare } from 'lucide-react';

interface BlogPostCardProps {
  date: string;
  commentCount: number;
  slug: string;
  className?: string;
  fill: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ date, commentCount, className, slug}) => {
  return (
    <article className={`max-w-sm rounded-lg overflow-hidden bg-white shadow-md ${className}`}>
      <div className="relative h-58 w-full">
        <Image
          src='/pic6.png'
          alt='image'
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={500}
        height={300}/>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            <span>Comments ({String(commentCount).padStart(2, '0')})</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-gray-900">Chocolate Truffle Cake With Honey Flavor</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.</p>
        
        <Link 
          href={`/blog/${slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          Read more
          <svg 
            className="w-4 h-4 ml-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;