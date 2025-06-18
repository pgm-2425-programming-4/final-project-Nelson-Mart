import { Link } from "@tanstack/react-router";
import { API_URL, API_TOKEN } from "../constants/constants";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

export type Project = {
  id: number;
  documentId: string;
  Title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(
    `${API_URL}/Projects`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const json = await res.json();
  console.log(json.data);
  return json.data;
}


export const Route = createFileRoute({
  loader: () => fetchProjects(),
  component: Index,
});

function Index() {
  const { data: projects, isLoading, isError } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  if (isLoading) return <div>Loading projects...</div>;
  if (isError) return <div>Failed to load projects.</div>;

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <nav>
        <p>Select a project:</p>
        <ul>
          {projects?.map((project) => (
            <li key={project.id}>
              <Link to="/projects/$id" params={{ id: String(project.id) }}>
                {project.Title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}