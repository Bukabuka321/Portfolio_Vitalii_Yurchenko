interface IProjectItem {
  name: string;
  description: string;
}

const ProjectItem = ({ name, description }: IProjectItem) => {
  return (
    <div>
      <div className="px-16">
        <h2 className="text-4xl font-bold mb-6">{name}</h2>
        <p className="font-sans">{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
