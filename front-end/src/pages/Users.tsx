// import { useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

// import type { ProductType } from "../utils/types";
// import { useProducts, useToggleProduct } from "../hooks/useAdmin";
// import { EditingField } from "../components/EditingField";
import { CommonTable } from "../components/CommonTable";
import { MdDelete } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import AddUser from "../components/AddUser";
import ResetPassword from "../components/ResetPassword";

const Users = () => {
  const { id } = useParams();
  const location = useLocation();
  const [addUser, setAddUser] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const users = [
    {
      id: "1",
      name: "anzar",
      email: "anzarsha@gmail.com",
    },
    {
      id: "2",
      name: "anzar",
      email: "anzarsha@gmail.com",
    },
    {
      id: "3",
      name: "anzar",
      email: "anzarsha@gmail.com",
    },
    {
      id: "4",
      name: "anzar",
      email: "anzarsha@gmail.com",
    },
    {
      id: "5",
      name: "anzar",
      email: "anzarsha@gmail.com",
    },
    {
      id: "6",
      name: "anzar",
      email: "anzarsha@gmail.com",
    },
    {
      id: "7",
      name: "anzar",
      email: "anzarsha@gmail.com",
    },
  ];
  //   const navigate = useNavigate();
  const isShow = ["/products/addproduct", `/products/${id}`].includes(
    location.pathname
  );
  //   const [editing, setEditing] = useState(false);
  //   const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
  //     null
  //   );
  //   const [selectedCategory, setSelectedCategory] = useState("all");
  //   const {
  //     data: products,
  //     isSuccess,
  //     isLoading,
  //     isError,
  //   } = useProducts(selectedCategory);
  //   if (isError) {
  //     toast.error("Error While fetching products");
  //   }
  //   const { mutate } = useToggleProduct();
  //   const toggleOneProduct = (id: string, status: boolean) => {
  //     const confirmToggle = async () => {
  //       toast.dismiss();
  //       if (!id) {
  //         toast.error(" id missing");
  //         return;
  //       }

  //       const data = {
  //         id,
  //         status,
  //       };

  //       toast.dismiss();
  //       toast.loading(
  //         `${status ? "Product inactivating" : "product activating"}`
  //       );
  //       mutate(data, {
  //         onError: (error: any) => {
  //           toast.dismiss();
  //           toast.error(
  //             error?.response?.data?.message || "Error while Toggling product"
  //           );
  //         },
  //         onSuccess: () => {
  //           toast.dismiss();
  //           toast.success(
  //             `${
  //               status
  //                 ? "Product inactivated successfully"
  //                 : "product activated successfully"
  //             }`,
  //             {
  //               duration: 3000,
  //               style: {
  //                 background: "green",
  //               },
  //             }
  //           );
  //         },
  //       });
  //     };

  //     const cancelToggle = () => {
  //       toast.dismiss();
  //     };

  //     toast.info(
  //       <div>
  //         <p>{`${
  //           status ? "Want Inactivate this Item?" : "Want Activate this Item?"
  //         } `}</p>
  //         <div className="flex gap-2 justify-center mt-2 ">
  //           <button
  //             onClick={() => confirmToggle()}
  //             className="bg-red-500 text-white px-3 py-1 rounded"
  //           >
  //             OK
  //           </button>
  //           <button
  //             onClick={cancelToggle}
  //             className="bg-green-400 text-white px-3 py-1 rounded"
  //           >
  //             Cancel
  //           </button>
  //         </div>
  //       </div>,
  //       {
  //         duration: Infinity,
  //       }
  //     );
  //   };
  //   const handleCategory = async (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     setSelectedCategory(e.target.value);
  //   };
  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        addUser &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setAddUser(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [addUser]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resetPassword &&
        secondRef.current &&
        !secondRef.current.contains(event.target as Node)
      ) {
        setResetPassword(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [resetPassword]);
  return (
    <div
      className={`w-full h-full flex flex-col bg-gradient-to-br from-green-400 to-white `}
    >
      {!isShow && (
        <>
          <div className="w-full flex justify-between items-center pb-7">
            <h1 className="text-3xl font-bold text-primary pb-2 sticky p-5">
              User Details
            </h1>

            <div className="flex justify-end gap-x-2">
              <input
                className="px-4 py-1 outline-none border-2 border-gray-600 rounded-md"
                type="text"
                name=""
                id=""
                placeholder="Search by name..."
              />
              <button
                onClick={() => setAddUser(!addUser)}
                className="flex items-center gap-1 font-bold  rounded-md px-4 py-1  border-2 border-gray-600 cursor-pointer"
              >
                Add user
              </button>
            </div>
          </div>

          <div className="w-full text-left border-none flex justify-between rounded-md">
            <div className="w-full flex justify-center items-center">
              <CommonTable
                fields={["SI.No", "Name", "Email", "Actions"]}
                data={users ?? []}
                formatRow={(users, index) => (
                  <tr
                    className="text-sm font-semibold cursor-pointer"
                    key={users.id}
                    // onClick={() => navigate(`/products/${product.id}`)}
                  >
                    <td className="w-1/12 border border-gray-400 p-2">
                      {index + 1}
                    </td>
                    <td className="w-2/6 h-14 border border-gray-400 p-1">
                      Anzarshah
                    </td>
                    <td className="w-4/12 border border-gray-400 p-2">
                      anuanzar3240@gmail.com
                    </td>

                    <td className="w-4/12 border border-gray-400 p-2">
                      <div className="flex gap-x-3 items-center">
                        <button className="flex items-center gap-1 font-bold  rounded-md px-4 py-1 bg-red-400 cursor-pointer">
                          Block
                        </button>
                        <button
                          onClick={() => setResetPassword(!resetPassword)}
                          className="flex items-center gap-1 font-bold  rounded-md px-4 py-1 bg-blue-400 cursor-pointer"
                        >
                          Reset-password
                        </button>
                        <button className="flex items-center gap-1 font-bold text-2xl  rounded-md px-4 py-1 cursor-pointer">
                          <MdDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              />
            </div>
          </div>

          {/* {isLoading && (
            <div
              role="status"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}

          {isSuccess && Array.isArray(products) && products.length === 0 && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-3xl text-secondary">No Product Found</h1>
            </div>
          )}
       */}

          {/* Modal Section */}
          {addUser && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50">
              <div ref={modalRef} className="w-1/3">
                <AddUser />
              </div>
            </div>
          )}

          {resetPassword && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50">
              <div ref={secondRef} className="w-1/3">
                <ResetPassword />
              </div>
            </div>
          )}
        </>
      )}

      <Outlet />
    </div>
  );
};

export default Users;
