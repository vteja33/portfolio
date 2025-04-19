import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"


type Repo = {
    id: number
    name: string
    description: string
    html_url: string
    fork: boolean
    language: string | null
}

export default function ProjectsSection() {
    const [repos, setRepos] = useState<Repo[]>([])
    const [loading, setLoading] = useState(true)

    const getLanguageColor = (language: string) => {
        switch (language.toLowerCase()) {
          case "javascript":
            return "bg-yellow-300 text-yellow-900";
          case "typescript":
            return "bg-blue-200 text-blue-900";
          case "python":
            return "bg-green-200 text-green-900";
          case "jupyter notebook":
            return "bg-green-200 text-green-900";
          case "html":
            return "bg-red-200 text-red-900";
          case "css":
            return "bg-purple-200 text-purple-900";
          case "java":
            return "bg-orange-200 text-orange-900";
          case "c++":
            return "bg-pink-200 text-pink-900";
          default:
            return "bg-gray-200 text-gray-800";
        }
      }
      

    useEffect(() => {
        const fetchRepos = async (): Promise<void> => {
            try{
                const res = await fetch("https://api.github.com/users/vteja33/repos")
                const data: Repo[] = await res.json()
                console.log(data)

                const filtered = data.filter(repo => !repo.fork).sort((a,b) => a.name.localeCompare(b.name))

                setRepos(filtered)
            }
            catch(error) {
                console.error("Failed to fetch GitHub Repos", error)
            } finally {
                setLoading(false)
            }
        }

        fetchRepos()
    }, [])

    return (
      <section id="projects" className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
          { loading ? (
            <p className="text-center text-gray-600">Loading Projects</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
                {repos.map((repo) => (
                    <Card key={repo.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle>{repo.name}</CardTitle>
                            <CardDescription>{repo.description || "No Description Available."}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {repo.language && (
                                <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full mb-2 mr-2
                                    ${getLanguageColor(repo.language)}`}>Language: {repo.language}</span>
                            )}
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                View on GitHub →
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>
          )}
        </div>
      </section>
    )
}