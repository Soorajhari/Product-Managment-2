import React from "react";

const Nav = ({ handleSearch, handleSearchSubmit }) => {
  return (
    <>
      <div className="bg-[#3081D0]">
        {/* {error && <Error error={error} />} */}
        <div className=" w-[80%] md:w-[75%] mx-0 md:mx-auto h-[90px] mt-4 flex items-center justify-between">
          <div className="w-full">
            <div className="flex items-center justify-center">
              <div className="bg-white w-[180px] md:w-[280px] p-2 rounded relative">
                <input
                  className="border-none w-full"
                  type="text"
                  placeholder="Search anything"
                  onChange={(e) => handleSearch(e.target.value)}
                />

                <div className="absolute inset-y-0 right-0 flex items-center justify-center bg-[#191919] w-[40px] md:w-[60px] rounded-bl-md">
                  <button
                    onClick={(e) => handleSearchSubmit(e)}
                    className='text-xs md:"text-base font-medium text-white'
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-right  gap-x-1 md:gap-x-3 hidden md:flex">
            <ion-icon
              class=" text-lg md:text-3xl  cursor-pointer text-white"
              name="heart-outline"
            ></ion-icon>
            <span className="text-white bg-black text-lg rounded-full h-6 w-6 flex items-center justify-center">
              0
            </span>
            {/* <Link to="/login"> */}
            <p className="text-white text-xs md:text-base">Signin</p>
            {/* </Link> */}

            <ion-icon
              name="cart-outline"
              class="text-white text-3xl"
            ></ion-icon>
            <span className="text-white bg-black text-lg rounded-full h-6 w-6 flex items-center justify-center">
              0
            </span>
            <p className="text-white text-xs md:text-base">Cart</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
