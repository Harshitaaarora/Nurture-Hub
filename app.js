// Ensure we're using React features from the global scope
const { useState, useEffect } = React;

// Header component
const Header = () => (
  <header className="container mx-auto px-4 py-4 flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <button className="text-2xl">☰</button>
      <img src="/placeholder.svg" alt="Aashira Logo" className="h-10 w-auto" />
    </div>
    <nav className="hidden md:flex space-x-6 text-aashira-green">
      <a href="#community">Community</a>
      <a href="#pregnancy">Pregnancy</a>
      <a href="#baby">Baby</a>
      <a href="#products">Products</a>
    </nav>
    <div className="flex items-center space-x-4">
      <button className="text-aashira-green">Login</button>
      <button className="bg-aashira-green text-white px-4 py-2 rounded">Sign up</button>
      <select className="bg-transparent border-none text-aashira-green">
        <option>EN</option>
      </select>
    </div>
  </header>
);

// Hero component
const Hero = () => (
  <section className="flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2">
      <h2 className="text-aashira-brown font-normal mb-4">EMBRACING MOTHERHOOD WITH LOVE AND CARE</h2>
      <h1 className="text-4xl md:text-5xl font-bold text-aashira-green mb-6">
        Everything You Need for Your Baby's Journey, All in One Place
      </h1>
    </div>
    <div className="md:w-1/2 relative">
      <img
        src="/placeholder.svg?height=400&width=400"
        alt="Babies"
        className="rounded-full"
      />
    </div>
  </section>
);

// ToolsSection component
const ToolsSection = () => {
  const tools = [
    {
      icon: '💉',
      title: 'Vaccine Scheduler',
      description: "Stay on top of your baby's vaccination schedule with timely reminders and easy tracking.",
    },
    {
      icon: '👶',
      title: 'Growth Tracker',
      description: "Easily monitor your baby's growth milestones and health progress with our user-friendly tool.",
    },
    {
      icon: 'A↑',
      title: 'Name Finder',
      description: 'Discover the perfect name for your little one, tailored to your style and heritage.',
    },
    {
      icon: '🍼',
      title: 'Baby Feeding',
      description: 'Track feeding times, amounts, and patterns to ensure your baby is well-nourished and healthy.',
    },
  ];

  return (
    <section className="my-16">
      <h2 className="text-3xl text-center text-aashira-green mb-2">Trusted Tools for Nurturing Your Baby</h2>
      <p className="text-center text-aashira-brown mb-8">Empowering Your Baby Care Journey.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tools.map((tool, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">{tool.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
            <p className="text-gray-600">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ArticlesSection component
const ArticlesSection = () => (
  <section className="my-16">
    <h2 className="text-3xl text-aashira-green mb-8">Recent Articles</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map((article) => (
        <div key={article} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg?height=200&width=400"
            alt="Article thumbnail"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold mb-2">Lorem Ipsum is Placeholder Text Commonly</h3>
            <p className="text-sm text-gray-600 mb-4">
              Lorem Ipsum is Placeholder Text Commonly Used In The Graphic, Print, And Publishing Industries F...
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Author"
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Name</p>
                  <p className="text-xs text-gray-500">Publish Date</p>
                </div>
              </div>
              <button className="text-aashira-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Footer component
const Footer = () => (
  <footer className="bg-[#F9F5F1] py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src="/placeholder.svg" alt="Aashira Logo" className="h-10 w-auto" />
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="text-sm">
            <li>Nutritional Counseling</li>
            <li>Mental Health Support</li>
            <li>Genetic Counseling</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Social Media</h3>
          <div className="flex space-x-4">
            <span>FB</span>
            <span>IG</span>
            <span>TW</span>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        All rights reserved@aashira.co
      </div>
    </div>
  </footer>
);

// Main App component
const App = () => (
  <div className="bg-[#F9F5F1] min-h-screen font-serif">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <Hero />
      <ToolsSection />
      <ArticlesSection />
    </main>
    <Footer />
  </div>
);

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));