Create a next.js to-do app at github.com/yourusername/nextjs-todos.

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
    - Create a netlify account linked to your github (if you don't have one)
    - create `./netlify.toml` with contents:
        ```toml
        [build]
            command = "npm run build"
            publish = ".next"

        [[plugins]]
            package = "@netlify/plugin-nextjs"
        ```
    - Install [netlify cli](https://docs.netlify.com/cli/get-started/)
    - `netlify login`
    - `netlify init`
        - Create a new site titled `webdev-yourusername-todos` under your personal team
        - Ignore `Error: Failed retrieving GitHub repository information with error`
    - `netlify build`
    - `netlify deploy --prod`
    - Your site should now be live at `webdev-yourusername-todos.netlify.app`
