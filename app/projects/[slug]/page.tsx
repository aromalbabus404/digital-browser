import { projectsData } from "@/data/projects";
import ProjectDetailView from "@/components/digital/ProjectDetailView";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Master Pools Project Portfolio`,
    description: project.shortDesc,
    openGraph: {
      title: project.title,
      description: project.shortDesc,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded glass-panel hover:border-aqua text-white text-xs font-mono uppercase"
        >
          <ArrowLeft className="w-4 h-4 text-aqua" />
          <span>Open Full Digital Browser</span>
        </Link>
      </div>
      <ProjectDetailView project={project} />
    </div>
  );
}
