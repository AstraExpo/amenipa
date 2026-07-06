import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin')({
  beforeLoad: async ({ location }) => {
    // Replace with your actual authentication logic later
    const isAuthenticated = false
    
    // if (!isAuthenticated) {
    //   throw redirect({
    //     to: '/signin',
    //     search: { redirect: location.href },
    //   })
    // }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 border-r bg-white p-4">Admin Sidebar</aside>
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  )
}
