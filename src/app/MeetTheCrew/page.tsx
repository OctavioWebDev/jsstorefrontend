import React from 'react';
import Image from 'next/image';
import Banner from '@/components/Banner';

interface TeamMemberProps {
  imageSrc: string;
  name: string;
  description: string;
}

const TeamMemberTile: React.FC<TeamMemberProps> = ({ imageSrc, name, description }) => (
  <div className="flex flex-col items-center p-4 mb-8 md:mb-0 bg-white shadow-xl">
    <div className="w-32 h-32 mb-4 relative rounded-full overflow-hidden">
      <Image
        src={imageSrc}
        alt={name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </div>
);

const TeamProfilePage: React.FC = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      imageSrc: '/images/team-member-1.jpg',
      name: 'John Doe',
      description: 'Sales Manager with 10 years of experience in home improvement products.',
    },
    {
      imageSrc: '/images/team-member-2.jpg',
      name: 'Jane Smith',
      description: 'Product Specialist focusing on kitchen and bath solutions.',
    },
    {
      imageSrc: '/images/team-member-3.jpg',
      name: 'Mike Johnson',
      description: 'Customer Service Representative dedicated to ensuring client satisfaction.',
    },
    {
        imageSrc: '/images/team-member-1.jpg',
        name: 'John Doe',
        description: 'Sales Manager with 10 years of experience in home improvement products.',
      },
      {
        imageSrc: '/images/team-member-2.jpg',
        name: 'Jane Smith',
        description: 'Product Specialist focusing on kitchen and bath solutions.',
      },
      {
        imageSrc: '/images/team-member-3.jpg',
        name: 'Mike Johnson',
        description: 'Customer Service Representative dedicated to ensuring client satisfaction.',
      },
      {
        imageSrc: '/images/team-member-1.jpg',
        name: 'John Doe',
        description: 'Sales Manager with 10 years of experience in home improvement products.',
      },
      {
        imageSrc: '/images/team-member-2.jpg',
        name: 'Jane Smith',
        description: 'Product Specialist focusing on kitchen and bath solutions.',
      },
      {
        imageSrc: '/images/team-member-3.jpg',
        name: 'Mike Johnson',
        description: 'Customer Service Representative dedicated to ensuring client satisfaction.',
      },
      {
        imageSrc: '/images/team-member-1.jpg',
        name: 'John Doe',
        description: 'Sales Manager with 10 years of experience in home improvement products.',
      },
      {
        imageSrc: '/images/team-member-2.jpg',
        name: 'Jane Smith',
        description: 'Product Specialist focusing on kitchen and bath solutions.',
      },
      {
        imageSrc: '/images/team-member-3.jpg',
        name: 'Mike Johnson',
        description: 'Customer Service Representative dedicated to ensuring client satisfaction.',
      },
      {
        imageSrc: '/images/team-member-1.jpg',
        name: 'John Doe',
        description: 'Sales Manager with 10 years of experience in home improvement products.',
      },
      {
        imageSrc: '/images/team-member-2.jpg',
        name: 'Jane Smith',
        description: 'Product Specialist focusing on kitchen and bath solutions.',
      },
      {
        imageSrc: '/images/team-member-3.jpg',
        name: 'Mike Johnson',
        description: 'Customer Service Representative dedicated to ensuring client satisfaction.',
      },
      {
        imageSrc: '/images/team-member-1.jpg',
        name: 'John Doe',
        description: 'Sales Manager with 10 years of experience in home improvement products.',
      },
      {
        imageSrc: '/images/team-member-2.jpg',
        name: 'Jane Smith',
        description: 'Product Specialist focusing on kitchen and bath solutions.',
      },
      {
        imageSrc: '/images/team-member-3.jpg',
        name: 'Mike Johnson',
        description: 'Customer Service Representative dedicated to ensuring client satisfaction.',
      },
      {
        imageSrc: '/images/team-member-1.jpg',
        name: 'John Doe',
        description: 'Sales Manager with 10 years of experience in home improvement products.',
      },
      {
        imageSrc: '/images/team-member-2.jpg',
        name: 'Jane Smith',
        description: 'Product Specialist focusing on kitchen and bath solutions.',
      },
      {
        imageSrc: '/images/team-member-3.jpg',
        name: 'Mike Johnson',
        description: 'Customer Service Representative dedicated to ensuring client satisfaction.',
      },
      {
        imageSrc: '/images/team-member-1.jpg',
        name: 'John Doe',
        description: 'Sales Manager with 10 years of experience in home improvement products.',
      },
      {
        imageSrc: '/images/team-member-2.jpg',
        name: 'Jane Smith',
        description: 'Product Specialist focusing on kitchen and bath solutions.',
      },
      {
        imageSrc: '/images/team-member-3.jpg',
        name: 'Mike Johnson',
        description: 'Customer Service Representative dedicated to ensuring client satisfaction.',
      },
    // Add more team members as needed
  ];

  return (
    <>
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberTile key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
    <Banner />
    </>
  );
};

export default TeamProfilePage;
