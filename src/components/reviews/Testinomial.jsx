import React from 'react';
import { Star } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      rating: 4.8,
      text: "Ganttify has revolutionized the way we manage our projects. Connecting tasks and workflows to our overall company goals has never been easier.",
      author: "Charolette Hanlin",
      position: "Co-Founder, Heroes Digital",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg" 
    },
    {
      rating: 4.8,
      text: "Using Ganttify has streamlined our project management process. It's incredibly effective in aligning our daily tasks with the company's strategic goals.",
      author: "Eleanor Pena",
      position: "Co-Founder, Heroes Digital",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      rating: 4.8,
      text: "Ganttify has provided us with a unified view of our projects. It connects our workflows directly to our business goals, making it easier to track progress.",
      author: "Guy Hawkins",
      position: "Co-Founder, Heroes Digital",
      avatar: "https://randomuser.me/api/portraits/men/20.jpg"
    },
    {
        rating: 4.8,
        text: "Ganttify's ability to connect tasks with our company's goals has given us a new level of clarity and efficiency in our project management efforts.",
        author: "Kristin Watson",
        position: "Co-Founder, Heroes Digital",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg"
      },
      {
        rating: 4.8,
        text: "Using Ganttify, we've been able to ensure that all our project activities are aligned with our overarching business objectives, leading to better coordination and success.",
        author: "Jane Cooper",
        position: "Co-Founder, Heroes Digital",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg"
      },
      {
        rating: 4.8,
        text: "Ganttify has transformed our approach to project management. It ensures that every task, no matter how small, is aligned with our company's mission and goals.",
        author: "Leslie Alexander",
        position: "Co-Founder, Heroes Digital",
        avatar: "https://randomuser.me/api/portraits/men/25.jpg"
      }
  ];

   
const TestimonialCard = ({ rating, text, author, position, avatar }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 text-purple-600 fill-current"
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating}</span>
    </div>
    <p className="text-gray-800 mb-4 text-base leading-relaxed">"{text}"</p>
    <div className="flex items-center">
      {avatar ? (
        <img
          src={avatar}
          alt={author}
          className="w-10 h-10 rounded-full object-cover"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
          <span className="text-purple-600 font-medium text-sm">
            {author.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
      )}
      <div className="ml-3">
        <h4 className="text-sm font-medium text-gray-900">{author}</h4>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
    </div>
  </div>
);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-purple-600 mb-2">Customers</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            See What Our Customers Are Saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's what some of our customers say about our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
