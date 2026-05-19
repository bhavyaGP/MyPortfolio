import { RiReactjsLine, RiNodejsLine } from "react-icons/ri";
import { SiMongodb, SiMysql, SiPostgresql, SiGithub, SiGit, SiDocker,
         SiFlask, SiTypescript, SiPostman, SiPrisma, SiSupabase,
         SiLangchain, SiExpress } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "framer-motion";

const TECH_ROW1 = [
  { icon: <RiReactjsLine   className="text-4xl text-cyan-400" />,      label: "React.js"    },
  { icon: <RiNodejsLine    className="text-4xl text-green-400" />,     label: "Node.js"     },
  { icon: <SiExpress       className="text-4xl text-neutral-200" />,   label: "Express.js"  },
  { icon: <SiFlask         className="text-4xl text-neutral-200" />,   label: "Flask"       },
  { icon: <SiTypescript    className="text-4xl text-blue-500" />,      label: "TypeScript"  },
  { icon: <TbBrandCpp      className="text-4xl text-blue-400" />,      label: "C++"         },
  { icon: <SiMongodb       className="text-4xl text-green-500" />,     label: "MongoDB"     },
  { icon: <SiMysql         className="text-4xl text-blue-400" />,      label: "MySQL"       },
];

const TECH_ROW2 = [
  { icon: <SiPostgresql    className="text-4xl text-blue-600" />,      label: "PostgreSQL"  },
  { icon: <DiRedis         className="text-4xl text-red-500" />,       label: "Redis"       },
  { icon: <SiSupabase      className="text-4xl text-emerald-400" />,   label: "Supabase"    },
  { icon: <SiPrisma        className="text-4xl text-neutral-300" />,   label: "Prisma"      },
  { icon: <SiDocker        className="text-4xl text-blue-500" />,      label: "Docker"      },
  { icon: <SiGit           className="text-4xl text-red-400" />,       label: "Git"         },
  { icon: <SiGithub        className="text-4xl text-neutral-200" />,   label: "GitHub"      },
  { icon: <SiPostman       className="text-4xl text-orange-500" />,    label: "Postman"     },
  { icon: <SiLangchain     className="text-4xl text-emerald-300" />,   label: "LangChain"   },
];

const TechCard = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 liquid-glass rounded-2xl px-5 py-4 mx-3 min-w-[90px] cursor-default select-none hover:scale-105 transition-transform duration-200">
    {icon}
    <span className="text-neutral-400 text-xs font-medium whitespace-nowrap">{label}</span>
  </div>
);

const MarqueeRow = ({ items, direction = "left" }) => {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee-wrap overflow-hidden w-full`}>
      <div className={`flex w-max ${direction === "left" ? "marquee-left" : "marquee-right"}`}>
        {doubled.map((item, i) => (
          <TechCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

const TechnologiesAndTools = () => {
  return (
    <div className="border-b border-white/10 pb-20 mb-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Tech <span className="bg-gradient-to-r from-neutral-200 to-neutral-500 bg-clip-text text-transparent">Stack</span>
        </h2>
        <p className="text-neutral-500 text-sm">Technologies & tools I work with daily</p>
        <div className="w-16 h-1 bg-white/20 mx-auto rounded-full mt-3" />
      </motion.div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col gap-6"
      >
        {/* Left — edge fades */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-black/80 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-black/80 to-transparent" />
          <MarqueeRow items={TECH_ROW1} direction="left" />
        </div>

        {/* Right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-black/80 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-black/80 to-transparent" />
          <MarqueeRow items={TECH_ROW2} direction="right" />
        </div>
      </motion.div>
    </div>
  );
};

export default TechnologiesAndTools;
