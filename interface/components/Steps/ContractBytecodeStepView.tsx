"use client";
import { Card, Input, Textarea, Typography } from "@material-tailwind/react";
import React, { FC, Fragment, useState } from "react";
import SelectChainDropdown from "../SelectChainDropdown";
import { toast } from "react-toastify";
import { useNetwork } from "wagmi";
import {} from "@rainbow-me/rainbowkit";
import { NotificationDialog } from "../NetworkNoticeDialog";
import { Dictionary } from "../PageView";

const ContractBytecodeStepView: FC<{
  data: { bytecode: string; ABI: any[] };
  constructorArgs: Dictionary<string> | null;
  handleContructorArgsChange: (key: string, value: string) => void;
}> = ({
  data: { bytecode, ABI },
  constructorArgs,
  handleContructorArgsChange,
}) => {
  const constructorArgsKeys = Object.keys(constructorArgs || {});

  const network = useNetwork();
  if (!bytecode) {
    toast.error("no contract bytecode provided");
    return;
  }
  return (
    <Card color="transparent" shadow={false}>
      <NotificationDialog
        networkName={network.chain.name}
        note="You may want to consider switching to your prefered destination chain before deploying"
      />
      <Typography variant="h4" color="blue-gray">
        Contract Bytecode
      </Typography>
      <Typography color="blue-gray" className="mb-8">
        Switch to destination chain and Supply constructor argument (if any)
      </Typography>

      {!!constructorArgs ? (
        <Fragment>
          <Typography variant="h6" color="blue-gray">
            Constructor Arguments
          </Typography>
          <form className="mb-2 w-full">
            <div className="mb-4 flex flex-wrap justify-start items-center gap-4">
              {constructorArgsKeys.map((key) => (
                <div key={key} className="w-full sm:w-72">
                  <Input
                    crossOrigin=""
                    size="md"
                    label={key}
                    value={constructorArgs[key]}
                    onChange={(e) =>
                      handleContructorArgsChange(key, e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          </form>
        </Fragment>
      ) : null}

      <div className="w-full mb-8">
        <Typography variant="lead" className="mb-2 text-base" color="blue-gray">
          Destination chain:
        </Typography>
        <div className="w-full sm:w-72">
          <SelectChainDropdown />
        </div>
      </div>
      <Textarea
        className="w-full h-[400px]"
        label="Byte Code"
        value={bytecode}
        readOnly
      />
    </Card>
  );
};

export default ContractBytecodeStepView;
