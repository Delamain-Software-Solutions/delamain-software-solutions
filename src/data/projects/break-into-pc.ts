import { Project } from "../projectsData";

const images = import.meta.glob('@/assets/projects/break-into-pc/*.{jpg,png,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const getImageUrl = (name: string) => {
    return (images[`/src/assets/projects/break-into-pc/${name}.png`] ||
        images[`/src/assets/projects/break-into-pc/${name}.jpg`] ||
        images[`/src/assets/projects/break-into-pc/${name}.jpeg`] ||
        images[`/src/assets/projects/break-into-pc/${name}.webp`]) as string;
};

export const breakIntoPcProject: Project = {
    slug: "break-into-pc",
    client: "Local Business",
    year: "2023",
    scopeOfWork: [
        "E-commerce Development",
        "Brand Identity",
        "Storefront Optimization"
    ],
    techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Stripe"],
    industry: "Computer and Games",
    title: "Break Into PC",
    description:
        "Break Into PC is a gamer-focused e-commerce marketplace designed to deliver a premium and intuitive shopping experience for PC enthusiasts and gamers. The platform combines a visually engaging storefront with powerful functionality, including a custom PC builder, categorized product marketplace, and an integrated technology blog to educate and engage users. The project emphasizes performance, accessibility, and responsive design to ensure seamless usability across desktop, tablet, and mobile devices. Built with scalability in mind, the platform enables efficient product management, secure payment integration, and an optimized user journey from product discovery to checkout. The brand identity and UI design were crafted to resonate with gaming culture while maintaining professional usability standards.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "A visually immersive gaming marketplace showcasing custom PC configurations, product browsing, and a high-performance storefront interface.",
    images: [
        {
            src: getImageUrl('1'),
            title: "Home Page",
            description:
                "The homepage delivers a visually dynamic and conversion-focused landing experience tailored for gaming audiences. It features an animated hero slider that highlights featured PCs, promotions, and key services. The layout is fully responsive and strategically structured with multiple engagement-driven sections including testimonials, featured gaming builds, FAQs, and promotional highlights. The design balances strong visual branding with usability, guiding users toward product discovery and custom PC configuration while maintaining fast load times and smooth UI animations.",
            bulletHeading:"Key Features",
            bullets: [
                "Animated landing slider showcasing featured gaming PCs and promotions",
                "Responsive layout optimized for desktop, tablet, and mobile devices",
                "Customer testimonial section to build trust and credibility",
                "Featured PC builds section highlighting curated gaming systems",
                "Interactive FAQ section improving customer support accessibility"
            ],
        },
        {
            src: getImageUrl('2'),
            title: "Marketplace",
            description:
                "The marketplace serves as the core product discovery hub, allowing users to browse and filter a wide range of computer components, peripherals, and gaming products. Products are intelligently categorized by hardware type, gaming genre, and performance level to streamline navigation. The interface prioritizes clarity and speed, enabling users to easily compare products and locate compatible components. The marketplace also supports scalable product listing management and integrates smoothly with backend inventory and database systems.",
            bulletHeading:"Key Features",
            bullets: [
                "Categorized browsing for PC components including GPUs, CPUs, RAM, and storage",
                "Dedicated gaming category navigation for quick product discovery",
                "User-friendly filtering and sorting options for efficient product comparison",
                "Dynamic product cards displaying pricing, specifications, and availability",
                "Scalable product catalog connected to database-driven inventory management"
            ],
        },
        {
            src: getImageUrl('3'),
            title: "Cart",
            description:
                "The cart page is designed to provide complete transparency and convenience during the checkout process. It displays detailed item breakdowns including quantity, individual pricing, applied discounts, and total cost calculations. The checkout flow is seamlessly integrated with Stripe to ensure secure and reliable payment processing. The interface minimizes friction by allowing users to easily update cart contents, review purchase summaries, and complete transactions with confidence and clarity.",
            bulletHeading:"Key Features",
            bullets: [
                "Detailed itemized cart breakdown with pricing and quantity controls",
                "Automatic discount and total cost calculation",
                "Secure Stripe payment gateway integration",
                "Real-time cart updates for improved user experience",
                "Streamlined checkout flow designed to reduce cart abandonment"
            ],
        },
    ].filter(img => img.src),
};
