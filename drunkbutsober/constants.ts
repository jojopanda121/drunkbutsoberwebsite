import { BlogPost } from './types';

export const SITE_NAME = "DrunkbutSober";

// Placeholder for the uploaded logo - in a real deployment, the user puts their file in /public
export const LOGO_URL = "https://placehold.co/400x400/000000/FFFFFF/png?text=DbS&font=roboto"; 

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Being Sober in a Drunk World',
    excerpt: 'Navigating modern chaos with a clear mind while embracing the entropy of existence.',
    content: `
      <p>Ideally, we navigate the world with precision. But often, it feels like stumbling through a neon-lit alleyway at 3 AM.</p>
      <br/>
      <h3>The Paradox</h3>
      <p>To be drunk is to be loose, free from inhibition. To be sober is to be sharp, aware of consequence. DrunkbutSober is the intersection where creativity meets discipline.</p>
      <br/>
      <p>We build systems to manage the chaos, yet we crave the chaos to break the systems. It is a cycle of destruction and creation.</p>
    `,
    coverImage: 'https://picsum.photos/800/600?grayscale&blur=2',
    date: '2023-10-24',
    category: 'Philosophy',
    readTime: '5 min',
    slug: 'art-of-being-sober'
  },
  {
    id: '2',
    title: 'Digital Minimalism: A Wireframe Existence',
    excerpt: 'Stripping away the noise to find the signal in a saturated digital landscape.',
    content: `
      <p>Our screens are cluttered. Our minds are cluttered. The aesthetic of "wireframe" isn't just a design choice; it's a lifestyle manifesto.</p>
      <br/>
      <p>By reducing elements to their bare essentials—lines, vectors, pure data—we reveal the structure underneath. This blog is built on that principle. No ads, no trackers, just text and code.</p>
    `,
    coverImage: 'https://picsum.photos/800/601?grayscale',
    date: '2023-11-02',
    category: 'Design',
    readTime: '3 min',
    slug: 'digital-minimalism'
  },
  {
    id: '3',
    title: 'Coding at Night',
    excerpt: 'Why the best logic flows when the sun goes down and the city sleeps.',
    content: `
      <p>There is a silence at 2 AM that is deafeningly productive. The notifications stop. The emails cease. It is just you and the compiler.</p>
      <br/>
      <p>This state of flow is what I call "The Sober High". You aren't intoxicated by substances, but by progress. By the seamless execution of logic.</p>
    `,
    coverImage: 'https://picsum.photos/800/602?grayscale',
    date: '2023-12-15',
    category: 'Dev',
    readTime: '7 min',
    slug: 'coding-at-night'
  },
  {
    id: '4',
    title: 'Entropy & Order',
    excerpt: 'Examining the thermodynamic cost of maintaining a clean codebase.',
    content: `
      <p>Code rots. It's a fact of nature. Without active maintenance, systems degrade. We fight a constant war against entropy.</p>
    `,
    coverImage: 'https://picsum.photos/800/603?grayscale',
    date: '2024-01-05',
    category: 'Engineering',
    readTime: '4 min',
    slug: 'entropy-and-order'
  }
];
