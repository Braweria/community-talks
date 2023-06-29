import { component$ } from '@builder.io/qwik';

import styles from './header.module.css';

export const Header = component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.wrapper}>
        <ul>
          <li>
            <a
              href="https://qwik.builder.io/docs/components/overview/"
              target="_blank">
              Docs
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/examples/introduction/hello-world/"
              target="_blank">
              Examples
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/tutorial/welcome/overview/"
              target="_blank">
              Tutorials
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});