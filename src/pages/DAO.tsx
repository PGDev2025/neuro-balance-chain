import { motion } from "framer-motion";
import { Brain, Wallet, Vote, PieChart, ExternalLink, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

const DAO = () => {
  const { toast } = useToast();

  const activeProposals = [
    {
      id: 1,
      title: "Fund 100 Therapy Hours for Students",
      description: "Allocate 15 ETH from treasury to provide free therapy sessions for university students",
      yes: 68,
      no: 32,
      status: "active",
      endsIn: "3 days",
    },
    {
      id: 2,
      title: "Add Sleep Tracking Integration",
      description: "Partner with sleep tracking apps to include sleep quality in MFI calculation",
      yes: 82,
      no: 18,
      status: "active",
      endsIn: "5 days",
    },
    {
      id: 3,
      title: "Reduce Token Emission Rate",
      description: "Decrease SOT emission by 20% to maintain token value and sustainability",
      yes: 45,
      no: 55,
      status: "active",
      endsIn: "1 day",
    },
  ];

  const passedProposals = [
    {
      id: 4,
      title: "Launch Corporate Wellness API",
      yes: 91,
      no: 9,
      status: "passed",
    },
    {
      id: 5,
      title: "Add Mental Health Hotline Integration",
      yes: 87,
      no: 13,
      status: "passed",
    },
  ];

  const handleVote = (proposalId: number, vote: boolean) => {
    toast({
      title: vote ? "Voted Yes ✓" : "Voted No ✗",
      description: "Your vote has been recorded on Ethereum",
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
              <Link to="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors">Marketplace</Link>
              <Link to="/dao" className="text-primary font-medium">DAO</Link>
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
            Cognitive Impact DAO
          </h1>
          <p className="text-xl text-muted-foreground">
            Community governance for emotional sustainability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Treasury Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="card-glow p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-muted-foreground">DAO Treasury</h3>
                <Wallet className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-bold">42.1 ETH</p>
              <p className="text-sm text-muted-foreground mt-1">+ 1,200 SOT</p>
            </Card>
          </motion.div>

          {/* Voting Power */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
          >
            <Card className="card-glow p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-muted-foreground">Your Voting Power</h3>
                <Vote className="h-5 w-5 text-secondary" />
              </div>
              <p className="text-3xl font-bold">12.4 SOT</p>
              <p className="text-sm text-muted-foreground mt-1">0.08% of total</p>
            </Card>
          </motion.div>

          {/* Active Proposals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="card-glow p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-muted-foreground">Active Proposals</h3>
                <PieChart className="h-5 w-5 text-accent" />
              </div>
              <p className="text-3xl font-bold">{activeProposals.length}</p>
              <p className="text-sm text-muted-foreground mt-1">Vote now</p>
            </Card>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Proposals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="lg:col-span-2 space-y-6"
          >
            <h2 className="text-2xl font-bold">Active Proposals</h2>
            
            {activeProposals.map((proposal, idx) => (
              <motion.div
                key={proposal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <Card className="card-glow p-6 border-accent/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{proposal.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{proposal.description}</p>
                    </div>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium ml-4">
                      {proposal.endsIn}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        Yes: {proposal.yes}%
                      </span>
                      <span className="flex items-center gap-1">
                        <XCircle className="h-4 w-4 text-destructive" />
                        No: {proposal.no}%
                      </span>
                    </div>
                    <Progress value={proposal.yes} className="h-3" />
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="glow" 
                      className="flex-1"
                      onClick={() => handleVote(proposal.id, true)}
                    >
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Vote Yes
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => handleVote(proposal.id, false)}
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Vote No
                    </Button>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <ExternalLink className="h-3 w-3" />
                    <a href="#" className="hover:text-primary transition-colors">View on Etherscan</a>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Passed Proposals */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Recent Passed Proposals</h2>
              <div className="space-y-4">
                {passedProposals.map((proposal) => (
                  <Card key={proposal.id} className="p-4 border-primary/10 bg-primary/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                        <div>
                          <h4 className="font-semibold">{proposal.title}</h4>
                          <p className="text-xs text-muted-foreground">Passed with {proposal.yes}% approval</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Treasury Allocation */}
            <Card className="card-glow p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Treasury Allocation</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Therapy Programs</span>
                    <span className="font-bold">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Research Grants</span>
                    <span className="font-bold">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Platform Development</span>
                    <span className="font-bold">15%</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Reserve</span>
                    <span className="font-bold">10%</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-3">
                  DAO members vote on treasury allocation and fund distribution.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Create Proposal
                </Button>
              </div>
            </Card>

            {/* DAO Stats */}
            <Card className="card-glow p-6">
              <h3 className="text-lg font-bold mb-4">DAO Statistics</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Members</span>
                  <span className="font-bold">3,421</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Proposals</span>
                  <span className="font-bold">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg Participation</span>
                  <span className="font-bold">64%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Funds Distributed</span>
                  <span className="font-bold">128 ETH</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DAO;
