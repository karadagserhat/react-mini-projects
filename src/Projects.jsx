import { useFetchProjects } from './fetchProjects';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import Loading from './Loading';

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>React Mini Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, image, url, title, githubUrl } = project;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={image} alt={title} className="img" />
              <div className="card-text">
                <div className="card-title">{title}</div>
                <div className="card-link">
                  <a href={url} target="_blank">
                    <TbWorldWww />
                  </a>
                  <a href={githubUrl} target="_blank">
                    <FaGithubSquare />
                  </a>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
