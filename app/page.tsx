import React from 'react';
import Link from 'next/link';
import { getStoriesMetadata } from 'app/content/utils/mdx';

const workshopSections = [
  {
    title: 'Earth Scientists & Researchers',
    description:
      'Transform your research into compelling stories that reach beyond academic papers. Learn to create interactive narratives that showcase your data discoveries.',
    icon: '🌍',
  },
  {
    title: 'Storytelling Techniques',
    description:
      'Master the art of scientific storytelling. Practice writing engaging narratives that make complex Earth science accessible to broader audiences.',
    icon: '📖',
  },
  {
    title: 'Interactive Tools',
    description:
      'Get hands-on experience with eoViz/VEDA dashboard capabilities. Build dynamic visualizations that bring your stories to life.',
    icon: '🛠️',
  },
];

const featuredStories = getStoriesMetadata()
  .map((d) => ({
    ...d.metadata,
    path: `stories/${d.slug}`,
  }))
  .filter((_d, idx) => idx < 3);

export default function WorkshopHomePage() {
  return (
    <section>
      <div className='grid-container'>
        {/* Hero Section */}
        <div className='grid-row margin-top-5'>
          <h2>
            2025 July ESIP Storytelling Workshop
          </h2>
          <p className='margin-top-2'>
            Transform your Earth science research into compelling interactive stories. 
            Learn storytelling techniques and get hands-on experience with eoViz tools 
            to create engaging narratives that reach beyond academic papers.
          </p>
          <p className='margin-top-1 text-bold'>
            Seattle, WA • July 22-25, 2025
          </p>
        </div>

        {/* Workshop Goals */}
        <div className='grid-row grid-gap-lg card--homepage-main margin-top-2'>
          {workshopSections.map((section) => {
            return (
              <div
                key={section.title}
                className='tablet:grid-col text-center padding-5'
              >
                <div>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    margin: '0 auto'
                  }}>
                    {section.icon}
                  </div>
                </div>
                <div className='margin-top-3'>
                  <h3>{section.title}</h3>
                  <p className='margin-top-1'>{section.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Example Stories */}
        {featuredStories.length > 0 && (
          <>
            <div className='grid-row margin-top-5'>
              <h2>Example Data Stories</h2>
            </div>
            <div className='grid-row grid-gap-md margin-top-2'>
              <div className='tablet:grid-col-6'>
                <div
                  className='card--homepage-topstory text-base-lightest radius-md display-flex flex-align-end padding-2'
                  style={{ backgroundImage: `url(${featuredStories[0]?.media?.src})` }}
                >
                  <div className='card--homepage-topstory-text'>
                    <h3>{featuredStories[0]?.name}</h3>
                    <p className='margin-top-1'>{featuredStories[0]?.description}</p>
                  </div>
                  <Link className='link--block' href={featuredStories[0]?.path} />
                </div>
              </div>
              <div className='tablet:grid-col-6'>
                {featuredStories.slice(1).map((story) => {
                  return (
                    <div key={story.id} className='grid-row'>
                      <div className='tablet:grid-col'>
                        <div
                          className='card--homepage-substory text-base-lightest radius-md display-flex flex-align-end padding-2'
                          style={{ backgroundImage: `url(${story.media?.src})` }}
                        >
                          <div className='card--homepage-topstory-text'>
                            <h3>{story.name}</h3>
                            <p className='margin-top-1'>{story.description}</p>
                          </div>
                          <Link className='link--block' href={story.path} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* Getting Started */}
        <div className='grid-row margin-top-5'>
          <div className='tablet:grid-col-8'>
            <h2>Ready to Begin?</h2>
            <p className='margin-top-1'>
              Start exploring the tools and example stories. During the workshop, 
              you'll learn storytelling techniques and build your own interactive narrative.
            </p>
            <p className='margin-top-2'>
              <a 
                href="https://github.com/developmentseed/eoviz-esip2025" 
                target="_blank" 
                rel="noopener noreferrer"
                className='usa-link usa-link--external'
              >
                View source code on GitHub
              </a>
            </p>
          </div>
          <div className='tablet:grid-col-4 display-flex flex-align-center'>
            <div className='text-center' style={{ width: '100%' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: '#e6f3ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                margin: '0 auto',
                border: '3px solid #0066cc'
              }}>
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}