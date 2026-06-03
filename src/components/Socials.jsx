export default function Socials() {
  return (
    <section id="socials" className="bg-[#020617] py-16 text-slate-100">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center px-4">
        <div className="flex items-center">
          <h1 className="font-merriweather text-xl gradient-text animate-pulse animate-infinite animate-ease-out">
            SEND ME A RECIPE{" "}
          </h1>
          <span className="text-white ml-4">📧</span>
        </div>

        <p className="mb-10 max-w-md text-slate-300">
          Got an idea simmering? A collaboration in the oven? Let’s whip up
          something amazing together — reach out anytime!
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-2 w-full space-y-6 text-left">
          <ContactItem
            label="Email"
            value="rpcastaneros@gmail.com"
            href="mailto:rpcastaneros@gmail.com"
          />
          <ContactItem
            label="LinkedIn"
            value="linkedin.com/in/rockyapcastaneros"
            href="https://www.linkedin.com/in/rockyapcastaneros/"
          />
          <ContactItem
            label="GitHub"
            value="github.com/devRaxx"
            href="https://github.com/devRaxx"
          />
          <ContactItem label="Mobile No." value="+63 976 483 9917" />
          <ContactItem
            label="Facebook"
            value="facebook.com/rnjelo"
            href="https://www.facebook.com/rnjelo"
          />
          <ContactItem label="Address" value="Davao City" />
        </div>
      </div>
    </section>
  );
}

// Reusable sub-component for styling links
function ContactItem({ label, value, href }) {
  return (
    <div>
      <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </h2>
      <a
        href={href || "/"}
        target="_blank"
        rel="noopener noreferrer"
        className="break-all text-lg text-cyan-300 hover:underline"
      >
        {value}
      </a>
    </div>
  );
}
