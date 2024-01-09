import { Component, For, Show } from 'solid-js';
import './Todo.scss';
import { createStore } from 'solid-js/store';

const Todo: Component = () => {
  const [data, setData] = createStore<TodoData>({
    completed: false,
    priority: 'Z'.charCodeAt(0),
    description: 'test todo',
    projects: [],
    contexts: [],

    raw: '',
  });

  const updateRaw = () => {};

  const parseRaw = () => {
    const args = data.raw.split(' ');
    const newData: TodoData = {
      ...data,
    };

    // token counter
    let i = 0;

    // completion
    if (args[i] == 'x') {
      newData.completed = true;
      i += 1;

      if (i >= args.length) {
        return null;
      }
    }

    // priority
    if (/^\([A-Z]\)$/.test(args[i])) {
      newData.priority = args[i].charCodeAt(1);

      i += 1;
      if (i >= args.length) {
        return null;
      }
    }

    const parseDate = (str: string) => {
      if (/^\d{4}-\d{2}-\d{2}$/.test(str)) {
        // rough check
        const date = Date.parse(str);

        if (!isNaN(date)) {
          return new Date(date);
        }

        return null;
      }

      return null;
    };

    // creation date
    let creationDate = parseDate(args[i]);
    if (creationDate) {
      data.creationDate = creationDate;

      i += 1;
      if (i >= args.length) {
        return null;
      }
    }
  };

  return (
    <div class="todo">
      <div class="main">
        <div class="left">
          <div class="core">
            <div class="toggle"></div>
            <div class="description">{data.description}</div>
          </div>
          <Show when={data.contexts}>
            <ul role="list" class="context">
              <For each={data.contexts}>
                {(context) => {
                  return <li>{context}</li>;
                }}
              </For>
            </ul>
          </Show>
        </div>
        <div class="right">
          <div class="priority">
            <div onClick={() => setData('priority', (prev) => prev - 1)}>
              {String.fromCharCode(data.priority)}
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="dates">
          {data.completionDate
            ? '7 days ago, due in 5 days'
            : 'Unspecified date'}
        </div>
        <div class="buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
