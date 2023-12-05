import { Option, Select } from "@material-tailwind/react";
import React, { FC } from "react";
import { useNetwork, useSwitchNetwork } from "wagmi";

const SelectChainDropdown = () => {
  const network = useNetwork();

  let currentChain = !!network.chain?.unsupported ? null : network.chain?.id;

  const { chains, error, pendingChainId, switchNetwork, status } =
    useSwitchNetwork({
      onError: (error) => {
        currentChain = !!network.chain?.unsupported ? null : network.chain?.id;
      },
      onSuccess: (data) => {
        currentChain = !!network.chain?.unsupported ? null : network.chain?.id;
      },
    });

  return (
    <Select
      label="Select Chain"
      onChange={(chain) => switchNetwork?.(Number(chain))}
      value={String(currentChain)}
    >
      {network.chains.map((chain) => (
        <Option key={chain.id} value={String(chain.id)}>
          {chain.name}
        </Option>
      ))}
    </Select>
  );
};

export default SelectChainDropdown;
