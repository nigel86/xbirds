import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "bootstrap/dist/css/bootstrap.css";
import "/src/css/styles_birds.css";

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  embeddedWallet,
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
          embeddedWallet({
            auth: {
              options: ["email", "google", "apple", "facebook"],
            },
          }),
          zerionWallet(),
          rainbowWallet(),
        ]}
        dAppMeta={{
          name: "ABirdApp",
          description: "My ABird app description",
          logoUrl: "https://example.com/logo.png",
          url: "https://example.com",
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
