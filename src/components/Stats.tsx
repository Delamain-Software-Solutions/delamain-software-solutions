const Stats = () => {
  const stats = [
    { number: "⚡", label: "Lightning Fast HMR", description: "Instant updates" },
    { number: "🔧", label: "Zero Config", description: "Works out of the box" },
    { number: "📱", label: "Mobile First", description: "Responsive design" },
    { number: "🎨", label: "Beautiful UI", description: "Modern components" }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;