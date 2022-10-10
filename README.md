Create a next.js to-do app at github.com/yourusername/nextjs-todos
Example: https://ibgrav-nextjs-todos.netlify.app/

The requirements are:

1. Must be typescript
2. Reuse and componentize where appropriate
3. Style components with any CSS solution
2. Page is a catch-all route and describes `interface PageProps { renderDate: string }`
3. Page is SSR and retrieves PageProps to display the time & date of render to the user
4. Create API route `/api/swapi`
    - fetch `https://swapi.dev/api/people`
    - return one random person
    - include appropriate error handling
    - include an interface shared with front-end
5. Create footer component that fetches from `/api/swapi` and displays the person's name
6. Persist to-do data in browser localStorage
7. Basic CRUD for to-dos:
    - Create a new to-do
    - Read all to-dos
    - Update a to-do
    - Delete a to-do
8. Deploy to netlify
    - url: yourusername-nextjs-todos.netlify.app
    - continuous deployment through github integration