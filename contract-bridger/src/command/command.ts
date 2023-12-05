import { Command } from "commander";
import inquirer from "inquirer";

const program = new Command();

program
  .command("pull_deploy_to_another_chain")
  .alias("pull-deploy")

  .action(function () {
    inquirer
      .prompt([
        {
          name: "contractAddress",
          message: "contract address from source chain?",
        },
        {
          name: "constructorArgs",
          message: "constructor Args, if any else just press enter?",
          default: "",
        },
        {
          name: "sourceNetworkRpc",
          message: "rpc of source network?",
        },
        {
          name: "destinationNetworkRpc",
          message: "rpc of destination network?",
        },
        {
          name: "pKey",
          message: "private key of signer?",
        },
      ])
      .then((answers) => {
        //TODO- function call from index.js
      });
  });

program.parse(process.argv);
