import { API_URL, API_TOKEN } from "../../../constants/constants";

export async function fetchProjectById(id: string) {
  // Fetch project by filtering id or documentId instead of direct /projects/:id
  const res = await fetch(`${API_URL}/projects?filters[id][$eq]=${id}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  const json = await res.json();

  if (json.data.length === 0) return null;

  return json.data[0]; // return the first matched project
}