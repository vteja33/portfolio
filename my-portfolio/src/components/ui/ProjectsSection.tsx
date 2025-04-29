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


      const repoMap = new Map<string, string>([
        ["Mental-Health-Bot", "Mental Health Chatbot"],
        ["portfolio", "Portfolio Website"],
        ["Data-Analysis-Python", "Housing Data Analysis"],
        ["deep-learning-project", "Image Classification CNN"],
        ["FoodLink", "Food Link"], 
        ["ibm-ds-capstone", "SpaceX Launch Prediction Project"],
        ["stock-sight", "Stock Sight"],
      ]);

      const repoImageMap = new Map<string, string>([
        ["Data-Analysis-Python", "housing_analysis.png"],
        ["ibm-ds-capstone", "data_science_project.png"],
        ["deep-learning-project", "image_classification.png"],
      ]);

    useEffect(() => {
      

        const fetchRepos = async (): Promise<void> => {
            try{
                const res = await fetch("https://api.github.com/users/vteja33/repos")
                const data: Repo[] = await res.json()
                console.log(data)


                const allowedRepos = [
                  "Mental-Health-Bot",
                  "Data-Analysis-Python",
                  "deep-learning-project",
                  "FoodLink",
                  "ibm-ds-capstone",
                  "stock-sight",
                ];

                
                console.log(repoMap)
                const filtered = data
                  .filter(repo => allowedRepos.includes(repo.name))
                  .sort((a,b) => a.name.localeCompare(b.name))

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
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
          { loading ? (
            <p className="text-center text-gray-600">Loading Projects</p>
          ) : (
            <div className="grid md:grid-cols-1 gap-6">
                {repos.map((repo) => (
                    <Card key={repo.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle>{repoMap.get(repo.name) || repo.name}</CardTitle>
                            {repoImageMap.get(repo.name) && 
                              <img 
                                src={`${import.meta.env.BASE_URL}${repoImageMap.get(repo.name)}`}
                                alt={`${repo.name} preview`}
                                className="mx-auto w-full max-w-sm max-h-64 object-cover rounded-xl mt-4"
                                >
                              </img>}
                            <CardDescription>{repo.description || "No Description Available."}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {repo.language && (
                                <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full mb-2 mr-2
                                    ${getLanguageColor(repo.language)}`}>Language: {repo.language == "Jupyter Notebook" ? "Python" : repo.language}</span>
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
        <div className="flex justify-center mt-10">
          <a href="https://github.com/vteja33"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white border border-gray-300 px-5 py-2 rounded-full shadow-sm hover:shadow-md transition text-gray-800 text-sm font-medium"
            >
              <img src={`${import.meta.env.BASE_URL}github-mark.svg`} alt="GitHub" className="w-5 h-5" />
              <span className="text-sm font-medium text-gray-800">View All Projects</span>
          </a>
        </div>
      </section>
    )
}