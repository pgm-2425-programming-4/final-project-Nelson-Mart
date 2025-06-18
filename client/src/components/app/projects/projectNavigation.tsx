import React, { useState } from 'react'
import { useParams } from '@tanstack/react-router'
import { API_URL, API_TOKEN } from '../../../constants/constants'

export function ProjectNavigation() {
  const { id: projectId } = useParams({ from: '/projects/$id' })
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    labels: '',
    task_status: 'to_do',
  })

  const toggleForm = () => setShowForm(prev => !prev)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
          data: {
            ...formData,
            project: projectId,
          },
        }),
      })
      if (!res.ok) throw new Error('Failed to create task')
      alert('Task created successfully!')
      setFormData({ title: '', description: '', labels: '', task_status: 'to_do' })
      setShowForm(false)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <nav className="projects">
      <div className="selection_menu">
        <div className="filter">
          <p>filter:</p>
          <input className="filter__input" type="text" />
        </div>
        <div className="active_project">
          <p className="active_project__text">Active Project:</p>
        </div>
        <button className="add_task" onClick={toggleForm}>
          <p className="add_task__text has-text-black-soft">Add Task</p>
        </button>
        <a href="backlog">View backlog</a>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="add_task_form">
          <input
            type="text"
            name="title"
            placeholder="Task title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Task description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="labels"
            placeholder="Labels"
            value={formData.labels}
            onChange={handleChange}
          />
          <select name="task_status" value={formData.task_status} onChange={handleChange}>
            <option value="backlog">Backlog</option>
            <option value="to_do">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="ready_for_review">Ready for Review</option>
            <option value="done">Done</option>
          </select>
          <button type="submit">Create Task</button>
        </form>
      )}
    </nav>
  )
}
