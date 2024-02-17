import React, { useEffect, useState } from 'react';
import './content.css';
import {
  useBlockNumber,
  useContractRead,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';
import { formatEther, parseEther } from 'viem';
import token from '../../MyToken.json';
import loader from '../../assets/loader.gif';
import regret from '../../assets/regret.jpeg';
import { IoMdClose } from 'react-icons/io';

const Content = () => {
  const contractAddress = '0x3D6e7B740dCbe0a824E5Bc061adaDa73886B9319';
  const [supplyData, setSupplyData] = useState(0);
  const [close, setClose] = useState(false);
  const {
    data: hash,
    error,
    isPending,
    writeContract: mintToken,
  } = useWriteContract();
  const mintFunction = async () => {
    await mintToken({
      address: contractAddress,
      abi: token?.abi,
      functionName: 'mint',
      args: ['0x3D6e7B740dCbe0a824E5Bc061adaDa73886B9319', parseEther('3000')],
    });
  };
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const { data: totalSupplyData } = useReadContract({
    address: contractAddress,
    abi: token?.abi,
    functionName: 'totalSupply',
  });

  useEffect(() => {
    if (totalSupplyData) {
      let temp = formatEther(totalSupplyData);
      setSupplyData(Number(temp).toFixed(5));
    }
  }, [totalSupplyData]);

  const {
    data: hashsBuy,
    error: errors,
    isPending: isPendings,
    writeContract: buyToken,
  } = useWriteContract();
  const buyFunction = async () => {
    await buyToken({
      address: contractAddress,
      abi: token?.abi,
      functionName: 'buy',
      args: [parseEther('500')],
      value: parseEther('0.002'),
    });
  };
  const { isLoading: isConfirmingBuy, isSuccess: isConfirmedBuy } =
    useWaitForTransactionReceipt({
      hash: hashsBuy,
    });

  const {
    data: hashFaucet,
    error: faucetError,
    isPending: faucetIsPending,
    writeContract: claimFaucet,
  } = useWriteContract();
  const claimFunction = async () => {
    await claimFaucet({
      address: contractAddress,
      abi: token?.abi,
      functionName: 'withdraw',
    });
  };
  const { isLoading: isConfirmingFaucet, isSuccess: isConfirmedFaucet } =
    useWaitForTransactionReceipt({
      hash: hashFaucet,
    });
  return (
    <section className="section content">
      <div className="container">
        <a href="#" className="btn" onClick={mintFunction}>
          Mint Token
        </a>
        <a href="#" className="btn" onClick={buyFunction}>
          Buy Token
        </a>
        <a href="#" className="btn" onClick={claimFunction}>
          Claim Faucet
        </a>
        <h1 className="headline-lg hero-title">
          Total minted <span className="span"> {supplyData}</span>
        </h1>
      </div>
      {(isConfirming || isConfirmingBuy || isConfirmingFaucet) && (
        <div className="waitTranstion">
          <span>Please wait until the transaction is confirmed. </span>
          <img src={loader} width={50} height={50} />
        </div>
      )}
      {(error || errors || faucetError) && (
        <div className={`${close && 'active '} waitTranstion`}>
          <span className="close" onClick={() => setClose(!close)}>
            <IoMdClose size={20}></IoMdClose>
          </span>
          <span>
            {error?.shortMessage ||
              errors?.shortMessage ||
              faucetError.shortMessage}
          </span>
          <img src={regret} width={40} height={30} />
        </div>
      )}
    </section>
  );
};

export default Content;
