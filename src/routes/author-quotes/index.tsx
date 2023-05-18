import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$, useLocation, Link } from "@builder.io/qwik-city";
import { BackArrow } from "~/components/icons/icons";
import { Quote } from "~/components/quote";
import { getQuotesByAuhor } from "~/services/quotes";

export const useQuotes = routeLoader$(async ({ query, redirect }) => {
  const authorNAme = query.get('author')
  if (!authorNAme) redirect(301, '/')
  const quotesByAuthor = await getQuotesByAuhor(authorNAme)
  return quotesByAuthor
})

export default component$(() => {

  const quotes = useQuotes()
  const location = useLocation()

  return (
    <div class="max-w-[714px]">

      <div class="pl-24 text-white flex gap-10 items-center pb-[100px]">
        <Link href="/">
          <BackArrow />
        </Link>
        <h1 class="font-['Raleway-SemiBold'] text-[36px]">{location.url.searchParams.get('author')}</h1>
      </div>

      <div class="flex flex-col gap-20">
        {quotes.value.map(quote => (
          <Quote key={quote._id} quote={quote.quoteText} />
        ))}
      </div>
    </div>
  )
});

export const head: DocumentHead = {
  title: 'Quotes by Author',
  meta: [
    {
      name: '',
      content: 'Get list quotes by author provided',
    },
  ],
};