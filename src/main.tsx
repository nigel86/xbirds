import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  zerionWallet,
  rainbowWallet,
} from "@thirdweb-dev/react";
//import { Sepolia } from "@thirdweb-dev/chains";
//import { OpSepoliaTestnet } from "@thirdweb-dev/chains";

//const activeChain = Sepolia;
//const activeChain = "optimism-goerli";
//const activeChain = OpSepoliaTestnet; fail to fetch contract
const activeChain = "mumbai";

const container: HTMLElement | null = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <ThirdwebProvider
        activeChain={activeChain}
        clientId="953a273c39f67f8d5dd283b0322444b5"
        supportedWallets={[
          metamaskWallet({ recommended: true }),
          coinbaseWallet(),
          walletConnect(),
          zerionWallet(),
          rainbowWallet(),
        ]}
        dAppMeta={{
          name: "XBirdsApp",
          description: "The XBirds app",
          logoUrl: "https://xbirds.art/assets/logo/logo.svg",
          url: "https://xbirds.art",
          isDarkMode: true,
        }}
      >
        <App />
      </ThirdwebProvider>
    </React.StrictMode>
  );
} else {
  console.error("Container element not found");
}
