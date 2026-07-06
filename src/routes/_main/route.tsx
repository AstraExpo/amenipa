import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_main')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b p-4">Public Navigation</header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t p-4 text-center">Public Footer</footer>
    </div>
  )
}
