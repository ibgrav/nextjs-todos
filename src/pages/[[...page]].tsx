import { GetServerSideProps } from "next";
import { Footer } from "../components/Footer";
import { ToDos } from "../components/to-dos/To-Dos";

interface PageProps {
  renderDate: string;
}

export default function Index({ renderDate }: PageProps) {
  return (
    <main className="container">
      <h1 className="text-2xl my-6">My To-Dos</h1>

      <ToDos />

      <Footer renderDate={renderDate} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  return {
    props: {
      renderDate: new Date().toUTCString(),
    },
  };
};
