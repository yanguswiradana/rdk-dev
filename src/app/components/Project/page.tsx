import Image from "next/image";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Bali Mesari Cycling Tours",
      description:
        "Website travel yangg terintegrasi dengan tripadvisor, google maps, dan whatsapp.",
      imageUrl: "/images/bmct.png", // Replace with your image path
      link: "https://balimesaricyclingtours.com/",
    },
    {
      id: 2,
      title: "Kamaniya rental bali",
      description:
        "Website rental stoler bayi yang terintegrasi dengan whatsapp.",
      imageUrl: "/images/kamaniya.png", // Replace with your image path
      link: "https://kamaniyarentalbali.com/",
    },
    {
      id: 3,
      title: "Bali Moon Art Space",
      description:
        "Website galeri seni dan cafe dengan fitur penjualan online.",
      imageUrl: "/images/bali-moon.png", // Replace with your image path
      link: "https://reduktor-demo.my.id/",
    },
  ];

  return (
    <section id='projects' className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>
            Our <span className='text-secondary'>Projects</span>
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Check out some of our recent work and what we've accomplished for
            our clients.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100'
            >
              <div className='relative h-48 w-full'>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 mb-4'>{project.description}</p>
                <a
                  href={project.link}
                  target='_blank'
                  className='inline-block px-4 py-2 bg-[#d01c1c] text-white rounded-md hover:bg-[#b01818] transition-colors duration-300'
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
