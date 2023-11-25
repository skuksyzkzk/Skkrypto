async function main(){
    console.log("Token Deploy");
    
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const TokenCtr = await ethers.getContractFactory("customToken");
    const balance = await ethers.provider.getBalance("0xA8c5940592160AC07005A29c9275c425310bF12E");
    console.log("Balance:", ethers.utils.formatEther(balance));
    const tokenctr = await TokenCtr.deploy("Kim Sung Yeop","KSY");
   
    console.log("KSY deployed to:", tokenctr.target);

}
main() // main 함수를 호출하고 함수 실행이 완료되면 프로세스 종료, 에러가 발생하면 콘솔에 출력하고 프로세스를 에러코드 1로 종료
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });