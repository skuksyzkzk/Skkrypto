//SPDX-License-Identifier : GPL-3.0
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import  "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract customToken is ERC20 {
    

    constructor(string memory _name,string memory _symbol)  ERC20(_name,_symbol){
        uint256 _supply = 100 * (10 ** 18);
        _mint(msg.sender,_supply);// (주소,발행양)
    }
    // 소수점 18설정 사실 기본값이 18로 설정되있다. 실제로 보낼때 수량 * (10 ** 18) 보내지는것 
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }
}