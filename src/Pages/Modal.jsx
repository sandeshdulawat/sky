import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { toast } from "react-toastify";
import { fireDB } from "../Firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { ImCross } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

export default function MyModal({ buttonText }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const navigate = useNavigate();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsRegistered(false);
  };

  const signup = async () => {
    if (!name || !email || !phoneNumber || !selectedPropertyType || !selectedLocation) {
      return toast.error("All fields are required");
    }
    try {
      const user = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        propertyType: selectedPropertyType,
        location: selectedLocation,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Registration completed");
      setName("");
      setEmail("");
      setPhoneNumber("");
      setSelectedPropertyType("");
      setSelectedLocation("");
      setIsRegistered(true);
      setTimeout(() => {
        closeModal();
        navigate("/Thank-You");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <button onClick={openModal}>{buttonText}</button>
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
                <Dialog.Panel className="relative">
                  {!isRegistered && (
                    <form className="rounded-2xl bg-gray-100 overflow-hidden text-left align-middle shadow-xl transition-all ">
                      <div className="md:flex  ">
                        <div className="md:w-80 max-w-96">
                          <picture>
                            <source
                              media="(max-width: 900px)"
                              srcSet="https://media.designcafe.com/wp-content/uploads/2024/04/01004030/home-interior-offer-m.jpg"
                            />
                            <img
                              className="w-full h-fit bg-cover bg-center bottom-0 left-0"
                              src="https://media.designcafe.com/wp-content/uploads/2024/04/01004018/home-interior-offer-d.jpg"
                              alt="image"
                            />
                          </picture>
                        </div>
                        <div className="max-w-96 p-4 space-y-4">
                          <div>
                            <h1 className="capitalize font-bold text-lg">
                              Get a Free <span className="text-primary"> Design</span> Consultation
                            </h1>
                          </div>
                          <div>
                            <input
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              name="name"
                              placeholder="Full Name"
                              className="p-2 lg:p-2 w-full rounded-lg bg-white shadow-sm placeholder:text-sm"
                            />
                          </div>
                          <div>
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              name="email"
                              placeholder="Email Address"
                              className="p-2 lg:p-2 w-full rounded-lg bg-white shadow-sm placeholder:text-sm"
                            />
                          </div>
                          <div>
                            <input
                              placeholder="Phone number"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              className="p-2 lg:p-2 w-full rounded-lg shadow-sm placeholder:text-sm"
                            />
                          </div>
                          <div>
                            <select
                              value={selectedPropertyType}
                              onChange={(e) => setSelectedPropertyType(e.target.value)}
                              className="p-2 lg:p-2 w-full rounded-lg shadow-sm"
                            >
                              <option value="">Select Property Type</option>
                              <option value="1BHK">1BHK</option>
                              <option value="2BHK">2BHK</option>
                              <option value="3BHK">3BHK</option>
                              <option value="4BHK">4BHK / Duplex</option>
                            </select>
                          </div>
                          <div>
                            <select
                              value={selectedLocation}
                              onChange={(e) => setSelectedLocation(e.target.value)}
                              className="p-2 lg:p-2 w-full rounded-lg shadow-sm"
                            >
                              <option value="">Select Location</option>
                              <option value="Mumbai">Mumbai</option>
                              <option value="Navi Mumbai">Navi Mumbai</option>
                            </select>
                          </div>
                          <div className="flex items-start py-2 gap-2">
                          <input type="checkbox" required checked />
                            <p className="flex items-center gap-1 text-xs text-wrap capitalize drop-shadow-md">
                              get exclusive quotes & offers on whatsapp <BsWhatsapp color="green" />
                            </p>
                          </div>
                          <div className="mt-4 w-fit mx-auto">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:translate-y-0.5 duration-200"
                              onClick={signup}
                            >
                              book a free Consultation
                            </button>
                          </div>
                          <div>
                            <p className="text-xs capitalize drop-shadow-md">
                              By Submitting, you consent to <Link to="/PrivacyPolicy" className="text-primary">Privacy Policy</Link> and <Link to="/TermsOfUse" className="text-primary">terms of use</Link> 
                            </p>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                  <ImCross color="white"
                    onClick={closeModal}
                    className="text-3xl absolute -top-4 -right-4 rounded-full bg-primary p-2 shadow shadow-secondary"
                  />
                  {isRegistered && (
                    <div className="text-center">
                      <p>Registration completed!</p>
                      <Link to="/">Go to Home</Link>
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
