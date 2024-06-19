import { useTransform, motion, useScroll } from "framer-motion";
import { cn } from "../../utils/cn";
import QSleeveDashboardImage from "../../Images/QSleeve Dashboard.png";

const Scroll = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      style={{ perspective: "1000px" }}
      className={cn("flex justify-center items-center w-full h-[40rem]", className)}
    >
      <motion.div
        style={{ scale, rotateX: rotate }}
        className="bg-[#363636] rounded-[2rem] h-[40rem] flex items-center justify-center relative p-2 border-2 border-[#ffffff]/20"
      >
        <img
          src={QSleeveDashboardImage}
          className="w-full h-full rounded-3xl"
          alt="Scaling Image"
        />
      </motion.div>
    </motion.div>
  );
};

export { Scroll };

