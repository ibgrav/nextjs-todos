import { GetServerSideProps } from "next";
import { Footer } from "../components/Footer";
import { ToDos } from "../components/to-dos/ToDos";

interface PageProps {
  renderDate: string;
}

export default function Index({ renderDate }: PageProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-size: 16px;
        }

        body {
          margin: 0;
        }

        h1 {
          margin: 2rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1em;
        }
      `}</style>

      <div className="container">
        <h1>My To-Dos</h1>

        <main>
          <ToDos />
        </main>

        <Footer renderDate={renderDate} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  return {
    props: {
      renderDate: new Date().toUTCString(),
    },
  };
};
