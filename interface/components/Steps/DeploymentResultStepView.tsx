"use client";
import { Card, Typography } from "@material-tailwind/react";
import { ContractTransactionReceipt } from "ethers";
import React, { FC } from "react";
import { toast } from "react-toastify";
import { useNetwork } from "wagmi";

const DeploymentResultStepView: FC<{
  data: ContractTransactionReceipt | null;
}> = ({ data }) => {
  const network = useNetwork();

  if (!data) {
    toast.error("no contract deployment result found");
    return;
  }
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Deployment Result
      </Typography>
      <div className="flex flex-col gap-4 mt-8">
        {data.status === 1 ? (
          <div className="flex flex-col mb-4">
            <span className="text-sm">Status</span>
            <span className="text-green-800 font-bold">Success &#10003;</span>
          </div>
        ) : (
          <div className="flex flex-col mb-4">
            <span className="text-sm">Status</span>
            <span className="text-red-800 font-bold">Failled &#x2718;</span>
          </div>
        )}

        <div className="flex flex-col mb-4">
          <span className="text-sm">Deployed to</span>
          <span className="font-bold">{data.contractAddress}</span>
        </div>

        <div className="flex flex-col mb-4">
          <span className="text-sm">Deployer</span>
          <span className="font-bold">{data.from}</span>
        </div>

        <div className="flex flex-col mb-4">
          <span className="text-sm">Tx Hash</span>
          <span className="font-bold">{data.hash}</span>
        </div>

        <div className="flex flex-col mb-4">
          <span className="text-sm">See more</span>
          <a
            href={`${network.chain?.blockExplorers?.default?.url}/tx/${data.hash}`}
            target="_blank"
            className="font-bold text-green-800 hover:underline"
          >
            Explorer Link &#10138;
          </a>
        </div>
      </div>
    </Card>
  );
};

export default DeploymentResultStepView;
