import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const interviewCovers = [
  "/covers/adobe.png",
  "/covers/amazon.png",
  "/covers/facebook.png",
  "/covers/hostinger.png",
  "/covers/pinterest.png",
  "/covers/quora.png",
  "/covers/reddit.png",
  "/covers/skype.png",
  "/covers/spotify.png",
  "/covers/telegram.png",
  "/covers/tiktok.png",
  "/covers/yahoo.png",
];

export function getRandomInterviewCover() {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return interviewCovers[randomIndex];
}

const techLogos: Record<string, string> = {
  javascript: "/tech-icons/javascript.png",
  typescript: "/tech-icons/typescript.png",
  python: "/tech-icons/python.png",
  java: "/tech-icons/java.png",
  "c++": "/tech-icons/cpp.png",
  "c#": "/tech-icons/csharp.png",
  go: "/tech-icons/go.png",
  rust: "/tech-icons/rust.png",
  react: "/tech-icons/react.png",
  vue: "/tech-icons/vue.png",
  angular: "/tech-icons/angular.png",
  node: "/tech-icons/node.png",
  express: "/tech-icons/express.png",
  django: "/tech-icons/django.png",
  flask: "/tech-icons/flask.png",
  spring: "/tech-icons/spring.png",
  mysql: "/tech-icons/mysql.png",
  postgresql: "/tech-icons/postgresql.png",
  mongodb: "/tech-icons/mongodb.png",
  redis: "/tech-icons/redis.png",
  docker: "/tech-icons/docker.png",
  kubernetes: "/tech-icons/kubernetes.png",
  aws: "/tech-icons/aws.png",
  gcp: "/tech-icons/gcp.png",
  azure: "/tech-icons/azure.png",
  git: "/tech-icons/git.png",
  linux: "/tech-icons/linux.png",
  html: "/tech-icons/html.png",
  css: "/tech-icons/css.png",
  // Add more as needed
};

export async function getTechLogos(techStack: string[]): Promise<Array<{ tech: string; url: string }>> {
  return techStack.map(tech => ({
    tech,
    url: techLogos[tech.toLowerCase()] || "/tech-icons/default.png"
  }));
}
