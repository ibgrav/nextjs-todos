# Next.js To-Do App

Create a [next.js](https://nextjs.org/docs/api-reference/create-next-app) to-do app at github.com/yourusername/nextjs-todos \
Example: https://ibgrav-nextjs-todos.netlify.app/

## Requirements

1. Must be typescript
2. Reuse and componentize where appropriate
3. Style components with [TailwindCSS](https://tailwindcss.com/docs/guides/nextjs)
2. Page is a catch-all route and requires
    ```ts
    interface PageProps {
        renderDate: string;
    }
    ```
3. Page is SSR and retrieves PageProps to display the date of render to the user
4. Create API route `/api/swapi`
    - fetch `https://swapi.dev/api/people`
    - return one random person
    - include appropriate error handling
    - include an interface shared with front-end
5. Create footer component that fetches from `/api/swapi` and displays the person's name
6. Persist to-do data in browser [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
7. Basic CRUD for to-dos:
    - Create a new to-do
    - Read all to-dos
    - Update a to-do
    - Delete a to-do
8. Deploy live site to [netlify](https://www.netlify.com/)
    - url: yourusername-nextjs-todos.netlify.app
    - continuous deployment through github integration