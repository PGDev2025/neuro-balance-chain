import { motion } from "framer-motion";
import { Brain, TrendingUp, Wallet, Building2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Marketplace = () => {
  const { toast } = useToast();

  const marketData = [
    { org: "Google", sot: 320, eth: 0.45, category: "Tech Giant" },
    { org: "Microsoft", sot: 180, eth: 0.28, category: "Tech Giant" },
    { org: "UNICEF", sot: 500, eth: 0.72, category: "Non-Profit" },
    { org: "Amazon", sot: 250, eth: 0.38, category: "Tech Giant" },
    { org: "Tesla", sot: 150, eth: 0.22, category: "Manufacturing" },
    { org: "Red Cross", sot: 420, eth: 0.65, category: "Non-Profit" },
  ];

  const trendData = [
    { week: "W1", volume: 1200 },
    { week: "W2", volume: 1450 },
    { week: "W3", volume: 1680 },
    { week: "W4", volume: 2100 },
  ];

  const leaderboard = [
    { rank: 1, org: "Salesforce", score: 94 },
    { rank: 2, org: "Patagonia", score: 91 },
    { rank: 3, org: "Ben & Jerry's", score: 88 },
    { rank: 4, org: "Spotify", score: 85 },
    { rank: 5, org: "Airbnb", score: 82 },
  ];

  const handleBuy = (org: string, sot: number) => {
    toast({
      title: "Purchase Initiated 🎯",
      description: `Buying ${sot} SOT from ${org}. Confirm in your wallet.`,
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
              <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <Link to="/marketplace" className="text-primary font-medium">Marketplace</Link>
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
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Global Stress Offset Exchange
          </h1>
          <p className="text-xl text-muted-foreground">
            Organizations offsetting mental burden, building healthier workplaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="card-glow p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-muted-foreground">Total Volume</h3>
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-bold">23,450 SOT</p>
              <p className="text-sm text-muted-foreground mt-1">This week</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
          >
            <Card className="card-glow p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-muted-foreground">Active Listings</h3>
                <ShoppingCart className="h-5 w-5 text-secondary" />
              </div>
              <p className="text-3xl font-bold">127</p>
              <p className="text-sm text-muted-foreground mt-1">Organizations</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="card-glow p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-muted-foreground">Avg Price</h3>
                <Wallet className="h-5 w-5 text-accent" />
              </div>
              <p className="text-3xl font-bold">0.42 ETH</p>
              <p className="text-sm text-muted-foreground mt-1">Per 100 SOT</p>
            </Card>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Marketplace Table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="lg:col-span-2"
          >
            <Card className="card-glow p-6">
              <h2 className="text-2xl font-bold mb-6">Active Listings</h2>
              <div className="space-y-3">
                {marketData.map((item, idx) => (
                  <motion.div
                    key={item.org}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                  >
                    <Card className="p-4 border-primary/10 hover:border-primary/30 transition-all">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Building2 className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{item.org}</h3>
                            <p className="text-xs text-muted-foreground">{item.category}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Volume</p>
                            <p className="font-semibold">{item.sot} SOT</p>
                          </div>

                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Price</p>
                            <p className="font-bold text-accent">{item.eth} ETH</p>
                          </div>

                          <Button 
                            variant="glow" 
                            size="sm"
                            onClick={() => handleBuy(item.org, item.sot)}
                          >
                            Buy
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Trend Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="card-glow p-6 mt-6">
                <h3 className="text-xl font-bold mb-6">Global Offset Trend</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis 
                      dataKey="week" 
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
                    <Line
                      type="monotone"
                      dataKey="volume"
                      stroke="hsl(var(--accent))"
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--accent))', r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>
          </motion.div>

          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <Card className="card-glow p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Mental Sustainability Leaders</h3>
              <div className="space-y-3">
                {leaderboard.map((item, idx) => (
                  <motion.div
                    key={item.org}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.05 }}
                  >
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                        ${item.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' : ''}
                        ${item.rank === 2 ? 'bg-gray-400/20 text-gray-400' : ''}
                        ${item.rank === 3 ? 'bg-orange-500/20 text-orange-500' : ''}
                        ${item.rank > 3 ? 'bg-primary/10 text-primary' : ''}
                      `}>
                        #{item.rank}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{item.org}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-accent">{item.score}</p>
                        <p className="text-xs text-muted-foreground">Score</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-muted-foreground">
                  Sustainability Score is calculated based on offset volume, employee wellness programs, and DAO participation.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
