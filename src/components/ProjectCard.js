export default function ProjectCard({
  image,
  title,
  description,
}) {
  return (
    <div className="project-card">

      <img
        src={image}
        alt={title}
        className="project-image"
      />

      <div className="project-content">

        <h3>{title}</h3>

        <p>{description}</p>

      </div>

    </div>
  );
}