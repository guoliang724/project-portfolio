import ProjectDescription from "../shared/project-description";
import ProjectImage from "../shared/project-image";
import classpro from "@/assets/classpro.png";
import esaycleanone from "@/assets/esayClean-1.png";
import esaycleantwo from "@/assets/esayClean-2.png";
import esayshopone from "@/assets/esayshop-1.png";
import esayshoptwo from "@/assets/esayshop-2.png";
import esayshopthree from "@/assets/esayshop-3.png";
import flappyBirdone from "@/assets/flappy bird-1.png";
import flappyBirdtwo from "@/assets/flappy_phone.png";

export default function Work() {
  const projects = [
    {
      projectDescription:
        "This is a team work project. It is a SASS which focuses on teaching scenarios and facilitates interactive teaching through collaborative classrooms. My responsibility was to design and implement remote audio and video features as well as the viewport following feature.",
      projectName: "Bytello Class Pro",
      tags: ["React", "Typescript", "Node.js", "Electron"],
      link: "https://www.bytello.com/classpro",
      image: classpro,
      buttonText: "Experience it now",
    },
    {
      projectDescription:
        "EasyClean is a sleek online store designed for users to easily browse, search, and purchase cleaning products. It offers a smooth shopping experience with features like user registration and login, product filtering, shopping cart functionality, and a secure checkout flow. The site also includes an admin dashboard for managing products and categories, along with modern animations for an engaging and responsive user interface.",
      projectName: "eCommerce website for clearning",
      tags: ["Asp.net Web Api", "Typescript", "React", "Mysql", "Stripe"],
      link: "https://esayclean.azurewebsites.net/",
      image: [esaycleanone, esaycleantwo],
      buttonText: "Visit it now",
    },
    {
      projectDescription:
        "EasyShop is a responsive e-commerce platform built with a focus on modern frontend practices. It features secure user authentication using Auth.js, robust form validation powered by Zod, and clean, responsive styling with Tailwind CSS. The site uses a form-handling library tailored for Next.js, making the checkout and login processes smooth and reliable. This project showcases my skills in building scalable, user-friendly interfaces with a focus on modern development tools.",
      projectName: "eCommerce website for kitchen",
      tags: ["Next.js", "Auth.js", "Prisma", "Stripe", "Shadcn"],
      link: "https://esayshop-five.vercel.app/",
      image: [esayshopone, esayshoptwo, esayshopthree],
      buttonText: "Visit it now",
    },
    {
      projectDescription:
        "This browser-based Flappy Bird game was built to demonstrate my skills in modern JavaScript (ES6) and CSS3. The game logic is written using ES6 features like classes, arrow functions, and event-driven programming for a clean and modular structure. On the visual side, CSS3 is used extensively to create smooth animations, custom keyframe transitions, and responsive layouts. The background includes a layered parallax effect, and subtle shadows and transitions are applied to game elements for added depth and polish. The game is fully playable across devices, showcasing both functional and visual coding skills.",
      projectName: "Flappy Bird Clone",
      tags: ["ES6", "CSS3"],
      link: "https://guoliang724.github.io/workout4-flappy-bird/",
      image: [flappyBirdone, flappyBirdtwo],
      buttonText: "Play it now",
      slot: "flappybird",
    },
  ];

  const projectsComponents = projects.map((project, index) => {
    let dirction = "left";
    let background = "bg-sky-50 dark:bg-[#D1A9CD]";
    if (index % 2 === 1) {
      dirction = "right";
      background = "";
    }
    return (
      <div
        key={index}
        className={`my-8 w-full grid grid-cols-1 md:grid-cols-2 justify-center gap-8 ${background}`}
      >
        <div className={`flex justify-center items-center p-10`}>
          <ProjectDescription
            projectDescription={project.projectDescription}
            projectName={project.projectName}
            tags={project.tags}
            link={project.link}
            buttonText={project.buttonText}
            direction={dirction}
          ></ProjectDescription>
        </div>
        <ProjectImage
          image={project.image}
          direction={dirction}
          slot={project.slot}
        ></ProjectImage>
      </div>
    );
  });

  return (
    <section id="section-work" className="flex flex-col gap-4">
      {projectsComponents}
    </section>
  );
}

// bg-[#B8CAF4] dark:bg-[#D1A9CD]
