import { createEffect, createMemo, createSignal, For, onCleanup, onMount, Show } from "solid-js";

export default function SimpleComponent() {
  const [count, setCount] = createSignal(10);
  const [cats, setCats] = createSignal([
    { emoji: '🐱', name: 'Cat' },
    { emoji: '😿', name: 'Crying Cat' },
    { emoji: '🙀', name: 'Surprise Cat' },
    { emoji: '😾', name: 'Angry Cat' }
  ]);
  createEffect(() => { 
    console.log(`Hi from createEffect 👋🏽, count: ${count()}`)
  });

  const squared = () => count() ** 2;
  const squaredMemo = createMemo(() => { count() ** 2 });
  onMount(() => {
    console.log(`Hi from onMount 👋🏽`)
  });
  onCleanup(() => {
    console.log(`Hi from onCleanup 👋🏽`)
  })

  function doMagicStuff(el, accessor) {
    console.log('Magic 🪄');
  }
  return (
    <> 
      <p>Count:  {count()}</p>
      <p>Square: {squared()} </p>
      <p>Memonize: {squaredMemo()} </p>
      <button onClick={() => { setCount(count() + 1) }}>Add one more</button>
      <button use:doMagicStuff>Magic Button</button>
      <Show when={count() > 10}>
          <p>Now counter is bigger that 10</p>
      </Show>

      <For each={cats()}>{(cat, i) =>
        <li>
          {cat.emoji}: {cat.name}
        </li>
      }</For>
    </>
  )
}