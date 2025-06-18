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

type ProjectStatusProps = {
  tasks: Task[]
  onTaskClick?: (task: Task) => void
}

export function ProjectStatus({ tasks, onTaskClick }: ProjectStatusProps) {
  const status = ["to_do", "in_progress", "ready_for_review", "done"]

  return (
    <div className="project_status">
      {status.map(statusKey => {
        const filtered = tasks.filter(task => task.task_status === statusKey)

        return (
          <div key={statusKey} className="project_status__section">
            <p className="project_status__text">{statusKey.replace(/_/g, ' ')}</p>
            {filtered.length === 0 ? (
              <p className="text-gray-400">No tasks</p>
            ) : (
              filtered.map(task => (
                <div
                  key={task.id}
                  className="task_card"
                  onClick={() => onTaskClick?.(task)}
                >
                  <h2 className="task_card__title">{task.title}</h2>
                  <p className="task_card__text">{task.description}</p>
                  <div className="task_card_labels">{task.labels}</div>
                </div>
              ))
            )}
          </div>
        )
      })}
    </div>
  )
}
