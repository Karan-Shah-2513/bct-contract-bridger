"use client";
import { Card, Typography } from "@material-tailwind/react";
import { FC } from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";

const ContractDetailsStepView: FC<{
  contractData: any | null;
}> = ({ contractData }) => {
  if (!contractData) return;

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Contract Source Code
      </Typography>
      <Typography color="blue-gray">
        Confirm that this is the contract you have in mind before proceeding
      </Typography>

      <SyntaxHighlighter
        language="solidity"
        style={prism}
        customStyle={{ height: "500px" }}
        showLineNumbers={true}
      >
        {contractData?.fullSourceCodeString}
      </SyntaxHighlighter>
    </Card>
  );
};

export default ContractDetailsStepView;
