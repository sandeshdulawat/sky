import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";

function PrivacyPolicy() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <Layout>
      <div className="container my-12 text-wrap space-y-6 max-w-screen-lg">
        <div className="space-y-2">
          <h1 className="text-5xl uppercase text-center font-medium">
            Privacy Policy
          </h1>
          <p className="text-center text-xs">
            last updated february 23rd, 2024
          </p>
        </div>
        <div className="text-md font-medium text-center">
          <p>
            We are an official channel partner of the Lodha Group, is committed
            to safeguarding the privacy of our website visitors and users. This
            Privacy Policy outlines how we collect, use, share, and protect your
            personal information.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-md font-semibold">Information We Collect:</h1>
          <p className="text-sm text-gray-600 pl-2">
            We may collect personal information, including but not limited to,
            your name, contact details, and any other information you
            voluntarily provide when using our website or engaging with our
            services.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-md font-semibold">
            How We Use Your Information:
          </h1>
          <p className="text-sm text-gray-600 pl-2">
            We use your personal information to:
          </p>
          <ul className="list-decimal pl-10 text-sm text-gray-600">
            <li>
                <a href="">Facilitate and personalize your experience on our website.</a></li>
            <li>
              Respond to your inquiries and provide information about our
              services.
            </li>
            <li>Communicate updates, promotions, and relevant offerings.</li>
            <li>
              Improve our website and services based on your feedback and
              preferences.
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h1 className="text-md font-semibold">Information Sharing:</h1>
          <p className="text-sm text-gray-600 pl-2">
            We may share your personal information with the Lodha Group as
            necessary for the provision of services and as outlined in our
            agreements. We do not sell or disclose your information to third
            parties for their marketing purposes.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-md font-semibold">Data Security:</h1>
          <p className="text-sm text-gray-600 pl-2">
            We implement reasonable security measures to protect your personal
            information from unauthorized access, disclosure, alteration, and
            destruction.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-md font-semibold">Your Choices:</h1>
          <p className="text-sm text-gray-600 pl-2">
            You have the right to opt-out of receiving promotional
            communications from us and can update your preferences at any time.
            You may also request the removal of your personal information from
            our records.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-md font-semibold">Cookies:</h1>
          <p className="text-sm text-gray-600 pl-2">
            Our website uses cookies to enhance your browsing experience. You
            can manage your cookie preferences through your browser settings.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-md font-semibold">Third-Party Links:</h1>
          <p className="text-sm text-gray-600 pl-2">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these websites.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-md font-semibold">
            Changes to the Privacy Policy:
          </h1>
          <p className="text-sm text-gray-600 pl-2">
            We reserve the right to update this Privacy Policy periodically. Any
            changes will be posted on this page with the revised date.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-md font-medium">Contact Us:</h1>
          <p className="text-sm text-gray-600 pl-2">
            For questions or concerns regarding this Privacy Policy, please
            contact us at 9820667042.
          </p>
          <p className="text-sm text-gray-600 pl-2">
            By using our website, you consent to the terms outlined in this
            Privacy Policy.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default PrivacyPolicy;
