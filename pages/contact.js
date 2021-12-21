import MetaHead from "@/components/head";
import Nav from "@/components/Nav";

export default function Contact() {
  const data = {
    title: "Contact | Idadilham",
    description:
      "Contact of Dadi Ilham S, Say Hello! If you want to talk to me about something that could interest me, you can send me message to @idadcode instagram.",
    url: "https://idadilham.site/contact",
  };

  return (
    <div>
      <MetaHead data={data} />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:divide-x">
          <Nav />
          <div className="col-span-3">
            <div className="p-5 lg:p-12">
              <h1 className="mb-10 text-3xl antialiased lg:text-3xl">
                <span className="font-bold text-green-700">Contact</span> Me
              </h1>
              <h2 className="text-xl antialiased tracking-wide text-gray-700 lg:text-xl">
                <span className="font-normal text-black">
                  This section is still under construction ✌🏻
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
