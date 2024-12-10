import { useQuery } from "@tanstack/react-query"

export default function DashboardPageContent() {
  const {} = useQuery({
    queryKey: ["user-event-categories"],
    queryFn: async () => {},
  })
}
