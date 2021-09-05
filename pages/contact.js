import MetaHead from '../components/head';
import Nav from '../components/nav';

export default function Contact() {

  const data = {
    title: 'Contact | Idadilham',
    description: 'Contact of Dadi Ilham S, Say Hello! If you want to talk to me about something that could interest me, you can send me message to @idadcode instagram.'
  };

  return (
    <div>

      <MetaHead data={data} />

      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-4 lg:divide-x">
          <Nav />
          <div class="col-span-3">
            <div class="p-5 lg:p-12">
              <h1 class="text-3xl lg:text-3xl antialiased mb-10">
                <span class="font-bold text-green-700">Contact</span> Me
              </h1>
              <h2 class="text-xl lg:text-xl antialiased tracking-wide text-gray-700">
                <span class="font-normal text-black">This section is still under construction ✌🏻</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
