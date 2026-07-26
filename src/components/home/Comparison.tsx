import RevealOnScroll from '../shared/RevealOnScroll';
import SectionBadge from '../shared/SectionBadge';

const comparisons = [
  { aspect: 'Development speed', old: 'Manual, slow cycles', new: 'Days, not weeks' },
  { aspect: 'Cost', old: 'High labor dependency', new: 'A lean crew with senior-level output' },
  { aspect: 'Quality', old: 'Bugs surface in production', new: 'Caught long before you ever see them' },
  { aspect: 'Scaling', old: 'Resource-intensive to grow', new: 'Built to scale from day one' },
];

const Comparison = () => {
  return (
    <section id="why" className="py-[clamp(80px,10vw,140px)] px-5 sm:px-8">
      <RevealOnScroll className="max-w-[900px] mx-auto mb-[clamp(44px,6vw,72px)] text-center">
        {/* <SectionBadge className="block mb-[22px]">Why Delamain</SectionBadge> */}
        <h2 className="font-hanken font-bold text-foreground text-[clamp(36px,5.6vw,64px)] leading-[1.04] tracking-[-.03em]">
          The old way is slow. We're not!
        </h2>
        <p className="max-w-[620px] mx-auto mt-6 text-[clamp(17px,2.2vw,20px)] leading-[1.5] text-muted-foreground">
          We use AI-powered tools to deliver faster and more efficiently than traditional methods. AI doesn't replace expertise, it amplifies it.
        </p>
      </RevealOnScroll>

      <RevealOnScroll
        delay={100}
        className="max-w-[1000px] mx-auto bg-white rounded-[26px] p-[clamp(20px,3vw,40px)] shadow-[0_30px_70px_-40px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.05)]"
      >
        <div className="hidden md:grid grid-cols-[1.1fr_1fr_1fr] gap-4 pb-5 px-2 border-b border-black/[0.08]">
          <div />
          <div className="text-[15px] font-semibold text-muted-foreground">The usual way</div>
          <div className="text-[15px] font-bold text-accent">With Delamain</div>
        </div>
        {comparisons.map((row) => (
          <div
            key={row.aspect}
            className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1fr] gap-2 md:gap-4 md:items-center py-[22px] px-2 border-b border-black/[0.05] last:border-b-0"
          >
            <div className="text-[clamp(16px,2vw,19px)] font-bold tracking-[-.01em] text-foreground">
              {row.aspect}
            </div>
            <div className="hidden md:block text-[15px] text-[#86868b]">{row.old}</div>
            <div className="text-[15px] font-semibold text-foreground bg-accent/[0.08] border border-accent/[0.18] rounded-xl py-3 px-4">
              {row.new}
            </div>
          </div>
        ))}
      </RevealOnScroll>
    </section>
  );
};

export default Comparison;
