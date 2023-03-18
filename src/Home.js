import React from "react";

// import confi from "./config/Config.json";
// import Abi from "./config/Abi.json";
import { useAccount /*,{useContractRead }*/ } from "wagmi";

function Home() {
  const { address, isConnected } = useAccount();

  // const contractAddress = confi.CONTRACT_ADDRESS;

  // const { data: minted } = useContractRead({
  //   address: contractAddress,
  //   abi: Abi,
  //   functionName: "totalSupply",
  //   watch: true,
  // onSuccess(data) {
  //   console.log("Success", data);
  // },
  // onError(error) {
  //   console.log("Error", error);
  // },
  // onSettled(data, error) {
  //   console.log("Settled", { data, error });
  // },
  // });

  // const { data: totalSupply } = useContractRead({
  //   address: contractAddress,
  //   abi: Abi,
  //   functionName: "maxSupply",
  //   watch: false,
  // });
  // const { data: mintcost } = useContractRead({
  //   address: contractAddress,
  //   abi: Abi,
  //   functionName: "cost",
  //   watch: true,
  // });

  return (
    <div className=" w-full h-screen justify-center items-center flex text-center">
      <div>
        <div>
          <h1>home</h1>
          <p>Web3 Starter code </p>
          {isConnected && (
            <div>
              {" "}
              <h1>Connected : {address}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
