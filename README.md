# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)


#### Development Server
    pnpm tauri dev
#### Build Project
    pnpm build 
#### Tailwind css output file watch
    npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
#### Shadcn to install for React
    https://ui.shadcn.com/docs/installation/manual


#### Pocketbase serve
First navigate inside db folder using:
```
cd db
```
Start pocketbase server using below command:
```
./pocketbase.exe serve
```


# Apps
- Frontend: React is used with Shadcn (UI components), Tabulator (advanced table/grid features), and Tailwind CSS for styling.
- Backend: Tauri for OS-level features (printing, file access), while PocketBase is used directly in the frontend for database management and real-time updates.
- Authentication: PocketBase is secured with user authentication tokens.
### Architecture
- Use PocketBase directly in the frontend for CRUD and real-time updates.
- Use Tauri's Rust backend for OS-level features (printing, file access).
- Secure PocketBase with proper authentication (e.g., user authentication tokens).
```
[React Frontend] <---> [PocketBase Backend]
                  \
                   +--> [Tauri Backend for Printing, File Access]
```