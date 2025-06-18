import { useEffect, useState } from "react";
import { Pagination } from "./paginatedBacklog/pagination/pagination.jsx";
import { Backlog } from "./paginatedBacklog/pagination/Backlog.jsx";
import { API_TOKEN, API_URL } from "../../../constants/constants.js";
import { TaskList } from "./task-list/task-list.jsx";

const ITEMS_PER_PAGE = 10;

export function PaginatedBacklog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${API_URL}/tasks`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch tasks");
        const data = await response.json();
        console.log(data.data)
        setTasks(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  function handlePageChanged(page) {
    setCurrentPage(page);
  }

  const pageCount = Math.ceil(tasks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTasks = tasks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <TaskList tasks={currentTasks} />
      </div>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChanged={handlePageChanged}
      />
    </>
  );
}

