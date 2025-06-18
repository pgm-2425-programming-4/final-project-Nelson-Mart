import { useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'

import { ProjectTasks } from '../../components/app/projects/projectTasks'
import { fetchProjectById } from '../../components/app/projects/fetchById'
import { ProjectNavigation } from '../../components/app/projects/projectNavigation'


function RouteComponent() {
  const { id } = useParams({ from: '/projects/$id' });

  const { data: project, isLoading, isError } = useQuery({
    queryKey: ['project', id],
    queryFn: () => fetchProjectById(id),
  });

  if (isLoading) return <div>Loading project...</div>;
  if (isError || !project) return <div>Project not found</div>;

  return (
    <div className="project_layout">
      <ProjectNavigation />
      <ProjectTasks documentId={project.documentId} />
    </div>
  );
}

export const Route = createFileRoute({
  component: RouteComponent,
});