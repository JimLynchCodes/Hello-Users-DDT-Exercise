const Hello = artifacts.require("Hello");

contract("Hello", function (accounts) {
  
  it("should assert true", async function () {
  await Hello.deployed();
  return assert.isTrue( true)
});

xit("sets admin", async () => {
    await Hello.deployed().setAdmin(accounts[0]);
    
  });
  
  it("eats pizza", async function () {
    
    await Hello.deployed()
    return assert.isTrue(true );

  });
  
  it("whackamole foobar", function () {
    
    Hello.deployed().then( alright => {
      return assert.isTrue(true);
    })

  });
  
  it('owner can remove admin', () => {})

  it("eats pizza", async function () {
    
    await Hello.deployed();
    return assert.isTrue(  true )

  });
  

  it("eats pizza", async function () {
    
    return assert
            .isTrue( true);

  })



        xit('', async () => {

        })

        it('', async () => {

        })

        it( 'gets hello', async () => { expect((await (await Hello.deployed()).getHello())).to.equal ('Hello, Ownerf!')

        })
   
        it( 'gets hello', async () => expect((await (await Hello.deployed()).getHello())).to.equal ('Hello, Ownerf!'))


});
