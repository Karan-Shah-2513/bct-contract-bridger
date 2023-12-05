import { Command } from "commander";

const program = new Command();

program
  .version("1.0.0")
  .description(
    "automate deploying an already deployed contract from one chain to another",
  )
  .option("-c-a, --ContractAddress", "contract address from source chain")
  .option("-c-args, --constructor-args [value]", "constructor args if any")
  .option("-s-rpc, --sourceChainRPC", "rpc of source chain")
  .option("-d-rpc, --destinationChainRPC", "rpc of destination chain")
  .option("-p-key, --privateKey", "private key of deployer")
  .parse(process.argv);

const options = program.opts();
