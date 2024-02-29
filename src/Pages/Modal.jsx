import { Dialog, Transition } from "@headlessui/react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth, fireDB } from "../Firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { ImCross } from "react-icons/im";
import "react-phone-number-input/style.css";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import "./rainyeffect.css";

export default function MyModal({ buttonText }) {
  let [isOpen, setIsOpen] = useState(false);
  let [isRegistered, setIsRegistered] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setIsRegistered(false); // Reset registration status when closing the modal
  }

  function openModal() {
    setIsOpen(true);
  }

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  // const signup = async () => {
  //   if (name === "" || email === "" || password === "") {
  //     return toast.error("All fields are required");
  //   }
  //   try {
  //     const users = await createUserWithEmailAndPassword(auth, email, password);

  //     const user = {
  //       name: name,
  //       uid: users.user.uid,
  //       email: users.user.email,
  //       time: Timestamp.now(),
  //     };
  //     const userRef = collection(fireDB, "users");
  //     await addDoc(userRef, user);
  //     toast.success("Registration completed");
  //     setName("");
  //     setEmail("");
  //     setPassword("");
  //     setIsRegistered(true); // Set registration status to true after successful registration
  //     setTimeout(() => {
  //       closeModal();
  //     }, 3000);
  //     navigate("/Thank-You");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    if (name === "" || email === "" || password === "") {
      return toast.error("All fields are required");
    }
    try {
      const user = {
        name: name,
        email: email,
        number: password,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Registration completed");
      setName("");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        navigate("/Thank-You");
      }, 3000);
    } catch (error) {
      console.log(error);
    }


  };

  return (
    <>
      <div className="">
        <button onClick={openModal} className="">
          {buttonText}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-gray-100 p-4 text-left align-middle shadow-xl transition-all relative">
                  <div
                    className="w-full h-28 lg:h-36 overflow-hidden rounded-t-lg relative text-center mx-auto "
                    id="background"
                  >
                    {/* <h1 className="w-full mt-10 mx-auto text-4xl lg:text-6xl font-pro font-semibold text-tertiary uppercase">
                      register
                    </h1> */}
                  </div>
                  <p className="text-center text-xs py-2 text-primary font-monst shadow-md">
                    Curious about extraordinary living? Fill in the details to
                    view your dream home now!
                  </p>
                  <ImCross
                    onClick={closeModal}
                    className="text-3xl absolute top-5 right-5 rounded-full bg-tertiary p-2 shadow shadow-primary"
                  />
                  {!isRegistered && (
                    <form action="" className=" space-y-2 mt-6">
                      <div>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          name="name"
                          placeholder="Full Name"
                          className="p-2 lg:p-3  w-full rounded-lg bg-white shadow-sm placeholder:text-sm"
                        />
                      </div>
                      <div>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          placeholder="Email Address"
                          className="p-2 lg:p-3 w-full rounded-lg bg-white shadow-sm placeholder:text-sm"
                        />
                        {/* <p className="text-xs ml-2 text-gray-600">*optional</p> */}
                      </div>
                      <div>
                        <input
                          placeholder="Phone number"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="p-2 lg:p-3 w-full rounded-lg shadow-sm placeholder:text-sm"
                        />
                      </div>
                      <div className="flex items-start py-2 gap-2">
                        <input type="checkbox" required checked />
                        <p className="text-xs text-wrap drop-shadow-md">
                          I consent to the use of my provided data in accordance
                          with the privacy policy.
                        </p>
                      </div>
                    </form>
                  )}
                  {isRegistered && (
                    <div className="text-center">
                      <p>Registration completed!</p>
                      <Link to="/">Go to Home</Link>
                    </div>
                  )}

                  {!isRegistered && (
                    <div className="mt-4 w-fit mx-auto">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-tertiary hover:translate-y-0.5 duration-200"
                        onClick={signup}
                      >
                        View Project Detail
                      </button>
                    </div>
                  )}
                  <div className="flex justify-between align-bottom text-xs text-nowrap pt-6 text-gray-500">
                    <p>Instant Call Back</p>|<p>Free Site Visit</p>|
                    <p>Unmatched Price</p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
