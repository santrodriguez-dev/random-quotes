import { component$ } from '@builder.io/qwik';
import { type DocumentHead, routeLoader$, useLocation, Link } from '@builder.io/qwik-city';
import { RigthArrow } from '~/components/icons/icons';
import { Quote } from '~/components/quote';
import { getRandomQuote } from '~/services/quotes';
import type { QuoteData } from '~/types/quotes';

export const useData = routeLoader$<QuoteData>(async () => await getRandomQuote())

export default component$(() => {

  const quote = useData()
  const { isNavigating } = useLocation()

  return (
    <section class="max-w-[714px]">

      {quote &&
        <>
          <Quote quote={quote.value?.quoteText} />

          <div class="ml-28 px-8 py-12 mt-20 flex justify-between items-center cursor-pointer">
            <div class="flex flex-col">
              <span class="text-[24px] font-['Raleway-SemiBold'] mb-5">{quote.value?.quoteAuthor}</span>
              <small class="text-[14px] text-[#828282]]">{quote.value?.quoteGenre}</small>
            </div>
            <Link href={`/author-quotes?author=${quote.value.quoteAuthor}`}>
              <span>{isNavigating ? 'Loading...' : <RigthArrow />}</span>
            </Link>
          </div>
        </>
      }




    </section>
  );
});

export const head: DocumentHead = {
  title: 'Random quotes',
  meta: [
    {
      name: 'Get a random quote from an author',
      content: '',
    },
  ],
};
