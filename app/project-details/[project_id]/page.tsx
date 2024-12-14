

export default async function ProjectDetails({ params }: { params: Promise<{ project_id: number | string; }> }) {
    const { project_id } = await params;

    return (
        <div>Fuck world { project_id }</div>
    )
}