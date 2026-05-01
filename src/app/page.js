
import Link from "next/link";
// import books from "@/data/books.json";
import { FiArrowRight, FiBookOpen, FiStar, FiShield } from "react-icons/fi";

export default function Home() {
  // const featuredBooks = books.slice(0, 4);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Banner */}
      {/* <section 
        className="hero min-h-[60vh] rounded-3xl overflow-hidden relative shadow-2xl bg-base-200 bg-cover bg-center"
        style={{ backgroundImage: 'url(/library_hero_bg.png)' }}
      >
        <div className="hero-overlay bg-black/40"></div>
        <div className="hero-content text-center flex-col z-10 glass-panel p-10 rounded-3xl m-4">
          <div className="max-w-md">
            <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-md">Find Your Next Read</h1>
            <p className="py-6 text-lg text-white/90 font-medium drop-shadow-md">
              Explore thousands of books, borrow instantly, and start reading your favorite titles today.
            </p>
            <Link href="/books" className="btn btn-primary btn-lg rounded-full text-primary-content shadow-lg border-none hover:scale-105 transition-transform">
              Browse Now <FiArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section> */}

      {/* Marquee Section */}
      {/* <section className="bg-primary/10 py-3 overflow-hidden whitespace-nowrap rounded-lg">
        <div className="inline-block animate-[marquee_15s_linear_infinite] text-primary font-semibold text-lg">
          🚀 New Arrivals: The Quantum Age, Whispers in the Wind | Special Discount on Memberships! Get 50% off on your first month. 📚 Read unlimited books!
        </div>
      </section> */}

      {/* Featured Books */}
      {/* <section>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-base-content">Featured Books</h2>
            <p className="text-base-content/60 mt-2">Top picks for you this week.</p>
          </div>
          <Link href="/books" className="btn btn-ghost text-primary hidden sm:flex">
            View All <FiArrowRight />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <div key={book.id} className="card bg-base-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-base-300">
              <figure className="px-4 pt-4 h-64 overflow-hidden relative">
                <img
                  src={book.image_url}
                  alt={book.title}
                  className="rounded-xl object-cover h-full w-full"
                />
                <div className="absolute top-6 right-6 badge badge-secondary shadow-sm">{book.category}</div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg leading-tight">{book.title}</h3>
                <p className="text-sm text-base-content/60 grow-0">by {book.author}</p>
                <div className="card-actions justify-end mt-4">
                  <Link href={`/books/${book.id}`} className="btn btn-primary btn-sm rounded-full w-full">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center sm:hidden">
          <Link href="/books" className="btn btn-outline btn-primary rounded-full">
            View All Books
          </Link>
        </div>
      </section> */}

      {/* Benefits */}
      {/* <section className="py-12 px-6 bg-base-200 rounded-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <p className="text-base-content/60 mt-3 max-w-xl mx-auto">Experience the best digital library platform with premium features.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-primary/10 rounded-full text-primary">
              <FiBookOpen size={32} />
            </div>
            <h3 className="font-bold text-xl">Vast Collection</h3>
            <p className="text-sm text-base-content/70">Access thousands of books from various genres.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-secondary/10 rounded-full text-secondary">
              <FiStar size={32} />
            </div>
            <h3 className="font-bold text-xl">Top Rated</h3>
            <p className="text-sm text-base-content/70">Read the most popular and highly rated titles.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-accent/10 rounded-full text-accent">
              <FiShield size={32} />
            </div>
            <h3 className="font-bold text-xl">Secure Borrowing</h3>
            <p className="text-sm text-base-content/70">Your data and reading history are safe with us.</p>
          </div>
        </div>
      </section> */}

      {/* Newsletter */}
      {/* <section className="hero bg-linear-to-br from-primary to-secondary rounded-3xl text-primary-content shadow-xl py-12">
        <div className="hero-content text-center flex-col">
          <h2 className="text-3xl font-bold">Stay Updated!</h2>
          <p className="max-w-md mx-auto my-4 text-primary-content/80">
            Subscribe to our newsletter to get updates on new arrivals and exclusive offers.
          </p>
          <div className="join w-full max-w-sm">
            <input type="email" placeholder="Email address" className="input input-bordered join-item w-full text-base-content" />
            <button className="btn btn-neutral join-item">Subscribe</button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
