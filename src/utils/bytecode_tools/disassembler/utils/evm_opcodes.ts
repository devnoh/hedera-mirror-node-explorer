/*-
 *
 * Hedera Mirror Node Explorer
 *
 * Copyright (C) 2021 - 2024 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */


export interface EvmOpcode {
  mnemonic: string;
  operand: number;
}

/**
 * @dev A mapping of EVM OPCODE IDs with their corresponding mnemonics and operand lengths.
 * @evm_version SHANGHAI
 * @notice This list contains the latest OPCODEs introduced in SHANGHAI. Modifications to this list can cover future EVM releases.
 */
export const EVM_OPCODES = new Map<string, EvmOpcode>([
  ['00', { mnemonic: 'STOP', operand: 0 }],
  ['01', { mnemonic: 'ADD', operand: 0 }],
  ['02', { mnemonic: 'MUL', operand: 0 }],
  ['03', { mnemonic: 'SUB', operand: 0 }],
  ['04', { mnemonic: 'DIV', operand: 0 }],
  ['05', { mnemonic: 'SDIV', operand: 0 }],
  ['06', { mnemonic: 'MOD', operand: 0 }],
  ['07', { mnemonic: 'SMOD', operand: 0 }],
  ['08', { mnemonic: 'ADDMOD', operand: 0 }],
  ['09', { mnemonic: 'MULMOD', operand: 0 }],
  ['0a', { mnemonic: 'EXP', operand: 0 }],
  ['0b', { mnemonic: 'SIGNEXTEND', operand: 0 }],
  ['10', { mnemonic: 'LT', operand: 0 }],
  ['11', { mnemonic: 'GT', operand: 0 }],
  ['12', { mnemonic: 'SLT', operand: 0 }],
  ['13', { mnemonic: 'SGT', operand: 0 }],
  ['14', { mnemonic: 'EQ', operand: 0 }],
  ['15', { mnemonic: 'ISZERO', operand: 0 }],
  ['16', { mnemonic: 'AND', operand: 0 }],
  ['17', { mnemonic: 'OR', operand: 0 }],
  ['18', { mnemonic: 'XOR', operand: 0 }],
  ['19', { mnemonic: 'NOT', operand: 0 }],
  ['1a', { mnemonic: 'BYTE', operand: 0 }],
  ['1b', { mnemonic: 'SHL', operand: 0 }],
  ['1c', { mnemonic: 'SHR', operand: 0 }],
  ['1d', { mnemonic: 'SAR', operand: 0 }],
  ['20', { mnemonic: 'SHA3', operand: 0 }],
  ['30', { mnemonic: 'ADDRESS', operand: 0 }],
  ['31', { mnemonic: 'BALANCE', operand: 0 }],
  ['32', { mnemonic: 'ORIGIN', operand: 0 }],
  ['33', { mnemonic: 'CALLER', operand: 0 }],
  ['34', { mnemonic: 'CALLVALUE', operand: 0 }],
  ['35', { mnemonic: 'CALLDATALOAD', operand: 0 }],
  ['36', { mnemonic: 'CALLDATASIZE', operand: 0 }],
  ['37', { mnemonic: 'CALLDATACOPY', operand: 0 }],
  ['38', { mnemonic: 'CODESIZE', operand: 0 }],
  ['39', { mnemonic: 'CODECOPY', operand: 0 }],
  ['3a', { mnemonic: 'GASPRICE', operand: 0 }],
  ['3b', { mnemonic: 'EXTCODESIZE', operand: 0 }],
  ['3c', { mnemonic: 'EXTCODECOPY', operand: 0 }],
  ['3d', { mnemonic: 'RETURNDATASIZE', operand: 0 }],
  ['3e', { mnemonic: 'RETURNDATACOPY', operand: 0 }],
  ['3f', { mnemonic: 'EXTCODEHASH', operand: 0 }],
  ['40', { mnemonic: 'BLOCKHASH', operand: 0 }],
  ['41', { mnemonic: 'COINBASE', operand: 0 }],
  ['42', { mnemonic: 'TIMESTAMP', operand: 0 }],
  ['43', { mnemonic: 'NUMBER', operand: 0 }],
  ['44', { mnemonic: 'DIFFICULTY', operand: 0 }],
  ['45', { mnemonic: 'GASLIMIT', operand: 0 }],
  ['46', { mnemonic: 'CHAINID', operand: 0 }],
  ['47', { mnemonic: 'SELFBALANCE', operand: 0 }],
  ['48', { mnemonic: 'BASEFEE', operand: 0 }],
  ['50', { mnemonic: 'POP', operand: 0 }],
  ['51', { mnemonic: 'MLOAD', operand: 0 }],
  ['52', { mnemonic: 'MSTORE', operand: 0 }],
  ['53', { mnemonic: 'MSTORE8', operand: 0 }],
  ['54', { mnemonic: 'SLOAD', operand: 0 }],
  ['55', { mnemonic: 'SSTORE', operand: 0 }],
  ['56', { mnemonic: 'JUMP', operand: 0 }],
  ['57', { mnemonic: 'JUMPI', operand: 0 }],
  ['58', { mnemonic: 'PC', operand: 0 }],
  ['59', { mnemonic: 'MSIZE', operand: 0 }],
  ['5a', { mnemonic: 'GAS', operand: 0 }],
  ['5b', { mnemonic: 'JUMPDEST', operand: 0 }],
  ['5f', { mnemonic: 'PUSH0', operand: 0 }],
  ['60', { mnemonic: 'PUSH1', operand: 1 }],
  ['61', { mnemonic: 'PUSH2', operand: 2 }],
  ['62', { mnemonic: 'PUSH3', operand: 3 }],
  ['63', { mnemonic: 'PUSH4', operand: 4 }],
  ['64', { mnemonic: 'PUSH5', operand: 5 }],
  ['65', { mnemonic: 'PUSH6', operand: 6 }],
  ['66', { mnemonic: 'PUSH7', operand: 7 }],
  ['67', { mnemonic: 'PUSH8', operand: 8 }],
  ['68', { mnemonic: 'PUSH9', operand: 9 }],
  ['69', { mnemonic: 'PUSH10', operand: 10 }],
  ['6a', { mnemonic: 'PUSH11', operand: 11 }],
  ['6b', { mnemonic: 'PUSH12', operand: 12 }],
  ['6c', { mnemonic: 'PUSH3', operand: 13 }],
  ['6d', { mnemonic: 'PUSH14', operand: 14 }],
  ['6e', { mnemonic: 'PUSH15', operand: 15 }],
  ['6f', { mnemonic: 'PUSH16', operand: 16 }],
  ['70', { mnemonic: 'PUSH17', operand: 17 }],
  ['71', { mnemonic: 'PUSH18', operand: 18 }],
  ['72', { mnemonic: 'PUSH19', operand: 19 }],
  ['73', { mnemonic: 'PUSH20', operand: 20 }],
  ['74', { mnemonic: 'PUSH21', operand: 21 }],
  ['75', { mnemonic: 'PUSH22', operand: 22 }],
  ['76', { mnemonic: 'PUSH23', operand: 23 }],
  ['77', { mnemonic: 'PUSH24', operand: 24 }],
  ['78', { mnemonic: 'PUSH25', operand: 25 }],
  ['79', { mnemonic: 'PUSH26', operand: 26 }],
  ['7a', { mnemonic: 'PUSH27', operand: 27 }],
  ['7b', { mnemonic: 'PUSH28', operand: 28 }],
  ['7c', { mnemonic: 'PUSH29', operand: 29 }],
  ['7d', { mnemonic: 'PUSH30', operand: 30 }],
  ['7e', { mnemonic: 'PUSH31', operand: 31 }],
  ['7f', { mnemonic: 'PUSH32', operand: 32 }],
  ['80', { mnemonic: 'DUP1', operand: 0 }],
  ['81', { mnemonic: 'DUP2', operand: 0 }],
  ['82', { mnemonic: 'DUP3', operand: 0 }],
  ['83', { mnemonic: 'DUP4', operand: 0 }],
  ['84', { mnemonic: 'DUP5', operand: 0 }],
  ['85', { mnemonic: 'DUP6', operand: 0 }],
  ['86', { mnemonic: 'DUP7', operand: 0 }],
  ['87', { mnemonic: 'DUP8', operand: 0 }],
  ['88', { mnemonic: 'DUP9', operand: 0 }],
  ['89', { mnemonic: 'DUP10', operand: 0 }],
  ['8a', { mnemonic: 'DUP111', operand: 0 }],
  ['8b', { mnemonic: 'DUP12', operand: 0 }],
  ['8c', { mnemonic: 'DUP13', operand: 0 }],
  ['8d', { mnemonic: 'DUP14', operand: 0 }],
  ['8e', { mnemonic: 'DUP15', operand: 0 }],
  ['8f', { mnemonic: 'DUP16', operand: 0 }],
  ['90', { mnemonic: 'SWAP1', operand: 0 }],
  ['91', { mnemonic: 'SWAP2', operand: 0 }],
  ['92', { mnemonic: 'SWAP3', operand: 0 }],
  ['93', { mnemonic: 'SWAP4', operand: 0 }],
  ['94', { mnemonic: 'SWAP5', operand: 0 }],
  ['95', { mnemonic: 'SWAP6', operand: 0 }],
  ['96', { mnemonic: 'SWAP7', operand: 0 }],
  ['97', { mnemonic: 'SWAP8', operand: 0 }],
  ['98', { mnemonic: 'SWAP9', operand: 0 }],
  ['99', { mnemonic: 'SWAP10', operand: 0 }],
  ['9a', { mnemonic: 'SWAP11', operand: 0 }],
  ['9b', { mnemonic: 'SWAP12', operand: 0 }],
  ['9c', { mnemonic: 'SWAP13', operand: 0 }],
  ['9d', { mnemonic: 'SWAP14', operand: 0 }],
  ['9e', { mnemonic: 'SWAP15', operand: 0 }],
  ['9f', { mnemonic: 'SWAP16', operand: 0 }],
  ['a0', { mnemonic: 'LOG0', operand: 0 }],
  ['a1', { mnemonic: 'LOG1', operand: 0 }],
  ['a2', { mnemonic: 'LOG2', operand: 0 }],
  ['a3', { mnemonic: 'LOG3', operand: 0 }],
  ['a4', { mnemonic: 'LOG4', operand: 0 }],
  ['f0', { mnemonic: 'CREATE', operand: 0 }],
  ['f1', { mnemonic: 'CALL', operand: 0 }],
  ['f2', { mnemonic: 'CALLCODE', operand: 0 }],
  ['f3', { mnemonic: 'RETURN', operand: 0 }],
  ['f4', { mnemonic: 'DELEGATECALL', operand: 0 }],
  ['f5', { mnemonic: 'CREATE2', operand: 0 }],
  ['fa', { mnemonic: 'STATICCALL', operand: 0 }],
  ['fd', { mnemonic: 'REVERT', operand: 0 }],
  ['fe', { mnemonic: 'INVALID', operand: 0 }],
  ['ff', { mnemonic: 'SELFDESTRUCT', operand: 0 }],
]);
