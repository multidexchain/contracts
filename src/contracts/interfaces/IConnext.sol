pragma solidity ^0.7.6;
pragma abicoder v2;

// @hackathon This is created by guessing from
// https://github.com/connext/xapp-starter/blob/main/src/contract-to-contract-interactions/permissioned/XDomainPermissioned.sol

interface IConnext {
    struct CallParams {
        address to;
        bytes callData;
        uint32 originDomain;
        uint32 destinationDomain;
    }

    struct XCallArgs {
        CallParams params;
        address transactingAssetId;
        uint256 amount;
    }

    struct ExecuteArgs {
        CallParams params;
        address local;
        address[] routers;
        uint32 feePercentage;
        uint256 amount;
        uint256 nonce;
        bytes relayerSignature;
        address originSender;
    }

    function xcall(XCallArgs memory xCallArgs) external;

    function execute(ExecuteArgs calldata _args) external returns (bytes32);
}
