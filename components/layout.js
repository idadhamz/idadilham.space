import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import MetaHead from "@/components/head";

export default function Layout(props) {
  return (
    <div>
      <MetaHead data={props.data} />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:divide-x">
          <Nav />
          <div className="col-span-4">
            {props.children}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
