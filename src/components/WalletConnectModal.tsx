import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

interface WalletConnectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const WalletConnectModal = ({ open, onOpenChange }: WalletConnectModalProps) => {
  const handleConnect = (provider: string) => {
    console.log(`Connecting to ${provider}...`);
    // Simulated connection
    setTimeout(() => {
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Connect Wallet
          </DialogTitle>
          <DialogDescription>
            Choose your wallet provider to connect to NeuroBalance
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 mt-4">
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() => handleConnect("MetaMask")}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" className="h-6 w-6 mr-3" />
            MetaMask
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() => handleConnect("Petra")}
          >
            <Wallet className="h-6 w-6 mr-3" />
            Petra Wallet
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() => handleConnect("WalletConnect")}
          >
            <Wallet className="h-6 w-6 mr-3" />
            WalletConnect
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
