import { motion } from "framer-motion";
import { Brain, TrendingUp, Wallet, BarChart3, Activity, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { MFIGauge } from "@/components/MFIGauge";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const Dashboard = () => {
  const { toast } = useToast();

  const chartData = [
    { day: "Mon", stress: 65, recovery: 35 },
    { day: "Tue", stress: 72, recovery: 28 },
    { day: "Wed", stress: 58, recovery: 42 },
    { day: "Thu", stress: 62, recovery: 38 },
    { day: "Fri", stress: 55, recovery: 45 },
    { day: "Sat", stress: 48, recovery: 52 },
    { day: "Sun", stress: 42, recovery: 58 },
  ];

  const handleGenerateOffset = () => {
    toast({
      title: "Offset Generated! 🎉",
      description: "+0.4 SOT earned for your mindfulness break",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DarkModeToggle />
      <NeuralBackground />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">NeuroBalance</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="text-primary font-medium">Dashboard</Link>
              <Link to="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors">Marketplace</Link>
              <Link to="/dao" className="text-muted-foreground hover:text-foreground transition-colors">DAO</Link>
            </nav>

            <Button variant="glow" size="sm">
              <Wallet className="h-4 w-4 mr-2" />
              0x7a3...f2b
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="card-glow p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
            <p className="text-muted-foreground">Here's your mental wellness overview</p>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - MFI Gauge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Card className="card-glow p-6">
              <div className="flex items-center gap-2 mb-6">
                <Brain className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Mental Footprint Index</h2>
              </div>
              
              <div className="flex justify-center mb-6">
                <MFIGauge value={62} size={220} />
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Top Trigger</p>
                      <p className="text-xs text-muted-foreground">Late-night screen time</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="flex items-start gap-2">
                    <Activity className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Suggestion</p>
                      <p className="text-xs text-muted-foreground">Try a 10-min breathing break → earn 0.3 SOT</p>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Calculated via AWS Comprehend + behavioral analysis
                </div>
              </div>
            </Card>

            {/* Token Balance */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="card-glow p-6 mt-6 bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Token Balance</h3>
                  <div className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-mono">
                    SOT
                  </div>
                </div>
                <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  12.4
                </div>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={handleGenerateOffset}
                >
                  Generate Offset
                </Button>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column - Charts and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Trend Chart */}
            <Card className="card-glow p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">7-Day Wellness Trend</h2>
                </div>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span>Stress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <span>Recovery</span>
                  </div>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="stressGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="recoveryGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(173, 80%, 40%)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(173, 80%, 40%)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="day" 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="stress"
                    stroke="#ef4444"
                    strokeWidth={2}
                    fill="url(#stressGradient)"
                  />
                  <Area
                    type="monotone"
                    dataKey="recovery"
                    stroke="hsl(173, 80%, 40%)"
                    strokeWidth={2}
                    fill="url(#recoveryGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="card-glow p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">This Week</p>
                    <p className="text-xl font-bold">-8 MFI</p>
                  </div>
                </div>
              </Card>

              <Card className="card-glow p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <Activity className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Streak</p>
                    <p className="text-xl font-bold">7 Days 🔥</p>
                  </div>
                </div>
              </Card>

              <Card className="card-glow p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <BarChart3 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Earned</p>
                    <p className="text-xl font-bold">47.2 SOT</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="card-glow p-6">
              <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start h-auto py-3">
                  <div className="text-left">
                    <p className="font-semibold">Log Wellness Activity</p>
                    <p className="text-xs text-muted-foreground">Track meditation, exercise, or breaks</p>
                  </div>
                </Button>
                <Link to="/marketplace">
                  <Button variant="outline" className="justify-start h-auto py-3 w-full">
                    <div className="text-left">
                      <p className="font-semibold">Trade Offsets</p>
                      <p className="text-xs text-muted-foreground">Visit the marketplace</p>
                    </div>
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
