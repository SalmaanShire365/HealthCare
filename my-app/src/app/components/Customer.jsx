'use client';
import { PlusIcon, BuildingOffice2Icon, HomeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-16 bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Who We Serve</h2>
        <p className="mt-4 text-lg text-gray-700">
          At our organization, we are dedicated to providing top-notch services to a diverse range of individuals and organizations. Here’s a look at who we serve:
        </p>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-12">
          <div className="flex flex-col items-center text-center">
            <PlusIcon className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Healthcare Providers</h3>
            <p className="mt-2 text-gray-600">
              We offer specialized services and solutions tailored for hospitals, clinics, and other healthcare facilities.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <BuildingOffice2Icon className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Medical Professionals</h3>
            <p className="mt-2 text-gray-600">
              Our services support doctors, nurses, and other medical professionals in their quest for quality care.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <HomeIcon className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Home Care</h3>
            <p className="mt-2 text-gray-600">
              We provide essential services and support for individuals requiring home-based care and assistance.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <PhoneIcon className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Businesses</h3>
            <p className="mt-2 text-gray-600">
              Our solutions are also available to businesses looking to enhance their employee wellness programs and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
