import { component$, Slot, useStyles$ } from '@builder.io/qwik';

import styles from './styles.css?inline';

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <main class="min-h-screen grid place-content-center py-16">
        <Slot />
      </main>
    </>
  );
});
