export default function Socials() {
  return (
    <section id="socials" className="py-16 bg-[#0f172a] text-white">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center px-4">
        <div className="flex items-center">
          <h1 className="font-merriweather text-xl gradient-text animate-pulse animate-infinite animate-ease-out">
            SEND ME A RECIPE{" "}
          </h1>
          <span className="text-white ml-4">📧</span>
        </div>

        <p className="text-gray-300 mb-10 max-w-md">
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
      <h2 className="text-sm uppercase text-gray-400 font-semibold tracking-wider mb-1">
        {label}
      </h2>
      <a
        href={href || "/"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg text-blue-400 hover:underline break-all"
      >
        {value}
      </a>
    </div>
  );
}
