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

const activeChain = "optimism-goerli";

const container: HTMLElement | null = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <ThirdwebProvider
        activeChain={activeChain}
        clientId="1a89a74f6ecbe74393203612be0349cc"
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
