import { motion } from "framer-motion";

interface MFIGaugeProps {
  value: number;
  size?: number;
}

export const MFIGauge = ({ value, size = 200 }: MFIGaugeProps) => {
  const getColor = (val: number) => {
    if (val <= 40) return "hsl(173, 80%, 40%)"; // Green/Teal
    if (val <= 70) return "hsl(45, 93%, 47%)"; // Yellow
    return "hsl(0, 84%, 60%)"; // Red
  };

  const circumference = 2 * Math.PI * 80;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r="80"
          stroke="hsl(var(--muted))"
          strokeWidth="12"
          fill="none"
        />
        {/* Animated progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r="80"
          stroke={getColor(value)}
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ filter: `drop-shadow(0 0 8px ${getColor(value)})` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="text-center"
        >
          <div className="text-4xl font-bold" style={{ color: getColor(value) }}>
            {value}
          </div>
          <div className="text-sm text-muted-foreground">MFI Score</div>
        </motion.div>
      </div>
    </div>
  );
};
