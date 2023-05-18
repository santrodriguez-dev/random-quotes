import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <button>Click me</button>
    </>
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
