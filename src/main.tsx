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
import { Base } from "@thirdweb-dev/chains";
// import { BaseSepoliaTestnet } from "@thirdweb-dev/chains";

const container: HTMLElement | null = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <ThirdwebProvider
        activeChain={Base} //Base
        clientId="909ef598c733d782d3175916eea62c24"
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
          logoUrl: "https://xbirds.art/assets/ico/apple-touch-icon.png",
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
