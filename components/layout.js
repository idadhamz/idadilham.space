import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import MetaHead from "@/components/head";

export default function Layout(props) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <MetaHead data={props.data} />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:divide-x">
          <div className="flex flex-col gap-4">
            <Nav />
          </div>
          <div className="min-h-screen col-span-4 font-sans">
            {props.children}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
