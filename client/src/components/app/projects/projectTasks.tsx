import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { API_URL, API_TOKEN } from '../../../constants/constants'
import { ProjectStatus } from './projectStatus'

type Project = {
  id: number
  documentId: string
  Title: string
}

type Task = {
  id: number
  documentId: string
  title: string
  description: string
  labels: string
  task_status: string
  project?: Project
}

export function ProjectTasks({ documentId }: { documentId: string }) {
  const queryClient = useQueryClient()
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  const { data: tasks, isLoading, isError } = useQuery<Task[]>({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/tasks?populate=project`, {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
      })
      const json = await res.json()
      return json.data
    },
  })

const updateStatusMutation = useMutation({
  mutationFn: async (newStatus: string) => {
    if (!selectedTask) return
    const res = await fetch(`${API_URL}/tasks/${selectedTask.documentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          task_status: newStatus,
        },
      }),
    })

    if (!res.ok) {
      const errorText = await res.text()
      throw new Error(`Failed to update status: ${res.status} ${errorText}`)
    }
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['tasks'] })
    setSelectedTask(null)
  },
})


  if (isLoading) return <p>Loading tasks...</p>
  if (isError || !tasks) return <p>Could not load tasks.</p>

  const relatedTasks = tasks.filter(
    task =>
      task.project?.documentId === documentId &&
      task.task_status.toLowerCase() !== 'backlog'
  )

  const statusOptions = ['to_do', 'in_progress', 'ready_for_review', 'done']

  return (
    <>
      <ProjectStatus tasks={relatedTasks} onTaskClick={setSelectedTask} />

      {selectedTask && (
        <div className="dialog" onClick={() => setSelectedTask(null)}>
          <div className="dialog_task" onClick={(e) => e.stopPropagation()}>
            <button className="dialog_task__close" onClick={() => setSelectedTask(null)}>×</button>
            <h2 className="dialog__title">Title:{selectedTask.title}</h2>
            <p className="dialog__text">Description: {selectedTask.description}</p>
            <p className="dialog__text">Labels: {selectedTask.labels}</p>
            <p className="dialog__text">Status: {selectedTask.task_status.replace(/_/g, ' ')}</p>
            <p className="dialog__text">Project: {selectedTask.project?.Title}</p>

            <div className="dialog__status-links">
              <p className="dialog__text font-bold">Change status:</p>
              {statusOptions
                .filter(status => status !== selectedTask.task_status)
                .map(status => (
                  <button
                    key={status}
                    onClick={() => updateStatusMutation.mutate(status)}
                    className="status-link"
                  >
                    {status.replace(/_/g, ' ')}
                  </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}