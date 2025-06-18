import { PaginatedBacklog } from "../../components/app/paginated-student-list/paginatedBacklog";
import { Backlog } from "../../components/app/paginated-student-list/paginatedBacklog/pagination/Backlog";

export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div style={{ margin: "2rem" }}>
        <PaginatedBacklog />
      </div>
    );
}
