function ContactSocials() {
  const socials = [
    {
      social: "email",
      un: "choudharysuvansh05@gmail.com",
      href: "mailto:choudharysuvansh05@gmail.com",
    },
    {
      social: "github",
      un: "Suvanshhh",
      href: "https://www.github.com/Suvanshhh/",
    },
    {
      social: "linkedin",
      un: "suvan.shhh",
      href: "www.linkedin.com/in/suvanshhh/",
    },
    {
      social: "instagram",
      un: "suvan.shhh",
      href: "https://www.instagram.com/suvansh.shhh",
    }
  ];
  return (
    <div className="line-container flex flex-col">
      <p className="  text-3xl text-textColor">Reach Out Via Socials </p>
      <div className="flex flex-col space-y-2 pt-5">
        <p className="line text-base text-textColor md:text-2xl">
          .socials &#123;{" "}
        </p>
        {socials.map((social) => {
          return (
            <div className="  line text-base md:text-2xl" key={social.social}>
              <span className="pl-5 text-textColor md:pl-8">
                {social.social}:
              </span>
              <a
                className=" pl-2 text-base text-accentColor hover:underline md:text-2xl"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.un};
              </a>
            </div>
          );
        })}
        <p className="line text-base text-textColor md:text-2xl">&#125;</p>
      </div>
    </div>
  );
}

export default ContactSocials;
