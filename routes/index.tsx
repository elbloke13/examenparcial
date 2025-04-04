import { Handlers, PageProps } from "$fresh/server.ts";


type Phone = {

  number: number,
  country:  string;
}

type PhoneProps = {

  phone: number; 
  country: string;
}

type Data = {
    results: string[];
    query: string;
}

const PHONES = ["645712345", "823456908", "30876543", "915018234", "745689324"];


export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";


    const results = PHONES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};



export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <div>
      <form>
        <input type="text" name="q" value={query} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((name) => <li key={name}>{name}</li>)}
      </ul>
    </div>
  );
}