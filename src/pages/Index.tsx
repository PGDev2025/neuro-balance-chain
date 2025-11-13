import { motion } from "framer-motion";
import { Brain, Cloud, Scale, TrendingUp, Users, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { FeatureCard } from "@/components/FeatureCard";
import { NeuralBackground } from "@/components/NeuralBackground";
import { WalletConnectModal } from "@/components/WalletConnectModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-neural.jpg";

const Index = () => {
  const [walletModalOpen, setWalletModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DarkModeToggle />
      <NeuralBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="relative container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
              The World's First Mental Carbon Credit System
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Measure. Heal. Offset.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              NeuroBalance quantifies your mental footprint with AI, rewards recovery with tokens, 
              and enables global stress offset trading on Web3.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link to="/dashboard">
                <Button variant="hero" size="lg" className="group">
                  Launch Dashboard
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => setWalletModalOpen(true)}
              >
                Connect Wallet
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Cloud className="h-4 w-4 text-primary" />
                <span>Powered by AWS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Aptos Blockchain</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Ethereum DAO</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Mental Health Crisis We Don't Measure
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Traditional mental health systems lack quantification, incentives, and global coordination
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Brain}
            title="Unquantified Stress"
            description="We measure carbon footprints but not mental footprints. Your emotional toll remains invisible."
            delay={0.1}
          />
          <FeatureCard
            icon={TrendingUp}
            title="Invisible Burnout"
            description="Burnout costs $300B annually in the US alone. We need real-time measurement systems."
            delay={0.2}
          />
          <FeatureCard
            icon={Lock}
            title="Unincentivized Recovery"
            description="Taking care of your mental health has no economic value in traditional systems."
            delay={0.3}
          />
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              A Blockchain for Emotional Balance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three revolutionary technologies working together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="card-glow p-8 h-full bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-lg">
                    <Brain className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">Mental Footprint Index</h3>
                <p className="text-muted-foreground text-center mb-4">
                  AI-powered analysis using AWS Comprehend to quantify your stress level (0-100)
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-primary">
                  <Cloud className="h-4 w-4" />
                  <span>AWS AI Infrastructure</span>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="card-glow p-8 h-full bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary to-accent shadow-lg">
                    <TrendingUp className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">Stress Offset Tokens</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Earn SOT tokens for wellness activities. Trade them on our marketplace or stake for rewards.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-secondary">
                  <span className="font-mono">◆</span>
                  <span>Aptos Smart Contracts</span>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="card-glow p-8 h-full bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-accent to-primary shadow-lg">
                    <Scale className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">Cognitive Impact DAO</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Community governance for funding therapy programs and setting platform policies
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-accent">
                  <span>⬥</span>
                  <span>Ethereum Governance</span>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="neural-line w-full max-w-4xl h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Marketplace Teaser */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trade Stress Offsets — Build a Healthier World
          </h2>
          <p className="text-xl text-muted-foreground">
            Organizations can offset their employees' mental burden
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { org: "Google", sot: "320 SOT", value: "0.45 ETH" },
            { org: "Microsoft", sot: "180 SOT", value: "0.28 ETH" },
            { org: "UNICEF", sot: "500 SOT", value: "0.72 ETH" },
          ].map((item, idx) => (
            <motion.div
              key={item.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="card-glow p-6 border-primary/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{item.org}</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {item.sot}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">{item.value}</span>
                  <Button variant="glow" size="sm">Buy</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/marketplace">
            <Button variant="outline" size="lg">
              View Full Marketplace
            </Button>
          </Link>
        </div>
      </section>

      {/* DAO Teaser */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Wellness Powered by the People
            </h2>
            <p className="text-xl text-muted-foreground">
              Vote on proposals with your SOT tokens
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Fund 100 Therapy Hours for Students", yes: 68, no: 32 },
              { title: "Add Sleep Tracking Integration", yes: 82, no: 18 },
              { title: "Reduce Token Emission Rate", yes: 45, no: 55 },
            ].map((proposal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="card-glow p-6 border-accent/10">
                  <h3 className="font-semibold mb-4">{proposal.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Yes: {proposal.yes}%</span>
                      <span>No: {proposal.no}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accent to-primary"
                        style={{ width: `${proposal.yes}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Vote Yes
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Vote No
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/dao">
              <Button variant="outline" size="lg">
                View All Proposals
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="card-glow p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
            <blockquote className="text-3xl md:text-4xl font-bold mb-8">
              "Carbon had a footprint. Now, so does your mind."
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button variant="hero" size="lg">
                  Join NeuroBalance Beta
                </Button>
              </Link>
              <Button variant="glass" size="lg">
                Get Whitepaper
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">NeuroBalance</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
              <Link to="/marketplace" className="hover:text-primary transition-colors">Marketplace</Link>
              <Link to="/dao" className="hover:text-primary transition-colors">DAO</Link>
              <a href="#" className="hover:text-primary transition-colors">Docs</a>
              <a href="#" className="hover:text-primary transition-colors">About</a>
            </div>

            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>Powered by</span>
              <span className="text-primary">AWS</span>
              <span>•</span>
              <span className="text-secondary">Aptos</span>
              <span>•</span>
              <span className="text-accent">Ethereum</span>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © 2025 NeuroBalance. Built for emotional sustainability.
          </div>
        </div>
      </footer>

      <WalletConnectModal open={walletModalOpen} onOpenChange={setWalletModalOpen} />
    </div>
  );
};

export default Index;
