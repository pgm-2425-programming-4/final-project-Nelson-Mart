import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { API_URL } from '../constants/constants'

type Project = {
  id: number
  backlog_item: string
}

export default function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then(res => res.json())
      .then(data => {
        if (data && data.data) {
          setProjects(data.data)
        }
      })
      .catch(err => console.error('Fout bij laden:', err))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projecten</h1>
      <ul className="space-y-2">
        {projects.map(project => (
          <li key={project.id}>
            <Link
              to="/projects/$id"
              params={{ id: String(project.id) }}
              className="text-blue-600 underline hover:text-blue-800"
            >
              {project.backlog_item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}