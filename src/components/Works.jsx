import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { personalInfo, projects } from "../constants";
import { Tilt } from "react-tilt";
import { demo } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  hosted_link,
}) => {
  const hasHostedLink = Boolean(hosted_link);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full h-full"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="h-full w-full"
      >
        <div className="bg-tertiary p-5 rounded-2xl h-full flex flex-col">
          <div
            className={`relative w-full h-[230px] ${
              hasHostedLink ? "cursor-pointer" : "cursor-default"
            }`}
            onClick={() => hasHostedLink && window.open(hosted_link, "_blank")}
          >
            <img
              src={image}
              alt="project-image"
              className="w-full h-full object-cover rounded-2xl"
            />

            {hasHostedLink && (
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(hosted_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={demo}
                    alt="source-code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-1 flex-col">
            <div>
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p
                className="mt-2 min-h-[182px] text-secondary text-[14px] leading-[26px]"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 7,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {description}
              </p>
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {personalInfo.projectsIntro}
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
