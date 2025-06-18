import { createRootRoute, Link, Outlet, useLoaderData } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { API_URL, API_TOKEN } from '../constants/constants'

type Project = {
  id: number
  documentId: string
  Title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${API_URL}/Projects`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
  if (!res.ok) throw new Error('cant fetch projects')
  const json = await res.json()
  return json.data
}

export const Route = createRootRoute({
  loader: () => fetchProjects(), 
  component: RootComponent,
})

function RootComponent() {
  const projects = useLoaderData({ from: Route.id })

  return (
    <>
      <div className="p-2 flex flex-col gap-2 sidebar">
        <Link to="/" className="[&.active]:font-bold">Home</Link>
        <p className="projects_title">Projects</p>
        <div className="project_list">
          {projects.slice(0, 3).map((project) => (
            <Link
              key={project.id}
              to="/projects/$id"
              params={{ id: String(project.id) }}
              className="project_list__item"
            >
              {project.Title}
            </Link>
          ))}
        </div>
        <Link to="/about" className="[&.active]:font-bold">About</Link>
      </div>

      <div className="seperating-line"></div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}