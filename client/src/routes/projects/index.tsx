export const Route = createFileRoute({
  component: RouteComponent,
})

export function RouteComponent() {
  return (
    <nav className="projects">
    <p>Hello from projects!</p>
    <div className="selection_menu">
      <div className="filter">
        <p>filter:</p>
        <input className="filter__input" type="text"  /> 
      </div>
      <div className="active_project">
        <p className="active_project__text">Active Project:</p>
      </div>
      <button className="add_task">
        <p className="add_task__text has-text-black-soft">Add Task</p>
      </button>
      <a href="projects/backlog">View backlog</a>
    </div>
    </nav>
    
  );
}
