import { Contract } from "ethers";

export async function getCancelledTickets(contract: Contract): Promise<any> {
  let data = await contract.getAllCancelledTickets();
  return data;
}
