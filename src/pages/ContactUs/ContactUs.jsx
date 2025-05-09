import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto">
      <div className="w-[562px] mt-[128px] mx-auto flex flex-col gap-4 justify-center items-center">
        <h3 className="text-[48px] font-bold">Contact Us</h3>
        <p className="text-center opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <div className="bg-[#F4F6FC] py-12 px-8  mt-[64px]">
        <div className="max-w-[1061px] w-full mx-auto p-10 rounded-lg ">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Subject</label>
              <input
                type="text"
                placeholder="Provide context"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Subject</label>
              <input
                type="text"
                placeholder="Select Subject"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col">
              <label className="text-sm font-semibold mb-1">Message</label>
              <textarea
                placeholder="Write your question here"
                rows="5"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
              ></textarea>
            </div>
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="bg-[#292D32] text-white px-6 py-3 rounded-full hover:bg-[#1f2328] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
